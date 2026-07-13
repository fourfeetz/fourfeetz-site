import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "About", description: "Learn about FourFeetz Studios, an independent AI creative studio producing original films, characters, music, and practical creative knowledge.", path: "/about" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
