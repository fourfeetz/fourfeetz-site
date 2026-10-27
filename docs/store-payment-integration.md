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
- Keep paid file delivery disabled until the private Blob store, real PDFs and additive download-token migration are verified in Preview.
- Alert on repeated `PAYMENT_CONFIRMATION_FAILED`, `WEBHOOK_RETRY`, approval conflicts and stale `PENDING` orders.
- Never log authorization headers, payment keys, card fields or full buyer email addresses.

## Private paid PDF delivery

Paid delivery uses a Vercel Blob store created with **Private** access. PDFs must not be copied into `public/`, and neither Blob URLs nor pathnames are returned to the browser. The download route validates the paid order, active entitlement, product match and a 256-bit buyer token before streaming the private Blob through the server.

The starter guide currently has one database product ID for both languages. A token is bound to the locale selected by the checkout success page, and the server maps that locale to a distinct private Blob pathname:

- `STORE_PAID_PDF_KO_BLOB_PATH`: Korean starter guide
- `STORE_PAID_PDF_EN_BLOB_PATH`: English starter guide

The Pet Creator Pack has no mapping and remains unavailable until its file is ready. The free prompt continues to use its separate Preview-only free-download route.

### Preview setup

1. Create or connect a Vercel Blob store with **Private** access to the FourFeetz Vercel project for Preview only.
2. Upload the verified Korean and English PDFs in the Vercel Blob dashboard. Keep the returned Blob URLs private; record only each pathname.
3. Set `STORE_PAID_PDF_KO_BLOB_PATH` and `STORE_PAID_PDF_EN_BLOB_PATH` to those pathnames for Preview only.
4. The connected private store supplies `BLOB_STORE_ID` and short-lived Vercel OIDC credentials. For local-only testing, `BLOB_READ_WRITE_TOKEN` may be used instead and must never be committed.
5. Run `npm run db:migrate:store` against the intended Preview Neon branch only after reviewing migration `20261027_003`. It adds nullable policy-consent fields to `orders` and a `download_delivery_events` audit table; it does not backfill or rewrite existing orders.
6. Verify the migration a second time, then set `STORE_PAID_DOWNLOADS_ENABLED=true` for Preview only and redeploy.

The enable flag must not be added to Production. Missing Blob credentials, missing file path mappings, an absent token table or any storage error leaves the purchase recorded but keeps the download button disabled or returns a generic failure.

### Consent and delivery evidence

New orders require the current refund-policy version and an unchecked buyer consent control before the server creates the order. The server records its own consent timestamp. Existing orders remain `NULL`; the migration never fabricates historical consent.

For an authenticated download, the server records the internal order/product, locale, request time, policy version and consent timestamp. It separately records when a private Blob stream is ready and the HTTP response starts. This is evidence of server-side delivery commencement only: the application cannot prove that the browser fully saved or opened the PDF. Denied attempts are recorded only when the supplied order number maps to an existing internal order, and no raw token, Blob URL, payment key, or card data is stored.

### Buyer credential and reuse policy

After a verified payment, the confirmation route creates a 256-bit random token. Only its SHA-256 hash is stored in Neon. The raw value is sent as a `Secure`, `HttpOnly`, `SameSite=Strict` cookie scoped to that order's download route, so knowledge of an order number alone is insufficient. Tokens may be reused from the same browser until the entitlement expires seven days after payment. Refund processing revokes the entitlement, which blocks every token for the order immediately.
