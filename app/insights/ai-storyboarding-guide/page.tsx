import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/ai-storyboarding-guide.png";

export const metadata: Metadata = {
  title: "AI Storyboarding Guide | FourFeetz Studios",
  description:
    "A practical AI storyboarding guide for planning shots, character position, camera direction, continuity and production workflows before generating video.",
  alternates: {
    canonical: "/insights/ai-storyboarding-guide",
  },
  openGraph: {
    title: "AI Storyboarding Guide | FourFeetz Studios",
    description:
      "A practical AI storyboarding guide for planning shots, character position, camera direction, continuity and production workflows before generating video.",
    images: [heroImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [heroImage],
  },
};

const quickVerdict = [
  {
    "label": "Best For",
    "value": "Planning before generation"
  },
  {
    "label": "Core Benefit",
    "value": "Fewer failed clips"
  },
  {
    "label": "Production Fit",
    "value": "Short films and series"
  },
  {
    "label": "Overall",
    "value": "Storyboard before rendering"
  }
];
const sections = [
  {
    "title": "Introduction",
    "body": [
      "Storyboarding is the quiet step that saves the most time in AI filmmaking. It lets creators decide what the shot should do before spending credits and attention on generation.",
      "For FourFeetz, a storyboard does not need to be complicated. It needs to define character position, camera direction, action, lighting and emotional purpose."
    ]
  },
  {
    "title": "Why Storyboards Matter",
    "body": [
      "AI video tools are powerful, but they respond better when the director already knows the shot. Storyboards turn vague ideas into visual decisions."
    ]
  },
  {
    "title": "Shot Planning",
    "body": [
      "Plan each shot with one purpose. A shot can introduce a character, show movement, reveal a place, create emotion or transition to the next scene."
    ],
    "cards": [
      {
        "title": "Opening Shot",
        "desc": "Establish place, tone and subject."
      },
      {
        "title": "Character Shot",
        "desc": "Show emotion and identity."
      },
      {
        "title": "Movement Shot",
        "desc": "Show travel, action or change."
      },
      {
        "title": "Closing Shot",
        "desc": "Create memory and resolution."
      }
    ]
  },
  {
    "title": "Character Position",
    "body": [
      "Character position affects continuity and reframing. Decide whether the character is centered, left-facing, right-facing, close-up or full-body before generating."
    ]
  },
  {
    "title": "Camera Direction",
    "body": [
      "Camera direction should be written into the storyboard panel. Use one movement per shot: tracking, push-in, pull-out, orbit, pan or tilt."
    ]
  },
  {
    "title": "Continuity",
    "body": [
      "Continuity means the next shot remembers the previous one. Keep lighting, accessories, character scale and movement direction stable."
    ]
  },
  {
    "title": "Workflow",
    "body": [
      "A practical storyboard workflow moves from story beats to panels, then from panels to first frames and video generation."
    ],
    "steps": [
      "Story Beat",
      "Panel",
      "Reference",
      "Prompt",
      "Generate",
      "Edit"
    ]
  },
  {
    "title": "Example Storyboard",
    "body": [
      "A simple HARU-style sequence could use six panels: road, close-up, walking, window view, first step and sunset. Each panel should have a clear action and camera note."
    ],
    "prompt": "Panel 03: Character walks along a countryside path from left to right. Wide 35mm tracking shot, golden-hour light, calm expression, warm rural background, consistent character design."
  },
  {
    "title": "Mistakes",
    "body": [
      "Most storyboard mistakes come from asking too much from one shot."
    ],
    "cards": [
      {
        "title": "Too Many Actions",
        "desc": "One panel should not contain an entire scene."
      },
      {
        "title": "No Camera Note",
        "desc": "Without camera direction, the output can drift."
      },
      {
        "title": "Changing Light",
        "desc": "Continuity breaks when every panel uses a new mood."
      },
      {
        "title": "No Transition",
        "desc": "Shots should connect visually or emotionally."
      }
    ]
  },
  {
    "title": "Recommendations",
    "body": [
      "Use small storyboards. Six clear panels are better than twenty vague ones."
    ],
    "cards": [
      {
        "title": "Write the Purpose",
        "desc": "Every panel needs a reason to exist."
      },
      {
        "title": "Keep One Action",
        "desc": "One action makes AI video more controllable."
      },
      {
        "title": "Reuse References",
        "desc": "Character and lighting references protect continuity."
      },
      {
        "title": "Plan Social Crops",
        "desc": "Leave safe space for vertical versions."
      }
    ]
  },
  {
    "title": "Final Verdict",
    "body": [
      "Storyboarding makes AI filmmaking feel directed instead of random. It reduces retries, improves continuity and gives every generated shot a reason to exist."
    ],
    "note": {
      "label": "FourFeetz Verdict",
      "text": "Storyboard first, generate second, edit with intention."
    }
  }
];
const scores = [
  {
    "label": "Planning Value",
    "value": "5/5"
  },
  {
    "label": "Continuity",
    "value": "5/5"
  },
  {
    "label": "Production Speed",
    "value": "4.6/5"
  },
  {
    "label": "Prompt Quality",
    "value": "4.7/5"
  },
  {
    "label": "Overall",
    "value": "4.8/5"
  }
];
const related = [
  {
    "title": "A Repeatable AI Video Workflow",
    "href": "/insights/ai-video-workflow",
    "desc": "A complete production pipeline from story planning to publishing."
  },
  {
    "title": "Camera Movement Guide",
    "href": "/insights/camera-movement-guide",
    "desc": "Camera language for cinematic AI-generated shots."
  },
  {
    "title": "Google Flow Complete Guide",
    "href": "/insights/google-flow-complete-guide",
    "desc": "Turn storyboards into a managed AI video workflow."
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Storyboarding Guide",
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

type Card = { title: string; desc: string };
type SectionData = {
  title: string;
  body: string[];
  cards?: Card[];
  steps?: string[];
  prompt?: string;
  note?: { label: string; text: string };
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[#eadfce] py-12 first:border-t-0 first:pt-0 md:py-16">
      <h2 className="text-3xl font-black tracking-tight text-[#2b2119] md:text-5xl">{title}</h2>
      <div className="mt-6 space-y-5 text-lg leading-8 text-[#76685d]">{children}</div>
    </section>
  );
}

function CompactCard({ title, desc }: Card) {
  return (
    <article className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
      <h3 className="text-xl font-black text-[#2b2119]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[#76685d]">{desc}</p>
    </article>
  );
}

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
      <div className="grid gap-3 text-center text-sm font-black uppercase tracking-[0.16em] text-[#6f4e37] md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="rounded-2xl bg-[#f7f2ea] px-4 py-4">
            <span>{step}</span>
            {index < steps.length - 1 ? <span className="ml-2 text-[#a67c52]">-&gt;</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreCard({ scores }: { scores: { label: string; value: string }[] }) {
  return (
    <article className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">FourFeetz practical score</p>
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

function ArticleSection({ section }: { section: SectionData }) {
  return (
    <Section title={section.title}>
      {section.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.note ? (
        <aside className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">{section.note.label}</p>
          <p className="mt-4 text-xl font-black leading-8 text-[#2b2119]">{section.note.text}</p>
        </aside>
      ) : null}
      {section.steps ? <Pipeline steps={section.steps} /> : null}
      {section.prompt ? (
        <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Copyable prompt block</p>
          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-[#f7f2ea] p-5 text-sm font-semibold leading-7 text-[#2b2119]"><code>{section.prompt}</code></pre>
        </div>
      ) : null}
      {section.cards ? (
        <div className="grid gap-4 md:grid-cols-2">
          {section.cards.map((card) => <CompactCard key={card.title} {...card} />)}
        </div>
      ) : null}
    </Section>
  );
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article>
        <header className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Workflow</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">AI Storyboarding Guide</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            A practical AI storyboarding guide for planning shots, character position, camera direction, continuity and production workflows before generating video.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">7 min</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="AI Storyboarding Guide editorial hero"
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
              This quick verdict summarizes where the tool or workflow fits best inside a practical FourFeetz production pipeline.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {quickVerdict.map((item) => (
                <article key={item.label} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">{item.label}</p>
                  <p className="mt-3 text-2xl font-black text-[#2b2119]">{item.value}</p>
                </article>
              ))}
            </div>
          </Section>

          {sections.map((section) => <ArticleSection key={section.title} section={section} />)}

          <Section title="Final Scores">
            <ScoreCard scores={scores} />
          </Section>
        </div>

        <section className="border-t border-[#eadfce] bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Related Articles</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Continue Exploring</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
