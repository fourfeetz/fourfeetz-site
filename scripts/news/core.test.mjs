import assert from "node:assert/strict";
import test from "node:test";
import { assertNewsPath, attachCorroboratingSources, deduplicateCandidates, extractSourceText, freshnessReason, isFresh, isRelevant, jaccardSimilarity, parseFeed, parseFeedWithDiagnostics, publicationDecision, selectApiCandidates, selectCorroboratedPrimaries, selectEvidencePrimaries } from "./core.mjs";

const feed = { name: "Official", url: "https://example.org/feed", allowedHosts: ["example.org"], reliability: 25, topics: ["pet tech"] };

function verifiedArticle(overrides = {}) {
  const claims = ["두 출처가 같은 시범 운영을 보도했다.", "일정과 돌봄 기록을 연결하는 기능이 소개됐다."];
  return {
    title: "반려동물 돌봄 기록을 연결하는 새로운 시범 서비스 안내",
    description: "서로 다른 두 출처에서 확인된 반려동물 돌봄 기록 서비스의 공개 범위와 적용 한계를 한국 독자가 이해하기 쉽게 정리하고 실제 도입 전에 살펴볼 검증 범위도 함께 설명합니다.",
    keywords: ["반려동물", "돌봄 기록", "펫테크"], sourceFacts: claims,
    verifiedClaims: claims.map((claim) => ({ claim, limitation: "공개 자료 범위", evidence: [{ sourceUrl: "https://example.org/a", evidenceSummary: "첫 보도" }, { sourceUrl: "https://example.net/b", evidenceSummary: "독립 보도" }] })),
    editorialAnalysis: { fourfeetzAnalysis: ["기록 책임을 먼저 확인해야 합니다.", "도입 목적을 분명히 해야 합니다."], koreanIndustryImplications: ["국내 개인정보 기준을 확인해야 합니다.", "기존 업무 흐름과 연결성을 시험해야 합니다."], readerLimitations: ["실제 성과는 아직 확인되지 않았습니다.", "해외 결과를 국내에 일반화할 수 없습니다."] },
    evidenceScope: { sharedBasis: "공개 자료", verificationBoundary: "확인된 공개 범위", independentVerificationAvailable: true, conditionalPublicationReason: "서로 다른 두 출처가 확인했다.", limitations: ["공개 자료 범위", "성과 미검증"] },
    sections: [{ heading: "공개 범위", paragraphs: ["두 자료에서 확인된 내용을 설명합니다.", "성과를 확대 해석하지 않습니다."] }, { heading: "업무 의미", paragraphs: ["한국 독자가 이해할 맥락을 제공합니다.", "확인된 사실과 분석을 구분합니다."] }, { heading: "확인할 점", paragraphs: ["시범 운영이라는 한계가 있습니다.", "추가 자료를 살펴봐야 합니다."] }],
    source: { url: "https://example.org/a" }, corroboratingSources: [{ url: "https://example.net/b" }],
    ...overrides,
  };
}

function passingReview(overrides = {}) {
  return { factsSupported: true, copyrightSafe: true, safe: true, duplicateFree: true, topicRelevant: true, independentlyCorroborated: true, corroboratedFactCount: 2, unsupportedFacts: [], originalityScore: 100, seoScore: 15, safetyScore: 15, ...overrides };
}

test("parses RSS items and rejects links outside the configured source host", () => {
  const xml = `<rss><channel><item><title>Pet tech release</title><link>https://example.org/a?utm_source=x</link><description><![CDATA[New tool for pets]]></description><pubDate>Sat, 10 Oct 2026 01:00:00 GMT</pubDate></item><item><title>Injected</title><link>https://evil.example/a</link></item></channel></rss>`;
  const items = parseFeed(xml, feed);
  assert.equal(items.length, 1);
  assert.equal(items[0].url, "https://example.org/a");
});

test("decodes feeds that entity-encode a CDATA title wrapper", () => {
  const xml = `<rss><channel><item><title>&lt;![CDATA[AI use in veterinary care]]&gt;</title><link>https://example.org/a</link><pubDate>Sat, 10 Oct 2026 01:00:00 GMT</pubDate></item></channel></rss>`;
  assert.equal(parseFeed(xml, feed)[0].title, "AI use in veterinary care");
});

