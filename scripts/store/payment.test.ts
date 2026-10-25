import test from "node:test";
import assert from "node:assert/strict";
import { authorizeDownload, confirmPayment, createPendingOrder, processWebhook, StorePaymentError, type DownloadEntitlement, type Order, type OrderRepository, type PaymentEvent, type PaymentStatus, type ProductSnapshot } from "../../lib/store/payment.ts";
import { canServeFreeDownload, getPaymentReadiness } from "../../lib/store/readiness.ts";

class MemoryRepository implements OrderRepository {
  orders = new Map<string, Order>(); events = new Set<string>(); entitlements = new Map<string, DownloadEntitlement>();
  async findOrder(orderNumber: string) { return this.orders.get(orderNumber) ?? null; }
  async createPending(order: Order) { this.orders.set(order.orderNumber, order); }
  async confirmPaidAtomically(input: { orderNumber: string; providerPaymentId: string; event: PaymentEvent; entitlement: DownloadEntitlement }) {
    const order = this.orders.get(input.orderNumber); if (!order) return "conflict" as const;
    if (order.status === "PAID" || this.events.has(input.event.providerEventId)) return "duplicate" as const;
    if (order.status !== "PENDING") return "conflict" as const;
    this.events.add(input.event.providerEventId); this.entitlements.set(`${input.orderNumber}:${order.productId}`, input.entitlement);
    this.orders.set(input.orderNumber, { ...order, status: "PAID", providerPaymentId: input.providerPaymentId, updatedAt: input.event.processedAt }); return "paid" as const;
  }
  async updateStatus(orderNumber: string, status: Exclude<PaymentStatus, "PENDING" | "PAID">) { const order = this.orders.get(orderNumber); if (order) this.orders.set(orderNumber, { ...order, status, updatedAt: new Date().toISOString() }); }
  async recordEventOnce(_orderNumber: string, event: PaymentEvent) { if (this.events.has(event.providerEventId)) return "duplicate" as const; this.events.add(event.providerEventId); return "processed" as const; }
  async findEntitlement(orderNumber: string, productId: string) { return this.entitlements.get(`${orderNumber}:${productId}`) ?? null; }
}

const product: ProductSnapshot = { id: "product-starter", slug: "pet-video-starter-pack", price: 9900, currency: "KRW", checkoutEnabled: true };
const now = new Date("2026-10-25T00:00:00.000Z");
async function pending(repo = new MemoryRepository()) { return { repo, order: await createPendingOrder({ product, provider: "TOSS", buyerEmail: "Buyer@Example.com" }, repo, now) }; }
async function expectCode(action: () => Promise<unknown>, code: string) { await assert.rejects(action, (error: unknown) => error instanceof StorePaymentError && error.code === code); }

test("normal confirmed payment marks the order paid and grants entitlement", async () => { const { repo, order } = await pending(); const result = await confirmPayment({ orderNumber: order.orderNumber, amount: 9900, currency: "KRW", providerPaymentId: "payment-1", providerEventId: "event-1" }, repo, now); assert.equal(result.result, "paid"); assert.equal((await repo.findOrder(order.orderNumber))?.status, "PAID"); assert.ok(await repo.findEntitlement(order.orderNumber, product.id)); });
test("client amount mismatch is rejected before approval", async () => { const { repo, order } = await pending(); await expectCode(() => confirmPayment({ orderNumber: order.orderNumber, amount: 100, currency: "KRW", providerPaymentId: "payment-2", providerEventId: "event-2" }, repo), "AMOUNT_MISMATCH"); });
test("unknown order number is rejected", async () => { const repo = new MemoryRepository(); await expectCode(() => confirmPayment({ orderNumber: "missing", amount: 9900, currency: "KRW", providerPaymentId: "payment-3", providerEventId: "event-3" }, repo), "ORDER_NOT_FOUND"); });
test("duplicate approval is idempotent", async () => { const { repo, order } = await pending(); const input = { orderNumber: order.orderNumber, amount: 9900, currency: "KRW" as const, providerPaymentId: "payment-4", providerEventId: "event-4" }; assert.equal((await confirmPayment(input, repo, now)).result, "paid"); assert.equal((await confirmPayment(input, repo, now)).result, "duplicate"); assert.equal(repo.entitlements.size, 1); });
test("failed order cannot be approved", async () => { const { repo, order } = await pending(); await repo.updateStatus(order.orderNumber, "FAILED"); await expectCode(() => confirmPayment({ orderNumber: order.orderNumber, amount: 9900, currency: "KRW", providerPaymentId: "payment-5", providerEventId: "event-5" }, repo), "INVALID_ORDER_STATE"); });
test("canceled order cannot be approved", async () => { const { repo, order } = await pending(); await repo.updateStatus(order.orderNumber, "CANCELED"); await expectCode(() => confirmPayment({ orderNumber: order.orderNumber, amount: 9900, currency: "KRW", providerPaymentId: "payment-6", providerEventId: "event-6" }, repo), "INVALID_ORDER_STATE"); });
test("duplicate webhook event is ignored", async () => { const { repo, order } = await pending(); const input = { orderNumber: order.orderNumber, providerEventId: "webhook-1", eventType: "PAYMENT_STATUS_CHANGED", signatureVerified: true }; assert.equal(await processWebhook(input, repo, now), "processed"); assert.equal(await processWebhook(input, repo, now), "duplicate"); });
test("invalid webhook signature is rejected", async () => { const { repo, order } = await pending(); await expectCode(() => processWebhook({ orderNumber: order.orderNumber, providerEventId: "webhook-2", eventType: "PAYMENT_STATUS_CHANGED", signatureVerified: false }, repo), "INVALID_WEBHOOK_SIGNATURE"); });
test("download without payment is rejected", async () => { const { repo, order } = await pending(); await expectCode(() => authorizeDownload({ orderNumber: order.orderNumber, productId: product.id }, repo, now), "PAYMENT_REQUIRED"); });
test("refunded order cannot download", async () => { const { repo, order } = await pending(); await confirmPayment({ orderNumber: order.orderNumber, amount: 9900, currency: "KRW", providerPaymentId: "payment-7", providerEventId: "event-7" }, repo, now); await repo.updateStatus(order.orderNumber, "REFUNDED"); await expectCode(() => authorizeDownload({ orderNumber: order.orderNumber, productId: product.id }, repo, now), "PAYMENT_REQUIRED"); });
test("production never exposes the free preview file", () => { assert.equal(canServeFreeDownload({ NODE_ENV: "production", VERCEL_ENV: "production", ENABLE_FREE_PROMPT_PREVIEW: "true" }), false); assert.equal(canServeFreeDownload({ NODE_ENV: "production", VERCEL_ENV: "preview" }), true); });
test("sandbox checkout requires preview, test keys, and a database", () => { assert.equal(getPaymentReadiness({ VERCEL_ENV: "preview", DATABASE_URL: "postgres://example", NEXT_PUBLIC_TOSS_CLIENT_KEY: "test_client", TOSS_SECRET_KEY: "test_secret" }).tossSandbox, true); assert.equal(getPaymentReadiness({ VERCEL_ENV: "production", DATABASE_URL: "postgres://example", NEXT_PUBLIC_TOSS_CLIENT_KEY: "live_client", TOSS_SECRET_KEY: "live_secret" }).tossSandbox, false); });
