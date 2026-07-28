import type { MetadataRoute } from "next";
import { shorts } from "@/data/shorts";
import { films } from "@/lib/films";
import { musicTracks } from "@/lib/music";
import { characterDetails } from "@/lib/characterDetails";
import { getPublishedInsightArticles } from "@/lib/insights";
import { resourceDetails } from "@/lib/resourceDetails";

const baseUrl = "https://fourfeetz.com";

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
  "/characters/ruru",
  "/characters/pori",
  "/contact",
  "/en",
  "/films",
  "/insights",
  "/insights/guides",
  "/insights/news",
  "/insights/adobe-firefly-agentic-studio",
  "/insights/ai-lighting-guide",
  "/insights/ai-storyboarding-guide",
  "/insights/ai-thumbnail-design-guide",
  "/insights/ai-video-workflow",
  "/insights/best-ai-music-tools",
  "/insights/camera-movement-guide",
  "/insights/character-consistency-guide",
  "/insights/elevenlabs-music-v2-references",
  "/insights/flux-image-guide",
  "/insights/google-flow-complete-guide",
  "/insights/how-haru-was-created",
  "/insights/image-to-video-prompts",
  "/insights/kling-vs-veo",
  "/insights/kling-ai-complete-review",
  "/insights/luma-ray-3-2-production-control",
  "/insights/magiclight-seedance-2-real-production-test",
  "/insights/reframing-16-9-guide",
  "/insights/repeatable-ai-video-workflow",
  "/insights/runway-dev-ai-media-platform",
  "/insights/runway-gen-4-review",
  "/insights/runway-gen45-review",
  "/insights/veo3-complete-review",
  "/insights/vertical-video-reframing",
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
  "/services",
  "/studio",
  "/terms",
  "/tools",
  "/travel",
  "/youtube",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pairedPaths = new Map<string, string>([
    ["", "/ko"],
    ["/about", "/ko/about"],
    ["/works", "/ko/films"],
    ["/shorts", "/ko/shorts"],
    ["/characters", "/ko/characters"],
    ["/music", "/ko/music"],
    ["/insights", "/ko/insights"],
    ["/insights/guides", "/ko/insights/guides"],
    ["/insights/news", "/ko/insights/news"],
    ["/resources", "/ko/resources"],
    ["/services", "/ko/services"],
    ...films.map((item) => [`/works/${item.slug}`, `/ko/films/${item.slug}`] as const),
    ...shorts.map((item) => [`/shorts/${item.slug}`, `/ko/shorts/${item.slug}`] as const),
    ...characterDetails.map((item) => [`/characters/${item.slug}`, `/ko/characters/${item.slug}`] as const),
    ...musicTracks.map((item) => [`/music/${item.slug}`, `/ko/music/${item.slug}`] as const),
    ...getPublishedInsightArticles().map((item) => [item.href, `/ko/insights/${item.slug}`] as const),
    ...resourceDetails.map((item) => [`/resources/${item.slug}`, `/ko/resources/${item.slug}`] as const),
  ]);

  const alternateLanguages = (englishPath: string, koreanPath: string) => ({
    en: `${baseUrl}${englishPath}`,
    ko: `${baseUrl}${koreanPath}`,
    "x-default": `${baseUrl}${englishPath}`,
  });

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route.split("/").filter(Boolean).length === 1 ? 0.8 : 0.7,
    ...(pairedPaths.has(route) ? { alternates: { languages: alternateLanguages(route, pairedPaths.get(route)!) } } : {}),
  }));

  const musicPages = musicTracks.map((track) => ({
    url: `${baseUrl}/music/${track.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: { languages: alternateLanguages(`/music/${track.slug}`, `/ko/music/${track.slug}`) },
  }));

  const filmPages = films.map((film) => ({
    url: `${baseUrl}/works/${film.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: { languages: alternateLanguages(`/works/${film.slug}`, `/ko/films/${film.slug}`) },
  }));

  const shortPages = shorts.map((short) => ({
    url: `${baseUrl}/shorts/${short.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: { languages: alternateLanguages(`/shorts/${short.slug}`, `/ko/shorts/${short.slug}`) },
  }));

  const koreanPages = [...new Set(pairedPaths.values())].map((koreanPath) => {
    const englishPath = [...pairedPaths.entries()].find(([, value]) => value === koreanPath)?.[0] ?? "";
    return {
      url: `${baseUrl}${koreanPath}`,
      changeFrequency: koreanPath === "/ko" ? ("weekly" as const) : ("monthly" as const),
      priority: koreanPath === "/ko" ? 1 : koreanPath.split("/").filter(Boolean).length === 2 ? 0.8 : 0.7,
      alternates: { languages: alternateLanguages(englishPath, koreanPath) },
    };
  });

  return [...staticPages, ...filmPages, ...shortPages, ...musicPages, ...koreanPages];
}
