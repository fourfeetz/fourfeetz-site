import Image from "next/image";
import Link from "next/link";
import HeroIllustrationCard from "@/components/HeroIllustrationCard";
import { films } from "@/lib/films";

export default function FilmsIndex() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Original Productions</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">Films</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">Long-form AI films and cinematic character stories created by FourFeetz Studios.</p>
        </div>
        <HeroIllustrationCard src="/images/works-hero-v2.png" alt="FourFeetz AI film production and story illustration" priority />
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Film Library</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">HARU Films</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {films.map((film) => (
              <Link key={film.slug} href={`/works/${film.slug}`} aria-label={`View film: ${film.title}`} className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#fffdf8] shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2">
                <div className="relative aspect-video overflow-hidden bg-[#f6ebdd]">
                  <Image src={film.thumbnail} alt={`${film.title} thumbnail`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-200 group-hover:scale-[1.02]" />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-black text-[#a67c52]">{film.category}</p>
                    <p className="rounded-full border border-[#dfcfbd] bg-white px-3 py-1.5 text-xs font-black text-[#6f4e37]">{film.duration}</p>
                  </div>
                  <h3 className="mt-5 text-3xl font-black tracking-tight text-[#2b2119]">{film.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-[#76685d]">{film.description}</p>
                  <span className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-[#6f4e37]">View Film →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
