import type { Metadata } from "next";
import ResourceDetailPage from "@/components/ResourceDetailPage";
import { getResource } from "@/lib/resourceDetails";

const resource = getResource("image-to-video-prompt-framework")!;
export const metadata: Metadata = { title: "Image-to-Video Prompt Framework | FourFeetz Studios", description: resource.description, alternates: { canonical: "/resources/image-to-video-prompt-framework" }, openGraph: { title: "Image-to-Video Prompt Framework | FourFeetz Studios", description: resource.description, images: [resource.image] }, twitter: { card: "summary_large_image", title: "Image-to-Video Prompt Framework | FourFeetz Studios", description: resource.description, images: [resource.image] } };
export default function Page() { return <ResourceDetailPage resource={resource} />; }
