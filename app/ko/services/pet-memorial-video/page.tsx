import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "반려동물 추모영상 제작 | 무지개다리 추억 영상 | FourFeetz" },
  description: "강아지와 고양이의 사진과 소중한 이야기를 바탕으로 따뜻한 반려동물 추모영상과 추억 영상을 제작합니다.",
  alternates: { canonical: "/ko/services/pet-memorial-video" },
};

export default function Page() {
  return <main className="bg-[#fbf7f1] text-[#2b2119]">
    <section className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm font-black tracking-[.2em] text-[#a67c52]">PET MEMORIAL STORY</p>
      <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">소중한 우리 아이의 기억을<br/>따뜻한 영상으로 남겨보세요</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-[#76685d]">강아지·고양이 사진과 함께한 이야기를 바탕으로 반려동물 추모영상과 무지개다리 추억 영상을 제작합니다. 단순한 사진 슬라이드가 아니라 아이의 분위기와 기억을 존중하는 이야기로 구성합니다.</p>
      <Link href="/ko/services#contact" className="mt-9 inline-flex rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white">무료 상담받기</Link>
    </section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-5xl"><h2 className="text-3xl font-black md:text-5xl">사진 속 기억을 소중하게 담습니다</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">함께했던 산책, 휴식, 햇살과 정원처럼 기억하고 싶은 분위기를 중심으로 차분하게 구성합니다. 자동 생성으로 끝내지 않고 장면과 편집 결과를 직접 확인합니다.</p></div></section>
    <section className="mx-auto max-w-5xl px-6 py-20"><h2 className="text-3xl font-black md:text-5xl">제작 가능한 영상</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{[["강아지·고양이 추모영상","사진과 추억을 바탕으로 짧은 감성 영상을 구성합니다."],["무지개다리 추억 영상","따뜻한 빛과 자연스러운 장면으로 소중한 기억을 표현합니다."],["생일·입양일 기념 영상","함께했던 특별한 날짜와 행복했던 시간을 기념합니다."],["가족 공유용 추억 영상","가족이 함께 간직하고 공유하기 좋은 영상으로 완성합니다."]].map(([t,d])=><article key={t} className="rounded-[28px] border border-[#eadfce] bg-white p-7"><h3 className="text-xl font-black">{t}</h3><p className="mt-3 leading-8 text-[#76685d]">{d}</p></article>)}</div><div className="mt-12 rounded-[36px] bg-[#6f4e37] p-9 text-white"><h2 className="text-3xl font-black">사진과 이야기를 먼저 보내주세요.</h2><p className="mt-4 leading-8 text-[#f4e8da]">사진 상태와 원하는 분위기를 확인한 뒤 구현 가능한 구성을 안내해 드립니다.</p><Link href="/ko/services#contact" className="mt-7 inline-flex rounded-full bg-white px-7 py-4 font-black text-[#6f4e37]">무료 상담받기</Link></div></section>
  </main>;
}
