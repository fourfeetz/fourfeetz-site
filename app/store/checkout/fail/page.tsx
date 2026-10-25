import type { Metadata } from "next";
import CheckoutResultPage from "@/components/store/CheckoutResultPage";
export const metadata: Metadata = { title: "Payment Incomplete | FourFeetz", robots: { index: false, follow: false } };
export default function Page() { return <CheckoutResultPage language="en" result="fail" />; }
