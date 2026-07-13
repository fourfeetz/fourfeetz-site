import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroIllustrationCard from "@/components/HeroIllustrationCard";

export const metadata: Metadata = {
  title: "FourFeetz Studios | Original AI Films, Characters and Creative Knowledge",
  description:
    "FourFeetz Studios creates original AI films, memorable characters, music, and practical creative knowledge for storytellers and AI creators.",
  alternates: {
    canonical: "/studio",
  },
};

const createCards = [
  {
    title: "Original AI Films",
    desc: "Character-led short films, cinematic experiments, and visual stories designed to feel memorable rather than disposable.",
    href: "/works",
  },
  {
    title: "Original Characters",
    desc: "A growing cast of distinct FourFeetz characters designed for recurring stories, education, and future products.",
    href: "/characters",
  },
  {
    title: "Music & Sound",
    desc: "Original themes, background music, sound design, and character-focused audio for films and digital content.",
    href: "/music",
  },
  {
    title: "Creative Knowledge",
    desc: "Practical guides, workflows, reviews, prompts, and production resources for AI creators.",
    href: "/insights",
  },
];

const process = [
  { title: "Story & Concept", desc: "Define the emotional idea, audience, format, and reason the story should exist." },
  { title: "Character & Reference", desc: "Build character sheets, visual anchors, moodboards, and continuity notes." },
  { title: "Image Production", desc: "Create first frames, key visuals, thumbnails, and scene references." },
  { title: "AI Video", desc: "Generate controlled movement with camera notes, prompts, and shot-by-shot review." },
  { title: "Music & Editing", desc: "Shape rhythm, sound, titles, pacing, color, and the final emotional arc." },
  { title: "Publish & Learn", desc: "Release across platforms, review performance, and improve the next production." },
];

const principles = [
  { number: "01", title: "Story Before Tools", desc: "We use technology to serve the story, not the other way around." },
  { number: "02", title: "Consistency Builds Trust", desc: "Characters, visuals, sound, and tone should feel connected across every piece of work." },
  { number: "03", title: "Make It Useful", desc: "Every experiment should create either a better story, a clearer workflow, or practical value for other creators." },
];

const characters = [
  { name: "HARU", href: "/characters/haru", image: "/images/characters/haru/portrait.png" },
  { name: "PORI", href: "/characters/pori", image: "/images/characters/pori/portrait.png" },
  { name: "LUNA", href: "/characters/luna", image: "/images/characters/luna/portrait.png" },
  { name: "HUGO", href: "/characters/hugo", image: "/images/characters/hugo/portrait.png" },
  { name: "OLI", href: "/characters/oli", image: "/images/characters/oli/portrait.png" },
  { name: "MILO", href: "/characters/milo", image: "/images/characters/milo/portrait.png" },
];

const featured = [
  {
    title: "HARU First Journey",
    desc: "The first original FourFeetz AI short film.",
    href: "/works",
    image: "/images/works/haru-first-journey/hero.png",
  },
  {
    title: "How HARU Was Created",
    desc: "A behind-the-scenes look at character design and production.",
    href: "/insights/how-haru-was-created",
    image: "/images/insights/haru-character-sheet.png",
  },
  {
    title: "AI Video Production Workflow",
    desc: "A repeatable production system from concept to publishing.",
    href: "/insights/ai-video-workflow",
    image: "/images/insights/ai-video-workflow.png",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{children}</p>;
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-7xl">
      {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
      <h2 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{title}</h2>
      {desc ? <p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">{desc}</p> : null}
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-28">
        <div className="max-w-[900px]">
          <SectionLabel>FOURFEETZ STUDIOS</SectionLabel>
          <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">
            Creating original AI stories that people remember.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#76685d] md:text-xl md:leading-9">
            FourFeetz Studios creates original AI films, memorable characters, music, and practical creative knowledge for storytellers around the world.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/works" className="rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
              Explore Our Work
            </Link>
            <Link href="/characters" className="rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
              Meet the Characters
            </Link>
          </div>
        </div>
        <HeroIllustrationCard src="/images/studio-hero-v2.png" alt="FourFeetz AI studio with editing monitor tablet camera controller and coffee" priority />
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.58fr_0.42fr] md:items-center">
          <div>
            <SectionLabel>OUR MISSION</SectionLabel>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">A small studio building a lasting creative universe.</h2>
            <p className="mt-6 text-lg leading-8 text-[#76685d]">
              We combine storytelling, character design, AI image generation, video production, music, and practical education into one connected creative system. Our goal is not to chase every new tool. It is to create original work with clarity, warmth, consistency, and emotional value.
            </p>
          </div>
          <div className="rounded-[36px] border border-[#eadfce] bg-[#fffdf8] p-7 shadow-xl shadow-[#6f4e37]/10">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Connected System</p>
            <div className="mt-6 grid gap-3">
              {["Story", "Characters", "AI Video", "Music", "Education"].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-5 py-4 text-lg font-black text-[#2b2119] shadow-sm">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <SectionHeader title="What We Create" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {createCards.map((card) => (
            <Link key={card.title} href={card.href} className="rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <h3 className="text-2xl font-black text-[#2b2119]">{card.title}</h3>
              <p className="mt-4 leading-7 text-[#76685d]">{card.desc}</p>
              <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#a67c52]">Open</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-28">
        <SectionHeader eyebrow="OUR PROCESS" title="From idea to finished story." />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-3 xl:grid-cols-6">
          {process.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <p className="text-sm font-black text-[#a67c52]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-black leading-tight text-[#2b2119]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#76685d]">{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <SectionHeader eyebrow="OUR PRINCIPLES" title="How we choose what to make." />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-3">
          {principles.map((principle) => (
            <article key={principle.title} className="rounded-[36px] border border-[#eadfce] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#a67c52]">{principle.number}</p>
              <h3 className="mt-8 text-3xl font-black tracking-tight text-[#2b2119]">{principle.title}</h3>
              <p className="mt-4 text-lg leading-8 text-[#76685d]">{principle.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-28">
        <SectionHeader title="A growing universe of characters and stories." />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {characters.map((character) => (
            <Link key={character.name} href={character.href} className="group rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f6ebdd]">
                <Image src={character.image} alt={character.name + " studio portrait"} fill sizes="(min-width: 1280px) 16vw, (min-width: 768px) 30vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-4 text-xl font-black text-[#2b2119]">{character.name}</h3>
            </Link>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl">
          <Link href="/characters" className="inline-flex rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
            Explore Characters
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <SectionHeader title="Featured Work" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-3">
          {featured.map((item) => (
            <Link key={item.title} href={item.href} className="group overflow-hidden rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#f6ebdd]">
                <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 32vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-2xl font-black text-[#2b2119]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#76685d]">{item.desc}</p>
              <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#a67c52]">Open</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto rounded-[40px] border border-[#eadfce] bg-white p-8 shadow-xl shadow-[#6f4e37]/10 md:flex md:max-w-7xl md:items-center md:justify-between md:gap-10 md:p-12">
          <div>
            <SectionLabel>FOLLOW THE STUDIO</SectionLabel>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Follow the next FourFeetz story.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">
              Discover new films, characters, music, production notes, and creative resources as the studio continues to grow.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-0">
            <Link href="/works" className="rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
              Explore Works
            </Link>
            <Link href="/insights" className="rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
              Visit Insights
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

