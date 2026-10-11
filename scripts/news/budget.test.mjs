import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  budgetExposure, createFileBudgetStore, createGitHubIssueBudgetStore, githubIssueLedgerMetadata,
  readBudgetLedger, recordBudgetUsage, releaseBudget, reserveBudget,
} from "./budget.mjs";

function temporaryStore(t) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "fourfeetz-budget-"));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  return createFileBudgetStore(directory);
}

function fakeGitHub({ failRead = false, failWrite = false } = {}) {
  let issue = null;
  const fetchImpl = async (url, options = {}) => {
    const method = options.method ?? "GET";
    if (method === "GET") {
      if (failRead) return new Response("read unavailable", { status: 503 });
      return Response.json(issue ? [issue] : []);
    }
    if (failWrite) return new Response("write unavailable", { status: 503 });
    const payload = JSON.parse(options.body);
    issue = { number: 7, title: payload.title, body: payload.body };
    return Response.json(issue, { status: method === "POST" ? 201 : 200 });
  };
  return { fetchImpl, issue: () => issue };
}

test("records API cost once and releases only unused reservation", async (t) => {
  const store = temporaryStore(t);
  await reserveBudget({ store, month: "2026-10", runId: "run-1", reserveUsd: 2, limitUsd: 10 });
  let ledger = await recordBudgetUsage({ store, month: "2026-10", runId: "run-1", usage: { input_tokens: 1000, output_tokens: 500 }, costUsd: 0.25 });
  assert.equal(ledger.spentUsd, 0.25);
  assert.equal(budgetExposure(ledger), 2);
  await releaseBudget({ store, month: "2026-10", runId: "run-1" });
  ledger = await readBudgetLedger(store, "2026-10");
  assert.equal(ledger.spentUsd, 0.25);
  assert.equal(ledger.inputTokens, 1000);
  assert.equal(ledger.outputTokens, 500);
  assert.deepEqual(ledger.reservations, {});
});

test("serializes concurrent local updates without losing spend", async (t) => {
  const store = temporaryStore(t);
  await reserveBudget({ store, month: "2026-10", runId: "run", reserveUsd: 2, limitUsd: 10 });
  await Promise.all(Array.from({ length: 8 }, () => recordBudgetUsage({ store, month: "2026-10", runId: "run", usage: { input_tokens: 10, output_tokens: 5 }, costUsd: 0.1 })));
  const ledger = await readBudgetLedger(store, "2026-10");
  assert.equal(ledger.spentUsd, 0.8);
  assert.equal(ledger.inputTokens, 80);
  assert.equal(ledger.outputTokens, 40);
});

test("failed or cancelled run keeps its reservation and blocks overcommit", async (t) => {
  const store = temporaryStore(t);
  await reserveBudget({ store, month: "2026-10", runId: "cancelled", reserveUsd: 2, limitUsd: 3 });
  await recordBudgetUsage({ store, month: "2026-10", runId: "cancelled", usage: {}, costUsd: 0.4 });
  const next = await reserveBudget({ store, month: "2026-10", runId: "next", reserveUsd: 2, limitUsd: 3 });
  assert.equal(next.reserved, false);
  assert.equal(budgetExposure(next.ledger), 2);
});

test("rerun reservation is idempotent per attempt and distinct across attempts", async (t) => {
  const store = temporaryStore(t);
  const first = await reserveBudget({ store, month: "2026-10", runId: "42-1", reserveUsd: 2, limitUsd: 10 });
  const duplicate = await reserveBudget({ store, month: "2026-10", runId: "42-1", reserveUsd: 2, limitUsd: 10 });
  const rerun = await reserveBudget({ store, month: "2026-10", runId: "42-2", reserveUsd: 2, limitUsd: 10 });
  assert.equal(first.idempotent, false);
  assert.equal(duplicate.idempotent, true);
  assert.equal(rerun.idempotent, false);
  assert.equal(rerun.ledger.runs, 2);
  assert.equal(budgetExposure(rerun.ledger), 4);
});

test("month rollover retains history and starts an independent monthly allowance", async (t) => {
  const store = temporaryStore(t);
  await reserveBudget({ store, month: "2026-10", runId: "old", reserveUsd: 2, limitUsd: 10 });
  await recordBudgetUsage({ store, month: "2026-10", runId: "old", usage: {}, costUsd: 1 });
  await releaseBudget({ store, month: "2026-10", runId: "old" });
  const next = await reserveBudget({ store, month: "2026-11", runId: "new", reserveUsd: 2, limitUsd: 10 });
  assert.equal(next.reserved, true);
  assert.equal((await readBudgetLedger(store, "2026-10")).spentUsd, 1);
  assert.equal((await readBudgetLedger(store, "2026-11")).spentUsd, 0);
});

test("GitHub issue persists the latest ledger across independent store instances", async () => {
  const github = fakeGitHub();
  const firstStore = createGitHubIssueBudgetStore({ token: "test", repository: "owner/repo", fetchImpl: github.fetchImpl });
  await reserveBudget({ store: firstStore, month: "2026-10", runId: "run", reserveUsd: 2, limitUsd: 10 });
  const secondStore = createGitHubIssueBudgetStore({ token: "test", repository: "owner/repo", fetchImpl: github.fetchImpl });
  await recordBudgetUsage({ store: secondStore, month: "2026-10", runId: "run", usage: { input_tokens: 3 }, costUsd: 0.1 });
  assert.equal((await readBudgetLedger(firstStore, "2026-10")).spentUsd, 0.1);
  assert.match(github.issue().body, new RegExp(githubIssueLedgerMetadata.marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
});

test("ledger read and write failures stop safely instead of resetting state", async () => {
  const readFailure = createGitHubIssueBudgetStore({ token: "test", repository: "owner/repo", fetchImpl: fakeGitHub({ failRead: true }).fetchImpl });
  await assert.rejects(reserveBudget({ store: readFailure, month: "2026-10", runId: "run", reserveUsd: 2, limitUsd: 10 }), /503/);
  const writeFailure = createGitHubIssueBudgetStore({ token: "test", repository: "owner/repo", fetchImpl: fakeGitHub({ failWrite: true }).fetchImpl });
  await assert.rejects(reserveBudget({ store: writeFailure, month: "2026-10", runId: "run", reserveUsd: 2, limitUsd: 10 }), /503/);
});

test("usage cannot be recorded without a durable reservation", async (t) => {
  const store = temporaryStore(t);
  await assert.rejects(recordBudgetUsage({ store, month: "2026-10", runId: "missing", usage: {}, costUsd: 1 }), /No active budget reservation/);
});
