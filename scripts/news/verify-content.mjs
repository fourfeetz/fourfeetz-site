import fs from "node:fs";
import path from "node:path";
import { deterministicChecks, loadJsonFiles, QUALITY_THRESHOLD } from "./core.mjs";

const directory = path.join(process.cwd(), "content", "news", "ko");
const articles = loadJsonFiles(directory);
const slugs = new Set();
const urls = new Set();

for (const article of articles) {
  if (article.schemaVersion !== 1 || article.language !== "ko") throw new Error(`Invalid schema: ${article.slug ?? "unknown"}`);
  if (!/^[a-z0-9-]+$/.test(article.slug) || slugs.has(article.slug)) throw new Error(`Invalid or duplicate slug: ${article.slug}`);
  if (urls.has(article.source?.url)) throw new Error(`Duplicate source URL: ${article.source.url}`);
  if ((article.quality?.total ?? 0) < QUALITY_THRESHOLD) throw new Error(`Below quality threshold: ${article.slug}`);
  if (!Array.isArray(article.corroboratingSources) || article.corroboratingSources.length === 0) throw new Error(`Missing independent source: ${article.slug}`);
  if (!Array.isArray(article.verifiedClaims) || article.verifiedClaims.length < 2) throw new Error(`Missing claim evidence: ${article.slug}`);
  const primaryHost = new URL(article.source.url).hostname;
  if (article.corroboratingSources.some((source) => new URL(source.url).hostname === primaryHost)) throw new Error(`Corroborating source is not independent: ${article.slug}`);
  if (!fs.existsSync(path.join(directory, `${article.slug}.json`))) throw new Error(`Filename/slug mismatch: ${article.slug}`);
  new URL(article.source.url);
  slugs.add(article.slug);
  urls.add(article.source.url);
}

// Recheck pairwise duplication independently of the stored model review.
for (let index = 0; index < articles.length; index += 1) {
  const peers = articles.filter((_, peerIndex) => peerIndex !== index);
  const candidate = { url: articles[index].source.url, feed: { allowedHosts: [new URL(articles[index].source.url).hostname], reliability: 25 }, corroboratingSources: articles[index].corroboratingSources };
  const checks = deterministicChecks(articles[index], candidate, peers);
  if (checks.hardBlocks.includes("duplicate_content")) throw new Error(`Duplicate content: ${articles[index].slug}`);
  if (checks.hardBlocks.includes("source_copy_risk")) throw new Error(`Source copying risk: ${articles[index].slug}`);
  if (checks.hardBlocks.includes("claim_evidence_missing")) throw new Error(`Claim evidence invalid: ${articles[index].slug}`);
}

process.stdout.write(`Verified ${articles.length} published news article(s).\n`);

