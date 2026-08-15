import Image from "next/image";
import Link from "next/link";
import HeroIllustrationCard from "@/components/HeroIllustrationCard";
import InsightsFilter from "@/components/insights/InsightsFilter";
import { insightGroups, type InsightGroup, type InsightLanguage } from "@/lib/insightGroups";
import { isAnalysisContentType } from "@/lib/insightClassification";
import { localizeInsightArticles } from "@/lib/insightLocalization";
import { getPublishedInsightArticles } from "@/lib/insights";

const siteUrl = "https://fourfeetz.com";
const howHaruImage = "/images/insights/premium/how-haru-hero.png";

export default function InsightsHub({ language = "en" }: { language?: InsightLanguage }) {
  const articles = localizeInsightArticles(getPublishedInsightArticles(), language).sort(
    (a, b) => Number(b.contentType === "production-record") - Number(a.contentType === "production-record"),
  );
  const isKorean = language === "ko";
  const hubPath = isKorean ? "/ko/insights" : "/insights";
  const intro = isKorean
    ? "공개된 FourFeetz 작품의 실제 제작 기록을 먼저 살펴보고, 그 경험에서 일반화한 제작 가이드와 도구 분석을 함께 확인할 수 있습니다."
    : "Start with records from published FourFeetz projects, then explore production guides and clearly separated studio analysis of AI video tools.";
  const categoryOrder: InsightGroup[] = ["guides", "news"];
  const featured = articles.find((article) => article.slug === "how-haru-was-created");
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isKorean ? "인사이트" : "Insights",
    description: intro,
    url: `${siteUrl}${hubPath}`,
    inLanguage: isKorean ? "ko-KR" : "en-US",
    hasPart: [
      {
        "@type": "CollectionPage",
        name: isKorean ? "실제 제작 기록" : "Real Production Notes",
        url: `${siteUrl}${hubPath}?group=records`,
      },
      ...categoryOrder.map((group) => ({
        "@type": "CollectionPage",
        name: group === "news"
          ? (isKorean ? "스튜디오 분석 / 도구 업데이트" : "Studio Analysis / Tool Updates")
          : insightGroups[group][language].label,
        url: `${siteUrl}${hubPath}?group=${group}`,
      })),
    ],
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}${isKorean ? `/ko/insights/${article.slug}` : article.href}`,
        name: article.title,
      })),
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema).replace(/</g, "\\u003c") }}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">
            {isKorean ? "FourFeetz 크리에이터 지식 허브" : "Creator Knowledge Hub"}
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">
            {isKorean ? "인사이트" : "Insights"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">{intro}</p>
        </div>
        <HeroIllustrationCard
          src="/images/insights-hero-v2.png"
          alt={isKorean ? "FourFeetz AI 영상 인사이트 라이브러리" : "Editorial research tools for FourFeetz creative knowledge"}
          priority
        />
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#a67c52]">
            {isKorean ? "콘텐츠 분류" : "Explore by Category"}
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Link
              href={`${hubPath}?group=records`}
              className="rounded-[36px] border border-[#d8c3ad] bg-[#6f4e37] p-8 text-white shadow-xl shadow-[#6f4e37]/15 transition duration-200 hover:-translate-y-[3px] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] md:p-10"
            >
              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                {isKorean ? "실제 프로젝트 근거" : "Original project evidence"}
              </span>
              <h2 className="mt-6 text-3xl font-black md:text-4xl">{isKorean ? "실제 제작 기록" : "Real Production Notes"}</h2>
              <p className="mt-4 leading-8 text-[#f4e8da]">
                {isKorean
                  ? "공개 영상, 실제 프레임, 발생한 문제와 채택·수정·거절 판단이 함께 남아 있는 FourFeetz 프로젝트 기록입니다."
                  : "Published work, real project frames, visible problems, and the decisions to accept, revise or reject a result."}
              </p>
              <p className="mt-7 font-black">
                {isKorean
                  ? `${articles.filter((article) => article.contentType === "production-record").length}개 기록 보기 →`
                  : `Explore ${articles.filter((article) => article.contentType === "production-record").length} records →`}
              </p>
            </Link>
            {categoryOrder.map((group, index) => {
              const content = insightGroups[group][language];
              const isAnalysis = group === "news";
              const count = articles.filter((article) => isAnalysis ? isAnalysisContentType(article.contentType) : article.contentType === "production-guide").length;
              const label = isAnalysis
                ? (isKorean ? "스튜디오 분석 / 도구 업데이트" : "Studio Analysis / Tool Updates")
                : content.label;
              const description = isAnalysis
                ? (isKorean ? "실제 사용 범위와 확인된 발표를 구분하고, 미검증 기능은 다음 테스트 항목으로 남기는 FourFeetz 도구 분석입니다." : "FourFeetz tool analysis that separates documented studio use, confirmed announcements, and the production questions still requiring a test.")
                : content.description;
              return (
                <Link
                  key={group}
                  href={`${hubPath}?group=${group}`}
                  className={`rounded-[36px] border border-[#eadfce] p-8 transition duration-200 hover:-translate-y-[3px] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] md:p-10 ${
                    index === 0 ? "bg-[#fffaf4] shadow-lg shadow-[#6f4e37]/10" : "bg-white shadow-sm"
                  }`}
                >
                  <span className="inline-flex rounded-full bg-[#6f4e37] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                    {content.badge}
                  </span>
                  <h2 className="mt-6 text-3xl font-black text-[#2b2119] md:text-4xl">{label}</h2>
                  <p className="mt-4 leading-8 text-[#76685d]">{description}</p>
                  <p className="mt-7 font-black text-[#6f4e37]">
                    {isKorean ? `${count}개 글 보기 →` : `Explore ${count} articles →`}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {featured ? (
        <section className="px-6 py-16 md:py-20">
          <Link
            href={isKorean ? `/ko/insights/${featured.slug}` : featured.href}
            className="mx-auto grid max-w-7xl gap-8 rounded-[40px] border border-[#eadfce] bg-[#fffdf8] p-8 shadow-xl shadow-[#6f4e37]/10 transition duration-200 hover:-translate-y-[3px] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] md:grid-cols-[minmax(0,3fr)_minmax(260px,2fr)] md:items-center md:p-10 lg:gap-10 lg:p-12"
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">
                {isKorean ? "추천 실제 제작 기록" : "Featured Production Record"}
              </p>
              <h2 className="mt-4 max-w-4xl text-4xl font-black text-[#2b2119] md:text-5xl">{featured.title}</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">{featured.description}</p>
              <span className="mt-8 inline-flex rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white">
                {isKorean ? "글 읽기" : "Read Article"}
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-[#d8c3ad] bg-[#f2e8dc] shadow-lg shadow-[#6f4e37]/10 md:h-full md:min-h-[260px] md:max-h-[320px] md:aspect-auto">
              <Image
                src={howHaruImage}
                alt={isKorean ? "FourFeetz AI 애니메이션 스튜디오의 HARU 제작 과정" : "HARU in the FourFeetz AI animation studio"}
                fill
                sizes="(min-width:1280px)36vw,(min-width:768px)40vw,100vw"
                className="object-cover"
                style={{ objectPosition: "50% 48%" }}
              />
            </div>
          </Link>
        </section>
      ) : null}

      <InsightsFilter articles={articles} language={language} />
    </main>
  );
}
