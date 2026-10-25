import type { Metadata } from "next";
import StorePage from "@/components/store/StorePage";
import { englishLanguageAlternates } from "@/lib/localization";

const title = "AI Video Prompt Store | FourFeetz";
const description = "Beginner and intermediate AI pet video prompt packs and practical guides from FourFeetz. Product files and checkout are currently in preparation.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: englishLanguageAlternates("/store", "/ko/store"),
  openGraph: { type: "website", siteName: "FourFeetz Studios", title, description, url: "/store", images: [{ url: "/images/insights/image-to-video-prompts.png", alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/insights/image-to-video-prompts.png"] },
};

export default function Page() { return <StorePage language="en" />; }
