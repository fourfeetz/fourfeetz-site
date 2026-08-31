import type { MetadataRoute } from "next";
import { shorts } from "@/data/shorts";
import { films } from "@/lib/films";
import { musicTracks } from "@/lib/music";
import { characterDetails } from "@/lib/characterDetails";
import { getPublishedInsightArticles, hasKoreanInsightGroupContent } from "@/lib/insights";
import { resourceDetails } from "@/lib/resourceDetails";
import { practicalResources } from "@/lib/practicalResources";
import { petServiceSlugs } from "@/lib/petBusinessServices";
import { isKoreanInsightRedirect } from "@/lib/koreanInsightAvailability";

const baseUrl = "https://fourfeetz.com";

const routes = [
  "/en",
  "/about",
  "/characters",
  ...characterDetails.map((character) => `/characters/${character.slug}`),
  "/contact",
  "/videos",
  "/insights",
  "/insights/guides",
  "/insights/news",
  "/insights/adobe-firefly-agentic-studio",
  "/insights/ai-lighting-guide",
  "/insights/ai-storyboarding-guide",
  "/insights/ai-thumbnail-design-guide",
  "/insights/best-ai-music-tools",
  "/insights/camera-movement-guide",
  "/insights/calming-dog-music-puppy-kitten-fireplace-rain",
  "/insights/character-consistency-guide",
  "/insights/character-consistency-haru-ruru-milo",
  "/insights/common-ai-video-generation-failures",
  "/insights/cozy-retriever-kitten-sleep-short",
  "/insights/create-ai-shorts-9-16-from-start",
  "/insights/elevenlabs-music-v2-references",
  "/insights/extend-ai-video-scenes-google-flow",
  "/insights/flux-image-guide",
  "/insights/google-flow-complete-guide",
  "/insights/google-flow-one-action-eight-second-scenes",
  "/insights/haru-luna-rainy-window-ai-pet-video",
  "/insights/haru-pori-two-character-scene",
  "/insights/haru-relaxing-videos-calm-natural",
  "/insights/how-haru-was-created",
  "/insights/image-to-video-prompts",
  "/insights/kling-vs-veo",
  "/insights/kling-ai-complete-review",
  "/insights/luma-ray-3-2-production-control",
  "/insights/magiclight-seedance-2-real-production-test",
  "/insights/oli-swimming-scene-lessons",
  "/insights/reframing-16-9-guide",
  "/insights/reduce-character-inconsistency-ai-video",
  "/insights/repeatable-ai-video-workflow",
  "/insights/runway-dev-ai-media-platform",
  "/insights/runway-gen45-review",
  "/insights/seamless-loops-relaxing-ai-videos",
  "/insights/why-fourfeetz-starts-animal-shorts-first-shot",
  "/insights/from-first-image-to-final-short",
  "/insights/animal-character-short-publishing-checklist",
  "/insights/why-we-keep-animal-motions-simple",
  "/insights/turning-short-scene-into-relaxing-video",
  "/insights/what-we-keep-private-character-production",
  "/music",
  "/privacy",
  "/resources",
  "/resources/ai-music-prompt-starter-pack",
  "/resources/ai-short-film-workflow",
  "/resources/character-consistency-prompt-pack",
  "/resources/character-production-checklist",
  "/resources/image-to-video-prompt-framework",
  "/resources/production-notes-template",
  "/resources/storyboard-planning-template",
  "/resources/vertical-video-reframing-guide",
  "/social",
  "/services",
  "/terms",
  "/tools",
  ...practicalResources.map((resource) => `/resources/${resource.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pairedPaths = new Map<string, string>([
    ["/en", "/ko"],
    ["/services", "/ko/services"],
    ["/about", "/ko/about"],
    ["/videos", "/ko/videos"],
    ["/characters", "/ko/characters"],
    ["/music", "/ko/music"],
    ["/insights", "/ko/insights"],
    ["/insights/guides", "/ko/insights/guides"],
    ...(hasKoreanInsightGroupContent("news") ? [["/insights/news", "/ko/insights/news"]] as const : []),
    ["/resources", "/ko/resources"],
    ["/services", "/ko/services"],
    ["/tools", "/ko/tools"],
    ...films.map((item) => [`/works/${item.slug}`, `/ko/films/${item.slug}`] as const),
    ...shorts.map((item) => [`/shorts/${item.slug}`, `/ko/shorts/${item.slug}`] as const),
    ...characterDetails.map((item) => [`/characters/${item.slug}`, `/ko/characters/${item.slug}`] as const),
    ...musicTracks.map((item) => [`/music/${item.slug}`, `/ko/music/${item.slug}`] as const),
    ...getPublishedInsightArticles()
      .filter((item) => !isKoreanInsightRedirect(item.slug))
      .map((item) => [item.href, `/ko/insights/${item.slug}`] as const),
    ...resourceDetails.map((item) => [`/resources/${item.slug}`, `/ko/resources/${item.slug}`] as const),
    ...practicalResources.map((item) => [`/resources/${item.slug}`, `/ko/resources/${item.slug}`] as const),
  ]);

  const alternateLanguages = (englishPath: string, koreanPath: string) => ({
    en: `${baseUrl}${englishPath}`,
    ko: `${baseUrl}${koreanPath}`,
    "x-default": `${baseUrl}/ko`,
  });

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "/en" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/en" ? 0.9 : route.split("/").filter(Boolean).length === 1 ? 0.8 : 0.7,
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

  const koreanOnlyServicePages = petServiceSlugs.map((slug) => ({
    url: `${baseUrl}/ko/services/${slug}`,
    lastModified: "2026-08-17",
    changeFrequency: "monthly" as const,
    priority: slug === "pet-video" ? 0.8 : 0.7,
  }));

  return [...staticPages, ...filmPages, ...shortPages, ...musicPages, ...koreanPages, ...koreanOnlyServicePages];
}
