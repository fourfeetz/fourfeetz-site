import type { Metadata } from "next";
import VideosHub, { normalizeVideoFilter } from "@/components/VideosHub";
import { languageAlternates } from "@/lib/localization";
import { koreanPageTypographyClass } from "@/lib/koreanServiceStyles";

const title = "AI 영상: 롱폼과 쇼츠 | FourFeetz";
const description = "FourFeetz가 제작한 AI 롱폼 영상과 캐릭터 쇼츠를 한곳에서 만나보세요.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: languageAlternates("/videos", "/ko/videos"),
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title,
    description,
    url: "/ko/videos",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [{ url: "/images/works-hero-v2.png", alt: "FourFeetz AI 롱폼 영상과 캐릭터 쇼츠" }],
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
  return <div className={koreanPageTypographyClass}><VideosHub language="ko" activeFilter={filter} /></div>;
}
