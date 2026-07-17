"use client";

import { useEffect, useRef, useState } from "react";

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

type MusicPlayerProps = {
  title: string;
  src: string;
  compact?: boolean;
};

export default function MusicPlayer({ title, src, compact = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const handlePlay = () => {
      document.querySelectorAll("audio").forEach((player) => {
        if (player !== audio) player.pause();
      });
      setIsPlaying(true);
    };
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [volume]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
    } else {
      audio.pause();
    }
  };

  const handleSeek = (value: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextTime = Number(value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleVolume = (value: string) => {
    const nextVolume = Number(value);
    setVolume(nextVolume);
    if (audioRef.current) audioRef.current.volume = nextVolume;
  };

  return (
    <div className={compact ? "mt-4" : "mt-8"}>
      <audio ref={audioRef} src={src} preload="metadata" aria-label={`${title} audio preview`} />
      <div className="rounded-3xl border border-[#eadfce] bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={togglePlayback}
            className="grid size-12 place-items-center rounded-full bg-[#6f4e37] text-sm font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]"
            aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
          >
            {isPlaying ? "II" : "▶"}
          </button>
          <div className="min-w-[180px] flex-1">
            <div className="flex items-center justify-between gap-3 text-xs font-black uppercase tracking-[0.14em] text-[#9a8775]">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.01"
              value={Math.min(currentTime, duration || currentTime)}
              onChange={(event) => handleSeek(event.target.value)}
              aria-label={`${title} progress`}
              className="mt-2 h-2 w-full accent-[#6f4e37]"
            />
          </div>
          <label className="flex min-w-[130px] items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-[#9a8775]">
            Vol
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(event) => handleVolume(event.target.value)}
              aria-label={`${title} volume`}
              className="w-20 accent-[#6f4e37]"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
