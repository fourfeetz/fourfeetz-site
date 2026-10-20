"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search as SearchIcon } from "lucide-react";
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
  const [mobilePersonalOpen, setMobilePersonalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const closeMenus = window.setTimeout(() => {
      setMobileOpen(false);
      setMobilePersonalOpen(false);
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
  const personalHref = lang === "ko" ? "/ko/services/personal-pet-video" : "/services";
  const memorialHref = lang === "ko" ? "/ko/services/pet-memorial-video" : "/services";
  const memorialLabel = lang === "ko" ? "추모영상" : "Memorial Video";
  const personalIsActive = isActive(personalHref) || (lang === "ko" && isActive(memorialHref));

  return (
    <header className="sticky top-0 z-50 border-b border-[#e6d8c8] bg-[#fbf7f0]/90 backdrop-blur-xl print:hidden">
      <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-6 py-4 xl:gap-4">
        <Link href={homeHref} className="relative shrink-0 min-[1400px]:translate-x-[66px]">
          <Image
            src="/images/ui/logos/fourfeetz-logo.png"
            alt="FourFeetz Studios"
            width={240}
            height={80}
            priority
            className="h-auto w-[170px] 2xl:w-[185px]"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden min-w-0 flex-1 items-center justify-center gap-3 xl:flex min-[1400px]:gap-[0.7cm]">
          {activeNavItems.map((item) => item.key === "personal" ? (
            <div key={item.href} className="group/menu relative py-2">
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`relative inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold transition after:absolute after:inset-x-0 after:-bottom-2.5 after:h-0.5 after:origin-left after:bg-[#6f4e37] after:transition-transform hover:text-[#2b2119] ${personalIsActive ? "text-[#2b2119] after:scale-x-100" : "text-[#6f4e37] after:scale-x-0 hover:after:scale-x-100"}`}
              >
                {t.nav[item.key]}
                <ChevronDown className="size-3.5 transition group-hover/menu:rotate-180 group-focus-within/menu:rotate-180" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-20 w-48 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover/menu:visible group-hover/menu:opacity-100 group-focus-within/menu:visible group-focus-within/menu:opacity-100">
                <div className="rounded-2xl border border-[#e6d8c8] bg-[#fbf7f0] p-2 shadow-xl shadow-[#6f4e37]/10">
                  <Link href={memorialHref} aria-current={lang === "ko" && pathname === memorialHref ? "page" : undefined} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#6f4e37] transition hover:bg-white hover:text-[#2b2119] focus-visible:bg-white focus-visible:text-[#2b2119] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
                    {memorialLabel}
                  </Link>
                </div>
              </div>
            </div>
          ) : (
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

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:gap-3">
          <div className="hidden items-center rounded-full border border-[#d9c7b4] bg-white p-1 text-[11px] font-black xl:flex" aria-label={lang === "ko" ? "언어 선택" : "Language selector"}>
            <Link href={englishHref} hrefLang="en" lang="en" aria-current={lang === "en" ? "page" : undefined} className={`rounded-full px-2.5 py-2 transition ${lang === "en" ? "bg-[#6f4e37] text-white" : "text-[#9a8775] hover:text-[#2b2119]"}`}>EN</Link>
            <span className="text-[#d8c3ad]" aria-hidden="true">|</span>
            <Link href={koreanHref} hrefLang="ko" lang="ko" aria-current={lang === "ko" ? "page" : undefined} className={`rounded-full px-2.5 py-2 transition ${lang === "ko" ? "bg-[#6f4e37] text-white" : "text-[#9a8775] hover:text-[#2b2119]"}`}>KO</Link>
          </div>
          <button type="button" onClick={() => setSearchOpen(true)} aria-label="Search FourFeetz" aria-haspopup="dialog" aria-expanded={searchOpen} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d9c7b4] bg-white text-[#6f4e37] transition duration-200 hover:border-[#6f4e37] hover:bg-[#f6eee4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
            <SearchIcon size={20} strokeWidth={2.2} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-[#d9c7b4] bg-white text-[#6f4e37] transition hover:border-[#6f4e37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] xl:hidden">
            <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      <div id="mobile-navigation" className={`overflow-hidden border-t border-[#e6d8c8] bg-[#fbf7f0] transition-[max-height,opacity] duration-300 xl:hidden ${mobileOpen ? "max-h-[640px] opacity-100" : "max-h-0 border-t-transparent opacity-0"}`}>
        <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1 px-6 py-4">
          <div className="mb-2 flex items-center gap-2 rounded-xl border border-[#e6d8c8] bg-white p-2 text-xs font-black">
            <Link href={englishHref} hrefLang="en" lang="en" tabIndex={mobileOpen ? 0 : -1} className={`flex-1 rounded-lg px-4 py-2 text-center ${lang === "en" ? "bg-[#6f4e37] text-white" : "text-[#6f4e37]"}`}>EN</Link>
            <Link href={koreanHref} hrefLang="ko" lang="ko" tabIndex={mobileOpen ? 0 : -1} className={`flex-1 rounded-lg px-4 py-2 text-center ${lang === "ko" ? "bg-[#6f4e37] text-white" : "text-[#6f4e37]"}`}>KO</Link>
          </div>
          {activeNavItems.map((item) => item.key === "personal" ? (
            <div key={item.href}>
              <div className={`flex items-stretch rounded-xl transition ${personalIsActive ? "bg-white text-[#2b2119] shadow-sm" : "text-[#6f4e37] hover:bg-white/70 hover:text-[#2b2119]"}`}>
                <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} tabIndex={mobileOpen ? 0 : -1} className="flex flex-1 items-center rounded-l-xl px-4 py-3 text-sm font-bold">
                  {t.nav[item.key]}
                </Link>
                <button type="button" onClick={() => setMobilePersonalOpen((open) => !open)} aria-expanded={mobilePersonalOpen} aria-controls="mobile-personal-submenu" aria-label={lang === "ko" ? `My Pet Story 하위 메뉴 ${mobilePersonalOpen ? "접기" : "펼치기"}` : `${mobilePersonalOpen ? "Collapse" : "Expand"} My Pet Story submenu`} tabIndex={mobileOpen ? 0 : -1} className="grid w-12 place-items-center rounded-r-xl border-l border-[#e6d8c8] text-[#6f4e37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#a67c52]">
                  <ChevronDown className={`size-4 transition ${mobilePersonalOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
              </div>
              <div id="mobile-personal-submenu" className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ${mobilePersonalOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="min-h-0">
                  <Link href={memorialHref} aria-current={lang === "ko" && pathname === memorialHref ? "page" : undefined} tabIndex={mobileOpen && mobilePersonalOpen ? 0 : -1} className={`ml-4 mt-1 block rounded-xl border-l-2 border-[#d8c3ad] px-5 py-3 text-sm font-bold transition ${lang === "ko" && pathname === memorialHref ? "bg-white text-[#2b2119]" : "text-[#76685d] hover:bg-white/70 hover:text-[#2b2119]"}`}>
                    {memorialLabel}
                  </Link>
                </div>
              </div>
            </div>
          ) : (
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
