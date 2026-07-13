import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Characters", description: "Meet HARU, PORI, LUNA, HUGO, OLI, and MILO in the original FourFeetz character universe.", path: "/characters", image: "/images/characters-hero.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
