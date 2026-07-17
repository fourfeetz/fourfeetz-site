import type { Metadata } from "next";
import HeroIllustrationCard from "@/components/HeroIllustrationCard";
import ReferralCode from "@/components/ReferralCode";

const title = "Tools I Use | FourFeetz";
const description = "Discover the AI video, music, writing, and editing tools used to create HARU and FourFeetz content.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "https://www.fourfeetz.com/tools" },
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title,
    description,
    url: "https://www.fourfeetz.com/tools",
    images: [{ url: "/images/tools-hero-v2.png", alt: "FourFeetz Studios AI production toolkit" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/tools-hero-v2.png"],
  },
};

type Tool = {
  name: string;
  mark: string;
  category: string;
  summary: string;
  uses: string[];
  href: string;
  button: string;
  sponsored: boolean;
  code?: string;
};

const tools: Tool[] = [
  {
    name: "Google Flow / Google AI Pro",
    mark: "GF",
    category: "AI Video",
    summary: "A core tool for building HARU scenes and testing AI video ideas. I use it for image-based video, scene composition, and cinematic visual experiments.",
    uses: ["Video generation", "Scene composition", "Cinematic experiments"],
    href: "https://g.co/g1referral/1U9JVP6A",
    button: "Try Google AI Pro",
    sponsored: true,
  },
  {
    name: "Runway",
    mark: "RW",
    category: "AI Video",
    summary: "Used for image-to-video, Multi-Shot tests, scene connections, and character animation. Runway was part of the early HARU production and testing process.",
    uses: ["Image-to-video", "Multi-Shot", "Character video"],
    href: "https://runwayml.com/",
    button: "Visit Runway",
    sponsored: false,
    code: "djminsik-j6ewna",
  },
  {
    name: "Kling AI",
    mark: "KA",
    category: "AI Video",
    summary: "Useful for End Frame, Continue, extending clips, reconnecting scenes, and regenerating a specific section. I use it for HARU Shorts and targeted scene fixes.",
    uses: ["Video extension", "End Frame", "Scene repair"],
    href: "https://kling.ai/",
    button: "Visit Kling AI",
    sponsored: false,
    code: "7BVSN5CHVY6K",
  },
  {
    name: "ChatGPT",
    mark: "CG",
    category: "Writing & Planning",
    summary: "Used for story structure, shot planning, prompt development, blog content, SEO, and website production across the FourFeetz workflow.",
    uses: ["Story planning", "Prompt development", "Writing & SEO"],
    href: "https://chatgpt.com/",
    button: "Learn More",
    sponsored: false,
  },
  {
    name: "Suno",
    mark: "SU",
    category: "AI Music",
    summary: "Used to create background music, emotional cues, and AI music experiments that support the atmosphere and pacing of FourFeetz videos.",
    uses: ["Music production", "Mood exploration", "Background scores"],
    href: "https://suno.com/",
    button: "Learn More",
    sponsored: false,
  },
  {
    name: "CapCut",
    mark: "CC",
    category: "Editing",
    summary: "The final editing tool for HARU videos, including scene assembly, aspect-ratio changes, subtitles, timing, and final delivery exports.",
    uses: ["Final editing", "Vertical reframing", "Subtitles & export"],
    href: "https://www.capcut.com/capcut_pc_web/fission_receive?code=AuVzLW24993551&lng=ko-KR",
    button: "Try CapCut",
    sponsored: true,
  },
];

const featuredTool = tools[0]!;
const standardTools = tools.slice(1);

