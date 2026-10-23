import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  ChevronRight,
  Heart,
  Home,
  Image as ImageIcon,
  Infinity as InfinityIcon,
  Mail,
  PawPrint,
  Sparkles,
  Users,
} from "lucide-react";
import { VideoPricingSection } from "@/components/korean/VideoPricingSection";
import { MemorialInquiryForm } from "@/components/korean/MemorialInquiryForm";
import { MemorialProductionGuide } from "@/components/korean/MemorialProductionGuide";
import SyncedVideoPlayer from "@/components/SyncedVideoPlayer";
import { languageAlternates } from "@/lib/localization";

const pageUrl = "https://fourfeetz.com/ko/services/pet-memorial-video";
const pageTitle = "반려동물 추모영상 제작 | 강아지·고양이 메모리얼 영상 | FourFeetz";
const pageDescription =
  "반려동물 사진과 이야기를 바탕으로 강아지·고양이 추모영상을 제작합니다. 소중한 아이와의 추억을 맞춤 영상으로 간직하세요.";
const socialImageUrl = "https://fourfeetz.com/images/services/pet-memorial-0914-cover.jpg";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: languageAlternates("/services/pet-memorial-video", "/ko/services/pet-memorial-video"),
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [{ url: socialImageUrl, alt: "강아지와 고양이 반려동물 추모영상 제작 예시" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [socialImageUrl],
  },
};

const originalVideoPosterSrc = "/images/services/pet-memorial-0914-cover.jpg";
const originalVideoSrc = "/videos/services/pet-memorial-0914.mp4";
const storyImageSrc = "/images/services/pet-memorial-0914-cover.jpg";
const newVideoPosterSrc = "/images/services/pet-memorial-heavenly-steps-cover.jpg";
const newStoryImageSrc = "/images/shorts/pet-memorial/heavenly-steps-story-frame.png";
const newVideoSrc = "/videos/services/pet-memorial-heavenly-steps.mp4";
const soundtrackSrc = "/audio/music/lingering-piano-notes.mp3";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "반려동물 추모영상 제작",
      serviceType: "반려동물 추모영상 및 맞춤 AI 영상 제작",
      description: pageDescription,
      url: pageUrl,
      areaServed: { "@type": "Country", name: "대한민국" },
      provider: {
        "@type": "Organization",
        name: "FourFeetz Studios",
        url: "https://fourfeetz.com",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "KRW",
        lowPrice: "99000",
        highPrice: "299000",
        offerCount: "3",
        url: pageUrl,
      },
    },
    {
      "@type": "VideoObject",
      "@id": `${pageUrl}#heavenly-steps-video`,
      name: "반려동물 추모영상 제작 예시 | 구름 너머에서도 함께하는 두 아이",
      description:
        "꽃길 계단과 따뜻한 하늘의 분위기로 두 반려견과 함께한 사랑을 표현한 FourFeetz 공식 추모영상 제작 예시입니다.",
      thumbnailUrl: ["https://fourfeetz.com/images/services/pet-memorial-heavenly-steps-cover.jpg"],
      uploadDate: "2026-10-20",
      duration: "PT55S",
      contentUrl: "https://fourfeetz.com/videos/services/pet-memorial-heavenly-steps.mp4",
      url: pageUrl,
      inLanguage: "ko-KR",
      creator: {
        "@type": "Organization",
        name: "FourFeetz Studios",
        url: "https://fourfeetz.com",
      },
    },
  ],
};

