import { getStoreProduct } from "@/lib/store";
import { getPaymentReadiness } from "@/lib/store/readiness";

export async function POST(request: Request) {
  const readiness = getPaymentReadiness();
  if (!readiness.database || !readiness.tossSandbox) return Response.json({ error: "CHECKOUT_NOT_CONFIGURED", message: "Sandbox checkout requires a database and Toss test credentials." }, { status: 503 });
  const body = await request.json().catch(() => null) as { productSlug?: string } | null;
  const product = body?.productSlug ? getStoreProduct(body.productSlug) : null;
  if (!product) return Response.json({ error: "PRODUCT_NOT_FOUND" }, { status: 404 });
  if (product.priceKrw <= 0 || product.saleStatus !== "available") return Response.json({ error: "PRODUCT_UNAVAILABLE" }, { status: 409 });
  return Response.json({ error: "DATABASE_ADAPTER_NOT_INSTALLED", message: "The schema is ready, but no production order repository is connected." }, { status: 503 });
}
