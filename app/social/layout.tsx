import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({ title: "Social Publishing Formats", description: "See how FourFeetz adapts films, shorts, production frames, and studio notes for different publishing formats.", path: "/social" }),
  robots: { index: false, follow: true },
};
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
