import type { Metadata } from "next";
import InsightsHub from "@/components/InsightsHub";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: { absolute: "Insights | FourFeetz Studios" },
  description: "Practical AI animation production guides, real-world tests, and carefully analyzed updates from the tools used by FourFeetz.",
  alternates: englishLanguageAlternates("/insights", "/ko/insights"),
  openGraph: { title: "Insights | FourFeetz Studios", description: "Practical AI animation production guides, real-world tests, and carefully analyzed updates from the tools used by FourFeetz.", url: "https://fourfeetz.com/insights", images: ["/images/insights-hero-v2.png"] },
  twitter: { card: "summary_large_image", title: "Insights | FourFeetz Studios", description: "Practical production guides, real-world tests, and analyzed AI video tool updates.", images: ["/images/insights-hero-v2.png"] },
};

export default function Page() {
  return <InsightsHub language="en" />;
}
