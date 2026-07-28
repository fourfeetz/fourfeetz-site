"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import { dict } from "@/lib/i18n";
import { getSiteLanguage, type SiteLanguage } from "@/lib/localization";

type LanguageContextValue = {
  lang: SiteLanguage;
  t: typeof dict.en | typeof dict.ko;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lang = getSiteLanguage(pathname);
  return <LanguageContext.Provider value={{ lang, t: dict[lang] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
