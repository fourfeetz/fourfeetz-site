import type { Metadata } from "next";
import WorksPortfolio from "@/components/WorksPortfolio";

export const metadata: Metadata = {
  title: "Works | FourFeetz Studios",
  description:
    "Original AI films, behind-the-scenes workflows, production details and creative process from FourFeetz Studios.",
};

export default function Page() {
  return <WorksPortfolio />;
}
