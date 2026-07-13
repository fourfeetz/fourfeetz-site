import type { Metadata } from "next";
import ResourceDetailPage from "@/components/ResourceDetailPage";
import { getResource } from "@/lib/resourceDetails";

const resource = getResource("storyboard-planning-template")!;
export const metadata: Metadata = { title: "Storyboard Planning Template | FourFeetz Studios", description: resource.description, alternates: { canonical: "/resources/storyboard-planning-template" }, openGraph: { title: "Storyboard Planning Template | FourFeetz Studios", description: resource.description, images: [resource.image] }, twitter: { card: "summary_large_image", title: "Storyboard Planning Template | FourFeetz Studios", description: resource.description, images: [resource.image] } };
export default function Page() { return <ResourceDetailPage resource={resource} />; }
