import { getPublishedInsightArticles } from "@/lib/insights";
import { koreanMemorialInsights } from "@/lib/koreanMemorialInsights";

export function isLegacyInsightSlug(slug: string) {
  return getPublishedInsightArticles().some((post) => post.slug === slug) || Object.prototype.hasOwnProperty.call(koreanMemorialInsights, slug);
}
