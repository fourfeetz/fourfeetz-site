import type { Metadata } from "next";
import WorksPortfolio from "@/components/WorksPortfolio";

export const metadata: Metadata = { title: "HARU - First Journey | FourFeetz Studios", description: "The complete film presentation, creative goals, AI production workflow, gallery, and making story for the first FourFeetz original short film.", alternates: { canonical: "/works/haru-first-journey" }, openGraph: { title: "HARU - First Journey | FourFeetz Studios", description: "Original AI short film and production story by FourFeetz Studios.", images: ["/images/works/haru-first-journey/hero.png"], type: "video.movie" }, twitter: { card: "summary_large_image", title: "HARU - First Journey", description: "Original AI short film and production story by FourFeetz Studios.", images: ["/images/works/haru-first-journey/hero.png"] } };
export default function Page() { return <WorksPortfolio heroImage="/images/works/haru-first-journey/detail-hero.png" />; }
