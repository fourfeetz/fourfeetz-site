import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "AI Studio", description: "Explore the FourFeetz Studios AI filmmaking process, creative tools, character workflows, and production experiments.", path: "/ai-studio" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
