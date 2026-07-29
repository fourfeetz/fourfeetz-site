import Link from "next/link";
import { practicalResources } from "@/lib/practicalResources";

export default function PracticalResourceCards({ language }: { language: "en" | "ko" }) {
  const isKorean = language === "ko";

  return (
    <section className="border-y border-[#eadfce] bg-[#fffdf8] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[#a67c52]">
          {isKorean ? "실용 워크시트" : "Practical Worksheets"}
        </p>
        <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">
          {isKorean ? "제작 현장에서 바로 쓰는 자료" : "Tools You Can Use in Production"}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#76685d]">
          {isKorean
            ? "기획, 생성, 검토, 편집과 업로드 단계에서 직접 작성하고 체크할 수 있는 인쇄용 템플릿입니다."
            : "Printable templates you can fill in and check during planning, generation, review, editing, and publishing."}
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {practicalResources.map((resource) => {
            const copy = resource[language];
            const href = `${isKorean ? "/ko" : ""}/resources/${resource.slug}`;
            return (
              <article key={resource.slug} className="flex h-full flex-col rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
                <div className="aspect-[16/10] rounded-2xl border border-[#dfcfbd] bg-[#fffdf8] p-5" aria-hidden="true">
                  <span className="block h-2 w-2/5 rounded-full bg-[#a67c52]" />
                  <span className="mt-4 block h-3 w-4/5 rounded-full bg-[#dfcfbd]" />
                  <span className="mt-2 block h-2 w-full rounded-full bg-[#eadfce]" />
                  <span className="mt-2 block h-2 w-3/4 rounded-full bg-[#eadfce]" />
                  <div className="mt-5 grid gap-2">
                    {[0, 1, 2].map((line) => (
                      <span key={line} className="flex items-center gap-2">
                        <span className="size-4 rounded border border-[#a67c52]" />
                        <span className="h-2 flex-1 rounded-full bg-[#eadfce]" />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <p className="text-sm font-black text-[#a67c52]">{copy.category}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-[#2b2119]">{copy.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-[#76685d]">{copy.description}</p>
                  <Link href={href} className="mt-6 inline-flex w-fit text-sm font-black text-[#6f4e37] transition hover:text-[#2b2119] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
                    {isKorean ? "자료 열기 →" : "Open Resource →"}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
