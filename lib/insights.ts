import { howHaruInsight } from "@/lib/howHaruInsight";
import type { InsightGroup } from "@/lib/insightGroups";
import { magicLightInsight } from "@/lib/magicLightInsight";
import { newProductionGuides } from "@/lib/newProductionGuides";
import { productionInsights, type ProductionInsight } from "@/lib/productionInsights";
import { isPublishedContent, sortByFreshness, type PublishStatus } from "@/lib/publishing";
import { toolNewsInsights } from "@/lib/toolNewsInsights";

export type InsightArticle = {
  slug: string;
  group: InsightGroup;
  category: string;
  title: string;
  description: string;
  readTime: string;
  href: string;
  image: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  tags: string[];
  keywords: string[];
  tools?: string[];
  characters?: string[];
  publishedAt?: string;
  updatedAt?: string;
  featured?: boolean;
  publishStatus?: PublishStatus;
  listed?: boolean;
};

function fromProductionInsight(
  article: ProductionInsight & {
    heroFit?: "cover" | "contain";
    heroPosition?: string;
  },
): InsightArticle {
  return {
    slug: article.slug,
    group: "guides",
    category: article.category,
    title: article.shortTitle,
    description: article.description,
    readTime: article.readTime,
    href: `/insights/${article.slug}`,
    image: article.hero,
    imageFit: article.heroFit,
    imagePosition: article.heroPosition,
    tags: article.tags,
    keywords: article.keywords,
    tools: article.tools,
    characters: article.characters,
    publishedAt: article.published,
    updatedAt: article.updated,
    featured: article.slug === "how-haru-was-created",
    publishStatus: "published",
  };
}

export const insightArticles: InsightArticle[] = [
  ...Object.values(toolNewsInsights).map((article) => ({
    slug: article.slug,
    group: "news" as const,
    category: article.category,
    title: article.shortTitle,
    description: article.description,
    readTime: article.readTime,
    href: `/insights/${article.slug}`,
    image: article.hero,
    tags: article.tags,
    keywords: article.keywords,
    tools: article.tools,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    publishStatus: "published" as const,
  })),
  fromProductionInsight(magicLightInsight),
  fromProductionInsight(howHaruInsight),
  ...Object.values(newProductionGuides).map((article) => fromProductionInsight(article.en)),
  ...Object.values(productionInsights).map(fromProductionInsight),
  {
    slug: "kling-vs-veo",
    group: "guides",
    category: "Tools",
    title: "Kling vs Veo",
    description: "A scene-by-scene planning comparison focused on motion realism, prompt control, continuity and production speed.",
    readTime: "12 min read",
    href: "/insights/kling-vs-veo",
    image: "/images/insights/kling-vs-veo.png",
    tags: ["Tools", "AI Video"],
    keywords: ["Kling", "Veo", "comparison"],
    tools: ["Kling AI", "Veo"],
    publishStatus: "published",
  },
  {
    slug: "runway-gen-4-review",
    group: "guides",
    category: "AI Video",
    title: "Runway Gen-4 Review",
    description: "A practical review of image consistency, motion quality, camera control, and production workflow.",
    readTime: "6 min read",
    href: "/insights/runway-gen-4-review",
    image: "/images/insights/runway/09_og-image.png",
    tags: ["AI Video", "Tools", "Filmmaking"],
    keywords: ["Runway", "Gen-4", "character consistency", "camera control"],
    tools: ["Runway"],
    publishStatus: "published",
    listed: false,
  },
  {
    slug: "veo3-complete-review",
    group: "guides",
    category: "AI Video",
    title: "Veo 3 Complete Review",
    description: "A production-focused review of image quality, motion, prompts, and camera control.",
    readTime: "",
    href: "/insights/veo3-complete-review",
    image: "/images/insights/veo3-complete-review.png",
    tags: ["AI Video", "Tools", "Filmmaking"],
    keywords: ["Veo 3", "motion", "camera control", "review"],
    tools: ["Veo"],
    publishStatus: "published",
    listed: false,
  },
];

export function getPublishedInsightArticles(now = new Date()) {
  return sortByFreshness(
    insightArticles.filter((article) => article.listed !== false && isPublishedContent(article, now)),
  );
}

export function getPublishedInsightsByGroup(group: InsightGroup, now = new Date()) {
  return getPublishedInsightArticles(now).filter((article) => article.group === group);
}
