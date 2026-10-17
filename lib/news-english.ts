import "server-only";
import fs from "node:fs";
import path from "node:path";
import type { NewsArticle, NewsSection } from "./news";

export type EnglishNewsTranslation = {
  schemaVersion: 1;
  slug: string;
  language: "en";
  sourceUrl: string;
  title: string;
  description: string;
  category: string;
  sections: NewsSection[];
  takeaway: string[];
};

const directory = path.join(process.cwd(), "content", "news", "en");

export function isEnglishNewsTranslation(value: unknown, original: NewsArticle): value is EnglishNewsTranslation {
  if (!value || typeof value !== "object") return false;
  const translated = value as Partial<EnglishNewsTranslation>;
  return translated.schemaVersion === 1 && translated.language === "en"
    && translated.slug === original.slug
    && translated.sourceUrl === original.source.url
    && typeof translated.title === "string" && translated.title.trim().length >= 18
    && typeof translated.description === "string" && translated.description.trim().length >= 50
    && typeof translated.category === "string"
    && Array.isArray(translated.sections) && translated.sections.length === original.sections.length
    && translated.sections.every((section, i) => typeof section.heading === "string"
      && Array.isArray(section.paragraphs)
      && section.paragraphs.length === original.sections[i].paragraphs.length
      && section.paragraphs.every((paragraph) => typeof paragraph === "string" && paragraph.trim().length >= 10))
    && Array.isArray(translated.takeaway) && translated.takeaway.length === original.takeaway.length
    && translated.takeaway.every((item) => typeof item === "string" && item.trim().length > 5);
}

export function loadEnglishNewsTranslations(originals: NewsArticle[]): Map<string, EnglishNewsTranslation> {
  const result = new Map<string, EnglishNewsTranslation>();
  for (const article of originals) {
    const file = path.join(directory, `${article.slug}.json`);
    if (!fs.existsSync(file)) continue;
    try {
      const value: unknown = JSON.parse(fs.readFileSync(file, "utf8"));
      if (isEnglishNewsTranslation(value, article)) result.set(article.slug, value);
    } catch { /* Missing or malformed translations are excluded. */ }
  }
  return result;
}
