import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Works", description: "Explore original AI films, production details, behind-the-scenes workflows, and creative projects from FourFeetz Studios.", path: "/works", image: "/images/works-hero.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
