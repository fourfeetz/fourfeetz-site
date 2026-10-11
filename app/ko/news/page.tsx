import type { Metadata } from "next";
import Link from "next/link";
import { getNewsArticles } from "@/lib/news";

const title = "반려동물·펫테크 뉴스";
const description = "공식 출처를 바탕으로 선별하고 검증한 반려동물 산업, 펫테크, AI 콘텐츠 제작 소식입니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ko/news" },
  openGraph: { type: "website", title, description, url: "/ko/news", locale: "ko_KR" },
};

export default function NewsPage() {
  const articles = getNewsArticles();
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: "https://fourfeetz.com/ko/news",
    inLanguage: "ko-KR",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: `https://fourfeetz.com/ko/news/${article.slug}`,
      })),
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[#a67c52]">FourFeetz Editorial Desk</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight text-[#2b2119] md:text-7xl">반려동물·펫테크 뉴스</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#76685d]">{description} AI가 초안을 만들지만 출처, 중복, SEO, 안전성 검사를 모두 통과한 글만 표시됩니다.</p>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          {articles.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article key={article.slug} className="flex flex-col rounded-[32px] border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#8a6b50]">
                    <span className="rounded-full bg-[#f2e8dc] px-3 py-1.5">{article.category}</span>
                    <time dateTime={article.publishedAt}>{new Intl.DateTimeFormat("ko-KR", { dateStyle: "medium" }).format(new Date(article.publishedAt))}</time>
                  </div>
                  <h2 className="mt-5 text-2xl font-black leading-tight text-[#2b2119]">{article.title}</h2>
                  <p className="mt-4 flex-1 leading-7 text-[#76685d]">{article.description}</p>
                  <p className="mt-5 text-sm text-[#9a8775]">출처: {article.source.name}</p>
                  <Link href={`/ko/news/${article.slug}`} className="mt-6 inline-flex font-black text-[#6f4e37] underline-offset-4 hover:underline">기사 읽기 →</Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[32px] border border-[#eadfce] bg-[#fffaf4] p-8 text-center md:p-12">
              <h2 className="text-2xl font-black text-[#2b2119]">검증을 통과한 새 소식을 준비하고 있습니다</h2>
              <p className="mt-4 leading-7 text-[#76685d]">적합한 뉴스가 없으면 억지로 발행하지 않습니다. FourFeetz 인사이트와 리소스를 먼저 둘러보세요.</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/ko/insights" className="rounded-full bg-[#6f4e37] px-6 py-3 font-black text-white">인사이트</Link>
                <Link href="/ko/resources" className="rounded-full border border-[#6f4e37] px-6 py-3 font-black text-[#6f4e37]">리소스</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

