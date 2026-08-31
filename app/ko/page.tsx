import type { Metadata } from "next";
import KoreanSalesHome from "@/components/korean/KoreanSalesHome";
import { languageAlternates } from "@/lib/localization";

const title = "FourFeetz | 반려동물 맞춤 영상·콘텐츠 제작 스튜디오";
const description = "반려동물 사진과 이야기를 감성적인 맞춤 영상과 디지털 작품으로 만들고, 반려동물 업체용 홍보 콘텐츠를 제작하는 FourFeetz Studios입니다.";

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
  return <KoreanSalesHome />;
}
