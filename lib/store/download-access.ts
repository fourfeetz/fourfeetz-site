import { createHash, randomBytes, randomUUID, timingSafeEqual } from "node:crypto";
import type { StoreLanguage } from "../store.ts";
import { StorePaymentError } from "./payment.ts";

export type DownloadAccessToken = Readonly<{ id: string; orderId: string; productId: string; locale: StoreLanguage; tokenHash: string; expiresAt: string; revokedAt: string | null; createdAt: string }>;

export interface DownloadAccessRepository {
  createDownloadAccessToken(token: DownloadAccessToken): Promise<void>;
  findDownloadAccessToken(orderNumber: string, tokenHash: string): Promise<DownloadAccessToken | null>;
}

export function hashDownloadToken(token: string) {
  return createHash("sha256").update(token, "utf8").digest("hex");
}

export function createDownloadAccess(orderId: string, productId: string, locale: StoreLanguage, expiresAt: string, now = new Date()) {
  const rawToken = randomBytes(32).toString("base64url");
  return {
    rawToken,
    record: { id: randomUUID(), orderId, productId, locale, tokenHash: hashDownloadToken(rawToken), expiresAt, revokedAt: null, createdAt: now.toISOString() } satisfies DownloadAccessToken,
  };
}

export async function verifyDownloadAccess(input: { orderNumber: string; rawToken: string }, repository: DownloadAccessRepository, now = new Date()) {
  if (!/^[A-Za-z0-9_-]{43}$/.test(input.rawToken)) throw new StorePaymentError("DOWNLOAD_FORBIDDEN", "Download credentials are invalid.");
  const expectedHash = hashDownloadToken(input.rawToken);
  const access = await repository.findDownloadAccessToken(input.orderNumber, expectedHash);
  if (!access || access.revokedAt || new Date(access.expiresAt) <= now) throw new StorePaymentError("DOWNLOAD_FORBIDDEN", "Download credentials are invalid or expired.");
  const stored = Buffer.from(access.tokenHash, "hex");
  const expected = Buffer.from(expectedHash, "hex");
  if (stored.length !== expected.length || !timingSafeEqual(stored, expected)) throw new StorePaymentError("DOWNLOAD_FORBIDDEN", "Download credentials are invalid.");
  return access;
}
