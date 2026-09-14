import type { Metadata } from "next";
import Link from "next/link";
import { KoreanServicesPage } from "@/components/korean/KoreanPages";

export const metadata: Metadata = {
  title: { absolute: "AI 영상 제작 서비스 | FourFeetz" },
  description: "FourFeetz는 반려동물 맞춤 영상, 반려동물 추모영상, 브랜드 광고와 반려동물 업체 홍보 콘텐츠를 제작합니다.",
  alternates: { canonical: "/ko/services" },
};

export default function ServicesPage() {
  return <>
    <KoreanServicesPage />
    <section className="border-t border-[#eadfce] bg-[#fffaf4] px-6 py-16">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm md:flex md:items-center md:justify-between md:gap-10 md:p-10">
        <div>
          <p className="text-sm font-black text-[#a67c52]">개인 고객 · 추억과 추모</p>
          <h2 className="mt-3 text-3xl font-black text-[#2b2119] md:text-4xl">반려동물 추모영상</h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#76685d]">강아지와 고양이의 소중한 사진과 기억을 차분하게 담아 오래 간직할 수 있는 무지개다리 추억 영상으로 제작합니다.</p>
        </div>
        <Link href="/ko/services/pet-memorial-video" className="mt-7 inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white md:mt-0">추모영상 자세히 보기</Link>
      </div>
    </section>
  </>;
}
