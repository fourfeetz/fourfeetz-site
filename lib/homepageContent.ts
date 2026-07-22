import { shorts } from "@/data/shorts";
import { characterDetails } from "@/lib/characterDetails";
import { films } from "@/lib/films";
import { insightArticles } from "@/lib/insights";
import { musicTracks } from "@/lib/music";
import { isPublishedContent, sortByFreshness, type PublishStatus } from "@/lib/publishing";
import { resourceDetails } from "@/lib/resourceDetails";

export type HomepageContentType = "Film" | "Short" | "Music" | "Insight" | "Resource" | "Character";

export type HomepageContentItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  type: HomepageContentType;
  category: string;
  image?: string;
  duration?: string;
  readTime?: string;
  publishedAt?: string;
  updatedAt?: string;
  featured?: boolean;
  publishStatus?: PublishStatus;
};

// New content registration: add the item and its publishedAt/publishStatus in its existing
// domain file (data/shorts.ts or the matching lib/{films,music,insights,resourceDetails,characterDetails}.ts).
// Homepage sections are derived from this registry; never add homepage-only cards.
export const homepageContent: HomepageContentItem[] = [
  ...shorts.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    href: `/shorts/${item.slug}`,
    type: "Short" as const,
    category: item.category,
    image: item.poster,
    duration: item.duration,
    publishedAt: item.publishedAt,
    updatedAt: item.updatedAt,
    featured: item.featured,
    publishStatus: item.publishStatus,
  })),
  ...musicTracks.map((item) => ({
    id: item.slug,
    title: item.title,
    description: item.description,
    href: `/music/${item.slug}`,
    type: "Music" as const,
    category: item.category,
    image: item.cover,
    duration: item.duration,
    publishedAt: item.publishedAt,
    updatedAt: item.updatedAt,
    featured: item.featured,
    publishStatus: item.publishStatus,
  })),
  ...insightArticles.map((item) => ({
    id: item.slug,
    title: item.title,
    description: item.description,
    href: item.href,
    type: "Insight" as const,
    category: item.category,
    image: item.image,
    readTime: item.readTime,
    publishedAt: item.publishedAt,
    updatedAt: item.updatedAt,
    featured: item.featured,
    publishStatus: item.publishStatus,
  })),
  ...films.map((item) => ({
    id: item.slug,
    title: item.title,
    description: item.description,
    href: `/works/${item.slug}`,
    type: "Film" as const,
    category: item.category,
    image: item.thumbnail,
    duration: item.duration,
    publishedAt: item.publishedAt,
    updatedAt: item.updatedAt,
    featured: item.featured,
    publishStatus: item.publishStatus,
  })),
  ...resourceDetails.map((item) => ({
    id: item.slug,
    title: item.title,
    description: item.description,
    href: `/resources/${item.slug}`,
    type: "Resource" as const,
    category: item.category,
    image: item.image,
    publishedAt: item.publishedAt,
    updatedAt: item.updatedAt,
    featured: item.featured,
    publishStatus: item.publishStatus,
  })),
  ...characterDetails.map((item) => ({
    id: item.slug,
    title: item.name,
    description: item.tagline,
    href: `/characters/${item.slug}`,
    type: "Character" as const,
    category: item.species,
    image: item.gallery[0]?.image,
    publishedAt: item.publishedAt,
    updatedAt: item.updatedAt,
    featured: item.featured,
    publishStatus: item.publishStatus,
  })),
];

function publishedItems(now = new Date()) {
  return homepageContent.filter((item) => isPublishedContent(item, now));
}

export function getLatestUpdates(limit = 4, now = new Date()) {
  return sortByFreshness(publishedItems(now)).slice(0, limit);
}

export function getFeaturedWorks(limit = 4, now = new Date()) {
  const works = sortByFreshness(
    publishedItems(now).filter((item) => item.type === "Film" || item.type === "Short"),
  );
  const featured = works.filter((item) => item.featured);
  const fallback = works.filter((item) => !item.featured);
  return [...featured, ...fallback].slice(0, limit);
}

export function getLatestInsights(limit = 4, now = new Date()) {
  return sortByFreshness(
    publishedItems(now).filter((item) => item.type === "Insight"),
  ).slice(0, limit);
}

export function getHomepageCharacters(limit = 4, now = new Date()) {
  const characters = sortByFreshness(
    publishedItems(now).filter((item) => item.type === "Character"),
  );
  return [
    ...characters.filter((item) => item.featured),
    ...characters.filter((item) => !item.featured),
  ].slice(0, limit);
}

export function getHomepageResources(limit = 4, now = new Date()) {
  return sortByFreshness(
    publishedItems(now).filter((item) => item.type === "Resource"),
  ).slice(0, limit);
}
