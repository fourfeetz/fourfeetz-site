import { notFound } from "next/navigation";
import ToolPage, { toolMetadata } from "@/components/creator-tools/ToolPage";
import { getCreatorTool, toolSlugs } from "@/lib/creator-tools/content";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return toolSlugs.map(slug => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const tool = getCreatorTool((await params).slug);
  return tool ? toolMetadata(tool, "ko") : {};
}
export default async function Page({ params }: Props) {
  const tool = getCreatorTool((await params).slug);
  if (!tool) notFound();
  return <ToolPage tool={tool} language="ko" />;
}
