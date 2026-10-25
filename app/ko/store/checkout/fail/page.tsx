import type { Metadata } from "next";
import CheckoutResultPage from "@/components/store/CheckoutResultPage";
export const metadata: Metadata = { title: { absolute: "결제 미완료 | FourFeetz" }, robots: { index: false, follow: false } };
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) { const query = await searchParams; return <CheckoutResultPage language="ko" result={query.code === "PAY_PROCESS_CANCELED" ? "cancel" : "fail"} />; }
