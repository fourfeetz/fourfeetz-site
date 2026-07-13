import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "FourFeetz Studios English", description: "FourFeetz Studios creates original AI films, characters, music, and creative knowledge for storytellers.", path: "/en" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
