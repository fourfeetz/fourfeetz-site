import Link from "next/link";
import PageHero from "@/components/PageHero";

type ContentSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type StaticInfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: ContentSection[];
  updated?: string;
  cta?: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    label: string;
  };
};

export default function StaticInfoPage({ eyebrow, title, description, sections, updated, cta }: StaticInfoPageProps) {
  return (
    <main>
      <PageHero eyebrow={eyebrow} title={title} desc={description} />
      <section className="border-y border-[#eadfce] bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          {updated ? <p className="mb-10 text-sm font-bold uppercase tracking-[0.18em] text-[#a67c52]">Last updated {updated}</p> : null}
          <div className="space-y-5">
            {sections.map((section) => (
              <article key={section.title} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm md:p-9">
                <h2 className="text-2xl font-black tracking-tight text-[#2b2119] md:text-3xl">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 leading-8 text-[#76685d]">{paragraph}</p>)}
                {section.items ? <ul className="mt-5 space-y-3 text-[#76685d]">{section.items.map((item) => <li key={item} className="flex gap-3 leading-7"><span aria-hidden="true" className="font-black text-[#a67c52]">-</span><span>{item}</span></li>)}</ul> : null}
              </article>
            ))}
          </div>
        </div>
      </section>
      {cta ? (
        <section className="px-6 py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-[40px] bg-[#6f4e37] p-8 text-white shadow-xl shadow-[#6f4e37]/20 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#e5c9a8]">{cta.eyebrow}</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">{cta.title}</h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#f3e8db]">{cta.description}</p>
            </div>
            <Link href={cta.href} className="w-fit shrink-0 rounded-full bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:bg-[#fff7ed] focus:outline-none focus-visible:ring-2 focus-visible:ring-white">{cta.label}</Link>
          </div>
        </section>
      ) : null}
    </main>
  );
}
