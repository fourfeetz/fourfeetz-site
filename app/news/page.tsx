import type { Metadata } from "next";
import Link from "next/link";
import { getNewsArticles } from "@/lib/news";
import { loadEnglishNewsTranslations } from "@/lib/news-english";

const title = "Pet Industry, Pet Tech & AI News";
const description = "Source-checked updates on pets, veterinary care, pet technology and creative AI from the FourFeetz editorial desk.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/news" },
  openGraph: { type: "website", title, description, url: "/news", locale: "en_US" },
};

export default function EnglishNewsPage() {
  const articles = getNewsArticles();
  const translations = loadEnglishNewsTranslations(articles);
  return <main>
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-[#a67c52]">FourFeetz Editorial Desk</p>
      <h1 className="mt-4 text-5xl font-black tracking-tight text-[#2b2119] md:text-7xl">News</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-[#76685d]">{description}</p>
      <p className="mt-3 text-sm text-[#76685d]">Read verified news in English. When a translation is unavailable, the original Korean article is clearly labeled.</p>
    </section>
    <section className="border-y border-[#eadfce] bg-white px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {articles.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{articles.map(article =>
          <article key={article.slug} className="flex flex-col rounded-[32px] border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm">
            <div className="text-xs font-black uppercase tracking-wider text-[#8a6b50]">{translations.has(article.slug) ? "English edition" : "Korean-language article"} · {new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(new Date(article.publishedAt))}</div>
            <h2 lang={translations.has(article.slug) ? "en" : "ko"} className="mt-5 text-2xl font-black leading-tight text-[#2b2119]">{translations.get(article.slug)?.title ?? article.title}</h2>
            <p lang={translations.has(article.slug) ? "en" : "ko"} className="mt-4 flex-1 leading-7 text-[#76685d]">{translations.get(article.slug)?.description ?? article.description}</p>
            <p className="mt-5 text-sm text-[#9a8775]">Source: {article.source.name}</p>
            <Link href={`/news/${article.slug}`} className="mt-6 font-black text-[#6f4e37] hover:underline">View article details →</Link>
          </article>)}</div> : <div className="rounded-[32px] border border-[#eadfce] bg-[#fffaf4] p-10 text-center">
          <h2 className="text-2xl font-black text-[#2b2119]">No verified articles yet</h2>
          <p className="mt-4 text-[#76685d]">We publish only when an article passes our source, originality, and safety checks.</p>
        </div>}
      </div>
    </section>
  </main>;
}
