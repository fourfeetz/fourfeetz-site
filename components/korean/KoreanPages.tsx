import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
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
import PageHero from "@/components/PageHero";
import { shorts } from "@/data/shorts";
import { characterDetails, getCharacter } from "@/lib/characterDetails";
import { films, getFilm } from "@/lib/films";
import { getPublishedInsightArticles } from "@/lib/insights";
import {
  koreanCharacters,
  koreanFilmDescriptions,
  koreanInsightDescriptions,
  koreanMusicDescriptions,
  koreanOrFallback,
  koreanResourceDescriptions,
  koreanShortDescriptions,
} from "@/lib/koreanContent";
import { koreanInsightSummaries } from "@/lib/koreanInsightSummaries";
import { getMusicTrack, musicTracks } from "@/lib/music";
import { getResource, resourceDetails } from "@/lib/resourceDetails";

const primaryButton = "inline-flex items-center justify-center rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const secondaryButton = "inline-flex items-center justify-center rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const cardClass = "rounded-[32px] border border-[#eadfce] bg-white shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10";

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{eyebrow}</p><h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{title}</h2>{description ? <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">{description}</p> : null}</div>;
}

function MediaCard({ href, image, title, category, description, portrait = false }: { href: string; image: string; title: string; category: string; description: string; portrait?: boolean }) {
  return <article className={`${cardClass} group flex h-full flex-col overflow-hidden bg-[#fffdf8]`}>
    <div className={`relative overflow-hidden bg-[#f2e8dc] ${portrait ? "aspect-square" : "aspect-video"}`}><Image src={image} alt={`${title} 썸네일`} fill sizes="(min-width:1024px)33vw,(min-width:768px)50vw,100vw" className={portrait ? "object-contain p-3" : "object-cover transition-transform duration-200 group-hover:scale-[1.02]"} /></div>
    <div className="flex flex-1 flex-col p-6"><p className="text-sm font-black text-[#a67c52]">{category}</p><h3 className="mt-3 text-2xl font-black text-[#2b2119]">{title}</h3><p className="mt-3 flex-1 leading-7 text-[#76685d]">{description}</p><Link href={href} className={`${secondaryButton} mt-6 self-start px-6 py-3`}>자세히 보기</Link></div>
  </article>;
}

