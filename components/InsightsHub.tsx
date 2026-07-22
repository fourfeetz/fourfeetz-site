"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import HeroIllustrationCard from "./HeroIllustrationCard";
import { getPublishedInsightArticles, type InsightArticle } from "@/lib/insights";

const howHaruImage = "/images/insights/premium/how-haru-hero.png";
const featuredInsight = { category: "Behind the Scenes", title: "How HARU Was Created", desc: "The official production story behind HARU: visual identity, character drift, reference sheets, first-shot images, motion, and continuity review.", meta: "24 min read", date: "July 2026", href: "/insights/how-haru-was-created", image: howHaruImage };
const categories = ["All", "AI Video", "AI Music", "Tools", "Prompts", "Characters", "Design", "Workflow", "Images", "Filmmaking", "Behind the Scenes", "Social Media"];
const articles = getPublishedInsightArticles();
const guides = articles.slice(0, 6);
const slugifyTag = (value: string) => value.toLowerCase().replace(/\s+/g, "-");
const normalize = (value: string) => value.trim().toLowerCase();

function Thumbnail({ src, alt }: { src: string; alt: string }) {
  return <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-[#f6ebdd]"><Image src={src} alt={alt} fill sizes="(min-width:1280px)30vw,(min-width:768px)45vw,100vw" className="object-cover transition-transform duration-200 group-hover:scale-[1.02]" /></div>;
}

export default function InsightsHub() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const requestedTag = searchParams.get("tag") ?? "all";
  const requestedQuery = searchParams.get("q") ?? "";
  const activeTag = requestedTag;
  const query = requestedQuery;

  function updateUrl(nextTag: string, nextQuery: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (nextTag === "all") params.delete("tag");
    else params.set("tag", nextTag);
    if (nextQuery.trim()) params.set("q", nextQuery.trim());
    else params.delete("q");
    const next = params.toString();
    router.push(next ? `${pathname}?${next}` : pathname, { scroll: false });
  }

  const filtered = useMemo(() => articles.filter((article: InsightArticle) => {
    const tagMatch = activeTag === "all" || [article.category, ...article.tags].some((tag) => slugifyTag(tag) === activeTag);
    const haystack = normalize([article.title, article.description, article.category, ...article.tags, ...article.keywords].join(" "));
    return tagMatch && (!normalize(query) || haystack.includes(normalize(query)));
  }), [activeTag, query]);

  return <main>
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20"><div><p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">CREATOR KNOWLEDGE HUB</p><h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Insights</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">Production-tested guides, honest tool reviews, HARU case studies and practical workflows from FourFeetz Studios.</p></div><HeroIllustrationCard src="/images/insights-hero-v2.png" alt="Editorial research tools for FourFeetz creative knowledge" priority /></section>

    <section className="border-y border-[#eadfce] bg-white px-6 py-16 md:py-20"><Link href={featuredInsight.href} className="mx-auto grid max-w-7xl gap-8 rounded-[40px] border border-[#eadfce] bg-[#fffdf8] p-8 shadow-xl shadow-[#6f4e37]/10 transition duration-200 hover:-translate-y-[3px] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] md:grid-cols-[minmax(0,3fr)_minmax(260px,2fr)] md:items-center md:p-10 lg:gap-10 lg:p-12"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">{featuredInsight.category}</p><h2 className="mt-4 max-w-4xl text-4xl font-black text-[#2b2119] md:text-5xl">{featuredInsight.title}</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">{featuredInsight.desc}</p><p className="mt-6 text-sm font-bold text-[#9a8775]">{featuredInsight.meta} · {featuredInsight.date}</p><span className="mt-8 inline-flex rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white">Read Article</span></div><div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-[#d8c3ad] bg-[#f2e8dc] shadow-lg shadow-[#6f4e37]/10 md:h-full md:min-h-[260px] md:max-h-[320px] md:aspect-auto"><Image src={featuredInsight.image} alt="HARU in the FourFeetz AI animation studio surrounded by character references, camera and editing tools" fill sizes="(min-width:1280px)36vw,(min-width:768px)40vw,100vw" className="object-cover" style={{ objectPosition: "50% 48%" }} /></div></Link></section>

    <section className="px-6 py-12"><div className="mx-auto max-w-7xl"><div className="relative max-w-2xl"><Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#a67c52]" aria-hidden="true" /><input value={query} onChange={(e)=>updateUrl(activeTag,e.target.value)} placeholder="Search titles, summaries, tags, tools and HARU workflows" aria-label="Search Insights" className="w-full rounded-full border border-[#d8c3ad] bg-white py-4 pl-14 pr-12 text-[#2b2119] shadow-sm outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/30" />{query ? <button type="button" onClick={()=>updateUrl(activeTag,"")} aria-label="Clear search" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-[#6f4e37] hover:bg-[#f2e8dc]"><X className="h-4 w-4" /></button> : null}</div><div className="mt-6 flex flex-wrap gap-2">{categories.map((category)=>{const slug=slugifyTag(category);const active=activeTag===slug;return <button key={category} type="button" aria-pressed={active} onClick={()=>updateUrl(slug,query)} className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.16em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] ${active ? "border-[#6f4e37] bg-[#6f4e37] text-white" : "border-[#d8c3ad] bg-white text-[#6f4e37] hover:border-[#6f4e37]"}`}>{category}</button>})}</div></div></section>

    <section className="px-6 pb-20"><div className="mx-auto flex max-w-7xl items-end justify-between gap-6"><div><p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Knowledge Library</p><h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-6xl">{filtered.length} {filtered.length===1?"Article":"Articles"}</h2></div>{activeTag!=="all"||query?<button type="button" onClick={()=>updateUrl("all","")} className="text-sm font-black text-[#6f4e37]">Reset filters</button>:null}</div>{filtered.length?<div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">{filtered.map((article)=><Link key={article.href} href={article.href} className="group flex h-full flex-col rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37]"><Thumbnail src={article.image} alt={`${article.title} thumbnail`} /><div className="flex flex-1 flex-col pt-5"><p className="text-sm font-black text-[#a67c52]">{article.category}</p><h3 className="mt-3 text-2xl font-black leading-tight text-[#2b2119]">{article.title}</h3><p className="mt-3 flex-1 leading-7 text-[#76685d]">{article.description}</p><div className="mt-5 flex flex-wrap gap-2">{article.tags.slice(0,3).map(tag=><span key={tag} className="rounded-full bg-[#f2e8dc] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#6f4e37]">{tag}</span>)}</div><div className="mt-6 flex items-center justify-between text-sm font-bold"><span className="text-[#9a8775]">{article.readTime}</span><span className="text-[#6f4e37]">Read Article →</span></div></div></Link>)}</div>:<div className="mx-auto mt-8 max-w-7xl rounded-[32px] border border-[#eadfce] bg-white p-10 text-center"><h3 className="text-2xl font-black text-[#2b2119]">No matching articles</h3><p className="mt-3 text-[#76685d]">Try a broader search or choose another tag.</p></div>}</section>

    <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Evergreen</p><h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-6xl">Popular Guides</h2><div className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-6">{guides.map((guide)=><Link key={guide.href} href={guide.href} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-[3px] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37]"><h3 className="text-xl font-black text-[#2b2119]">{guide.title}</h3><p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#a67c52]">Open Guide</p></Link>)}</div></div></section>
  </main>;
}
