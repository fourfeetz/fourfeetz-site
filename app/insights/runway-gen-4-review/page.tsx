import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Runway Gen-4 Review for AI Character Films | FourFeetz Studios",
  description:
    "A practical Runway Gen-4 review based on producing HARU, covering character consistency, motion quality, camera control, prompts, and AI video workflow.",
  openGraph: {
    title: "Runway Gen-4 Review for AI Character Films | FourFeetz Studios",
    description:
      "A practical Runway Gen-4 review based on producing HARU, covering character consistency, motion quality, camera control, prompts, and AI video workflow.",
    images: ["/images/insights/runway/09_og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/insights/runway/08_social-cover.png"],
  },
};

const workflowChecks = [
  "Create the exact First Shot Image before animation",
  "Keep HARU's appearance fixed",
  "Avoid direct eye contact with the camera unless intentional",
  "Define one clear subject movement",
  "Define one clear camera movement",
  "Keep lighting and lens language consistent",
  "Use the final frame of one scene as the visual reference for the next",
];

const consistencyStrengths = [
  "Good results when the reference image is already accurate",
  "Useful for preserving general face, fur color, collar, and scene mood",
  "Stronger when movement is simple and controlled",
];

const consistencyLimits = [
  "Facial proportions may drift",
  "Accessories may change",
  "Fast motion can deform paws or body shape",
  "Complex scenes increase inconsistency",
  "Longer continuity still requires manual shot planning",
];

const workedBest = [
  { title: "Strong First Frames", desc: "Start with the exact composition required for the shot." },
  { title: "Simple Motion", desc: "Use one main subject action per generation." },
  { title: "Controlled Camera", desc: "Avoid combining multiple camera moves." },
  { title: "Short Connected Shots", desc: "Build a longer sequence from several approved clips." },
];

const didNotWork = [
  { title: "Overloaded Prompts", desc: "Too many actions often reduce control." },
  { title: "Fast Complex Movement", desc: "Rapid action increases distortion." },
  { title: "Changing Environments", desc: "Character identity may drift when too many visual elements change." },
  { title: "Expecting One Perfect Generation", desc: "Multiple attempts are usually required." },
];

const ratings = [
  { label: "Character consistency", value: "4 / 5" },
  { label: "Motion quality", value: "4 / 5" },
  { label: "Camera control", value: "4 / 5" },
  { label: "Ease of use", value: "4 / 5" },
  { label: "Production reliability", value: "3.5 / 5" },
];

