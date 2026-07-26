import ToolNewsInsightArticle from "@/components/ToolNewsInsightArticle";
import { createToolNewsMetadata, getToolNewsInsight } from "@/lib/toolNewsInsights";

const slug = "runway-dev-ai-media-platform" as const;

export const metadata = createToolNewsMetadata(slug);

export default function Page() {
  return <ToolNewsInsightArticle article={getToolNewsInsight(slug)} />;
}
