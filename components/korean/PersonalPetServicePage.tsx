import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, BookHeart, Heart, ImageIcon, PartyPopper } from "lucide-react";
import { HeroVideoPanel } from "@/components/CinematicHero";
import { koreanHeroVideos } from "@/lib/heroVideos";
import { koreanPageTypographyClass } from "@/lib/koreanServiceStyles";

const button = "inline-flex min-h-12 items-center justify-center rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const secondaryButton = "inline-flex min-h-12 items-center justify-center rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const card = "rounded-[30px] border border-[#eadfce] bg-white p-7 shadow-sm";

export default function PersonalPetServicePage() {
  const strengths = [
    { title: "아이의 개성", text: "사진 속 털색, 눈빛, 표정과 평소 성격을 참고해 장면의 분위기와 행동 방향을 설계합니다." },
    { title: "프리미엄 무드", text: "따뜻한 자연광, 영화 같은 색감과 정돈된 장면 구성으로 오래 보고 싶은 분위기를 만듭니다." },
    { title: "공유하기 좋은 영상", text: "인스타그램 릴스, 유튜브 쇼츠와 카카오톡 공유에 어울리는 화면과 흐름으로 완성합니다." },
  ];
  const occasions = [
    { icon: PartyPopper, title: "생일·입양 기념일", text: "특별한 하루와 함께한 시간을 더 따뜻하게 남깁니다." },
    { icon: Heart, title: "소중한 일상", text: "평범해서 더 빛나는 산책, 휴식과 가족의 순간을 이야기로 만듭니다." },
    { icon: BookHeart, title: "가족·연인 선물", text: "반려동물을 사랑하는 사람에게 마음을 전하는 감성적인 선물로 준비합니다." },
    { icon: ImageIcon, title: "추억·추모 기록", text: "다시 보고 싶은 기억을 차분하고 존중하는 분위기로 정리합니다." },
  ];
  const process = [
    { title: "사진과 이야기 보내기", text: "가장 선명하고 사랑스러운 사진과 기억하고 싶은 순간을 보내주세요." },
    { title: "분위기와 구성 상담", text: "생일, 포근한 일상, 정원 산책 등 원하는 정서와 사용 목적을 함께 정합니다." },
    { title: "장면 제작과 편집", text: "사진의 특징을 바탕으로 장면을 만들고 음악, 색감과 자막을 정리합니다." },
    { title: "검수 후 최종 전달", text: "합의한 범위의 수정을 반영하고 선택한 화면 비율의 영상 파일을 전달합니다." },
  ];
  const photoTips = [
    "얼굴과 몸의 특징이 선명하게 보이는 사진",
    "정면 또는 옆모습이 또렷한 사진",
    "밝은 곳에서 촬영하고 과도한 필터가 없는 사진",
    "가능하면 서로 다른 각도와 표정의 사진",
  ];

  return <main className={koreanPageTypographyClass}>
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_.85fr] md:items-center md:py-20">
      <div>
        <p className="text-sm font-black uppercase tracking-[.25em] text-[#a67c52]">MY PET STORY</p>
        <h1 className="mt-4 text-5xl font-black leading-tight text-[#2b2119] md:text-7xl">우리 아이의 소중한 순간을<br />감성 AI 영상으로</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">반려동물 사진에서 시작해 아이의 표정과 분위기를 살린 짧은 이야기를 만듭니다. 단순한 슬라이드 영상이 아니라 다시 보고 싶은 한 편의 감성 영상으로 완성해 드립니다.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/ko/services#contact" aria-label="무료 상담받기" className={button}>무료 상담받기</Link>
          <Link href="/ko/videos" aria-label="My Pet Story 제작 사례 보기" className={secondaryButton}>제작 사례 보기</Link>
        </div>
        <p className="mt-5 font-bold text-[#6f4e37]">가격은 사진과 원하는 작품 구성을 확인한 후 안내해 드립니다. 결제 전 사진과 원하는 분위기를 먼저 상담해 주세요.</p>
      </div>
      <HeroVideoPanel locale="ko" video={koreanHeroVideos.myPetStory} />
    </section>

    <section className="border-y border-[#eadfce] bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[.25em] text-[#a67c52]">Why My Pet Story</p>
        <h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-6xl">사진 속 우리 아이가 이야기의 주인공이 됩니다</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">한 장의 사진과 짧은 사연에서도 아이가 가장 빛나는 순간을 찾아 영상의 콘셉트와 장면을 구성합니다.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">{strengths.map((item, index) => <article key={item.title} className={card}><span className="grid size-11 place-items-center rounded-full bg-[#6f4e37] font-black text-white">0{index + 1}</span><h3 className="mt-5 text-2xl font-black text-[#2b2119]">{item.title}</h3><p className="mt-3 leading-8 text-[#76685d]">{item.text}</p></article>)}</div>
      </div>
    </section>

    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[.25em] text-[#a67c52]">Scene Gallery</p>
        <h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-6xl">장면으로 보는 My Pet Story</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">사진의 분위기와 아이의 특징에 맞춰 여행, 따뜻한 일상과 포근한 휴식처럼 서로 다른 이야기 장면을 구성합니다.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/images/works/haru-first-journey/gallery/car-ride.png", alt: "차 안에서 창밖을 바라보는 HARU의 여행 장면", title: "여행과 드라이브" },
            { src: "/images/services/my-pet-story-haru-pori-garden.webp", alt: "HARU와 PORI가 함께하는 따뜻한 이야기 장면", title: "친구와 따뜻한 일상", className: "md:col-span-1" },
            { src: "/images/works/haru-first-journey/gallery/window-scene.png", alt: "따뜻한 실내에서 창밖을 바라보는 HARU의 포근한 장면", title: "햇살과 포근한 휴식" },
          ].map((scene) => <figure key={scene.title} className="overflow-hidden rounded-[28px] border border-[#eadfce] bg-white shadow-sm"><div className="relative aspect-[4/3] overflow-hidden bg-[#f2e8dc]"><Image src={scene.src} alt={scene.alt} fill sizes="(min-width:1024px)33vw,(min-width:640px)50vw,100vw" className="object-cover transition duration-300 hover:scale-[1.02]" /></div><figcaption className="p-4 text-lg font-black text-[#2b2119]">{scene.title}</figcaption></figure>)}
        </div>
      </div>
    </section>

    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-black text-[#2b2119] md:text-6xl">이런 순간에 추천드려요</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">{occasions.map(({icon:Icon,title,text}) => <article key={title} className={card}><Icon className="text-[#a67c52]" aria-hidden="true" /><h3 className="mt-5 text-2xl font-black text-[#2b2119]">{title}</h3><p className="mt-3 leading-8 text-[#76685d]">{text}</p></article>)}</div>
      </div>
    </section>

    <section className="border-y border-[#eadfce] bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[.25em] text-[#a67c52]">Simple Process</p>
        <h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-6xl">간단하고 섬세한 제작 과정</h2>
        <p className="mt-5 text-lg leading-8 text-[#76685d]">복잡한 준비 없이 사진과 아이의 이야기만 보내주세요.</p>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{process.map((step, index) => <li key={step.title} className={card}><span className="text-sm font-black text-[#a67c52]">STEP 0{index + 1}</span><h3 className="mt-4 text-2xl font-black text-[#2b2119]">{step.title}</h3><p className="mt-3 leading-8 text-[#76685d]">{step.text}</p></li>)}</ol>
      </div>
    </section>

    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[.25em] text-[#a67c52]">Photo Guide</p>
          <h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-5xl">더 좋은 결과를 위한 사진 준비</h2>
          <p className="mt-5 text-lg leading-8 text-[#76685d]">기본 상담은 사진 1~3장으로 시작할 수 있습니다. 사진의 선명도와 각도에 따라 표현 가능한 장면 범위가 달라질 수 있습니다.</p>
        </div>
        <ul className={`${card} space-y-4`}>{photoTips.map((tip) => <li key={tip} className="flex gap-3 font-bold leading-7 text-[#6f4e37]"><BadgeCheck className="mt-1 size-5 shrink-0 text-[#a67c52]" aria-hidden="true" />{tip}</li>)}</ul>
      </div>
    </section>

    <section className="border-y border-[#eadfce] bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-black text-[#2b2119]">제작 전 확인해 주세요</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["화면 비율", "세로형 9:16 또는 가로형 16:9 중 사용 목적에 맞춰 상담합니다."],
            ["AI 영상 특성", "실제 모습과 100% 동일한 재현은 어려우며 털, 무늬와 표정이 일부 달라질 수 있습니다."],
            ["수정 범위", "처음 합의한 콘셉트 안에서 수정하며 큰 방향 변경은 추가 작업으로 안내될 수 있습니다."],
            ["자료와 공개", "사진은 제작 목적으로 사용하며 포트폴리오 공개에는 별도 동의가 필요합니다."],
          ].map(([title, text]) => <article key={title} className={card}><h3 className="text-xl font-black text-[#6f4e37]">{title}</h3><p className="mt-3 leading-8 text-[#76685d]">{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[40px] bg-[#6f4e37] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
        <div><h2 className="text-4xl font-black md:text-5xl">당신의 소중한 순간을 영상으로 남겨보세요.</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-[#f4e8da]">사진과 원하는 분위기를 보내주시면 구현 가능 여부와 어울리는 구성을 먼저 안내해 드립니다.</p></div>
        <Link href="/ko/services#contact" aria-label="무료 상담받기" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 py-4 font-black text-[#6f4e37]">무료 상담받기</Link>
      </div>
    </section>
  </main>;
}
