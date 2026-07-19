import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/premium/runway-gen45-hero.png";

export const metadata: Metadata = {
  title: "Runway Gen-4.5 Review | FourFeetz Studios",
  description:
    "A practical Runway Gen-4.5 review for AI filmmaking, covering motion, character consistency, camera control, workflow and comparison with Gen-4.",
  alternates: {
    canonical: "/insights/runway-gen45-review",
  },
  openGraph: {
    title: "Runway Gen-4.5 Review | FourFeetz Studios",
    description:
      "A practical Runway Gen-4.5 review for AI filmmaking, covering motion, character consistency, camera control, workflow and comparison with Gen-4.",
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
    "value": "Fast cinematic iteration"
  },
  {
    "label": "Upgrade Area",
    "value": "Motion and control"
  },
  {
    "label": "Production Fit",
    "value": "Short AI film shots"
  },
  {
    "label": "Overall",
    "value": "Strong workflow model"
  }
];
const sections = [
  {
    "title": "Introduction",
    "body": [
      "Runway Gen-4.5 should be judged by production usefulness: how quickly it can create usable shots, how stable those shots remain, and how well they connect to an edit.",
      "For creators building original characters and short-form stories, speed matters only when the generated material is still controllable."
    ]
  },
  {
    "title": "What's New",
    "body": [
      "The practical improvement is not one single feature. It is the feeling of more controlled motion, better shot interpretation and a smoother path from reference image to usable clip."
    ],
    "cards": [
      {
        "title": "Cleaner Motion",
        "desc": "Better handling of simple subject movement."
      },
      {
        "title": "Improved Camera",
        "desc": "More useful cinematic movement when prompts stay focused."
      },
      {
        "title": "Faster Testing",
        "desc": "Good for trying several shot directions quickly."
      },
      {
        "title": "Better Continuity",
        "desc": "Still reference-dependent, but more production friendly."
      }
    ]
  },
  {
    "title": "Motion",
    "body": [
      "Motion feels best when the prompt asks for one clean action. Walking, turning, looking, drifting light and subtle environment movement are practical uses."
    ]
  },
  {
    "title": "Character Consistency",
    "body": [
      "Character consistency remains a workflow problem, not only a model problem. Use a master reference image, consistent accessories and a reusable character description."
    ]
  },
  {
    "title": "Camera",
    "body": [
      "Gen-4.5 is useful for tracking shots, slow push-ins and simple orbit language. Avoid stacking several camera movements in one prompt."
    ],
    "prompt": "Original character stands on a quiet road during golden hour. Slow cinematic push-in, stable face, natural movement, 35mm lens, warm light, shallow depth of field, no extra characters."
  },
  {
    "title": "Comparison with Gen-4",
    "body": [
      "Compared with Gen-4, Gen-4.5 feels more refined for motion testing and camera direction. Gen-4 still taught the same lesson: the first frame and shot plan matter more than prompt length."
    ]
  },
  {
    "title": "Workflow",
    "body": [
      "Use Gen-4.5 as a fast iteration layer. Create the first frame, test the camera move, approve the best output, then edit into a sequence."
    ],
    "steps": [
      "First Frame",
      "Motion Test",
      "Camera Pass",
      "Select",
      "Edit",
      "Publish"
    ]
  },
  {
    "title": "Strengths",
    "body": [
      "The strongest value is production speed paired with usable cinematic control."
    ],
    "cards": [
      {
        "title": "Iteration",
        "desc": "Fast enough for exploring alternate shots."
      },
      {
        "title": "Motion Tests",
        "desc": "Good for practical movement variations."
      },
      {
        "title": "Camera Language",
        "desc": "Handles simple cinematic direction well."
      },
      {
        "title": "Short Films",
        "desc": "Useful for building scenes clip by clip."
      }
    ]
  },
  {
    "title": "Weaknesses",
    "body": [
      "It still needs disciplined prompts, strong first frames and careful continuity review."
    ],
    "cards": [
      {
        "title": "Not One Click",
        "desc": "Planning remains essential."
      },
      {
        "title": "Complex Action",
        "desc": "Fast multi-step action still creates errors."
      },
      {
        "title": "Identity Drift",
        "desc": "Characters can shift without strong references."
      },
      {
        "title": "Manual Editing",
        "desc": "Final quality depends on selection and editing."
      }
    ]
  },
  {
    "title": "Final Recommendation",
    "body": [
      "Runway Gen-4.5 is a strong practical model for creators who need to test and assemble cinematic shots quickly."
    ],
    "note": {
      "label": "FourFeetz Verdict",
      "text": "Use Gen-4.5 for fast shot development, then reserve extra polish tools for hero moments."
    }
  }
];
const scores = [
  {
    "label": "Motion",
    "value": "4.6/5"
  },
  {
    "label": "Character Consistency",
    "value": "4.4/5"
  },
  {
    "label": "Camera",
    "value": "4.5/5"
  },
  {
    "label": "Workflow Speed",
    "value": "4.7/5"
  },
  {
    "label": "Overall",
    "value": "4.6/5"
  }
];
const related = [
  {
    "title": "Runway Gen-4 Review",
    "href": "/insights/runway-gen-4-review",
    "desc": "A practical review of character consistency, motion quality, and camera control."
  },
  {
    "title": "A Repeatable AI Video Workflow",
    "href": "/insights/ai-video-workflow",
    "desc": "A complete production pipeline from story planning to publishing."
  },
  {
    "title": "Veo 3 Complete Review",
    "href": "/insights/veo3-complete-review",
    "desc": "A premium AI video review focused on cinematic quality."
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Runway Gen-4.5 Review",
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
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Runway Gen-4.5 Review</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            A practical Runway Gen-4.5 review for AI filmmaking, covering motion, character consistency, camera control, workflow and comparison with Gen-4.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">7 min</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="Runway Gen-4.5 Review editorial hero"
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
