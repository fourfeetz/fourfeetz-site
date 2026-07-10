import Image from "next/image";
import Link from "next/link";

const filters = ["All", "Prompts", "Workflows", "Templates", "Checklists", "Downloads", "AI Video", "AI Music", "Social Media"];

const featuredResource = {
  category: "Workflow",
  title: "The FourFeetz AI Video Production Workflow",
  desc: "A repeatable production system covering story planning, reference images, AI video generation, sound, editing, and multi-platform publishing.",
  meta: ["Free Guide", "Updated July 2026"],
  image: "/images/works/haru-first-journey/hero.png",
  primaryHref: "/resources/ai-video-workflow",
  secondaryHref: "/resources/ai-short-film-workflow",
};

const resources = [
  {
    category: "Prompts",
    title: "Character Consistency Prompt Pack",
    desc: "Reusable prompts for keeping characters, outfits, facial features, and visual style consistent across scenes.",
    type: "Prompt Pack",
    access: "Free",
    href: "/resources/character-consistency-prompt-pack",
    thumbnail: "/images/resources/character-consistency-prompt-pack.svg",
  },
  {
    category: "AI Video",
    title: "Image-to-Video Prompt Framework",
    desc: "A practical prompt structure for camera movement, subject motion, lighting, environment, and continuity.",
    type: "Guide",
    access: "Free",
    href: "/resources/image-to-video-prompt-framework",
    thumbnail: "/images/resources/image-to-video-prompt-framework.svg",
  },
  {
    category: "Workflows",
    title: "AI Short Film Workflow",
    desc: "A repeatable pipeline from concept and reference images to animation, sound, editing, and publishing.",
    type: "Workflow",
    access: "Free",
    href: "/resources/ai-short-film-workflow",
    thumbnail: "/images/resources/ai-short-film-workflow.svg",
  },
  {
    category: "Templates",
    title: "Storyboard Planning Template",
    desc: "A reusable planning sheet for scenes, shot types, camera direction, sound, and transitions.",
    type: "Template",
    access: "Free",
    href: "/resources/storyboard-planning-template",
    thumbnail: "/images/resources/storyboard-planning-template.svg",
  },
  {
    category: "Checklists",
    title: "Character Production Checklist",
    desc: "A checklist for visual consistency, prompts, voice, music, motion, and final delivery.",
    type: "Checklist",
    access: "Free",
    href: "/resources/character-production-checklist",
    thumbnail: "/images/resources/character-production-checklist.svg",
  },
  {
    category: "AI Music",
    title: "AI Music Prompt Starter Pack",
    desc: "Prompt examples for cinematic, emotional, cute, ambient, and trailer-style background music.",
    type: "Prompt Pack",
    access: "Free",
    href: "/resources/ai-music-prompt-starter-pack",
    thumbnail: "/images/resources/ai-music-prompt-starter-pack.svg",
  },
  {
    category: "Social Media",
    title: "16:9 to 9:16 Reframing Guide",
    desc: "A practical guide for adapting cinematic AI videos to TikTok, Instagram Reels, YouTube Shorts, and Naver Clip.",
    type: "Guide",
    access: "Free",
    href: "/resources/vertical-video-reframing-guide",
    thumbnail: "/images/resources/vertical-video-reframing-guide.svg",
  },
  {
    category: "Downloads",
    title: "FourFeetz Production Notes Template",
    desc: "A clean reusable document for recording prompts, tools, settings, problems, and final results.",
    type: "Download",
    access: "Free",
    href: "/resources/production-notes-template",
    thumbnail: "/images/resources/production-notes-template.svg",
  },
];

const workflowSteps = [
  { label: "Story", desc: "Define the idea, emotional arc, audience, and final platform before production starts." },
  { label: "Reference Images", desc: "Build character, environment, lighting, and style references for consistent generation." },
  { label: "AI Video", desc: "Generate controlled motion with scene-specific prompts, camera notes, and continuity checks." },
  { label: "Voice & Music", desc: "Shape narration, character sound, background music, and mood cues for the edit." },
  { label: "Editing", desc: "Assemble shots, adjust pacing, add titles, refine color, and prepare final versions." },
  { label: "Publishing", desc: "Export for web, shorts, reels, and social channels with platform-ready framing." },
];

