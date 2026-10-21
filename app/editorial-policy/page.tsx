import type { Metadata } from "next";
import StaticInfoPage from "@/components/StaticInfoPage";
import { englishLanguageAlternates } from "@/lib/localization";

export const metadata: Metadata = {
  title: "Editorial & AI Content Policy",
  description: "Learn how FourFeetz Studios plans, reviews, attributes, and corrects original editorial and AI-assisted content.",
  alternates: englishLanguageAlternates("/editorial-policy", "/ko/editorial-policy"),
};

export default function EditorialPolicyPage() {
  return <StaticInfoPage
    eyebrow="Editorial Standards"
    title="Editorial & AI Content Policy"
    description="FourFeetz publishes original studio work, practical production records, and carefully attributed editorial guidance. This page explains the standards behind that work."
    updated="October 21, 2026"
    sections={[
      { title: "Who Is Responsible", paragraphs: ["FourFeetz Studios is responsible for the editorial direction of this website. Questions, correction requests, and rights concerns can be sent to fourfeetzstudio@gmail.com.", "Articles represent the studio's production perspective unless a page clearly identifies another source. External sources are linked where they support factual claims, product details, news reporting, or quoted material."] },
      { title: "Original Work & First-Hand Records", paragraphs: ["Films, shorts, characters, music, visual assets, and production records are published to document FourFeetz work or licensed materials used with permission. We do not present a third party's work, customer result, or audience metric as our own.", "Production records are intended to show useful context: the creative goal, the choices made, the limits encountered, and the result that was actually published. Internal prompts, private customer materials, and unreleased project files are not published as evidence."] },
      { title: "AI-Assisted Content", paragraphs: ["FourFeetz may use AI tools during research, outlining, translation, image or video production, and editing. AI assistance does not remove our responsibility for the published page.", "Before publication, an editor reviews the page for relevance, clarity, attribution, factual support, copyright risk, and whether it adds a useful perspective beyond a tool-generated summary. We do not publish pages solely to target search queries or inflate page count."] },
      { title: "News, Sources & Updates", paragraphs: ["News items must identify their source and explain the boundary of what the source establishes. Where a claim depends on reporting, the original publisher or primary material is linked. A translation is labelled as a translation and does not create new evidence.", "Product features, prices, licences, and platform policies change. Readers should confirm current details with the relevant provider before making a purchasing, production, or commercial decision."] },
      { title: "Affiliate Relationships", paragraphs: ["When a page includes an affiliate or referral link, the relationship is disclosed near the link. Editorial opinions are not sold, and a referral benefit does not guarantee that a tool is appropriate for every project."] },
      { title: "Corrections & Removal Requests", paragraphs: ["If a page contains an error, missing attribution, or material that should be reviewed, email the page URL, the relevant passage, and supporting information to fourfeetzstudio@gmail.com. We review correction and rights requests and update, clarify, or remove material when warranted."] },
    ]}
    cta={{ eyebrow: "Questions or corrections", title: "Help us keep the record accurate.", description: "Send the page URL and supporting context to FourFeetz Studios for editorial, attribution, or rights questions.", href: "/contact", label: "Contact the studio" }}
  />;
}
