import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/veo3-complete-review.png";

export const metadata: Metadata = {
  title: "Veo 3 Complete Review | FourFeetz Studios",
  description:
    "A practical Veo 3 review for AI filmmakers covering image quality, motion, prompt following, character consistency, camera control, workflow and pricing.",
  alternates: {
    canonical: "/insights/veo3-complete-review",
  },
  openGraph: {
    title: "Veo 3 Complete Review | FourFeetz Studios",
    description:
      "A practical Veo 3 review for AI filmmakers covering image quality, motion, prompt following, character consistency, camera control, workflow and pricing.",
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
    "value": "Cinematic image quality"
  },
  {
    "label": "Strongest Area",
    "value": "Camera and atmosphere"
  },
  {
    "label": "Needs Care",
    "value": "Workflow speed"
  },
  {
    "label": "Overall",
    "value": "Premium final shots"
  }
];
const sections = [
  {
    "title": "Introduction",
    "body": [
      "Veo 3 is best evaluated by asking whether its outputs can survive real production: editing, continuity checks, character review and publishing.",
      "For cinematic AI work, the strongest tools are not always the fastest. They are the tools that produce shots with enough polish and stability to become part of a finished film."
    ]
  },
  {
    "title": "Image Quality",
    "body": [
      "Image quality is Veo 3's most obvious strength. The strongest clips feel polished, dimensional and camera-aware, with natural lighting and premium composition.",
      "For FourFeetz-style character films, this matters because a single weak shot can make the whole sequence feel unfinished."
    ]
  },
  {
    "title": "Motion",
    "body": [
      "Veo 3 handles slow, believable motion especially well. Gentle walking, emotional close-ups and cinematic camera movement are more reliable than overloaded action scenes."
    ],
    "cards": [
      {
        "title": "Works Well",
        "desc": "Slow movement, atmospheric shots and controlled camera paths."
      },
      {
        "title": "Needs Review",
        "desc": "Fast running, complex interaction and multi-step action."
      }
    ]
  },
  {
    "title": "Prompt Following",
    "body": [
      "Prompt following is strongest when the prompt is short and visual. The first frame, lighting and camera direction should do most of the work."
    ],
    "prompt": "A quiet cinematic close-up of an original animal character looking toward warm sunset light. Slow push-in, soft natural fur movement, shallow depth of field, emotional tone, stable face and accessories."
  },
  {
    "title": "Character Consistency",
    "body": [
      "Veo 3 performs well when the reference image already contains the correct character design. It is especially useful for close-ups and hero shots where identity needs to remain clear.",
      "Consistency still depends on prepared character sheets, reusable prompts and avoiding unnecessary changes between scenes."
    ]
  },
  {
    "title": "Camera",
    "body": [
      "Camera behavior is one of Veo 3's biggest advantages. Push-ins, slow dolly shots and cinematic reveals often feel more physically plausible than with faster iteration tools."
    ]
  },
  {
    "title": "Workflow",
    "body": [
      "The best workflow is to use Veo 3 for hero-quality shots rather than every test. Create references elsewhere, test motion quickly if needed, then use Veo 3 where polish matters."
    ],
    "steps": [
      "Reference",
      "Prompt",
      "Generate",
      "Review",
      "Edit",
      "Publish"
    ]
  },
  {
    "title": "Pricing",
    "body": [
      "Pricing and access should be checked before production because plans can change. For studios, the key calculation is whether final-shot quality reduces editing and regeneration time."
    ]
  },
  {
    "title": "Strengths",
    "body": [
      "Veo 3 is strongest when the output needs to feel cinematic, premium and emotionally controlled."
    ],
    "cards": [
      {
        "title": "Premium Look",
        "desc": "Strong image quality and atmosphere."
      },
      {
        "title": "Camera Control",
        "desc": "Smooth movement and believable framing."
      },
      {
        "title": "Close-ups",
        "desc": "Good for character moments and polished hero shots."
      },
      {
        "title": "Consistency",
        "desc": "Reliable when reference material is strong."
      }
    ]
  },
  {
    "title": "Weaknesses",
    "body": [
      "The main weaknesses are speed, cost awareness and the need for strong pre-production. It is not a shortcut around planning."
    ],
    "cards": [
      {
        "title": "Slower Iteration",
        "desc": "Better for final candidates than rough testing."
      },
      {
        "title": "Still Needs Direction",
        "desc": "Weak prompts and weak references remain weak inputs."
      },
      {
        "title": "Complex Action",
        "desc": "Fast motion still requires careful review."
      },
      {
        "title": "Access Planning",
        "desc": "Production teams need to track availability and limits."
      }
    ]
  },
  {
    "title": "Final Score",
    "body": [
      "Veo 3 earns its place as a premium AI video tool when cinematic quality is the priority."
    ],
    "note": {
      "label": "FourFeetz Verdict",
      "text": "Use Veo 3 for polished final shots, close-ups and cinematic moments where image quality matters most."
    }
  }
];
const scores = [
  {
    "label": "Image Quality",
    "value": "4.9/5"
  },
  {
    "label": "Motion",
    "value": "4.5/5"
  },
  {
    "label": "Prompt Following",
    "value": "4.4/5"
  },
  {
    "label": "Character Consistency",
    "value": "4.7/5"
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
    "title": "Google Flow Complete Guide",
    "href": "/insights/google-flow-complete-guide",
    "desc": "A structured workflow for planning and producing AI video."
  },
  {
    "title": "Character Consistency Guide",
    "href": "/insights/character-consistency-guide",
    "desc": "Keep original characters stable across AI tools."
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Veo 3 Complete Review",
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
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">AI Video</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Veo 3 Complete Review</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            A practical Veo 3 review for AI filmmakers covering image quality, motion, prompt following, character consistency, camera control, workflow and pricing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">8 min</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="Veo 3 Complete Review editorial hero"
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
