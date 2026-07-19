import type { Metadata } from "next";

export type ProductionInsightSlug =
  | "flux-image-guide"
  | "ai-lighting-guide"
  | "camera-movement-guide"
  | "ai-thumbnail-design-guide"
  | "ai-storyboarding-guide"
  | "character-consistency-guide"
  | "best-ai-music-tools"
  | "repeatable-ai-video-workflow"
  | "image-to-video-prompts"
  | "reframing-16-9-guide";

export type ProductionInsightTable = { title: string; headers: string[]; rows: string[][] };
export type ProductionInsightSection = {
  id: string;
  title: string;
  paragraphs: string[];
  note?: string;
  prompt?: string;
  table?: ProductionInsightTable;
  visual?: "pipeline" | "camera" | "consistency" | "timeline";
  images?: { src: string; alt: string; caption: string; position?: string }[];
};
export type ProductionInsight = {
  slug: ProductionInsightSlug;
  title: string;
  shortTitle: string;
  description: string;
  eyebrow: string;
  hero: string;
  published: string;
  updated: string;
  readTime: string;
  verdict: string;
  category: string;
  tags: string[];
  keywords: string[];
  tools: string[];
  characters: string[];
  popularity: number;
  sections: ProductionInsightSection[];
  faqs: { question: string; answer: string }[];
};

type GuideSeed = {
  slug: ProductionInsightSlug;
  hero: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  tags: string[];
  keywords: string[];
  tools: string[];
  popularity: number;
  topic: string;
  productionGoal: string;
  hardProblem: string;
  anchor: string;
  method: string;
  failure: string;
  promptExample: string;
  comparison: string[][];
};

const stills = [
  { src: "/images/works/haru-first-journey/gallery/window-scene.png", alt: "HARU production still by a window", caption: "HARU cinematic production still used to evaluate whether the finished frame belongs to the FourFeetz world." },
  { src: "/images/characters/haru/portrait.png", alt: "HARU neutral character reference", caption: "Neutral HARU identity reference used for silhouette, face, coat, collar and proportion checks." },
  { src: "/images/works/haru-first-journey/gallery/sunset.png", alt: "HARU publishing frame at sunset", caption: "HARU publishing crop used to test legibility across cards, thumbnails and responsive layouts." },
];

