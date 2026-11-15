import { NextResponse } from "next/server";
import { getStoreProduct } from "@/lib/store";
import { assertSameOriginMutation, readBoundedJsonObject, storeApiResponse, storeRequestErrorResponse } from "@/lib/store/api-security";
import { NeonOrderRepository } from "@/lib/store/neon-repository";
import { getPaidAsset } from "@/lib/store/paid-assets";
import { createPendingOrder } from "@/lib/store/payment";
import { createPayPalOrder, paypalCapturePath, paypalCheckoutCookie, paypalCheckoutProof } from "@/lib/store/paypal";
import { getPaymentReadiness } from "@/lib/store/readiness";
import { STORE_REFUND_POLICY_VERSION } from "@/lib/store/refund-policy";

export async function POST(request: Request) {
  const mode = getPaymentReadiness().paypalMode;
  if (!mode) return storeApiResponse("CHECKOUT_UNAVAILABLE", 503);

  let body: Record<string, unknown>;
  try {
    assertSameOriginMutation(request);
    body = await readBoundedJsonObject(request);
  } catch (error) {
    return storeRequestErrorResponse(error);
  }

  const product = body.productSlug === "pet-video-starter-pack" ? getStoreProduct(body.productSlug) : null;
  if (!product || !getPaidAsset(product.id, "en")) return storeApiResponse("PRODUCT_UNAVAILABLE", 409);
  if (body.refundPolicyAccepted !== true || body.refundPolicyVersion !== STORE_REFUND_POLICY_VERSION) {
    return storeApiResponse("REFUND_POLICY_CONSENT_REQUIRED", 400);
  }

  const origin = new URL(request.url).origin;
  try {
    const order = await createPendingOrder({
      product: { id: product.id, slug: product.slug, price: Math.round(product.priceUsd * 100), currency: "USD", checkoutEnabled: true },
      provider: "PAYPAL",
      locale: "en",
      refundPolicyAccepted: true,
      refundPolicyVersion: STORE_REFUND_POLICY_VERSION,
    }, new NeonOrderRepository());
    const paypal = await createPayPalOrder(order, origin, mode);
    const response = NextResponse.json({ approvalUrl: paypal.approvalUrl }, { status: 201, headers: { "Cache-Control": "no-store" } });
    response.cookies.set(paypalCheckoutCookie(paypal.id), `${order.orderNumber}.${paypalCheckoutProof(order.orderNumber, paypal.id, mode)}`, {
      path: paypalCapturePath, httpOnly: true, sameSite: "strict", secure: origin.startsWith("https:"), maxAge: 3600,
    });
    return response;
  } catch {
    return storeApiResponse("CHECKOUT_UNAVAILABLE", 502);
  }
}
