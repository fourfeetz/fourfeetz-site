import type { PublicBlogPost } from "./types";
import type { InsightArticle } from "../insights";
import { estimateReadTime } from "./validation";

export function publicBlogPostToInsightArticle(post: PublicBlogPost): InsightArticle {
  return {
    slug: post.slug,
    group: "guides",
    contentType: post.category === "도구 사용 후기" ? "studio-analysis" : "production-guide",
    hasPublishedWork: post.category === "제작기",
    category: post.category,
    title: post.title,
    description: post.summary,
    readTime: estimateReadTime(post.published.markdown),
    href: `/ko/insights/${post.slug}`,
    image: post.heroImageUrl ?? "/images/insights-hero-v2.png",
    imageAlt: post.heroImageAlt ? { ko: post.heroImageAlt } : undefined,
    tags: post.tags,
    keywords: post.tags,
    publishedAt: post.publishedAt ?? undefined,
    updatedAt: post.updatedAt,
    publishStatus: "published",
  };
}
