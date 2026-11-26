import type { Metadata } from "next";
import PetCelebrationPage from "@/components/PetCelebrationPage";
import { englishLanguageAlternates } from "@/lib/localization";

const title = "Pet Celebration Videos | Birthdays & Adoption Days | FourFeetz";
const description = "Celebrate your pet’s birthday, adoption anniversary or a family milestone with a custom AI film inspired by your photos.";
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: englishLanguageAlternates("/services/pet-celebration-video", "/ko/services/pet-celebration-video"),
  openGraph: { type: "website", siteName: "FourFeetz Studios", title, description, url: "/services/pet-celebration-video", locale: "en_US", images: [{ url: "/images/services/pet-celebration-garden.jpg", alt: "Garden birthday party concept" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/services/pet-celebration-garden.jpg"] },
};

export default function Page() { return <PetCelebrationPage language="en" />; }

