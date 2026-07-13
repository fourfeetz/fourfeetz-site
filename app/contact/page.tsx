import type { Metadata } from "next";
import StaticInfoPage from "@/components/StaticInfoPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact FourFeetz Studios about creative collaborations, AI film production, licensing, editorial inquiries, and partnerships.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <StaticInfoPage eyebrow="Contact" title="Start a conversation." description="For collaborations, production inquiries, licensing, editorial questions, or studio partnerships, contact FourFeetz Studios by email." sections={[
    { title: "Studio Inquiries", paragraphs: ["Email fourfeetzstudio@gmail.com with a short introduction, the nature of your inquiry, and any relevant timeline or project links. We review messages carefully and reply when there is a clear fit."] },
    { title: "What to Include", items: ["Your name, organization, and preferred contact details.", "A concise description of the project or request.", "Expected scope, schedule, and intended distribution platforms.", "Relevant references, briefs, or links that help us understand the opportunity."] },
    { title: "Response & Privacy", paragraphs: ["Please do not send confidential material in an initial message. Submission of an inquiry does not create a business relationship, and project discussions begin only after both parties confirm scope and terms."] },
  ]} cta={{ eyebrow: "Email", title: "fourfeetzstudio@gmail.com", description: "The simplest way to reach the studio for thoughtful, project-specific inquiries.", href: "mailto:fourfeetzstudio@gmail.com", label: "Send Email" }} />;
}
