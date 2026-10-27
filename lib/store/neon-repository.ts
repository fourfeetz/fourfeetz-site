import "server-only";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import type { DownloadEntitlement, Order, OrderRepository, PaymentEvent, PaymentStatus } from "@/lib/store/payment";
import type { DownloadAccessRepository, DownloadAccessToken } from "@/lib/store/download-access";
import type { DownloadAttempt, DownloadAuditRepository, DownloadServerResult } from "@/lib/store/download-audit";

type DatabaseRow = Record<string, unknown>;

function database(): NeonQueryFunction<false, false> {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("STORE_DATABASE_UNAVAILABLE");
  return neon(connectionString);
}

function toOrder(row: DatabaseRow): Order {
  return {
    id: String(row.id),
    orderNumber: String(row.order_number),
    productId: String(row.product_id),
    buyerEmail: row.buyer_email ? String(row.buyer_email) : null,
    provider: row.payment_provider as Order["provider"],
    status: row.payment_status as PaymentStatus,
    amount: Number(row.amount),
    currency: row.currency as Order["currency"],
    locale: row.locale === "ko" || row.locale === "en" ? row.locale : null,
    providerPaymentId: row.provider_payment_id ? String(row.provider_payment_id) : null,
    refundPolicyVersion: row.refund_policy_version ? String(row.refund_policy_version) : null,
    refundPolicyConsentedAt: row.refund_policy_consented_at ? new Date(String(row.refund_policy_consented_at)).toISOString() : null,
    createdAt: new Date(String(row.created_at)).toISOString(),
    updatedAt: new Date(String(row.updated_at)).toISOString(),
  };
}

function outcome(rows: unknown, fallback: "conflict"): string {
  const row = Array.isArray(rows) ? rows[0] as DatabaseRow | undefined : undefined;
  return row?.outcome ? String(row.outcome) : fallback;
}

export class NeonOrderRepository implements OrderRepository, DownloadAccessRepository, DownloadAuditRepository {
  async findOrder(orderNumber: string) {
    const rows = await database().query("select * from orders where order_number = $1 limit 1", [orderNumber]);
    return rows[0] ? toOrder(rows[0] as DatabaseRow) : null;
  }

  async createPending(order: Order) {
    await database().query(
      `insert into orders (id, order_number, product_id, buyer_email, payment_provider, payment_status, provider_payment_id, amount, currency, locale, refund_policy_version, refund_policy_consented_at, created_at, updated_at)
       values ($1, $2, $3, $4, $5::payment_provider, 'PENDING', null, $6, $7, $8, $9, $10, $11, $11)`,
      [order.id, order.orderNumber, order.productId, order.buyerEmail, order.provider, order.amount, order.currency, order.locale, order.refundPolicyVersion, order.refundPolicyConsentedAt, order.createdAt],
    );
  }

  async confirmPaidAtomically(input: { orderNumber: string; providerPaymentId: string; event: PaymentEvent; entitlement: DownloadEntitlement }) {
    try {
      const rows = await database().query(
        `with target as materialized (
           select id, product_id, payment_status, provider_payment_id from orders where order_number = $1 for update
         ), provider_conflict as (
           select 1 from orders where provider_payment_id = $2 and order_number <> $1 limit 1
         ), event_conflict as (
           select 1 from payment_events e join orders o on o.id = e.order_id
           where e.provider_event_id = $3 and o.order_number <> $1 limit 1
         ), updated as (
           update orders set payment_status = 'PAID', provider_payment_id = $2, updated_at = $5
           where id = (select id from target)
             and (select payment_status from target) = 'PENDING'
             and not exists (select 1 from provider_conflict)
             and not exists (select 1 from event_conflict)
           returning id, product_id
         ), event_insert as (
           insert into payment_events (id, order_id, provider_event_id, event_type, processed_at)
           select gen_random_uuid(), id, $3, $4, $5 from updated
           on conflict (provider_event_id) do nothing
         ), entitlement_insert as (
           insert into download_entitlements (id, order_id, product_id, expires_at, revoked_at)
           select gen_random_uuid(), id, product_id, $6, null from updated
           on conflict (order_id, product_id) do update set expires_at = excluded.expires_at, revoked_at = null
         )
         select case
           when not exists (select 1 from target) then 'conflict'
           when (select payment_status from target) = 'PAID' and (select provider_payment_id from target) = $2 then 'duplicate'
           when exists (select 1 from updated) then 'paid'
           else 'conflict'
         end as outcome`,
        [input.orderNumber, input.providerPaymentId, input.event.providerEventId, input.event.eventType, input.event.processedAt, input.entitlement.expiresAt],
      );
      return outcome(rows, "conflict") as "paid" | "duplicate" | "conflict";
    } catch (error) {
      if ((error as { code?: string }).code === "23505") return "conflict";
      throw error;
    }
  }

  async updateStatus(orderNumber: string, status: "FAILED" | "CANCELED" | "REFUNDED") {
    await database().query("update orders set payment_status = $2::payment_status, updated_at = now() where order_number = $1", [orderNumber, status]);
  }

