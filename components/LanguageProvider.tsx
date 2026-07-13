"use client";

import { createContext, useContext } from "react";
import { dict } from "@/lib/i18n";

type LanguageContextValue = {
  lang: "en";
  t: typeof dict.en;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const englishLanguage = { lang: "en", t: dict.en } as const;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <LanguageContext.Provider value={englishLanguage}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
