# Free creator tools

Three free browser calculators, with Korean and English pages:

- `/tools/aspect-ratio-calculator` and `/ko/tools/aspect-ratio-calculator`
- `/tools/video-file-size-calculator` and `/ko/tools/video-file-size-calculator`
- `/tools/ai-video-cost-calculator` and `/ko/tools/ai-video-cost-calculator`

No sign-in, checkout, upload, database or external pricing API is required. Existing payment and database settings are unchanged. Cost inputs are supplied by the visitor; no claim is made about current provider pricing.

## Discovery

The tools link from the main navigation, both homepages, the existing tools directory and site search. Each page has localized title/description, canonical and language alternates, WebApplication and BreadcrumbList data, a worked example, formula, assumptions and FAQ. Both language versions are in the existing sitemap. Existing production-tool entries remain available.

Related production guides, the existing store and custom-video services link from each calculator. No new ad provider or ad enablement is added. Search indexing, rankings and advertising approval remain external outcomes.

## Measurement

The existing Google Analytics integration receives `tool_calculate` when a visitor submits a valid calculation and `tool_share` after a result link is copied. Parameters: `tool_slug`, `tool_language`. Input numbers are not included in these events. Shared links explicitly contain the numeric inputs and chosen currency, with a visible notice and manual-copy fallback.

## Calculations

- Center crop: retained source area relative to target aspect ratio. Output height rounded to nearest integer; not a video renderer or upscaler.
- File size: seconds × combined average Mbps ÷ 8, expressed in decimal MB/GB and binary MiB. VBR and container overhead can change actual size.
- Generation budget: shot count × attempts (including the first) × credits per attempt. Allocated usage cost differs from whole-pack purchase cost, which assumes no existing credit balance. Taxes, exchange conversion, editing and labor excluded.

## Verification

`npm run test:tools` checks independent worked examples, invalid inputs, URL input bounds and fractional-credit pack rounding. Run `npx next typegen`, `npx tsc --noEmit`, and `npm run build` for route and integration validation. Use the existing `test:blog` and `test:store` suites for adjacent regression coverage.
