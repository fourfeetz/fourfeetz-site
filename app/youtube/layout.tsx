import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "FourFeetz Video", description: "Watch FourFeetz Studios films, shorts, production stories, and character-led creative content.", path: "/youtube" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
