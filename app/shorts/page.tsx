import type { Metadata } from "next";
import { shorts } from "@/data/shorts";

const title = "HARU Shorts | FourFeetz";
const description = "Short cinematic AI videos created by FourFeetz featuring HARU.";
const canonical = "https://www.fourfeetz.com/shorts";
const socialImage = "/images/shorts/haru/short-001.jpg";

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
    images: [{ url: socialImage, alt: "HARU resting peacefully in a warm morning scene" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function ShortsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Short-form Films</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-[#2b2119] md:text-7xl">HARU Shorts</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#76685d] md:text-xl md:leading-9">
          Short cinematic AI videos created for YouTube Shorts, Instagram Reels and TikTok.
        </p>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Latest Shorts</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Small moments, cinematic stories.</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shorts.map((short) => (
              <article id={short.id} key={short.id} className="scroll-mt-28 overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#fffdf8] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
                <div className="bg-black">
                  <video
                    src={short.video}
                    poster={short.poster}
                    autoPlay
                    muted
                    loop
                    controls
                    playsInline
                    preload="metadata"
                    className="aspect-[9/16] h-auto w-full object-cover"
                    aria-label={`Play ${short.title}`}
                  />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a67c52]">HARU Short</p>
                    <p className="rounded-full border border-[#dfcfbd] bg-white px-3 py-1.5 text-xs font-black text-[#6f4e37]">{short.duration}</p>
                  </div>
                  <h3 className="mt-5 text-2xl font-black tracking-tight text-[#2b2119]">{short.title}</h3>
                  <p className="mt-3 leading-7 text-[#76685d]">{short.description}</p>
                  <div className="mt-6 border-t border-[#eadfce] pt-5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a67c52]">Made With</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {short.tools.map((tool) => (
                        <span key={tool} className="rounded-full bg-[#f2e8dc] px-3 py-1.5 text-xs font-bold text-[#6f4e37]">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
