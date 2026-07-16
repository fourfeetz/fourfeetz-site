"use client";

import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchableContent } from "@/lib/contentIndex";

type SearchModalProps = {
  onClose: () => void;
};

function normalize(value: string) {
  return value.trim().toLocaleLowerCase();
}

export default function SearchModal({ onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const normalizedQuery = normalize(query);
    if (!normalizedQuery) return searchableContent.slice(0, 10);

    return searchableContent
      .filter((item) =>
        [item.title, item.description, item.type, item.category, ...(item.characters ?? []), ...(item.tools ?? []), ...(item.keywords ?? [])]
          .join(" ")
          .toLocaleLowerCase()
          .includes(normalizedQuery),
      )
      .slice(0, 12);
  }, [query]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('input, button, a[href], [tabindex]:not([tabindex="-1"])'),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-[#2b2119]/55 p-4 pt-[8vh] backdrop-blur-sm sm:p-6 sm:pt-[10vh]" onMouseDown={onClose}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="site-search-title" className="flex max-h-[82vh] w-full max-w-3xl flex-col overflow-hidden rounded-[28px] border border-[#eadfce] bg-[#fffdf8] shadow-2xl shadow-black/20" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-6 border-b border-[#eadfce] p-5 sm:p-7">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#a67c52]">Discover FourFeetz</p>
            <h2 id="site-search-title" className="mt-2 text-2xl font-black text-[#2b2119] sm:text-3xl">Search</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close search" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d9c7b4] bg-white text-[#6f4e37] transition duration-200 hover:border-[#6f4e37] hover:bg-[#f6eee4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
            <X size={19} aria-hidden="true" />
          </button>
        </div>

        <div className="p-5 pb-3 sm:p-7 sm:pb-4">
          <label htmlFor="global-search-input" className="sr-only">Search Films, Shorts, Characters, Insights, and Resources</label>
          <div className="flex items-center gap-3 rounded-2xl border border-[#d9c7b4] bg-white px-4 focus-within:border-[#6f4e37] focus-within:ring-2 focus-within:ring-[#a67c52]/25">
            <Search size={20} className="shrink-0 text-[#a67c52]" aria-hidden="true" />
            <input ref={inputRef} id="global-search-input" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search films, characters, tools..." autoComplete="off" className="min-w-0 flex-1 bg-transparent py-4 text-base font-semibold text-[#2b2119] outline-none placeholder:text-[#9a8775]" />
            {query ? <button type="button" onClick={() => setQuery("")} className="text-xs font-black uppercase tracking-[0.14em] text-[#6f4e37] hover:text-[#2b2119]">Clear</button> : null}
          </div>
        </div>

        <div className="overflow-y-auto px-5 pb-5 sm:px-7 sm:pb-7" aria-live="polite">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a67c52]">{query ? "Results" : "Explore"}</p>
            <p className="text-xs font-bold text-[#9a8775]">{results.length} {results.length === 1 ? "result" : "results"}</p>
          </div>

          {results.length ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {results.map((item) => (
                <Link key={`${item.type}-${item.href}-${item.title}`} href={item.href} onClick={onClose} aria-label={`Open ${item.title}`} className="group rounded-2xl border border-[#eadfce] bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#d4b99d] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37]">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-[#f2e8dc] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#6f4e37]">{item.type}</span>
                    <ArrowUpRight size={17} className="text-[#a67c52] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-lg font-black leading-snug text-[#2b2119]">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#76685d]">{item.description}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#d9c7b4] bg-white p-8 text-center">
              <p className="font-black text-[#2b2119]">No results found</p>
              <p className="mt-2 text-sm text-[#76685d]">Try a title, character, category, or production tool.</p>
            </div>
          )}
        </div>

        <div className="border-t border-[#eadfce] bg-[#f7efe5] px-5 py-3 text-right text-xs font-bold text-[#8a7767] sm:px-7">Press ESC to close</div>
      </div>
    </div>
  );
}
