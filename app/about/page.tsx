import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Camera,
  CheckCircle2,
  Clapperboard,
  Compass,
  Film,
  Globe2,
  GraduationCap,
  Heart,
  Lightbulb,
  Mail,
  MessageSquareText,
  Monitor,
  MonitorPlay,
  Music2,
  PawPrint,
  Play,
  Scissors,
  Sparkles,
  TrendingUp,
  Users,
  WandSparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import HeroIllustrationCard from "@/components/HeroIllustrationCard";
import { shorts } from "@/data/shorts";
import { siteContent } from "@/lib/contentIndex";
import { films } from "@/lib/films";

const title = "About FourFeetz Studios | AI Creative Studio";
const description = "Learn about FourFeetz Studios, creator of HARU, original AI films, cinematic music, tutorials, and creative resources.";
const canonical = "https://fourfeetz.com/about";
const heroImage = "/images/about-hero-v2.png";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title,
    description,
    url: canonical,
    images: [{ url: heroImage, alt: "HARU in the FourFeetz Studios AI filmmaking workspace" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [heroImage],
  },
};

const missionCards: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Original Characters", description: "Creating lovable characters that can grow into long-term stories.", icon: Heart },
  { title: "AI Filmmaking", description: "Producing cinematic AI films using modern creative workflows.", icon: Clapperboard },
  { title: "Creative Knowledge", description: "Sharing practical tutorials, workflows and production experience with creators worldwide.", icon: BookOpen },
];

const createCards: { title: string; href: string; icon: LucideIcon }[] = [
  { title: "HARU Stories", href: "/characters/haru", icon: PawPrint },
  { title: "Original AI Films", href: "/works", icon: Film },
  { title: "YouTube Shorts", href: "/shorts", icon: MonitorPlay },
  { title: "Original Music", href: "/music", icon: Music2 },
  { title: "Workflow Guides", href: "/resources/ai-video-workflow", icon: Workflow },
  { title: "Prompt Engineering", href: "/resources/prompt-library", icon: MessageSquareText },
  { title: "AI Reviews", href: "/insights", icon: Sparkles },
  { title: "Creative Resources", href: "/resources", icon: BookOpen },
];

const workflowSteps: { title: string; icon: LucideIcon }[] = [
  { title: "Idea", icon: Lightbulb },
  { title: "ChatGPT", icon: MessageSquareText },
  { title: "Google Flow", icon: Workflow },
  { title: "Runway", icon: Film },
  { title: "Kling AI", icon: WandSparkles },
  { title: "CapCut", icon: Scissors },
  { title: "FourFeetz Website", icon: Monitor },
  { title: "YouTube", icon: Play },
  { title: "Community", icon: Users },
];

const tools: { name: string; description: string; icon: LucideIcon }[] = [
  { name: "Google Flow", description: "Scene generation and cinematic experiments", icon: Workflow },
  { name: "Runway", description: "Image-to-video and character motion", icon: Film },
  { name: "Kling AI", description: "Clip extension and targeted scene work", icon: WandSparkles },
  { name: "ChatGPT", description: "Story, prompts, planning and writing", icon: MessageSquareText },
  { name: "Suno", description: "Original music and emotional cues", icon: Music2 },
  { name: "CapCut", description: "Editing, reframing and final delivery", icon: Scissors },
];

const futureCards: { title: string; icon: LucideIcon }[] = [
  { title: "More HARU Stories", icon: PawPrint },
  { title: "New Original Characters", icon: Heart },
  { title: "Long-form AI Films", icon: Clapperboard },
  { title: "Original Soundtracks", icon: Music2 },
  { title: "Creator Resources", icon: BookOpen },
  { title: "AI Education", icon: GraduationCap },
  { title: "Community", icon: Users },
];

const whyCards: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Original", description: "Every character is created specifically for FourFeetz.", icon: Sparkles },
  { title: "Practical", description: "Every workflow is tested during real productions.", icon: CheckCircle2 },
  { title: "Growing", description: "New films, music, tutorials and resources are added continuously.", icon: TrendingUp },
];

const connectLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "YouTube", href: "/social#youtube", icon: MonitorPlay },
  { label: "TikTok", href: "/social#tiktok", icon: Clapperboard },
  { label: "Instagram", href: "/social#instagram", icon: Camera },
  { label: "Website", href: "/", icon: Globe2 },
  { label: "Contact", href: "/contact", icon: Mail },
];

