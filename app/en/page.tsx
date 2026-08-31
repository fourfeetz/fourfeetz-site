import type { Metadata } from "next";
import EnglishHome from "@/app/page";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: { absolute: "FourFeetz Studios | Original Animal Character Studio" },
  alternates: englishLanguageAlternates("/en", "/ko"),
};

export default EnglishHome;