test("reports RSS parse rejection reasons separately", () => {
  const xml = `<rss><channel>
    <item><title>Accepted</title><link>https://example.org/a</link><pubDate>Sat, 10 Oct 2026 01:00:00 GMT</pubDate></item>
    <item><title>Wrong host</title><link>https://evil.example/a</link><pubDate>Sat, 10 Oct 2026 01:00:00 GMT</pubDate></item>
    <item><title>Bad date</title><link>https://example.org/b</link><pubDate>unknown</pubDate></item>
    <item><title>Missing link</title><pubDate>Sat, 10 Oct 2026 01:00:00 GMT</pubDate></item>
  </channel></rss>`;
  const result = parseFeedWithDiagnostics(xml, feed);
  assert.equal(result.items.length, 1);
  assert.deepEqual(result.diagnostics.rejected, { missingRequiredFields: 1, invalidUrl: 0, disallowedHost: 1, invalidDate: 1 });
});

test("relevance matching uses word boundaries and covers pet or AI creative topics", () => {
  assert.equal(isRelevant({ title: "New cat welfare research", summary: "Companion animal study" }), true);
  assert.equal(isRelevant({ title: "AI video editing model launches", summary: "Creator workflow tool" }), true);
  assert.equal(isRelevant({ title: "Education policy update", summary: "A general public notice" }), false);
});

test("freshness window accepts two-week reporting lag but rejects older and future items", () => {
  const now = new Date("2026-10-15T00:00:00Z");
  assert.equal(isFresh({ publishedAt: "2026-10-01T00:00:00Z" }, now), true);
  assert.equal(freshnessReason({ publishedAt: "2026-09-30T23:59:59Z" }, now), "too_old");
  assert.equal(freshnessReason({ publishedAt: "2026-10-16T00:00:01Z" }, now), "future");
});

test("extracts bounded source text without executable page content", () => {
  const text = extractSourceText("<article><h1>Pet update</h1><script>danger()</script><p>Verified details</p></article>");
  assert.equal(text, "Pet update Verified details");
});

test("removes exact source URLs and near-duplicate topics", () => {
  const existing = [{ title: "Connected pet care service launches", description: "Scheduling and care records for pet businesses", source: { url: "https://example.org/old" } }];
  const candidates = [
    { title: "Connected pet care service launches", summary: "Scheduling and care records for pet businesses", url: "https://example.org/new" },
    { title: "Different dog research", summary: "A separate study", url: "https://example.org/old" },
  ];
  assert.equal(deduplicateCandidates(candidates, existing).length, 0);
  assert.ok(jaccardSimilarity(candidates[0].title, existing[0].title) > 0.7);
});

test("links only a distinct publisher reporting the same event", () => {
  const candidates = [
    { title: "Connected scheduling and care records launch for pet businesses", summary: "The pilot connects daily care records and scheduling.", url: "https://example.org/a", publishedAt: "2026-10-10T01:00:00Z" },
    { title: "Pet businesses test connected scheduling and care records", summary: "An independent report confirms the care records pilot.", url: "https://example.net/b", publishedAt: "2026-10-10T03:00:00Z" },
    { title: "Connected scheduling and care records copied", summary: "The same publisher repeats its report.", url: "https://example.org/c", publishedAt: "2026-10-10T04:00:00Z" },
  ];
  const [primary] = attachCorroboratingSources(candidates);
  assert.deepEqual(primary.corroboratingSources.map(({ url }) => url), ["https://example.net/b"]);
});

test("does not treat generic shared veterinary words as independent corroboration", () => {
  const candidates = [
    { title: "Clinic center opens a new small animal location", summary: "Veterinary teams expanded services in Washington.", url: "https://example.org/a", publishedAt: "2026-10-10T01:00:00Z" },
    { title: "Small animal rotating internship returns", summary: "A veterinary education program resumes at a university.", url: "https://example.net/b", publishedAt: "2026-10-10T03:00:00Z" },
  ];
  assert.equal(attachCorroboratingSources(candidates)[0].corroboratingSources.length, 0);
});

test("selects one best primary per corroborated event", () => {
  const candidates = attachCorroboratingSources([
    { title: "Connected scheduling and care records launch for pet businesses", summary: "The pilot connects daily care records and scheduling.", url: "https://example.org/a", publishedAt: "2026-10-10T01:00:00Z", feed: { reliability: 25 } },
    { title: "Pet businesses test connected scheduling and care records", summary: "An independent report confirms the care records pilot.", url: "https://example.net/b", publishedAt: "2026-10-10T03:00:00Z", feed: { reliability: 23 } },
  ]);
  assert.deepEqual(selectCorroboratedPrimaries(candidates).map(({ url }) => url), ["https://example.org/a"]);
});

