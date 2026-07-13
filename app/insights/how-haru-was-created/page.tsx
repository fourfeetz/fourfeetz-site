import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/how-haru-was-created-hero.png";

export const metadata: Metadata = {
  title: "How HARU Was Created | FourFeetz Studios",
  description:
    "A behind-the-scenes look at how FourFeetz Studios created HARU, including character design, consistency, AI animation, music, and production workflow.",
};

const workflow = [
  { title: "Story", desc: "Define the emotional purpose and movement of the scene." },
  { title: "Reference Image", desc: "Create a consistent visual starting point for HARU, the environment, and the camera." },
  { title: "First Shot", desc: "Generate the exact opening frame needed for animation." },
  { title: "AI Animation", desc: "Use tools such as Runway and Kling to create natural movement and camera motion." },
  { title: "Voice and Music", desc: "Add narration, environmental sound, and music only when they support the story." },
  { title: "Editing", desc: "Refine timing, audio, transitions, and final framing." },
  { title: "Publishing", desc: "Prepare horizontal and vertical versions for the website and social platforms." },
];

const tools = [
  { name: "ChatGPT", desc: "Story planning, prompt development, continuity, and production notes." },
  { name: "Runway", desc: "Multi-shot animation and cinematic scene development." },
  { name: "Kling", desc: "Natural motion, image-to-video animation, and longer cinematic shots." },
  { name: "Suno", desc: "Theme music and soundtrack experimentation." },
  { name: "CapCut", desc: "Final timing, audio, subtitles, and social media versions." },
];

const lessons = [
  "Story comes before technology.",
  "Character consistency matters more than visual complexity.",
  "Small improvements across every shot create a stronger final film.",
];

const related = [
  { title: "HARU - First Journey", href: "/works", desc: "Watch the first FourFeetz original AI short film." },
  { title: "Character Consistency Prompt Pack", href: "/resources/character-consistency-prompt-pack", desc: "Reusable prompts for keeping original characters consistent." },
  { title: "AI Video Production Workflow", href: "/resources/ai-short-film-workflow", desc: "A repeatable pipeline from story to publishing." },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How HARU Was Created",
  description: metadata.description,
  image: heroImage,
  datePublished: "2026-07-01",
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

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article>
        <header className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_420px] md:items-center md:gap-16">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Behind the Scenes</p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">
                How HARU Was Created
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
                Behind the making of FourFeetz Studios&apos; first original AI character and film.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
                <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">8 min read</span>
                <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
                <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full max-w-[360px] justify-self-center overflow-hidden rounded-[40px] border border-[#eadfce] bg-white shadow-2xl shadow-[#6f4e37]/15 md:max-w-[420px] md:justify-self-end">
              <Image src={heroImage} alt="FourFeetz character creation workflow illustration" fill priority sizes="(min-width: 768px) 420px, 100vw" className="object-contain p-4" />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-24">
          <Section title="The Beginning">
            <p>
              FourFeetz Studios began with a simple goal: create original AI stories and characters that audiences could grow alongside over time.
            </p>
            <p>
              HARU became the first step in that direction. Rather than building a character around a single video or trend, the intention was to create a long-term companion whose personality, appearance, and world could develop naturally across films, music, travel, and everyday stories.
            </p>
          </Section>

          <Section title="Why HARU?">
            <p>HARU is a young white Jindo puppy.</p>
            <p>
              The character was designed to feel gentle, curious, and emotionally approachable. The soft white fur, light brown ear tips, warm brown eyes, worn brown neck cloth, and small gold name tag were chosen to make HARU recognizable without making the design overly complicated.
            </p>
            <p>
              HARU is not the entire FourFeetz brand. HARU is the first original character inside a growing universe that will later include PORI, LUNA, HUGO, OLI, and MILO.
            </p>
          </Section>

          <Section title="Building a Consistent Character">
            <p>One of the hardest parts of AI character filmmaking is visual consistency.</p>
            <p>
              HARU needed to remain recognizable across different scenes, camera angles, environments, lighting conditions, and animation tools.
            </p>
            <figure className="my-10">
              <Image
                src="/images/insights/haru-character-sheet.png"
                alt="Official HARU Character Sheet"
                width={1400}
                height={900}
                className="h-auto w-full rounded-[20px] border border-[#eadfce] shadow-xl shadow-[#6f4e37]/10"
              />
              <figcaption className="mt-4 text-sm font-semibold leading-6 text-[#9a8775]">
                Official HARU Character Sheet used to maintain appearance consistency across AI production.
              </figcaption>
            </figure>
            <aside className="my-8 rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Why this matters</p>
              <p className="mt-4 text-base leading-7 text-[#76685d]">
                Every AI scene begins with a reference image.
              </p>
              <p className="mt-3 text-base leading-7 text-[#76685d]">
                Using an official character sheet allows HARU to remain visually recognizable across different AI models, lighting conditions, environments, and camera angles.
              </p>
            </aside>
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">The process uses</p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[#76685d]">
                <li>A fixed character reference</li>
                <li>Repeated physical descriptions</li>
                <li>Consistent collar and name tag details</li>
                <li>Controlled camera language</li>
                <li>Similar lighting and lens choices</li>
                <li>Scene-to-scene reference frames</li>
              </ul>
            </div>
            <p>
              The last frame of one scene is often used as the visual foundation for the next scene. This helps preserve character identity and environmental continuity while the film moves through changing locations and camera angles.
            </p>
          </Section>

          <Section title="The Production Workflow">
            <div className="grid gap-4">
              {workflow.map((step, index) => (
                <div key={step.title} className="grid grid-cols-[44px_1fr] gap-4 rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm">
                  <span className="grid size-11 place-items-center rounded-full bg-[#6f4e37] text-sm font-black text-white">{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-black text-[#2b2119]">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-[#76685d]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Tools Used">
            <div className="grid gap-4 sm:grid-cols-2">
              {tools.map((tool) => (
                <article key={tool.name} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
                  <p className="text-2xl font-black text-[#2b2119]">{tool.name}</p>
                  <p className="mt-3 text-base leading-7 text-[#76685d]">{tool.desc}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section title="What We Learned">
            <div className="grid gap-4">
              {lessons.map((lesson) => (
                <p key={lesson} className="rounded-3xl border border-[#eadfce] bg-white p-6 text-xl font-black leading-8 text-[#2b2119] shadow-sm">
                  {lesson}
                </p>
              ))}
            </div>
            <p>
              AI tools change quickly, but story, emotion, and recognizable characters remain the foundation. The technology matters most when it helps the audience feel closer to the character and the world being created.
            </p>
          </Section>

          <Section title="What Comes Next">
            <p>HARU&apos;s first journey is only the beginning.</p>
            <p>
              Future stories will follow HARU through everyday life, travel, cars, camping, new places, and new friendships. As the FourFeetz universe grows, each character will bring a different personality and point of view to the studio&apos;s films, music, and creative experiments.
            </p>
          </Section>
        </div>

        <section className="border-t border-[#eadfce] bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Related Content</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Continue Exploring</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
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




