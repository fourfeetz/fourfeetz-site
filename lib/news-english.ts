import fs from "node:fs";
import path from "node:path";

const directory = path.join(process.cwd(), "content", "news", "en");

export function isEnglishNewsTranslation(value, original) {
  return value?.schemaVersion === 1 && value?.language === "en"
    && value.slug === original.slug
    && value.sourceUrl === original.source.url
    && typeof value.title === "string" && value.title.trim().length >= 18
    && typeof value.description === "string" && value.description.trim().length >= 50
    && typeof value.category === "string"
    && Array.isArray(value.sections) && value.sections.length === original.sections.length
    && value.sections.every((section, i) => typeof section.heading === "string"
      && Array.isArray(section.paragraphs)
      && section.paragraphs.length === original.sections[i].paragraphs.length
      && section.paragraphs.every((paragraph) => typeof paragraph === "string" && paragraph.trim().length >= 10))
    && Array.isArray(value.takeaway) && value.takeaway.length === original.takeaway.length
    && value.takeaway.every((item) => typeof item === "string" && item.trim().length > 5);
}

export function loadEnglishNewsTranslations(originals) {
  return new Map(originals.flatMap((article) => {
    const file = path.join(directory, `${article.slug}.json`);
    if (!fs.existsSync(file)) return [];
    try {
      const value = JSON.parse(fs.readFileSync(file, "utf8"));
      return isEnglishNewsTranslation(value, article) ? [[article.slug, value]] : [];
    } catch { return []; }
  }));
}
