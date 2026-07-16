export type Film = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  video: string;
  thumbnail: string;
  description: string;
  character: string;
  productionNotes: string[];
};

export const relaxingHomeFilm: Film = {
  slug: "haru-relaxing-home",
  title: "HARU Relaxing at Home",
  category: "Long-form AI Film",
  duration: "4 min",
  video: "/videos/films/haru/haru-relaxing-home.mp4",
  thumbnail: "/images/works/haru-relaxing-home/thumbnail.png",
  description: "A calm long-form AI film featuring HARU resting peacefully in a cozy living room. Designed with subtle breathing, natural motion, and cinematic lighting for a relaxing viewing experience.",
  character: "HARU",
  productionNotes: [
    "Google Flow",
    "Aleph 2.0 Cinematic Lighting",
    "Long-form Relaxation",
    "Static Camera",
    "Natural Breathing Animation",
  ],
};
