import type { Metadata } from "next";
import CharacterDetailPage from "@/components/CharacterDetailPage";
import { getCharacter } from "@/lib/characterDetails";
import { englishLanguageAlternates } from "@/lib/localization";

const character = getCharacter("hugo")!;

export const metadata: Metadata = {
  title: "HUGO | FourFeetz Characters",
  description: character.story,
  alternates: englishLanguageAlternates("/characters/hugo", "/ko/characters/hugo"),
  openGraph: { title: "HUGO | FourFeetz Characters", description: character.tagline, images: [`/images/characters/hugo/portrait.png`] },
  twitter: { card: "summary_large_image", title: "HUGO | FourFeetz Characters", description: character.tagline, images: [`/images/characters/hugo/portrait.png`] },
};

export default function Page() {
  return <CharacterDetailPage character={character} />;
}
