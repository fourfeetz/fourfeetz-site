import type { Metadata } from "next";
import Link from "next/link";
import StaticInfoPage from "@/components/StaticInfoPage";
import { languageAlternates } from "@/lib/localization";
import { koreanPageTypographyClass } from "@/lib/koreanServiceStyles";

export const metadata: Metadata = {
  title: { absolute: "문의 및 콘텐츠 정정 | FourFeetz" },
  description: "FourFeetz 제작 상담, 콘텐츠 오류 정정, 저작권 및 개인정보 문의 방법을 안내합니다.",
  alternates: languageAlternates("/contact", "/ko/contact"),
};

export default function KoreanContactPage() {
  return <StaticInfoPage eyebrow="Contact" title="FourFeetz에 문의하기" description="제작 상담부터 공개 콘텐츠의 오류 정정, 작품 이용과 개인정보 문의까지 이메일로 연락해 주세요." mainClassName={koreanPageTypographyClass} sections={[
    { title: "운영자 및 연락처", paragraphs: ["포피츠(FourFeetz) · 대표 박민식 · 사업자등록번호 865-16-02920", <a key="email" href="mailto:fourfeetzstudio@gmail.com" className="break-all font-bold underline">fourfeetzstudio@gmail.com</a>] },
    { title: "제작 및 협업 문의", paragraphs: ["원하는 결과물, 사용 목적, 일정과 참고 링크를 보내 주세요. 고객 사진이나 비공개 자료는 필요한 범위를 먼저 상담한 뒤 전달해 주세요.", <Link key="services" href="/ko/services#contact" className="font-bold underline">제작 상담 양식 보기</Link>] },
    { title: "콘텐츠 오류 정정", paragraphs: ["제작 기록이나 가이드에서 오류를 발견했다면 해당 페이지 주소, 수정이 필요한 문장과 확인 근거를 함께 보내 주세요. 도구의 버전이나 확인 시점을 알려주시면 내용을 검토하는 데 도움이 됩니다."] },
    { title: "저작권 및 작품 이용", paragraphs: ["캐릭터, 이미지, 영상 또는 음악의 이용을 원하거나 권리 관련 문제가 있다면 대상 작품과 요청 내용을 구체적으로 알려 주세요. 공개된 콘텐츠라는 이유만으로 재배포 또는 상업적 이용이 허용되는 것은 아닙니다."] },
    { title: "개인정보 문의", paragraphs: ["제공한 정보의 열람·정정·삭제 문의도 위 이메일로 보내 주세요. 최초 문의에 신분증 등 민감한 자료를 첨부하지 마세요.", <Link key="privacy" href="/ko/privacy" className="font-bold underline">개인정보 처리방침 보기</Link>] },
  ]} cta={{ eyebrow: "Email", title: "이메일로 문의하기", description: "메일 작성창에서 내용을 확인한 뒤 직접 전송해 주세요.", href: "mailto:fourfeetzstudio@gmail.com", label: "메일 작성하기" }} />;
}
