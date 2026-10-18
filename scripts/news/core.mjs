import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export const QUALITY_THRESHOLD = 80;
export const MAX_DAILY_ARTICLES = 2;
const NEWS_ROOT = path.resolve(process.cwd(), "content", "news");

export function decodeXml(value = "") {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractSourceText(html = "") {
  return decodeXml(html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " "))
    .slice(0, 12_000);
}

function firstTag(block, names) {
  for (const name of names) {
    const match = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i"));
    if (match) return decodeXml(match[1]);
  }
  return "";
}

function atomLink(block) {
  const match = block.match(/<link\b[^>]*href=["']([^"']+)["'][^>]*>/i);
  return match ? decodeXml(match[1]) : "";
}

export function parseFeedWithDiagnostics(xml, feed) {
  const blocks = [...xml.matchAll(/<(item|entry)\b[^>]*>([\s\S]*?)<\/\1>/gi)].map((match) => match[2]);
  const rejected = { missingRequiredFields: 0, invalidUrl: 0, disallowedHost: 0, invalidDate: 0 };
  const items = blocks.flatMap((block) => {
    const title = firstTag(block, ["title"]);
    const rawLink = firstTag(block, ["link", "guid", "id"]) || atomLink(block);
    const summary = firstTag(block, ["description", "summary", "content:encoded", "content"]);
    const dateValue = firstTag(block, ["pubDate", "published", "updated", "dc:date"]);
    if (!title || !rawLink) { rejected.missingRequiredFields += 1; return []; }
    try {
      const url = new URL(rawLink);
      if (!feed.allowedHosts.includes(url.hostname.toLowerCase())) { rejected.disallowedHost += 1; return []; }
      url.hash = "";
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => url.searchParams.delete(key));
      if (Number.isNaN(Date.parse(dateValue))) { rejected.invalidDate += 1; return []; }
      const publishedAt = new Date(dateValue).toISOString();
      return [{ title, url: url.toString(), summary, publishedAt, feed }];
    } catch {
      rejected.invalidUrl += 1;
      return [];
    }
  });
  return { items, diagnostics: { entries: blocks.length, accepted: items.length, rejected } };
}

export function parseFeed(xml, feed) {
  return parseFeedWithDiagnostics(xml, feed).items;
}

export function normalizeText(value) {
  return value.toLowerCase().normalize("NFKC").replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
}

function tokens(value) {
  return new Set(normalizeText(value).split(" ").filter((token) => token.length > 1));
}

const EVENT_STOPWORDS = new Set(["the", "and", "for", "with", "from", "that", "this", "new", "news", "pet", "pets", "animal", "animals", "대한", "관련", "새로운", "반려동물"]);

function eventTokens(item) {
  return new Set([...tokens(`${item.title} ${item.summary}`)].filter((token) => !EVENT_STOPWORDS.has(token) && token.length >= 3));
}

export function jaccardSimilarity(left, right) {
  const a = tokens(left);
  const b = tokens(right);
  if (!a.size || !b.size) return 0;
  const intersection = [...a].filter((token) => b.has(token)).length;
  return intersection / (a.size + b.size - intersection);
}

export function sourceOverlapRatio(articleText, sourceTexts, shingleSize = 8) {
  const articleTokens = normalizeText(articleText).split(" ").filter(Boolean);
  if (articleTokens.length < shingleSize) return 0;
  const articleShingles = Array.from({ length: articleTokens.length - shingleSize + 1 }, (_, index) => articleTokens.slice(index, index + shingleSize).join(" "));
  const sourceShingles = new Set(sourceTexts.flatMap((text) => {
    const sourceTokens = normalizeText(text).split(" ").filter(Boolean);
    return Array.from({ length: Math.max(0, sourceTokens.length - shingleSize + 1) }, (_, index) => sourceTokens.slice(index, index + shingleSize).join(" "));
  }));
  return articleShingles.filter((shingle) => sourceShingles.has(shingle)).length / articleShingles.length;
}

export function attachCorroboratingSources(items) {
  return items.map((item) => {
    const primaryHost = new URL(item.url).hostname.toLowerCase();
    const primaryTokens = eventTokens(item);
    const corroboratingSources = items.filter((other) => {
      if (other === item || new URL(other.url).hostname.toLowerCase() === primaryHost) return false;
      if (Math.abs(Date.parse(other.publishedAt) - Date.parse(item.publishedAt)) > 7 * 86_400_000) return false;
      const shared = [...primaryTokens].filter((token) => eventTokens(other).has(token)).length;
      return shared >= 2 && jaccardSimilarity(`${item.title} ${item.summary}`, `${other.title} ${other.summary}`) >= 0.16;
    }).slice(0, 3);
    return { ...item, corroboratingSources };
  });
}

