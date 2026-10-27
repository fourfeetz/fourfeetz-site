import type { StoreLanguage } from "../store.ts";

export type DownloadServerResult = "AUTHENTICATION_DENIED" | "AUTHORIZED" | "ASSET_UNAVAILABLE" | "STREAM_STARTED" | "SERVER_ERROR";

export type DownloadAttempt = Readonly<{
  id: string;
  orderId: string;
  productId: string;
  locale: StoreLanguage;
  requestedAt: string;
  authenticationSucceeded: true;
  refundPolicyVersion: string | null;
  refundPolicyConsentedAt: string | null;
}>;

export interface DownloadAuditRepository {
  createDownloadAttempt(attempt: DownloadAttempt): Promise<void>;
  updateDownloadAttempt(id: string, result: DownloadServerResult, transferStartedAt?: string): Promise<void>;
  recordDeniedDownloadAttempt(orderNumber: string, requestedAt: string): Promise<void>;
}

