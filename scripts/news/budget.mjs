import fs from "node:fs";
import path from "node:path";

const LOCK_STALE_MS = 2 * 60 * 60_000;

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

function emptyLedger(month) {
  return { month, spentUsd: 0, inputTokens: 0, outputTokens: 0, runs: 0, reservations: {} };
}

function readLedgerFile(target, month) {
  try {
    const parsed = JSON.parse(fs.readFileSync(target, "utf8"));
    return { ...emptyLedger(month), ...parsed, reservations: parsed.reservations ?? {} };
  } catch {
    return emptyLedger(month);
  }
}

function writeLedgerFile(target, ledger) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const temporary = `${target}.${process.pid}.${Math.random().toString(16).slice(2)}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify(ledger, null, 2)}\n`, "utf8");
  try {
    fs.renameSync(temporary, target);
  } catch (error) {
    if (!["EEXIST", "EPERM"].includes(error.code)) throw error;
    fs.copyFileSync(temporary, target);
    fs.unlinkSync(temporary);
  }
}

async function withLedgerLock(stateDirectory, month, operation) {
  fs.mkdirSync(stateDirectory, { recursive: true });
  const lockPath = path.join(stateDirectory, `usage-${month}.lock`);
  const ledgerPath = path.join(stateDirectory, `usage-${month}.json`);
  const deadline = Date.now() + 15_000;
  let handle;
  while (!handle) {
    try {
      handle = fs.openSync(lockPath, "wx");
    } catch (error) {
      if (error.code !== "EEXIST") throw error;
      try {
        if (Date.now() - fs.statSync(lockPath).mtimeMs > LOCK_STALE_MS) fs.unlinkSync(lockPath);
      } catch {}
      if (Date.now() >= deadline) throw new Error("Timed out acquiring monthly budget ledger lock");
      await wait(25);
    }
  }
  try {
    const ledger = readLedgerFile(ledgerPath, month);
    const cutoff = Date.now() - LOCK_STALE_MS;
    ledger.reservations = Object.fromEntries(Object.entries(ledger.reservations).filter(([, value]) => Date.parse(value.at) >= cutoff));
    const result = await operation(ledger);
    ledger.updatedAt = new Date().toISOString();
    writeLedgerFile(ledgerPath, ledger);
    return result ?? ledger;
  } finally {
    fs.closeSync(handle);
    fs.unlinkSync(lockPath);
  }
}

export function readBudgetLedger(stateDirectory, month) {
  return readLedgerFile(path.join(stateDirectory, `usage-${month}.json`), month);
}

export async function reserveBudget({ stateDirectory, month, runId, reserveUsd, limitUsd }) {
  return withLedgerLock(stateDirectory, month, (ledger) => {
    const reservedUsd = Object.values(ledger.reservations).reduce((sum, reservation) => sum + reservation.usd, 0);
    if (ledger.spentUsd + reservedUsd + reserveUsd > limitUsd) return { reserved: false, ledger };
    ledger.reservations[runId] = { usd: reserveUsd, at: new Date().toISOString() };
    ledger.runs += 1;
    return { reserved: true, ledger };
  });
}

export async function recordBudgetUsage({ stateDirectory, month, usage, costUsd }) {
  return withLedgerLock(stateDirectory, month, (ledger) => {
    ledger.inputTokens += usage.input_tokens ?? 0;
    ledger.outputTokens += usage.output_tokens ?? 0;
    ledger.spentUsd = Number((ledger.spentUsd + costUsd).toFixed(6));
    return ledger;
  });
}

export async function releaseBudget({ stateDirectory, month, runId }) {
  return withLedgerLock(stateDirectory, month, (ledger) => {
    delete ledger.reservations[runId];
    return ledger;
  });
}

