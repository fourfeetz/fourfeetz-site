import type { Metadata } from "next";
import StaticInfoPage from "@/components/StaticInfoPage";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | FourFeetz Studios" },
  description: "Learn how FourFeetz Studios collects, uses, and protects information, including Google Analytics, Google AdSense, cookies, and affiliate disclosures.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <StaticInfoPage eyebrow="Policy" title="Privacy Policy" description="This policy explains how FourFeetz Studios handles information when you visit the website or contact the studio." updated="July 15, 2026" sections={[
    { title: "Information We Collect", paragraphs: ["We may receive information you choose to provide, such as your name, email address, organization, and message when you contact us. Basic technical information may also be collected by hosting, security, and analytics services to operate and protect the website."] },
    { title: "How We Use Information", items: ["Respond to inquiries and communicate about requested services.", "Operate, secure, maintain, and improve the website.", "Understand aggregate website usage and content performance.", "Meet legal obligations and prevent misuse or fraud."] },
    { title: "Cookies & Service Providers", paragraphs: ["The site may use essential cookies and trusted service providers for hosting, analytics, embedded media, or security. These providers process information under their own terms and only as needed to deliver their services.", "We use Google Analytics to understand how visitors use the website, measure traffic, improve performance, and analyze anonymous visitor behavior. Google Analytics may collect anonymized information through cookies."] },
    { title: "Google Advertising", paragraphs: ["FourFeetz may display advertisements provided by Google AdSense.", "Google and its partners may use cookies to serve personalized or non-personalized advertisements based on previous visits to this or other websites.", "Visitors can learn more about how Google uses information by visiting Google's advertising and privacy policies."] },
    { title: "Affiliate & Referral Links", paragraphs: ["Some pages on FourFeetz may include affiliate or referral links to products and services that are genuinely used in our production workflow.", "If a visitor registers or purchases through these links, FourFeetz may receive a commission, referral reward, or promotional credit at no additional cost to the visitor.", "These relationships never influence our editorial opinions or recommendations."] },
    { title: "International Privacy Rights", paragraphs: ["If you are located in the European Economic Area (EEA), the United Kingdom, Switzerland, or other regions with applicable privacy laws, you may have additional rights regarding access, correction, deletion, or restriction of your personal information."] },
    { title: "Retention & Your Choices", paragraphs: ["We retain personal information only as long as reasonably necessary for the purpose it was collected, legal obligations, or dispute resolution. You may request access, correction, or deletion by contacting fourfeetzstudio@gmail.com, subject to applicable law."] },
    { title: "Policy Updates", paragraphs: ["We may update this policy as the website and studio services evolve. The date above identifies the latest revision. Continued use of the website after an update means the revised policy applies from its effective date."] },
  ]} cta={{ eyebrow: "Privacy Questions", title: "Need clarification about your information?", description: "Contact the studio for privacy requests or questions about this policy.", href: "/contact", label: "Contact Us" }} />;
}
