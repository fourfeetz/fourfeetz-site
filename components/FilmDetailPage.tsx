"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Film, FilmImage, FilmVideo } from "@/lib/films";
import { films } from "@/lib/films";

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">{description}</p> : null}
    </div>
  );
}

function GalleryFrame({ item, className = "" }: { item: FilmImage; className?: string }) {
  return (
    <div className={`relative aspect-video overflow-hidden rounded-2xl bg-[#f6ebdd] ${className}`}>
      <Image src={item.image} alt={`${item.title} production still`} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2b2119]/55 via-transparent to-transparent" />
      <p className="absolute bottom-4 left-4 text-sm font-black uppercase tracking-[0.22em] text-white">{item.title}</p>
    </div>
  );
}

function VideoCard({ video }: { video: FilmVideo }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-[#eadfce] bg-[#fffdf8] shadow-sm">
      <video src={video.video} poster={video.thumbnail} controls playsInline preload="metadata" className="aspect-video h-auto w-full bg-black object-cover" aria-label={`Play ${video.title}`} />
      <div className="p-6 md:p-7">
        <h3 className="text-2xl font-black text-[#2b2119]">{video.title}</h3>
        <p className="mt-3 leading-7 text-[#76685d]">{video.description}</p>
      </div>
    </article>
  );
}

