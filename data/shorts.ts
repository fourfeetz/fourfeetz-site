export type ShortProductionNote = {
  label: string;
  value: string;
};

export type ShortType = "episode" | "vertical-cut" | "trailer";

export type Short = {
  id: string;
  slug: string;
  type: ShortType;
  episode?: string;
  title: string;
  description: string;
  category: string;
  badge?: string;
  duration: string;
  tools: string[];
  productionNotes: ShortProductionNote[];
  video: string;
  poster?: string;
  originalFilmHref?: string;
};

export const shorts: Short[] = [
  {
    id: "short-001",
    slug: "morning-with-haru",
    type: "episode",
    episode: "EP.01",
    title: "Morning with HARU",
    description: "A peaceful morning moment with HARU in cinematic style.",
    category: "HARU Shorts",
    duration: "15 sec",
    tools: ["Google Flow", "Runway", "Kling AI", "ChatGPT", "Suno"],
    productionNotes: [
      { label: "Moment", value: "A quiet morning scene centered on HARU's calm expression and gentle movement." },
      { label: "Visual Direction", value: "Warm natural light, soft pacing, and a cinematic vertical composition." },
      { label: "Format", value: "A 15-second short-form character film designed for vertical platforms." },
    ],
    video: "/videos/shorts/haru/short-001.mp4",
    poster: "/images/shorts/haru/short-001.jpg",
  },
  {
    id: "short-002",
    slug: "watching-the-sunset",
    type: "episode",
    episode: "EP.02",
    title: "Watching the Sunset",
    description: "HARU quietly watches the beautiful countryside at sunset.",
    category: "HARU Shorts",
    duration: "15 sec",
    tools: ["Google Flow", "Runway", "Kling AI", "ChatGPT", "Suno"],
    productionNotes: [
      { label: "Moment", value: "HARU pauses to watch the countryside as the daylight fades." },
      { label: "Visual Direction", value: "Golden-hour color, restrained motion, and a peaceful cinematic atmosphere." },
      { label: "Format", value: "A 15-second short-form character film designed for vertical platforms." },
    ],
    video: "/videos/shorts/haru/short-002.mp4",
    poster: "/images/shorts/haru/short-002.jpg",
  },
  {
    id: "short-003",
    slug: "haru-ep03-best-friends",
    type: "episode",
    episode: "EP.03",
    title: "HARU EP.03 — Best Friends",
    description: "HARU and PORI spend a peaceful moment together in a cinematic AI short.",
    category: "HARU Shorts",
    duration: "15 sec",
    tools: ["Google Flow", "Kling AI", "ChatGPT"],
    productionNotes: [
      { label: "Characters", value: "HARU and PORI share a quiet moment that introduces their gentle friendship." },
      { label: "Visual Direction", value: "Natural character interaction, calm pacing, and warm cinematic light." },
      { label: "Format", value: "A 15-second AI short composed for YouTube Shorts, Instagram Reels, and TikTok." },
    ],
    video: "/videos/shorts/haru/short-003.mp4",
  },
  {
    id: "short-004",
    slug: "haru-first-journey-vertical-cut",
    type: "vertical-cut",
    title: "HARU First Journey — Vertical Cut",
    description: "A vertical edit of HARU’s main theme film, created for short-form viewing on YouTube Shorts, Instagram Reels, and TikTok.",
    category: "Vertical Cut",
    badge: "OFFICIAL VERTICAL CUT",
    duration: "58 sec",
    tools: ["Google Flow", "Runway", "Kling AI", "CapCut", "ChatGPT"],
    productionNotes: [
      { label: "Source Film", value: "The official vertical edit of HARU — First Journey, preserving the story and cinematic tone of the original film." },
      { label: "Vertical Reframing", value: "Key shots were reframed for a 9:16 canvas while keeping HARU and the important story details inside the mobile safe area." },
      { label: "Editorial", value: "The pacing and transitions were refined in CapCut for short-form viewing without presenting the edit as a new episode." },
      { label: "Distribution", value: "Prepared for YouTube Shorts, Instagram Reels, and TikTok." },
    ],
    video: "/videos/shorts/haru/short-004.mp4",
    originalFilmHref: "/works/haru-first-journey",
  },
];

export function getShort(slug: string) {
  return shorts.find((short) => short.slug === slug);
}
