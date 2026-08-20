import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightsCategoryPage from "@/components/insights/InsightsCategoryPage";
import PracticalResourcePage from "@/components/resources/PracticalResourcePage";
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
  KoreanToolsPage,
  KoreanShortDetail,
  KoreanShortsPage,
} from "@/components/korean/KoreanPages";
import { shorts } from "@/data/shorts";
import { characterDetails } from "@/lib/characterDetails";
import { films, getFilm } from "@/lib/films";
import { localizeInsightArticle } from "@/lib/insightLocalization";
import { getPublishedInsightArticles } from "@/lib/insights";
import { insightGroups, isInsightGroup } from "@/lib/insightGroups";
import {
  koreanCharacters,
  koreanFilmDescriptions,
  koreanMusicDescriptions,
  koreanOrFallback,
  koreanResourceDescriptions,
  koreanResourceTitles,
  koreanShortDescriptions,
  koreanShortTitles,
} from "@/lib/koreanContent";
import { languageAlternates } from "@/lib/localization";
import { getMusicTrack, musicTracks } from "@/lib/music";
import {
  createNewProductionGuideMetadata,
  isNewProductionGuideSlug,
} from "@/lib/newProductionGuides";
import { getResource, resourceDetails } from "@/lib/resourceDetails";
import {
  createPracticalResourceMetadata,
  getPracticalResource,
  isPracticalResourceSlug,
  practicalResourceSlugs,
} from "@/lib/practicalResources";

type Props = { params: Promise<{ segments: string[] }> };

