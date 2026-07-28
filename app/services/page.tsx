import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Clapperboard,
  Clock3,
  Heart,
  MonitorPlay,
  Palette,
  PawPrint,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { shorts } from "@/data/shorts";
import { films } from "@/lib/films";
import { englishLanguageAlternates } from "@/lib/localization";

const title = "AI Video Production Services | FourFeetz";
const description =
  "Professional AI video production services including cinematic animation, YouTube Shorts, social media content, pet brand videos and commercial AI advertising.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: englishLanguageAlternates("/services", "/ko/services"),
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title,
    description,
    url: "/services",
    images: [
      {
        url: "/images/studio-hero-v2.png",
        alt: "FourFeetz AI video production studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/studio-hero-v2.png"],
  },
};

const primaryButton =
  "inline-flex items-center justify-center rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";
const secondaryButton =
  "inline-flex items-center justify-center rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";

const services = [
  {
    title: "AI Shorts",
    description: "Vertical videos for YouTube Shorts, TikTok and Instagram Reels.",
    icon: MonitorPlay,
  },
  {
    title: "Brand Commercials",
    description: "Modern AI advertisements for products and businesses.",
    icon: Clapperboard,
  },
  {
    title: "Character Animation",
    description: "Consistent AI characters with cinematic storytelling.",
    icon: WandSparkles,
  },
  {
    title: "Pet Brand Videos",
    description: "High-quality emotional videos for pet brands and products.",
    icon: PawPrint,
  },
  {
    title: "Relaxing Videos",
    description: "Ambient cinematic videos for relaxation channels.",
    icon: Heart,
  },
  {
    title: "Custom Projects",
    description: "Unique AI productions tailored to your needs.",
    icon: Sparkles,
  },
];

const strengths = [
  { title: "Premium AI Visual Quality", icon: Sparkles },
  { title: "Consistent Character Design", icon: Palette },
  { title: "Optimized for Social Media", icon: MonitorPlay },
  { title: "Fast Production Workflow", icon: Clock3 },
];

const process = [
  "Tell us about your project",
  "Creative planning and quotation",
  "AI production and editing",
  "Review and final delivery",
];

const pricing = [
  {
    name: "Starter",
    price: "$149",
    description: "15-second social media videos",
  },
  {
    name: "Standard",
    price: "$299",
    description: "30-second promotional videos",
  },
  {
    name: "Premium",
    price: "$699",
    description: "60-second cinematic productions",
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    description: "For agencies, brands and large campaigns",
  },
];

const faqs = [
  {
    question: "How long does production take?",
    answer:
      "Most projects take one to three weeks after the creative direction is approved. Larger campaigns and films may require a longer schedule.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes. The quotation will clearly define the included review stages and revision rounds before production begins.",
  },
  {
    question: "Can you create original AI characters?",
    answer:
      "Yes. FourFeetz can develop original characters and a consistent visual direction designed around your story, brand and intended platforms.",
  },
  {
    question: "Can you make commercial advertisements?",
    answer:
      "Yes. We create AI-led product films, brand stories and social advertisements, with usage requirements discussed during quotation.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. FourFeetz works remotely with companies and creators worldwide, with project communication and delivery available in English.",
  },
];

const featuredWork = [
  ...films.slice(0, 3).map((film) => ({
    title: film.title,
    category: film.category,
    description: film.description,
    image: film.thumbnail,
    href: `/works/${film.slug}`,
  })),
  ...shorts
    .filter((short) => short.type === "episode" && short.poster)
    .slice(0, 3)
    .map((short) => ({
      title: short.title,
      category: short.category,
      description: short.description,
      image: short.poster as string,
      href: `/shorts/${short.slug}`,
    })),
];

