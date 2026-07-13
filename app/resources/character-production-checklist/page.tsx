import type { Metadata } from "next";
import ResourceDetailPage from "@/components/ResourceDetailPage";
import { getResource } from "@/lib/resourceDetails";

const resource = getResource("character-production-checklist")!;
export const metadata: Metadata = { title: "Character Production Checklist | FourFeetz Studios", description: resource.description, alternates: { canonical: "/resources/character-production-checklist" }, openGraph: { title: "Character Production Checklist | FourFeetz Studios", description: resource.description, images: [resource.image] }, twitter: { card: "summary_large_image", title: "Character Production Checklist | FourFeetz Studios", description: resource.description, images: [resource.image] } };
export default function Page() { return <ResourceDetailPage resource={resource} />; }
