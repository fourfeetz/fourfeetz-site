import ProductionInsightArticle from "@/components/ProductionInsightArticle";
import { createProductionInsightMetadata, getProductionInsight } from "@/lib/productionInsights";

const slug = "runway-gen45-review" as const;
export const metadata = createProductionInsightMetadata(slug);
export default function Page() { return <ProductionInsightArticle article={getProductionInsight(slug)} />; }
