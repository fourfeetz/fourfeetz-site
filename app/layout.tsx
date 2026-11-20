import type { Metadata } from "next";
import { headers } from "next/headers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedPosts from "@/components/RelatedPosts";
import { LanguageProvider } from "@/components/LanguageProvider";
import InfolinksConsent from "@/components/InfolinksConsent";
import CommentsGate from "@/components/comments/CommentsGate";
import Script from "next/script";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: {
    default: "FourFeetz Studios | Original Animal Character Studio",
    template: "%s | FourFeetz Studios",
  },
  description: "Original animal characters, published films, relaxing videos, music, and selected production records by FourFeetz Studios.",
  metadataBase: new URL("https://fourfeetz.com"),
  other: {
    "google-adsense-account": "ca-pub-8793962309929245",
    "naver-site-verification": "114f76443087cc8fa294d3c654d19d4b271a7666",
  },
  alternates: englishLanguageAlternates("/", "/ko"),
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title: "FourFeetz Studios | Original Animal Character Studio",
    description: "Original animal characters, published films, relaxing videos, music, and selected production records by FourFeetz Studios.",
    url: "/",
    images: [{ url: "/images/studio-hero.png", alt: "FourFeetz original animal character production studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FourFeetz Studios | Original Animal Character Studio",
    description: "Original animal characters, published films, relaxing videos, music, and selected production records by FourFeetz Studios.",
    images: ["/images/studio-hero.png"],
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const language = (await headers()).get("x-fourfeetz-language") === "ko" ? "ko" : "en";
  const path = (await headers()).get("x-fourfeetz-path") ?? "";
  const infolinksEnabled = process.env.NEXT_PUBLIC_INFOLINKS_ENABLED === "true";
  const infolinksPid = Number(process.env.NEXT_PUBLIC_INFOLINKS_PID);
  const infolinksWsid = Number(process.env.NEXT_PUBLIC_INFOLINKS_WSID);
  const hasValidInfolinksConfig = infolinksEnabled && Number.isInteger(infolinksPid) && infolinksPid > 0 && Number.isInteger(infolinksWsid) && infolinksWsid >= 0;

  return (
    <html lang={language}>
      <body className="font-sans">
        <LanguageProvider>
          <Header />
          {children}
          <CommentsGate path={path} />
          <RelatedPosts />
          <Footer />
        </LanguageProvider>
        <GoogleAnalytics gaId="G-T4L4K2EHN2" />
        <Analytics />
        {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" /> : null}
        {hasValidInfolinksConfig ? <InfolinksConsent language={language} pid={infolinksPid} wsid={infolinksWsid} /> : null}
      </body>
    </html>
  );
}
