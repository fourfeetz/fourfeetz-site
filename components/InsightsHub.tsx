import Image from "next/image";
import Link from "next/link";
import HeroIllustrationCard from "@/components/HeroIllustrationCard";
import InsightsFilter from "@/components/insights/InsightsFilter";
import { insightGroups, type InsightGroup, type InsightLanguage } from "@/lib/insightGroups";
import { getPublishedInsightArticles, type InsightArticle } from "@/lib/insights";
import { koreanInsightSummaries } from "@/lib/koreanInsightSummaries";

const siteUrl = "https://fourfeetz.com";
const howHaruImage = "/images/insights/premium/how-haru-hero.png";

function localizeArticles(articles: InsightArticle[], language: InsightLanguage) {
  if (language === "en") return articles;
  return articles.map((article) => ({
    ...article,
    description: koreanInsightSummaries[article.slug]?.summary[0] ?? article.description,
  }));
}

export default function InsightsHub({ language = "en" }: { language?: InsightLanguage }) {
  const articles = localizeArticles(getPublishedInsightArticles(), language);
  const isKorean = language === "ko";
  const hubPath = isKorean ? "/ko/insights" : "/insights";
  const intro = isKorean
    ? "FourFeetz의 실제 AI 애니메이션 제작 경험을 바탕으로 한 제작 가이드, 실사용 테스트, AI 영상 도구 업데이트를 제공합니다."
    : "Practical AI animation production guides, real-world tests, and carefully analyzed updates from the tools used by FourFeetz.";
  const categoryOrder: InsightGroup[] = ["guides", "news"];
  const featured = articles.find((article) => article.slug === "how-haru-was-created");
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isKorean ? "인사이트" : "Insights",
    description: intro,
    url: `${siteUrl}${hubPath}`,
    inLanguage: isKorean ? "ko-KR" : "en-US",
    hasPart: categoryOrder.map((group) => ({
      "@type": "CollectionPage",
      name: insightGroups[group][language].label,
      url: `${siteUrl}${hubPath}/${group}`,
    })),
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
          <div className="mt-8 grid gap-6 md:grid-cols-[1.12fr_0.88fr]">
            {categoryOrder.map((group, index) => {
              const content = insightGroups[group][language];
              const count = articles.filter((article) => article.group === group).length;
              return (
                <Link
                  key={group}
                  href={`${hubPath}/${group}`}
                  className={`rounded-[36px] border border-[#eadfce] p-8 transition duration-200 hover:-translate-y-[3px] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] md:p-10 ${
                    index === 0 ? "bg-[#fffaf4] shadow-lg shadow-[#6f4e37]/10" : "bg-white shadow-sm"
                  }`}
                >
                  <span className="inline-flex rounded-full bg-[#6f4e37] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                    {content.badge}
                  </span>
                  <h2 className="mt-6 text-3xl font-black text-[#2b2119] md:text-4xl">{content.label}</h2>
                  <p className="mt-4 leading-8 text-[#76685d]">{content.description}</p>
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
                {isKorean ? "추천 제작 가이드" : "Featured Production Guide"}
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
