# AdSense readiness work record — 2026-09-21

This file is an internal review record. It is not a Google approval checklist and is not served as public site content.

## Scope decision

- Site type: bilingual original animal-character studio, published video portfolio, production records, practical guides, and production services.
- Main gap addressed: improve a search-visible troubleshooting guide with an observable diagnostic method; align English and Korean privacy disclosures; keep an unverified social directory out of the sitemap; remove English navigation links that unnecessarily redirected through the Korean root page.
- Existing content volume: sufficient for this work unit. No article-count or word-count threshold was used.
- Excluded: account changes, AdSense review submission, ad activation, external CMS publication, remote push, and production deployment.

## Conditional work A–D

| Work | Status | Evidence and decision |
| --- | --- | --- |
| A. Site connection / ads.txt | Applied and verified locally | Root metadata contains `ca-pub-8793962309929245`; `public/ads.txt` contains the matching `pub-8793962309929245` DIRECT record. No ID was invented or replaced. |
| B. Ads not operating | Applied | No AdSense ad-request script or ad unit was found. The site states that it is preparing for AdSense. Advertising was not activated. |
| C. Ads operating | N/A based on repository evidence | No existing ad placement or ad request was available to audit. This does not establish the account-side state. |
| D. Regional consent | UNKNOWN | Actual visitor countries and future personalization settings were not supplied. The privacy pages now say this must be checked before ads are enabled. No homemade banner was presented as a certified CMP. |

## Page-level content review

### `/insights/common-ai-video-generation-failures`

- Who and what problem: AI-video creators who can see a bad result but need to identify what failed and choose a targeted retry.
- Added value: the `why-failures-cluster` section separates observable failure moments from claims about unknown model internals, then maps four symptoms to one-variable retries. The `controlled-retry` section adds a reproducible five-step comparison and accepted-seconds cost signal.
- Evidence: FourFeetz observations already documented in the page's body/identity, duplicate/prop, wind/camera, and face/action sections. The new wording is explicitly limited to observed clustering and does not claim access to model internals.
- Human review required before publication: confirm every stated observation matches retained project outputs; confirm tool/model labels and the 2026-09-21 update date; review Korean and English wording together.

### `/ko/insights/common-ai-video-generation-failures`

- Who and what problem: 같은 오류를 반복 생성하지 않도록 문제 구간과 한 가지 변경 조건을 정하려는 한국어 사용자.
- Added value: 영문 보강 내용과 같은 진단표·재시도 절차를 자연스러운 한국어로 제공한다.
- Evidence: 같은 페이지의 실제 제작 관찰 범위만 사용하고 모델 내부 원인을 단정하지 않는다.
- Human review required before publication: 실제 보관 결과와 문장 일치 여부, 번역 의미, 업데이트 날짜를 확인한다.

### `/privacy` and `/ko/privacy`

- Who and what problem: visitors who need to understand present analytics/contact processing separately from possible future advertising.
- Added value: states that the policy itself does not activate ads, marks regional consent as a pre-activation check, aligns retention wording, and identifies the verified operator information in English.
- Evidence: `app/layout.tsx` contains Google Analytics and the AdSense account meta value; the inquiry form opens the user's email client rather than submitting to a server; Korean contact/privacy pages already contain the operator data.
- Human review required before publication: operator confirms business information, actual analytics configuration, retention practice, visitor regions, and whether/when ads are enabled. Legal compliance is not certified by this technical review.

### `/social`

- Who and what problem: visitors should not be led to believe that verified external channel links are available when the repository contains only internal anchors.
- Added value: replaces the misleading “official channel” request CTA with an accurate publishing-format description.
- Evidence: all entries in `lib/i18n.ts` point to `/social#...`; no verified external account URLs are stored in the project.
- Index decision: `noindex, follow` and removal from the sitemap because it is not currently a destination with verified external channels. This is content-state hygiene, not an AdSense review bypass.
- Human review required before publication: add only verified official account URLs; then reassess indexing and sitemap inclusion.

### Shared navigation and memorial-service media

- Who and what problem: English readers should reach the English homepage directly, and memorial-page images should reserve responsive layout space and use the site's image optimization path.
- Added value: English Home links and breadcrumbs now use `/en` instead of the Korean-default `/` redirect. The two memorial-page raw image elements now use `next/image` with explicit intrinsic dimensions or responsive `fill`/`sizes`.
- Evidence: `next.config.ts` redirects `/` to `/ko`; the original English links therefore crossed languages. ESLint previously reported two `no-img-element` warnings and reports none after the change.
- Human review required before publication: visually inspect the memorial cover and story crop on a phone and desktop after deployment.

## Human review before any AdSense request

- [ ] Read both updated failure-guide versions and compare statements with retained source generations.
- [ ] Confirm image/video rights for every public production record and portfolio item.
- [ ] Confirm operator name, registration number, email, and actual retention practice.
- [ ] Check AdSense account-side site status separately; an `ads.txt` response does not prove Ready status.
- [ ] Identify visitor countries and intended ad-personalization mode; configure a Google-certified CMP when required.
- [ ] Review Auto ads/account settings before approval so ads do not appear on inquiry, empty, error, or non-content screens.
- [ ] Deploy through the normal workflow, inspect the real URLs, and request indexing only after the deployed pages are verified.
