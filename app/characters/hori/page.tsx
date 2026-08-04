import type { Metadata } from "next";
import CharacterDetailPage from "@/components/CharacterDetailPage";
import { getCharacter } from "@/lib/characterDetails";
import { englishLanguageAlternates } from "@/lib/localization";

const character = getCharacter("hori")!;

export const metadata: Metadata = {
  title: "HORI the Baby Tiger | FourFeetz Characters",
  description: "Meet HORI, the playful, affectionate, and gentle baby tiger in the FourFeetz original character universe.",
  alternates: englishLanguageAlternates("/characters/hori", "/ko/characters/hori"),
  openGraph: {
    title: "HORI the Baby Tiger | FourFeetz Characters",
    description: character.tagline,
    images: ["/images/characters-hero-v2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "HORI the Baby Tiger | FourFeetz Characters",
    description: character.tagline,
    images: ["/images/characters-hero-v2.png"],
  },
};

export default function Page() {
  return <CharacterDetailPage character={character} />;
}