test("selects an allowlisted official or research primary without a second publisher", () => {
  const official = { title: "Official pet AI release", summary: "The official release documents two product facts.", url: "https://example.org/official", publishedAt: "2026-10-10T01:00:00Z", feed: { ...feed, primaryEvidence: true, evidenceType: "official" }, corroboratingSources: [] };
  const publisher = { ...official, url: "https://example.net/report", feed: { ...feed, allowedHosts: ["example.net"], primaryEvidence: false } };
  assert.deepEqual(selectEvidencePrimaries([official, publisher]).map(({ url }) => url), [official.url]);
});

test("rotates candidate groups even when feed metadata is missing", () => {
  const candidates = [
    { id: 1, title: "Veterinary care", summary: "New pet program" },
    { id: 2, title: "Video animation", summary: "New creative workflow", feed: { name: "Creative" } },
    { id: 3, title: "AI model", summary: "Technology update" },
    { id: 4, title: "Pet clinic", summary: "Animal health", feed: { name: "Pet" } },
  ];
  const selected = selectApiCandidates(candidates, 1);
  assert.equal(selected.length, 4);
  assert.deepEqual(new Set(selected.map(({ id }) => id)), new Set([1, 2, 3, 4]));
});

test("expands fallback candidate evaluation while respecting the daily publication limit", () => {
  const candidates = Array.from({ length: 12 }, (_, index) => ({ id: index }));
  assert.equal(selectApiCandidates(candidates, 1).length, 8);
  assert.equal(selectApiCandidates(candidates, 2).length, 12);
});

test("blocks publication when independent corroboration is absent", () => {
  const article = { title: "반려동물 서비스 기록 관리에 관한 새로운 공식 발표", description: "반려동물 서비스 사업자의 일정과 돌봄 기록을 연결하는 공개 자료의 핵심 내용과 확인 범위를 자세히 정리합니다.", keywords: ["반려동물", "기록", "서비스"], sourceFacts: ["시범 공개", "기록 연결"], sections: [{ heading: "하나", paragraphs: ["설명입니다.", "설명입니다."] }, { heading: "둘", paragraphs: ["설명입니다.", "설명입니다."] }, { heading: "셋", paragraphs: ["설명입니다.", "설명입니다."] }], source: { url: "https://example.org/a" }, corroboratingSources: [] };
  const review = { factsSupported: true, copyrightSafe: true, safe: true, duplicateFree: true, topicRelevant: true, independentlyCorroborated: true, corroboratedFactCount: 2, unsupportedFacts: [], originalityScore: 100, seoScore: 15, safetyScore: 15 };
  const decision = publicationDecision(article, { url: "https://example.org/a", feed, corroboratingSources: [] }, review, []);
  assert.equal(decision.publish, false);
  assert.ok(decision.hardBlocks.includes("insufficient_independent_sources"));
});

test("conditionally publishes verified official primary material with explicit limitations", () => {
  const officialFeed = { ...feed, reliability: 25, primaryEvidence: true, evidenceType: "official" };
  const candidate = { url: "https://example.org/a", feed: officialFeed, corroboratingSources: [] };
  const article = verifiedArticle({
    corroboratingSources: [],
    verifiedClaims: verifiedArticle().verifiedClaims.map((claim) => ({ ...claim, evidence: [{ sourceUrl: candidate.url, evidenceSummary: "공식 원자료에 명시됨" }], limitation: "공식 발표 범위이며 독립 검증되지 않았습니다." })),
    evidenceScope: { sharedBasis: "공식 발표 원자료", verificationBoundary: "공식 발표에 명시된 사실만 확인했습니다.", independentVerificationAvailable: false, conditionalPublicationReason: "허용 목록의 공식 원자료로 사실을 직접 확인했으나 독립 검증 자료는 아직 없습니다.", limitations: ["독립 검증 자료가 없습니다.", "발표 이후 성과는 확인되지 않았습니다."] },
  });
  const review = passingReview({ independentlyCorroborated: false, corroboratedFactCount: 0, evidenceBasis: { primaryMaterialAvailable: true, sharedOrigin: "공식 발표", independentResearchEvidence: false }, failedClaims: [], crossVerificationFailures: [] });
  const decision = publicationDecision(article, candidate, review, []);
  assert.equal(decision.checks.conditionalPrimaryEvidenceAccepted, true);
  assert.equal(decision.score.total, 100);
  assert.equal(decision.publish, true);
});

