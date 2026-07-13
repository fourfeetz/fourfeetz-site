import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Insights", description: "Read practical FourFeetz Studios articles about AI video, music, prompts, tools, and production workflows.", path: "/blog", image: "/images/insights-hero.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
