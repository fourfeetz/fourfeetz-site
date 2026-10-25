import { createHash } from "node:crypto";
import { readBoundedJsonObject, storeApiResponse, storeRequestErrorResponse } from "@/lib/store/api-security";
import { getPaymentReadiness } from "@/lib/store/readiness";
import { applyProviderTerminalStatus, confirmPayment } from "@/lib/store/payment";
import { NeonOrderRepository } from "@/lib/store/neon-repository";
import { getTossPayment } from "@/lib/store/toss";

export async function POST(request: Request) {
  if (!getPaymentReadiness().tossSandbox) return storeApiResponse("WEBHOOK_UNAVAILABLE", 503, { "Retry-After": "60" });
  let body: Record<string, unknown>;
  try {
    body = await readBoundedJsonObject(request, 32 * 1024);
  } catch (error) {
    return storeRequestErrorResponse(error);
  }
  const eventType = body.eventType;
  const createdAt = body.createdAt;
  const data = body.data;
  const paymentKey = data && typeof data === "object" && !Array.isArray(data) ? (data as Record<string, unknown>).paymentKey : null;
  if (eventType !== "PAYMENT_STATUS_CHANGED" || typeof createdAt !== "string" || typeof paymentKey !== "string" || paymentKey.length > 200) return storeApiResponse("IGNORED_EVENT", 200);

  try {
    const payment = await getTossPayment(paymentKey);
    const repository = new NeonOrderRepository();
    const order = await repository.findOrder(payment.orderId);
    if (!order || order.provider !== "TOSS" || payment.totalAmount !== order.amount || payment.currency !== order.currency || payment.paymentKey !== paymentKey) return storeApiResponse("WEBHOOK_VERIFICATION_FAILED", 409);
    const providerEventId = `webhook:${createHash("sha256").update([eventType, createdAt, payment.paymentKey, payment.status, payment.lastTransactionKey ?? ""].join(":"), "utf8").digest("hex")}`;

    if (payment.status === "DONE") {
      await confirmPayment({ orderNumber: order.orderNumber, amount: payment.totalAmount, currency: payment.currency, providerPaymentId: payment.paymentKey, providerEventId, providerVerified: true }, repository);
    } else if (payment.status === "CANCELED") {
      await applyProviderTerminalStatus({ orderNumber: order.orderNumber, providerEventId, eventType: `TOSS_${payment.status}`, status: order.status === "PAID" ? "REFUNDED" : "CANCELED", providerProofVerified: true }, repository);
    } else if (payment.status === "ABORTED" || payment.status === "EXPIRED") {
      await applyProviderTerminalStatus({ orderNumber: order.orderNumber, providerEventId, eventType: `TOSS_${payment.status}`, status: payment.status === "EXPIRED" ? "CANCELED" : "FAILED", providerProofVerified: true }, repository);
    } else {
      await repository.recordEventOnce(order.orderNumber, { providerEventId, eventType: `TOSS_${payment.status}`, processedAt: new Date().toISOString() });
    }
    return storeApiResponse("WEBHOOK_PROCESSED", 200);
  } catch {
    return storeApiResponse("WEBHOOK_RETRY", 503, { "Retry-After": "5" });
  }
}
