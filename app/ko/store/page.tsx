import type { Metadata } from "next";
import StoreLandingPage from "@/components/store/StoreLandingPage";
import { languageAlternates } from "@/lib/localization";

const title = "AI 영상 프롬프트 스토어 | FourFeetz";
const description = "직접 AI 반려동물 영상을 만들고 싶은 초급·중급 사용자를 위한 범용 프롬프트와 실전 가이드입니다. 상품 파일과 결제는 현재 준비 중입니다.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: languageAlternates("/store", "/ko/store"),
  openGraph: { type: "website", siteName: "FourFeetz Studios", title, description, url: "/ko/store", locale: "ko_KR", alternateLocale: ["en_US"], images: [{ url: "/images/store/digital-guides-hero.png", alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/store/digital-guides-hero.png"] },
};

export default function Page() { return <StoreLandingPage language="ko" />; }
