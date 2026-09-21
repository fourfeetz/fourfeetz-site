import PageHero from "@/components/PageHero";
import { socialPlatforms } from "@/lib/i18n";

export default function Page() {
  return <main>
    <PageHero eyebrow="Publishing Plan" title="Social Publishing Formats" desc="How FourFeetz adapts finished work and production records for different publishing formats. Official account links will be added only after each channel is verified." />
    <section className="px-6 pb-20"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{socialPlatforms.map(platform => <article id={platform.name.toLowerCase()} key={platform.name} className="scroll-mt-28 rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm"><p className="text-sm font-black uppercase tracking-[0.2em] text-[#a67c52]">Planned Format</p><h2 className="mt-3 text-3xl font-black text-[#2b2119]">{platform.name}</h2><p className="mt-4 leading-7 text-[#76685d]">{platform.desc}</p><p className="mt-6 text-sm font-bold leading-6 text-[#8a7768]">No external account link is published on this page yet.</p></article>)}</div></section>
  </main>;
}
