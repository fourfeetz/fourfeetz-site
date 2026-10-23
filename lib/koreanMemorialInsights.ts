import type { Metadata } from "next";
import type { ProductionInsight } from "@/lib/productionInsights";

export const koreanMemorialInsightSlugs = [
  "dog-memorial-video-rainbow-bridge",
  "pet-memorial-video-photo-guide",
] as const;

export type KoreanMemorialInsightSlug = (typeof koreanMemorialInsightSlugs)[number];

const serviceHref = "/ko/services/pet-memorial-video";
const dates = { published: "2026-10-23", updated: "2026-10-23" } as const;
const serviceCta = {
  href: serviceHref,
  title: "소중한 아이의 이야기를 영상으로 남겨보세요",
  description: "반려동물의 사진과 이야기를 바탕으로 세상에 하나뿐인 추모영상을 제작합니다.",
  label: "반려동물 추모영상 제작 알아보기",
} as const;

export const koreanMemorialInsights: Record<KoreanMemorialInsightSlug, ProductionInsight> = {
  "dog-memorial-video-rainbow-bridge": {
    ...dates,
    slug: "dog-memorial-video-rainbow-bridge",
    eyebrow: "FourFeetz 추모영상 가이드",
    title: "강아지 추모영상이란? 무지개다리를 건넌 반려동물을 기억하는 방법",
    shortTitle: "강아지 추모영상과 무지개다리 이야기",
    description: "강아지 추모영상의 의미와 제작 방법을 알아봅니다. 무지개다리를 건넌 반려동물과의 소중한 추억을 사진과 영상으로 간직하는 방법을 소개합니다.",
    hero: "/images/services/pet-memorial-0914-cover.jpg",
    heroAlt: "따뜻한 빛과 꽃길로 표현한 강아지 반려동물 추모영상 장면",
    heroCaption: "실제 고객 정보를 사용하지 않은 FourFeetz 공식 반려동물 추모영상 예시 이미지입니다.",
    heroFit: "contain",
    readTime: "약 6분",
    verdict: "강아지 추모영상은 사진을 나열하는 데 그치지 않고, 아이의 성격과 함께한 기억을 하나의 이야기로 연결해 오래 간직하는 방법입니다.",
    category: "반려동물 추모영상",
    tags: ["반려동물 추모영상", "강아지 추모영상", "무지개다리", "메모리얼 영상"],
    keywords: ["반려동물 추모영상", "강아지 추모영상", "애견 추모영상", "반려견 추모영상", "무지개다리", "반려동물 메모리얼 영상"],
    tools: ["AI 영상"],
    characters: ["반려동물"],
    serviceCta,
    sections: [
      {
        id: "meaning",
        title: "반려동물 추모영상이란?",
        paragraphs: [
          "오랜 시간 가족으로 함께한 반려동물과의 이별은 쉽게 익숙해지지 않습니다. 사진첩 속 사진과 짧은 영상은 소중한 추억이지만, 아이가 다시 걷고 뛰어노는 모습을 한 번 더 보고 싶다는 마음이 들기도 합니다.",
          "반려동물 추모영상은 함께했던 사진과 이야기를 바탕으로 아이와의 추억을 하나의 영상으로 표현하는 콘텐츠입니다. 최근에는 단순한 사진 슬라이드뿐 아니라 AI 영상 기술을 활용해 사진 속 특징을 참고한 움직임과 장면을 표현하는 방식도 활용되고 있습니다.",
        ],
        bullets: [
          "꽃이 피어 있는 초원을 뛰어노는 모습",
          "보호자를 바라보며 편안하게 쉬는 모습",
          "먼저 떠난 아이와 다시 만나는 모습",
          "무지개다리 너머에서 행복하게 지내는 모습",
          "보호자에게 마지막 인사를 전하는 모습",
        ],
      },
      {
        id: "story",
        title: "사진으로 남은 기억을 하나의 이야기로",
        paragraphs: [
          "반려동물과 오랜 시간을 함께했다면 휴대전화에는 서로 다른 시간과 이야기가 담긴 많은 사진이 남아 있을 것입니다.",
          "추모영상은 사진을 단순히 모아놓는 것이 아니라 아이의 성격, 좋아했던 행동과 보호자와의 추억을 바탕으로 하나의 이야기로 연결할 수 있다는 특징이 있습니다. 산책을 좋아했던 아이라면 푸른 초원을 걷는 모습을, 함께 지냈던 두 아이가 있다면 다시 만나 뛰어노는 모습을 표현하는 식입니다.",
        ],
      },
      {
        id: "rainbow-bridge",
        title: "무지개다리를 영상으로 표현한다면",
        paragraphs: [
          "반려동물을 떠나보낸 뒤 자주 사용되는 표현 중 하나가 무지개다리입니다. 추모영상에서는 무지개와 구름, 꽃길과 따뜻한 햇살처럼 편안한 이미지를 활용해 아이가 더 이상 아프지 않고 평화롭게 지내고 있다는 이야기를 표현할 수 있습니다.",
          "중요한 것은 화려한 장면보다 그 아이를 기억하는 보호자의 마음에 어울리는 이야기입니다. 모든 반려동물에게 똑같은 장면을 적용하기보다 실제 아이의 성격과 추억을 반영해야 더욱 의미 있는 결과가 됩니다.",
        ],
      },
      {
        id: "cats-and-ai",
        title: "강아지뿐 아니라 고양이도 제작할 수 있을까요?",
        paragraphs: [
          "추모영상은 강아지에만 한정되지 않습니다. 고양이를 비롯해 사진으로 특징을 확인할 수 있는 반려동물이라면 같은 방식으로 이야기를 구성할 수 있습니다.",
          "다만 AI로 제작되는 영상은 원본 사진을 그대로 움직이는 실제 촬영 영상이 아니므로 털의 형태나 표정, 움직임에 미세한 차이가 생길 수 있습니다. 아이의 특징이 잘 보이는 선명한 사진을 준비하는 것이 중요합니다.",
        ],
      },
      {
        id: "personal-story",
        title: "가장 중요한 것은 닮은 모습보다 우리 아이의 이야기",
        paragraphs: [
          "좋은 추모영상은 단순히 기술적으로 화려한 영상만을 의미하지 않습니다. 평소 좋아했던 장소, 자주 짓던 표정, 함께 지낸 다른 반려동물과 마지막에 전하고 싶은 말에 따라 영상의 분위기는 크게 달라집니다.",
          "FourFeetz는 반려동물의 사진과 보호자가 들려주는 이야기를 바탕으로 강아지·고양이 반려동물 추모영상을 맞춤 제작합니다. 사진 속 소중한 순간을 하나의 이야기로 간직하고 싶다면 반려동물 추모영상 제작 서비스를 확인해보세요.",
          "추모영상 제작을 위해 어떤 사진을 준비해야 하는지 궁금하다면 ‘반려동물 추모영상 제작 방법｜어떤 사진을 준비해야 할까요?’도 확인해보세요. 사랑했던 기억은 사라지는 것이 아니라 다른 모습으로 우리 곁에 남습니다.",
        ],
        links: [
          { text: "반려동물 추모영상 제작 서비스", href: serviceHref },
          { text: "반려동물 추모영상 제작 방법｜어떤 사진을 준비해야 할까요?", href: "/ko/insights/pet-memorial-video-photo-guide" },
        ],
      },
    ],
    faqs: [
      { question: "강아지 사진만으로 추모영상을 만들 수 있나요?", answer: "사진 속 특징을 참고한 AI 영상 제작이 가능합니다. 얼굴과 몸의 특징이 선명한 여러 방향의 사진이 있으면 제작 방향을 정하는 데 도움이 됩니다." },
      { question: "고양이나 다른 반려동물도 가능한가요?", answer: "네. 사진으로 외형과 특징을 확인할 수 있다면 고양이와 다른 반려동물도 상담할 수 있습니다." },
    ],
    related: [
      { label: "제작 예시", title: "무지개다리에서 다시 만난 두 아이 추모영상 보기", href: "/ko/shorts/heavenly-steps-together" },
      { label: "관련 가이드", title: "반려동물 추모영상 제작 방법｜어떤 사진을 준비해야 할까요?", href: "/ko/insights/pet-memorial-video-photo-guide" },
      { label: "제작 서비스", title: "FourFeetz 반려동물 추모영상 제작", href: serviceHref },
    ],
  },
  "pet-memorial-video-photo-guide": {
    ...dates,
    slug: "pet-memorial-video-photo-guide",
    eyebrow: "FourFeetz 실전 준비 가이드",
    title: "반려동물 추모영상 제작 방법｜어떤 사진을 준비해야 할까요?",
    shortTitle: "반려동물 추모영상 사진 준비 방법",
    description: "반려동물 추모영상 제작에 필요한 사진과 준비 방법을 알아봅니다. 얼굴, 전신, 털색과 특징을 잘 표현할 수 있는 사진 선택 방법을 안내합니다.",
    hero: "/images/shorts/pet-memorial/heavenly-steps-story-frame.png",
    heroAlt: "꽃길 계단을 함께 오르는 두 강아지 추모영상 제작 이미지",
    heroCaption: "실제 고객 정보를 사용하지 않은 FourFeetz 공식 추모영상 스토리 이미지입니다.",
    heroFit: "contain",
    readTime: "약 7분",
    verdict: "사진의 수보다 얼굴, 털색, 무늬와 체형을 정확히 확인할 수 있는 선명하고 다양한 기준 사진을 준비하는 것이 중요합니다.",
    category: "추모영상 제작 가이드",
    tags: ["반려동물 추모영상 제작", "추모영상 사진", "AI 추모영상", "사진 준비"],
    keywords: ["반려동물 추모영상 제작", "강아지 추모영상 제작", "추모영상 사진", "반려동물 사진", "AI 추모영상"],
    tools: ["AI 영상"],
    characters: ["반려동물"],
    serviceCta,
    sections: [
      {
        id: "best-photos",
        title: "어떤 사진이 가장 좋을까요?",
        paragraphs: [
          "반려동물 추모영상을 제작할 때 사진의 개수도 중요하지만, AI 추모영상에서는 아이의 얼굴과 털색, 무늬와 체형 같은 특징을 확인할 수 있는 사진을 준비하는 것이 더욱 중요합니다.",
          "가능하다면 한 장보다 여러 방향에서 촬영한 사진을 준비하고, 그중 우리 아이와 가장 닮았다고 생각하는 대표 사진 한 장을 선택해 전체적인 얼굴과 분위기의 기준으로 삼는 것이 좋습니다.",
        ],
        bullets: [
          "얼굴이 선명하게 보이는 정면 사진",
          "몸 전체가 보이는 전신 사진",
          "좌우 측면을 확인할 수 있는 사진",
          "털색과 얼굴 무늬가 잘 보이는 밝은 사진",
          "평소 착용했던 옷이나 목걸이가 보이는 사진",
          "아이의 대표적인 표정이 담긴 사진",
        ],
      },
      {
        id: "multiple-pets",
        title: "여러 마리가 함께 등장한다면?",
        paragraphs: [
          "두 마리 이상의 반려동물이 함께 등장하는 영상도 제작할 수 있습니다. 이 경우 각각의 반려동물 사진을 따로 준비하는 것이 좋습니다.",
          "각 아이의 정면, 전신, 털색과 무늬가 잘 보이는 사진과 함께 크기 차이와 서로의 관계를 알려주면 장면 구성에 도움이 됩니다. 여러 캐릭터가 동시에 등장할수록 모습의 일관성을 유지하기 어려울 수 있으므로 제작 전에 등장하는 반려동물과 필요한 장면을 정하는 것이 중요합니다.",
        ],
      },
      {
        id: "story",
        title: "사진 다음에는 이야기를 정합니다",
        paragraphs: [
          "사진이 준비되었다면 다음은 영상의 이야기입니다. 기다림, 다시 만남, 함께 걷기, 행복하게 뛰어놀기, 편안한 휴식과 마지막 인사처럼 흐름을 구성할 수 있습니다.",
          "‘꽃밭을 좋아했어요’, ‘산책할 때 항상 앞장서서 걸었어요’, ‘두 아이가 항상 붙어 다녔어요’처럼 작은 기억들이 영상의 중요한 소재가 됩니다. 아이가 평소 좋아했던 장소와 행동을 중심으로 전혀 다른 이야기를 만들 수도 있습니다.",
        ],
      },
      {
        id: "message",
        title: "마지막 메시지도 미리 생각해보세요",
        paragraphs: [
          "영상 마지막에는 보호자가 아이에게 전하고 싶은 말이나 아이가 보호자에게 전하는 것처럼 표현한 메시지를 넣을 수 있습니다.",
          "예를 들어 ‘나는 잘 지내고 있어. 너무 걱정하지 마. 언제나 곁에서 함께할게. 사랑해.’처럼 짧고 따뜻한 메시지를 사용할 수 있으며, 원하는 경우 영상 분위기에 맞는 AI 음성 메시지로 표현하는 방법도 있습니다.",
        ],
      },
      {
        id: "process",
        title: "제작은 어떤 순서로 진행될까요?",
        paragraphs: [
          "FourFeetz의 현재 제작 과정은 상담, 사진 및 자료 전달, 스토리 구성과 제작 확정, AI 영상 제작, 워터마크 시안 확인, 수정과 최종 확인, 잔금 결제, 워터마크 없는 고화질 원본 전달 순서로 진행됩니다.",
        ],
        steps: ["상담", "사진 및 자료 전달", "스토리 구성", "제작 확정", "AI 영상 제작", "워터마크 시안 확인", "수정 및 최종 확인", "잔금 결제 후 고화질 원본 전달"],
      },
      {
        id: "limitations",
        title: "AI 추모영상에서 알아둘 점",
        paragraphs: [
          "AI 영상은 사진 속 반려동물을 그대로 촬영한 실제 영상으로 복원하는 기술은 아닙니다. 제공된 사진의 특징을 참고해 새로운 영상 장면을 생성하므로 얼굴이나 털의 형태, 움직임과 액세서리에 미세한 차이가 발생할 수 있습니다.",
          "따라서 선명하고 다양한 사진을 준비하고 제작 전에 꼭 표현하고 싶은 특징을 알려주는 것이 좋습니다.",
        ],
      },
      {
        id: "memories",
        title: "소중한 사진을 다시 하나의 이야기로",
        paragraphs: [
          "사진 한 장에는 그날의 표정만 남아 있지만, 그 사진에 담긴 이야기는 보호자가 가장 잘 알고 있습니다. FourFeetz는 사진과 이야기를 바탕으로 강아지 추모영상, 고양이 추모영상 등 반려동물 맞춤 메모리얼 영상을 제작합니다.",
          "아이와의 추억을 조금 더 특별한 방법으로 간직하고 싶다면 반려동물 추모영상 제작 서비스를 확인해보세요. 사진으로 남은 순간을 다시 하나의 이야기로 만들어보세요.",
          "반려동물 추모영상의 의미와 무지개다리 이야기가 궁금하다면 ‘강아지 추모영상이란? 무지개다리를 건넌 반려동물을 기억하는 방법’도 함께 확인해보세요.",
        ],
        links: [
          { text: "반려동물 추모영상 제작 서비스", href: serviceHref },
          { text: "강아지 추모영상이란? 무지개다리를 건넌 반려동물을 기억하는 방법", href: "/ko/insights/dog-memorial-video-rainbow-bridge" },
        ],
      },
    ],
    faqs: [
      { question: "사진은 몇 장을 준비해야 하나요?", answer: "기본 상담은 선명한 사진 1~3장으로 시작할 수 있습니다. 장면과 구성에 따라 여러 방향의 추가 사진이 도움이 될 수 있습니다." },
      { question: "여러 반려동물을 한 영상에 담을 수 있나요?", answer: "가능합니다. 각 아이의 사진을 따로 준비하고 크기 차이, 관계와 원하는 장면을 알려주면 제작 방향을 정하는 데 도움이 됩니다." },
    ],
    related: [
      { label: "제작 예시", title: "실제 반려동물 추모영상 제작 예시 보기", href: "/ko/shorts/heavenly-steps-together" },
      { label: "관련 가이드", title: "강아지 추모영상이란? 무지개다리를 건넌 반려동물을 기억하는 방법", href: "/ko/insights/dog-memorial-video-rainbow-bridge" },
      { label: "제작 서비스", title: "FourFeetz 반려동물 추모영상 제작", href: serviceHref },
    ],
  },
};

export function getKoreanMemorialInsight(slug: KoreanMemorialInsightSlug) {
  return koreanMemorialInsights[slug];
}

export function isKoreanMemorialInsightSlug(slug: string): slug is KoreanMemorialInsightSlug {
  return koreanMemorialInsightSlugs.includes(slug as KoreanMemorialInsightSlug);
}

export function createKoreanMemorialInsightMetadata(slug: KoreanMemorialInsightSlug): Metadata {
  const article = getKoreanMemorialInsight(slug);
  const path = `/ko/insights/${slug}`;
  const title = `${article.title} | FourFeetz`;
  return {
    title: { absolute: title },
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: "FourFeetz Studios",
      title,
      description: article.description,
      url: path,
      locale: "ko_KR",
      publishedTime: article.published,
      modifiedTime: article.updated,
      images: [{ url: article.hero, alt: article.heroAlt }],
    },
    twitter: { card: "summary_large_image", title, description: article.description, images: [article.hero] },
  };
}
