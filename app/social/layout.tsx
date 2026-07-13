import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Social Platforms", description: "Follow FourFeetz Studios films, characters, music, and creative updates across social platforms.", path: "/social" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