test("requires at least 80 points for conditional primary publication", () => {
  const officialFeed = { ...feed, reliability: 25, primaryEvidence: true, evidenceType: "research" };
  const candidate = { url: "https://example.org/a", feed: officialFeed, corroboratingSources: [] };
  const base = verifiedArticle();
  const article = verifiedArticle({ corroboratingSources: [], verifiedClaims: base.verifiedClaims.map((claim) => ({ ...claim, evidence: [{ sourceUrl: candidate.url, evidenceSummary: "연구 원자료" }], limitation: "독립 재현되지 않은 연구 범위입니다." })), evidenceScope: { sharedBasis: "연구 원자료", verificationBoundary: "연구가 보고한 범위만 확인했습니다.", independentVerificationAvailable: false, conditionalPublicationReason: "허용 목록의 연구 원자료를 직접 확인했으나 독립 재현 자료는 아직 없습니다.", limitations: ["독립 재현 없음", "표본 범위 제한"] } });
  const review = passingReview({ independentlyCorroborated: false, corroboratedFactCount: 0, originalityScore: 56, evidenceBasis: { primaryMaterialAvailable: true, sharedOrigin: "연구 원자료", independentResearchEvidence: false }, failedClaims: [], crossVerificationFailures: [] });
  const decision = publicationDecision(article, candidate, review, []);
  assert.equal(decision.score.total, 89);
  assert.equal(decision.hardBlocks.length, 0);
  assert.equal(decision.publish, true);
  const lowerReview = passingReview({ independentlyCorroborated: false, corroboratedFactCount: 0, originalityScore: 0, evidenceBasis: { primaryMaterialAvailable: true, sharedOrigin: "연구 원자료", independentResearchEvidence: false }, failedClaims: [], crossVerificationFailures: [] });
  const lowerDecision = publicationDecision(article, candidate, lowerReview, []);
  assert.ok(lowerDecision.score.total < 80);
  assert.equal(lowerDecision.publish, false);
});

test("official-source exception never bypasses fact, copyright, or disclosure failures", () => {
  const officialFeed = { ...feed, reliability: 25, primaryEvidence: true, evidenceType: "official" };
  const candidate = { url: "https://example.org/a", feed: officialFeed, corroboratingSources: [] };
  const base = verifiedArticle();
  const article = verifiedArticle({ corroboratingSources: [], verifiedClaims: base.verifiedClaims.map((claim) => ({ ...claim, evidence: [{ sourceUrl: candidate.url, evidenceSummary: "공식 원자료" }], limitation: "공식 발표 범위입니다." })), evidenceScope: { sharedBasis: "공식 발표", verificationBoundary: "공식 발표 범위", independentVerificationAvailable: false, conditionalPublicationReason: "짧음", limitations: ["한계 하나", "한계 둘"] } });
  const review = passingReview({ independentlyCorroborated: false, corroboratedFactCount: 0, factsSupported: false, copyrightSafe: false, evidenceBasis: { primaryMaterialAvailable: true, sharedOrigin: "공식 발표", independentResearchEvidence: false }, failedClaims: [{ subject: "주장", reason: "원자료에 없음", requiredEvidence: "공식 근거" }], crossVerificationFailures: [] });
  const decision = publicationDecision(article, candidate, review, []);
  assert.equal(decision.publish, false);
  assert.ok(decision.hardBlocks.includes("unverified_facts"));
  assert.ok(decision.hardBlocks.includes("copyright_risk"));
  assert.ok(decision.hardBlocks.includes("insufficient_independent_sources"));
});

test("blocks unsafe medical advice regardless of a high AI score", () => {
  const article = { title: "반려동물 건강 관리에서 확인할 중요한 새로운 안내", description: "공식 자료를 바탕으로 보호자가 확인해야 할 안전한 정보와 적용 범위를 충분히 정리한 기사입니다.", keywords: ["반려동물", "건강", "안전"], sourceFacts: ["안내 공개", "범위 설명"], sections: [{ heading: "안내", paragraphs: ["수의사 대신 이 방법을 따르면 된다.", "복용량을 늘려야 한다."] }, { heading: "내용", paragraphs: ["설명입니다.", "설명입니다."] }, { heading: "범위", paragraphs: ["설명입니다.", "설명입니다."] }], source: { url: "https://example.org/a" } };
  article.corroboratingSources = [{ name: "Independent", url: "https://example.net/a", publishedAt: "2026-10-10T00:00:00Z" }];
  const review = { factsSupported: true, copyrightSafe: true, safe: true, duplicateFree: true, topicRelevant: true, independentlyCorroborated: true, corroboratedFactCount: 2, unsupportedFacts: [], originalityScore: 100, seoScore: 15, safetyScore: 15 };
  const decision = publicationDecision(article, { url: "https://example.org/a", feed, corroboratingSources: [{ url: "https://example.net/a" }] }, review, []);
  assert.equal(decision.publish, false);
  assert.ok(decision.hardBlocks.includes("unsafe_medical_advice"));
});

