import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { readBudgetLedger, recordBudgetUsage, releaseBudget, reserveBudget } from "./budget.mjs";

function temporaryState(t) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "fourfeetz-budget-"));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  return directory;
}

test("records API cost exactly once", async (t) => {
  const stateDirectory = temporaryState(t);
  await reserveBudget({ stateDirectory, month: "2026-10", runId: "run-1", reserveUsd: 2, limitUsd: 10 });
  await recordBudgetUsage({ stateDirectory, month: "2026-10", usage: { input_tokens: 1000, output_tokens: 500 }, costUsd: 0.25 });
  await releaseBudget({ stateDirectory, month: "2026-10", runId: "run-1" });
  const ledger = readBudgetLedger(stateDirectory, "2026-10");
  assert.equal(ledger.spentUsd, 0.25);
  assert.equal(ledger.inputTokens, 1000);
  assert.equal(ledger.outputTokens, 500);
  assert.deepEqual(ledger.reservations, {});
});

test("serializes concurrent updates without losing spend", async (t) => {
  const stateDirectory = temporaryState(t);
  await Promise.all(Array.from({ length: 8 }, () => recordBudgetUsage({ stateDirectory, month: "2026-10", usage: { input_tokens: 10, output_tokens: 5 }, costUsd: 0.1 })));
  const ledger = readBudgetLedger(stateDirectory, "2026-10");
  assert.equal(ledger.spentUsd, 0.8);
  assert.equal(ledger.inputTokens, 80);
  assert.equal(ledger.outputTokens, 40);
});

test("budget reservation prevents concurrent runs from overcommitting", async (t) => {
  const stateDirectory = temporaryState(t);
  const [first, second] = await Promise.all([
    reserveBudget({ stateDirectory, month: "2026-10", runId: "run-a", reserveUsd: 6, limitUsd: 10 }),
    reserveBudget({ stateDirectory, month: "2026-10", runId: "run-b", reserveUsd: 6, limitUsd: 10 }),
  ]);
  assert.equal(Number(first.reserved) + Number(second.reserved), 1);
});

