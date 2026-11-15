"use client";

import { useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";

export default function PayPalSandboxReturn({ token }: { token: string | null }) {
  const [pending, setPending] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  async function confirm() {
    setPending(true);
    setError(false);
    try {
      const response = await fetch("/api/store/payments/paypal/capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const result = await response.json();
      if (!response.ok || typeof result.downloadUrl !== "string") throw new Error();
      setDownloadUrl(result.downloadUrl);
    } catch {
      setError(true);
    } finally {
      setPending(false);
    }
  }

  return <main className="mx-auto max-w-xl space-y-5 px-6 py-16">
    <h1 className="text-3xl font-black">PayPal Sandbox checkout</h1>
    {downloadUrl ? (
      <a
        href={downloadUrl}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#6f4e37] px-7 py-3.5 font-black text-white transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2"
      >
        <Download size={18} aria-hidden="true" />
        Download your PDF
      </a>
    )
      : token ? <button type="button" disabled={pending} onClick={confirm} className="rounded-full bg-[#6f4e37] px-7 py-3.5 font-black text-white disabled:opacity-50">{pending ? "Verifying…" : "Complete test payment"}</button>
        : <p>This checkout is unavailable.</p>}
    {error && <p role="alert">The test payment or download could not be verified. Retry here before starting another order.</p>}
    <p><Link href="/store/pet-video-starter-pack" className="underline">Back to product</Link></p>
  </main>;
}
