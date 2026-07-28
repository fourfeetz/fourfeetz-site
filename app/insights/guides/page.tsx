import type { Metadata } from "next";
import InsightsCategoryPage from "@/components/insights/InsightsCategoryPage";
import { insightGroups } from "@/lib/insightGroups";
import { englishLanguageAlternates } from "@/lib/localization";

const content = insightGroups.guides.en;

export const metadata: Metadata = {
  title: { absolute: content.title },
  description: content.description,
  alternates: englishLanguageAlternates("/insights/guides", "/ko/insights/guides"),
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title: content.title,
    description: content.description,
    url: "https://fourfeetz.com/insights/guides",
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
  return <InsightsCategoryPage group="guides" language="en" />;
}
