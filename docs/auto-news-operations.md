# FOURFEETZ automatic news operations

## Safety model

The workflow is installed in safe mode. `DRY_RUN` defaults to `true`, `AUTO_PUBLISH_ENABLED` defaults to `false`, and the generator can write only below `content/news/`. It never edits application code, configuration, existing content, or deployment settings. GitHub Actions concurrency prevents overlapping runs, the engine allows at most two Korean articles per KST calendar day, and a source URL plus text-similarity check prevents repeat publication. The monthly usage ledger is ignored by Git and persisted through the Actions cache, so a rejected run does not create a content commit or trigger Vercel.

The publishing gate combines deterministic checks with a separate AI review:

| Category | Maximum | Evidence |
| --- | ---: | --- |
| Source reliability | 25 | Configured host allowlist and per-source rating |
| Originality | 25 | Pairwise similarity plus independent AI review |
| Duplicate check | 20 | Exact source URL and Jaccard text similarity |
| SEO | 15 | Title, description, keyword, and section rules plus AI review |
| Safety/copyright | 15 | Prohibited-pattern checks plus independent AI review |

Anything below 90 is rejected. Unclear sources, unsupported facts, duplicates, copyright risk, unsafe medical advice, and advertising/spam are hard blocks regardless of score. This is an editorial risk-control system, not a guarantee that AI output is error-free; review the first dry-run artifacts before activation.

## Initial GitHub setup

1. Review and merge `feature/auto-news-engine` manually. Do not enable auto-merge. GitHub scheduled workflows run from the repository default branch, so the schedule starts only after this workflow is approved and merged.
2. In **Settings → Secrets and variables → Actions**, add the required secret `OPENAI_API_KEY`.
3. For deployment verification and automatic content rollback, also add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`. If omitted, Vercel verification is explicitly skipped; normal Vercel Git integration can still deploy the commit.
4. Add repository variables:
   - `DRY_RUN=true`
   - `AUTO_PUBLISH_ENABLED=false`
   - `MONTHLY_BUDGET_USD=10`
   - `MAX_RUN_ESTIMATED_USD=2`
   - `OPENAI_MODEL=gpt-5.4-mini` (or another Structured Outputs-capable model reviewed by the owner)
   - Optional `NEWS_FEEDS_JSON` to replace the built-in allowlisted feeds. Each entry needs `name`, `url`, `allowedHosts`, `reliability` (0–25), and `topics`.
5. Ensure Actions has read/write repository permission and that the approved publishing branch permits the workflow bot to push. Keep required reviews for human-authored code; if direct content pushes are disallowed, use a narrowly scoped ruleset exception for `content/news/**` only.
6. Connect the repository to Vercel and confirm Production Branch points to the approved publishing branch (normally `main`). Do not change the production branch during dry runs.

## Dry-run validation

Run **FourFeetz Auto News → Run workflow** with `dry_run=true`. Confirm:

- feed failures are isolated and logged;
- rejected candidates show a score and hard-block reasons;
- no article JSON is committed;
- `npm run test:news`, `npm run news:verify`, and `npm run build` pass;
- the artifact contains the monthly usage ledger;
- existing routes, redirects, canonical URLs, hreflang entries, and sitemap entries remain intact.

Repeat at several scheduled windows. GitHub cron may start late; freshness checks use item timestamps rather than assuming an exact start time.

For a network-only smoke test without an OpenAI call, run `NEWS_COLLECT_ONLY=true npm run news:dry-run` (PowerShell: `$env:NEWS_COLLECT_ONLY='true'; npm run news:dry-run`).

## Activation

After owner approval, set `DRY_RUN=false` and `AUTO_PUBLISH_ENABLED=true`. Both flags are required. The schedule is `00:00` and `09:00` UTC, corresponding to 09:00 and 18:00 Korea Standard Time. If no candidate passes, the workflow commits nothing.

Each successful content commit triggers Vercel through its Git integration. When Vercel credentials are configured, the workflow polls the deployment for the generated commit. An `ERROR`, `CANCELED`, or timeout result reverts that one bot commit and pushes the revert, allowing Vercel to redeploy the prior content state.

## Cost estimate

The default model pricing variables correspond to the documented GPT-5.4 mini standard rates of USD 0.75 per million input tokens and USD 4.50 per million output tokens. At two runs a day and at most two articles per day, a practical text-only estimate is roughly USD 1–8/month depending on source size, rejection rate, and generated length. The hard repository budget defaults to USD 10/month and includes both generation and review calls recorded from API usage. OpenAI project-level billing limits should also be configured as the authoritative external cap.

## Incident response

- Set `AUTO_PUBLISH_ENABLED=false` for an immediate publishing stop while retaining dry-run diagnostics.
- Set `DRY_RUN=true` before changing sources, prompts, model, or score rules.
- Correct or remove a published JSON article only through a reviewed human commit; the bot does not overwrite existing articles.
- Check the Actions cache/artifact and `.state/usage-YYYY-MM.json` for run and cost evidence.
- A compromised key must be revoked in the provider dashboard and replaced in GitHub Secrets; never commit it.

