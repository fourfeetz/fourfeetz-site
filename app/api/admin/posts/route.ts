import { revalidatePath } from "next/cache";
import { isLegacyInsightSlug } from "@/lib/blog/legacy";
import { listAdminPosts, saveDraft } from "@/lib/blog/repository";
import { assertSameOrigin, errorResponse, readJson, requireAdmin } from "@/lib/blog/security";
import { validatePostInput } from "@/lib/blog/validation";

export async function GET() { try { await requireAdmin(); return Response.json({ posts: await listAdminPosts() }, { headers: { "Cache-Control": "no-store" } }); } catch (e) { return errorResponse(e); } }
export async function POST(request: Request) {
  try {
    assertSameOrigin(request); await requireAdmin(); const input = validatePostInput(await readJson(request));
    if (isLegacyInsightSlug(input.slug)) return Response.json({ error: "LEGACY_SLUG_CONFLICT" }, { status: 409 });
    const post = await saveDraft({ ...input, draft: { markdown: input.markdown } });
    revalidatePath("/ko/insights");
    return Response.json({ post });
  } catch (e) { return errorResponse(e); }
}
