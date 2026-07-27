import ToolNewsInsightArticle from "@/components/ToolNewsInsightArticle";
import { createToolNewsMetadata, getToolNewsInsight } from "@/lib/toolNewsInsights";

const slug = "elevenlabs-music-v2-references" as const;

export const metadata = createToolNewsMetadata(slug);

export default function Page() {
  return <ToolNewsInsightArticle article={getToolNewsInsight(slug)} />;
}
