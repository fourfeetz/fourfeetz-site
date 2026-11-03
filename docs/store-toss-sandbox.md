# Toss Payments sandbox checkout

The Creator Store supports KRW card test payments through Toss Payments JavaScript SDK v2 in local development and Vercel Preview. Production normally rejects test credentials and uses a separate explicit live-payment gate and live key pair. During the temporary card-acquirer review period only, Production can reuse the Sandbox flow behind an isolated review gate.

## Required Preview variables

Configure these variables only for the Vercel `preview` environment:

- `DATABASE_URL`: pooled Neon connection used by the application.
- `STORE_SANDBOX_ENABLED=true`: explicit checkout feature gate.
- `TOSS_PAYMENTS_MODE=test`: rejects any mode other than the test environment.
- `NEXT_PUBLIC_TOSS_CLIENT_KEY`: matching Toss test client key (`test_*`). This key is expected in the browser.
- `TOSS_SECRET_KEY`: matching Toss test secret key (`test_*`). Keep it server-only and mark it sensitive.

Do not add real values to source control. For temporary Production card review, require all of `STORE_PRODUCTION_SANDBOX_REVIEW_ENABLED=true`, `STORE_SANDBOX_ENABLED=true`, `TOSS_PAYMENTS_MODE=test`, and `STORE_LIVE_PAYMENTS_ENABLED=false`. Remove or set the review flag to `false` immediately after review; checkout fails closed without it.

## Data and payment flow

1. The browser sends only the product slug, provider, and display locale to `POST /api/store/orders`.
2. The server reads the catalog price, creates a random order ID, and persists the pending order in Neon.
3. SDK v2 opens the KRW card test window with the server-issued order ID and amount.
4. The success page sends the returned `paymentKey`, `orderId`, and `amount` to the server confirmation route.
5. The server compares the callback values with the stored order before calling Toss Payments with the secret key.
6. The returned Payment object is checked for `DONE`, matching order ID, KRW currency, and exact amount before the order and entitlement are committed atomically.
7. Repeated confirmations reuse the stored order UUID as the Toss idempotency key. If the approval response is ambiguous, the server queries the payment and accepts only a matching `DONE` result.
8. General payment webhooks are verified by querying Toss Payments with the received `paymentKey`; no nonexistent signature header is assumed.

The free PDF never enters this payment flow. USD and foreign-card checkout remain a separate, disabled provider path.

## File delivery

Paid approval creates a time-limited entitlement in `download_entitlements`, but the paid download endpoint remains fail-closed until a private file store and product files are configured. Paid source files must stay outside `public/`.

## Test checklist

1. Run `npm run db:preflight:store` and confirm the expected tables, indexes, and products.
2. Open both paid product pages from `/store` and `/ko/store` in a protected Preview deployment.
3. Confirm the ₩9,900 and ₩19,900 test amounts and the localized order names in the Toss window.
4. Complete one Toss test-card payment and confirm that the success page reports a verified Sandbox payment.
5. Reload the success URL and confirm that the approval is treated as a duplicate rather than creating a second entitlement.
6. Modify the `amount` query value and confirm that approval fails without marking the order paid.
7. Cancel in the payment window and confirm that the localized failure page is shown.
8. Request the download endpoint without payment and confirm HTTP 403.
9. Confirm that Preview shows test-payment copy and that Production accepts test keys only while the isolated card-review gate is explicitly enabled and the Live gate is disabled.

Run `npm run lint`, `npx tsc --noEmit`, `npm run test:store`, and `npm run build` before merging.
