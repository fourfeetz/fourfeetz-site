import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarkdownContent from "@/components/blog/MarkdownContent";
import InsightsCategoryPage from "@/components/insights/InsightsCategoryPage";
import { KoreanInsightDetail } from "@/components/korean/KoreanPages";
import { getPublicPost } from "@/lib/blog/repository";
import { localizeInsightArticle } from "@/lib/insightLocalization";
import { insightGroups, isInsightGroup } from "@/lib/insightGroups";
import { getPublishedInsightArticles } from "@/lib/insights";

const base = "https://fourfeetz.com";
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (isInsightGroup(slug)) {
    const content = insightGroups[slug].ko;
    return { title: { absolute: content.title }, description: content.description, alternates: { canonical: `/ko/insights/${slug}` }, openGraph: { title: content.title, description: content.description, url: `/ko/insights/${slug}`, locale: "ko_KR", images: ["/images/insights-hero-v2.png"] } };
  }
  const post = await getPublicPost(slug);
  if (!post) {
    const legacy = getPublishedInsightArticles().find((item) => item.slug === slug);
    if (!legacy) return {};
    const localized = localizeInsightArticle(legacy, "ko");
    const path = `/ko/insights/${slug}`;
    return { title: { absolute: `${localized.title} | FourFeetz 인사이트` }, description: localized.description, robots: { index: false, follow: true }, alternates: { canonical: path }, openGraph: { type: "article", url: path, locale: "ko_KR", title: localized.title, description: localized.description, images: [legacy.image] }, twitter: { card: "summary_large_image", title: localized.title, description: localized.description, images: [legacy.image] } };
  }
  const path = `/ko/insights/${post.slug}`;
  return { title: { absolute: `${post.title} | FourFeetz 인사이트` }, description: post.summary, alternates: { canonical: path }, openGraph: { type: "article", url: path, locale: "ko_KR", title: post.title, description: post.summary, publishedTime: post.publishedAt ?? undefined, modifiedTime: post.updatedAt, images: post.heroImageUrl ? [{ url: post.heroImageUrl, alt: post.heroImageAlt ?? post.title }] : [] }, twitter: { card: "summary_large_image", title: post.title, description: post.summary, images: post.heroImageUrl ? [post.heroImageUrl] : [] } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (isInsightGroup(slug)) return <InsightsCategoryPage group={slug} language="ko" />;
  const post = await getPublicPost(slug);
  if (!post) {
    if (getPublishedInsightArticles().some((item) => item.slug === slug)) return <KoreanInsightDetail slug={slug} />;
    notFound();
  }
  const url = `${base}/ko/insights/${post.slug}`;
  const schema = { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.summary, inLanguage: "ko-KR", datePublished: post.publishedAt, dateModified: post.updatedAt, mainEntityOfPage: url, image: post.heroImageUrl ? [post.heroImageUrl] : undefined, author: { "@type": "Organization", name: "FourFeetz Studios" }, publisher: { "@type": "Organization", name: "FourFeetz Studios" } };
  return <main className="mx-auto max-w-3xl px-6 py-16"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><p className="text-sm font-black text-[#a67c52]">{post.category} · {post.tags.join(" · ")}</p><h1 className="mt-4 text-5xl font-black leading-tight">{post.title}</h1><p className="mt-6 text-xl leading-8 text-[#76685d]">{post.summary}</p><p className="mt-4 text-sm text-[#76685d]">발행 {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("ko-KR") : ""} · 수정 {new Date(post.updatedAt).toLocaleDateString("ko-KR")}</p>{post.heroImageUrl ? <img src={post.heroImageUrl} alt={post.heroImageAlt ?? ""} className="mt-8 w-full rounded-3xl" /> : null}<article className="mt-12"><MarkdownContent markdown={post.published.markdown} /></article></main>;
}
