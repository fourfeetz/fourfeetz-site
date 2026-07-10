"use client";

import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export default function Header() {
  const { lang, setLang, t } = useLanguage();

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

        <div className="flex items-center gap-6">
          <nav className="hidden items-center md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mr-7 whitespace-nowrap text-sm font-semibold text-[#6f4e37] transition hover:text-[#2b2119] last:mr-0"
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 rounded-full border border-[#d8c3ad] bg-white p-1 text-xs font-black text-[#6f4e37]">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-2 ${
                lang === "en" ? "bg-[#6f4e37] text-white" : ""
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ko")}
              className={`rounded-full px-3 py-2 ${
                lang === "ko" ? "bg-[#6f4e37] text-white" : ""
              }`}
            >
              KO
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
