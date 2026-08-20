import type { Metadata } from "next";
import InsightsCategoryPage from "@/components/insights/InsightsCategoryPage";
import { insightGroups } from "@/lib/insightGroups";
import { englishLanguageAlternates } from "@/lib/localization";
import { hasKoreanInsightGroupContent } from "@/lib/insights";

const content = insightGroups.news.en;

export const metadata: Metadata = {
  title: { absolute: content.title },
  description: content.description,
  alternates: hasKoreanInsightGroupContent("news")
    ? englishLanguageAlternates("/insights/news", "/ko/insights/news")
    : { canonical: "/insights/news" },
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title: content.title,
    description: content.description,
    url: "https://fourfeetz.com/insights/news",
    images: ["/images/insights-hero-v2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: content.title,
    description: content.description,
    images: ["/images/insights-hero-v2.png"],
  },
};

export default function Page() {
  return <InsightsCategoryPage group="news" language="en" />;
}
