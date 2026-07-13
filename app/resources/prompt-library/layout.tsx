import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Prompt Library", description: "Explore reusable prompt structures for character, image, video, camera, lighting, and creative AI workflows.", path: "/resources/prompt-library", image: "/images/resources/character-consistency-prompt-pack.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
