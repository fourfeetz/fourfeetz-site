import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StoreProductPage from "@/components/store/StoreProductPage";
import { languageAlternates } from "@/lib/localization";
import { getStoreProduct, storeProductSlugs } from "@/lib/store";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return storeProductSlugs.map(slug => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const product = getStoreProduct(slug); if (!product) return {};
  const title = `${product.name.ko} | FourFeetz 스토어`; const description = product.shortDescription.ko; const englishPath = `/store/${slug}`; const path = `/ko/store/${slug}`;
  return { title: { absolute: title }, description, alternates: languageAlternates(englishPath, path), openGraph: { type: "website", siteName: "FourFeetz Studios", title, description, url: path, locale: "ko_KR", alternateLocale: ["en_US"], images: [{ url: product.image, alt: product.name.ko }] }, twitter: { card: "summary_large_image", title, description, images: [product.image] } };
}
export default async function Page({ params }: Props) { const product = getStoreProduct((await params).slug); if (!product) notFound(); return <StoreProductPage product={product} language="ko" />; }
