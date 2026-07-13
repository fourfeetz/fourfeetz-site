import type { Metadata } from "next";

const siteName = "FourFeetz Studios";
const defaultImage = "/images/studio-hero.png";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({ title, description, path, image = defaultImage }: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url: path,
      images: [{ url: image, alt: `${title} | ${siteName}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
