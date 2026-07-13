import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "AI Video Workflow Resource", description: "Use a practical AI video workflow for planning, generating, editing, and publishing creative productions.", path: "/resources/ai-video-workflow", image: "/images/resources/ai-short-film-workflow.png" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
