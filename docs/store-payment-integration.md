# Creator Store Preview payment integration

This integration is intentionally limited to Vercel Preview and local development. Production checkout, confirmation, webhooks and paid downloads remain disabled.

## Activation gates

All of the following are required before the paid button is rendered or any payment mutation runs:

- `VERCEL_ENV=preview` (or local development without a Vercel environment)
- `STORE_SANDBOX_ENABLED=true`
- a dedicated Preview `DATABASE_URL`
- `NEXT_PUBLIC_TOSS_CLIENT_KEY` beginning with `test_`
- server-only `TOSS_SECRET_KEY` beginning with `test_`

Production never satisfies the environment gate, including when all other variables are present. `STORE_SANDBOX_ENABLED` must not be added to Production.

## Neon setup

1. Create a Neon project and a separate Preview database/branch in the Neon console.
2. Copy its pooled connection string and set it as `DATABASE_URL` for Vercel Preview only. Do not expose it with a `NEXT_PUBLIC_` prefix.
3. From a trusted local environment pointed at that same Preview database, run `npm run db:migrate:store`.
4. Run the migration a second time to verify idempotency.
5. Use a dedicated least-privilege application role before any production rollout.

The runtime uses Neon's HTTP serverless driver, so it does not retain a process-local connection pool. The Neon URL should use the provider's pooled endpoint for Vercel concurrency. The migration script uses one short-lived connection and an explicit transaction.

## Toss Sandbox setup

1. Add the Toss test client key to `NEXT_PUBLIC_TOSS_CLIENT_KEY` for Preview only.
2. Add the Toss test secret to server-only `TOSS_SECRET_KEY` for Preview only.
3. Register the Preview URL `/api/store/payments/toss/webhook` for `PAYMENT_STATUS_CHANGED` in the Toss developer center.
4. Add `STORE_SANDBOX_ENABLED=true` to Preview only after the schema migration succeeds.

The success redirect is not proof of payment. The browser POSTs the returned `paymentKey`, `orderId` and `amount` to the confirmation route. The server loads the stored order, checks amount/currency/state, calls Toss confirm with the order UUID as a stable `Idempotency-Key`, validates the returned Payment object, and atomically stores `PAID`, the payment event and the entitlement.

If Toss approval succeeds but the database write fails, the success URL can be retried. The same order UUID sends the same Toss idempotency key, so Toss returns the original approval result and the database transaction can be retried without a second charge. Operators should compare the Toss payment lookup with the order audit history before manual recovery.

## Webhooks and refunds

General payment webhooks are not trusted as payment proof. The route validates the shape and then re-queries Toss by `paymentKey`. Only the query response can produce a state transition. Deterministic event IDs make webhook retries idempotent.

- `DONE`: atomically confirm `PAID` and grant the entitlement.
- `CANCELED` after `PAID`: record `REFUNDED` and revoke the entitlement atomically.
- `CANCELED` before payment: record `CANCELED`.
- `ABORTED`: record `FAILED`.
- `EXPIRED`: record `CANCELED`.

The fail redirect never changes an order because its query string is buyer-controlled. Pending orders abandoned before approval require a future scheduled cleanup/reconciliation job.

## Operational controls still required

- Add Vercel Firewall rate limits to the order, confirm and webhook routes before sharing Sandbox checkout broadly. A managed Redis limiter is appropriate only if the product later needs customer/order-aware risk counters that Firewall rules cannot express.
- Keep paid file storage and signed URLs disabled until PR #55.
- Alert on repeated `PAYMENT_CONFIRMATION_FAILED`, `WEBHOOK_RETRY`, approval conflicts and stale `PENDING` orders.
- Never log authorization headers, payment keys, card fields or full buyer email addresses.
