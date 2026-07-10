import type { Metadata } from "next";
import InsightsHub from "@/components/InsightsHub";

export const metadata: Metadata = {
  title: "Insights | FourFeetz Studios",
  description:
    "Practical AI video guides, music workflows, tool comparisons, prompts, and behind-the-scenes production knowledge from FourFeetz Studios.",
};

export default function Page() {
  return <InsightsHub />;
}
