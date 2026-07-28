import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightsCategoryPage from "@/components/insights/InsightsCategoryPage";
import {
  KoreanAboutPage,
  KoreanCharacterDetail,
  KoreanCharactersPage,
  KoreanFilmDetail,
  KoreanFilmsPage,
  KoreanInsightDetail,
  KoreanInsightsPage,
  KoreanMusicDetail,
  KoreanMusicPage,
  KoreanResourceDetail,
  KoreanResourcesPage,
  KoreanServicesPage,
  KoreanShortDetail,
  KoreanShortsPage,
} from "@/components/korean/KoreanPages";
import { shorts } from "@/data/shorts";
import { characterDetails } from "@/lib/characterDetails";
import { films, getFilm } from "@/lib/films";
import { getPublishedInsightArticles } from "@/lib/insights";
import { insightGroups, isInsightGroup } from "@/lib/insightGroups";
import {
  koreanCharacters,
  koreanFilmDescriptions,
  koreanInsightDescriptions,
  koreanMusicDescriptions,
  koreanOrFallback,
  koreanResourceDescriptions,
  koreanShortDescriptions,
} from "@/lib/koreanContent";
import { languageAlternates } from "@/lib/localization";
import { getMusicTrack, musicTracks } from "@/lib/music";
import { getResource, resourceDetails } from "@/lib/resourceDetails";

type Props = { params: Promise<{ segments: string[] }> };

