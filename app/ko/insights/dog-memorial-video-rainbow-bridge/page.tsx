import ProductionInsightArticle from "@/components/ProductionInsightArticle";
import { createKoreanMemorialInsightMetadata, getKoreanMemorialInsight } from "@/lib/koreanMemorialInsights";

export const metadata = createKoreanMemorialInsightMetadata("dog-memorial-video-rainbow-bridge");

export default function Page() {
  return <ProductionInsightArticle article={getKoreanMemorialInsight("dog-memorial-video-rainbow-bridge")} language="ko" />;
}
