import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CircleHelp, Download } from "lucide-react";
import { formatStorePrice, storeProducts, type StoreLanguage, type StoreProduct } from "@/lib/store";

const primaryButton = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#6f4e37] px-7 py-3.5 font-black text-white transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const secondaryButton = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#6f4e37]/35 bg-white px-7 py-3.5 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";

function statusLabel(product: StoreProduct, language: StoreLanguage) {
  if (product.saleStatus === "coming-soon") return language === "ko" ? "출시 예정" : "Coming soon";
  if (product.saleStatus === "preparing") return language === "ko" ? "파일 준비 중" : "Files in preparation";
  return language === "ko" ? "판매 중" : "Available";
}
export default function StorePage({ language }: { language: StoreLanguage }) {
  const ko = language === "ko";
  const prefix = ko ? "/ko" : "";
  const freeProduct = storeProducts[0];
  const paidProducts = storeProducts.slice(1);
  const copy = ko ? {
    eyebrow: "FourFeetz Creator Store", title: "처음 시작하는 AI 반려동물 영상", desc: "직접 영상을 만들어 보고 싶은 분을 위한 범용 초급·중급 프롬프트와 실전 가이드를 준비하고 있습니다. FourFeetz의 비공개 캐릭터 자료와 내부 제작 기술은 포함하지 않습니다.",
    explore: "상품 살펴보기", service: "맞춤 영상 제작 의뢰", free: "무료로 시작하기", freeDesc: "파일이 완성되면 실제 다운로드 방식과 이용 조건을 함께 안내합니다. 현재는 다운로드를 제공하지 않습니다.",
    paid: "프롬프트 패키지", paidDesc: "가격과 예정 구성을 먼저 공개합니다. 결제와 파일 전달은 준비가 끝난 상품에만 활성화됩니다.", sample: "실제 제작 샘플", sampleDesc: "상품이 다루는 영상 유형을 이해하기 위한 공개 제작 예시입니다. 이 영상이 상품 프롬프트의 결과물이라는 의미는 아닙니다.",
    guide: "처음 사용하나요?", steps: ["상품 상세에서 포함 파일과 지원 범위를 확인합니다.", "출시 후 안내되는 AI 영상 도구에 프롬프트를 적용합니다.", "생성 결과를 검토하고 장면과 동작을 짧게 조정합니다."],
    faq: "자주 묻는 질문", faqItems: [["FourFeetz 캐릭터 프롬프트가 포함되나요?", "아니요. HARU 마스터 프롬프트, 캐릭터 바이블, 내부 워크플로와 독점 기술은 판매하지 않습니다."], ["어떤 AI 모델에서 사용할 수 있나요?", "아직 호환성 검증이 끝나지 않았습니다. 검증된 모델과 날짜만 상품 상세에 표시합니다."], ["지금 구매하거나 다운로드할 수 있나요?", "아니요. 실제 파일과 결제 설정이 준비되지 않아 현재 모든 구매·다운로드 기능은 비활성 상태입니다."], ["직접 만들기 어려우면 어떻게 하나요?", "맞춤 영상 제작 서비스를 통해 FourFeetz에 제작을 의뢰할 수 있습니다."]],
    support: "스토어 고객 지원", supportDesc: "결제, 다운로드, 사용 방법과 환불 요청 안내를 확인하세요.", details: "상품 상세 보기",
  } : {
    eyebrow: "FourFeetz Creator Store", title: "A gentle start to AI pet video", desc: "General beginner and intermediate prompts for people who want to make their own videos. FourFeetz private character materials and internal production techniques are never included.",
    explore: "Explore products", service: "Request a custom video", free: "Start with a free prompt", freeDesc: "When the file is complete, the real download method and usage terms will be published together. No download is offered yet.",
    paid: "Prompt packs", paidDesc: "Planned contents and prices are shown now. Checkout and delivery will only be enabled for products that are ready.", sample: "Published video sample", sampleDesc: "This public production sample shows the kind of video discussed by the store. It is not presented as an output made from the product prompts.",
    guide: "New to AI video?", steps: ["Check the included files and support scope on the product page.", "After release, apply the prompt in a listed AI video tool.", "Review the result and make small adjustments to the scene and action."],
    faq: "Frequently asked questions", faqItems: [["Does this include FourFeetz character prompts?", "No. HARU master prompts, character bibles, internal workflows and proprietary techniques are not sold."], ["Which AI models are supported?", "Compatibility testing is not complete. Only verified models and dates will be listed on product pages."], ["Can I buy or download now?", "No. Product files and payment settings are not ready, so all checkout and download actions remain disabled."], ["What if I want the video made for me?", "You can request FourFeetz's custom video production service instead."]],
    support: "Store support", supportDesc: "Find guidance for payment, downloads, usage questions and refund requests.", details: "View product",
  };

  return <main className="bg-[#fbf7f0] text-[#2b2119]">
    <section className="relative overflow-hidden border-b border-[#eadfce] px-6 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ead7c1_0,transparent_42%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{copy.eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">{copy.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">{copy.desc}</p><div className="mt-9 flex flex-wrap gap-3"><Link href="#products" className={primaryButton}>{copy.explore}<ArrowRight size={18} /></Link><Link href={`${prefix}/services#contact`} className={secondaryButton}>{copy.service}</Link></div></div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[40px] border border-[#eadfce] bg-white shadow-2xl shadow-[#6f4e37]/10"><Image src="/images/insights/image-to-video-prompts.png" alt={ko ? "AI 반려동물 영상 프롬프트 가이드 이미지" : "AI pet video prompt guide"} fill loading="eager" sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" /></div>
      </div>
    </section>

    <section id="digital-guides" className="border-b border-[#eadfce] bg-[#fffdf8] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">FourFeetz Digital Guides</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{ko ? "AI 반려동물 영상 제작 디지털 가이드" : "AI Pet Video Digital Guides"}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">{ko ? "기획부터 프롬프트 작성, AI 영상 생성과 편집까지 따라 하는 입문용 PDF 가이드입니다. 한국어판과 영어판을 각각 준비했습니다." : "Beginner-friendly PDF guides covering story planning, prompt writing, AI video generation and editing. Choose the Korean or English edition."}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([
            { code: "ko", name: "AI 반려동물 영상 제작 입문 가이드", subtitle: "한국어판 · PDF · 12페이지", englishName: "AI Pet Video Starter Guide — Korean Edition" },
            { code: "en", name: "AI Pet Video Starter Guide", subtitle: "English edition · PDF · 12 pages", englishName: "AI Pet Video Starter Guide — English Edition" },
          ] as const).map((guide) => (
            <article key={guide.code} className="flex flex-col rounded-[30px] border border-[#eadfce] bg-white p-7 shadow-sm">
              <span className="w-fit rounded-full bg-[#f2e8dc] px-3 py-1.5 text-xs font-black text-[#6f4e37]">{guide.code === "ko" ? "한국어 / Korean" : "English / 영어"}</span>
              <h3 className="mt-5 text-2xl font-black text-[#2b2119]">{ko ? guide.name : guide.englishName}</h3>
              <p className="mt-3 text-sm text-[#76685d]">{guide.subtitle}</p>
              <p className="mt-5 leading-7 text-[#76685d]">{ko ? "영상 아이디어, 기본 프롬프트 예시, 제작 체크리스트와 편집 팁을 담았습니다." : "Includes beginner prompts, a planning worksheet, video creation tips and an editing checklist."}</p>
              <div className="mt-auto pt-8">
                <p className="text-2xl font-black">₩9,900</p>
                <button type="button" disabled aria-disabled="true" className="mt-4 inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full bg-[#ded5cb] px-6 py-3 font-black text-[#62574d]">{ko ? "판매 준비 중 · 구매 불가" : "Coming soon · Checkout unavailable"}</button>
                <p className="mt-3 text-xs leading-5 text-[#76685d]">{ko ? "Lemon Squeezy 판매자 심사 및 결제·파일 전달 확인 후 구매가 열립니다." : "Checkout opens after merchant approval and successful payment and file-delivery testing."}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-20"><div className="mx-auto max-w-7xl"><div className="grid gap-8 rounded-[36px] border border-[#eadfce] bg-white p-7 shadow-sm md:grid-cols-[0.85fr_1.15fr] md:p-10"><div className="relative min-h-72 overflow-hidden rounded-[28px]"><Image src={freeProduct.image} alt={freeProduct.name[language]} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" /></div><div className="flex flex-col justify-center"><span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f2e8dc] px-4 py-2 text-xs font-black text-[#6f4e37]"><Download size={15} />{statusLabel(freeProduct, language)}</span><h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">{copy.free}</h2><p className="mt-4 text-lg leading-8 text-[#76685d]">{freeProduct.shortDescription[language]}</p><p className="mt-3 leading-7 text-[#9a8775]">{copy.freeDesc}</p><Link href={`${prefix}/store/${freeProduct.slug}`} className={`${secondaryButton} mt-7 w-fit`}>{copy.details}<ArrowRight size={18} /></Link></div></div></div></section>

    <section id="products" className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">Creator Packs</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">{copy.paid}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">{copy.paidDesc}</p><div className="mt-10 grid gap-6 lg:grid-cols-2">{paidProducts.map(product => <article key={product.slug} className="overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#fffdf8] shadow-sm"><div className="relative aspect-[16/9]"><Image src={product.image} alt={product.name[language]} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" /></div><div className="p-7"><div className="flex flex-wrap items-center justify-between gap-3"><span className="rounded-full bg-[#f2e8dc] px-3 py-1.5 text-xs font-black text-[#6f4e37]">{statusLabel(product, language)}</span><span className="text-xl font-black">{formatStorePrice(product.priceKrw, language)}</span></div><h3 className="mt-5 text-3xl font-black">{product.name[language]}</h3><p className="mt-4 leading-7 text-[#76685d]">{product.shortDescription[language]}</p><Link href={`${prefix}/store/${product.slug}`} className={`${secondaryButton} mt-7`}>{copy.details}<ArrowRight size={18} /></Link></div></article>)}</div></div></section>

    <section className="px-6 py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">Video Sample</p><h2 className="mt-3 text-4xl font-black md:text-5xl">{copy.sample}</h2><p className="mt-5 leading-8 text-[#76685d]">{copy.sampleDesc}</p></div><video controls preload="metadata" poster="/images/shorts/cozy-retriever-kitten/cozy-retriever-kitten-poster.png" className="aspect-video w-full rounded-[32px] bg-black shadow-xl"><source src="/videos/shorts/cozy-retriever-kitten/cozy-retriever-kitten-sleep-short.mp4" type="video/mp4" /></video></div></section>

    <section className="border-y border-[#eadfce] bg-[#fffdf8] px-6 py-20"><div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]"><div><BookOpen className="text-[#a67c52]" size={34} /><h2 className="mt-4 text-4xl font-black md:text-5xl">{copy.guide}</h2></div><ol className="grid gap-5 md:grid-cols-3">{copy.steps.map((step, index) => <li key={step} className="rounded-3xl border border-[#eadfce] bg-white p-6"><span className="text-sm font-black text-[#a67c52]">0{index + 1}</span><p className="mt-4 font-bold leading-7 text-[#4d4036]">{step}</p></li>)}</ol></div></div></section>

    <section className="px-6 py-20"><div className="mx-auto max-w-5xl"><div className="text-center"><CircleHelp className="mx-auto text-[#a67c52]" size={34} /><h2 className="mt-4 text-4xl font-black md:text-5xl">{copy.faq}</h2></div><div className="mt-10 space-y-4">{copy.faqItems.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-[#eadfce] bg-white p-6"><summary className="cursor-pointer list-none font-black marker:hidden">{question}</summary><p className="mt-4 leading-7 text-[#76685d]">{answer}</p></details>)}</div></div></section>

    <section className="bg-[#6f4e37] px-6 py-16 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.24em] text-[#e5c9a8]">Support & Service</p><h2 className="mt-3 text-4xl font-black">{copy.support}</h2><p className="mt-4 max-w-2xl text-[#f4e8da]">{copy.supportDesc}</p></div><div className="flex flex-wrap gap-3"><Link href={`${prefix}/store/support`} className="inline-flex min-h-12 items-center rounded-full bg-white px-7 py-3.5 font-black text-[#6f4e37]">{copy.support}</Link><Link href={`${prefix}/services#contact`} className="inline-flex min-h-12 items-center rounded-full border border-white/40 px-7 py-3.5 font-black">{copy.service}</Link></div></div></section>
  </main>;
}

