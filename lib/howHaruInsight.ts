import type { ProductionInsight } from "@/lib/productionInsights";

export const howHaruInsight: ProductionInsight = {
  slug: "how-haru-was-created",
  title: "How HARU Was Created: Building a Consistent AI Character for Film",
  shortTitle: "How HARU Was Created",
  description: "The official FourFeetz production story behind HARU: visual identity, failed character tests, reference sheets, first-shot images, character drift, camera and lighting review, and the path from still image to AI animation.",
  eyebrow: "FourFeetz Official Production Notes",
  hero: "/images/insights/premium/how-haru-hero.png",
  published: "2026-07-01",
  updated: "2026-07-19",
  readTime: "24 min read",
  verdict: "HARU became consistent when we stopped treating each image as a new illustration and started treating every shot as evidence for the same performer. A small set of protected identity traits, approved angle references, a first-shot image, and review in the edit did more for continuity than a longer prompt ever could.",
  category: "Behind the Scenes",
  tags: ["CHARACTERS", "AI VIDEO", "WORKFLOW", "FILMMAKING", "BEHIND THE SCENES"],
  keywords: ["AI character consistency", "consistent AI character", "AI character development", "character drift in AI video", "AI animation character workflow", "creating a consistent character", "HARU FourFeetz"],
  tools: ["ChatGPT", "Google Flow", "Runway", "Kling AI", "Suno", "CapCut"],
  characters: ["HARU"],
  popularity: 100,
  sections: [
    {
      id: "introduction",
      title: "Introduction: HARU Is a Character, Not a Prompt",
      paragraphs: [
        "HARU began as a story need. FourFeetz wanted a small, emotionally readable character who could carry quiet films about first steps, new places, friendship, home, and curiosity. The character had to work in a close portrait, a wide landscape, a moving shot, a vertical edit, and a music cover without feeling redesigned each time.",
        "That requirement changed the work from image generation into character development. A beautiful puppy image was not enough. HARU needed a stable age, silhouette, face, coat, accessories, temperament, and way of moving. Each approved result also had to provide usable evidence for the next shot rather than becoming an isolated success.",
        "This article shares the practical, public layer of that process. It explains what we protected, what failed, how we reviewed drift, and why the first-shot image became the center of our AI animation workflow. Our proprietary master prompts, model weighting, internal cost totals, and full production system remain private.",
      ],
      note: "The most important change was conceptual: we stopped asking whether an image was cute and started asking whether the audience would believe it was the same HARU.",
    },
    {
      id: "why-we-created-haru",
      title: "Why We Created HARU",
      paragraphs: [
        "FourFeetz is being built as an AI animation studio, so its first lead character needed more than a recognizable thumbnail. HARU had to support a long-term world: original films, Shorts, music, production notes, and future scenes with other FourFeetz characters. The design needed enough specificity to be ownable and enough simplicity to survive different tools and formats.",
        "We chose a two-month-old Korean Jindo puppy as the starting idea because courage, loyalty, curiosity, and innocence fit the stories we wanted to tell. The goal was never documentary realism or a generic mascot. HARU would be gentle and brave, capable of wonder without exaggerated comedy, and expressive without changing into a different puppy from shot to shot.",
        "This story purpose became a production filter. When a test made HARU look older, more glamorous, more toy-like, or more like another breed, it could be attractive and still be wrong. Character development became the discipline of rejecting appealing alternatives that weakened the long-term identity.",
      ],
    },
    {
      id: "first-character-tests",
      title: "The First Character Tests",
      paragraphs: [
        "The earliest tests explored coat length, ear shape, muzzle width, eye size, puppy proportions, scarf construction, and name-tag scale. Small changes produced surprisingly different personalities. A narrower muzzle could make HARU feel older. Oversized eyes pushed the design toward a toy. Darker ears or a heavier coat could shift the apparent breed.",
        "We learned not to approve a character from one front-facing portrait. A design that appeared convincing head-on could collapse in profile, lose the scarf from the back, or change body length while walking. We therefore moved from single portraits to turnarounds, expressions, actions, and close-up detail checks.",
        "Rejected images are not published here as anonymous decoration. Without context they could be mistaken for official references and re-enter the production chain. The public sheet below instead shows the categories we learned to test: angle, expression, action, materials, scale, and accessories.",
      ],
      images: [{ src: "/images/insights/haru-character-sheet-v1.png", alt: "HARU character sheet showing turnaround views, expressions, actions, poses, movement, accessories, palette, scale, and identity rules", caption: "Public reference sheet v1.0. The turnaround, expression, movement, accessory, and scale panels reveal problems that a single hero portrait cannot expose.", fit: "contain", aspect: "landscape" }],
    },
    {
      id: "visual-identity",
      title: "Defining HARU’s Visual Identity",
      paragraphs: [
        "We divided identity into traits that should remain stable and shot details that are allowed to change. Stable traits include HARU’s young age, compact puppy proportions, fluffy white-to-cream coat, light cream-brown ears, warm round brown eyes, softly folded ears, brown scarf, and small matte-gold bone tag engraved with HARU.",
        "Shot details include pose, expression, camera distance, environment, direction of light, and visible fur texture. Keeping those groups separate matters. If every property is flexible, a model may solve a new camera angle by redesigning the muzzle, ears, body, or accessories.",
        "Personality is identity too. HARU’s expressions should feel gentle, curious, friendly, and brave. A dramatic snarl, hyperactive performance, or fashion-like pose can preserve fur and tag while still breaking the character. We review behavior alongside appearance because the audience reads both as one performance.",
      ],
      images: [{ src: "/images/insights/haru-official-face-pack.png", alt: "HARU official face pack with front, three-quarter, side, back, curious, excited, surprised, wink, and gentle smile views", caption: "Official public face pack used to compare facial structure, ear placement, scarf, tag, and expression across ten controlled views.", fit: "contain", aspect: "landscape" }],
    },
    {
      id: "character-drift",
      title: "Character Drift and Failed Results",
      paragraphs: [
        "Character drift rarely arrives as one obvious failure. It accumulates through substitutions: ears become orange, the coat turns pure white, eyes enlarge, the muzzle shortens, the scarf becomes a collar, or the bone tag changes shape. A clip may preserve the face at the start and quietly change age or body proportions by the final frames.",
        "The most deceptive results were visually polished. Strong lighting and cinematic depth could hide that HARU no longer matched the reference. We learned to review identity before beauty: silhouette first, face second, coat and accessories third, then motion and finishing. If identity failed, color grading could not rescue the shot.",
        "We stopped describing failure as simply ‘wrong.’ A useful rejection note identifies physical drift: ear tips too saturated, muzzle too narrow, tag oversized, scarf missing at three-quarter back, or body too tall for a two-month-old puppy. Specific notes make the next controlled test more informative.",
      ],
      table: { title: "Character drift review language", headers: ["Review layer", "Protected evidence", "Common drift signal", "Decision"], rows: [["Silhouette", "Compact puppy scale and folded ears", "Long legs or adult body", "Reject before detail review"], ["Face", "Eye spacing, muzzle width, gentle expression", "Toy-like eyes or narrow muzzle", "Return to approved angle"], ["Materials", "Cream coat, light ear tips, brown scarf", "Pure white fur or orange ears", "Correct reference conflict"], ["Accessories", "Small gold tag and old brown scarf", "New collar, missing tag, wrong scale", "Regenerate or redesign framing"], ["Behavior", "Curious, gentle, brave", "Aggressive or exaggerated acting", "Rewrite the performance beat"]] },
      note: "Before consistency rules, an attractive result was sometimes approved too early. After consistency rules, a shot must pass identity, performance, continuity, and edit reviews in that order.",
    },
    {
      id: "consistent-character-system",
      title: "Building a Consistent Character System",
      paragraphs: [
        "The consistency system is a curated set of evidence, not a folder of every successful-looking image. We keep neutral front and three-quarter anchors, profile and back evidence, expression references, accessory details, scale notes, and approved scene frames. Each reference has a purpose, and conflicting references are removed rather than averaged together.",
        "For a new shot we select the smallest reference set that proves the required geometry. A front portrait is useful for a close facial beat but weak evidence for a walking profile. A turnaround helps with orientation, while a prior scene frame helps with environment, light, and editorial continuity. More references are not better if they disagree.",
        "The system separates identity facts from shot facts. Identity facts describe who HARU is. Shot facts describe what HARU is doing now. This keeps a new location, lens, or lighting instruction from competing with the features that make the character recognizable.",
      ],
      visual: "consistency",
      images: [{ src: "/images/insights/haru-character-sheet.png", alt: "Earlier public HARU reference sheet with front, three-quarter, side, and walking views plus color and accessory notes", caption: "Earlier public reference sheet—not a rejected character. It established identity anchors, while later sheets expanded angle, action, and expression coverage.", fit: "contain", aspect: "standard" }],
    },
    {
      id: "first-shot-image",
      title: "First Shot Image as the Main Reference",
      paragraphs: [
        "For animation, the most important working asset is often the first-shot image. It is where character identity, environment, camera height, composition, light direction, and the opening phase of action meet. Starting motion from an approved frame gives the video model less visual information to invent.",
        "We do not treat the first shot as a poster. It must leave room for movement, preserve screen direction, and support the intended ending. If HARU will step from a car toward a house, the frame needs believable paw placement, clearance around the body, a readable destination, and enough background structure to survive camera motion.",
        "The frame is reviewed at full size and at delivery size. Eyes, ear folds, scarf, and tag must survive close review, while silhouette and direction must remain legible on mobile. Only then does the image become the motion reference.",
      ],
      images: [{ src: "/images/works/haru-first-journey/gallery/first-step.png", alt: "Approved HARU first-shot frame stepping down from a vehicle in warm daylight", caption: "Approved first-shot image from HARU: First Journey. Pose, doorway, light direction, and ground contact provide concrete evidence for the first movement.", aspect: "video" }],
      prompt: "Simplified educational example\n\nUse the supplied approved HARU frame as identity and composition evidence. HARU carefully places the front paw on the gravel, then shifts weight forward. Keep the young puppy proportions, cream coat, folded light-brown ears, brown scarf, and small gold HARU tag stable. Camera remains low and steady. Preserve the warm side light and car doorway. One subject action; no new objects or costume changes.",
    },
    {
      id: "camera-lighting-composition",
      title: "Camera, Lighting, and Composition Tests",
      paragraphs: [
        "The same character can appear different under a high camera, wide lens, hard backlight, or deep shadow. We test camera and lighting as part of identity preservation, not decoration added after approval. Puppy-eye-level framing tends to protect HARU’s proportions; steep overhead views can compress the muzzle and enlarge the head.",
        "Lighting affects color identity. Warm sunset can push ears too orange, while a cool interior can erase the cream gradient in the coat. We compare face, ear tips, scarf, and tag against the approved reference, then decide whether a difference reads as believable illumination or a redesign.",
        "Composition determines what the model must invent. A clean three-quarter frame with visible paws and a stable horizon is easier to animate than an extreme crop with occluded accessories. When a shot demands unsupported geometry, we first ask whether a clearer camera angle can tell the same story.",
      ],
      visual: "camera",
      images: [{ src: "/images/works/haru-first-journey/gallery/arrival.png", alt: "HARU in a wide golden-hour arrival composition beside a car and country house", caption: "Wide world frame: the low camera protects HARU’s scale while the path and house establish the direction of the journey.", aspect: "video" }, { src: "/images/works/haru-first-journey/gallery/window-scene.png", alt: "HARU in a quiet window scene with soft interior light and a close emotional composition", caption: "Closer feeling frame: soft interior light changes the coat response, so face and accessory checks remain part of approval.", aspect: "video" }],
    },
    {
      id: "still-to-motion",
      title: "From Still Image to Moving Character",
      paragraphs: [
        "Image-to-video introduces drift over time. HARU can begin accurately, turn the head, and end with different ears, eyes, fur, or tag. Motion review therefore includes middle and final frames, not only the attractive opening thumbnail.",
        "We had better results when each clip carried one readable performance beat and one restrained camera behavior. A head turn plus a gentle push is testable. Running, barking, looking up, changing direction, and orbiting the camera in one request create too many opportunities to improvise anatomy and staging.",
        "The final seconds matter because an accepted end frame may become the reference for the next shot. We look for a stable body, complete paws, unchanged accessories, believable weight, and editorial breathing room. If the middle motion is appealing but the handoff frame is broken, the clip may still be unusable.",
      ],
      images: [{ src: "/images/works/haru-first-journey/video-thumbnails/haru-steps-toward-house.jpg", alt: "Final HARU video frame walking toward the house after an approved first-shot image", caption: "First shot to video frame: the accepted motion preserves destination, light, scale, and a readable HARU silhouette for the edit.", aspect: "video" }],
    },
    {
      id: "before-after",
      title: "Before and After: What Changed in Our Decisions",
      paragraphs: [
        "The strongest before-and-after comparison is not a beauty upgrade. It is a decision upgrade. Before the system, we searched broadly, approved isolated favorites, and repaired continuity late. After the system, we define protected traits, select angle evidence, approve a first-shot image, test restrained motion, and review every candidate beside neighboring shots.",
        "The final HARU does not come from making every frame identical. Light, pose, expression, and camera distance still change. Consistency means those changes belong to the same young character and the same story world. Variation is useful when identity remains stable.",
      ],
      table: { title: "Production practice before and after consistency rules", headers: ["Stage", "Before", "After", "Why it improved"], rows: [["Character approval", "One appealing portrait", "Turnaround, detail, scale, and expression evidence", "Hidden angle failures appear earlier"], ["Shot setup", "Text description alone", "Approved first-shot image plus a physical brief", "Less geometry is invented"], ["Motion", "Many actions in one request", "One performance beat and one camera behavior", "Drift is easier to diagnose"], ["Review", "Judge the clip alone", "Compare identity and adjacent edit frames", "Continuity becomes visible"], ["Finishing", "Polish promising output", "Finish only after identity and edit approval", "Time is not spent rescuing unusable shots"]] },
    },
    {
      id: "tools-workflow",
      title: "Tools and Production Workflow",
      paragraphs: [
        "No single tool created HARU. Story and continuity notes shape the brief; image tools prepare reference frames; Google Flow, Runway, and Kling AI serve different motion and scene-development needs; Suno supports music exploration; and CapCut supports timing, sound, captions, and delivery versions. The exact combination can change as tools change.",
        "The stable part is the approval pipeline: story intention, identity evidence, shot planning, first-shot image, motion test, continuity review, rough edit, sound, finishing, and publishing. A tool earns a place only when it solves the current production question without damaging approved work.",
        "We keep development and production separate. Early exploration may be broad. Once a direction is approved, production becomes narrower: named shots, controlled variables, clear rejection notes, and no upscaling until the edit proves the asset is needed.",
      ],
      visual: "pipeline",
      table: { title: "Public FourFeetz character workflow", headers: ["Gate", "Evidence", "Review question", "Output"], rows: [["Story", "Beat and audience feeling", "What must HARU communicate?", "One-sentence shot purpose"], ["Identity", "Approved angle and detail references", "Is this unmistakably HARU?", "Reference set"], ["First shot", "Composition and action start", "Can it support motion and the edit?", "Approved source image"], ["Motion", "Short controlled tests", "Does identity survive every phase?", "Candidate clips"], ["Edit", "Neighboring shots and sound", "Does the sequence feel continuous?", "Approved timeline"], ["Delivery", "Horizontal and vertical previews", "Is HARU legible on target?", "Published master"]] },
    },
    {
      id: "mistakes",
      title: "Mistakes We Made",
      paragraphs: [
        "We tried to solve identity with longer descriptions when the real problem was weak or conflicting visual evidence. We kept attractive generations that did not agree with the approved age or accessories. We sometimes evaluated motion only at normal speed and missed drift visible in individual frames.",
        "We also asked too much of one shot. Complex body action, expressive acting, environmental movement, and a dramatic camera move can each be reasonable, but combining them makes diagnosis difficult. When a result fails, the team cannot tell which instruction caused the instability.",
        "Another mistake was polishing before editing. Upscaling, sound design, and color work create attachment to a clip. The rough edit is a more honest test: if a shot does not advance the beat, preserve screen direction, or hand off cleanly, extra finish only makes rejection harder.",
      ],
      note: "We do not publish a universal success rate, fixed generation cost, or exact production time. Those values change with shot difficulty, model, plan, resolution, and acceptance standard. We track them internally per accepted asset rather than present a fabricated benchmark.",
    },
    {
      id: "improved-consistency",
      title: "What Actually Improved Consistency",
      paragraphs: [
        "The biggest improvement came from fewer, better references. A curated turnaround and expression set reduced conflict. The second came from approving the first-shot image before spending motion credits. The third came from writing rejection reasons in observable language and changing one major variable in the next test.",
        "Stable camera language helped too. We state starting distance, intended ending distance, subject action, and what remains still. Simple physical verbs outperform a pile of cinematic adjectives because they describe what can be checked in frames.",
        "Finally, review moved into the timeline. HARU does not need to match an abstract ideal in isolation; HARU must match preceding and following evidence. Adjacent frames reveal changes in size, screen direction, light, scarf, and emotional intensity that a standalone player can hide.",
      ],
    },
    {
      id: "reviewing-material",
      title: "How We Review HARU Material",
      paragraphs: [
        "Our review order protects time. First we check silhouette and age: body length, leg height, head-to-body ratio, ear fold, and tail. Then we inspect face and expression. Next come coat color, ear gradient, scarf, tag, and scene continuity. Only after identity passes do we judge motion quality, camera, lighting, and emotional impact.",
        "Every candidate is viewed at full resolution, at normal speed, frame by frame around difficult motion, and at intended mobile size. We compare first, middle, and final frames. We also mute the clip to separate visual performance from music or sound that may make a weak result feel stronger.",
        "The final decision happens in context. A technically perfect clip can be rejected because it repeats the previous framing or interrupts emotional rhythm. A restrained clip may be selected because it preserves HARU and creates the cleanest transition.",
      ],
      visual: "timeline",
    },
    {
      id: "protecting-identity",
      title: "Protecting the HARU Character Identity",
      paragraphs: [
        "HARU is managed as an original FourFeetz character, not a replaceable style preset. Official assets are separated from early tests, filenames and shot cards identify approval status, and public examples avoid exposing master prompts or internal weighting logic that encode the full production method.",
        "We avoid using an official HARU image to illustrate generic failure. When an earlier public sheet appears, it is labeled accurately. When a future article uses a rejected result, it must be marked ‘Early Test,’ ‘Rejected Result,’ ‘Character Drift Example,’ or ‘Before Consistency Rules’ so it cannot be mistaken for the current standard.",
        "Identity protection is an audience promise. Repeated recognition allows viewers to build a relationship with HARU. The value is not merely technical consistency; it is the trust that the same character has arrived in a new moment.",
      ],
    },
    {
      id: "lessons",
      title: "What We Learned",
      paragraphs: [
        "A consistent AI character is built through selection as much as generation. The ability to reject a polished but off-model result is more valuable than endlessly adding instructions. Clear references, restrained shots, and documented decisions turn experimentation into repeatable production practice.",
        "Story remains the final authority. The scarf, tag, fur, and eyes matter because they keep HARU recognizable, but consistency has no value if the performance carries no feeling. The technical system should disappear behind a simple audience experience: HARU pauses, looks, chooses, and continues the journey.",
        "Tools will continue to change. A durable workflow preserves intent, evidence, and review criteria so the character can move between tools without being reinvented by each one.",
      ],
    },
    {
      id: "future-development",
      title: "Future Character Development",
      paragraphs: [
        "Future HARU development will expand the evidence library carefully rather than redesign the character. New actions, seasonal environments, interactions, and camera distances will be approved as extensions of the existing identity. Each success can become reference evidence only after it agrees with what came before.",
        "The same principles will guide PORI, LUNA, HUGO, OLI, and MILO, but each character will need different protected traits and performance rules. A shared studio workflow should create coherence without making every member of the FourFeetz world behave or look the same.",
        "The long-term goal is a system that supports richer films while keeping audience recognition effortless. More complex scenes are valuable only when HARU still feels like HARU.",
      ],
    },
    {
      id: "final-review",
      title: "Final Review",
      paragraphs: [
        "HARU was not created in one perfect generation. The character emerged through story choices, broad tests, specific rejection notes, public reference sheets, approved first-shot images, restrained motion, and repeated review inside real edits.",
        "For creators building a consistent AI character, the practical starting point is small: define the character’s purpose, protect a short list of observable traits, collect angle evidence, approve the source frame, request one motion beat, and review the result beside the shots around it. Complexity should be earned by stability.",
        "That approach gave FourFeetz a foundation for films, Shorts, music, and future characters without pretending the process is effortless. The result we value is not the largest number of generations. It is one believable character continuing the same journey.",
      ],
    },
  ],
  faqs: [
    { question: "How do you keep an AI character consistent across images?", answer: "Use a curated reference set covering front, three-quarter, profile, back, expression, materials, accessories, and scale. Separate fixed identity traits from changeable shot details, and reject conflicting references instead of adding more of them." },
    { question: "What is character drift in AI video?", answer: "Character drift is a visible change in identity during or between generated shots. It can affect age, body proportions, face, ears, coat, accessories, or behavior even when the clip remains visually polished." },
    { question: "Why does FourFeetz use a first-shot image?", answer: "An approved first-shot image fixes character identity, environment, camera, composition, lighting, and the starting phase of action before motion generation. This reduces what the video model must invent and gives the team a clear review anchor." },
    { question: "Is a longer prompt the best way to improve AI character consistency?", answer: "Not by itself. In our work, curated visual evidence, simpler shot design, one controlled variable, and frame-by-frame review were more useful than adding descriptive language to a conflicted setup." },
    { question: "Which tools were used in the HARU workflow?", answer: "The public workflow includes ChatGPT for planning and continuity, image tools for reference development, Google Flow, Runway, and Kling AI for selected video tasks, Suno for music exploration, and CapCut for editing and delivery. The mix can change by scene." },
    { question: "Does FourFeetz publish its HARU master prompt or exact production cost?", answer: "No. We share beginner-to-intermediate production principles and simplified examples, but proprietary master prompts, weighting logic, the full continuity system, internal costs, and model-specific settings remain private." },
  ],
  related: [
    { label: "Related Film", title: "HARU: First Journey", href: "/works/haru-first-journey" },
    { label: "Related Shorts", title: "HARU Shorts", href: "/shorts" },
    { label: "Related Music", title: "HARU Music Library", href: "/music" },
    { label: "Related Insight", title: "Character Consistency Guide", href: "/insights/character-consistency-guide" },
    { label: "Related Insight", title: "Google Flow Complete Guide", href: "/insights/google-flow-complete-guide" },
    { label: "Related Insight", title: "A Repeatable AI Video Workflow", href: "/insights/repeatable-ai-video-workflow" },
  ],
};
