import { getPaymentReadiness } from "@/lib/store/readiness";

export async function POST() {
  const readiness = getPaymentReadiness();
  if (!readiness.tossSandbox) return Response.json({ error: "TOSS_SANDBOX_NOT_CONFIGURED", message: "No payment was approved. Add test credentials and a database in Preview before enabling confirmation." }, { status: 503 });
  return Response.json({ error: "DATABASE_ADAPTER_NOT_INSTALLED", message: "Server-side amount and order validation must run through the order repository before calling Toss confirm." }, { status: 503 });
}
