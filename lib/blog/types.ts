export const BLOG_CATEGORIES = ["제작기", "도구 사용 후기", "제작 가이드"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
export type BlogStatus = "draft" | "published" | "unpublished";

export type BlogContent = { markdown: string };

export type BlogPost = {
  id: string; slug: string; locale: "ko"; title: string; summary: string;
  category: BlogCategory; tags: string[]; heroImageUrl: string | null; heroImageAlt: string | null;
  draft: BlogContent; published: BlogContent | null; status: BlogStatus; version: number;
  commentsEnabled: boolean; publishedAt: string | null; updatedAt: string;
};

export type PublicBlogPost = BlogPost & { published: BlogContent };
