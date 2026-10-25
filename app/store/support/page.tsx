import type { Metadata } from "next";
import StoreSupportPage from "@/components/store/StoreSupportPage";
import { englishLanguageAlternates } from "@/lib/localization";

const title = "Store Support | FourFeetz";
const description = "Contact FourFeetz about store payment, file downloads, prompt usage and refund requests.";
export const metadata: Metadata = { title: { absolute: title }, description, alternates: englishLanguageAlternates("/store/support", "/ko/store/support") };
export default function Page() { return <StoreSupportPage language="en" />; }
