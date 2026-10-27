import assert from "node:assert/strict";
import test from "node:test";
import { createDownloadAccess, verifyDownloadAccess, type DownloadAccessRepository, type DownloadAccessToken } from "../../lib/store/download-access.ts";
import { getPaidAsset } from "../../lib/store/paid-assets.ts";
import { StorePaymentError } from "../../lib/store/payment.ts";

class TokenRepository implements DownloadAccessRepository {
  records: DownloadAccessToken[] = [];
  async createDownloadAccessToken(token: DownloadAccessToken) { this.records.push(token); }
  async findDownloadAccessToken(orderNumber: string, tokenHash: string) {
    return orderNumber === "order-owner" ? this.records.find((record) => record.tokenHash === tokenHash) ?? null : null;
  }
}

const now = new Date("2026-10-27T00:00:00.000Z");
const expiry = "2026-11-03T00:00:00.000Z";

async function issued(locale: "ko" | "en" = "ko") {
  const repository = new TokenRepository();
  const access = createDownloadAccess("order-id", "product-id", locale, expiry, now);
  await repository.createDownloadAccessToken(access.record);
  return { repository, access };
}

async function expectForbidden(action: () => Promise<unknown>) {
  await assert.rejects(action, (error: unknown) => error instanceof StorePaymentError && error.code === "DOWNLOAD_FORBIDDEN");
}

test("a valid buyer token can be reused until entitlement expiry", async () => {
  const { repository, access } = await issued();
  assert.equal((await verifyDownloadAccess({ orderNumber: "order-owner", rawToken: access.rawToken }, repository, now)).locale, "ko");
  assert.equal((await verifyDownloadAccess({ orderNumber: "order-owner", rawToken: access.rawToken }, repository, now)).productId, "product-id");
});

test("only the token hash is persisted", async () => {
  const { repository, access } = await issued();
  assert.notEqual(repository.records[0]?.tokenHash, access.rawToken);
  assert.match(repository.records[0]?.tokenHash ?? "", /^[a-f0-9]{64}$/);
});

test("another order number cannot use the buyer token", async () => {
  const { repository, access } = await issued();
  await expectForbidden(() => verifyDownloadAccess({ orderNumber: "order-other", rawToken: access.rawToken }, repository, now));
});

test("expired and revoked tokens are rejected", async () => {
  const expired = await issued();
  await expectForbidden(() => verifyDownloadAccess({ orderNumber: "order-owner", rawToken: expired.access.rawToken }, expired.repository, new Date("2026-11-03T00:00:00.001Z")));
  const revoked = await issued();
  revoked.repository.records[0] = { ...revoked.repository.records[0]!, revokedAt: now.toISOString() };
  await expectForbidden(() => verifyDownloadAccess({ orderNumber: "order-owner", rawToken: revoked.access.rawToken }, revoked.repository, now));
});

test("starter guide maps to distinct Korean and English private paths", () => {
  const productId = "3f1ff879-9a8b-4d61-a78a-e47f2c330002";
  const env = { STORE_PAID_PDF_KO_BLOB_PATH: "paid/starter-ko.pdf", STORE_PAID_PDF_EN_BLOB_PATH: "paid/starter-en.pdf" };
  assert.equal(getPaidAsset(productId, "ko", env)?.pathname, "paid/starter-ko.pdf");
  assert.equal(getPaidAsset(productId, "en", env)?.pathname, "paid/starter-en.pdf");
  assert.equal(getPaidAsset("creator-pack", "ko", env), null);
});

test("public URLs are never accepted as private asset mappings", () => {
  const productId = "3f1ff879-9a8b-4d61-a78a-e47f2c330002";
  assert.equal(getPaidAsset(productId, "ko", { STORE_PAID_PDF_KO_BLOB_PATH: "https://public.example/file.pdf" }), null);
});
