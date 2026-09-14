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
  "/en", "/about", "/characters",
  ...characterDetails.map((character) => `/characters/${character.slug}`),
  "/contact", "/videos", "/insights", "/insights/guides", "/insights/news",
  "/music", "/privacy", "/resources", "/social", "/services", "/terms", "/tools",
  ...practicalResources.map((resource) => `/resources/${resource.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedInsights = getPublishedInsightArticles();
  const pairedPaths = new Map<string, string>([
    ["/en", "/ko"], ["/privacy", "/ko/privacy"], ["/terms", "/ko/terms"],
    ["/services", "/ko/services"], ["/about", "/ko/about"], ["/videos", "/ko/videos"],
    ["/characters", "/ko/characters"], ["/music", "/ko/music"], ["/insights", "/ko/insights"],
    ["/insights/guides", "/ko/insights/guides"],
    ...(hasKoreanInsightGroupContent("news") ? [["/insights/news", "/ko/insights/news"]] as const : []),
    ["/resources", "/ko/resources"], ["/tools", "/ko/tools"],
    ...films.map((item) => [`/works/${item.slug}`, `/ko/films/${item.slug}`] as const),
    ...shorts.map((item) => [`/shorts/${item.slug}`, `/ko/shorts/${item.slug}`] as const),
    ...characterDetails.map((item) => [`/characters/${item.slug}`, `/ko/characters/${item.slug}`] as const),
    ...musicTracks.map((item) => [`/music/${item.slug}`, `/ko/music/${item.slug}`] as const),
    ...publishedInsights.filter((item) => !isKoreanInsightRedirect(item.slug)).map((item) => [item.href, `/ko/insights/${item.slug}`] as const),
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

  const insightPages = publishedInsights.map((article) => ({
    url: `${baseUrl}${article.href}`,
    lastModified: article.updatedAt ?? article.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    ...(!isKoreanInsightRedirect(article.slug)
      ? { alternates: { languages: alternateLanguages(article.href, `/ko/insights/${article.slug}`) } }
      : {}),
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
    const insight = koreanPath.startsWith("/ko/insights/")
      ? publishedInsights.find((item) => `/ko/insights/${item.slug}` === koreanPath)
      : undefined;
    return {
      url: `${baseUrl}${koreanPath}`,
      ...(insight?.updatedAt || insight?.publishedAt ? { lastModified: insight.updatedAt ?? insight.publishedAt } : {}),
      changeFrequency: koreanPath === "/ko" ? ("weekly" as const) : ("monthly" as const),
      priority: koreanPath === "/ko" ? 1 : koreanPath.startsWith("/ko/insights/") ? 0.8 : koreanPath.split("/").filter(Boolean).length === 2 ? 0.8 : 0.7,
      alternates: { languages: alternateLanguages(englishPath, koreanPath) },
    };
  });

  const koreanOnlyServicePages = petServiceSlugs.map((slug) => ({
    url: `${baseUrl}/ko/services/${slug}`,
    lastModified: "2026-08-17",
    changeFrequency: "monthly" as const,
    priority: slug === "pet-video" ? 0.8 : 0.7,
  }));

  return [...staticPages, ...insightPages, ...filmPages, ...shortPages, ...musicPages, ...koreanPages, ...koreanOnlyServicePages];
}
