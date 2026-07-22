import Image from "next/image";
import Link from "next/link";
import type { Short } from "@/data/shorts";
import { shorts } from "@/data/shorts";

export default function ShortDetailPage({ short }: { short: Short }) {
  const relatedShorts = shorts.filter((item) => item.type === "episode");

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-24">
        <div>
          {short.badge ? (
            <span className="inline-flex rounded-full bg-[#6f4e37] px-4 py-2 text-xs font-black tracking-[0.18em] text-white shadow-lg shadow-[#6f4e37]/15">
              {short.badge}
            </span>
          ) : null}
          <p className={`${short.badge ? "mt-6" : ""} text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]`}>
            {short.category}{short.episode ? ` · ${short.episode}` : ""}
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">{short.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">{short.description}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#watch" className="rounded-full bg-[#6f4e37] px-6 py-3 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29]">Watch Short</a>
            {short.originalFilmHref ? (
              <Link href={short.originalFilmHref} className="rounded-full border border-[#6f4e37]/40 bg-white px-6 py-3 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119]">
                Watch the Full Film
              </Link>
            ) : null}
            {short.characterHref ? (
              <Link href={short.characterHref} className="rounded-full border border-[#6f4e37]/40 bg-white px-6 py-3 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119]">
                Meet {short.characters?.[0] ?? "the Character"}
              </Link>
            ) : null}
            {short.music ? (
              <Link href={short.music.href} className="rounded-full border border-[#6f4e37]/40 bg-white px-6 py-3 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119]">
                Listen to {short.music.title}
              </Link>
            ) : null}
            <span className="rounded-full border border-[#dfcfbd] bg-white px-5 py-3 font-black text-[#6f4e37]">{short.duration}</span>
          </div>
        </div>

        <div id="watch" className="mx-auto w-full max-w-md scroll-mt-24 overflow-hidden rounded-[32px] border border-[#eadfce] bg-black shadow-2xl shadow-[#6f4e37]/15">
          <video
            src={short.video}
            poster={short.poster}
            controls
            playsInline
            preload="metadata"
            className="aspect-[9/16] h-auto w-full object-cover"
            aria-label={`Play ${short.title}`}
          />
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-[32px] border border-[#eadfce] bg-[#fffaf4] p-7 shadow-sm md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#a67c52]">About the Short</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#2b2119] md:text-4xl">Description</h2>
            <p className="mt-5 text-lg leading-8 text-[#76685d]">{short.description}</p>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#eadfce] pt-7">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">Duration</p>
                <p className="mt-3 text-xl font-black text-[#2b2119]">{short.duration}</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">Category</p>
                <p className="mt-3 text-xl font-black text-[#2b2119]">{short.category}</p>
              </div>
            </div>
            {short.tools.length ? (
              <div className="mt-8 border-t border-[#eadfce] pt-7">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">Tools Used</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {short.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-[#f2e8dc] px-4 py-2 text-sm font-bold text-[#6f4e37]">{tool}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </article>

          <article className="rounded-[32px] border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#a67c52]">Making Story</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#2b2119] md:text-4xl">Production Notes</h2>
            <div className="mt-7 space-y-4">
              {short.productionNotes.map((note) => (
                <div key={note.label} className="rounded-2xl border border-[#eadfce] bg-white p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{note.label}</p>
                  <p className="mt-3 leading-7 text-[#5f5248]">{note.value}</p>
                </div>
              ))}
            </div>
            {short.endFrame ? (
              <figure className="mx-auto mt-7 max-w-xs overflow-hidden rounded-[28px] border border-[#eadfce] bg-white p-3 shadow-sm">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[20px] bg-[#f6ebdd]">
                  <Image src={short.endFrame} alt={`${short.title} final frame`} fill sizes="320px" className="object-cover" />
                </div>
                <figcaption className="px-2 pb-1 pt-4 text-sm font-bold text-[#6f4e37]">Final frame</figcaption>
              </figure>
            ) : null}
          </article>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Continue Watching</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Related Shorts</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedShorts.map((related) => (
              <Link
                key={related.slug}
                href={`/shorts/${related.slug}`}
                aria-label={`View ${related.title}`}
                aria-current={related.slug === short.slug ? "page" : undefined}
                className="group overflow-hidden rounded-[28px] border border-[#eadfce] bg-white shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2"
              >
                <div className="overflow-hidden bg-black">
                  <video
                    src={related.video}
                    poster={related.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="pointer-events-none aspect-[9/16] h-auto w-full object-cover transition-transform duration-200 group-hover:scale-[1.015]"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a67c52]">{related.episode}</p>
                    <p className="text-xs font-black text-[#6f4e37]">{related.duration}</p>
                  </div>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-[#2b2119]">{related.title}</h3>
                  <p className="mt-3 line-clamp-3 leading-7 text-[#76685d]">{related.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
