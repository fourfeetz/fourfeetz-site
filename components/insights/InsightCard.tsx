import Image from "next/image";
import Link from "next/link";
import { insightGroups, type InsightLanguage } from "@/lib/insightGroups";
import type { InsightArticle } from "@/lib/insights";

export default function InsightCard({
  article,
  language,
}: {
  article: InsightArticle;
  language: InsightLanguage;
}) {
  const href = language === "ko" ? `/ko/insights/${article.slug}` : article.href;
  const group = insightGroups[article.group][language];

  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37]"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#f6ebdd]">
        <Image
          src={article.image}
          alt={`${article.title} ${language === "ko" ? "대표 이미지" : "thumbnail"}`}
          fill
          sizes="(min-width:1280px)30vw,(min-width:768px)45vw,100vw"
          className={`${article.imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-200 group-hover:scale-[1.02]`}
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#6f4e37] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-white">
            {group.badge}
          </span>
          <span className="text-xs font-black uppercase tracking-[0.12em] text-[#a67c52]">{article.category}</span>
        </div>
        <h2 className="mt-4 text-2xl font-black leading-tight text-[#2b2119]">{article.title}</h2>
        <p className="mt-3 flex-1 leading-7 text-[#76685d]">{article.description}</p>
        <div className="mt-6 flex items-center justify-between gap-4 text-sm font-bold">
          <span className="text-[#9a8775]">{article.readTime}</span>
          <span className="text-[#6f4e37]">{language === "ko" ? "글 보기 →" : "Read Article →"}</span>
        </div>
      </div>
    </Link>
  );
}
