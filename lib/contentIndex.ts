import { shorts } from "@/data/shorts";
import { characterDetails } from "@/lib/characterDetails";
import { relaxingHomeFilm } from "@/lib/films";
import { resourceDetails } from "@/lib/resourceDetails";
import { soundtracks } from "@/lib/soundtrackDetails";

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

const films: SiteContentItem[] = [
  {
    title: "HARU — First Journey",
    description: "HARU begins a quiet cinematic journey toward a new home.",
    href: "/works/haru-first-journey",
    type: "Films",
    category: "Character Film",
    characters: ["HARU"],
    tools: ["Google Flow", "Runway", "Kling AI", "ChatGPT", "Suno"],
    keywords: ["first character film test", "aleph 2.0", "journey"],
    searchable: true,
    detail: true,
  },
  {
    title: relaxingHomeFilm.title,
    description: relaxingHomeFilm.description,
    href: `/works/${relaxingHomeFilm.slug}`,
    type: "Films",
    category: relaxingHomeFilm.category,
    characters: [relaxingHomeFilm.character],
    tools: relaxingHomeFilm.productionNotes,
    keywords: ["relaxing film", "cozy living room", "natural breathing", "long-form"],
    searchable: true,
    detail: true,
  },
];

const shortFilms: SiteContentItem[] = shorts.map((short) => ({
  title: short.title,
  description: short.description,
  href: `/shorts#${short.id}`,
  type: "Shorts",
  category: "HARU Shorts",
  characters: ["HARU"],
  tools: short.tools,
  keywords: [short.duration, "short film", "vertical video"],
  searchable: true,
  detail: false,
}));

const characters: SiteContentItem[] = characterDetails.map((character) => ({
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

const insights: SiteContentItem[] = [
  ["How HARU Was Created", "A practical look at the production process behind FourFeetz Studios' first original character film.", "how-haru-was-created", "Behind the Scenes", ["HARU"], ["Runway", "Kling AI", "ChatGPT", "Suno"]],
  ["Runway Gen-4 Review", "A practical review of image consistency, motion quality, camera control, and production workflow.", "runway-gen-4-review", "AI Video", [], ["Runway"]],
  ["Kling vs Veo", "A side-by-side comparison of scene quality, motion realism, prompt control, and production speed.", "kling-vs-veo", "Tools", [], ["Kling AI", "Veo"]],
  ["A Repeatable AI Video Workflow", "From story planning and reference images to animation, sound, editing, and publishing.", "ai-video-workflow", "Workflow", [], ["ChatGPT", "Runway", "Kling AI"]],
  ["Best AI Music Tools for Video", "A creator-focused comparison of AI music tools for films, shorts, reels, and character themes.", "best-ai-music-tools", "AI Music", [], ["Suno"]],
  ["Writing Better Image-to-Video Prompts", "A practical framework for camera movement, subject motion, lighting, environment, and continuity.", "image-to-video-prompts", "Prompts", [], ["Runway", "Kling AI", "Veo"]],
  ["Reframing 16:9 AI Films for Vertical Video", "Adapt cinematic AI videos for Shorts, Reels, TikTok, and Naver Clip.", "reframing-16-9-guide", "Social Media", [], ["CapCut"]],
  ["Camera Movement Guide for AI Filmmakers", "Eight essential camera movements for cinematic AI-generated videos.", "camera-movement-guide", "Filmmaking", [], ["Runway", "Kling AI", "Veo"]],
  ["AI Thumbnail Design Guide", "Design high-click thumbnails with composition, color, branding, and visual storytelling.", "ai-thumbnail-design-guide", "Design", [], ["ChatGPT", "Flux"]],
  ["Character Consistency Guide", "Maintain the same AI character across images, videos, prompts, and tools.", "character-consistency-guide", "Characters", ["HARU"], ["ChatGPT", "Runway", "Kling AI"]],
  ["Google Flow Complete Guide", "Scene planning, prompt control, camera movement, exports, and cinematic workflows.", "google-flow-complete-guide", "Workflow", [], ["Google Flow", "Veo"]],
  ["Veo 3 Complete Review", "A production-focused review of image quality, motion, prompts, and camera control.", "veo3-complete-review", "AI Video", [], ["Veo"]],
  ["Runway Gen-4.5 Review", "A practical look at motion, character consistency, camera control, and workflow speed.", "runway-gen45-review", "AI Video", [], ["Runway"]],
  ["Flux Image Guide", "Create stronger reference images, lighting studies, character visuals, and thumbnails.", "flux-image-guide", "Images", [], ["Flux"]],
  ["AI Lighting Guide", "Prompt golden hour, soft light, studio light, sunset, cloudy scenes, and night lighting.", "ai-lighting-guide", "Filmmaking", [], ["ChatGPT", "Flux"]],
  ["AI Storyboarding Guide", "Plan shots, character position, camera direction, continuity, and production workflows.", "ai-storyboarding-guide", "Workflow", [], ["ChatGPT", "Google Flow"]],
  ["Repeatable AI Video Workflow", "A repeatable system for planning, generating, reviewing, editing, and publishing AI video.", "repeatable-ai-video-workflow", "Workflow", [], ["ChatGPT", "Runway", "Kling AI"]],
  ["Vertical Video Reframing", "A practical workflow for turning cinematic masters into platform-ready vertical video.", "vertical-video-reframing", "Social Media", [], ["CapCut"]],
].map(([title, description, slug, category, itemCharacters, tools]) => ({
  title: title as string,
  description: description as string,
  href: `/insights/${slug as string}`,
  type: "Insights" as const,
  category: category as string,
  characters: itemCharacters as string[],
  tools: tools as string[],
  searchable: true,
  detail: true,
}));

const resources: SiteContentItem[] = [
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

const music: SiteContentItem[] = soundtracks.map((track) => ({
  title: track.title,
  description: track.overview,
  href: `/music/${track.slug}`,
  type: "Music",
  category: "Soundtrack",
  characters: track.slug === "haru-theme" ? ["HARU"] : undefined,
  tools: ["Suno"],
  searchable: false,
  detail: true,
}));

export const siteContent: SiteContentItem[] = [...films, ...shortFilms, ...characters, ...insights, ...resources, ...music];
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
