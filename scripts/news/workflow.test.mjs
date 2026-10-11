import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const workflow = fs.readFileSync(new URL("../../.github/workflows/auto-news.yml", import.meta.url), "utf8");

test("workflow uses one serialized GitHub issue ledger instead of Actions cache", () => {
  assert.match(workflow, /issues:\s*write/);
  assert.match(workflow, /BUDGET_LEDGER_BACKEND:\s*github-issue/);
  assert.match(workflow, /GITHUB_TOKEN:\s*\$\{\{ github\.token \}\}/);
  assert.match(workflow, /group:\s*fourfeetz-auto-news/);
  assert.match(workflow, /cancel-in-progress:\s*false/);
  assert.doesNotMatch(workflow, /actions\/cache/);
});

test("workflow keeps publication disabled by default and resolves dry-run inputs centrally", () => {
  assert.match(workflow, /AUTO_PUBLISH_ENABLED:\s*\$\{\{ vars\.AUTO_PUBLISH_ENABLED \|\| 'false' \}\}/);
  assert.match(workflow, /default:\s*true/);
  assert.match(workflow, /resolve-mode\.mjs "\$GITHUB_EVENT_NAME" "\$\{\{ inputs\.dry_run \}\}" "\$\{\{ vars\.DRY_RUN \}\}"/);
  assert.match(workflow, /steps\.mode\.outputs\.dry_run == 'false' && env\.AUTO_PUBLISH_ENABLED == 'true'/);
});

test("workflow retains schedule, deployment verification, and rollback gates", () => {
  assert.match(workflow, /cron:\s*"0 0,9 \* \* \*"/);
  assert.match(workflow, /check-vercel-deployment\.mjs/);
  assert.match(workflow, /if:\s*failure\(\) && steps\.commit\.outputs\.created == 'true'/);
  assert.match(workflow, /git revert --no-edit/);
});
