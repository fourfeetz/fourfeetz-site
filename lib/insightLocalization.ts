import type { InsightLanguage } from "@/lib/insightGroups";
import type { InsightArticle } from "@/lib/insights";
import { koreanInsightSummaries } from "@/lib/koreanInsightSummaries";
import { getNewProductionGuide } from "@/lib/newProductionGuides";

export function localizeInsightReadTime(readTime: string) {
  const minutes = readTime.match(/\d+/)?.[0];
  return minutes ? `${minutes}분` : readTime;
}

export function localizeInsightArticle(article: InsightArticle, language: InsightLanguage): InsightArticle {
  if (language === "en") return article;

  const newGuide = getNewProductionGuide(article.slug, "ko");
  const legacy = koreanInsightSummaries[article.slug];

  return {
    ...article,
    title: newGuide?.shortTitle ?? legacy?.title ?? article.title,
    category: newGuide?.category ?? legacy?.category ?? article.category,
    readTime: newGuide?.readTime ?? localizeInsightReadTime(article.readTime),
    description: newGuide?.description ?? legacy?.summary[0] ?? article.description,
    imageAlt: newGuide?.heroAlt
      ? { ...article.imageAlt, ko: newGuide.heroAlt }
      : legacy?.imageAlt
        ? { ...article.imageAlt, ko: legacy.imageAlt }
        : article.imageAlt,
  };
}

export function localizeInsightArticles(articles: InsightArticle[], language: InsightLanguage) {
  return articles.map((article) => localizeInsightArticle(article, language));
}
