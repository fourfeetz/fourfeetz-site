import type { Metadata } from "next";

export type ToolNewsInsightSlug =
  | "runway-dev-ai-media-platform"
  | "adobe-firefly-agentic-studio";

export type ToolNewsSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ToolNewsInsight = {
  slug: ToolNewsInsightSlug;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  hero: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  tags: string[];
  keywords: string[];
  tools: string[];
  source: {
    publisher: string;
    title: string;
    publishedAt: string;
    url: string;
  };
  verdict: string;
  confirmed: string[];
  notYetProven: string[];
  sections: ToolNewsSection[];
  checklist: string[];
};

export const toolNewsInsights: Record<ToolNewsInsightSlug, ToolNewsInsight> = {
  "runway-dev-ai-media-platform": {
    slug: "runway-dev-ai-media-platform",
    title: "Runway Dev Launches a Unified AI Media Platform: What Production Teams Should Verify",
    shortTitle: "Runway Dev: Production Reality Check",
    description:
      "Runway Dev combines image, video, audio, workflows and real-time characters behind one developer platform. We separate the confirmed launch details from the production questions still unanswered.",
    category: "Tools",
    hero: "/images/insights/news/runway-dev-workflow.png",
    publishedAt: "2026-07-26",
    updatedAt: "2026-07-26",
    readTime: "8 min read",
    tags: ["TOOLS", "AI VIDEO", "WORKFLOW", "DEVELOPERS"],
    keywords: ["Runway Dev", "AI media API", "Runway Workflows", "AI video API", "creative automation"],
    tools: ["Runway Dev", "Gen-4.5", "Aleph 2.0", "Act-Two"],
    source: {
      publisher: "Runway",
      title: "Introducing Runway Dev",
      publishedAt: "2026-07-08",
      url: "https://runway.com/news/company-news/introducing-runway-dev",
    },
    verdict:
      "The important shift is not another model release. It is the packaging of multiple media models, reusable Recipes, custom Workflows and interactive Characters behind one production surface. That can reduce integration work, but it does not remove the need for asset review, cost controls, fallback paths and model-specific quality tests.",
    confirmed: [
      "Runway Dev launched as a developer and enterprise platform for image, video, audio and real-time character models.",
      "The launch includes Runway models such as Gen-4.5, Aleph 2.0 and Act-Two alongside selected third-party models.",
      "Recipes provide pre-built endpoints for tasks including ad localization, product ads, product swaps and multi-shot video.",
      "Custom Workflows can combine models and tasks, then expose the result through a private API endpoint.",
      "Runway states that the service includes spend controls, content moderation, SOC 2 Type II compliance, IP indemnification and a 99.9% uptime target.",
    ],
    notYetProven: [
      "A single API does not guarantee identical prompting, seed behavior, resolution options or revision controls across models.",
      "Vendor-reported scale and savings are not a substitute for an independent cost-per-approved-asset test.",
      "Day-zero model access can reduce integration delay while increasing the need for version pinning and regression review.",
      "Pre-built Recipes may be efficient for common outcomes but can hide decisions that matter to character continuity and editorial control.",
    ],
    sections: [
      {
        id: "what-changed",
        title: "What Changed on July 8",
        paragraphs: [
          "Runway Dev moves Runway beyond a single creative application and toward an infrastructure layer for AI media. The launch announcement describes four main surfaces: Models, Recipes, Workflows and Characters. Models provide access to first-party and selected third-party systems. Recipes wrap common production outcomes into pre-built endpoints. Workflows let a team assemble a private multi-step pipeline. Characters add real-time avatars with voice, tool calling and a knowledge base.",
          "For a small studio, the practical attraction is consolidation. A pipeline that previously called separate image, video, voice and orchestration vendors may be managed through one account, one billing surface and fewer integration contracts. The operational question is whether that convenience survives a real project with version changes, failed jobs, review loops and mixed delivery formats.",
        ],
        bullets: [
          "The product is available now, according to Runway.",
          "Models can be swapped through the platform, but every swap still needs a quality regression test.",
          "Workflows are reusable production graphs, not a replacement for editorial approval.",
          "Characters expand the platform from generated assets into interactive experiences.",
        ],
      },
      {
        id: "fourfeetz-impact",
        title: "What It Could Mean for FourFeetz",
        paragraphs: [
          "A FourFeetz-style workflow contains repeatable steps that are good candidates for automation: validating file dimensions, generating low-cost motion tests, producing review sheets, preparing vertical variants and recording model metadata. Those steps have clear inputs and observable outputs. Final character approval, story rhythm and emotional performance should remain explicit human gates.",
          "The strongest potential use is not a fully automatic film. It is a controlled production service that can run a named recipe, attach the source reference and settings, return the output to a review queue and stop before publishing. That boundary keeps automation useful without turning one bad generation into dozens of downstream assets.",
        ],
      },
      {
        id: "risk-model",
        title: "The New Risk Is Workflow Lock-In",
        paragraphs: [
          "When many models sit behind one vendor surface, switching looks easy at the API level. Production switching is harder. Prompt interpretation, aspect ratios, audio behavior, safety filters, latency and edit controls can differ. A one-line model change may require a full visual and contractual review.",
          "Teams should keep an internal asset manifest outside the platform: source references, model and version, recipe or workflow revision, cost, output checksum, approval status and delivery destination. If the platform changes, that record preserves what was made and why it was accepted.",
        ],
        bullets: [
          "Pin model and workflow versions where the platform allows it.",
          "Define a fallback for time-sensitive renders and unavailable models.",
          "Measure cost per approved asset, not cost per API call.",
          "Test data-retention and no-training terms against the exact account plan and model provider.",
        ],
      },
      {
        id: "production-test",
        title: "A Sensible First Production Test",
        paragraphs: [
          "Start with one low-risk deliverable: a five-shot storyboard-to-preview workflow using approved references and non-confidential assets. Compare the automated result with the current manual path. Record setup time, failed jobs, review time, continuity defects, accepted outputs and total spend.",
          "Do not begin with the hero film or an automated publishing step. The goal of the first test is to discover where orchestration saves time and where it hides important choices. A successful pilot should make rejection reasons easier to trace, not merely generate more files.",
        ],
      },
    ],
    checklist: [
      "Confirm live model availability, regional access and pricing in the Runway Dev dashboard.",
      "Test one Recipe and one custom Workflow with the same approved source assets.",
      "Record model versions, workflow revisions, cost and rejection reasons.",
      "Verify retention, training, indemnification and third-party provider terms for the intended plan.",
      "Keep final approval and publishing outside the automated pipeline.",
    ],
  },
  "adobe-firefly-agentic-studio": {
    slug: "adobe-firefly-agentic-studio",
    title: "Adobe Firefly Adds Agentic Creative Workflows: The Useful Features and the Open Questions",
    shortTitle: "Adobe Firefly Agentic Studio",
    description:
      "Adobe is connecting storyboards, video generation, Quick Cut and reusable project context inside Firefly. Here is what is confirmed, what remains in beta and what creators should test first.",
    category: "Workflow",
    hero: "/images/insights/news/firefly-agentic-studio.png",
    publishedAt: "2026-07-26",
    updatedAt: "2026-07-26",
    readTime: "8 min read",
    tags: ["WORKFLOW", "TOOLS", "AI VIDEO", "DESIGN"],
    keywords: ["Adobe Firefly", "Firefly AI Assistant", "agentic creativity", "Quick Cut", "AI storyboard"],
    tools: ["Adobe Firefly", "Firefly AI Assistant", "Premiere", "Frame.io"],
    source: {
      publisher: "Adobe",
      title: "Adobe Firefly introduces new agentic capabilities and an upgraded creative AI studio",
      publishedAt: "2026-06-18",
      url: "https://blog.adobe.com/en/publish/2026/06/18/adobe-firefly-introduces-new-agentic-capabilities-and-an-upgraded-creative-ai-studio-built-for-the-way-you-work",
    },
    verdict:
      "Adobe's update is significant because it targets the space between generation and finishing: storyboards, first cuts, reusable assets and persistent project context. The most production-relevant features are also split across public beta and private beta, so creators should evaluate the available workflow rather than assume the full studio vision is shipping today.",
    confirmed: [
      "Firefly AI Assistant gained skills for short product video, storyboard creation, storyboard-to-video and Quick Cut.",
      "Adobe says the assistant can search assets with natural language, remember workflow preferences and support collaboration.",
      "The upgraded Firefly studio preview includes Elements for reusable characters, locations and objects.",
      "Projects are designed to keep assets, generations and creative context together across sessions.",
      "The upgraded unified studio, including Elements and Projects, is in private beta through a waitlist.",
    ],
    notYetProven: [
      "A reusable Element does not automatically guarantee character identity across every camera angle, model and video duration.",
      "Quick Cut can accelerate assembly, but edit quality depends on shot intent, coverage, handles, audio and the acceptance criteria used.",
      "Persistent context can improve continuity while also carrying a weak reference or wrong decision into later generations.",
      "Private-beta capabilities, limits and availability may change before broad release.",
    ],
    sections: [
      {
        id: "what-changed",
        title: "From Prompt Box to Production Workspace",
        paragraphs: [
          "The June update positions Firefly as a connected creative studio rather than a collection of generators. Adobe announced new AI Assistant skills for building storyboards, generating video from those boards, creating short product videos and assembling footage with Quick Cut. The broader studio preview connects ideation, generation and editing while preserving project context.",
          "That direction matters because creative work rarely fails at the first image. It fails in the handoffs: references are lost, filenames multiply, a selected character changes, a rough cut has no clean handles or the final delivery requires a different format. A workspace that remembers approved assets and keeps generation near the edit can reduce those handoff costs.",
        ],
      },
      {
        id: "elements-projects",
        title: "Elements and Projects Address the Right Problem",
        paragraphs: [
          "Elements is designed for reusable characters, locations and objects. Projects keeps assets, generations and context together. For episodic character work, those are more valuable ideas than another isolated prompt enhancement. They create a place to distinguish an approved identity asset from an attractive experiment.",
          "The caution is that reuse is not the same as consistency. A production still needs neutral references, angle coverage, version labels and rejection rules. If an unstable image becomes a reusable Element, persistent context can repeat the defect efficiently. The approval gate must come before reuse.",
        ],
        bullets: [
          "Label reusable assets by purpose: identity, expression, location, prop or lighting reference.",
          "Promote only approved assets into the reusable set.",
          "Keep deprecated references visible but unavailable to new generations.",
          "Review continuity at thumbnail size and full resolution.",
        ],
      },
      {
        id: "quick-cut",
        title: "Quick Cut Is a Starting Point, Not Picture Lock",
        paragraphs: [
          "Automatic assembly is useful when it turns raw material into something a human can judge sooner. A first cut can expose missing coverage, repeated actions and weak transitions before more expensive finishing begins. It is less useful when the team treats the generated structure as a final editorial decision.",
          "For FourFeetz, a good automated rough cut would preserve shot labels, source filenames and enough handles for revision. It would not add music, speed changes or transitions that obscure the original performance before review. The output should make decisions clearer, not merely look polished.",
        ],
      },
      {
        id: "beta-reality",
        title: "Public Beta and Private Beta Need Different Expectations",
        paragraphs: [
          "Adobe's announcement combines currently available AI Assistant updates with a private-beta studio preview. Creators should separate what they can test today from what is still a product direction. Availability, model access, export behavior, storage and collaboration rules can vary by account and region.",
          "A fair evaluation starts with the live interface. Capture the features available on the account, the models used, the export formats and the project state that survives between sessions. Then compare those facts with the announced workflow before designing a production dependency around it.",
        ],
      },
      {
        id: "fourfeetz-test",
        title: "The FourFeetz Test We Would Run First",
        paragraphs: [
          "Use one short, low-risk sequence with an approved character sheet, six storyboard beats and known delivery formats. Build the board, generate only low-cost previews, create a Quick Cut and check whether the same approved references remain easy to find and reuse after revisions.",
          "Score the test on continuity, retrieval speed, edit transparency, export quality and the number of manual handoffs removed. The platform is valuable if the team reaches a better decision with fewer context losses. Generation volume alone is not a success metric.",
        ],
      },
    ],
    checklist: [
      "Confirm which AI Assistant and studio features are active on the current account.",
      "Test storyboard-to-video with approved, non-conflicting character references.",
      "Review whether Quick Cut preserves filenames, handles and shot intent.",
      "Promote only approved references into Elements or other reusable collections.",
      "Document what persists across sessions and what must be backed up externally.",
    ],
  },
};

export function getToolNewsInsight(slug: ToolNewsInsightSlug) {
  return toolNewsInsights[slug];
}

export function createToolNewsMetadata(slug: ToolNewsInsightSlug): Metadata {
  const article = getToolNewsInsight(slug);
  const canonical = `/insights/${article.slug}`;

  return {
    title: `${article.shortTitle} | FourFeetz Studios`,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: canonical,
      images: [{ url: article.hero, alt: article.shortTitle }],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: ["FourFeetz Studios"],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.hero],
    },
  };
}
