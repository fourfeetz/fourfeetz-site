import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Creative Notes", description: "Explore practical FourFeetz Studios notes about AI video, prompts, tools, music, and production workflows.", path: "/notes", image: "/images/insights-hero.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
