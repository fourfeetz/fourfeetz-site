import type { Metadata } from "next";
import Link from "next/link";
import StaticInfoPage from "@/components/StaticInfoPage";
import { englishLanguageAlternates } from "@/lib/localization";

const title = "Digital Content Refund Policy | FourFeetz";
const description = "Refund, withdrawal, delivery issue, and support terms for FourFeetz paid PDF guides and digital prompt packages.";
const canonical = "https://fourfeetz.com/refund-policy";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: englishLanguageAlternates("/refund-policy", "/ko/refund-policy"),
  openGraph: { type: "website", siteName: "FourFeetz Studios", title, description, url: "/refund-policy", locale: "en_US", alternateLocale: ["ko_KR"] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://fourfeetz.com/en" },
    { "@type": "ListItem", position: 2, name: "Refund Policy", item: canonical },
  ],
};

export default function RefundPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <StaticInfoPage
        eyebrow="Store Policy"
        title="Digital Content Refund Policy"
        description="This policy explains withdrawal, refunds, redelivery, and support for paid PDF guides and digital prompt packages sold by FourFeetz. Mandatory consumer rights under Korean law prevail over this summary."
        updated="October 27, 2026"
        sections={[
          { title: "1. Products and delivery", paragraphs: ["This policy applies to AI pet video production guide PDFs and digital prompt packages. After a verified payment, the purchased digital file is made available through a protected download flow. A product that is marked as coming soon or whose file is not ready is not eligible for paid delivery."] },
          { title: "2. Withdrawal before delivery starts", paragraphs: ["In general, a consumer may request withdrawal within seven days from receiving the contract information. If delivery begins later, the period is calculated from the date the digital content is supplied or its supply begins, as provided by the Act on the Consumer Protection in Electronic Commerce.", "Send the request before opening or downloading the file whenever possible. Whether the download button was displayed, clicked, or completed is reviewed together with the actual delivery record and the statutory requirements; a download is not, by itself, treated as an automatic rejection of every refund request."] },
          { title: "3. After digital content delivery begins", paragraphs: ["A statutory restriction on withdrawal after supply of digital content has begun applies only when all requirements under applicable law are satisfied, including clear advance notice and any required express consent. If those requirements were not satisfied, the restriction will not be asserted merely because a file was downloaded.", "Nothing in this section limits remedies for a file that was not supplied, cannot be downloaded, is corrupted, or materially differs from the product description or agreed content."] },
          { title: "4. Missing, defective, or incorrect files", paragraphs: ["If the file was not delivered, the download fails, the PDF is damaged, or the content materially differs from its description, contact us with the order reference and a short description of the problem. We will verify the delivery record and first offer a working download or corrected file when appropriate. You may instead request a refund where required by law or where redelivery does not resolve the issue.", "For content that differs from its display, advertisement, or contract, withdrawal may be requested within three months after supply or within 30 days after the consumer knew or could have known of the discrepancy, whichever is applicable under Korean law."] },
          { title: "5. How to request a refund", paragraphs: [<>Email <a className="font-bold text-[#6f4e37] underline underline-offset-4" href="mailto:fourfeetzstudio@gmail.com">fourfeetzstudio@gmail.com</a> with the purchaser&apos;s email address, product name, order reference, reason for the request, and whether a download was attempted. Do not send a card number, payment secret, or download token.</>, "We acknowledge the request, verify payment and delivery records, ask only for information reasonably needed to review the claim, and notify you of approval, redelivery, or the reason for any lawful limitation."] },
          { title: "6. Refund timing and method", paragraphs: ["When withdrawal or a refund is accepted, FourFeetz will initiate the refund through the original payment method without undue delay and within three business days from the date required by applicable law. The card issuer or payment provider may need additional time to post the credit. Any statutory late-payment interest or other mandatory remedy remains unaffected."] },
          { title: "7. Seller information and governing standards", paragraphs: ["Seller: 포피츠(FourFeetz) · Representative: 박민식 · Business Registration Number: 865-16-02920 · Email: fourfeetzstudio@gmail.com.", <>This policy is interpreted in accordance with the Act on the Consumer Protection in Electronic Commerce, the Content Industry Promotion Act, and other mandatory Korean consumer-protection rules. See the <Link className="font-bold text-[#6f4e37] underline underline-offset-4" href="/terms">Terms of Use</Link> for other website and content terms.</>] },
        ]}
        cta={{ eyebrow: "Refund Support", title: "Need help with a payment or download?", description: "Tell us what happened and include your order reference. Never email card details or a download token.", href: "mailto:fourfeetzstudio@gmail.com", label: "Email Support" }}
      />
    </>
  );
}
