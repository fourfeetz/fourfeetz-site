import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedPosts from "@/components/RelatedPosts";
import { LanguageProvider } from "@/components/LanguageProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "FourFeetz Studios | AI Creative Studio",
    template: "%s | FourFeetz Studios",
  },
  description:
    "FourFeetz Studios creates AI films, original characters, music, and creative production content for multi-platform storytelling.",
  metadataBase: new URL("https://www.fourfeetz.com"),
  other: {
    "google-adsense-account": "ca-pub-8793962309929245",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title: "FourFeetz Studios | AI Creative Studio",
    description: "FourFeetz Studios creates AI films, original characters, music, and creative production content for multi-platform storytelling.",
    url: "/",
    images: [{ url: "/images/studio-hero.png", alt: "FourFeetz Studios AI Creative Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FourFeetz Studios | AI Creative Studio",
    description: "FourFeetz Studios creates AI films, original characters, music, and creative production content for multi-platform storytelling.",
    images: ["/images/studio-hero.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="fourfeetz-adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8793962309929245"
          crossOrigin="anonymous"
        />
      </head>
      <body className={montserrat.className}>
        <LanguageProvider>
          <Header />
          {children}
          <RelatedPosts />
          <Footer />
        </LanguageProvider>
        <GoogleAnalytics gaId="G-T4L4K2EHN2" />
      </body>
    </html>
  );
}
