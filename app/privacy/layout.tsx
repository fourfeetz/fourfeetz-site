import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ title: "Privacy Policy", description: "Read the FourFeetz Studios privacy policy and learn how information is collected, used, protected, and managed.", path: "/privacy" });
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
