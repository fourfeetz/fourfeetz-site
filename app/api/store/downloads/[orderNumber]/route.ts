import { get } from "@vercel/blob";
import { storeApiResponse } from "@/lib/store/api-security";
import { verifyDownloadAccess } from "@/lib/store/download-access";
import { getPaidAsset } from "@/lib/store/paid-assets";
import { authorizeDownload } from "@/lib/store/payment";
import { NeonOrderRepository } from "@/lib/store/neon-repository";
import { getPaymentReadiness } from "@/lib/store/readiness";
import { randomUUID } from "node:crypto";

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
  const requestedAt = new Date().toISOString();
  let auditId: string | null = null;
  let authenticated = false;
  try {
    const access = await verifyDownloadAccess({ orderNumber, rawToken }, repository);
    await authorizeDownload({ orderNumber, productId: access.productId }, repository);
    const order = await repository.findOrder(orderNumber);
    if (!order || order.id !== access.orderId) return storeApiResponse("DOWNLOAD_NOT_FOUND", 404);
    authenticated = true;
    auditId = randomUUID();
    await repository.createDownloadAttempt({ id: auditId, orderId: order.id, productId: access.productId, locale: access.locale, requestedAt, authenticationSucceeded: true, refundPolicyVersion: order.refundPolicyVersion, refundPolicyConsentedAt: order.refundPolicyConsentedAt });
    const asset = getPaidAsset(access.productId, access.locale);
    if (!asset) {
      await repository.updateDownloadAttempt(auditId, "ASSET_UNAVAILABLE");
      return storeApiResponse("DOWNLOAD_NOT_FOUND", 404);
    }
    const blob = await get(asset.pathname, { access: "private" });
    if (!blob || blob.statusCode !== 200 || blob.blob.contentType !== "application/pdf") {
      await repository.updateDownloadAttempt(auditId, "ASSET_UNAVAILABLE");
      return storeApiResponse("DOWNLOAD_NOT_FOUND", 404);
    }
    const transferStartedAt = new Date().toISOString();
    await repository.updateDownloadAttempt(auditId, "STREAM_STARTED", transferStartedAt);
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
    if (auditId) await repository.updateDownloadAttempt(auditId, "SERVER_ERROR").catch(() => undefined);
    else if (!authenticated) await repository.recordDeniedDownloadAttempt(orderNumber, requestedAt).catch(() => undefined);
    return storeApiResponse("DOWNLOAD_NOT_FOUND", 404);
  }
}
