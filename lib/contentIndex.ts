import { shorts } from "@/data/shorts";
import { characterDetails } from "@/lib/characterDetails";
import { films } from "@/lib/films";
import { insightArticles } from "@/lib/insights";
import { musicTracks } from "@/lib/music";
import { resourceDetails } from "@/lib/resourceDetails";

export type ContentType = "Films" | "Shorts" | "Characters" | "Insights" | "Resources" | "Music";

export type SiteContentItem = {
  title: string;
  description: string;
  href: string;
  type: ContentType;
  category: string;
  characters?: string[];
  tools?: string[];
  keywords?: string[];
  searchable?: boolean;
  detail?: boolean;
};

const filmContent: SiteContentItem[] = films.map((film) => ({
  title: film.title,
  description: film.description,
  href: `/works/${film.slug}`,
  type: "Films",
  category: film.category,
  characters: [film.character],
  tools: film.tools,
  keywords: ["film", film.duration, ...film.productionNotes.map((note) => `${note.label} ${note.value}`)],
  searchable: true,
  detail: true,
}));

const shortContent: SiteContentItem[] = shorts.map((short) => ({
  title: short.title,
  description: short.description,
  href: `/shorts/${short.slug}`,
  type: "Shorts",
  category: short.category,
  characters: short.characters ?? ["HARU"],
  tools: short.tools,
  keywords: [short.duration, "short film", "vertical video"],
  searchable: true,
  detail: false,
}));

const characterContent: SiteContentItem[] = characterDetails.map((character) => ({
  title: character.name,
  description: `${character.species} — ${character.tagline}`,
  href: `/characters/${character.slug}`,
  type: "Characters",
  category: "Original Character",
  characters: [character.name],
  keywords: [character.species, ...character.personality],
  searchable: true,
  detail: true,
}));

const insightContent: SiteContentItem[] = insightArticles.map((article) => ({
  title: article.title,
  description: article.description,
  href: article.href,
  type: "Insights",
  category: article.category,
  characters: article.characters,
  tools: article.tools,
  keywords: article.keywords,
  searchable: true,
  detail: true,
}));

const resourceContent: SiteContentItem[] = [
  ...resourceDetails.map((resource) => ({
    title: resource.title,
    description: resource.description,
    href: `/resources/${resource.slug}`,
    type: "Resources" as const,
    category: resource.category,
    characters: resource.slug.includes("character") ? ["HARU"] : undefined,
    tools: resource.slug.includes("music") ? ["Suno"] : ["ChatGPT"],
    searchable: true,
    detail: true,
  })),
  { title: "AI Video Production Workflow", description: "The complete FourFeetz production system from story planning to publishing.", href: "/resources/ai-video-workflow", type: "Resources", category: "Workflow", tools: ["ChatGPT", "Runway", "Kling AI"], searchable: true, detail: true },
  { title: "Character Consistency Guide", description: "A practical resource for maintaining character identity across production.", href: "/resources/character-consistency-guide", type: "Resources", category: "Characters", characters: ["HARU"], tools: ["ChatGPT"], searchable: true, detail: true },
  { title: "Prompt Library", description: "Reusable prompt structures for characters, scenes, camera, lighting, and motion.", href: "/resources/prompt-library", type: "Resources", category: "Prompts", tools: ["ChatGPT"], searchable: true, detail: true },
  { title: "Tool Comparisons", description: "Practical comparisons for selecting tools across the AI production workflow.", href: "/resources/tool-comparisons", type: "Resources", category: "Tools", tools: ["Runway", "Kling AI", "Veo"], searchable: true, detail: true },
];

const musicContent: SiteContentItem[] = musicTracks.map((track) => ({
  title: track.title,
  description: track.description,
  href: `/music/${track.slug}`,
  type: "Music",
  category: track.category,
  characters: track.character ? [track.character] : undefined,
  tools: ["Suno"],
  searchable: false,
  detail: true,
}));

export const siteContent: SiteContentItem[] = [
  ...filmContent,
  ...shortContent,
  ...characterContent,
  ...insightContent,
  ...resourceContent,
  ...musicContent,
];
export const searchableContent = siteContent.filter((item) => item.searchable);

function overlap(left: string[] = [], right: string[] = []) {
  const rightSet = new Set(right.map((value) => value.toLowerCase()));
  return left.filter((value) => rightSet.has(value.toLowerCase())).length;
}

export function getRelatedContent(pathname: string, limit = 4) {
  const current = siteContent.find((item) => item.detail && item.href === pathname);
  if (!current) return [];

  return siteContent
    .filter((item) => item.detail && item.href !== current.href)
    .map((item) => ({
      item,
      score:
        overlap(current.characters, item.characters) * 8 +
        (current.category === item.category ? 5 : 0) +
        overlap(current.tools, item.tools) * 2 +
        (current.type === item.type ? 1 : 0),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map(({ item }) => item);
}
