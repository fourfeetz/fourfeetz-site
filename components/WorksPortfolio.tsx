"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeroIllustrationCard from "./HeroIllustrationCard";
import { relaxingHomeFilm } from "@/lib/films";

const mainFilm = {
  title: "HARU — First Journey",
  src: "/videos/films/haru/haru-first-journey.mp4",
  poster: "/images/works/haru-first-journey/video-thumbnails/haru-first-journey.jpg",
};

const moreVideos = [
  {
    title: "Window Scene",
    description: "HARU quietly enjoys the countryside while looking through the open window.",
    src: "/videos/films/haru/haru-window-scene.mp4",
    poster: "/images/works/haru-first-journey/video-thumbnails/haru-window-scene.jpg",
  },
  {
    title: "First Step Toward Home",
    description: "HARU takes the first step into a new home, marking the beginning of the journey.",
    src: "/videos/films/haru/haru_steps_toward_house.mp4",
    poster: "/images/works/haru-first-journey/video-thumbnails/haru-steps-toward-house.jpg",
  },
];

const productionNotes = [
  { label: "Character", value: "HARU (Original FourFeetz Character)" },
  { label: "AI Workflow", value: "Google Flow · Runway · Kling AI · ChatGPT · Suno" },
  { label: "Enhancement", value: "Aleph 2.0 Relighting" },
  { label: "Goal", value: "Create a warm, realistic cinematic atmosphere with enhanced natural light and more film-like depth." },
];

const synopsis =
  "A young rescue puppy leaves the familiar world behind and begins a quiet journey toward a new home. Every road, every sunset, and every new place becomes part of HARU's very first memories. A gentle cinematic story about curiosity, courage, and the beginning of a lifelong adventure.";

const details = [
  { label: "Release", value: "July 2026" },
  { label: "Runtime", value: "1 min 30 sec" },
  { label: "Genre", value: "Adventure" },
  { label: "Status", value: "Released" },
  { label: "Language", value: "English" },
  { label: "Resolution", value: "4K" },
  { label: "Created With", value: "Runway · Kling · ChatGPT · Suno · CapCut" },
];

const tools = [
  { name: "Runway", desc: "Cinematic video generation and motion direction." },
  { name: "Kling", desc: "Alternate motion tests and scene refinement." },
  { name: "ChatGPT", desc: "Story structure, prompts, and production notes." },
  { name: "Suno", desc: "Music direction and emotional theme sketches." },
  { name: "CapCut", desc: "Editing, pacing, captions, and final export." },
];

const gallery = [
  { title: "Arrival", image: "/images/works/haru-first-journey/gallery/arrival.png" },
  { title: "Car Ride", image: "/images/works/haru-first-journey/gallery/car-ride.png" },
  { title: "Window Scene", image: "/images/works/haru-first-journey/gallery/window-scene.png" },
  { title: "Village Road", image: "/images/works/haru-first-journey/gallery/village-road.png" },
  { title: "First Step", image: "/images/works/haru-first-journey/gallery/first-step.png" },
  { title: "Sunset", image: "/images/works/haru-first-journey/gallery/sunset.png" },
];

const timeline = [
  { step: "Idea", desc: "Define a quiet first-journey story built around curiosity, courage, and home." },
  { step: "Storyboard", desc: "Map the emotional beats into a simple cinematic sequence." },
  { step: "Reference Images", desc: "Prepare consistent HARU visuals, lighting, mood, and shot references." },
  { step: "Animation", desc: "Generate controlled motion tests for each key moment." },
  { step: "Voice", desc: "Shape the narration rhythm and tone for a gentle short film." },
  { step: "Music", desc: "Create a warm musical theme that supports HARU's first memory." },
  { step: "Editing", desc: "Refine timing, shot order, sound, color, and final pacing." },
  { step: "Publishing", desc: "Prepare the film for the web and multi-platform social release." },
];

const insights = [
  { title: "How HARU Was Created", desc: "A practical look at building FourFeetz Studios' first original character.", href: "/insights/how-haru-was-created" },
  { title: "Runway Gen-4 Review", desc: "Notes on image consistency, motion quality, and production workflow.", href: "/insights/runway-gen-4-review" },
  { title: "Image-to-Video Prompt Guide", desc: "A framework for camera movement, subject motion, lighting, and continuity.", href: "/insights/image-to-video-prompts" },
];

const resources = [
  { title: "Character Prompt", desc: "Prompt systems for keeping HARU consistent across scenes.", href: "/resources/character-consistency-prompt-pack" },
  { title: "Workflow", desc: "A repeatable AI short film pipeline from story to publishing.", href: "/resources/ai-short-film-workflow" },
  { title: "Production Notes", desc: "A clean template for prompts, tools, settings, and results.", href: "/resources/production-notes-template" },
];

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{title}</h2>
      {desc ? <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">{desc}</p> : null}
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{label}</p>
      <p className="mt-3 text-xl font-black text-[#2b2119]">{value}</p>
    </article>
  );
}