const downloads = [
  "Prompt Cheat Sheet",
  "Storyboard Template",
  "Production Checklist",
  "Social Publishing Checklist",
];

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{eyebrow}</p>
      <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{title}</h2>
      {desc ? <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">{desc}</p> : null}
    </div>
  );
}

function ResourceThumbnail({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#f6ebdd]">
      <Image src={src} alt={`${title} thumbnail`} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2b2119]/35 via-transparent to-white/10" />
    </div>
  );
}

export default function ResourcesLibrary() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">CREATOR TOOLKIT</p>
        <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Resources</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">
          Practical prompts, workflows, templates, and production materials for AI films, characters, music, and social content.
        </p>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[40px] border border-[#eadfce] bg-[#fffdf8] shadow-xl shadow-[#6f4e37]/10 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[300px] bg-[#fffaf4] md:min-h-[460px]">
            <Image src={featuredResource.image} alt={featuredResource.title} fill priority sizes="(min-width: 768px) 48vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">{featuredResource.category}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#2b2119] md:text-5xl">{featuredResource.title}</h2>
            <p className="mt-5 text-lg leading-8 text-[#76685d]">{featuredResource.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredResource.meta.map((item) => (
                <span key={item} className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#6f4e37]">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={featuredResource.primaryHref} className="rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
                Open Guide
              </Link>
              <Link href={featuredResource.secondaryHref} className="rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
                View Workflow
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2" aria-label="Resource categories">
          {filters.map((filter) => (
            <button key={filter} type="button" className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <SectionHeader eyebrow="Library" title="AI Creator Resource Library" desc="Curated prompts, workflows, templates, checklists, and downloads for repeatable creative production." />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {resources.map((resource) => (
            <article key={resource.title} className="flex h-full flex-col rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <ResourceThumbnail src={resource.thumbnail} title={resource.title} />
              <div className="flex flex-1 flex-col pt-5">
                <p className="text-sm font-black text-[#a67c52]">{resource.category}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-[#2b2119]">{resource.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-[#76685d]">{resource.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#f7f2ea] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#6f4e37]">{resource.type}</span>
                  <span className="rounded-full bg-[#f7f2ea] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#6f4e37]">{resource.access}</span>
                </div>
                <Link href={resource.href} className="mt-6 inline-flex w-fit text-sm font-black text-[#6f4e37] transition hover:text-[#2b2119] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
                  Open Resource -&gt;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeader eyebrow="Process" title="Production Workflow" desc="A practical map for moving from idea to publishable AI content without losing continuity." />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-3 xl:grid-cols-6">
          {workflowSteps.map((step, index) => (
            <div key={step.label} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <p className="text-sm font-black text-[#a67c52]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-black text-[#2b2119]">{step.label}</h3>
              <p className="mt-3 text-sm leading-6 text-[#76685d]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <SectionHeader eyebrow="Downloads" title="Free Downloads" desc="Compact production files for planning, prompting, reviewing, and publishing AI creative work." />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-4">
          {downloads.map((download) => (
            <article key={download} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a67c52]">Download</p>
              <h3 className="mt-4 text-2xl font-black leading-tight text-[#2b2119]">{download}</h3>
              <Link href="#" aria-label={`Download ${download}`} className="mt-6 inline-flex rounded-full border border-[#6f4e37]/40 bg-white px-5 py-3 text-sm font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
                Download
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto rounded-[40px] border border-[#eadfce] bg-white p-8 shadow-xl shadow-[#6f4e37]/10 md:flex md:max-w-7xl md:items-center md:justify-between md:gap-10 md:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Toolkit</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Build Better AI Stories</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">
              Use FourFeetz resources to plan, create, refine, and publish AI films more consistently.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-0">
            <Link href="/insights" className="rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
              Explore Insights
            </Link>
            <Link href="/works" className="rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
              View Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}




