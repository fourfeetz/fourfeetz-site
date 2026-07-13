import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/haru-character-sheet.png";

export const metadata: Metadata = {
  title: "Character Consistency Guide | FourFeetz Studios",
  description:
    "Learn professional workflows for keeping AI-generated characters consistent across images, videos, prompts and multiple AI platforms.",
  alternates: {
    canonical: "/insights/character-consistency-guide",
  },
  openGraph: {
    title: "Character Consistency Guide | FourFeetz Studios",
    description:
      "Learn professional workflows for keeping AI-generated characters consistent across images, videos, prompts and multiple AI platforms.",
    images: [heroImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [heroImage],
  },
};

const quickVerdict = [
  { label: "Best Practice", winner: "Reference Images" },
  { label: "Best for Video", winner: "Reuse Last Frame" },
  { label: "Best for Images", winner: "Character Sheet" },
  { label: "Best Workflow", winner: "Reference -> Image -> Video" },
  { label: "Overall", winner: "Consistency beats randomness" },
];

const consistencyElements = [
  { title: "Face", desc: "The face is the strongest identity anchor, especially in close-ups and social thumbnails." },
  { title: "Eyes", desc: "Eye color, shape, and expression should remain stable across every scene." },
  { title: "Fur", desc: "Fur color, markings, texture, and length must be repeated in prompts and references." },
  { title: "Body", desc: "Body proportions and silhouette should stay recognizable from wide shots to close-ups." },
  { title: "Accessories", desc: "Scarves, collars, tags, clothing, and props help the audience recognize the character quickly." },
  { title: "Lighting", desc: "Stable lighting prevents the same character from looking like a different design." },
  { title: "Camera", desc: "A consistent camera style helps separate intentional variation from identity drift." },
];

const bibleCards = [
  { title: "Name", desc: "Use the same official character name in every production document and prompt." },
  { title: "Species", desc: "Define the species and visual type clearly so AI tools start from the right body language." },
  { title: "Age", desc: "Age affects proportions, expression, movement, and emotional tone." },
  { title: "Colors", desc: "Lock primary fur, eye, accessory, and accent colors before generating variations." },
  { title: "Clothing", desc: "List clothing only when it is part of the permanent character identity." },
  { title: "Accessories", desc: "Repeat key accessories such as scarves, collars, name tags, or bags." },
  { title: "Expressions", desc: "Define a small expression range that fits the character personality." },
  { title: "Reference Images", desc: "Keep approved front, side, close-up, and full-body references in one source of truth." },
];

const referenceCards = [
  { title: "Front", desc: "A front view defines the face, eyes, chest, and main identity details." },
  { title: "Side", desc: "A side view helps preserve silhouette, body length, posture, and profile." },
  { title: "Back", desc: "A back view protects markings, tail shape, clothing, and rear silhouette." },
  { title: "Close-up", desc: "A close-up keeps face shape, eyes, expression, and accessory detail stable." },
  { title: "Full Body", desc: "A full-body reference keeps proportions consistent across wide shots." },
  { title: "Expressions", desc: "Expression references prevent emotional scenes from changing the character design." },
];

const modelCards = [
  { title: "ChatGPT Image", desc: "Strong for planning, visual direction, prompt drafts, and creating structured character references. It still needs approved reference images for consistency." },
  { title: "Runway", desc: "Useful for turning approved frames into motion. It works best when the first frame already has the correct character identity." },
  { title: "Kling", desc: "Strong for movement and quick video tests. Fast motion can still change face, body, or accessories." },
  { title: "Veo", desc: "Strong for cinematic framing and stable atmosphere. Keep references simple and prompts controlled." },
  { title: "Flux", desc: "Useful for controlled image variations and character-focused stills when references are clear." },
  { title: "Midjourney", desc: "Strong for style exploration and cinematic concepts, but production consistency requires careful curation." },
];

const sceneCards = [
  { title: "Lighting", desc: "Keep lighting language stable so color, fur, and accessories remain recognizable." },
  { title: "Background", desc: "Changing the environment is easier when the character reference remains fixed." },
  { title: "Camera", desc: "Use repeatable lens and framing language across connected shots." },
  { title: "Pose", desc: "Start with simple poses before asking for complex movement or emotion." },
  { title: "Emotion", desc: "Emotional variation should change expression, not the entire face design." },
  { title: "Accessories", desc: "Repeat the same accessory details in every shot where the character appears." },
];

const workflow = ["Character Bible", "Reference Images", "First Hero Image", "Image Variations", "Image-to-Video", "Reuse Last Frame", "Next Scene"];

const mistakeCards = [
  { title: "Changing eye color", desc: "Even small eye changes can make the character feel unfamiliar." },
  { title: "Changing accessories", desc: "Missing collars, tags, scarves, or clothing breaks visual memory." },
  { title: "Different lighting", desc: "Random lighting changes can alter fur color, mood, and perceived design." },
  { title: "Different proportions", desc: "Changing body size or face shape makes continuity collapse quickly." },
  { title: "Changing camera style", desc: "Unstable lens and framing language makes shots feel unrelated." },
  { title: "Too many prompt changes", desc: "Rewriting the character every scene invites unnecessary drift." },
];

const recommendations = [
  { title: "Use one master reference", desc: "Start every production from the same approved character sheet or hero image." },
  { title: "Reuse the same prompt", desc: "Keep the core character description unchanged across images and videos." },
  { title: "Keep lighting fixed", desc: "A stable lighting direction protects color and visual identity." },
  { title: "Keep camera style fixed", desc: "Repeat lens, framing, and movement language across connected scenes." },
  { title: "Reuse the last frame", desc: "Use the final frame from one approved video as the starting reference for the next scene." },
  { title: "Avoid unnecessary changes", desc: "Change only what the story requires. Preserve everything else." },
];

const ratings = [
  { label: "Character Consistency", value: "★★★★★" },
  { label: "Ease of Workflow", value: "★★★★☆" },
  { label: "Cross-Platform Compatibility", value: "★★★★☆" },
  { label: "Video Stability", value: "★★★★☆" },
  { label: "Overall", value: "★★★★★" },
];

const finalScores = [
  { label: "Reference Images", value: "★★★★★" },
  { label: "Character Bible", value: "★★★★★" },
  { label: "Reuse Last Frame", value: "★★★★★" },
  { label: "Consistent Lighting", value: "★★★★★" },
  { label: "Prompt Consistency", value: "★★★★☆" },
  { label: "Overall", value: "★★★★★" },
];

const related = [
  { title: "Runway Gen-4 Review", href: "/insights/runway-gen-4-review", desc: "A practical review of character consistency, motion quality, and camera control." },
  { title: "Kling vs Veo", href: "/insights/kling-vs-veo", desc: "A side-by-side comparison of AI video tools for cinematic production." },
  { title: "AI Video Workflow", href: "/insights/ai-video-workflow", desc: "A repeatable production workflow from planning to publishing." },
  { title: "Writing Better Image-to-Video Prompts", href: "/insights/image-to-video-prompts", desc: "Prompt structure for movement, lighting, environment, and continuity." },
  { title: "Camera Movement Guide", href: "/insights/camera-movement-guide", desc: "Tracking shots, push-ins, orbits, pans, tilts, and cinematic AI camera movement." },
  { title: "AI Thumbnail Design Guide", href: "/insights/ai-thumbnail-design-guide", desc: "Thumbnail composition, color, branding, and AI design workflows." },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Character Consistency Guide",
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
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Characters</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Character Consistency Guide</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            Learn how to keep AI-generated characters visually consistent across images, videos, scenes and different AI models.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">7 min read</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="HARU character sheet for AI character consistency"
              width={1400}
              height={900}
              priority
              className="h-auto w-full rounded-[24px] border border-[#eadfce] shadow-xl shadow-[#6f4e37]/10"
            />
          </figure>
        </header>

        <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-24">
          <Section title="Introduction">
            <p>
              Character consistency is one of the biggest challenges in AI filmmaking. A character can look perfect in one image, then change face shape, eye color, fur pattern, or accessories in the next scene.
            </p>
            <p>
              The solution is not one magic prompt. It is a production system: approved references, a clear character bible, stable lighting, controlled camera language, and careful reuse of successful frames.
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

          <Section title="What is Character Consistency?">
            <p>
              Character consistency means the audience can recognize the same character across different images, videos, scenes, camera angles, and AI models. The character may move, emote, or enter a new world, but the identity remains stable.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {consistencyElements.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Character Bible">
            <p>
              Every production should have a Character Bible. It is the single source of truth for who the character is, how the character looks, and what should never change during generation.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {bibleCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Reference Images">
            <p>
              Reference images turn character identity into something visible and repeatable. They help every model understand the same face, body, accessories, and expression range before animation begins.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {referenceCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Maintaining Consistency Across AI Models">
            <p>
              Different AI tools interpret the same character in different ways. The safest workflow is to keep the reference fixed, simplify prompts, and judge every output against the approved Character Bible.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {modelCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Maintaining Consistency Across Scenes">
            <p>
              Scene changes are where character identity often breaks. Lighting, background, camera angle, pose, emotion, and accessories should change only when the story needs them to change.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {sceneCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="The FourFeetz Workflow">
            <p>
              FourFeetz treats character consistency as a pipeline. Each approved output becomes a stronger foundation for the next production step.
            </p>
            <Pipeline items={workflow} />
          </Section>

          <Section title="Common Mistakes">
            <div className="grid gap-4 md:grid-cols-2">
              {mistakeCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="FourFeetz Recommendations">
            <p>
              A consistent AI character is built by removing unnecessary variation. Keep the reference, prompt, lighting, camera style, and core accessories stable unless the story demands a change.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Final Recommendation">
            <p>
              Consistency beats randomness. The most professional AI character workflows are not the ones with the longest prompts, but the ones with the clearest references and the fewest unnecessary changes.
            </p>
            <p>
              For FourFeetz-style character production, the strongest workflow is simple: build a Character Bible, approve reference images, create a hero image, animate carefully, then reuse successful frames to protect identity across the next scene.
            </p>
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">FourFeetz Rating</p>
              <div className="mt-5 grid gap-3">
                {ratings.map((rating) => (
                  <div key={rating.label} className="flex items-center justify-between gap-4 border-t border-[#eadfce] pt-3 first:border-t-0 first:pt-0">
                    <p className="font-bold text-[#76685d]">{rating.label}</p>
                    <p className="text-lg font-black tracking-[0.08em] text-[#2b2119]">{rating.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Final Scores</p>
              <div className="mt-5 grid gap-3">
                {finalScores.map((score) => (
                  <div key={score.label} className="flex items-center justify-between gap-4 border-t border-[#eadfce] pt-3 first:border-t-0 first:pt-0">
                    <p className="font-bold text-[#76685d]">{score.label}</p>
                    <p className="text-lg font-black tracking-[0.08em] text-[#2b2119]">{score.value}</p>
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
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
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
