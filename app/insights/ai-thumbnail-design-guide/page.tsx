import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/ai-thumbnail-design-guide.png";

export const metadata: Metadata = {
  title: "AI Thumbnail Design Guide | FourFeetz Studios",
  description:
    "Learn how to create high-performing AI-generated YouTube thumbnails using composition, color theory, branding and modern AI design tools.",
  alternates: {
    canonical: "/insights/ai-thumbnail-design-guide",
  },
  openGraph: {
    title: "AI Thumbnail Design Guide | FourFeetz Studios",
    description:
      "Learn how to create high-performing AI-generated YouTube thumbnails using composition, color theory, branding and modern AI design tools.",
    images: [heroImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [heroImage],
  },
};

const quickVerdict = [
  { label: "Best for CTR", winner: "Strong Subject Focus" },
  { label: "Best for Branding", winner: "Consistent Character Design" },
  { label: "Best for AI Workflow", winner: "ChatGPT + Flux + Photoshop" },
  { label: "Best for Beginners", winner: "Simple Composition" },
  { label: "Best Overall", winner: "Clear Subject + Short Title + High Contrast" },
];

const anatomyCards = [
  { title: "Subject", desc: "The main character, face, object, or visual idea should be readable within one second." },
  { title: "Emotion", desc: "Expression and story tension help the thumbnail feel alive instead of decorative." },
  { title: "Background", desc: "The background should support the subject without stealing attention." },
  { title: "Contrast", desc: "Strong separation between subject and background improves mobile readability." },
  { title: "Text", desc: "Use short, large words only when they add meaning that the image cannot express alone." },
  { title: "Logo", desc: "Place branding consistently so viewers learn to recognize the channel at a glance." },
  { title: "Color Palette", desc: "A repeatable palette creates visual memory across a series of videos." },
];

const compositionCards = [
  { title: "Rule of Thirds", desc: "Place the face, eyes, or key object near strong visual anchor points." },
  { title: "Center Focus", desc: "Use centered composition when the thumbnail needs immediate subject recognition." },
  { title: "Negative Space", desc: "Leave clean space around the title or subject so the design can breathe." },
  { title: "Eye Direction", desc: "Eyes and body direction can point the viewer toward the title or story clue." },
  { title: "Safe Crop Area", desc: "Keep important elements away from edges so platform crops do not damage the design." },
];

const colorCards = [
  { title: "Warm vs Cool Colors", desc: "Warm colors feel emotional and inviting; cool colors can feel cinematic, technical, or mysterious." },
  { title: "Light vs Dark Backgrounds", desc: "Choose the background value that makes the subject stand out fastest on mobile." },
  { title: "High Contrast", desc: "Contrast is often more important than detail when viewers scroll quickly." },
  { title: "Accent Colors", desc: "Use one accent color to direct attention without making the image noisy." },
  { title: "Brand Consistency", desc: "Repeat colors across thumbnails so the channel starts to look like a recognizable system." },
];

const textCards = [
  { title: "Keep under 5 words", desc: "Short text is easier to read on mobile and less likely to compete with the subject." },
  { title: "Large font", desc: "Use bold, simple letterforms that remain readable at small sizes." },
  { title: "Readable on mobile", desc: "Always preview the thumbnail small before final export." },
  { title: "Avoid clutter", desc: "Do not stack multiple labels, stickers, captions, and arrows unless they serve one clear idea." },
  { title: "Remove text completely", desc: "If the face, subject, and composition already communicate the idea, no text may be stronger." },
];

const workflow = ["Reference Image", "Generate Variations", "Select Best Version", "Enhance", "Add Branding", "Export"];

const toolCards = [
  { title: "ChatGPT Image", desc: "Useful for concepting thumbnail ideas, generating polished image directions, and testing visual storytelling." },
  { title: "Flux", desc: "Strong for controlled image generation, character consistency, and sharper thumbnail-oriented variations." },
  { title: "Midjourney", desc: "Useful for cinematic lighting, dramatic compositions, and expressive visual exploration." },
  { title: "Photoshop Generative Fill", desc: "Best for extending backgrounds, fixing edges, removing distractions, and finishing details." },
  { title: "Canva", desc: "Fast for layout, title placement, templates, export versions, and lightweight brand systems." },
];

const mistakeCards = [
  { title: "Too much text", desc: "Long titles become unreadable and make the image feel like an advertisement instead of a story." },
  { title: "Busy background", desc: "A detailed background can hide the subject and reduce click clarity." },
  { title: "Tiny subject", desc: "If the subject is too small, the thumbnail loses emotion and mobile impact." },
  { title: "Low contrast", desc: "Low separation between subject, text, and background makes the design disappear in a feed." },
  { title: "Inconsistent branding", desc: "Changing style every upload makes it harder for viewers to recognize the channel." },
];

const recommendations = [
  { title: "Use one character style", desc: "A consistent character look helps thumbnails build a recognizable channel universe." },
  { title: "Keep logo placement consistent", desc: "Put the logo in the same area so branding becomes familiar without feeling loud." },
  { title: "Use the same color palette", desc: "Repeated warm browns, creams, and accents create a stronger FourFeetz identity." },
  { title: "Design for mobile first", desc: "Judge the thumbnail at small size before making final desktop-level refinements." },
  { title: "Keep one focal point", desc: "One clear subject usually performs better than several competing ideas." },
];

const ratings = [
  { label: "Visual Impact", value: "★★★★★" },
  { label: "Brand Consistency", value: "★★★★★" },
  { label: "Ease of Creation", value: "★★★★☆" },
  { label: "Mobile Readability", value: "★★★★★" },
  { label: "CTR Potential", value: "★★★★★" },
  { label: "Overall", value: "★★★★★" },
];

const related = [
  { title: "Runway Gen-4 Review", href: "/insights/runway-gen-4-review", desc: "A practical review of character consistency, motion quality, and camera control." },
  { title: "Kling vs Veo", href: "/insights/kling-vs-veo", desc: "A side-by-side comparison of AI video tools for cinematic production." },
  { title: "AI Video Workflow", href: "/insights/ai-video-workflow", desc: "A repeatable production workflow from planning to publishing." },
  { title: "Writing Better Image-to-Video Prompts", href: "/insights/image-to-video-prompts", desc: "Prompt structure for movement, lighting, environment, and continuity." },
  { title: "Camera Movement Guide", href: "/insights/camera-movement-guide", desc: "Tracking shots, push-ins, orbits, pans, tilts, and cinematic AI camera movement." },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Thumbnail Design Guide",
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
      <div className="grid gap-3 md:grid-cols-6 md:items-center">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-3 md:flex-col md:gap-2">
            <div className="flex min-h-16 w-full items-center justify-center rounded-2xl bg-[#f7f2ea] px-4 py-4 text-center text-sm font-black text-[#2b2119]">
              {item}
            </div>
            {index < items.length - 1 ? <span className="text-xl font-black text-[#a67c52] md:rotate-[-90deg]">-&gt;</span> : null}
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
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Design</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">AI Thumbnail Design Guide</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            Learn how to create eye-catching YouTube thumbnails using AI, improve click-through rate (CTR), and build a consistent visual identity for your channel.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">6 min read</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="AI Thumbnail Design Guide editorial thumbnail"
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
              A thumbnail is often the first impression of a video. Before viewers hear the story, see the edit, or understand the idea, they decide whether the image is worth a click.
            </p>
            <p>
              For AI creators, thumbnail design is not only decoration. It is a packaging system for storytelling, brand identity, and audience trust. A strong thumbnail makes the subject clear, communicates emotion, and helps the channel feel consistent across uploads.
            </p>
          </Section>

          <Section title="Quick Verdict">
            <div className="grid gap-4 md:grid-cols-2">
              {quickVerdict.map((item) => (
                <article key={item.label} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">{item.label}</p>
                  <p className="mt-3 text-2xl font-black text-[#2b2119]">{item.winner}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section title="The Anatomy of a Great Thumbnail">
            <p>
              Great thumbnails are simple at a glance and intentional up close. Every element should help the viewer understand the subject, emotion, and reason to click.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {anatomyCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Composition">
            <p>
              Composition decides where the eye lands first. AI thumbnails work best when the subject, title, and negative space are planned before generating variations.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {compositionCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Color & Contrast">
            <p>
              Color and contrast create instant readability. A thumbnail should remain clear in dark mode, on mobile, and beside other competing videos in the feed.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {colorCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Text Design">
            <p>
              Thumbnail text should support the image, not explain the whole video. If the image already communicates the idea clearly, removing text can make the design feel more premium.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {textCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="AI Thumbnail Workflow">
            <p>
              A repeatable workflow keeps thumbnails fast, polished, and consistent. Start with a strong reference, generate options, select the clearest version, then finish with branding and export checks.
            </p>
            <Pipeline items={workflow} />
          </Section>

          <Section title="Best AI Tools">
            <p>
              Each tool has a different role. The best workflow combines AI concepting, controlled image generation, manual finishing, and layout checks instead of relying on one tool for everything.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {toolCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Common Mistakes">
            <div className="grid gap-4 md:grid-cols-2">
              {mistakeCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="FourFeetz Recommendations">
            <p>
              FourFeetz thumbnails should feel like part of the same visual universe. Use a consistent character style, restrained typography, warm color language, and one strong focal point.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Final Recommendation">
            <p>
              The strongest thumbnail is not the busiest thumbnail. It is the clearest promise: one subject, one feeling, one visual reason to click.
            </p>
            <p>
              For AI channels, consistency matters as much as impact. When every thumbnail shares a recognizable subject style, color palette, and layout logic, the channel starts to feel like a brand rather than a collection of uploads.
            </p>
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Final Scores</p>
              <div className="mt-5 grid gap-3">
                {ratings.map((rating) => (
                  <div key={rating.label} className="flex items-center justify-between gap-4 border-t border-[#eadfce] pt-3 first:border-t-0 first:pt-0">
                    <p className="font-bold text-[#76685d]">{rating.label}</p>
                    <p className="text-lg font-black tracking-[0.08em] text-[#2b2119]">{rating.value}</p>
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
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
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
