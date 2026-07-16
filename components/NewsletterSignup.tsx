"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

type NewsletterStatus = "idle" | "success";

// Replace this UI-only adapter with a Resend or Mailchimp request when persistence is enabled.
async function previewSubscribe(email: string) {
  void email;
  return Promise.resolve();
}

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<NewsletterStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await previewSubscribe(email);
    setStatus("success");
  }

  return (
    <section aria-labelledby="newsletter-title" className="border-t border-[#eadfce] bg-[#f7efe5] px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[36px] border border-[#ddcbb7] bg-[#fffdf8] p-7 shadow-sm md:grid-cols-[1fr_0.9fr] md:items-center md:p-10 lg:p-12">
        <div>
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#6f4e37] text-white shadow-lg shadow-[#6f4e37]/15">
            <Mail size={22} aria-hidden="true" />
          </div>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Studio Newsletter</p>
          <h2 id="newsletter-title" className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-5xl">Join FourFeetz</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#76685d]">Get updates about HARU, AI filmmaking, workflows, and new articles.</p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row" aria-label="Join the FourFeetz newsletter">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input id="newsletter-email" name="email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); setStatus("idle"); }} placeholder="Email address" autoComplete="email" required className="min-w-0 flex-1 rounded-full border border-[#d9c7b4] bg-white px-6 py-4 font-semibold text-[#2b2119] outline-none transition placeholder:text-[#9a8775] focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/25" />
            <button type="submit" className="shrink-0 cursor-pointer rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#573b29] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2">Subscribe</button>
          </form>
          <p className="mt-3 min-h-5 text-sm text-[#8a7767]" role="status" aria-live="polite">
            {status === "success" ? "Thanks for joining. Email delivery will be enabled soon." : "Newsletter signup preview — no email is stored yet."}
          </p>
        </div>
      </div>
    </section>
  );
}
