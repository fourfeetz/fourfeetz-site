export const petServiceSlugs = [
  "personal-pet-video",
  "pet-memorial-video",
  "pet-video",
  "grooming-hotel",
  "pet-products",
  "veterinary",
  "pet-funeral",
] as const;

export type PetServiceSlug = (typeof petServiceSlugs)[number];
export type PetIndustrySlug = Exclude<PetServiceSlug, "pet-video" | "personal-pet-video" | "pet-memorial-video">;

export const videoPricingPackages = [
  { name: "STANDARD", price: "99,000원", rootFeatures: ["AI 맞춤 영상 1장면", "1장면 중심의 최대 15초 영상", "16:9 또는 9:16 중 한 가지", "배경음악", "간단한 문구", "Full HD", "제공 개수 1개", "작업일 4일", "수정 1회"], detailFeatures: ["1장면", "최대 15초", "9:16 또는 16:9 중 한 가지", "배경음악·간단한 문구", "수정 1회", "작업일 4일"] },
  { name: "DELUXE", price: "199,000원", rootFeatures: ["AI 스토리 영상 2장면", "2장면 구성의 최대 30초 영상", "16:9 또는 9:16 중 한 가지", "배경음악", "간단한 문구", "Full HD", "제공 개수 1개", "작업일 7일", "수정 2회"], detailFeatures: ["2장면", "최대 30초", "9:16 또는 16:9 중 한 가지", "배경음악·간단한 문구", "수정 2회", "작업일 7일"] },
  { name: "PREMIUM", price: "299,000원", rootFeatures: ["AI 스토리 영상 3장면 이상", "3장면 이상의 최대 45초 영상", "16:9 또는 9:16 중 한 가지", "배경음악", "간단한 문구", "Full HD", "제공 개수 1개", "작업일 10일", "수정 3회"], detailFeatures: ["3장면 이상", "최대 45초", "9:16 또는 16:9 중 한 가지", "배경음악·간단한 문구", "수정 3회", "작업일 10일"] },
] as const;

export type PetIndustryService = { slug: PetIndustrySlug; cardTitle: string; cardDescription: string; cardBadge: string; title: string; description: string; image: string; imageAlt: string; imageLabel: string; eyebrow: string; intro: string; reasonTitle: string; reason: string[]; recommended: { title: string; description: string }[]; trustTitle: string; trust: string[]; channels: string[]; deliverables: string[]; process: { title: string; description: string }[]; faqs: { question: string; answer: string }[]; finalTitle: string; finalDescription: string; video?: { src:string; poster:string; label:string; note:string; duration:string; durationLabel:string; uploadDate:string }; additionalVideos?: { src:string; poster:string; label:string; note:string; duration:string; durationLabel:string; uploadDate:string }[] };

export const petIndustryServices: PetIndustryService[] = [];
export const getPetIndustryService = (slug: string) => petIndustryServices.find((service) => service.slug === slug);
export const petVideoLandingMetadata = { title: "반려동물 업체 AI 홍보영상 제작 | FourFeetz", description: "애견미용실, 펫호텔, 동물병원과 반려동물 브랜드를 위한 AI 홍보영상 제작 서비스입니다.", path: "/ko/services/pet-video", image: "/images/services/pet-grooming-hotel-cover.webp" };
