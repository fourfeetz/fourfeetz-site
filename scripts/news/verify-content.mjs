import fs from "node:fs";
import path from "node:path";
import { deterministicChecks, loadJsonFiles, QUALITY_THRESHOLD } from "./core.mjs";

const directory = path.join(process.cwd(), "content", "news", "ko");
const articles = loadJsonFiles(directory);
const englishDirectory = path.join(process.cwd(), "content", "news", "en");
const englishArticles = loadJsonFiles(englishDirectory);
const englishSlugs = new Set();
for (const translated of englishArticles) {
  const original = articles.find((article) => article.slug === translated.slug);
  if (!original || translated.schemaVersion !== 1 || translated.language !== "en" || translated.sourceUrl !== original.source.url) throw new Error(`Invalid English article pair: ${translated.slug}`);
  if (englishSlugs.has(translated.slug)) throw new Error(`Duplicate English slug: ${translated.slug}`);
  if (!Array.isArray(translated.sections) || translated.sections.length !== original.sections.length || !translated.sections.every((section, i) => typeof section.heading === "string" && Array.isArray(section.paragraphs) && section.paragraphs.length === original.sections[i].paragraphs.length)) throw new Error(`Invalid English article structure: ${translated.slug}`);
  if (!Array.isArray(translated.takeaway) || translated.takeaway.length !== original.takeaway.length) throw new Error(`Invalid English takeaway: ${translated.slug}`);
  englishSlugs.add(translated.slug);
}
for (const article of articles) if (!englishSlugs.has(article.slug)) throw new Error(`Missing English translation: ${article.slug}`);
const slugs = new Set();
const urls = new Set();

for (const article of articles) {
  if (article.schemaVersion !== 1 || article.language !== "ko") throw new Error(`Invalid schema: ${article.slug ?? "unknown"}`);
  if (!/^[a-z0-9-]+$/.test(article.slug) || slugs.has(article.slug)) throw new Error(`Invalid or duplicate slug: ${article.slug}`);
  if (urls.has(article.source?.url)) throw new Error(`Duplicate source URL: ${article.source.url}`);
  if ((article.quality?.total ?? 0) < QUALITY_THRESHOLD) throw new Error(`Below quality threshold: ${article.slug}`);
  if (!Array.isArray(article.corroboratingSources)) throw new Error(`Invalid corroborating sources: ${article.slug}`);
  const conditionalPrimary = article.corroboratingSources.length === 0
    && article.source?.primaryEvidence === true
    && ["official", "research"].includes(article.source?.evidenceType)
    && article.evidenceScope?.independentVerificationAvailable === false;
  if (article.corroboratingSources.length === 0 && !conditionalPrimary) throw new Error(`Missing independent or trusted primary source: ${article.slug}`);
  if (!Array.isArray(article.verifiedClaims) || article.verifiedClaims.length < 2) throw new Error(`Missing claim evidence: ${article.slug}`);
  if (!article.evidenceScope?.verificationBoundary || typeof article.evidenceScope?.independentVerificationAvailable !== "boolean" || typeof article.evidenceScope?.conditionalPublicationReason !== "string" || !Array.isArray(article.evidenceScope?.limitations) || article.evidenceScope.limitations.length < 2) throw new Error(`Missing evidence scope: ${article.slug}`);
  if (!article.editorialAnalysis || ![article.editorialAnalysis.fourfeetzAnalysis, article.editorialAnalysis.koreanIndustryImplications, article.editorialAnalysis.readerLimitations].every((items) => Array.isArray(items) && items.length >= 2)) throw new Error(`Missing editorial analysis: ${article.slug}`);
  const primaryHost = new URL(article.source.url).hostname;
  if (article.corroboratingSources.some((source) => new URL(source.url).hostname === primaryHost)) throw new Error(`Corroborating source is not independent: ${article.slug}`);
  if (!fs.existsSync(path.join(directory, `${article.slug}.json`))) throw new Error(`Filename/slug mismatch: ${article.slug}`);
  new URL(article.source.url);
  slugs.add(article.slug);
  urls.add(article.source.url);
}

// Recheck pairwise duplication independently of the stored model review.
for (let index = 0; index < articles.length; index += 1) {
  const peers = articles.filter((_, peerIndex) => peerIndex !== index);
  const candidate = { url: articles[index].source.url, feed: { allowedHosts: [new URL(articles[index].source.url).hostname], reliability: 25, primaryEvidence: articles[index].source.primaryEvidence === true, evidenceType: articles[index].source.evidenceType }, corroboratingSources: articles[index].corroboratingSources };
  const checks = deterministicChecks(articles[index], candidate, peers);
  if (checks.hardBlocks.includes("duplicate_content")) throw new Error(`Duplicate content: ${articles[index].slug}`);
  if (checks.hardBlocks.includes("source_copy_risk")) throw new Error(`Source copying risk: ${articles[index].slug}`);
  if (checks.hardBlocks.includes("claim_evidence_missing")) throw new Error(`Claim evidence invalid: ${articles[index].slug}`);
}

process.stdout.write(`Verified ${articles.length} published news article(s).\n`);

