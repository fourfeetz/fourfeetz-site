import type { InsightLanguage } from "@/lib/insightGroups";
import type { InsightArticle } from "@/lib/insights";
import { koreanInsightSummaries } from "@/lib/koreanInsightSummaries";
import { getNewProductionGuide } from "@/lib/newProductionGuides";
import { getSearchFocusedInsight, isSearchFocusedInsightSlug } from "@/lib/searchFocusedInsights";

const koreanCategoryLabels: Record<string, string> = {
  "Production Guide": "제작 가이드",
  "Business Guide": "비즈니스 가이드",
  Experience: "실제 제작 경험",
  "Experience / AI Video": "실제 제작 경험 / AI 영상",
  "Experience / Tutorial": "실제 제작 경험 / 제작 가이드",
  Tutorial: "제작 가이드",
};

export function localizeInsightReadTime(readTime: string) {
  const minutes = readTime.match(/\d+/)?.[0];
  return minutes ? `${minutes}분` : readTime;
}

export function localizeInsightArticle(article: InsightArticle, language: InsightLanguage): InsightArticle {
  if (language === "en") return article;

  const newGuide = getNewProductionGuide(article.slug, "ko");
  const searchFocused = isSearchFocusedInsightSlug(article.slug)
    ? getSearchFocusedInsight(article.slug, "ko")
    : undefined;
  const legacy = koreanInsightSummaries[article.slug];
  const category = newGuide?.category ?? searchFocused?.category ?? legacy?.category ?? article.category;

  return {
    ...article,
    title: newGuide?.shortTitle ?? searchFocused?.shortTitle ?? legacy?.title ?? article.title,
    category: koreanCategoryLabels[category] ?? category,
    readTime: newGuide?.readTime ?? searchFocused?.readTime ?? localizeInsightReadTime(article.readTime),
    description: newGuide?.description ?? searchFocused?.description ?? legacy?.summary[0] ?? article.description,
    imageAlt: newGuide?.heroAlt
      ? { ...article.imageAlt, ko: newGuide.heroAlt }
      : searchFocused?.heroAlt
        ? { ...article.imageAlt, ko: searchFocused.heroAlt }
      : legacy?.imageAlt
        ? { ...article.imageAlt, ko: legacy.imageAlt }
        : article.imageAlt,
  };
}

export function localizeInsightArticles(articles: InsightArticle[], language: InsightLanguage) {
  return articles.map((article) => localizeInsightArticle(article, language));
}
