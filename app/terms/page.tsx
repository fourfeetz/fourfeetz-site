import type { Metadata } from "next";
import StaticInfoPage from "@/components/StaticInfoPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read the terms governing access to FourFeetz Studios content, resources, characters, media, and website services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <StaticInfoPage eyebrow="Policy" title="Terms of Use" description="These terms govern access to the FourFeetz Studios website, original media, editorial content, and creator resources." updated="July 13, 2026" sections={[
    { title: "Using This Website", paragraphs: ["You may browse the website and use publicly available content for personal, non-commercial reference. You agree not to disrupt the site, bypass security controls, misuse automated access, or use the website in violation of applicable law."] },
    { title: "Intellectual Property", paragraphs: ["FourFeetz Studios names, original characters, films, music, artwork, writing, downloads, and visual identity are owned by or licensed to FourFeetz Studios. No ownership rights transfer simply because content is available online."] },
    { title: "Resources & Permitted Use", paragraphs: ["Specific downloadable resources may include their own license or usage instructions. Those terms control when provided. Unless expressly stated otherwise, resources may not be resold, redistributed as standalone products, or presented as your original work."] },
    { title: "Editorial Information", paragraphs: ["Articles, reviews, workflows, and tool discussions are provided for general educational purposes. Features, pricing, licenses, and platform policies can change, so you should confirm current information with the relevant provider before making production or commercial decisions."] },
    { title: "Third-Party Services", paragraphs: ["Links and embedded services may lead to third-party websites. FourFeetz Studios does not control their availability, security, content, or terms and is not responsible for losses arising from your use of those services."] },
    { title: "Disclaimer & Changes", paragraphs: ["The website is provided on an as-available basis without guarantees of uninterrupted access or error-free content. We may update these terms as the studio evolves. Questions about permissions or these terms can be sent to hello@fourfeetz.com."] },
  ]} cta={{ eyebrow: "Usage Questions", title: "Planning to use FourFeetz content?", description: "Contact the studio before licensing, publishing, adapting, or commercially using protected material.", href: "/contact", label: "Contact Us" }} />;
}
