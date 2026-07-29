import Image from "next/image";
import Link from "next/link";
import HeroIllustrationCard from "@/components/HeroIllustrationCard";
import { shorts } from "@/data/shorts";
import { films } from "@/lib/films";
import { koreanFilmDescriptions, koreanShortDescriptions } from "@/lib/koreanContent";

export type VideoFilter = "all" | "long-form" | "shorts";

type VideosHubProps = {
  language: "en" | "ko";
  activeFilter: VideoFilter;
};

type VideoCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  video?: string;
  duration: string;
  characters: string[];
  type: Exclude<VideoFilter, "all">;
};

export function normalizeVideoFilter(value: string | string[] | undefined): VideoFilter {
  return value === "long-form" || value === "shorts" ? value : "all";
}

export default function VideosHub({ language, activeFilter }: VideosHubProps) {
  const isKorean = language === "ko";
  const basePath = isKorean ? "/ko/videos" : "/videos";
  const longFormVideos: VideoCard[] = films.map((film) => ({
    id: `film-${film.slug}`,
    title: film.title,
    description: isKorean ? koreanFilmDescriptions[film.slug] : film.description,
    href: isKorean ? `/ko/films/${film.slug}` : `/works/${film.slug}`,
    image: film.thumbnail,
    duration: film.duration,
    characters: [film.character],
    type: "long-form",
  }));
  const shortVideos: VideoCard[] = shorts.map((short) => ({
    id: `short-${short.slug}`,
    title: short.title,
    description: isKorean ? koreanShortDescriptions[short.slug] : short.description,
    href: isKorean ? `/ko/shorts/${short.slug}` : `/shorts/${short.slug}`,
    image: short.poster,
    video: short.video,
    duration: short.duration,
    characters: short.characters ?? [],
    type: "shorts",
  }));
  const allVideos = [...longFormVideos, ...shortVideos];
  const visibleVideos = activeFilter === "all"
    ? allVideos
    : allVideos.filter((video) => video.type === activeFilter);
  const labels = isKorean ? {
    eyebrow: "FourFeetz Video Library",
    title: "영상",
    description: "FourFeetz가 제작한 AI 롱폼 영상과 캐릭터 쇼츠를 한곳에서 만나보세요.",
    tabs: [
      { value: "all" as const, label: "전체", href: basePath },
      { value: "long-form" as const, label: "롱폼", href: `${basePath}?type=long-form` },
      { value: "shorts" as const, label: "쇼츠", href: `${basePath}?type=shorts` },
    ],
    sectionEyebrow: "Video Collection",
    sectionTitles: {
      all: "전체 영상",
      "long-form": "롱폼",
      shorts: "쇼츠",
    },
    type: {
      "long-form": "롱폼",
      shorts: "쇼츠",
    },
    characters: "등장 캐릭터",
    view: "영상 보기",
    altSuffix: "영상 썸네일",
    heroAlt: "FourFeetz AI 롱폼 영상과 캐릭터 쇼츠 제작 장면",
  } : {
    eyebrow: "FourFeetz Video Library",
    title: "Videos",
    description: "Explore FourFeetz AI-generated films and shorts, from peaceful long-form stories to short character moments.",
    tabs: [
      { value: "all" as const, label: "All Videos", href: basePath },
      { value: "long-form" as const, label: "Long-form", href: `${basePath}?type=long-form` },
      { value: "shorts" as const, label: "Shorts", href: `${basePath}?type=shorts` },
    ],
    sectionEyebrow: "Video Collection",
    sectionTitles: {
      all: "All Videos",
      "long-form": "Long-form",
      shorts: "Shorts",
    },
    type: {
      "long-form": "Long-form",
      shorts: "Shorts",
    },
    characters: "Characters",
    view: "View Video",
    altSuffix: "video thumbnail",
    heroAlt: "FourFeetz AI long-form film and character shorts production setup",
  };

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{labels.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">{labels.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d] md:text-xl">{labels.description}</p>
        </div>
        <HeroIllustrationCard src="/images/works-hero-v2.png" alt={labels.heroAlt} priority />
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <nav aria-label={isKorean ? "영상 분류" : "Video filters"} className="flex max-w-full gap-2 overflow-x-auto pb-2">
            {labels.tabs.map((tab) => {
              const active = activeFilter === tab.value;
              return (
                <Link
                  key={tab.value}
                  href={tab.href}
                  aria-current={active ? "page" : undefined}
                  className={`shrink-0 rounded-full border px-5 py-3 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2 ${
                    active
                      ? "border-[#6f4e37] bg-[#6f4e37] text-white shadow-md shadow-[#6f4e37]/15"
                      : "border-[#d9c7b4] bg-[#fffdf8] text-[#6f4e37] hover:border-[#6f4e37] hover:text-[#2b2119]"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-10">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{labels.sectionEyebrow}</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{labels.sectionTitles[activeFilter]}</h2>
              <p className="font-black text-[#6f4e37]">{visibleVideos.length}</p>
            </div>
          </div>

          <div className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleVideos.map((video) => (
              <Link
                key={video.id}
                href={video.href}
                aria-label={`${labels.view}: ${video.title}`}
                className="group flex flex-col overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#fffdf8] shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2"
              >
                <article className="flex flex-col">
                  <div className={`relative overflow-hidden bg-[#f2e8dc] ${video.type === "shorts" ? "aspect-[9/16]" : "aspect-video"}`}>
                    {video.image ? (
                      <Image
                        src={video.image}
                        alt={`${video.title} ${labels.altSuffix}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className={video.type === "shorts"
                          ? "object-contain"
                          : "object-cover transition-transform duration-200 group-hover:scale-[1.02]"}
                      />
                    ) : (
                      <video src={video.video} muted playsInline preload="metadata" className="h-full w-full object-contain" aria-hidden="true" />
                    )}
                    <span className="absolute left-4 top-4 rounded-full bg-[#6f4e37] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-sm">
                      {labels.type[video.type]}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a67c52]">{video.duration}</p>
                    <h3 className="mt-4 text-2xl font-black leading-tight text-[#2b2119]">{video.title}</h3>
                    <p className="mt-4 flex-1 leading-7 text-[#76685d]">{video.description}</p>
                    {video.characters.length ? (
                      <p className="mt-6 border-t border-[#eadfce] pt-5 text-sm text-[#76685d]">
                        <strong className="text-[#2b2119]">{labels.characters}:</strong> {video.characters.join(", ")}
                      </p>
                    ) : null}
                    <span className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#6f4e37]">{labels.view} →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
