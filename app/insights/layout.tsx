import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Insights", description: "Practical articles about AI filmmaking tools, prompts, workflows, music, design, and creative production.", path: "/insights", image: "/images/insights-hero.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