const faqs = [
  {
    question: "사진은 몇 장이 필요한가요?",
    answer:
      "기본 상담은 선명한 사진 1~3장으로 시작할 수 있습니다. 원하는 장면과 구성에 따라 추가 사진을 요청드릴 수 있습니다.",
  },
  {
    question: "강아지뿐 아니라 고양이 추모영상도 제작할 수 있나요?",
    answer:
      "네. 강아지·반려견의 추모영상뿐 아니라 고양이와 다른 반려동물도 가능합니다. 애견 추모영상을 찾는 보호자분도 같은 맞춤 제작 상담을 받으실 수 있습니다.",
  },
  {
    question: "여러 마리의 반려동물을 한 영상에 담을 수 있나요?",
    answer:
      "가능합니다. 각 아이의 특징이 잘 보이는 사진과 관계, 담고 싶은 이야기를 함께 보내주세요. 사진 상태와 장면 수를 확인한 뒤 적합한 구성을 안내합니다.",
  },
  {
    question: "제작 기간은 얼마나 걸리나요?",
    answer:
      "자료와 제작 방향이 확정된 뒤 예상 작업일은 STANDARD 2일, DELUXE 4일, PREMIUM 6일입니다. 상담 내용과 작업 일정에 따라 달라질 수 있습니다.",
  },
  {
    question: "수정은 어디까지 가능한가요?",
    answer:
      "상품별로 1~3회의 수정이 포함되며 자막, 음악, 장면 순서와 기존 장면의 경미한 조정을 요청할 수 있습니다. 새 장면이나 캐릭터 추가 등 큰 변경은 추가 비용이 발생할 수 있습니다.",
  },
  {
    question: "AI 음성 메시지도 넣을 수 있나요?",
    answer:
      "상담 후 선택 옵션으로 추가할 수 있습니다. 전하고 싶은 메시지와 원하는 분위기를 확인해 영상에 어울리는 방식으로 안내합니다.",
  },
  {
    question: "완성 영상은 어떻게 전달되나요?",
    answer:
      "워터마크가 포함된 시안을 먼저 확인한 뒤 수정과 승인을 진행합니다. 잔금 결제가 완료되면 워터마크 없는 고화질 영상 파일을 전달합니다.",
  },
] as const;

const features = [
  {
    icon: PawPrint,
    text: <>사진으로 시작하는<br />감동적인 영상</>,
  },
  {
    icon: Heart,
    text: <>강아지, 고양이 등<br />모든 반려동물 가능</>,
  },
  {
    icon: ImageIcon,
    text: <>소중한 추억을<br />영원히 간직</>,
  },
  {
    icon: Users,
    text: <>전문 크리에이터의<br />맞춤 제작</>,
  },
  {
    icon: InfinityIcon,
    text: <>무지개다리를 건넌 아이에게<br />마지막 선물</>,
  },
];