test("reports each AI quality block independently", () => {
  const candidate = { url: "https://example.org/a", feed, corroboratingSources: [{ url: "https://example.net/b", title: "독립 보도", summary: "같은 시범 운영" }] };
  const cases = [
    ["unverified_facts", { factsSupported: false }],
    ["copyright_risk", { copyrightSafe: false }],
    ["ai_duplicate_flag", { duplicateFree: false }],
    ["cross_verification_failed", { independentlyCorroborated: false }],
  ];
  for (const [expected, override] of cases) {
    const decision = publicationDecision(verifiedArticle(), candidate, passingReview(override), []);
    assert.ok(decision.hardBlocks.includes(expected));
  }
});

test("uses deterministic SEO and hard safety results instead of unexplained AI subscore deductions", () => {
  const candidate = { url: "https://example.org/a", feed: { ...feed, reliability: 22 }, corroboratingSources: [{ url: "https://example.net/b" }] };
  const decision = publicationDecision(verifiedArticle(), candidate, passingReview({ originalityScore: 84, seoScore: 7, safetyScore: 9, failedClaims: [], copyrightRisks: [] }), []);
  assert.equal(decision.score.seo, 15);
  assert.equal(decision.score.safetyCopyright, 15);
  assert.equal(decision.score.total, 93);
  assert.equal(decision.publish, true);
});

test("blocks a claim whose evidence does not include two allowed independent hosts", () => {
  const article = verifiedArticle();
  article.verifiedClaims[0].evidence = [{ sourceUrl: "https://example.org/a", evidenceSummary: "한 출처뿐" }, { sourceUrl: "https://example.org/another", evidenceSummary: "같은 호스트" }];
  const candidate = { url: "https://example.org/a", feed, corroboratingSources: [{ url: "https://example.net/b" }] };
  const decision = publicationDecision(article, candidate, passingReview(), []);
  assert.ok(decision.hardBlocks.includes("claim_evidence_missing"));
});

test("blocks substantial verbatim source reuse even when AI review misses it", () => {
  const copied = "verified pet care teams introduced connected scheduling and daily care records for participating businesses";
  const article = verifiedArticle({ sections: [{ heading: "Copy", paragraphs: [copied, copied] }, { heading: "Copy again", paragraphs: [copied, copied] }, { heading: "More", paragraphs: [copied, copied] }] });
  const candidate = { url: "https://example.org/a", feed, title: "Connected care", summary: copied, sourceText: `${copied} ${copied}`, corroboratingSources: [{ url: "https://example.net/b", title: "Independent", summary: copied, sourceText: copied }] };
  const decision = publicationDecision(article, candidate, passingReview(), []);
  assert.ok(decision.checks.sourceCopyRatio >= 0.18);
  assert.ok(decision.hardBlocks.includes("source_copy_risk"));
});

test("requires FOURFEETZ analysis, Korean industry implications, and reader limitations", () => {
  const candidate = { url: "https://example.org/a", feed, corroboratingSources: [{ url: "https://example.net/b" }] };
  const article = verifiedArticle({ editorialAnalysis: { fourfeetzAnalysis: [], koreanIndustryImplications: [], readerLimitations: [] } });
  const decision = publicationDecision(article, candidate, passingReview(), []);
  assert.equal(decision.checks.editorialAnalysisValid, false);
  assert.ok(decision.hardBlocks.includes("missing_editorial_analysis"));
});

test("rejects write targets outside content/news", () => {
  assert.throws(() => assertNewsPath("app/page.tsx"), /Refusing to write outside/);
});



test("retains trusted primary-source fallback even when corroboration grouping does not select it", () => {
  const primary = { title: "Veterinary clinical research update", summary: "A published research finding", url: "https://example.org/research", feed: { name: "Research", reliability: 25, primaryEvidence: true, evidenceType: "research" }, corroboratingSources: [{ url: "https://example.net/report", feed: { reliability: 25 } }] };
  assert.deepEqual(selectEvidencePrimaries([primary]).map(({ url }) => url), [primary.url]);
  const untrusted = { ...primary, url: "https://example.org/untrusted", feed: { reliability: 20, primaryEvidence: false } };
  assert.deepEqual(selectEvidencePrimaries([untrusted]), []);
});

test("considers more verified fallback candidates without changing the daily publishing cap", () => {
  const candidates = Array.from({ length: 14 }, (_, i) => ({ title: `Distinct veterinary study ${i}`, summary: "Clinical findings", feed: { name: "Research" } }));
  assert.equal(selectApiCandidates(candidates, 2).length, 14);
});
