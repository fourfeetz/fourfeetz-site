import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/image-to-video-prompts.png";

export const metadata: Metadata = {
  title: "Writing Better Image-to-Video Prompts | FourFeetz Studios",
  description:
    "Learn the FourFeetz prompt framework for creating consistent AI videos with better character consistency, lighting, motion and cinematic camera control.",
  alternates: {
    canonical: "/insights/image-to-video-prompts",
  },
  openGraph: {
    title: "Writing Better Image-to-Video Prompts | FourFeetz Studios",
    description:
      "Learn the FourFeetz prompt framework for creating consistent AI videos with better character consistency, lighting, motion and cinematic camera control.",
    images: [heroImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [heroImage],
  },
};

const promptFormula = ["Character", "Action", "Environment", "Lighting", "Camera", "Style", "Quality", "Negative Prompt"];

const characterDetails = [
  { title: "Species", desc: "Name the animal or subject clearly so the model starts from the right form." },
  { title: "Age", desc: "Use simple age language such as puppy, adult, young, or elderly." },
  { title: "Appearance", desc: "Describe color, size, face shape, fur, and recognizable silhouette." },
  { title: "Clothing", desc: "Include only clothing that matters for identity or story continuity." },
  { title: "Accessories", desc: "Repeat important details such as scarf, collar, bag, or prop in every scene." },
  { title: "Expression", desc: "Use emotional words that support the shot: curious, calm, joyful, focused." },
  { title: "Consistency", desc: "Keep the same character description across shots instead of rewriting it every time." },
];

const actionExamples = [
  { title: "Walking", desc: "Walks slowly forward with natural body movement." },
  { title: "Running", desc: "Runs lightly along the road with energetic but believable motion." },
  { title: "Looking Around", desc: "Turns the head gently and looks around with curiosity." },
  { title: "Jumping", desc: "Makes one small jump over a low object, then lands naturally." },
  { title: "Sitting", desc: "Sits calmly and looks toward the warm light." },
  { title: "Sleeping", desc: "Sleeps peacefully with subtle breathing and soft fur movement." },
];

const environmentCards = [
  { title: "Forest", desc: "Mention trees, path texture, shade, leaves, and depth." },
  { title: "Beach", desc: "Use sand, sea breeze, low waves, horizon, and coastal light." },
  { title: "Mountain", desc: "Define altitude, rocks, trail, distance, and open sky." },
  { title: "Studio", desc: "Describe backdrop, controlled lights, floor, and clean composition." },
  { title: "Street", desc: "Include road surface, buildings, signs, traffic mood, and scale." },
  { title: "Cafe", desc: "Use tables, window light, warm interior, and soft background activity." },
  { title: "Weather", desc: "Keep weather specific: light rain, clear sky, fog, snow, or wind." },
  { title: "Season", desc: "Name spring, summer, autumn, or winter to control color and atmosphere." },
];

const lightingCards = [
  { title: "Golden Hour", desc: "Warm, low-angle light that makes scenes feel cinematic and emotional." },
  { title: "Morning", desc: "Clean, gentle light for calm beginnings and quiet outdoor scenes." },
  { title: "Cloudy", desc: "Soft even light that reduces harsh contrast and keeps details readable." },
  { title: "Sunset", desc: "Stronger mood, warmer contrast, and a natural ending feeling." },
  { title: "Soft Light", desc: "Useful for portraits, close-ups, and character-focused shots." },
  { title: "Studio Lighting", desc: "Best for controlled product-like visuals, portraits, and repeatable looks." },
];

const cameraCards = [
  { title: "Tracking Shot", desc: "Use when the subject is moving and the camera should follow beside or behind it." },
  { title: "Push In", desc: "Use for emotional emphasis, discovery, or a quiet reveal." },
  { title: "Pull Out", desc: "Use to reveal the environment or make a character feel small in a larger world." },
  { title: "Orbit", desc: "Use carefully for hero shots or product-like character presentation." },
  { title: "Pan", desc: "Use to move attention from one side of the scene to another." },
  { title: "Tilt", desc: "Use to reveal height, scale, sky, trees, buildings, or a character looking up." },
  { title: "Crane", desc: "Use for dramatic reveals and large environmental transitions." },
  { title: "Dolly", desc: "Use for smooth cinematic movement that feels physically grounded." },
];

const styleCards = [
  { title: "Realistic", desc: "Creates a grounded look that feels closer to live-action photography." },
  { title: "Cinematic", desc: "Adds film language, mood, lens behavior, and stronger atmosphere." },
  { title: "Pixar", desc: "Creates a stylized animated feeling with soft character appeal." },
  { title: "Anime", desc: "Changes line language, expression, color design, and motion energy." },
  { title: "Clay", desc: "Creates tactile handmade texture and stop-motion-like charm." },
  { title: "Illustration", desc: "Moves the result toward designed artwork rather than photographic realism." },
  { title: "35mm", desc: "Gives the prompt a familiar film-lens direction and natural perspective." },
  { title: "Shallow Depth of Field", desc: "Separates the subject from the background and gives the image premium focus." },
];

const negativePrompts = [
  { title: "No extra limbs", desc: "Reduces anatomy errors in movement-heavy shots." },
  { title: "No text", desc: "Prevents accidental signs, labels, or unreadable generated words." },
  { title: "No watermark", desc: "Keeps the frame clean for publishing and editing." },
  { title: "No blur", desc: "Helps protect faces, eyes, and key character details." },
  { title: "No duplicated animals", desc: "Reduces accidental copies of the main character in the same frame." },
];

const promptMistakes = [
  { title: "Too many actions", desc: "One shot should usually contain one main movement goal." },
  { title: "Changing lighting", desc: "Different light in every prompt makes continuity feel unstable." },
  { title: "Changing character", desc: "Small description changes can create a different subject across scenes." },
  { title: "Changing style", desc: "Mixing realistic, anime, and illustration language breaks visual identity." },
  { title: "Changing camera", desc: "Too many camera moves make motion harder to control." },
  { title: "Very long prompts", desc: "Long prompts often bury the most important direction inside noise." },
];

const recommendations = [
  { title: "Keep prompts under 120 words", desc: "Short prompts are easier to test, compare, and reuse." },
  { title: "Use only one action", desc: "One action gives the video model a clear motion target." },
  { title: "Keep lighting fixed", desc: "Stable lighting helps separate shots feel like one sequence." },
  { title: "Reuse the same character description", desc: "Repeat identity details instead of improvising them scene by scene." },
  { title: "Reuse the same camera style", desc: "Consistent lens and camera language creates a stronger film grammar." },
];

const ratings = [
  { label: "Prompt Simplicity", value: "4.8/5" },
  { label: "Consistency", value: "4.7/5" },
  { label: "Camera Control", value: "4.5/5" },
  { label: "Ease of Use", value: "4.6/5" },
  { label: "Video Quality", value: "4.6/5" },
  { label: "Overall", value: "4.6/5" },
];

const related = [
  { title: "Runway Gen-4 Review", href: "/insights/runway-gen-4-review", desc: "A practical review of character consistency, motion quality, and camera control." },
  { title: "Kling vs Veo", href: "/insights/kling-vs-veo", desc: "A side-by-side comparison of AI video tools for cinematic production." },
  { title: "AI Video Workflow", href: "/insights/ai-video-workflow", desc: "A repeatable production workflow from planning to publishing." },
  { title: "Camera Movement Guide", href: "/insights/camera-movement-guide", desc: "A guide to tracking shots, push-ins, orbits, pans, tilts, and cinematic AI camera movement." },
];

const completePrompt = `A fluffy white Jindo puppy wearing a small brown scarf happily runs along a countryside dirt road during golden hour.

Smooth tracking shot.

35mm cinematic lens.

Shallow depth of field.

Natural fur movement.

Consistent face.

Warm sunlight.

Realistic photography.

Negative prompt:
extra limbs,
duplicate animals,
blurry face,
text,
watermark.`;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Writing Better Image-to-Video Prompts",
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

function FormulaCard() {
  return (
    <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">FourFeetz Prompt Formula</p>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {promptFormula.map((item, index) => (
          <div key={item} className="flex items-center gap-3 md:flex-col md:gap-2">
            <div className="flex min-h-16 w-full items-center justify-center rounded-2xl bg-[#f7f2ea] px-4 py-4 text-center text-sm font-black text-[#2b2119]">
              {item}
            </div>
            {index < promptFormula.length - 1 ? <span className="text-xl font-black text-[#a67c52] md:rotate-[-90deg]">↓</span> : null}
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
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Prompts</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Writing Better Image-to-Video Prompts</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            A practical framework for writing prompts that generate more consistent AI videos with better motion, lighting, camera control and character continuity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">5 min read</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="Image-to-video prompt framework editorial thumbnail"
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
              In AI video production, the prompt is often more important than the model itself. A powerful model can still produce weak results when the direction is vague, overloaded, or inconsistent from shot to shot.
            </p>
            <p>
              A well-written prompt reduces retries because it gives the tool a clear subject, one action, a stable environment, consistent lighting, and a camera move that can actually be animated. Better prompts do not remove experimentation, but they make each generation easier to judge and improve.
            </p>
          </Section>

          <Section title="The FourFeetz Prompt Formula">
            <p>
              FourFeetz prompts are built from the same order every time. This keeps creative direction readable and helps compare results across tools like Runway, Kling, and Veo.
            </p>
            <FormulaCard />
          </Section>

          <Section title="Character">
            <p>
              The character section protects identity. It should describe the subject clearly without changing the core details between scenes.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {characterDetails.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <CompactCard title="Good Example" desc="A fluffy white Jindo puppy wearing a small brown scarf, curious expression, consistent face and soft fur." />
              <CompactCard title="Bad Example" desc="A cute dog, maybe wearing something, looking nice in a beautiful scene." />
            </div>
          </Section>

          <Section title="Action">
            <p>
              Action wording should be simple and visible. The best action prompts describe one physical movement that can happen in a short clip.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {actionExamples.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Environment">
            <p>
              Environment gives the character a believable world. Describe the location, weather, season, surface, and background details that affect the shot.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {environmentCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Lighting">
            <p>
              Consistent lighting improves AI video because it connects separate shots into one visual timeline. When lighting changes randomly, the same character can look like it belongs to a different project.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {lightingCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Camera">
            <p>
              Camera language should be physically plausible. Choose one camera behavior per shot so the model can understand how the frame should move.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {cameraCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Style">
            <p>
              Style changes the entire result. Realistic photography, cinematic film language, animation, clay texture, and illustration each ask the model to create a different world.
            </p>
            <p>
              For series work, choose one style family and repeat it. Combining too many style words can make the output feel visually confused.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {styleCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Negative Prompt">
            <p>
              Negative prompts reduce common AI video errors. They cannot guarantee a perfect result, but they help tell the model what should not appear in the frame.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {negativePrompts.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Complete Prompt Example">
            <p>
              This example keeps the character, action, lighting, camera, style, and negative prompt clear enough to reuse across multiple tools.
            </p>
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Copyable prompt block</p>
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-[#f7f2ea] p-5 text-sm font-semibold leading-7 text-[#2b2119]"><code>{completePrompt}</code></pre>
            </div>
          </Section>

          <Section title="Prompt Mistakes">
            <div className="grid gap-4 md:grid-cols-2">
              {promptMistakes.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="FourFeetz Recommendations">
            <p>
              Prompt writing becomes stronger when it is treated like production direction, not decoration. Keep the core identity stable, choose one visible motion, and reuse the same camera and lighting language until the sequence feels connected.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Final Recommendation">
            <p>
              The best image-to-video prompts are not the longest prompts. They are the clearest prompts. They describe a stable character, one action, one environment, one lighting direction, one camera behavior, and one style language.
            </p>
            <p>
              For FourFeetz-style AI filmmaking, prompt quality is a continuity system. It helps every scene feel like part of the same world.
            </p>
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">FourFeetz Verdict</p>
              <div className="mt-5 grid gap-3">
                {ratings.map((rating) => (
                  <div key={rating.label} className="flex items-center justify-between gap-4 border-t border-[#eadfce] pt-3 first:border-t-0 first:pt-0">
                    <p className="font-bold text-[#76685d]">{rating.label}</p>
                    <p className="font-black text-[#2b2119]">{rating.value}</p>
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

