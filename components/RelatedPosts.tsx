"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { getRelatedContent } from "@/lib/contentIndex";

export default function RelatedPosts() {
  const pathname = usePathname();
  const related = getRelatedContent(pathname, 4);

  if (!related.length) return null;

  return (
    <section aria-labelledby="related-posts-title" className="border-t border-[#eadfce] bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">Continue Exploring</p>
        <h2 id="related-posts-title" className="mt-3 text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Related Posts</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <Link key={item.href} href={item.href} aria-label={`Open related post: ${item.title}`} className="group flex min-h-56 flex-col rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition duration-200 hover:-translate-y-[3px] hover:shadow-lg hover:shadow-[#6f4e37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a67c52]">{item.type}</p>
                <ArrowRight size={18} className="text-[#a67c52] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-black leading-snug text-[#2b2119]">{item.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#76685d]">{item.description}</p>
              <p className="mt-auto pt-6 text-xs font-bold text-[#9a8775]">{item.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
