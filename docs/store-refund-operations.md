# Store refund review operations

This is an operator design, not an automated refund tool. Do not call the Toss cancellation API or change an order from this document.

## Review checklist

1. Locate the order by its internal order number and confirm the product, amount, currency, provider status, and provider event history.
2. Check `refund_policy_version` and `refund_policy_consented_at`. A `NULL` value on an older order means no consent evidence is available; never infer or backfill it.
3. Check the active or revoked entitlement and its expiry.
4. Review `download_delivery_events`. `STREAM_STARTED` means the server obtained the private PDF and began the HTTP response. It does not prove that the buyer saved or opened the file.
5. Record the buyer's stated reason outside payment secrets. Apply the published policy and mandatory law; do not reject a request solely because a download event exists.
6. If a refund is approved, an authorized operator should verify the provider response before the existing terminal-status transaction marks the order `REFUNDED` and revokes its entitlement atomically.

## Controls required before an admin tool

- authenticated, role-limited operator access with MFA;
- two-step confirmation and a human-readable reason;
- provider-side idempotency and reconciliation;
- immutable operator audit records without raw payment keys or download tokens;
- no bulk refund or bulk entitlement-revocation action;
- preview testing and legal/operations approval before Production use.

