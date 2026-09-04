"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { localizedHref } from "@/lib/localization";

const footerLinks = [
  { href: "/services", koreanHref: "/ko/services/personal-pet-video", label: "My Pet Story", koreanOnly: true },
  { href: "/services", koreanHref: "/ko/services/pet-video", label: "Pet Business Content", koreanOnly: true },
  { href: "/videos", label: "Videos" },
  { href: "/characters", label: "Characters" },
  { href: "/insights", label: "Insights" },
  { href: "/resources", label: "Resources" },
  { href: "/services", label: "Services" },
  { href: "/tools", label: "Production Tools" },
  { href: "/about", label: "About" },
  { href: "/privacy", koreanHref: "/ko/privacy", label: "Privacy" },
  { href: "/terms", koreanHref: "/ko/terms", label: "Terms" },
  { href: "/contact", koreanHref: "/ko/services#contact", label: "Contact" },
];

export default function Footer() {
  const { lang } = useLanguage();
  const labels = lang === "ko" ? {
    Videos: "영상",
    Characters: "캐릭터",
    Insights: "인사이트",
    Resources: "리소스",
    Services: "제작 의뢰",
    "Production Tools": "제작 도구",
    About: "소개",
    Privacy: "개인정보 처리방침",
    Terms: "이용약관",
    Contact: "문의",
    "My Pet Story": "My Pet Story",
    "Pet Business Content": "업체용 콘텐츠",
  } as Record<string, string> : {};

  return (
    <footer className="border-t border-[#e6d8c8] bg-[#fffdf8] px-6 py-12 print:hidden">
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
              ? "FourFeetz Studios는 반려동물의 사진과 이야기를 감성적인 영상과 디지털 작품으로 만들고, 반려동물 업체를 위한 홍보 콘텐츠를 제작하는 크리에이티브 스튜디오입니다. 자체 캐릭터와 공개 작품도 함께 소개합니다."
              : "FourFeetz Studios is an independent studio creating and managing original animal characters, published films, and selected records from real projects."}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-3 text-sm font-bold text-[#6f4e37] md:justify-end lg:flex-nowrap lg:gap-x-3">
          {footerLinks.filter((item) => lang === "ko" || !("koreanOnly" in item && item.koreanOnly)).map((item) => (
            <Link key={`${item.href}-${item.label}`} href={lang === "ko" && item.koreanHref ? item.koreanHref : localizedHref(item.href, lang)} className="whitespace-nowrap hover:text-[#2b2119]">
              {labels[item.label] ?? item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-[#e6d8c8] pt-6 text-sm text-[#9a8775]">
        {lang === "ko" ? (
          <p className="mb-2 leading-6">
            포피츠(FourFeetz) · 대표 박민식 · 사업자등록번호 865-16-02920 · 이메일 fourfeetzstudio@gmail.com
          </p>
        ) : null}
        © 2026 FourFeetz Studios. All rights reserved.
      </div>
    </footer>
  );
}

