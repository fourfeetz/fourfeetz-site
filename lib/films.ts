export type FilmMeta = { label: string; value: string };
export type FilmImage = { title: string; image: string };
export type FilmLink = { title: string; description: string; href: string };
export type FilmVideo = { title: string; description: string; video: string; thumbnail: string };

export type Film = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  video: string;
  thumbnail: string;
  heroImage: string;
  character: string;
  tools: string[];
  productionNotes: FilmMeta[];
  gallery: FilmImage[];
  release?: string;
  status?: string;
  language?: string;
  resolution?: string;
  badges?: string[];
  watchDescription?: string;
  moreVideos?: FilmVideo[];
  creativeGoals?: FilmLink[];
  pipeline?: FilmLink[];
  timeline?: { step: string; description: string }[];
  relatedInsights?: FilmLink[];
  relatedResources?: FilmLink[];
  musicSlugs?: string[];
  nextProject?: { eyebrow: string; title: string; description: string };
  publishedAt?: string;
  updatedAt?: string;
  featured?: boolean;
  publishStatus?: "published" | "draft";
};

export const films: Film[] = [
  {
    slug: "haru-first-journey",
    title: "HARU — First Journey",
    category: "Original AI Short Film",
    duration: "1 min 30 sec",
    description: "A young rescue puppy leaves the familiar world behind and begins a quiet journey toward a new home. Every road, every sunset, and every new place becomes part of HARU's very first memories. A gentle cinematic story about curiosity, courage, and the beginning of a lifelong adventure.",
    video: "/videos/films/haru/haru-first-journey.mp4",
    thumbnail: "/images/works/haru-first-journey/video-thumbnails/haru-first-journey.jpg",
    heroImage: "/images/works/haru-first-journey/detail-hero.png",
    character: "HARU",
    tools: ["Google Flow", "Runway", "Kling AI", "ChatGPT", "Suno", "CapCut", "Aleph 2.0"],
    productionNotes: [
      { label: "Character", value: "HARU (Original FourFeetz Character)" },
      { label: "AI Workflow", value: "Google Flow · Runway · Kling AI · ChatGPT · Suno" },
      { label: "Enhancement", value: "Aleph 2.0 Relighting" },
      { label: "Goal", value: "Create a warm, realistic cinematic atmosphere with enhanced natural light and more film-like depth." },
    ],
    gallery: [
      { title: "Arrival", image: "/images/works/haru-first-journey/gallery/arrival.png" },
      { title: "Car Ride", image: "/images/works/haru-first-journey/gallery/car-ride.png" },
      { title: "Window Scene", image: "/images/works/haru-first-journey/gallery/window-scene.png" },
      { title: "Village Road", image: "/images/works/haru-first-journey/gallery/village-road.png" },
      { title: "First Step", image: "/images/works/haru-first-journey/gallery/first-step.png" },
      { title: "Sunset", image: "/images/works/haru-first-journey/gallery/sunset.png" },
    ],
    release: "July 2026",
    status: "Released",
    language: "English",
    resolution: "4K",
    badges: ["NEW", "ALEPH 2.0 ENHANCED"],
    watchDescription: "The latest cinematic version of HARU's first journey. This edition was enhanced using Aleph 2.0 relighting to maximize natural lighting, depth, and cinematic atmosphere while preserving the original composition.",
    moreVideos: [
      { title: "Window Scene", description: "HARU quietly enjoys the countryside while looking through the open window.", video: "/videos/films/haru/haru-window-scene.mp4", thumbnail: "/images/works/haru-first-journey/video-thumbnails/haru-window-scene.jpg" },
      { title: "First Step Toward Home", description: "HARU takes the first step into a new home, marking the beginning of the journey.", video: "/videos/films/haru/haru_steps_toward_house.mp4", thumbnail: "/images/works/haru-first-journey/video-thumbnails/haru-steps-toward-house.jpg" },
    ],
    creativeGoals: [
      { title: "Creative Goals", description: "Tell a complete emotional story in ninety seconds, preserve natural animal behavior, and let landscapes carry meaning without relying on heavy dialogue or spectacle.", href: "#watch" },
      { title: "Character Design", description: "HARU's cream-white coat, warm eyes, puppy proportions, and brown scarf form a compact visual system designed to remain readable across models, lenses, and lighting conditions.", href: "#watch" },
    ],
    pipeline: [
      { title: "Image Generation", description: "Character sheets, environment references, and shot-specific stills establish identity, composition, and light before motion begins.", href: "#watch" },
      { title: "Animation Workflow", description: "Runway and Kling tests focus on one action and one camera move per shot, with approved final frames reused for continuity.", href: "#watch" },
      { title: "Music Production", description: "A restrained piano-and-guitar theme follows the emotional edit and leaves space for ambience and visual performance.", href: "#watch" },
      { title: "Editing", description: "CapCut assembles timing, sound, titles, reframing, and final delivery versions while preserving a clean 4K master.", href: "#watch" },
      { title: "Quality Review", description: "Every shot is checked for face, fur, scarf, lighting, screen direction, motion, and transition continuity.", href: "#watch" },
      { title: "Publishing", description: "The locked master becomes platform-specific cinema, vertical, captioned, and social editions without changing the story.", href: "#watch" },
    ],
    timeline: [
      { step: "Idea", description: "Define a quiet first-journey story built around curiosity, courage, and home." },
      { step: "Storyboard", description: "Map the emotional beats into a simple cinematic sequence." },
      { step: "Reference Images", description: "Prepare consistent HARU visuals, lighting, mood, and shot references." },
      { step: "Animation", description: "Generate controlled motion tests for each key moment." },
      { step: "Voice", description: "Shape the narration rhythm and tone for a gentle short film." },
      { step: "Music", description: "Create a warm musical theme that supports HARU's first memory." },
      { step: "Editing", description: "Refine timing, shot order, sound, color, and final pacing." },
      { step: "Publishing", description: "Prepare the film for the web and multi-platform social release." },
    ],
    relatedInsights: [
      { title: "How HARU Was Created", description: "A practical look at building FourFeetz Studios' first original character.", href: "/insights/how-haru-was-created" },
      { title: "Runway Gen-4 Review", description: "Notes on image consistency, motion quality, and production workflow.", href: "/insights/runway-gen-4-review" },
      { title: "Image-to-Video Prompt Guide", description: "A framework for camera movement, subject motion, lighting, and continuity.", href: "/insights/image-to-video-prompts" },
    ],
    relatedResources: [
      { title: "Character Prompt", description: "Prompt systems for keeping HARU consistent across scenes.", href: "/resources/character-consistency-prompt-pack" },
      { title: "Workflow", description: "A repeatable AI short film pipeline from story to publishing.", href: "/resources/ai-short-film-workflow" },
      { title: "Production Notes", description: "A clean template for prompts, tools, settings, and results.", href: "/resources/production-notes-template" },
    ],
    musicSlugs: ["haru-main-theme"],
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-17",
    featured: true,
    publishStatus: "published",
    nextProject: { eyebrow: "In Production", title: "PORI — Coming Soon", description: "The next original FourFeetz story is already in production." },
  },
  {
    slug: "haru-relaxing-home",
    title: "HARU Relaxing at Home",
    category: "Long-form AI Film",
    duration: "4 min",
    description: "A calm long-form AI film featuring HARU resting peacefully in a cozy living room. Designed with subtle breathing, natural motion, and cinematic lighting for a relaxing viewing experience.",
    video: "/videos/films/haru/haru-relaxing-home.mp4",
    thumbnail: "/images/works/haru-relaxing-home/thumbnail.png",
    heroImage: "/images/works/haru-relaxing-home/thumbnail.png",
    character: "HARU",
    tools: ["Google Flow", "Aleph 2.0"],
    productionNotes: [
      { label: "AI Workflow", value: "Google Flow" },
      { label: "Lighting", value: "Aleph 2.0 Cinematic Lighting" },
      { label: "Format", value: "Long-form Relaxation" },
      { label: "Camera", value: "Static Camera" },
      { label: "Motion", value: "Natural Breathing Animation" },
    ],
    gallery: [
      { title: "Relaxing at Home", image: "/images/works/haru-relaxing-home/thumbnail.png" },
    ],
    release: "July 2026",
    status: "Released",
    language: "No Dialogue",
    resolution: "Full HD",
    watchDescription: "A quiet long-form viewing experience built around natural breathing, a static camera, and warm cinematic light.",
    publishedAt: "2026-07-16",
    featured: true,
    publishStatus: "published",
  },
];

export function getFilm(slug: string) {
  return films.find((film) => film.slug === slug);
}
