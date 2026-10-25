"use client";

import { useState } from "react";
import { ANONYMOUS, loadTossPayments } from "@tosspayments/tosspayments-sdk";

type CreatedOrder = Readonly<{
  orderNumber: string;
  orderName: string;
  amount: number;
  currency: "KRW";
}>;

export default function TossSandboxCheckoutButton({ productSlug, clientKey, label, checkoutBasePath }: { productSlug: string; clientKey: string; label: string; checkoutBasePath: string }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function beginCheckout() {
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/store/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug, provider: "TOSS" }),
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

  return <div>
    <button type="button" disabled={pending} onClick={beginCheckout} className="inline-flex min-h-12 items-center rounded-full bg-[#6f4e37] px-7 py-3.5 font-black text-white disabled:cursor-wait disabled:opacity-60">
      {pending ? "Loading…" : label}
    </button>
    {error ? <p role="alert" className="mt-2 max-w-sm text-sm font-semibold text-red-700">{error}</p> : null}
  </div>;
}