export function KoreanHomePage() {
  const featuredFilms = films.slice(0, 2);
  const featuredShorts = shorts.filter((item) => item.poster).slice(0, 2);
  return <main>
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
      <div><p className="text-sm font-black uppercase tracking-[0.3em] text-[#a67c52]">AI Animation Studio</p><h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">AI로 만드는<br />따뜻한 이야기</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d] md:text-xl">FourFeetz는 개성 있는 동물 캐릭터와 감성적인 영상으로 따뜻한 순간을 만드는 AI 애니메이션 스튜디오입니다.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/ko/films" className={primaryButton}>작품 보기</Link><Link href="/ko/shorts" className={secondaryButton}>쇼츠 보기</Link></div></div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-[#d8c3ad] bg-[#f2e8dc] shadow-2xl shadow-[#6f4e37]/15"><Image src="/images/studio-hero-v2.png" alt="FourFeetz 캐릭터와 AI 애니메이션 스튜디오" fill priority sizes="(min-width:768px)44vw,100vw" className="object-cover" /></div>
    </section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeading eyebrow="Featured Works" title="대표 작품" description="HARU와 FourFeetz 캐릭터들의 감성적인 필름과 짧은 이야기를 만나보세요." /><div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">{featuredFilms.map((item) => <MediaCard key={item.slug} href={`/ko/films/${item.slug}`} image={item.thumbnail} title={item.title} category={item.category} description={koreanFilmDescriptions[item.slug]} />)}{featuredShorts.map((item) => <MediaCard key={item.slug} href={`/ko/shorts/${item.slug}`} image={item.poster!} title={item.title} category={item.category} description={koreanShortDescriptions[item.slug]} />)}</div></section>
    <section className="px-6 py-20"><SectionHeading eyebrow="Character Universe" title="오리지널 캐릭터" description="HARU를 시작으로 각자의 성격과 이야기를 가진 FourFeetz 세계가 확장됩니다." /><div className="mx-auto mt-10 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">{characterDetails.map((item) => <MediaCard key={item.slug} href={`/ko/characters/${item.slug}`} image={`/images/characters/${item.slug}/portrait.png`} title={item.name} category={koreanCharacters[item.slug].species} description={koreanCharacters[item.slug].tagline} portrait />)}</div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[40px] bg-[#6f4e37] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#e5c9a8]">FourFeetz Studio</p><h2 className="mt-3 text-4xl font-black md:text-5xl">영상, 음악과 제작 이야기가 만나는 곳</h2></div><Link href="/ko/about" className="w-fit rounded-full bg-white px-7 py-4 font-black text-[#6f4e37]">스튜디오 소개</Link></div></section>
  </main>;
}

export function KoreanAboutPage() {
  const cards = [
    { title: "오리지널 캐릭터", copy: "오랫동안 사랑받을 수 있는 개성 있는 캐릭터와 세계관을 만듭니다.", icon: Heart },
    { title: "AI 영상 제작", copy: "현대적인 AI 도구와 편집을 결합해 감성적인 영상을 완성합니다.", icon: Clapperboard },
    { title: "창작 인사이트", copy: "도구 리뷰와 일반적인 제작 경험을 크리에이터에게 알기 쉽게 공유합니다.", icon: BookOpen },
  ];
  return <main><PageHero eyebrow="FourFeetz Studios" title="따뜻한 캐릭터와 이야기를 만드는 AI 애니메이션 스튜디오" desc="FourFeetz는 캐릭터 중심의 감성 영상, 음악과 제작 인사이트를 함께 만드는 창작 브랜드입니다." illustration={{ src: "/images/about-hero-v2.png", alt: "AI 영상 작업 중인 FourFeetz 스튜디오와 HARU" }} />
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeading eyebrow="Our Direction" title="이야기에서 시작합니다." description="새로운 기술을 보여주는 데 그치지 않고, 기억에 남는 캐릭터와 감정을 중심으로 작품을 만듭니다." /><div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-3">{cards.map(({ title, copy, icon: Icon }) => <article key={title} className={`${cardClass} p-8`}><Icon className="text-[#a67c52]" aria-hidden="true" /><h3 className="mt-6 text-2xl font-black text-[#2b2119]">{title}</h3><p className="mt-4 leading-8 text-[#76685d]">{copy}</p></article>)}</div></section>
    <section className="px-6 py-20"><div className="mx-auto grid max-w-7xl gap-10 rounded-[40px] border border-[#eadfce] bg-white p-8 md:grid-cols-[0.75fr_1.25fr] md:items-center md:p-12"><div className="relative aspect-square overflow-hidden rounded-[32px] bg-[#fffaf4]"><Image src="/images/characters/haru/portrait.png" alt="FourFeetz의 첫 오리지널 캐릭터 HARU" fill className="object-contain p-4" /></div><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">First Original Character</p><h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-6xl">HARU에서 시작된 세계</h2><p className="mt-6 text-lg leading-8 text-[#76685d]">HARU는 FourFeetz의 첫 오리지널 캐릭터입니다. 조용한 모험, 우정과 일상의 따뜻한 순간을 통해 더 넓은 캐릭터 세계로 이어집니다.</p><Link href="/ko/characters/haru" className={`${primaryButton} mt-8`}>HARU 만나기</Link></div></div></section>
  </main>;
}

export function KoreanFilmsPage() {
  return <main><PageHero eyebrow="Original Productions" title="필름" desc="FourFeetz가 만든 장편 AI 영상과 캐릭터 중심의 시네마틱 이야기를 만나보세요." illustration={{ src: "/images/works-hero-v2.png", alt: "FourFeetz AI 필름 제작 스튜디오" }} /><section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">{films.map((item) => <MediaCard key={item.slug} href={`/ko/films/${item.slug}`} image={item.thumbnail} title={item.title} category={item.category} description={koreanFilmDescriptions[item.slug]} />)}</div></section></main>;
}

export function KoreanShortsPage() {
  return <main><PageHero eyebrow="Short-form Films" title="FourFeetz 쇼츠" desc="FourFeetz 캐릭터들의 짧고 따뜻한 순간을 만나보세요." illustration={{ src: "/images/shorts-hero-v2.png", alt: "세로형 영상을 제작하는 FourFeetz 스튜디오" }} /><section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">{shorts.map((item) => <MediaCard key={item.slug} href={`/ko/shorts/${item.slug}`} image={item.poster ?? "/images/shorts-hero-v2.png"} title={item.title} category={item.category} description={koreanShortDescriptions[item.slug]} />)}</div></section></main>;
}

export function KoreanCharactersPage() {
  return <main><PageHero eyebrow="Original Character Universe" title="캐릭터" desc="FourFeetz 세계를 함께 만들어가는 개성 있는 동물 캐릭터를 소개합니다." illustration={{ src: "/images/characters-hero-v2.png", alt: "FourFeetz 오리지널 캐릭터 스튜디오" }} /><section className="px-6 pb-20"><div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">{characterDetails.map((item) => <MediaCard key={item.slug} href={`/ko/characters/${item.slug}`} image={`/images/characters/${item.slug}/portrait.png`} title={item.name} category={koreanCharacters[item.slug].species} description={koreanCharacters[item.slug].tagline} portrait />)}</div></section></main>;
}

export function KoreanMusicPage() {
  return <main><PageHero eyebrow="FourFeetz Music Library" title="음악" desc="FourFeetz 필름과 쇼츠, 캐릭터의 감정을 위해 만든 공식 테마와 오리지널 사운드트랙입니다." illustration={{ src: "/images/music-hero-v2.png", alt: "FourFeetz 음악 제작 스튜디오" }} /><section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">{musicTracks.map((item) => <article key={item.slug} className={`${cardClass} bg-[#fffdf8] p-6`}><div className="flex gap-5"><div className="relative size-28 shrink-0 overflow-hidden rounded-2xl bg-white"><Image src={item.cover} alt={`${item.title} 앨범 이미지`} fill className="object-cover" /></div><div><p className="text-sm font-black text-[#a67c52]">{item.badge}</p><h2 className="mt-2 text-2xl font-black text-[#2b2119]">{item.title}</h2><p className="mt-2 text-sm font-bold text-[#6f4e37]">{item.artist}</p></div></div><p className="mt-5 leading-7 text-[#76685d]">{koreanOrFallback(koreanMusicDescriptions, item.slug, "FourFeetz 캐릭터와 이야기를 위해 만든 오리지널 음악입니다.")}</p>{item.audio ? <MusicPlayer title={item.title} src={item.audio} compact /> : null}<Link href={`/ko/music/${item.slug}`} className={`${secondaryButton} mt-5 px-6 py-3`}>곡 정보 보기</Link></article>)}</div></section></main>;
}

export function KoreanInsightsPage() {
  const articles = getPublishedInsightArticles();
  return <main><PageHero eyebrow="Creative Knowledge" title="인사이트" desc="AI 영상 도구, 제작 과정과 실제 FourFeetz 프로젝트에서 얻은 창작 인사이트를 소개합니다." illustration={{ src: "/images/insights-hero-v2.png", alt: "FourFeetz AI 영상 인사이트 라이브러리" }} /><section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">{articles.map((item) => <MediaCard key={item.slug} href={`/ko/insights/${item.slug}`} image={item.image} title={item.title} category={item.category} description={koreanOrFallback(koreanInsightDescriptions, item.slug, "AI 영상 제작과 도구 활용에 관한 FourFeetz의 실용적인 인사이트입니다.")} />)}</div></section></main>;
}

export function KoreanResourcesPage() {
  return <main><PageHero eyebrow="Creator Resources" title="리소스" desc="AI 영상 제작을 계획하고 검토하는 데 활용할 수 있는 가이드, 템플릿과 체크리스트입니다." illustration={{ src: "/images/resources-hero-v2.png", alt: "FourFeetz AI 영상 제작 리소스" }} /><section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">{resourceDetails.map((item) => <MediaCard key={item.slug} href={`/ko/resources/${item.slug}`} image={item.image} title={item.title} category={item.category} description={koreanResourceDescriptions[item.slug]} />)}</div></section></main>;
}

const serviceCards = [
  { title: "AI 쇼츠 제작", copy: "유튜브 쇼츠, 인스타그램 릴스와 틱톡에 최적화된 세로형 AI 영상을 제작합니다.", icon: MonitorPlay },
  { title: "브랜드 광고 영상", copy: "제품과 브랜드의 이야기를 효과적으로 전달하는 AI 광고 영상을 제작합니다.", icon: Clapperboard },
  { title: "캐릭터 애니메이션", copy: "일관된 스타일의 AI 캐릭터와 감성적인 스토리텔링을 결합합니다.", icon: WandSparkles },
  { title: "반려동물 콘텐츠", copy: "반려동물 브랜드, 제품과 SNS 캠페인을 위한 따뜻한 AI 영상을 제작합니다.", icon: PawPrint },
  { title: "힐링 및 분위기 영상", copy: "음악, 휴식, 웰니스와 라이프스타일 콘텐츠에 어울리는 차분한 영상을 제작합니다.", icon: Heart },
  { title: "맞춤 프로젝트", copy: "원하는 콘셉트, 영상 비율과 사용 목적에 맞춰 프로젝트를 구성합니다.", icon: Sparkles },
];
const pricing = [
  { name: "스타터", price: "99,000원부터", features: ["최대 15초", "쇼츠 또는 SNS 영상", "기본 편집", "수정 1회"] },
  { name: "스탠다드", price: "199,000원부터", features: ["최대 30초", "맞춤형 영상 콘셉트", "음악 및 사운드 편집", "수정 2회"] },
  { name: "프리미엄", price: "499,000원부터", features: ["최대 60초", "여러 장면 구성", "고급 편집", "음악 및 사운드 디자인", "수정 2회"] },
  { name: "기업 프로젝트", price: "별도 견적", features: ["브랜드 캠페인", "캐릭터 개발", "장편 콘텐츠", "다수 결과물"] },
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
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">FourFeetz Studio Services</p><h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">AI 영상 제작 서비스</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d] md:text-xl">브랜드, 기업, 크리에이터와 SNS 채널을 위한 감성적인 AI 영상을 제작합니다.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#contact" className={primaryButton}>무료 견적 문의</a><a href="#work" className={secondaryButton}>제작 사례 보기</a></div></div><div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-[#d8c3ad] bg-[#f2e8dc] shadow-2xl shadow-[#6f4e37]/15"><Image src="/images/studio-hero-v2.png" alt="FourFeetz AI 영상 제작 스튜디오" fill priority className="object-cover" /></div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeading eyebrow="What We Create" title="프로젝트에 맞는 영상 제작" /><div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{serviceCards.map(({ title, copy, icon: Icon }) => <article key={title} className={`${cardClass} bg-[#fffdf8] p-8`}><span className="grid size-12 place-items-center rounded-2xl bg-[#f2e8dc] text-[#6f4e37]"><Icon aria-hidden="true" /></span><h3 className="mt-6 text-2xl font-black text-[#2b2119]">{title}</h3><p className="mt-3 leading-7 text-[#76685d]">{copy}</p></article>)}</div></section>
    <section id="work" className="scroll-mt-24 px-6 py-20"><SectionHeading eyebrow="Selected Work" title="제작 사례" /><div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">{work.map(({ kind, item }) => <MediaCard key={item.slug} href={`/ko/${kind}/${item.slug}`} image={"thumbnail" in item ? item.thumbnail : item.poster!} title={item.title} category={item.category} description={"thumbnail" in item ? koreanFilmDescriptions[item.slug] : koreanShortDescriptions[item.slug]} />)}</div><div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-3"><Link href="/ko/films" className={primaryButton}>모든 필름 보기</Link><Link href="/ko/shorts" className={secondaryButton}>모든 쇼츠 보기</Link></div></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeading eyebrow="Process" title="제작 과정" /><ol className="mx-auto mt-10 grid max-w-7xl gap-5 lg:grid-cols-4">{[["프로젝트 상담","브랜드, 제품, 원하는 분위기, 영상 길이와 사용 목적을 알려주세요."],["기획 및 견적","프로젝트를 검토한 후 제작 방향, 일정과 견적을 안내합니다."],["AI 영상 제작","프로젝트에 맞는 AI 제작 과정과 편집 작업을 진행합니다."],["검토 및 전달","결과물을 확인하고 포함된 수정 과정을 거친 뒤 최종 파일을 전달합니다."]].map(([title, copy], index) => <li key={title} className={`${cardClass} bg-[#fffdf8] p-7`}><span className="grid size-11 place-items-center rounded-full bg-[#6f4e37] font-black text-white">{index + 1}</span><h3 className="mt-6 text-xl font-black text-[#2b2119]">{title}</h3><p className="mt-3 leading-7 text-[#76685d]">{copy}</p></li>)}</ol></section>
    <section className="px-6 py-20"><SectionHeading eyebrow="Pricing" title="프로젝트 시작 가격" /><div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">{pricing.map((tier) => <article key={tier.name} className={`${cardClass} p-8`}><p className="text-sm font-black uppercase tracking-[0.18em] text-[#a67c52]">{tier.name}</p><p className="mt-6 text-3xl font-black text-[#2b2119]">{tier.price}</p><ul className="mt-7 space-y-3 text-[#76685d]">{tier.features.map((feature) => <li key={feature} className="flex gap-2"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-[#a67c52]" aria-hidden="true" />{feature}</li>)}</ul></article>)}</div><p className="mx-auto mt-8 max-w-7xl rounded-2xl border border-[#eadfce] bg-white px-6 py-5 text-center leading-7 text-[#76685d]">최종 견적은 영상 길이, 장면 수, 캐릭터 일관성, 수정 횟수, 제작 난이도, 납기와 상업적 사용 범위에 따라 달라질 수 있습니다.</p></section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-4xl"><SectionHeading eyebrow="FAQ" title="자주 묻는 질문" /><div className="mt-10 divide-y divide-[#eadfce] overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#fffdf8]">{faqs.map(([question, answer]) => <details key={question} className="group px-6 py-2 md:px-8"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg font-black text-[#2b2119]">{question}<span className="text-2xl text-[#a67c52] transition group-open:rotate-45">+</span></summary><p className="pb-6 pr-8 leading-7 text-[#76685d]">{answer}</p></details>)}</div></div></section>
    <section id="contact" className="scroll-mt-24 px-6 py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">Contact</p><h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-6xl">프로젝트를 시작해보세요</h2><p className="mt-5 text-lg leading-8 text-[#76685d]">원하시는 영상과 사용 목적을 알려주시면 검토 후 맞춤 견적을 안내드립니다.</p></div><form className="grid gap-5 rounded-[36px] border border-[#eadfce] bg-white p-6 shadow-xl shadow-[#6f4e37]/10 md:grid-cols-2 md:p-9">{[["이름","name","text"],["이메일","email","email"],["회사명 또는 채널명","company","text"]].map(([label,name,type]) => <label key={name} className="grid gap-2 text-sm font-black text-[#2b2119]">{label}<input type={type} name={name} className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#a67c52]/25" /></label>)}<label className="grid gap-2 text-sm font-black text-[#2b2119]">프로젝트 종류<select name="projectType" defaultValue="" className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5"><option value="" disabled>선택해 주세요</option>{["SNS 쇼츠","캐릭터 애니메이션","반려동물 영상","브랜드 또는 제품 영상","힐링 영상","기타"].map((item) => <option key={item}>{item}</option>)}</select></label><label className="grid gap-2 text-sm font-black text-[#2b2119]">원하는 영상 길이<input type="text" name="length" placeholder="예: 30초" className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5" /></label><label className="grid gap-2 text-sm font-black text-[#2b2119]">예상 예산<select name="budget" defaultValue="" className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5"><option value="" disabled>선택해 주세요</option>{["30만원 미만","30만원~70만원","70만원~150만원","150만원 이상","아직 정하지 않음"].map((item) => <option key={item}>{item}</option>)}</select></label><label className="grid gap-2 text-sm font-black text-[#2b2119] md:col-span-2">프로젝트 내용<textarea name="message" rows={6} className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5" /></label><div className="md:col-span-2"><button type="button" className={primaryButton}>견적 문의하기</button><p className="mt-3 text-sm leading-6 text-[#9a8775]">온라인 접수 기능은 준비 중입니다. 빠른 문의는 <a href="mailto:fourfeetzstudio@gmail.com" className="font-bold text-[#6f4e37] underline underline-offset-4">fourfeetzstudio@gmail.com</a>으로 보내주세요.</p></div></form></div></section>
  </main>;
}

export function KoreanFilmDetail({ slug }: { slug: string }) {
  const item = getFilm(slug); if (!item) notFound();
  return <main><section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{item.category}</p><h1 className="mt-4 text-5xl font-black text-[#2b2119] md:text-7xl">{item.title}</h1><p className="mt-6 text-lg leading-8 text-[#76685d]">{koreanFilmDescriptions[item.slug]}</p></div><div className="relative aspect-video overflow-hidden rounded-[32px] border border-[#eadfce] bg-white"><Image src={item.thumbnail} alt={`${item.title} 필름 장면`} fill priority className="object-cover" /></div></section><section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-5xl"><video controls playsInline poster={item.thumbnail} className="aspect-video w-full rounded-[32px] bg-black shadow-xl"><source src={item.video} /></video></div></section><section className="px-6 py-20"><SectionHeading eyebrow="Film Information" title="작품 정보" /><div className="mx-auto mt-8 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["길이",item.duration],["캐릭터",item.character],["상태",item.status ?? "공개"],["해상도",item.resolution ?? "Full HD"]].map(([label,value]) => <article key={label} className={`${cardClass} p-6`}><p className="text-sm font-black text-[#a67c52]">{label}</p><p className="mt-3 text-xl font-black text-[#2b2119]">{value}</p></article>)}</div></section></main>;
}

export function KoreanShortDetail({ slug }: { slug: string }) {
  const item = shorts.find((entry) => entry.slug === slug); if (!item) notFound();
  return <main><section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.7fr] md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{item.category}</p><h1 className="mt-4 text-5xl font-black text-[#2b2119] md:text-7xl">{item.title}</h1><p className="mt-6 text-lg leading-8 text-[#76685d]">{koreanShortDescriptions[item.slug]}</p><p className="mt-5 font-black text-[#6f4e37]">{item.duration} · 세로형 영상</p></div><video controls playsInline poster={item.poster} className="mx-auto aspect-[9/16] max-h-[720px] w-auto rounded-[32px] bg-black shadow-xl"><source src={item.video} /></video></section></main>;
}

export function KoreanCharacterDetail({ slug }: { slug: string }) {
  const item = getCharacter(slug); const ko = koreanCharacters[slug]; if (!item || !ko) notFound();
  return <main><section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">Original Character</p><h1 className="mt-4 text-6xl font-black text-[#2b2119] md:text-7xl">{item.name}</h1><p className="mt-4 text-2xl font-black text-[#6f4e37]">{ko.species}</p><p className="mt-6 text-lg leading-8 text-[#76685d]">{ko.tagline}</p></div><div className="relative aspect-square overflow-hidden rounded-[32px] border border-[#eadfce] bg-white"><Image src={`/images/characters/${slug}/portrait.png`} alt={`${item.name} 공식 캐릭터 이미지`} fill priority className="object-contain p-5" /></div></section><section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.4fr_0.6fr]"><SectionHeading eyebrow="Character Story" title="캐릭터 이야기" /><div><p className="text-lg leading-8 text-[#76685d]">{ko.story}</p><div className="mt-8 flex flex-wrap gap-2">{ko.personality.map((trait) => <span key={trait} className="rounded-full bg-[#f2e8dc] px-4 py-2 font-bold text-[#6f4e37]">{trait}</span>)}</div></div></div></section></main>;
}

export function KoreanMusicDetail({ slug }: { slug: string }) {
  const item = getMusicTrack(slug); if (!item) notFound();
  return <main><section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{item.badge}</p><h1 className="mt-4 text-5xl font-black text-[#2b2119] md:text-7xl">{item.title}</h1><p className="mt-4 text-xl font-black text-[#6f4e37]">{item.artist}</p><p className="mt-6 text-lg leading-8 text-[#76685d]">{koreanOrFallback(koreanMusicDescriptions, item.slug, "FourFeetz 이야기를 위해 만든 오리지널 음악입니다.")}</p>{item.audio ? <MusicPlayer title={item.title} src={item.audio} /> : null}</div><div className="relative aspect-square overflow-hidden rounded-[32px] border border-[#eadfce] bg-white"><Image src={item.cover} alt={`${item.title} 앨범 이미지`} fill priority className="object-contain p-5" /></div></section></main>;
}

export function KoreanInsightDetail({ slug }: { slug: string }) {
  const item = getPublishedInsightArticles().find((entry) => entry.slug === slug);
  const content = koreanInsightSummaries[slug];
  if (!item || !content) notFound();

  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{item.category}</p>
        <h1 className="mt-4 text-5xl font-black leading-tight text-[#2b2119] md:text-7xl">{item.title}</h1>
        <p className="mt-5 text-2xl font-black leading-9 text-[#6f4e37]">{content.subtitle}</p>
        <div className="mt-8 space-y-4 text-lg leading-8 text-[#76685d]">
          {content.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-[32px] border border-[#eadfce]">
          <Image src={item.image} alt={`${item.title} 대표 이미지`} fill priority className="object-cover" />
        </div>
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
        <div className="mt-6 rounded-[28px] border border-[#eadfce] bg-white p-8">
          <h2 className="text-2xl font-black text-[#2b2119]">한국어 요약 안내</h2>
          <p className="mt-4 leading-8 text-[#76685d]">
            이 글은 현재 한국어 요약과 영문 전체 글로 제공됩니다. 자세한 제작 과정과 전체 내용은 아래 버튼을 통해 영문 원문에서 확인할 수 있습니다.
          </p>
          <Link href={item.href} hrefLang="en" className={`${primaryButton} mt-6`}>영문 원문 읽기</Link>
        </div>
      </section>
    </main>
  );
}

export function KoreanResourceDetail({ slug }: { slug: string }) {
  const item = getResource(slug); if (!item) notFound();
  return <main><section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">{item.category}</p><h1 className="mt-4 text-5xl font-black leading-tight text-[#2b2119] md:text-7xl">{item.title}</h1><p className="mt-6 text-lg leading-8 text-[#76685d]">{koreanResourceDescriptions[item.slug]}</p></div><div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[#eadfce] bg-white"><Image src={item.image} alt={`${item.title} 리소스 미리보기`} fill priority className="object-contain p-5" /></div></section><section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-5xl"><SectionHeading eyebrow="Resource Overview" title="자료 안내" /><p className="mt-6 text-lg leading-8 text-[#76685d]">{koreanResourceDescriptions[item.slug]}</p><ul className="mt-8 grid gap-4 md:grid-cols-2">{item.preview.map((entry) => <li key={entry} className="rounded-2xl border border-[#eadfce] bg-[#fffdf8] p-5 font-bold text-[#6f4e37]">{entry}</li>)}</ul></div></section></main>;
}
