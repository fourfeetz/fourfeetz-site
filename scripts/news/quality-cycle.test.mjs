import assert from "node:assert/strict";
import test from "node:test";
import { canRewriteReview, MAX_REWRITE_ATTEMPTS, runQualityCycle } from "./quality-cycle.mjs";

const sources = {
  url: "https://example.org/a",
  feed: { allowedHosts: ["example.org"], reliability: 25 },
  corroboratingSources: [{ url: "https://example.net/b" }],
};

function article(title = "검증된 반려동물 서비스 기술을 이해하기 위한 새로운 안내") {
  return {
    title,
    description: "서로 다른 두 출처에서 확인된 발표 범위와 한계를 한국 독자가 이해하기 쉽게 정리한 상세 설명입니다.",
    keywords: ["반려동물", "기술", "검증"],
    sourceFacts: ["두 매체가 같은 발표를 보도했다.", "발표 범위가 공개됐다."],
    verifiedClaims: ["두 매체가 같은 발표를 보도했다.", "발표 범위가 공개됐다."].map((claim) => ({ claim, limitation: "발표 내용에 한정", evidence: [{ sourceUrl: "https://example.org/a", evidenceSummary: "첫 보도" }, { sourceUrl: "https://example.net/b", evidenceSummary: "독립 보도" }] })),
    evidenceScope: { sharedBasis: "같은 발표", verificationBoundary: "발표 보도 확인이며 독립 재현은 아님", limitations: ["발표 기준", "성과 미검증"] },
    editorialAnalysis: { fourfeetzAnalysis: ["기록 책임을 먼저 확인해야 합니다.", "도입 목적을 분명히 해야 합니다."], koreanIndustryImplications: ["국내 개인정보 기준을 확인해야 합니다.", "기존 업무 흐름과 연결성을 시험해야 합니다."], readerLimitations: ["실제 성과는 아직 확인되지 않았습니다.", "해외 결과를 국내에 일반화할 수 없습니다."] },
    sections: [{ heading: "배경", paragraphs: ["독립적으로 작성한 설명입니다.", "확인 범위를 구분합니다."] }, { heading: "내용", paragraphs: ["공통 사실을 설명합니다.", "확대 해석하지 않습니다."] }, { heading: "한계", paragraphs: ["발표 자료 기준입니다.", "추가 검증이 필요합니다."] }],
    source: { url: "https://example.org/a" },
    corroboratingSources: [{ url: "https://example.net/b" }],
  };
}

function reviewValue(overrides = {}) {
  return {
    factsSupported: true, copyrightSafe: true, safe: true, duplicateFree: false, topicRelevant: true,
    independentlyCorroborated: true, corroboratedFactCount: 2, unsupportedFacts: [], failedClaims: [],
    evidenceBasis: { primaryMaterialAvailable: true, sharedOrigin: "같은 발표", independentResearchEvidence: false },
    copyrightRisks: [], duplicateReasons: [{ subject: "표현", reason: "정보 배열 유사", requiredEvidence: "독자적 구성" }],
    duplicateFindings: [{ category: "source_expression", subject: "구조", reason: "원문 정보 배열과 유사", comparisonTarget: "출처 기사" }], crossVerificationFailures: [],
    revisionPossible: true, revisionInstructions: ["표현을 새로 구성"], originalityScore: 100, seoScore: 15, safetyScore: 15, reasons: [],
    ...overrides,
  };
}

test("allows rewriting only for repairable expression or duplication problems", () => {
  const checks = { sourceCopyRatio: 0, maxSimilarity: 0 };
  assert.equal(canRewriteReview(reviewValue({ duplicateFree: false, revisionPossible: false }), { publish: false, hardBlocks: ["ai_duplicate_flag"], checks }), true);
  assert.equal(canRewriteReview(reviewValue({ copyrightSafe: false, copyrightRisks: [{ subject: "문장", reason: "복제", requiredEvidence: "없음" }] }), { publish: false, hardBlocks: ["copyright_risk"], checks }), false);
  assert.equal(canRewriteReview(reviewValue({ duplicateFree: false, duplicateFindings: [{ category: "existing_article", subject: "기존 기사", reason: "내용 중복", comparisonTarget: "기존 기사 A" }] }), { publish: false, hardBlocks: ["ai_duplicate_flag"], checks }), false);
  assert.equal(canRewriteReview(reviewValue({ duplicateFree: false, duplicateFindings: [{ category: "syndicated_coverage", subject: "공통 연구", reason: "같은 연구 발표의 재보도", comparisonTarget: "공통 원자료" }] }), { publish: false, hardBlocks: ["ai_duplicate_flag"], checks }), false);
  assert.equal(canRewriteReview(reviewValue({ factsSupported: false, failedClaims: [{ subject: "수치", reason: "없음", requiredEvidence: "추가 출처" }] }), { publish: false, hardBlocks: ["unverified_facts"], checks }), false);
  assert.equal(canRewriteReview(reviewValue({ independentlyCorroborated: false, crossVerificationFailures: [{ subject: "주장", reason: "단일 출처", requiredEvidence: "독립 출처" }] }), { publish: false, hardBlocks: ["cross_verification_failed"], checks }), false);
});

test("quality cycle performs at most one rewrite and always reviews rewritten output", async () => {
  let reviews = 0;
  let rewrites = 0;
  const result = await runQualityCycle({
    draft: article(), candidate: sources, existingArticles: [],
    review: async () => ({ value: reviewValue({ duplicateFree: reviews++ > 0, duplicateFindings: reviews > 1 ? [] : reviewValue().duplicateFindings }), usage: {} }),
    rewrite: async () => { rewrites += 1; return { value: article("재작성된 반려동물 서비스 기술을 이해하기 위한 새로운 안내"), usage: {} }; },
    onUsage: async () => {}, onReview: async () => {},
  });
  assert.equal(MAX_REWRITE_ATTEMPTS, 1);
  assert.equal(rewrites, 1);
  assert.equal(reviews, 2);
  assert.equal(result.rewriteAttempts, 1);
});

test("major fact failure skips rewrite", async () => {
  let rewrites = 0;
  const result = await runQualityCycle({
    draft: article(), candidate: sources, existingArticles: [],
    review: async () => ({ value: reviewValue({ factsSupported: false, revisionPossible: false, failedClaims: [{ subject: "수치", reason: "불일치", requiredEvidence: "독립 자료" }] }), usage: {} }),
    rewrite: async () => { rewrites += 1; return { value: article(), usage: {} }; },
    onUsage: async () => {}, onReview: async () => {},
  });
  assert.equal(rewrites, 0);
  assert.equal(result.rewriteAttempts, 0);
});

test("budget callback failure stops before any rewrite call", async () => {
  let rewrites = 0;
  await assert.rejects(runQualityCycle({
    draft: article(), candidate: sources, existingArticles: [],
    review: async () => ({ value: reviewValue(), usage: { input_tokens: 100 } }),
    rewrite: async () => { rewrites += 1; return { value: article(), usage: {} }; },
    onUsage: async () => { throw new Error("budget exceeded"); }, onReview: async () => {},
  }), /budget exceeded/);
  assert.equal(rewrites, 0);
});
