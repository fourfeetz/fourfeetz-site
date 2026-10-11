import { publicationDecision } from "./core.mjs";

export const MAX_REWRITE_ATTEMPTS = 1;

export function canRewriteReview(review, decision) {
  if (decision.publish) return false;
  if (!review.factsSupported || !review.safe || !review.copyrightSafe || !review.independentlyCorroborated || review.corroboratedFactCount < 2) return false;
  if ((review.unsupportedFacts ?? []).length > 0 || (review.failedClaims ?? []).length > 0 || (review.copyrightRisks ?? []).length > 0 || (review.crossVerificationFailures ?? []).length > 0) return false;
  if (decision.checks.sourceCopyRatio >= 0.18 || decision.checks.maxSimilarity >= 0.72) return false;
  const findings = review.duplicateFindings ?? [];
  if (findings.length === 0 || findings.some(({ category }) => category !== "source_expression")) return false;
  return decision.hardBlocks.length === 1 && decision.hardBlocks[0] === "ai_duplicate_flag";
}

export async function runQualityCycle({ draft, candidate, existingArticles, review, rewrite, onUsage, onReview, onRewrite = async () => {} }) {
  let currentDraft = draft;
  let rewriteAttempts = 0;

  async function assess(attempt) {
    const reviewed = await review(currentDraft);
    await onUsage("review", reviewed.usage);
    const decision = publicationDecision(currentDraft, candidate, reviewed.value, existingArticles);
    await onReview({ attempt, draft: currentDraft, review: reviewed.value, decision });
    return { reviewed, decision };
  }

  let assessment = await assess(0);
  if (rewriteAttempts < MAX_REWRITE_ATTEMPTS && canRewriteReview(assessment.reviewed.value, assessment.decision)) {
    rewriteAttempts += 1;
    await onRewrite({ event: "rewrite_started", attempt: rewriteAttempts, categories: assessment.reviewed.value.duplicateFindings.map(({ category }) => category) });
    const rewritten = await rewrite(currentDraft, assessment.reviewed.value);
    await onUsage("rewrite", rewritten.usage);
    currentDraft = { ...currentDraft, ...rewritten.value };
    await onRewrite({ event: "rewrite_completed", attempt: rewriteAttempts });
    assessment = await assess(rewriteAttempts);
  }

  return { draft: currentDraft, review: assessment.reviewed.value, decision: assessment.decision, rewriteAttempts };
}
