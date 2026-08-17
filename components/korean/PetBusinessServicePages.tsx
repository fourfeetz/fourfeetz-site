import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  HeartHandshake,
  PackageCheck,
  PawPrint,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { PetIndustryService } from "@/lib/petBusinessServices";
import { petIndustryServices } from "@/lib/petBusinessServices";

const primaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const secondaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const cardClass =
  "rounded-[32px] border border-[#eadfce] bg-[#fffdf8] shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10";

const industryIcons = {
  "grooming-hotel": PawPrint,
  "pet-products": PackageCheck,
  veterinary: ShieldCheck,
  "pet-funeral": HeartHandshake,
} as const;

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{eyebrow}</p>
      <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#2b2119] md:text-6xl">{title}</h2>
      {description ? <p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">{description}</p> : null}
    </div>
  );
}

export function PetIndustryCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-6 md:grid-cols-2 ${compact ? "" : "xl:grid-cols-4"}`}>
      {petIndustryServices.map((service) => {
        const Icon = industryIcons[service.slug];
        return (
          <article key={service.slug} className={`${cardClass} group flex h-full min-w-0 flex-col overflow-hidden`}>
            <Link href={`/ko/services/${service.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-[#f2e8dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#6f4e37]">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes={compact ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"}
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
              />
              <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-black shadow-sm ${service.video ? "bg-[#6f4e37] text-white" : "border border-[#e6d8c8] bg-white/95 text-[#6f4e37]"}`}>
                {service.cardBadge}
              </span>
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <span className="grid size-11 place-items-center rounded-2xl bg-[#f2e8dc] text-[#6f4e37]"><Icon size={22} aria-hidden="true" /></span>
              <h3 className="mt-5 text-2xl font-black leading-tight text-[#2b2119]">{service.cardTitle}</h3>
              <p className="mt-3 flex-1 leading-7 text-[#76685d]">{service.cardDescription}</p>
              <Link href={`/ko/services/${service.slug}`} className="mt-6 w-fit rounded-lg font-black text-[#6f4e37] underline decoration-[#d8c3ad] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
                상세 안내 보기 →
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function PetVideoLandingPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">Pet Business Video</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#2b2119] sm:text-5xl md:text-7xl">반려동물 업체를 위한 AI 홍보영상</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d] md:text-xl">매장, 제품과 서비스의 강점을 릴스·쇼츠·네이버 클립에 어울리는 짧은 영상으로 전합니다. 업종마다 고객이 확인하는 정보와 정서가 다른 만큼 같은 틀을 반복하지 않고 목적에 맞는 흐름을 설계합니다.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#industries" className={primaryButton}>업종별 서비스 보기</a>
            <Link href="/ko/services#contact" className={secondaryButton}>제작 상담하기</Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-[#d8c3ad] bg-[#f2e8dc] shadow-2xl shadow-[#6f4e37]/15">
          <Image src="/images/services/pet-grooming-hotel-cover.webp" alt="밝은 애견미용실에서 편안하게 쉬는 푸들" fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-[#6f4e37] shadow-sm">실제 포트폴리오 영상 공개</span>
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeading eyebrow="Why Short Video" title="고객이 궁금한 정보를 짧고 분명하게" description="반려동물 서비스는 신뢰, 공간의 분위기, 제품의 정확한 정보와 정서적 배려가 모두 중요합니다. FourFeetz는 업체가 실제로 제공하는 내용과 사용 채널을 먼저 확인하고, 과장된 약속이나 실제 사례로 오해할 표현을 피하면서 시청이 문의·예약·구매로 이어지는 구조를 만듭니다." />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["업종별 메시지", "미용·호텔의 안심, 제품의 구매 근거, 병원의 정확성, 장례 서비스의 존중처럼 서로 다른 판단 기준을 반영합니다."],
            ["채널별 화면", "9:16 세로형을 기본으로 릴스, 쇼츠, 틱톡과 네이버 클립에서 읽기 쉬운 자막과 엔드카드를 구성합니다."],
            ["사실 중심 표현", "업체가 제공한 상호, 시설, 제품과 운영 정보를 기준으로 만들고 AI 활용 범위와 예시 이미지를 명확히 구분합니다."],
          ].map(([title, description]) => (
            <article key={title} className={`${cardClass} p-7`}>
              <Sparkles className="size-7 text-[#a67c52]" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-black text-[#2b2119]">{title}</h3>
              <p className="mt-3 leading-8 text-[#76685d]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="industries" className="scroll-mt-24 px-6 py-20">
        <SectionHeading eyebrow="Industry Services" title="업종별 홍보영상 제작 안내" description="애견미용실·호텔 페이지에서는 실제 제작한 세로형 포트폴리오 영상을 확인할 수 있습니다. 나머지 업종은 기존 FourFeetz 자산을 활용한 서비스 예시 이미지와 함께 구체적인 구성, 신뢰 요소와 제작 절차를 안내합니다." />
        <div className="mx-auto mt-10 max-w-7xl"><PetIndustryCards /></div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeading eyebrow="Production Standard" title="자료가 부족해도, 사실과 다른 장면은 만들지 않습니다" />
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className={`${cardClass} p-8 md:p-10`}>
            <h3 className="text-3xl font-black text-[#2b2119]">기본 제공 방향</h3>
            <ul className="mt-6 space-y-4 text-[#76685d]">
              {["9:16 세로형 영상 기획·제작", "상호·로고·연락처와 행동 유도 화면", "업종과 브랜드 분위기에 맞는 문구·음악·자막", "자료와 사실관계 확인 후 시안 검수", "필요 시 16:9 가로형 결과물 추가 협의"].map((item) => <li key={item} className="flex gap-3 leading-7"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-[#a67c52]" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
          <div className="rounded-[32px] bg-[#6f4e37] p-8 text-white shadow-xl shadow-[#6f4e37]/20 md:p-10">
            <Building2 className="size-9 text-[#e5c9a8]" aria-hidden="true" />
            <h3 className="mt-6 text-3xl font-black">업체별 맞춤 견적</h3>
            <p className="mt-5 text-lg leading-8 text-[#f4e8da]">영상 길이, 제공 자료, 장면 수, 수정 범위와 추가 규격에 따라 필요한 작업이 달라집니다. 상담에서 실제 목적을 확인한 뒤 구성과 견적을 안내합니다.</p>
            <Link href="/ko/services#contact" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-4 font-black text-[#6f4e37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6f4e37]">무료 상담 요청</Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-[40px] bg-[#6f4e37] p-8 text-white shadow-xl shadow-[#6f4e37]/20 md:flex-row md:items-center md:justify-between md:p-12">
          <div><h2 className="text-4xl font-black tracking-tight md:text-5xl">우리 업체의 첫 홍보영상을 시작해 보세요.</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-[#f4e8da]">업종, 보유 자료와 게시 채널을 알려주시면 적합한 구성부터 함께 상담합니다.</p></div>
          <Link href="/ko/services#contact" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 py-4 font-black text-[#6f4e37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">FourFeetz에 문의하기</Link>
        </div>
      </section>
    </main>
  );
}

function ServiceVisual({ service }: { service: PetIndustryService }) {
  if (service.video) {
    return (
      <section className="border-y border-[#eadfce] bg-white px-6 py-20" aria-labelledby="video-example-heading">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(280px,380px)_1fr] lg:items-center lg:justify-center">
          <div className="mx-auto w-full max-w-[380px]">
            <video
              controls
              playsInline
              preload="metadata"
              poster={service.video.poster}
              className="aspect-[9/16] h-auto w-full rounded-[32px] bg-black object-contain shadow-2xl shadow-[#2b2119]/20"
              aria-label={service.video.label}
            >
              <source src={service.video.src} type="video/mp4" />
              브라우저가 MP4 영상을 지원하지 않습니다.
            </video>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">Portfolio Sample</p>
            <h2 id="video-example-heading" className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">영상 사례</h2>
            <p className="mt-6 text-2xl font-black text-[#6f4e37]">{service.video.label}</p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#76685d]">{service.video.note}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#eadfce] bg-[#fffaf4] p-5"><dt className="text-sm font-black text-[#a67c52]">화면 비율</dt><dd className="mt-2 font-black text-[#2b2119]">9:16 세로형</dd></div>
              <div className="rounded-2xl border border-[#eadfce] bg-[#fffaf4] p-5"><dt className="text-sm font-black text-[#a67c52]">영상 길이</dt><dd className="mt-2 font-black text-[#2b2119]">{service.video.durationLabel}</dd></div>
            </dl>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-[#eadfce] bg-white px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#f2e8dc] shadow-xl">
          <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          <span className="absolute bottom-4 left-4 rounded-full border border-[#e6d8c8] bg-white/95 px-4 py-2 text-sm font-black text-[#6f4e37] shadow-sm">{service.imageLabel}</span>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">Visual Direction</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-5xl">실제 사례와 예시 이미지를 구분합니다</h2>
          <p className="mt-6 text-lg leading-8 text-[#76685d]">이 이미지는 FourFeetz 기존 자산 중 업종의 분위기와 설명 목적에 가장 가까운 이미지를 선택한 것으로, 특정 업체·고객·시설 또는 실제 서비스 수행 사례를 나타내지 않습니다. 향후 해당 업종 영상이 준비되면 같은 데이터 구조에 영상 경로, 포스터와 재생 시간을 추가해 현재 영역을 세로형 플레이어로 교체할 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
}

export function PetIndustryServicePage({ service }: { service: PetIndustryService }) {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.85fr] md:items-center md:py-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{service.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#2b2119] sm:text-5xl md:text-7xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#76685d] md:text-xl">{service.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ko/services#contact" className={primaryButton}>제작 상담하기</Link>
            <Link href="/ko/services/pet-video" className={secondaryButton}>전체 서비스 보기</Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-[#d8c3ad] bg-[#f2e8dc] shadow-2xl shadow-[#6f4e37]/15">
          <Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          <span className={`absolute bottom-4 left-4 rounded-full px-4 py-2 text-sm font-black shadow-sm ${service.video ? "bg-[#6f4e37] text-white" : "border border-[#e6d8c8] bg-white/95 text-[#6f4e37]"}`}>{service.video ? "실제 영상 포스터" : service.imageLabel}</span>
        </div>
      </section>

      <ServiceVisual service={service} />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">Why Video</p><h2 className="mt-3 text-4xl font-black leading-tight text-[#2b2119] md:text-5xl">{service.reasonTitle}</h2></div>
          <div className="space-y-5 text-lg leading-8 text-[#76685d]"><p>{service.intro}</p>{service.reason.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeading eyebrow="Recommended Story" title="추천 영상 구성" />
        <ol className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {service.recommended.map((item, index) => <li key={item.title} className={`${cardClass} p-7`}><span className="grid size-11 place-items-center rounded-full bg-[#6f4e37] font-black text-white">{index + 1}</span><h3 className="mt-6 text-xl font-black text-[#2b2119]">{item.title}</h3><p className="mt-3 leading-7 text-[#76685d]">{item.description}</p></li>)}
        </ol>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className={`${cardClass} p-8 md:p-10`}>
            <ShieldCheck className="size-8 text-[#a67c52]" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-black text-[#2b2119]">{service.trustTitle}</h2>
            <ul className="mt-6 space-y-4">{service.trust.map((item) => <li key={item} className="flex gap-3 leading-7 text-[#76685d]"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-[#a67c52]" aria-hidden="true" />{item}</li>)}</ul>
          </article>
          <article className={`${cardClass} p-8 md:p-10`}>
            <PlayCircle className="size-8 text-[#a67c52]" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-black text-[#2b2119]">활용 채널</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">{service.channels.map((channel) => <li key={channel} className="rounded-2xl bg-[#f2e8dc] px-4 py-3 font-bold leading-6 text-[#6f4e37]">{channel}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeading eyebrow="Deliverables" title="제공 내용" />
        <ul className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{service.deliverables.map((item) => <li key={item} className={`${cardClass} flex gap-3 p-6 font-bold leading-7 text-[#2b2119]`}><BadgeCheck className="mt-0.5 size-5 shrink-0 text-[#a67c52]" aria-hidden="true" />{item}</li>)}</ul>
      </section>

      <section className="px-6 py-20">
        <SectionHeading eyebrow="Process" title="제작 절차" />
        <ol className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-5">{service.process.map((step, index) => <li key={step.title} className={`${cardClass} p-6`}><span className="text-sm font-black uppercase tracking-[0.18em] text-[#a67c52]">Step {index + 1}</span><h3 className="mt-4 text-xl font-black text-[#2b2119]">{step.title}</h3><p className="mt-3 leading-7 text-[#76685d]">{step.description}</p></li>)}</ol>
      </section>

      <section className="border-y border-[#eadfce] bg-[#6f4e37] px-6 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#e5c9a8]">Custom Quote</p><h2 className="mt-3 text-4xl font-black md:text-5xl">업체별 맞춤 견적</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-[#f4e8da]">업체별 구성과 영상 길이에 따라 맞춤 견적을 안내드립니다.</p></div>
          <Link href="/ko/services#contact" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 py-4 font-black text-[#6f4e37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">무료 상담 요청</Link>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" />
          <div className="mt-10 divide-y divide-[#eadfce] overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#fffdf8]">{service.faqs.map((faq) => <details key={faq.question} className="group px-6 py-2 md:px-8"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg font-black text-[#2b2119]">{faq.question}<span className="text-2xl text-[#a67c52] transition group-open:rotate-45" aria-hidden="true">+</span></summary><p className="pb-6 pr-8 leading-8 text-[#76685d]">{faq.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-[40px] bg-[#6f4e37] p-8 text-white shadow-xl shadow-[#6f4e37]/20 md:flex-row md:items-center md:justify-between md:p-12">
          <div><h2 className="text-4xl font-black tracking-tight md:text-5xl">{service.finalTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-[#f4e8da]">{service.finalDescription}</p></div>
          <Link href="/ko/services#contact" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 py-4 font-black text-[#6f4e37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">FourFeetz에 문의하기</Link>
        </div>
      </section>
    </main>
  );
}
