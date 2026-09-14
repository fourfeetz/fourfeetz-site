"use client";

import { useEffect, useState } from "react";

const coverSrc = "/images/services/pet-memorial-0914-cover.jpg";
const videoSrc = "/videos/services/pet-memorial-0914.mp4";

export default function PetMemorialMedia() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      fetch(coverSrc, { method: "HEAD", cache: "no-store" }),
      fetch(videoSrc, { method: "HEAD", cache: "no-store" }),
    ])
      .then(([cover, video]) => {
        if (!cancelled && cover.ok && video.ok) setReady(true);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) return null;

  return (
    <section className="border-y border-[#eadfce] bg-[#f6eee4] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black tracking-[.2em] text-[#a67c52]">MEMORIAL FILM SAMPLE</p>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">함께했던 순간을 다시 만나는 시간</h2>
          <p className="mt-5 text-lg leading-8 text-[#76685d]">
            실제 제작 분위기를 확인하실 수 있도록 완성된 추모영상과 대표 이미지를 함께 소개합니다.
            따뜻한 기억과 아이의 모습을 자연스럽게 이어 하나의 이야기로 구성합니다.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-[32px] border border-[#eadfce] bg-white shadow-sm">
            <img
              src={coverSrc}
              alt="반려동물 추모영상 대표 이미지 - 노을을 바라보는 보호자와 반려견"
              className="aspect-[1080/1880] h-auto w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-6 py-5 text-sm leading-6 text-[#76685d]">
              추모영상 커버 이미지
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-[32px] border border-[#eadfce] bg-black shadow-sm">
            <video
              className="aspect-[1080/1880] h-auto w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={coverSrc}
            >
              <source src={videoSrc} type="video/mp4" />
              브라우저에서 영상을 재생할 수 없습니다.
            </video>
            <figcaption className="bg-white px-6 py-5 text-sm leading-6 text-[#76685d]">
              반려동물 추모영상 샘플 · 약 33초
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
