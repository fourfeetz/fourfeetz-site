import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PetIndustryServicePage, PetVideoLandingPage } from "@/components/korean/PetBusinessServicePages";
import PersonalPetServicePage from "@/components/korean/PersonalPetServicePage";
import {
  getPetIndustryService,
  petServiceSlugs,
  petVideoLandingMetadata,
} from "@/lib/petBusinessServices";

const baseUrl = "https://fourfeetz.com";

type Props = { params: Promise<{ service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return petServiceSlugs.map((service) => ({ service }));
}

function pageMetadata(title: string, description: string, path: string, image: string): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "FourFeetz Studios",
      title,
      description,
      url: path,
      locale: "ko_KR",
      images: [{ url: image, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  if (slug === "pet-video") {
    return pageMetadata(
      petVideoLandingMetadata.title,
      petVideoLandingMetadata.description,
      petVideoLandingMetadata.path,
      petVideoLandingMetadata.image,
    );
  }
  if (slug === "personal-pet-video") {
    return pageMetadata(
      "My Pet Story | 반려동물 맞춤 영상·디지털 작품 | FourFeetz",
      "My Pet Story는 반려동물 사진과 이야기를 감성 영상, 기념·추모 이야기와 디지털 작품으로 완성하는 FourFeetz의 개인 고객 서비스입니다.",
      "/ko/services/personal-pet-video",
      "/images/shorts/haru-luna/haru-luna-rainy-evening-vertical-v2-poster.webp",
    );
  }

  const service = getPetIndustryService(slug);
  if (!service) return {};
  const path = `/ko/services/${service.slug}`;
  return pageMetadata(`${service.title} | FourFeetz`, service.description, path, service.image);
}

export default async function Page({ params }: Props) {
  const { service: slug } = await params;
  const service = getPetIndustryService(slug);
  const currentTitle = slug === "pet-video"
    ? "반려동물 업체용 콘텐츠"
    : slug === "personal-pet-video"
      ? "My Pet Story"
      : service?.cardTitle;
  const breadcrumb = currentTitle ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: `${baseUrl}/ko` },
      { "@type": "ListItem", position: 2, name: "서비스", item: `${baseUrl}/ko/services` },
      { "@type": "ListItem", position: 3, name: currentTitle, item: `${baseUrl}/ko/services/${slug}` },
    ],
  } : null;
  const breadcrumbScript = breadcrumb ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} /> : null;

  if (slug === "pet-video") return <>{breadcrumbScript}<PetVideoLandingPage /></>;
  if (slug === "personal-pet-video") return <>{breadcrumbScript}<PersonalPetServicePage /></>;

  if (!service) notFound();

  const videoObject = service.video
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: service.video.label,
        description: "애견미용실과 반려동물 호텔의 분위기와 서비스를 소개하는 FourFeetz AI 세로형 SNS 홍보영상 포트폴리오 샘플입니다.",
        thumbnailUrl: `${baseUrl}${service.video.poster}`,
        uploadDate: service.video.uploadDate,
        duration: service.video.duration,
        contentUrl: `${baseUrl}${service.video.src}`,
      }
    : null;

  return (
    <>
      {breadcrumbScript}
      {videoObject ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObject).replace(/</g, "\\u003c") }}
        />
      ) : null}
      <PetIndustryServicePage service={service} />
    </>
  );
}
