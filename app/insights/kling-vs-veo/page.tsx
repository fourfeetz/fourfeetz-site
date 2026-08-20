import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/kling-vs-veo.png";

export const metadata: Metadata = {
  title: "Kling vs Veo: AI Video Comparison | FourFeetz Studios",
  description:
    "A production-planning comparison of the questions creators should verify when choosing Kling or Veo for motion, continuity, camera control, and editing.",
  alternates: { canonical: "/insights/kling-vs-veo" },
  openGraph: {
    title: "Kling vs Veo: AI Video Comparison | FourFeetz Studios",
    description:
      "A production-planning comparison of the questions creators should verify when choosing Kling or Veo for motion, continuity, camera control, and editing.",
    images: [heroImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [heroImage],
  },
};

const quickVerdict = [
  { label: "Fast animal motion", focus: "Check anatomy, ground contact, and readable action" },
  { label: "Character continuity", focus: "Compare identity through the full clip and adjacent shots" },
  { label: "Camera direction", focus: "Verify the move starts, settles, and leaves an edit point" },
  { label: "Prompt response", focus: "Change one visible instruction at a time" },
  { label: "Workflow fit", focus: "Compare accepted material, not generation volume" },
  { label: "Current terms", focus: "Confirm access, rights, credits, and limits live" },
];

const comparisonSetup = [
  "Use the same approved first-frame direction wherever the tools permit it",
  "One clear subject action per generation",
  "One clear camera instruction per comparison",
  "Warm daylight or golden-hour lighting language",
  "Review based on edit-ready candidates, not an impressive isolated output",
];

const workedBest = [
  { title: "Active Motion", desc: "Check whether fast movement keeps paws, body shape, direction, and a clean stopping point." },
  { title: "Cinematic Framing", desc: "Check whether the requested camera path remains physical, restrained, and editable." },
  { title: "Simple Actions", desc: "Use one primary subject action so a failure can be located and revised." },
  { title: "Prepared References", desc: "Approve the starting image before asking prompt text to solve identity and staging together." },
];

const didNotWork = [
  { title: "Too Many Instructions", desc: "Layering several actions, camera moves, and style requests reduced control." },
  { title: "Fast Anatomy Changes", desc: "Complex running, jumping, and object interaction still needed repeated attempts." },
  { title: "Long Continuity Assumptions", desc: "Neither tool replaced manual planning for multi-shot character continuity." },
  { title: "One Perfect Output", desc: "A single attractive result cannot establish repeatability or continuity by itself." },
];

const related = [
  { title: "Runway Gen-4.5 Review", href: "/insights/runway-gen45-review", desc: "The current FourFeetz review of character consistency, motion quality, and camera control." },
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
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://fourfeetz.com" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://fourfeetz.com/insights" },
    { "@type": "ListItem", position: 3, name: "Studio Analysis", item: "https://fourfeetz.com/insights/news" },
    { "@type": "ListItem", position: 4, name: "Kling vs Veo", item: "https://fourfeetz.com/insights/kling-vs-veo" },
  ],
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

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article>
        <header className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="text-sm font-bold text-[#8a7768]">
            <Link href="/">Home</Link><span className="px-2">/</span>
            <Link href="/insights">Insights</Link><span className="px-2">/</span>
            <Link href="/insights/news">Studio Analysis</Link>
          </nav>
          <p className="mt-10 text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Studio Analysis · Tools</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Kling vs Veo</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            A production-planning comparison of the questions creators should verify before choosing either tool for motion, continuity, camera direction, and editability.
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
              This page does not assign a winner or a numerical score. It organizes the production questions that should be checked with your own authorized material before either tool is selected for a shot.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {quickVerdict.map((item) => (
                <article key={item.label} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">{item.label}</p>
                  <p className="mt-3 text-xl font-black leading-8 text-[#2b2119]">{item.focus}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Why We Compared Them">
            <p>
              FourFeetz uses AI video tools inside a controlled production workflow, not as one-click filmmaking machines. A useful comparison therefore begins with the shot that must survive editing, continuity checks, and repeated character use.
            </p>
            <p>
              The repository does not contain a matched Kling-and-Veo benchmark set that supports a universal performance ranking. The sections below are a planning framework: hold the reference and shot purpose steady, then record the first visible failure and the editorial value of each candidate.
            </p>
          </Section>

          <Section title="Comparison Setup">
            <p>
              Use the same production mindset as the HARU workflow: prepare the first frame carefully, ask for one subject action, define one camera behavior, then judge whether the output can connect to the next shot.
            </p>
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Review conditions</p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[#76685d]">
                {comparisonSetup.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Copyable prompt block</p>
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-[#f7f2ea] p-5 text-sm font-semibold leading-7 text-[#2b2119]"><code>{publicPrompt}</code></pre>
            </div>
          </Section>

          <Section title="Walking Motion">
            <p>
              Walking shots are deceptively difficult because the motion must feel natural while the body shape remains stable. For either tool, inspect foot order, ground contact, body scale, direction, and whether the character settles into an editable final pose.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <CompactCard title="Kling review question" desc="Does direct motion wording preserve anatomy and a clean stopping point?" />
              <CompactCard title="Veo review question" desc="Does cinematic camera wording preserve framing and character identity through the full walk?" />
            </div>
          </Section>

          <Section title="Running Motion">
            <p>
              Running increases the difficulty for any animal-character model. Speed can hide extra limbs, sliding contact, scale changes, and a camera move that no longer matches the planned direction. Treat fast action as a separate production problem rather than assuming the result of a walking shot will transfer.
            </p>
            <aside className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Recommendation</p>
              <p className="mt-4 text-xl font-black leading-8 text-[#2b2119]">For fast action, generate several short controlled clips instead of asking either tool for one long perfect run.</p>
            </aside>
          </Section>

          <Section title="Close-Up Review">
            <p>
              Close-ups make small identity changes easier to see. Compare muzzle width, eye spacing, ear placement, accessories, coat texture, and the emotional tone of the reference through the entire clip.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <CompactCard title="Kling" desc="Useful for expressive variations, but detail drift needs careful review." />
              <CompactCard title="Review criterion" desc="Approve a close-up only when identity, light, and camera distance remain coherent with adjacent shots." />
            </div>
          </Section>

          <Section id="camera-movement" title="Camera Movement">
            <p>
              Camera behavior should be evaluated independently from subject performance. A slow track, restrained push, or locked frame must begin and settle cleanly without changing lens behavior or overwhelming the character action.
            </p>
            <p>
              Use camera instructions that could exist in the physical world, and compare the opening and closing composition before judging surface polish.
            </p>
          </Section>

          <Section title="Prompt Following">
            <p>
              Prompt following must be judged against visible instructions, not the overall attractiveness of a clip. Change one action or camera instruction at a time so the reason for a difference remains legible.
            </p>
            <p>
              For both tools, short prompts outperformed overloaded prompts. A good first frame plus one clear movement direction was more reliable than a long paragraph full of competing instructions.
            </p>
          </Section>

          <Section title="Workflow Speed">
            <p>
              Workflow speed depends on access, queue conditions, settings, the number of rejected candidates, and the amount of repair required in the edit. Compare the path to an accepted shot in your own project rather than relying on a universal speed claim.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <CompactCard title="Iteration check" desc="Record what changed, why a candidate failed, and whether the next attempt tests one known variable." />
              <CompactCard title="Finishing check" desc="Place the accepted candidate in the edit before deciding that surface polish reduced total work." />
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

          <Section title="Verdict">
            <p>
              Neither tool receives a universal FourFeetz score here. Choose the candidate that passes the current shot&apos;s identity, anatomy, camera, continuity, and edit requirements with the clearest revision path.
            </p>
            <p>
              Current availability, rights, pricing, and output limits must be checked in each service before production. A tool comparison is useful only when the reference, shot purpose, and acceptance criteria are visible.
            </p>
          </Section>
        </div>

        <section className="border-t border-[#eadfce] bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4"><p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Related Articles</p><Link href="/insights/news" className="font-black text-[#6f4e37]">All Studio Analysis →</Link></div>
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

