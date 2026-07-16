import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShortDetailPage from "@/components/ShortDetailPage";
import { getShort, shorts } from "@/data/shorts";

type ShortPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return shorts.map((short) => ({ slug: short.slug }));
}

export async function generateMetadata({ params }: ShortPageProps): Promise<Metadata> {
  const { slug } = await params;
  const short = getShort(slug);
  if (!short) return {};

  const title = `${short.title} | FourFeetz`;
  const canonical = `https://www.fourfeetz.com/shorts/${short.slug}`;

  return {
    title: { absolute: title },
    description: short.description,
    alternates: { canonical },
    openGraph: {
      type: "video.other",
      siteName: "FourFeetz Studios",
      title,
      description: short.description,
      url: canonical,
      ...(short.poster ? { images: [{ url: short.poster, alt: `${short.title} thumbnail` }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: short.description,
      ...(short.poster ? { images: [short.poster] } : {}),
    },
  };
}

export default async function Page({ params }: ShortPageProps) {
  const { slug } = await params;
  const short = getShort(slug);
  if (!short) notFound();

  return <ShortDetailPage short={short} />;
}
