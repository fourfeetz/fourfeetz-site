"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMobileOpen(false), [pathname]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e6d8c8] bg-[#fbf7f0]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/ui/logos/fourfeetz-logo.png"
            alt="FourFeetz Studios"
            width={240}
            height={80}
            priority
            className="h-auto w-[170px] md:w-[210px]"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center justify-end gap-4 lg:flex xl:gap-6">
            {navItems.map((item) => (
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
        <button type="button" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-[#d9c7b4] bg-white text-[#6f4e37] transition hover:border-[#6f4e37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] lg:hidden">
          <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      <div id="mobile-navigation" className={`overflow-hidden border-t border-[#e6d8c8] bg-[#fbf7f0] transition-[max-height,opacity] duration-300 lg:hidden ${mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 border-t-transparent opacity-0"}`}>
        <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1 px-6 py-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} tabIndex={mobileOpen ? 0 : -1} className={`rounded-xl px-4 py-3 text-sm font-bold transition ${isActive(item.href) ? "bg-white text-[#2b2119] shadow-sm" : "text-[#6f4e37] hover:bg-white/70 hover:text-[#2b2119]"}`}>
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
