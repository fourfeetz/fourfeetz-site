export type Short = {
  id: string;
  title: string;
  description: string;
  duration: string;
  tools: string[];
  video: string;
  poster: string;
};

export const shorts: Short[] = [
  {
    id: "short-001",
    title: "Morning with HARU",
    description: "A peaceful morning moment with HARU in cinematic style.",
    duration: "15 sec",
    tools: ["Google Flow", "Runway", "Kling AI", "ChatGPT", "Suno"],
    video: "/videos/shorts/haru/short-001.mp4",
    poster: "/images/shorts/haru/short-001.jpg",
  },
  {
    id: "short-002",
    title: "Watching the Sunset",
    description: "HARU quietly watches the beautiful countryside at sunset.",
    duration: "15 sec",
    tools: ["Google Flow", "Runway", "Kling AI", "ChatGPT", "Suno"],
    video: "/videos/shorts/haru/short-002.mp4",
    poster: "/images/shorts/haru/short-002.jpg",
  },
];
