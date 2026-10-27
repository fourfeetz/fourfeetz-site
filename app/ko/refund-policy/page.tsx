import type { Metadata } from "next";
import Link from "next/link";
import StaticInfoPage from "@/components/StaticInfoPage";
import { koreanPageTypographyClass } from "@/lib/koreanServiceStyles";
import { languageAlternates } from "@/lib/localization";

const title = "디지털 콘텐츠 환불정책 | FourFeetz";
const description = "FourFeetz 유료 PDF 가이드와 디지털 프롬프트 패키지의 청약철회, 환불, 재제공 및 고객지원 기준입니다.";
const canonical = "https://fourfeetz.com/ko/refund-policy";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: languageAlternates("/refund-policy", "/ko/refund-policy"),
  openGraph: { type: "website", siteName: "FourFeetz Studios", title, description, url: "/ko/refund-policy", locale: "ko_KR", alternateLocale: ["en_US"] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://fourfeetz.com/ko" },
    { "@type": "ListItem", position: 2, name: "환불정책", item: canonical },
  ],
};

export default function KoreanRefundPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <StaticInfoPage
        eyebrow="스토어 정책"
        title="디지털 콘텐츠 환불정책"
        description="FourFeetz가 판매하는 유료 PDF 가이드와 디지털 프롬프트 패키지의 청약철회, 환불, 재제공 및 고객지원 기준을 안내합니다. 관계 법령상 소비자 권리가 이 정책보다 우선합니다."
        updated="2026년 10월 27일"
        updatedLabel="최종 수정일"
        mainClassName={koreanPageTypographyClass}
        sections={[
          { title: "1. 적용 상품과 제공 방식", paragraphs: ["이 정책은 AI 반려동물 영상 제작 가이드 PDF와 디지털 프롬프트 패키지에 적용됩니다. 결제가 정상 승인되면 구매 권한을 확인한 뒤 보호된 다운로드 방식으로 해당 디지털 파일을 제공합니다. 출시 예정이거나 파일 준비가 완료되지 않은 상품은 유료로 제공하지 않습니다."] },
          { title: "2. 콘텐츠 제공 개시 전 청약철회", paragraphs: ["소비자는 원칙적으로 계약내용에 관한 서면을 받은 날부터 7일 이내에 청약철회를 요청할 수 있습니다. 서면을 받은 때보다 콘텐츠 제공이 늦게 시작된 경우에는 관련 법령에 따라 디지털 콘텐츠를 공급받거나 공급이 시작된 날부터 기간을 계산합니다.", "가능하면 파일을 열거나 내려받기 전에 환불을 신청해 주세요. 다만 다운로드 버튼 표시, 클릭 또는 완료 여부는 실제 제공 기록 및 법정 요건과 함께 개별적으로 확인하며, 단순히 다운로드했다는 이유만으로 모든 환불 요청을 일률적으로 거절하지 않습니다."] },
          { title: "3. 콘텐츠 제공 개시 후 청약철회 제한", paragraphs: ["디지털 콘텐츠 제공이 개시된 뒤 청약철회가 제한되는 것은 관계 법령이 정한 요건을 모두 충족한 경우에 한합니다. 여기에는 제한 사실의 명확한 사전 고지와 법령상 필요한 명시적 동의 절차가 포함됩니다. 이러한 요건을 충족하지 못한 경우 파일이 다운로드되었다는 사실만으로 청약철회를 제한하지 않습니다.", "파일 미제공, 다운로드 불가, 파일 손상 또는 상품 설명·계약 내용과 다른 콘텐츠에 관한 소비자의 법정 권리와 구제 절차는 이 제한과 별도로 보장됩니다."] },
          { title: "4. 미제공·오류·손상·설명과 다른 콘텐츠", paragraphs: ["파일이 제공되지 않았거나 다운로드에 실패한 경우, PDF가 손상된 경우, 상품 설명 또는 약정 내용과 실질적으로 다른 경우에는 주문 식별정보와 문제 내용을 이메일로 보내 주세요. 결제 및 제공 기록을 확인한 뒤 정상 파일 재제공 또는 수정본 제공을 우선 안내하며, 재제공으로 문제가 해결되지 않거나 법령상 환불 사유에 해당하면 환불할 수 있습니다.", "표시·광고 또는 계약 내용과 다르게 이행된 경우에는 관련 법령에 따라 공급받은 날부터 3개월 이내 또는 그 사실을 안 날이나 알 수 있었던 날부터 30일 이내에 청약철회를 요청할 수 있습니다."] },
          { title: "5. 환불 신청 방법과 처리 절차", paragraphs: [<>이메일 <a className="font-bold text-[#6f4e37] underline underline-offset-4" href="mailto:fourfeetzstudio@gmail.com">fourfeetzstudio@gmail.com</a>으로 구매 시 사용한 이메일, 상품명, 주문 식별정보, 신청 사유와 다운로드 시도 여부를 보내 주세요. 카드번호, 결제 비밀키 또는 다운로드 토큰은 보내지 마세요.</>, "신청을 접수하면 결제·파일 제공 기록을 확인하고, 판단에 필요한 최소한의 추가 정보만 요청합니다. 검토 후 환불 승인, 정상 파일 재제공 또는 관계 법령에 따른 제한 사유를 안내합니다."] },
          { title: "6. 환급 시기와 방법", paragraphs: ["청약철회 또는 환불이 승인되면 원 결제수단을 통해 지체 없이 환급 절차를 시작하며, 관계 법령이 정한 기준일부터 3영업일 이내에 환급하거나 환급에 필요한 조치를 합니다. 카드사 또는 결제기관의 실제 반영에는 추가 시간이 걸릴 수 있습니다. 법정 지연배상금 등 강행규정에 따른 권리는 제한되지 않습니다."] },
          { title: "7. 사업자 정보와 적용 기준", paragraphs: ["포피츠(FourFeetz) · 대표 박민식 · 사업자등록번호 865-16-02920 · 이메일 fourfeetzstudio@gmail.com", <>이 정책은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「콘텐츠산업 진흥법」 및 그 밖의 대한민국 소비자보호 관련 강행규정에 따라 해석합니다. 그 밖의 웹사이트 및 콘텐츠 이용 조건은 <Link className="font-bold text-[#6f4e37] underline underline-offset-4" href="/ko/terms">이용약관</Link>을 확인해 주세요.</>] },
        ]}
        cta={{ eyebrow: "환불 문의", title: "결제 또는 다운로드에 문제가 있나요?", description: "문제 상황과 주문 식별정보를 알려 주세요. 카드정보나 다운로드 토큰은 이메일로 보내지 마세요.", href: "mailto:fourfeetzstudio@gmail.com", label: "이메일로 문의하기" }}
      />
    </>
  );
}
