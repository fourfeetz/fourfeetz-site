import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsArticle, getNewsArticles } from "@/lib/news";
import { loadEnglishNewsTranslations } from "@/lib/news-english";
import { languageAlternates } from "@/lib/localization";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getNewsArticles().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getNewsArticle((await params).slug);
  if (!article) return {};
  const path = `/ko/news/${article.slug}`;
  const hasEnglishTranslation = loadEnglishNewsTranslations([article]).has(article.slug);
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: hasEnglishTranslation ? languageAlternates(`/news/${article.slug}`, path) : { canonical: path },
    openGraph: { type: "article", title: article.title, description: article.description, url: path, locale: "ko_KR", publishedTime: article.publishedAt, modifiedTime: article.updatedAt },
    twitter: { card: "summary", title: article.title, description: article.description },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const article = getNewsArticle((await params).slug);
  if (!article) notFound();

  const articleUrl = `https://fourfeetz.com/ko/news/${article.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    inLanguage: "ko-KR",
    mainEntityOfPage: articleUrl,
    author: { "@type": "Organization", name: "FourFeetz Studios", url: "https://fourfeetz.com" },
    publisher: { "@type": "Organization", name: "FourFeetz Studios", url: "https://fourfeetz.com" },
    citation: [article.source.url, ...article.corroboratingSources.map((source) => source.url)],
    isBasedOn: [article.source.url, ...article.corroboratingSources.map((source) => source.url)],
  };

  return (
    <main className="px-6 py-14 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article className="mx-auto max-w-4xl">
        <Link href="/ko/news" className="text-sm font-black text-[#6f4e37] hover:underline">← 뉴스 목록</Link>
        <header className="mt-8 border-b border-[#eadfce] pb-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">{article.category}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#2b2119] md:text-6xl">{article.title}</h1>
          <p className="mt-6 text-xl leading-9 text-[#76685d]">{article.description}</p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#8a7868]">
            <time dateTime={article.publishedAt}>발행 {new Intl.DateTimeFormat("ko-KR", { dateStyle: "long" }).format(new Date(article.publishedAt))}</time>
            <span>품질 검증 {article.quality.total}/100</span>
          </div>
        </header>

        <div className="space-y-12 py-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-black text-[#2b2119]">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#51463d]">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>

        <aside className="rounded-[28px] border border-[#d8c3ad] bg-[#fffaf4] p-7">
          <h2 className="text-xl font-black text-[#2b2119]">FourFeetz 독자를 위한 핵심 정리</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#63564b]">{article.takeaway.map((item) => <li key={item}>{item}</li>)}</ul>
        </aside>

        <section className="mt-10 rounded-[28px] border border-[#eadfce] bg-white p-7">
          <h2 className="text-xl font-black text-[#2b2119]">출처와 검증 범위</h2>
          <p className="mt-3 leading-7 text-[#76685d]">이 글은 아래 원문에 명시된 사실만을 바탕으로 독립적으로 작성했습니다. 원문의 전체 맥락과 최신 정정 사항은 출처에서 확인해 주세요.</p>
          <ul className="mt-4 space-y-3">
            {[article.source, ...article.corroboratingSources].map((source) => (
              <li key={source.url}><a href={source.url} rel="nofollow noopener noreferrer" target="_blank" className="break-all font-black text-[#6f4e37] underline">{source.name} 원문 보기 ↗</a></li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-[#eadfce] pt-10">
          <h2 className="text-2xl font-black text-[#2b2119]">함께 보면 좋은 FourFeetz 콘텐츠</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">{article.relatedLinks.map((link) => <Link key={link.href} href={link.href} className="rounded-2xl border border-[#eadfce] bg-white p-5 font-black text-[#6f4e37] hover:shadow-md">{link.label} →</Link>)}</div>
        </section>
      </article>
    </main>
  );
}

