import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsArticle, getNewsArticles } from "@/lib/news";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return getNewsArticles().map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getNewsArticle((await params).slug);
  if (!article) return {};
  return {
    title: `News: ${article.source.name}`,
    description: "Read this verified FourFeetz news article in Korean, with original source links.",
    alternates: { canonical: `/news/${article.slug}` },
    robots: { index: false, follow: true },
  };
}
export default async function EnglishNewsDetail({ params }: Props) {
  const article = getNewsArticle((await params).slug);
  if (!article) notFound();
  return <main className="mx-auto max-w-4xl px-6 py-16">
    <Link href="/news" className="font-black text-[#6f4e37]">← All news</Link>
    <p className="mt-10 text-sm font-black uppercase tracking-widest text-[#a67c52]">Published in Korean</p>
    <h1 lang="ko" className="mt-4 text-4xl font-black text-[#2b2119]">{article.title}</h1>
    <p lang="ko" className="mt-6 text-lg leading-8 text-[#76685d]">{article.description}</p>
    <p className="mt-6 text-[#76685d]">Source: {article.source.name} · Verified quality score: {article.quality.total}/100</p>
    <div className="mt-10 flex flex-wrap gap-4">
      <Link href={`/ko/news/${article.slug}`} hrefLang="ko" className="rounded-full bg-[#6f4e37] px-6 py-3 font-black text-white">Read the full article in Korean →</Link>
      <a href={article.source.url} target="_blank" rel="nofollow noopener noreferrer" className="rounded-full border border-[#6f4e37] px-6 py-3 font-black text-[#6f4e37]">Original source ↗</a>
    </div>
    <p className="mt-8 text-sm text-[#76685d]">This page does not claim to be an English translation of the article.</p>
  </main>;
}
