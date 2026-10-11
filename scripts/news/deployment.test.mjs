import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { verifyVercelDeployment } from "./check-vercel-deployment.mjs";

const response = (deployments) => ({ ok: true, json: async () => ({ deployments }) });

test("missing Vercel authentication fails closed", async () => {
  await assert.rejects(() => verifyVercelDeployment({ token: "", projectId: "", teamId: "", sha: "abc", timeoutMs: 1 }), /VERCEL_TOKEN.*VERCEL_PROJECT_ID.*VERCEL_ORG_ID/);
});

test("accepts only the READY deployment for the committed SHA", async () => {
  const result = await verifyVercelDeployment({ token: "token", projectId: "project", teamId: "team", sha: "wanted", timeoutMs: 100, fetchImpl: async () => response([{ url: "wrong.vercel.app", readyState: "READY", meta: { githubCommitSha: "other" } }, { url: "right.vercel.app", readyState: "READY", meta: { githubCommitSha: "wanted" } }]), sleep: async () => {}, pollMs: 0 });
  assert.equal(result.url, "https://right.vercel.app");
});

test("failed deployment rejects so the workflow can roll back", async () => {
  await assert.rejects(() => verifyVercelDeployment({ token: "token", projectId: "project", teamId: "team", sha: "wanted", timeoutMs: 100, fetchImpl: async () => response([{ url: "bad.vercel.app", state: "ERROR", meta: { githubCommitSha: "wanted" } }]), sleep: async () => {}, pollMs: 0 }), /failed with state ERROR/);
});

test("workflow verifies the created SHA and reverts exactly that commit on failure", () => {
  const workflow = fs.readFileSync(new URL("../../.github/workflows/auto-news.yml", import.meta.url), "utf8");
  assert.match(workflow, /check-vercel-deployment\.mjs "\$\{\{ steps\.commit\.outputs\.sha \}\}"/);
  assert.match(workflow, /if: failure\(\) && steps\.commit\.outputs\.created == 'true'/);
  assert.match(workflow, /git revert --no-edit "\$\{\{ steps\.commit\.outputs\.sha \}\}"/);
  assert.match(workflow, /git push origin "HEAD:\$\{GITHUB_REF_NAME\}"/);
});

test("workflow keeps automatic publication behind both resolved dry-run and enable gates", () => {
  const workflow = fs.readFileSync(new URL("../../.github/workflows/auto-news.yml", import.meta.url), "utf8");
  assert.match(workflow, /steps\.mode\.outputs\.dry_run == 'false' && env\.AUTO_PUBLISH_ENABLED == 'true'/);
  assert.match(workflow, /DRY_RUN: \$\{\{ steps\.mode\.outputs\.dry_run \}\}/);
});
