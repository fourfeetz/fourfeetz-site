import type { Metadata } from "next";
import { KoreanHomePage } from "@/components/korean/KoreanPages";
import { languageAlternates } from "@/lib/localization";

const title = "FourFeetz | AI 애니메이션 스튜디오";
const description = "FourFeetz는 AI 캐릭터, 감성 쇼츠, 힐링 영상과 제작 인사이트를 만드는 AI 애니메이션 스튜디오입니다.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: languageAlternates("/", "/ko"),
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title,
    description,
    url: "/ko",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [{ url: "/images/studio-hero-v2.png", alt: "FourFeetz AI 애니메이션 스튜디오" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/studio-hero-v2.png"] },
};

export default function Page() {
  return <KoreanHomePage />;
}
