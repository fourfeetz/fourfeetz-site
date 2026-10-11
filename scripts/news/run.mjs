import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import {
  MAX_DAILY_ARTICLES, articlesPublishedOn, attachCorroboratingSources, deduplicateCandidates, isFresh, isRelevant,
  extractSourceText, freshnessReason, loadJsonFiles, parseFeedWithDiagnostics, selectCorroboratedPrimaries, slugify, sourceId, writeJsonSafely,
} from "./core.mjs";
import { loadFeeds } from "./config.mjs";
import { estimateCost, generateArticle, reviewArticle, rewriteArticle } from "./openai.mjs";
import { budgetExposure, createBudgetStore, recordBudgetUsage, releaseBudget, reserveBudget } from "./budget.mjs";
import { runQualityCycle } from "./quality-cycle.mjs";

const root = process.cwd();
const articleDirectory = path.join(root, "content", "news", "ko");
const stateDirectory = path.join(root, "content", "news", ".state");
const dryRun = process.env.DRY_RUN !== "false";
const publishingEnabled = process.env.AUTO_PUBLISH_ENABLED === "true";
const fixturePath = process.env.NEWS_FIXTURE_PATH;
const now = process.env.NEWS_NOW ? new Date(process.env.NEWS_NOW) : new Date();
const koreanDate = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
const month = koreanDate.slice(0, 7);
const budgetLimit = Number(process.env.MONTHLY_BUDGET_USD || "10");
const maxRunEstimate = Number(process.env.MAX_RUN_ESTIMATED_USD || "2");
const runId = `${process.env.GITHUB_RUN_ID ?? "local"}-${process.env.GITHUB_RUN_ATTEMPT ?? crypto.randomUUID()}`;
const budgetStore = createBudgetStore({ stateDirectory });

function log(event, details = {}) {
  process.stdout.write(`${JSON.stringify({ at: new Date().toISOString(), event, ...details })}\n`);
}

function compactDiagnostics(items = []) {
  return items.slice(0, 20).map((item) => ({
    subject: String(item.subject ?? "").slice(0, 300),
    reason: String(item.reason ?? "").slice(0, 500),
    requiredEvidence: String(item.requiredEvidence ?? "").slice(0, 500),
  }));
}

function compactDuplicateFindings(items = []) {
  return items.slice(0, 20).map((item) => ({
    category: item.category,
    subject: String(item.subject ?? "").slice(0, 300),
    reason: String(item.reason ?? "").slice(0, 500),
    comparisonTarget: String(item.comparisonTarget ?? "").slice(0, 500),
  }));
}

function qualityLog({ candidate, attempt, review, decision }) {
  log("quality_result", {
    source: candidate.url,
    attempt,
    score: decision.score.total,
    scores: decision.score,
    blocks: decision.hardBlocks,
    deterministic: {
      maxExistingSimilarity: Number(decision.checks.maxSimilarity.toFixed(4)),
      sourceCopyRatio: Number(decision.checks.sourceCopyRatio.toFixed(4)),
      seoValid: decision.checks.seoValid,
      editorialAnalysisValid: decision.checks.editorialAnalysisValid,
      claimsHaveIndependentEvidence: decision.checks.claimsHaveIndependentEvidence,
    },
    diagnostics: {
      evidenceBasis: review.evidenceBasis ?? null,
      unsupportedFacts: (review.unsupportedFacts ?? []).slice(0, 20).map((value) => String(value).slice(0, 500)),
      failedClaims: compactDiagnostics(review.failedClaims),
      copyrightRisks: compactDiagnostics(review.copyrightRisks),
      duplicateReasons: compactDiagnostics(review.duplicateReasons),
      duplicateFindings: compactDuplicateFindings(review.duplicateFindings),
      crossVerificationFailures: compactDiagnostics(review.crossVerificationFailures),
      revisionPossible: review.revisionPossible === true,
      revisionInstructions: (review.revisionInstructions ?? []).slice(0, 8).map((value) => String(value).slice(0, 500)),
      reviewReasons: (review.reasons ?? []).slice(0, 8).map((value) => String(value).slice(0, 500)),
    },
  });
}

async function collectCandidates() {
  if (fixturePath) {
    const fixture = JSON.parse(fs.readFileSync(path.resolve(fixturePath), "utf8"));
    return { candidates: fixture.candidates, feedReports: [{ feed: "fixture", status: "ok", entries: fixture.candidates.length, accepted: fixture.candidates.length, rejected: {} }] };
  }
  const feeds = loadFeeds();
  const results = await Promise.allSettled(feeds.map(async (feed) => {
    const response = await fetch(feed.url, { headers: { "User-Agent": "FourFeetzNewsBot/1.0 (+https://fourfeetz.com/ko/news)" }, signal: AbortSignal.timeout(20_000) });
    if (!response.ok) throw new Error(`${response.status} ${feed.url}`);
    const xml = await response.text();
    if (xml.length > 2_000_000) throw new Error(`Feed exceeds 2 MB safety limit: ${feed.url}`);
    const parsed = parseFeedWithDiagnostics(xml, feed);
    return { feed: feed.name, status: "ok", ...parsed.diagnostics, candidates: parsed.items };
  }));
  const candidates = [];
  const feedReports = results.map((result, index) => {
    if (result.status === "rejected") {
      const report = { feed: feeds[index].name, status: "failed", error: String(result.reason) };
      log("feed_error", report);
      return report;
    }
    candidates.push(...result.value.candidates);
    const { candidates: omitted, ...report } = result.value;
    void omitted;
    return report;
  });
  return { candidates, feedReports };
}

