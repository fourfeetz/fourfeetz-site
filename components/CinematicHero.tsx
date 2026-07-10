"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const haruVideoSrc = "/images/works/haru-first-journey/haru.mp4";
const haruPosterSrc = "/images/works/haru-first-journey/hero.png";
const mutePreferenceKey = "fourfeetz-hero-muted";

function getInitialMutedPreference() {
  if (typeof window === "undefined") return true;
  const saved = window.localStorage.getItem(mutePreferenceKey);
  return saved === "false" ? false : true;
}

function HeroVideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(getInitialMutedPreference);
  const [videoFailed, setVideoFailed] = useState(false);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPaused(false);
      return;
    }

    video.pause();
    setIsPaused(true);
  }

  function toggleMute() {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    window.localStorage.setItem(mutePreferenceKey, String(nextMuted));
    if (videoRef.current) videoRef.current.muted = nextMuted;
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-[34px] bg-black">
      {videoFailed ? (
        <Image
          src={haruPosterSrc}
          alt="HARU featured original character"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-contain"
        />
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full bg-black object-contain"
          src={haruVideoSrc}
          poster={haruPosterSrc}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          aria-label="HARU featured film video"
          onError={() => setVideoFailed(true)}
          onPlay={() => setIsPaused(false)}
          onPause={() => setIsPaused(true)}
        />
      )}

      {!videoFailed ? (
        <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-white/35 bg-[#2b2119]/70 p-1.5 shadow-xl backdrop-blur-md">
          <button
            type="button"
            aria-label={isPaused ? "Play HARU film" : "Pause HARU film"}
            onClick={togglePlayback}
            className="grid h-10 min-w-10 place-items-center rounded-full bg-[#fff7ea] px-3 text-sm font-black text-[#6f4e37] shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c3ad]"
          >
            {isPaused ? "Play" : "Pause"}
          </button>
          <button
            type="button"
            aria-label={isMuted ? "Unmute HARU film" : "Mute HARU film"}
            onClick={toggleMute}
            className="grid h-10 min-w-10 place-items-center rounded-full bg-[#fff7ea] px-3 text-sm font-black text-[#6f4e37] shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c3ad]"
          >
            {isMuted ? "Muted" : "Sound"}
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default function CinematicHero() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-11 md:grid-cols-2 md:py-16">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">
          {t.home.eyebrow}
        </p>
        <h1 className="mt-4 whitespace-pre-line text-[3rem] font-black leading-[0.88] tracking-tight text-[#2b2119] md:text-[4.65rem]">
          {t.home.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-[#76685d]">
          {t.home.desc}
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link href="/works" className="rounded-full bg-[#6f4e37] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#573b29]">
            {t.home.primary}
          </Link>
          <Link href="/blog" className="rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-bold text-[#6f4e37] transition hover:border-[#6f4e37]">
            {t.home.secondary}
          </Link>
        </div>
      </div>

      <div className="rounded-[46px] border border-[#e6d8c8] bg-white p-4 shadow-2xl shadow-[#6f4e37]/15">
        <HeroVideoCard />
        <div className="px-3 py-3">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c52]">FEATURED FILM</p>
          <h2 className="mt-2 text-3xl font-black text-[#2b2119]">HARU — First Journey</h2>
          <p className="mt-2 text-[#76685d]">Original AI Short Film by FourFeetz Studios.</p>
        </div>
      </div>
    </section>
  );
}

