import ProductionInsightArticle from "@/components/ProductionInsightArticle";
import { createKoreanMemorialInsightMetadata, getKoreanMemorialInsight } from "@/lib/koreanMemorialInsights";

export const metadata = createKoreanMemorialInsightMetadata("pet-memorial-video-photo-guide");

export default function Page() {
  return <ProductionInsightArticle article={getKoreanMemorialInsight("pet-memorial-video-photo-guide")} language="ko" />;
}
