import type { Metadata } from "next";
import CharacterDetailPage from "@/components/CharacterDetailPage";
import { getCharacter } from "@/lib/characterDetails";
import { englishLanguageAlternates } from "@/lib/localization";

const character = getCharacter("ruru")!;

export const metadata: Metadata = {
  title: "RURU the Red Panda | FourFeetz Character",
  description: "Meet RURU, FourFeetz's shy and playful red panda character, and explore his published short, visual identity, character story, and production notes.",
  alternates: englishLanguageAlternates("/characters/ruru", "/ko/characters/ruru"),
  openGraph: {
    title: "RURU the Red Panda | FourFeetz Character",
    description: "Meet RURU, FourFeetz's shy and playful red panda character, and explore his published short, visual identity, character story, and production notes.",
    images: ["/images/characters/ruru/portrait.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RURU the Red Panda | FourFeetz Character",
    description: "Meet RURU, FourFeetz's shy and playful red panda character, and explore his published short, visual identity, character story, and production notes.",
    images: ["/images/characters/ruru/portrait.png"],
  },
};

export default function Page() {
  return <CharacterDetailPage character={character} />;
}
