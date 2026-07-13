import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "AI Tool Comparisons", description: "Compare creative AI tools for video, image, music, voice, editing, and production workflows.", path: "/resources/tool-comparisons", image: "/images/resources/image-to-video-prompt-framework.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
