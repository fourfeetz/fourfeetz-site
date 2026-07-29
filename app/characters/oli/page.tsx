import type { Metadata } from "next";
import CharacterDetailPage from "@/components/CharacterDetailPage";
import { getCharacter } from "@/lib/characterDetails";
import { englishLanguageAlternates } from "@/lib/localization";

const character = getCharacter("oli")!;

export const metadata: Metadata = {
  title: "OLI the Otter | FourFeetz Characters",
  description: "Meet OLI, the curious and clever FourFeetz otter who loves adventure and explores rivers, coasts, and hidden passages.",
  alternates: englishLanguageAlternates("/characters/oli", "/ko/characters/oli"),
  openGraph: {
    title: "OLI the Otter | FourFeetz Characters",
    description: character.tagline,
    images: ["/images/characters/oli/portrait.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OLI the Otter | FourFeetz Characters",
    description: character.tagline,
    images: ["/images/characters/oli/portrait.png"],
  },
};

export default function Page() {
  return <CharacterDetailPage character={character} />;
}
