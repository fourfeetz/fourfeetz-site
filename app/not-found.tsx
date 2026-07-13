import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found on FourFeetz Studios.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center px-6 py-20">
      <section className="mx-auto w-full max-w-7xl overflow-hidden rounded-[40px] border border-[#eadfce] bg-white px-8 py-16 text-center shadow-xl shadow-[#6f4e37]/10 md:px-16 md:py-24">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Error 404</p>
        <h1 className="mt-5 text-5xl font-black tracking-tight text-[#2b2119] md:text-7xl">Page Not Found</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">
          The page may have moved, or the address may be incomplete. Continue exploring the FourFeetz Studios universe from one of the links below.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/20 transition hover:bg-[#573b29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
            Home
          </Link>
          <Link href="/about" className="rounded-full border border-[#6f4e37]/40 bg-white px-7 py-4 font-black text-[#6f4e37] transition hover:border-[#6f4e37] hover:text-[#2b2119] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">
            About
          </Link>
        </div>
      </section>
    </main>
  );
}
