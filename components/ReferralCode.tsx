"use client";

import { useEffect, useRef, useState } from "react";

export default function ReferralCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a67c52]">Referral code</p>
      <div className="mt-2 flex items-center gap-2 rounded-2xl border border-[#dfcfbd] bg-[#fffaf4] p-2 pl-4">
        <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap text-sm font-bold text-[#2b2119]">{code}</code>
        <button type="button" onClick={copyCode} aria-label={`Copy referral code ${code}`} className="shrink-0 rounded-xl bg-[#6f4e37] px-4 py-2 text-sm font-black text-white transition hover:bg-[#573b29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
