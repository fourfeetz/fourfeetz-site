"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { localizedHref } from "@/lib/localization";

const footerLinks = [
  { href: "/works", label: "Films" },
  { href: "/shorts", label: "Shorts" },
  { href: "/characters", label: "Characters" },
  { href: "/insights", label: "Insights" },
  { href: "/resources", label: "Resources" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/tools", label: "Tools I Use" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const { lang } = useLanguage();
  const labels = lang === "ko" ? {
    Films: "필름",
    Shorts: "쇼츠",
    Characters: "캐릭터",
    Insights: "인사이트",
    Resources: "리소스",
    Services: "영상 제작",
    Studio: "스튜디오",
    "Tools I Use": "사용 도구",
    About: "소개",
    Privacy: "개인정보 처리방침",
    Terms: "이용약관",
    Contact: "문의",
  } as Record<string, string> : {};

  return (
    <footer className="border-t border-[#e6d8c8] bg-[#fffdf8] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[minmax(260px,0.55fr)_minmax(0,1.45fr)]">
        <div>
          <Image
            src="/images/ui/logos/fourfeetz-logo.png"
            alt="FourFeetz Studios"
            width={700}
            height={180}
            className="h-auto w-[260px]"
          />
          <p className="mt-5 max-w-md text-[#76685d]">
            {lang === "ko"
              ? "FourFeetz는 따뜻한 AI 캐릭터 영상, 음악과 창작 인사이트를 만드는 AI 애니메이션 스튜디오입니다."
              : "FourFeetz Studios creates original AI films, characters, music and creative knowledge."}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-3 text-sm font-bold text-[#6f4e37] md:justify-end lg:flex-nowrap lg:gap-x-3">
          {footerLinks.map((item) => (
            <Link key={item.href} href={localizedHref(item.href, lang)} className="whitespace-nowrap hover:text-[#2b2119]">
              {labels[item.label] ?? item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-[#e6d8c8] pt-6 text-sm text-[#9a8775]">
        © 2026 FourFeetz Studios. All rights reserved.
      </div>
    </footer>
  );
}

