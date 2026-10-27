import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { STORE_REFUND_POLICY_PATH, STORE_REFUND_POLICY_VERSION } from "../../lib/store/refund-policy.ts";

test("refund policy version and localized routes are stable", () => {
  assert.match(STORE_REFUND_POLICY_VERSION, /^\d{4}-\d{2}-\d{2}$/);
  assert.deepEqual(STORE_REFUND_POLICY_PATH, { ko: "/ko/refund-policy", en: "/refund-policy" });
});

test("migration preserves old orders while adding consent and delivery evidence", async () => {
  const schema = await readFile(new URL("../../docs/store-schema.sql", import.meta.url), "utf8");
  assert.match(schema, /add column if not exists refund_policy_version text/);
  assert.match(schema, /add column if not exists refund_policy_consented_at timestamptz/);
  assert.match(schema, /create table if not exists download_delivery_events/);
  assert.match(schema, /authentication_succeeded boolean not null/);
  assert.match(schema, /transfer_started_at timestamptz/);
  assert.match(schema, /20261027_003/);
  assert.doesNotMatch(schema, /update orders set refund_policy/i);
});

