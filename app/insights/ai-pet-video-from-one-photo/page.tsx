import SearchFocusedInsightPage from "@/components/SearchFocusedInsightPage";
import { createSearchFocusedInsightMetadata } from "@/lib/searchFocusedInsights";

export const metadata = createSearchFocusedInsightMetadata("ai-pet-video-from-one-photo", "en");
export default function Page() { return <SearchFocusedInsightPage slug="ai-pet-video-from-one-photo" language="en" />; }
