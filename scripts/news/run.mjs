import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import {
  MAX_DAILY_ARTICLES, articlesPublishedOn, attachCorroboratingSources, deduplicateCandidates, isFresh, isRelevant,
  extractSourceText, loadJsonFiles, parseFeed, publicationDecision, selectCorroboratedPrimaries, slugify, sourceId, writeJsonSafely,
} from "./core.mjs";
import { loadFeeds } from "./config.mjs";
import { estimateCost, generateArticle, reviewArticle } from "./openai.mjs";
import { budgetExposure, createBudgetStore, recordBudgetUsage, releaseBudget, reserveBudget } from "./budget.mjs";

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

async function collectCandidates() {
  if (fixturePath) {
    const fixture = JSON.parse(fs.readFileSync(path.resolve(fixturePath), "utf8"));
    return fixture.candidates;
  }
  const results = await Promise.allSettled(loadFeeds().map(async (feed) => {
    const response = await fetch(feed.url, { headers: { "User-Agent": "FourFeetzNewsBot/1.0 (+https://fourfeetz.com/ko/news)" }, signal: AbortSignal.timeout(20_000) });
    if (!response.ok) throw new Error(`${response.status} ${feed.url}`);
    const xml = await response.text();
    if (xml.length > 2_000_000) throw new Error(`Feed exceeds 2 MB safety limit: ${feed.url}`);
    return parseFeed(xml, feed);
  }));
  return results.flatMap((result) => {
    if (result.status === "rejected") { log("feed_error", { error: String(result.reason) }); return []; }
    return result.value;
  });
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

  const collected = await collectCandidates();
  const filtered = collected.filter((candidate) => isRelevant(candidate) && isFresh(candidate, now));
  const hydrated = await hydrateSources(filtered.slice(0, remainingToday * 6));
  const crossVerified = selectCorroboratedPrimaries(attachCorroboratingSources(hydrated));
  const eligible = deduplicateCandidates(crossVerified, existingArticles).slice(0, remainingToday * 3);
  if (!eligible.length) return log("no_suitable_news", { collected: collected.length });
  if (process.env.NEWS_COLLECT_ONLY === "true") return log("collection_complete", { collected: collected.length, eligible: eligible.length, sources: eligible.map(({ url }) => url) });

  const reservation = await reserveBudget({ store: budgetStore, month, runId, reserveUsd: maxRunEstimate, limitUsd: budgetLimit });
  if (!reservation.reserved) return log("budget_guard_stopped", { spentUsd: reservation.ledger.spentUsd, budgetLimit, maxRunEstimate });
  let published = 0;
  let latestLedger = reservation.ledger;
  let completed = false;
  try {
    for (const candidate of eligible) {
      if (published >= remainingToday) break;
      const generated = fixturePath ? fixtureGeneration() : await generateArticle(candidate);
      latestLedger = await recordBudgetUsage({ store: budgetStore, month, runId, usage: generated.usage, costUsd: estimateCost(generated.usage) });
      if (budgetExposure(latestLedger) > budgetLimit) { log("budget_guard_stopped", { phase: "after_generation", exposureUsd: budgetExposure(latestLedger), budgetLimit }); break; }
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
      const reviewed = fixturePath ? fixtureReview() : await reviewArticle(draft, candidate, existingArticles.map(({ title, description }) => ({ title, description })));
      latestLedger = await recordBudgetUsage({ store: budgetStore, month, runId, usage: reviewed.usage, costUsd: estimateCost(reviewed.usage) });
      if (budgetExposure(latestLedger) > budgetLimit) { log("budget_guard_stopped", { phase: "after_review", exposureUsd: budgetExposure(latestLedger), budgetLimit }); break; }
      const decision = publicationDecision(draft, candidate, reviewed.value, existingArticles);
      log("quality_result", { source: candidate.url, score: decision.score.total, blocks: decision.hardBlocks });
      if (!decision.publish) continue;
      const article = { ...draft, quality: { ...decision.score, checkedAt: new Date().toISOString() } };
      if (dryRun || !publishingEnabled) {
        log("dry_run_candidate", { slug, score: decision.score.total, reason: dryRun ? "DRY_RUN" : "AUTO_PUBLISH_ENABLED is not true" });
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

