"use client";

import { useState } from "react";
import Link from "next/link";
import { STORE_REFUND_POLICY_VERSION } from "@/lib/store/refund-policy";

export default function PayPalCheckout({ productSlug, sandbox }: { productSlug: string; sandbox: boolean }) {
  const [accepted, setAccepted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  async function startCheckout() {
    setPending(true);
    setError(false);
    try {
      const response = await fetch("/api/store/payments/paypal/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug, refundPolicyAccepted: accepted, refundPolicyVersion: STORE_REFUND_POLICY_VERSION }),
      });
      const result = await response.json();
      if (!response.ok || typeof result.approvalUrl !== "string") throw new Error();
      window.location.assign(result.approvalUrl);
    } catch {
      setError(true);
      setPending(false);
    }
  }

  return <div className="w-full space-y-3">
    <div className="flex items-start gap-2">
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={accepted} onChange={event => setAccepted(event.target.checked)} />
        I agree to the refund policy.
      </label>
      <Link href="/refund-policy" target="_blank" className="underline">Read policy</Link>
    </div>
    <button type="button" disabled={!accepted || pending} onClick={startCheckout} className="rounded-full bg-[#6f4e37] px-7 py-3.5 font-black text-white disabled:opacity-50">
      {pending ? "Opening PayPal…" : sandbox ? "PayPal Sandbox checkout" : "Pay with PayPal"}
    </button>
    {error && <p role="alert">PayPal checkout could not start. Please try again.</p>}
  </div>;
}
