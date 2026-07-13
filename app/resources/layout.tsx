import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Resources", description: "Download prompt libraries, workflow guides, templates, and practical resources for AI creative production.", path: "/resources", image: "/images/resources-hero.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
