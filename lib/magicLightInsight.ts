import type { ProductionInsight } from "@/lib/productionInsights";

export const magicLightInsight: ProductionInsight = {
  slug: "magiclight-seedance-2-real-production-test",
  title: "MagicLight & Seedance 2.0: A Real Production Test with HARU",
  shortTitle: "MagicLight & Seedance 2.0 Test",
  description: "We tested MagicLight, Magic Claw, and Seedance 2.0 Fast while developing HARU Relax TV EP.03. Here is what worked, what failed, and why we returned to Google Flow.",
  eyebrow: "Independent FourFeetz Production Test",
  hero: "/images/insights/haru-relax-tv-ep03-first-shot.png",
  published: "2026-07-22",
  updated: "2026-07-22",
  readTime: "7 min read",
  verdict: "MagicLight is an interesting all-in-one production environment, but Seedance 2.0 Fast gave our quiet HARU scene a polished 3D-animation quality rather than the restrained realism required by HARU Relax TV EP.03. Google Flow remains our main tool for this film; Seedance may fit more expressive or stylized Shorts.",
  category: "AI Video Workflow",
  tags: ["MAGICLIGHT", "SEEDANCE 2.0", "AI VIDEO", "WORKFLOW", "HARU", "CHARACTER CONSISTENCY"],
  keywords: ["MagicLight review", "Seedance 2.0 test", "Seedance 2.0 Fast", "AI animal animation", "HARU", "character consistency", "Magic Claw", "Google Flow"],
  tools: ["MagicLight", "Magic Claw", "Seedance 2.0 Fast", "Google Flow", "CapCut"],
  characters: ["HARU"],
  popularity: 98,
  sections: [
    {
      id: "production-goal",
      title: "The Production Goal",
      paragraphs: [
        "This was not a generic benchmark. We used a real FourFeetz production target from HARU Relax TV EP.03: a very young HARU resting on a cream rug in front of a fireplace on a snowy winter evening.",
        "The scene needed a fixed camera, no dialogue, no narration, no music, and no large body movement. That simplicity made it a useful test of motion realism and character consistency because the model could not hide weak resting behavior behind action or editing.",
      ],
      steps: [
        "HARU quietly watches the fire.",
        "He becomes sleepy and lowers his head.",
        "He closes his eyes and remains asleep with subtle breathing.",
      ],
      images: [
        {
          src: "/images/insights/magiclight-seedance-haru-first-shot.png",
          alt: "HARU lying on a cream rug beside a fireplace on a snowy winter evening",
          caption: "The approved First Shot used as the visual reference for the real production test.",
          aspect: "video",
          position: "50% 50%",
        },
      ],
    },
    {
      id: "magiclight-modes",
      title: "What We Tested Inside MagicLight",
      paragraphs: [
        "MagicLight combines several production experiences. They may look similar on the dashboard, but they are designed for different content. The automatic Story Video workflow was not a good match because our relaxation film needed no voice or narration. Short Drama Video was further from the target because it is built around dialogue, lip sync, and active scene changes.",
        "Seedance 2.0 Video was the most relevant option for our image-to-video test. Magic Claw appeared more useful as a wider planning, automation, and channel-management environment than as the motion model itself.",
      ],
      table: {
        title: "MagicLight feature fit for HARU Relax TV",
        headers: ["Feature", "What we found", "Fit for HARU Relax TV"],
        rows: [
          ["Story Video", "Built around narration-led automatic storytelling", "Low"],
          ["Short Drama Video", "Designed for dialogue, characters, lip sync, and scene changes", "Low"],
          ["Seedance 2.0 Video", "Better suited to energetic, expressive, or stylized motion", "Medium for Shorts; low for Relax TV"],
          ["Magic Claw", "Content planning, series management, channel connection, and automation", "Potentially useful later"],
        ],
      },
      images: [
        {
          src: "/images/insights/magiclight-seedance-video-mode.png",
          alt: "MagicLight Seedance 2.0 Video creation interface",
          caption: "MagicLight's Seedance 2.0 Video mode emphasizes animated story creation.",
          fit: "contain",
          aspect: "standard",
        },
        {
          src: "/images/insights/magiclight-short-drama-mode.png",
          alt: "MagicLight Short Drama Video interface",
          caption: "Short Drama Video is structured around dialogue and character-driven scenes.",
          fit: "contain",
          aspect: "standard",
        },
      ],
    },
    {
      id: "first-shot-vs-motion",
      title: "The First Shot Worked Better Than the Motion",
      paragraphs: [
        "Our source image had the qualities we wanted: a very young HARU, warm firelight, a fixed 16:9 composition, visible snow, and enough negative space to support a long, calm shot. The first generation preserved much of that visual quality. The problem appeared when the image began to move.",
        "The second attempt added more activity to make the scene feel less empty. It created a clearer performance, but the movement moved even further away from a real puppy. Both original tests are embedded below so the motion can be judged independently from the still frames.",
      ],
      videos: [
        {
          src: "/videos/insights/haru-seedance-test-01.mp4",
          poster: "/images/insights/haru-seedance-test-01-frame.jpg",
          title: "Play the first HARU Seedance 2.0 Fast motion test",
          caption: "Test 01 — the first 8-second HARU Seedance 2.0 Fast result.",
        },
        {
          src: "/videos/insights/haru-seedance-test-02.mp4",
          poster: "/images/insights/haru-seedance-test-02-frame.jpg",
          title: "Play the second HARU Seedance 2.0 Fast motion test",
          caption: "Test 02 — the second 9-second attempt with a more visible performance.",
        },
      ],
      images: [
        {
          src: "/images/insights/haru-seedance-motion-comparison.jpg",
          alt: "Side-by-side frames from two HARU Seedance motion tests",
          caption: "Two frames from the Seedance tests show the shift from a realistic still image toward animation-like movement.",
          fit: "contain",
          aspect: "landscape",
        },
      ],
    },
    {
      id: "animated-motion",
      title: "Why the Movement Felt Animated",
      paragraphs: [
        "The results were technically smooth, but realism depends on more than smoothness. A lively animation can be attractive, yet a quiet relaxation scene becomes less believable when every movement looks intentionally performed.",
      ],
      bullets: [
        "HARU's head and eye motion was too clean and evenly timed.",
        "The mouth movement felt expressive in a human-like way.",
        "The front paws and body shape changed slightly during movement.",
        "The camera push-in created a commercial-animation feeling.",
        "The irregular micro-movements of a real sleepy puppy were missing.",
      ],
      note: "This is a fit decision, not a claim that Seedance 2.0 is a bad model. Its visual language simply did not match the documentary restraint required by this particular film.",
    },
    {
      id: "behavioral-consistency",
      title: "Character Consistency Is Not Only About Appearance",
      paragraphs: [
        "It is easy to evaluate consistency by checking fur color, ear tips, collar, or face shape. Our test reinforced a broader lesson: a character can remain visually recognizable while feeling like a different character in motion.",
        "The First Shot solved the appearance problem. The generated motion did not fully preserve HARU's behavior language. For a quiet character film, timing and restraint are as important as the face.",
      ],
      bullets: [
        "Age and young-puppy body proportions.",
        "Weight and timing of head movement.",
        "Natural breathing and resting behavior.",
        "Restraint in facial expression.",
        "Camera language appropriate for a quiet scene.",
      ],
    },
    {
      id: "magic-claw-permissions",
      title: "Magic Claw and YouTube Connection",
      paragraphs: [
        "Magic Claw appears to be more than a generation model. It combines creation, series planning, project management, scheduled tasks, channel connection, and performance analysis.",
        "When connecting YouTube, we were shown permissions that could include viewing the account and analytics as well as managing or deleting content and comments. For this production test, we decided that a channel connection was unnecessary.",
        "Our rule is simple: connect only the permissions required for the task. Testing video generation does not require upload, edit, or delete access to the official FourFeetz channel.",
      ],
      images: [
        {
          src: "/images/insights/magic-claw-interface.png",
          alt: "Magic Claw content creation and channel management dashboard",
          caption: "Magic Claw presents creation and channel-management tools in one workspace.",
          fit: "contain",
          aspect: "standard",
        },
        {
          src: "/images/insights/magic-claw-youtube-permissions.png",
          alt: "YouTube account permissions requested during Magic Claw connection",
          caption: "The YouTube connection screen should be reviewed carefully before granting channel permissions.",
          fit: "contain",
          aspect: "standard",
        },
      ],
    },
    {
      id: "pricing-unlimited",
      title: "Pricing and the Meaning of ‘Unlimited’",
      paragraphs: [
        "MagicLight's plans combine monthly credits, access to multiple models, and unlimited use of selected features or models. ‘Unlimited’ should not be read as unlimited access to every new video model.",
        "The exact model list and credit cost can change. For FourFeetz, an annual plan only makes sense after the model proves it can produce usable HARU scenes consistently. High generation volume is not valuable when most outputs cannot enter the final film.",
      ],
      steps: [
        "Check whether the exact model name is listed as unlimited.",
        "Check whether the generation button displays a credit charge.",
        "Review queue, speed, resolution, and commercial-use limitations.",
      ],
      images: [
        {
          src: "/images/insights/magiclight-pricing-plans.png",
          alt: "MagicLight pricing plans displayed during the July 2026 test",
          caption: "MagicLight plan comparison shown during our July 2026 test. Plans, credits, and model availability may change.",
          fit: "contain",
          aspect: "standard",
        },
      ],
    },
    {
      id: "production-decision",
      title: "Final Production Decision",
      paragraphs: [
        "For HARU Relax TV EP.03, we returned to the workflow that has been more reliable for restrained, realistic motion. Seedance 2.0 may still be worth testing for a playful HARU adventure, a stylized character Short, or a scene where expressive motion matters more than documentary realism.",
      ],
      steps: [
        "Build and approve a cinematic First Shot.",
        "Generate one small action at a time in Google Flow.",
        "Keep the camera fixed and avoid large pose changes.",
        "Extend the sleeping section after the action is complete.",
        "Assemble the final duration and natural fireplace ambience in CapCut.",
      ],
      visual: "pipeline",
    },
    {
      id: "practical-lessons",
      title: "Practical Lessons from the Test",
      paragraphs: [
        "A useful model test should answer a production question rather than reward the most impressive demo. These are the checks we will carry into future FourFeetz evaluations.",
      ],
      bullets: [
        "Test a model with a real production scene, not only a demo prompt.",
        "Separate image quality from motion quality.",
        "Use a fixed, approved First Shot to expose motion drift clearly.",
        "Judge character consistency through behavior as well as appearance.",
        "Do not buy an annual plan until the usable-output rate is known.",
        "Review social-channel permissions before connecting an official account.",
      ],
      note: "This article documents an independent FourFeetz production test and is not a sponsored endorsement. Interfaces, pricing, credits, and model availability may change after the publication date.",
    },
  ],
  faqs: [
    {
      question: "Is Seedance 2.0 suitable for realistic animal videos?",
      answer: "It can create visually polished results, but our quiet HARU scene produced motion that felt more animated than documentary-realistic. Suitability depends on the intended style and amount of movement.",
    },
    {
      question: "Did MagicLight keep HARU consistent?",
      answer: "The reference image and key visual features remained recognizable. The larger issue was behavioral consistency: timing, facial expression, body deformation, and camera movement changed how HARU felt on screen.",
    },
    {
      question: "Will FourFeetz use Seedance 2.0 again?",
      answer: "Yes, for the right project. It may be more useful for expressive Shorts or stylized adventures than for long, still relaxation scenes.",
    },
    {
      question: "Which tool will be used for HARU Relax TV EP.03?",
      answer: "Google Flow remains the primary generation tool, followed by CapCut for assembly, duration, and natural ambience.",
    },
  ],
  related: [
    { label: "Related Film", title: "HARU Relaxing at Home", href: "/works/haru-relaxing-home" },
    { label: "Related Short", title: "Morning with HARU", href: "/shorts/morning-with-haru" },
    { label: "Related Short", title: "Watching the Sunset", href: "/shorts/watching-the-sunset" },
    { label: "Tools", title: "FourFeetz Production Tools", href: "/tools" },
    { label: "Related Insight", title: "Google Flow Complete Guide", href: "/insights/google-flow-complete-guide" },
    { label: "Related Insight", title: "A Repeatable AI Video Workflow", href: "/insights/repeatable-ai-video-workflow" },
  ],
};
