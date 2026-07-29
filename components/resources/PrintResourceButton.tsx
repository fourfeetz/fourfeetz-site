"use client";

export default function PrintResourceButton({ language }: { language: "en" | "ko" }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] print:hidden"
    >
      {language === "ko" ? "인쇄 또는 PDF로 저장" : "Print or Save as PDF"}
    </button>
  );
}
