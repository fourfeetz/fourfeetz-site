import type { Metadata } from "next";
import EnglishHome from "@/app/page";
import Link from "next/link";
import { getNewsArticles } from "@/lib/news";
import { loadEnglishNewsTranslations } from "@/lib/news-english";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: { absolute: "FourFeetz Studios | Original Animal Character Studio" },
  alternates: englishLanguageAlternates("/en", "/ko"),
};

export default function Page() {
  const articles = getNewsArticles().slice(0, 3);
  const translations = loadEnglishNewsTranslations(articles);
  const newsSection = <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">FourFeetz Editorial Desk</p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <div><h2 className="text-5xl font-black tracking-tight text-[#2b2119] md:text-6xl">Latest News</h2>
        <p className="mt-4 text-lg text-[#76685d]">Verified pet industry, veterinary and creative AI updates.</p></div>
        <Link href="/news" className="font-black text-[#6f4e37] hover:underline">All news →</Link>
      </div>
      {articles.length ? <div className="mt-8 grid gap-5 md:grid-cols-3">{articles.map(article => {
        const translation = translations.get(article.slug);
        return <Link key={article.slug} href={translation ? `/news/${article.slug}` : `/ko/news/${article.slug}`} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition hover:shadow-md">
          <p className="text-xs font-bold uppercase text-[#a67c52]">{translation ? "English edition" : "Korean article"} · {new Intl.DateTimeFormat("en-US", {dateStyle:"medium"}).format(new Date(article.publishedAt))}</p>
          <h3 lang={translation ? "en" : "ko"} className="mt-4 text-xl font-black leading-snug text-[#2b2119]">{translation?.title ?? article.title}</h3>
          <p lang={translation ? "en" : "ko"} className="mt-3 line-clamp-3 text-[#76685d]">{translation?.description ?? article.description}</p>
          <span className="mt-5 inline-block font-bold text-[#6f4e37]">Read article →</span>
        </Link>;
      })}</div> : <p className="mt-8 text-[#76685d]">No verified articles are available yet.</p>}
    </div>
  </section>;
  return <EnglishHome newsSection={newsSection} />;
}
