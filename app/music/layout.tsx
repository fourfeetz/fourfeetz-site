import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Music", description: "Listen to original soundtracks and explore AI-assisted music production for the FourFeetz story universe.", path: "/music", image: "/images/music-hero.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
