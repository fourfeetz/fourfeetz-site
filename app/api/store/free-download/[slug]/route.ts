import { readFile } from "node:fs/promises";
import path from "node:path";
import { getStoreProduct } from "@/lib/store";
import { canServeFreeDownload } from "@/lib/store/readiness";

export const runtime = "nodejs";

export async function GET(request: Request, context: RouteContext<"/api/store/free-download/[slug]">) {
  const { slug } = await context.params;
  const product = getStoreProduct(slug);
  if (!product?.freeAsset || !canServeFreeDownload()) return new Response("Not found", { status: 404, headers: { "Cache-Control": "private, no-store" } });
  const language = new URL(request.url).searchParams.get("lang") === "en" ? "en" : "ko";
  const filename = language === "en" ? "free-pet-video-prompt-en-v1.pdf" : product.freeAsset.filename;
  const pdfPath = path.join(process.cwd(), "output", "pdf", filename);
  const file = await readFile(pdfPath).catch(() => null);
  if (!file) return new Response("Not found", { status: 404, headers: { "Cache-Control": "private, no-store" } });
  return new Response(file, { headers: { "Content-Type": product.freeAsset.mimeType, "Content-Length": String(file.byteLength), "Content-Disposition": `attachment; filename="${filename}"`, "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff", "Cross-Origin-Resource-Policy": "same-origin", "Content-Security-Policy": "sandbox" } });
}
