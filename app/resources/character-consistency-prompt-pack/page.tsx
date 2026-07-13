import type { Metadata } from "next";
import ResourceDetailPage from "@/components/ResourceDetailPage";
import { getResource } from "@/lib/resourceDetails";

const resource = getResource("character-consistency-prompt-pack")!;
export const metadata: Metadata = { title: "Character Consistency Prompt Pack | FourFeetz Studios", description: resource.description, alternates: { canonical: "/resources/character-consistency-prompt-pack" }, openGraph: { title: "Character Consistency Prompt Pack | FourFeetz Studios", description: resource.description, images: [resource.image] }, twitter: { card: "summary_large_image", title: "Character Consistency Prompt Pack | FourFeetz Studios", description: resource.description, images: [resource.image] } };
export default function Page() { return <ResourceDetailPage resource={resource} />; }
