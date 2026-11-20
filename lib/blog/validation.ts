import { BLOG_CATEGORIES, type BlogCategory } from "./types.ts";

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SAFE_IMAGE = /^(https:\/\/[^\s]+|\/images\/[^\s]+)$/;

export class BlogValidationError extends Error {
  readonly code: string; readonly status: number;
  constructor(code: string, status = 400) { super(code); this.code=code; this.status=status; }
}

const text = (value: unknown, max: number, field: string) => {
  if (typeof value !== "string") throw new BlogValidationError(`INVALID_${field.toUpperCase()}`);
  const normalized = value.trim();
  if (!normalized || normalized.length > max) throw new BlogValidationError(`INVALID_${field.toUpperCase()}`);
  return normalized;
};

export function validatePostInput(value: Record<string, unknown>) {
  const slug = text(value.slug, 120, "slug").toLowerCase();
  if (!SLUG.test(slug)) throw new BlogValidationError("INVALID_SLUG");
  const category = text(value.category, 40, "category") as BlogCategory;
  if (!BLOG_CATEGORIES.includes(category)) throw new BlogValidationError("INVALID_CATEGORY");
  const tags = Array.isArray(value.tags) ? value.tags.map((tag) => text(tag, 40, "tag")) : [];
  if (tags.length > 12) throw new BlogValidationError("TOO_MANY_TAGS");
  const heroImageUrl = value.heroImageUrl ? text(value.heroImageUrl, 1000, "heroImageUrl") : null;
  if (heroImageUrl && !SAFE_IMAGE.test(heroImageUrl)) throw new BlogValidationError("UNSAFE_IMAGE_URL");
  return {
    id: typeof value.id === "string" && value.id ? value.id : undefined,
    slug, title: text(value.title, 160, "title"), summary: text(value.summary, 320, "summary"), category,
    tags: [...new Set(tags)], heroImageUrl, heroImageAlt: heroImageUrl ? text(value.heroImageAlt, 240, "heroImageAlt") : null,
    markdown: text(value.markdown, 200_000, "markdown"),
    version: Number.isInteger(value.version) && Number(value.version) >= 0 ? Number(value.version) : 0,
    commentsEnabled: value.commentsEnabled !== false,
  };
}

export function estimateReadTime(markdown: string) {
  return `${Math.max(1, Math.ceil(markdown.replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean).length / 220))}분`;
}