async function hydrateSources(candidates) {
  if (fixturePath) return candidates;
  return Promise.all(candidates.map(async (candidate) => {
    try {
      const response = await fetch(candidate.url, { headers: { "User-Agent": "FourFeetzNewsBot/1.0 (+https://fourfeetz.com/ko/news)", Accept: "text/html,application/xhtml+xml" }, redirect: "follow", signal: AbortSignal.timeout(20_000) });
      const contentType = response.headers.get("content-type") ?? "";
      if (!response.ok || !contentType.includes("text/html") || !candidate.feed.allowedHosts.includes(new URL(response.url).hostname.toLowerCase())) return candidate;
      return { ...candidate, sourceText: extractSourceText(await response.text()) };
    } catch (error) {
      log("source_fetch_error", { source: candidate.url, error: String(error) });
      return candidate;
    }
  }));
}

async function hydrateCandidateGroups(candidates) {
  return Promise.all(candidates.map(async (candidate) => {
    const hydrated = await hydrateSources([candidate, ...(candidate.corroboratingSources ?? [])]);
    return { ...hydrated[0], corroboratingSources: hydrated.slice(1) };
  }));
}

function fixtureGeneration() {
  const fixture = JSON.parse(fs.readFileSync(path.resolve(fixturePath), "utf8"));
  return { value: fixture.article, usage: { input_tokens: 0, output_tokens: 0 } };
}

function fixtureReview() {
  const fixture = JSON.parse(fs.readFileSync(path.resolve(fixturePath), "utf8"));
  return { value: fixture.review, usage: { input_tokens: 0, output_tokens: 0 } };
}

