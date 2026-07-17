"use client";

import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useRef, useState } from "react";
import { musicTracks } from "@/lib/music";

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function HaruMusicPlaylist() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);

  const currentTrack = currentIndex === null ? null : musicTracks[currentIndex];

  async function playTrack(index: number) {
    const audio = audioRef.current;
    const track = musicTracks[index];
    if (!audio || !track) return;

    document.querySelectorAll("audio").forEach((player) => {
      if (player !== audio) player.pause();
    });

    audio.src = track.audio;
    audio.volume = volume;
    audio.load();
    setCurrentIndex(index);
    setCurrentTime(0);
    setDuration(0);

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  }

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentIndex === null) {
      await playTrack(0);
      return;
    }

    if (audio.paused) {
      document.querySelectorAll("audio").forEach((player) => {
        if (player !== audio) player.pause();
      });
      await audio.play();
    } else {
      audio.pause();
    }
  }

  async function playPrevious() {
    const audio = audioRef.current;
    if (!audio || currentIndex === null) return;
    if (audio.currentTime > 3 || currentIndex === 0) {
      audio.currentTime = 0;
      setCurrentTime(0);
      return;
    }
    await playTrack(currentIndex - 1);
  }

  async function playNext() {
    if (currentIndex === null) {
      await playTrack(0);
      return;
    }
    if (currentIndex < musicTracks.length - 1) {
      await playTrack(currentIndex + 1);
    } else {
      audioRef.current?.pause();
    }
  }

  function seek(value: string) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(value);
    setCurrentTime(audio.currentTime);
  }

  function changeVolume(value: string) {
    const nextVolume = Number(value);
    setVolume(nextVolume);
    if (audioRef.current) audioRef.current.volume = nextVolume;
  }

  return (
    <section aria-labelledby="haru-playlist-title" className="px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-[#eadfce] bg-white p-7 shadow-xl shadow-[#6f4e37]/10 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">HARU Music Queue</p>
            <h2 id="haru-playlist-title" className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-5xl">Play All HARU Music</h2>
            <p className="mt-5 max-w-xl leading-8 text-[#76685d]">Listen to the official theme and all seven original soundtracks in sequence.</p>
            {currentIndex === null ? (
              <button type="button" onClick={() => playTrack(0)} className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2">
                <Play size={19} fill="currentColor" aria-hidden="true" />
                Play All HARU Music
              </button>
            ) : null}
          </div>

          <div className="rounded-[28px] border border-[#eadfce] bg-[#fffaf4] p-5 md:p-7">
            <audio
              ref={audioRef}
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
              onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
              onEnded={playNext}
              aria-label={currentTrack ? `${currentTrack.title} playlist audio` : "HARU music playlist"}
            />
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">Now Playing</p>
            <div className="mt-3 min-h-16" aria-live="polite">
              <h3 className="text-2xl font-black text-[#2b2119]">{currentTrack?.title ?? "Ready to play"}</h3>
              <p className="mt-1 text-sm font-semibold text-[#8a7767]">{currentTrack ? `${currentIndex! + 1} of ${musicTracks.length} · ${currentTrack.artist}` : "Playback starts only when you select Play All."}</p>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              <button type="button" onClick={playPrevious} disabled={currentIndex === null} aria-label="Previous track" className="grid size-11 place-items-center rounded-full border border-[#d9c7b4] bg-white text-[#6f4e37] transition hover:border-[#6f4e37] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37]"><SkipBack size={19} fill="currentColor" aria-hidden="true" /></button>
              <button type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause playlist" : "Play playlist"} className="grid size-14 place-items-center rounded-full bg-[#6f4e37] text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2">{isPlaying ? <Pause size={22} fill="currentColor" aria-hidden="true" /> : <Play size={22} fill="currentColor" aria-hidden="true" />}</button>
              <button type="button" onClick={playNext} disabled={currentIndex === null} aria-label="Next track" className="grid size-11 place-items-center rounded-full border border-[#d9c7b4] bg-white text-[#6f4e37] transition hover:border-[#6f4e37] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37]"><SkipForward size={19} fill="currentColor" aria-hidden="true" /></button>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-xs font-black text-[#9a8775]"><span>{formatTime(currentTime)}</span><span>{formatTime(duration)}</span></div>
              <input type="range" min="0" max={duration || 0} step="0.01" value={Math.min(currentTime, duration || currentTime)} onChange={(event) => seek(event.target.value)} disabled={currentIndex === null} aria-label="Playlist progress" className="mt-2 h-2 w-full accent-[#6f4e37] disabled:opacity-40" />
            </div>

            <label className="mt-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-[#9a8775]">
              Volume
              <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(event) => changeVolume(event.target.value)} aria-label="Playlist volume" className="w-full accent-[#6f4e37]" />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
