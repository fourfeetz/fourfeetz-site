import type { Metadata } from "next";
import PetCelebrationPage from "@/components/PetCelebrationPage";
import { languageAlternates } from "@/lib/localization";

const title = "반려동물 축하영상 제작 | 생일·입양 기념일 | FourFeetz";
const description = "반려동물 사진으로 생일·입양 기념일을 축하하는 맞춤 AI 영상을 제작합니다. 정원 생일파티 컨셉과 제작 가격, 사진 준비 방법을 확인하세요.";
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: languageAlternates("/services/pet-celebration-video", "/ko/services/pet-celebration-video"),
  openGraph: { type: "website", siteName: "FourFeetz Studios", title, description, url: "/ko/services/pet-celebration-video", locale: "ko_KR", images: [{ url: "/images/services/pet-celebration-garden.jpg", alt: "정원 생일파티 축하영상 컨셉" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/services/pet-celebration-garden.jpg"] },
};

export default function Page() { return <PetCelebrationPage language="ko" />; }

