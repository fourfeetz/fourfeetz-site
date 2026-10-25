export type PaymentReadiness = Readonly<{ tossSandbox: boolean; paypalSandbox: boolean; database: boolean; freePreviewDownload: boolean }>;

type PaymentEnvironment = Readonly<Record<string, string | undefined>>;

export function getPaymentReadiness(env: PaymentEnvironment = process.env): PaymentReadiness {
  const previewOrDevelopment = env.VERCEL_ENV === "preview" || env.NODE_ENV === "development";
  return {
    tossSandbox: previewOrDevelopment && Boolean(env.NEXT_PUBLIC_TOSS_CLIENT_KEY?.startsWith("test_") && env.TOSS_SECRET_KEY?.startsWith("test_") && env.DATABASE_URL),
    paypalSandbox: previewOrDevelopment && Boolean(env.NEXT_PUBLIC_PAYPAL_CLIENT_ID && env.PAYPAL_CLIENT_SECRET && env.PAYPAL_WEBHOOK_ID && env.DATABASE_URL),
    database: Boolean(env.DATABASE_URL),
    freePreviewDownload: env.VERCEL_ENV === "preview" || (env.NODE_ENV === "development" && env.ENABLE_FREE_PROMPT_PREVIEW === "true"),
  };
}

export function canServeFreeDownload(env: PaymentEnvironment = process.env) {
  return getPaymentReadiness(env).freePreviewDownload;
}
