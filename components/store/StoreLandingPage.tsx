import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Check,
  FileText,
  Lightbulb,
  ListChecks,
  LockKeyhole,
  PenLine,
  Play,
  Settings,
  Sparkles,
} from "lucide-react";
import { formatStorePrice, storeProducts, type StoreLanguage, type StoreProduct } from "@/lib/store";

const outlineButton = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#7656ee]/25 bg-white px-6 py-3 font-extrabold text-[#5137c8] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7656ee]/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7656ee] focus-visible:ring-offset-2";

function statusLabel(product: StoreProduct, language: StoreLanguage) {
  if (product.saleStatus === "coming-soon") return language === "ko" ? "출시 예정" : "Coming soon";
  if (product.saleStatus === "preparing") return language === "ko" ? "파일 준비 중" : "Files in preparation";
  return language === "ko" ? "판매 중" : "Available";
}

export default function StoreLandingPage({ language }: { language: StoreLanguage }) {
  const ko = language === "ko";
  const prefix = ko ? "/ko" : "";
  const freeProduct = storeProducts[0];
  const paidProducts = storeProducts.slice(1);
  const copy = ko ? {
    eyebrow: "FOURFEETZ", title: "Digital Guides", subtitle: "AI로 만드는 반려동물 감성 영상 가이드", description: "기획부터 프롬프트, 영상 생성, 편집까지 누구나 따라 할 수 있는 실전 가이드를 만나보세요.",
    heroFeatures: ["기획 아이디어", "프롬프트 예시", "영상 제작 방법", "실전 팁과 체크리스트"], guideSection: "무료 PDF 입문 가이드", guideIntro: "한국어판과 영어판으로 준비 중인 입문 자료입니다. 운영 공개 전까지 다운로드는 비활성화됩니다.",
    koBadge: "한국어판", enBadge: "English Version", koGuide: "AI 반려동물 영상 제작 입문 가이드 (PDF)", enGuide: "AI Pet Video Starter Guide (PDF)", koDescription: "영상 기획, 프롬프트 작성, AI 영상 생성과 편집의 기본 흐름을 한국어로 정리한 입문 PDF입니다.", enDescription: "A beginner-friendly English guide to story planning, prompt writing, AI video generation and editing.",
    guideFeatures: ["PDF 가이드", "프롬프트 예시", "단계별 제작 과정", "체크리스트와 활용 팁"], locked: "운영 공개 전 검토 중", lockedNote: "현재 구매·다운로드 기능은 비활성화되어 있습니다.", packs: "프롬프트 패키지", packsIntro: "범용 프롬프트와 제작 가이드를 담은 두 가지 패키지입니다. 승인 전에는 결제가 활성화되지 않습니다.", details: "상품 상세 보기",
    starterKicker: "Beginner Guide", creatorKicker: "Creator Pack", starterFeatures: ["범용 프롬프트 3종", "설정 가이드", "실전 예시", "문제 해결 팁"], creatorFeatures: ["범용 프롬프트 10종", "샘플 영상과 결과물", "스타일별 가이드", "추가 팁과 리소스"],
    sample: "어떤 영상을 만들게 되나요?", sampleDesc: "공개 제작 예시로 영상의 분위기를 먼저 확인해 보세요. 상품 프롬프트의 실제 결과물이라는 의미는 아닙니다.", support: "궁금한 점이 있나요?", supportDesc: "결제, 다운로드, 사용 방법과 출시 일정은 스토어 지원 페이지에서 확인할 수 있습니다.", supportLink: "스토어 고객 지원", service: "맞춤 영상 제작 의뢰",
  } : {
    eyebrow: "FOURFEETZ", title: "Digital Guides", subtitle: "Heartwarming AI pet-video guides", description: "Practical guides anyone can follow—from planning and prompts to video generation and editing.",
    heroFeatures: ["Story ideas", "Prompt examples", "Video workflow", "Tips & checklists"], guideSection: "Free PDF starter guides", guideIntro: "Beginner resources in Korean and English. Downloads remain disabled until the production release is approved.",
    koBadge: "한국어판", enBadge: "English Version", koGuide: "AI 반려동물 영상 제작 입문 가이드 (PDF)", enGuide: "AI Pet Video Starter Guide (PDF)", koDescription: "A Korean introduction to planning, prompt writing, AI video generation and editing.", enDescription: "A beginner-friendly English guide to story planning, prompt writing, AI video generation and editing.",
    guideFeatures: ["PDF guide", "Prompt examples", "Step-by-step workflow", "Checklists & tips"], locked: "Under review before launch", lockedNote: "Checkout and downloads are currently disabled.", packs: "Prompt packages", packsIntro: "Two packs of general-purpose prompts and practical production guidance. Checkout stays disabled until approval.", details: "View product",
    starterKicker: "Beginner Guide", creatorKicker: "Creator Pack", starterFeatures: ["3 general prompts", "Setup guide", "Practical examples", "Troubleshooting tips"], creatorFeatures: ["10 general prompts", "Video samples & results", "Style-by-style guide", "Extra tips & resources"],
    sample: "See the kind of video you can make", sampleDesc: "Preview the mood through a public production sample. It is not presented as an actual output from the product prompts.", support: "Have a question?", supportDesc: "Visit Store Support for payment, download, usage and release guidance.", supportLink: "Store support", service: "Request a custom video",
  };

  const heroIcons = [Lightbulb, PenLine, Play, Sparkles];
  const guideIcons = [FileText, Play, Settings, ListChecks];
  const guideEditions = [
    { badge: copy.koBadge, title: copy.koGuide, description: copy.koDescription, lang: "KO" },
    { badge: copy.enBadge, title: copy.enGuide, description: copy.enDescription, lang: "EN" },
  ];

  return <main className="overflow-hidden bg-[#f6f8ff] text-[#0c2259]">
    <section className="relative isolate overflow-hidden border-b border-[#dce5ff] bg-[linear-gradient(145deg,#f8fbff,#eef2ff)] sm:min-h-[620px]">
      <Image src="/images/store/digital-guides-hero.png" alt="" width={2172} height={724} priority sizes="100vw" className="h-auto w-full sm:absolute sm:inset-0 sm:-z-20 sm:h-full sm:object-cover sm:object-[62%_center]" />
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgba(248,251,255,0.98)_0%,rgba(248,251,255,0.94)_30%,rgba(248,251,255,0.3)_58%,rgba(248,251,255,0)_78%)] sm:block" />
      <div className="mx-auto flex max-w-7xl items-center px-6 py-12 sm:min-h-[620px] sm:py-16 lg:px-8"><div className="max-w-2xl pt-4">
        <p className="text-sm font-black tracking-[0.24em] text-[#313f91]">{copy.eyebrow}</p><h1 className="mt-3 text-6xl font-black leading-[0.94] tracking-[-0.055em] text-[#0b2769] sm:text-7xl lg:text-[88px]">{copy.title}</h1><p className="mt-5 break-keep text-xl font-extrabold text-[#132e75] sm:text-2xl">{copy.subtitle}</p><p className="mt-5 max-w-lg break-keep text-base font-medium leading-7 text-[#445b8d] sm:text-lg">{copy.description}</p>
        <ul className="mt-8 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-5 sm:flex sm:flex-wrap">{copy.heroFeatures.map((feature, index) => { const Icon = heroIcons[index]; return <li key={feature} className="flex break-keep items-center gap-3 text-sm font-extrabold text-[#233c74]"><span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#dcd9ff] bg-white/90 text-[#704cff] shadow-sm"><Icon size={20} strokeWidth={2.4} /></span>{feature}</li>; })}</ul>
      </div></div>
    </section>

    <section className="relative px-5 py-20 sm:px-6 lg:px-8"><div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,#e7e9ff_0,transparent_68%)]" /><div className="relative mx-auto max-w-7xl">
      <div className="text-center"><p className="text-sm font-black uppercase tracking-[0.24em] text-[#7656ee]">Starter PDF</p><h2 className="mt-3 break-keep text-4xl font-black tracking-[-0.035em] sm:text-5xl">{copy.guideSection}</h2><p className="mx-auto mt-4 max-w-2xl break-keep leading-7 text-[#60709a]">{copy.guideIntro}</p></div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">{guideEditions.map(edition => <article key={edition.lang} className="overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_24px_70px_rgba(58,74,135,0.13)]"><div className="grid min-h-[390px] md:grid-cols-[0.88fr_1.12fr]">
        <div className="relative min-h-72 overflow-hidden bg-[#eaf2ff]"><Image src="/images/store/digital-guides-hero.png" alt={edition.title} fill sizes="(min-width: 1024px) 23vw, (min-width: 768px) 42vw, 100vw" className="object-cover object-[69%_center]" /><div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#0c2259]/88 p-4 text-center text-white shadow-xl backdrop-blur-sm"><p className="text-[10px] font-black tracking-[0.2em]">FOURFEETZ</p><p className="mt-1 text-lg font-black leading-tight">{edition.lang === "KO" ? "AI 반려동물 영상 제작 입문 가이드" : "AI Pet Video Starter Guide"}</p></div></div>
        <div className="flex flex-col p-7 sm:p-8"><span className="w-fit rounded-full bg-[#e8e2ff] px-3 py-1.5 text-xs font-black text-[#6244dc]">{edition.badge}</span><h3 className="mt-4 break-keep text-2xl font-black leading-tight tracking-[-0.025em] sm:text-3xl">{edition.title}</h3><p className="mt-4 grow break-keep leading-7 text-[#65749a]">{edition.description}</p><p className="mt-5 text-3xl font-black">{formatStorePrice(freeProduct.priceKrw, language)}</p><span aria-disabled="true" className="mt-4 inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-[#aeb7c9] px-5 font-extrabold text-white"><LockKeyhole size={18} />{copy.locked}</span><p className="mt-3 text-center text-xs font-medium text-[#8b96b0]">{copy.lockedNote}</p><Link href={`${prefix}/store/${freeProduct.slug}`} className="mt-4 text-center text-sm font-black text-[#6244dc] underline-offset-4 hover:underline">{copy.details}</Link></div>
      </div><ul className="grid grid-cols-2 border-t border-[#edf0fa] bg-[#fbfcff] sm:grid-cols-4">{copy.guideFeatures.map((feature, index) => { const Icon = guideIcons[index]; return <li key={feature} className="flex items-center gap-2 border-[#edf0fa] p-4 text-xs font-bold text-[#43547e] sm:border-r"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#f0edff] text-[#704cff]"><Icon size={19} /></span>{feature}</li>; })}</ul></article>)}</div>
    </div></section>

    <section id="products" className="border-y border-[#dde5fa] bg-white px-5 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.24em] text-[#c5642e]">Creator Store</p><h2 className="mt-3 text-4xl font-black tracking-[-0.035em] sm:text-5xl">{copy.packs}</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-[#60709a]">{copy.packsIntro}</p></div>
      <div className="mt-10 grid gap-7 lg:grid-cols-2">{paidProducts.map((product, index) => { const features = index === 0 ? copy.starterFeatures : copy.creatorFeatures; return <article key={product.slug} className="group overflow-hidden rounded-[30px] border border-[#e2e7f3] bg-white shadow-[0_20px_55px_rgba(35,50,102,0.12)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(35,50,102,0.17)]"><div className="relative aspect-[16/9] overflow-hidden"><Image src={product.image} alt={product.name[language]} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" /><div className="absolute left-5 top-5 rounded-full bg-[#4e62c9] px-4 py-2 text-sm font-black text-white shadow-lg">{index === 0 ? copy.starterKicker : copy.creatorKicker}</div></div><div className="p-7 sm:p-8"><div className="flex flex-wrap items-center justify-between gap-4"><span className="rounded-full bg-[#f7e9df] px-4 py-2 text-xs font-black text-[#a4441d]">{statusLabel(product, language)}</span><span className="text-2xl font-black tracking-tight text-[#0b1e48]">{formatStorePrice(product.priceKrw, language)}</span></div><h3 className="mt-5 text-3xl font-black tracking-[-0.03em] text-[#0b1e48]">{product.name[language]}</h3><p className="mt-4 leading-7 text-[#65749a]">{product.shortDescription[language]}</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{features.map(feature => <li key={feature} className="flex items-center gap-2 text-sm font-bold text-[#3d4f78]"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#eeeaff] text-[#6948e8]"><Check size={14} strokeWidth={3} /></span>{feature}</li>)}</ul><Link href={`${prefix}/store/${product.slug}`} className={`${outlineButton} mt-7`}>{copy.details}<ArrowRight size={18} /></Link></div></article>; })}</div>
    </div></section>

    <section className="px-5 py-20 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.72fr_1.28fr]"><div><span className="grid size-14 place-items-center rounded-2xl bg-[#e9e4ff] text-[#6846ea]"><Play size={25} fill="currentColor" /></span><h2 className="mt-5 text-4xl font-black tracking-[-0.035em]">{copy.sample}</h2><p className="mt-5 leading-8 text-[#60709a]">{copy.sampleDesc}</p></div><video controls preload="metadata" poster="/images/shorts/cozy-retriever-kitten/cozy-retriever-kitten-poster.png" className="aspect-video w-full rounded-[28px] bg-black shadow-[0_22px_60px_rgba(32,44,89,0.2)]"><source src="/videos/shorts/cozy-retriever-kitten/cozy-retriever-kitten-sleep-short.mp4" type="video/mp4" /></video></div></section>

    <section className="bg-[linear-gradient(135deg,#172d72,#6948df)] px-6 py-16 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><BookOpenText size={32} className="text-[#cfc5ff]" /><h2 className="mt-4 text-4xl font-black">{copy.support}</h2><p className="mt-4 max-w-2xl text-[#dce3ff]">{copy.supportDesc}</p></div><div className="flex flex-wrap gap-3"><Link href={`${prefix}/store/support`} className="inline-flex min-h-12 items-center rounded-full bg-white px-7 py-3 font-black text-[#5137c8]">{copy.supportLink}</Link><Link href={`${prefix}/services#contact`} className="inline-flex min-h-12 items-center rounded-full border border-white/40 px-7 py-3 font-black">{copy.service}</Link></div></div></section>
  </main>;
}
