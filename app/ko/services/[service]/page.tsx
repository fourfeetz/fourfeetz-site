import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PetIndustryServicePage, PetVideoLandingPage } from "@/components/korean/PetBusinessServicePages";
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

  const service = getPetIndustryService(slug);
  if (!service) return {};
  const path = `/ko/services/${service.slug}`;
  return pageMetadata(`${service.title} | FourFeetz`, service.description, path, service.image);
}

export default async function Page({ params }: Props) {
  const { service: slug } = await params;
  if (slug === "pet-video") return <PetVideoLandingPage />;

  const service = getPetIndustryService(slug);
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
