import type { Metadata } from "next";
import CharacterDetailPage from "@/components/CharacterDetailPage";
import { getCharacter } from "@/lib/characterDetails";
import { englishLanguageAlternates } from "@/lib/localization";

const character = getCharacter("haru")!;

export const metadata: Metadata = {
  title: "HARU | FourFeetz Characters",
  description: character.story,
  alternates: englishLanguageAlternates("/characters/haru", "/ko/characters/haru"),
  openGraph: { title: "HARU | FourFeetz Characters", description: character.tagline, images: [`/images/characters/haru/portrait.png`] },
  twitter: { card: "summary_large_image", title: "HARU | FourFeetz Characters", description: character.tagline, images: [`/images/characters/haru/portrait.png`] },
};

export default function Page() {
  return <CharacterDetailPage character={character} />;
}
