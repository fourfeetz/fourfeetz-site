"use client";

import Image from "next/image";
import Link from "next/link";
import HeroIllustrationCard from "./HeroIllustrationCard";

const featuredInsight = {
  category: "Behind the Scenes",
  title: "How HARU Was Created",
  desc: "A practical look at the character design, image generation, animation workflow, music, and editing process behind FourFeetz Studios' first original character film.",
  meta: "8 min read",
  date: "July 2026",
  href: "/insights/how-haru-was-created",
};

const categories = ["All", "AI Video", "AI Music", "Tools", "Prompts", "Characters", "Design", "Workflow", "Images", "Filmmaking", "Behind the Scenes", "Social Media"];

const articles = [
  {
    category: "AI Video",
    title: "Runway Gen-4 Review",
    desc: "A practical review of image consistency, motion quality, camera control, and production workflow.",
    readTime: "6 min read",
    href: "/insights/runway-gen-4-review",
    image: "/images/insights/runway-gen4-review.png",
  },
  {
    category: "Tools",
    title: "Kling vs Veo",
    desc: "A side-by-side comparison of scene quality, motion realism, prompt control, and production speed.",
    readTime: "8 min read",
    href: "/insights/kling-vs-veo",
    image: "/images/insights/kling-vs-veo.png",
  },
  {
    category: "Workflow",
    title: "A Repeatable AI Video Workflow",
    desc: "From story planning and reference images to animation, sound, editing, and publishing.",
    readTime: "7 min read",
    href: "/insights/ai-video-workflow",
    image: "/images/insights/ai-video-workflow.png",
  },
  {
    category: "AI Music",
    title: "Best AI Music Tools for Video",
    desc: "A creator-focused comparison of AI music tools for films, shorts, reels, and character themes.",
    readTime: "7 min read",
    href: "/insights/best-ai-music-tools",
    image: "/images/insights/best-ai-music-tools.png",
  },
  {
    category: "Prompts",
    title: "Writing Better Image-to-Video Prompts",
    desc: "A practical framework for camera movement, subject motion, lighting, environment, and continuity.",
    readTime: "5 min read",
    href: "/insights/image-to-video-prompts",
    image: "/images/insights/image-to-video-prompts.png",
  },
  {
    category: "Social Media",
    title: "Reframing 16:9 AI Films for Vertical Video",
    desc: "How to adapt cinematic AI videos for TikTok, Instagram Reels, YouTube Shorts, and Naver Clip.",
    readTime: "6 min read",
    href: "/insights/reframing-16-9-guide",
    image: "/images/insights/reframing-16-9-guide.png",
  },
  {
    category: "Filmmaking",
    title: "Camera Movement Guide for AI Filmmakers",
    desc: "Eight essential camera movements that add cinematic energy, depth and storytelling to AI-generated videos.",
    readTime: "6 min read",
    href: "/insights/camera-movement-guide",
    image: "/images/insights/camera-movement-guide.png",
  },
  {
    category: "Design",
    title: "AI Thumbnail Design Guide",
    desc: "Learn how to design high-click YouTube thumbnails with AI using composition, color, branding and visual storytelling.",
    readTime: "6 min read",
    href: "/insights/ai-thumbnail-design-guide",
    image: "/images/insights/ai-thumbnail-design-guide.png",
  },
  {
    category: "Characters",
    title: "Character Consistency Guide",
    desc: "Learn how to maintain the same AI character across images, videos, prompts and multiple AI tools.",
    readTime: "7 min read",
    href: "/insights/character-consistency-guide",
    image: "/images/insights/haru-character-sheet.png",
  },
  {
    category: "Workflow",
    title: "Google Flow Complete Guide",
    desc: "A practical guide to scene planning, prompt control, camera movement, exports, and cinematic AI video workflows.",
    readTime: "8 min",
    href: "/insights/google-flow-complete-guide",
    image: "/images/insights/google-flow-complete-guide.png",
  },
  {
    category: "AI Video",
    title: "Veo 3 Complete Review",
    desc: "A production-focused review of image quality, motion, prompt following, character consistency, camera control, and workflow.",
    readTime: "8 min",
    href: "/insights/veo3-complete-review",
    image: "/images/insights/veo3-complete-review.png",
  },
  {
    category: "AI Video",
    title: "Runway Gen-4.5 Review",
    desc: "A practical look at motion, character consistency, camera control, workflow speed, and how Gen-4.5 compares with Gen-4.",
    readTime: "7 min",
    href: "/insights/runway-gen45-review",
    image: "/images/insights/runway-gen45-review.png",
  },
  {
    category: "Images",
    title: "Flux Image Guide",
    desc: "A guide to creating stronger reference images, first frames, lighting studies, character visuals, and thumbnail bases with Flux.",
    readTime: "7 min",
    href: "/insights/flux-image-guide",
    image: "/images/insights/flux-image-guide.png",
  },
  {
    category: "Filmmaking",
    title: "AI Lighting Guide",
    desc: "Learn golden hour, soft light, studio light, sunset, cloudy scenes, night lighting, and prompt tips for cinematic AI production.",
    readTime: "6 min",
    href: "/insights/ai-lighting-guide",
    image: "/images/insights/ai-lighting-guide.png",
  },
  {
    category: "Workflow",
    title: "AI Storyboarding Guide",
    desc: "Plan shots, character position, camera direction, continuity, and production workflows before generating AI video.",
    readTime: "7 min",
    href: "/insights/ai-storyboarding-guide",
    image: "/images/insights/ai-storyboarding-guide.png",
  },
];
const guides = [
  { title: "Google Flow Guide", href: "/insights/google-flow-complete-guide" },
  { title: "Veo 3 Review", href: "/insights/veo3-complete-review" },
  { title: "Runway Gen-4.5", href: "/insights/runway-gen45-review" },
  { title: "Flux Guide", href: "/insights/flux-image-guide" },
  { title: "Lighting Guide", href: "/insights/ai-lighting-guide" },
  { title: "Storyboarding Guide", href: "/insights/ai-storyboarding-guide" },
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
      <Image src={src} alt={alt} fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" className="object-cover transition-transform duration-200 group-hover:scale-[1.02]" />
    </div>
  );
}

