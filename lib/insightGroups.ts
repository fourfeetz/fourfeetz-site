export type InsightGroup = "guides" | "news";
export type InsightLanguage = "en" | "ko";

export const insightGroups = {
  guides: {
    en: {
      label: "Production Guides",
      badge: "Production Guide",
      title: "AI Animation Production Guides | FourFeetz",
      description: "Practical guides and production notes based on FourFeetz’s real AI animation workflow, tests, failures, and solutions.",
    },
    ko: {
      label: "제작 가이드",
      badge: "제작 가이드",
      title: "AI 애니메이션 제작 가이드 | FourFeetz",
      description: "FourFeetz가 실제 AI 애니메이션을 제작하면서 경험한 테스트, 실패 원인, 해결 과정과 제작 노하우를 정리합니다.",
    },
  },
  news: {
    en: {
      label: "AI Tool Updates",
      badge: "AI Tool Update",
      title: "AI Video Tool Updates | FourFeetz",
      description: "Important AI video tool releases and updates, analyzed for their practical impact on creators.",
    },
    ko: {
      label: "AI 툴 업데이트",
      badge: "AI 툴 업데이트",
      title: "AI 영상 툴 업데이트 | FourFeetz",
      description: "AI 영상 도구의 주요 기능, 모델, 요금제 변화를 확인하고 실제 제작자에게 미치는 영향을 분석합니다.",
    },
  },
} as const;

export function isInsightGroup(value: string): value is InsightGroup {
  return value === "guides" || value === "news";
}
