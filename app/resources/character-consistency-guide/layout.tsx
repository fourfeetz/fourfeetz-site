import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Character Consistency Guide Resource", description: "Build visually consistent AI characters across images, video shots, prompts, and production tools.", path: "/resources/character-consistency-guide", image: "/images/resources/character-consistency-prompt-pack.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
