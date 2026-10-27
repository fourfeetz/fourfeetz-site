import { getStoreProduct } from "@/lib/store";
import { assertSameOriginMutation, readBoundedJsonObject, storeApiResponse, storeRequestErrorResponse } from "@/lib/store/api-security";
import { getPaymentReadiness } from "@/lib/store/readiness";
import { createPendingOrder } from "@/lib/store/payment";
import { NeonOrderRepository } from "@/lib/store/neon-repository";

export async function POST(request: Request) {
  try {
    assertSameOriginMutation(request);
  } catch (error) {
    return storeRequestErrorResponse(error);
  }

  const readiness = getPaymentReadiness();
  if (!readiness.database || !readiness.tossSandbox) return storeApiResponse("CHECKOUT_UNAVAILABLE", 503, { "Retry-After": "60" });

  let body: Record<string, unknown>;
  try {
    body = await readBoundedJsonObject(request);
  } catch (error) {
    return storeRequestErrorResponse(error);
  }
  const productSlug = typeof body.productSlug === "string" && /^[a-z0-9-]{1,100}$/.test(body.productSlug) ? body.productSlug : null;
  const locale = body.locale === "ko" ? "ko" : "en";
  const product = productSlug ? getStoreProduct(productSlug) : null;
  if (!product || body.provider !== "TOSS" || product.priceKrw <= 0) return storeApiResponse("PRODUCT_UNAVAILABLE", 409);

  try {
    const order = await createPendingOrder({ product: { id: product.id, slug: product.slug, price: product.priceKrw, currency: "KRW", checkoutEnabled: true }, provider: "TOSS" }, new NeonOrderRepository());
    return Response.json({ orderNumber: order.orderNumber, orderName: product.name[locale], amount: order.amount, currency: order.currency }, { status: 201, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
  } catch {
    return storeApiResponse("CHECKOUT_UNAVAILABLE", 503, { "Retry-After": "60" });
  }
}
