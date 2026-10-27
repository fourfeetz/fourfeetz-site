"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { StoreLanguage } from "@/lib/store";
import { STORE_REFUND_POLICY_PATH } from "@/lib/store/refund-policy";

type VerificationState = "verifying" | "paid" | "failed";
type VerifiedPayment = Readonly<{ orderNumber: string; productName: string | null; amount: number; currency: "KRW"; downloadReady: boolean; downloadUrl: string | null; downloadExpiresAt: string | null }>;

export default function CheckoutVerification({ language, paymentKey, orderId, amount }: { language: StoreLanguage; paymentKey: string | null; orderId: string | null; amount: number | null }) {
  const ko = language === "ko";
  const prefix = ko ? "/ko" : "";
  const policyHref = STORE_REFUND_POLICY_PATH[language];
  const [state, setState] = useState<VerificationState>(paymentKey && orderId && amount ? "verifying" : "failed");
  const [payment, setPayment] = useState<VerifiedPayment | null>(null);

  useEffect(() => {
    if (!paymentKey || !orderId || !amount) return;
    const controller = new AbortController();
    void fetch("/api/store/payments/toss/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentKey, orderId, amount, locale: language }),
      signal: controller.signal,
    }).then(async (response) => {
      if (!response.ok) { setState("failed"); return; }
      setPayment(await response.json() as VerifiedPayment);
      setState("paid");
    }).catch((error: unknown) => {
      if ((error as { name?: string }).name !== "AbortError") setState("failed");
    });
    return () => controller.abort();
  }, [amount, language, orderId, paymentKey]);

  const content = state === "verifying"
    ? { title: ko ? "결제 승인 확인 중" : "Verifying payment", body: ko ? "창을 닫지 마세요. 토스페이먼츠 승인 결과와 저장된 주문을 확인하고 있습니다." : "Please keep this page open while the provider result and stored order are verified." }
    : state === "paid"
      ? { title: ko ? "Sandbox 결제가 확인되었습니다" : "Sandbox payment verified", body: payment?.downloadReady ? (ko ? "구매 권한이 확인되었습니다. 아래 버튼에서 준비된 PDF를 다운로드할 수 있습니다." : "Your purchase entitlement was verified. Download the prepared PDF below.") : (ko ? "테스트 결제와 주문 기록이 확인되었습니다. PDF 파일 또는 비공개 저장소가 준비되면 다운로드 버튼이 활성화됩니다." : "The test payment and order record were verified. The download button will activate when the PDF and private storage are ready.") }
      : { title: ko ? "결제를 확인하지 못했습니다" : "Payment could not be verified", body: ko ? "주문은 결제 완료로 처리되지 않았습니다. 잠시 후 성공 URL을 다시 열거나 스토어 문의를 이용해 주세요." : "The order was not marked paid. Retry this success URL shortly or contact store support." };

  const expiry = payment?.downloadExpiresAt ? new Intl.DateTimeFormat(ko ? "ko-KR" : "en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date(payment.downloadExpiresAt)) : null;

  return <main className="bg-[#fbf7f0] px-6 py-24 text-[#2b2119]"><section className="mx-auto max-w-3xl rounded-[36px] border border-[#eadfce] bg-white p-8 text-center shadow-sm md:p-14" aria-live="polite"><p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c52]">Store Checkout</p><h1 className="mt-4 text-4xl font-black md:text-5xl">{content.title}</h1><p className="mx-auto mt-5 max-w-2xl leading-8 text-[#76685d]">{content.body}</p>{state === "paid" && payment ? <div className="mx-auto mt-7 max-w-xl rounded-2xl bg-[#fbf7f0] p-5 text-left"><p className="font-black">{payment.productName ?? (ko ? "구매 상품" : "Purchased product")}</p><p className="mt-1 text-[#76685d]">{new Intl.NumberFormat(ko ? "ko-KR" : "en-US", { style: "currency", currency: payment.currency, maximumFractionDigits: 0 }).format(payment.amount)}</p><dl className="mt-4 grid gap-2 text-sm text-[#76685d]"><div><dt className="font-bold text-[#2b2119]">{ko ? "주문번호" : "Order number"}</dt><dd className="break-all">{payment.orderNumber}</dd></div><div><dt className="font-bold text-[#2b2119]">{ko ? "다운로드 가능 기간" : "Download access"}</dt><dd>{expiry ? (ko ? `${expiry}까지` : `Until ${expiry}`) : (ko ? "다운로드 준비 중" : "Download pending")}</dd></div></dl></div> : null}{payment?.downloadReady && payment.downloadUrl ? <div className="mx-auto mt-7 max-w-xl rounded-2xl border border-[#e0c8aa] bg-[#fffaf1] p-5 text-left text-sm leading-6 text-[#5f5147]"><p>{ko ? "본 상품은 디지털 콘텐츠입니다. 다운로드를 시작하면 관련 법령에서 정한 요건에 따라 단순 변심 청약철회가 제한될 수 있습니다." : "This product is digital content. Once delivery begins, cancellation for change of mind may be restricted where permitted by applicable law."}</p><Link href={policyHref} className="mt-2 inline-flex font-black text-[#6f4e37] underline underline-offset-4">{ko ? "환불정책 확인" : "Review refund policy"}</Link></div> : null}<div className="mt-8 flex flex-wrap justify-center gap-3">{payment?.downloadReady && payment.downloadUrl ? <a href={payment.downloadUrl} className="inline-flex min-h-12 items-center rounded-full bg-[#6f4e37] px-7 py-3.5 font-black text-white">{ko ? "PDF 다운로드" : "Download PDF"}</a> : null}<Link href={`${prefix}/store`} className="inline-flex min-h-12 items-center rounded-full border border-[#6f4e37]/30 bg-white px-7 py-3.5 font-black text-[#6f4e37]">{ko ? "스토어로 돌아가기" : "Back to Store"}</Link></div>{state === "paid" ? <p className="mt-5 text-sm text-[#8f8176]">{ko ? "다운로드가 실패하면 이 결제 완료 페이지를 다시 열어 권한을 재확인하거나 스토어 지원에 문의해 주세요. 서버는 파일 전송 개시 여부만 기록하며 브라우저의 저장 완료나 열람 여부는 확인하지 않습니다." : "If the download fails, reopen this payment-complete page to verify access again or contact store support. The server records only whether file transfer began; it cannot confirm that your browser saved or opened the file."}</p> : null}</section></main>;
}