async function main() {
  if (!Number.isFinite(budgetLimit) || budgetLimit <= 0) throw new Error("MONTHLY_BUDGET_USD must be positive");
  if (!Number.isFinite(maxRunEstimate) || maxRunEstimate <= 0) throw new Error("MAX_RUN_ESTIMATED_USD must be positive");
  if (maxRunEstimate > budgetLimit) throw new Error("MAX_RUN_ESTIMATED_USD cannot exceed MONTHLY_BUDGET_USD");
  const existingArticles = loadJsonFiles(articleDirectory);
  const remainingToday = Math.max(0, MAX_DAILY_ARTICLES - articlesPublishedOn(existingArticles, koreanDate));
  if (remainingToday === 0) return log("daily_limit_reached", { date: koreanDate });

  const { candidates: collected, feedReports } = await collectCandidates();
  const feedsSucceeded = feedReports.filter(({ status }) => status === "ok").length;
  const feedsFailed = feedReports.length - feedsSucceeded;
  const parseRejected = feedReports.reduce((totals, report) => {
    for (const [reason, count] of Object.entries(report.rejected ?? {})) totals[reason] = (totals[reason] ?? 0) + count;
    return totals;
  }, {});
  log("collection_summary", { feedsConfigured: feedReports.length, feedsSucceeded, feedsFailed, collected: collected.length, parseRejected, feeds: feedReports });

  const relevant = collected.filter(isRelevant);
  const relevantFresh = relevant.filter((candidate) => isFresh(candidate, now));
  const dateRejected = relevant.reduce((totals, candidate) => {
    const reason = freshnessReason(candidate, now);
    if (reason !== "fresh") totals[reason] += 1;
    return totals;
  }, { too_old: 0, future: 0 });
  log("filter_summary", {
    input: collected.length,
    keywordAccepted: relevant.length,
    keywordRejected: collected.length - relevant.length,
    dateAccepted: relevantFresh.length,
    dateRejected,
  });

  const corroborated = attachCorroboratingSources(relevantFresh);
  const withIndependentSources = corroborated.filter((candidate) => candidate.corroboratingSources.length > 0);
  const primaries = selectCorroboratedPrimaries(corroborated);
  const hydrated = await hydrateCandidateGroups(primaries.slice(0, remainingToday * 6));
  const deduplicated = deduplicateCandidates(hydrated, existingArticles);
  // Evaluate additional verified candidates when earlier drafts fail editorial review.
  // Publishing is still limited by remainingToday and the existing budget guards.
  const eligible = deduplicated.slice(0, Math.min(remainingToday * 4, 8));
  log("candidate_selection_summary", {
    dateAccepted: relevantFresh.length,
    independentlyCorroborated: withIndependentSources.length,
    crossVerificationRejected: relevantFresh.length - withIndependentSources.length,
    primaryEvents: primaries.length,
    duplicateRejected: hydrated.length - deduplicated.length,
    apiCandidates: eligible.length,
  });
  if (!eligible.length) return log("no_suitable_news", { collected: collected.length, apiCandidates: 0 });
  log("api_candidates_ready", { count: eligible.length, candidates: eligible.map((candidate) => ({ title: candidate.title, source: candidate.feed.name, corroboratingSources: candidate.corroboratingSources.map((source) => ({ title: source.title, source: source.feed.name })) })) });
  if (process.env.NEWS_COLLECT_ONLY === "true") return log("collection_complete", { collected: collected.length, eligible: eligible.length, sources: eligible.map(({ url }) => url) });

  const reservation = await reserveBudget({ store: budgetStore, month, runId, reserveUsd: maxRunEstimate, limitUsd: budgetLimit });
  if (!reservation.reserved) return log("budget_guard_stopped", { spentUsd: reservation.ledger.spentUsd, budgetLimit, maxRunEstimate });
  let published = 0;
  let latestLedger = reservation.ledger;
  let completed = false;
  try {
    for (const candidate of eligible) {
      if (published >= remainingToday) break;
      log("generation_started", { source: candidate.url, corroboratingSourceCount: candidate.corroboratingSources.length });
      const generated = fixturePath ? fixtureGeneration() : await generateArticle(candidate);
      latestLedger = await recordBudgetUsage({ store: budgetStore, month, runId, usage: generated.usage, costUsd: estimateCost(generated.usage) });
      if (budgetExposure(latestLedger) > budgetLimit) throw new Error("Budget exposure exceeded after generation; stopping before review");
      log("generation_completed", { source: candidate.url, verifiedClaimCount: generated.value.verifiedClaims?.length ?? 0, hasEditorialAnalysis: Boolean(generated.value.editorialAnalysis) });
      const baseSlug = slugify(generated.value.title);
      const slug = existingArticles.some((article) => article.slug === baseSlug) ? `${baseSlug}-${sourceId(candidate.url).slice(0, 8)}` : baseSlug;
      const draft = {
        schemaVersion: 1, slug, language: "ko", ...generated.value,
        publishedAt: now.toISOString(),
        source: { name: candidate.feed.name, url: candidate.url, publishedAt: candidate.publishedAt },
        corroboratingSources: candidate.corroboratingSources.map(({ feed, url, publishedAt }) => ({ name: feed.name, url, publishedAt })),
        relatedLinks: [
          { label: "FourFeetz 인사이트", href: "/ko/insights" },
          { label: "실전 리소스", href: "/ko/resources" },
          { label: "반려동물 콘텐츠 제작", href: "/ko/services" },
        ],
      };
      const result = await runQualityCycle({
        draft, candidate, existingArticles,
        review: (article) => fixturePath ? fixtureReview() : reviewArticle(article, candidate, existingArticles.map(({ title, description }) => ({ title, description }))),
        rewrite: (article, review) => fixturePath ? { value: article, usage: { input_tokens: 0, output_tokens: 0 } } : rewriteArticle(article, candidate, review),
        onUsage: async (phase, usage) => {
          latestLedger = await recordBudgetUsage({ store: budgetStore, month, runId, usage, costUsd: estimateCost(usage) });
          if (budgetExposure(latestLedger) > budgetLimit) throw new Error(`Budget exposure exceeded after ${phase}; stopping safely`);
        },
        onReview: async ({ attempt, review, decision }) => qualityLog({ candidate, attempt, review, decision }),
        onRewrite: async (details) => log(details.event, { source: candidate.url, ...details }),
      });
      const { decision } = result;
      if (!decision.publish) continue;
      const article = { ...result.draft, quality: { ...decision.score, checkedAt: new Date().toISOString() } };
      if (dryRun || !publishingEnabled) {
        log("dry_run_candidate", { slug, score: decision.score.total, rewriteAttempts: result.rewriteAttempts, reason: dryRun ? "DRY_RUN" : "AUTO_PUBLISH_ENABLED is not true" });
      } else {
        writeJsonSafely(path.join(articleDirectory, `${slug}.json`), article);
        existingArticles.push(article);
        published += 1;
        log("published", { slug, score: decision.score.total });
      }
    }
    completed = true;
  } finally {
    if (completed) latestLedger = await releaseBudget({ store: budgetStore, month, runId });
  }
  log("run_complete", { published, dryRun, publishingEnabled, evaluated: eligible.length, estimatedSpendUsd: latestLedger.spentUsd });
}

main().catch((error) => {
  log("fatal", { error: error instanceof Error ? error.message : String(error) });
  process.exitCode = 1;
});

