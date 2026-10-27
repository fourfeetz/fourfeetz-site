import { randomUUID } from "node:crypto";

export const paymentStatuses = ["PENDING", "PAID", "FAILED", "CANCELED", "REFUNDED"] as const;
export type PaymentStatus = (typeof paymentStatuses)[number];
export type PaymentProvider = "TOSS" | "PAYPAL" | "PAYHIP";

export type ProductSnapshot = Readonly<{ id: string; slug: string; price: number; currency: "KRW" | "USD"; checkoutEnabled: boolean }>;
export type Order = Readonly<{ id: string; orderNumber: string; productId: string; buyerEmail: string | null; provider: PaymentProvider; status: PaymentStatus; amount: number; currency: "KRW" | "USD"; locale: "ko" | "en" | null; providerPaymentId: string | null; createdAt: string; updatedAt: string }>;
export type PaymentEvent = Readonly<{ providerEventId: string; eventType: string; processedAt: string }>;
export type DownloadEntitlement = Readonly<{ orderId: string; productId: string; expiresAt: string; revokedAt: string | null }>;

export interface OrderRepository {
  findOrder(orderNumber: string): Promise<Order | null>;
  createPending(order: Order): Promise<void>;
  confirmPaidAtomically(input: { orderNumber: string; providerPaymentId: string; event: PaymentEvent; entitlement: DownloadEntitlement }): Promise<"paid" | "duplicate" | "conflict">;
  updateStatus(orderNumber: string, status: Exclude<PaymentStatus, "PENDING" | "PAID">): Promise<void>;
  recordEventOnce(orderNumber: string, event: PaymentEvent): Promise<"processed" | "duplicate">;
  applyTerminalStatusAtomically(input: { orderNumber: string; status: "FAILED" | "CANCELED" | "REFUNDED"; event: PaymentEvent }): Promise<"updated" | "duplicate" | "conflict">;
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

export async function createPendingOrder(input: { product: ProductSnapshot; buyerEmail?: string; provider: PaymentProvider; locale: "ko" | "en" }, repository: OrderRepository, now = new Date()) {
  if (!input.product.checkoutEnabled) throw new StorePaymentError("PRODUCT_UNAVAILABLE", "Checkout is disabled for this product.");
  if (!Number.isInteger(input.product.price) || input.product.price <= 0) throw new StorePaymentError("INVALID_CATALOG_PRICE", "Paid product price must be a positive integer.");
  const buyerEmail = input.buyerEmail?.trim().toLowerCase() || null;
  if (buyerEmail && (buyerEmail.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(buyerEmail))) throw new StorePaymentError("INVALID_BUYER_EMAIL", "Buyer email is invalid.");
  const id = randomUUID();
  const orderEntropy = randomUUID().replaceAll("-", "").slice(0, 24).toUpperCase();
  const order: Order = { id, orderNumber: `FF-${now.toISOString().slice(0, 10).replaceAll("-", "")}-${orderEntropy}`, productId: input.product.id, buyerEmail, provider: input.provider, status: "PENDING", amount: input.product.price, currency: input.product.currency, locale: input.locale, providerPaymentId: null, createdAt: now.toISOString(), updatedAt: now.toISOString() };
  await repository.createPending(order);
  return order;
}

export async function confirmPayment(input: { orderNumber: string; amount: number; currency: Order["currency"]; providerPaymentId: string; providerEventId: string; providerVerified: boolean }, repository: OrderRepository, now = new Date()) {
  if (!input.providerVerified) throw new StorePaymentError("PROVIDER_VERIFICATION_REQUIRED", "Payment must be verified with the provider before approval.");
  const order = await repository.findOrder(input.orderNumber);
  if (!order) throw new StorePaymentError("ORDER_NOT_FOUND", "Order does not exist.");
  if (order.amount !== input.amount) throw new StorePaymentError("AMOUNT_MISMATCH", "Provider amount does not match the server order.");
  if (order.currency !== input.currency) throw new StorePaymentError("CURRENCY_MISMATCH", "Provider currency does not match the server order.");
  if (order.status === "PAID") {
    if (order.providerPaymentId === input.providerPaymentId) return { result: "duplicate" as const, order };
    throw new StorePaymentError("APPROVAL_CONFLICT", "A different provider payment is already attached to this order.");
  }
  if (order.status !== "PENDING") throw new StorePaymentError("INVALID_ORDER_STATE", `Cannot pay an order in ${order.status} state.`);
  const result = await repository.confirmPaidAtomically({ orderNumber: order.orderNumber, providerPaymentId: input.providerPaymentId, event: { providerEventId: input.providerEventId, eventType: "PAYMENT_CONFIRMED", processedAt: now.toISOString() }, entitlement: { orderId: order.id, productId: order.productId, expiresAt: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(), revokedAt: null } });
  if (result === "conflict") throw new StorePaymentError("APPROVAL_CONFLICT", "Order was changed by another approval attempt.");
  return { result, order };
}

export async function processWebhook(input: { orderNumber: string; providerEventId: string; eventType: string; providerProofVerified: boolean }, repository: OrderRepository, now = new Date()) {
  if (!input.providerProofVerified) throw new StorePaymentError("UNVERIFIED_PROVIDER_EVENT", "Provider event authenticity could not be verified.");
  const order = await repository.findOrder(input.orderNumber);
  if (!order) throw new StorePaymentError("ORDER_NOT_FOUND", "Order does not exist.");
  return repository.recordEventOnce(order.orderNumber, { providerEventId: input.providerEventId, eventType: input.eventType, processedAt: now.toISOString() });
}

export async function applyProviderTerminalStatus(input: { orderNumber: string; providerEventId: string; eventType: string; status: "FAILED" | "CANCELED" | "REFUNDED"; providerProofVerified: boolean }, repository: OrderRepository, now = new Date()) {
  if (!input.providerProofVerified) throw new StorePaymentError("UNVERIFIED_PROVIDER_EVENT", "Provider event authenticity could not be verified.");
  const order = await repository.findOrder(input.orderNumber);
  if (!order) throw new StorePaymentError("ORDER_NOT_FOUND", "Order does not exist.");
  const result = await repository.applyTerminalStatusAtomically({ orderNumber: order.orderNumber, status: input.status, event: { providerEventId: input.providerEventId, eventType: input.eventType, processedAt: now.toISOString() } });
  if (result === "conflict") throw new StorePaymentError("INVALID_ORDER_STATE", "Provider status conflicts with the stored order state.");
  return result;
}

export async function authorizeDownload(input: { orderNumber: string; productId: string }, repository: OrderRepository, now = new Date()) {
  const order = await repository.findOrder(input.orderNumber);
  if (!order || order.status !== "PAID") throw new StorePaymentError("PAYMENT_REQUIRED", "A verified paid order is required.");
  if (order.productId !== input.productId) throw new StorePaymentError("ENTITLEMENT_INVALID", "Download entitlement does not match the paid product.");
  const entitlement = await repository.findEntitlement(input.orderNumber, input.productId);
  if (!entitlement || entitlement.revokedAt || new Date(entitlement.expiresAt) <= now) throw new StorePaymentError("ENTITLEMENT_INVALID", "Download entitlement is missing, expired, or revoked.");
  return entitlement;
}

export function maskPaymentLog(input: Record<string, unknown>) {
  const sensitiveKey = /(secret|authorization|paymentkey|cardnumber|email)/i;
  const redact = (value: unknown): unknown => {
    if (Array.isArray(value)) return value.map(redact);
    if (value && typeof value === "object") {
      return Object.fromEntries(Object.entries(value).map(([key, nested]) => [key, sensitiveKey.test(key) ? "[REDACTED]" : redact(nested)]));
    }
    return value;
  };
  return redact(input) as Record<string, unknown>;
}