export default function FilmDetailPage({ film }: { film: Film }) {
  const [activeImage, setActiveImage] = useState<FilmImage | null>(null);
  const relatedFilms = films.filter((item) => item.slug !== film.slug).slice(0, 3);
  const details = [
    { label: "Category", value: film.category },
    { label: "Runtime", value: film.duration },
    { label: "Character", value: film.character },
    ...(film.release ? [{ label: "Release", value: film.release }] : []),
    ...(film.status ? [{ label: "Status", value: film.status }] : []),
    ...(film.language ? [{ label: "Language", value: film.language }] : []),
    ...(film.resolution ? [{ label: "Resolution", value: film.resolution }] : []),
  ];

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{film.category}</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">{film.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">{film.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#watch" className="rounded-full bg-[#6f4e37] px-6 py-3 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29]">Watch Film</Link>
            {film.timeline ? <Link href="#making" className="rounded-full border border-[#6f4e37]/40 bg-white px-6 py-3 font-black text-[#6f4e37] transition hover:border-[#6f4e37]">Behind the Scenes</Link> : null}
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-[32px] border border-[#eadfce] bg-white shadow-xl shadow-[#6f4e37]/10">
          <Image src={film.heroImage} alt={`${film.title} hero image`} fill priority sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
        </div>
      </section>

      <section id="watch" className="scroll-mt-24 border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          {film.badges?.length ? <div className="flex flex-wrap gap-2">{film.badges.map((badge, index) => <span key={badge} className={index === 0 ? "rounded-full bg-[#6f4e37] px-3 py-1.5 text-xs font-black tracking-[0.18em] text-white" : "rounded-full border border-[#6f4e37]/30 bg-[#fff7ea] px-3 py-1.5 text-xs font-black tracking-[0.14em] text-[#6f4e37]"}>{badge}</span>)}</div> : null}
          <h2 className={`${film.badges?.length ? "mt-5" : ""} text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl`}>{film.title}</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#76685d]">{film.watchDescription ?? film.description}</p>
          <div className="mt-8 overflow-hidden rounded-[32px] border border-[#eadfce] bg-black shadow-2xl shadow-[#6f4e37]/15">
            <video src={film.video} poster={film.thumbnail} controls playsInline preload="metadata" className="aspect-video h-auto w-full object-cover" aria-label={`Play ${film.title}`} />
          </div>

          <article className="mt-10 rounded-[32px] border border-[#eadfce] bg-[#fffaf4] p-7 shadow-sm md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#a67c52]">Film Details</p>
            <h3 className="mt-3 text-3xl font-black text-[#2b2119] md:text-4xl">Production Notes</h3>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {film.productionNotes.map((note) => <div key={`${note.label}-${note.value}`} className="rounded-2xl border border-[#eadfce] bg-white p-5"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{note.label}</p><p className="mt-3 leading-7 text-[#5f5248]">{note.value}</p></div>)}
            </div>
          </article>

          {film.moreVideos?.length ? <div className="mt-16"><SectionHeader eyebrow="Watch More" title="More Videos" /><div className="mt-8 grid gap-6 md:grid-cols-2">{film.moreVideos.map((video) => <VideoCard key={video.title} video={video} />)}</div></div> : null}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <SectionHeader eyebrow="Story" title="Synopsis" />
          <p className="text-xl leading-9 text-[#76685d]">{film.description}</p>
        </div>
      </section>

      {film.creativeGoals?.length ? <section className="px-6 pb-20"><SectionHeader eyebrow="Creative Direction" title="Goals & Character Design" /><div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2">{film.creativeGoals.map((item) => <article key={item.title} className="rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm"><h3 className="text-2xl font-black text-[#2b2119]">{item.title}</h3><p className="mt-4 leading-8 text-[#76685d]">{item.description}</p></article>)}</div></section> : null}

      {film.pipeline?.length ? <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeader eyebrow="AI Production Pipeline" title="From Reference to Final Film" /><div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-3">{film.pipeline.map((item, index) => <article key={item.title} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm"><p className="text-sm font-black text-[#a67c52]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-4 text-2xl font-black text-[#2b2119]">{item.title}</h3><p className="mt-3 leading-7 text-[#76685d]">{item.description}</p></article>)}</div></section> : null}

      <section className="px-6 py-20">
        <SectionHeader eyebrow="Film Data" title="Production Details" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">{details.map((detail) => <article key={detail.label} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{detail.label}</p><p className="mt-3 text-xl font-black text-[#2b2119]">{detail.value}</p></article>)}</div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeader eyebrow="Pipeline" title="Made With" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{film.tools.map((tool) => <article key={tool} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#6f4e37] text-sm font-black text-white">AI</div><h3 className="mt-5 text-xl font-black text-[#2b2119]">{tool}</h3></article>)}</div>
      </section>

      <section className="px-6 py-20">
        <SectionHeader eyebrow="Frames" title="Gallery" description={`Images from ${film.title}.`} />
        <div className={`mx-auto mt-8 grid max-w-7xl gap-4 ${film.gallery.length === 1 ? "max-w-4xl" : "sm:grid-cols-2 lg:grid-cols-3"}`}>{film.gallery.map((item) => <button key={item.title} type="button" onClick={() => setActiveImage(item)} className="text-left transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]"><GalleryFrame item={item} /></button>)}</div>
      </section>

      {film.timeline?.length ? <section id="making" className="scroll-mt-24 border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeader eyebrow="Making Story" title="Behind the Scenes" /><div className="mx-auto mt-10 max-w-4xl">{film.timeline.map((item, index) => <div key={item.step} className="grid grid-cols-[44px_1fr] gap-5"><div className="flex flex-col items-center"><div className="grid h-11 w-11 place-items-center rounded-full bg-[#6f4e37] text-sm font-black text-white">{index + 1}</div>{index < film.timeline!.length - 1 ? <div className="h-full min-h-10 w-px bg-[#eadfce]" /> : null}</div><article className="pb-8"><h3 className="text-2xl font-black text-[#2b2119]">{item.step}</h3><p className="mt-2 leading-7 text-[#76685d]">{item.description}</p></article></div>)}</div></section> : null}

      {film.relatedInsights?.length ? <section className="px-6 py-20"><SectionHeader eyebrow="Editorial" title="Related Insights" /><div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-3">{film.relatedInsights.map((item) => <Link key={item.href} href={item.href} className="rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><p className="text-sm font-black text-[#a67c52]">Insight</p><h3 className="mt-3 text-2xl font-black text-[#2b2119]">{item.title}</h3><p className="mt-3 text-[#76685d]">{item.description}</p></Link>)}</div></section> : null}

      {film.relatedResources?.length ? <section className="border-y border-[#eadfce] bg-white px-6 py-20"><SectionHeader eyebrow="Toolkit" title="Related Resources" /><div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-3">{film.relatedResources.map((item) => <Link key={item.href} href={item.href} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><h3 className="text-2xl font-black text-[#2b2119]">{item.title}</h3><p className="mt-3 text-[#76685d]">{item.description}</p></Link>)}</div></section> : null}

      <section className="px-6 py-20 md:py-24">
        <SectionHeader eyebrow="Continue Watching" title="Related Films" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-3">{relatedFilms.map((related) => <Link key={related.slug} href={`/works/${related.slug}`} className="group overflow-hidden rounded-3xl border border-[#eadfce] bg-white shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2"><div className="relative aspect-video overflow-hidden"><Image src={related.thumbnail} alt={`${related.title} thumbnail`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-200 group-hover:scale-[1.02]" /></div><div className="p-6"><p className="text-sm font-black text-[#a67c52]">{related.category} · {related.duration}</p><h3 className="mt-3 text-2xl font-black text-[#2b2119]">{related.title}</h3><p className="mt-3 line-clamp-3 text-[#76685d]">{related.description}</p></div></Link>)}</div>
      </section>

      {film.nextProject ? <section className="px-6 pb-20"><SectionHeader eyebrow="Next Project" title="Next Project" /><article className="mx-auto mt-8 max-w-7xl rounded-[40px] border border-[#eadfce] bg-white p-8 shadow-xl shadow-[#6f4e37]/10 md:p-12"><p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{film.nextProject.eyebrow}</p><h3 className="mt-4 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{film.nextProject.title}</h3><p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">{film.nextProject.description}</p></article></section> : null}

      {activeImage ? <div className="fixed inset-0 z-[100] grid place-items-center bg-[#2b2119]/80 p-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${activeImage.title} gallery preview`} onClick={() => setActiveImage(null)}><div className="w-full max-w-5xl rounded-[32px] border border-white/20 bg-[#fffdf8] p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}><GalleryFrame item={activeImage} className="rounded-[24px]" /><button type="button" onClick={() => setActiveImage(null)} className="mt-4 rounded-full bg-[#6f4e37] px-6 py-3 font-black text-white transition hover:bg-[#573b29]">Close</button></div></div> : null}
    </main>
  );
}
