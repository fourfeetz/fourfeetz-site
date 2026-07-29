import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PracticalResourcePage from "@/components/resources/PracticalResourcePage";
import {
  createPracticalResourceMetadata,
  getPracticalResource,
  isPracticalResourceSlug,
  practicalResourceSlugs,
} from "@/lib/practicalResources";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return practicalResourceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isPracticalResourceSlug(slug)) return {};
  return createPracticalResourceMetadata(slug, "en");
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const resource = getPracticalResource(slug);
  if (!resource) notFound();
  return <PracticalResourcePage resource={resource} language="en" />;
}
