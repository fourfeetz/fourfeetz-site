import type { Metadata } from "next";
import PayPalReturn from "@/components/store/PayPalReturn";
import { paypalOrderIdPattern } from "@/lib/store/paypal";
import { getPaymentReadiness } from "@/lib/store/readiness";

export const metadata: Metadata = {
  title: "PayPal Checkout | FourFeetz",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default async function Page({ searchParams }: { searchParams: Promise<{ token?: string | string[] }> }) {
  const { token } = await searchParams;
  const mode = getPaymentReadiness().paypalMode;
  const validToken = mode && typeof token === "string" && paypalOrderIdPattern.test(token);
  return <PayPalReturn token={validToken ? token : null} sandbox={mode === "sandbox"} />;
}
