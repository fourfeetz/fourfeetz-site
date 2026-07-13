import type { Metadata } from "next";
import ResourceDetailPage from "@/components/ResourceDetailPage";
import { getResource } from "@/lib/resourceDetails";

const resource = getResource("vertical-video-reframing-guide")!;
export const metadata: Metadata = { title: "16:9 to 9:16 Reframing Guide | FourFeetz Studios", description: resource.description, alternates: { canonical: "/resources/vertical-video-reframing-guide" }, openGraph: { title: "16:9 to 9:16 Reframing Guide | FourFeetz Studios", description: resource.description, images: [resource.image] }, twitter: { card: "summary_large_image", title: "16:9 to 9:16 Reframing Guide | FourFeetz Studios", description: resource.description, images: [resource.image] } };
export default function Page() { return <ResourceDetailPage resource={resource} />; }