export function selectCorroboratedPrimaries(items) {
  return items.filter((item) => {
    if (!item.corroboratingSources?.length) return false;
    const ranked = [item, ...item.corroboratingSources].sort((left, right) => (right.feed.reliability ?? 0) - (left.feed.reliability ?? 0) || left.url.localeCompare(right.url));
    return ranked[0].url === item.url;
  });
}

export function isTrustedPrimaryEvidence(candidate) {
  return candidate?.feed?.primaryEvidence === true
    && ["official", "research"].includes(candidate.feed.evidenceType)
    && (candidate.feed.reliability ?? 0) >= 22;
}

export function selectEvidencePrimaries(items) {
  const corroboratedUrls = new Set(selectCorroboratedPrimaries(items).map(({ url }) => url));
  return items.filter((item) => corroboratedUrls.has(item.url) || isTrustedPrimaryEvidence(item));
}

export function selectApiCandidates(candidates, remainingToday) {
  const limit = Math.min(remainingToday * 8, 16);
  // Rotate across independently eligible topics and publishers before revisiting a group.
  // Never relax corroboration, source trust, duplicate, or editorial publication gates.
  const groups = new Map();
  for (const candidate of candidates) {
    const text = normalizeText(`${candidate.title} ${candidate.summary}`);
    const topic = /\b(dog|cat|pet|veterinar|animal|puppy|kitten|groom|food)\b|반려동물|강아지|고양이/.test(text)
      ? "pet" : /\b(video|film|image|animation|creator|music)\b|영상|이미지|애니메이션/.test(text)
        ? "creative" : "technology";
    const key = `${topic}:${candidate.feed?.name ?? candidate.feed?.id ?? "unknown"}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(candidate);
  }
  const selected = [];
  while (selected.length < limit && [...groups.values()].some((items) => items.length)) {
    for (const items of groups.values()) {
      if (selected.length >= limit) break;
      if (items.length) selected.push(items.shift());
    }
  }
  return selected;
}

export function isRelevant(item) {
  const haystack = ` ${normalizeText(`${item.title} ${item.summary} ${item.sourceText ?? ""}`)} `;
  const animalTerms = ["pet", "dog", "cat", "puppy", "kitten", "animal", "veterinary", "grooming", "petfood", "반려동물", "강아지", "고양이", "펫테크", "동물병원", "애견"];
  const creativeTerms = ["video", "image", "creator", "film", "animation", "music", "editing", "content creation", "영상", "이미지", "콘텐츠", "애니메이션"];
  const technologyTerms = [" ai ", "artificial intelligence", "generative", "model", "tool", "software", "인공지능", "생성형", "도구"];
  const includes = (term) => haystack.includes(` ${normalizeText(term)} `);
  return animalTerms.some(includes) || (creativeTerms.some(includes) && technologyTerms.some(includes));
}

export function isFresh(item, now = new Date()) {
  const ageMs = now.getTime() - Date.parse(item.publishedAt);
  return ageMs >= -86_400_000 && ageMs <= 14 * 86_400_000;
}

export function freshnessReason(item, now = new Date()) {
  const ageMs = now.getTime() - Date.parse(item.publishedAt);
  if (ageMs < -86_400_000) return "future";
  if (ageMs > 14 * 86_400_000) return "too_old";
  return "fresh";
}

export function sourceId(url) {
  return crypto.createHash("sha256").update(url).digest("hex");
}

export function slugify(value) {
  const ascii = normalizeText(value).replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 72).replace(/^-|-$/g, "");
  return ascii || `pet-news-${sourceId(value).slice(0, 12)}`;
}

export function deduplicateCandidates(items, existingArticles) {
  const knownUrls = new Set(existingArticles.map((article) => article.source?.url).filter(Boolean));
  const accepted = [];
  for (const item of items.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))) {
    if (knownUrls.has(item.url)) continue;
    const text = `${item.title} ${item.summary} ${item.sourceText ?? ""}`;
    const duplicate = [...existingArticles, ...accepted].some((other) => {
      const otherText = `${other.title} ${other.description ?? other.summary ?? ""}`;
      return jaccardSimilarity(text, otherText) >= 0.72;
    });
    if (!duplicate) accepted.push(item);
  }
  return accepted;
}

export function deterministicChecks(article, candidate, existingArticles) {
  const joined = `${article.title} ${article.description} ${article.sections.flatMap((section) => section.paragraphs).join(" ")}`;
  const maxSimilarity = existingArticles.reduce((max, existing) => Math.max(max, jaccardSimilarity(joined, `${existing.title} ${existing.description} ${existing.sections?.flatMap((section) => section.paragraphs).join(" ") ?? ""}`)), 0);
  const sourceHost = new URL(candidate.url).hostname.toLowerCase();
  const sourceValid = candidate.feed.allowedHosts.includes(sourceHost) && article.source.url === candidate.url;
  const sourceTexts = [candidate, ...(candidate.corroboratingSources ?? [])].map((source) => `${source.title ?? ""} ${source.summary ?? ""} ${source.sourceText ?? ""}`);
  const sourceCopyRatio = sourceOverlapRatio(joined, sourceTexts);
  const seoValid = article.title.length >= 18 && article.title.length <= 70
    && article.description.length >= 70 && article.description.length <= 170
    && article.keywords.length >= 3 && article.keywords.length <= 8
    && article.sections.length >= 3;
  const editorialAnalysisValid = [
    article.editorialAnalysis?.fourfeetzAnalysis,
    article.editorialAnalysis?.koreanIndustryImplications,
    article.editorialAnalysis?.readerLimitations,
  ].every((items) => Array.isArray(items) && items.length >= 2 && items.every((item) => typeof item === "string" && item.trim().length >= 10));
  const spamPattern = /(무조건|기적의|100%|지금 구매|수익 보장|완치|즉시 치료)/i;
  const unsafeMedicalPattern = /(약을 끊|복용량을 늘|수의사 대신|진단 없이 치료|반드시 투약)/i;
  const hardBlocks = [];
  if (!sourceValid) hardBlocks.push("unclear_source");
  if (maxSimilarity >= 0.72) hardBlocks.push("duplicate_content");
  if (sourceCopyRatio >= 0.18) hardBlocks.push("source_copy_risk");
  if (spamPattern.test(joined)) hardBlocks.push("advertising_or_spam");
  if (unsafeMedicalPattern.test(joined)) hardBlocks.push("unsafe_medical_advice");
  if (article.sourceFacts.length < 2) hardBlocks.push("insufficient_source_facts");
  if (!editorialAnalysisValid) hardBlocks.push("missing_editorial_analysis");
  const corroboratingSources = candidate.corroboratingSources ?? [];
  const distinctCorroboration = corroboratingSources.filter((source) => new URL(source.url).hostname.toLowerCase() !== sourceHost);
  const declaredUrls = new Set((article.corroboratingSources ?? []).map((source) => source.url));
  const allowedEvidenceUrls = new Set([candidate.url, ...corroboratingSources.map((source) => source.url)]);
  const verifiedClaims = Array.isArray(article.verifiedClaims) ? article.verifiedClaims : [];
  const claimsHaveIndependentEvidence = verifiedClaims.length >= 2 && verifiedClaims.every((claim) => {
    const evidenceUrls = [...new Set((claim.evidence ?? []).map((evidence) => evidence.sourceUrl))];
    const hosts = new Set(evidenceUrls.filter((url) => allowedEvidenceUrls.has(url)).map((url) => new URL(url).hostname.toLowerCase()));
    return evidenceUrls.length >= 2 && evidenceUrls.every((url) => allowedEvidenceUrls.has(url)) && hosts.size >= 2;
  });
  const conditionalPrimaryEvidence = isTrustedPrimaryEvidence(candidate)
    && distinctCorroboration.length === 0
    && article.evidenceScope?.independentVerificationAvailable === false
    && typeof article.evidenceScope?.conditionalPublicationReason === "string"
    && article.evidenceScope.conditionalPublicationReason.trim().length >= 20
    && Array.isArray(article.evidenceScope?.limitations)
    && article.evidenceScope.limitations.length >= 2
    && verifiedClaims.length >= 2
    && verifiedClaims.every((claim) => claim.evidence?.some(({ sourceUrl }) => sourceUrl === candidate.url) && typeof claim.limitation === "string" && claim.limitation.trim().length >= 10)
    && Array.isArray(article.editorialAnalysis?.readerLimitations)
    && article.editorialAnalysis.readerLimitations.length >= 2;
  const hasDeclaredIndependentSources = distinctCorroboration.length > 0 && distinctCorroboration.every((source) => declaredUrls.has(source.url));
  if (!hasDeclaredIndependentSources && !conditionalPrimaryEvidence) hardBlocks.push("insufficient_independent_sources");
  if (!claimsHaveIndependentEvidence && !conditionalPrimaryEvidence) hardBlocks.push("claim_evidence_missing");
  return { maxSimilarity, sourceCopyRatio, sourceValid, seoValid, editorialAnalysisValid, claimsHaveIndependentEvidence, conditionalPrimaryEvidence, hardBlocks };
}

export function scoreArticle(article, candidate, review, checks) {
  const sourceReliability = checks.sourceValid ? Math.min(25, candidate.feed.reliability) : 0;
  const originality = Math.max(0, Math.min(25, Math.round((review.originalityScore / 100) * 25 - checks.maxSimilarity * 25 - checks.sourceCopyRatio * 25)));
  const duplicateCheck = checks.maxSimilarity < 0.45 && review.duplicateFree ? 20 : checks.maxSimilarity < 0.6 ? 12 : 0;
  const seo = checks.seoValid && review.topicRelevant ? 15 : Math.min(8, review.seoScore);
  const safetyCopyright = review.safe && review.copyrightSafe && review.factsSupported
    && (review.failedClaims ?? []).length === 0 && (review.copyrightRisks ?? []).length === 0 ? 15 : 0;
  return { sourceReliability, originality, duplicateCheck, seo, safetyCopyright, total: sourceReliability + originality + duplicateCheck + seo + safetyCopyright };
}

export function publicationDecision(article, candidate, review, existingArticles) {
  const checks = deterministicChecks(article, candidate, existingArticles);
  const hardBlocks = [...checks.hardBlocks];
  if (!review.factsSupported) hardBlocks.push("unverified_facts");
  if (!review.copyrightSafe) hardBlocks.push("copyright_risk");
  if (!review.safe) hardBlocks.push("safety_risk");
  if (!review.duplicateFree) hardBlocks.push("ai_duplicate_flag");
  if (review.topicRelevant !== true) hardBlocks.push("off_topic");
  const conditionalPrimaryEvidenceAccepted = checks.conditionalPrimaryEvidence
    && review.factsSupported === true
    && review.evidenceBasis?.primaryMaterialAvailable === true
    && (review.failedClaims ?? []).length === 0
    && (review.crossVerificationFailures ?? []).length === 0;
  if ((!conditionalPrimaryEvidenceAccepted && (review.independentlyCorroborated !== true || review.corroboratedFactCount < 2)) || review.unsupportedFacts?.length) hardBlocks.push("cross_verification_failed");
  const score = scoreArticle(article, candidate, review, checks);
  if (candidate.curationMode === true) {
    // Source-attributed news briefs are not independent investigative reports.
    // The source must be explicitly named, every claim traceable, and the text original.
    const traceable = Array.isArray(article.verifiedClaims) && article.verifiedClaims.length >= 2
      && article.verifiedClaims.every((claim) => Array.isArray(claim.evidence)
        && claim.evidence.some((evidence) => evidence.sourceUrl === candidate.url));
    const existingDuplicate = (review.duplicateFindings ?? []).some((finding) => finding.category === "existing_article");
    const permitted = new Set(["insufficient_independent_sources", "claim_evidence_missing", "cross_verification_failed", "ai_duplicate_flag"]);
    const blocked = hardBlocks.filter((block) => !permitted.has(block));
    if (!traceable) blocked.push("unattributed_claims");
    if (existingDuplicate || checks.maxSimilarity >= 0.72) blocked.push("existing_article_duplicate");
    if (!review.duplicateFree && !(review.duplicateFindings ?? []).length) blocked.push("unexplained_duplicate_flag");
    if ((review.failedClaims ?? []).length || (review.copyrightRisks ?? []).length || (review.unsupportedFacts ?? []).length) blocked.push("unsupported_or_copyright_risk");
    return { publish: blocked.length === 0, score, hardBlocks: [...new Set(blocked)], checks: { ...checks, conditionalPrimaryEvidenceAccepted, curationMode: true } };
  }
  return { publish: hardBlocks.length === 0 && score.total >= QUALITY_THRESHOLD, score, hardBlocks, checks: { ...checks, conditionalPrimaryEvidenceAccepted } };
}

export function articlesPublishedOn(articles, isoDate) {
  const format = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" });
  return articles.filter((article) => format.format(new Date(article.publishedAt)) === isoDate).length;
}

export function assertNewsPath(target) {
  const resolved = path.resolve(target);
  if (resolved !== NEWS_ROOT && !resolved.startsWith(`${NEWS_ROOT}${path.sep}`)) throw new Error(`Refusing to write outside ${NEWS_ROOT}`);
  return resolved;
}

export function writeJsonSafely(target, value) {
  const resolved = assertNewsPath(target);
  fs.mkdirSync(path.dirname(resolved), { recursive: true });
  const temporary = `${resolved}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
  try {
    fs.renameSync(temporary, resolved);
  } catch (error) {
    if (!fs.existsSync(resolved) || !["EEXIST", "EPERM"].includes(error.code)) throw error;
    fs.copyFileSync(temporary, resolved);
    fs.unlinkSync(temporary);
  }
}

export function loadJsonFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter((name) => name.endsWith(".json")).flatMap((name) => {
    try { return [JSON.parse(fs.readFileSync(path.join(directory, name), "utf8"))]; } catch { return []; }
  });
}

