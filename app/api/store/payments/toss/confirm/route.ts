import { assertSameOriginMutation, readBoundedJsonObject, storeApiResponse, storeRequestErrorResponse } from "@/lib/store/api-security";
import { getPaymentReadiness } from "@/lib/store/readiness";
import { confirmPayment, StorePaymentError } from "@/lib/store/payment";
import { NeonOrderRepository } from "@/lib/store/neon-repository";
import { confirmTossPayment, getTossPayment } from "@/lib/store/toss";
import { getStoreProductById, type StoreLanguage } from "@/lib/store";
import { createDownloadAccess } from "@/lib/store/download-access";
import { getPaidAsset } from "@/lib/store/paid-assets";

export async function POST(request: Request) {
  try {
    assertSameOriginMutation(request);
  } catch (error) {
    return storeRequestErrorResponse(error);
  }

  const readiness = getPaymentReadiness();
  if (!readiness.tossSandbox) return storeApiResponse("PAYMENT_CONFIRMATION_UNAVAILABLE", 503, { "Retry-After": "60" });

  let body: Record<string, unknown>;
  try {
    body = await readBoundedJsonObject(request);
  } catch (error) {
    return storeRequestErrorResponse(error);
  }
  const paymentKey = typeof body.paymentKey === "string" && body.paymentKey.length <= 200 ? body.paymentKey : null;
  const orderId = typeof body.orderId === "string" && /^[A-Za-z0-9_-]{6,64}$/.test(body.orderId) ? body.orderId : null;
  const amount = typeof body.amount === "number" && Number.isSafeInteger(body.amount) && body.amount > 0 ? body.amount : null;
  const locale: StoreLanguage = body.locale === "ko" ? "ko" : "en";
  if (!paymentKey || !orderId || !amount) return storeApiResponse("INVALID_PAYMENT_REQUEST", 400);

  const repository = new NeonOrderRepository();
  try {
    const order = await repository.findOrder(orderId);
    if (!order || order.amount !== amount || order.currency !== "KRW" || order.provider !== "TOSS") return storeApiResponse("PAYMENT_VERIFICATION_FAILED", 409);
    if (order.status === "PAID" && order.providerPaymentId !== paymentKey) return storeApiResponse("PAYMENT_CONFLICT", 409);
    if (order.status !== "PENDING" && order.status !== "PAID") return storeApiResponse("PAYMENT_VERIFICATION_FAILED", 409);

    const providerPayment = await confirmTossPayment({ paymentKey, orderId, amount, idempotencyKey: order.id }).catch(async () => {
      // A timeout or repeated idempotent request can hide a completed approval response.
      // Re-querying is safe and is the provider-recommended recovery boundary.
      return getTossPayment(paymentKey);
    });
    if (providerPayment.paymentKey !== paymentKey || providerPayment.orderId !== orderId || providerPayment.totalAmount !== order.amount || providerPayment.currency !== order.currency || providerPayment.status !== "DONE") return storeApiResponse("PAYMENT_VERIFICATION_FAILED", 409);

    const result = await confirmPayment({ orderNumber: orderId, amount: providerPayment.totalAmount, currency: providerPayment.currency, providerPaymentId: providerPayment.paymentKey, providerEventId: `confirm:${providerPayment.paymentKey}`, providerVerified: true }, repository);
    const product = getStoreProductById(order.productId);
    const asset = order.locale ? getPaidAsset(order.productId, order.locale) : null;
    const entitlement = readiness.paidDownload && asset ? await repository.findEntitlement(orderId, order.productId) : null;
    let downloadUrl: string | null = null;
    let cookie: string | null = null;
    if (entitlement) {
      try {
        const access = createDownloadAccess(order.id, order.productId, order.locale!, entitlement.expiresAt);
        await repository.createDownloadAccessToken(access.record);
        downloadUrl = `/api/store/downloads/${encodeURIComponent(orderId)}`;
        const maxAge = Math.max(0, Math.floor((new Date(entitlement.expiresAt).getTime() - Date.now()) / 1000));
        const secure = process.env.VERCEL_ENV ? "; Secure" : "";
        cookie = `ff_store_download=${access.rawToken}; Path=${downloadUrl}; HttpOnly${secure}; SameSite=Strict; Max-Age=${maxAge}`;
      } catch {
        downloadUrl = null;
        cookie = null;
      }
    }
    const headers = new Headers({ "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
    if (cookie) headers.set("Set-Cookie", cookie);
    const responseLocale = order.locale ?? locale;
    return Response.json({ status: "PAID", duplicate: result.result === "duplicate", orderNumber: order.orderNumber, productName: product?.name[responseLocale] ?? null, amount: order.amount, currency: order.currency, downloadReady: Boolean(downloadUrl), downloadUrl, downloadExpiresAt: entitlement?.expiresAt ?? null }, { headers });
  } catch (error) {
    if (error instanceof StorePaymentError && error.code === "APPROVAL_CONFLICT") return storeApiResponse("PAYMENT_CONFLICT", 409);
    return storeApiResponse("PAYMENT_CONFIRMATION_FAILED", 502, { "Retry-After": "5" });
  }
}
