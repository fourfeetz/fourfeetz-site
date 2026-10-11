import fs from "node:fs";
import path from "node:path";

const LOCK_STALE_MS = 2 * 60 * 60_000;
const LEDGER_VERSION = 1;
const ISSUE_TITLE = "[automation] FourFeetz news API budget ledger";
const ISSUE_MARKER = "<!-- fourfeetz-news-budget-ledger:v1 -->";
const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

function emptyState() {
  return { version: LEDGER_VERSION, months: {} };
}

function emptyMonth(month) {
  return { month, spentUsd: 0, inputTokens: 0, outputTokens: 0, runs: 0, reservations: {} };
}

function normalizeState(value) {
  if (!value || value.version !== LEDGER_VERSION || typeof value.months !== "object" || Array.isArray(value.months)) {
    throw new Error("Budget ledger has an unsupported or invalid schema");
  }
  return value;
}

function monthLedger(state, month) {
  state.months[month] ??= emptyMonth(month);
  const ledger = state.months[month];
  ledger.reservations ??= {};
  return ledger;
}

function remainingReservation(reservation) {
  return Math.max(0, Number(reservation.reservedUsd) - Number(reservation.recordedUsd ?? 0));
}

export function budgetExposure(ledger) {
  return Number((ledger.spentUsd + Object.values(ledger.reservations).reduce((sum, item) => sum + remainingReservation(item), 0)).toFixed(6));
}

function encodeIssueBody(state) {
  return `${ISSUE_MARKER}\nThis issue is maintained by the FourFeetz auto-news workflow. It contains cost counters only; do not edit it manually.\n\n\`\`\`json\n${JSON.stringify(state, null, 2)}\n\`\`\`\n`;
}