const latestFilms = [...films].reverse().slice(0, 2).map((film) => ({
  title: film.title,
  description: film.description,
  href: `/works/${film.slug}`,
  meta: film.category,
}));

const latestShorts = [...shorts].reverse().slice(0, 2).map((short) => ({
  title: short.title,
  description: short.description,
  href: `/shorts/${short.slug}`,
  meta: short.category,
}));

const latestArticles = siteContent
  .filter((item) => item.type === "Insights")
  .slice(0, 2)
  .map((article) => ({ title: article.title, description: article.description, href: article.href, meta: article.category }));

const relatedGroups = [
  { title: "Latest Films", href: "/works", items: latestFilms },
  { title: "Latest Shorts", href: "/shorts", items: latestShorts },
  { title: "Latest Articles", href: "/insights", items: latestArticles },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FourFeetz Studios",
  url: canonical,
  logo: "https://fourfeetz.com/images/ui/logos/fourfeetz-logo.png",
  description,
  knowsAbout: ["AI filmmaking", "Original characters", "Cinematic music", "Creative workflows", "AI education"],
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{children}</p>;
}

function SectionHeading({ eyebrow, title, description: copy }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-7xl">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">{title}</h2>
      {copy ? <p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">{copy}</p> : null}
    </div>
  );
}

function RelatedCard({ item }: { item: { title: string; description: string; href: string; meta: string } }) {
  return (
    <Link href={item.href} aria-label={`View ${item.title}`} className="group block rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37]">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a67c52]">{item.meta}</p>
      <h4 className="mt-3 text-xl font-black tracking-tight text-[#2b2119]">{item.title}</h4>
      <p className="mt-3 line-clamp-3 leading-7 text-[#76685d]">{item.description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#6f4e37]">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
    </Link>
  );
}

