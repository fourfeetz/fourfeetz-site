import assert from "node:assert/strict";
import test from "node:test";
import { sortByPublishedAt } from "../../lib/publishing.ts";

test("sorts by first publication date without using modification date", () => {
  const sorted = sortByPublishedAt([
    { id: "older-updated", publishedAt: "2026-10-01", updatedAt: "2026-12-01" },
    { id: "newer", publishedAt: "2026-11-21", updatedAt: "2026-11-21" },
    { id: "undated" },
  ]);

  assert.deepEqual(sorted.map((item) => item.id), ["newer", "older-updated", "undated"]);
});

test("keeps source order for equal or missing publication dates", () => {
  const sorted = sortByPublishedAt([
    { id: "first-undated" },
    { id: "second-undated" },
    { id: "first-same", publishedAt: "2026-11-01" },
    { id: "second-same", publishedAt: "2026-11-01" },
  ]);

  assert.deepEqual(sorted.map((item) => item.id), ["first-same", "second-same", "first-undated", "second-undated"]);
});
