import { getStoreProduct } from "@/lib/store";
import { assertSameOriginMutation, readBoundedJsonObject, storeApiResponse, storeRequestErrorResponse } from "@/lib/store/api-security";
import { getPaymentReadiness } from "@/lib/store/readiness";

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
  const product = productSlug ? getStoreProduct(productSlug) : null;
  if (!product || body.provider !== "TOSS" || product.priceKrw <= 0 || product.saleStatus !== "available") return storeApiResponse("PRODUCT_UNAVAILABLE", 409);

  return storeApiResponse("CHECKOUT_UNAVAILABLE", 503, { "Retry-After": "60" });
}