const services = [
  {
    icon: Camera,
    title: "강아지·고양이 추모영상",
    desc: "사진과 추억을 바탕으로 크고 따뜻한 감성 영상을 제작합니다.",
  },
  {
    icon: Sparkles,
    title: "생일·입양일 기념 영상",
    desc: "함께했던 특별한 날을 더 특별하게 기록해 드립니다.",
  },
  {
    icon: Home,
    title: "무지개다리 추억 영상",
    desc: "따뜻한 빛과 자연스러운 장면으로 소중한 기억을 되살립니다.",
  },
  {
    icon: Heart,
    title: "가족 공유용 추억 영상",
    desc: "가족이 함께 간직하고 공유하기 좋은 구성으로 완성합니다.",
  },
];

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#fbf8f3] text-[#2d2925]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <section className="relative border-b border-[#eee4da] bg-[radial-gradient(circle_at_78%_24%,rgba(236,203,167,.28),transparent_27%),linear-gradient(180deg,#fffdfa_0%,#fbf8f3_100%)]">
        <PawPrint className="pointer-events-none absolute right-[4%] top-24 h-24 w-24 rotate-[-12deg] text-[#8d6747]/10" />
        <PawPrint className="pointer-events-none absolute left-[31%] top-[58%] h-10 w-10 rotate-[15deg] text-[#8d6747]/10" />

        <div className="mx-auto max-w-[1380px] px-6 py-12 md:px-10 lg:px-14 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_430px_.62fr] xl:grid-cols-[1fr_450px_.7fr]">
            <div className="max-w-[520px]">
              <p className="font-serif text-2xl italic tracking-wide text-[#9b7355] md:text-3xl">
                Forever in Our Hearts
              </p>

              <h1 className="mt-7 font-serif text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#22201e] md:text-6xl">
                반려동물
                <br />
                추모영상 제작
              </h1>

              <p className="mt-7 font-serif text-2xl leading-relaxed text-[#5f5953] md:text-3xl">
                함께했던 순간은
                <br /> 언제나 우리 곁에 있습니다.
              </p>

              <div className="mt-7 h-px w-14 bg-[#a37c5c]" />

              <p className="mt-7 text-lg leading-9 text-[#706963] md:text-xl">
                FourFeetz는 반려동물의 사진과 이야기를 바탕으로
                <br /> 강아지·반려견·고양이의 소중한 기억을
                <br /> 따뜻한 맞춤 추모영상으로 제작합니다.
                <br /> 함께한 사랑을 오래 간직해 보세요.
              </p>

              <Link
                href="#memorial-inquiry"
                className="mt-9 inline-flex min-w-[260px] items-center justify-center gap-4 rounded-2xl bg-[#926b4b] px-7 py-4 text-lg font-bold text-white shadow-[0_14px_32px_rgba(112,77,48,.16)] transition hover:-translate-y-0.5 hover:bg-[#825f43]"
              >
                <Mail className="h-6 w-6" strokeWidth={1.8} />
                추모영상 제작 상담하기
                <ChevronRight className="h-5 w-5" />
              </Link>

              <p className="mt-4 text-sm text-[#8a8179]">
                지금, 소중한 추억을 영상으로 남겨보세요.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[390px] lg:max-w-none">
              <div className="overflow-hidden rounded-[28px] border border-white/90 bg-black shadow-[0_24px_65px_rgba(91,62,38,.20)]">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={originalVideoPosterSrc}
                  aria-label="반려동물 추모영상 샘플 재생"
                  className="aspect-[9/16] w-full object-cover"
                >
                  <source src={originalVideoSrc} type="video/mp4" />
                  브라우저에서 영상을 재생할 수 없습니다.
                </video>
              </div>
              <div className="mt-5 text-center">
                <h2 className="font-serif text-xl font-semibold text-[#3b342e]">반려동물 추모영상 제작 예시</h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#8a8179]">
                  소중한 반려동물이 다시 행복하게 뛰어놀고 함께했던 순간을 떠올릴 수 있도록 만든 FourFeetz 공식 샘플입니다. 상담 후 보내주신 사진과 이야기를 바탕으로 원하는 분위기와 스토리에 맞춰 제작합니다.
                </p>
              </div>
            </div>

            <div className="hidden min-h-[390px] flex-col items-center justify-center lg:flex">
              <p className="rotate-[-5deg] text-center font-serif text-3xl italic leading-relaxed text-[#9a775b] xl:text-4xl">
                언제나,
                <br /> 사랑해 ♡
              </p>
              <p className="mt-10 text-xs font-semibold tracking-[.35em] text-[#a98a70]">
                ALWAYS
                <br /> IN OUR HEARTS
              </p>
              <PawPrint className="mt-5 h-8 w-8 text-[#9a775b]" strokeWidth={1.6} />
            </div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-[#e7ddd3] pt-8 sm:grid-cols-2 lg:grid-cols-5">
            {features.map(({ icon: Icon, text }, index) => (
              <div
                key={index}
                className="flex min-h-[78px] items-center gap-4 px-3 lg:border-r lg:border-[#dfd6cd] lg:last:border-r-0"
              >
                <Icon className="h-9 w-9 shrink-0 text-[#765139]" strokeWidth={1.65} />
                <p className="text-[15px] leading-7 text-[#4e4944]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[30px] bg-[#f7f0e8] shadow-[0_12px_42px_rgba(91,65,43,.07)] lg:grid-cols-[1.02fr_.98fr]">
          <div className="relative min-h-[480px] overflow-hidden lg:min-h-[620px]">
            <Image
              src={storyImageSrc}
              alt="강아지와 고양이의 따뜻한 추억을 표현한 반려동물 메모리얼 영상 이미지"
              fill
              sizes="(min-width: 1024px) 51vw, 100vw"
              className="object-cover object-[center_64%]"
            />
          </div>

          <div className="relative flex items-center px-8 py-14 md:px-14 lg:px-16">
            <PawPrint className="pointer-events-none absolute bottom-12 right-10 h-16 w-16 rotate-12 text-[#a27f63]/10" />
            <div className="max-w-xl">
              <p className="text-sm font-bold tracking-[.2em] text-[#a17859]">A SPECIAL GIFT</p>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
                사랑은 영원히 기억됩니다.
              </h2>
              <p className="mt-7 text-lg leading-9 text-[#706963]">
                반려동물은 우리에게 단순한 반려동물이 아니라,
                <br className="hidden md:block" /> 소중한 가족이자 평생 잊지 못할 친구입니다.
              </p>
              <p className="mt-5 text-lg leading-9 text-[#706963]">
                사진과 이야기를 바탕으로 아이의 표정, 함께했던 계절,
                <br className="hidden md:block" /> 기억하고 싶은 순간을 하나의 따뜻한 이야기로 연결합니다.
              </p>
              <p className="mt-10 rotate-[-4deg] font-serif text-2xl italic text-[#9d785d]">
                고마워, 함께해줘서 ♡
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eee5dd] bg-white px-6 py-16 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1260px] gap-10 rounded-[30px] border border-[#e8ddd3] bg-[#fcf8f3] p-6 shadow-[0_12px_42px_rgba(91,65,43,.07)] md:p-10 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-center">
          <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-[24px] border border-white bg-black shadow-[0_18px_42px_rgba(91,65,43,.16)]">
            <SyncedVideoPlayer src={newVideoSrc} poster={newVideoPosterSrc} audioSrc={soundtrackSrc} label="새 추모영상 샘플 재생" className="aspect-[9/16] w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold tracking-[.2em] text-[#a17859]">NEW MEMORIAL SHORT</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.035em] md:text-5xl">구름 너머에서도<br />함께하는 두 아이</h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[#706963]">
              오늘 추가한 추모영상은 꽃길 계단과 따뜻한 하늘의 분위기로, 곁에 남아 있는 사랑을 조용히 표현합니다.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link href="/ko/shorts/heavenly-steps-together" className="inline-flex items-center gap-2 rounded-full bg-[#805a3e] px-6 py-3 font-bold text-white transition hover:bg-[#6d4b34]">
                실제 추모영상 제작 사례 보기 <ChevronRight className="h-4 w-4" />
              </Link>
              <Link href="/music/lingering-piano-notes" className="font-semibold text-[#765139] underline decoration-[#cdb099] underline-offset-4">
                Lingering Piano Notes 듣기
              </Link>
            </div>
            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-[#e7ddd3] bg-white/80 p-4">
              <Image src={newStoryImageSrc} alt="꽃길 계단을 함께 오르는 두 강아지" width={72} height={96} className="h-20 w-14 rounded-xl object-cover" />
              <div>
                <p className="text-xs font-bold tracking-[.16em] text-[#9a775b]">MEMORIAL SOUNDTRACK</p>
                <audio controls preload="metadata" className="mt-2 h-9 max-w-full"><source src={soundtrackSrc} type="audio/mpeg" />브라우저에서 음악을 재생할 수 없습니다.</audio>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#eee5dd] bg-white px-6 py-20 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1260px] text-center">
          <p className="text-sm font-bold tracking-[.2em] text-[#a17859]">MEMORIAL STORY</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            사진 속 기억을 소중하게 담습니다
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#746d67]">
            함께했던 산책, 휴식, 햇살과 잠꼬대까지.
            <br className="hidden sm:block" /> 잊지 못할 순간들을 감성적인 영상으로 재현해 드립니다.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="rounded-[26px] border border-[#ece3da] bg-[#fdfbf8] px-6 py-8 text-center shadow-[0_8px_24px_rgba(80,57,37,.035)]"
              >
                <Icon className="mx-auto h-10 w-10 text-[#7b573d]" strokeWidth={1.6} />
                <h3 className="mt-5 font-serif text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#756e68]">{desc}</p>
              </article>
            ))}
          </div>

          <div className="relative mt-14 overflow-hidden rounded-[30px] bg-[#8b6548] px-8 py-11 text-white md:px-12">
            <PawPrint className="pointer-events-none absolute bottom-[-18px] left-6 h-28 w-28 rotate-[-18deg] text-white/10" />
            <p className="pointer-events-none absolute right-12 top-1/2 hidden -translate-y-1/2 rotate-[-7deg] font-serif text-3xl italic text-white/55 md:block">
              Always
              <br /> with you ♡
            </p>
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">사진과 이야기를 먼저 보내주세요.</h2>
              <p className="mt-4 text-lg leading-8 text-[#f5eade]">
                사진 상태와 원하는 분위기를 확인한 뒤 제작 가능한 구성을 안내해 드립니다.
              </p>
              <Link
                href="#memorial-inquiry"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-[#765237] transition hover:-translate-y-0.5"
              >
                <Mail className="h-5 w-5" />
                우리 아이 이야기 시작하기
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <VideoPricingSection
        description="간단한 15초 추억 영상부터 여러 장면으로 구성된 스토리형 추모영상까지, 소중하게 남기고 싶은 기억에 맞춰 선택할 수 있습니다."
        ctaHref="#memorial-inquiry"
        ctaLabel="추모영상 제작 상담하기"
        notice={
          <aside className="rounded-[28px] border border-[#e7ddd3] bg-[#f7f0e8] p-6 md:p-8" aria-labelledby="revision-guidance-heading">
            <p className="text-sm font-bold tracking-[.16em] text-[#a17859]">GUIDANCE</p>
            <h3 id="revision-guidance-heading" className="mt-3 font-serif text-3xl font-semibold text-[#2d2925]">수정 안내</h3>
            <div className="mt-4 max-w-4xl space-y-3 leading-8 text-[#706963]">
              <p>수정 횟수는 전달된 시안을 기준으로 자막, 음악, 장면 순서 및 기존 장면의 경미한 조정을 의미합니다.</p>
              <p>새로운 장면 추가, 새로운 반려동물 또는 캐릭터 추가, 확정된 스토리의 큰 변경 등은 기본 수정 범위에 포함되지 않으며 작업 내용에 따라 추가 비용이 발생할 수 있습니다.</p>
              <p>제작 전 원하시는 장면과 메시지를 충분히 알려주시면 보다 만족도 높은 영상을 제작할 수 있습니다.</p>
            </div>
          </aside>
        }
      />

      <MemorialProductionGuide />

      <section className="border-t border-[#eee5dd] bg-white px-6 py-16 md:px-10 lg:px-14 lg:py-24" aria-labelledby="memorial-faq-heading">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-sm font-bold tracking-[.2em] text-[#a17859]">FREQUENTLY ASKED QUESTIONS</p>
          <h2 id="memorial-faq-heading" className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            반려동물 추모영상 제작 FAQ
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#706963]">
            무지개다리 영상과 반려동물 메모리얼 영상 제작을 준비할 때 자주 묻는 내용을 정리했습니다.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group rounded-[22px] border border-[#e7ddd3] bg-[#fdfbf8] px-6 py-5 open:bg-[#f7f0e8]">
                <summary className="cursor-pointer list-none pr-8 font-serif text-lg font-semibold text-[#3b342e] marker:hidden">
                  {question}
                  <span className="float-right text-[#9a775b] transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 border-t border-[#e7ddd3] pt-4 leading-7 text-[#706963]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="memorial-inquiry" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-14" aria-labelledby="memorial-inquiry-heading">
        <div className="mx-auto grid max-w-[1260px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-sm font-bold tracking-[.2em] text-[#a17859]">MEMORIAL CONSULTATION</p>
            <h2 id="memorial-inquiry-heading" className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] md:text-5xl">우리 아이 이야기를 들려주세요.</h2>
            <p className="mt-6 text-lg leading-9 text-[#706963]">닮게 표현하고 싶은 사진, 꼭 담고 싶은 장면과 전하고 싶은 메시지를 알려주시면 제작 방향을 함께 안내해 드립니다.</p>
          </div>
          <MemorialInquiryForm />
        </div>
      </section>
    </main>
  );
}
