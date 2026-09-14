import ProductionInsightArticle from "@/components/ProductionInsightArticle";
import type { SearchFocusedInsightSlug } from "@/lib/searchFocusedInsights";
import { getSearchFocusedInsight } from "@/lib/searchFocusedInsights";

export default function SearchFocusedInsightPage({ slug, language }: { slug: SearchFocusedInsightSlug; language: "en" | "ko" }) {
  return <ProductionInsightArticle article={getSearchFocusedInsight(slug, language)} />;
}
