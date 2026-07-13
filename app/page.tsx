"use client";

import Image from "next/image";
import Link from "next/link";
import CinematicHero from "@/components/CinematicHero";
import { characters, insights, resources, socialPlatforms, todaysUpdates, works } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

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

      <section className="border-y border-[#eadfce] bg-white px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="Now in Studio"
          title={t.home.todaysUpdate}
          desc="A compact look at what the studio is building, testing, writing, and preparing next."
        />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-4">
          {todaysUpdates.map((item) => (
            <article key={item.label} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-3xl" aria-hidden="true">{item.icon}</div>
              <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-[#a67c52]">{item.label}</p>
              <h3 className="mt-2 text-xl font-black text-[#2b2119]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#76685d]">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <SectionHeader
          eyebrow="Portfolio"
          title={t.home.featuredWorks}
          desc="AI films, shorts, music videos, series concepts, and commercial experiments prepared for multi-platform storytelling."
        />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {works.map((work) => (
            <article key={work.title} className="rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              {work.thumbnail ? (
                <Image src={work.thumbnail} alt={work.title} width={640} height={400} className="aspect-[16/10] rounded-2xl bg-[#fffaf4] object-cover" />
              ) : (
                <PlaceholderThumb label={work.category} />
              )}
              <div className="pt-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-black text-[#a67c52]">{work.category}</p>
                  <p className="text-xs font-bold text-[#9a8775]">{work.duration}</p>
                </div>
                <h3 className="mt-3 text-2xl font-black text-[#2b2119]">{work.title}</h3>
                <p className="mt-3 text-[#76685d]">{work.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <SectionHeader
          eyebrow="Character Universe"
          title={t.home.characters}
          desc="HARU is the first featured original character. The universe is designed to expand with future characters, stories, music, and short-form series."
        />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {characters.map((character, index) => (
            <Link key={`${character.name}-${index}`} href={character.href} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              {character.image ? (
                <Image src={character.image} alt={character.name} width={500} height={500} className="rounded-2xl bg-[#fffaf4]" />
              ) : (
                <div className="grid aspect-square place-items-center rounded-2xl bg-[#f1e4d5] text-center text-xl font-black uppercase tracking-[0.18em] text-[#a67c52]">Coming<br />Soon</div>
              )}
              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-[#a67c52]">{character.role}</p>
              <h3 className="mt-2 text-2xl font-black text-[#2b2119]">{character.name}</h3>
              <p className="mt-3 text-[#76685d]">{character.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <SectionHeader
          eyebrow="Creative Knowledge"
          title={t.home.latestInsights}
          desc="Editorial articles and practical notes for creators working with AI films, characters, music, tools, and repeatable workflows."
        />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {insights.map((article) => (
            <article key={article.titleEn} className="rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm font-black text-[#a67c52]">{article.category}</p>
              <h3 className="mt-4 text-2xl font-black leading-tight text-[#2b2119]">{article.titleEn}</h3>
              <p className="mt-3 text-[#76685d]">{article.descEn}</p>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-[#9a8775]">{article.readTime}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <SectionHeader
          eyebrow="Creator Toolkit"
          title={t.home.resources}
          desc="A premium resource library prepared for tutorials, templates, prompt systems, and downloadable creative assets."
        />
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-4">
          {resources.map((resource) => (
            <article key={resource.title} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-black text-[#2b2119]">{resource.title}</h3>
              <p className="mt-3 text-[#76685d]">{resource.desc}</p>
            </article>
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
              FourFeetz Studios is an AI Creative Studio creating original films, memorable characters, AI music, and practical creative knowledge. The studio connects storytelling, tool research, and production workflows for the next generation of creators.
            </p>
            <Link href="/studio" className="mt-8 inline-flex rounded-full bg-[#6f4e37] px-7 py-4 font-bold text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29]">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <SectionHeader
          eyebrow="Distribution"
          title={t.home.social}
          desc="FourFeetz distributes AI films, shorts, knowledge, and studio updates across multiple social platforms."
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
