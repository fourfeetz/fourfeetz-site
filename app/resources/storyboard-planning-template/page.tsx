import ResourceDetailPage from "@/components/ResourceDetailPage";
import { createResourceMetadata, getResource } from "@/lib/resourceDetails";

const resource = getResource("storyboard-planning-template")!;
export const metadata = createResourceMetadata(resource);
export default function Page() { return <ResourceDetailPage resource={resource} />; }
