import type { Metadata } from "next";
import HaruRelaxingHomeFilm from "@/components/HaruRelaxingHomeFilm";
import { relaxingHomeFilm } from "@/lib/films";

export const metadata: Metadata = {
  title: { absolute: "HARU Relaxing at Home | FourFeetz Studios" },
  description: relaxingHomeFilm.description,
  alternates: { canonical: "/works/haru-relaxing-home" },
  openGraph: {
    type: "video.movie",
    title: "HARU Relaxing at Home | FourFeetz Studios",
    description: relaxingHomeFilm.description,
    url: "/works/haru-relaxing-home",
    images: [{ url: relaxingHomeFilm.thumbnail, alt: "HARU resting peacefully in a cozy living room" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HARU Relaxing at Home | FourFeetz Studios",
    description: relaxingHomeFilm.description,
    images: [relaxingHomeFilm.thumbnail],
  },
};

export default function Page() {
  return <HaruRelaxingHomeFilm />;
}
