import type { Metadata } from "next";
import CheckoutVerification from "@/components/store/CheckoutVerification";
export const metadata: Metadata = { title: "Payment Verification | FourFeetz", robots: { index: false, follow: false } };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const query = await searchParams;
  const amountValue = typeof query.amount === "string" ? Number(query.amount) : NaN;
  return <CheckoutVerification language="en" paymentKey={typeof query.paymentKey === "string" ? query.paymentKey : null} orderId={typeof query.orderId === "string" ? query.orderId : null} amount={Number.isSafeInteger(amountValue) && amountValue > 0 ? amountValue : null} />;
}
