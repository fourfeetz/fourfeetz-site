import ToolNewsInsightArticle from "@/components/ToolNewsInsightArticle";
import { createToolNewsMetadata, getToolNewsInsight } from "@/lib/toolNewsInsights";

const slug = "luma-ray-3-2-production-control" as const;

export const metadata = createToolNewsMetadata(slug);

export default function Page() {
  return <ToolNewsInsightArticle article={getToolNewsInsight(slug)} />;
}
