import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "./Calculator";
import { creatorTools, type CreatorTool, type ToolLanguage } from "@/lib/creator-tools/content";

const base = "https://fourfeetz.com";
export function toolMetadata(tool: CreatorTool, language: ToolLanguage): Metadata {
  const ko = language === "ko";
  const copy = tool[language];
  const enPath = `/tools/${tool.slug}`;
  const koPath = `/ko${enPath}`;
  const path = ko ? koPath : enPath;
  const title = `${copy.title} | ${ko ? "무료·로그인 없음" : "Free, No Signup"} | FourFeetz`;
  return {
    title: { absolute: title }, description: copy.description,
    alternates: { canonical: path, languages: { en: enPath, ko: koPath, "x-default": koPath } },
    openGraph: { type: "website", siteName: "FourFeetz Studios", title, description: copy.description, url: path, locale: ko ? "ko_KR" : "en_US", alternateLocale: [ko ? "en_US" : "ko_KR"], images: [{ url: "/images/tools-hero-v2.png", alt: copy.title }] },
    twitter: { card: "summary_large_image", title, description: copy.description, images: ["/images/tools-hero-v2.png"] },
  };
}

export default function ToolPage({ tool, language }: { tool: CreatorTool; language: ToolLanguage }) {
  const ko = language === "ko";
  const prefix = ko ? "/ko" : "";
  const copy = tool[language];
  const path = `${prefix}/tools/${tool.slug}`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebApplication", "@id": `${base}${path}#app`, name: copy.title, description: copy.description, url: `${base}${path}`, applicationCategory: "MultimediaApplication", operatingSystem: "Any", browserRequirements: "Requires JavaScript for calculations", inLanguage: language, isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: ko ? "KRW" : "USD" }, publisher: { "@type": "Organization", name: "FourFeetz Studios", url: base } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: ko ? "홈" : "Home", item: `${base}${ko ? "/ko" : "/en"}` },
      { "@type": "ListItem", position: 2, name: ko ? "무료 제작 도구" : "Creator tools", item: `${base}${prefix}/tools` },
      { "@type": "ListItem", position: 3, name: copy.title, item: `${base}${path}` },
    ] },
  ] };
  return <main className="bg-[#fbf7f0] text-[#2b2119]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-10 sm:px-6 md:pt-14">
      <nav aria-label={ko ? "현재 위치" : "Breadcrumb"} className="mb-8 flex flex-wrap items-center gap-2 text-sm leading-6 text-[#76685d]"><Link href={ko ? "/ko" : "/en"} className="hover:underline">{ko ? "홈" : "Home"}</Link><span aria-hidden="true">/</span><Link href={`${prefix}/tools`} className="hover:underline">{ko ? "무료 제작 도구" : "Creator tools"}</Link><span aria-hidden="true">/</span><span aria-current="page">{copy.title}</span></nav>
      <div className="max-w-3xl"><p className="text-sm font-bold tracking-[.16em] text-[#a67c52]">FOURFEETZ · FREE TOOL {tool.number}</p><h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{copy.title}</h1><p className="mt-5 text-lg leading-8 text-[#76685d]">{copy.intro}</p><p className="mt-4 text-sm font-bold text-[#6f4e37]">{ko ? "무료 · 로그인 없음 · 파일 업로드 없음" : "Free · No signup · No file upload"}</p></div>
    </section>
    <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-6"><Calculator key={tool.slug} slug={tool.slug} language={language} /><noscript><p className="mt-4 rounded-xl border border-[#d7c5b0] bg-white p-4">{ko ? "계산 기능을 사용하려면 JavaScript를 켜주세요. 아래 계산식과 예시는 JavaScript 없이도 읽을 수 있습니다." : "Enable JavaScript to use the calculator. The formulas and examples below remain readable without it."}</p></noscript></div>
    <section className="border-y border-[#eadfce] bg-white px-5 py-12 sm:px-6"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2"><div><h2 className="text-2xl font-black">{ko ? "사용 방법" : "How to use it"}</h2><ol className="mt-5 list-decimal space-y-4 pl-5 text-base leading-8 text-[#76685d]">{copy.steps.map(step => <li key={step} className="pl-1">{step}</li>)}</ol></div><div className="rounded-2xl bg-[#fbf7f0] p-6"><h2 className="text-2xl font-black">{ko ? "계산 예시" : "Worked example"}</h2><p className="mt-4 text-base leading-8 text-[#76685d]">{copy.example}</p></div></div></section>
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6"><h2 className="text-2xl font-black">{ko ? "계산식과 결과 읽는 법" : "Formula and assumptions"}</h2><p className="mt-4 max-w-4xl text-base leading-8 text-[#76685d]">{copy.formula}</p><ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-8 text-[#76685d]">{copy.notes.map(note => <li key={note}>{note}</li>)}</ul></section>
    <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-6"><h2 className="text-2xl font-black">{ko ? "자주 묻는 질문" : "Frequently asked questions"}</h2><div className="mt-5 divide-y divide-[#eadfce] rounded-2xl border border-[#eadfce] bg-white px-6">{copy.faqs.map(faq => <details key={faq.question} className="group py-5"><summary className="cursor-pointer text-base font-bold leading-7 marker:text-[#a67c52]">{faq.question}</summary><p className="mt-4 text-base leading-8 text-[#76685d]">{faq.answer}</p></details>)}</div></section>
    <section className="border-y border-[#eadfce] bg-[#f2e8dc] px-5 py-12 sm:px-6"><div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2"><div><p className="text-sm font-bold text-[#89674a]">{ko ? "다음 제작 단계" : "Your next production step"}</p><h2 className="mt-3 text-2xl font-black">{ko ? "계산한 내용을 실제 영상으로 이어가세요." : "Turn the plan into a finished video."}</h2><Link href={`${prefix}${copy.article.path}`} className="mt-5 inline-block text-base font-bold leading-7 text-[#6f4e37] underline underline-offset-4">{copy.article.title} →</Link></div><div className="flex flex-col items-start justify-center gap-4"><Link href={`${prefix}/store`} className="rounded-xl bg-[#6f4e37] px-5 py-3 text-base font-bold text-white hover:bg-[#573b29]">{ko ? "영상 제작 가이드·프롬프트 보기" : "Explore video guides and prompts"}</Link><Link href={`${prefix}/services/personal-pet-video`} className="text-base font-bold text-[#6f4e37] underline underline-offset-4">{ko ? "직접 만들기 어렵다면 제작 상담하기" : "Get help with a custom video"} →</Link></div></div></section>
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6"><h2 className="text-2xl font-black">{ko ? "다른 무료 계산기도 사용해보세요." : "Try the other free calculators."}</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{creatorTools.filter(item => item.slug !== tool.slug).map(item => <Link key={item.slug} href={`${prefix}/tools/${item.slug}`} className="rounded-2xl border border-[#dfd0be] bg-white p-6 font-bold text-[#6f4e37] transition hover:border-[#a67c52] hover:shadow-sm">{item[language].title} →</Link>)}</div></section>
  </main>;
}