function makeGuide(seed: GuideSeed): ProductionInsight {
  const sharedContext = `At FourFeetz Studios, ${seed.topic} is never treated as an isolated trick. It sits inside the same production chain that shaped HARU: story intention, approved character evidence, shot planning, controlled tests, editorial review, sound, finishing and publishing. Our goal is ${seed.productionGoal}. That goal is more useful than a fashionable setting because it tells the team what a successful result must do inside the finished film.`;
  const reviewContext = `We review the work against ${seed.anchor}. A result can be attractive and still fail. The recurring production risk is ${seed.failure}. We therefore compare small families of variations, change one important variable at a time and write the rejection reason in physical language. This article shares the educational layer of that practice; our master prompts, weighting logic and complete continuity system remain private.`;

  return {
    slug: seed.slug,
    title: seed.title,
    shortTitle: seed.shortTitle,
    description: seed.description,
    eyebrow: "FourFeetz Creator Knowledge Hub",
    hero: seed.hero,
    published: "2026-07-19",
    updated: "2026-07-19",
    readTime: "19 min read",
    verdict: `${seed.shortTitle} is useful when it solves a defined production problem. For HARU, the winning method was ${seed.method}. The tool or technique never replaced direction; it made a specific decision easier to test, compare and approve.`,
    category: seed.category,
    tags: seed.tags,
    keywords: seed.keywords,
    tools: seed.tools,
    characters: ["HARU"],
    popularity: seed.popularity,
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          sharedContext,
          `This guide comes from the practical questions we faced while producing and publishing HARU. The hard problem was ${seed.hardProblem}. A generic tutorial usually begins with interface controls; we begin with the shot, image or sequence that must survive the edit. That changes the order of work. We define the audience response, identify protected character details and decide how the material will be delivered before we begin testing ${seed.topic}.`,
          `The examples below are intentionally beginner and intermediate. They demonstrate clear briefs, controlled comparisons, camera thinking and review habits without reproducing the proprietary FourFeetz production stack. A creator can use the principles immediately: decide what must remain fixed, state one observable change, review in context and promote only approved work to expensive finishing.`,
        ],
        note: `Experience note — the most expensive mistake was not a weak generation. It was polishing an image or clip before confirming that ${seed.productionGoal}.`,
      },
      {
        id: "production-question",
        title: "The Production Question We Were Actually Solving",
        paragraphs: [
          `A production problem should be written as a question with a visible answer. For this guide our question is: can ${seed.topic} help us achieve ${seed.productionGoal} while keeping HARU recognizable and the sequence editorially coherent? That wording prevents a session from becoming an open-ended search for impressive output. It also gives reviewers a shared standard when several versions look equally polished.`,
          `We separate identity facts from shot facts. HARU's pale coat, ear shape, eye spacing, compact puppy proportions and collar are identity evidence. Camera distance, action, environment and light are shot decisions. When those categories are mixed into one vague request, diagnosing ${seed.failure} becomes difficult. When they are separated, the team can return to the correct layer instead of rewriting everything.`,
          reviewContext,
        ],
        visual: "pipeline",
      },
      {
        id: "haru-evidence",
        title: "Real HARU Production Evidence",
        paragraphs: [
          `The images in this section are real FourFeetz HARU assets. The neutral portrait is an identity document; the cinematic still is a belonging test; the publishing crop is a delivery test. None is universally best. Each answers a different question, and ${seed.topic} must respect the evidence relevant to the current stage.`,
          `We inspect large features first because they control recognition at thumbnail size: silhouette, head-to-body ratio, ears and collar. We then inspect face geometry, coat material and color. Finally we inspect behavior. A technically matching image can still feel unlike HARU if the posture becomes aggressive, frantic or overly theatrical. Character consistency is emotional as well as anatomical.`,
          `The practical lesson is to label references by purpose. A beautiful cinematic image may hide paws or alter coat color under sunset light. A neutral front view may be visually plain but invaluable when motion begins. Curating three non-conflicting references has repeatedly produced clearer decisions than uploading a folder of loosely related favorites.`,
        ],
        images: [stills[0], stills[1], stills[2]],
      },
      {
        id: "before-after",
        title: "Before and After: Identity Reference to Finished Frame",
        paragraphs: [
          `Our before-and-after comparison is not a beauty contest. The before frame tells us what is protected; the after frame tells us whether those facts survived context. In HARU, pale fur must retain texture against a cream environment, the collar must remain readable and the face must carry the same quiet temperament after lighting, composition and motion are introduced.`,
          `A strong after frame may deliberately change pose, crop and light. Consistency does not mean freezing the character. It means that change occurs around a stable identity. We compare both frames at full size and as small cards because different defects become visible at different scales. The eye may drift at full size while the silhouette fails only at thumbnail size.`,
          `When the after frame fails, we identify the first failing layer. If the source evidence is ambiguous, we repair the reference. If staging hides an anchor, we redesign the shot. If the tool invents an unnecessary feature, we simplify the requested change. This sequence is faster than adding a long negative prompt to a structurally weak setup.`,
        ],
        images: [stills[1], stills[0]],
        note: `FourFeetz tip — compare the approved identity frame and the candidate result side by side before judging detail, upscale or cinematic finish.`,
      },
      {
        id: "workflow",
        title: "The Repeatable FourFeetz Workflow",
        paragraphs: [
          `Our public workflow for ${seed.topic} has seven gates: intention, evidence, shot or asset card, controlled test, continuity review, edit test and finish. A gate can send the work backward. That is healthy. Returning to an unstable reference is cheaper than repairing ten clips generated from it. Returning to scene planning is cheaper than grading a shot that has no usable cut point.`,
          `The asset card uses plain language. It records one purpose, one primary change, protected details, delivery format and a stop condition. The stop condition matters because generative work has no natural end. We stop when the approved result solves the planned problem, not when every possible variation has been seen.`,
          `For ${seed.shortTitle}, our working method is ${seed.method}. We generate a small family around one controlled variable, place candidates in the real edit or layout, record the first visible failure and only then decide whether another test is justified. This creates reusable production knowledge instead of an unsearchable folder of outputs.`,
        ],
        visual: "timeline",
      },
      {
        id: "camera-language",
        title: "Camera and Composition Language",
        paragraphs: [
          `Even when the subject of a guide is not camera movement, camera distance controls the meaning of the material. A wide frame gives HARU a relationship with the world. A medium frame explains action. A close frame asks the audience to read feeling. We choose the audience distance before decorative lens language.`,
          `Camera height is especially important with a small animal character. A high human viewpoint can make HARU appear observed or vulnerable; eye-level framing creates companionship; an extreme low angle can introduce a heroic tone that conflicts with a quiet beat. The diagram below is a story diagram, not a menu of fashionable moves.`,
          `Composition is also delivery-aware. A frame prepared only for 16:9 may lose the face, action or negative space when used in a vertical short. We protect a central action corridor and capture optional side detail where possible. That discipline makes later reframing an editorial decision instead of an emergency crop.`,
        ],
        visual: "camera",
      },
      {
        id: "tool-comparison",
        title: "Tool and Method Comparison",
        paragraphs: [
          `We do not select a tool by brand loyalty. We select it by production question. ${seed.tools.join(", ")} each interpret references, motion, framing or sound differently. A valid comparison holds the shot purpose and evidence constant, then observes which system creates the lowest continuity burden.`,
          `The best-looking single output is not automatically the best production choice. We compare approval rate, time to diagnose failure, edit flexibility, delivery quality and cost per accepted asset. A slower method with predictable revisions can be cheaper than a fast method that produces many unrelated successes.`,
          `Tool comparison also includes a manual alternative. Editing, cropping, grading, sound design or rebuilding one reference can solve problems that another generation would amplify. The studio asks for the smallest reliable intervention. That is often less exciting than switching models and more useful to the finished film.`,
        ],
        table: { title: `${seed.shortTitle}: production comparison`, headers: ["Option", "Best use", "Watch for"], rows: seed.comparison },
      },
      {
        id: "prompt-strategy",
        title: "Prompt Strategy Without Exposing Master Prompts",
        paragraphs: [
          `Our educational prompt structure has five parts: subject state, environment or source evidence, one observable action or change, camera or composition behavior and light or finish. We use concrete nouns and verbs. Words such as cinematic, premium and emotional are supporting direction, not substitutes for physical description.`,
          `We begin with a positive description of the desired result. A long list of feared defects can dominate the request while leaving the intended action vague. If a recurring problem appears, we add one targeted constraint and compare against the previous test. Controlled revision reveals cause; rewriting the entire prompt hides it.`,
          `The example below is deliberately safe. It demonstrates order and clarity but excludes the private identity weighting, continuity language, rejection rules and shot-family controls used by FourFeetz. Use it as a learning pattern, not as a promise that one paragraph can replace pre-production.`,
        ],
        prompt: seed.promptExample,
      },
      {
        id: "beginner-mistakes",
        title: "Beginner Mistakes and Why They Fail",
        paragraphs: [
          `The first beginner mistake is asking one output to solve an entire sequence. The second is changing reference, camera, action and light after every failure. The third is approving the opening frame without inspecting the middle and end. All three remove the ability to learn from a test.`,
          `A subtler mistake is treating consistency as face matching only. HARU can keep the same eyes while body age, coat texture, collar width or temperament changes. Another is finishing too early. Upscaling, sharpening and heavy grading make an incorrect choice more expensive; they do not make it correct.`,
          `Finally, beginners often confuse novelty with progress. ${seed.failure} can hide inside a spectacular image. We ask whether the result belongs in the sequence, supports ${seed.productionGoal} and leaves a useful next editorial choice. If not, it is a reference for what not to repeat.`,
        ],
        table: { title: "Fast failure diagnosis", headers: ["Symptom", "Likely cause", "First response"], rows: [["Character drifts", "Conflicting evidence or hidden geometry", "Simplify staging and references"], ["Result feels generic", "No concrete production anchor", `Restate ${seed.anchor}`], ["Versions cannot be compared", "Too many variables changed", "Return to one controlled family"], ["Looks good but will not cut", "No adjacency or delivery test", "Place it in the real sequence"]] },
      },
      {
        id: "best-practices",
        title: "Best Practices That Survived Production",
        paragraphs: [
          `Approve evidence before motion or finishing. Write the purpose before the prompt. Keep one primary action or design change per test. Preserve a neutral identity reference beside a cinematic reference. Review candidates in their final aspect ratio and at their expected display size. These practices sound modest because production reliability is usually built from modest decisions repeated consistently.`,
          `Name versions by question rather than mood. “Slow push test 02” is more useful than “beautiful final new.” Save the source, tool or method, date, controlled change, result and rejection reason. A usable archive allows a future scene to benefit from today’s failure.`,
          `Use review gates. Identity approval, motion approval, continuity approval, edit approval and finishing approval should not collapse into one emotional vote. A reviewer can say that motion passes while identity fails. That precision reduces circular feedback and prevents a strong quality from hiding a weak one.`,
        ],
        visual: "consistency",
      },
      {
        id: "production-review",
        title: "How We Review HARU Material",
        paragraphs: [
          `We review normal playback first because the audience experiences time, not contact sheets. We then review slowly to locate deformation, and finally inspect still frames for identity. For images, we reverse the order: silhouette at thumbnail size, identity at normal size and surface detail only after the first two pass.`,
          `Every candidate is placed beside neighboring material. Light direction, screen direction, apparent lens distance, color temperature and emotional energy must connect. A shot may be individually excellent and still be rejected because it repeats a camera idea or raises the energy too early.`,
          `The review note identifies the first meaningful failure. We avoid exhaustive criticism of work that has already failed a gate. This keeps feedback actionable and protects time. If ${seed.failure} is the first visible problem, that becomes the next test question; we do not simultaneously redesign every other layer.`,
        ],
        note: `Experience note — a rejection library organized by cause became more valuable than a folder containing only favorite HARU frames.`,
      },
      {
        id: "editing-and-sound",
        title: "Editing, Sound and Finishing",
        paragraphs: [
          `The edit decides whether ${seed.topic} was successful. We test material with temporary music, room tone and neighboring shots before promoting it. Sound can give generated movement weight, hide a visual transition or reveal that a dramatic camera move competes with the intended quiet rhythm.`,
          `Color finishing unifies exposure, contrast and HARU's coat tone across tools. Pale fur can become yellow under aggressive warmth or lose texture under bright cream backgrounds. We protect separation around the face and use the environment, rather than artificial outlines, to maintain readability.`,
          `Finishing is intentionally late. We upscale only approved material, clean only defects the audience can see and export against a delivery checklist. A technically perfect master is wasted if the crop, caption, thumbnail or metadata fails at publication.`,
        ],
      },
      {
        id: "publishing",
        title: "Publishing Across Website, Film and Shorts",
        paragraphs: [
          `Every approved asset enters a publishing system: descriptive filename, alt text, caption, article relationship, film relationship and delivery variants. The website uses the full frame as evidence and editorial context; a short may use a tighter action crop; social posts need a clear first-frame read. These are separate compositions derived from one production decision.`,
          `We preserve canonical article URLs and connect guides through shared tags, tools and characters. That makes knowledge discoverable beyond launch week. A creator reading about ${seed.topic} should be able to continue into the HARU film, character page, related music and the next production guide without returning to a generic menu.`,
          `Accessibility is part of quality. Captions, readable contrast, stable layouts and useful alternative text help audiences and search systems understand the work. We do not stuff keywords into captions; we describe what the image contributes to the production lesson.`,
        ],
      },
      {
        id: "experience-notes",
        title: "FourFeetz Experience Notes",
        paragraphs: [
          `Our most reliable sessions began with an approved frame, a one-sentence purpose and a modest request. Our least reliable sessions began with several references, several actions and the hope that the system would discover the film. The difference was not prompt length. It was production clarity.`,
          `We learned to protect quietness. Tools naturally offer more motion, more atmosphere and more spectacle. HARU often needs less: a held gaze, one step, a slow shift in light or a small musical pause. Restraint is not a limitation imposed by technology; it is part of the character's direction.`,
          `We also learned when to stop. Once ${seed.productionGoal}, further variations can weaken confidence and consume the time reserved for editing. A professional workflow does not maximize generations. It maximizes the proportion of work that reaches the audience in coherent form.`,
        ],
      },
      {
        id: "final-review",
        title: "Final Review",
        paragraphs: [
          `${seed.shortTitle} belongs in a creator knowledge hub because it connects technique to consequence. The essential method is ${seed.method}. Everything else—model choice, interface setting, prompt wording and finishing option—should serve that method rather than replace it.`,
          `For HARU, success means the audience meets the same observant, warm and quietly brave character from frame to frame. ${seed.topic} is valuable when it protects that feeling while solving ${seed.hardProblem}. It fails when the technique becomes more visible than the story.`,
          `Begin with one approved reference, one production question and one measurable change. Review against ${seed.anchor}, cut the result into context and write down what happened. That small loop is the public foundation of the FourFeetz approach. The advanced system remains private, but the discipline is available to every creator.`,
        ],
      },
    ],
    faqs: [
      { question: `How did FourFeetz use ${seed.shortTitle} for HARU?`, answer: `We used it to solve ${seed.hardProblem}, then reviewed the result against identity, continuity, editability and delivery requirements.` },
      { question: "Does this guide include the FourFeetz master prompts?", answer: "No. It includes beginner and intermediate educational patterns while protecting proprietary prompts and advanced continuity methods." },
      { question: "What should a beginner test first?", answer: `Start with one approved HARU-style reference, one visible change and a locked delivery format. Review against ${seed.anchor} before adding complexity.` },
      { question: "How do I know when the result is finished?", answer: `Stop when the result achieves ${seed.productionGoal}, passes the edit or layout test and introduces no meaningful continuity failure.` },
    ],
  };
}

