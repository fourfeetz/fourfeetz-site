# FOURFEETZ automatic news operations

## Safety model

The workflow is installed in safe mode. `DRY_RUN` defaults to `true`, `AUTO_PUBLISH_ENABLED` defaults to `false`, and the generator can write only below `content/news/`. It never edits application code, configuration, existing content, or deployment settings. GitHub Actions concurrency prevents overlapping runs, the engine allows at most two Korean articles per KST calendar day, and a source URL plus text-similarity check prevents repeat publication. The monthly usage ledger is stored in a dedicated GitHub Issue, so every run reads the same latest durable state without treating Actions cache or artifacts as authoritative. A rejected run does not create a content commit or trigger Vercel.

The publishing gate combines deterministic checks with a separate AI review:

| Category | Maximum | Evidence |
| --- | ---: | --- |
| Source reliability | 25 | Configured host allowlist, per-source rating, and a distinct corroborating publisher |
| Originality | 25 | Pairwise similarity plus independent AI review |
| Duplicate check | 20 | Exact source URL and Jaccard text similarity |
| SEO | 15 | Title, description, keyword, and section rules plus AI review |
| Safety/copyright | 15 | Prohibited-pattern checks plus independent AI review |

Anything below 90 is rejected. Unclear or single-source stories, fewer than two independently corroborated facts, unsupported facts, duplicates, copyright risk, unsafe medical advice, and advertising/spam are hard blocks regardless of score. The code first matches reports from distinct hostnames and then the independent AI review checks fact-level corroboration. This is an editorial risk-control system, not a guarantee that AI output is error-free; review the first dry-run artifacts before activation.

## Initial GitHub setup

1. Review and merge `feature/auto-news-engine` manually. Do not enable auto-merge. GitHub scheduled workflows run from the repository default branch, so the schedule starts only after this workflow is approved and merged.
2. In **Settings → Secrets and variables → Actions**, add the required secret `OPENAI_API_KEY`.
3. Add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`. They are mandatory whenever a news commit is created; missing credentials fail the verification step and trigger rollback of that bot commit.
4. Add repository variables:
   - `DRY_RUN=true`
   - `AUTO_PUBLISH_ENABLED=false`
   - `MONTHLY_BUDGET_USD=10`
   - `MAX_RUN_ESTIMATED_USD=2`
   - `OPENAI_MODEL=gpt-5.4-mini` (or another Structured Outputs-capable model reviewed by the owner)
   - Optional `NEWS_FEEDS_JSON` to replace the built-in allowlisted feeds. Each entry needs `name`, `url`, `allowedHosts`, `reliability` (0–25), and `topics`.
5. Ensure Actions has read/write repository permission and Issues are enabled. The workflow uses the built-in `GITHUB_TOKEN` with `issues: write` to create and maintain one issue named `[automation] FourFeetz news API budget ledger`; no additional secret or paid service is required. Ensure the approved publishing branch permits the workflow bot to push. Keep required reviews for human-authored code; if direct content pushes are disallowed, use a narrowly scoped ruleset exception for `content/news/**` only.
6. Connect the repository to Vercel and confirm Production Branch points to the approved publishing branch (normally `main`). Do not change the production branch during dry runs.

## Dry-run validation

Run **FourFeetz Auto News → Run workflow** with `dry_run=true`. Confirm:

- feed failures are isolated and logged;
- rejected candidates show a score and hard-block reasons;
- no article JSON is committed;
- `npm run test:news`, `npm run news:verify`, and `npm run build` pass;
- the dedicated budget Issue contains the current month, reservation, and estimated token-cost counters;
- existing routes, redirects, canonical URLs, hreflang entries, and sitemap entries remain intact.

Repeat at several scheduled windows. GitHub cron may start late; freshness checks use item timestamps rather than assuming an exact start time.

For a network-only smoke test without an OpenAI call, run `NEWS_COLLECT_ONLY=true npm run news:dry-run` (PowerShell: `$env:NEWS_COLLECT_ONLY='true'; npm run news:dry-run`).

## Activation

After owner approval, set `DRY_RUN=false` and `AUTO_PUBLISH_ENABLED=true`. Both flags are required. The schedule is `00:00` and `09:00` UTC, corresponding to 09:00 and 18:00 Korea Standard Time. If no candidate passes, the workflow commits nothing.

Each successful content commit triggers Vercel through its Git integration. When Vercel credentials are configured, the workflow polls the deployment for the generated commit. An `ERROR`, `CANCELED`, or timeout result reverts that one bot commit and pushes the revert, allowing Vercel to redeploy the prior content state.

## Cost estimate

The default model pricing variables correspond to the documented GPT-5.4 mini standard rates of USD 0.75 per million input tokens and USD 4.50 per million output tokens. At two runs a day and at most two articles per day, a practical text-only estimate is roughly USD 1–8/month depending on source size, rejection rate, and generated length. The repository guard defaults to USD 10/month and reserves up to USD 2 before any API call. The reservation is persisted in the GitHub Issue first; successful calls add their estimated token cost, and only a fully completed run releases the unused portion. A failed or cancelled run leaves its conservative reservation in place, preventing uncertain cost from being silently forgotten. The fixed Actions concurrency group serializes ledger writers, reruns use a distinct attempt identifier, and month buckets retain prior history.

The ledger amount is an estimate derived from response token usage and configured prices. It can differ from the actual OpenAI invoice because provider pricing, cached or reasoning tokens, rounding, and billing adjustments may differ. Treat the OpenAI usage/billing dashboard and a provider-side project limit as authoritative. A retained reservation may intentionally overcount until an operator reconciles it after checking provider billing; never delete or reset the ledger merely to resume publishing.

GitHub Issue storage was selected over Actions cache, artifacts, or a branch commit because it supplies one repository-scoped durable record that every run can read and update immediately, survives job failure, and requires neither a paid service nor an extra credential. The issue contains counters and run identifiers only, never API keys or article source data. If Issue read, parse, create, or update fails, the workflow stops before further API calls or publication.

## Incident response

- Set `AUTO_PUBLISH_ENABLED=false` for an immediate publishing stop while retaining dry-run diagnostics.
- Set `DRY_RUN=true` before changing sources, prompts, model, or score rules.
- Correct or remove a published JSON article only through a reviewed human commit; the bot does not overwrite existing articles.
- Check the dedicated budget Issue and workflow logs for run, reservation, and estimated-cost evidence. Reconcile a retained reservation only after comparing the run log with the OpenAI billing dashboard.
- A compromised key must be revoked in the provider dashboard and replaced in GitHub Secrets; never commit it.

