"use client";

import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";

export default function Page() {
  const { t } = useLanguage();
  const page = t.pages.contact;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title} desc={page.desc} />
    </main>
  );
}
