export type PaymentReadiness = Readonly<{ tossSandbox: boolean; paypalSandbox: boolean; database: boolean; freePreviewDownload: boolean }>;

type PaymentEnvironment = Readonly<Record<string, string | undefined>>;

export function getPaymentReadiness(env: PaymentEnvironment = process.env): PaymentReadiness {
  const sandboxEnvironment = env.VERCEL_ENV === "preview" || (env.NODE_ENV === "development" && !env.VERCEL_ENV);
  const explicitlyEnabled = env.STORE_SANDBOX_ENABLED === "true";
  const testKeys = env.NEXT_PUBLIC_TOSS_CLIENT_KEY?.startsWith("test_") && env.TOSS_SECRET_KEY?.startsWith("test_");
  return {
    tossSandbox: sandboxEnvironment && explicitlyEnabled && Boolean(testKeys && env.DATABASE_URL),
    paypalSandbox: false,
    database: Boolean(env.DATABASE_URL),
    freePreviewDownload: env.VERCEL_ENV === "preview" || (env.NODE_ENV === "development" && env.ENABLE_FREE_PROMPT_PREVIEW === "true"),
  };
}

export function canServeFreeDownload(env: PaymentEnvironment = process.env) {
  return getPaymentReadiness(env).freePreviewDownload;
}
