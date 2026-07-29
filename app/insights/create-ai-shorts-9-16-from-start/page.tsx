import ProductionInsightArticle from "@/components/ProductionInsightArticle";
import {
  createNewProductionGuideMetadata,
  newProductionGuides,
} from "@/lib/newProductionGuides";

const slug = "create-ai-shorts-9-16-from-start";

export const metadata = createNewProductionGuideMetadata(slug, "en");

export default function Page() {
  return <ProductionInsightArticle article={newProductionGuides[slug].en} />;
}
