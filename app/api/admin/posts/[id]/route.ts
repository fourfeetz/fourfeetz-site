import { revalidatePath } from "next/cache";
import { getAdminPost, publishPost, saveDraft, unpublishPost } from "@/lib/blog/repository";
import { isLegacyInsightSlug } from "@/lib/blog/legacy";
import { assertSameOrigin, errorResponse, readJson, requireAdmin } from "@/lib/blog/security";
import { validatePostInput } from "@/lib/blog/validation";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) { try { await requireAdmin(); const post=await getAdminPost((await context.params).id); return post ? Response.json({post},{headers:{"Cache-Control":"no-store"}}) : new Response(null,{status:404}); } catch(e){return errorResponse(e);} }
export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try { assertSameOrigin(request); await requireAdmin(); const input=validatePostInput(await readJson(request)); if(isLegacyInsightSlug(input.slug)) return Response.json({error:"LEGACY_SLUG_CONFLICT"},{status:409}); const post=await saveDraft({...input,id:(await context.params).id,draft:{markdown:input.markdown}}); return Response.json({post}); } catch(e){return errorResponse(e);}
}
export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  try { assertSameOrigin(request); await requireAdmin(); const body=await readJson(request,4096); const id=(await context.params).id; const version=Number(body.version); const post=body.action==="publish"?await publishPost(id,version):body.action==="unpublish"?await unpublishPost(id,version):null; if(!post) return Response.json({error:"INVALID_ACTION"},{status:400}); revalidatePath("/ko/insights"); revalidatePath(`/ko/insights/${post.slug}`); revalidatePath("/sitemap.xml"); return Response.json({post}); } catch(e){return errorResponse(e);}
}
