import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, PawPrint } from "lucide-react";
import { createVideoStructuredData } from "@/lib/videoStructuredData";

const canonicalPath = "/ko/shorts/cat-memorial-video";
const canonicalUrl = `https://fourfeetz.com${canonicalPath}`;
const title = "고양이 추모영상 | 반려묘 메모리얼 영상 | FourFeetz";
const description =
  "소중한 반려묘와의 추억을 따뜻한 영상으로 간직하세요. 사진과 이야기를 바탕으로 제작한 FourFeetz 고양이 추모영상 제작 사례입니다.";
const videoSrc = "/videos/shorts/cat-memorial/cat-memorial-video.mp4";
const posterSrc = "/images/shorts/cat-memorial/cat-in-pink-flower-field.png";
const memoryImageSrc = "/images/shorts/cat-memorial/cat-with-guardian.png";
const soundtrackSrc = "/audio/music/fading-into-silence.mp3";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "video.other",
    siteName: "FourFeetz Studios",
    title,
    description,
    url: canonicalUrl,
    locale: "ko_KR",
    images: [{ url: posterSrc, alt: "따뜻한 꽃밭에 앉아 있는 고양이 추모영상 장면" }],
    videos: [{ url: videoSrc, type: "video/mp4", width: 1080, height: 1920 }],
  },
  twitter: { card: "summary_large_image", title, description, images: [posterSrc] },
};

const videoSchema = createVideoStructuredData({
  canonicalPath,
  contentUrl: videoSrc,
  description,
  duration: "46 sec",
  inLanguage: "ko-KR",
  name: "고양이 추모영상 | 다시 만날 그날까지",
  thumbnailUrl: posterSrc,
  uploadDate: "2026-11-03T21:35:00+09:00",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://fourfeetz.com/ko" },
    { "@type": "ListItem", position: 2, name: "My Pet Story", item: "https://fourfeetz.com/ko/services/personal-pet-video" },
    { "@type": "ListItem", position: 3, name: "반려동물 추모영상", item: "https://fourfeetz.com/ko/services/pet-memorial-video" },
    { "@type": "ListItem", position: 4, name: "고양이 추모영상", item: canonicalUrl },
  ],
};

export default function CatMemorialVideoPage() {
  return (
    <main className="overflow-hidden bg-[#fbf8f3] text-[#2d2925]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      <section className="border-b border-[#eadfce] bg-[radial-gradient(circle_at_18%_15%,rgba(226,183,145,.22),transparent_30%),linear-gradient(180deg,#fffdfa_0%,#fbf8f3_100%)] px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_.72fr] md:items-center">
          <div className="order-2 md:order-1">
            <p className="text-sm font-black tracking-[.24em] text-[#a17859]">CAT MEMORIAL STORY</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-tight tracking-[-.04em] text-[#2b2119] md:text-7xl">
              고양이 추모영상<br />다시 만날 그날까지
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-[#706963]">
              사랑했던 기억은 사라지지 않습니다. 따뜻한 햇살과 꽃길 속에서 다시 평화롭게 만나는 순간을 담은 고양이 추모영상입니다.
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-[#7b7168]">
              무지개다리 너머에서도 이어지는 마음을 담아, 반려묘 추모영상과 고양이 메모리얼 영상으로 오래 간직할 수 있도록 완성했습니다. FourFeetz의 반려동물 추모영상 제작 사례이자 <span lang="en">cat memorial video · pet memorial video</span> 포트폴리오입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ko/services/pet-memorial-video" className="inline-flex items-center gap-2 rounded-full bg-[#805a3e] px-6 py-3 font-bold text-white transition hover:bg-[#6d4b34]">
                나의 반려동물 추모영상 제작하기 <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-[390px] md:order-2">
            <video controls playsInline preload="metadata" poster={posterSrc} aria-label="다시 만날 그날까지 고양이 추모영상" className="aspect-[9/16] h-auto w-full rounded-[30px] bg-black object-contain shadow-[0_24px_65px_rgba(91,62,38,.2)]">
              <source src={videoSrc} type="video/mp4" />
              브라우저에서 영상을 재생할 수 없습니다.
            </video>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[30px] border border-[#e8ddd3] bg-white shadow-[0_12px_42px_rgba(91,65,43,.07)] md:grid-cols-[.82fr_1.18fr]">
          <div className="relative aspect-[4/5] min-h-[420px]">
            <Image src={memoryImageSrc} alt="사랑하는 보호자와 함께한 고양이의 따뜻한 추억" fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover" />
          </div>
          <div className="relative flex items-center p-8 md:p-12 lg:p-16">
            <PawPrint className="pointer-events-none absolute bottom-8 right-8 h-14 w-14 rotate-12 text-[#a27f63]/10" />
            <div>
              <p className="text-sm font-bold tracking-[.2em] text-[#a17859]">A MEMORY MADE FOR ONE</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">함께한 사랑을<br />한 편의 이야기로</h2>
              <p className="mt-6 text-lg leading-9 text-[#706963]">소중한 반려묘의 사진과 이야기를 바탕으로 세상에 하나뿐인 추모영상을 제작합니다.</p>
              <div className="mt-8 rounded-2xl border border-[#e7ddd3] bg-[#fcf8f3] p-5">
                <div className="flex items-center gap-3 text-[#805a3e]"><Heart className="h-5 w-5" /><p className="text-xs font-bold tracking-[.16em]">MEMORIAL SOUNDTRACK</p></div>
                <h3 className="mt-3 font-serif text-2xl font-semibold">Fading into Silence</h3>
                <p className="mt-2 text-sm leading-6 text-[#756e68]">영상의 따뜻한 여운을 담은 FourFeetz Memorial Soundtrack</p>
                <audio controls preload="metadata" aria-label="Fading into Silence 재생" className="mt-4 h-10 w-full"><source src={soundtrackSrc} type="audio/mpeg" />브라우저에서 음악을 재생할 수 없습니다.</audio>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#eadfce] bg-white px-6 py-14 text-center md:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-3xl font-semibold text-[#2b2119]">Memorial Collection</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link href="/ko/shorts/heavenly-steps-together" className="font-bold text-[#765139] underline decoration-[#cdb099] underline-offset-4">두 아이의 추모영상도 만나보세요 →</Link>
            <Link href="/ko/services/pet-memorial-video" className="font-bold text-[#765139] underline decoration-[#cdb099] underline-offset-4">추모영상 제작 서비스로 돌아가기 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
