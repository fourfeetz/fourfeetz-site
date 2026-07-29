import Link from "next/link";
import InsightCard from "@/components/insights/InsightCard";
import { insightGroups, type InsightGroup, type InsightLanguage } from "@/lib/insightGroups";
import { getPublishedInsightsByGroup, type InsightArticle } from "@/lib/insights";
import { koreanInsightSummaries } from "@/lib/koreanInsightSummaries";
import { getNewProductionGuide } from "@/lib/newProductionGuides";

const siteUrl = "https://fourfeetz.com";

function localizeArticles(articles: InsightArticle[], language: InsightLanguage) {
  if (language === "en") return articles;
  return articles.map((article) => {
    const newGuide = getNewProductionGuide(article.slug, "ko");
    return {
      ...article,
      title: newGuide?.shortTitle ?? article.title,
      category: newGuide?.category ?? article.category,
      readTime: newGuide?.readTime ?? article.readTime,
      description: newGuide?.description ?? koreanInsightSummaries[article.slug]?.summary[0] ?? article.description,
    };
  });
}

export default function InsightsCategoryPage({
  group,
  language,
}: {
  group: InsightGroup;
  language: InsightLanguage;
}) {
  const content = insightGroups[group][language];
  const otherGroup: InsightGroup = group === "guides" ? "news" : "guides";
  const articles = localizeArticles(getPublishedInsightsByGroup(group), language);
  const path = language === "ko" ? `/ko/insights/${group}` : `/insights/${group}`;
  const hubPath = language === "ko" ? "/ko/insights" : "/insights";
  const otherPath = language === "ko" ? `/ko/insights/${otherGroup}` : `/insights/${otherGroup}`;
  const homePath = language === "ko" ? "/ko" : "/";
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: content.label,
    description: content.description,
    url: `${siteUrl}${path}`,
    inLanguage: language === "ko" ? "ko-KR" : "en-US",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}${language === "ko" ? `/ko/insights/${article.slug}` : article.href}`,
        name: article.title,
      })),
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: language === "ko" ? "홈" : "Home", item: `${siteUrl}${homePath}` },
      { "@type": "ListItem", position: 2, name: language === "ko" ? "인사이트" : "Insights", item: `${siteUrl}${hubPath}` },
      { "@type": "ListItem", position: 3, name: content.label, item: `${siteUrl}${path}` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <nav aria-label={language === "ko" ? "경로" : "Breadcrumb"} className="text-sm font-bold text-[#8a7768]">
          <Link href={homePath} className="hover:text-[#6f4e37]">{language === "ko" ? "홈" : "Home"}</Link>
          <span className="px-2">/</span>
          <Link href={hubPath} className="hover:text-[#6f4e37]">{language === "ko" ? "인사이트" : "Insights"}</Link>
          <span className="px-2">/</span>
          <span>{content.label}</span>
        </nav>
        <p className="mt-10 text-sm font-black uppercase tracking-[0.3em] text-[#a67c52]">
          {language === "ko" ? "FourFeetz 인사이트" : "FourFeetz Insights"}
        </p>
        <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight text-[#2b2119] md:text-7xl">{content.label}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#76685d] md:text-xl">{content.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={hubPath} className="rounded-full bg-[#6f4e37] px-6 py-3 font-black text-white">
            {language === "ko" ? "전체 인사이트" : "All Insights"}
          </Link>
          <Link href={otherPath} className="rounded-full border border-[#6f4e37]/40 bg-white px-6 py-3 font-black text-[#6f4e37]">
            {insightGroups[otherGroup][language].label}
          </Link>
        </div>
      </section>
      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => <InsightCard key={article.href} article={article} language={language} />)}
        </div>
      </section>
    </main>
  );
}
