export type InsightContentType = "production-record" | "production-guide" | "studio-analysis";

const productionRecordSlugs = new Set([
  "animal-character-short-publishing-checklist",
  "calming-dog-music-puppy-kitten-fireplace-rain",
  "cozy-retriever-kitten-sleep-short",
  "from-first-image-to-final-short",
  "haru-luna-rainy-window-ai-pet-video",
  "haru-relaxing-videos-calm-natural",
  "how-haru-was-created",
  "magiclight-seedance-2-real-production-test",
  "oli-swimming-scene-lessons",
  "turning-short-scene-into-relaxing-video",
  "why-fourfeetz-starts-animal-shorts-first-shot",
]);

const studioAnalysisSlugs = new Set([
  "best-ai-music-tools",
  "kling-ai-complete-review",
  "kling-vs-veo",
  "runway-gen45-review",
  "runway-gen-4-review",
  "veo3-complete-review",
]);

export function isProductionRecordSlug(slug: string) {
  return productionRecordSlugs.has(slug);
}

export function classifyInsight(slug: string, group: "guides" | "news"): InsightContentType {
  if (isProductionRecordSlug(slug)) return "production-record";
  if (studioAnalysisSlugs.has(slug)) return "studio-analysis";
  return group === "news" ? "studio-analysis" : "production-guide";
}

export const insightContentTypeLabels = {
  "production-record": {
    en: "Production Record",
    ko: "실제 제작 기록",
  },
  "production-guide": {
    en: "Production Guide",
    ko: "제작 가이드",
  },
  "studio-analysis": {
    en: "Studio Analysis / Tool Update",
    ko: "스튜디오 분석 / 도구 업데이트",
  },
} as const;