const seeds: GuideSeed[] = [
  { slug: "flux-image-guide", hero: "/images/insights/flux-image-guide.png", title: "Flux Image Guide: Building Production-Ready HARU Frames", shortTitle: "Flux Image Guide", description: "A FourFeetz field guide to using Flux-style image generation for character references, cinematic frames and controlled HARU production tests.", category: "Images", tags: ["IMAGES", "TOOLS", "PROMPTS", "CHARACTERS", "DESIGN"], keywords: ["Flux", "AI images", "reference images", "HARU"], tools: ["Flux", "Image tools"], popularity: 88, topic: "reference-led AI image generation", productionGoal: "a still can enter the HARU reference library without creating identity conflicts", hardProblem: "moving from an attractive isolated image to a repeatable, production-ready character frame", anchor: "the neutral HARU identity portrait and the intended delivery crop", method: "lock identity evidence first, test composition second and add cinematic finish only after both pass", failure: "surface detail improves while silhouette, age or facial geometry quietly changes", promptExample: "A small cream-colored puppy waits beside a canvas field bag in a quiet wooden studio. Medium framing at puppy eye level. Soft window light from camera left, preserved pale-fur detail, simple background shapes, calm attentive expression. Keep the approved collar and compact puppy proportions stable.", comparison: [["Flux-style generation", "Reference and image families", "Identity averaging"], ["Dedicated character image model", "Fast controlled variations", "Style lock-in"], ["Manual compositing", "Precise layout repair", "More finishing time"]] },
  { slug: "ai-lighting-guide", hero: "/images/insights/ai-lighting-guide.png", title: "AI Lighting Guide: Keeping HARU Cinematic and Consistent", shortTitle: "AI Lighting Guide", description: "Practical lighting direction for AI images and video, based on FourFeetz tests with HARU's pale coat and warm cinematic environments.", category: "Filmmaking", tags: ["AI VIDEO", "IMAGES", "DESIGN", "FILMMAKING", "PROMPTS"], keywords: ["AI lighting", "cinematic lighting", "pale fur", "HARU"], tools: ["Google Flow", "Runway", "Image tools"], popularity: 87, topic: "AI lighting direction", productionGoal: "light supports the scene while HARU's pale coat retains texture, shape and emotional readability", hardProblem: "keeping key direction and coat color consistent across shots created by different systems", anchor: "the scene lighting diagram, key-light direction and approved HARU coat tone", method: "define one physical light source, protect exposure on pale fur and match adjacent shots before grading", failure: "warmth becomes yellow fur, highlights clip or the key light jumps sides between cuts", promptExample: "HARU rests near a cabin window at late afternoon. One soft directional key enters from camera left; the background stays slightly darker than the face. Preserve texture in cream fur, gentle brown bounce from the room, no glowing rim or floating particles. Locked medium shot with one quiet blink.", comparison: [["Soft window key", "Intimate character beats", "Flat white fur"], ["Overcast exterior", "Reference continuity", "Low separation"], ["Golden backlight", "Transitions and reveals", "Yellow color drift"]] },
  { slug: "camera-movement-guide", hero: "/images/insights/camera-movement-guide.png", title: "Camera Movement Guide for AI Films: Directing HARU with Purpose", shortTitle: "Camera Movement Guide", description: "A practical FourFeetz guide to pushes, tracks, pulls, orbits and locked frames in AI video—using real HARU production decisions.", category: "Filmmaking", tags: ["AI VIDEO", "FILMMAKING", "PROMPTS", "WORKFLOW"], keywords: ["camera movement", "AI film", "dolly", "tracking shot", "HARU"], tools: ["Google Flow", "Runway", "Kling"], popularity: 93, topic: "camera movement in AI video", productionGoal: "each move changes audience distance for a story reason and still cuts cleanly into the HARU sequence", hardProblem: "directing camera motion without overloading the model or turning every quiet beat into spectacle", anchor: "the shot purpose, starting frame, ending frame and neighboring screen direction", method: "choose the emotional verb, state start and end framing and combine one camera action with one subject action", failure: "the camera rushes, changes lens behavior mid-shot or competes with HARU's performance", promptExample: "HARU pauses at the edge of a forest path and looks toward camera right. Begin in a stable medium-wide frame at puppy eye level. Make one slow, steady push to a medium frame; no orbit or zoom. HARU turns only the head. Soft morning side light and natural background movement.", comparison: [["Locked frame", "Observation and calm", "Unnecessary subject motion"], ["Slow push", "Recognition and intimacy", "Rushed ending"], ["Lateral track", "Walking and travel", "Scale drift"], ["Gentle pull-back", "Reveal and transition", "Invented environment"]] },
  { slug: "ai-thumbnail-design-guide", hero: "/images/insights/ai-thumbnail-design-guide.png", title: "AI Thumbnail Design Guide: Building Clickable HARU Images Without Noise", shortTitle: "AI Thumbnail Design Guide", description: "The FourFeetz approach to AI-assisted thumbnail design: clear HARU identity, mobile legibility, honest promise and controlled visual hierarchy.", category: "Design", tags: ["DESIGN", "IMAGES", "SOCIAL MEDIA", "CHARACTERS", "TOOLS"], keywords: ["AI thumbnails", "YouTube", "thumbnail design", "HARU"], tools: ["Image tools", "Editing tools"], popularity: 86, topic: "AI-assisted thumbnail design", productionGoal: "a thumbnail reads on a phone, preserves HARU and honestly previews the film or guide", hardProblem: "creating curiosity without clutter, exaggerated expression or a visual promise the content cannot fulfill", anchor: "the approved HARU face, one focal action and the final mobile-size preview", method: "design hierarchy at thumbnail size, reserve one clear subject zone and use text only when the image cannot carry the promise", failure: "extra props, tiny type and exaggerated emotion compete with the character", promptExample: "Create a clean 16:9 thumbnail image with HARU on the right third, looking toward one simple glowing storyboard card on the left. Warm cream background, deep brown subject separation, clear eyes and collar, generous negative space, no embedded text, no extra props, readable at 320 pixels wide.", comparison: [["Character close-up", "Emotion-led episodes", "Repetitive expressions"], ["Character plus object", "Tutorial promise", "Prop clutter"], ["Wide cinematic still", "Film releases", "Weak mobile face read"]] },
  { slug: "ai-storyboarding-guide", hero: "/images/insights/ai-storyboarding-guide.png", title: "AI Storyboarding Guide: Planning HARU Before Generating Video", shortTitle: "AI Storyboarding Guide", description: "How FourFeetz turns story beats into shot cards, reference frames and edit-ready AI storyboards without exposing private master prompts.", category: "Workflow", tags: ["WORKFLOW", "FILMMAKING", "IMAGES", "PROMPTS", "BEHIND THE SCENES"], keywords: ["AI storyboard", "shot list", "previsualization", "HARU"], tools: ["Google Flow", "Image tools", "Editing tools"], popularity: 92, topic: "AI storyboarding and previsualization", productionGoal: "every generated shot has a distinct editorial function and a planned relationship to the shots around it", hardProblem: "turning a written emotional beat into coverage that progresses instead of repeating pleasant medium shots", anchor: "the beat sentence, screen direction, action phase, camera distance and lighting continuity", method: "write beats first, create one shot card per function and test adjacency before motion", failure: "individual frames look beautiful but provide no progression, coverage or clean transition", promptExample: "Storyboard frame 03 of 06. HARU has just heard a distant bell and pauses on the forest path. Medium profile frame, facing screen right, front paw lifted, quiet curiosity rather than fear. Morning key from left. Preserve empty space ahead of HARU for the next shot's direction.", comparison: [["Text shot list", "Fast story logic", "Weak spatial evidence"], ["Generated boards", "Mood and camera tests", "False sense of finish"], ["Rough edit animatic", "Timing and adjacency", "Requires disciplined labels"]] },
  { slug: "character-consistency-guide", hero: "/images/insights/haru-character-sheet.png", title: "Character Consistency Guide: Keeping HARU Recognizable Across AI Shots", shortTitle: "Character Consistency Guide", description: "The FourFeetz consistency system for silhouette, face, fur, accessories, scale and behavior across AI-generated HARU images and video.", category: "Characters", tags: ["CHARACTERS", "AI VIDEO", "IMAGES", "WORKFLOW", "PROMPTS"], keywords: ["character consistency", "AI character", "reference sheet", "HARU"], tools: ["Google Flow", "Runway", "Kling", "Image tools"], popularity: 99, topic: "AI character consistency", productionGoal: "the audience experiences one stable HARU performance across changes in camera, light, environment and tool", hardProblem: "protecting identity through turns, occlusion, perspective, motion and different model interpretations", anchor: "the HARU identity sheet, expression anchors and protected accessory checklist", method: "review silhouette before face, face before material and material before finishing; redesign shots that demand unsupported geometry", failure: "the face survives while age, body, coat, collar or temperament changes", promptExample: "Use the approved HARU reference as identity evidence. HARU sits in a three-quarter view beside a wooden trail sign, compact puppy proportions, pale cream coat, light tan ears, brown collar and calm attentive expression. Change only the camera angle and environment; preserve age, muzzle width, eye spacing and accessory scale.", comparison: [["Single hero reference", "Simple frontal shots", "Weak angle evidence"], ["Curated reference set", "Production sequences", "Conflicting inputs if uncurated"], ["End-frame control", "Defined transitions", "Unstable middle frames"]] },
  { slug: "best-ai-music-tools", hero: "/images/insights/best-ai-music-tools.png", title: "Best AI Music Tools for Creators: The HARU Production Test", shortTitle: "Best AI Music Tools", description: "An honest FourFeetz framework for testing AI music tools by editability, emotional restraint, stems, rights and fit with HARU's cinematic world.", category: "AI Music", tags: ["AI MUSIC", "TOOLS", "WORKFLOW", "FILMMAKING", "BEHIND THE SCENES"], keywords: ["AI music", "film score", "music tools", "HARU soundtrack"], tools: ["AI music tools", "Editing tools"], popularity: 84, topic: "AI-assisted music production", productionGoal: "music supports HARU's quiet emotional rhythm without over-scoring every gesture", hardProblem: "finding editable musical structure, clear rights and consistent motifs rather than one impressive full-length generation", anchor: "the scene beat map, temp edit, motif notes and delivery rights checklist", method: "score the edit in sections, compare stems and transitions and leave intentional space for environment and sound design", failure: "dense arrangements instruct the audience, fight narration or force picture cuts at the wrong moments", promptExample: "Instrumental cue for a quiet morning walk with HARU. 72 BPM, simple felt-piano motif, soft brushed texture and light wooden percussion. Begin sparse, add one gentle lift after 18 seconds, then resolve without a dramatic trailer ending. Leave frequency space for wind, paws and narration. No vocals.", comparison: [["Full-song generator", "Fast concept and mood", "Rigid arrangement"], ["Stem-based tool", "Editorial control", "More mix work"], ["Human-composed motif", "Character identity", "Longer development"]] },
  { slug: "repeatable-ai-video-workflow", hero: "/images/insights/ai-video-workflow.png", title: "A Repeatable AI Workflow: From HARU Brief to Published Film", shortTitle: "A Repeatable AI Workflow", description: "The public FourFeetz workflow for taking a HARU idea through references, controlled generation, review, editing and publishing.", category: "Workflow", tags: ["WORKFLOW", "TOOLS", "BEHIND THE SCENES", "FILMMAKING", "AI VIDEO"], keywords: ["AI workflow", "production pipeline", "creator workflow", "HARU"], tools: ["Google Flow", "Runway", "Kling", "Editing tools"], popularity: 97, topic: "a repeatable AI production workflow", productionGoal: "ideas move through visible approval gates and arrive as coherent, documented, publishable HARU stories", hardProblem: "preventing generation volume, tool switching and file chaos from replacing actual filmmaking progress", anchor: "the brief, shot cards, reference library, rejection log, rough edit and delivery checklist", method: "separate development from production, review one gate at a time and measure accepted assets rather than generation count", failure: "files multiply while decisions, continuity and edit coverage remain unclear", promptExample: "Shot card example — Purpose: HARU decides to continue down the trail. Start: approved medium-wide forest frame. Action: one careful step and a short pause. Camera: locked at puppy eye level. Light: morning key from left. Protected: face, pale coat, collar, screen-right direction. Delivery: 16:9 master with vertical-safe action.", comparison: [["Ad-hoc prompting", "Early play", "No reusable knowledge"], ["Shot-card workflow", "Narrative production", "Requires setup discipline"], ["Node workflow", "Repeatable technical chains", "Can hide weak creative decisions"]] },
  { slug: "image-to-video-prompts", hero: "/images/insights/image-to-video-prompts.png", title: "Writing Better Image-to-Video Prompts: Lessons from HARU", shortTitle: "Image-to-Video Prompts", description: "A FourFeetz guide to writing restrained, physical image-to-video prompts that protect HARU and create editable motion.", category: "Prompts", tags: ["PROMPTS", "AI VIDEO", "FILMMAKING", "CHARACTERS", "TOOLS"], keywords: ["image to video prompts", "AI video prompting", "motion prompts", "HARU"], tools: ["Google Flow", "Runway", "Kling"], popularity: 96, topic: "image-to-video prompt writing", productionGoal: "the source image gains one motivated performance and one legible camera behavior without losing identity", hardProblem: "describing time, body mechanics and camera pacing without asking the model to invent an entire scene", anchor: "the approved first frame, one-sentence shot purpose and desired edit handles", method: "describe the initial state, one action, one camera move, physical pacing and the intended stable ending", failure: "adjective-heavy prompts create extra gestures, rushed cameras and identity drift", promptExample: "Starting from the supplied HARU forest frame, HARU hears a soft sound off screen right, pauses, and turns only the head. Keep the body planted and the collar stable. Camera makes one slow push from medium-wide to medium framing, beginning and ending gently. Natural breathing, soft morning side light, no new objects.", comparison: [["Action-only prompt", "Simple locked shots", "Camera improvisation"], ["Action plus camera", "Directed narrative beats", "Overload if compounded"], ["Start/end frames", "Defined destination", "Uncertain middle motion"]] },
  { slug: "reframing-16-9-guide", hero: "/images/insights/reframing-16-9-guide.png", title: "Reframing 16:9 AI Films for Vertical Video Without Losing HARU", shortTitle: "Reframing for Vertical Video", description: "The FourFeetz method for turning 16:9 HARU films into vertical shorts through safe framing, editorial reframing, captions and platform-aware composition.", category: "Social Media", tags: ["SOCIAL MEDIA", "FILMMAKING", "WORKFLOW", "DESIGN", "AI VIDEO"], keywords: ["vertical video", "AI film", "9:16", "social media", "HARU"], tools: ["Editing tools", "Image tools"], popularity: 89, topic: "reframing landscape AI films for vertical delivery", productionGoal: "a 9:16 short preserves HARU's performance, screen direction and story information instead of becoming a narrow crop", hardProblem: "maintaining character scale and visual meaning when the landscape composition contains important information on both sides", anchor: "the 16:9 master, vertical-safe action corridor, caption area and platform preview", method: "plan vertical safety during storyboarding, use editorial pans only when motivated and rebuild shots whose meaning cannot survive the crop", failure: "HARU's face, gaze target or environmental reveal falls outside the vertical frame", promptExample: "Vertical companion frame for the approved 16:9 HARU trail shot. Preserve HARU's exact identity, pose, morning light and screen-right gaze. Recompose the environment naturally around a centered 9:16 action corridor with headroom for interface overlays and lower space for captions. Do not stretch, crop ears or add scenery.", comparison: [["Center crop", "Centered close action", "Lost gaze target"], ["Editorial pan-and-scan", "Moving subject", "Artificial camera drift"], ["Generated outpaint/reframe", "Important wide context", "New continuity errors"], ["Dedicated vertical shot", "Hero moments", "Extra production cost"]] },
];

export const productionInsights = Object.fromEntries(seeds.map((seed) => [seed.slug, makeGuide(seed)])) as Record<ProductionInsightSlug, ProductionInsight>;

export function getProductionInsight(slug: ProductionInsightSlug) {
  return productionInsights[slug];
}

export function createProductionInsightMetadata(slug: ProductionInsightSlug): Metadata {
  const article = getProductionInsight(slug);
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
      images: [{ url: article.hero, alt: `${article.shortTitle} by FourFeetz Studios` }],
      publishedTime: article.published,
      modifiedTime: article.updated,
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

