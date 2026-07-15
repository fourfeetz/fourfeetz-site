"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/works", label: "Films" },
  { href: "/shorts", label: "Shorts" },
  { href: "/characters", label: "Characters" },
  { href: "/insights", label: "Insights" },
  { href: "/resources", label: "Resources" },
  { href: "/studio", label: "Studio" },
  { href: "/tools", label: "Tools I Use" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
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
            FourFeetz Studios creates original AI films, characters, music and creative knowledge.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-3 text-sm font-bold text-[#6f4e37] md:justify-end lg:flex-nowrap lg:gap-x-3">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-[#2b2119]">
              {item.label}
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

