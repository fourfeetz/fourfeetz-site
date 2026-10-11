import { publicationDecision } from "./core.mjs";

export const MAX_REWRITE_ATTEMPTS = 1;

const REWRITEABLE_BLOCKS = new Set(["copyright_risk", "ai_duplicate_flag", "source_copy_risk", "duplicate_content"]);

export function canRewriteReview(review, decision) {
  if (decision.publish || review.revisionPossible !== true) return false;
  if (!review.factsSupported || !review.safe || !review.independentlyCorroborated || review.corroboratedFactCount < 2) return false;
  if ((review.unsupportedFacts ?? []).length > 0 || (review.failedClaims ?? []).length > 0 || (review.crossVerificationFailures ?? []).length > 0) return false;
  return decision.hardBlocks.every((block) => REWRITEABLE_BLOCKS.has(block));
}

export async function runQualityCycle({ draft, candidate, existingArticles, review, rewrite, onUsage, onReview }) {
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
    const rewritten = await rewrite(currentDraft, assessment.reviewed.value);
    await onUsage("rewrite", rewritten.usage);
    currentDraft = { ...currentDraft, ...rewritten.value };
    assessment = await assess(rewriteAttempts);
  }

  return { draft: currentDraft, review: assessment.reviewed.value, decision: assessment.decision, rewriteAttempts };
}
