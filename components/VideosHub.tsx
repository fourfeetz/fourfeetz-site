import Image from "next/image";
import Link from "next/link";
import HeroIllustrationCard from "@/components/HeroIllustrationCard";
import { shorts } from "@/data/shorts";
import { films } from "@/lib/films";
import { koreanFilmDescriptions, koreanShortDescriptions, koreanShortTitles } from "@/lib/koreanContent";

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
  insightHref?: string;
  aspectRatio?: string;
  spokenLanguage?: string;
  moods?: string[];
  publishedAt?: string;
};

export function normalizeVideoFilter(value: string | string[] | undefined): VideoFilter {
  return value === "long-form" || value === "shorts" ? value : "all";
}

function newestFirst(left: VideoCard, right: VideoCard) {
  return (right.publishedAt ?? "").localeCompare(left.publishedAt ?? "");
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
    type: "long-form" as const,
    publishedAt: film.publishedAt,
  })).sort(newestFirst);
  const shortVideos: VideoCard[] = shorts.map((short) => ({
    id: `short-${short.slug}`,
    title: isKorean ? (koreanShortTitles[short.slug] ?? short.title) : short.title,
    description: isKorean ? koreanShortDescriptions[short.slug] : short.description,
    href: isKorean ? `/ko/shorts/${short.slug}` : `/shorts/${short.slug}`,
    image: short.poster,
    video: short.video,
    duration: short.duration,
    characters: short.characters ?? [],
    type: "shorts" as const,
    insightHref: short.insight?.href ? (isKorean ? `/ko${short.insight.href}` : short.insight.href) : undefined,
    aspectRatio: short.aspectRatio,
    spokenLanguage: isKorean ? (short.koreanSpokenLanguage ?? short.spokenLanguage) : short.spokenLanguage,
    moods: isKorean ? (short.koreanMoods ?? short.moods) : short.moods,
    publishedAt: short.publishedAt,
  })).sort(newestFirst);
  const allVideos = [...shortVideos, ...longFormVideos];
  const visibleVideos = activeFilter === "all"
    ? allVideos
    : allVideos.filter((video) => video.type === activeFilter);
  const labels = isKorean ? {
    eyebrow: "FourFeetz Video Library",
    title: "영상",
    description: "FourFeetz가 제작한 AI 롱폼 영상과 캐릭터 쇼츠를 한곳에서 만나보세요.",
    tabs: [
      { value: "all" as const, label: "전체 영상", href: basePath },
      { value: "long-form" as const, label: "롱폼", href: `${basePath}?type=long-form` },
      { value: "shorts" as const, label: "쇼츠", href: `${basePath}?type=shorts` },
    ],
    sectionEyebrow: "Video Collection",
    sectionTitles: {
      all: "전체 영상",
      "long-form": "롱폼 영상",
      shorts: "쇼츠",
    },
    type: {
      "long-form": "롱폼",
      shorts: "쇼츠",
    },
    characters: "등장 캐릭터",
    view: "영상 보기",
    productionStory: "제작기 보기",
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
      "long-form": "Long-form Videos",
      shorts: "Shorts",
    },
    type: {
      "long-form": "Long-form",
      shorts: "Shorts",
    },
    characters: "Characters",
    view: "View Video",
    productionStory: "Production Story",
    altSuffix: "video thumbnail",
    heroAlt: "FourFeetz AI long-form film and character shorts production setup",
  };

  const renderVideoGrid = (videos: VideoCard[]) => (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <article
          key={video.id}
          className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#fffdf8] shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10"
        >
          <Link href={video.href} aria-label={`${labels.view}: ${video.title}`} className="absolute inset-0 z-0 rounded-[32px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#6f4e37]"><span className="sr-only">{labels.view}: {video.title}</span></Link>
          <div className="pointer-events-none relative z-10 flex h-full flex-col">
            <div className={`relative overflow-hidden bg-[#f2e8dc] ${video.type === "shorts" ? "aspect-[9/16]" : "aspect-video"}`}>
              {video.image ? (
                <>
                  {video.type === "shorts" ? (
                    <>
                      <Image
                        src={video.image}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="scale-110 object-cover blur-2xl brightness-75"
                      />
                      <span aria-hidden="true" className="absolute inset-0 bg-[#2b2119]/10" />
                    </>
                  ) : null}
                  <Image
                    src={video.image}
                    alt={`${video.title} ${labels.altSuffix}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={video.type === "shorts"
                      ? "object-contain"
                      : "object-cover transition-transform duration-200 group-hover:scale-[1.02]"}
                  />
                </>
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
              {video.aspectRatio || video.spokenLanguage || video.moods?.length ? (
                <p className="mt-5 text-sm font-bold leading-6 text-[#8a7768]">
                  {[video.aspectRatio, video.spokenLanguage, video.moods?.join(", ")].filter(Boolean).join(" · ")}
                </p>
              ) : null}
              {video.characters.length ? (
                <p className="mt-6 border-t border-[#eadfce] pt-5 text-sm text-[#76685d]">
                  <strong className="text-[#2b2119]">{labels.characters}:</strong> {video.characters.join(", ")}
                </p>
              ) : null}
              <span className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#6f4e37]">{labels.view} →</span>
              {video.insightHref ? <Link href={video.insightHref} className="pointer-events-auto relative z-20 mt-4 w-fit rounded-full border border-[#6f4e37]/40 bg-white px-4 py-2 text-sm font-black text-[#6f4e37] transition hover:border-[#6f4e37]">{labels.productionStory}</Link> : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );

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

          {activeFilter === "all" ? (
            <div className="mt-12 space-y-16">
              <section aria-labelledby="shorts-heading">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 id="shorts-heading" className="text-3xl font-black tracking-tight text-[#2b2119] md:text-4xl">{labels.sectionTitles.shorts}</h3>
                  <span className="rounded-full bg-[#f2e8dc] px-3 py-1 text-sm font-black text-[#6f4e37]">{shortVideos.length}</span>
                </div>
                {renderVideoGrid(shortVideos)}
              </section>
              <section aria-labelledby="long-form-heading" className="border-t border-[#d9c7b4] pt-14">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 id="long-form-heading" className="text-3xl font-black tracking-tight text-[#2b2119] md:text-4xl">{labels.sectionTitles["long-form"]}</h3>
                  <span className="rounded-full bg-[#f2e8dc] px-3 py-1 text-sm font-black text-[#6f4e37]">{longFormVideos.length}</span>
                </div>
                {renderVideoGrid(longFormVideos)}
              </section>
            </div>
          ) : renderVideoGrid(visibleVideos)}
        </div>
      </section>
    </main>
  );
}
