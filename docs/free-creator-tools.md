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

## Protoface credit guide (2026-11-25)

The AI video cost calculator now defaults to the Seedance 2.5 720p, 5-second, no-video-input preset (92 credits). Fourteen presets cover Seedance 2.5/2.0, Kling 3.0 Pro, LTX 2.5 Fast, MiniMax H3, Runway Gen-4 Turbo, Veo 3.1 Fast and Wan 3.0 Prime. Official model-page source links and conditions are stored in `lib/creator-tools/protoface.ts` and rendered in both languages below the calculator.

Public pay-as-you-go pricing uses $0.01 per credit. Decimal rates are rounded up per generation to an integer cent before multiplying by shots/attempts. 1,000 credits / $10 is a reference conversion unit, not an offered purchase pack. Preset mode hides pack-purchase outputs; custom inputs retain pack calculations. Unlimited subscriptions and reference surcharges are excluded. Rates are a dated snapshot, not live quotes; check Studio before generation. Update the checked date, rates, conditions and independent expected outputs together when refreshing prices.

Applying a row retains shot/attempt counts, replaces its rate and duration, and selects USD. Changing rate/duration/currency enters custom mode. Shared URLs retain a model identity only when its rate fields and USD currency match. Existing old custom links remain supported.

The bottom image CTA reuses the existing multi-model workflow artwork and FourFeetz affiliate URL `https://protoface.com/studio?fpr=fourfeetz`, with sponsored rel attributes and a visible disclosure. No third-party generation request or purchase is made by this calculator.
