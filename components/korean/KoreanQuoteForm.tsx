"use client";

import { useState, type FormEvent } from "react";

const inquiryEmail = "fourfeetzstudio@gmail.com";

const projectTypes = [
  "SNS 쇼츠",
  "캐릭터 애니메이션",
  "반려동물 영상",
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

type FieldName = "name" | "email" | "projectType" | "length" | "budget" | "message";
type FormErrors = Partial<Record<FieldName, string>>;

function readValue(formData: FormData, field: string) {
  return String(formData.get(field) ?? "").trim();
}

export default function KoreanQuoteForm({ buttonClassName }: { buttonClassName: string }) {
  const [errors, setErrors] = useState<FormErrors>({});

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
    };
    const nextErrors: FormErrors = {};

    if (!values.name) nextErrors.name = "이름을 입력해 주세요.";
    if (!values.email) {
      nextErrors.email = "이메일을 입력해 주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "올바른 이메일 주소를 입력해 주세요.";
    }
    if (!values.projectType) nextErrors.projectType = "프로젝트 종류를 선택해 주세요.";
    if (!values.length) nextErrors.length = "원하는 영상 길이를 입력해 주세요.";
    if (!values.budget) nextErrors.budget = "예상 예산을 선택해 주세요.";
    if (!values.message) nextErrors.message = "프로젝트 내용을 입력해 주세요.";

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
      `원하는 영상 길이: ${values.length}`,
      `예상 예산: ${values.budget}`,
      "",
      "프로젝트 내용:",
      values.message,
    ].join("\n");

    window.location.href = `mailto:${inquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
        원하는 영상 길이
        <input
          type="text"
          name="length"
          required
          placeholder="예: 30초"
          aria-invalid={Boolean(errors.length)}
          aria-describedby={errors.length ? "length-error" : undefined}
          onChange={() => clearError("length")}
          className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5"
        />
        {errors.length ? <span id="length-error" role="alert" className="text-sm font-semibold text-[#a13f2f]">{errors.length}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-black text-[#2b2119]">
        예상 예산
        <select
          name="budget"
          defaultValue=""
          required
          aria-invalid={Boolean(errors.budget)}
          aria-describedby={errors.budget ? "budget-error" : undefined}
          onChange={() => clearError("budget")}
          className="rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5"
        >
          <option value="" disabled>선택해 주세요</option>
          {budgetOptions.map((item) => <option key={item}>{item}</option>)}
        </select>
        {errors.budget ? <span id="budget-error" role="alert" className="text-sm font-semibold text-[#a13f2f]">{errors.budget}</span> : null}
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
        <button type="submit" className={buttonClassName}>견적 문의하기</button>
        <p className="mt-3 text-sm leading-6 text-[#9a8775]">
          온라인 접수 기능은 준비 중입니다. 빠른 문의는{" "}
          <a href={`mailto:${inquiryEmail}`} className="font-bold text-[#6f4e37] underline underline-offset-4">
            {inquiryEmail}
          </a>
          으로 보내주세요.
        </p>
      </div>
    </form>
  );
}
