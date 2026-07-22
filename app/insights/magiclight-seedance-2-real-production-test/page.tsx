import ProductionInsightArticle from "@/components/ProductionInsightArticle";
import { magicLightInsight } from "@/lib/magicLightInsight";
import { createProductionInsightMetadata } from "@/lib/productionInsights";

export const metadata = createProductionInsightMetadata(magicLightInsight);

export default function Page() {
  return <ProductionInsightArticle article={magicLightInsight} />;
}
