import Image from "next/image";
import Link from "next/link";
import { relaxingHomeFilm } from "@/lib/films";

export default function HaruRelaxingHomeFilm() {
  const film = relaxingHomeFilm;

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.92fr_0.88fr] md:items-center md:py-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{film.category}</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">{film.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">{film.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#6f4e37]">{film.duration}</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#6f4e37]">{film.character}</span>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-[32px] border border-[#eadfce] bg-white shadow-xl shadow-[#6f4e37]/10">
          <Image src={film.thumbnail} alt="HARU resting in a sunlit cozy living room" fill priority sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Watch Film</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">A quiet moment at home.</h2>
          <div className="mt-8 overflow-hidden rounded-[32px] border border-[#eadfce] bg-black shadow-2xl shadow-[#6f4e37]/15">
            <video src={film.video} poster={film.thumbnail} controls playsInline preload="metadata" className="aspect-video h-auto w-full object-cover" aria-label={`Play ${film.title}`} />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Film Details</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Production Notes</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {film.productionNotes.map((note, index) => (
              <article key={note} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-[#a67c52]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-black leading-snug text-[#2b2119]">{note}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#eadfce] bg-white px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[40px] bg-[#6f4e37] p-8 text-white shadow-xl shadow-[#6f4e37]/15 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#e5c9a8]">FourFeetz Films</p>
            <h2 className="mt-3 text-4xl font-black">Continue watching HARU.</h2>
          </div>
          <Link href="/works" className="w-fit rounded-full bg-white px-7 py-4 font-black text-[#6f4e37] transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff8ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6f4e37]">Back to Films</Link>
        </div>
      </section>
    </main>
  );
}