export default function InsightsHub() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">CREATIVE KNOWLEDGE</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Insights</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">
            Practical guides, production notes, tool comparisons, and creative workflows from FourFeetz Studios.
          </p>
        </div>
        <HeroIllustrationCard src="/images/insights-hero-v2.png" alt="Editorial research tools for FourFeetz creative knowledge" priority />
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <Link href={featuredInsight.href} aria-label={`Read featured article: ${featuredInsight.title}`} className="mx-auto block max-w-7xl rounded-[40px] border border-[#eadfce] bg-[#fffdf8] p-8 shadow-xl shadow-[#6f4e37]/10 transition duration-200 hover:-translate-y-[3px] hover:shadow-2xl hover:shadow-[#6f4e37]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">{featuredInsight.category}</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#2b2119] md:text-5xl">{featuredInsight.title}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">{featuredInsight.desc}</p>
          <p className="mt-6 text-sm font-bold text-[#9a8775]">{featuredInsight.meta} 쨌 {featuredInsight.date}</p>
          <span className="mt-8 inline-flex w-fit rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition duration-200">
            Read Article
          </span>
        </Link>
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
            <Link key={article.title} href={article.href} aria-label={`Read article: ${article.title}`} className="group flex h-full flex-col rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2">
              <Thumbnail src={article.image} alt={`${article.title} thumbnail`} />
              <div className="flex flex-1 flex-col pt-5">
                <p className="text-sm font-black text-[#a67c52]">{article.category}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-[#2b2119]">{article.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-[#76685d]">{article.desc}</p>
                <div className="mt-6 flex items-center justify-between gap-4 text-sm font-bold">
                  <span className="text-[#9a8775]">{article.readTime}</span>
                  <span className="text-[#6f4e37]">Read Article -&gt;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20">
        <SectionHeader eyebrow="Evergreen" title="Popular Guides" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-3 xl:grid-cols-6">
          {guides.map((guide) => (
            <Link key={guide.title} href={guide.href} aria-label={`Open popular guide: ${guide.title}`} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2">
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












