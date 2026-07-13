import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MusicPlayer from "./MusicPlayer";
import HeroIllustrationCard from "@/components/HeroIllustrationCard";

export const metadata: Metadata = {
  title: "Music | FourFeetz Studios",
  description: "Original soundtracks created for the FourFeetz universe.",
};

const tracks = [
  { number: "1", slug: "haru-theme", title: "HARU Theme", duration: "2:14", audio: "/audio/haru/haru-theme.mp3" },
  { number: "2", slug: "golden-summer-breeze", title: "Golden Summer Breeze", duration: "2:32", audio: "/audio/music/golden-summer-breeze.mp3" },
  { number: "3", slug: "country-road", title: "Country Road", duration: "In Production" },
  { number: "4", slug: "golden-sunset", title: "Golden Sunset", duration: "In Production" },
  { number: "5", slug: "coming-home", title: "Coming Home", duration: "In Production" },
  { number: "6", slug: "end-credits", title: "End Credits", duration: "In Production" },
];

const tools = [
  { name: "Suno", desc: "AI music composition" },
  { name: "ChatGPT", desc: "Lyrics and creative direction" },
  { name: "CapCut", desc: "Final mastering and synchronization" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{children}</p>;
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-7xl">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{title}</h2>
      {desc ? <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">{desc}</p> : null}
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div className="max-w-[900px]">
          <SectionLabel>ORIGINAL SOUNDTRACKS</SectionLabel>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Music</h1>
          <p className="mt-5 max-w-3xl text-2xl font-black leading-tight text-[#2b2119] md:text-4xl">
            Original soundtracks created for the FourFeetz universe.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">
            Every FourFeetz story begins with emotion. Music is written to support the journey, the atmosphere, and each unforgettable moment.
          </p>
        </div>
        <HeroIllustrationCard src="/images/music-hero-v2.png" alt="FourFeetz music studio with microphone headphones MIDI keyboard and speaker" priority />
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[40px] border border-[#eadfce] bg-[#fffdf8] p-6 shadow-xl shadow-[#6f4e37]/10 md:grid-cols-[0.82fr_1.18fr] md:items-center md:p-10">
          <div className="relative aspect-square overflow-hidden rounded-[32px] bg-[#f6ebdd] shadow-2xl shadow-[#6f4e37]/15">
            <Image src="/images/music/tracks/haru-theme.png" alt="HARU Theme album cover" fill priority sizes="(min-width: 768px) 38vw, 100vw" className="object-contain p-4" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b2119]/20 via-transparent to-transparent" />
          </div>
          <div className="p-2 md:p-6">
            <SectionLabel>Featured Soundtrack</SectionLabel>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">HARU Theme</h2>
            <p className="mt-4 text-xl font-bold text-[#6f4e37]">Original Motion Picture Soundtrack</p>
            <p className="mt-3 text-lg font-bold text-[#9a8775]">2:14</p>
            <MusicPlayer title="HARU Theme" src="/audio/haru/haru-theme.mp3" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/works/haru-first-journey" className="rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
                View Film
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="tracks" className="px-6 py-20">
        <SectionHeader eyebrow="Track List" title="HARU First Journey" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-3">
          {tracks.map((track) => (
            <article key={track.title} className="grid grid-cols-[40px_1fr_auto] items-center gap-4 rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <p className="text-sm font-black text-[#a67c52]">{track.number}</p>
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-[#f7f2ea] text-[10px] font-black uppercase text-[#6f4e37]" aria-hidden="true">Play</span>
                <h3 className="text-xl font-black text-[#2b2119]"><Link href={`/music/${track.slug}`} className="transition hover:text-[#6f4e37]">{track.title}</Link></h3>
              </div>
              <p className="text-sm font-bold text-[#9a8775]">{track.duration || ""}</p>
              {track.audio ? (
                <div className="col-span-full">
                  <MusicPlayer title={track.title} src={track.audio} compact />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeader eyebrow="Made With" title="Sound Tools" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-3">
          {tools.map((tool) => (
            <article key={tool.name} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#6f4e37] text-sm font-black text-white">AI</span>
              <h3 className="mt-6 text-2xl font-black text-[#2b2119]">{tool.name}</h3>
              <p className="mt-3 leading-7 text-[#76685d]">{tool.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.42fr_0.58fr] md:items-start">
          <SectionLabel>Behind the Music</SectionLabel>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Behind the Sound</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#76685d]">
              <p>Every soundtrack begins with the emotional tone of the story.</p>
              <p>Instead of composing music first, FourFeetz starts with character, atmosphere, and cinematic pacing.</p>
              <p>Music is created to support emotion rather than compete with it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <article className="mx-auto max-w-7xl rounded-[40px] border border-[#eadfce] bg-white p-8 shadow-xl shadow-[#6f4e37]/10 md:p-12">
          <SectionLabel>Next Soundtrack</SectionLabel>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">PORI Original Soundtrack</h2>
          <p className="mt-4 text-xl font-black text-[#6f4e37]">In Production</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">The next musical journey is already in production.</p>
        </article>
      </section>
    </main>
  );
}