export default function AboutPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div className="order-2 max-w-[900px] md:order-1">
          <SectionLabel>FourFeetz Studios</SectionLabel>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">About FourFeetz Studios</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#76685d] md:text-xl md:leading-9">Creating original AI films, lovable characters, cinematic music, and practical creative knowledge for the next generation of storytellers.</p>
        </div>
        <div className="order-1 md:order-2">
          <HeroIllustrationCard src={heroImage} alt="HARU beside a camera laptop microphone film reel editing tablet and coffee cup in the FourFeetz studio" priority />
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.38fr_0.62fr] md:items-start">
          <SectionHeading eyebrow="Our Studio" title="Who We Are" />
          <div className="rounded-[36px] border border-[#eadfce] bg-[#fffdf8] p-8 shadow-xl shadow-[#6f4e37]/10 md:p-10">
            <p className="text-xl font-bold leading-9 text-[#2b2119]">FourFeetz Studios is an independent AI creative studio dedicated to building original characters, films, music, and educational resources.</p>
            <p className="mt-6 text-lg leading-8 text-[#76685d]">Rather than creating one-off AI videos, our goal is to build long-lasting original worlds centered around memorable animal characters such as HARU.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Purpose" title="Our Mission" />
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-3">
          {missionCards.map(({ title: cardTitle, description: copy, icon: Icon }) => (
            <article key={cardTitle} className="rounded-[32px] border border-[#eadfce] bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2e8dc] text-[#6f4e37]"><Icon className="h-6 w-6" aria-hidden="true" /></div>
              <h3 className="mt-6 text-2xl font-black tracking-tight text-[#2b2119]">{cardTitle}</h3>
              <p className="mt-4 leading-7 text-[#76685d]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Connected Creative Universe" title="What We Create" />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {createCards.map(({ title: cardTitle, href, icon: Icon }) => (
            <Link key={cardTitle} href={href} aria-label={`Explore ${cardTitle}`} className="group rounded-[28px] border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37]">
              <Icon className="h-7 w-7 text-[#a67c52]" aria-hidden="true" />
              <div className="mt-7 flex items-end justify-between gap-4"><h3 className="text-xl font-black text-[#2b2119]">{cardTitle}</h3><ArrowRight className="h-5 w-5 shrink-0 text-[#6f4e37] transition-transform group-hover:translate-x-1" aria-hidden="true" /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[40px] border border-[#eadfce] bg-[#fffdf8] p-6 shadow-xl shadow-[#6f4e37]/10 md:grid-cols-[0.78fr_1.22fr] md:items-center md:p-10">
          <div className="relative aspect-square overflow-hidden rounded-[32px] bg-white">
            <Image src="/images/characters/haru/portrait.png" alt="HARU, the first original FourFeetz character" fill sizes="(min-width: 768px) 38vw, 100vw" className="object-contain p-4" />
          </div>
          <div className="p-2 md:p-6">
            <SectionLabel>First Original Character</SectionLabel>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Meet HARU</h2>
            <p className="mt-6 text-lg leading-8 text-[#76685d]">HARU is the first original character created by FourFeetz Studios.</p>
            <p className="mt-4 text-lg leading-8 text-[#76685d]">A curious little Jindo puppy whose stories explore friendship, quiet adventures, everyday life, and cinematic AI storytelling.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/characters/haru" className="rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">View HARU</Link>
              <Link href="/works" className="rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">Watch Films</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <SectionHeading eyebrow="From Idea to Audience" title="Production Workflow" description="A connected process turns each idea into a finished FourFeetz story and carries it all the way to the community." />
        <ol className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map(({ title: stepTitle, icon: Icon }, index) => (
            <li key={stepTitle} className="flex items-center gap-4 rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-5 shadow-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#6f4e37] text-white"><Icon className="h-6 w-6" aria-hidden="true" /></span>
              <div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#a67c52]">Step {String(index + 1).padStart(2, "0")}</p><h3 className="mt-1 text-lg font-black text-[#2b2119]">{stepTitle}</h3></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Production Toolkit" title="Tools We Use" />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map(({ name, description: copy, icon: Icon }) => (
            <article key={name} className="rounded-[28px] border border-[#eadfce] bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f2e8dc] text-[#6f4e37]"><Icon className="h-5 w-5" aria-hidden="true" /></div>
              <h3 className="mt-5 text-xl font-black text-[#2b2119]">{name}</h3><p className="mt-2 leading-7 text-[#76685d]">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-9 max-w-7xl"><Link href="/tools" className="inline-flex items-center gap-2 rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">View All Tools <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Roadmap" title="The Future" description="FourFeetz is growing from one original character into a connected creative universe built for long-term storytelling and shared learning." />
        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {futureCards.map(({ title: cardTitle, icon: Icon }) => (
            <article key={cardTitle} className="flex items-center gap-4 rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f2e8dc] text-[#6f4e37]"><Icon className="h-5 w-5" aria-hidden="true" /></span><h3 className="font-black text-[#2b2119]">{cardTitle}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Built with Intention" title="Why FourFeetz" />
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-3">
          {whyCards.map(({ title: cardTitle, description: copy, icon: Icon }) => (
            <article key={cardTitle} className="rounded-[32px] bg-[#6f4e37] p-8 text-white shadow-xl shadow-[#6f4e37]/15">
              <Icon className="h-8 w-8 text-[#e5c9a8]" aria-hidden="true" /><h3 className="mt-8 text-3xl font-black">{cardTitle}</h3><p className="mt-4 leading-8 text-[#f4e8da]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#5b3f2d] bg-[#6f4e37] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#e5c9a8]">Stay Connected</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><h2 className="text-4xl font-black tracking-tight md:text-6xl">Connect with FourFeetz</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-[#f4e8da]">Follow new stories, production notes, music, and creative experiments as the studio grows.</p></div><Compass className="hidden h-16 w-16 text-[#e5c9a8] md:block" aria-hidden="true" /></div>
          <div className="mt-9 flex flex-wrap gap-3">
            {connectLinks.map(({ label, href, icon: Icon }) => <Link key={label} href={href} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-black text-[#6f4e37] transition hover:-translate-y-0.5 hover:bg-[#fff8ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5c9a8]"><Icon className="h-4 w-4" aria-hidden="true" />{label}</Link>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Explore More" title="Related Content" description="The latest films, short-form stories, and practical articles from FourFeetz Studios." />
        <div className="mx-auto mt-10 grid max-w-7xl gap-7 lg:grid-cols-3">
          {relatedGroups.map((group) => (
            <div key={group.title}>
              <div className="flex items-center justify-between gap-4"><h3 className="text-2xl font-black text-[#2b2119]">{group.title}</h3><Link href={group.href} className="text-sm font-black text-[#6f4e37] hover:text-[#2b2119]">View all</Link></div>
              <div className="mt-5 grid gap-4">{group.items.map((item) => <RelatedCard key={item.href} item={item} />)}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
