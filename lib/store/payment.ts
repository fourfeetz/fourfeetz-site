import { randomUUID } from "node:crypto";

export const paymentStatuses = ["PENDING", "PAID", "FAILED", "CANCELED", "REFUNDED"] as const;
export type PaymentStatus = (typeof paymentStatuses)[number];
export type PaymentProvider = "TOSS" | "PAYPAL" | "PAYHIP";

export type ProductSnapshot = Readonly<{ id: string; slug: string; price: number; currency: "KRW" | "USD"; checkoutEnabled: boolean }>;
export type Order = Readonly<{ id: string; orderNumber: string; productId: string; buyerEmail: string | null; provider: PaymentProvider; status: PaymentStatus; amount: number; currency: "KRW" | "USD"; providerPaymentId: string | null; createdAt: string; updatedAt: string }>;
export type PaymentEvent = Readonly<{ providerEventId: string; eventType: string; processedAt: string }>;
export type DownloadEntitlement = Readonly<{ orderId: string; productId: string; expiresAt: string; revokedAt: string | null }>;

export interface OrderRepository {
  findOrder(orderNumber: string): Promise<Order | null>;
  createPending(order: Order): Promise<void>;
  confirmPaidAtomically(input: { orderNumber: string; providerPaymentId: string; event: PaymentEvent; entitlement: DownloadEntitlement }): Promise<"paid" | "duplicate" | "conflict">;
  updateStatus(orderNumber: string, status: Exclude<PaymentStatus, "PENDING" | "PAID">): Promise<void>;
  recordEventOnce(orderNumber: string, event: PaymentEvent): Promise<"processed" | "duplicate">;
  findEntitlement(orderNumber: string, productId: string): Promise<DownloadEntitlement | null>;
}

export class StorePaymentError extends Error {
  readonly code: string;

  constructor(code: string, message: string) {
    super(message);
    this.name = "StorePaymentError";
    this.code = code;
  }
}

export async function createPendingOrder(input: { product: ProductSnapshot; buyerEmail?: string; provider: PaymentProvider }, repository: OrderRepository, now = new Date()) {
  if (!input.product.checkoutEnabled) throw new StorePaymentError("PRODUCT_UNAVAILABLE", "Checkout is disabled for this product.");
  if (!Number.isInteger(input.product.price) || input.product.price <= 0) throw new StorePaymentError("INVALID_CATALOG_PRICE", "Paid product price must be a positive integer.");
  const id = randomUUID();
  const order: Order = { id, orderNumber: `FF-${now.toISOString().slice(0, 10).replaceAll("-", "")}-${id.slice(0, 12).toUpperCase()}`, productId: input.product.id, buyerEmail: input.buyerEmail?.trim().toLowerCase() || null, provider: input.provider, status: "PENDING", amount: input.product.price, currency: input.product.currency, providerPaymentId: null, createdAt: now.toISOString(), updatedAt: now.toISOString() };
  await repository.createPending(order);
  return order;
}

export async function confirmPayment(input: { orderNumber: string; amount: number; currency: Order["currency"]; providerPaymentId: string; providerEventId: string }, repository: OrderRepository, now = new Date()) {
  const order = await repository.findOrder(input.orderNumber);
  if (!order) throw new StorePaymentError("ORDER_NOT_FOUND", "Order does not exist.");
  if (order.amount !== input.amount || order.currency !== input.currency) throw new StorePaymentError("AMOUNT_MISMATCH", "Provider amount does not match the server order.");
  if (order.status === "PAID") return { result: "duplicate" as const, order };
  if (order.status !== "PENDING") throw new StorePaymentError("INVALID_ORDER_STATE", `Cannot pay an order in ${order.status} state.`);
  const result = await repository.confirmPaidAtomically({ orderNumber: order.orderNumber, providerPaymentId: input.providerPaymentId, event: { providerEventId: input.providerEventId, eventType: "PAYMENT_CONFIRMED", processedAt: now.toISOString() }, entitlement: { orderId: order.id, productId: order.productId, expiresAt: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(), revokedAt: null } });
  if (result === "conflict") throw new StorePaymentError("APPROVAL_CONFLICT", "Order was changed by another approval attempt.");
  return { result, order };
}

export async function processWebhook(input: { orderNumber: string; providerEventId: string; eventType: string; signatureVerified: boolean }, repository: OrderRepository, now = new Date()) {
  if (!input.signatureVerified) throw new StorePaymentError("INVALID_WEBHOOK_SIGNATURE", "Webhook authenticity could not be verified.");
  const order = await repository.findOrder(input.orderNumber);
  if (!order) throw new StorePaymentError("ORDER_NOT_FOUND", "Order does not exist.");
  return repository.recordEventOnce(order.orderNumber, { providerEventId: input.providerEventId, eventType: input.eventType, processedAt: now.toISOString() });
}

export async function authorizeDownload(input: { orderNumber: string; productId: string }, repository: OrderRepository, now = new Date()) {
  const order = await repository.findOrder(input.orderNumber);
  if (!order || order.status !== "PAID") throw new StorePaymentError("PAYMENT_REQUIRED", "A verified paid order is required.");
  const entitlement = await repository.findEntitlement(input.orderNumber, input.productId);
  if (!entitlement || entitlement.revokedAt || new Date(entitlement.expiresAt) <= now) throw new StorePaymentError("ENTITLEMENT_INVALID", "Download entitlement is missing, expired, or revoked.");
  return entitlement;
}

export function maskPaymentLog(input: Record<string, unknown>) {
  const blocked = new Set(["secret", "authorization", "paymentKey", "cardNumber", "email"]);
  return Object.fromEntries(Object.entries(input).map(([key, value]) => [key, blocked.has(key) ? "[REDACTED]" : value]));
}
