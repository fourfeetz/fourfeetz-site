import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/ai-lighting-guide.png";

export const metadata: Metadata = {
  title: "AI Lighting Guide | FourFeetz Studios",
  description:
    "A practical AI lighting guide for cinematic image and video generation, covering golden hour, soft light, studio light, sunset, cloudy scenes and night lighting.",
  alternates: {
    canonical: "/insights/ai-lighting-guide",
  },
  openGraph: {
    title: "AI Lighting Guide | FourFeetz Studios",
    description:
      "A practical AI lighting guide for cinematic image and video generation, covering golden hour, soft light, studio light, sunset, cloudy scenes and night lighting.",
    images: [heroImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [heroImage],
  },
};

const quickVerdict = [
  {
    "label": "Best Overall",
    "value": "Golden hour"
  },
  {
    "label": "Best for Characters",
    "value": "Soft light"
  },
  {
    "label": "Best for Control",
    "value": "Studio light"
  },
  {
    "label": "Best Mood",
    "value": "Sunset and night"
  }
];
const sections = [
  {
    "title": "Introduction",
    "body": [
      "Lighting is one of the fastest ways to make AI images and videos feel cinematic. It controls emotion, continuity, subject separation and perceived production value.",
      "In AI production, lighting is also a consistency tool. If every scene changes lighting style, the character and world can feel unstable."
    ]
  },
  {
    "title": "Golden Hour",
    "body": [
      "Golden hour is the easiest premium look for animal characters, travel stories and emotional scenes. It adds warmth without needing complicated prompt language."
    ],
    "cards": [
      {
        "title": "Best Use",
        "desc": "Journey scenes, quiet roads, warm endings and character introductions."
      },
      {
        "title": "Prompt Language",
        "desc": "Warm sunlight, long shadows, soft golden rim light."
      }
    ]
  },
  {
    "title": "Soft Light",
    "body": [
      "Soft light is ideal for character portraits because it reduces harsh shadows and keeps facial details readable."
    ]
  },
  {
    "title": "Studio Light",
    "body": [
      "Studio light gives control. Use it for character sheets, product-like presentations, thumbnails and clean educational visuals."
    ]
  },
  {
    "title": "Sunset",
    "body": [
      "Sunset creates emotion and closure. It works well for final scenes, reflective moments and social video covers."
    ]
  },
  {
    "title": "Cloudy",
    "body": [
      "Cloudy light is useful for realism and continuity. It can make scenes feel natural without strong shadows or dramatic color shifts."
    ]
  },
  {
    "title": "Night",
    "body": [
      "Night lighting is powerful but risky. AI models can lose character detail, introduce noise or hide important features unless the prompt defines practical light sources."
    ]
  },
  {
    "title": "Lighting Prompt Tips",
    "body": [
      "Choose one lighting style per scene. Combine lighting with lens and camera language only when it supports the shot."
    ],
    "prompt": "Soft golden-hour light, warm rim light on the character, natural shadows, cinematic 35mm lens, shallow depth of field, consistent face, no harsh contrast."
  },
  {
    "title": "Common Mistakes",
    "body": [
      "Lighting mistakes are usually continuity mistakes. Changing mood too often makes a sequence feel generated instead of directed."
    ],
    "cards": [
      {
        "title": "Mixed Lighting",
        "desc": "Golden hour, studio and night language in one prompt creates conflict."
      },
      {
        "title": "Too Dark",
        "desc": "Important character features can disappear."
      },
      {
        "title": "Harsh Contrast",
        "desc": "Strong shadows can distort faces and fur."
      },
      {
        "title": "No Light Source",
        "desc": "Night scenes need lamps, moonlight or practical light."
      }
    ]
  },
  {
    "title": "Recommendations",
    "body": [
      "Build a small lighting vocabulary and reuse it. FourFeetz keeps lighting simple so character identity and emotional tone remain stable."
    ],
    "cards": [
      {
        "title": "Use Golden Hour",
        "desc": "Best default for warm cinematic stories."
      },
      {
        "title": "Use Soft Light",
        "desc": "Best for portraits and character sheets."
      },
      {
        "title": "Fix Lighting Per Scene",
        "desc": "Avoid changing the light between connected shots."
      },
      {
        "title": "Review on Mobile",
        "desc": "Most viewers see the final result on phones."
      }
    ]
  },
  {
    "title": "Final Score",
    "body": [
      "Lighting is not a finishing detail. It is production direction."
    ],
    "note": {
      "label": "FourFeetz Verdict",
      "text": "Choose one lighting style early and protect it through the full workflow."
    }
  }
];
const scores = [
  {
    "label": "Golden Hour",
    "value": "5/5"
  },
  {
    "label": "Soft Light",
    "value": "5/5"
  },
  {
    "label": "Studio Light",
    "value": "4.5/5"
  },
  {
    "label": "Cloudy",
    "value": "4/5"
  },
  {
    "label": "Overall",
    "value": "4.7/5"
  }
];
const related = [
  {
    "title": "Camera Movement Guide",
    "href": "/insights/camera-movement-guide",
    "desc": "Camera language for cinematic AI-generated shots."
  },
  {
    "title": "Writing Better Image-to-Video Prompts",
    "href": "/insights/image-to-video-prompts",
    "desc": "A practical prompt framework for better motion, lighting, camera control and continuity."
  },
  {
    "title": "Flux Image Guide",
    "href": "/insights/flux-image-guide",
    "desc": "Create stronger reference images with better lighting."
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Lighting Guide",
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
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Filmmaking</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">AI Lighting Guide</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            A practical AI lighting guide for cinematic image and video generation, covering golden hour, soft light, studio light, sunset, cloudy scenes and night lighting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">6 min</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="AI Lighting Guide editorial hero"
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
