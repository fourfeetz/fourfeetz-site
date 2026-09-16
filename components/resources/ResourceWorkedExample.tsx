import Link from "next/link";
import { resourceExamples } from "@/lib/resourceExamples";

export default function ResourceWorkedExample({ slug, language = "en" }: { slug: string; language?: "en" | "ko" }) {
  const example = resourceExamples[slug];
  if (!example) return null;
  const copy = example[language];
  const ko = language === "ko";
  const prefix = ko ? "/ko" : "";
  return <section className="border-y border-[#eadfce] bg-[#f7efe5] px-6 py-16 md:py-20">
    <div className="mx-auto max-w-5xl">
      <p className="text-sm font-black tracking-wide text-[#6f4e37]">{ko ? "공개 작품으로 배우는 작성 예시" : "Worked example from published work"}</p>
      <h2 className="mt-4 text-3xl font-black leading-tight text-[#2b2119] md:text-4xl">{copy.title}</h2>
      <p className="mt-6 text-lg leading-8 text-[#66584d]">{copy.context}</p>
      <p className="mt-4 text-sm leading-7 text-[#76685d]">{ko ? "아래 내용은 공개 제작 기록을 이 리소스에 맞게 정리한 교육용 예시입니다. 당시 사용한 비공개 프롬프트나 원본 작업 로그가 아닙니다." : "This teaching example applies the linked public record to this resource. It is not the original private prompt or production log."}</p>
      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        {copy.rows.map(([label, value]) => <div key={label} className="rounded-2xl border border-[#dfcfbd] bg-white p-6">
          <dt className="font-black text-[#2b2119]">{label}</dt>
          <dd className="mt-3 leading-8 text-[#66584d]">{value}</dd>
        </div>)}
      </dl>
      <h3 className="mt-8 text-xl font-black text-[#2b2119]">{ko ? "이 예시에서 내릴 판단" : "The decision this example supports"}</h3>
      <p className="mt-4 leading-8 text-[#66584d]">{copy.decision}</p>
      <div className="mt-8 flex flex-wrap gap-5 font-bold text-[#6f4e37]">
        <Link className="underline underline-offset-4" href={`${prefix}/insights/${example.sourceSlug}`}>{ko ? "근거가 된 제작 기록과 작품 확인" : "Read the source record and view the work"} →</Link>
        <Link className="underline underline-offset-4" href={`${prefix}/resources/${example.worksheetSlug}`}>{ko ? "내 프로젝트 작업지 작성하기" : "Fill in a worksheet for your project"} →</Link>
      </div>
    </div>
  </section>;
}
