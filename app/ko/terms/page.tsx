import type { Metadata } from "next";
import StaticInfoPage from "@/components/StaticInfoPage";
import { koreanPageTypographyClass } from "@/lib/koreanServiceStyles";
import { languageAlternates } from "@/lib/localization";

const title = "이용약관 | FourFeetz";
const description = "FourFeetz Studios 웹사이트, 캐릭터, 영상, 음악, 이미지, 제작 기록과 공개 자료 이용 조건을 안내합니다.";
const canonical = "https://fourfeetz.com/ko/terms";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: languageAlternates("/terms", "/ko/terms"),
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title,
    description,
    url: "/ko/terms",
    locale: "ko_KR",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://fourfeetz.com/ko" },
    { "@type": "ListItem", position: 2, name: "이용약관", item: canonical },
  ],
};

export default function KoreanTermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <StaticInfoPage
        eyebrow="정책"
        title="이용약관"
        description="이 약관은 FourFeetz Studios 웹사이트, 오리지널 미디어, 편집 콘텐츠와 공개 제작 자료의 이용 조건을 설명합니다."
        updated="2026년 8월 31일"
        updatedLabel="최종 수정일"
        mainClassName={koreanPageTypographyClass}
        sections={[
          { title: "웹사이트 이용", paragraphs: ["웹사이트와 공개 콘텐츠는 개인적이고 비상업적인 참고 목적으로 열람할 수 있습니다. 사이트 운영을 방해하거나 보안 통제를 우회하고, 자동 접근을 오용하거나, 관련 법령을 위반하는 방식으로 웹사이트를 이용해서는 안 됩니다."] },
          { title: "지식재산권", paragraphs: ["FourFeetz Studios의 명칭, 오리지널 캐릭터, 영상, 음악, 이미지와 작품, 글, 다운로드 자료, 제작 기록 및 시각적 정체성은 FourFeetz Studios가 소유하거나 적법하게 이용 허락을 받은 자산입니다. 콘텐츠가 온라인에 공개되어 있다는 이유만으로 소유권이나 재사용 권리가 이전되지 않습니다.", "FourFeetz의 캐릭터·영상·음악·이미지·제작 기록을 허가 없이 복제, 재배포, 각색, 판매하거나 자신의 창작물처럼 표시해서는 안 됩니다."] },
          { title: "공개 자료와 허용된 사용", paragraphs: ["일부 다운로드 자료에는 별도의 라이선스 또는 이용 안내가 포함될 수 있으며, 이 경우 해당 조건이 우선합니다. 별도로 명시하지 않는 한 공개 자료를 독립 상품으로 재판매·재배포하거나 자신의 원본 작업물로 표시할 수 없습니다.", "핵심 프롬프트, 캐릭터 바이블과 내부 제작 자산은 공개 자료 또는 고객에게 전달되는 판매 결과물에 포함된 것으로 보지 않습니다. 별도의 서면 합의가 없는 한 이러한 내부 자산에 대한 권리는 이전되지 않습니다."] },
          { title: "고객 제공 자료", paragraphs: ["고객은 상담이나 제작을 위해 제공하는 반려동물 사진, 이름, 이야기, 문구와 그 밖의 자료를 제공하고 제작 목적으로 사용할 수 있는 권리를 보유해야 합니다. 제3자의 권리를 침해하는 자료를 제공해서는 안 됩니다.", "고객 사진이나 완성 결과물을 FourFeetz 포트폴리오 또는 홍보 자료에 공개하려면 별도 동의를 받는 것을 원칙으로 합니다."] },
          { title: "편집 및 정보 콘텐츠", paragraphs: ["기사, 리뷰, 워크플로와 도구 관련 설명은 일반적인 교육 목적으로 제공합니다. 기능, 가격, 라이선스와 플랫폼 정책은 변경될 수 있으므로 제작 또는 상업적 결정을 내리기 전에 관련 제공업체의 최신 정보를 확인해야 합니다."] },
          { title: "제3자 서비스", paragraphs: ["링크와 임베디드 서비스는 제3자 웹사이트로 연결될 수 있습니다. FourFeetz Studios는 해당 서비스의 이용 가능성, 보안, 콘텐츠 또는 약관을 통제하지 않으며, 제3자 서비스 이용으로 발생한 손실에 책임을 지지 않습니다."] },
          { title: "면책 및 변경", paragraphs: ["웹사이트는 이용 가능한 상태를 기준으로 제공되며 중단 없는 접속이나 오류 없는 콘텐츠를 보장하지 않습니다. 스튜디오 운영 변화에 따라 이 약관을 업데이트할 수 있습니다. 콘텐츠 이용 허가 또는 약관 관련 문의는 fourfeetzstudio@gmail.com으로 보낼 수 있습니다."] },
        ]}
        cta={{ eyebrow: "이용 문의", title: "FourFeetz 콘텐츠 이용을 계획하고 있나요?", description: "보호되는 자료를 라이선스, 게시, 각색 또는 상업적으로 이용하기 전에 스튜디오에 문의해 주세요.", href: "/ko/services#contact", label: "문의 방법 확인하기" }}
      />
    </>
  );
}
