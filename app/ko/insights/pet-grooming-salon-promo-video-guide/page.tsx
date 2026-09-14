import SearchFocusedInsightPage from "@/components/SearchFocusedInsightPage";
import { createSearchFocusedInsightMetadata } from "@/lib/searchFocusedInsights";

export const metadata = createSearchFocusedInsightMetadata("pet-grooming-salon-promo-video-guide", "ko");
export default function Page() { return <SearchFocusedInsightPage slug="pet-grooming-salon-promo-video-guide" language="ko" />; }
