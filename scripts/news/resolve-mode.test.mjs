import assert from "node:assert/strict";
import test from "node:test";
import { resolveDryRun } from "./resolve-mode.mjs";

for (const scenario of [
  { name: "manual true overrides repository false", eventName: "workflow_dispatch", dispatchInput: "true", repositoryVariable: "false", expected: true },
  { name: "manual false overrides repository true", eventName: "workflow_dispatch", dispatchInput: "false", repositoryVariable: "true", expected: false },
  { name: "scheduled false honors repository false", eventName: "schedule", dispatchInput: "", repositoryVariable: "false", expected: false },
  { name: "scheduled true honors repository true", eventName: "schedule", dispatchInput: "", repositoryVariable: "true", expected: true },
  { name: "missing repository variable fails safe", eventName: "schedule", dispatchInput: "", repositoryVariable: "", expected: true },
  { name: "missing manual input fails safe", eventName: "workflow_dispatch", dispatchInput: "", repositoryVariable: "false", expected: true },
]) {
  test(scenario.name, () => assert.equal(resolveDryRun(scenario), scenario.expected));
}

