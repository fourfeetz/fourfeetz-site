import type { MetadataRoute } from "next";
import { shorts } from "@/data/shorts";
import { films } from "@/lib/films";
import { musicTracks } from "@/lib/music";

const baseUrl = "https://www.fourfeetz.com";

const routes = [
  "",
  "/about",
  "/ai-studio",
  "/animals",
  "/animals/haru",
  "/blog",
  "/camping",
  "/characters",
  "/characters/haru",
  "/characters/hugo",
  "/characters/luna",
  "/characters/milo",
  "/characters/oli",
  "/characters/pori",
  "/contact",
  "/en",
  "/insights",
  "/insights/ai-lighting-guide",
  "/insights/ai-storyboarding-guide",
  "/insights/ai-thumbnail-design-guide",
  "/insights/ai-video-workflow",
  "/insights/best-ai-music-tools",
  "/insights/camera-movement-guide",
  "/insights/character-consistency-guide",
  "/insights/flux-image-guide",
  "/insights/google-flow-complete-guide",
  "/insights/how-haru-was-created",
  "/insights/image-to-video-prompts",
  "/insights/kling-vs-veo",
  "/insights/reframing-16-9-guide",
  "/insights/repeatable-ai-video-workflow",
  "/insights/runway-gen-4-review",
  "/insights/runway-gen45-review",
  "/insights/veo3-complete-review",
  "/insights/vertical-video-reframing",
  "/ko",
  "/music",
  "/notes",
  "/privacy",
  "/resources",
  "/resources/ai-music-prompt-starter-pack",
  "/resources/ai-short-film-workflow",
  "/resources/ai-video-workflow",
  "/resources/character-consistency-guide",
  "/resources/character-consistency-prompt-pack",
  "/resources/character-production-checklist",
  "/resources/image-to-video-prompt-framework",
  "/resources/production-notes-template",
  "/resources/prompt-library",
  "/resources/storyboard-planning-template",
  "/resources/tool-comparisons",
  "/resources/vertical-video-reframing-guide",
  "/social",
  "/studio",
  "/terms",
  "/tools",
  "/travel",
  "/works",
  "/youtube",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route.split("/").filter(Boolean).length === 1 ? 0.8 : 0.7,
  }));

  const musicPages = musicTracks.map((track) => ({
    url: `${baseUrl}/music/${track.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const filmPages = films.map((film) => ({
    url: `${baseUrl}/works/${film.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const shortPages = shorts.map((short) => ({
    url: `${baseUrl}/shorts/${short.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...filmPages, ...shortPages, ...musicPages];
}
