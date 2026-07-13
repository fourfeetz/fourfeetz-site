import Link from "next/link";
import PageHero from "@/components/PageHero";
import { socialPlatforms } from "@/lib/i18n";

export default function Page() {
  return <main>
    <PageHero eyebrow="Studio Network" title="Social Platforms" desc="Follow FourFeetz films, production notes, character stories, and creative experiments in the format that suits each platform." />
    <section className="px-6 pb-20"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{socialPlatforms.map(platform => <article id={platform.name.toLowerCase()} key={platform.name} className="scroll-mt-28 rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm"><p className="text-sm font-black uppercase tracking-[0.2em] text-[#a67c52]">FourFeetz Channel</p><h2 className="mt-3 text-3xl font-black text-[#2b2119]">{platform.name}</h2><p className="mt-4 leading-7 text-[#76685d]">{platform.desc}</p><Link href="/contact" className="mt-6 inline-flex text-sm font-black text-[#6f4e37]">Request the official channel link -&gt;</Link></article>)}</div></section>
    <section className="px-6 pb-24"><div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[40px] bg-[#6f4e37] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12"><div><p className="text-sm font-black uppercase tracking-[0.3em] text-[#e5c9a8]">Stay Connected</p><h2 className="mt-3 text-4xl font-black">Follow the work from idea to release.</h2></div><Link href="/contact" className="w-fit rounded-full bg-white px-7 py-4 font-black text-[#6f4e37]">Contact the Studio</Link></div></section>
  </main>;
}
