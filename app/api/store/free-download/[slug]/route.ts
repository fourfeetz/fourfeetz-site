import { readFile } from "node:fs/promises";
import path from "node:path";
import { getStoreProduct } from "@/lib/store";
import { canServeFreeDownload } from "@/lib/store/readiness";
import { createEnglishFreeGuidePdf } from "@/lib/store/free-english-pdf";

export const runtime = "nodejs";

export async function GET(request: Request, context: RouteContext<"/api/store/free-download/[slug]">) {
  const { slug } = await context.params;
  const product = getStoreProduct(slug);
  if (!product?.freeAsset || !canServeFreeDownload()) return new Response("Not found", { status: 404, headers: { "Cache-Control": "private, no-store" } });
  const language = new URL(request.url).searchParams.get("lang") === "en" ? "en" : "ko";
  if (language === "en") {
    const file = await createEnglishFreeGuidePdf();
    return new Response(file, { headers: { "Content-Type": "application/pdf", "Content-Length": String(file.byteLength), "Content-Disposition": 'attachment; filename="FourFeetz_Free_AI_Pet_Video_Starter_Guide_EN_v3.pdf"', "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff", "Cross-Origin-Resource-Policy": "same-origin", "Content-Security-Policy": "sandbox" } });
  }
  const pdfPath = path.join(process.cwd(), "output", "pdf", "free-pet-video-prompt-v1.pdf");
  const file = await readFile(pdfPath).catch(() => null);
  if (!file) return new Response("Not found", { status: 404, headers: { "Cache-Control": "private, no-store" } });
  return new Response(file, { headers: { "Content-Type": product.freeAsset.mimeType, "Content-Length": String(file.byteLength), "Content-Disposition": `attachment; filename="${product.freeAsset.filename}"`, "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff", "Cross-Origin-Resource-Policy": "same-origin", "Content-Security-Policy": "sandbox" } });
}
