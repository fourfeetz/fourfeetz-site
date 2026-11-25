import type { ToolValues } from "./calculations.ts";

export const protofaceCheckedAt = "2026-11-25";
export const protofaceAffiliateHref = "https://protoface.com/studio?fpr=fourfeetz";
export const protofacePricingHref = "https://www.protoface.com/pricing";
export type ProtofacePreset = Readonly<{
  id: string; model: string; settings: { ko: string; en: string }; seconds: number;
  usdPerSecond?: string; usdPerRun?: string; source: string;
}>;
const modelUrl = (slug: string) => `https://www.protoface.com/models/${slug}`;

// Snapshot of official model pages on checkedAt. Only the conditions listed in each
// row are covered; input-video/reference surcharges and unlimited plans are excluded.
export const protofacePresets: readonly ProtofacePreset[] = [
  { id: "seedance25-720", model: "Seedance 2.5", settings: { ko: "720p · 입력 영상 없음", en: "720p · no video input" }, seconds: 5, usdPerSecond: "0.184", source: modelUrl("bytedance-seedance-2.5") },
  { id: "seedance25-1080", model: "Seedance 2.5", settings: { ko: "1080p · 입력 영상 없음", en: "1080p · no video input" }, seconds: 5, usdPerSecond: "0.464", source: modelUrl("bytedance-seedance-2.5") },
  { id: "seedance20-720", model: "Seedance 2.0", settings: { ko: "720p · 입력 영상 없음", en: "720p · no video input" }, seconds: 5, usdPerSecond: "0.135", source: modelUrl("bytedance-seedance-2.0") },
  { id: "seedance20-1080", model: "Seedance 2.0", settings: { ko: "1080p · 입력 영상 없음", en: "1080p · no video input" }, seconds: 5, usdPerSecond: "0.333", source: modelUrl("bytedance-seedance-2.0") },
  { id: "kling30-silent", model: "Kling 3.0 Pro", settings: { ko: "음성 없음 · 공식표 해상도 미구분", en: "Silent · resolution not split in rate table" }, seconds: 5, usdPerSecond: "0.106", source: modelUrl("kuaishou-kling-3.0-pro") },
  { id: "kling30-audio", model: "Kling 3.0 Pro", settings: { ko: "음성 포함 · 공식표 해상도 미구분", en: "With sound · resolution not split in rate table" }, seconds: 5, usdPerSecond: "0.159", source: modelUrl("kuaishou-kling-3.0-pro") },
  { id: "ltx25-720", model: "LTX 2.5 Fast", settings: { ko: "720p · 최소 6초", en: "720p · 6-second minimum" }, seconds: 6, usdPerSecond: "0.006", source: modelUrl("lightricks-ltx-2.5-fast") },
  { id: "ltx25-1080", model: "LTX 2.5 Fast", settings: { ko: "1080p · 최소 6초", en: "1080p · 6-second minimum" }, seconds: 6, usdPerSecond: "0.01", source: modelUrl("lightricks-ltx-2.5-fast") },
  { id: "minimaxh3-480", model: "MiniMax H3", settings: { ko: "480p · 텍스트 생성 · 참조 없음", en: "480p · text generation · no references" }, seconds: 5, usdPerSecond: "0.01", source: modelUrl("minimax-minimax-h3") },
  { id: "minimaxh3-768", model: "MiniMax H3", settings: { ko: "768p · 텍스트 생성 · 참조 없음", en: "768p · text generation · no references" }, seconds: 5, usdPerSecond: "0.036", source: modelUrl("minimax-minimax-h3") },
  { id: "runwaygen4", model: "Runway Gen-4 Turbo", settings: { ko: "이미지→영상 · 공식표 해상도 미구분", en: "Image to video · resolution not split in rate table" }, seconds: 5, usdPerSecond: "0.056", source: modelUrl("runway-gen-4-turbo") },
  { id: "veo31fast-silent", model: "Veo 3.1 Fast", settings: { ko: "720p · 음성 없음 · 신규 생성", en: "720p · no audio · new generation" }, seconds: 8, usdPerRun: "0.80", source: modelUrl("google-veo-3.1-fast") },
  { id: "veo31fast-audio", model: "Veo 3.1 Fast", settings: { ko: "720p · 음성 포함 · 신규 생성", en: "720p · with audio · new generation" }, seconds: 8, usdPerRun: "1.20", source: modelUrl("google-veo-3.1-fast") },
  { id: "wan3prime-720", model: "Wan 3.0 Prime", settings: { ko: "720p · 입력 영상 없음", en: "720p · no video input" }, seconds: 5, usdPerSecond: "0.15", source: modelUrl("alibaba-wan-3.0-prime") },
];

export const defaultProtofacePreset = protofacePresets[0];

export function getProtofaceCredits(preset: ProtofacePreset) {
  // Convert decimal USD to integer cents without floating-point ceil errors.
  const rate = preset.usdPerRun ?? preset.usdPerSecond;
  if (!rate || !/^\d+(?:\.\d+)?$/.test(rate)) throw new RangeError("Invalid Protoface rate");
  const [whole, fraction = ""] = rate.split(".");
  const denominator = BigInt(10) ** BigInt(fraction.length);
  const numerator = BigInt(whole + fraction) * BigInt(100) * BigInt(preset.usdPerRun ? 1 : preset.seconds);
  return Number((numerator + denominator - BigInt(1)) / denominator);
}

export function protofacePresetValues(preset: ProtofacePreset): ToolValues {
  return { creditsPerGeneration: String(getProtofaceCredits(preset)), secondsPerShot: String(preset.seconds), packCredits: "1000", packPrice: "10" };
}

export function getMatchingProtofacePreset(id: string | null, values: ToolValues, currency: string) {
  const preset = protofacePresets.find(item => item.id === id);
  if (!preset || currency !== "USD") return undefined;
  return Object.entries(protofacePresetValues(preset)).every(([key, value]) => Number(values[key]) === Number(value)) ? preset : undefined;
}
