import Link from "next/link";
import { ArrowUpRight, Calculator, Frame, HardDrive } from "lucide-react";
import { creatorTools, type ToolLanguage } from "@/lib/creator-tools/content";

export default function ToolCards({ language, compact = false }: { language: ToolLanguage; compact?: boolean }) {
  const ko = language === "ko";
  const icons = { "ai-video-cost-calculator": Calculator, "aspect-ratio-calculator": Frame, "video-file-size-calculator": HardDrive };
  return <section aria-labelledby={`creator-tools-${language}`} className={`border-y border-[#eadfce] bg-[#fffdf8] px-6 ${compact ? "py-12" : "py-16 md:py-20"}`}>
    <div className="mx-auto max-w-7xl"><p className="text-sm font-bold tracking-[.18em] text-[#a67c52]">FREE CREATOR TOOLS</p><h2 id={`creator-tools-${language}`} className="mt-3 text-3xl font-black tracking-tight text-[#2b2119] md:text-4xl">{ko ? "영상 만들기 전, 무료로 계산하세요." : "Plan your next video. Free."}</h2><p className="mt-4 max-w-2xl text-base leading-7 text-[#76685d]">{ko ? "화면비부터 파일 용량, AI 생성 예산까지. 로그인이나 파일 업로드 없이 브라우저에서 바로 확인하세요." : "Check aspect ratios, export sizes and AI generation budgets. No signup, payment or file upload required."}</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{creatorTools.map(tool => { const Icon = icons[tool.slug]; const copy = tool[language]; return <Link key={tool.slug} href={`${ko ? "/ko" : ""}/tools/${tool.slug}`} className="group rounded-3xl border border-[#e4d6c5] bg-white p-6 text-[#2b2119] transition hover:-translate-y-1 hover:border-[#a67c52] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
        <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-[#f2e8dc] text-[#6f4e37]"><Icon size={24} aria-hidden="true" /></span><span className="text-sm font-bold text-[#a67c52]">{tool.number} / FREE</span></div><h3 className="mt-6 text-xl font-black leading-snug">{copy.title}</h3><p className="mt-3 text-base leading-7 text-[#76685d]">{copy.description}</p><span className="mt-6 inline-flex items-center gap-2 font-bold text-[#6f4e37]">{ko ? "무료로 사용하기" : "Use free tool"}<ArrowUpRight size={18} aria-hidden="true" /></span>
      </Link>; })}</div>
    </div>
  </section>;
}
