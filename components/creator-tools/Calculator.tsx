"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { calculateAspect, calculateGenerationCost, calculateVideoSize, fieldLimits, isValidField, readToolValues, toolDefaults, type ToolSlug, type ToolValues } from "@/lib/creator-tools/calculations";
import type { ToolLanguage } from "@/lib/creator-tools/content";

const labels: Record<string, readonly [string, string]> = {
  width: ["원본 가로 (px)", "Source width (px)"], height: ["원본 세로 (px)", "Source height (px)"],
  ratioWidth: ["목표 가로 비율", "Target ratio width"], ratioHeight: ["목표 세로 비율", "Target ratio height"], outputWidth: ["출력 가로 (px)", "Output width (px)"],
  seconds: ["영상 길이 (초)", "Duration (seconds)"], videoMbps: ["비디오 비트레이트 (Mbps)", "Video bitrate (Mbps)"], audioKbps: ["오디오 비트레이트 (kbps)", "Audio bitrate (kbps)"],
  shots: ["최종 장면 수", "Final shots"], attempts: ["장면당 총 시도 (첫 생성 포함)", "Total attempts per shot (including first)"],
  creditsPerGeneration: ["1회 생성 크레딧", "Credits per generation"], packCredits: ["구매 묶음 크레딧", "Credits per pack"],
  packPrice: ["크레딧 묶음 가격", "Price per credit pack"], secondsPerShot: ["장면당 사용 길이 (초)", "Usable seconds per shot"],
};
const button = "min-h-12 rounded-xl px-5 py-3 font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2";

