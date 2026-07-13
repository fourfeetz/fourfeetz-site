import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/camera-movement-guide.png";

export const metadata: Metadata = {
  title: "Camera Movement Guide for AI Filmmakers | FourFeetz Studios",
  description:
    "Learn tracking shots, push-ins, pull-outs, orbit, pan, tilt and dolly zoom techniques for cinematic AI-generated videos.",
  alternates: {
    canonical: "/insights/camera-movement-guide",
  },
  openGraph: {
    title: "Camera Movement Guide for AI Filmmakers | FourFeetz Studios",
    description:
      "Learn tracking shots, push-ins, pull-outs, orbit, pan, tilt and dolly zoom techniques for cinematic AI-generated videos.",
    images: [heroImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [heroImage],
  },
};

const quickVerdict = [
  { label: "Best Beginner Movement", winner: "Tracking Shot" },
  { label: "Best Storytelling Movement", winner: "Push In" },
  { label: "Best Cinematic Movement", winner: "Orbit" },
  { label: "Best Dialogue Movement", winner: "Slow Dolly" },
  { label: "Best Reveal Movement", winner: "Pull Out" },
];

const whyMovementMatters = [
  { title: "Viewer attention", desc: "Movement guides the eye and keeps an AI-generated shot from feeling like a still image." },
  { title: "Emotion", desc: "A push-in can feel intimate, while a pull-out can create distance, wonder, or closure." },
  { title: "Scene transition", desc: "Camera movement helps connect one shot to the next and makes a sequence feel intentionally directed." },
  { title: "Depth", desc: "Tracking, dolly, pan, and tilt movements reveal foreground, subject, and background relationships." },
  { title: "Realism", desc: "Physically plausible camera movement makes generated footage feel filmed rather than simply rendered." },
];

const trackingDetails = [
  { title: "When to use", desc: "Use tracking when a character walks, runs, drives, or moves through a clear environment." },
  { title: "Advantages", desc: "It creates direction, continuity, travel energy, and a natural sense of screen movement." },
  { title: "Example prompt", desc: "Smooth forward tracking shot following the subject along a countryside path, stable framing, realistic motion." },
  { title: "Common mistakes", desc: "Avoid combining tracking, zooming, panning, and orbiting in the same short generation." },
];

const pushInDetails = [
  { title: "Emotional close-up", desc: "A push-in moves the viewer closer to the subject and makes the emotional beat feel stronger." },
  { title: "Character reveal", desc: "Use it when the audience should notice a face, expression, costume detail, or story clue." },
  { title: "Hero shot", desc: "A slow push-in can make a character feel important without adding loud visual effects." },
  { title: "Example prompt", desc: "Slow cinematic push-in toward the character's face, warm light, shallow depth of field, stable expression." },
];

const pullOutDetails = [
  { title: "Ending scenes", desc: "A pull-out gives the final shot space to breathe and can create a quiet sense of closure." },
  { title: "Large environment", desc: "Use it when the audience should discover the world around the subject." },
  { title: "Scale", desc: "Pulling out can make a character feel small inside a larger landscape or story moment." },
  { title: "Example prompt", desc: "The camera slowly pulls back from the subject to reveal a wide countryside road at sunset." },
];

const orbitDetails = [
  { title: "Character showcase", desc: "Orbit works best when the subject is stable and the shot is about presentation." },
  { title: "Epic moments", desc: "A controlled orbit can make a scene feel larger, more dramatic, and more cinematic." },
  { title: "Fantasy scenes", desc: "Use orbit for magical reveals, stylized worlds, and dramatic character entrances." },
  { title: "Example prompt", desc: "Slow 180-degree orbit around the character, stable face, cinematic lighting, soft background depth." },
];

const panTiltDetails = [
  { title: "Pan", desc: "A pan moves horizontally, revealing a scene from left to right or following a subject across the frame." },
  { title: "Tilt", desc: "A tilt moves vertically, revealing height, sky, trees, buildings, or a subject looking up." },
  { title: "Smooth motion", desc: "Pan and tilt work best when the speed is slow and the subject remains visually clear." },
  { title: "Example prompt", desc: "Slow pan across a quiet studio scene, settling gently on the character, smooth cinematic motion." },
];

const dollyZoomDetails = [
  { title: "Why it is difficult", desc: "Dolly zoom requires coordinated camera movement and lens behavior, which AI tools may interpret unevenly." },
  { title: "When AI handles it well", desc: "It works best with simple subjects, clean backgrounds, short prompts, and limited scene action." },
  { title: "Limitations", desc: "Fast changes can distort faces, scale, background geometry, and character proportions." },
];

const workflow = ["Reference Image", "Tracking", "Push In", "Orbit", "Close-up", "Final Shot"];

const promptExamples = [
  {
    title: "Tracking Shot",
    prompt:
      "A cinematic animal character walks along a countryside path during golden hour. Smooth forward tracking shot, stable subject framing, natural fur movement, 35mm lens, shallow depth of field, warm sunlight, realistic motion, consistent face and outfit.",
  },
  {
    title: "Push In",
    prompt:
      "A cinematic animal character pauses and looks toward the camera during golden hour. Slow push-in toward the face, emotional close-up, stable expression, 35mm lens, shallow depth of field, warm sunlight, realistic motion, consistent face and outfit.",
  },
  {
    title: "Pull Out",
    prompt:
      "A cinematic animal character stands quietly on a countryside path at sunset. The camera slowly pulls out to reveal a wide landscape, stable subject framing, warm sunlight, realistic atmosphere, 35mm lens, consistent face and outfit.",
  },
  {
    title: "Orbit",
    prompt:
      "A cinematic animal character stands still in warm golden-hour light. Slow 180-degree orbit around the character, stable face, consistent outfit, soft background depth, realistic camera movement, premium cinematic framing.",
  },
  {
    title: "Pan",
    prompt:
      "A quiet cinematic countryside scene during golden hour. Slow horizontal pan from the landscape toward the animal character, smooth camera motion, stable subject framing, warm sunlight, realistic photography, 35mm lens.",
  },
  {
    title: "Tilt",
    prompt:
      "A cinematic animal character looks up beneath tall trees during soft morning light. Slow upward tilt from the character to the trees and sky, stable framing, natural movement, realistic atmosphere, consistent face and outfit.",
  },
];

const commonMistakes = [
  { title: "Fast camera", desc: "Fast movement often causes blur, distortion, unstable faces, and weak character consistency." },
  { title: "Too many movements", desc: "A prompt that asks for tracking, zooming, orbiting, and panning at once usually loses control." },
  { title: "Conflicting directions", desc: "Avoid asking the camera to move left while the subject runs right and the background moves forward." },
  { title: "Changing subject", desc: "Camera direction cannot protect continuity if the character description changes every shot." },
  { title: "Ignoring lighting", desc: "Movement looks less cinematic when lighting changes randomly between connected shots." },
];

const recommendations = [
  { title: "Keep one movement", desc: "Choose one camera behavior per generation so the model has a clear target." },
  { title: "Use slow speed", desc: "Slow movement feels more premium and reduces visual errors." },
  { title: "Use cinematic lens", desc: "Lens language such as 35mm and shallow depth of field helps define the shot." },
  { title: "Reuse reference image", desc: "A stable first frame improves subject consistency and camera framing." },
  { title: "Use golden hour", desc: "Warm consistent light makes separate shots feel connected and intentional." },
];

const finalScores = [
  { label: "Tracking Shot", value: "5.0/5" },
  { label: "Push In", value: "5.0/5" },
  { label: "Pull Out", value: "4.5/5" },
  { label: "Orbit", value: "4.3/5" },
  { label: "Pan", value: "4.1/5" },
  { label: "Tilt", value: "4.0/5" },
  { label: "Dolly Zoom", value: "3.5/5" },
];

const related = [
  { title: "Runway Gen-4 Review", href: "/insights/runway-gen-4-review", desc: "A practical review of character consistency, motion quality, and camera control." },
  { title: "Kling vs Veo", href: "/insights/kling-vs-veo", desc: "A side-by-side comparison of AI video tools for cinematic production." },
  { title: "AI Video Workflow", href: "/insights/ai-video-workflow", desc: "A repeatable production workflow from planning to publishing." },
  { title: "Writing Better Image-to-Video Prompts", href: "/insights/image-to-video-prompts", desc: "Prompt structure for movement, lighting, environment, and continuity." },
  { title: "Best AI Music Tools", href: "/insights/best-ai-music-tools", desc: "AI music tools for cinematic videos, character stories, and YouTube workflows." },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Camera Movement Guide for AI Filmmakers",
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

function ScoreTable({ scores }: { scores: { label: string; value: string }[] }) {
  return (
    <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">FourFeetz Score Table</p>
      <div className="mt-5 grid gap-3">
        {scores.map((score) => (
          <div key={score.label} className="flex items-center justify-between gap-4 border-t border-[#eadfce] pt-3 first:border-t-0 first:pt-0">
            <p className="font-bold text-[#76685d]">{score.label}</p>
            <p className="font-black text-[#2b2119]">{score.value}</p>
          </div>
        ))}
      </div>
    </div>
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
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Filmmaking</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Camera Movement Guide for AI Filmmakers</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            Learn the most useful cinematic camera movements for AI-generated videos, including tracking shots, push-ins, pull-outs, orbits, pans, tilts and smooth transitions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">6 min read</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="Camera Movement Guide for AI Filmmakers editorial thumbnail"
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
              Camera movement is one of the fastest ways to make AI-generated video feel cinematic instead of static. A beautiful frame can still feel flat if the camera has no intention, rhythm, or emotional direction.
            </p>
            <p>
              For AI filmmakers, the goal is not to use the most complicated camera move. The goal is to choose one movement that supports the story, protects character consistency, and feels physically believable.
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

          <Section title="Why Camera Movement Matters">
            <p>
              Camera movement gives an AI scene a point of view. It controls attention, changes emotion, supports transitions, reveals depth, and makes generated footage feel closer to real filmmaking.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {whyMovementMatters.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Tracking Shot">
            <p>
              A tracking shot follows a subject through space. It is one of the most useful AI video movements because it connects subject motion, camera motion, and environment in a clear direction.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {trackingDetails.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Push In">
            <p>
              A push-in moves the camera closer to the subject. It works especially well for emotional close-ups, character reveals, and hero shots where the viewer should feel pulled into the moment.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {pushInDetails.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Pull Out">
            <p>
              A pull-out moves the camera away from the subject. It is useful for ending scenes, revealing a large environment, and showing the scale of a world around a character.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {pullOutDetails.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Orbit">
            <p>
              Orbit moves the camera around the subject. It can create a premium cinematic feeling, but it works best when the subject is stable and the prompt avoids extra actions.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {orbitDetails.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Pan and Tilt">
            <p>
              Pan and tilt are simple movements for revealing space. A pan moves horizontally. A tilt moves vertically. Both are most reliable when the motion is slow and connected to a clear visual reason.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {panTiltDetails.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Dolly Zoom">
            <p>
              Dolly zoom is one of the hardest camera moves for AI video because it combines camera movement with changing lens perspective. It can look powerful when it works, but it is less reliable than tracking, push-in, or pull-out shots.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {dollyZoomDetails.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="FourFeetz Camera Workflow">
            <p>
              FourFeetz treats camera movement as a sequence of story decisions. Start with a stable reference image, then choose the movement that supports each beat.
            </p>
            <Pipeline items={workflow} />
          </Section>

          <Section title="Copyable Prompt Examples">
            <p>
              These prompt blocks are intentionally focused. Each one uses one camera movement, one subject direction, and one visual style so the model has less to untangle.
            </p>
            <div className="grid gap-5">
              {promptExamples.map((item) => (
                <article key={item.title} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">{item.title}</p>
                  <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-[#f7f2ea] p-5 text-sm font-semibold leading-7 text-[#2b2119]"><code>{item.prompt}</code></pre>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Common Mistakes">
            <div className="grid gap-4 md:grid-cols-2">
              {commonMistakes.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="FourFeetz Recommendations">
            <p>
              Camera prompts become more reliable when they are slow, specific, and supported by a strong reference image. The best camera direction feels like something a real camera operator could actually do.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Final Scores">
            <ScoreTable scores={finalScores} />
          </Section>

          <Section title="Verdict">
            <p>
              Start with tracking shots and push-ins. They are simple, cinematic, and reliable across many AI video tools. Add orbit shots only when the subject is stable and the scene needs a premium reveal.
            </p>
            <p>
              For FourFeetz-style AI filmmaking, camera movement should support emotion and continuity. One slow movement usually feels more professional than several dramatic movements fighting each other.
            </p>
            <aside className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">FourFeetz recommendation</p>
              <p className="mt-4 text-xl font-black leading-8 text-[#2b2119]">
                Use one slow, physically believable camera movement per shot. Protect the character first, then make the movement cinematic.
              </p>
            </aside>
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
