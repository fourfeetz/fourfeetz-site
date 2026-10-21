import type { Metadata } from "next";
import { EnglishMemorialServicePage } from "@/components/EnglishPetServicePages";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: { absolute: "Pet Memorial Video Production | FourFeetz" },
  description: "A gentle custom pet memorial video service, shaped around the photos, stories and memories you want to keep close.",
  alternates: englishLanguageAlternates("/services/pet-memorial-video", "/ko/services/pet-memorial-video"),
  openGraph: { type: "website", siteName: "FourFeetz Studios", title: "Pet Memorial Video Production | FourFeetz", description: "Warm, respectful pet memorial films created from cherished photos and memories.", url: "/services/pet-memorial-video", images: [{ url: "/images/services/pet-memorial-0914-cover.jpg", alt: "FourFeetz pet memorial film" }] },
};

export default function Page() {
  return <EnglishMemorialServicePage />;
}
