"use client";

import { FormEvent, useState } from "react";
import type { StoreLanguage } from "@/lib/store";

export default function StoreSupportForm({ language }: { language: StoreLanguage }) {
  const ko = language === "ko";
  const [error, setError] = useState("");
  const labels = ko ? { type: "문의 유형", order: "구매번호 (있는 경우)", email: "답변받을 이메일", message: "문의 내용", submit: "이메일 작성하기", required: "이메일과 문의 내용을 입력해 주세요.", note: "제출하면 이메일 앱이 열립니다. 개인정보나 결제수단 전체 번호는 입력하지 마세요." } : { type: "Inquiry type", order: "Order number (if available)", email: "Reply email", message: "Message", submit: "Compose email", required: "Please enter your email and message.", note: "Submitting opens your email app. Do not include sensitive personal data or full payment-card numbers." };
  const types = ko ? ["결제 문제", "파일 다운로드 문제", "사용 방법 문의", "환불 요청", "기타 문의"] : ["Payment issue", "File download issue", "How-to question", "Refund request", "Other"];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!email || !message) { setError(labels.required); return; }
    setError("");
    const type = String(data.get("type") ?? types[0]);
    const order = String(data.get("order") ?? "").trim();
    const subject = `[FourFeetz Store] ${type}${order ? ` · ${order}` : ""}`;
    const body = `${labels.email}: ${email}\n${labels.order}: ${order || "-"}\n\n${message}`;
    window.location.href = `mailto:fourfeetzstudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const input = "mt-2 min-h-12 w-full rounded-xl border border-[#d8c3ad] bg-white px-4 py-3 text-[#2b2119] outline-none focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25";
  return <form onSubmit={submit} noValidate className="grid gap-5 rounded-[32px] border border-[#eadfce] bg-white p-6 shadow-sm md:grid-cols-2 md:p-9">
    <label className="font-bold text-[#4d4036]">{labels.type}<select name="type" className={input}>{types.map(type => <option key={type}>{type}</option>)}</select></label>
    <label className="font-bold text-[#4d4036]">{labels.order}<input name="order" autoComplete="off" className={input} /></label>
    <label className="font-bold text-[#4d4036] md:col-span-2">{labels.email}<input name="email" type="email" autoComplete="email" required className={input} /></label>
    <label className="font-bold text-[#4d4036] md:col-span-2">{labels.message}<textarea name="message" required rows={6} className={input} /></label>
    <div className="md:col-span-2"><p className="text-sm leading-6 text-[#76685d]">{labels.note}</p>{error ? <p role="alert" className="mt-2 font-bold text-red-700">{error}</p> : null}<button type="submit" className="mt-5 min-h-12 rounded-full bg-[#6f4e37] px-7 py-3.5 font-black text-white">{labels.submit}</button></div>
  </form>;
}
