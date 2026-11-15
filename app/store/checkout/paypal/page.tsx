import type { Metadata } from "next";
import PayPalSandboxReturn from "@/components/store/PayPalSandboxReturn";
import { paypalOrderIdPattern } from "@/lib/store/paypal";
import { getPaymentReadiness } from "@/lib/store/readiness";

export const metadata: Metadata = {
  title: "PayPal Sandbox Checkout | FourFeetz",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default async function Page({ searchParams }: { searchParams: Promise<{ token?: string | string[] }> }) {
  const { token } = await searchParams;
  const validToken = getPaymentReadiness().paypalSandbox && typeof token === "string" && paypalOrderIdPattern.test(token);
  return <PayPalSandboxReturn token={validToken ? token : null} />;
}
