import { NextRequest, NextResponse } from "next/server";
import { assertSameOriginMutation, readBoundedJsonObject, storeApiResponse, storeRequestErrorResponse } from "@/lib/store/api-security";
import { createDownloadAccess } from "@/lib/store/download-access";
import { NeonOrderRepository } from "@/lib/store/neon-repository";
import { getPaidAsset } from "@/lib/store/paid-assets";
import { confirmPayment } from "@/lib/store/payment";
import { capturePayPalSandboxOrder, paypalCheckoutCookie, paypalOrderIdPattern, validPayPalCheckoutProof } from "@/lib/store/paypal";
import { getPaymentReadiness } from "@/lib/store/readiness";

export async function POST(request: NextRequest) {
  if (!getPaymentReadiness().paypalSandbox) return storeApiResponse("PAYMENT_CONFIRMATION_UNAVAILABLE", 503);

  let body: Record<string, unknown>;
  try {
    assertSameOriginMutation(request);
    body = await readBoundedJsonObject(request);
  } catch (error) {
    return storeRequestErrorResponse(error);
  }

  const paypalOrderId = body.token;
  if (typeof paypalOrderId !== "string" || !paypalOrderIdPattern.test(paypalOrderId)) {
    return storeApiResponse("INVALID_PAYMENT_REQUEST", 400);
  }
  const [orderNumber, proof] = request.cookies.get(paypalCheckoutCookie(paypalOrderId))?.value.split(".") ?? [];
  if (!orderNumber || !/^FF-\d{8}-[A-F0-9]{24}$/.test(orderNumber)
      || !validPayPalCheckoutProof(proof, orderNumber, paypalOrderId)) {
    return storeApiResponse("INVALID_PAYMENT_REQUEST", 400);
  }

  const repository = new NeonOrderRepository();
  try {
    const order = await repository.findOrder(orderNumber);
    if (!order || order.provider !== "PAYPAL" || order.currency !== "USD" || order.locale !== "en"
        || (order.status !== "PENDING" && order.status !== "PAID") || !getPaidAsset(order.productId, "en")) {
      return storeApiResponse("PAYMENT_VERIFICATION_FAILED", 409);
    }

    const captureId = await capturePayPalSandboxOrder(paypalOrderId, order);
    if (!captureId) return storeApiResponse("PAYMENT_VERIFICATION_FAILED", 409);
    await confirmPayment({
      orderNumber, amount: order.amount, currency: "USD", providerPaymentId: `paypal-sandbox:${captureId}`,
      providerEventId: `paypal-sandbox:capture:${captureId}`, providerVerified: true,
    }, repository);

    const entitlement = await repository.findEntitlement(orderNumber, order.productId);
    if (!entitlement || entitlement.revokedAt || new Date(entitlement.expiresAt).getTime() <= Date.now()) {
      return storeApiResponse("DOWNLOAD_UNAVAILABLE", 409);
    }

    const access = createDownloadAccess(order.id, order.productId, "en", entitlement.expiresAt);
    await repository.createDownloadAccessToken(access.record);
    const downloadUrl = `/api/store/downloads/${orderNumber}`;
    const response = NextResponse.json({ orderNumber, downloadUrl }, { headers: { "Cache-Control": "no-store" } });
    response.cookies.set("ff_store_download", access.rawToken, {
      path: downloadUrl, httpOnly: true, sameSite: "strict", secure: request.nextUrl.protocol === "https:", expires: new Date(entitlement.expiresAt),
    });
    return response;
  } catch {
    return storeApiResponse("PAYMENT_CONFIRMATION_FAILED", 502);
  }
}
