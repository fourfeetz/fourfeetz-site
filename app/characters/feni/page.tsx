import type { Metadata } from "next";
import CharacterDetailPage from "@/components/CharacterDetailPage";
import { getCharacter } from "@/lib/characterDetails";
import { englishLanguageAlternates } from "@/lib/localization";

const character = getCharacter("feni")!;

export const metadata: Metadata = {
  title: "FENI the Fennec Fox | FourFeetz Characters",
  description: "Meet FENI, the clever, curious, and gently cautious baby fennec fox in the FourFeetz original character universe.",
  alternates: englishLanguageAlternates("/characters/feni", "/ko/characters/feni"),
  openGraph: {
    title: "FENI the Fennec Fox | FourFeetz Characters",
    description: character.tagline,
    images: ["/images/characters-hero-v2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FENI the Fennec Fox | FourFeetz Characters",
    description: character.tagline,
    images: ["/images/characters-hero-v2.png"],
  },
};

export default function Page() {
  return <CharacterDetailPage character={character} />;
}
