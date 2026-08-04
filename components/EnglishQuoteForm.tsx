"use client";

import { useState, type FormEvent } from "react";

const inquiryEmail = "fourfeetzstudio@gmail.com";

type FieldName = "name" | "email" | "projectType" | "message";
type FormErrors = Partial<Record<FieldName, string>>;

function value(formData: FormData, field: string) {
  return String(formData.get(field) ?? "").trim();
}

export default function EnglishQuoteForm({ buttonClassName, services }: { buttonClassName: string; services: readonly { title: string }[] }) {
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
      name: value(formData, "name"),
      email: value(formData, "email"),
      company: value(formData, "company"),
      projectType: value(formData, "projectType"),
      budget: value(formData, "budget"),
      message: value(formData, "message"),
    };
    const nextErrors: FormErrors = {};

    if (!values.name) nextErrors.name = "Please enter your name.";
    if (!values.email) nextErrors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!values.projectType) nextErrors.projectType = "Please select a project type.";
    if (!values.message) nextErrors.message = "Please tell us about your project.";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      const firstInvalid = form.elements.namedItem(Object.keys(nextErrors)[0]);
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      return;
    }

    setErrors({});
    const subject = `[FourFeetz Quote Request] ${values.name} - ${values.projectType}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.company || "Not provided"}`,
      `Project type: ${values.projectType}`,
      `Budget: ${values.budget || "Not specified"}`,
      "",
      "Project details:",
      values.message,
    ].join("\n");
    window.location.href = `mailto:${inquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5 rounded-[36px] border border-[#eadfce] bg-[#fffdf8] p-6 shadow-xl shadow-[#6f4e37]/10 md:grid-cols-2 md:p-9">
      <label className="grid gap-2 text-sm font-black text-[#2b2119]">Name
        <input type="text" name="name" autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} onChange={() => clearError("name")} className="rounded-2xl border border-[#d8c3ad] bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25" />
        {errors.name ? <span id="name-error" role="alert" className="text-sm font-semibold text-[#a13f2f]">{errors.name}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-black text-[#2b2119]">Email
        <input type="email" name="email" autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} onChange={() => clearError("email")} className="rounded-2xl border border-[#d8c3ad] bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25" />
        {errors.email ? <span id="email-error" role="alert" className="text-sm font-semibold text-[#a13f2f]">{errors.email}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-black text-[#2b2119]">Company
        <input type="text" name="company" autoComplete="organization" className="rounded-2xl border border-[#d8c3ad] bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25" />
      </label>
      <label className="grid gap-2 text-sm font-black text-[#2b2119]">Project Type
        <select name="projectType" defaultValue="" required aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "project-type-error" : undefined} onChange={() => clearError("projectType")} className="rounded-2xl border border-[#d8c3ad] bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25">
          <option value="" disabled>Select a service</option>
          {services.map((service) => <option key={service.title}>{service.title}</option>)}
        </select>
        {errors.projectType ? <span id="project-type-error" role="alert" className="text-sm font-semibold text-[#a13f2f]">{errors.projectType}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-black text-[#2b2119] md:col-span-2">Budget <span className="font-medium text-[#76685d]">(optional)</span>
        <select name="budget" defaultValue="" className="rounded-2xl border border-[#d8c3ad] bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25">
          <option value="">Not specified</option><option>$150–$299</option><option>$300–$699</option><option>$700–$1,499</option><option>$1,500+</option><option>Not sure yet</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-black text-[#2b2119] md:col-span-2">Message
        <textarea name="message" rows={6} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} onChange={() => clearError("message")} className="resize-y rounded-2xl border border-[#d8c3ad] bg-white px-4 py-3.5 font-medium outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25" />
        {errors.message ? <span id="message-error" role="alert" className="text-sm font-semibold text-[#a13f2f]">{errors.message}</span> : null}
      </label>
      <div className="flex flex-col items-start gap-3 md:col-span-2">
        <button type="submit" className={buttonClassName}>Request a Quote</button>
        <p className="text-sm leading-6 text-[#9a8775]">Requesting a quote opens your email app. You can also email <a className="font-bold text-[#6f4e37] underline underline-offset-4" href={`mailto:${inquiryEmail}`}>{inquiryEmail}</a> directly.</p>
      </div>
    </form>
  );
}