export default function Calculator({ slug, language }: { slug: ToolSlug; language: ToolLanguage }) {
  const ko = language === "ko";
  const [values, setValues] = useState<ToolValues>({ ...toolDefaults[slug] });
  const [shareUrl, setShareUrl] = useState("");
  const [notice, setNotice] = useState("");
  const [currency, setCurrency] = useState(ko ? "KRW" : "USD");
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      setValues(readToolValues(slug, params));
      const sharedCurrency = params.get("currency");
      if (sharedCurrency === "KRW" || sharedCurrency === "USD") setCurrency(sharedCurrency);
      setShareUrl(""); setNotice("");
    });
    return () => window.cancelAnimationFrame(frame);
  }, [slug]);

  const invalidKeys = Object.keys(toolDefaults[slug]).filter(key => !isValidField(key, values[key] ?? ""));
  const number = (key: string) => Number(values[key]);
  let aspect: ReturnType<typeof calculateAspect> | undefined;
  let size: ReturnType<typeof calculateVideoSize> | undefined;
  let cost: ReturnType<typeof calculateGenerationCost> | undefined;
  let resultError = false;
  if (!invalidKeys.length) {
    try {
      if (slug === "aspect-ratio-calculator") aspect = calculateAspect(number("width"), number("height"), number("ratioWidth"), number("ratioHeight"), number("outputWidth"));
      if (slug === "video-file-size-calculator") size = calculateVideoSize(number("seconds"), number("videoMbps"), number("audioKbps"));
      if (slug === "ai-video-cost-calculator") cost = calculateGenerationCost(number("shots"), number("attempts"), number("creditsPerGeneration"), number("packCredits"), number("packPrice"), number("secondsPerShot"));
    } catch { resultError = true; }
  }
  const valid = !invalidKeys.length && !resultError;
  const format = (value: number, digits = 2) => new Intl.NumberFormat(ko ? "ko-KR" : "en-US", { maximumFractionDigits: digits }).format(value);
  const money = (value: number) => new Intl.NumberFormat(ko ? "ko-KR" : "en-US", { style: "currency", currency, maximumFractionDigits: currency === "KRW" ? 0 : 2 }).format(value);

  function update(key: string, value: string) { setValues(current => ({ ...current, [key]: value })); setShareUrl(""); setNotice(""); }
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!valid) return;
    sendGAEvent("event", "tool_calculate", { tool_slug: slug, tool_language: language });
    resultRef.current?.focus();
  }
  async function share() {
    if (!valid) return;
    const url = new URL(window.location.pathname, window.location.origin);
    Object.entries(values).forEach(([key, value]) => { if (key in toolDefaults[slug]) url.searchParams.set(key, value); });
    if (cost) url.searchParams.set("currency", currency);
    setShareUrl(url.href);
    try {
      await navigator.clipboard.writeText(url.href);
      setNotice(ko ? "결과 링크를 복사했습니다." : "Result link copied.");
      sendGAEvent("event", "tool_share", { tool_slug: slug, tool_language: language });
    } catch { setNotice(ko ? "아래 링크를 선택해 직접 복사하세요." : "Select and copy the link below."); }
  }

  return <section id="calculator" aria-label={ko ? "무료 계산기" : "Free calculator"} className="rounded-[28px] border border-[#dfd0be] bg-white shadow-[0_16px_60px_rgba(68,46,25,.07)]">
    <div className="grid lg:grid-cols-[1fr_1fr]">
      <form onSubmit={submit} className="p-5 sm:p-8">
        <h2 className="text-xl font-black">{ko ? "값을 입력해보세요" : "Enter your values"}</h2>
        {slug === "aspect-ratio-calculator" ? <fieldset className="mt-5"><legend className="mb-2 text-sm font-bold text-[#6f4e37]">{ko ? "목표 화면비" : "Target aspect ratio"}</legend><div className="flex flex-wrap gap-2">{[[9, 16], [16, 9], [1, 1], [4, 5]].map(([w, h]) => <button key={`${w}:${h}`} type="button" aria-pressed={number("ratioWidth") === w && number("ratioHeight") === h} onClick={() => { setValues(current => ({ ...current, ratioWidth: String(w), ratioHeight: String(h) })); setShareUrl(""); setNotice(""); }} className={`${button} border border-[#dfd0be] px-4 aria-pressed:border-[#6f4e37] aria-pressed:bg-[#6f4e37] aria-pressed:text-white`}>{w}:{h}</button>)}</div></fieldset> : null}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">{Object.keys(toolDefaults[slug]).map(key => {
          const [min, max, integer] = fieldLimits[key];
          const invalid = !isValidField(key, values[key] ?? "");
          return <div key={key}><label htmlFor={`tool-${key}`} className="mb-2 block text-sm font-bold leading-6 text-[#5c4634]">{labels[key][ko ? 0 : 1]}</label><input id={`tool-${key}`} name={key} type="number" inputMode={integer ? "numeric" : "decimal"} min={min} max={max} step={integer ? 1 : "any"} required value={values[key] ?? ""} onChange={event => update(key, event.target.value)} aria-invalid={invalid} aria-describedby={invalid ? `error-${key}` : undefined} className="min-h-12 w-full min-w-0 rounded-xl border border-[#d7c5b0] bg-[#fffdf8] px-4 text-base tabular-nums text-[#2b2119] outline-none focus:border-[#6f4e37] focus:ring-2 focus:ring-[#d8c3ad] aria-invalid:border-red-500" />{invalid ? <p id={`error-${key}`} className="mt-1 text-sm text-red-700">{ko ? `${format(min)}~${format(max)} 사이의 ${integer ? "정수" : "숫자"}를 입력하세요.` : `Enter ${integer ? "a whole number" : "a number"} between ${format(min)} and ${format(max)}.`}</p> : null}</div>;
        })}</div>
        {slug === "ai-video-cost-calculator" ? <div className="mt-5"><label htmlFor="tool-currency" className="mb-2 block text-sm font-bold">{ko ? "입력 가격의 통화" : "Currency of entered price"}</label><select id="tool-currency" value={currency} onChange={event => { setCurrency(event.target.value); setShareUrl(""); setNotice(""); }} className="min-h-12 rounded-xl border border-[#d7c5b0] bg-[#fffdf8] px-4 text-base"><option value="KRW">KRW · 원</option><option value="USD">USD · $</option></select><p className="mt-2 text-sm leading-6 text-[#76685d]">{ko ? "통화 표기만 바뀌며 환율 변환은 하지 않습니다." : "Changes the currency label only; no exchange-rate conversion."}</p></div> : null}
        <div className="mt-7 flex flex-wrap gap-3"><button type="submit" disabled={!valid} className={`${button} bg-[#6f4e37] text-white hover:bg-[#573b29] disabled:cursor-not-allowed disabled:opacity-50`}>{ko ? "계산하기" : "Calculate"}</button><button type="button" onClick={() => { setValues({ ...toolDefaults[slug] }); setCurrency(ko ? "KRW" : "USD"); setShareUrl(""); setNotice(""); window.history.replaceState(null, "", window.location.pathname); }} className={`${button} border border-[#d7c5b0] text-[#6f4e37] hover:bg-[#fbf7f0]`}>{ko ? "초기화" : "Reset"}</button></div>
      </form>
      <div ref={resultRef} tabIndex={-1} id="tool-result" className="min-w-0 rounded-b-[28px] border-t border-[#eadfce] bg-[#f7f0e6] p-5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#a67c52] sm:p-8 lg:rounded-l-none lg:rounded-r-[28px] lg:border-l lg:border-t-0">
        <p className="text-sm font-bold tracking-wide text-[#89674a]">{ko ? "계산 결과" : "Your result"}</p>
        {!valid ? <p role="status" className="mt-6 leading-7 text-[#7c352d]">{resultError ? (ko ? "출력 세로가 지원 범위(1~65,536px)를 벗어납니다. 비율이나 출력 가로를 조정하세요." : "Output height must be between 1 and 65,536 px. Adjust the ratio or output width.") : (ko ? "입력값을 확인하면 결과가 표시됩니다." : "Check your inputs to see a result.")}</p> : null}
        {aspect ? <>
          <p className="mt-4 break-words text-3xl font-black tabular-nums sm:text-4xl">{format(aspect.outputWidth, 0)} × {format(aspect.outputHeight, 0)} <span className="text-base font-medium">px</span></p>
          <p className="mt-3 leading-7">{ko ? "원본 화면비" : "Source ratio"} <strong>{aspect.sourceRatio}</strong> → <strong>{values.ratioWidth}:{values.ratioHeight}</strong></p>
          <div role="img" aria-label={ko ? `가운데 자르기로 원본 면적의 ${format(aspect.retainedPercent)}%가 남습니다.` : `A centered crop retains ${format(aspect.retainedPercent)}% of the original area.`} className="mt-6 flex min-h-40 items-center justify-center rounded-2xl border border-[#dfd0be] bg-[#e9ddcd] p-6">
            <div className="relative flex items-center justify-center border-2 border-dashed border-[#98775d] bg-[#d9c7af]" style={{ width: `${Math.min(100, number("width") / number("height") * 100)}%`, aspectRatio: `${values.width}/${values.height}`, maxHeight: 240 }}>
              <div className="absolute border-2 border-[#6f4e37] bg-[#fffdf8]/90" style={{ width: `${aspect.cropWidth / number("width") * 100}%`, height: `${aspect.cropHeight / number("height") * 100}%` }} />
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-[#76685d]">{ko ? "점선: 원본 · 밝은 영역: 가운데 자르기로 남는 부분" : "Dashed outline: source · light area: retained centered crop"}</p>
          <dl className="mt-5 space-y-3"><Result label={ko ? "원본에서 남는 면적" : "Original area retained"} value={`${format(aspect.retainedPercent)}%`} /><Result label={ko ? "잘리는 면적" : "Area cropped"} value={`${format(100 - aspect.retainedPercent)}%`} /><Result label={ko ? "남는 원본 영역" : "Retained source region"} value={`${format(aspect.cropWidth)} × ${format(aspect.cropHeight)} px`} /></dl>
        </> : null}
        {size ? <><p className="mt-4 break-words text-4xl font-black tabular-nums">{format(size.megabytes)} <span className="text-xl">MB</span></p><dl className="mt-6 space-y-3"><Result label="GB" value={format(size.gigabytes, 4)} /><Result label="MiB" value={format(size.mebibytes)} /><Result label={ko ? "전체 평균 비트레이트" : "Combined average bitrate"} value={`${format(number("videoMbps") + number("audioKbps") / 1000, 3)} Mbps`} /></dl><p className="mt-6 rounded-xl bg-white/70 p-4 text-sm leading-7 text-[#76685d]">{ko ? "평균 비트레이트로 계산한 예상값입니다. VBR, 컨테이너 및 메타데이터에 따라 실제 파일 크기는 달라집니다." : "An estimate based on average bitrate. VBR, container overhead and metadata affect the actual file size."}</p></> : null}
        {cost ? <><p className="mt-4 text-sm font-bold text-[#76685d]">{ko ? "사용량 환산 비용" : "Allocated usage cost"}</p><p className="mt-2 break-words text-4xl font-black tabular-nums">{money(cost.allocatedCost)}</p><dl className="mt-6 space-y-3"><Result label={ko ? "총 생성 횟수" : "Total generations"} value={format(cost.generations, 0)} /><Result label={ko ? "필요 크레딧" : "Credits required"} value={format(cost.credits)} /><Result label={ko ? "새 묶음 구매 수" : "Whole packs to buy"} value={format(cost.packs, 0)} /><Result label={ko ? "묶음 구매 금액" : "Whole-pack purchase cost"} value={money(cost.purchaseCost)} /><Result label={ko ? "구매 후 남는 크레딧" : "Credits left after project"} value={format(cost.remainingCredits)} /><Result label={ko ? "최종 길이 (전환·트리밍 전)" : "Final length before transitions / trimming"} value={`${format(cost.finalSeconds)} ${ko ? "초" : "sec"}`} /></dl><p className="mt-6 rounded-xl bg-white/70 p-4 text-sm leading-7 text-[#76685d]">{ko ? "기존 잔액 0 기준입니다. 세금·환율·기본 구독료·편집·음악·인건비는 포함하지 않습니다." : "Assumes zero starting credits. Excludes taxes, currency conversion, base subscriptions, editing, music and labor."}</p></> : null}
        {valid ? <div className="mt-7"><button type="button" onClick={share} className={`${button} w-full border border-[#c6ad91] bg-white text-[#6f4e37] hover:bg-[#fffaf1]`}>{ko ? "결과 링크 복사" : "Copy result link"}</button><p className="mt-2 text-sm leading-6 text-[#76685d]">{ko ? "공유 링크에는 입력한 수치가 포함됩니다." : "Shared links include the numbers you enter."}</p></div> : null}
        {notice ? <p role="status" className="mt-3 text-sm font-bold text-[#6f4e37]">{notice}</p> : null}
        {shareUrl ? <label className="mt-3 block text-sm font-bold">{ko ? "공유 주소" : "Share URL"}<input readOnly value={shareUrl} onFocus={event => event.target.select()} className="mt-2 min-h-12 w-full min-w-0 rounded-xl border border-[#d7c5b0] bg-white px-3 text-base font-normal" /></label> : null}
      </div>
    </div>
  </section>;
}

function Result({ label, value }: { label: string; value: string }) {
  return <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-[#e0d1be] pb-3"><dt className="text-sm leading-6 text-[#76685d]">{label}</dt><dd className="break-all text-lg font-bold tabular-nums">{value}</dd></div>;
}