  async recordEventOnce(orderNumber: string, event: PaymentEvent) {
    const rows = await database().query(
      `insert into payment_events (id, order_id, provider_event_id, event_type, processed_at)
       select gen_random_uuid(), id, $2, $3, $4 from orders where order_number = $1
       on conflict (provider_event_id) do nothing returning id`,
      [orderNumber, event.providerEventId, event.eventType, event.processedAt],
    );
    return rows.length ? "processed" : "duplicate";
  }

  async applyTerminalStatusAtomically(input: { orderNumber: string; status: "FAILED" | "CANCELED" | "REFUNDED"; event: PaymentEvent }) {
    const rows = await database().query(
      `with target as materialized (
         select id, payment_status from orders where order_number = $1 for update
       ), existing_event as (
         select order_id from payment_events where provider_event_id = $3 limit 1
       ), updated as (
         update orders set payment_status = $2::payment_status, updated_at = $5
         where id = (select id from target)
           and not exists (select 1 from existing_event)
           and (($2 = 'REFUNDED' and (select payment_status from target) = 'PAID')
             or ($2 in ('FAILED', 'CANCELED') and (select payment_status from target) = 'PENDING'))
         returning id
       ), event_insert as (
         insert into payment_events (id, order_id, provider_event_id, event_type, processed_at)
         select gen_random_uuid(), id, $3, $4, $5 from updated
         on conflict (provider_event_id) do nothing
       ), revoked as (
         update download_entitlements set revoked_at = $5
         where order_id in (select id from updated) and $2 = 'REFUNDED' and revoked_at is null
       )
       select case
         when exists (select 1 from existing_event where order_id = (select id from target)) then 'duplicate'
         when exists (select 1 from updated) then 'updated'
         else 'conflict'
       end as outcome`,
      [input.orderNumber, input.status, input.event.providerEventId, input.event.eventType, input.event.processedAt],
    );
    return outcome(rows, "conflict") as "updated" | "duplicate" | "conflict";
  }

  async findEntitlement(orderNumber: string, productId: string) {
    const rows = await database().query(
      `select e.order_id, e.product_id, e.expires_at, e.revoked_at
       from download_entitlements e join orders o on o.id = e.order_id
       where o.order_number = $1 and e.product_id = $2 limit 1`,
      [orderNumber, productId],
    );
    const row = rows[0] as DatabaseRow | undefined;
    if (!row) return null;
    return { orderId: String(row.order_id), productId: String(row.product_id), expiresAt: new Date(String(row.expires_at)).toISOString(), revokedAt: row.revoked_at ? new Date(String(row.revoked_at)).toISOString() : null };
  }

  async createDownloadAccessToken(token: DownloadAccessToken) {
    await database().query(
      `insert into download_access_tokens (id, order_id, product_id, locale, token_hash, expires_at, revoked_at, created_at)
       values ($1, $2, $3, $4, $5, $6, null, $7)`,
      [token.id, token.orderId, token.productId, token.locale, token.tokenHash, token.expiresAt, token.createdAt],
    );
  }

  async findDownloadAccessToken(orderNumber: string, tokenHash: string) {
    const rows = await database().query(
      `select t.id, t.order_id, t.product_id, t.locale, t.token_hash, t.expires_at, t.revoked_at, t.created_at
       from download_access_tokens t join orders o on o.id = t.order_id
       where o.order_number = $1 and t.token_hash = $2 limit 1`,
      [orderNumber, tokenHash],
    );
    const row = rows[0] as DatabaseRow | undefined;
    if (!row) return null;
    return { id: String(row.id), orderId: String(row.order_id), productId: String(row.product_id), locale: row.locale as DownloadAccessToken["locale"], tokenHash: String(row.token_hash), expiresAt: new Date(String(row.expires_at)).toISOString(), revokedAt: row.revoked_at ? new Date(String(row.revoked_at)).toISOString() : null, createdAt: new Date(String(row.created_at)).toISOString() };
  }

  async createDownloadAttempt(attempt: DownloadAttempt) {
    await database().query(
      `insert into download_delivery_events (id, order_id, product_id, locale, requested_at, authentication_succeeded, server_result, refund_policy_version, refund_policy_consented_at)
       values ($1, $2, $3, $4, $5, true, 'AUTHORIZED', $6, $7)`,
      [attempt.id, attempt.orderId, attempt.productId, attempt.locale, attempt.requestedAt, attempt.refundPolicyVersion, attempt.refundPolicyConsentedAt],
    );
  }

  async updateDownloadAttempt(id: string, result: DownloadServerResult, transferStartedAt?: string) {
    await database().query(
      `update download_delivery_events
       set server_result = $2, transfer_started_at = coalesce($3, transfer_started_at)
       where id = $1`,
      [id, result, transferStartedAt ?? null],
    );
  }

  async recordDeniedDownloadAttempt(orderNumber: string, requestedAt: string) {
    await database().query(
      `insert into download_delivery_events (id, order_id, product_id, locale, requested_at, authentication_succeeded, server_result, refund_policy_version, refund_policy_consented_at)
       select gen_random_uuid(), id, product_id, locale, $2, false, 'AUTHENTICATION_DENIED', refund_policy_version, refund_policy_consented_at
       from orders where order_number = $1 and locale in ('ko', 'en')`,
      [orderNumber, requestedAt],
    );
  }
}
