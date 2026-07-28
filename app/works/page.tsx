import type { Metadata } from "next";
import FilmsIndex from "@/components/FilmsIndex";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: "Works | FourFeetz Studios",
  description:
    "Original AI films, behind-the-scenes workflows, production details and creative process from FourFeetz Studios.",
  alternates: englishLanguageAlternates("/works", "/ko/films"),
};

export default function Page() {
  return <FilmsIndex />;
}
