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

export const metadata: Metadata = {
  title: { absolute: "반려동물 추모영상 제작 | 무지개다리 추억 영상 | FourFeetz" },
  description:
    "강아지와 고양이의 사진과 소중한 이야기를 바탕으로 따뜻한 반려동물 추모영상과 추억 영상을 제작합니다.",
  alternates: { canonical: "/ko/services/pet-memorial-video" },
};

const videoPosterSrc = "/images/services/pet-memorial-0914-cover.jpg";
const storyImageSrc = "/images/services/my-pet-story-haru-pori-garden.webp";
const videoSrc = "/videos/services/pet-memorial-0914.mp4";

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
                사랑하는 아이와의 소중한 추억을
                <br /> 아름다운 영상으로 기록해 보세요.
                <br /> 사진 한 장에도, 함께한 모든 순간에도
                <br /> 잊지 못할 사랑이 담겨 있습니다.
              </p>

              <Link
                href="/ko/services#contact"
                className="mt-9 inline-flex min-w-[260px] items-center justify-center gap-4 rounded-2xl bg-[#926b4b] px-7 py-4 text-lg font-bold text-white shadow-[0_14px_32px_rgba(112,77,48,.16)] transition hover:-translate-y-0.5 hover:bg-[#825f43]"
              >
                <Mail className="h-6 w-6" strokeWidth={1.8} />
                무료 상담받기
                <ChevronRight className="h-5 w-5" />
              </Link>

              <p className="mt-4 text-sm text-[#8a8179]">
                지금, 소중한 추억을 영상으로 남겨보세요.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[390px] lg:max-w-none">
              <div className="overflow-hidden rounded-[28px] border border-white/90 bg-black shadow-[0_24px_65px_rgba(91,62,38,.20)]">
                <video
                  className="aspect-[9/16] w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={videoPosterSrc}
                >
                  <source src={videoSrc} type="video/mp4" />
                  브라우저에서 영상을 재생할 수 없습니다.
                </video>
              </div>
              <p className="mt-3 text-center text-xs tracking-[.08em] text-[#8a8179]">
                FourFeetz | Pet Memorial Video
              </p>
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
              alt="반려동물과 함께한 따뜻한 일상을 담은 추억 이미지"
              fill
              sizes="(min-width: 1024px) 51vw, 100vw"
              className="object-cover"
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
                href="/ko/services#contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-[#765237] transition hover:-translate-y-0.5"
              >
                <Mail className="h-5 w-5" />
                무료 상담받기
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
