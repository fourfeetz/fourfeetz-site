import { createPageMetadata } from "@/lib/seo";
import InsightsArticleExperience from "@/components/InsightsArticleExperience";

export const metadata = createPageMetadata({ title: "Insights", description: "Production-tested FourFeetz Studios knowledge about AI filmmaking, HARU, prompts, tools, music and creative workflows.", path: "/insights", image: "/images/insights-hero-v2.png" });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}<InsightsArticleExperience /></>;
}
