import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Building2, Heart, PawPrint } from "lucide-react";
import { films } from "@/lib/films";
import { shorts } from "@/data/shorts";
import { HeroVideoPanel } from "@/components/CinematicHero";
import { koreanHeroVideos } from "@/lib/heroVideos";
import { koreanPageTypographyClass } from "@/lib/koreanServiceStyles";

const primary = "inline-flex min-h-12 items-center justify-center rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const secondary = "inline-flex min-h-12 items-center justify-center rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const card = "rounded-[30px] border border-[#eadfce] bg-white p-7 shadow-sm";

export default function KoreanSalesHome() {
  const work = films[0];
  const short = shorts.find((item) => item.poster);
  const cases = [
    work && { title: work.koreanTitle ?? work.title, image: work.thumbnail, href: `/ko/films/${work.slug}`, label: "공개 필름 · 16:9" },
    short && { title: short.title, image: short.poster, href: `/ko/shorts/${short.slug}`, label: "공개 쇼츠 · 세로형" },
    { title: "애견미용실·호텔 홍보영상", image: "/images/services/pet-grooming-hotel-cover.webp", href: "/ko/services/grooming-hotel", label: "업체용 공개 포트폴리오 · 9:16" },
  ].filter(Boolean) as { title: string; image?: string; href: string; label: string }[];

  return <main className={koreanPageTypographyClass}>
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1fr_.88fr] md:items-center md:py-20">
      <div><p className="text-sm font-black uppercase tracking-[.25em] text-[#a67c52]">FourFeetz Creative Studio</p><h1 className="mt-4 text-5xl font-black leading-[1.12] tracking-tight text-[#2b2119] md:text-7xl">사진 속 우리 아이를<br />특별한 이야기로 만들어드립니다</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d] md:text-xl">반려동물 맞춤 영상과 디지털 작품부터 반려동물 업체를 위한 감성 홍보 콘텐츠까지, FourFeetz가 사진과 이야기를 기억에 남는 장면으로 완성합니다.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/ko/services/personal-pet-video" aria-label="My Pet Story 상담하기" className={primary}>My Pet Story</Link><Link href="/ko/services/pet-video" className={secondary}>업체 홍보 콘텐츠 알아보기</Link><Link href="/ko/videos" className={secondary}>제작 사례 보기</Link></div></div>
      <HeroVideoPanel locale="ko" video={koreanHeroVideos.home} />
    </section>

    <section className="border-y border-[#eadfce] bg-white px-6 py-16"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
      <Link href="/ko/services/personal-pet-video" aria-label="My Pet Story 자세히 보기" className={`${card} group`}><Heart className="text-[#a67c52]" /><p className="mt-6 text-sm font-black text-[#a67c52]">개인 고객</p><h2 className="mt-2 text-3xl font-black text-[#2b2119]">My Pet Story</h2><p className="mt-4 leading-8 text-[#76685d]">생일·입양 기념, 일상의 추억과 추모를 위한 맞춤 영상·디지털 작품을 상담합니다.</p><span className="mt-6 inline-flex font-black text-[#6f4e37]">My Pet Story →</span></Link>
      <Link href="/ko/services/pet-video" className={`${card} group`}><Building2 className="text-[#a67c52]" /><p className="mt-6 text-sm font-black text-[#a67c52]">업체 고객</p><h2 className="mt-2 text-3xl font-black text-[#2b2119]">매장과 서비스의 강점을 짧은 콘텐츠로</h2><p className="mt-4 leading-8 text-[#76685d]">미용실·호텔, 용품, 동물병원, 장례식장에 맞춘 쇼츠·릴스 콘텐츠를 제작합니다.</p><span className="mt-6 inline-flex font-black text-[#6f4e37]">업체 서비스 보기 →</span></Link>
    </div></section>

    <section className="px-6 py-20"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[.25em] text-[#a67c52]">Published Work</p><h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-6xl">실제로 공개된 제작 사례</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-[#76685d]">FourFeetz가 공개한 작품과 서비스 포트폴리오만 소개합니다.</p><div className="mt-10 grid gap-6 md:grid-cols-3">{cases.map((item) => <Link key={item.href} href={item.href} className="overflow-hidden rounded-[30px] border border-[#eadfce] bg-white shadow-sm"><div className="relative aspect-video bg-[#f2e8dc]">{item.image ? <Image src={item.image} alt={item.title} fill sizes="(min-width:768px)33vw,100vw" className="object-cover" /> : null}</div><div className="p-6"><p className="text-sm font-black text-[#a67c52]">{item.label}</p><h3 className="mt-2 text-2xl font-black text-[#2b2119]">{item.title}</h3><span className="mt-5 inline-flex font-black text-[#6f4e37]">사례 보기 →</span></div></Link>)}</div></div></section>

    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[.25em] text-[#a67c52]">What We Make</p><h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-6xl">두 가지 목적, 한결같은 제작 기준</h2><div className="mt-10 grid gap-6 md:grid-cols-2"><div className={card}><PawPrint className="text-[#a67c52]" /><h3 className="mt-5 text-2xl font-black">개인 맞춤 작품</h3><ul className="mt-5 space-y-3 text-[#76685d]">{["우리 아이 감성 영상", "생일·입양 기념 영상", "추억·추모 영상", "디지털 동화 또는 이미지 작품"].map(x=><li key={x} className="flex gap-2"><BadgeCheck className="mt-1 size-5 shrink-0 text-[#a67c52]" />{x}</li>)}</ul><Link href="/ko/services/personal-pet-video" className={`${primary} mt-7`}>자세히 보기</Link></div><div className={card}><Building2 className="text-[#a67c52]" /><h3 className="mt-5 text-2xl font-black">업체용 홍보 콘텐츠</h3><ul className="mt-5 space-y-3 text-[#76685d]">{["미용실·호텔 홍보영상", "동물병원·용품 콘텐츠", "장례식장 안내영상", "업체명·로고·문구를 반영한 쇼츠·릴스"].map(x=><li key={x} className="flex gap-2"><BadgeCheck className="mt-1 size-5 shrink-0 text-[#a67c52]" />{x}</li>)}</ul><Link href="/ko/services/pet-video" className={`${primary} mt-7`}>업종별 서비스 보기</Link></div></div></div></section>

    <section className="px-6 py-20"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-black text-[#2b2119] md:text-5xl">제작은 이렇게 진행됩니다</h2><ol className="mt-8 grid gap-5 md:grid-cols-4">{[["자료 확인","사진, 이름, 특징, 분위기와 사용 목적을 확인합니다."],["구성 안내","공개 가능한 범위와 원하는 결과물을 바탕으로 구성을 안내합니다."],["제작·검토","AI를 활용해 제작하고 합의된 기준에 따라 결과를 검토합니다."],["수정·전달","확정된 수정 범위를 반영해 최종 파일을 전달합니다."]].map(([t,d],i)=><li key={t} className={card}><span className="font-black text-[#a67c52]">0{i+1}</span><h3 className="mt-4 text-xl font-black">{t}</h3><p className="mt-3 leading-7 text-[#76685d]">{d}</p></li>)}</ol></div></section>

    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2"><div><h2 className="text-4xl font-black text-[#2b2119]">FourFeetz를 선택할 이유</h2><p className="mt-5 text-lg leading-8 text-[#76685d]">FourFeetz Studios는 공개 작품과 실제 제작 기록을 바탕으로 상담하며, 내부 프롬프트와 고객 자료를 공개 콘텐츠로 사용하지 않습니다.</p></div><div className="space-y-4">{["고객 사진은 제작 목적에 맞게 다루며 포트폴리오 공개에는 별도 동의가 필요합니다.","AI를 활용한 결과물은 입력 사진과 생성 과정에 따라 차이가 날 수 있습니다.","확인되지 않은 성과·후기·가격을 약속하지 않습니다."].map(x=><p key={x} className="rounded-2xl bg-[#fffaf4] p-5 font-bold leading-7 text-[#6f4e37]">{x}</p>)}</div></div></section>

    <section className="px-6 py-20"><div className="mx-auto max-w-4xl"><h2 className="text-4xl font-black text-[#2b2119]">자주 묻는 질문</h2><div className="mt-8 divide-y divide-[#eadfce] rounded-[30px] border border-[#eadfce] bg-white">{[["가격은 얼마인가요?","개인 작품은 사진과 원하는 구성을 확인한 뒤 안내합니다. 업체 영상의 확정 패키지 가격은 업체용 서비스 페이지에서 확인할 수 있습니다."],["사진은 어디에 사용되나요?","상담과 제작을 위해 제공된 자료는 해당 목적에 맞게 다룹니다. 포트폴리오 공개는 별도 동의를 전제로 합니다."],["AI로 만든 결과물인가요?","AI를 활용한 제작물이며 사진과 생성 과정에 따라 표현이 달라질 수 있습니다."]].map(([q,a])=><details key={q} className="px-6 py-2"><summary className="cursor-pointer py-5 text-lg font-black">{q}</summary><p className="pb-6 leading-8 text-[#76685d]">{a}</p></details>)}</div></div></section>

    <section className="px-6 pb-20"><div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[40px] bg-[#6f4e37] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12"><div><h2 className="text-4xl font-black md:text-5xl">사진과 이야기를 들려주세요.</h2><p className="mt-4 text-lg text-[#f4e8da]">실제 수신 이메일로 연결되는 제작 상담 안내를 확인할 수 있습니다.</p></div><Link href="/ko/services#contact" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 py-4 font-black text-[#6f4e37]">문의 방법 확인하기</Link></div></section>
  </main>;
}
