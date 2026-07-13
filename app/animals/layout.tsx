import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Original Characters", description: "Meet the original animal characters created for FourFeetz Studios films, music, and character-led stories.", path: "/animals", image: "/images/characters-hero.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
