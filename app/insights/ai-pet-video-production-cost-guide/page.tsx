import SearchFocusedInsightPage from "@/components/SearchFocusedInsightPage";
import { createSearchFocusedInsightMetadata } from "@/lib/searchFocusedInsights";

export const metadata = createSearchFocusedInsightMetadata("ai-pet-video-production-cost-guide", "en");
export default function Page() { return <SearchFocusedInsightPage slug="ai-pet-video-production-cost-guide" language="en" />; }
