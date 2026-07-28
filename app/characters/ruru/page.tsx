import type { Metadata } from "next";
import CharacterDetailPage from "@/components/CharacterDetailPage";
import { getCharacter } from "@/lib/characterDetails";
import { englishLanguageAlternates } from "@/lib/localization";

const character = getCharacter("ruru")!;

export const metadata: Metadata = {
  title: "RURU | FourFeetz Characters",
  description: character.tagline,
  alternates: englishLanguageAlternates("/characters/ruru", "/ko/characters/ruru"),
  openGraph: {
    title: "RURU | FourFeetz Characters",
    description: character.tagline,
    images: ["/images/characters/ruru/portrait.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RURU | FourFeetz Characters",
    description: character.tagline,
    images: ["/images/characters/ruru/portrait.png"],
  },
};

export default function Page() {
  return <CharacterDetailPage character={character} />;
}
