import type { Metadata } from "next";
import CharacterDetailPage from "@/components/CharacterDetailPage";
import { getCharacter } from "@/lib/characterDetails";

const character = getCharacter("oli")!;

export const metadata: Metadata = {
  title: "OLI | FourFeetz Characters",
  description: character.story,
  alternates: { canonical: "/characters/oli" },
  openGraph: { title: "OLI | FourFeetz Characters", description: character.tagline, images: [`/images/characters/oli/portrait.png`] },
  twitter: { card: "summary_large_image", title: "OLI | FourFeetz Characters", description: character.tagline, images: [`/images/characters/oli/portrait.png`] },
};

export default function Page() {
  return <CharacterDetailPage character={character} />;
}
