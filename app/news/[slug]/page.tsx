import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsArticle, getNewsArticles } from "@/lib/news";
import { loadEnglishNewsTranslations } from "@/lib/news-english";
import { englishLanguageAlternates } from "@/lib/localization";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return getNewsArticles().map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getNewsArticle((await params).slug);
  if (!article) return {};
  const translated = loadEnglishNewsTranslations([article]).get(article.slug);
  if (!translated) return {
    title: `News: ${article.source.name}`,
    description: "Read this verified FourFeetz news article in Korean, with original source links.",
    alternates: { canonical: `/ko/news/${article.slug}` },
    robots: { index: false, follow: true },
  };
  return {
    title: translated.title,
    description: translated.description,
    alternates: englishLanguageAlternates(`/news/${article.slug}`, `/ko/news/${article.slug}`),
    openGraph: { type: "article", title: translated.title, description: translated.description, url: `/news/${article.slug}`, locale: "en_US", publishedTime: article.publishedAt },
  };
}
export default async function EnglishNewsDetail({ params }: Props) {
  const article = getNewsArticle((await params).slug);
  if (!article) notFound();
  const translated = loadEnglishNewsTranslations([article]).get(article.slug);
  return <main className="mx-auto max-w-4xl px-6 py-16">
    <Link href="/news" className="font-black text-[#6f4e37]">← All news</Link>
    {translated ? <>
      <article>
        <header className="mt-10 border-b border-[#eadfce] pb-10">
          <p className="text-sm font-black uppercase tracking-widest text-[#a67c52]">{translated.category}</p>
          <h1 className="mt-4 text-4xl font-black text-[#2b2119] md:text-6xl">{translated.title}</h1>
          <p className="mt-6 text-xl leading-9 text-[#76685d]">{translated.description}</p>
          <p className="mt-6 text-sm text-[#8a7868]">Published {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(article.publishedAt))} · Original article quality: {article.quality.total}/100</p>
        </header>
        <div className="space-y-12 py-10">{translated.sections.map((section, i) =>
          <section key={i}><h2 className="text-3xl font-black text-[#2b2119]">{section.heading}</h2>
            <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#51463d]">{section.paragraphs.map((paragraph, j) => <p key={j}>{paragraph}</p>)}</div>
          </section>)}</div>
        <aside className="rounded-[28px] border border-[#d8c3ad] bg-[#fffaf4] p-7">
          <h2 className="text-xl font-black text-[#2b2119]">Key takeaways</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#63564b]">{translated.takeaway.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </aside>
      </article>
    </> : <>
      <p className="mt-10 text-sm font-black uppercase tracking-widest text-[#a67c52]">Published in Korean</p>
      <h1 lang="ko" className="mt-4 text-4xl font-black text-[#2b2119]">{article.title}</h1>
      <p lang="ko" className="mt-6 text-lg leading-8 text-[#76685d]">{article.description}</p>
    </>}
    <section className="mt-10 rounded-[28px] border border-[#eadfce] bg-white p-7">
      <h2 className="text-xl font-black text-[#2b2119]">Sources and verification scope</h2>
      <p className="mt-3 leading-7 text-[#76685d]">This article is based on the cited source material. Findings and limitations apply to the original publication; translations do not add new evidence.</p>
      <ul className="mt-4 space-y-3">{[article.source, ...article.corroboratingSources].map(source =>
        <li key={source.url}><a href={source.url} target="_blank" rel="nofollow noopener noreferrer" className="break-all font-black text-[#6f4e37] underline">{source.name} — original source ↗</a></li>)}</ul>
      <Link href={`/ko/news/${article.slug}`} hrefLang="ko" className="mt-6 inline-block font-black text-[#6f4e37] underline">Read Korean original →</Link>
    </section>
  </main>;
}
