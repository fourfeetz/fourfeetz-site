"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_STORAGE_KEY = "fourfeetz-advertising-consent";

type Consent = "accepted" | "declined";

const copy = {
  en: {
    title: "Advertising choices",
    description: "With your permission, Infolinks may use cookies and similar technologies to provide and measure advertising. No Infolinks script is loaded before you accept.",
    accept: "Allow advertising",
    decline: "Decline",
    manage: "Ad privacy",
    privacy: "Privacy Policy",
  },
  ko: {
    title: "광고 개인정보 선택",
    description: "동의하면 Infolinks가 광고 제공과 측정을 위해 쿠키 및 유사 기술을 사용할 수 있습니다. 동의 전에는 Infolinks 스크립트를 불러오지 않습니다.",
    accept: "광고 허용",
    decline: "거부",
    manage: "광고 개인정보",
    privacy: "개인정보 처리방침",
  },
} as const;

export default function InfolinksConsent({ language, pid, wsid }: Readonly<{ language: "en" | "ko"; pid: number; wsid: number }>) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const labels = copy[language];
  const privacyHref = language === "ko" ? "/ko/privacy" : "/privacy";

  useEffect(() => {
    const restoreConsent = window.setTimeout(() => {
      const savedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
      if (savedConsent === "accepted" || savedConsent === "declined") {
        setConsent(savedConsent);
        return;
      }
      setIsOpen(true);
    }, 0);

    return () => window.clearTimeout(restoreConsent);
  }, []);

  function saveConsent(nextConsent: Consent) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, nextConsent);
    if (consent === "accepted" && nextConsent === "declined") {
      window.location.reload();
      return;
    }
    setConsent(nextConsent);
    setIsOpen(false);
  }

  return (
    <>
      {consent === "accepted" ? (
        <>
          <Script id="fourfeetz-infolinks-config" strategy="afterInteractive">
            {`window.infolinks_pid=${pid};window.infolinks_wsid=${wsid};`}
          </Script>
          <Script id="fourfeetz-infolinks-main" src="https://resources.infolinks.com/js/infolinks_main.js" strategy="lazyOnload" />
        </>
      ) : null}

      {isOpen ? (
        <section aria-label={labels.title} className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-3xl border border-[#decdb9] bg-[#fffaf3] p-5 shadow-2xl md:p-6">
          <h2 className="text-lg font-black text-[#2b2119]">{labels.title}</h2>
          <p className="mt-2 text-sm leading-6 text-[#665a50]">{labels.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => saveConsent("accepted")} className="rounded-full bg-[#6f4e37] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#513728] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2">
              {labels.accept}
            </button>
            <button type="button" onClick={() => saveConsent("declined")} className="rounded-full border border-[#a67c52] px-5 py-2.5 text-sm font-bold text-[#6f4e37] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2">
              {labels.decline}
            </button>
            <a href={privacyHref} className="text-sm font-bold text-[#6f4e37] underline underline-offset-4">{labels.privacy}</a>
          </div>
        </section>
      ) : consent ? (
        <button type="button" onClick={() => setIsOpen(true)} className="fixed bottom-3 left-3 z-[99] rounded-full border border-[#decdb9] bg-[#fffaf3] px-3 py-2 text-xs font-bold text-[#6f4e37] shadow-md hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2">
          {labels.manage}
        </button>
      ) : null}
    </>
  );
}
