import test from "node:test";
import assert from "node:assert/strict";
import { assertSameOriginMutation, readBoundedJsonObject, StoreRequestError } from "../../lib/store/api-security.ts";

function expectRequestError(action: () => unknown | Promise<unknown>, code: string, status: number) {
  return assert.rejects(async () => action(), (error: unknown) => error instanceof StoreRequestError && error.code === code && error.status === status);
}

test("same-origin JSON mutation is accepted", () => {
  const request = new Request("https://preview.example/api/store/orders", { method: "POST", headers: { Origin: "https://preview.example", "Sec-Fetch-Site": "same-origin" } });
  assert.doesNotThrow(() => assertSameOriginMutation(request));
});

test("cross-origin mutation is rejected", async () => {
  const request = new Request("https://preview.example/api/store/orders", { method: "POST", headers: { Origin: "https://attacker.example", "Sec-Fetch-Site": "cross-site" } });
  await expectRequestError(() => assertSameOriginMutation(request), "CROSS_SITE_REQUEST", 403);
});

test("cross-site fetch metadata is rejected even without Origin", async () => {
  const request = new Request("https://preview.example/api/store/orders", { method: "POST", headers: { "Sec-Fetch-Site": "cross-site" } });
  await expectRequestError(() => assertSameOriginMutation(request), "CROSS_SITE_REQUEST", 403);
});

test("JSON body must use the expected media type", async () => {
  const request = new Request("https://preview.example/api/store/orders", { method: "POST", body: "{}", headers: { "Content-Type": "text/plain" } });
  await expectRequestError(() => readBoundedJsonObject(request), "UNSUPPORTED_MEDIA_TYPE", 415);
});

test("oversized and malformed JSON bodies fail safely", async () => {
  const oversized = new Request("https://preview.example/api/store/orders", { method: "POST", body: JSON.stringify({ value: "x".repeat(5000) }), headers: { "Content-Type": "application/json" } });
  await expectRequestError(() => readBoundedJsonObject(oversized), "REQUEST_TOO_LARGE", 413);
  const malformed = new Request("https://preview.example/api/store/orders", { method: "POST", body: "{", headers: { "Content-Type": "application/json" } });
  await expectRequestError(() => readBoundedJsonObject(malformed), "INVALID_JSON", 400);
});
