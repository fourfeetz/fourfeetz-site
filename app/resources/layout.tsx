import { createPageMetadata } from "@/lib/seo";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata = {
  ...createPageMetadata({ title: "Resources", description: "Download prompt libraries, workflow guides, templates, and practical resources for AI creative production.", path: "/resources", image: "/images/resources-hero.png" }),
  alternates: englishLanguageAlternates("/resources", "/ko/resources"),
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
