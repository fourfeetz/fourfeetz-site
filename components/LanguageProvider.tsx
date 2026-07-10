"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { dict, type Lang } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof dict.en;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getLangFromPath(pathname: string): Lang | null {
  const segment = pathname.split("/")[1];
  return segment === "en" || segment === "ko" ? segment : null;
}

function getSavedLang(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem("fourfeetz-lang");
  return saved === "ko" || saved === "en" ? saved : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pathLang = getLangFromPath(pathname);
  const [savedLang, setSavedLang] = useState<Lang>(getSavedLang);
  const lang = pathLang ?? savedLang;

  useEffect(() => {
    if (pathLang) window.localStorage.setItem("fourfeetz-lang", pathLang);
  }, [pathLang]);

  const setLang = (nextLang: Lang) => {
    setSavedLang(nextLang);
    window.localStorage.setItem("fourfeetz-lang", nextLang);
  };

  const value = useMemo(() => ({ lang, setLang, t: dict[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
