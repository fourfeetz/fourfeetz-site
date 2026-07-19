"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUp, Check, Copy, List, Share2, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { siteContent } from "@/lib/contentIndex";

type Heading = { id: string; text: string };

export default function InsightsArticleExperience() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [tocOpen, setTocOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [readingTime, setReadingTime] = useState(1);
  const isArticle = pathname.startsWith("/insights/");

  const insights = useMemo(() => siteContent.filter((item) => item.type === "Insights" && item.detail), []);
  const currentIndex = insights.findIndex((item) => item.href === pathname);
  const previous = currentIndex > 0 ? insights[currentIndex - 1] : undefined;
  const next = currentIndex >= 0 && currentIndex < insights.length - 1 ? insights[currentIndex + 1] : undefined;
  const popular = insights.filter((item) => item.href !== pathname).slice(0, 4);

  useEffect(() => {
    if (!isArticle) return;
    const article = document.querySelector("main article") ?? document.querySelector("main");
    if (!article) return;
    const nodes = Array.from(article.querySelectorAll<HTMLHeadingElement>("h2"));
    const collected = nodes.map((heading, index) => {
      const id = heading.id || `article-section-${index + 1}`;
      heading.id = id;
      heading.classList.add("scroll-mt-28");
      return { id, text: heading.textContent?.trim() || `Section ${index + 1}` };
    });
    setHeadings(collected);
    const words = (article.textContent ?? "").trim().split(/\s+/).filter(Boolean).length;
    setReadingTime(Math.max(1, Math.ceil(words / 220)));
  }, [isArticle, pathname]);

  useEffect(() => {
    if (!isArticle) return;
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, Math.max(0, (window.scrollY / total) * 100)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [isArticle]);

  if (!isArticle) return null;

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  async function share() {
    if (navigator.share) await navigator.share({ title: document.title, url: window.location.href });
    else await copyLink();
  }

  return <>
    <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-[#f2e8dc]" aria-hidden="true"><div className="h-full bg-[#6f4e37]" style={{ width: `${progress}%` }} /></div>
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-[#d8c3ad] bg-white/95 p-2 shadow-xl backdrop-blur md:bottom-7 md:right-7">
      <button type="button" onClick={()=>setTocOpen(true)} aria-label="Open table of contents" className="grid h-10 w-10 place-items-center rounded-full text-[#6f4e37] hover:bg-[#f2e8dc]"><List className="h-5 w-5" /></button>
      <button type="button" onClick={copyLink} aria-label="Copy article link" className="grid h-10 w-10 place-items-center rounded-full text-[#6f4e37] hover:bg-[#f2e8dc]">{copied?<Check className="h-5 w-5"/>:<Copy className="h-5 w-5"/>}</button>
      <button type="button" onClick={share} aria-label="Share article" className="grid h-10 w-10 place-items-center rounded-full text-[#6f4e37] hover:bg-[#f2e8dc]"><Share2 className="h-5 w-5" /></button>
      <button type="button" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-full bg-[#6f4e37] text-white hover:bg-[#573b29]"><ArrowUp className="h-5 w-5" /></button>
    </div>

    {tocOpen?<div className="fixed inset-0 z-[80] bg-[#2b2119]/35 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(e)=>{if(e.currentTarget===e.target)setTocOpen(false);}}><aside role="dialog" aria-modal="true" aria-label="Table of contents" className="ml-auto flex h-full w-full max-w-md flex-col rounded-[32px] bg-[#fffdf8] p-6 shadow-2xl"><div className="flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#a67c52]">On this page</p><p className="mt-2 text-sm font-bold text-[#76685d]">{readingTime} min read · FourFeetz Studios</p></div><button onClick={()=>setTocOpen(false)} aria-label="Close table of contents" className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#6f4e37]"><X className="h-5 w-5"/></button></div><nav className="mt-7 grid gap-1 overflow-y-auto">{headings.map((heading)=><a key={heading.id} href={`#${heading.id}`} onClick={()=>setTocOpen(false)} className="rounded-xl px-4 py-3 text-sm font-bold leading-6 text-[#76685d] hover:bg-white hover:text-[#2b2119]">{heading.text}</a>)}</nav></aside></div>:null}

    <section className="border-t border-[#eadfce] bg-[#fffdf8] px-6 py-16"><div className="mx-auto max-w-7xl"><div className="grid gap-4 md:grid-cols-2">{previous?<Link href={previous.href} className="group rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm hover:shadow-lg"><p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#a67c52]"><ArrowLeft className="h-4 w-4"/>Previous Article</p><h2 className="mt-3 text-xl font-black text-[#2b2119]">{previous.title}</h2></Link>:<div/>}{next?<Link href={next.href} className="group rounded-3xl border border-[#eadfce] bg-white p-6 text-right shadow-sm hover:shadow-lg"><p className="flex items-center justify-end gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#a67c52]">Next Article<ArrowRight className="h-4 w-4"/></p><h2 className="mt-3 text-xl font-black text-[#2b2119]">{next.title}</h2></Link>:null}</div><div className="mt-12 flex items-center justify-between"><h2 className="text-3xl font-black text-[#2b2119]">People also read</h2><Link href="/insights" className="text-sm font-black text-[#6f4e37]">All Insights</Link></div><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{popular.map((item)=><Link key={item.href} href={item.href} className="rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-[3px] hover:shadow-lg"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#a67c52]">{item.category}</p><h3 className="mt-3 font-black leading-6 text-[#2b2119]">{item.title}</h3></Link>)}</div></div></section>
  </>;
}
