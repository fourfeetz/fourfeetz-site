import type { Metadata } from "next";
import ResourcesLibrary from "@/components/ResourcesLibrary";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: "Resources | FourFeetz Studios",
  description: "Free AI video prompts, workflows, templates, checklists, and production resources from FourFeetz Studios.",
  alternates: englishLanguageAlternates("/resources", "/ko/resources"),
};

export default function Page() {
  return <ResourcesLibrary />;
}
