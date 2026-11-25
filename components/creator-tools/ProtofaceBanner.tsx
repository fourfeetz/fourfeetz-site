import Image from "next/image";
import { protofaceAffiliateHref } from "@/lib/creator-tools/protoface";
import type { ToolLanguage } from "@/lib/creator-tools/content";

export default function ProtofaceBanner({ language }: { language: ToolLanguage }) {
  const ko = language === "ko";
  return <section aria-label={ko ? "Protoface 제휴 안내" : "Protoface affiliate invitation"} className="mx-auto max-w-6xl px-5 pb-14 sm:px-6">
    <a href={protofaceAffiliateHref} target="_blank" rel="sponsored noopener noreferrer" aria-label={ko ? "Protoface Studio에서 AI 영상 만들기 (제휴 링크, 새 창)" : "Create AI videos in Protoface Studio (affiliate link, new tab)"} className="group grid overflow-hidden rounded-[28px] border border-[#d5c2a7] bg-[#27352f] text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#a67c52] md:grid-cols-[.8fr_1.2fr]">
      <div className="relative min-h-52 overflow-hidden bg-[#f2e8dc]"><Image src="/images/insights/protoface/multiple-ai-video-models-workflow.png" alt={ko ? "FourFeetz의 여러 AI 영상 모델 제작 워크플로 이미지" : "FourFeetz production artwork for a multi-model AI video workflow"} fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" /></div>
      <div className="p-7 sm:p-9"><p className="text-sm font-bold tracking-[.18em] text-[#d8c3ad]">PROTOFACE STUDIO · FOURFEETZ</p><h2 className="mt-4 text-2xl font-black leading-snug sm:text-3xl">{ko ? "계산한 예산으로, Protoface에서 시작해보세요." : "Take your video plan into Protoface."}</h2><p className="mt-4 text-base leading-8 text-[#e4e9e3]">{ko ? "여러 AI 영상 모델을 한곳에서 살펴보고, 원하는 모델과 설정의 크레딧을 확인한 뒤 제작하세요." : "Explore AI video models in one place. Check the credits for your chosen model and settings before creating."}</p><span className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#f5e6c8] px-6 py-3 text-base font-black text-[#27352f]">{ko ? "Protoface Studio 바로가기 ↗" : "Open Protoface Studio ↗"}</span></div>
    </a>
    <p className="mt-4 text-sm leading-7 text-[#76685d]">{ko ? "제휴 안내: 이 이미지 버튼은 FourFeetz 제휴 링크입니다. 링크를 통한 구매 시 FourFeetz가 수수료를 받을 수 있으며 이용자에게 추가 비용은 발생하지 않습니다." : "Affiliate disclosure: this image button uses a FourFeetz affiliate link. FourFeetz may receive a commission from qualifying purchases at no additional cost to you."}</p>
  </section>;
}
