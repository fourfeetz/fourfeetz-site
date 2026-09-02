import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Clapperboard,
  Heart,
  MonitorPlay,
  PawPrint,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import MusicPlayer from "@/app/music/MusicPlayer";
import InsightsHub from "@/components/InsightsHub";
import PageHero from "@/components/PageHero";
import ProductionInsightArticle from "@/components/ProductionInsightArticle";
import KoreanQuoteForm from "@/components/korean/KoreanQuoteForm";
import { PetIndustryCards } from "@/components/korean/PetBusinessServicePages";
import PracticalResourceCards from "@/components/resources/PracticalResourceCards";
import { shorts } from "@/data/shorts";
import { characterDetails, getCharacter } from "@/lib/characterDetails";
import { films, getFilm } from "@/lib/films";
import { insightContentTypeLabels, isAnalysisContentType } from "@/lib/insightClassification";
import { localizeInsightArticle } from "@/lib/insightLocalization";
import { getProductionRecordInsights, getPublishedInsightArticles, hasKoreanInsightGroupContent } from "@/lib/insights";
import { getKoreanInsightPath } from "@/lib/koreanInsightAvailability";
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
import { koreanInsightDetails, koreanLegacyResourceDetails } from "@/lib/koreanContentDetails";
import { koreanInsightSummaries } from "@/lib/koreanInsightSummaries";
import { getNewProductionGuide } from "@/lib/newProductionGuides";
import { getMusicTrack, musicTracks } from "@/lib/music";
import { getResource, resourceDetails } from "@/lib/resourceDetails";
import { videoPricingPackages } from "@/lib/petBusinessServices";

const primaryButton = "inline-flex items-center justify-center rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const secondaryButton = "inline-flex items-center justify-center rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const cardClass = "rounded-[32px] border border-[#eadfce] bg-white shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10";

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{eyebrow}</p><h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{title}</h2>{description ? <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">{description}</p> : null}</div>;
}

function MediaCard({ href, image, title, category, description, portrait = false, imageAlt, fullyClickable = false }: { href: string; image?: string; title: string; category: string; description: string; portrait?: boolean; imageAlt?: string; fullyClickable?: boolean }) {
  const content = <>
    <div className={`relative overflow-hidden bg-[#f2e8dc] ${portrait ? "aspect-square" : "aspect-video"}`}>
      {image
        ? <Image src={image} alt={imageAlt ?? `${title} 썸네일`} fill sizes="(min-width:1024px)33vw,(min-width:768px)50vw,100vw" className={portrait ? "object-contain p-3" : "object-cover transition-transform duration-200 group-hover:scale-[1.02]"} />
        : <div className="flex h-full items-center justify-center p-6 text-center text-sm font-black text-[#8a7768]">공식 이미지 준비 중</div>}
    </div>
    <div className="flex flex-1 flex-col p-6"><p className="text-sm font-black text-[#a67c52]">{category}</p><h3 className="mt-3 text-2xl font-black text-[#2b2119]">{title}</h3><p className="mt-3 flex-1 leading-7 text-[#76685d]">{description}</p>{fullyClickable ? <span className={`${secondaryButton} pointer-events-none mt-6 self-start px-6 py-3`}>자세히 보기</span> : <Link href={href} className={`${secondaryButton} mt-6 self-start px-6 py-3`}>자세히 보기</Link>}</div>
  </>;

  return fullyClickable
    ? <Link href={href} className={`${cardClass} group flex h-full flex-col overflow-hidden bg-[#fffdf8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2`}>{content}</Link>
    : <article className={`${cardClass} group flex h-full flex-col overflow-hidden bg-[#fffdf8]`}>{content}</article>;
}

