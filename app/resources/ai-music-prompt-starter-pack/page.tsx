import type { Metadata } from "next";
import ResourceDetailPage from "@/components/ResourceDetailPage";
import { getResource } from "@/lib/resourceDetails";

const resource = getResource("ai-music-prompt-starter-pack")!;
export const metadata: Metadata = { title: "AI Music Prompt Starter Pack | FourFeetz Studios", description: resource.description, alternates: { canonical: "/resources/ai-music-prompt-starter-pack" }, openGraph: { title: "AI Music Prompt Starter Pack | FourFeetz Studios", description: resource.description, images: [resource.image] }, twitter: { card: "summary_large_image", title: "AI Music Prompt Starter Pack | FourFeetz Studios", description: resource.description, images: [resource.image] } };
export default function Page() { return <ResourceDetailPage resource={resource} />; }
