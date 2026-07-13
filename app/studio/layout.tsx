import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Studio", description: "Discover FourFeetz Studios, an AI creative studio building original films, characters, music, and practical knowledge.", path: "/studio", image: "/images/studio-hero.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