export function KoreanHomePage() {
  const featuredFilms = films.slice(0, 2);
  const featuredShorts = shorts.filter((item) => item.poster).slice(0, 2);
  const productionRecordOrder = [
    "from-first-image-to-final-short",
    "oli-swimming-scene-lessons",
    "haru-luna-rainy-window-ai-pet-video",
    "turning-short-scene-into-relaxing-video",
    "how-haru-was-created",
    "cozy-retriever-kitten-sleep-short",
  ];
  const productionRecords = productionRecordOrder
    .map((slug) => getProductionRecordInsights().find((article) => article.slug === slug))
    .filter((article) => Boolean(article));
  const featuredResources = resourceDetails.slice(0, 4);

  return <main>
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
      <div><p className="text-sm font-black uppercase tracking-[0.3em] text-[#a67c52]">오리지널 동물 캐릭터 스튜디오</p><h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">마음을 담아 만드는<br />오리지널 동물 이야기</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d] md:text-xl">FourFeetz는 자체 동물 캐릭터로 쇼츠와 릴렉싱 영상을 제작하고, 그 과정에서 얻은 실제 제작 기록을 공유합니다.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/ko/videos" className={primaryButton}>작품 보기</Link><Link href="/ko/insights?group=records" className={secondaryButton}>제작 기록 보기</Link></div></div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-[#d8c3ad] bg-[#f2e8dc] shadow-2xl shadow-[#6f4e37]/15"><Image src="/images/studio-hero-v2.png" alt="FourFeetz 캐릭터와 AI 애니메이션 스튜디오" fill priority sizes="(min-width:768px)44vw,100vw" className="object-cover" /></div>
    </section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeading eyebrow="Published FourFeetz Work" title="대표 작품" description="FourFeetz 오리지널 캐릭터와 스튜디오가 직접 기획·편집해 공개한 필름과 쇼츠입니다." /><div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">{featuredFilms.map((item) => <MediaCard key={item.slug} href={`/ko/films/${item.slug}`} image={item.thumbnail} title={item.koreanTitle ?? item.title} category={item.category} description={koreanFilmDescriptions[item.slug]} fullyClickable />)}{featuredShorts.map((item) => <MediaCard key={item.slug} href={`/ko/shorts/${item.slug}`} image={item.poster!} title={koreanShortTitles[item.slug] ?? item.title} category={item.category} description={koreanShortDescriptions[item.slug]} fullyClickable />)}</div></section>
    <section className="px-6 py-20"><SectionHeading eyebrow="Real Production Notes" title="완성 작품에서 배운 실제 제작 기록" description="공개 영상, 실제 프로젝트 프레임, 제작 중 발생한 문제와 수정·거절·채택 판단이 함께 있는 기록만 모았습니다." /><div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">{productionRecords.map((article) => { if (!article) return null; const localized = localizeInsightArticle(article, "ko"); return <MediaCard key={article.slug} href={getKoreanInsightPath(article.slug)} image={article.image} imageAlt={article.imageAlt?.ko} title={localized.title} category="실제 제작 기록" description={localized.description} fullyClickable />; })}</div></section>
    <section className="px-6 py-20"><SectionHeading eyebrow="Character Universe" title="오리지널 캐릭터" description="FourFeetz가 직접 만들고 관리하며 필름, 쇼츠, 음악과 제작 기록으로 확장하는 동물 캐릭터입니다." /><div className="mx-auto mt-10 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">{characterDetails.map((item) => <MediaCard key={item.slug} href={`/ko/characters/${item.slug}`} image={item.gallery[0]?.image} imageAlt={koreanCharacters[item.slug].imageAlt} title={koreanCharacters[item.slug].displayName ?? item.name} category={koreanCharacters[item.slug].species} description={koreanCharacters[item.slug].tagline} portrait fullyClickable />)}</div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-16"><div className="mx-auto grid max-w-7xl gap-8 rounded-[40px] bg-[#6f4e37] p-8 text-white md:grid-cols-[1.15fr_0.85fr] md:items-center md:p-12"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#e5c9a8]">Studio Services</p><h2 className="mt-3 text-4xl font-black md:text-5xl">작품과 제작 방식을 확인하셨나요?</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-[#f4e8da]">FourFeetz의 공개 작품과 실제 제작 기록을 살펴본 뒤 프로젝트에 맞는 동물 캐릭터 영상 제작을 문의할 수 있습니다.</p></div><div className="flex flex-wrap gap-3 md:justify-end"><Link href="/ko/services" className="rounded-full bg-white px-7 py-4 font-black text-[#6f4e37]">서비스 보기</Link><Link href="/ko/services#contact" className="rounded-full border border-white/40 px-7 py-4 font-black text-white">무료 상담받기</Link></div></div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeading eyebrow="Public Resources" title="공개 제작 자료와 도구 기록" description="실제 제작 경험에서 정리한 웹 가이드와 워크시트입니다. 비공개 캐릭터 프롬프트·바이블·핵심 설정은 포함하지 않습니다." /><div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">{featuredResources.map((item) => <Link key={item.slug} href={`/ko/resources/${item.slug}`} className={`${cardClass} p-7`}><p className="text-sm font-black text-[#a67c52]">공개 웹 자료</p><h3 className="mt-3 text-2xl font-black text-[#2b2119]">{koreanResourceTitles[item.slug] ?? item.title}</h3><p className="mt-4 leading-7 text-[#76685d]">{koreanResourceDescriptions[item.slug]}</p><span className="mt-6 inline-flex font-black text-[#6f4e37]">브라우저에서 읽기 →</span></Link>)}</div><div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-3"><Link href="/ko/resources" className={primaryButton}>전체 자료 보기</Link><Link href="/ko/tools" className={secondaryButton}>제작 도구와 한계 보기</Link></div></section>
    <section className="px-6 py-20"><div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[40px] bg-[#6f4e37] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#e5c9a8]">FourFeetz Studio</p><h2 className="mt-3 text-4xl font-black md:text-5xl">영상, 음악과 실제 제작 기록이 이어지는 독립 스튜디오</h2></div><div className="flex flex-wrap gap-3"><Link href="/ko/about" className="rounded-full bg-white px-7 py-4 font-black text-[#6f4e37]">스튜디오 소개</Link><Link href="/social" className="rounded-full border border-white/40 px-7 py-4 font-black text-white">공개 채널</Link></div></div></section>
  </main>;
}

export function KoreanAboutPage() {
  const cards = [
    { title: "오리지널 캐릭터와 이야기", copy: "HARU를 시작으로 서로 다른 성격과 시각적 특징을 지닌 동물 캐릭터를 만들고, 필름과 쇼츠에서 이어지는 이야기를 전합니다.", icon: Heart },
    { title: "직접 만드는 AI 영상", copy: "아이디어와 장면 기획부터 AI 영상 생성, 편집, 음악과 최종 검토까지 실제 제작 과정을 거쳐 작품을 완성합니다.", icon: Clapperboard },
    { title: "실제 프로젝트 제작 기록", copy: "공개 작품, 실제 프레임, 확인한 문제와 수정·거절·채택 판단이 있는 경우에만 실제 제작 기록으로 분류합니다.", icon: BookOpen },
  ];
  return <main><PageHero eyebrow="FourFeetz Studios" title="오리지널 동물 캐릭터 제작 스튜디오" desc="FourFeetz는 자체 동물 캐릭터와 공개 영상·음악을 제작하고 관리하며, 실제 프로젝트 근거가 있는 제작 기록을 공유하는 독립 스튜디오입니다." illustration={{ src: "/images/about-hero-v2.png", alt: "동물 캐릭터 영상 작업 중인 FourFeetz 스튜디오와 HARU" }} />
    <section className="px-6 pb-20"><div className="mx-auto grid max-w-7xl gap-8 rounded-[32px] border border-[#eadfce] bg-[#fffdf8] p-8 md:grid-cols-[0.7fr_1.3fr] md:p-10"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">About the Studio</p><h2 className="mt-3 text-3xl font-black text-[#2b2119] md:text-4xl">직접 만든 결과물로 이야기합니다.</h2></div><div className="space-y-4 text-lg leading-8 text-[#76685d]"><p>FourFeetz는 오리지널 동물 캐릭터의 디자인과 IP를 직접 만들고 관리하며, AI 애니메이션 필름, 세로형 쇼츠와 음악으로 확장하는 독립 창작 스튜디오입니다. 한 번 보고 지나가는 영상보다 캐릭터의 인상과 감정이 작품마다 자연스럽게 이어지는 세계를 지향합니다.</p><p>실제 제작 기록은 공개 작품, 프로젝트 프레임, 테스트 영상과 구체적인 검수 판단을 근거로 작성합니다. 일반 제작 원칙은 공개하지만 캐릭터 마스터 프롬프트, 내부 바이블과 최신 핵심 설정은 비공개 제작 자산으로 보호합니다.</p></div></div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeading eyebrow="Our Direction" title="이야기에서 시작합니다." description="새로운 기술을 보여주는 데 그치지 않고, 기억에 남는 캐릭터와 감정을 중심으로 작품을 만듭니다." /><div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-3">{cards.map(({ title, copy, icon: Icon }) => <article key={title} className={`${cardClass} p-8`}><Icon className="text-[#a67c52]" aria-hidden="true" /><h3 className="mt-6 text-2xl font-black text-[#2b2119]">{title}</h3><p className="mt-4 leading-8 text-[#76685d]">{copy}</p></article>)}</div></section>
    <section className="px-6 py-20"><div className="mx-auto grid max-w-7xl gap-10 rounded-[40px] border border-[#eadfce] bg-white p-8 md:grid-cols-[0.75fr_1.25fr] md:items-center md:p-12"><div className="relative aspect-square overflow-hidden rounded-[32px] bg-[#fffaf4]"><Image src="/images/characters/haru/portrait.png" alt="크림빛 흰 털과 갈색 스카프를 한 FourFeetz 캐릭터 HARU" fill sizes="(min-width: 768px) 38vw, 100vw" className="object-contain p-4" /></div><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">First Original Character</p><h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-6xl">HARU에서 시작된 세계</h2><p className="mt-6 text-lg leading-8 text-[#76685d]">HARU는 FourFeetz의 첫 오리지널 캐릭터이자 첫 여정을 이끄는 주인공입니다. 낯선 길에서 새로운 가족과 집을 찾아가는 이야기를 시작으로, 조용한 모험과 우정, 일상의 따뜻한 순간을 필름과 쇼츠에 담고 있습니다.</p><Link href="/ko/characters/haru" className={`${primaryButton} mt-8`}>HARU 만나기</Link></div></div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeading eyebrow="Explore FourFeetz" title="작품과 제작 경험을 둘러보세요." description="캐릭터의 설정부터 완성된 영상, 실제 제작 과정에서 얻은 인사이트까지 서로 연결해 확인할 수 있습니다." /><div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-3">{[
      { title: "캐릭터", copy: "HARU, PORI, LUNA, HUGO, RURU, OLI, MILO, FENI와 HORI의 특징과 관련 콘텐츠를 소개합니다.", href: "/ko/characters" },
      { title: "영상", copy: "FourFeetz가 직접 제작한 캐릭터 중심의 시네마틱 AI 영상과 힐링 작품을 감상할 수 있습니다.", href: "/ko/videos" },
      { title: "인사이트", copy: "실제 제작 테스트, 실패 원인과 해결 과정, AI 영상 도구의 변화를 구분해 정리합니다.", href: "/ko/insights" },
    ].map((item) => <Link key={item.href} href={item.href} className={`${cardClass} p-7`}><h3 className="text-2xl font-black text-[#2b2119]">{item.title}</h3><p className="mt-4 leading-7 text-[#76685d]">{item.copy}</p><span className="mt-6 inline-flex font-black text-[#6f4e37]">둘러보기 →</span></Link>)}</div></section>
  </main>;
}

export function KoreanFilmsPage() {
  return <main><PageHero eyebrow="Original Productions" title="필름" desc="FourFeetz가 만든 장편 AI 영상과 캐릭터 중심의 시네마틱 이야기를 만나보세요." illustration={{ src: "/images/works-hero-v2.png", alt: "FourFeetz AI 필름 제작 스튜디오" }} /><section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">{films.map((item) => <MediaCard key={item.slug} href={`/ko/films/${item.slug}`} image={item.thumbnail} title={item.koreanTitle ?? item.title} category={item.category} description={koreanFilmDescriptions[item.slug]} />)}</div></section></main>;
}

export function KoreanShortsPage() {
  return <main><PageHero eyebrow="Short-form Films" title="FourFeetz 쇼츠" desc="FourFeetz 캐릭터들의 짧고 따뜻한 순간을 만나보세요." illustration={{ src: "/images/shorts-hero-v2.png", alt: "세로형 영상을 제작하는 FourFeetz 스튜디오" }} /><section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">{shorts.map((item) => <MediaCard key={item.slug} href={`/ko/shorts/${item.slug}`} image={item.poster ?? "/images/shorts-hero-v2.png"} title={koreanShortTitles[item.slug] ?? item.title} category={item.category} description={koreanShortDescriptions[item.slug]} />)}</div></section></main>;
}

export function KoreanCharactersPage() {
  return <main><PageHero eyebrow="Original Character Universe" title="캐릭터" desc="서로 다른 개성과 이야기를 가진 FourFeetz의 오리지널 캐릭터들을 만나보세요." illustration={{ src: "/images/characters-hero-v2.png", alt: "FourFeetz 오리지널 동물 캐릭터들이 모인 스튜디오 장면" }} />
    <section className="px-6 pb-12"><div className="mx-auto max-w-7xl rounded-[32px] border border-[#eadfce] bg-white p-8 md:p-10"><p className="max-w-4xl text-lg leading-8 text-[#76685d]">FourFeetz의 캐릭터 세계는 첫 주인공 HARU에서 시작해 서로 다른 속도와 시선을 가진 친구들로 확장됩니다. PORI는 밝은 움직임을, LUNA는 조용한 관찰을, HUGO는 초원의 여유를 더합니다. RURU는 숲속의 호기심을, OLI는 물길을 따라가는 영리한 모험심을 보여주며 MILO는 낙천적인 에너지로 세계의 폭을 넓힙니다. 새롭게 합류한 FENI는 조심스러운 호기심을, HORI는 다정한 장난기와 밝은 에너지를 전합니다. 각 카드를 선택하면 외형과 역할, 공개된 경우 관련 작품을 확인할 수 있습니다.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/ko/videos?type=long-form" className={primaryButton}>롱폼에서 만나기</Link><Link href="/ko/videos?type=shorts" className={secondaryButton}>쇼츠 둘러보기</Link></div></div></section>
    <section className="px-6 pb-20"><div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">{characterDetails.map((item) => { const ko = koreanCharacters[item.slug]; return <MediaCard key={item.slug} href={`/ko/characters/${item.slug}`} image={item.gallery[0]?.image} imageAlt={ko.imageAlt} title={ko.displayName ?? item.name} category={ko.species} description={ko.listing} portrait fullyClickable />; })}</div></section>
  </main>;
}

export function KoreanMusicPage() {
  return <main><PageHero eyebrow="FourFeetz Music Library" title="음악" desc="FourFeetz 필름과 쇼츠, 캐릭터의 감정을 위해 만들고 실제 영상 편집에 맞춰 선별한 공식 테마와 오리지널 사운드트랙입니다." illustration={{ src: "/images/music-hero-v2.png", alt: "마이크, 헤드폰, 건반과 스피커가 있는 FourFeetz 음악 제작 스튜디오" }} /><section className="px-6 pb-12"><div className="mx-auto max-w-7xl rounded-[32px] border border-[#eadfce] bg-white p-8 md:p-10"><h2 className="text-3xl font-black text-[#2b2119] md:text-4xl">장면에서 시작해 완성 영상으로 확인합니다.</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-[#76685d]">각 곡은 일반적인 배경 음악 목록이 아니라 특정 캐릭터, 필름 또는 쇼츠의 분위기와 편집 리듬을 위해 만들었습니다. 생성 결과는 실제 화면에 맞춰 선별하고, 앰비언스를 위한 여백과 반복 경계의 소리를 확인합니다. 제작기가 있는 곡은 실제 영상과 내부 링크로 연결합니다.</p></div></section><section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">{musicTracks.map((item) => { const title = item.koreanTitle ?? item.title; return <article key={item.slug} className={`${cardClass} bg-[#fffdf8] p-6`}><div className="flex gap-5"><div className="relative size-28 shrink-0 overflow-hidden rounded-2xl bg-white"><Image src={item.cover} alt={`${title} 앨범 이미지`} fill sizes="112px" className="object-cover" /></div><div><p className="text-sm font-black text-[#a67c52]">{item.badge}</p><h2 className="mt-2 text-2xl font-black text-[#2b2119]">{title}</h2><p className="mt-2 text-sm font-bold text-[#6f4e37]">{item.artist}</p></div></div><p className="mt-5 leading-7 text-[#76685d]">{koreanOrFallback(koreanMusicDescriptions, item.slug, "FourFeetz 캐릭터와 이야기를 위해 만든 오리지널 음악입니다.")}</p>{item.audio ? <MusicPlayer title={title} src={item.audio} compact /> : null}<div className="mt-5 flex flex-wrap gap-3"><Link href={`/ko/music/${item.slug}`} className={`${secondaryButton} px-6 py-3`}>곡 정보 보기</Link>{item.insight ? <Link href={`/ko${item.insight.href}`} className={`${secondaryButton} px-6 py-3`}>제작기 보기</Link> : null}</div></article>; })}</div></section></main>;
}

export function KoreanInsightsPage() {
  return <InsightsHub language="ko" />;
}

export function KoreanResourcesPage() {
  return <main><PageHero eyebrow="Creator Resources" title="리소스" desc="FourFeetz 실제 제작 경험에서 정리한 공개 웹 가이드, 워크시트와 체크리스트로 AI 영상 제작을 계획하고 검토하세요." illustration={{ src: "/images/resources-hero-v2.png", alt: "노트북, 워크플로 카드, 워크시트와 체크리스트가 있는 FourFeetz AI 영상 제작 리소스" }} /><section className="px-6 pb-12"><div className="mx-auto max-w-7xl rounded-[32px] border border-[#eadfce] bg-white p-8 md:p-10"><h2 className="text-3xl font-black text-[#2b2119] md:text-4xl">브라우저에서 읽는 공개 자료입니다.</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-[#76685d]">각 페이지는 장면 목적, 기준 이미지, 실패 원인과 검토 결과를 정리하는 공개 웹 자료입니다. 다운로드 가능한 내부 제작 패키지처럼 표시하지 않으며, FourFeetz 캐릭터 마스터 프롬프트, 내부 바이블과 최신 핵심 설정은 포함하지 않습니다.</p></div></section><section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">{resourceDetails.map((item) => <MediaCard key={item.slug} href={`/ko/resources/${item.slug}`} image={item.image} title={koreanResourceTitles[item.slug] ?? item.title} category="공개 웹 자료" description={koreanResourceDescriptions[item.slug]} fullyClickable />)}</div></section><PracticalResourceCards language="ko" /></main>;
}

export function KoreanToolsPage() {
  const tools = [
    { name: "Google Flow / Google AI Pro", role: "승인된 이미지를 바탕으로 한 영상 생성, 장면 연장과 절제된 움직임 테스트에 사용합니다.", limit: "First Shot 검토가 필요하며, 행동을 많이 넣으면 얼굴·발·방 구조가 달라질 수 있습니다.", href: "/ko/insights/turning-short-scene-into-relaxing-video", evidence: "HARU 릴렉싱 영상 제작 기록" },
    { name: "Runway", role: "초기 HARU 제작에서 이미지 투 비디오, Multi-Shot과 장면 연결 테스트에 사용했습니다.", limit: "좋은 단일 클립도 승인된 기준 이미지와 편집 연속성 비교를 대신하지 않습니다.", href: "/insights/how-haru-was-created", evidence: "HARU 캐릭터 제작 기록 (영문)" },
    { name: "Kling AI", role: "End Frame, Continue, 클립 연장과 특정 장면 수정 범위에서 사용했습니다.", limit: "시작과 끝 상태가 분명할 때 유용하며 불안정한 원본 프레임 자체를 고치지는 못합니다.", href: "/insights/how-haru-was-created", evidence: "HARU 캐릭터 제작 기록 (영문)" },
    { name: "ChatGPT", role: "이야기 구조, 샷 카드, 제작 노트 정리, 공개 글과 웹사이트 작업에 사용합니다.", limit: "작성 결과는 실제 이미지, 영상과 프로젝트 기록에 맞춰 확인한 뒤 공개합니다.", href: "/ko/insights/what-we-keep-private-character-production", evidence: "FourFeetz 제작 공유 원칙" },
    { name: "Suno", role: "FourFeetz 영상의 오리지널 배경 음악과 감정 큐를 탐색하는 데 사용합니다.", limit: "생성 후에도 장면에 맞는 선별, 타이밍과 앰비언스를 위한 믹스가 필요합니다.", href: "/ko/insights/calming-dog-music-puppy-kitten-fireplace-rain", evidence: "Relax Moments 음악 제작 기록" },
    { name: "CapCut", role: "장면 배열, 자르기, 짧은 디졸브, 사운드 균형, 화면 비율과 최종 출력에 사용합니다.", limit: "달라진 얼굴, 사라진 발이나 깨진 배경처럼 구조적인 생성 실패는 고칠 수 없습니다.", href: "/ko/insights/turning-short-scene-into-relaxing-video", evidence: "HARU 릴렉싱 영상 제작 기록" },
  ];
  return <main>
    <PageHero eyebrow="FourFeetz Production" title="실제 제작에 사용한 도구" desc="기능을 나열하기보다 FourFeetz 완성 영상에서 각 도구를 사용한 범위와 확인한 한계를 함께 정리합니다." illustration={{ src: "/images/tools-hero-v2.png", alt: "노트북, 카메라, 마이크와 편집 장치가 있는 FourFeetz 제작 도구 작업 공간" }} />
    <section className="px-6 pb-12"><div className="mx-auto max-w-7xl rounded-[32px] border border-[#eadfce] bg-white p-8 md:p-10"><h2 className="text-3xl font-black text-[#2b2119] md:text-4xl">도구가 아니라 완성 결과를 기준으로 봅니다.</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-[#76685d]">아래 도구는 FourFeetz 제작 기록에 등장하는 범위만 설명합니다. 특정 기능이 있다는 사실만으로 추천하지 않으며, 실제 장면에서 무엇을 해결했고 무엇을 해결하지 못했는지 구분합니다. 캐릭터별 마스터 프롬프트와 내부 핵심 설정은 공개하지 않습니다.</p></div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">{tools.map((tool) => <article key={tool.name} className={`${cardClass} flex h-full flex-col bg-[#fffdf8] p-7`}><p className="text-sm font-black uppercase tracking-[0.18em] text-[#a67c52]">Production Tool</p><h2 className="mt-3 text-2xl font-black text-[#2b2119]">{tool.name}</h2><p className="mt-5 leading-8 text-[#76685d]">{tool.role}</p><div className="mt-5 rounded-2xl border border-[#eadfce] bg-white p-5"><p className="text-sm font-black text-[#6f4e37]">확인한 한계</p><p className="mt-2 leading-7 text-[#76685d]">{tool.limit}</p></div><Link href={tool.href} className="mt-auto pt-6 font-black text-[#6f4e37] underline decoration-[#d8c3ad] underline-offset-4">관련 기록: {tool.evidence} →</Link></article>)}</div></section>
    <section className="px-6 py-20"><div className="mx-auto grid max-w-7xl gap-6 rounded-[36px] border border-[#eadfce] bg-white p-8 md:grid-cols-[0.75fr_1.25fr] md:p-10"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">Production Evidence</p><h2 className="mt-3 text-3xl font-black text-[#2b2119] md:text-5xl">완성 영상 안에서 확인하세요.</h2></div><div><p className="text-lg leading-8 text-[#76685d]">HARU — Snowy Hearth Nap 작품 페이지에는 Google Flow, CapCut, Suno와 기획 도구의 제작 단계가 기록되어 있습니다. 관련 제작 노트에서는 장면 연장, 디졸브와 사운드 보완이 도움이 된 범위와 실패한 원본을 교체해야 하는 기준을 설명합니다.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/ko/films/haru-snowy-hearth-nap" className={primaryButton}>완성 영상 보기</Link><Link href="/ko/insights/turning-short-scene-into-relaxing-video" className={secondaryButton}>제작 노트 읽기</Link></div></div></div></section>
  </main>;
}

const serviceCards = [
  { title: "AI 쇼츠 제작", copy: "유튜브 쇼츠, 인스타그램 릴스와 틱톡에 최적화된 세로형 AI 영상을 제작합니다.", icon: MonitorPlay },
  { title: "브랜드 광고 영상", copy: "제품과 브랜드의 이야기를 효과적으로 전달하는 AI 광고 영상을 제작합니다.", icon: Clapperboard },
  { title: "캐릭터 애니메이션", copy: "일관된 스타일의 AI 캐릭터와 감성적인 스토리텔링을 결합합니다.", icon: WandSparkles },
  { title: "반려동물 콘텐츠", copy: "반려동물 브랜드, 제품과 SNS 캠페인을 위한 따뜻한 AI 영상을 제작합니다.", icon: PawPrint },
  { title: "힐링 및 분위기 영상", copy: "음악, 휴식, 웰니스와 라이프스타일 콘텐츠에 어울리는 차분한 영상을 제작합니다.", icon: Heart },
  { title: "맞춤 프로젝트", copy: "원하는 콘셉트, 영상 비율과 사용 목적에 맞춰 프로젝트를 구성합니다.", icon: Sparkles },
];
const kmongServices = [
  {
    title: "사진으로 만드는 반려동물 추억 영상",
    description: "반려동물 사진을 바탕으로 생일, 기념일과 소중한 일상을 따뜻한 감성 영상으로 제작합니다. 간단하고 부담 없이 특별한 추억을 남기고 싶은 분께 추천합니다.",
    detail: "사진 기반 감성 영상 · 39,000원부터",
    button: "추억 영상 의뢰하기",
    href: "https://kmong.com/gig/801888",
  },
  {
    title: "맞춤형 반려동물 AI 스토리 영상",
    description: "반려동물의 특징을 반영해 새로운 배경과 콘셉트, 여러 장면으로 구성된 맞춤형 AI 영상을 제작합니다. SNS 콘텐츠, 특별한 스토리와 홍보 영상이 필요한 분께 추천합니다.",
    detail: "맞춤 콘셉트·스토리 구성 · 99,000원부터",
    button: "맞춤 영상 의뢰하기",
    href: "https://kmong.com/gig/798551",
  },
];

export function KoreanServicesPage() {
  const portfolioSlugs = ["haru-snowy-hearth-nap", "morning-with-haru", "haru-ep03-best-friends", "luna-shorts-ep01", "hugo-and-haru-meadow", "ruru-tries-to-be-scary"];
  const work = portfolioSlugs.map((slug) => getFilm(slug) ? { kind: "films", item: getFilm(slug)! } : { kind: "shorts", item: shorts.find((entry) => entry.slug === slug)! });
  const faqs = [
    ["제작 기간은 얼마나 걸리나요?", "일반적으로 제작 방향이 확정된 뒤 1~3주가 필요합니다. 장면 수와 난이도, 검토 일정에 따라 달라질 수 있습니다."],
    ["수정은 몇 번 가능한가요?", "상품별 포함 횟수가 다르며, 작업 시작 전 견적서에 수정 범위와 횟수를 명확히 안내합니다."],
    ["새로운 캐릭터도 제작할 수 있나요?", "네. 브랜드와 이야기 방향에 맞는 오리지널 캐릭터 콘셉트와 영상 제작을 상담할 수 있습니다."],
    ["제품 광고 영상도 제작 가능한가요?", "네. 제품 소개, 브랜드 스토리와 SNS 캠페인용 광고 영상을 제작합니다."],
    ["세로형 쇼츠와 가로형 영상 모두 가능한가요?", "네. 9:16, 16:9 등 배포 채널에 맞는 화면 비율과 결과물을 프로젝트 시작 전에 협의합니다."],
    ["상업적으로 사용할 수 있나요?", "가능합니다. 정확한 사용 범위와 기간은 프로젝트와 사용 도구의 조건을 검토해 견적 및 계약 단계에서 안내합니다."],
  ];
  return <main>
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">FourFeetz Studio Services</p><h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">AI 영상 제작 서비스</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d] md:text-xl">브랜드, 기업, 크리에이터와 SNS 채널을 위한 감성적인 AI 영상을 제작합니다.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#contact" className={primaryButton}>무료 상담받기</a><a href="#work" className={secondaryButton}>제작 사례 보기</a></div></div><div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-[#d8c3ad] bg-[#f2e8dc] shadow-2xl shadow-[#6f4e37]/15"><Image src="/images/studio-hero-v2.png" alt="FourFeetz AI 영상 제작 스튜디오" fill priority className="object-cover" /></div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeading eyebrow="What We Create" title="프로젝트에 맞는 영상 제작" /><div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{serviceCards.map(({ title, copy, icon: Icon }) => <article key={title} className={`${cardClass} bg-[#fffdf8] p-8`}><span className="grid size-12 place-items-center rounded-2xl bg-[#f2e8dc] text-[#6f4e37]"><Icon aria-hidden="true" /></span><h3 className="mt-6 text-2xl font-black text-[#2b2119]">{title}</h3><p className="mt-3 leading-7 text-[#76685d]">{copy}</p></article>)}</div></section>
    <section className="px-6 py-20"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Pet Business Video" title="반려동물 업체 홍보영상" description="애견미용실·호텔, 애견용품 브랜드·쇼핑몰, 동물병원과 반려동물 장례식장에 필요한 메시지를 업종별로 설계합니다. 애견미용실·호텔 카드에서는 실제 세로형 포트폴리오 영상을 확인할 수 있습니다." /><Link href="/ko/services/pet-video" className={`${secondaryButton} shrink-0`}>전체 안내 보기</Link></div><div className="mx-auto mt-10 max-w-7xl"><PetIndustryCards /></div></section>
    <section id="work" className="scroll-mt-24 px-6 py-20"><SectionHeading eyebrow="Selected Work" title="제작 사례" /><div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">{work.map(({ kind, item }) => <MediaCard key={item.slug} href={`/ko/${kind}/${item.slug}`} image={"thumbnail" in item ? item.thumbnail : item.poster!} title={item.title} category={item.category} description={"thumbnail" in item ? koreanFilmDescriptions[item.slug] : koreanShortDescriptions[item.slug]} />)}</div><div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-3"><Link href="/ko/videos?type=long-form" className={primaryButton}>모든 롱폼 보기</Link><Link href="/ko/videos?type=shorts" className={secondaryButton}>모든 쇼츠 보기</Link></div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeading eyebrow="Process" title="제작 과정" /><ol className="mx-auto mt-10 grid max-w-7xl gap-5 lg:grid-cols-4">{[["프로젝트 상담","브랜드, 제품, 원하는 분위기, 영상 길이와 사용 목적을 알려주세요."],["기획 및 견적","프로젝트를 검토한 후 제작 방향, 일정과 견적을 안내합니다."],["AI 영상 제작","프로젝트에 맞는 AI 제작 과정과 편집 작업을 진행합니다."],["검토 및 전달","결과물을 확인하고 포함된 수정 과정을 거친 뒤 최종 파일을 전달합니다."]].map(([title, copy], index) => <li key={title} className={`${cardClass} bg-[#fffdf8] p-7`}><span className="grid size-11 place-items-center rounded-full bg-[#6f4e37] font-black text-white">{index + 1}</span><h3 className="mt-6 text-xl font-black text-[#2b2119]">{title}</h3><p className="mt-3 leading-7 text-[#76685d]">{copy}</p></li>)}</ol></section>
    <section className="px-6 py-20"><SectionHeading eyebrow="Pricing" title="프로젝트 시작 가격" /><div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{videoPricingPackages.map((tier) => <article key={tier.name} className={`${cardClass} p-8`}><p className="text-sm font-black uppercase tracking-[0.18em] text-[#a67c52]">{tier.name}</p><p className="mt-6 text-3xl font-black text-[#2b2119]">{tier.price}부터</p><ul className="mt-7 space-y-3 text-[#76685d]">{tier.rootFeatures.map((feature) => <li key={feature} className="flex gap-2"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-[#a67c52]" aria-hidden="true" />{feature}</li>)}</ul></article>)}</div><p className="mx-auto mt-8 max-w-7xl rounded-2xl border border-[#eadfce] bg-white px-6 py-5 text-center leading-7 text-[#76685d]">최종 견적은 영상 길이, 장면 수, 캐릭터 일관성, 수정 횟수, 제작 난이도, 납기와 상업적 사용 범위에 따라 달라질 수 있습니다.</p></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20">
      <SectionHeading eyebrow="Kmong Services" title="크몽에서 편리하게 의뢰하세요" description="원하시는 제작 방식에 맞는 서비스를 선택해 주세요. 크몽에서 상담과 결제를 안전하고 편리하게 진행하실 수 있습니다." />
      <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2">
        {kmongServices.map((service) => <article key={service.href} className={`${cardClass} flex h-full min-w-0 flex-col bg-[#fffdf8] p-7 md:p-8`}>
          <h3 className="text-2xl font-black text-[#2b2119]">{service.title}</h3>
          <p className="mt-4 flex-1 leading-8 text-[#76685d]">{service.description}</p>
          <p className="mt-6 font-black text-[#6f4e37]">{service.detail}</p>
          <a href={service.href} target="_blank" rel="noopener noreferrer" className={`${primaryButton} mt-6 w-full gap-2 sm:w-fit`}>
            {service.button}
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </a>
        </article>)}
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-5 rounded-[32px] border border-[#eadfce] bg-[#fffaf4] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
        <p className="max-w-3xl leading-8 text-[#76685d]">제작 범위를 먼저 상담하고 싶으신가요? FourFeetz 홈페이지에서 무료 맞춤 견적을 요청하실 수 있습니다.</p>
        <a href="#contact" className={`${secondaryButton} shrink-0`}>무료 상담받기</a>
      </div>
    </section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-4xl"><SectionHeading eyebrow="FAQ" title="자주 묻는 질문" /><div className="mt-10 divide-y divide-[#eadfce] overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#fffdf8]">{faqs.map(([question, answer]) => <details key={question} className="group px-6 py-2 md:px-8"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg font-black text-[#2b2119]">{question}<span className="text-2xl text-[#a67c52] transition group-open:rotate-45">+</span></summary><p className="pb-6 pr-8 leading-7 text-[#76685d]">{answer}</p></details>)}</div></div></section>
    <section id="contact" className="scroll-mt-24 px-6 py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">Contact</p><h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-6xl">프로젝트를 시작해보세요</h2><p className="mt-5 text-lg leading-8 text-[#76685d]">원하시는 영상과 사용 목적을 알려주시면 검토 후 맞춤 견적을 안내드립니다.</p></div><KoreanQuoteForm buttonClassName={primaryButton} /></div></section>
  </main>;
}

export function KoreanFilmDetail({ slug }: { slug: string }) {
  const item = getFilm(slug); if (!item) notFound();
  const title = item.koreanTitle ?? item.title;
  const insight = item.relatedInsights?.[0];
  const music = item.musicSlugs?.[0];
  return <main>
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
      <div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{item.category}</p><h1 className="mt-4 text-5xl font-black text-[#2b2119] md:text-7xl">{title}</h1><p className="mt-6 text-lg leading-8 text-[#76685d]">{koreanFilmDescriptions[item.slug]}</p><div className="mt-7 flex flex-wrap gap-3">
        {item.characterSlugs?.map((characterSlug) => <Link key={characterSlug} href={`/ko/characters/${characterSlug}`} className={secondaryButton}>{item.character} 캐릭터</Link>)}
        {insight ? <Link href={`/ko${insight.href}`} className={secondaryButton}>제작기 보기</Link> : null}
        {music ? <Link href={`/ko/music/${music}`} className={secondaryButton}>음악 듣기</Link> : null}
        <Link href="/ko/videos" className={secondaryButton}>관련 작품 보기</Link>
      </div></div>
      <div className="relative aspect-video overflow-hidden rounded-[32px] border border-[#eadfce] bg-white"><Image src={item.thumbnail} alt={`${title} 필름 장면`} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></div>
    </section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-5xl"><video controls playsInline preload="metadata" poster={item.thumbnail} className="aspect-video h-auto w-full rounded-[32px] bg-black object-cover shadow-xl"><source src={item.video} type="video/mp4" /></video></div></section>
    <section className="px-6 py-20"><SectionHeading eyebrow="Film Information" title="작품 정보" /><div className="mx-auto mt-8 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["길이",item.duration],["캐릭터",item.character],["상태",item.status ?? "공개"],["해상도",item.resolution ?? "Full HD"]].map(([label,value]) => <article key={label} className={`${cardClass} p-6`}><p className="text-sm font-black text-[#a67c52]">{label}</p><p className="mt-3 text-xl font-black text-[#2b2119]">{value}</p></article>)}</div></section>
    {item.featuredRelease ? <section className="px-6 pb-20"><SectionHeading eyebrow="Published Release" title="함께 볼 공개 쇼츠" /><Link href={`/ko${item.featuredRelease.href}`} className="mx-auto mt-8 block max-w-7xl rounded-[40px] border border-[#eadfce] bg-white p-8 shadow-xl shadow-[#6f4e37]/10 transition hover:-translate-y-1 hover:shadow-2xl md:p-12"><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">공개된 캐릭터 쇼츠</p><h2 className="mt-4 text-4xl font-black text-[#2b2119] md:text-6xl">{item.featuredRelease.koreanTitle}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">{item.featuredRelease.koreanDescription}</p><span className="mt-7 inline-flex font-black text-[#6f4e37]">공개 쇼츠 보기 →</span></Link></section> : null}
  </main>;
}

export function KoreanShortDetail({ slug }: { slug: string }) {
  const item = shorts.find((entry) => entry.slug === slug); if (!item) notFound();
  const characterLinks = item.characterLinks ?? (item.characterHref ? [{ name: item.characters?.[0] ?? "캐릭터", href: item.characterHref }] : []);
  return <main><section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.7fr] md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{item.category}</p><h1 className="mt-4 text-5xl font-black text-[#2b2119] md:text-7xl">{koreanShortTitles[item.slug] ?? item.title}</h1><p className="mt-6 text-lg leading-8 text-[#76685d]">{koreanShortDescriptions[item.slug]}</p><p className="mt-5 font-black text-[#6f4e37]">{item.duration} · 세로형 영상</p><div className="mt-6 flex flex-wrap gap-3">{characterLinks.map((character) => <Link key={character.href} href={`/ko${character.href}`} className={secondaryButton}>{character.name} 캐릭터</Link>)}{item.insight ? <Link href={`/ko${item.insight.href}`} className={secondaryButton}>관련 제작 기록</Link> : null}</div></div><video controls playsInline preload="metadata" poster={item.poster} className="mx-auto aspect-[9/16] h-auto max-h-[720px] w-full max-w-sm object-contain rounded-[32px] bg-black shadow-xl"><source src={item.video} type="video/mp4" /></video></section></main>;
}

export function KoreanCharacterDetail({ slug }: { slug: string }) {
  const item = getCharacter(slug); const ko = koreanCharacters[slug]; if (!item || !ko) notFound();
  const relatedCharacters = ko.relatedCharacters.map((relatedSlug) => ({ item: getCharacter(relatedSlug)!, ko: koreanCharacters[relatedSlug] }));
  const hasPublishedShort = shorts.some((short) => short.publishStatus === "published" && short.characters?.includes(item.name));
  const hasPublishedFilm = films.some((film) => film.publishStatus === "published" && film.characterSlugs?.includes(slug));
  const hasPublishedMusic = musicTracks.some((track) => track.character === item.name && track.featured);
  const hasPublishedMedia = hasPublishedShort || hasPublishedFilm || hasPublishedMusic;
  const displayName = ko.displayName ?? item.name;
  const portrait = item.gallery[0]?.image;
  const miloReferenceStudies = slug === "milo" ? item.gallery.slice(1) : [];
  const characterSchema = {
    "@context": "https://schema.org",
    "@type": "Thing",
    name: displayName,
    alternateName: item.name,
    description: ko.metaDescription,
    url: `https://fourfeetz.com/ko/characters/${slug}`,
    ...(portrait ? { image: `https://fourfeetz.com${portrait}` } : {}),
  };
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(characterSchema).replace(/</g, "\\u003c") }} /><section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">Original Character</p><h1 className="mt-4 text-6xl font-black text-[#2b2119] md:text-7xl">{displayName}</h1><p className="mt-4 text-2xl font-black text-[#6f4e37]">{ko.species}</p><p className="mt-6 text-lg leading-8 text-[#76685d]">{ko.tagline}</p></div><div className="relative aspect-square overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#f2e8dc]">{portrait ? <Image src={portrait} alt={ko.imageAlt} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-contain p-5" /> : <div className="flex h-full items-center justify-center p-8 text-center font-black text-[#8a7768]">공식 캐릭터 이미지 준비 중</div>}</div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.4fr_0.6fr]"><SectionHeading eyebrow="Character Story" title="캐릭터 이야기" /><div className="space-y-5 text-lg leading-8 text-[#76685d]"><p>{ko.story}</p><p><strong className="text-[#2b2119]">FourFeetz에서의 역할.</strong> {ko.role}</p><p><strong className="text-[#2b2119]">외형적 특징.</strong> {ko.appearance}</p><div className="flex flex-wrap gap-2 pt-3">{ko.personality.map((trait) => <span key={trait} className="rounded-full bg-[#f2e8dc] px-4 py-2 font-bold text-[#6f4e37]">{trait}</span>)}</div></div></div></section>
    {miloReferenceStudies.length ? <section className="px-6 py-20"><SectionHeading eyebrow="Gallery" title="MILO 캐릭터 레퍼런스" /><div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2">{miloReferenceStudies.map((study) => <figure key={study.label} className="overflow-hidden rounded-3xl border border-[#eadfce] bg-[#fffaf4] p-4"><div className="relative aspect-square overflow-hidden rounded-2xl bg-white"><Image src={study.image} alt={study.koreanImageAlt ?? `MILO ${study.label}`} fill sizes="(min-width: 768px) 45vw, 100vw" className={study.fit === "cover" ? "object-cover" : "object-contain p-3"} /></div><figcaption className="pt-4 text-sm font-bold text-[#6f4e37]">{study.label === "Expression reference" ? "얼굴과 표정 참고" : "옆모습과 실루엣 참고"}</figcaption></figure>)}</div></section> : null}
    <section className="px-6 py-20"><SectionHeading eyebrow="Related Stories" title={hasPublishedMedia ? `${displayName} 영상과 제작 기록` : "FourFeetz 세계 둘러보기"} description={hasPublishedMedia ? "실제로 공개된 영상, 음악과 제작 기록에서 캐릭터의 표정, 움직임과 분위기를 확인해 보세요." : `${displayName}가 등장하는 개별 영상과 음악은 아직 공개되지 않았습니다. 현재 공개된 캐릭터와 필름을 먼저 만나보세요.`} /><div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{ko.relatedContent.map((content) => <Link key={content.href} href={content.href} className={`${cardClass} p-7`}><p className="text-sm font-black text-[#a67c52]">{content.label}</p><h3 className="mt-3 text-2xl font-black text-[#2b2119]">{content.title}</h3><p className="mt-4 leading-7 text-[#76685d]">{content.description}</p><span className="mt-6 inline-flex font-black text-[#6f4e37]">관련 페이지 보기 →</span></Link>)}</div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeading eyebrow="Character Universe" title="다른 캐릭터 만나기" /><div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2">{relatedCharacters.map(({ item: related, ko: relatedKo }) => <Link key={related.slug} href={`/ko/characters/${related.slug}`} className={`${cardClass} flex items-center gap-5 p-5`}><div className="relative size-28 shrink-0 overflow-hidden rounded-2xl bg-[#fffaf4]"><Image src={`/images/characters/${related.slug}/portrait.png`} alt={relatedKo.imageAlt} fill sizes="112px" className="object-contain p-2" /></div><div><p className="text-sm font-black text-[#a67c52]">{relatedKo.species}</p><h3 className="mt-2 text-2xl font-black text-[#2b2119]">{related.name}</h3><p className="mt-2 leading-7 text-[#76685d]">{relatedKo.tagline}</p></div></Link>)}</div></section>
  </main>;
}

export function KoreanMusicDetail({ slug }: { slug: string }) {
  const item = getMusicTrack(slug); if (!item) notFound();
  const title = item.koreanTitle ?? item.title;
  const musicSchema = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: title,
    duration: item.schemaDuration ?? item.duration,
    image: `https://fourfeetz.com${item.cover}`,
    byArtist: { "@type": "Organization", name: item.artist },
    contentUrl: `https://fourfeetz.com${item.audio}`,
    encodingFormat: "audio/mpeg",
    inLanguage: "ko-KR",
    url: `https://fourfeetz.com/ko/music/${item.slug}`,
  };
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(musicSchema).replace(/</g, "\\u003c") }} /><section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{item.badge}</p><h1 className="mt-4 text-5xl font-black text-[#2b2119] md:text-7xl">{title}</h1><p className="mt-4 text-xl font-black text-[#6f4e37]">{item.artist}</p><p className="mt-6 text-lg leading-8 text-[#76685d]">{koreanOrFallback(koreanMusicDescriptions, item.slug, "FourFeetz 이야기를 위해 만든 오리지널 음악입니다.")}</p>{item.audio ? <MusicPlayer title={title} src={item.audio} /> : null}{item.insight ? <Link href={`/ko${item.insight.href}`} className={`${secondaryButton} mt-5`}>제작기 보기</Link> : null}</div><div className="relative aspect-square overflow-hidden rounded-[32px] border border-[#eadfce] bg-white"><Image src={item.cover} alt={`${title} 앨범 이미지`} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-contain p-5" /></div></section>{item.koreanMood || item.koreanProduction || item.koreanUsage ? <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2"><article className={`${cardClass} p-7`}><p className="text-sm font-black text-[#a67c52]">분위기와 제작 방향</p><h2 className="mt-3 text-2xl font-black text-[#2b2119]">{item.koreanMood}</h2><p className="mt-4 leading-8 text-[#76685d]">{item.koreanProduction}</p></article><article className={`${cardClass} p-7`}><p className="text-sm font-black text-[#a67c52]">추천 사용 목적</p><ul className="mt-4 space-y-3 text-[#76685d]">{item.koreanUsage?.map((usage) => <li key={usage}>- {usage}</li>)}</ul></article></div></section> : null}</main>;
}

export function KoreanInsightDetail({ slug }: { slug: string }) {
  const newGuide = getNewProductionGuide(slug, "ko");
  if (newGuide) {
    return <ProductionInsightArticle article={newGuide} language="ko" />;
  }

  const item = getPublishedInsightArticles().find((entry) => entry.slug === slug);
  const content = koreanInsightSummaries[slug];
  const detail = koreanInsightDetails[slug];
  if (!item || !content || !detail) notFound();
  const localized = localizeInsightArticle(item, "ko");
  const contentTypeLabel = insightContentTypeLabels[item.contentType].ko;
  const listing = item.contentType === "production-record"
    ? { href: "/ko/insights?group=records", label: "실제 제작 기록" }
    : isAnalysisContentType(item.contentType)
      ? { href: hasKoreanInsightGroupContent("news") ? "/ko/insights/news" : "/ko/insights", label: contentTypeLabel }
      : { href: "/ko/insights/guides", label: "제작 가이드" };
  const related = getPublishedInsightArticles()
    .filter((entry) => entry.contentType === item.contentType && entry.slug !== item.slug)
    .slice(0, 3)
    .map((entry) => localizeInsightArticle(entry, "ko"));
  const canonical = `https://fourfeetz.com/ko/insights/${item.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: localized.title,
    description: localized.description,
    image: `https://fourfeetz.com${item.image}`,
    ...(item.publishedAt ? { datePublished: item.publishedAt } : {}),
    ...(item.updatedAt ? { dateModified: item.updatedAt } : {}),
    inLanguage: "ko-KR",
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "FourFeetz Studios", url: "https://fourfeetz.com/ko/about" },
    publisher: { "@type": "Organization", name: "FourFeetz Studios", url: "https://fourfeetz.com" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://fourfeetz.com/ko" },
      { "@type": "ListItem", position: 2, name: "인사이트", item: "https://fourfeetz.com/ko/insights" },
      { "@type": "ListItem", position: 3, name: listing.label, item: `https://fourfeetz.com${listing.href}` },
      { "@type": "ListItem", position: 4, name: localized.title, item: canonical },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <nav aria-label="경로" className="text-sm font-bold text-[#8a7768]">
          <Link href="/ko">홈</Link><span className="px-2">/</span>
          <Link href="/ko/insights">인사이트</Link><span className="px-2">/</span>
          <Link href={listing.href}>{listing.label}</Link>
        </nav>
        <p className="mt-10 text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{contentTypeLabel} · {localized.category}</p>
        <h1 className="mt-4 text-5xl font-black leading-tight text-[#2b2119] md:text-7xl">{localized.title}</h1>
        <p className="mt-5 text-2xl font-black leading-9 text-[#6f4e37]">{content.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
          <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">{localized.readTime}</span>
          <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">{contentTypeLabel}</span>
          <Link href="/ko/about" className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2 hover:border-[#6f4e37]">FourFeetz Studios</Link>
        </div>
        <div className="mt-8 space-y-4 text-lg leading-8 text-[#76685d]">
          {content.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <figure className="mt-10 overflow-hidden rounded-[32px] border border-[#eadfce] bg-white">
          <div className="relative aspect-video">
            <Image src={item.image} alt={localized.imageAlt?.ko ?? `${localized.title} 대표 이미지`} fill priority className={item.imageFit === "contain" ? "object-contain" : "object-cover"} />
          </div>
          {content.imageCaption ? <figcaption className="border-t border-[#eadfce] px-5 py-4 text-sm leading-6 text-[#76685d]">{content.imageCaption}</figcaption> : null}
        </figure>
        <div className="mt-10 rounded-[28px] border border-[#eadfce] bg-white p-8">
          <h2 className="text-2xl font-black text-[#2b2119]">이 글에서 다루는 내용</h2>
          <ul className="mt-5 space-y-3 text-[#76685d]">
            {content.topics.map((topic) => (
              <li key={topic} className="flex gap-3 leading-7">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#a67c52]" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
        <section className="mt-6 rounded-[28px] border border-[#eadfce] bg-white p-8">
          <h2 className="text-2xl font-black text-[#2b2119]">{detail.practiceTitle}</h2>
          <div className="mt-5 space-y-4 leading-8 text-[#76685d]">
            {detail.practice.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>
        <section className="mt-6 rounded-[28px] border border-[#eadfce] bg-[#fffdf8] p-8">
          <h2 className="text-2xl font-black text-[#2b2119]">실전 체크리스트</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {detail.checklist.map((entry) => (
              <li key={entry}>
                <label className="flex cursor-pointer gap-3 rounded-2xl border border-[#eadfce] bg-white p-4 leading-7 text-[#5f5147]">
                  <input type="checkbox" className="mt-1 size-4 shrink-0 accent-[#6f4e37]" />
                  <span>{entry}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>
        <aside className="mt-6 rounded-[28px] border border-[#d8c3ad] bg-[#f7efe5] p-8">
          <h2 className="text-xl font-black text-[#2b2119]">확인할 점</h2>
          <p className="mt-3 leading-8 text-[#66584d]">{detail.caution}</p>
        </aside>
        <div className="mt-6 rounded-[28px] border border-[#eadfce] bg-white p-8">
          <h2 className="text-2xl font-black text-[#2b2119]">한국어 안내</h2>
          <p className="mt-4 leading-8 text-[#76685d]">
            현재 페이지는 핵심 범위를 한국어로 소개하며 검색 색인 대상에서 제외됩니다. 근거와 한계를 포함한 전체 내용은 영문 원문에서 확인하세요.
          </p>
          <Link href={item.href} hrefLang="en" className={`${primaryButton} mt-6`}>영문 원문 읽기</Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={listing.href} className={secondaryButton}>{listing.label} 더 보기</Link>
          <Link href="/ko/insights" className={secondaryButton}>전체 인사이트</Link>
        </div>
        <section className="mt-16 border-t border-[#eadfce] pt-12">
          <h2 className="text-3xl font-black text-[#2b2119]">관련 글</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {related.map((entry) => (
              <Link key={entry.slug} href={`/ko/insights/${entry.slug}`} className="rounded-[24px] border border-[#eadfce] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#a67c52]">{insightContentTypeLabels[entry.contentType].ko}</span>
                <strong className="mt-3 block text-lg text-[#2b2119]">{entry.title}</strong>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

const legacyResourceGuideLinks: Record<string, { href: string; title: string }> = {
  "character-consistency-prompt-pack": { href: "/insights/character-consistency-guide", title: "AI 캐릭터 일관성 제작 가이드 (영문)" },
  "image-to-video-prompt-framework": { href: "/insights/image-to-video-prompts", title: "이미지 투 비디오 지시 구성 가이드 (영문)" },
  "ai-short-film-workflow": { href: "/insights/repeatable-ai-video-workflow", title: "반복 가능한 AI 영상 제작 흐름 (영문)" },
  "storyboard-planning-template": { href: "/insights/ai-storyboarding-guide", title: "AI 영상 스토리보드 기획 가이드 (영문)" },
  "character-production-checklist": { href: "/insights/character-consistency-guide", title: "AI 캐릭터 일관성 제작 가이드 (영문)" },
  "ai-music-prompt-starter-pack": { href: "/insights/best-ai-music-tools", title: "AI 음악 도구와 제작 활용 가이드 (영문)" },
  "vertical-video-reframing-guide": { href: "/insights/reframing-16-9-guide", title: "16:9 영상을 세로형으로 재구성하는 방법 (영문)" },
  "production-notes-template": { href: "/insights/repeatable-ai-video-workflow", title: "반복 가능한 AI 영상 제작 흐름 (영문)" },
};

export function KoreanResourceDetail({ slug }: { slug: string }) {
  const item = getResource(slug);
  const detail = koreanLegacyResourceDetails[slug];
  const guide = legacyResourceGuideLinks[slug];
  if (!item || !detail || !guide) notFound();

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{item.category}</p>
          <h1 className="mt-4 text-5xl font-black leading-tight text-[#2b2119] md:text-7xl">{koreanResourceTitles[item.slug] ?? item.title}</h1>
          <p className="mt-6 text-lg leading-8 text-[#76685d]">{koreanResourceDescriptions[item.slug]}</p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[#eadfce] bg-white">
          <Image src={item.image} alt={`${koreanResourceTitles[item.slug] ?? item.title} 공개 웹 자료 이미지`} fill priority className="object-contain p-5" />
        </div>
      </section>
      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Resource Overview" title="자료 안내" />
          <p className="mt-6 text-lg leading-8 text-[#76685d]">{detail.overview}</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {item.preview.map((entry) => <li key={entry} className="rounded-2xl border border-[#eadfce] bg-[#fffdf8] p-5 font-bold text-[#6f4e37]">{entry}</li>)}
          </ul>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="How to Use" title="사용 방법" />
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {detail.howTo.map((entry, index) => (
              <li key={entry} className={`${cardClass} flex gap-4 p-6`}>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#6f4e37] font-black text-white">{index + 1}</span>
                <p className="leading-7 text-[#66584d]">{entry}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Final Review" title="최종 체크리스트" />
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {detail.checklist.map((entry) => (
              <li key={entry}>
                <label className="flex cursor-pointer gap-3 rounded-2xl border border-[#eadfce] bg-[#fffdf8] p-5 leading-7 text-[#5f5147]">
                  <input type="checkbox" className="mt-1 size-4 shrink-0 accent-[#6f4e37]" />
                  <span>{entry}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Practical Tips" title="활용 팁" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {detail.tips.map((tip) => <p key={tip} className="rounded-[24px] border border-[#eadfce] bg-white p-6 leading-8 text-[#66584d]">{tip}</p>)}
          </div>
          <div className="mt-8 rounded-[28px] bg-[#f2e8dc] p-7">
            <p className="font-black text-[#2b2119]">함께 읽으면 좋은 제작 가이드</p>
            <Link href={guide.href} className="mt-3 inline-flex font-black text-[#6f4e37] underline decoration-[#a67c52] underline-offset-4">{guide.title} →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
