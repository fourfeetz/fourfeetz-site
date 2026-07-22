import type { Metadata } from "next";
import FilmsIndex from "@/components/FilmsIndex";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Films",
  description:
    "Explore original AI films, production details, behind-the-scenes workflows, and creative projects from FourFeetz Studios.",
  path: "/films",
  image: "/images/works-hero-v2.png",
});

export default function Page() {
  return <FilmsIndex />;
}
