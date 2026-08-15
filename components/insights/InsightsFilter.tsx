"use client";

import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import InsightCard from "@/components/insights/InsightCard";
import type { InsightLanguage } from "@/lib/insightGroups";
import { isAnalysisContentType } from "@/lib/insightClassification";
import type { InsightArticle } from "@/lib/insights";

const slugify = (value: string) => value.toLowerCase().replace(/\s+/g, "-");
const normalize = (value: string) => value.trim().toLowerCase();

export default function InsightsFilter({
  articles,
  language,
}: {
  articles: InsightArticle[];
  language: InsightLanguage;
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const syncFromUrl = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      setActiveFilter(params.get("group") ?? params.get("tag") ?? "all");
      setQuery(params.get("q") ?? "");
    }, 0);
    return () => window.clearTimeout(syncFromUrl);
  }, []);

  function updateUrl(nextFilter: string, nextQuery: string) {
    const params = new URLSearchParams(window.location.search);
    params.delete("tag");
    if (nextFilter === "all") params.delete("group");
    else params.set("group", nextFilter);
    if (nextQuery.trim()) params.set("q", nextQuery.trim());
    else params.delete("q");
    const search = params.toString();
    window.history.replaceState(null, "", search ? `${window.location.pathname}?${search}` : window.location.pathname);
  }

  function selectFilter(nextFilter: string) {
    setActiveFilter(nextFilter);
    updateUrl(nextFilter, query);
  }

  function changeQuery(nextQuery: string) {
    setQuery(nextQuery);
    updateUrl(activeFilter, nextQuery);
  }

  const filtered = useMemo(() => articles.filter((article) => {
    const groupMatch = activeFilter === "all"
      ? true
      : activeFilter === "records"
        ? article.contentType === "production-record"
        : activeFilter === "guides"
          ? article.contentType === "production-guide"
          : activeFilter === "news"
            ? isAnalysisContentType(article.contentType)
            : [article.category, ...article.tags].some((tag) => slugify(tag) === activeFilter);
    const haystack = normalize([
      article.title,
      article.description,
      article.category,
      ...article.tags,
      ...article.keywords,
    ].join(" "));
    return groupMatch && (!normalize(query) || haystack.includes(normalize(query)));
  }), [activeFilter, articles, query]);

  const labels = language === "ko"
    ? {
        all: "전체",
        records: "실제 제작 기록",
        search: "제목, 요약, 태그와 도구 검색",
        library: "전체 인사이트",
        count: "개 글",
        reset: "필터 초기화",
        emptyTitle: "검색 결과가 없습니다",
        emptyText: "검색어를 넓히거나 다른 분류를 선택해 주세요.",
      }
    : {
        all: "All Insights",
        records: "Real Production Notes",
        search: "Search titles, summaries, tags and tools",
        library: "Knowledge Library",
        count: filtered.length === 1 ? "Article" : "Articles",
        reset: "Reset filters",
        emptyTitle: "No matching articles",
        emptyText: "Try a broader search or choose another category.",
      };

  const filters = [
    { value: "all", label: labels.all },
    { value: "records", label: labels.records },
    { value: "guides", label: language === "ko" ? "제작 가이드" : "Production Guides" },
    { value: "news", label: language === "ko" ? "스튜디오 분석 / 도구 업데이트" : "Studio Analysis / Tool Updates" },
  ];

  return (
    <>
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative max-w-2xl">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#a67c52]" aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => changeQuery(event.target.value)}
              placeholder={labels.search}
              aria-label={labels.search}
              className="w-full rounded-full border border-[#d8c3ad] bg-white py-4 pl-14 pr-12 text-[#2b2119] shadow-sm outline-none transition focus:border-[#6f4e37] focus:ring-2 focus:ring-[#a67c52]/30"
            />
            {query ? (
              <button
                type="button"
                onClick={() => changeQuery("")}
                aria-label={language === "ko" ? "검색어 지우기" : "Clear search"}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-[#6f4e37] hover:bg-[#f2e8dc]"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectFilter(filter.value)}
                  className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.16em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] ${active ? "border-[#6f4e37] bg-[#6f4e37] text-white" : "border-[#d8c3ad] bg-white text-[#6f4e37] hover:border-[#6f4e37]"}`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{labels.library}</p>
            <h2 className="mt-3 text-4xl font-black text-[#2b2119] md:text-6xl">
              {language === "ko" ? `${filtered.length}${labels.count}` : `${filtered.length} ${labels.count}`}
            </h2>
          </div>
          {activeFilter !== "all" || query ? (
            <button
              type="button"
              onClick={() => {
                setActiveFilter("all");
                setQuery("");
                updateUrl("all", "");
              }}
              className="text-sm font-black text-[#6f4e37]"
            >
              {labels.reset}
            </button>
          ) : null}
        </div>
        {filtered.length ? (
          <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((article) => <InsightCard key={article.href} article={article} language={language} />)}
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-7xl rounded-[32px] border border-[#eadfce] bg-white p-10 text-center">
            <h3 className="text-2xl font-black text-[#2b2119]">{labels.emptyTitle}</h3>
            <p className="mt-3 text-[#76685d]">{labels.emptyText}</p>
          </div>
        )}
      </section>
    </>
  );
}
