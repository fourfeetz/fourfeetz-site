import type { Metadata } from "next";
import StoreSupportPage from "@/components/store/StoreSupportPage";
import { languageAlternates } from "@/lib/localization";

const title = "스토어 고객 지원 | FourFeetz";
const description = "FourFeetz 스토어의 결제, 파일 다운로드, 사용 방법 및 환불 요청에 관한 고객 지원 안내입니다.";
export const metadata: Metadata = { title: { absolute: title }, description, alternates: languageAlternates("/store/support", "/ko/store/support") };
export default function Page() { return <StoreSupportPage language="ko" />; }
