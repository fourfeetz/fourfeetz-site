import type { Metadata } from "next";
import { KoreanHomePage } from "@/components/korean/KoreanPages";
import { languageAlternates } from "@/lib/localization";

const title = "FourFeetz | 오리지널 동물 캐릭터 스튜디오";
const description = "FourFeetz는 자체 동물 캐릭터로 필름, 쇼츠, 릴렉싱 영상과 음악을 제작하고 실제 프로젝트 제작 기록을 공유하는 독립 스튜디오입니다.";

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
    images: [{ url: "/images/studio-hero-v2.png", alt: "FourFeetz 오리지널 동물 캐릭터 스튜디오" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/studio-hero-v2.png"] },
};

export default function Page() {
  return <KoreanHomePage />;
}