const sectionMetadata: Record<string, { title: string; description: string; englishPath: string; image: string }> = {
  about: { title: "FourFeetz 소개 | AI 애니메이션 스튜디오", description: "캐릭터 중심의 감성 영상, 음악과 창작 인사이트를 만드는 FourFeetz를 소개합니다.", englishPath: "/about", image: "/images/about-hero-v2.png" },
  films: { title: "AI 필름 | FourFeetz", description: "HARU와 FourFeetz 캐릭터들이 등장하는 감성적인 AI 필름과 힐링 영상을 만나보세요.", englishPath: "/works", image: "/images/works-hero-v2.png" },
  shorts: { title: "AI 캐릭터 쇼츠 | FourFeetz", description: "HARU, LUNA, HUGO, RURU 등 FourFeetz 캐릭터들의 짧고 따뜻한 AI 쇼츠입니다.", englishPath: "/shorts", image: "/images/shorts-hero-v2.png" },
  characters: { title: "캐릭터 | FourFeetz", description: "HARU를 중심으로 확장되는 FourFeetz의 오리지널 동물 캐릭터를 소개합니다.", englishPath: "/characters", image: "/images/characters-hero-v2.png" },
  music: { title: "오리지널 음악 | FourFeetz", description: "FourFeetz 필름, 쇼츠와 캐릭터를 위해 만든 공식 테마와 오리지널 사운드트랙입니다.", englishPath: "/music", image: "/images/music-hero-v2.png" },
  insights: { title: "AI 영상 제작 인사이트 | FourFeetz", description: "FourFeetz의 실제 AI 애니메이션 제작 경험을 바탕으로 한 제작 가이드, 실사용 테스트, AI 영상 도구 업데이트를 제공합니다.", englishPath: "/insights", image: "/images/insights-hero-v2.png" },
  resources: { title: "AI 영상 제작 리소스 | FourFeetz", description: "AI 영상 제작을 위한 가이드, 템플릿, 체크리스트와 프롬프트 리소스입니다.", englishPath: "/resources", image: "/images/resources-hero-v2.png" },
  services: { title: "AI 영상 제작 서비스 | FourFeetz", description: "FourFeetz는 AI 쇼츠, 브랜드 광고, 캐릭터 애니메이션, 반려동물 콘텐츠와 감성 영상을 제작합니다.", englishPath: "/services", image: "/images/studio-hero-v2.png" },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...Object.keys(sectionMetadata).map((section) => ({ segments: [section] })),
    ...films.map((item) => ({ segments: ["films", item.slug] })),
    ...shorts.map((item) => ({ segments: ["shorts", item.slug] })),
    ...characterDetails.map((item) => ({ segments: ["characters", item.slug] })),
    ...musicTracks.map((item) => ({ segments: ["music", item.slug] })),
    { segments: ["insights", "guides"] },
    { segments: ["insights", "news"] },
    ...getPublishedInsightArticles().map((item) => ({ segments: ["insights", item.slug] })),
    ...resourceDetails.map((item) => ({ segments: ["resources", item.slug] })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [section, slug] = (await params).segments;
  const koreanPath = `/ko/${section}${slug ? `/${slug}` : ""}`;

  if (!slug) {
    const meta = sectionMetadata[section];
    if (!meta) return {};
    return {
      title: { absolute: meta.title },
      description: meta.description,
      alternates: languageAlternates(meta.englishPath, koreanPath),
      openGraph: { type: "website", siteName: "FourFeetz Studios", title: meta.title, description: meta.description, url: koreanPath, locale: "ko_KR", alternateLocale: ["en_US"], images: [{ url: meta.image, alt: meta.title }] },
      twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [meta.image] },
    };
  }

  if (section === "insights" && isInsightGroup(slug)) {
    const content = insightGroups[slug].ko;
    const englishPath = `/insights/${slug}`;
    return {
      title: { absolute: content.title },
      description: content.description,
      alternates: languageAlternates(englishPath, koreanPath),
      openGraph: {
        type: "website",
        siteName: "FourFeetz Studios",
        title: content.title,
        description: content.description,
        url: koreanPath,
        locale: "ko_KR",
        alternateLocale: ["en_US"],
        images: [{ url: "/images/insights-hero-v2.png", alt: content.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: content.title,
        description: content.description,
        images: ["/images/insights-hero-v2.png"],
      },
    };
  }

  let title = "";
  let description = "";
  let englishPath = "";
  let image = "/images/studio-hero-v2.png";

  if (section === "films") {
    const item = getFilm(slug); if (!item) return {};
    title = `${item.title} | FourFeetz 필름`; description = koreanFilmDescriptions[slug]; englishPath = `/works/${slug}`; image = item.thumbnail;
  } else if (section === "shorts") {
    const item = shorts.find((entry) => entry.slug === slug); if (!item) return {};
    title = `${item.title} | FourFeetz 쇼츠`; description = koreanShortDescriptions[slug]; englishPath = `/shorts/${slug}`; image = item.poster ?? image;
  } else if (section === "characters") {
    const item = characterDetails.find((entry) => entry.slug === slug); if (!item) return {};
    title = `${item.name} | FourFeetz 캐릭터`; description = koreanCharacters[slug].story; englishPath = `/characters/${slug}`; image = `/images/characters/${slug}/portrait.png`;
  } else if (section === "music") {
    const item = getMusicTrack(slug); if (!item) return {};
    title = `${item.title} | FourFeetz 음악`; description = koreanOrFallback(koreanMusicDescriptions, slug, "FourFeetz 오리지널 음악입니다."); englishPath = `/music/${slug}`; image = item.cover;
  } else if (section === "insights") {
    const item = getPublishedInsightArticles().find((entry) => entry.slug === slug); if (!item) return {};
    title = `${item.title} | FourFeetz 인사이트`; description = koreanOrFallback(koreanInsightDescriptions, slug, "AI 영상 제작과 도구에 관한 FourFeetz 인사이트입니다."); englishPath = item.href; image = item.image;
  } else if (section === "resources") {
    const item = getResource(slug); if (!item) return {};
    title = `${item.title} | FourFeetz 리소스`; description = koreanResourceDescriptions[slug]; englishPath = `/resources/${slug}`; image = item.image;
  } else return {};

  return {
    title: { absolute: title },
    description,
    alternates: languageAlternates(englishPath, koreanPath),
    openGraph: { type: "article", siteName: "FourFeetz Studios", title, description, url: koreanPath, locale: "ko_KR", alternateLocale: ["en_US"], images: [{ url: image, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function Page({ params }: Props) {
  const [section, slug, ...rest] = (await params).segments;
  if (rest.length) notFound();

  if (!slug) {
    if (section === "about") return <KoreanAboutPage />;
    if (section === "films") return <KoreanFilmsPage />;
    if (section === "shorts") return <KoreanShortsPage />;
    if (section === "characters") return <KoreanCharactersPage />;
    if (section === "music") return <KoreanMusicPage />;
    if (section === "insights") return <KoreanInsightsPage />;
    if (section === "resources") return <KoreanResourcesPage />;
    if (section === "services") return <KoreanServicesPage />;
    notFound();
  }

  if (section === "films") return <KoreanFilmDetail slug={slug} />;
  if (section === "shorts") return <KoreanShortDetail slug={slug} />;
  if (section === "characters") return <KoreanCharacterDetail slug={slug} />;
  if (section === "music") return <KoreanMusicDetail slug={slug} />;
  if (section === "insights" && isInsightGroup(slug)) return <InsightsCategoryPage group={slug} language="ko" />;
  if (section === "insights") return <KoreanInsightDetail slug={slug} />;
  if (section === "resources") return <KoreanResourceDetail slug={slug} />;
  notFound();
}