const related = [
  { title: "How HARU Was Created", href: "/insights/how-haru-was-created", desc: "The character design and production system behind HARU." },
  { title: "HARU - First Journey", href: "/works", desc: "The first original AI short film from FourFeetz Studios." },
  { title: "AI Video Production Workflow", href: "/resources/ai-short-film-workflow", desc: "A repeatable workflow from story to publishing." },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Runway Gen-4 Review",
  description: metadata.description,
  image: "/images/insights/runway/09_og-image.png",
  datePublished: "2026-07-01",
  author: {
    "@type": "Organization",
    name: "FourFeetz Studios",
  },
  publisher: {
    "@type": "Organization",
    name: "FourFeetz Studios",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[#eadfce] py-12 first:border-t-0 first:pt-0 md:py-16">
      <h2 className="text-3xl font-black tracking-tight text-[#2b2119] md:text-5xl">{title}</h2>
      <div className="mt-6 space-y-5 text-lg leading-8 text-[#76685d]">{children}</div>
    </section>
  );
}

function CompactCard({ title, desc }: { title: string; desc: string }) {
  return (
    <article className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
      <h3 className="text-xl font-black text-[#2b2119]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[#76685d]">{desc}</p>
    </article>
  );
}

function ArticleImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-10">
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={788}
        className="h-auto w-full rounded-[24px] border border-[#eadfce] shadow-xl shadow-[#6f4e37]/10"
      />
    </figure>
  );
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article>
        <header className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">AI Video</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Runway Gen-4 Review</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            A practical review of character consistency, motion quality, camera control, and production workflow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">6 min read</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <ArticleImage src="/images/insights/runway/02_hero.png" alt="Runway Gen-4 Review editorial hero" />
        </header>

        <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-24">
          <Section title="Introduction">
            <p>
              Runway Gen-4 was tested as part of the HARU production workflow. The goal was not simply to generate visually impressive clips. The real test was whether the tool could preserve an original character, create believable motion, and produce usable shots that could be connected into a longer story.
            </p>
            <p>
              Runway currently offers newer models and tools, but this article focuses on the practical lessons learned while producing HARU scenes with Gen-4. It is not a claim that Gen-4 is the best model. It is a production note about what worked, what needed control, and where manual planning still mattered.
            </p>
            <aside className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Independent Editorial Review</p>
              <p className="mt-4 text-base leading-7 text-[#76685d]">
                This article is an independent editorial review created by FourFeetz Studios.
              </p>
              <p className="mt-3 text-base leading-7 text-[#76685d]">
                FourFeetz is not affiliated with, endorsed by, or sponsored by Runway.
              </p>
            </aside>
          </Section>

          <Section title="What Gen-4 Does">
            <p>
              Gen-4 Video uses an input image and a text prompt to generate short video clips. In practice, the input image strongly influences composition and character appearance, while the text prompt works best when it focuses mainly on movement, camera behavior, and scene action.
            </p>
            <p>
              Short controlled prompts often worked better than overloaded prompts. When the image already contained the right composition, pose, lighting, and character details, the prompt could stay focused on what needed to move.
            </p>
            <aside className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Production note</p>
              <p className="mt-4 text-xl font-black leading-8 text-[#2b2119]">A strong first frame is usually more important than a long prompt.</p>
            </aside>
          </Section>

          <Section title="Our Test With HARU">
            <p>
              For FourFeetz, the workflow began before Runway. The most important step was creating the exact First Shot Image needed for animation, then using Gen-4 to turn that approved frame into a short cinematic moment.
            </p>
            <ArticleImage src="/images/insights/runway/03_workflow.png" alt="Runway production workflow diagram" />
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Workflow checks</p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[#76685d]">
                {workflowChecks.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <p>
              The full private HARU master prompt, seeds, hidden settings, and internal production templates are not published. The useful public lesson is simpler: continuity came from careful references, narrow motion goals, and scene-to-scene planning.
            </p>
          </Section>

          <Section title="Character Consistency">
            <p>
              Gen-4 produced the strongest character consistency when the reference image was already accurate. It was useful for preserving HARU&apos;s general face, fur color, collar, and scene mood, especially when movement stayed simple and controlled.
            </p>
            <ArticleImage src="/images/insights/runway/04_character-consistency.png" alt="Runway character consistency visual documentation" />
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-[#2b2119]">Strengths</h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-[#76685d]">
                  {consistencyStrengths.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-[#2b2119]">Limitations</h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-[#76685d]">
                  {consistencyLimits.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
          </Section>

          <Section title="Motion Quality">
            <p>
              Runway can create natural head turns, walking motion, wind movement, and subtle camera motion when the prompt is focused. The most reliable generations asked for one clear subject action and one clear camera behavior.
            </p>
            <p>
              It may struggle with precise paw movement, entering or leaving vehicles, interacting with detailed objects, complicated multi-step action, and maintaining anatomy during fast movement.
            </p>
            <ArticleImage src="/images/insights/runway/06_motion-quality.png" alt="Runway motion quality visual documentation" />
            <p className="rounded-3xl border border-[#eadfce] bg-white p-6 text-xl font-black leading-8 text-[#2b2119] shadow-sm">
              Practical recommendation: generate several short controlled versions instead of asking for one complex shot.
            </p>
          </Section>

          <Section title="Camera Control">
            <p>
              Simple and physically plausible camera language worked best: slow dolly in, gentle tracking shot, fixed camera, shallow depth of field, side profile, over-the-shoulder framing, and golden-hour lighting.
            </p>
            <p>
              Camera instructions became less reliable when too many moves were combined at once. A short shot with one believable camera behavior was usually easier to edit into a sequence.
            </p>
            <ArticleImage src="/images/insights/runway/05_camera-control.png" alt="Runway camera control visual documentation" />
            <blockquote className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Simplified public example</p>
              <p className="mt-4 text-xl font-black leading-8 text-[#2b2119]">
                &quot;HARU turns toward the open window as the camera slowly tracks beside the moving car. Warm golden-hour light, natural fur movement, cinematic 35mm lens.&quot;
              </p>
            </blockquote>
          </Section>

          <Section title="Workflow Speed">
            <p>
              Runway was useful for rapid visual testing and for creating multiple variations from one approved reference image. It helped explore direction quickly, but it did not make AI video production automatic.
            </p>
            <p>
              The main production time was still spent preparing the reference image, selecting the best generation, maintaining continuity, correcting failed motion, and editing clips together into a coherent sequence.
            </p>
          </Section>

          <Section title="What Worked Best">
            <div className="grid gap-4 md:grid-cols-2">
              {workedBest.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="What Did Not Work Well">
            <div className="grid gap-4 md:grid-cols-2">
              {didNotWork.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Verdict">
            <p>
              Runway Gen-4 was most useful when treated as one part of a controlled production pipeline rather than as a one-click filmmaking tool.
            </p>
            <p>
              Its strongest value came from turning carefully prepared reference images into short cinematic moments. For FourFeetz, the quality of the First Shot Image, clear motion direction, and scene-to-scene planning mattered more than prompt length.
            </p>
            <ArticleImage src="/images/insights/runway/07_rating-card.png" alt="Runway practical production rating card" />
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">FourFeetz practical production rating</p>
              <div className="mt-5 grid gap-3">
                {ratings.map((rating) => (
                  <div key={rating.label} className="flex items-center justify-between gap-4 border-t border-[#eadfce] pt-3 first:border-t-0 first:pt-0">
                    <p className="font-bold text-[#76685d]">{rating.label}</p>
                    <p className="font-black text-[#2b2119]">{rating.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>

        <section className="border-t border-[#eadfce] bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Related Content</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Continue Exploring</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.title} href={item.href} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
                  <h3 className="text-2xl font-black text-[#2b2119]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#76685d]">{item.desc}</p>
                  <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#a67c52]">Open</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
