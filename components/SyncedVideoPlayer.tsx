"use client";

import { useRef } from "react";

export default function SyncedVideoPlayer({
  src,
  poster,
  audioSrc,
  label,
  className,
}: {
  src: string;
  poster?: string;
  audioSrc?: string;
  label: string;
  className: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  function syncAudio() {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio || Math.abs(audio.currentTime - video.currentTime) < 0.35) return;
    audio.currentTime = video.currentTime;
  }

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        controls
        muted={Boolean(audioSrc)}
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
        onPlay={() => {
          const audio = audioRef.current;
          if (audio) void audio.play().catch(() => undefined);
        }}
        onPause={() => audioRef.current?.pause()}
        onSeeking={syncAudio}
        onTimeUpdate={syncAudio}
        onEnded={() => audioRef.current?.pause()}
      >
        <source src={src} type="video/mp4" />
        브라우저에서 영상을 재생할 수 없습니다.
      </video>
      {audioSrc ? <audio ref={audioRef} src={audioSrc} preload="metadata" aria-hidden="true" /> : null}
    </>
  );
}
