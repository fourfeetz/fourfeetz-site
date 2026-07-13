import type { Metadata } from "next";
import ResourceDetailPage from "@/components/ResourceDetailPage";
import { getResource } from "@/lib/resourceDetails";

const resource = getResource("ai-short-film-workflow")!;
export const metadata: Metadata = { title: "AI Short Film Workflow | FourFeetz Studios", description: resource.description, alternates: { canonical: "/resources/ai-short-film-workflow" }, openGraph: { title: "AI Short Film Workflow | FourFeetz Studios", description: resource.description, images: [resource.image] }, twitter: { card: "summary_large_image", title: "AI Short Film Workflow | FourFeetz Studios", description: resource.description, images: [resource.image] } };
export default function Page() { return <ResourceDetailPage resource={resource} />; }
