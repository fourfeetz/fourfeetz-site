import SearchFocusedInsightPage from "@/components/SearchFocusedInsightPage";
import { createSearchFocusedInsightMetadata } from "@/lib/searchFocusedInsights";

export const metadata = createSearchFocusedInsightMetadata("why-ai-video-production-fails", "en");

export default function Page() {
  return <SearchFocusedInsightPage slug="why-ai-video-production-fails" language="en" />;
}
