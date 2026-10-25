export async function GET() {
  return Response.json({ error: "PAID_DOWNLOAD_NOT_CONFIGURED", message: "Paid files require a verified order, an active entitlement, and a short-lived signed storage URL." }, { status: 403, headers: { "Cache-Control": "no-store" } });
}
