"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { characters } from "@/lib/i18n";

export default function Page() {
  const { t } = useLanguage();
  const page = t.pages.characters;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title} desc={page.desc} />

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {characters.map((character) => (
            <Link
              key={character.name}
              href={character.href}
              className="group flex h-full min-h-[520px] flex-col rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden rounded-2xl bg-[#fffaf4]">
                <Image
                  src={character.image}
                  alt={`${character.name} character portrait`}
                  width={640}
                  height={640}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col px-1 py-5">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{character.role}</p>
                <h2 className="mt-3 text-3xl font-black text-[#2b2119]">{character.name}</h2>
                <p className="mt-2 text-sm font-black text-[#6f4e37]">{character.breed}</p>
                <p className="mt-4 leading-7 text-[#76685d]">{character.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

