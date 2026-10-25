"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { StoreLanguage } from "@/lib/store";

type VerificationState = "verifying" | "paid" | "failed";

export default function CheckoutVerification({ language, paymentKey, orderId, amount }: { language: StoreLanguage; paymentKey: string | null; orderId: string | null; amount: number | null }) {
  const ko = language === "ko";
  const prefix = ko ? "/ko" : "";
  const [state, setState] = useState<VerificationState>(paymentKey && orderId && amount ? "verifying" : "failed");

  useEffect(() => {
    if (!paymentKey || !orderId || !amount) return;
    const controller = new AbortController();
    void fetch("/api/store/payments/toss/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentKey, orderId, amount }),
      signal: controller.signal,
    }).then((response) => setState(response.ok ? "paid" : "failed")).catch((error: unknown) => {
      if ((error as { name?: string }).name !== "AbortError") setState("failed");
    });
    return () => controller.abort();
  }, [amount, orderId, paymentKey]);

  const content = state === "verifying"
    ? { title: ko ? "결제 승인 확인 중" : "Verifying payment", body: ko ? "창을 닫지 마세요. 토스페이먼츠 승인 결과와 저장된 주문을 확인하고 있습니다." : "Please keep this page open while the provider result and stored order are verified." }
    : state === "paid"
      ? { title: ko ? "Sandbox 결제가 확인되었습니다" : "Sandbox payment verified", body: ko ? "테스트 결제와 주문 기록이 확인되었습니다. 유료 파일 다운로드는 아직 활성화되지 않았습니다." : "The test payment and order record were verified. Paid file delivery is still disabled." }
      : { title: ko ? "결제를 확인하지 못했습니다" : "Payment could not be verified", body: ko ? "주문은 결제 완료로 처리되지 않았습니다. 잠시 후 성공 URL을 다시 열거나 스토어 문의를 이용해 주세요." : "The order was not marked paid. Retry this success URL shortly or contact store support." };

  return <main className="bg-[#fbf7f0] px-6 py-24 text-[#2b2119]"><section className="mx-auto max-w-3xl rounded-[36px] border border-[#eadfce] bg-white p-8 text-center shadow-sm md:p-14" aria-live="polite"><p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c52]">Store Checkout</p><h1 className="mt-4 text-4xl font-black md:text-5xl">{content.title}</h1><p className="mx-auto mt-5 max-w-2xl leading-8 text-[#76685d]">{content.body}</p><Link href={`${prefix}/store`} className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[#6f4e37] px-7 py-3.5 font-black text-white">{ko ? "스토어로 돌아가기" : "Back to Store"}</Link></section></main>;
}
