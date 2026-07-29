import Link from "next/link";
import type { PracticalResource, PracticalResourceLanguage } from "@/lib/practicalResources";
import PrintResourceButton from "./PrintResourceButton";

const siteUrl = "https://fourfeetz.com";

export default function PracticalResourcePage({
  resource,
  language,
}: {
  resource: PracticalResource;
  language: PracticalResourceLanguage;
}) {
  const isKorean = language === "ko";
  const copy = resource[language];
  const resourcePath = `${isKorean ? "/ko" : ""}/resources/${resource.slug}`;
  const resourcesPath = isKorean ? "/ko/resources" : "/resources";
  const labels = isKorean
    ? {
        home: "홈",
        resources: "리소스",
        howTo: "사용 방법",
        worksheet: "작성 워크시트",
        checklist: "최종 체크리스트",
        tips: "활용 팁",
        related: "관련 제작 가이드",
        blank: "직접 작성해 주세요.",
      }
    : {
        home: "Home",
        resources: "Resources",
        howTo: "How to use",
        worksheet: "Fill-in worksheet",
        checklist: "Final checklist",
        tips: "Practical tips",
        related: "Related Production Guide",
        blank: "Write your notes here.",
      };
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: copy.title,
    description: copy.description,
    url: `${siteUrl}${resourcePath}`,
    inLanguage: isKorean ? "ko-KR" : "en-US",
    datePublished: resource.published,
    dateModified: resource.updated,
    isAccessibleForFree: true,
    publisher: { "@type": "Organization", name: "FourFeetz Studios", url: siteUrl },
    about: copy.fields.map((field) => field.label),
  };

  return (
    <main className="bg-[#fffdf8] print:bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <header className="mx-auto max-w-5xl px-6 pb-12 pt-16 md:pb-16 md:pt-24 print:px-0 print:pb-8 print:pt-0">
        <nav aria-label={isKorean ? "경로" : "Breadcrumb"} className="text-sm font-bold text-[#8a7768] print:hidden">
          <Link href={isKorean ? "/ko" : "/"} className="hover:text-[#6f4e37]">{labels.home}</Link>
          <span className="px-2">/</span>
          <Link href={resourcesPath} className="hover:text-[#6f4e37]">{labels.resources}</Link>
          <span className="px-2">/</span>
          <span>{copy.title}</span>
        </nav>
        <p className="mt-10 text-xs font-black uppercase tracking-[0.28em] text-[#a67c52] print:mt-0">{copy.category}</p>
        <h1 className="mt-5 text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#2b2119] md:text-7xl print:text-4xl">{copy.title}</h1>
        <p className="mt-7 max-w-4xl text-xl leading-9 text-[#665a50]">{copy.description}</p>
        <p className="mt-5 max-w-4xl leading-8 text-[#76685d]">{copy.intro}</p>
        <div className="mt-8"><PrintResourceButton language={language} /></div>
      </header>

      <div className="mx-auto max-w-5xl space-y-8 px-6 pb-24 print:max-w-none print:px-0 print:pb-0">
        <section className="rounded-[30px] border border-[#eadfce] bg-white p-7 shadow-sm md:p-9 print:break-inside-avoid print:rounded-none print:shadow-none">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{labels.howTo}</p>
          <ol className="mt-6 grid gap-4">
            {copy.instructions.map((instruction, index) => (
              <li key={instruction} className="grid grid-cols-[40px_1fr] gap-4">
                <span className="grid size-10 place-items-center rounded-full bg-[#6f4e37] text-sm font-black text-white">{index + 1}</span>
                <span className="self-center leading-7 text-[#665a50]">{instruction}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-[30px] border border-[#d8c3ad] bg-white p-7 shadow-sm md:p-9 print:rounded-none print:shadow-none">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{labels.worksheet}</p>
          <div className="mt-7 grid gap-5 md:grid-cols-2 print:grid-cols-2">
            {copy.fields.map((field) => (
              <label key={field.label} className={`block break-inside-avoid rounded-2xl border border-[#eadfce] bg-[#fffdf8] p-5 ${field.multiline ? "md:col-span-2 print:col-span-2" : ""}`}>
                <span className="font-black text-[#2b2119]">{field.label}</span>
                <span className="mt-1 block text-sm leading-6 text-[#8a7768]">{field.hint}</span>
                {field.multiline ? (
                  <textarea aria-label={field.label} placeholder={labels.blank} rows={4} className="mt-4 w-full resize-y rounded-xl border border-[#d8c3ad] bg-white px-4 py-3 text-[#2b2119] outline-none focus:ring-2 focus:ring-[#a67c52] print:resize-none" />
                ) : (
                  <input aria-label={field.label} type="text" className="mt-4 w-full border-x-0 border-b border-t-0 border-[#bba48d] bg-transparent px-1 py-2 text-[#2b2119] outline-none focus:border-[#6f4e37]" />
                )}
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[#eadfce] bg-white p-7 shadow-sm md:p-9 print:break-inside-avoid print:rounded-none print:shadow-none">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{labels.checklist}</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 print:grid-cols-2">
            {copy.checklist.map((item) => (
              <label key={item} className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#eadfce] bg-[#fffdf8] p-4 leading-7 text-[#665a50]">
                <input type="checkbox" className="mt-1 size-5 shrink-0 accent-[#6f4e37]" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-[30px] border border-[#eadfce] bg-[#f2e8dc] p-7 md:grid-cols-[1fr_0.8fr] md:p-9 print:break-inside-avoid print:rounded-none">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{labels.tips}</p>
            <ul className="mt-5 space-y-3">
              {copy.tips.map((tip) => <li key={tip} className="flex gap-3 leading-7 text-[#665a50]"><span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-[#a67c52]" />{tip}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#d8c3ad] bg-white p-6 print:hidden">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a67c52]">{labels.related}</p>
            <Link href={copy.relatedGuide.href} className="mt-3 block text-xl font-black leading-7 text-[#2b2119] hover:text-[#6f4e37]">
              {copy.relatedGuide.title} →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
