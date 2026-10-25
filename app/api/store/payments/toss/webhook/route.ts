export async function POST() {
  return Response.json({ error: "WEBHOOK_NOT_CONFIGURED", message: "Toss events must be re-queried with the paymentKey and stored idempotently before this endpoint can be enabled." }, { status: 503 });
}
