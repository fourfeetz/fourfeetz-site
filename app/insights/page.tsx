import type { Metadata } from "next";
import { Suspense } from "react";
import InsightsHub from "@/components/InsightsHub";

export const metadata: Metadata = {
  title: "Insights | FourFeetz Studios",
  description: "Production-tested AI filmmaking guides, HARU case studies, tool reviews, prompts and creative workflows from FourFeetz Studios.",
  alternates: { canonical: "https://www.fourfeetz.com/insights" },
  openGraph: { title: "Insights | FourFeetz Studios", description: "A professional creator knowledge hub built from real FourFeetz and HARU production experience.", url: "https://www.fourfeetz.com/insights", images: ["/images/insights-hero-v2.png"] },
  twitter: { card: "summary_large_image", title: "Insights | FourFeetz Studios", description: "Production-tested creator knowledge from FourFeetz Studios.", images: ["/images/insights-hero-v2.png"] },
};

export default function Page() {
  return <Suspense fallback={<main className="min-h-screen" />}><InsightsHub /></Suspense>;
}
