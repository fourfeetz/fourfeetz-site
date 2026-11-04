import { getPaymentReadinessDiagnostics } from "@/lib/store/readiness";

export const dynamic = "force-dynamic";

export function GET() {
  if (process.env.VERCEL_ENV === "production") {
    console.info("STORE_READINESS_DIAGNOSTIC", getPaymentReadinessDiagnostics());
  }
  return new Response(null, { status: 404, headers: { "Cache-Control": "no-store" } });
}