function decodeIssueBody(body) {
  const match = String(body ?? "").match(/<!-- fourfeetz-news-budget-ledger:v1 -->[\s\S]*?```json\s*([\s\S]*?)\s*```/);
  if (!match) throw new Error("GitHub budget ledger issue body is missing or malformed");
  try {
    return normalizeState(JSON.parse(match[1]));
  } catch (error) {
    throw new Error(`Cannot parse GitHub budget ledger: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function githubRequest(fetchImpl, token, url, options = {}) {
  let response;
  try {
    response = await fetchImpl(url, {
      ...options,
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
  } catch (error) {
    throw new Error(`GitHub budget ledger request failed: ${error instanceof Error ? error.message : String(error)}`);
  }
  if (!response.ok) {
    const detail = (await response.text()).slice(0, 500);
    throw new Error(`GitHub budget ledger request failed (${response.status}): ${detail}`);
  }
  return response.status === 204 ? null : response.json();
}

export function createGitHubIssueBudgetStore({ token, repository, fetchImpl = fetch }) {
  if (!token) throw new Error("GITHUB_TOKEN is required for the GitHub issue budget ledger");
  if (!/^[^/]+\/[^/]+$/.test(repository ?? "")) throw new Error("GITHUB_REPOSITORY must be owner/repository");
  const baseUrl = `https://api.github.com/repos/${repository}`;

  async function findIssue() {
    for (let page = 1; page <= 10; page += 1) {
      const issues = await githubRequest(fetchImpl, token, `${baseUrl}/issues?state=all&per_page=100&page=${page}`);
      const found = issues.find((issue) => !issue.pull_request && (issue.title === ISSUE_TITLE || String(issue.body).includes(ISSUE_MARKER)));
      if (found) return found;
      if (issues.length < 100) return null;
    }
    throw new Error("GitHub budget ledger issue was not found within the first 1000 issues");
  }

  return {
    async read() {
      const issue = await findIssue();
      if (!issue) return null;
      return { issueNumber: issue.number, state: decodeIssueBody(issue.body) };
    },
    async update(operation) {
      const current = await this.read();
      const state = current ? structuredClone(current.state) : emptyState();
      const result = await operation(state);
      state.updatedAt = new Date().toISOString();
      const payload = JSON.stringify({ title: ISSUE_TITLE, body: encodeIssueBody(state) });
      if (current) {
        await githubRequest(fetchImpl, token, `${baseUrl}/issues/${current.issueNumber}`, { method: "PATCH", body: payload });
      } else {
        await githubRequest(fetchImpl, token, `${baseUrl}/issues`, { method: "POST", body: payload });
      }
      return result;
    },
  };
}

export function createFileBudgetStore(stateDirectory) {
  const ledgerPath = path.join(stateDirectory, "budget-ledger.json");
  const lockPath = path.join(stateDirectory, "budget-ledger.lock");
  return {
    async read() {
      if (!fs.existsSync(ledgerPath)) return null;
      try {
        return { state: normalizeState(JSON.parse(fs.readFileSync(ledgerPath, "utf8"))) };
      } catch (error) {
        throw new Error(`Cannot read local budget ledger: ${error instanceof Error ? error.message : String(error)}`);
      }
    },
    async update(operation) {
      fs.mkdirSync(stateDirectory, { recursive: true });
      const deadline = Date.now() + 15_000;
      let handle;
      while (!handle) {
        try {
          handle = fs.openSync(lockPath, "wx");
        } catch (error) {
          if (error.code !== "EEXIST") throw error;
          const age = Date.now() - fs.statSync(lockPath).mtimeMs;
          if (age > LOCK_STALE_MS) throw new Error("Local budget ledger lock is stale; manual inspection is required");
          if (Date.now() >= deadline) throw new Error("Timed out acquiring local budget ledger lock");
          await wait(25);
        }
      }
      try {
        const current = await this.read();
        const state = current ? structuredClone(current.state) : emptyState();
        const result = await operation(state);
        state.updatedAt = new Date().toISOString();
        const temporary = `${ledgerPath}.${process.pid}.${crypto.randomUUID()}.tmp`;
        fs.writeFileSync(temporary, `${JSON.stringify(state, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
        fs.copyFileSync(temporary, ledgerPath);
        fs.unlinkSync(temporary);
        return result;
      } catch (error) {
        throw new Error(`Cannot update local budget ledger: ${error instanceof Error ? error.message : String(error)}`);
      } finally {
        fs.closeSync(handle);
        fs.unlinkSync(lockPath);
      }
    },
  };
}

export function createBudgetStore({ stateDirectory, environment = process.env, fetchImpl = fetch }) {
  if (environment.BUDGET_LEDGER_BACKEND === "github-issue") {
    return createGitHubIssueBudgetStore({ token: environment.GITHUB_TOKEN, repository: environment.GITHUB_REPOSITORY, fetchImpl });
  }
  return createFileBudgetStore(stateDirectory);
}

export async function readBudgetLedger(store, month) {
  const current = await store.read();
  if (!current) return emptyMonth(month);
  return structuredClone(current.state.months[month] ?? emptyMonth(month));
}

export async function reserveBudget({ store, month, runId, reserveUsd, limitUsd }) {
  return store.update((state) => {
    const ledger = monthLedger(state, month);
    if (ledger.reservations[runId]) return { reserved: true, ledger: structuredClone(ledger), idempotent: true };
    if (budgetExposure(ledger) + reserveUsd > limitUsd) return { reserved: false, ledger: structuredClone(ledger) };
    ledger.reservations[runId] = { reservedUsd: reserveUsd, recordedUsd: 0, at: new Date().toISOString() };
    ledger.runs += 1;
    return { reserved: true, ledger: structuredClone(ledger), idempotent: false };
  });
}

export async function recordBudgetUsage({ store, month, runId, usage, costUsd }) {
  return store.update((state) => {
    const ledger = monthLedger(state, month);
    const reservation = ledger.reservations[runId];
    if (!reservation) throw new Error(`No active budget reservation for run ${runId}`);
    ledger.inputTokens += usage.input_tokens ?? 0;
    ledger.outputTokens += usage.output_tokens ?? 0;
    ledger.spentUsd = Number((ledger.spentUsd + costUsd).toFixed(6));
    reservation.recordedUsd = Number((reservation.recordedUsd + costUsd).toFixed(6));
    reservation.updatedAt = new Date().toISOString();
    return structuredClone(ledger);
  });
}

export async function releaseBudget({ store, month, runId }) {
  return store.update((state) => {
    const ledger = monthLedger(state, month);
    delete ledger.reservations[runId];
    return structuredClone(ledger);
  });
}

export const githubIssueLedgerMetadata = { title: ISSUE_TITLE, marker: ISSUE_MARKER };
