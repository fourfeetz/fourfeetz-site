import { storeApiResponse } from "@/lib/store/api-security";

export async function GET() {
  return storeApiResponse("DOWNLOAD_FORBIDDEN", 403);
}
