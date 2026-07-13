import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/google-flow-complete-guide.png";

export const metadata: Metadata = {
  title: "Google Flow Complete Guide | FourFeetz Studios",
  description:
    "A practical guide to using Google Flow for cinematic AI video workflows, scene planning, prompt control, camera movement and publishing.",
  alternates: {
    canonical: "/insights/google-flow-complete-guide",
  },
  openGraph: {
    title: "Google Flow Complete Guide | FourFeetz Studios",
    description:
      "A practical guide to using Google Flow for cinematic AI video workflows, scene planning, prompt control, camera movement and publishing.",
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
    "value": "Cinematic workflow planning"
  },
  {
    "label": "Core Strength",
    "value": "Scene continuity"
  },
  {
    "label": "Production Fit",
    "value": "AI film sequences"
  },
  {
    "label": "FourFeetz Use",
    "value": "Reference to final edit"
  }
];
const sections = [
  {
    "title": "Introduction",
    "body": [
      "Google Flow is most useful when treated as a structured production environment rather than a place to chase random generations. The value comes from organizing story, references, scenes, camera language and export decisions into one repeatable workflow.",
      "For FourFeetz Studios, the important question is whether a tool can help create consistent original films, short-form edits and character-based worlds without losing creative control."
    ]
  },
  {
    "title": "What is Google Flow",
    "body": [
      "Google Flow is designed around AI video creation, scene development and cinematic iteration. It gives creators a way to think in sequences instead of isolated clips.",
      "The best results come from preparing the story and visual direction before generation begins, then using Flow to test shots and refine continuity."
    ]
  },
  {
    "title": "Key Features",
    "body": [
      "The most useful features are scene organization, reference-driven direction, camera-aware prompting and export planning for social formats."
    ],
    "cards": [
      {
        "title": "Scene Structure",
        "desc": "Organize a film as connected shots instead of disconnected outputs."
      },
      {
        "title": "Reference Control",
        "desc": "Use prepared images and visual notes to keep the look consistent."
      },
      {
        "title": "Camera Language",
        "desc": "Plan push-ins, tracking shots, close-ups and transitions before rendering."
      },
      {
        "title": "Publishing Mindset",
        "desc": "Think about horizontal master edits and vertical cutdowns from the start."
      }
    ]
  },
  {
    "title": "Workflow",
    "body": [
      "A clean Flow workflow starts with the story and ends with a publishable edit. Each stage should reduce ambiguity before the next generation step."
    ],
    "steps": [
      "Story",
      "References",
      "Scenes",
      "Camera",
      "Generation",
      "Edit",
      "Publish"
    ]
  },
  {
    "title": "Prompt Tips",
    "body": [
      "Prompts work best when they describe one subject, one action, one camera movement and one lighting style. Long prompts often create conflicting priorities.",
      "Keep character descriptions reusable, then change only the action and camera instruction for each shot."
    ],
    "prompt": "A cinematic original animal character walks through a quiet rural road at golden hour. Smooth tracking shot, stable subject framing, warm natural light, realistic motion, shallow depth of field, consistent character design."
  },
  {
    "title": "Camera Controls",
    "body": [
      "Camera controls matter because they turn an AI clip into a film shot. Slow tracking, push-in, pull-out and orbit movements are easier to edit than uncontrolled drifting motion."
    ],
    "cards": [
      {
        "title": "Tracking",
        "desc": "Best for movement and journey scenes."
      },
      {
        "title": "Push In",
        "desc": "Best for emotional reveals and character moments."
      },
      {
        "title": "Pull Out",
        "desc": "Best for endings, scale and environment reveals."
      },
      {
        "title": "Orbit",
        "desc": "Best for hero shots and character showcases."
      }
    ]
  },
  {
    "title": "Scene Management",
    "body": [
      "Scene management is where Flow becomes useful for longer work. Keep scene names, reference images, lighting notes and final-frame handoffs organized.",
      "The last usable frame from one shot can become the visual bridge into the next scene when continuity matters."
    ]
  },
  {
    "title": "Export Options",
    "body": [
      "Plan exports for the master film and social versions separately. A 16:9 cinematic master can later become a vertical cut, but only if safe framing and subtitles were considered early."
    ]
  },
  {
    "title": "Strengths",
    "body": [
      "Google Flow is strongest for creators who think like directors: story first, then references, camera, continuity and edit rhythm."
    ],
    "cards": [
      {
        "title": "Structured Production",
        "desc": "Good for organizing multi-shot work."
      },
      {
        "title": "Cinematic Direction",
        "desc": "Encourages camera and scene thinking."
      },
      {
        "title": "Reference Workflow",
        "desc": "Pairs well with character sheets and moodboards."
      },
      {
        "title": "Social Adaptation",
        "desc": "Useful when planning multiple output formats."
      }
    ]
  },
  {
    "title": "Weaknesses",
    "body": [
      "Flow still needs strong human direction. Weak references, vague prompts and inconsistent shot planning can produce uneven results."
    ],
    "cards": [
      {
        "title": "Not Automatic",
        "desc": "It does not replace storyboarding or editing."
      },
      {
        "title": "Reference Dependent",
        "desc": "Poor first frames lead to weak clips."
      },
      {
        "title": "Iteration Needed",
        "desc": "Several attempts may be required for final shots."
      },
      {
        "title": "Continuity Work",
        "desc": "Long-form consistency still needs manual review."
      }
    ]
  },
  {
    "title": "Pricing",
    "body": [
      "Pricing and access can change over time, so production teams should confirm the current plan before committing a large workflow. The practical question is less about the cheapest plan and more about whether the tool saves enough iteration time to justify use."
    ]
  },
  {
    "title": "Final Recommendation",
    "body": [
      "Google Flow fits creators who want a more organized AI filmmaking workflow. It is especially valuable when the goal is not one impressive clip, but a sequence of shots that can become a finished story."
    ],
    "note": {
      "label": "FourFeetz Verdict",
      "text": "Use Flow as a planning and scene-control layer, not as a substitute for story direction."
    }
  }
];
const scores = [
  {
    "label": "Workflow Simplicity",
    "value": "4.7/5"
  },
  {
    "label": "Scene Management",
    "value": "4.8/5"
  },
  {
    "label": "Camera Control",
    "value": "4.6/5"
  },
  {
    "label": "Export Readiness",
    "value": "4.4/5"
  },
  {
    "label": "Overall",
    "value": "4.7/5"
  }
];
const related = [
  {
    "title": "Kling vs Veo",
    "href": "/insights/kling-vs-veo",
    "desc": "A side-by-side comparison of two leading AI video systems for filmmaking."
  },
  {
    "title": "A Repeatable AI Video Workflow",
    "href": "/insights/ai-video-workflow",
    "desc": "A complete production pipeline from story planning to publishing."
  },
  {
    "title": "Camera Movement Guide",
    "href": "/insights/camera-movement-guide",
    "desc": "Camera language for cinematic AI-generated shots."
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google Flow Complete Guide",
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
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Google Flow Complete Guide</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            A practical guide to using Google Flow for cinematic AI video workflows, scene planning, prompt control, camera movement and publishing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">8 min</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="Google Flow Complete Guide editorial hero"
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
