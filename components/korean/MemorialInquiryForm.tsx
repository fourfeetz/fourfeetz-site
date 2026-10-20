"use client";

import { useState, type FormEvent } from "react";

const inquiryEmail = "fourfeetzstudio@gmail.com";
const fieldClass = "rounded-2xl border border-[#d8c3ad] bg-[#fffdf8] px-4 py-3.5 outline-none transition focus:border-[#8b6548] focus:ring-2 focus:ring-[#a17859]/25";

type FieldName = "guardianName" | "contact" | "petName" | "package" | "privacy";
type FormErrors = Partial<Record<FieldName, string>>;

function value(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

export function MemorialInquiryForm() {
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
      guardianName: value(formData, "guardianName"),
      contact: value(formData, "contact"),
      petName: value(formData, "petName"),
      breed: value(formData, "breed"),
      petCount: value(formData, "petCount"),
      package: value(formData, "package"),
      mood: value(formData, "mood"),
      scenes: value(formData, "scenes"),
      finalMessage: value(formData, "finalMessage"),
      notes: value(formData, "notes"),
      privacy: formData.get("privacy") === "yes",
    };
    const nextErrors: FormErrors = {};
    if (!values.guardianName) nextErrors.guardianName = "보호자 이름을 입력해 주세요.";
    if (!values.contact) nextErrors.contact = "연락처를 입력해 주세요.";
    if (!values.petName) nextErrors.petName = "반려동물 이름을 입력해 주세요.";
    if (!values.package) nextErrors.package = "희망 패키지를 선택해 주세요.";
    if (!values.privacy) nextErrors.privacy = "개인정보 처리방침을 확인해 주세요.";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      const firstInvalid = form.elements.namedItem(Object.keys(nextErrors)[0]);
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      return;
    }
    setErrors({});
    const body = [
      `보호자 이름: ${values.guardianName}`,
      `연락처: ${values.contact}`,
      `반려동물 이름: ${values.petName}`,
      `견종: ${values.breed || "미입력"}`,
      `영상에 등장할 반려동물 수: ${values.petCount || "상담 후 결정"}`,
      `희망 패키지: ${values.package}`,
      `원하는 영상 분위기: ${values.mood || "미입력"}`,
      "",
      "꼭 넣고 싶은 장면:",
      values.scenes || "미입력",
      "",
      "마지막에 전하고 싶은 메시지:",
      values.finalMessage || "미입력",
      "",
      "참고사항:",
      values.notes || "미입력",
    ].join("\n");
    window.location.href = `mailto:${inquiryEmail}?subject=${encodeURIComponent(`[FourFeetz 추모영상 제작 상담] ${values.petName}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5 rounded-[30px] border border-[#ece3da] bg-[#fdfbf8] p-6 shadow-[0_8px_24px_rgba(80,57,37,.035)] md:grid-cols-2 md:p-9">
      <Field label="보호자 이름" name="guardianName" required error={errors.guardianName} onChange={() => clearError("guardianName")} />
      <Field label="연락처" name="contact" type="tel" required error={errors.contact} onChange={() => clearError("contact")} />
      <Field label="반려동물 이름" name="petName" required error={errors.petName} onChange={() => clearError("petName")} />
      <Field label="견종" name="breed" />
      <Field label="영상에 등장할 반려동물 수" name="petCount" placeholder="예: 1마리" />
      <label className="grid gap-2 text-sm font-bold text-[#4e4944]">희망 패키지
        <select name="package" defaultValue="" required aria-invalid={Boolean(errors.package)} aria-describedby={errors.package ? "package-error" : undefined} onChange={() => clearError("package")} className={fieldClass}>
          <option value="" disabled>선택해 주세요</option><option>STANDARD</option><option>DELUXE</option><option>PREMIUM</option><option>상담 후 결정</option>
        </select>
        {errors.package ? <span id="package-error" role="alert" className="text-sm font-semibold text-[#a13f2f]">{errors.package}</span> : null}
      </label>
      <Field label="원하는 영상 분위기" name="mood" placeholder="예: 따뜻하고 편안한 분위기" />
      <Field label="마지막에 전하고 싶은 메시지" name="finalMessage" placeholder="예: 사랑해, 항상 기억할게" />
      <TextField label="꼭 넣고 싶은 장면" name="scenes" placeholder="예: 함께 산책하던 모습, 좋아하던 장난감" />
      <TextField label="참고사항" name="notes" placeholder="사진 수, 일정 등 전달할 내용을 적어 주세요." />
      <div className="md:col-span-2">
        <label className="flex items-start gap-3 text-sm leading-6 text-[#706963]">
          <input type="checkbox" name="privacy" value="yes" aria-invalid={Boolean(errors.privacy)} onChange={() => clearError("privacy")} className="mt-1 size-4 accent-[#8b6548]" />
          <span><a href="/ko/privacy" target="_blank" className="font-bold text-[#765237] underline underline-offset-4">개인정보 처리방침</a>을 확인했으며, 입력한 정보를 상담 목적으로 이메일 작성창에 옮기는 데 동의합니다.</span>
        </label>
        {errors.privacy ? <p role="alert" className="mt-2 text-sm font-semibold text-[#a13f2f]">{errors.privacy}</p> : null}
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#8b6548] px-7 py-4 font-bold text-white transition hover:bg-[#765237] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17859] focus-visible:ring-offset-2">추모영상 제작 상담하기</button>
        <p className="mt-3 text-sm leading-6 text-[#8a8179]">상담 신청을 누르면 이메일 작성창이 열립니다. 사진은 상담 안내에 따라 별도로 보내주세요.</p>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, required, error, onChange }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; error?: string; onChange?: () => void }) {
  const errorId = `${name}-error`;
  return <label className="grid gap-2 text-sm font-bold text-[#4e4944]">{label}{required ? <span className="text-[#a17859]"> *</span> : null}<input type={type} name={name} placeholder={placeholder} required={required} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} onChange={onChange} className={fieldClass} />{error ? <span id={errorId} role="alert" className="text-sm font-semibold text-[#a13f2f]">{error}</span> : null}</label>;
}

function TextField({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return <label className="grid gap-2 text-sm font-bold text-[#4e4944]">{label}<textarea name={name} rows={4} placeholder={placeholder} className={fieldClass} /></label>;
}
