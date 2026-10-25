import { assertSameOriginMutation, storeApiResponse, storeRequestErrorResponse } from "@/lib/store/api-security";
import { getPaymentReadiness } from "@/lib/store/readiness";

export async function POST(request: Request) {
  try {
    assertSameOriginMutation(request);
  } catch (error) {
    return storeRequestErrorResponse(error);
  }

  const readiness = getPaymentReadiness();
  if (!readiness.tossSandbox) return storeApiResponse("PAYMENT_CONFIRMATION_UNAVAILABLE", 503, { "Retry-After": "60" });
  return storeApiResponse("PAYMENT_CONFIRMATION_UNAVAILABLE", 503, { "Retry-After": "60" });
}
