import ProductionInsightArticle from "@/components/ProductionInsightArticle";
import { howHaruInsight } from "@/lib/howHaruInsight";
import { createProductionInsightMetadata } from "@/lib/productionInsights";

export const metadata = createProductionInsightMetadata(howHaruInsight);

export default function Page() {
  return <ProductionInsightArticle article={howHaruInsight} />;
}
