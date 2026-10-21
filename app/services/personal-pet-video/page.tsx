import type { Metadata } from "next";
import { EnglishPersonalPetServicePage } from "@/components/EnglishPetServicePages";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: { absolute: "My Pet Story | Custom Pet Videos | FourFeetz" },
  description: "My Pet Story turns your pet's photos and memories into a warm, custom video for celebrations, everyday memories and meaningful gifts.",
  alternates: englishLanguageAlternates("/services/personal-pet-video", "/ko/services/personal-pet-video"),
  openGraph: { type: "website", siteName: "FourFeetz Studios", title: "My Pet Story | Custom Pet Videos | FourFeetz", description: "Custom pet videos shaped around your photos, stories and the moments you want to keep.", url: "/services/personal-pet-video", images: [{ url: "/images/services/my-pet-story-haru-pori-garden.webp", alt: "FourFeetz My Pet Story scene" }] },
};

export default function Page() {
  return <EnglishPersonalPetServicePage />;
}
