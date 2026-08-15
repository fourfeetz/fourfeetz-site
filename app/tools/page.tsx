import type { Metadata } from "next";
import Link from "next/link";
import HeroIllustrationCard from "@/components/HeroIllustrationCard";
import ReferralCode from "@/components/ReferralCode";
import { englishLanguageAlternates } from "@/lib/localization";

const title = "Tools I Use | FourFeetz";
const description = "Discover the AI video, music, writing, and editing tools used to create HARU and FourFeetz content.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: englishLanguageAlternates("/tools", "/ko/tools"),
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title,
    description,
    url: "https://fourfeetz.com/tools",
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
    summary: "Used for approved-image-to-video scenes, extensions and controlled motion in published HARU productions. It still requires First Shot review: extra actions can change paws, faces or room geometry.",
    uses: ["Video generation", "Scene composition", "Cinematic experiments"],
    href: "https://g.co/g1referral/1U9JVP6A",
    button: "Try Google AI Pro",
    sponsored: true,
  },
  {
    name: "Runway",
    mark: "RW",
    category: "AI Video",
    summary: "Used in early HARU image-to-video, Multi-Shot and scene-connection tests. A strong individual clip did not remove the need to compare identity and edit continuity with the approved reference.",
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
    summary: "Used for End Frame, Continue, clip extension and targeted scene repair in HARU work. It is most useful when the start and end states are already clear; it does not rescue an unstable source frame.",
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
    summary: "Used for story structure, shot cards, production-note organization, public writing and website work. Plans and drafts are checked against the studio’s actual images, clips and records before publication.",
    uses: ["Story planning", "Prompt development", "Writing & SEO"],
    href: "https://chatgpt.com/",
    button: "Learn More",
    sponsored: false,
  },
  {
    name: "Suno",
    mark: "SU",
    category: "AI Music",
    summary: "Used to develop original background music and emotional cues for FourFeetz videos. Generated music still needs selection, timing and a mix that leaves room for ambience and does not announce a loop join.",
    uses: ["Music production", "Mood exploration", "Background scores"],
    href: "https://suno.com/",
    button: "Learn More",
    sponsored: false,
  },
  {
    name: "CapCut",
    mark: "CC",
    category: "Editing",
    summary: "Used for scene assembly, trimming, short dissolves, sound balance, reframing, subtitles and delivery exports. Editing can refine a valid clip, but it cannot repair a changed face, missing paw or broken background.",
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
            These tools appear in actual FourFeetz production records. Each has a defined role and a limit; the finished film and review decision matter more than a feature list.
          </p>
          <div className="mt-8 max-w-4xl rounded-3xl border border-[#dfcfbd] bg-white p-6 shadow-sm">
            <p className="text-sm font-black text-[#2b2119]">Affiliate disclosure</p>
            <p className="mt-2 leading-7 text-[#76685d]">Some links or referral codes on this page may provide FourFeetz with a reward or credit at no additional cost to you. Only tools documented in the FourFeetz production workflow are listed.</p>
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
                <p className="mt-5 font-black leading-7 text-[#6f4e37]">Documented in HARU scene generation and extension work.</p>
              </div>
              <div className="rounded-3xl border border-[#eadfce] bg-white p-6">
                <p className="text-sm font-black text-[#2b2119]">How I use it</p>
                <ul className="mt-3 space-y-3 text-sm text-[#76685d]">
                  {featuredTool.uses.map((use) => <li key={use} className="flex gap-2"><span className="font-black text-[#a67c52]" aria-hidden="true">-</span><span>{use}</span></li>)}
                </ul>
                <p className="mt-6 text-xs font-bold text-[#8c7765]">Production role and limitations are based on FourFeetz project records.</p>
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

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[36px] border border-[#eadfce] bg-white p-8 shadow-sm md:grid-cols-[0.75fr_1.25fr] md:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#a67c52]">Production Evidence</p>
            <h2 className="mt-3 text-3xl font-black text-[#2b2119] md:text-5xl">See the tools inside finished work.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#76685d]">The HARU Snowy Hearth Nap project records Google Flow, CapCut, Suno and planning tools by production stage. The related notes explain where extensions, dissolves and sound support helped—and where a failed source still had to be replaced.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/works/haru-snowy-hearth-nap" className="rounded-full bg-[#6f4e37] px-6 py-3 font-black text-white">View the finished film</Link>
              <Link href="/insights/turning-short-scene-into-relaxing-video" className="rounded-full border border-[#6f4e37]/40 bg-white px-6 py-3 font-black text-[#6f4e37]">Read the production notes</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