const sectionMetadata: Record<string, { title: string; description: string; englishPath: string; image: string }> = {
  about: { title: "FourFeetz 소개 | 오리지널 동물 캐릭터 제작 스튜디오", description: "자체 동물 캐릭터, 필름, 쇼츠와 음악을 제작·관리하고 실제 프로젝트 근거가 있는 제작 기록을 공유하는 독립 FourFeetz 스튜디오를 소개합니다.", englishPath: "/about", image: "/images/about-hero-v2.png" },
  films: { title: "AI 필름 | FourFeetz", description: "HARU와 FourFeetz 캐릭터들이 등장하는 감성적인 AI 필름과 힐링 영상을 만나보세요.", englishPath: "/films", image: "/images/works-hero-v2.png" },
  shorts: { title: "AI 캐릭터 쇼츠 | FourFeetz", description: "HARU, LUNA, HUGO, RURU 등 FourFeetz 캐릭터들의 짧고 따뜻한 AI 쇼츠입니다.", englishPath: "/shorts", image: "/images/shorts-hero-v2.png" },
  characters: { title: "FourFeetz 캐릭터 | 오리지널 동물 캐릭터", description: "HARU, PORI, LUNA, HUGO, RURU, OLI, MILO, FENI와 HORI의 서로 다른 개성과 이야기를 만나보세요.", englishPath: "/characters", image: "/images/characters-hero-v2.png" },
  music: { title: "오리지널 음악 | FourFeetz", description: "FourFeetz 필름, 쇼츠와 캐릭터 장면을 위해 만들고 실제 편집에 맞춰 선별한 공식 테마와 오리지널 사운드트랙입니다.", englishPath: "/music", image: "/images/music-hero-v2.png" },
  insights: { title: "실제 AI 영상 제작 기록과 가이드 | FourFeetz", description: "공개된 FourFeetz 동물 캐릭터 프로젝트의 실제 제작 기록과 제작 가이드, 구분된 AI 영상 도구 분석을 제공합니다.", englishPath: "/insights", image: "/images/insights-hero-v2.png" },
  resources: { title: "AI 영상 제작 리소스 | FourFeetz", description: "FourFeetz 실제 제작 경험에서 정리한 공개 가이드, 템플릿과 체크리스트입니다. 내부 캐릭터 자산과 핵심 설정은 포함하지 않습니다.", englishPath: "/resources", image: "/images/resources-hero-v2.png" },
  services: { title: "AI 영상 제작 서비스 | FourFeetz", description: "FourFeetz는 AI 쇼츠, 브랜드 광고, 캐릭터 애니메이션, 반려동물 콘텐츠와 감성 영상을 제작합니다.", englishPath: "/services", image: "/images/studio-hero-v2.png" },
  tools: { title: "실제 제작에 사용한 AI 도구 | FourFeetz", description: "FourFeetz 완성 영상 제작에 사용한 AI 영상, 음악, 기획과 편집 도구의 실제 역할과 한계를 설명합니다.", englishPath: "/tools", image: "/images/tools-hero-v2.png" },
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
    ...practicalResourceSlugs.map((slug) => ({ segments: ["resources", slug] })),
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

  if (section === "insights" && isNewProductionGuideSlug(slug)) {
    return createNewProductionGuideMetadata(slug, "ko");
  }

  if (section === "resources" && isPracticalResourceSlug(slug)) {
    return createPracticalResourceMetadata(slug, "ko");
  }

  let title = "";
  let description = "";
  let englishPath = "";
  let image = "/images/studio-hero-v2.png";

  if (section === "films") {
    const item = getFilm(slug); if (!item) return {};
    title = `${item.koreanTitle ?? item.title} | FourFeetz 필름`; description = koreanFilmDescriptions[slug]; englishPath = `/works/${slug}`; image = item.thumbnail;
  } else if (section === "shorts") {
    const item = shorts.find((entry) => entry.slug === slug); if (!item) return {};
    title = `${koreanShortTitles[slug] ?? item.title} | FourFeetz 쇼츠`; description = koreanShortDescriptions[slug]; englishPath = `/shorts/${slug}`; image = item.poster ?? image;
  } else if (section === "characters") {
    const item = characterDetails.find((entry) => entry.slug === slug); if (!item) return {};
    const koreanCharacter = koreanCharacters[slug];
    title = `${koreanCharacter.displayName ?? item.name} ${koreanCharacter.species} | FourFeetz 캐릭터`; description = koreanCharacter.metaDescription; englishPath = `/characters/${slug}`; image = item.gallery[0]?.image ?? "/images/characters-hero-v2.png";
  } else if (section === "music") {
    const item = getMusicTrack(slug); if (!item) return {};
    title = `${item.koreanTitle ?? item.title} | FourFeetz 음악`; description = koreanOrFallback(koreanMusicDescriptions, slug, "FourFeetz 오리지널 음악입니다."); englishPath = `/music/${slug}`; image = item.cover;
  } else if (section === "insights") {
    const item = getPublishedInsightArticles().find((entry) => entry.slug === slug); if (!item) return {};
    const localized = localizeInsightArticle(item, "ko");
    title = `${localized.title} | FourFeetz 인사이트`; description = localized.description; englishPath = item.href; image = item.image;
  } else if (section === "resources") {
    const item = getResource(slug); if (!item) return {};
    title = `${koreanResourceTitles[slug] ?? item.title} | FourFeetz 리소스`; description = koreanResourceDescriptions[slug]; englishPath = `/resources/${slug}`; image = item.image;
  } else return {};

  if (section === "insights") {
    return {
      title: { absolute: title },
      description,
      robots: { index: false, follow: true },
      alternates: { canonical: koreanPath },
      openGraph: { type: "article", siteName: "FourFeetz Studios", title, description, url: koreanPath, locale: "ko_KR", images: [{ url: image, alt: title }] },
      twitter: { card: "summary_large_image", title, description, images: [image] },
    };
  }

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
    if (section === "tools") return <KoreanToolsPage />;
    notFound();
  }

  if (section === "films") return <KoreanFilmDetail slug={slug} />;
  if (section === "shorts") return <KoreanShortDetail slug={slug} />;
  if (section === "characters") return <KoreanCharacterDetail slug={slug} />;
  if (section === "music") return <KoreanMusicDetail slug={slug} />;
  if (section === "insights" && isInsightGroup(slug)) return <InsightsCategoryPage group={slug} language="ko" />;
  if (section === "insights") return <KoreanInsightDetail slug={slug} />;
  if (section === "resources" && isPracticalResourceSlug(slug)) {
    const resource = getPracticalResource(slug);
    if (!resource) notFound();
    return <PracticalResourcePage resource={resource} language="ko" />;
  }
  if (section === "resources") return <KoreanResourceDetail slug={slug} />;
  notFound();
}
