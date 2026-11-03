export type TossCheckoutMode = "test" | "live" | null;
export type PaymentReadiness = Readonly<{ tossSandbox: boolean; tossLive: boolean; tossCheckout: boolean; tossMode: TossCheckoutMode; paypalSandbox: boolean; database: boolean; freePreviewDownload: boolean; paidDownload: boolean }>;

type PaymentEnvironment = Readonly<Record<string, string | undefined>>;

function tossCredentialMode(value: string | undefined): "test" | "live" | "unknown" | null {
  if (!value) return null;
  const normalized = value.toLowerCase();
  if (/^(test[_-]|(?:ck|sk|client|secret)[_-]test[_-])/.test(normalized)) return "test";
  if (/^(live[_-]|(?:ck|sk|client|secret)[_-]live[_-])/.test(normalized)) return "live";
  return "unknown";
}

function credentialsAllowMode(env: PaymentEnvironment, mode: "test" | "live") {
  const clientMode = tossCredentialMode(env.NEXT_PUBLIC_TOSS_CLIENT_KEY);
  const secretMode = tossCredentialMode(env.TOSS_SECRET_KEY);
  return Boolean(clientMode && secretMode && clientMode !== (mode === "test" ? "live" : "test") && secretMode !== (mode === "test" ? "live" : "test"));
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
  const tossSandbox = previewEnvironment
    && env.STORE_SANDBOX_ENABLED === "true"
    && env.TOSS_PAYMENTS_MODE === "test"
    && credentialsAllowMode(env, "test")
    && database;
  const tossLive = productionEnvironment
    && env.STORE_LIVE_PAYMENTS_ENABLED === "true"
    && env.TOSS_PAYMENTS_MODE === "live"
    && credentialsAllowMode(env, "live")
    && database
    && paidDownload;
  return {
    tossSandbox,
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
