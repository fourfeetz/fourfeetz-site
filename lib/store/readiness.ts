export type TossCheckoutMode = "test" | "live" | null;
export type PaymentReadiness = Readonly<{ tossSandbox: boolean; tossProductionReviewSandbox: boolean; tossLive: boolean; tossCheckout: boolean; tossMode: TossCheckoutMode; paypalSandbox: boolean; database: boolean; freePreviewDownload: boolean; paidDownload: boolean }>;

type PaymentEnvironment = Readonly<Record<string, string | undefined>>;

type TossCredential = Readonly<{ mode: "test" | "live"; role: "client" | "secret" }>;

function tossCredential(value: string | undefined): TossCredential | null {
  if (!value) return null;
  const match = /^(test|live)_(g?ck|g?sk)_/i.exec(value);
  if (!match) return null;
  return {
    mode: match[1].toLowerCase() as "test" | "live",
    role: match[2].toLowerCase().endsWith("ck") ? "client" : "secret",
  };
}

function credentialsAllowMode(env: PaymentEnvironment, mode: "test" | "live") {
  const client = tossCredential(env.NEXT_PUBLIC_TOSS_CLIENT_KEY);
  const secret = tossCredential(env.TOSS_SECRET_KEY);
  return client?.mode === mode && client.role === "client"
    && secret?.mode === mode && secret.role === "secret";
}

export function getPaymentReadiness(env: PaymentEnvironment = process.env): PaymentReadiness {
  const previewEnvironment = env.VERCEL_ENV === "preview" || (env.NODE_ENV === "development" && !env.VERCEL_ENV);
  const productionEnvironment = env.VERCEL_ENV === "production";
  const blobCredentials = Boolean(env.BLOB_STORE_ID || env.BLOB_READ_WRITE_TOKEN);
  const privatePaidAssets = Boolean(env.STORE_PAID_PDF_KO_BLOB_PATH && env.STORE_PAID_PDF_EN_BLOB_PATH);
  const database = Boolean(env.DATABASE_URL);
  const paidDownload = (previewEnvironment || productionEnvironment)
    && env.STORE_PAID_DOWNLOADS_ENABLED === "true"
    && database
    && blobCredentials
    && privatePaidAssets;
  const tossPreviewSandbox = previewEnvironment
    && env.STORE_SANDBOX_ENABLED === "true"
    && env.TOSS_PAYMENTS_MODE === "test"
    && credentialsAllowMode(env, "test")
    && database;
  const tossProductionReviewSandbox = productionEnvironment
    && env.STORE_PRODUCTION_SANDBOX_REVIEW_ENABLED === "true"
    && env.STORE_SANDBOX_ENABLED === "true"
    && env.STORE_LIVE_PAYMENTS_ENABLED !== "true"
    && env.TOSS_PAYMENTS_MODE === "test"
    && credentialsAllowMode(env, "test")
    && database
    && paidDownload;
  const tossSandbox = tossPreviewSandbox || tossProductionReviewSandbox;
  const tossLive = productionEnvironment
    && env.STORE_LIVE_PAYMENTS_ENABLED === "true"
    && env.TOSS_PAYMENTS_MODE === "live"
    && credentialsAllowMode(env, "live")
    && database
    && paidDownload;
  return {
    tossSandbox,
    tossProductionReviewSandbox,
    tossLive,
    tossCheckout: tossSandbox || tossLive,
    tossMode: tossLive ? "live" : tossSandbox ? "test" : null,
    paypalSandbox: false,
    database,
    freePreviewDownload: env.VERCEL_ENV === "preview" || (env.NODE_ENV === "development" && env.ENABLE_FREE_PROMPT_PREVIEW === "true"),
    paidDownload,
  };
}

export function canServeFreeDownload(env: PaymentEnvironment = process.env) {
  return getPaymentReadiness(env).freePreviewDownload;
}
