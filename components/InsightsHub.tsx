"use client";

import Image from "next/image";
import Link from "next/link";

const featuredInsight = {
  category: "Behind the Scenes",
  title: "How HARU Was Created",
  desc: "A practical look at the character design, image generation, animation workflow, music, and editing process behind FourFeetz Studios' first original character film.",
  meta: "8 min read",
  date: "July 2026",
  href: "/insights/how-haru-was-created",
  image: "/images/works/haru-first-journey/hero.png",
};

const categories = ["All", "AI Video", "AI Music", "Tools", "Prompts", "Workflow", "Behind the Scenes", "Social Media"];

const articles = [
  {
    category: "AI Video",
    title: "Runway Gen-4 Review",
    desc: "A practical review of image consistency, motion quality, camera control, and production workflow.",
    readTime: "6 min read",
    href: "/insights/runway-gen-4-review",
    image: "/images/works/haru-first-journey/hero.png",
  },
  {
    category: "Tools",
    title: "Kling vs Veo",
    desc: "A side-by-side comparison of scene quality, motion realism, prompt control, and production speed.",
    readTime: "8 min read",
    href: "/insights/kling-vs-veo",
    image: "/images/characters/haru/portrait.png",
  },
  {
    category: "Workflow",
    title: "A Repeatable AI Video Workflow",
    desc: "From story planning and reference images to animation, sound, editing, and publishing.",
    readTime: "7 min read",
    href: "/insights/repeatable-ai-video-workflow",
    image: "/images/characters/pori/portrait.png",
  },
  {
    category: "AI Music",
    title: "Best AI Music Tools for Video",
    desc: "A creator-focused comparison of AI music tools for films, shorts, reels, and character themes.",
    readTime: "7 min read",
    href: "/insights/best-ai-music-tools",
    image: "/images/characters/luna/portrait.png",
  },
  {
    category: "Prompts",
    title: "Writing Better Image-to-Video Prompts",
    desc: "A practical framework for camera movement, subject motion, lighting, environment, and continuity.",
    readTime: "5 min read",
    href: "/insights/image-to-video-prompts",
    image: "/images/characters/hugo/portrait.png",
  },
  {
    category: "Social Media",
    title: "Reframing 16:9 AI Films for Vertical Video",
    desc: "How to adapt cinematic AI videos for TikTok, Instagram Reels, YouTube Shorts, and Naver Clip.",
    readTime: "6 min read",
    href: "/insights/vertical-video-reframing",
    image: "/images/characters/oli/portrait.png",
  },
];
const guides = [
  { title: "Prompt Library", href: "/resources/prompt-library" },
  { title: "AI Video Workflow", href: "/resources/ai-video-workflow" },
  { title: "Tool Comparisons", href: "/resources/tool-comparisons" },
  { title: "Character Consistency Guide", href: "/resources/character-consistency-guide" },
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

function Thumbnail({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-[#f6ebdd]">
      <Image src={src} alt={alt} fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" className="object-cover" />
    </div>
  );
}

export default function InsightsHub() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">CREATIVE KNOWLEDGE</p>
        <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Insights</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">
          Practical guides, production notes, tool comparisons, and creative workflows from FourFeetz Studios.
        </p>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[40px] border border-[#eadfce] bg-[#fffdf8] shadow-xl shadow-[#6f4e37]/10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[320px] bg-[#fffaf4] md:min-h-[460px]">
            <Image src={featuredInsight.image} alt={featuredInsight.title} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-sm font-black text-[#a67c52]">{featuredInsight.category}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#2b2119] md:text-5xl">{featuredInsight.title}</h2>
            <p className="mt-5 text-lg leading-8 text-[#76685d]">{featuredInsight.desc}</p>
            <p className="mt-6 text-sm font-bold text-[#9a8775]">{featuredInsight.meta} · {featuredInsight.date}</p>
            <Link href={featuredInsight.href} className="mt-8 inline-flex w-fit rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29]">
              Read Article
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <SectionHeader eyebrow="Latest" title="Latest Articles" desc="Editorial notes for AI video, music, prompts, tools, publishing, and studio workflow." />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="flex h-full flex-col rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <Thumbnail src={article.image} alt={`${article.title} thumbnail`} />
              <div className="flex flex-1 flex-col pt-5">
                <p className="text-sm font-black text-[#a67c52]">{article.category}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-[#2b2119]">{article.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-[#76685d]">{article.desc}</p>
                <div className="mt-6 flex items-center justify-between gap-4 text-sm font-bold">
                  <span className="text-[#9a8775]">{article.readTime}</span>
                  <Link href={article.href} className="text-[#6f4e37] hover:text-[#2b2119]">Read Article -&gt;</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeader eyebrow="Evergreen" title="Popular Guides" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-4">
          {guides.map((guide) => (
            <Link key={guide.title} href={guide.href} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-black text-[#2b2119]">{guide.title}</h3>
              <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-[#a67c52]">Open Guide</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto rounded-[40px] border border-[#eadfce] bg-white p-8 shadow-sm md:flex md:max-w-7xl md:items-center md:justify-between md:gap-10 md:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Follow</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Follow the Studio</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">
              Get new films, production notes, AI workflows, and creative resources from FourFeetz Studios.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-0">
            <Link href="/social" className="rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29]">Explore Social</Link>
            <Link href="/works" className="rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37]">View Latest Work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}



