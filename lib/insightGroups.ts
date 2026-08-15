export type InsightGroup = "guides" | "news";
export type InsightLanguage = "en" | "ko";

export const insightGroups = {
  guides: {
    en: {
      label: "Production Guides",
      badge: "Production Guide",
      title: "AI Animation Production Guides | FourFeetz",
      description: "Transferable planning, motion, continuity, editing, and publishing guidance generalized from FourFeetz production work.",
    },
    ko: {
      label: "제작 가이드",
      badge: "제작 가이드",
      title: "AI 애니메이션 제작 가이드 | FourFeetz",
      description: "FourFeetz 제작 경험에서 일반화한 기획, 움직임, 연속성, 편집과 공개 방법을 정리합니다.",
    },
  },
  news: {
    en: {
      label: "Studio Analysis / Tool Updates",
      badge: "Studio Analysis",
      title: "Studio Analysis & AI Tool Updates | FourFeetz",
      description: "Production-focused reviews and tool updates that separate documented studio use, confirmed announcements, and questions that still require testing.",
    },
    ko: {
      label: "스튜디오 분석 / 도구 업데이트",
      badge: "스튜디오 분석",
      title: "스튜디오 분석과 AI 도구 업데이트 | FourFeetz",
      description: "기록된 실제 사용, 확인된 외부 발표와 앞으로 테스트할 질문을 구분해 제작 관점에서 분석합니다.",
    },
  },
} as const;

export function isInsightGroup(value: string): value is InsightGroup {
  return value === "guides" || value === "news";
}
