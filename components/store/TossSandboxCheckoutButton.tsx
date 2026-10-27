"use client";

import { useState } from "react";
import Link from "next/link";
import { ANONYMOUS, loadTossPayments } from "@tosspayments/tosspayments-sdk";
import type { StoreLanguage } from "@/lib/store";

type CreatedOrder = Readonly<{
  orderNumber: string;
  orderName: string;
  amount: number;
  currency: "KRW";
}>;

export default function TossSandboxCheckoutButton({ productSlug, clientKey, label, checkoutBasePath, language }: { productSlug: string; clientKey: string; label: string; checkoutBasePath: string; language: StoreLanguage }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const policyHref = language === "ko" ? "/ko/refund-policy" : "/refund-policy";

  async function beginCheckout() {
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/store/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug, provider: "TOSS", locale: language }),
      });
      const payload = await response.json() as CreatedOrder | { message?: string };
      if (!response.ok || !("orderNumber" in payload)) throw new Error("message" in payload ? payload.message : "Checkout is not configured.");

      const tossPayments = await loadTossPayments(clientKey);
      const payment = tossPayments.payment({ customerKey: ANONYMOUS });
      await payment.requestPayment({
        method: "CARD",
        amount: { currency: payload.currency, value: payload.amount },
        orderId: payload.orderNumber,
        orderName: payload.orderName,
        successUrl: `${window.location.origin}${checkoutBasePath}/success`,
        failUrl: `${window.location.origin}${checkoutBasePath}/fail`,
        card: { useEscrow: false, flowMode: "DEFAULT", useCardPoint: false, useAppCardOnly: false },
      });
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Checkout could not be started.");
      setPending(false);
    }
  }

  return <div className="max-w-md">
    <label className="mb-3 flex cursor-pointer items-start gap-3 rounded-2xl border border-[#e0c8aa] bg-white p-4 text-sm leading-6 text-[#5f5147]">
      <input type="checkbox" checked={policyAccepted} onChange={(event) => setPolicyAccepted(event.target.checked)} className="mt-1 size-4 shrink-0 accent-[#6f4e37]" />
      <span>
        {language === "ko" ? "환불정책을 확인했으며 결제 완료 후 디지털 콘텐츠가 즉시 제공되는 것에 동의합니다. 관계 법령상 소비자 권리는 유지됩니다." : "I have reviewed the refund policy and request immediate digital delivery after payment. My mandatory consumer rights remain unaffected."}{" "}
        <Link href={policyHref} target="_blank" rel="noreferrer" className="font-black text-[#6f4e37] underline underline-offset-4">
          {language === "ko" ? "환불정책 보기" : "View refund policy"}
        </Link>
      </span>
    </label>
    <button type="button" disabled={pending || !policyAccepted} onClick={beginCheckout} className="inline-flex min-h-12 items-center rounded-full bg-[#6f4e37] px-7 py-3.5 font-black text-white disabled:cursor-not-allowed disabled:opacity-60">
      {pending ? "Loading…" : label}
    </button>
    {error ? <p role="alert" className="mt-2 max-w-sm text-sm font-semibold text-red-700">{error}</p> : null}
  </div>;
}
