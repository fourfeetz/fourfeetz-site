import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MusicPlayer from "./MusicPlayer";
import HaruMusicPlaylist from "@/components/HaruMusicPlaylist";
import HeroIllustrationCard from "@/components/HeroIllustrationCard";
import { musicTracks } from "@/lib/music";

const pageTitle = "FourFeetz Music & Original Soundtracks";
const pageDescription = "Listen to official character themes and original soundtracks used in FourFeetz films and shorts featuring HARU, LUNA, and the growing character universe.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "https://fourfeetz.com/music" },
  openGraph: { type: "website", title: pageTitle, description: pageDescription, url: "https://fourfeetz.com/music", images: [{ url: "/images/music-hero-v2.png", alt: "FourFeetz character music and original soundtracks" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/images/music-hero-v2.png"] },
};

const tools = [
  { name: "Suno", desc: "AI music composition" },
  { name: "ChatGPT", desc: "Lyrics and creative direction" },
  { name: "CapCut", desc: "Final mastering and synchronization" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{children}</p>;
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return <div className="mx-auto max-w-7xl"><SectionLabel>{eyebrow}</SectionLabel><h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{title}</h2>{desc ? <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">{desc}</p> : null}</div>;
}

export default function Page() {
  const featuredTrack = musicTracks.find((track) => track.featured)!;
  const originalTracks = musicTracks.filter((track) => !track.featured);

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div className="max-w-[900px]">
          <SectionLabel>FOURFEETZ MUSIC LIBRARY</SectionLabel>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Music</h1>
          <p className="mt-5 max-w-3xl text-2xl font-black leading-tight text-[#2b2119] md:text-4xl">Official character themes and original soundtracks.</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">Music created for the warmth, curiosity, quiet observations, and small adventures at the heart of the FourFeetz world.</p>
        </div>
        <HeroIllustrationCard src="/images/music-hero-v2.png" alt="FourFeetz music studio with microphone headphones MIDI keyboard and speaker" priority />
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[40px] border border-[#eadfce] bg-[#fffdf8] p-6 shadow-xl shadow-[#6f4e37]/10 md:grid-cols-[0.82fr_1.18fr] md:items-center md:p-10">
          <div className="relative aspect-square overflow-hidden rounded-[32px] bg-[#f6ebdd] shadow-2xl shadow-[#6f4e37]/15">
            <Image src={featuredTrack.cover} alt={`${featuredTrack.title} cover artwork`} fill priority sizes="(min-width: 768px) 38vw, 100vw" className="object-contain p-4" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b2119]/20 via-transparent to-transparent" />
          </div>
          <div className="p-2 md:p-6">
            <div className="flex flex-wrap items-center gap-3"><SectionLabel>Featured Music</SectionLabel><span className="rounded-full bg-[#6f4e37] px-3 py-1.5 text-[11px] font-black tracking-[0.16em] text-white">{featuredTrack.badge}</span></div>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{featuredTrack.title}</h2>
            <p className="mt-4 text-xl font-bold text-[#6f4e37]">{featuredTrack.artist}</p>
            <p className="mt-2 font-bold text-[#9a8775]">{featuredTrack.category} · {featuredTrack.duration} · Character: {featuredTrack.character}</p>
            <p className="mt-5 max-w-2xl leading-8 text-[#76685d]">{featuredTrack.description}</p>
            <MusicPlayer title={featuredTrack.title} src={featuredTrack.audio} />
            <div className="mt-8 flex flex-wrap gap-3"><Link href={`/music/${featuredTrack.slug}`} className="rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">Explore Official Theme</Link><Link href="/characters/haru" className="rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">Meet HARU</Link></div>
          </div>
        </div>
      </section>

      <HaruMusicPlaylist />

      <section id="tracks" className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeader eyebrow="Music Library" title="Original Soundtracks" desc="Original music created for FourFeetz films, shorts, and quiet character moments." />
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2">
          {originalTracks.map((track) => (
            <article key={track.slug} className="group relative overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10 md:p-7">
              <Link href={`/music/${track.slug}`} aria-label={`View ${track.title}`} className="absolute inset-0 z-0 rounded-[32px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#6f4e37]"><span className="sr-only">View {track.title}</span></Link>
              <div className="pointer-events-none relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3"><span className="rounded-full bg-[#f2e8dc] px-3 py-1.5 text-[10px] font-black tracking-[0.14em] text-[#6f4e37]">{track.badge}</span><span className="text-sm font-black text-[#9a8775]">{track.duration}</span></div>
                <h3 className="mt-5 text-2xl font-black tracking-tight text-[#2b2119] md:text-3xl">{track.title}</h3>
                <p className="mt-2 font-bold text-[#6f4e37]">{track.artist}</p>
                <p className="mt-4 leading-7 text-[#76685d]">{track.description}</p>
                <p className="mt-4 text-sm font-black text-[#a67c52]">Character: {track.character}</p>
                <div className="pointer-events-auto"><MusicPlayer title={track.title} src={track.audio} compact /></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20"><SectionHeader eyebrow="Made With" title="Sound Tools" /><div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-3">{tools.map((tool) => <article key={tool.name} className="rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><span className="grid size-12 place-items-center rounded-2xl bg-[#6f4e37] text-sm font-black text-white">AI</span><h3 className="mt-6 text-2xl font-black text-[#2b2119]">{tool.name}</h3><p className="mt-3 leading-7 text-[#76685d]">{tool.desc}</p></article>)}</div></section>

      <section className="border-t border-[#eadfce] bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.42fr_0.58fr]"><SectionLabel>Behind the Music</SectionLabel><div><h2 className="text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Behind the Sound</h2><div className="mt-6 space-y-5 text-lg leading-8 text-[#76685d]"><p>Every soundtrack begins with the emotional tone of the story.</p><p>FourFeetz starts with character, atmosphere, and cinematic pacing so the music supports emotion rather than competing with it.</p></div></div></div></section>
    </main>
  );
}
