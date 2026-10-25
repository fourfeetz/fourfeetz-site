import type { Metadata } from "next";
import CheckoutResultPage from "@/components/store/CheckoutResultPage";
export const metadata: Metadata = { title: { absolute: "결제 미완료 | FourFeetz" }, robots: { index: false, follow: false } };
export default function Page() { return <CheckoutResultPage language="ko" result="fail" />; }
