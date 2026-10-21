import type { Metadata } from "next";
import StaticInfoPage from "@/components/StaticInfoPage";
import { koreanPageTypographyClass } from "@/lib/koreanServiceStyles";
import { languageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: { absolute: "편집 및 AI 콘텐츠 원칙 | FourFeetz" },
  description: "FourFeetz가 오리지널 콘텐츠, 제작 기록, 뉴스와 AI 활용 콘텐츠를 기획·검토·출처 표시·정정하는 원칙을 안내합니다.",
  alternates: languageAlternates("/editorial-policy", "/ko/editorial-policy"),
};

export default function KoreanEditorialPolicyPage() {
  return <StaticInfoPage
    eyebrow="편집 원칙"
    title="편집 및 AI 콘텐츠 원칙"
    description="FourFeetz는 오리지널 스튜디오 작업, 실제 제작 기록, 출처를 밝힌 실용 콘텐츠를 공개합니다. 이 페이지는 그 과정의 기준을 설명합니다."
    updated="2026년 10월 21일"
    updatedLabel="최종 수정일"
    mainClassName={koreanPageTypographyClass}
    sections={[
      { title: "편집 책임", paragraphs: ["FourFeetz Studios는 이 웹사이트의 편집 방향과 공개 콘텐츠에 책임을 집니다. 정정, 저작권 또는 출처 관련 문의는 fourfeetzstudio@gmail.com으로 보낼 수 있습니다.", "별도 출처가 표시되지 않은 글은 FourFeetz의 제작 관점입니다. 사실 주장, 제품 정보, 뉴스 보도 또는 인용을 뒷받침하는 외부 자료는 해당 페이지에서 출처를 연결합니다."] },
      { title: "오리지널 작업과 실제 제작 기록", paragraphs: ["필름, 쇼츠, 캐릭터, 음악, 시각 자산과 제작 기록은 FourFeetz가 제작했거나 적법한 허가를 받아 사용한 자료를 바탕으로 공개합니다. 제3자의 작업, 고객 성과 또는 시청자 수치를 FourFeetz의 결과인 것처럼 표시하지 않습니다.", "제작 기록은 창작 목표, 실제 선택, 확인한 한계와 공개된 결과를 함께 보여주는 것을 목표로 합니다. 내부 프롬프트, 비공개 고객 자료와 미공개 프로젝트 파일은 증거 자료로 공개하지 않습니다."] },
      { title: "AI 활용 콘텐츠", paragraphs: ["FourFeetz는 조사, 개요 작성, 번역, 이미지·영상 제작과 편집 과정에서 AI 도구를 활용할 수 있습니다. AI를 사용했다는 사실이 공개 페이지에 대한 편집 책임을 대신하지는 않습니다.", "공개 전에는 관련성, 명확성, 출처 표시, 사실 근거, 저작권 위험과 도구 요약을 넘어서는 실제 유용성을 검토합니다. 검색 노출이나 페이지 수 증가만을 목적으로 콘텐츠를 공개하지 않습니다."] },
      { title: "뉴스·출처·업데이트", paragraphs: ["뉴스 콘텐츠는 출처를 밝히고, 해당 출처가 확인하는 범위를 설명합니다. 보도에 근거한 주장은 원문 매체 또는 1차 자료로 연결합니다. 번역문은 번역임을 표시하며 새로운 근거를 만들지 않습니다.", "제품 기능, 가격, 라이선스와 플랫폼 정책은 바뀔 수 있습니다. 구매, 제작 또는 상업적 결정 전에는 관련 제공업체의 최신 정보를 직접 확인해야 합니다."] },
      { title: "제휴 관계", paragraphs: ["제휴 또는 추천 링크가 포함된 페이지에서는 링크 주변에 관계를 밝힙니다. 편집 의견을 판매하지 않으며, 추천 보상이 특정 도구가 모든 프로젝트에 적합하다는 뜻은 아닙니다."] },
      { title: "정정 및 삭제 요청", paragraphs: ["오류, 누락된 출처 또는 검토가 필요한 자료를 발견한 경우 페이지 URL, 해당 문구와 근거를 fourfeetzstudio@gmail.com으로 보내 주세요. FourFeetz는 정정 및 권리 관련 요청을 검토한 뒤 필요한 경우 업데이트, 설명 추가 또는 삭제합니다."] },
    ]}
    cta={{ eyebrow: "정정·권리 문의", title: "정확한 기록을 함께 만들어 주세요.", description: "편집, 출처 또는 권리 관련 문의는 페이지 URL과 근거를 함께 보내 주세요.", href: "/ko/contact", label: "문의하기" }}
  />;
}
