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
    sections: [{ heading: "배경", paragraphs: ["독립적으로 작성한 설명입니다.", "확인 범위를 구분합니다."] }, { heading: "내용", paragraphs: ["공통 사실을 설명합니다.", "확대 해석하지 않습니다."] }, { heading: "한계", paragraphs: ["발표 자료 기준입니다.", "추가 검증이 필요합니다."] }],
    source: { url: "https://example.org/a" },
    corroboratingSources: [{ url: "https://example.net/b" }],
  };
}

function reviewValue(overrides = {}) {
  return {
    factsSupported: true, copyrightSafe: false, safe: true, duplicateFree: true, topicRelevant: true,
    independentlyCorroborated: true, corroboratedFactCount: 2, unsupportedFacts: [], failedClaims: [],
    copyrightRisks: [{ subject: "표현", reason: "유사", requiredEvidence: "해당 없음" }], duplicateReasons: [], crossVerificationFailures: [],
    revisionPossible: true, revisionInstructions: ["표현을 새로 구성"], originalityScore: 100, seoScore: 15, safetyScore: 15, reasons: [],
    ...overrides,
  };
}

test("allows rewriting only for repairable expression or duplication problems", () => {
  assert.equal(canRewriteReview(reviewValue(), { publish: false, hardBlocks: ["copyright_risk"] }), true);
  assert.equal(canRewriteReview(reviewValue({ factsSupported: false, failedClaims: [{ subject: "수치", reason: "없음", requiredEvidence: "추가 출처" }] }), { publish: false, hardBlocks: ["unverified_facts"] }), false);
  assert.equal(canRewriteReview(reviewValue({ independentlyCorroborated: false, crossVerificationFailures: [{ subject: "주장", reason: "단일 출처", requiredEvidence: "독립 출처" }] }), { publish: false, hardBlocks: ["cross_verification_failed"] }), false);
});

test("quality cycle performs at most one rewrite and always reviews rewritten output", async () => {
  let reviews = 0;
  let rewrites = 0;
  const result = await runQualityCycle({
    draft: article(), candidate: sources, existingArticles: [],
    review: async () => ({ value: reviewValue({ copyrightSafe: reviews++ > 0 }), usage: {} }),
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
