import type { Metadata } from "next";
import StaticInfoPage from "@/components/StaticInfoPage";
import { languageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: { absolute: "개인정보 처리방침 | FourFeetz" },
  description: "FourFeetz의 개인정보 수집, 이용, Google Analytics, 쿠키 및 고객 사진 처리 원칙을 안내합니다.",
  alternates: languageAlternates("/privacy", "/ko/privacy"),
};

export default function KoreanPrivacyPage() {
  return <StaticInfoPage eyebrow="정책" title="개인정보 처리방침" description="이 정책은 FourFeetz Studios 웹사이트를 방문하거나 스튜디오에 문의할 때 정보가 어떻게 처리되는지 설명합니다." updated="2026년 7월 15일" sections={[
    { title: "수집하는 정보", paragraphs: ["문의 시 이름, 이메일 주소, 소속 또는 채널명, 메시지처럼 방문자가 직접 제공하는 정보를 받을 수 있습니다. 웹사이트 운영과 보호를 위해 호스팅, 보안, 분석 서비스가 기본적인 기술 정보를 수집할 수도 있습니다."] },
    { title: "정보 이용 방식", items: ["문의에 응답하고 요청한 서비스에 관해 소통합니다.", "웹사이트를 운영·보호·유지하고 개선합니다.", "전체적인 웹사이트 이용 현황과 콘텐츠 성과를 파악합니다.", "법적 의무를 이행하고 오용 또는 부정을 방지합니다."] },
    { title: "쿠키 및 서비스 제공업체", paragraphs: ["사이트는 호스팅, 분석, 임베디드 미디어 또는 보안을 위해 필수 쿠키와 신뢰할 수 있는 서비스 제공업체를 사용할 수 있습니다. 이러한 제공업체는 서비스를 제공하는 데 필요한 범위에서 자체 약관에 따라 정보를 처리합니다.", "FourFeetz는 방문자의 이용 방식, 트래픽, 성능 및 익명화된 방문 패턴을 이해하기 위해 Google Analytics를 사용합니다. Google Analytics는 쿠키를 통해 익명화된 정보를 수집할 수 있습니다."] },
    { title: "고객 사진과 제작 자료", paragraphs: ["고객이 제공한 반려동물 사진, 이야기와 문구는 문의 검토와 합의된 제작을 위해 사용합니다.", "고객 사진이나 제작 결과물을 FourFeetz 포트폴리오 또는 홍보 자료로 공개하려면 별도 동의를 받는 것을 원칙으로 합니다. 구체적인 보관 기간과 삭제 방식은 프로젝트 시작 전 합의 내용에 따릅니다."] },
    { title: "제휴 및 추천 링크", paragraphs: ["FourFeetz의 일부 페이지에는 실제 제작 워크플로에서 사용하는 제품과 서비스의 제휴 또는 추천 링크가 포함될 수 있습니다.", "방문자가 이 링크를 통해 등록하거나 구매하면 방문자에게 추가 비용 없이 FourFeetz가 수수료, 추천 보상 또는 프로모션 크레딧을 받을 수 있습니다.", "이러한 관계는 FourFeetz의 편집 의견이나 추천에 영향을 주지 않습니다."] },
    { title: "국제 개인정보 보호 권리", paragraphs: ["유럽경제지역(EEA), 영국, 스위스 또는 적용 가능한 개인정보 보호법이 있는 기타 지역에 거주하는 경우, 개인정보의 열람, 정정, 삭제 또는 처리 제한과 관련한 추가 권리가 있을 수 있습니다."] },
    { title: "보유 기간 및 선택권", paragraphs: ["FourFeetz는 수집 목적, 법적 의무 또는 분쟁 해결에 합리적으로 필요한 기간 동안만 개인정보를 보유합니다. 적용 법령에 따라 fourfeetzstudio@gmail.com으로 열람, 정정 또는 삭제를 요청할 수 있습니다."] },
    { title: "정책 변경", paragraphs: ["웹사이트와 스튜디오 서비스가 발전함에 따라 이 정책을 업데이트할 수 있습니다. 상단 날짜는 최신 수정일을 나타내며, 업데이트 후 웹사이트를 계속 이용하면 수정된 정책이 적용됩니다."] },
  ]} />;
}
