import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, BookHeart, Heart, ImageIcon, PartyPopper } from "lucide-react";

const button = "inline-flex min-h-12 items-center justify-center rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const card = "rounded-[30px] border border-[#eadfce] bg-white p-7 shadow-sm";

export default function PersonalPetServicePage() {
  const products = [
    { icon: Heart, title: "우리 아이 감성 영상", text: "사진 속 표정과 성격, 기억하고 싶은 순간을 짧은 이야기로 구성합니다." },
    { icon: PartyPopper, title: "생일·입양 기념 영상", text: "함께한 날의 의미와 전하고 싶은 문구를 따뜻한 장면으로 담습니다." },
    { icon: BookHeart, title: "추억·추모 영상", text: "소중한 기억을 과장 없이 차분하고 존중하는 분위기로 정리합니다." },
    { icon: ImageIcon, title: "디지털 동화·이미지 작품", text: "반려동물의 특징과 원하는 분위기를 바탕으로 감상·소장용 작품을 상담합니다." },
  ];
  return <main>
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_.85fr] md:items-center md:py-20"><div><p className="text-sm font-black uppercase tracking-[.25em] text-[#a67c52]">Personal Pet Story</p><h1 className="mt-4 text-5xl font-black leading-tight text-[#2b2119] md:text-7xl">우리 아이의 사진을<br />마음에 남는 작품으로</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">반려동물의 이름, 성격과 기억하고 싶은 이야기를 사진과 함께 전해 주세요. FourFeetz가 맞춤 영상 또는 디지털 작품의 구성을 함께 정리합니다.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/ko/services#contact" className={button}>제작 상담 방법 보기</Link><Link href="/ko/videos" className="inline-flex min-h-12 items-center rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37]">공개 작품 보기</Link></div><p className="mt-5 font-bold text-[#6f4e37]">가격: 사진과 원하는 구성 확인 후 안내</p></div><div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-[#d8c3ad] bg-[#f2e8dc]"><Image src="/images/works/haru-relaxing-home/thumbnail.png" alt="따뜻한 집에서 쉬는 FourFeetz 캐릭터 HARU의 공개 작품 장면" fill priority sizes="(min-width:768px)44vw,100vw" className="object-cover" /><span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-[#6f4e37]">FourFeetz 공개 작품 이미지</span></div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-black text-[#2b2119] md:text-6xl">만들 수 있는 작품</h2><div className="mt-10 grid gap-6 md:grid-cols-2">{products.map(({icon:Icon,title,text})=><article key={title} className={card}><Icon className="text-[#a67c52]"/><h3 className="mt-5 text-2xl font-black">{title}</h3><p className="mt-3 leading-8 text-[#76685d]">{text}</p></article>)}</div></div></section>
    <section className="px-6 py-20"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div><h2 className="text-4xl font-black text-[#2b2119]">준비해 주세요</h2><p className="mt-5 text-lg leading-8 text-[#76685d]">정해진 사진 수량이나 영상 길이를 먼저 약속하지 않습니다. 가진 자료와 원하는 결과를 확인한 뒤 가능한 구성을 안내합니다.</p></div><ul className={`${card} space-y-4`}>{["반려동물 사진", "이름과 성격 또는 기억하고 싶은 특징", "원하는 분위기", "영상이나 작품의 사용 목적", "넣고 싶은 문구"].map(x=><li key={x} className="flex gap-3 font-bold leading-7 text-[#6f4e37]"><BadgeCheck className="mt-1 size-5 shrink-0 text-[#a67c52]"/>{x}</li>)}</ul></div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-black text-[#2b2119]">제작과 자료 사용 원칙</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{["AI를 활용한 결과물은 입력 사진과 생성 과정에 따라 모습과 표현에 차이가 날 수 있습니다.","제공한 사진과 이야기는 상담·제작 목적에 맞게 다루며, 포트폴리오 공개에는 별도 동의가 필요합니다.","수정 범위, 사용 범위, 일정과 비용은 자료와 요청 사항을 확인한 뒤 안내합니다."].map(x=><p key={x} className={`${card} leading-8 text-[#76685d]`}>{x}</p>)}</div></div></section>
    <section className="px-6 py-20"><div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[40px] bg-[#6f4e37] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12"><div><h2 className="text-4xl font-black md:text-5xl">우리 아이의 이야기를 들려주세요.</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-[#f4e8da]">현재 확인된 문의 수단은 이메일입니다. 문의 안내에서 필요한 내용을 확인한 뒤 메일 작성창을 열 수 있습니다.</p></div><Link href="/ko/services#contact" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 py-4 font-black text-[#6f4e37]">이메일 상담 안내</Link></div></section>
  </main>;
}
