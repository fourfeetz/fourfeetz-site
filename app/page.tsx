"use client";

import Image from "next/image";
import Link from "next/link";
import CinematicHero from "@/components/CinematicHero";
import { socialPlatforms } from "@/lib/i18n";
import {
  getFeaturedWorks,
  getHomepageCharacters,
  getHomepageProductionRecords,
  getHomepageResources,
} from "@/lib/homepageContent";
import { useLanguage } from "@/components/LanguageProvider";

const works = getFeaturedWorks(4);
const characters = getHomepageCharacters(9);
const productionRecords = getHomepageProductionRecords(6);
const resources = getHomepageResources(4);

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{eyebrow}</p>
      <h2 className="mt-3 max-w-4xl text-5xl font-black tracking-tight text-[#2b2119] md:text-6xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#76685d]">{desc}</p>
    </div>
  );
}

function PlaceholderThumb({ label }: { label: string }) {
  return (
    <div className="grid aspect-[16/10] place-items-center rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(214,179,134,0.55),transparent_55%),#f6ebdd] text-sm font-black uppercase tracking-[0.24em] text-[#a67c52]">
      {label}
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <CinematicHero />

      <section className="px-6 py-20 md:py-24">
        <SectionHeader
          eyebrow="Published FourFeetz Work"
          title={t.home.featuredWorks}
          desc="Watch finished films and shorts featuring FourFeetz original characters and studio-directed animal stories."
        />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {works.map((work) => (
            <Link key={`${work.type}-${work.id}`} href={work.href} aria-label={`View ${work.title}`} className="block cursor-pointer rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2">
              {work.image ? (
                <Image src={work.image} alt={work.title} width={640} height={400} className="aspect-[16/10] rounded-2xl bg-[#fffaf4] object-cover" />
              ) : (
                <PlaceholderThumb label={work.category} />
              )}
              <div className="pt-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-black text-[#a67c52]">{work.category}</p>
                  <p className="text-xs font-bold text-[#9a8775]">{work.duration}</p>
                </div>
                <h3 className="mt-3 text-2xl font-black text-[#2b2119]">{work.title}</h3>
                <p className="mt-3 text-[#76685d]">{work.description}</p>
                <p className="mt-5 text-sm font-black text-[#6f4e37]">Watch the published work →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <SectionHeader
          eyebrow="Real Production Notes"
          title="What the finished work taught us"
          desc="Project records built from published FourFeetz videos, selected frames, visible production problems, and the decisions to revise, reject or keep a result."
        />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productionRecords.map((article) => (
            <Link key={article.id} href={article.href} aria-label={`Read ${article.title}`} className="group flex h-full flex-col rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-5 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2">
              {article.image ? <Image src={article.image} alt={`${article.title} production record`} width={720} height={405} className="aspect-video w-full rounded-2xl bg-[#f6ebdd] object-cover" /> : null}
              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#a67c52]">Production Record · Published Work</p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-[#2b2119]">{article.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-[#76685d]">{article.description}</p>
              <p className="mt-6 text-sm font-black text-[#6f4e37]">{article.readTime} · Read the record →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <SectionHeader
          eyebrow="Character Universe"
          title={t.home.characters}
          desc="Meet the original animal characters FourFeetz creates, manages, and develops across films, shorts, music, and production records."
        />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {characters.map((character) => (
            <Link key={character.id} href={character.href} className="rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2">
              {character.image ? (
                <Image src={character.image} alt={character.title} width={500} height={500} className="rounded-2xl bg-[#fffaf4]" />
              ) : (
                <div className="grid aspect-square place-items-center rounded-2xl bg-[#f1e4d5] text-center text-xl font-black uppercase tracking-[0.18em] text-[#a67c52]">Coming<br />Soon</div>
              )}
              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-[#a67c52]">{character.featured ? "Featured Character" : "Original Character"}</p>
              <h3 className="mt-2 text-2xl font-black text-[#2b2119]">{character.title}</h3>
              <p className="mt-3 text-[#76685d]">{character.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[40px] border border-[#eadfce] bg-[#6f4e37] p-8 text-white shadow-xl shadow-[#6f4e37]/15 md:grid-cols-[1.15fr_0.85fr] md:items-center md:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#e5c9a8]">Studio Services</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Seen the work and the process?</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#f4e8da]">Review FourFeetz’s published work and production notes first, then ask about an animal-character video shaped for your own project.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/services" className="rounded-full bg-white px-7 py-4 font-black text-[#6f4e37]">View Services</Link>
            <Link href="/services#contact" className="rounded-full border border-white/40 px-7 py-4 font-black text-white">Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <SectionHeader
          eyebrow="Creator Toolkit"
          title={t.home.resources}
          desc="Public web guides, worksheets, and review frameworks derived from studio work. Private character prompts and internal production assets are not included."
        />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-4">
          {resources.map((resource) => (
            <Link key={resource.id} href={resource.href} aria-label={`View ${resource.title}`} className="block cursor-pointer rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2">
              <h3 className="text-2xl font-black text-[#2b2119]">{resource.title}</h3>
              <p className="mt-3 text-[#76685d]">{resource.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[40px] border border-[#eadfce] bg-white p-8 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:items-center md:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Studio</p>
            <h2 className="mt-3 text-5xl font-black tracking-tight text-[#2b2119] md:text-6xl">{t.home.studio}</h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-[#76685d]">
              FourFeetz Studios is an independent animal-character production studio. We create and manage original characters, publish finished films, shorts and music, and document selected production decisions without exposing proprietary character assets.
            </p>
            <Link href="/about" className="mt-8 inline-flex rounded-full bg-[#6f4e37] px-7 py-4 font-bold text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29]">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <SectionHeader
          eyebrow="Distribution"
          title={t.home.social}
          desc="Follow published FourFeetz films, shorts, music, production notes, and studio updates."
        />
        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-3">
          {socialPlatforms.map((platform) => (
            <Link key={platform.name} href={platform.href} className="rounded-full border border-[#d8c3ad] bg-[#fffdf8] px-5 py-3 text-sm font-black text-[#6f4e37] transition hover:-translate-y-0.5 hover:border-[#6f4e37] hover:text-[#2b2119]">
              {platform.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
