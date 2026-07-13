import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Worldbuilding Archive", description: "Explore locations, visual references, and worldbuilding notes for future FourFeetz Studios stories.", path: "/travel" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
