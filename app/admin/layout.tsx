import type { Metadata } from "next";
export const metadata: Metadata = { title: "FourFeetz 관리자", robots: { index: false, follow: false, noarchive: true, nocache: true } };
export default function AdminLayout({children}:{children:React.ReactNode}) { return <div className="min-h-screen bg-[#f7f0e7]">{children}</div>; }
