import type { Metadata } from "next";
import CharacterDetailPage from "@/components/CharacterDetailPage";
import { getCharacter } from "@/lib/characterDetails";
import { englishLanguageAlternates } from "@/lib/localization";

const character = getCharacter("pori")!;

export const metadata: Metadata = {
  title: "PORI | FourFeetz Characters",
  description: character.story,
  alternates: englishLanguageAlternates("/characters/pori", "/ko/characters/pori"),
  openGraph: { title: "PORI | FourFeetz Characters", description: character.tagline, images: [`/images/characters/pori/portrait.png`] },
  twitter: { card: "summary_large_image", title: "PORI | FourFeetz Characters", description: character.tagline, images: [`/images/characters/pori/portrait.png`] },
};

export default function Page() {
  return <CharacterDetailPage character={character} />;
}
