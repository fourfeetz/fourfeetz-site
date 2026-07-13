import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "How HARU Was Created", description: "See how FourFeetz Studios designed HARU and built a consistent original character for AI film production.", path: "/insights/how-haru-was-created", image: "/images/insights/haru-character-sheet.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
