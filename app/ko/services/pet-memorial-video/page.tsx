import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Heart,
  Image as ImageIcon,
  Infinity as InfinityIcon,
  Mail,
  PawPrint,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "반려동물 추모영상 제작 | 무지개다리 추억 영상 | FourFeetz" },
  description:
    "강아지와 고양이의 사진과 소중한 이야기를 바탕으로 따뜻한 반려동물 추모영상과 추억 영상을 제작합니다.",
  alternates: { canonical: "/ko/services/pet-memorial-video" },
};

const coverSrc = "/images/services/pet-memorial-0914-cover.jpg";
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

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#fbf7f2] text-[#2f2924]">
      <section className="relative border-b border-[#eadfd4] bg-[radial-gradient(circle_at_75%_15%,rgba(235,197,155,.28),transparent_28%),linear-gradient(180deg,#fffdf9_0%,#fbf7f2_100%)]">
        <PawPrint className="pointer-events-none absolute right-[3%] top-28 h-28 w-28 rotate-[-16deg] text-[#8f6948]/8" />
        <PawPrint className="pointer-events-none absolute left-[31%] top-[62%] h-12 w-12 rotate-[14deg] text-[#8f6948]/8" />

        <div className="mx-auto max-w-[1440px] px-6 py-10 md:px-10 lg:px-14 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.32fr] lg:gap-14">
            <div className="max-w-xl">
              <p className="font-serif text-2xl italic tracking-wide text-[#9c7556] md:text-3xl">
                Forever in Our Hearts
              </p>

              <h1 className="mt-7 font-serif text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#2b2927] md:text-5xl lg:text-6xl">
                반려동물 추모영상 제작
              </h1>

              <p className="mt-6 font-serif text-2xl leading-relaxed text-[#5f5a55] md:text-3xl">
                함께했던 순간은 언제나 우리 곁에 있습니다.
              </p>

              <div className="mt-7 h-px w-16 bg-[#a17b5c]" />

              <p className="mt-7 text-lg leading-9 text-[#716b65] md:text-xl">
                사랑하는 아이와의 소중한 추억을
                <br className="hidden sm:block" /> 아름다운 영상으로 기록해 보세요.
                <br className="hidden sm:block" /> 사진 한 장에도, 함께한 모든 순간에도
                <br className="hidden sm:block" /> 잊지 못할 사랑이 담겨 있습니다.
              </p>

              <Link
                href="/ko/services#contact"
                className="mt-9 inline-flex min-w-[260px] items-center justify-center gap-4 rounded-2xl bg-[#9d7654] px-7 py-4 text-lg font-bold text-white shadow-[0_12px_30px_rgba(116,81,49,.16)] transition hover:-translate-y-0.5 hover:bg-[#8d6849]"
              >
                <Mail className="h-6 w-6" strokeWidth={1.8} />
                무료 상담받기
                <ChevronRight className="h-5 w-5" />
              </Link>

              <p className="mt-4 text-sm text-[#8a827b]">
                지금, 소중한 추억을 영상으로 남겨보세요.
              </p>
            </div>

            <div>
              <div className="overflow-hidden rounded-[24px] border border-white/80 bg-black shadow-[0_20px_60px_rgba(98,71,47,.16)]">
                <video
                  className="aspect-video w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={coverSrc}
                >
                  <source src={videoSrc} type="video/mp4" />
                  브라우저에서 영상을 재생할 수 없습니다.
                </video>
              </div>
              <p className="mt-3 text-center text-sm tracking-wide text-[#7d756e]">
                FourFeetz | Pet Memorial Video
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 border-t border-[#e5ddd5] pt-7 sm:grid-cols-2 lg:grid-cols-5">
            {features.map(({ icon: Icon, text }, index) => (
              <div
                key={index}
                className="flex min-h-[82px] items-center gap-4 px-3 lg:border-r lg:border-[#ded5cc] lg:last:border-r-0"
              >
                <Icon className="h-10 w-10 shrink-0 text-[#765237]" strokeWidth={1.7} />
                <p className="text-base leading-7 text-[#4d4944]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[28px] bg-[#f6f0e8] shadow-[0_10px_40px_rgba(92,67,44,.06)] lg:grid-cols-2">
          <div className="min-h-[420px] overflow-hidden">
            <img
              src={coverSrc}
              alt="반려동물과 함께했던 따뜻한 추억을 담은 추모영상 이미지"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div className="flex items-center px-8 py-12 md:px-12 lg:px-16">
            <div>
              <p className="text-sm font-bold tracking-[.18em] text-[#a07a5d]">
                A SPECIAL GIFT
              </p>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
                사랑은 영원히 기억됩니다.
              </h2>
              <p className="mt-6 text-lg leading-9 text-[#716b65]">
                반려동물은 우리에게 단순한 반려동물이 아니라,
                <br className="hidden md:block" /> 소중한 가족이자 평생 잊지 못할 친구입니다.
              </p>
              <p className="mt-5 text-lg leading-9 text-[#716b65]">
                사진과 이야기를 바탕으로 아이의 표정, 함께했던 계절,
                <br className="hidden md:block" /> 기억하고 싶은 순간을 하나의 따뜻한 이야기로 연결합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-[1180px] text-center">
          <p className="text-sm font-bold tracking-[.18em] text-[#a07a5d]">MEMORIAL STORY</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold md:text-5xl">사진 속 기억을 소중하게 담습니다</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#746d67]">
            함께했던 산책, 휴식, 햇살과 정원처럼 기억하고 싶은 분위기를 중심으로 차분하게 구성합니다.
            자동 생성으로 끝내지 않고 장면과 편집 결과를 직접 확인해 완성합니다.
          </p>

          <div className="mt-12 grid gap-5 text-left md:grid-cols-2">
            {[
              ["강아지·고양이 추모영상", "사진과 추억을 바탕으로 짧고 따뜻한 감성 영상을 구성합니다."],
              ["무지개다리 추억 영상", "따뜻한 빛과 자연스러운 장면으로 소중한 기억을 표현합니다."],
              ["생일·입양일 기념 영상", "함께했던 특별한 날짜와 행복했던 시간을 영상으로 남깁니다."],
              ["가족 공유용 추억 영상", "가족이 함께 간직하고 공유하기 좋은 구성으로 완성합니다."],
            ].map(([title, desc]) => (
              <article key={title} className="rounded-[24px] border border-[#ece3da] bg-[#fcfaf7] p-7">
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-base leading-8 text-[#746d67]">{desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[28px] bg-[#7d5b40] px-8 py-10 text-white md:px-12">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">사진과 이야기를 먼저 보내주세요.</h2>
            <p className="mt-4 text-lg leading-8 text-[#f3e9df]">
              사진 상태와 원하는 분위기를 확인한 뒤 구현 가능한 구성을 안내해 드립니다.
            </p>
            <Link
              href="/ko/services#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-[#765237] transition hover:-translate-y-0.5"
            >
              무료 상담받기
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
