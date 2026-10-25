# Creator Store payment foundation

## Safety boundary

This PR does not enable live payments, create a database, provision paid services, or publish paid files. Checkout endpoints fail closed until a managed Postgres database and sandbox credentials are configured. Client amounts and success URLs are never treated as payment evidence.

## Recommended database: Neon PostgreSQL

Neon is the preferred first option because the site already runs on Vercel, Neon is available as a native Vercel Marketplace integration, supports serverless Postgres and preview branches, and can start at $0. Supabase is also suitable and adds integrated auth, storage and broader backend services, but those features are not yet required for a small order ledger. Prisma Postgres or another managed PostgreSQL remains a reasonable alternative if the team standardizes on Prisma later.

No database has been provisioned in this PR. Before activation, create separate Preview and Production databases or branches, restrict credentials by environment, require TLS, enable backups/PITR appropriate to sales volume, and grant the runtime only the privileges it needs.

## Order invariants

- Product price and currency come from the server catalog.
- New orders begin at `PENDING`.
- Only a provider-confirmed capture can transition an order to `PAID`.
- `order_number` and `provider_event_id` are unique.
- Paid transition, payment event and entitlement creation must occur in one database transaction.
- Duplicate confirmations return the already-known result and never create a second entitlement.
- Refund or cancellation revokes the entitlement.
- Logs exclude secrets, authorization headers, payment keys, card data and full buyer email addresses.
- Browser mutation routes enforce same-origin Fetch Metadata/Origin checks, bounded JSON bodies and non-cached generic errors.

## Toss Payments sandbox flow

1. Server creates a `PENDING` order from the catalog price.
2. Preview client requests payment with the returned order number and the test client key.
3. Success redirect sends `paymentKey`, `orderId` and `amount` to the server.
4. Server loads the order and compares order number, server amount, currency and `PENDING` state.
5. Server calls Toss confirm with the test secret key.
6. A database transaction records `PAID`, the provider event and entitlement atomically.
7. Cancellation/refund re-queries provider state and updates the order plus entitlement.

Toss general payment webhooks should be re-queried by `paymentKey`; the implementation must not invent a webhook signature header that the general payment webhook does not provide.

Before enabling checkout, add durable rate limiting at Vercel Firewall or the database/Redis boundary. An in-memory limiter is not sufficient for serverless production instances.

## PayPal direct versus Payhip

PayPal direct requires Orders API creation/capture, verified webhooks, refund handling, an order database and secure file delivery. It provides full control and avoids Payhip's platform fee, but has the larger implementation and operations burden.

Payhip provides a hosted digital-product checkout, immediate download page, emailed receipt/download link and sales records. Its free plan adds a 5% Payhip transaction fee in addition to PayPal processing fees. Whether the existing FourFeetz Korean PayPal Business account can connect, receive the intended buyer-country payments and settle correctly must be confirmed by the user inside the real Payhip and PayPal dashboards. No account connection or link is created here.

If that account connection and a complete purchase/download/refund test succeed, Payhip is the recommended initial international route. Otherwise use PayPal direct after its server and entitlement work is complete.

## Paid-file delivery design

Paid archives must live in private object storage, never `/public`. The download endpoint authenticates an opaque order-access token or emailed one-time link, verifies a `PAID` order and active entitlement, then returns a storage-provider signed URL that expires in minutes. The endpoint is `no-store`; raw storage keys and buyer data are never placed in URLs. Refund and cancellation set `revoked_at`. Re-delivery generates a fresh one-time link after minimal buyer verification and is rate limited and audited.

## Environment variables

- `DATABASE_URL`
- `NEXT_PUBLIC_TOSS_CLIENT_KEY` (test key in Preview only)
- `TOSS_SECRET_KEY` (server only)
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID` (Sandbox in Preview only)
- `PAYPAL_CLIENT_SECRET` (server only)
- `PAYPAL_WEBHOOK_ID` (server only)
- `ENABLE_FREE_PROMPT_PREVIEW=true` (optional local-development download test; Vercel Preview is enabled automatically)

Live keys must use separate Production variables and must not be added until explicit launch approval.

## Estimated baseline operating cost

The database can begin on a $0 Neon plan subject to current limits. Payhip can begin at $0/month with a 5% Payhip fee plus PayPal fees; its current paid tiers are $29/month plus 2% or $99/month with no Payhip transaction fee. PayPal Korea's published international commercial rate and currency conversion/withdrawal fees must be checked at launch. Toss pricing depends on the merchant contract and enabled payment methods, so it is not estimated here.
