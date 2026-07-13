import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/ai-video-workflow.png";

export const metadata: Metadata = {
  title: "AI Video Production Workflow | FourFeetz Studios",
  description:
    "Learn the complete AI filmmaking workflow used by FourFeetz Studios, from story planning and reference images to Runway, Kling, Veo, editing and publishing.",
  alternates: {
    canonical: "/insights/ai-video-workflow",
  },
  openGraph: {
    title: "AI Video Production Workflow | FourFeetz Studios",
    description:
      "Learn the complete AI filmmaking workflow used by FourFeetz Studios, from story planning and reference images to Runway, Kling, Veo, editing and publishing.",
    images: [heroImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [heroImage],
  },
};

const pipeline = ["Story", "Reference Images", "Image Generation", "Image-to-Video", "Music", "Editing", "Publishing"];

const planningCards = [
  { title: "Story", desc: "Define the emotional reason the video exists before choosing a tool." },
  { title: "Shot List", desc: "Break the idea into short shots that can be generated, reviewed, and edited." },
  { title: "Character Bible", desc: "Lock the character design, personality, colors, and visual rules before production." },
  { title: "Moodboard", desc: "Collect lighting, framing, texture, and atmosphere references for the whole piece." },
];

const imageTools = [
  { title: "ChatGPT", desc: "Useful for visual direction, shot planning, prompt drafts, and character documentation." },
  { title: "Midjourney", desc: "Strong for polished concept frames, mood references, and cinematic image exploration." },
  { title: "Flux", desc: "Useful when the workflow needs controlled image generation and repeatable style tests." },
  { title: "Ideogram", desc: "Helpful for graphic layouts, typography-aware concepts, and social-friendly visual assets." },
];

const videoTools = [
  { title: "Runway", desc: "Best when the first frame is strong and the shot needs controlled cinematic motion." },
  { title: "Kling", desc: "Strong for fast iteration, active movement, and direct prompt-following tests." },
  { title: "Veo", desc: "Strong for cinematic camera behavior, stable close-ups, and polished atmosphere." },
];

const musicTools = [
  { title: "Suno", desc: "Fast soundtrack sketches, character themes, and emotional music drafts." },
  { title: "Udio", desc: "Useful for alternate song structures, mood exploration, and musical variations." },
  { title: "AIVA", desc: "Helpful for score-oriented composition and more traditional soundtrack planning." },
  { title: "ElevenLabs Voice", desc: "Useful for voice tests, narration, and character voice direction when needed." },
];

const editingTools = [
  { title: "CapCut", desc: "Fast short-form editing, captions, social exports, and lightweight finishing." },
  { title: "DaVinci Resolve", desc: "Color, sound, and timeline control for more polished film-style edits." },
  { title: "Premiere", desc: "Flexible editing for longer projects, versioning, and multi-platform exports." },
  { title: "Titles", desc: "Keep title design restrained so the AI footage remains the focus." },
  { title: "Subtitles", desc: "Use clean captions for accessibility and mobile viewing." },
  { title: "Sound Effects", desc: "Add small atmosphere details to make generated shots feel grounded." },
];

const publishing = [
  { title: "YouTube", desc: "Best for the main film, behind-the-scenes edits, and searchable evergreen work." },
  { title: "YouTube Shorts", desc: "Use for vertical cuts, teasers, character moments, and quick workflow clips." },
  { title: "Instagram", desc: "Strong for visual stills, reels, carousels, and character identity building." },
  { title: "TikTok", desc: "Useful for fast feedback, short hooks, experiments, and process-driven clips." },
  { title: "Naver Clip", desc: "A local distribution path for short vertical video and Korean-language discovery." },
];

const fourfeetzWorkflow = ["Story", "Character", "Reference Images", "Runway", "Kling", "CapCut", "Upload"];

const workedBest = [
  { title: "Keep one character reference", desc: "Use the same approved character sheet or portrait as the anchor for every scene." },
  { title: "Use one lighting style", desc: "A consistent lighting language makes separate shots feel like one world." },
  { title: "Short prompts", desc: "One action and one camera instruction are easier to control than a crowded paragraph." },
  { title: "Reuse last frame", desc: "Use the final frame from one approved clip as a bridge into the next shot." },
];

const commonMistakes = [
  { title: "Changing character every scene", desc: "New references in every shot make identity drift harder to control." },
  { title: "Different lighting", desc: "Mixed lighting styles make a sequence feel assembled instead of directed." },
  { title: "Too many actions", desc: "Complex prompts often create confusing motion and weaker continuity." },
  { title: "Long prompts", desc: "Longer text does not automatically create better direction or better animation." },
];

const ratings = [
  { label: "Workflow Simplicity", value: "4.6/5" },
  { label: "Production Speed", value: "4.5/5" },
  { label: "Character Consistency", value: "4.4/5" },
  { label: "Scalability", value: "4.7/5" },
  { label: "Content Quality", value: "4.6/5" },
  { label: "Overall", value: "4.6/5" },
];

const related = [
  { title: "Runway Gen-4 Review", href: "/insights/runway-gen-4-review", desc: "A practical review of character consistency, motion quality, and camera control." },
  { title: "Kling vs Veo", href: "/insights/kling-vs-veo", desc: "A side-by-side comparison of AI video tools for cinematic production." },
  { title: "Writing Better Image-to-Video Prompts", href: "/insights/image-to-video-prompts", desc: "Prompt structure for movement, lighting, environment, and continuity." },
  { title: "Camera Movement Guide", href: "/insights/camera-movement-guide", desc: "A guide to tracking shots, push-ins, orbits, pans, tilts, and cinematic AI camera movement." },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A Repeatable AI Video Workflow",
  description: metadata.description,
  image: heroImage,
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
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

function Pipeline({ items }: { items: string[] }) {
  return (
    <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
      <div className="grid gap-3 md:grid-cols-7 md:items-center">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-3 md:flex-col md:gap-2">
            <div className="flex min-h-16 w-full items-center justify-center rounded-2xl bg-[#f7f2ea] px-4 py-4 text-center text-sm font-black text-[#2b2119]">
              {item}
            </div>
            {index < items.length - 1 ? <span className="text-xl font-black text-[#a67c52] md:rotate-[-90deg]">↓</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article>
        <header className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Workflow</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">A Repeatable AI Video Workflow</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            A complete production workflow for creating cinematic AI videos using reference images, prompts, image-to-video tools, music generation, editing and publishing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">7 min read</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="AI video workflow editorial diagram"
              width={1400}
              height={788}
              priority
              className="h-auto w-full rounded-[24px] border border-[#eadfce] shadow-xl shadow-[#6f4e37]/10"
            />
          </figure>
        </header>

        <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-24">
          <Section title="Introduction">
            <p>
              AI video production becomes much easier when every project follows a repeatable path. Without a workflow, each shot becomes a new experiment. With a workflow, the team can improve one step at a time: story, references, generation, animation, sound, editing, and publishing.
            </p>
            <p>
              The goal is not to make the process rigid. The goal is to remove confusion so more creative energy can go into the film itself. A repeatable workflow saves time, improves quality, and makes original characters easier to protect across multiple scenes.
            </p>
          </Section>

          <Section title="Workflow Overview">
            <p>
              The FourFeetz workflow begins with story and ends with distribution. Each step creates the foundation for the next one, which keeps the production from depending on one lucky generation.
            </p>
            <Pipeline items={pipeline} />
          </Section>

          <Section title="Planning">
            <p>
              Planning is the quiet part of AI filmmaking, but it is where most production problems are prevented. Before opening a generation tool, define the story, list the shots, document the character, and collect the mood references.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {planningCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Reference Images">
            <p>
              Consistent reference images improve character consistency, camera angle, lighting, and continuity. They give each AI tool a visual anchor so the output is guided by a real frame instead of only a text description.
            </p>
            <aside className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Production note</p>
              <p className="mt-4 text-xl font-black leading-8 text-[#2b2119]">A strong reference image is the closest thing AI video has to a cinematographer, art director, and continuity supervisor in one frame.</p>
            </aside>
          </Section>

          <Section title="Image Generation">
            <p>
              Image generation creates the visual foundation for animation. The best tool depends on the production need: concept exploration, controlled references, typography-aware graphics, or prompt planning.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {imageTools.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Image to Video">
            <p>
              Image-to-video tools transform approved frames into motion. The strongest workflow does not rely on one model for every shot. Runway, Kling, and Veo each serve different production needs.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {videoTools.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Music">
            <p>
              Music should support the emotional structure of the film. In FourFeetz projects, the soundtrack is developed after the story tone is clear, so the music follows the character instead of overpowering the scene.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {musicTools.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Editing">
            <p>
              Editing turns separate AI clips into a film. This is where pacing, titles, subtitles, transitions, sound effects, and final color choices create one continuous viewing experience.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {editingTools.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Publishing">
            <p>
              Publishing is part of the creative workflow, not an afterthought. A single cinematic project can become a main film, a vertical cut, a behind-the-scenes note, a music post, and a resource for other creators.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {publishing.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="FourFeetz Workflow">
            <p>
              For FourFeetz Studios, the recommended workflow is simple enough to repeat but flexible enough to improve with each project.
            </p>
            <aside className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Recommended workflow</p>
              <div className="mt-5">
                <Pipeline items={fourfeetzWorkflow} />
              </div>
            </aside>
          </Section>

          <Section title="What Works Best">
            <div className="grid gap-4 md:grid-cols-2">
              {workedBest.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Common Mistakes">
            <div className="grid gap-4 md:grid-cols-2">
              {commonMistakes.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Final Recommendation">
            <p>
              The best AI video workflow is not built around one magic tool. It is built around repeatable decisions: clear story, stable references, short prompts, controlled motion, careful editing, and platform-aware publishing.
            </p>
            <p>
              For creators building original characters or recurring worlds, the workflow matters as much as the model. The more repeatable the process becomes, the more consistent the creative universe can feel.
            </p>
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">FourFeetz Verdict</p>
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
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Related Articles</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Continue Exploring</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

