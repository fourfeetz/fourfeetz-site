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
    name: { en: "Free Pet Video Prompt", ko: "무료 반려동물 영상 프롬프트" },
    shortDescription: {
      en: "One beginner-friendly prompt for creating a warm pet video.",
      ko: "따뜻한 반려동물 영상을 위한 초보자용 범용 프롬프트 1종입니다.",
    },
    description: {
      en: "A simple starting point for learning how a scene, action and mood can be described for an AI video tool.",
      ko: "AI 영상 도구에 장면, 동작, 분위기를 설명하는 기본 방식을 익힐 수 있도록 구성한 입문 자료입니다.",
    },
    priceKrw: 0,
    image: "/images/store/digital-guides-hero.png",
    includedFiles: [{ en: "Bilingual PDF prompt guide", ko: "한영 PDF 프롬프트 가이드" }],
    supportedModels: [{ name: "AI video generators", verification: "not-verified" }],
    verifiedAt: null,
    saleStatus: "preparing",
    level: { en: "Beginner", ko: "초급" },
    freeAsset: { filename: "free-pet-video-prompt-v1.pdf", mimeType: "application/pdf", version: "1.0" },
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
    priceKrw: 9900,
    image: "/images/store/pet-video-starter-pack.png",
    sampleVideo: {
      src: "/videos/shorts/cozy-retriever-kitten/cozy-retriever-kitten-sleep-short.mp4",
      poster: "/images/shorts/cozy-retriever-kitten/cozy-retriever-kitten-poster.png",
      label: { en: "Example of the type of pet video the guide discusses", ko: "가이드에서 다루는 반려동물 영상 유형 예시" },
    },
    includedFiles: [
      { en: "Three general-purpose prompts (being prepared)", ko: "범용 프롬프트 3종 (준비 중)" },
      { en: "PDF usage guide (being prepared)", ko: "PDF 사용 설명서 (준비 중)" },
      { en: "Settings and troubleshooting guide (being prepared)", ko: "권장 설정 및 문제 해결 가이드 (준비 중)" },
    ],
    supportedModels: [{ name: "AI video generators", verification: "not-verified" }],
    verifiedAt: null,
    saleStatus: "preparing",
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
    priceKrw: 19900,
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
export function formatStorePrice(priceKrw: number, language: StoreLanguage) {
  if (priceKrw === 0) return language === "ko" ? "무료" : "Free";
  return new Intl.NumberFormat(language === "ko" ? "ko-KR" : "en-US", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(priceKrw);
}

