import type { Metadata } from "next";
import VideosHub, { normalizeVideoFilter } from "@/components/VideosHub";
import { englishLanguageAlternates } from "@/lib/localization";

const title = "AI Videos: Films & Shorts | FourFeetz";
const description = "Watch finished FourFeetz films and animal character shorts with direct links to the real production notes, scene decisions and review evidence behind them.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: englishLanguageAlternates("/videos", "/ko/videos"),
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title,
    description,
    url: "/videos",
    images: [{ url: "/images/works-hero-v2.png", alt: "FourFeetz AI films and character shorts" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/works-hero-v2.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ type?: string | string[] }>;
}) {
  const filter = normalizeVideoFilter((await searchParams).type);
  return <VideosHub language="en" activeFilter={filter} />;
}
