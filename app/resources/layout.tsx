import { createPageMetadata } from "@/lib/seo";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata = {
  ...createPageMetadata({ title: "Resources", description: "Read public web guides, worksheets, and review frameworks derived from FourFeetz production work without exposing private character assets.", path: "/resources", image: "/images/resources-hero.png" }),
  alternates: englishLanguageAlternates("/resources", "/ko/resources"),
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
