import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MusicPlayer from "../MusicPlayer";
import { films } from "@/lib/films";
import { getMusicTrack, musicTracks } from "@/lib/music";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return musicTracks.map((track) => ({ slug: track.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const track = getMusicTrack((await params).slug);
  if (!track) return {};
  const title = `${track.title} | FourFeetz Music`;
  return {
    title: { absolute: title },
    description: track.description,
    alternates: { canonical: `/music/${track.slug}` },
    openGraph: { title, description: track.description, images: [{ url: track.cover, alt: `${track.title} cover artwork` }] },
    twitter: { card: "summary_large_image", title, description: track.description, images: [track.cover] },
  };
}

function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div><p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{eyebrow}</p><h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{title}</h2></div>;
}

export default async function Page({ params }: Props) {
  const track = getMusicTrack((await params).slug);
  if (!track) notFound();

  const relatedMusic = musicTracks.filter((item) => item.slug !== track.slug).slice(0, 3);
  const relatedFilms = track.character ? films.filter((film) => film.character === track.character).slice(0, 3) : [];
  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: track.title,
    duration: track.duration,
    image: track.cover,
    byArtist: { "@type": "Organization", name: track.artist },
    url: `https://fourfeetz.com/music/${track.slug}`,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div>
          {track.badge ? <span className="inline-flex rounded-full bg-[#6f4e37] px-4 py-2 text-xs font-black tracking-[0.18em] text-white shadow-lg shadow-[#6f4e37]/15">{track.badge}</span> : null}
          <p className={`${track.badge ? "mt-6" : ""} text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]`}>{track.category}</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-[#2b2119] md:text-7xl">{track.title}</h1>
          <p className="mt-4 text-xl font-black text-[#6f4e37]">{track.artist}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">{track.description}</p>
          {track.audio ? <MusicPlayer title={track.title} src={track.audio} /> : <p className="mt-8 inline-flex rounded-full border border-[#d8c3ad] bg-white px-5 py-3 text-sm font-black text-[#6f4e37]">Preview in production</p>}
        </div>
        <div className="relative aspect-square overflow-hidden rounded-[32px] border border-[#eadfce] bg-white shadow-xl shadow-[#6f4e37]/10"><Image src={track.cover} alt={`${track.title} cover artwork`} fill priority sizes="(min-width: 768px) 560px, 100vw" className="object-contain p-5" /></div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[{ label: "Duration", value: track.duration }, { label: "Character", value: track.character ?? "FourFeetz Universe" }, { label: "Category", value: track.category }, { label: "Status", value: track.status }].map((detail) => <article key={detail.label} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{detail.label}</p><p className="mt-3 text-xl font-black text-[#2b2119]">{detail.value}</p></article>)}
        </div>
      </section>

      <section className="px-6 py-20"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.42fr_0.58fr]"><Heading eyebrow="Mood" title="Emotional Direction" /><p className="text-2xl font-black leading-9 text-[#2b2119]">{track.mood}</p></div></section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-7xl"><Heading eyebrow="Production" title="Behind the Track" /><p className="mt-6 max-w-3xl text-lg leading-8 text-[#76685d]">{track.production}</p>{track.prompt ? <div className="mt-8 rounded-3xl bg-[#2b2119] p-7 text-[#fffdf8]"><p className="text-sm font-black uppercase tracking-[0.2em] text-[#d8b892]">Music Prompt</p><p className="mt-4 font-mono leading-8">{track.prompt}</p></div> : null}</div></section>

      <section className="px-6 py-20"><div className="mx-auto max-w-7xl"><Heading eyebrow="Arrangement" title={track.instruments?.length ? "Instruments & Usage" : "Designed For"} /><div className="mt-8 grid gap-5 md:grid-cols-2">{track.instruments?.length ? <article className="rounded-3xl border border-[#eadfce] bg-white p-7"><h3 className="text-2xl font-black text-[#2b2119]">Instruments</h3><ul className="mt-4 space-y-3 text-[#76685d]">{track.instruments.map((item) => <li key={item}>- {item}</li>)}</ul></article> : null}<article className="rounded-3xl border border-[#eadfce] bg-white p-7"><h3 className="text-2xl font-black text-[#2b2119]">Designed For</h3><ul className="mt-4 space-y-3 text-[#76685d]">{track.usage.map((item) => <li key={item}>- {item}</li>)}</ul></article></div></div></section>

      {relatedFilms.length ? <section className="border-y border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto max-w-7xl"><Heading eyebrow="Picture & Sound" title="Related Films" /><div className="mt-8 grid gap-5 md:grid-cols-3">{relatedFilms.map((film) => <Link key={film.slug} href={`/works/${film.slug}`} className="group overflow-hidden rounded-3xl border border-[#eadfce] bg-[#fffdf8] shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2"><div className="relative aspect-video overflow-hidden"><Image src={film.thumbnail} alt={`${film.title} thumbnail`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-200 group-hover:scale-[1.02]" /></div><div className="p-6"><p className="text-sm font-black text-[#a67c52]">{film.category} · {film.duration}</p><h3 className="mt-3 text-2xl font-black text-[#2b2119]">{film.title}</h3><p className="mt-3 line-clamp-3 text-[#76685d]">{film.description}</p></div></Link>)}</div></div></section> : null}

      <section className="px-6 py-20"><div className="mx-auto max-w-7xl"><Heading eyebrow="Related Music" title="Continue Listening" /><div className="mt-8 grid gap-5 md:grid-cols-3">{relatedMusic.map((item) => <Link key={item.slug} href={`/music/${item.slug}`} className="rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><p className="text-sm font-black text-[#a67c52]">{item.badge ?? item.status}</p><h3 className="mt-3 text-2xl font-black text-[#2b2119]">{item.title}</h3><p className="mt-3 text-[#76685d]">{item.description}</p></Link>)}</div></div></section>
    </main>
  );
}
