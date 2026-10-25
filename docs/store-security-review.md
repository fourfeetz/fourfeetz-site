# Store security hardening review

Review date: 2026-10-25. Scope: dependency baseline and `app/api/store/**` from merged PR #52. No live payment credentials, production database, paid files, or production checkout were enabled.

## Dependency audit: before and after

The baseline `npm audit --json` reported 10 vulnerable packages: 1 critical, 8 high, and 1 moderate. After the updates below and compatible transitive patches, `npm audit` reports zero known vulnerabilities.

| Package | Before | After | Vulnerable range | Baseline severity and advisories | Runtime relevance |
| --- | --- | --- | --- | --- | --- |
| `next` | 16.2.10 | 16.4.3 | aggregate audit range through 16.4.0 | Critical/High/Moderate, including GHSA-p293-qw3h-jr36, GHSA-2xp9-vwfh-vxw4, GHSA-vcvr-r3jv-pc5j, GHSA-2464-fhr4-w9xw, GHSA-673q-mjm6-r5xr, GHSA-6gpp-xcg3-4w24, GHSA-m99w-x7hq-7vfj, GHSA-89xv-2m56-2m9x, GHSA-p9j2-gv94-2wf4, GHSA-cjq9-62q9-8jv4, GHSA-p3m5-59mp-jv5r | Direct production framework; affected App Router, image and server execution paths. |
| `sharp` | 0.34.5 | 0.35.5 | `<=0.35.5-rc.1` | High: GHSA-f88m-g3jw-g9cj, GHSA-rgj7-g3m4-5g8c, GHSA-wq5f-xc86-pv6w | Optional Next.js image runtime used by `next/image`. |
| `postcss` | 8.4.31 / 8.5.16 | 8.5.23 | `<=8.5.22` | High/Moderate: GHSA-qx2v-qp2m-jg93, GHSA-6g55-p6wh-862q, GHSA-fxqj-rqcc-2cmp, GHSA-r28c-9q8g-f849 | Next.js/Tailwind CSS build path; not fed user-authored CSS in this project. |
| `nanoid` | 3.3.15 | 3.3.20 | `<=3.3.17` | High: GHSA-28wg-ghj8-5hjv, GHSA-2v37-7h3g-55p8 | Transitive PostCSS dependency; no direct application import. |
| `baseline-browser-mapping` | 2.10.42 | 2.11.32 | `>=2.0.0 <2.11.0` | Moderate: GHSA-w5vr-8v7q-w6rv | Next.js/Browserslist build metadata; no direct request input. |
| `source-map-js` | 1.2.1 | 1.2.2 | `>=1.0.0 <1.2.2` | High: GHSA-68fv-2mgg-jv7q | CSS/source-map build dependency; no direct application import. |
| `brace-expansion` | 1.1.16 / 5.0.7 | 1.1.21 / 5.0.12 | `<=1.1.20` or `4.0.0–5.0.11` | High/Moderate: GHSA-mh99-v99m-4gvg, GHSA-rgw5-rvv9-x895, GHSA-q2hr-2g5m-vwhr, GHSA-qhr7-859c-m2p7, GHSA-6j4f-fj2g-mc7p | ESLint/TypeScript tooling only. |
| `browserslist` | 4.28.5 | 4.29.4 | `<=4.28.6` | High: GHSA-c83g-rgw3-j3cx, GHSA-73wf-gq98-2v4g | Build/lint tooling; no untrusted custom stats file is accepted. |
| `js-yaml` | 4.3.0 | 4.3.2 | `4.0.0–4.3.1` | High: GHSA-5p4m-2wfm-xmqj, GHSA-2883-xcg3-v3hh | ESLint configuration parsing; no application YAML endpoint. |
| `zod` | 4.4.3 | 4.6.7 | `<4.6.6` | High: GHSA-mrhx-c7xc-m3w5 | ESLint plugin path; no direct application import. |

`@next/third-parties` and `eslint-config-next` were aligned from 16.2.10 to 16.4.3. React and React DOM remain at 19.2.4 because they satisfy Next.js 16.4.3 peer requirements and no audit finding required a React upgrade.

## Store API threat review

| Risk | Current control | Remaining requirement before activation |
| --- | --- | --- |
| Order guessing / other buyer access | Order numbers now include 96 bits of random entropy. Paid download remains uniformly forbidden and an order number is never treated as authorization. | Use a separate hashed, single-purpose access token and buyer re-verification; never authorize with order number or email alone. |
| Client price/status tampering | Product price and currency come from the server snapshot. `PENDING` is the only payable state. | Persist the snapshot in PostgreSQL and compare it with the provider response inside one transaction. |
| Forged success URL | Domain approval requires explicit provider verification; the success page never marks `PAID`. | Confirm with Toss using the server secret, then pass only the verified provider response into the domain transition. |
| Duplicate confirmation/event | Atomic repository contract and unique schema constraints cover order number, provider payment ID, event ID and entitlement. | Implement the transaction in the real database and test concurrent requests. |
| Webhook forgery/replay | Generic code now requires `providerProofVerified`; no fictional Toss signature header is assumed. Duplicate provider event IDs are ignored. | For Toss general payment events, re-query by `paymentKey`; for providers that publish signatures, use their official verification API. |
| Download bypass/refund | Requires `PAID`, matching product, active non-revoked entitlement. Endpoint remains disabled. | Add private storage and a short-lived signed URL only after the DB transaction is complete. |
| Secrets/logs | Only public client keys can reach the browser. Log masking is recursive and case-insensitive for authorization, payment key, card and email fields. | Keep server secrets in environment-scoped Vercel variables and use structured allowlisted logs. |
| CORS/CSRF | Mutation routes reject cross-site Fetch Metadata and mismatched `Origin`; no permissive CORS headers are emitted. | Retain same-origin checks when a real repository is added; add authenticated CSRF tokens if cookie-authenticated buyer actions are introduced. |
| Malformed/large requests | Shared parser enforces JSON media type, a 4 KiB body ceiling, object-only JSON and generic non-cached errors. Disabled routes do not parse attacker bodies. | Define provider-specific webhook size/schema limits before enabling the webhook endpoint. |
| Request abuse | All payment endpoints remain disabled and return `Retry-After`; no in-memory limiter is presented as production protection. | Add Vercel Firewall rate limits and/or a durable DB/Redis limiter keyed by trusted IP plus order/customer risk signals. |

## Fail-closed state

- Production checkout is disabled even if test keys exist.
- Missing database or server secret disables checkout.
- Confirmation and webhook routes return `503` without changing order state.
- Paid download returns `403` without checking or revealing whether an order exists.
- Free PDF remains available in Vercel Preview only; Production remains disabled pending approval.
- Real Toss/PayPal Sandbox verification and concurrent database tests remain unexecuted because accounts, keys and a database are intentionally absent.