function SectionHeading({
  eyebrow,
  title: heading,
  description: copy,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">
        {heading}
      </h2>
      {copy ? <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">{copy}</p> : null}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">
            FourFeetz Studio Services
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">
            Cinematic AI Videos for Brands &amp; Creators
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d] md:text-xl md:leading-9">
            Character-driven AI videos crafted for social media, advertising, storytelling and digital campaigns.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className={primaryButton}>
              Request a Quote
            </a>
            <a href="#selected-work" className={secondaryButton}>
              View Our Work
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-[#d8c3ad] bg-[#f2e8dc] shadow-2xl shadow-[#6f4e37]/15">
          <Image
            src="/images/studio-hero-v2.png"
            alt="FourFeetz AI video production studio"
            fill
            priority
            sizes="(min-width: 768px) 44vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Create"
            title="Production built around your story."
            description="From fast vertical campaigns to character-led cinematic films, every project is shaped for its audience and platform."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title: serviceTitle, description: serviceDescription, icon: Icon }) => (
              <article
                key={serviceTitle}
                className="rounded-[32px] border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10 md:p-8"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-[#f2e8dc] text-[#6f4e37]">
                  <Icon size={23} strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-black text-[#2b2119]">{serviceTitle}</h3>
                <p className="mt-3 leading-7 text-[#76685d]">{serviceDescription}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why FourFeetz" title="A reliable creative partner." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ title: strengthTitle, icon: Icon }) => (
              <article
                key={strengthTitle}
                className="rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm"
              >
                <Icon className="text-[#a67c52]" size={28} strokeWidth={2} aria-hidden="true" />
                <h3 className="mt-6 text-xl font-black leading-7 text-[#2b2119]">{strengthTitle}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="selected-work" className="scroll-mt-24 border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Stories already in motion."
            description="A selection from the existing FourFeetz film and short-form portfolio."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((project) => (
              <article
                key={project.href}
                className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#fffdf8] shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10"
              >
                <div className="relative aspect-video overflow-hidden bg-[#f2e8dc]">
                  <Image
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="text-sm font-black text-[#a67c52]">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-[#2b2119]">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-[#76685d]">{project.description}</p>
                  <Link href={project.href} className={`${secondaryButton} mt-6 self-start px-6 py-3`}>
                    View Project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Production Process" title="Clear from brief to delivery." />
          <ol className="relative mt-12 grid gap-6 lg:grid-cols-4 lg:gap-0">
            {process.map((step, index) => (
              <li key={step} className="relative lg:pr-6">
                {index < process.length - 1 ? (
                  <span
                    className="absolute left-12 right-0 top-6 hidden h-px bg-[#d8c3ad] lg:block"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex gap-5 lg:block">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#6f4e37] text-sm font-black text-white shadow-lg shadow-[#6f4e37]/20">
                    {index + 1}
                  </span>
                  <div className="lg:mt-6">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a67c52]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 max-w-[240px] text-xl font-black leading-7 text-[#2b2119]">
                      {step}
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pricing"
            title="A starting point for your project."
            description="Each quotation is built around the creative scope, final formats and intended use."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pricing.map((tier) => (
              <article
                key={tier.name}
                className="flex min-h-[300px] flex-col rounded-[32px] border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm md:p-8"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a67c52]">{tier.name}</p>
                {tier.name === "Enterprise" ? (
                  <p className="mt-7 text-3xl font-black tracking-tight text-[#2b2119]">{tier.price}</p>
                ) : (
                  <>
                    <p className="mt-7 text-sm font-bold text-[#76685d]">Starting at</p>
                    <p className="mt-1 text-5xl font-black tracking-tight text-[#2b2119]">{tier.price}</p>
                  </>
                )}
                <div className="mt-auto pt-8">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a67c52]">Suitable for</p>
                  <p className="mt-3 leading-7 text-[#76685d]">{tier.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-2xl border border-[#eadfce] bg-[#fffdf8] px-6 py-5 text-center leading-7 text-[#76685d]">
            Final pricing depends on production complexity, video length, revisions, commercial usage and delivery schedule.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Before we begin." />
          <div className="mt-10 divide-y divide-[#eadfce] overflow-hidden rounded-[32px] border border-[#eadfce] bg-white shadow-sm">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-2 md:px-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg font-black text-[#2b2119] marker:content-none">
                  {faq.question}
                  <span className="text-2xl font-medium text-[#a67c52] transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-6 pr-10 leading-7 text-[#76685d]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Contact</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">
              Let&apos;s Create Something Amazing
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#76685d]">
              Tell us about your project and we&apos;ll prepare a custom quotation.
            </p>
            <div className="mt-8 flex items-center gap-3 text-[#6f4e37]">
              <BadgeCheck size={22} aria-hidden="true" />
              <span className="font-bold">Project details are reviewed personally.</span>
            </div>
          </div>

          <form className="grid gap-5 rounded-[36px] border border-[#eadfce] bg-[#fffdf8] p-6 shadow-xl shadow-[#6f4e37]/10 md:grid-cols-2 md:p-9">
            <label className="grid gap-2 text-sm font-black text-[#2b2119]">
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                className="rounded-2xl border border-[#d8c3ad] bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-[#2b2119]">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                className="rounded-2xl border border-[#d8c3ad] bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-[#2b2119]">
              Company
              <input
                type="text"
                name="company"
                autoComplete="organization"
                className="rounded-2xl border border-[#d8c3ad] bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-[#2b2119]">
              Project Type
              <select
                name="projectType"
                defaultValue=""
                className="rounded-2xl border border-[#d8c3ad] bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25"
              >
                <option value="" disabled>Select a service</option>
                {services.map((service) => <option key={service.title}>{service.title}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-black text-[#2b2119] md:col-span-2">
              Budget
              <select
                name="budget"
                defaultValue=""
                className="rounded-2xl border border-[#d8c3ad] bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25"
              >
                <option value="" disabled>Select a budget range</option>
                <option>$150–$299</option>
                <option>$300–$699</option>
                <option>$700–$1,499</option>
                <option>$1,500+</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-black text-[#2b2119] md:col-span-2">
              Message
              <textarea
                name="message"
                rows={6}
                className="resize-y rounded-2xl border border-[#d8c3ad] bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25"
              />
            </label>
            <div className="flex flex-col items-start gap-3 md:col-span-2">
              <button type="button" className={primaryButton}>
                Request a Quote
              </button>
              <p className="text-sm leading-6 text-[#9a8775]">
                Online submission is being prepared. For immediate inquiries, email{" "}
                <a className="font-bold text-[#6f4e37] underline underline-offset-4" href="mailto:fourfeetzstudio@gmail.com">
                  fourfeetzstudio@gmail.com
                </a>.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-[40px] bg-[#6f4e37] p-8 text-white shadow-xl shadow-[#6f4e37]/20 md:flex-row md:items-center md:justify-between md:p-12">
          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Ready to bring your ideas to life?
          </h2>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex rounded-full bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:bg-[#fff8ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6f4e37]">
              Request a Quote
            </a>
            <Link href="/films" className="inline-flex rounded-full border border-white/45 px-7 py-4 font-black text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              View Films
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
