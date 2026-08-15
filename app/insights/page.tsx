import type { Metadata } from "next";
import InsightsHub from "@/components/InsightsHub";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: { absolute: "Insights | FourFeetz Studios" },
  description: "Production records from published FourFeetz animal-character projects, plus practical guides and clearly separated AI tool analysis.",
  alternates: englishLanguageAlternates("/insights", "/ko/insights"),
  openGraph: { title: "Insights | FourFeetz Studios", description: "Production records from published FourFeetz animal-character projects, plus practical guides and clearly separated AI tool analysis.", url: "https://fourfeetz.com/insights", images: ["/images/insights-hero-v2.png"] },
  twitter: { card: "summary_large_image", title: "Insights | FourFeetz Studios", description: "Real FourFeetz production records, practical guides, and clearly separated AI video tool analysis.", images: ["/images/insights-hero-v2.png"] },
};

export default function Page() {
  return <InsightsHub language="en" />;
}
