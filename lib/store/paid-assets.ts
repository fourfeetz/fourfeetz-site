import type { StoreLanguage } from "../store.ts";

const STARTER_PRODUCT_ID = "3f1ff879-9a8b-4d61-a78a-e47f2c330002";

const CREATOR_PRODUCT_ID = "3f1ff879-9a8b-4d61-a78a-e47f2c330003";

export type PaidAsset = Readonly<{ pathname: string; filename: string; locale: StoreLanguage }>;

export function getPaidAsset(productId: string, locale: StoreLanguage, env: Readonly<Record<string, string | undefined>> = process.env): PaidAsset | null {
  if (productId !== STARTER_PRODUCT_ID && productId !== CREATOR_PRODUCT_ID) return null;
  const creatorPack = productId === CREATOR_PRODUCT_ID;
  const pathname = creatorPack
    ? (locale === "ko" ? env.STORE_CREATOR_PDF_KO_BLOB_PATH : env.STORE_CREATOR_PDF_EN_BLOB_PATH)
    : (locale === "ko" ? env.STORE_PAID_PDF_KO_BLOB_PATH : env.STORE_PAID_PDF_EN_BLOB_PATH);
  if (!pathname || pathname.startsWith("http://") || pathname.startsWith("https://") || pathname.length > 500) return null;
  return {
    pathname,
    locale,
    filename: creatorPack ? `fourfeetz-pet-creator-pack-${locale}.pdf` : `fourfeetz-ai-pet-video-starter-guide-${locale}.pdf`,
  };
}
