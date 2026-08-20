import type { Metadata } from "next";


export type ToolNewsInsightSlug =
  | "runway-dev-ai-media-platform"
  | "adobe-firefly-agentic-studio"
  | "elevenlabs-music-v2-references"
  | "luma-ray-3-2-production-control";

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
  "elevenlabs-music-v2-references": {
    slug: "elevenlabs-music-v2-references",
    title: "ElevenLabs Music v2 Adds Reference Tracks: Better Sound Control, New Rights Questions",
    shortTitle: "ElevenLabs Music v2 References",
    description:
      "ElevenLabs now lets creators steer Music v2 with an uploaded reference track. We examine the new control surface, its copyright checks and the production tests a character-driven studio should run first.",
    category: "AI Music",
    hero: "/images/insights/news/elevenlabs-music-v2-references.svg",
    publishedAt: "2026-07-27",
    updatedAt: "2026-07-27",
    readTime: "8 min read",
    tags: ["AI MUSIC", "TOOLS", "WORKFLOW", "RIGHTS"],
    keywords: ["ElevenLabs Music v2", "reference track", "AI music", "sonic identity", "music copyright"],
    tools: ["ElevenMusic", "ElevenCreative", "ElevenAPI", "Music v2"],
    source: {
      publisher: "ElevenLabs",
      title: "Introducing References: sound control for Music v2",
      publishedAt: "2026-07-23",
      url: "https://elevenlabs.io/blog/introducing-references-sound-control-for-music-v2",
    },
    verdict:
      "Reference-guided music is useful when a team owns a clear sonic identity that text prompts cannot describe reliably. The feature can narrow iteration, but it should not turn a finished commercial song into an unexamined prompt. FourFeetz would begin with studio-owned themes, document every input and compare musical similarity before approving any generated cue.",
    confirmed: [
      "Music v2 can use an uploaded track to guide style, instrumentation and overall feel.",
      "A reference can be combined with a text prompt or used as the primary direction on its own.",
      "Reference uploads can range from 10 seconds to 5 minutes.",
      "References is available in ElevenMusic, ElevenCreative and through ElevenAPI.",
      "ElevenLabs says every uploaded reference passes a copyright check and tracks matching recordings owned by others cannot be used.",
    ],
    notYetProven: [
      "A passed upload check does not by itself establish that every generated result is safe for every market, platform or use.",
      "Matching the feel of a reference does not guarantee a stable recurring motif, arrangement or mix across multiple generations.",
      "The announcement does not publish independent measurements for similarity, false positives or false negatives in the copyright check.",
      "Reference guidance may preserve unwanted production traits such as a crowded mix, weak edit points or frequency conflicts with dialogue.",
    ],
    sections: [
      {
        id: "what-changed",
        title: "Audio References Become a First-Class Input",
        paragraphs: [
          "Text prompts are good at broad direction but weak at describing a precise sonic identity. Words such as warm, playful or cinematic can produce many valid but unrelated arrangements. References adds a real piece of audio to the brief, allowing Music v2 to infer style, instrumentation and feel from something the team can already hear.",
          "That changes the production conversation. Instead of repeatedly expanding a prompt, a studio can begin with an approved internal cue and ask for a new track that follows its musical world while serving a different scene. The reference is an anchor, not a guarantee: structure, melody, pacing and mix still require review.",
        ],
      },
      {
        id: "rights-boundary",
        title: "The Copyright Check Is a Gate, Not a Rights Opinion",
        paragraphs: [
          "ElevenLabs states that reference uploads are checked against recordings owned by others and that matching tracks cannot be used. The product is explicitly designed around music the uploader has made. That is a useful boundary because it discourages the most obvious attempt to imitate a released recording.",
          "Production teams still need their own provenance record. Keep the source filename, ownership basis, upload date, project, generated outputs and approval decision together. A platform check can control access to a feature; it cannot replace the studio's responsibility to know where an input came from and what permissions apply.",
        ],
        bullets: [
          "Use original or fully cleared reference material.",
          "Do not treat a successful upload as legal clearance for the output.",
          "Archive the exact reference and the generation brief.",
          "Review melody, arrangement, vocal character and mix—not only genre labels.",
        ],
      },
      {
        id: "character-themes",
        title: "The Strongest Use Case Is a Controlled Theme Family",
        paragraphs: [
          "Character themes need recognizability without repeating one master track in every scene. A RURU cue might keep light woodwinds, playful pizzicato movement and a shy pause while changing tempo and duration for a short, a menu card or a quiet reveal. A studio-owned RURU theme is a much stronger reference than an unrelated commercial track described as similar.",
          "The right test is whether several outputs feel like one character's musical world while remaining distinct compositions. Reviewers should score motif continuity, instrumentation, edit points, dialogue space, ending behavior and unwanted melodic similarity.",
        ],
      },
      {
        id: "api-workflow",
        title: "API Access Makes Provenance More Important",
        paragraphs: [
          "References is also available through ElevenAPI, which makes repeatable generation possible inside a larger media pipeline. Automation should attach the reference asset ID, prompt revision, model version, duration, output checksum and project owner to every result.",
          "The API should stop at a review queue. Automatically generating and publishing multiple variations would amplify both musical drift and rights mistakes. A useful workflow produces traceable candidates; a human still chooses which cue belongs to the story.",
        ],
      },
      {
        id: "first-test",
        title: "A Practical FourFeetz Evaluation",
        paragraphs: [
          "Start with one studio-owned character theme and create three briefs: a 15-second opening, a 30-second playful middle and a quiet 10-second ending. Run the same briefs once with text only and once with the approved reference attached.",
          "Compare time to first usable cue, motif recognition, editability, unwanted similarity, dialogue space and total generation count. The feature earns a production role only if it improves accepted results without weakening provenance or creative control.",
        ],
      },
    ],
    checklist: [
      "Confirm ownership and permitted use of every uploaded reference.",
      "Archive the exact source audio, prompt and output metadata together.",
      "Compare reference-guided and text-only generations with the same brief.",
      "Review melodic and vocal similarity before commercial use.",
      "Keep publishing behind a named human approval gate.",
    ],
  },
  "luma-ray-3-2-production-control": {
    slug: "luma-ray-3-2-production-control",
    title: "Luma Ray3.2 Pushes AI Video Toward the Post Pipeline: What the Specs Really Change",
    shortTitle: "Luma Ray3.2 Production Control",
    description:
      "Ray3.2 adds multi-keyframe direction, longer 1080p clips, HDR and EXR output, performance tracking and API access. Here is what those features could change—and what still requires a real production test.",
    category: "AI Video",
    hero: "/images/insights/news/luma-ray-3-2-production-control.svg",
    publishedAt: "2026-07-27",
    updatedAt: "2026-07-27",
    readTime: "9 min read",
    tags: ["AI VIDEO", "TOOLS", "FILMMAKING", "WORKFLOW"],
    keywords: ["Luma Ray3.2", "multi-keyframe AI video", "EXR export", "HDR generation", "AI video API"],
    tools: ["Luma Ray3.2", "Dream Machine", "Ray3.2 API"],
    source: {
      publisher: "Luma",
      title: "Luma Introduces Ray3.2 Model & API: Complete Creative Control for Video Generation",
      publishedAt: "2026-06-09",
      url: "https://lumalabs.ai/news/introducing-ray-3-2",
    },
    verdict:
      "Ray3.2 is notable because its headline features address shot direction and post-production handoff rather than only visual quality. Up to 16 keyframes, HDR generation and 16-bit EXR export sound production-oriented, but the real test is whether identity, motion and lighting remain coherent between those controls and whether the resulting files survive a normal edit, grade and composite.",
    confirmed: [
      "Luma says Multi-Keyframe supports up to 16 keyframes inside a single clip.",
      "The release supports clips up to 20 seconds at 1080p.",
      "Ray3.2 includes native HDR generation and 16-bit EXR export for post-production workflows.",
      "The update includes enhanced performance tracking and expressive facial performance for up to eight faces.",
      "Ray3.2's control surface is available through an API for integration into custom production tools.",
    ],
    notYetProven: [
      "More keyframes do not automatically produce natural interpolation, stable identity or clean editorial pacing.",
      "HDR and EXR output formats do not guarantee physically consistent light, useful mattes or artifact-free compositing.",
      "Vendor claims about performance preservation need testing across occlusion, fast motion, profile views and stylized characters.",
      "Longer clips can reduce stitching while increasing the amount of footage lost when a late-frame defect appears.",
    ],
    sections: [
      {
        id: "control-surface",
        title: "Sixteen Keyframes Change the Brief",
        paragraphs: [
          "Most image-to-video workflows begin with one approved frame and a text description of what should happen next. Multi-Keyframe changes that input from a starting point into a sequence of visual constraints. A director can define several story beats, camera positions or composition targets inside one clip.",
          "The opportunity is more intentional pacing. The risk is over-constraining the model with conflicting images. Each keyframe must preserve identity, scale, light direction and screen geography. A sequence of individually attractive frames can still be an impossible motion plan.",
        ],
        bullets: [
          "Use the fewest keyframes needed to define the shot.",
          "Check identity and lighting continuity between every adjacent pair.",
          "Reserve extra keyframes for story beats, not decorative variation.",
          "Keep a locked frame-number map for review and revision.",
        ],
      },
      {
        id: "post-pipeline",
        title: "HDR and EXR Matter Only If the Image Holds Up",
        paragraphs: [
          "Native HDR generation and 16-bit EXR export aim at a professional handoff: more tonal range and a file format familiar to compositing and finishing teams. That can be valuable when an AI shot must sit beside live-action plates or survive a controlled grade.",
          "A high-bit-depth container cannot repair unstable texture, invented reflections or inconsistent light. The evaluation should include scopes, channel inspection, highlight recovery, edge behavior and a real composite—not just playback of the default render.",
        ],
      },
      {
        id: "performance",
        title: "Performance Preservation Is the Character Test",
        paragraphs: [
          "Luma highlights enhanced performance tracking and expressive facial performance, including tracking for up to eight faces. For character-led work, the smaller question comes first: can one approved character retain body proportion, accessory placement, gaze and emotional timing through a directed shot?",
          "RURU offers a useful stress test because the striped tail, brown collar and gold name tag create clear continuity markers. A successful clip should preserve those protected traits through turns and partial occlusion without freezing the performance.",
        ],
      },
      {
        id: "duration-reframe",
        title: "Longer Clips and Reframe Shift Where Failures Appear",
        paragraphs: [
          "Twenty-second 1080p clips can cover a complete beat and reduce the number of stitched generations. They also increase exposure to drift. Review should happen at the beginning, every keyframe transition and the final seconds, where geometry and motion errors often accumulate.",
          "Enhanced Reframe can adapt aspect ratio, extend a frame or replace a background while preserving lighting, according to Luma. That is promising for 16:9 and 9:16 delivery, but the vertical version still needs a composition review. Preserved pixels do not guarantee preserved story information.",
        ],
      },
      {
        id: "first-test",
        title: "The Production Test We Would Run",
        paragraphs: [
          "Build a five-to-eight-second RURU shot with three approved keyframes: reveal from behind a tree, a cautious step and a held reaction. Protect the face, tail pattern, collar, name tag, light direction and screen-right movement. Generate a standard output and an HDR/EXR version.",
          "Score interpolation, identity, accessory continuity, motion cadence, late-frame drift, vertical reframe quality and grading behavior. Then compare the accepted-second cost with the current single-frame workflow. The feature is useful when added control produces a more editable shot, not merely a more complicated setup.",
        ],
      },
    ],
    checklist: [
      "Design a physically possible keyframe sequence with explicit protected traits.",
      "Review every transition rather than checking only the supplied keyframes.",
      "Inspect EXR channels, highlights and edges in the actual finishing software.",
      "Test a vertical reframe for story composition as well as pixel preservation.",
      "Measure accepted seconds, setup time and rejected generations against the current workflow.",
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
