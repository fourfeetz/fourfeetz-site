import { storeApiResponse } from "@/lib/store/api-security";

export async function POST() {
  return storeApiResponse("WEBHOOK_UNAVAILABLE", 503, { "Retry-After": "60" });
}
