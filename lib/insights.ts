import { howHaruInsight } from "@/lib/howHaruInsight";
import { magicLightInsight } from "@/lib/magicLightInsight";
import { productionInsights, type ProductionInsight } from "@/lib/productionInsights";
import { isPublishedContent, type PublishStatus } from "@/lib/publishing";

export type InsightArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  href: string;
  image: string;
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

function fromProductionInsight(article: ProductionInsight): InsightArticle {
  return {
    slug: article.slug,
    category: article.category,
    title: article.shortTitle,
    description: article.description,
    readTime: article.readTime,
    href: `/insights/${article.slug}`,
    image: article.hero,
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
  fromProductionInsight(magicLightInsight),
  fromProductionInsight(howHaruInsight),
  ...Object.values(productionInsights).map(fromProductionInsight),
  {
    slug: "kling-vs-veo",
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
    slug: "ai-video-workflow",
    category: "Workflow",
    title: "A Repeatable AI Video Workflow",
    description: "From story planning and reference images to animation, sound, editing, and publishing.",
    readTime: "",
    href: "/insights/ai-video-workflow",
    image: "/images/insights/ai-video-workflow.png",
    tags: ["Workflow", "AI Video"],
    keywords: ["AI video workflow", "production", "editing", "publishing"],
    tools: ["ChatGPT", "Runway", "Kling AI"],
    publishStatus: "published",
    listed: false,
  },
  {
    slug: "veo3-complete-review",
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
  {
    slug: "vertical-video-reframing",
    category: "Social Media",
    title: "Vertical Video Reframing",
    description: "A practical workflow for turning cinematic masters into platform-ready vertical video.",
    readTime: "",
    href: "/insights/vertical-video-reframing",
    image: "/images/insights/reframing-16-9-guide.png",
    tags: ["Social Media", "Workflow", "Design"],
    keywords: ["vertical video", "reframing", "Shorts", "Reels"],
    tools: ["CapCut"],
    publishStatus: "published",
    listed: false,
  },
];

export function getPublishedInsightArticles(now = new Date()) {
  return insightArticles.filter((article) => article.listed !== false && isPublishedContent(article, now));
}
