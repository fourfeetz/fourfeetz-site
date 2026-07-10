"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";

export default function HaruPage() {
  const { t } = useLanguage();
  const page = t.pages.haru;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title} desc={page.desc} />
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-24 md:grid-cols-2">
        <div className="overflow-hidden rounded-[42px] bg-white shadow-2xl shadow-[#6f4e37]/15">
          <Image src="/images/works/haru-first-journey/hero.png" alt="HARU" width={900} height={900} className="h-auto w-full" />
        </div>
        <div className="rounded-[36px] border border-[#eadfce] bg-white p-8 shadow-sm">
          <h2 className="text-4xl font-black text-[#2b2119]">{page.storyTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-[#76685d]">{page.storyDesc}</p>
          <div className="mt-8 grid gap-4">
            {["Story", "Gallery", "Videos", "Travel", "Friends"].map((item) => (
              <div key={item} className="rounded-2xl border border-[#eadfce] p-5 font-bold text-[#6f4e37]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

