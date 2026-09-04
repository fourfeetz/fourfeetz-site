"use client";

import Image from "next/image";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { koreanNavItems, navItems } from "@/lib/i18n";
import { toEnglishPath, toKoreanPath } from "@/lib/localization";
import { useLanguage } from "@/components/LanguageProvider";
import SearchModal from "@/components/SearchModal";

export default function Header() {
  const { lang, t } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const closeMenus = window.setTimeout(() => {
      setMobileOpen(false);
      setSearchOpen(false);
    }, 0);
    return () => window.clearTimeout(closeMenus);
  }, [pathname]);

  const closeSearch = useCallback(() => setSearchOpen(false), []);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  }

  const activeNavItems = lang === "ko" ? koreanNavItems : navItems;
  const homeHref = lang === "ko" ? "/ko" : "/en";
  const englishHref = toEnglishPath(pathname);
  const koreanHref = toKoreanPath(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e6d8c8] bg-[#fbf7f0]/90 backdrop-blur-xl print:hidden">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        <Link href={homeHref} className="shrink-0">
          <Image
            src="/images/ui/logos/fourfeetz-logo.png"
            alt="FourFeetz Studios"
            width={240}
            height={80}
            priority
            className="h-auto w-[170px] md:w-[210px]"
          />
        </Link>

        <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-6 lg:flex xl:gap-8">
          {activeNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative whitespace-nowrap py-2 text-sm font-semibold transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-[#6f4e37] after:transition-transform hover:text-[#2b2119] ${isActive(item.href) ? "text-[#2b2119] after:scale-x-100" : "text-[#6f4e37] after:scale-x-0 hover:after:scale-x-100"}`}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-[#d9c7b4] bg-white p-1 lg:flex" aria-label={lang === "ko" ? "언어 선택" : "Language selector"}>
            <Link href={englishHref} hrefLang="en" lang="en" aria-label="English" title="English" aria-current={lang === "en" ? "page" : undefined} className={`rounded-full p-1.5 transition ${lang === "en" ? "bg-[#6f4e37]" : "hover:bg-[#f6eee4]"}`}>
              <Image src="/images/ui/flags/us.svg" alt="" width={24} height={16} className="h-4 w-6 rounded-[2px] object-cover" aria-hidden="true" />
              <span className="sr-only">English</span>
            </Link>
            <Link href={koreanHref} hrefLang="ko" lang="ko" aria-label="한국어" title="한국어" aria-current={lang === "ko" ? "page" : undefined} className={`rounded-full p-1.5 transition ${lang === "ko" ? "bg-[#6f4e37]" : "hover:bg-[#f6eee4]"}`}>
              <Image src="/images/ui/flags/kr.svg" alt="" width={24} height={16} className="h-4 w-6 rounded-[2px] border border-black/10 object-cover" aria-hidden="true" />
              <span className="sr-only">한국어</span>
            </Link>
          </div>
          <button type="button" onClick={() => setSearchOpen(true)} aria-label="Search FourFeetz" aria-haspopup="dialog" aria-expanded={searchOpen} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d9c7b4] bg-white text-[#6f4e37] transition duration-200 hover:border-[#6f4e37] hover:bg-[#f6eee4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
            <SearchIcon size={20} strokeWidth={2.2} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-[#d9c7b4] bg-white text-[#6f4e37] transition hover:border-[#6f4e37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] lg:hidden">
            <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      <div id="mobile-navigation" className={`overflow-hidden border-t border-[#e6d8c8] bg-[#fbf7f0] transition-[max-height,opacity] duration-300 lg:hidden ${mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 border-t-transparent opacity-0"}`}>
        <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1 px-6 py-4">
          <div className="mb-2 flex items-center gap-2 rounded-xl border border-[#e6d8c8] bg-white p-2">
            <Link href={englishHref} hrefLang="en" lang="en" aria-label="English" title="English" tabIndex={mobileOpen ? 0 : -1} className={`flex flex-1 justify-center rounded-lg px-4 py-2.5 ${lang === "en" ? "bg-[#6f4e37]" : "hover:bg-[#f6eee4]"}`}>
              <Image src="/images/ui/flags/us.svg" alt="" width={30} height={20} className="h-5 w-[30px] rounded-[2px] object-cover" aria-hidden="true" />
              <span className="sr-only">English</span>
            </Link>
            <Link href={koreanHref} hrefLang="ko" lang="ko" aria-label="한국어" title="한국어" tabIndex={mobileOpen ? 0 : -1} className={`flex flex-1 justify-center rounded-lg px-4 py-2.5 ${lang === "ko" ? "bg-[#6f4e37]" : "hover:bg-[#f6eee4]"}`}>
              <Image src="/images/ui/flags/kr.svg" alt="" width={30} height={20} className="h-5 w-[30px] rounded-[2px] border border-black/10 object-cover" aria-hidden="true" />
              <span className="sr-only">한국어</span>
            </Link>
          </div>
          {activeNavItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} tabIndex={mobileOpen ? 0 : -1} className={`rounded-xl px-4 py-3 text-sm font-bold transition ${isActive(item.href) ? "bg-white text-[#2b2119] shadow-sm" : "text-[#6f4e37] hover:bg-white/70 hover:text-[#2b2119]"}`}>
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>
      </div>
      {searchOpen ? <SearchModal onClose={closeSearch} /> : null}
    </header>
  );
}
