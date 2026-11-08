export type StoreLanguage = "en" | "ko";
export type StoreSaleStatus = "preparing" | "coming-soon" | "available";

type LocalizedText = Readonly<Record<StoreLanguage, string>>;

export type StoreProduct = Readonly<{
  id: string;
  slug: string;
  name: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  priceKrw: number;
  priceUsd: number;
  image: string;
  sampleVideo?: Readonly<{ src: string; poster: string; label: LocalizedText }>;
  includedFiles: readonly LocalizedText[];
  supportedModels: readonly Readonly<{ name: string; verification: "not-verified" | "verified" }>[];
  verifiedAt: string | null;
  saleStatus: StoreSaleStatus;
  level: LocalizedText;
  freeAsset?: Readonly<{ filename: string; mimeType: "application/pdf"; version: string }>;
}>;

export const storeProducts: readonly StoreProduct[] = [
  {
    id: "3f1ff879-9a8b-4d61-a78a-e47f2c330001",
    slug: "free-pet-video-prompt",
    name: { en: "AI Pet Video Starter Guide", ko: "무료 반려동물 AI 영상 입문 가이드" },
    shortDescription: {
      en: "A free beginner guide with a ready-to-use prompt, production steps and a final checklist.",
      ko: "첫 영상을 위한 기본 프롬프트, 단계별 제작 순서와 체크리스트를 담은 무료 입문 가이드입니다.",
    },
    description: {
      en: "Learn the essentials of AI pet-video creation, from choosing a photo and writing a prompt to generation, editing and final review.",
      ko: "AI 반려동물 영상의 기본 개념부터 사진 선택, 프롬프트 입력, 생성·편집 순서와 완성 체크까지 익히는 한국어 입문 자료입니다.",
    },
    priceKrw: 0,
    priceUsd: 0,
    image: "/images/store/digital-guides-hero.png",
    includedFiles: [{ en: "English PDF starter guide", ko: "한국어 PDF 입문 가이드" }],
    supportedModels: [{ name: "AI video generators", verification: "not-verified" }],
    verifiedAt: null,
    saleStatus: "available",
    level: { en: "Beginner", ko: "초급" },
    freeAsset: { filename: "free-pet-video-prompt-v1.pdf", mimeType: "application/pdf", version: "3.0" },
  },
  {
    id: "3f1ff879-9a8b-4d61-a78a-e47f2c330002",
    slug: "pet-video-starter-pack",
    name: { en: "Pet Video Starter Pack", ko: "반려동물 영상 스타터 팩" },
    shortDescription: {
      en: "Three general-purpose prompts with a practical setup and troubleshooting guide.",
      ko: "범용 프롬프트 3종과 설정·문제 해결 가이드를 담은 입문 패키지입니다.",
    },
    description: {
      en: "A beginner-to-intermediate pack designed around common pet-video scenes without including FourFeetz private character assets or internal workflows.",
      ko: "FourFeetz의 비공개 캐릭터 자료나 내부 워크플로를 포함하지 않고, 일반적인 반려동물 영상 장면을 중심으로 구성한 초급·중급 패키지입니다.",
    },
    priceKrw: 29000,
    priceUsd: 19.99,
    image: "/images/store/pet-video-starter-pack.png",
    sampleVideo: {
      src: "/videos/shorts/cozy-retriever-kitten/cozy-retriever-kitten-sleep-short.mp4",
      poster: "/images/shorts/cozy-retriever-kitten/cozy-retriever-kitten-poster.png",
      label: { en: "Example of the type of pet video the guide discusses", ko: "가이드에서 다루는 반려동물 영상 유형 예시" },
    },
    includedFiles: [
      { en: "Three general-purpose prompts", ko: "범용 프롬프트 3종 (한국어·영어)" },
      { en: "PDF usage guide", ko: "프롬프트 구조·권장 설정·단계별 제작 가이드" },
      { en: "Settings and troubleshooting guide", ko: "실전 예시·문제 해결·체크리스트·활용 팁" },
    ],
    supportedModels: [{ name: "AI video generators", verification: "not-verified" }],
    verifiedAt: null,
    saleStatus: "available",
    level: { en: "Beginner · Intermediate", ko: "초급 · 중급" },
  },
  {
    id: "3f1ff879-9a8b-4d61-a78a-e47f2c330003",
    slug: "pet-creator-pack",
    name: { en: "Pet Creator Pack", ko: "펫 크리에이터 팩" },
    shortDescription: {
      en: "A planned ten-prompt collection with examples and additional guidance.",
      ko: "범용 프롬프트 10종과 샘플·추가 가이드를 담을 예정인 확장 패키지입니다.",
    },
    description: {
      en: "A broader creator pack planned for repeatable general pet-video projects. Contents and compatibility will be confirmed before release.",
      ko: "반복적인 범용 반려동물 영상 제작을 위한 확장 팩입니다. 구성과 호환성은 출시 전에 검증하여 안내합니다.",
    },
    priceKrw: 49000,
    priceUsd: 34.99,
    image: "/images/store/pet-creator-pack.png",
    includedFiles: [
      { en: "Ten general-purpose prompts (planned)", ko: "범용 프롬프트 10종 (예정)" },
      { en: "Usage guide and examples (planned)", ko: "사용 설명서 및 샘플 (예정)" },
      { en: "Additional guide (planned)", ko: "추가 가이드 (예정)" },
    ],
    supportedModels: [{ name: "Compatibility testing is planned", verification: "not-verified" }],
    verifiedAt: null,
    saleStatus: "coming-soon",
    level: { en: "Intermediate", ko: "중급" },
  },
] as const;

export const storeProductSlugs = storeProducts.map((product) => product.slug);

export function getStoreProduct(slug: string) {
  return storeProducts.find((product) => product.slug === slug);
}
export function getStoreProductById(id: string) {
  return storeProducts.find((product) => product.id === id);
}
export function formatStorePrice(priceKrw: number, language: StoreLanguage, priceUsd?: number) {
  if (priceKrw === 0) return language === "ko" ? "무료" : "Free";
  if (language === "en" && typeof priceUsd === "number") {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(priceUsd);
  }
  return new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW", maximumFractionDigits: 0 }).format(priceKrw);
}

