import ProductionInsightArticle from "@/components/ProductionInsightArticle";
import { createNewProductionGuideMetadata, newProductionGuides } from "@/lib/newProductionGuides";

const slug = "pet-hotel-promo-video-production-notes";

export const metadata = createNewProductionGuideMetadata(slug, "en");

export default function Page() {
  return <ProductionInsightArticle article={newProductionGuides[slug].en} />;
}
