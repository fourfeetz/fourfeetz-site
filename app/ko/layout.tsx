import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "FourFeetz Studios Korea", description: "FourFeetz Studios creates original AI films, characters, music, and practical creative knowledge.", path: "/ko" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
