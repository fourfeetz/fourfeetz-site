import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "HARU Character", description: "Meet HARU, the first original FourFeetz Studios character created for AI films and character-led media.", path: "/animals/haru", image: "/images/characters/haru/portrait.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
