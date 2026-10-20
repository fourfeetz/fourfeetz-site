import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { videoPricingPackages } from "@/lib/petBusinessServices";

const pricingCard =
  "flex h-full flex-col rounded-[32px] border border-[#eadfce] bg-[#fffdf8] p-7 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#6f4e37]/10 md:p-8";

export function VideoPricingSection({
  description = "간단한 15초 영상부터 여러 장면으로 구성된 스토리형 홍보영상까지 필요한 범위에 맞춰 선택할 수 있습니다.",
}: {
  description?: string;
}) {
  return (
    <section className="border-y border-[#eadfce] bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">Pricing</p>
        <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#2b2119] md:text-6xl">제작 가격</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">{description}</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-7xl items-stretch gap-5 md:grid-cols-3">
        {videoPricingPackages.map((tier) => (
          <article key={tier.name} className={pricingCard}>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a67c52]">{tier.name}</p>
            <p className="mt-5 text-3xl font-black text-[#2b2119]">{tier.price}</p>
            <ul className="mt-7 space-y-3 text-[#76685d]">
              {tier.detailFeatures.map((feature) => (
                <li key={feature} className="flex gap-2 leading-7">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-[#a67c52]" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-5 rounded-[28px] bg-[#6f4e37] p-6 text-white sm:flex-row sm:items-center sm:justify-between md:p-8">
        <p className="text-lg font-black">대표 가격 99,000원부터</p>
        <Link href="/ko/services#contact" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 py-4 font-black text-[#6f4e37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">무료 상담받기</Link>
      </div>
    </section>
  );
}
