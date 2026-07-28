import type { Metadata } from "next";
import CharacterDetailPage from "@/components/CharacterDetailPage";
import { getCharacter } from "@/lib/characterDetails";
import { englishLanguageAlternates } from "@/lib/localization";

const character = getCharacter("milo")!;

export const metadata: Metadata = {
  title: "MILO | FourFeetz Characters",
  description: character.story,
  alternates: englishLanguageAlternates("/characters/milo", "/ko/characters/milo"),
  openGraph: { title: "MILO | FourFeetz Characters", description: character.tagline, images: [`/images/characters/milo/portrait.png`] },
  twitter: { card: "summary_large_image", title: "MILO | FourFeetz Characters", description: character.tagline, images: [`/images/characters/milo/portrait.png`] },
};

export default function Page() {
  return <CharacterDetailPage character={character} />;
}
