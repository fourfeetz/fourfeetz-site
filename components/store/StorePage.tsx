import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CircleHelp, Download, Lightbulb, PencilLine, PlayCircle, Star, LockKeyhole, Clapperboard, Settings2 } from "lucide-react";
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
    eyebrow: "FourFeetz Creator Store", title: "AI로 만드는 반려동물 감성 영상", desc: "기획부터 프롬프트, 영상 생성, 편집까지. 누구나 따라 할 수 있는 실전 PDF 가이드로 우리 아이의 특별한 이야기를 영상으로 만들어보세요.",
    explore: "상품 살펴보기", service: "맞춤 영상 제작 의뢰", free: "무료로 시작하기", freeDesc: "파일이 완성되면 실제 다운로드 방식과 이용 조건을 함께 안내합니다. 현재는 다운로드를 제공하지 않습니다.",
    paid: "프롬프트 패키지", paidDesc: "가격과 예정 구성을 먼저 공개합니다. 결제와 파일 전달은 준비가 끝난 상품에만 활성화됩니다.", sample: "실제 제작 샘플", sampleDesc: "상품이 다루는 영상 유형을 이해하기 위한 공개 제작 예시입니다. 이 영상이 상품 프롬프트의 결과물이라는 의미는 아닙니다.",
    guide: "처음 사용하나요?", steps: ["상품 상세에서 포함 파일과 지원 범위를 확인합니다.", "출시 후 안내되는 AI 영상 도구에 프롬프트를 적용합니다.", "생성 결과를 검토하고 장면과 동작을 짧게 조정합니다."],
    faq: "자주 묻는 질문", faqItems: [["FourFeetz 캐릭터 프롬프트가 포함되나요?", "아니요. HARU 마스터 프롬프트, 캐릭터 바이블, 내부 워크플로와 독점 기술은 판매하지 않습니다."], ["어떤 AI 모델에서 사용할 수 있나요?", "아직 호환성 검증이 끝나지 않았습니다. 검증된 모델과 날짜만 상품 상세에 표시합니다."], ["지금 구매하거나 다운로드할 수 있나요?", "아니요. 실제 파일과 결제 설정이 준비되지 않아 현재 모든 구매·다운로드 기능은 비활성 상태입니다."], ["직접 만들기 어려우면 어떻게 하나요?", "맞춤 영상 제작 서비스를 통해 FourFeetz에 제작을 의뢰할 수 있습니다."]],
    support: "스토어 고객 지원", supportDesc: "결제, 다운로드, 사용 방법과 환불 요청 안내를 확인하세요.", details: "상품 상세 보기",
  } : {
    eyebrow: "FourFeetz Creator Store", title: "Create heartwarming pet videos with AI", desc: "From story planning and prompts to video creation and editing. Discover beginner-friendly PDF guides to bring your pet’s special story to life.",
    explore: "Explore products", service: "Request a custom video", free: "Start with a free prompt", freeDesc: "When the file is complete, the real download method and usage terms will be published together. No download is offered yet.",
    paid: "Prompt packs", paidDesc: "Planned contents and prices are shown now. Checkout and delivery will only be enabled for products that are ready.", sample: "Published video sample", sampleDesc: "This public production sample shows the kind of video discussed by the store. It is not presented as an output made from the product prompts.",
    guide: "New to AI video?", steps: ["Check the included files and support scope on the product page.", "After release, apply the prompt in a listed AI video tool.", "Review the result and make small adjustments to the scene and action."],
    faq: "Frequently asked questions", faqItems: [["Does this include FourFeetz character prompts?", "No. HARU master prompts, character bibles, internal workflows and proprietary techniques are not sold."], ["Which AI models are supported?", "Compatibility testing is not complete. Only verified models and dates will be listed on product pages."], ["Can I buy or download now?", "No. Product files and payment settings are not ready, so all checkout and download actions remain disabled."], ["What if I want the video made for me?", "You can request FourFeetz's custom video production service instead."]],
    support: "Store support", supportDesc: "Find guidance for payment, downloads, usage questions and refund requests.", details: "View product",
  };

  return <main className="bg-[#fbf7f0] text-[#2b2119]">
    <section className="relative overflow-hidden border-b border-[#e7e6f4] bg-[#f7f8ff] px-6 pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,#dcecff_0,transparent_48%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6751dc]">FOURFEETZ DIGITAL GUIDES</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.12] tracking-tight text-[#132b5b] md:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#455b7b]">{copy.desc}</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="#digital-guides" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#6751dc] px-7 py-3.5 font-black text-white transition hover:bg-[#513ac1]">{copy.explore}<ArrowRight size={18} /></Link><Link href={`${prefix}/services#contact`} className="inline-flex min-h-12 items-center rounded-full border border-[#c9c7e9] bg-white px-7 py-3.5 font-black text-[#263c70]">{copy.service}</Link></div>
          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {([{ Icon: Lightbulb, ko: "기획 아이디어", en: "Story ideas" },{ Icon: PencilLine, ko: "프롬프트 예시", en: "Prompt examples" },{ Icon: PlayCircle, ko: "영상 제작 방법", en: "Video creation" },{ Icon: Star, ko: "실전 체크리스트", en: "Practical checklists" }] as const).map(({Icon,ko:labelKo,en:labelEn})=><div key={labelEn} className="flex flex-col items-center gap-2 text-center"><span className="flex size-12 items-center justify-center rounded-full border border-[#e5e4f8] bg-white text-[#6751dc] shadow-sm"><Icon size={22}/></span><span className="text-xs font-bold text-[#263c70]">{ko?labelKo:labelEn}</span></div>)}
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[36px] border border-[#e5e4f8] bg-[#e7f0ff] shadow-xl shadow-[#1d3a76]/10">
          <Image src="/images/shorts/cozy-retriever-kitten/cozy-retriever-kitten-poster.png" alt={ko ? "따뜻한 반려동물 애니메이션 영상 예시" : "Warm animated pet video example"} fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10234d]/85 via-[#10234d]/25 to-transparent p-7 pt-24 text-white"><p className="text-2xl font-black">{ko?"우리 아이의 특별한 이야기를 영상으로":"Turn your pet’s story into a video"}</p><p className="mt-2 text-sm text-white/85">{ko?"기획 · 프롬프트 · 영상 생성 · 편집":"Plan · Prompt · Create · Edit"}</p></div>
        </div>
      </div>
    </section>

    <section id="digital-guides" className="relative bg-[#f8f9ff] px-6 pb-20 pt-14">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6751dc]">Digital Guides</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#142b5c] md:text-5xl">{ko?"AI 반려동물 영상 제작 입문 가이드":"AI Pet Video Starter Guides"}</h2>
        <p className="mt-4 max-w-3xl text-[#455b7b]">{ko?"같은 제작 과정을 한국어판과 영어판으로 준비했습니다. 원하는 언어를 선택하세요.":"Choose your preferred language. Both editions cover the same beginner-friendly workflow."}</p>
        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          {([
            {code:"ko",title:"AI 반려동물 영상 제작 입문 가이드 (PDF)",titleEn:"AI Pet Video Starter Guide (Korean PDF)",tag:"한국어판",tagEn:"Korean Edition",description:"영상 기획부터 프롬프트 작성, AI 영상 생성과 편집까지 단계별로 익히는 한국어 PDF 가이드입니다.",descriptionEn:"A Korean-language PDF guide to planning, prompting, creating and editing AI pet videos."},
            {code:"en",title:"AI Pet Video Starter Guide (PDF)",titleEn:"AI Pet Video Starter Guide (PDF)",tag:"영문판",tagEn:"English Edition",description:"기획, 프롬프트, 영상 생성, 편집을 실습하는 영문 PDF 가이드입니다.",descriptionEn:"A practical English-language PDF guide with beginner prompts, video planning and editing tips."}
          ] as const).map(guide=><article key={guide.code} className="overflow-hidden rounded-[30px] border border-[#e5e7f5] bg-white shadow-lg shadow-[#142b5c]/5">
            <div className="grid gap-0 sm:grid-cols-[0.47fr_0.53fr]">
              <div className="relative min-h-72 bg-[#e6edff] sm:min-h-[360px]">
                <Image src="/images/shorts/cozy-retriever-kitten/cozy-retriever-kitten-poster.png" alt={ko?"반려동물 애니메이션을 활용한 PDF 가이드 소개 이미지":"Animated pet scene illustrating the PDF guide"} fill sizes="(min-width: 1024px) 24vw, (min-width: 640px) 40vw, 100vw" className="object-cover"/>
                <div className="absolute inset-x-4 top-4 rounded-xl bg-white/95 p-3 text-center shadow-sm"><p className="text-xs font-black tracking-widest text-[#6751dc]">FOURFEETZ</p><p className="mt-1 text-sm font-black leading-5 text-[#142b5c]">{guide.code==="ko"?"AI 반려동물 영상 제작 입문 가이드":"AI Pet Video Starter Guide"}</p><p className="mt-1 text-[10px] text-[#455b7b]">{guide.code==="ko"?"기획 · 프롬프트 · 생성 · 편집":"Plan · Prompt · Create · Edit"}</p></div>
              </div>
              <div className="flex flex-col p-6 sm:p-7">
                <span className="w-fit rounded-full bg-[#e8e5ff] px-3 py-1 text-xs font-black text-[#6751dc]">{ko?guide.tag:guide.tagEn}</span>
                <h3 className="mt-4 text-xl font-black leading-7 text-[#142b5c]">{ko?guide.title:guide.titleEn}</h3>
                <p className="mt-4 text-sm leading-6 text-[#455b7b]">{ko?guide.description:guide.descriptionEn}</p>
                <p className="mt-auto pt-6 text-3xl font-black text-[#142b5c]">₩9,900</p>
                <button type="button" disabled aria-disabled="true" className="mt-3 inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-[#9ba3b7] px-4 font-black text-white"><LockKeyhole size={17}/>{ko?"곧 구매 가능":"Checkout coming soon"}</button>
                <p className="mt-2 text-center text-xs text-[#697894]">{ko?"판매자 심사 및 결제 검증 후 판매 시작":"Available after merchant approval and checkout testing"}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 border-t border-[#e9eaf7] bg-[#fcfcff] p-5 text-xs text-[#455b7b] sm:grid-cols-4">{([{Icon:BookOpen,ko:"PDF 가이드",en:"PDF guide"},{Icon:PlayCircle,ko:"프롬프트 예시",en:"Prompt examples"},{Icon:Settings2,ko:"단계별 제작",en:"Step-by-step"},{Icon:Star,ko:"체크리스트",en:"Checklist"}] as const).map(({Icon,ko:labelKo,en:labelEn})=><span key={labelEn} className="flex items-center gap-2"><Icon className="shrink-0 text-[#6751dc]" size={18}/>{ko?labelKo:labelEn}</span>)}</div>
          </article>)}
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

