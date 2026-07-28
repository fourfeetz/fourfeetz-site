import { createPageMetadata } from "@/lib/seo";
import { englishLanguageAlternates } from "@/lib/localization";
export const metadata = { ...createPageMetadata({ title: "Characters", description: "Meet HARU, PORI, LUNA, HUGO, RURU, and MILO in the original FourFeetz character universe.", path: "/characters", image: "/images/characters-hero.png" }), alternates: englishLanguageAlternates("/characters", "/ko/characters") };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
