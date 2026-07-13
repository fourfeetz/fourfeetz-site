import type { Metadata } from "next";
import StaticInfoPage from "@/components/StaticInfoPage";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about FourFeetz Studios, an independent AI creative studio producing original films, characters, music, and practical creative knowledge.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <StaticInfoPage eyebrow="FourFeetz Studios" title="Stories made with imagination and AI." description="FourFeetz Studios is an independent AI creative studio building original films, characters, music, and practical knowledge for the next generation of storytellers." sections={[
    { title: "What We Create", paragraphs: ["We develop character-led AI films, short-form stories, original soundtracks, and editorial resources. Each project connects narrative, visual development, motion, sound, and publishing into one considered production system."] },
    { title: "Our Mission", paragraphs: ["Our mission is to make memorable original work while sharing clear, useful knowledge about the creative process. Technology changes quickly; strong characters, thoughtful stories, and careful craft remain at the center."] },
    { title: "Our Principles", items: ["Story comes before tools.", "Original characters deserve consistent worlds and thoughtful development.", "AI should expand creative possibility while remaining guided by human judgment.", "Production knowledge becomes more valuable when it is documented and shared."] },
  ]} cta={{ eyebrow: "Explore the Studio", title: "See how FourFeetz stories are made.", description: "Discover our creative process, current productions, and growing character universe.", href: "/studio", label: "Visit Studio" }} />;
}
