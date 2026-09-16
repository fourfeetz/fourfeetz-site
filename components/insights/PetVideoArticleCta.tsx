import Link from "next/link";
import type { ProductionInsight } from "@/lib/productionInsights";

export default function PetVideoArticleCta({ cta, language }: {
  cta: NonNullable<ProductionInsight["serviceCta"]>;
  language: "en" | "ko";
}) {
  const ko = language === "ko";
  return <section className="px-6 py-16 md:py-20">
    <div className="mx-auto max-w-6xl">
      <div className="rounded-[32px] bg-[#6f4e37] p-7 text-white md:p-10">
        <h2 className="max-w-4xl text-3xl font-black leading-tight md:text-4xl">{ko ? "반려동물의 소중한 순간을 영상으로 남기고 싶으신가요?" : "Want to turn your pet's memories into a film?"}</h2>
        <p className="mt-5 leading-8 text-[#f4e8da]">{ko ? "FourFeetz Studios의 반려동물 영상 제작 서비스를 확인해보세요." : "Explore pet video production by FourFeetz Studios."}</p>
        <Link href={cta.href} className="mt-7 inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-white px-6 py-4 text-center font-black text-[#6f4e37] transition hover:bg-[#fff7ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6f4e37]">{ko ? "반려동물 영상 제작 알아보기" : "Explore Pet Video Production"}</Link>
      </div>
      {cta.protofaceAffiliate ? <aside aria-label={ko ? "Protoface 제휴 안내" : "Protoface affiliate disclosure"} className="mt-6 rounded-2xl border border-[#eadfce] bg-[#fffdf8] p-6 text-sm leading-7 text-[#76685d]">
        <p>{ko ? "이번 제작 테스트에는 Protoface Studio를 사용했습니다." : "We used Protoface Studio as part of this production test."}</p>
        <a href="https://protoface.com/studio?fpr=fourfeetz" target="_blank" rel="sponsored nofollow noopener noreferrer" className="mt-3 inline-block font-bold text-[#6f4e37] underline underline-offset-4">{ko ? "Protoface Studio 살펴보기 (제휴 링크)" : "Try Protoface Studio (affiliate link)"}</a>
        <p className="mt-2">{ko ? "쿠폰 코드" : "Coupon Code"}: <strong className="text-[#2b2119]">FOURFEETZ</strong></p>
        <p className="mt-2">{ko ? "현재 안내된 FourFeetz 제휴 혜택은 Studio Unlimited 가입 시 $10 상당의 추가 무료 크레딧입니다. 적용 대상과 혜택은 변경될 수 있으므로 가입·결제 화면에서 코드 적용 여부와 최종 조건을 확인해 주세요." : "The currently advertised FourFeetz partner offer is $10 in additional free credits when joining Studio Unlimited. Eligibility and offers may change; confirm the code and final terms on the signup or checkout screen."}</p>
        <p className="mt-3 border-t border-[#eadfce] pt-3">{ko ? "제휴 안내: 이 링크는 제휴 링크입니다. 방문자에게 추가 비용 없이 FourFeetz Studios가 수수료를 받을 수 있습니다." : "This is an affiliate link. FourFeetz Studios may receive a commission at no additional cost to you."}</p>
      </aside> : null}
    </div>
  </section>;
}
