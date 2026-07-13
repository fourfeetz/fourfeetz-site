import type { Metadata } from "next";
import ResourceDetailPage from "@/components/ResourceDetailPage";
import { getResource } from "@/lib/resourceDetails";

const resource = getResource("production-notes-template")!;
export const metadata: Metadata = { title: "FourFeetz Production Notes Template | FourFeetz Studios", description: resource.description, alternates: { canonical: "/resources/production-notes-template" }, openGraph: { title: "FourFeetz Production Notes Template | FourFeetz Studios", description: resource.description, images: [resource.image] }, twitter: { card: "summary_large_image", title: "FourFeetz Production Notes Template | FourFeetz Studios", description: resource.description, images: [resource.image] } };
export default function Page() { return <ResourceDetailPage resource={resource} />; }
