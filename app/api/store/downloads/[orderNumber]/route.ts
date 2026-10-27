import { get } from "@vercel/blob";
import { storeApiResponse } from "@/lib/store/api-security";
import { verifyDownloadAccess } from "@/lib/store/download-access";
import { getPaidAsset } from "@/lib/store/paid-assets";
import { authorizeDownload } from "@/lib/store/payment";
import { NeonOrderRepository } from "@/lib/store/neon-repository";
import { getPaymentReadiness } from "@/lib/store/readiness";

function readCookie(request: Request, name: string) {
  const pair = request.headers.get("cookie")?.split(";").map((value) => value.trim()).find((value) => value.startsWith(`${name}=`));
  return pair?.slice(name.length + 1) ?? null;
}

export async function GET(request: Request, { params }: { params: Promise<{ orderNumber: string }> }) {
  if (!getPaymentReadiness().paidDownload) return storeApiResponse("DOWNLOAD_UNAVAILABLE", 503, { "Retry-After": "60" });
  const { orderNumber } = await params;
  const rawToken = readCookie(request, "ff_store_download");
  if (!/^[A-Za-z0-9_-]{6,64}$/.test(orderNumber) || !rawToken) return storeApiResponse("DOWNLOAD_NOT_FOUND", 404);
  const repository = new NeonOrderRepository();
  try {
    const access = await verifyDownloadAccess({ orderNumber, rawToken }, repository);
    await authorizeDownload({ orderNumber, productId: access.productId }, repository);
    const asset = getPaidAsset(access.productId, access.locale);
    if (!asset) return storeApiResponse("DOWNLOAD_NOT_FOUND", 404);
    const blob = await get(asset.pathname, { access: "private" });
    if (!blob || blob.statusCode !== 200 || blob.blob.contentType !== "application/pdf") return storeApiResponse("DOWNLOAD_NOT_FOUND", 404);
    return new Response(blob.stream, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${asset.filename}"`,
        "Content-Length": String(blob.blob.size),
        "Cache-Control": "private, no-store, max-age=0",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "no-referrer",
      },
    });
  } catch {
    return storeApiResponse("DOWNLOAD_NOT_FOUND", 404);
  }
}
