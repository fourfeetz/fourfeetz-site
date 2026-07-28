import type { Metadata } from "next";
import FilmsIndex from "@/components/FilmsIndex";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: { absolute: "Films | FourFeetz Studios" },
  description: "Explore original AI films, production details, behind-the-scenes workflows, and creative projects from FourFeetz Studios.",
  alternates: englishLanguageAlternates("/films", "/ko/films"),
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title: "Films | FourFeetz Studios",
    description: "Explore original AI films, production details, behind-the-scenes workflows, and creative projects from FourFeetz Studios.",
    url: "https://fourfeetz.com/films",
    images: ["/images/works-hero-v2.png"],
  },
};

export default function Page() {
  return <FilmsIndex />;
}
