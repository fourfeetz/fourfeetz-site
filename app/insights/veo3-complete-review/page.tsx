import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/insights/veo3-complete-review.png";
const title = "Veo 3 Archived Tool Overview";
const description = "An archived overview of the questions creators can use to assess Veo 3. This page does not present an original FourFeetz production test or numerical rating.";

export const metadata: Metadata = {
  title: `${title} | FourFeetz Studios`,
  description,
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
  alternates: { canonical: "/insights/veo3-complete-review" },
  openGraph: {
    type: "article",
    title: `${title} | FourFeetz Studios`,
    description,
    url: "/insights/veo3-complete-review",
    images: [{ url: heroImage, alt: "Editorial Veo 3 archived tool overview artwork" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [heroImage],
  },
};

const reviewQuestions = [
  {
    title: "Character continuity",
    description: "Compare the face, body proportions, accessories, and temperament through the opening, middle, and final frames rather than judging one attractive still.",
  },
  {
    title: "Animal motion",
    description: "Review paws, ground contact, turns, and changes in body shape at normal speed and during a slower frame check.",
  },
  {
    title: "Camera behavior",
    description: "Confirm that the move begins and settles cleanly, keeps the intended framing, and leaves a usable transition for the edit.",
  },
  {
    title: "Scene continuity",
    description: "Place the candidate beside neighboring shots to check background structure, light direction, screen direction, and emotional pace.",
  },
];

const related = [
  {
    title: "Runway Gen-4.5 Production Review",
    href: "/insights/runway-gen45-review",
    description: "The current FourFeetz studio review, connected to HUGO production imagery and explicit motion, camera, and editability criteria.",
  },
  {
    title: "How HARU Was Created",
    href: "/insights/how-haru-was-created",
    description: "A production record grounded in HARU character references, published film frames, and the decisions used to protect identity across scenes.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: `https://fourfeetz.com${heroImage}`,
  datePublished: "2026-07-01",
  dateModified: "2026-08-15",
  mainEntityOfPage: "https://fourfeetz.com/insights/veo3-complete-review",
  author: { "@type": "Organization", name: "FourFeetz Studios", url: "https://fourfeetz.com/about" },
  publisher: { "@type": "Organization", name: "FourFeetz Studios", url: "https://fourfeetz.com" },
};

function Section({ title: sectionTitle, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[#eadfce] py-12 first:border-t-0 first:pt-0 md:py-16">
      <h2 className="text-3xl font-black tracking-tight text-[#2b2119] md:text-5xl">{sectionTitle}</h2>
      <div className="mt-6 space-y-5 text-lg leading-8 text-[#76685d]">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="text-sm font-bold text-[#8a7768]">
            <Link href="/">Home</Link><span className="px-2">/</span>
            <Link href="/insights">Insights</Link><span className="px-2">/</span>
            <span>Archived Tool Overview</span>
          </nav>
          <p className="mt-10 inline-flex rounded-full border border-[#d8c3ad] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#6f4e37]">Archived tool overview</p>
          <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#76685d] md:text-2xl md:leading-9">{description}</p>
          <aside className="mt-8 rounded-[24px] border border-[#d8c3ad] bg-[#f7efe5] p-6">
            <p className="font-black text-[#2b2119]">Evidence boundary</p>
            <p className="mt-3 leading-7 text-[#66584d]">The repository does not contain a Veo 3 test clip, production frame set, or decision log that supports a FourFeetz score or direct performance verdict. This retained URL therefore offers evaluation questions only and is excluded from search indexing and the sitemap.</p>
          </aside>
          <figure className="my-10 overflow-hidden rounded-[24px] border border-[#eadfce] bg-white shadow-xl shadow-[#6f4e37]/10">
            <Image src={heroImage} alt="Editorial Veo 3 archived tool overview artwork" width={1400} height={788} priority className="h-auto w-full" />
            <figcaption className="border-t border-[#eadfce] px-5 py-4 text-sm leading-6 text-[#76685d]">Editorial overview artwork. It is not presented as a FourFeetz test frame or software-interface capture.</figcaption>
          </figure>
        </header>

        <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-24">
          <Section title="What This Archived Page Can Still Help With">
            <p>Before adopting any video model, start with the shot that must survive the edit. Prepare the intended reference, define one visible action, decide the camera behavior, and write the rejection criteria before generation.</p>
            <p>The questions below are model-neutral. They do not claim that Veo 3 passed a FourFeetz benchmark; they describe what a creator can inspect in their own authorized test material.</p>
            <div className="grid gap-4 md:grid-cols-2">
              {reviewQuestions.map((item) => (
                <article key={item.title} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-black text-[#2b2119]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#76685d]">{item.description}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section title="A Safe Evaluation Sequence">
            <ol className="grid gap-3">
              {["Approve a reference frame that already contains the intended character and composition.", "Request one observable subject action and one restrained camera behavior.", "Review the entire clip, then inspect the first visible failure in still frames.", "Place the candidate beside the preceding and following shots before approving it.", "Check current access, pricing, usage rights, and output limits in the live service."].map((step, index) => (
                <li key={step} className="grid grid-cols-[40px_1fr] gap-4 rounded-2xl border border-[#eadfce] bg-white p-5 text-base leading-7 text-[#665a50]">
                  <span className="grid size-10 place-items-center rounded-full bg-[#6f4e37] text-sm font-black text-white">{index + 1}</span>
                  <span className="self-center">{step}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section title="What This Page Does Not Claim">
            <p>It does not publish a score, success rate, generation count, fixed cost, or claim of completed FourFeetz testing. Tool access and commercial terms can change, so live product documentation must be checked before production planning.</p>
            <p>When FourFeetz has public project evidence for a workflow, the related article links the finished work or production imagery and explains the acceptance and rejection decisions. The current links below meet that standard.</p>
          </Section>
        </div>

        <section className="border-t border-[#eadfce] bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Current FourFeetz Evidence</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Continue With Documented Work</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {related.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-[#2b2119]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#76685d]">{item.description}</p>
                  <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#a67c52]">Open documented article</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
