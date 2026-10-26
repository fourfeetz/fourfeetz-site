import type { Metadata } from "next";
import StoreLandingPage from "@/components/store/StoreLandingPage";
import { englishLanguageAlternates } from "@/lib/localization";

const title = "AI Video Prompt Store | FourFeetz";
const description = "Beginner and intermediate AI pet video prompt packs and practical guides from FourFeetz. Product files and checkout are currently in preparation.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: englishLanguageAlternates("/store", "/ko/store"),
  openGraph: { type: "website", siteName: "FourFeetz Studios", title, description, url: "/store", images: [{ url: "/images/store/digital-guides-hero.png", alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/store/digital-guides-hero.png"] },
};

export default function Page() { return <StoreLandingPage language="en" />; }