function GalleryFrame({ title, image, className = "" }: { title: string; image: string; className?: string }) {
  return (
    <div className={`relative aspect-video overflow-hidden rounded-2xl bg-[#f6ebdd] ${className}`}>
      <Image src={image} alt={`${title} production still`} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2b2119]/55 via-transparent to-transparent" />
      <p className="absolute bottom-4 left-4 text-sm font-black uppercase tracking-[0.22em] text-white">{title}</p>
    </div>
  );
}

function VideoCard({ title, description, src, poster }: (typeof moreVideos)[number]) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-[#eadfce] bg-[#fffdf8] shadow-sm">
      <div className="bg-black">
        <video
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          className="aspect-video h-auto w-full object-cover"
          aria-label={`Play ${title}`}
        />
      </div>
      <div className="p-6 md:p-7">
        <h3 className="text-2xl font-black text-[#2b2119]">{title}</h3>
        <p className="mt-3 leading-7 text-[#76685d]">{description}</p>
      </div>
    </article>
  );
}

export default function WorksPortfolio({ heroImage = "/images/works-hero-v2.png" }: { heroImage?: string }) {
  const [activeImage, setActiveImage] = useState<(typeof gallery)[number] | null>(null);

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#a67c52]">FEATURED FILM</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-7xl">HARU – First Journey</h1>
          <p className="mt-3 text-lg font-semibold text-[#76685d]">Original AI Short Film</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#watch" className="rounded-full bg-[#6f4e37] px-6 py-3 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29]">Watch Film</Link>
            <Link href="#making" className="rounded-full border border-[#6f4e37]/40 bg-white px-6 py-3 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119]">Behind the Scenes</Link>
          </div>
        </div>
        <HeroIllustrationCard src={heroImage} alt="FourFeetz film production and story illustration" priority />
      </section>

      <section id="watch" className="border-y border-[#eadfce] bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#6f4e37] px-3 py-1.5 text-xs font-black tracking-[0.18em] text-white">NEW</span>
            <span className="rounded-full border border-[#6f4e37]/30 bg-[#fff7ea] px-3 py-1.5 text-xs font-black tracking-[0.14em] text-[#6f4e37]">ALEPH 2.0 ENHANCED</span>
          </div>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{mainFilm.title}</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#76685d]">
            The latest cinematic version of HARU&apos;s first journey.<br />
            This edition was enhanced using Aleph 2.0 relighting to maximize natural lighting, depth, and cinematic atmosphere while preserving the original composition.
          </p>

          <div className="mt-8 overflow-hidden rounded-[32px] border border-[#eadfce] bg-black shadow-2xl shadow-[#6f4e37]/15">
            <video
              src={mainFilm.src}
              poster={mainFilm.poster}
              controls
              playsInline
              preload="metadata"
              className="aspect-video h-auto w-full object-cover"
              aria-label={`Play ${mainFilm.title}`}
            />
          </div>

          <article className="mt-10 rounded-[32px] border border-[#eadfce] bg-[#fffaf4] p-7 shadow-sm md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#a67c52]">Film Details</p>
            <h3 className="mt-3 text-3xl font-black text-[#2b2119] md:text-4xl">Production Notes</h3>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {productionNotes.map((note) => (
                <div key={note.label} className="rounded-2xl border border-[#eadfce] bg-white p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{note.label}</p>
                  <p className="mt-3 leading-7 text-[#5f5248]">{note.value}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="mt-16">
            <SectionHeader eyebrow="Watch More" title="More Videos" />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {moreVideos.map((video) => <VideoCard key={video.title} {...video} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <SectionHeader eyebrow="Story" title="Synopsis" />
          <p className="text-xl leading-9 text-[#76685d]">{synopsis}</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <SectionHeader eyebrow="Creative Direction" title="Goals & Character Design" desc="A quiet film built around recognizable character identity, patient observation, and emotionally useful technology." />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-black text-[#2b2119]">Creative Goals</h3>
            <p className="mt-4 leading-8 text-[#76685d]">Tell a complete emotional story in ninety seconds, preserve natural animal behavior, and let landscapes carry meaning without relying on heavy dialogue or spectacle.</p>
          </article>
          <article className="rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-black text-[#2b2119]">Character Design</h3>
            <p className="mt-4 leading-8 text-[#76685d]">HARU&apos;s cream-white coat, warm eyes, puppy proportions, and brown scarf form a compact visual system designed to remain readable across models, lenses, and lighting conditions.</p>
          </article>
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeader eyebrow="AI Production Pipeline" title="From Reference to Final Film" desc="Each stage produces an approved asset for the next, keeping creative decisions traceable and continuity manageable." />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            { title: "Image Generation", desc: "Character sheets, environment references, and shot-specific stills establish identity, composition, and light before motion begins." },
            { title: "Animation Workflow", desc: "Runway and Kling tests focus on one action and one camera move per shot, with approved final frames reused for continuity." },
            { title: "Music Production", desc: "A restrained piano-and-guitar theme follows the emotional edit and leaves space for ambience and visual performance." },
            { title: "Editing", desc: "CapCut assembles timing, sound, titles, reframing, and final delivery versions while preserving a clean 4K master." },
            { title: "Quality Review", desc: "Every shot is checked for face, fur, scarf, lighting, screen direction, motion, and transition continuity." },
            { title: "Publishing", desc: "The locked master becomes platform-specific cinema, vertical, captioned, and social editions without changing the story." },
          ].map((item, index) => (
            <article key={item.title} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm">
              <p className="text-sm font-black text-[#a67c52]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-2xl font-black text-[#2b2119]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#76685d]">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <SectionHeader eyebrow="Film Data" title="Production Details" desc="Core release information for the first FourFeetz Studios AI short film." />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((detail) => <InfoCard key={detail.label} {...detail} />)}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeader eyebrow="Pipeline" title="Made With" desc="A curated AI production toolkit for story, motion, sound, editing, and publishing." />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-3 lg:grid-cols-5">
          {tools.map((tool) => (
            <article key={tool.name} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#6f4e37] text-sm font-black text-white">AI</div>
              <h3 className="mt-5 text-2xl font-black text-[#2b2119]">{tool.name}</h3>
              <p className="mt-3 text-[#76685d]">{tool.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <SectionHeader eyebrow="Frames" title="Gallery" desc="Production stills from HARU – First Journey." />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <button key={item.title} type="button" onClick={() => setActiveImage(item)} className="text-left transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
              <GalleryFrame title={item.title} image={item.image} />
            </button>
          ))}
        </div>
      </section>

      <section id="making" className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeader eyebrow="Making Story" title="Behind the Scenes" desc="A simple timeline showing how the film moved from idea to published story." />
        <div className="mx-auto mt-10 max-w-4xl">
          {timeline.map((item, index) => (
            <div key={item.step} className="grid grid-cols-[44px_1fr] gap-5">
              <div className="flex flex-col items-center">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#6f4e37] text-sm font-black text-white">{index + 1}</div>
                {index < timeline.length - 1 ? <div className="h-full min-h-10 w-px bg-[#eadfce]" /> : null}
              </div>
              <article className="pb-8">
                <h3 className="text-2xl font-black text-[#2b2119]">{item.step}</h3>
                <p className="mt-2 leading-7 text-[#76685d]">{item.desc}</p>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <SectionHeader eyebrow="Editorial" title="Related Insights" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-3">
          {insights.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm font-black text-[#a67c52]">Insight</p>
              <h3 className="mt-3 text-2xl font-black text-[#2b2119]">{item.title}</h3>
              <p className="mt-3 text-[#76685d]">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeader eyebrow="Toolkit" title="Related Resources" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-3">
          {resources.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-black text-[#2b2119]">{item.title}</h3>
              <p className="mt-3 text-[#76685d]">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <SectionHeader eyebrow="Now Showing" title="More HARU Films" desc="Continue the journey with a slower long-form film designed for calm, comfortable viewing." />
        <div className="mx-auto mt-8 max-w-7xl">
          <Link href={`/works/${relaxingHomeFilm.slug}`} aria-label={`View ${relaxingHomeFilm.title}`} className="group grid overflow-hidden rounded-[32px] border border-[#eadfce] bg-white shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
            <div className="relative aspect-video overflow-hidden bg-[#f6ebdd] md:aspect-auto md:min-h-80">
              <Image src={relaxingHomeFilm.thumbnail} alt="HARU resting in a cozy living room" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-200 group-hover:scale-[1.02]" />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-sm font-black text-[#a67c52]">
                <span>{relaxingHomeFilm.category}</span>
                <span aria-hidden="true">·</span>
                <span>{relaxingHomeFilm.duration}</span>
              </div>
              <h3 className="mt-4 text-3xl font-black tracking-tight text-[#2b2119] md:text-5xl">{relaxingHomeFilm.title}</h3>
              <p className="mt-5 max-w-2xl leading-8 text-[#76685d]">{relaxingHomeFilm.description}</p>
              <span className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-[#6f4e37]">View Film →</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="px-6 py-20">
        <SectionHeader eyebrow="Next Project" title="Next Project" />
        <article className="mx-auto mt-8 max-w-7xl rounded-[40px] border border-[#eadfce] bg-white p-8 shadow-xl shadow-[#6f4e37]/10 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">In Production</p>
          <h3 className="mt-4 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">PORI – Coming Soon</h3>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">The next original FourFeetz story is already in production.</p>
        </article>
      </section>

      {activeImage ? (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-[#2b2119]/80 p-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${activeImage.title} gallery preview`} onClick={() => setActiveImage(null)}>
          <div className="w-full max-w-5xl rounded-[32px] border border-white/20 bg-[#fffdf8] p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <GalleryFrame title={activeImage.title} image={activeImage.image} className="rounded-[24px]" />
            <button type="button" onClick={() => setActiveImage(null)} className="mt-4 rounded-full bg-[#6f4e37] px-6 py-3 font-black text-white transition hover:bg-[#573b29]">
              Close
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}


