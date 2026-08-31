"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const haruVideoSrc = "/images/works/haru-first-journey/haru.mp4";
const haruPosterSrc = "/images/works/haru-first-journey/hero.png";
const mutePreferenceKey = "fourfeetz-hero-muted";

type HeroVideoLocale = "en" | "ko";

export type HeroVideoConfig = {
  src: string;
  poster: string;
  accessibleLabel: string;
  posterAlt: string;
  badge: string;
  title: string;
  description: string;
  ratio?: "landscape" | "portrait";
  objectFit?: "contain" | "cover";
  preload?: "auto" | "metadata";
};

const defaultHeroVideo: HeroVideoConfig = {
  src: haruVideoSrc,
  poster: haruPosterSrc,
  accessibleLabel: "HARU featured film video",
  posterAlt: "HARU featured original character",
  badge: "FEATURED FILM",
  title: "HARU — First Journey",
  description: "Published original character film by FourFeetz Studios.",
  ratio: "landscape",
  objectFit: "contain",
  preload: "auto",
};

function HeroVideoCard({ locale, video }: { locale: HeroVideoLocale; video: HeroVideoConfig }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const displayMuted = mounted ? isMuted : true;
  const labels = locale === "ko"
    ? {
        video: "HARU 대표 필름 영상",
        poster: "FourFeetz 오리지널 캐릭터 HARU",
        mute: `${video.title} 음소거`,
        unmute: `${video.title} 소리 켜기`,
        play: `${video.title} 재생`,
        pause: `${video.title} 일시정지`,
        soundTooltip: "소리",
        playTooltip: "재생",
        pauseTooltip: "일시정지",
      }
    : {
        video: "HARU featured film video",
        poster: "HARU featured original character",
        mute: "Mute HARU film",
        unmute: "Unmute HARU film",
        play: "Play HARU film",
        pause: "Pause HARU film",
        soundTooltip: "Sound",
        playTooltip: "Play",
        pauseTooltip: "Pause",
      };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = window.localStorage.getItem(mutePreferenceKey);
      const nextMuted = saved === "false" ? false : true;
      setIsMuted(nextMuted);
      setMounted(true);
      if (videoRef.current) {
        const videoElement = videoRef.current;
        videoElement.muted = nextMuted;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          videoElement.pause();
          setIsPaused(true);
        } else {
          void videoElement.play().then(() => setIsPaused(false)).catch(() => setIsPaused(true));
        }
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      setReduceMotion(media.matches);
      if (media.matches) {
        videoRef.current?.pause();
        setIsPaused(true);
      }
    };
    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

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
    if (mounted) window.localStorage.setItem(mutePreferenceKey, String(nextMuted));
    if (videoRef.current) videoRef.current.muted = nextMuted;
  }

  return (
    <div className={`relative overflow-hidden rounded-[34px] ${video.ratio === "portrait" ? "aspect-[4/3] bg-[#3d3028]" : "aspect-video bg-black"}`}>
      {video.ratio === "portrait" ? (
        <>
          <Image src={video.poster} alt="" aria-hidden="true" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="scale-110 object-cover blur-xl" />
          <span aria-hidden="true" className="absolute inset-0 bg-[#2b2119]/45" />
        </>
      ) : null}
      {videoFailed ? (
        <Image
          src={video.poster}
          alt={video.posterAlt || labels.poster}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className={`relative ${video.objectFit === "cover" ? "object-cover" : "object-contain"}`}
        />
      ) : (
        <video
          ref={videoRef}
          className={`relative h-full w-full ${video.ratio === "portrait" ? "bg-transparent" : "bg-black"} ${video.objectFit === "cover" ? "object-cover" : "object-contain"}`}
          src={video.src}
          poster={video.poster}
          autoPlay
          muted={displayMuted}
          loop
          playsInline
          preload={video.preload ?? "metadata"}
          aria-label={video.accessibleLabel || labels.video}
          onError={() => setVideoFailed(true)}
          onPlay={() => setIsPaused(false)}
          onPause={() => setIsPaused(true)}
          onLoadedData={(event) => setIsPaused(event.currentTarget.paused)}
        />
      )}

      {!videoFailed ? (
        <div className="absolute bottom-5 right-5 z-10 flex items-center gap-2">
          <div className="group relative">
            <button
              type="button"
              aria-label={displayMuted ? labels.unmute : labels.mute}
              onClick={toggleMute}
              className="grid size-[34px] place-items-center rounded-full border border-[#6f4e37]/30 bg-white/75 text-[#6f4e37] shadow-[0_2px_8px_rgba(43,33,25,0.10)] backdrop-blur-md transition-transform duration-200 hover:scale-[1.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c3ad] md:size-10"
            >
              {displayMuted ? (
                <VolumeX aria-hidden="true" className="size-[17px] md:size-5" strokeWidth={2} />
              ) : (
                <Volume2 aria-hidden="true" className="size-[17px] md:size-5" strokeWidth={2} />
              )}
            </button>
            <span
              role="tooltip"
              className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-[#2b2119]/90 px-2 py-1 text-xs font-semibold text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              {labels.soundTooltip}
            </span>
          </div>
          <div className="group relative">
            <button
              type="button"
              aria-label={isPaused ? labels.play : labels.pause}
              onClick={togglePlayback}
              className="grid size-[34px] place-items-center rounded-full border border-[#6f4e37]/30 bg-white/75 text-[#6f4e37] shadow-[0_2px_8px_rgba(43,33,25,0.10)] backdrop-blur-md transition-transform duration-200 hover:scale-[1.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c3ad] md:size-10"
            >
              {isPaused
                ? <Play aria-hidden="true" className="size-[17px] md:size-5" strokeWidth={2} />
                : <Pause aria-hidden="true" className="size-[17px] md:size-5" strokeWidth={2} />}
            </button>
            <span
              role="tooltip"
              className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-[#2b2119]/90 px-2 py-1 text-xs font-semibold text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              {isPaused ? labels.playTooltip : labels.pauseTooltip}
            </span>
          </div>
        </div>
      ) : null}
      {reduceMotion && !videoFailed ? <span className="sr-only">{locale === "ko" ? "동작 줄이기 설정에 따라 영상이 일시정지되었습니다." : "Video paused for reduced motion preference."}</span> : null}
    </div>
  );
}

export function HeroVideoPanel({ locale = "en", video = defaultHeroVideo }: { locale?: HeroVideoLocale; video?: HeroVideoConfig }) {
  return (
    <div className="rounded-[46px] border border-[#e6d8c8] bg-white p-4 shadow-2xl shadow-[#6f4e37]/15">
      <HeroVideoCard locale={locale} video={video} />
      <div className="px-3 py-3">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c52]">{video.badge}</p>
        <h2 className="mt-2 text-3xl font-black text-[#2b2119]">{video.title}</h2>
        <p className="mt-2 text-[#76685d]">{locale === "ko" && video === defaultHeroVideo ? "FourFeetz Studios가 공개한 오리지널 캐릭터 필름입니다." : video.description}</p>
      </div>
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
          <Link href="/videos" className="rounded-full bg-[#6f4e37] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#573b29]">
            {t.home.primary}
          </Link>
          <Link href="/insights" className="rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-bold text-[#6f4e37] transition hover:border-[#6f4e37]">
            {t.home.secondary}
          </Link>
        </div>
      </div>

      <HeroVideoPanel />
    </section>
  );
}



