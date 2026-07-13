import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/flux-image-guide.png";

export const metadata: Metadata = {
  title: "Flux Image Guide | FourFeetz Studios",
  description:
    "A practical Flux image guide for AI creators covering model selection, prompt tips, character consistency, lighting, image quality and workflow.",
  alternates: {
    canonical: "/insights/flux-image-guide",
  },
  openGraph: {
    title: "Flux Image Guide | FourFeetz Studios",
    description:
      "A practical Flux image guide for AI creators covering model selection, prompt tips, character consistency, lighting, image quality and workflow.",
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
    "value": "High-quality reference images"
  },
  {
    "label": "Core Use",
    "value": "First-frame creation"
  },
  {
    "label": "Production Fit",
    "value": "Character and moodboards"
  },
  {
    "label": "Overall",
    "value": "Strong image foundation"
  }
];
const sections = [
  {
    "title": "Introduction",
    "body": [
      "Flux is useful because AI video quality often begins with image quality. A strong reference image can define character, lighting, composition and mood before any animation begins.",
      "For FourFeetz, image generation is not decoration. It is the foundation for first frames, character sheets, thumbnails and storyboards."
    ]
  },
  {
    "title": "Model Comparison",
    "body": [
      "Choose the model based on the job. Character references, cinematic stills, product-style images and thumbnail graphics all need different levels of control."
    ],
    "cards": [
      {
        "title": "Character References",
        "desc": "Prioritize consistency, clean face details and repeatable accessories."
      },
      {
        "title": "Cinematic Frames",
        "desc": "Prioritize lighting, lens language and composition."
      },
      {
        "title": "Thumbnails",
        "desc": "Prioritize contrast, focal point and readable shapes."
      },
      {
        "title": "Moodboards",
        "desc": "Prioritize atmosphere and visual direction."
      }
    ]
  },
  {
    "title": "Prompt Tips",
    "body": [
      "Good image prompts define subject, appearance, environment, lighting, lens and style. Keep the prompt specific but not overloaded."
    ],
    "prompt": "A gentle original animal character standing on a quiet countryside road at golden hour, warm brown scarf, soft natural light, cinematic 35mm photography, shallow depth of field, clean background, premium editorial composition."
  },
  {
    "title": "Character Consistency",
    "body": [
      "Use the same core character description every time. Lock colors, face details, clothing, accessories and proportions before changing scenes."
    ]
  },
  {
    "title": "Image Quality",
    "body": [
      "High-quality stills should have clean edges, clear subject separation, believable lighting and no confusing background clutter. These qualities make later video generation easier."
    ]
  },
  {
    "title": "Lighting",
    "body": [
      "Lighting should be treated as a continuity rule. Golden hour, soft studio light, cloudy daylight and night lighting each create different emotional expectations."
    ]
  },
  {
    "title": "Workflow",
    "body": [
      "A practical image workflow starts with character direction, then creates multiple controlled variations before selecting one first frame for video."
    ],
    "steps": [
      "Character",
      "Prompt",
      "Variations",
      "Select",
      "Upscale",
      "Animate"
    ]
  },
  {
    "title": "Strengths",
    "body": [
      "Flux is strongest as a visual foundation for production."
    ],
    "cards": [
      {
        "title": "Reference Images",
        "desc": "Good for first frames and character studies."
      },
      {
        "title": "Editorial Look",
        "desc": "Can create polished, warm, cinematic stills."
      },
      {
        "title": "Mood Control",
        "desc": "Useful for exploring lighting and tone."
      },
      {
        "title": "Thumbnail Base",
        "desc": "Strong source images for later graphic design."
      }
    ]
  },
  {
    "title": "Weaknesses",
    "body": [
      "The weaknesses appear when creators expect one image prompt to solve an entire production pipeline."
    ],
    "cards": [
      {
        "title": "Consistency Needs Work",
        "desc": "References and repeated language are still required."
      },
      {
        "title": "Prompt Drift",
        "desc": "Small wording changes can alter identity."
      },
      {
        "title": "Manual Selection",
        "desc": "The best frame still needs human judgment."
      },
      {
        "title": "Video Handoff",
        "desc": "Images must be composed with animation in mind."
      }
    ]
  },
  {
    "title": "Final Recommendation",
    "body": [
      "Flux is best used as a first-frame and reference-image engine. The stronger the still image, the easier the rest of the AI filmmaking workflow becomes."
    ],
    "note": {
      "label": "FourFeetz Verdict",
      "text": "Use Flux to build the visual foundation before moving into AI video."
    }
  }
];
const scores = [
  {
    "label": "Image Quality",
    "value": "4.7/5"
  },
  {
    "label": "Prompt Control",
    "value": "4.4/5"
  },
  {
    "label": "Character Consistency",
    "value": "4.3/5"
  },
  {
    "label": "Lighting",
    "value": "4.6/5"
  },
  {
    "label": "Overall",
    "value": "4.5/5"
  }
];
const related = [
  {
    "title": "Character Consistency Guide",
    "href": "/insights/character-consistency-guide",
    "desc": "Keep original characters stable across AI tools."
  },
  {
    "title": "A Repeatable AI Video Workflow",
    "href": "/insights/ai-video-workflow",
    "desc": "A complete production pipeline from story planning to publishing."
  },
  {
    "title": "Writing Better Image-to-Video Prompts",
    "href": "/insights/image-to-video-prompts",
    "desc": "A practical prompt framework for better motion, lighting, camera control and continuity."
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Flux Image Guide",
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
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Images</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Flux Image Guide</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            A practical Flux image guide for AI creators covering model selection, prompt tips, character consistency, lighting, image quality and workflow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">7 min</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="Flux Image Guide editorial hero"
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
