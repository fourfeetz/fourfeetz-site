import ResourceDetailPage from "@/components/ResourceDetailPage";
import { createResourceMetadata, getResource } from "@/lib/resourceDetails";

const resource = getResource("image-to-video-prompt-framework")!;
export const metadata = createResourceMetadata(resource);
export default function Page() { return <ResourceDetailPage resource={resource} />; }
