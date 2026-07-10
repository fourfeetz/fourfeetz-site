import type { Metadata } from "next";
import ResourcesLibrary from "@/components/ResourcesLibrary";

export const metadata: Metadata = {
  title: "Resources | FourFeetz Studios",
  description: "Free AI video prompts, workflows, templates, checklists, and production resources from FourFeetz Studios.",
};

export default function Page() {
  return <ResourcesLibrary />;
}
