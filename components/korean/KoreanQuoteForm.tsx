"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const inquiryEmail = "fourfeetzstudio@gmail.com";

const projectTypes = [
  "SNS 쇼츠",
  "캐릭터 애니메이션",
  "반려동물 영상",
  "반려동물 디지털 동화·이미지",
  "생일·입양 기념 작품",
  "추억·추모 작품",
  "브랜드 또는 제품 영상",
  "힐링 영상",
  "기타",
];

const budgetOptions = [
  "10만원 미만",
  "10만~30만원",
  "30만~70만원",
  "70만원 이상",
  "아직 정하지 않음",
];

type FieldName = "name" | "email" | "projectType" | "message" | "privacy";
type FormErrors = Partial<Record<FieldName, string>>;

function readValue(formData: FormData, field: string) {
  return String(formData.get(field) ?? "").trim();
}

export default function KoreanQuoteForm({ buttonClassName }: { buttonClassName: string }) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">("idle");

  function clearError(field: FieldName) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: readValue(formData, "name"),
      email: readValue(formData, "email"),
      company: readValue(formData, "company"),
      projectType: readValue(formData, "projectType"),
      length: readValue(formData, "length"),
      budget: readValue(formData, "budget"),
      message: readValue(formData, "message"),
      privacy: formData.get("privacy") === "yes",
    };
    const nextErrors: FormErrors = {};

    if (!values.name) nextErrors.name = "이름을 입력해 주세요.";
    if (!values.email) {
      nextErrors.email = "이메일을 입력해 주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "올바른 이메일 주소를 입력해 주세요.";
    }
    if (!values.projectType) nextErrors.projectType = "프로젝트 종류를 선택해 주세요.";
    if (!values.message) nextErrors.message = "프로젝트 내용을 입력해 주세요.";
    if (!values.privacy) nextErrors.privacy = "개인정보 처리방침을 확인하고, 문의 내용을 이메일 작성창에 옮기는 데 동의해 주세요.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalidField = Object.keys(nextErrors)[0];
      const firstInvalidControl = form.elements.namedItem(firstInvalidField);
      if (firstInvalidControl instanceof HTMLElement) firstInvalidControl.focus();
      return;
    }

    setErrors({});
    const subject = `[FourFeetz 견적 문의] ${values.name} - ${values.projectType}`;
    const body = [
      `이름: ${values.name}`,
      `이메일: ${values.email}`,
      `회사명 또는 채널명: ${values.company || "미입력"}`,
      `프로젝트 종류: ${values.projectType}`,
      `원하는 영상 길이 또는 작품 형태: ${values.length || "상담 후 결정"}`,
      `예상 예산: ${values.budget || "미입력"}`,
      "",
      "프로젝트 내용:",
      values.message,
    ].join("\n");

    window.location.href = `mailto:${inquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function copyEmailAddress() {
    try {
      await navigator.clipboard.writeText(inquiryEmail);
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5 rounded-[36px] border border-[#eadfce] bg-white p-6 shadow-xl shadow-[#6f4e37]/10 md:grid-cols-2 md:p-9">
      <label className="grid gap-2 text-sm font-black text-[#2b2119]">
        이름
        <input
          type="text"
          name="name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={() => clearError("name")}
          className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#a67c52]/25"
        />
        {errors.name ? <span id="name-error" role="alert" className="text-sm font-semibold text-[#a13f2f]">{errors.name}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-black text-[#2b2119]">
        이메일
        <input
          type="email"
          name="email"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          onChange={() => clearError("email")}
          className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#a67c52]/25"
        />
        {errors.email ? <span id="email-error" role="alert" className="text-sm font-semibold text-[#a13f2f]">{errors.email}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-black text-[#2b2119]">
        회사명 또는 채널명
        <input
          type="text"
          name="company"
          className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#a67c52]/25"
        />
      </label>
      <label className="grid gap-2 text-sm font-black text-[#2b2119]">
        프로젝트 종류
        <select
          name="projectType"
          defaultValue=""
          required
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? "project-type-error" : undefined}
          onChange={() => clearError("projectType")}
          className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5"
        >
          <option value="" disabled>선택해 주세요</option>
          {projectTypes.map((item) => <option key={item}>{item}</option>)}
        </select>
        {errors.projectType ? <span id="project-type-error" role="alert" className="text-sm font-semibold text-[#a13f2f]">{errors.projectType}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-black text-[#2b2119]">
        원하는 영상 길이 또는 작품 형태 <span className="font-medium text-[#76685d]">(선택)</span>
        <input
          type="text"
          name="length"
          placeholder="예: 30초 영상, 이미지 작품, 상담 후 결정"
          className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5"
        />
      </label>
      <label className="grid gap-2 text-sm font-black text-[#2b2119]">
        예상 예산 <span className="font-medium text-[#76685d]">(선택)</span>
        <select
          name="budget"
          defaultValue=""
          className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5"
        >
          <option value="">선택 안 함</option>
          {budgetOptions.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-black text-[#2b2119] md:col-span-2">
        프로젝트 내용
        <textarea
          name="message"
          rows={6}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={() => clearError("message")}
          className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5"
        />
        {errors.message ? <span id="message-error" role="alert" className="text-sm font-semibold text-[#a13f2f]">{errors.message}</span> : null}
      </label>
      <div className="md:col-span-2">
      <label htmlFor="privacy-consent" className="flex items-start gap-3 text-sm leading-6 text-[#76685d]">
        <input id="privacy-consent" type="checkbox" name="privacy" value="yes" required onChange={() => clearError("privacy")} aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "privacy-error" : undefined} className="mt-1 size-5 shrink-0 accent-[#6f4e37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2" />
        <span>입력한 이름, 이메일과 문의 내용을 이메일 작성창에 옮기는 데 동의합니다. 실제 발송은 사용하는 이메일 앱에서 직접 확인해야 합니다. <Link href="/ko/privacy" className="font-bold text-[#6f4e37] underline underline-offset-4">개인정보 처리방침</Link></span>
      </label>
      {errors.privacy ? <p id="privacy-error" role="alert" className="mt-2 text-sm font-semibold text-[#a13f2f]">{errors.privacy}</p> : null}
      </div>
      <div className="md:col-span-2">
        <button type="submit" className={buttonClassName}>무료 상담받기</button>
        <p className="mt-3 text-sm leading-6 text-[#9a8775]">
          상담 버튼을 누르면 입력한 내용을 포함한 이메일 작성창이 열립니다. 최종 발송은 이메일 앱에서 직접 확인해 주세요. 직접 문의는{" "}
          <a href={`mailto:${inquiryEmail}`} className="font-bold text-[#6f4e37] underline underline-offset-4">
            {inquiryEmail}
          </a>
          으로 보내주세요.
        </p>
        <button type="button" onClick={copyEmailAddress} className="mt-3 rounded-full border border-[#d8c3ad] bg-[#fffdf8] px-5 py-2.5 text-sm font-black text-[#6f4e37] transition hover:border-[#6f4e37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2">이메일 주소 복사</button>
        <p aria-live="polite" className="mt-2 min-h-6 text-sm font-semibold text-[#6f4e37]">
          {copyStatus === "success" ? "이메일 주소를 복사했습니다. 이메일 앱에 붙여넣어 주세요." : copyStatus === "error" ? `복사하지 못했습니다. ${inquiryEmail}을 직접 복사해 주세요.` : ""}
        </p>
      </div>
    </form>
  );
}
