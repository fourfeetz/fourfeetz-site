import Link from "next/link";
import type { StoreLanguage } from "@/lib/store";

export default function CheckoutResultPage({ language, result }: { language: StoreLanguage; result: "success" | "fail" }) {
  const ko = language === "ko"; const prefix = ko ? "/ko" : "";
  const success = result === "success";
  const title = success ? (ko ? "결제 인증 결과 확인 중" : "Verifying payment") : (ko ? "결제가 완료되지 않았습니다" : "Payment was not completed");
  const description = success ? (ko ? "이 화면만으로 결제 완료 처리되지 않습니다. 서버가 주문번호와 금액을 확인하고 결제 승인 API 결과를 저장해야 결제가 완료됩니다. 현재 결제 연동은 비활성 상태입니다." : "This page never marks an order as paid. Payment completes only after the server verifies the order and amount, captures the payment, and stores the result. Checkout is currently disabled.") : (ko ? "실제 청구는 시도되지 않았습니다. 결제 테스트 환경이 준비된 뒤 오류 코드를 민감정보 없이 기록하고 주문을 FAILED 또는 CANCELED로 반영합니다." : "No charge was attempted. Once sandbox checkout is configured, safe error details will be logged and the order will be marked FAILED or CANCELED.");
  return <main className="bg-[#fbf7f0] px-6 py-24 text-[#2b2119]"><section className="mx-auto max-w-3xl rounded-[36px] border border-[#eadfce] bg-white p-8 text-center shadow-sm md:p-14"><p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c52]">Store Checkout</p><h1 className="mt-4 text-4xl font-black md:text-5xl">{title}</h1><p className="mx-auto mt-5 max-w-2xl leading-8 text-[#76685d]">{description}</p><Link href={`${prefix}/store`} className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[#6f4e37] px-7 py-3.5 font-black text-white">{ko ? "스토어로 돌아가기" : "Back to Store"}</Link></section></main>;
}
