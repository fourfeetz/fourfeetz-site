import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Terms of Use", description: "Read the terms governing access to FourFeetz Studios content, resources, characters, media, and website services.", path: "/terms" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
