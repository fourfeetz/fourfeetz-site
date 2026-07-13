import type { Metadata } from "next";
import CharacterDetailPage from "@/components/CharacterDetailPage";
import { getCharacter } from "@/lib/characterDetails";

const character = getCharacter("luna")!;

export const metadata: Metadata = {
  title: "LUNA | FourFeetz Characters",
  description: character.story,
  alternates: { canonical: "/characters/luna" },
  openGraph: { title: "LUNA | FourFeetz Characters", description: character.tagline, images: [`/images/characters/luna/portrait.png`] },
  twitter: { card: "summary_large_image", title: "LUNA | FourFeetz Characters", description: character.tagline, images: [`/images/characters/luna/portrait.png`] },
};

export default function Page() {
  return <CharacterDetailPage character={character} />;
}