export default function ToolsPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div className="max-w-[900px]">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">FourFeetz Production</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight text-[#2b2119] md:text-7xl">Tools I Use</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#76685d] md:text-xl md:leading-9">
            These are the tools I actually use to create HARU videos, FourFeetz content, music, prompts, and final edits.
          </p>
          <div className="mt-8 max-w-4xl rounded-3xl border border-[#dfcfbd] bg-white p-6 shadow-sm">
            <p className="text-sm font-black text-[#2b2119]">Affiliate disclosure</p>
            <p className="mt-2 leading-7 text-[#76685d]">Some links or referral codes on this page may provide FourFeetz with a reward or credit at no additional cost to you. I only list tools that I have personally used in the FourFeetz production workflow.</p>
          </div>
        </div>
        <HeroIllustrationCard src="/images/tools-hero-v2.png" alt="FourFeetz AI production toolkit with laptop camera microphone editing controls and drawing tablet" priority />
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Production Toolkit</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Six tools in the real workflow.</h2>
          </div>
          <article className="mt-10 rounded-[36px] border border-[#d8c3ad] bg-[#fffaf4] p-8 shadow-xl shadow-[#6f4e37]/10 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6f4e37] text-base font-black text-white" aria-hidden="true">{featuredTool.mark}</div>
                  <p className="rounded-full border border-[#cdb397] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#6f4e37]">Most Used</p>
                  <p className="rounded-full border border-[#dfcfbd] bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-[#a67c52]">{featuredTool.category}</p>
                </div>
                <h3 className="mt-7 text-3xl font-black tracking-tight text-[#2b2119] md:text-4xl">{featuredTool.name}</h3>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">{featuredTool.summary}</p>
                <p className="mt-5 font-black leading-7 text-[#6f4e37]">Used every day to create HARU videos and FourFeetz productions.</p>
              </div>
              <div className="rounded-3xl border border-[#eadfce] bg-white p-6">
                <p className="text-sm font-black text-[#2b2119]">How I use it</p>
                <ul className="mt-3 space-y-3 text-sm text-[#76685d]">
                  {featuredTool.uses.map((use) => <li key={use} className="flex gap-2"><span className="font-black text-[#a67c52]" aria-hidden="true">-</span><span>{use}</span></li>)}
                </ul>
                <p className="mt-6 text-xs font-bold text-[#8c7765]">Personally recommended based on daily production use.</p>
                <p className="mt-2 text-xs leading-5 text-[#8c7765]">Referral link. FourFeetz may receive a reward or credit.</p>
                <a href={featuredTool.href} target="_blank" rel="noopener noreferrer sponsored" className="mt-5 inline-flex rounded-full bg-[#6f4e37] px-8 py-4 text-lg font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
                  {featuredTool.button}
                </a>
              </div>
            </div>
          </article>
          <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {standardTools.map((tool) => (
              <article key={tool.name} className="flex h-full flex-col rounded-[32px] border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6f4e37] text-sm font-black text-white" aria-hidden="true">{tool.mark}</div>
                  <p className="rounded-full border border-[#dfcfbd] bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-[#a67c52]">{tool.category}</p>
                </div>
                <h3 className="mt-6 text-2xl font-black tracking-tight text-[#2b2119]">{tool.name}</h3>
                <p className="mt-4 leading-7 text-[#76685d]">{tool.summary}</p>
                <div className="mt-6">
                  <p className="text-sm font-black text-[#2b2119]">How I use it</p>
                  <ul className="mt-3 space-y-2 text-sm text-[#76685d]">
                    {tool.uses.map((use) => <li key={use} className="flex gap-2"><span className="font-black text-[#a67c52]" aria-hidden="true">-</span><span>{use}</span></li>)}
                  </ul>
                </div>
                {tool.code ? <ReferralCode code={tool.code} /> : null}
                <div className="mt-auto pt-7">
                  {tool.sponsored ? <p className="mb-3 text-xs font-bold leading-5 text-[#8c7765]">Referral link. FourFeetz may receive a reward or credit.</p> : null}
                  <a href={tool.href} target="_blank" rel={tool.sponsored ? "noopener noreferrer sponsored" : "noopener noreferrer"} className="inline-flex rounded-full bg-[#6f4e37] px-6 py-3 font-black text-white shadow-md shadow-[#6f4e37]/15 transition hover:bg-[#573b29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
                    {tool.button}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
