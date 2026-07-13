import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/reframing-16-9-guide.png";

export const metadata: Metadata = {
  title: "Reframing 16:9 AI Films for Vertical Video | FourFeetz Studios",
  description:
    "Learn how to convert cinematic 16:9 AI videos into engaging vertical content for YouTube Shorts, TikTok, Instagram Reels and Naver Clip using AI reframing workflows.",
  alternates: {
    canonical: "/insights/reframing-16-9-guide",
  },
  openGraph: {
    title: "Reframing 16:9 AI Films for Vertical Video | FourFeetz Studios",
    description:
      "Learn how to convert cinematic 16:9 AI videos into engaging vertical content for YouTube Shorts, TikTok, Instagram Reels and Naver Clip using AI reframing workflows.",
    images: [heroImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [heroImage],
  },
};

const quickVerdict = [
  { label: "Best Platform", winner: "YouTube Shorts", desc: "Strong discovery, direct connection to long-form YouTube, and a familiar vertical format." },
  { label: "Best Quality", winner: "Google Flow", desc: "Useful for high-quality scene interpretation and premium AI reframing workflows." },
  { label: "Best AI Reframing", winner: "Kling", desc: "Helpful for motion-aware reframing, vertical tests, and fast alternate crops." },
  { label: "Best Manual Editing", winner: "CapCut", desc: "Fast hands-on control for subtitles, crop corrections, and social exports." },
  { label: "Best Overall Workflow", winner: "16:9 -> AI Reframe -> Final Edit", desc: "Protect the cinematic master first, then adapt the best vertical version for each platform." },
];

const whyCards = [
  { title: "Viewer attention", desc: "Vertical framing fills the phone screen and keeps the subject closer to the viewer." },
  { title: "Subject positioning", desc: "The main character needs to stay readable inside a much narrower frame." },
  { title: "Safe zones", desc: "Platform buttons, captions, and UI overlays can hide important details if the crop is careless." },
  { title: "Mobile viewing", desc: "Most short-form discovery happens vertically, one-handed, and very quickly." },
  { title: "Algorithm performance", desc: "Clean vertical presentation improves watchability, retention, and replay potential." },
];

const comparisonCards = [
  { title: "Field of View", desc: "16:9 shows more world horizontally. 9:16 compresses attention around the subject and vertical space." },
  { title: "Subject Size", desc: "A character that feels balanced in 16:9 may look too small when cropped for mobile." },
  { title: "Camera Framing", desc: "Horizontal framing favors landscapes and travel shots. Vertical framing favors faces, motion, and central action." },
  { title: "Eye Contact", desc: "Close vertical framing makes eyes, expressions, and character emotion more important." },
  { title: "Composition", desc: "The vertical crop needs new balance, headroom, subtitle space, and motion direction." },
];

const tools = [
  { title: "Google Flow", desc: "Strong for high-quality AI interpretation, scene expansion, and polished vertical adaptation. Weakness: still needs careful review before publishing." },
  { title: "Kling", desc: "Useful for AI reframing experiments and motion-aware vertical versions. Weakness: fast movement may still need manual correction." },
  { title: "Runway", desc: "Good for generating alternate shot versions and testing visual continuity. Weakness: not every cinematic shot survives a narrow crop." },
  { title: "CapCut Auto Reframe", desc: "Fast, accessible, and practical for social exports. Weakness: automatic tracking can miss subtle character movement." },
  { title: "Adobe Premiere Auto Reframe", desc: "Useful inside professional edit workflows and batch exports. Weakness: manual keyframe correction is often still required." },
];

const subjectCards = [
  { title: "Head room", desc: "Leave enough space above the character so the crop does not feel cramped." },
  { title: "Walking direction", desc: "Keep room in front of the subject so movement feels natural in vertical format." },
  { title: "Motion prediction", desc: "Anticipate where the character will move before setting the crop path." },
  { title: "Safe crop area", desc: "Protect faces, hands, subtitles, and important props from platform UI overlays." },
  { title: "Character consistency", desc: "Do not crop away the visual details that make the character recognizable." },
];

const backgroundCards = [
  { title: "AI outpainting", desc: "Use outpainting when the vertical frame needs extra sky, floor, road, or environment around the subject." },
  { title: "Generative fill", desc: "Use generative fill to repair missing edges, extend scenery, or remove awkward empty areas." },
  { title: "Scene expansion", desc: "Use expansion when the original 16:9 frame is too tight for a clean 9:16 composition." },
  { title: "When to use it", desc: "Expand only when cropping would damage the subject, action, subtitles, or story clarity." },
];

const platforms = [
  { title: "YouTube Shorts", desc: "Export 1080 x 1920 with clear subject framing and captions inside safe zones." },
  { title: "TikTok", desc: "Export 1080 x 1920 with strong first-frame clarity and fast subject recognition." },
  { title: "Instagram Reels", desc: "Export 1080 x 1920 with polished visual balance and subtitle-safe composition." },
  { title: "Naver Clip", desc: "Export 1080 x 1920 with readable captions and a clean mobile-first crop." },
];

const workflow = ["16:9 Master", "AI Reframe", "Manual Adjustment", "Subtitle Check", "Music", "Export"];

const bestPractices = [
  { title: "Keep subject centered", desc: "Vertical video gives less horizontal room, so center the main action early." },
  { title: "Avoid cutting faces", desc: "Faces, eyes, and expressions are usually the emotional center of vertical edits." },
  { title: "Leave headroom", desc: "A small amount of space above the subject makes the frame feel premium instead of cramped." },
  { title: "Preserve motion direction", desc: "Leave space in the direction the subject is walking, looking, or moving." },
  { title: "Review frame by frame", desc: "AI crops can drift during movement, so check important shots carefully before export." },
];

const mistakes = [
  { title: "Over-cropping", desc: "A tight crop can remove the environment, emotion, and cinematic feeling of the original." },
  { title: "Wrong aspect ratio", desc: "Exporting near-vertical sizes can create awkward platform scaling and black bars." },
  { title: "Losing character", desc: "Do not crop away features that make the subject recognizable." },
  { title: "Cropping subtitles", desc: "Subtitles need to sit inside platform-safe areas, away from buttons and captions." },
  { title: "Fast reframing", desc: "Rapid crop movement can feel worse than the original horizontal video." },
];

const ratings = [
  { label: "Ease of Use", value: "4.5/5" },
  { label: "Video Quality", value: "4.6/5" },
  { label: "Platform Compatibility", value: "4.8/5" },
  { label: "Workflow Speed", value: "4.5/5" },
  { label: "Overall", value: "4.6/5" },
];

const finalScores = [
  { label: "Google Flow", value: "★★★★★" },
  { label: "Kling", value: "★★★★☆" },
  { label: "Runway", value: "★★★★☆" },
  { label: "CapCut", value: "★★★★☆" },
  { label: "Premiere", value: "★★★★☆" },
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
  headline: "Reframing 16:9 AI Films for Vertical Video",
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
            {index < items.length - 1 ? <span className="text-xl font-black text-[#a67c52] md:rotate-[-90deg]">↓</span> : null}
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
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Social Media</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Reframing 16:9 AI Films for Vertical Video</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">
            Learn how to transform cinematic 16:9 AI videos into engaging 9:16 vertical content for YouTube Shorts, TikTok, Instagram Reels and Naver Clip.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">6 min read</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">July 2026</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="my-10">
            <Image
              src={heroImage}
              alt="Reframing 16:9 AI films for vertical video editorial thumbnail"
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
              Vertical video has become the standard format for modern social platforms because most viewers discover short content on phones. YouTube Shorts, TikTok, Instagram Reels, and Naver Clip all reward videos that feel native to the vertical screen.
            </p>
            <p>
              Simply cropping a cinematic 16:9 video usually produces poor results. The subject can become too small, faces can be cut off, subtitles can disappear, and the original composition can lose the atmosphere that made it feel cinematic.
            </p>
          </Section>

          <Section title="Quick Verdict">
            <div className="grid gap-4 md:grid-cols-2">
              {quickVerdict.map((item) => (
                <article key={item.label} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">{item.label}</p>
                  <p className="mt-3 text-2xl font-black text-[#2b2119]">{item.winner}</p>
                  <p className="mt-3 text-base leading-7 text-[#76685d]">{item.desc}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Why Reframing Matters">
            <p>
              Reframing is not only a technical export step. It changes how the story is seen on mobile, how close the viewer feels to the subject, and whether the composition survives platform overlays.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {whyCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="16:9 vs 9:16">
            <p>
              A horizontal film and a vertical social clip use different visual grammar. The master 16:9 version can keep cinematic space, while the 9:16 version needs stronger subject focus and safer composition.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {comparisonCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="AI Reframing Tools">
            <p>
              AI reframing tools can help preserve motion and expand the scene, but every result still needs human review. The best workflow combines AI reframing with manual editing judgment.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {tools.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Keeping the Subject Centered">
            <p>
              The subject should remain readable through the entire vertical edit. For character-based AI films, this is especially important because small crop mistakes can damage identity and emotion.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {subjectCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Adding Extra Background">
            <p>
              Sometimes the best vertical version is not a crop. AI outpainting, generative fill, and scene expansion can add missing sky, ground, or side detail so the vertical frame breathes naturally.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {backgroundCards.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Platform Recommendations">
            <p>
              Use a clean 1080 x 1920 export for major vertical platforms. Keep subtitles and faces away from interface-heavy areas, and review the first frame carefully before publishing.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {platforms.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="FourFeetz Workflow">
            <p>
              FourFeetz starts from a finished 16:9 master, then creates the vertical version as a separate editorial pass. This protects the film version while making the social version feel native to mobile.
            </p>
            <Pipeline items={workflow} />
          </Section>

          <Section title="Best Practices">
            <div className="grid gap-4 md:grid-cols-2">
              {bestPractices.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Common Mistakes">
            <div className="grid gap-4 md:grid-cols-2">
              {mistakes.map((item) => <CompactCard key={item.title} {...item} />)}
            </div>
          </Section>

          <Section title="Final Recommendation">
            <p>
              Treat vertical reframing as a second edit, not a quick crop. The 16:9 master should preserve cinematic composition, while the 9:16 version should protect the subject, subtitles, motion direction, and mobile viewing experience.
            </p>
            <p>
              For FourFeetz-style AI films, the strongest workflow is simple: create a beautiful horizontal master, use AI reframing when helpful, then finish the vertical version manually before publishing.
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
            <div className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a67c52]">Final Score</p>
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
