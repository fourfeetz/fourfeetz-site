export type PaymentReadiness = Readonly<{ tossSandbox: boolean; paypalSandbox: boolean; database: boolean; freePreviewDownload: boolean; paidDownload: boolean }>;

type PaymentEnvironment = Readonly<Record<string, string | undefined>>;

export function getPaymentReadiness(env: PaymentEnvironment = process.env): PaymentReadiness {
  const sandboxEnvironment = env.VERCEL_ENV === "preview" || (env.NODE_ENV === "development" && !env.VERCEL_ENV);
  const explicitlyEnabled = env.STORE_SANDBOX_ENABLED === "true";
  const testMode = env.TOSS_PAYMENTS_MODE === "test";
  const testKeys = env.NEXT_PUBLIC_TOSS_CLIENT_KEY?.startsWith("test_") && env.TOSS_SECRET_KEY?.startsWith("test_");
  const blobCredentials = Boolean(env.BLOB_STORE_ID || env.BLOB_READ_WRITE_TOKEN);
  return {
    tossSandbox: sandboxEnvironment && explicitlyEnabled && testMode && Boolean(testKeys && env.DATABASE_URL),
    paypalSandbox: false,
    database: Boolean(env.DATABASE_URL),
    freePreviewDownload: env.VERCEL_ENV === "preview" || (env.NODE_ENV === "development" && env.ENABLE_FREE_PROMPT_PREVIEW === "true"),
    paidDownload: sandboxEnvironment && env.STORE_PAID_DOWNLOADS_ENABLED === "true" && Boolean(env.DATABASE_URL) && blobCredentials,
  };
}

export function canServeFreeDownload(env: PaymentEnvironment = process.env) {
  return getPaymentReadiness(env).freePreviewDownload;
}
