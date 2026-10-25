import Link from "next/link";
import type { StoreLanguage } from "@/lib/store";

export default function CheckoutResultPage({ language, result }: { language: StoreLanguage; result: "success" | "fail" | "cancel" }) {
  const ko = language === "ko"; const prefix = ko ? "/ko" : "";
  const success = result === "success";
  const canceled = result === "cancel";
  const title = success ? (ko ? "결제 인증 결과 확인 중" : "Verifying payment") : canceled ? (ko ? "결제가 취소되었습니다" : "Payment was canceled") : (ko ? "결제가 완료되지 않았습니다" : "Payment was not completed");
  const description = success ? (ko ? "이 화면만으로 결제 완료 처리되지 않습니다. 서버가 주문번호와 금액을 확인하고 결제 승인 API 결과를 저장해야 결제가 완료됩니다." : "This page never marks an order as paid. Payment completes only after the server verifies the order and amount, captures the payment, and stores the result.") : canceled ? (ko ? "결제창에서 취소했으며 주문은 결제 완료로 처리되지 않았습니다." : "Checkout was canceled in the payment window and the order was not marked paid.") : (ko ? "결제 인증에 실패했으며 주문은 결제 완료로 처리되지 않았습니다." : "Payment authentication failed and the order was not marked paid.");
  return <main className="bg-[#fbf7f0] px-6 py-24 text-[#2b2119]"><section className="mx-auto max-w-3xl rounded-[36px] border border-[#eadfce] bg-white p-8 text-center shadow-sm md:p-14"><p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c52]">Store Checkout</p><h1 className="mt-4 text-4xl font-black md:text-5xl">{title}</h1><p className="mx-auto mt-5 max-w-2xl leading-8 text-[#76685d]">{description}</p><Link href={`${prefix}/store`} className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[#6f4e37] px-7 py-3.5 font-black text-white">{ko ? "스토어로 돌아가기" : "Back to Store"}</Link></section></main>;
}
