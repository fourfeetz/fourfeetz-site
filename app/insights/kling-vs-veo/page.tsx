import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/kling-vs-veo.png";

export const metadata: Metadata = {
  title: "Kling vs Veo: AI Video Comparison | FourFeetz Studios",
  description:
    "A practical comparison of Kling and Veo for motion quality, character consistency, camera control, prompt following, and AI filmmaking workflows.",
  alternates: {
    canonical: "/insights/kling-vs-veo",
  },
  openGraph: {
    title: "Kling vs Veo: AI Video Comparison | FourFeetz Studios",
    description:
      "A practical comparison of Kling and Veo for motion quality, character consistency, camera control, prompt following, and AI filmmaking workflows.",
    images: [heroImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [heroImage],
  },
};

const quickVerdict = [
  { label: "Motion Quality", winner: "Kling" },
  { label: "Character Consistency", winner: "Veo" },
  { label: "Camera Control", winner: "Veo" },
  { label: "Prompt Following", winner: "Kling" },
  { label: "Production Speed", winner: "Kling" },
  { label: "Overall Cinematic Quality", winner: "Veo" },
];

const testSetup = [
  "Same first-frame image direction for each test whenever possible",
  "One clear subject action per generation",
  "One clear camera instruction per test",
  "Warm daylight or golden-hour lighting language",
  "Review based on usable shots, not only impressive single outputs",
];

const workedBest = [
  { title: "Kling for Active Motion", desc: "Kling felt strongest when the scene needed energy, speed, and direct prompt response." },
  { title: "Veo for Cinematic Framing", desc: "Veo produced the most polished camera behavior and natural cinematic atmosphere." },
  { title: "Simple Actions", desc: "Both tools performed better when the shot had one primary subject action." },
  { title: "Prepared References", desc: "The quality of the starting image mattered more than adding longer prompt text." },
];

const didNotWork = [
  { title: "Too Many Instructions", desc: "Layering several actions, camera moves, and style requests reduced control." },
  { title: "Fast Anatomy Changes", desc: "Complex running, jumping, and object interaction still needed repeated attempts." },
  { title: "Long Continuity Assumptions", desc: "Neither tool replaced manual planning for multi-shot character continuity." },
  { title: "One Perfect Output", desc: "The best result usually came from comparing several short generations." },
];

const klingScores = [
  { label: "Motion Quality", value: "4.7/5" },
  { label: "Character Consistency", value: "4.2/5" },
  { label: "Camera Control", value: "4.1/5" },
  { label: "Prompt Following", value: "4.6/5" },
  { label: "Workflow Speed", value: "4.7/5" },
  { label: "Cinematic Quality", value: "4.4/5" },
  { label: "Overall", value: "4.5/5" },
];

const veoScores = [
  { label: "Motion Quality", value: "4.5/5" },
  { label: "Character Consistency", value: "4.8/5" },
  { label: "Camera Control", value: "4.9/5" },
  { label: "Prompt Following", value: "4.4/5" },
  { label: "Workflow Speed", value: "4.0/5" },
  { label: "Cinematic Quality", value: "4.9/5" },
  { label: "Overall", value: "4.6/5" },
];

const related = [
  { title: "Runway Gen-4 Review", href: "/insights/runway-gen-4-review", desc: "A practical review of character consistency, motion quality, and camera control." },
  { title: "A Repeatable AI Video Workflow", href: "/insights/repeatable-ai-video-workflow", desc: "A production pipeline for planning, generating, editing, and publishing AI video." },
  { title: "Writing Better Image-to-Video Prompts", href: "/insights/image-to-video-prompts", desc: "Prompt structure for movement, lighting, environment, and continuity." },
  { title: "Camera Movement Guide for AI Filmmakers", href: "/insights/camera-movement-guide", desc: "A guide to tracking shots, push-ins, orbits, pans, tilts, and cinematic AI camera movement." },
];

const publicPrompt = `A small original animal character walks along a quiet country road at golden hour. The camera slowly tracks beside the character from a low side-profile angle. Natural body movement, soft warm light, gentle wind in the environment, cinematic 35mm lens, shallow depth of field, calm emotional tone.`;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kling vs Veo",
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

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="border-t border-[#eadfce] py-12 first:border-t-0 first:pt-0 md:py-16">
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

function ScoreCard({ title, scores }: { title: string; scores: { label: string; value: string }[] }) {
  return (
    <article className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-black text-[#2b2119]">{title}</h3>
      <div className="mt-5 grid gap-3">
        {scores.map((score) => (
          <div key={score.label} className="flex items-center justify-between gap-4 border-t border-[#eadfce] pt-3 first:border-t-0 first:pt-0">
            <p className="text-base font-bold text-[#76685d]">{score.label}</p>
            <p className="text-base font-black text-[#2b2119]">{score.value}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article>
        <header className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Tools</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Kling vs Veo</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            A practical side-by-side comparison of motion quality, character consistency, camera control, prompt following, workflow speed, and overall usefulness for AI filmmaking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">8 min read</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="Kling vs Veo editorial comparison thumbnail"
              width={1400}
              height={788}
              priority
              className="h-auto w-full rounded-[24px] border border-[#eadfce] shadow-xl shadow-[#6f4e37]/10"
            />
          </figure>
        </header>

        <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-24">
          <Section title="Quick Verdict">
            <p>
              Kling felt faster and more responsive for action-oriented tests, while Veo produced the more polished cinematic image when camera control and character stability mattered most.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {quickVerdict.map((item) => (
                <article key={item.label} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">{item.label}</p>
                  <p className="mt-3 text-2xl font-black text-[#2b2119]">{item.winner}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Why We Compared Them">
            <p>
              FourFeetz uses AI video tools as part of a controlled production workflow, not as one-click filmmaking machines. The real question was not which model could make the flashiest clip, but which one produced shots that could survive editing, continuity checks, and repeated character use.
            </p>
            <p>
              Kling and Veo were compared because both are useful for image-to-video production, short cinematic shots, social video tests, and original character workflows. The test focused on practical usefulness for AI filmmaking rather than brand hype.
            </p>
          </Section>

          <Section title="Test Setup">
            <p>
              The comparison used the same production mindset as the HARU workflow: prepare the first frame carefully, ask for one subject action, define one camera behavior, then judge whether the output could be connected to the next shot.
            </p>
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Review conditions</p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[#76685d]">
                {testSetup.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Copyable prompt block</p>
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-[#f7f2ea] p-5 text-sm font-semibold leading-7 text-[#2b2119]"><code>{publicPrompt}</code></pre>
            </div>
          </Section>

          <Section title="Walking Test">
            <p>
              Walking shots are deceptively difficult because the motion must feel natural while the body shape remains stable. Kling produced energetic movement quickly and followed simple direction well. Veo produced smoother cinematic atmosphere and more stable framing, but sometimes felt slower to iterate.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <CompactCard title="Kling" desc="Best for fast walking tests, clear movement, and quick variations from the same setup." />
              <CompactCard title="Veo" desc="Best for controlled pace, steadier framing, and more refined cinematic softness." />
            </div>
          </Section>

          <Section title="Running Test">
            <p>
              Running increased the difficulty for both tools. Kling handled speed and momentum better, which made it useful for energetic tests. Veo kept the image more cinematic but was more sensitive to complex action and needed tighter shot planning.
            </p>
            <aside className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Recommendation</p>
              <p className="mt-4 text-xl font-black leading-8 text-[#2b2119]">For fast action, generate several short controlled clips instead of asking either tool for one long perfect run.</p>
            </aside>
          </Section>

          <Section title="Close-Up Test">
            <p>
              Close-ups revealed the biggest difference in character handling. Veo was stronger at preserving a polished face, soft lighting, and believable camera presence. Kling remained useful, but facial proportions and fine details were more likely to shift when the shot asked for emotional nuance.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <CompactCard title="Kling" desc="Useful for expressive variations, but detail drift needs careful review." />
              <CompactCard title="Veo" desc="Stronger for stable close-ups, mood, and premium cinematic framing." />
            </div>
          </Section>

          <Section id="camera-movement" title="Camera Movement">
            <p>
              Veo had the advantage in camera movement. Slow tracking, gentle push-ins, over-the-shoulder framing, and cinematic depth generally felt more physically plausible. Kling was still useful for direct movement prompts, but the camera language needed to stay simple.
            </p>
            <p>
              The best results came from camera instructions that could exist in the real world: slow dolly in, fixed side profile, gentle tracking shot, shallow depth of field, and golden-hour lighting.
            </p>
          </Section>

          <Section title="Prompt Following">
            <p>
              Kling was slightly stronger at following direct action instructions. If the prompt asked for a clear movement, Kling often responded quickly and produced usable variations. Veo followed cinematic direction well, but complex prompt details sometimes became softer or more interpretive.
            </p>
            <p>
              For both tools, short prompts outperformed overloaded prompts. A good first frame plus one clear movement direction was more reliable than a long paragraph full of competing instructions.
            </p>
          </Section>

          <Section title="Workflow Speed">
            <p>
              Kling had the advantage for speed. It was useful when testing multiple motion ideas, comparing prompt phrasing, or producing quick options for short-form video. Veo felt slower as a workflow tool but often produced outputs that needed less visual polishing when the shot succeeded.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <CompactCard title="Kling" desc="Faster for iteration, prompt testing, and movement exploration." />
              <CompactCard title="Veo" desc="Slower, but often stronger for final cinematic candidate shots." />
            </div>
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

          <Section title="Final Scores">
            <div className="grid gap-5 md:grid-cols-2">
              <ScoreCard title="Kling" scores={klingScores} />
              <ScoreCard title="Veo" scores={veoScores} />
            </div>
          </Section>

          <Section title="Verdict">
            <p>
              Kling is the better choice when production speed, prompt responsiveness, and active motion are the priority. It fits early exploration, movement tests, and short clips where iteration speed matters.
            </p>
            <p>
              Veo is the stronger choice when the shot needs premium cinematic atmosphere, stable close-ups, and more refined camera behavior. For FourFeetz-style AI filmmaking, the best workflow is not choosing one tool forever. It is choosing the tool that fits the shot.
            </p>
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

