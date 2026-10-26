import type { ProductionInsight } from "@/lib/productionInsights";

export const protofaceWorkflowInsightSlugs = [
  "protoface-multiple-ai-video-models-workflow",
  "protoface-capcut-youtube-production-workflow",
] as const;

export type ProtofaceWorkflowInsightSlug = (typeof protofaceWorkflowInsightSlugs)[number];
type Language = "en" | "ko";
type LocalizedInsight = ProductionInsight & { heroAlt: string; heroCaption?: string };

const published = "2026-10-26";
const affiliateHref = "https://protoface.com/studio?fpr=fourfeetz";
const promoVideo = "/videos/insights/protoface/protoface-production-workflow.mp4";
const capcutWorkflowVideo = "/videos/insights/protoface/dog-and-cat-0911.mp4";
const promoPoster = "/images/insights/protoface/protoface-promo-poster.jpg";

export const protofaceWorkflowInsights: Record<ProtofaceWorkflowInsightSlug, Record<Language, LocalizedInsight>> = {
  "protoface-multiple-ai-video-models-workflow": {
    en: {
      slug: "protoface-multiple-ai-video-models-workflow",
      eyebrow: "FourFeetz Production Experience",
      title: "Using Multiple AI Video Models in One Place | Our Protoface Production Experience",
      shortTitle: "Multiple AI Video Models in One Protoface Workflow",
      description: "What changed when FourFeetz used Protoface to review multiple AI video model options, test shot ideas, select useful footage and reserve deliberate choices for the final edit.",
      hero: "/images/insights/protoface/multiple-ai-video-models-workflow.png",
      heroAlt: "Seven visual AI video options converging into one editing workflow",
      heroCaption: "Our production lesson was not to rank every model, but to make the model choice part of the shot workflow.",
      published,
      updated: published,
      readTime: "8 min read",
      verdict: "Reducing AI video production cost did not mean choosing only the lowest-cost option. It meant testing economically, protecting useful results and choosing a suitable model only when the shot justified it.",
      category: "Experience / AI Video",
      tags: ["Protoface", "AI Video", "Production Workflow", "Model Selection"],
      keywords: ["Protoface", "AI video generator", "AI video workflow", "Seedance", "MiniMax H3", "LTX 2.5", "Veo 3.1", "Kling", "Runway", "Wan"],
      tools: ["Protoface Studio", "MiniMax H3", "CapCut"],
      characters: [],
      recordBasis: "Based on the Protoface promotional video, interface footage and short generated samples produced and edited by FourFeetz Studios.",
      sections: [
        {
          id: "new-question",
          title: "The New Question in AI Video Production",
          paragraphs: [
            "As AI video tools multiplied, our question changed. Instead of asking which model was best in the abstract, we needed to ask which option was appropriate for a particular shot. A visual test, a transition and a hero shot do not carry the same creative or production risk.",
            "We did not need to commit the same level of resources to every generation. Separating exploratory shots from important final shots gave us a clearer way to review an idea before investing more effort in it.",
          ],
        },
        {
          id: "models-in-one-place",
          title: "Seeing Multiple Model Options in Protoface",
          paragraphs: [
            "While producing the Protoface promotional content, we could see and select among multiple AI video model options in one interface, including Seedance 2.5, MiniMax H3, LTX 2.5, Veo 3.1, Kling 3.0, Runway and the Wan family.",
            "This was not a controlled benchmark of those models. We did not generate every promotional sample with every named model, and this article does not rank their quality. The practical value was the structure: model access and shot selection could sit inside one production decision instead of being treated as separate tool loyalties.",
          ],
          bullets: ["Seedance 2.5", "MiniMax H3", "LTX 2.5", "Veo 3.1", "Kling 3.0", "Runway", "Wan family"],
          images: [{ src: "/images/insights/protoface/protoface-ai-model-guide.png", alt: "Protoface Studio guide showing seven AI video model options in one platform", caption: "A frame from the actual promotional edit showing the AI video model options presented together in Protoface Studio.", presentation: "portrait", fit: "contain" }],
        },
        {
          id: "production-method",
          title: "The Practical Pattern We Used",
          paragraphs: [
            "Our working sequence became simple: begin with the idea, use a faster or lower-cost generation option for an exploratory test, review the shot, keep a result that already works, choose the model needed for an important scene, and finish the sequence in the edit.",
            "Short samples made with options including MiniMax H3 helped us judge whether the scene direction was worth continuing. The point was not that one model should replace every other model. It was that a shot should earn the next production decision.",
          ],
          steps: ["Define the shot idea and its purpose.", "Use an appropriate economical or fast option for the first test.", "Review the subject, framing and usable duration.", "Keep a result that already supports the edit.", "Choose the model needed for the important shot.", "Finish timing, text and sound in the edit."],
          videos: [{ src: promoVideo, poster: promoPoster, title: "FourFeetz Protoface promotional production", caption: "The supplied promotional edit combines generated footage, Protoface interface views, text, narration and a final affiliate disclosure.", presentation: "portrait" }],
        },
        {
          id: "workflow-over-model",
          title: "The Workflow Mattered More Than a Model Name",
          paragraphs: [
            "A useful decision considered the purpose of the shot, required duration, output resolution, subject consistency, generation cost, likely number of retries and whether the result could be shaped in the final edit. A technically impressive clip could still be the wrong choice if it could not connect to the surrounding sequence.",
            "The most expensive option was not automatically the right option, and the lowest-cost option was not automatically the efficient one. Repeated failures can consume more time and credits than a deliberate model choice made after a clear test.",
          ],
          bullets: ["Purpose of the shot", "Required duration and resolution", "Character or subject consistency", "Generation cost and retry count", "Editability in the final sequence"],
          note: "You don’t need the most expensive AI model for every scene. The key is choosing the right model for the right shot.",
        },
        {
          id: "conclusion",
          title: "Our Takeaway",
          paragraphs: [
            "For FourFeetz, reducing AI video production cost is not a race toward the cheapest model. It is the discipline of matching the production choice to the scene, testing before committing and refusing to regenerate footage that is already good enough for its editorial role.",
            "Our earlier Protoface production experience and Seedance test explain narrower projects in more detail. Together, they support the same conclusion: production evidence and editorial purpose are more useful than a universal model ranking.",
          ],
          links: [
            { text: "earlier Protoface production experience", href: "/insights/protoface-real-production-experience" },
            { text: "Seedance test", href: "/insights/protoface-seedance-2-real-production-test" },
          ],
        },
      ],
      faqs: [
        { question: "Did FourFeetz compare all seven models in a controlled test?", answer: "No. We observed that Protoface provided access to multiple model options and used selected options during production. This article does not claim a complete head-to-head benchmark." },
        { question: "Does one model work best for every AI video shot?", answer: "That was not our experience. The shot purpose, duration, consistency needs, retry cost and editability all affect the practical choice." },
      ],
      related: [
        { label: "Production Experience", title: "Our Protoface Real Production Experience", href: "/insights/protoface-real-production-experience" },
        { label: "Seedance Experience", title: "Protoface and Seedance 2 Real Production Test", href: "/insights/protoface-seedance-2-real-production-test" },
        { label: "Workflow Guide", title: "A Repeatable AI Video Workflow", href: "/insights/repeatable-ai-video-workflow" },
        { label: "FourFeetz Videos", title: "Watch FourFeetz Videos", href: "/videos" },
      ],
      serviceCta: { href: affiliateHref, title: "Try Protoface Studio", description: "Explore multiple AI video models in one platform and choose an option that fits the work. Use the FourFeetz coupon when joining Studio Unlimited to receive the currently advertised $10 in additional free credits.", label: "Start with Protoface Studio", protofaceAffiliate: true },
    },
    ko: {
      slug: "protoface-multiple-ai-video-models-workflow",
      eyebrow: "FourFeetz 실제 제작 경험",
      title: "여러 AI 영상 모델을 한곳에서 써보니 달라진 제작 방식 | Protoface 실전 사용기",
      shortTitle: "여러 AI 영상 모델을 활용한 Protoface 제작 방식",
      description: "FourFeetz가 Protoface 홍보영상을 직접 제작하며 여러 AI 영상 모델 선택 구조를 테스트, 장면 선별과 최종 편집에 연결한 경험을 정리합니다.",
      hero: "/images/insights/protoface/multiple-ai-video-models-workflow.png",
      heroAlt: "여러 AI 영상 선택지가 하나의 편집 워크플로우로 연결되는 모습",
      heroCaption: "모든 모델을 순위로 비교하기보다 모델 선택 자체를 장면 제작 과정에 넣은 경험을 정리했습니다.",
      published,
      updated: published,
      readTime: "약 8분",
      verdict: "AI 영상 제작비를 줄이는 핵심은 저렴한 선택지만 고집하는 것이 아니라, 테스트 비용을 조절하고 유용한 결과를 보존하며 중요한 장면에 필요한 모델을 선택하는 것이었습니다.",
      category: "Experience / AI 영상",
      tags: ["Protoface", "AI 영상 제작", "제작 워크플로우", "모델 선택"],
      keywords: ["Protoface", "AI 영상 제작", "AI 영상 모델", "Seedance", "MiniMax H3", "LTX 2.5", "Veo 3.1", "Kling", "Runway", "Wan"],
      tools: ["Protoface Studio", "MiniMax H3", "CapCut"],
      characters: [],
      recordBasis: "FourFeetz Studios가 직접 제작·편집한 Protoface 홍보영상, 서비스 화면과 짧은 생성 샘플을 바탕으로 작성했습니다.",
      sections: [
        { id: "new-question", title: "AI 영상 제작에서 생긴 새로운 고민", paragraphs: ["AI 영상 도구가 늘어나면서 질문이 달라졌습니다. 추상적으로 어떤 모델이 가장 좋은지 묻기보다, 테스트 장면과 전환 장면, 중요한 최종 장면 중 지금 만들 장면에 어떤 선택이 적합한지를 먼저 판단해야 했습니다.", "모든 생성에 같은 수준의 비용과 시간을 사용할 필요는 없었습니다. 아이디어를 확인하는 장면과 완성본의 핵심 장면을 구분하자 더 많은 자원을 쓰기 전에 제작 방향을 검토할 수 있었습니다."] },
        { id: "models-in-one-place", title: "Protoface에서 여러 모델을 한곳에서 확인", paragraphs: ["Protoface 홍보 콘텐츠를 제작하면서 한 인터페이스에서 Seedance 2.5, MiniMax H3, LTX 2.5, Veo 3.1, Kling 3.0, Runway와 Wan 계열 등 여러 AI 영상 모델 선택지를 확인할 수 있었습니다.", "이번 작업은 이 모델들을 동일 조건에서 비교한 벤치마크가 아닙니다. 모든 홍보영상 샘플을 각 모델로 만들었다고 주장하지도 않습니다. 실제로 유용했던 점은 모델 접근과 장면 선택을 하나의 제작 판단 안에서 이어갈 수 있는 구조였습니다."], bullets: ["Seedance 2.5", "MiniMax H3", "LTX 2.5", "Veo 3.1", "Kling 3.0", "Runway", "Wan 계열"], images: [{ src: "/images/insights/protoface/protoface-ai-model-guide.png", alt: "한 플랫폼에 제공되는 7개 AI 영상 모델을 보여주는 Protoface Studio 가이드", caption: "Protoface Studio에서 여러 AI 영상 모델 선택지를 한곳에 보여준 실제 홍보영상의 한 장면입니다.", presentation: "portrait", fit: "contain" }] },
        { id: "production-method", title: "실제 제작에서 사용한 순서", paragraphs: ["아이디어를 정한 뒤 빠르거나 비용 부담이 낮은 생성 옵션으로 먼저 테스트하고, 장면을 확인하고, 이미 만족스러운 결과는 유지했습니다. 그다음 중요한 장면에 필요한 모델을 선택하고 최종 편집에서 전체 흐름을 완성했습니다.", "MiniMax H3 등을 활용한 짧은 샘플은 장면 방향을 계속 발전시킬 가치가 있는지 판단하는 데 사용했습니다. 하나의 모델을 모든 장면에 고집하기보다 장면이 다음 제작 결정을 통과하게 만드는 방식이 실용적이었습니다."], steps: ["장면 아이디어와 목적을 정합니다.", "빠르거나 비용 부담이 낮은 적절한 옵션으로 먼저 테스트합니다.", "피사체, 구도와 사용할 수 있는 길이를 확인합니다.", "편집에 사용할 수 있는 결과는 유지합니다.", "중요한 장면에 필요한 모델을 선택합니다.", "편집에서 길이, 자막과 사운드를 완성합니다."], videos: [{ src: promoVideo, poster: promoPoster, title: "FourFeetz Protoface 홍보영상 제작본", caption: "제공된 실제 홍보 편집본에는 AI 생성 영상, Protoface 화면, 자막, 내레이션과 마지막 제휴 고지가 함께 들어 있습니다.", presentation: "portrait" }] },
        { id: "workflow-over-model", title: "모델보다 중요한 것은 워크플로우", paragraphs: ["장면 목적, 필요한 길이와 해상도, 캐릭터나 피사체 일관성, 생성 비용, 예상 재생성 횟수와 최종 편집 가능성을 함께 봐야 했습니다. 기술적으로 인상적인 클립도 앞뒤 장면과 연결되지 않으면 실제 편집에서는 적합하지 않을 수 있습니다.", "비용이 높은 옵션이 자동으로 정답은 아니었고, 저렴한 옵션이 항상 효율적인 것도 아니었습니다. 반복 실패는 명확한 테스트 뒤 필요한 모델을 선택하는 것보다 더 많은 시간과 크레딧을 사용할 수 있습니다."], bullets: ["장면의 목적", "필요한 영상 길이와 해상도", "캐릭터·피사체 일관성", "생성 비용과 재생성 횟수", "최종 편집 가능성"], note: "모든 장면에 가장 비싼 AI 모델을 사용할 필요는 없습니다. 중요한 것은 장면에 맞는 모델을 선택하는 것입니다." },
        { id: "conclusion", title: "FourFeetz의 결론", paragraphs: ["AI 영상 제작비를 줄인다는 것은 가장 저렴한 모델만 찾는 일이 아니었습니다. 장면의 역할에 제작 선택을 맞추고, 큰 비용을 쓰기 전에 테스트하며, 편집 목적을 이미 충족한 영상을 불필요하게 다시 만들지 않는 과정에 가까웠습니다.", "기존 Protoface 실제 제작 경험 글과 Seedance 실제 제작 테스트에는 더 좁은 범위의 사례가 정리되어 있습니다. 두 기록도 같은 결론을 보여줍니다. 보편적인 모델 순위보다 실제 제작 근거와 편집 목적이 더 중요했습니다."], links: [{ text: "기존 Protoface 실제 제작 경험 글", href: "/ko/insights/protoface-real-production-experience" }, { text: "Seedance 실제 제작 테스트", href: "/ko/insights/protoface-seedance-2-real-production-test" }] },
      ],
      faqs: [{ question: "일곱 개 모델을 동일 조건에서 모두 비교했나요?", answer: "아닙니다. Protoface에서 여러 모델 선택지를 확인하고 일부 옵션을 실제 제작에 활용했지만, 전체 모델의 성능을 순위로 평가하는 벤치마크는 진행하지 않았습니다." }, { question: "모든 AI 영상 장면에 가장 좋은 모델이 하나 있나요?", answer: "이번 경험에서는 그렇지 않았습니다. 장면 목적, 길이, 일관성, 재시도 비용과 편집 가능성에 따라 실용적인 선택이 달라졌습니다." }],
      related: [{ label: "실제 제작 경험", title: "Protoface 실제 제작 경험", href: "/ko/insights/protoface-real-production-experience" }, { label: "Seedance 경험", title: "Protoface와 Seedance 2 실제 제작 테스트", href: "/ko/insights/protoface-seedance-2-real-production-test" }, { label: "워크플로우 가이드", title: "반복 가능한 AI 영상 제작 워크플로우", href: "/ko/insights/repeatable-ai-video-workflow" }, { label: "FourFeetz 영상", title: "FourFeetz 영상 보기", href: "/ko/videos" }],
      serviceCta: { href: affiliateHref, title: "Try Protoface Studio", description: "다양한 AI 영상 모델을 하나의 플랫폼에서 직접 확인하고 작업에 맞는 모델을 선택해 보세요. Studio Unlimited 가입 시 FourFeetz 쿠폰을 사용하면 현재 안내된 $10 상당의 추가 무료 크레딧 혜택을 받을 수 있습니다.", label: "Protoface Studio 시작하기", protofaceAffiliate: true },
    },
  },
  "protoface-capcut-youtube-production-workflow": {
    en: {
      slug: "protoface-capcut-youtube-production-workflow",
      eyebrow: "FourFeetz Production Experience",
      title: "From AI Generation to YouTube | Our Protoface, CapCut and Publishing Workflow",
      shortTitle: "From Protoface Generation to YouTube Publishing",
      description: "The real workflow FourFeetz used to plan Protoface promotional content, select generated clips, edit in CapCut and prepare the finished vertical video for YouTube.",
      hero: "/images/insights/protoface/generation-to-youtube-workflow.png",
      heroAlt: "Four-step AI video workflow from generation and clip selection to editing and YouTube publishing",
      heroCaption: "Generation was one stage. Selection, editing, disclosure and publishing decisions completed the content.",
      published,
      updated: published,
      readTime: "9 min read",
      verdict: "Even when AI generates the footage, the final quality still depends on what you choose, how you edit it, and how you tell the story.",
      category: "Experience / Tutorial",
      tags: ["Protoface", "CapCut", "YouTube", "AI Shorts", "Publishing Workflow"],
      keywords: ["Protoface tutorial", "AI video editing", "YouTube AI video", "AI Shorts production", "CapCut AI video editing"],
      tools: ["Protoface Studio", "MiniMax H3", "CapCut", "YouTube"],
      characters: [],
      recordBasis: "Based on the supplied FourFeetz Protoface promotional edit and the studio's actual generation, screen-capture, CapCut and publishing preparation process.",
      sections: [
        { id: "not-finished-at-generation", title: "A Generated Clip Was Not Finished Content", paragraphs: ["It is easy to assume that one good AI video completes the work. In this production, generation was only one layer. The content also needed a clear plan, selected clips, Protoface interface footage, editing, narration, captions, a call to action, a cover and publishing preparation.", "The complete sequence was: concept → AI generation → clip selection → screen capture → edit → narration and captions → CTA → thumbnail → YouTube upload. Each stage solved a different audience question."], steps: ["Plan the message and audience.", "Generate short AI video options.", "Select only the usable moments.", "Capture the relevant service interface.", "Edit picture, narration and captions.", "Build a separate CTA and cover.", "Review the YouTube upload settings." ] },
        { id: "protoface-material", title: "Preparing the Footage in Protoface", paragraphs: ["We reviewed MiniMax H3 and other model options in Protoface while preparing visual material for the promotion. The purpose was not to make a model leaderboard, but to collect clips that could demonstrate different creative possibilities within the service.", "Showing generated footage alone did not explain the product clearly enough. Combining the actual Protoface Studio interface with selected outcomes gave the viewer both context and evidence: where the choice happened and what kind of visual material entered the edit."], links: [{ text: "model options in Protoface", href: "/insights/protoface-multiple-ai-video-models-workflow" }] },
        { id: "short-ui-cuts", title: "Short UI Cuts Worked Better Than a Long Scroll", paragraphs: ["A long recording of the website made the important controls difficult to notice. We divided the interface into short cuts and enlarged the part that mattered for each beat.", "The sequence moved from the Protoface home view to model selection, generation settings, output, key features and the signup benefit. This made the service understandable without asking viewers to study a continuous screen recording."], steps: ["Protoface main screen", "Model selection", "Generation settings", "Generated result", "Key service features", "Signup benefit and disclosure"] },
        { id: "capcut-edit", title: "Building the Final Video in CapCut", paragraphs: ["CapCut became the assembly stage for generated clips, Protoface screen recordings, narration, captions and the final CTA. The dog-and-cat footage shown below was created with Seedance 2.0 and then brought into this editing workflow as an actual production source. We trimmed each source to the moment that supported the explanation instead of preserving a clip simply because it had taken time or credits to generate.", "The strongest generated moments often needed only two to five seconds. Alternating the interface with the output maintained context, while enlarging one control at a time prevented the mobile frame from becoming a tiny software demo. This Seedance 2.0 clip is presented as a record of our production experience, not as a controlled comparison with other models."], bullets: ["Use only the strongest two-to-five-second portion when that is all the edit needs.", "Alternate the service interface and generated results.", "Enlarge important UI instead of showing the whole screen at once.", "Prefer short captions to long on-screen explanations.", "Give the final CTA its own clear screen.", "Plan the 9:16 composition from the beginning for Shorts."], images: [{ src: "/images/insights/protoface/seedance-2-backyard-reference.png", alt: "Sunny backyard environment reference used for the Seedance 2.0 dog-and-cat scene", caption: "The backyard environment reference used to establish the location, light and warm visual tone before generating the Seedance 2.0 clip.", presentation: "landscape", fit: "contain" }, { src: "/images/insights/protoface/seedance-2-dog-cat-reference-board.png", alt: "Seedance 2.0 reference board showing the dog, cat, first frame and backyard environment", caption: "The actual reference board combined the 9:16 first frame with separate HARU, LUNA and backyard references to guide the production shot.", presentation: "portrait", fit: "contain" }], videos: [{ src: capcutWorkflowVideo, poster: promoPoster, title: "Dog-and-cat video created with Seedance 2.0", caption: "This dog-and-cat video was created with Seedance 2.0 and used as actual source footage in the FourFeetz production and CapCut editing workflow.", presentation: "portrait" }] },
        { id: "experience-led-promo", title: "The Promotion Needed Real Experience", paragraphs: ["A simple claim that a service is good would not match the FourFeetz editorial approach. We preferred a visible structure: use the service, show the resulting material and explain how it entered the workflow.", "That approach also made the limits clearer. The promotional video could show our production path without pretending that every model had been benchmarked or that one edited result guaranteed the same outcome for every user."], links: [{ text: "FourFeetz editorial approach", href: "/editorial-policy" }] },
        { id: "youtube-publishing", title: "Checks Before Publishing to YouTube", paragraphs: ["At upload time, we reviewed the available YouTube settings related to AI-generated or modified content, checked that the affiliate relationship was disclosed, placed the affiliate link and coupon terms in the description, assigned the video to the relevant AI Tools playlist and used a 9:16 cover suitable for Shorts.", "These are the items we checked for this publication, not a legal interpretation or a permanent statement of platform policy. Publishing controls and disclosure requirements can change, so creators should review the current YouTube and provider screens when they upload."], bullets: ["Review the current AI-generated or modified content settings.", "Disclose an affiliate relationship clearly.", "Put the affiliate link and conditional coupon details in the description.", "Classify the content in the relevant AI Tools playlist.", "Use a cover designed for the 9:16 Shorts frame."] },
        { id: "final-workflow", title: "The Final FourFeetz Workflow", paragraphs: ["The finished process was a chain of editorial decisions rather than a single generation command. Each stage passed only the material needed by the next stage."], steps: ["IDEA — define the audience and message", "PROTOFACE — AI video generation", "SELECT THE BEST CLIPS — protect only useful moments", "CAPCUT — edit, narration and text", "CTA — present the action and disclosure clearly", "YOUTUBE — publish, SEO and final review"], note: "Even when AI generates the footage, the final quality still depends on what you choose, how you edit it, and how you tell the story." },
      ],
      faqs: [{ question: "Was the Protoface output uploaded to YouTube without editing?", answer: "No. We selected short portions, combined them with service interface footage, and added narration, captions, a CTA and publishing metadata in the wider workflow." }, { question: "Why show the Protoface interface as well as generated clips?", answer: "The interface gave viewers context for model selection and settings, while the generated clips showed the visual material that entered the final edit." }],
      related: [{ label: "Model Workflow", title: "Multiple AI Video Models in One Workflow", href: "/insights/protoface-multiple-ai-video-models-workflow" }, { label: "Production Experience", title: "Our Protoface Real Production Experience", href: "/insights/protoface-real-production-experience" }, { label: "Publishing Guide", title: "Create AI Shorts in 9:16 From the Start", href: "/insights/create-ai-shorts-9-16-from-start" }, { label: "FourFeetz Videos", title: "Watch FourFeetz Videos", href: "/videos" }],
      serviceCta: { href: affiliateHref, title: "Try Protoface Studio", description: "Explore multiple AI video models in one platform and choose an option that fits the work. Use the FourFeetz coupon when joining Studio Unlimited to receive the currently advertised $10 in additional free credits.", label: "Start with Protoface Studio", protofaceAffiliate: true },
    },
    ko: {
      slug: "protoface-capcut-youtube-production-workflow",
      eyebrow: "FourFeetz 실제 제작 경험",
      title: "AI 영상 하나를 홍보 콘텐츠로 완성하기까지 | Protoface → CapCut → YouTube 실전 제작 과정",
      shortTitle: "Protoface부터 YouTube 게시까지의 실전 제작 과정",
      description: "FourFeetz가 Protoface 홍보 콘텐츠를 기획하고 AI 영상 소재를 선별해 CapCut에서 편집한 뒤 YouTube 게시를 준비한 전체 과정을 정리합니다.",
      hero: "/images/insights/protoface/generation-to-youtube-workflow.png",
      heroAlt: "AI 영상 생성, 클립 선별, 편집과 YouTube 게시로 이어지는 네 단계 워크플로우",
      heroCaption: "생성은 한 단계였습니다. 클립 선별, 편집, 제휴 고지와 게시 판단이 콘텐츠를 완성했습니다.",
      published,
      updated: published,
      readTime: "약 9분",
      verdict: "AI가 영상을 만들어주는 시대에도 콘텐츠의 완성도를 결정하는 것은 어떤 장면을 선택하고 어떻게 연결하느냐였습니다.",
      category: "Experience / Tutorial",
      tags: ["Protoface", "CapCut", "YouTube", "AI 쇼츠", "게시 워크플로우"],
      keywords: ["Protoface 사용법", "CapCut AI 영상 편집", "AI 유튜브 영상 제작", "AI Shorts 제작", "Protoface tutorial"],
      tools: ["Protoface Studio", "MiniMax H3", "CapCut", "YouTube"],
      characters: [],
      recordBasis: "제공된 FourFeetz Protoface 홍보 편집본과 실제 생성, 화면 녹화, CapCut 편집 및 게시 준비 과정을 바탕으로 작성했습니다.",
      sections: [
        { id: "not-finished-at-generation", title: "AI 영상 생성만으로는 콘텐츠가 완성되지 않았습니다", paragraphs: ["좋은 AI 영상 하나가 생성되면 콘텐츠가 끝난다고 생각하기 쉽습니다. 이번 제작에서 생성은 한 단계일 뿐이었습니다. 기획, 클립 선별, Protoface 화면 확보, 편집, 내레이션, 자막, CTA, 썸네일과 게시 준비가 모두 필요했습니다.", "전체 과정은 기획 → AI 영상 생성 → 여러 클립 선별 → 화면 녹화 → 편집 → 내레이션과 자막 → CTA → 썸네일 → YouTube 업로드 순서였습니다. 각 단계는 시청자가 가진 서로 다른 질문을 해결했습니다."], steps: ["메시지와 시청자를 정합니다.", "짧은 AI 영상 선택지를 생성합니다.", "사용할 수 있는 순간만 선별합니다.", "필요한 서비스 화면을 녹화합니다.", "영상, 내레이션과 자막을 편집합니다.", "CTA와 커버를 별도로 구성합니다.", "YouTube 업로드 설정을 확인합니다."] },
        { id: "protoface-material", title: "Protoface에서 영상 소재 만들기", paragraphs: ["홍보영상 소재를 준비하면서 Protoface에서 MiniMax H3와 다양한 모델 선택지를 검토했습니다. 목적은 모델 순위를 만드는 것이 아니라 서비스 안에서 서로 다른 창작 가능성을 보여줄 수 있는 클립을 확보하는 것이었습니다.", "AI 생성 영상만 나열하면 서비스 구조를 충분히 설명하기 어려웠습니다. 실제 Protoface Studio 화면과 선별한 결과를 함께 보여주자 선택이 이뤄지는 위치와 편집에 들어간 소재를 동시에 이해시킬 수 있었습니다."], links: [{ text: "다양한 모델 선택지", href: "/ko/insights/protoface-multiple-ai-video-models-workflow" }] },
        { id: "short-ui-cuts", title: "긴 화면 녹화보다 짧은 컷", paragraphs: ["사이트를 길게 스크롤하는 녹화는 중요한 조작부를 알아보기 어렵게 만들었습니다. 화면을 짧게 나누고 각 구간에서 필요한 부분만 확대했습니다.", "Protoface 메인 화면 → 모델 선택 → 생성 설정 → 결과 영상 → 주요 기능 → 가입 혜택 순서로 구성하자 긴 화면을 계속 보지 않아도 서비스 흐름을 이해할 수 있었습니다."], steps: ["Protoface 메인 화면", "모델 선택 화면", "생성 설정", "결과 영상", "주요 기능", "가입 혜택과 제휴 고지"] },
        { id: "capcut-edit", title: "CapCut에서 최종 영상 만들기", paragraphs: ["CapCut은 AI 생성 클립, Protoface 화면 녹화, 내레이션, 자막과 마지막 CTA를 결합하는 단계였습니다. 아래 강아지와 고양이 영상은 Seedance 2.0으로 실제 제작한 뒤 편집 소재로 사용한 결과물입니다. 생성에 시간이나 크레딧을 썼다는 이유로 긴 클립을 유지하지 않고 설명에 필요한 순간까지만 잘랐습니다.", "좋은 부분은 2~5초만으로도 충분한 경우가 많았습니다. 서비스 화면과 결과를 번갈아 보여주고, 한 번에 하나의 UI만 확대하자 세로 화면이 작은 소프트웨어 데모처럼 보이는 문제를 줄일 수 있었습니다. 이 Seedance 2.0 영상은 다른 모델과의 통제된 비교 결과가 아니라 FourFeetz의 실제 제작 경험을 보여주는 사례입니다."], bullets: ["필요한 경우 좋은 부분만 2~5초 사용합니다.", "서비스 화면과 생성 결과를 번갈아 보여줍니다.", "중요한 UI는 전체 화면 대신 해당 부분을 확대합니다.", "긴 설명보다 짧은 자막을 사용합니다.", "마지막 CTA는 별도 화면으로 명확하게 구성합니다.", "Shorts라면 처음부터 9:16 구도를 고려합니다."], images: [{ src: "/images/insights/protoface/seedance-2-backyard-reference.png", alt: "Seedance 2.0 강아지·고양이 장면 제작에 사용한 화창한 뒷마당 환경 레퍼런스", caption: "Seedance 2.0 영상을 생성하기 전에 장소, 빛과 따뜻한 분위기를 정하기 위해 사용한 실제 뒷마당 환경 레퍼런스입니다.", presentation: "landscape", fit: "contain" }, { src: "/images/insights/protoface/seedance-2-dog-cat-reference-board.png", alt: "강아지 HARU, 고양이 LUNA, 첫 프레임과 뒷마당 환경을 배치한 Seedance 2.0 레퍼런스 보드", caption: "9:16 첫 프레임과 HARU·LUNA 캐릭터, 뒷마당 환경 레퍼런스를 함께 구성해 실제 제작 장면의 기준으로 사용했습니다.", presentation: "portrait", fit: "contain" }], videos: [{ src: capcutWorkflowVideo, poster: promoPoster, title: "Seedance 2.0으로 제작한 강아지·고양이 영상", caption: "이 강아지·고양이 영상은 Seedance 2.0으로 실제 제작했으며 FourFeetz 제작 및 CapCut 편집 과정의 원본 소재로 사용했습니다.", presentation: "portrait" }] },
        { id: "experience-led-promo", title: "홍보영상에서도 실제 경험이 중요했습니다", paragraphs: ["서비스가 좋다고 말하는 것만으로는 FourFeetz의 콘텐츠 방향에 맞지 않았습니다. 직접 사용하고, 결과물을 보여주고, 어떤 방식으로 제작에 넣었는지 설명하는 구조를 선택했습니다.", "이 방식은 한계도 더 분명하게 만들었습니다. 모든 모델을 비교했다고 과장하거나 하나의 편집 결과가 모든 사용자에게 똑같이 재현된다고 말하지 않으면서 실제 제작 흐름은 보여줄 수 있었습니다."], links: [{ text: "FourFeetz의 콘텐츠 방향", href: "/ko/editorial-policy" }] },
        { id: "youtube-publishing", title: "YouTube 게시 단계에서 확인한 항목", paragraphs: ["업로드 과정에서는 AI 생성·수정 콘텐츠와 관련된 YouTube 설정을 확인하고, 제휴 관계를 명확히 표시했으며, 설명란에 제휴 링크와 쿠폰 조건을 넣었습니다. AI Tools 관련 재생목록으로 분류하고 Shorts에 맞는 9:16 커버 이미지도 준비했습니다.", "이는 이번 게시 과정에서 확인한 항목이며 법률 해석이나 영구적인 플랫폼 정책을 의미하지 않습니다. 게시 설정과 고지 기준은 바뀔 수 있으므로 업로드 시점의 YouTube 및 서비스 화면을 다시 확인해야 합니다."], bullets: ["현재 AI 생성·수정 콘텐츠 설정을 확인합니다.", "제휴 관계를 명확히 고지합니다.", "설명란에 제휴 링크와 조건부 쿠폰 정보를 표시합니다.", "관련 AI Tools 재생목록으로 분류합니다.", "9:16 Shorts 구도에 맞는 커버를 사용합니다."] },
        { id: "final-workflow", title: "FourFeetz의 최종 워크플로우", paragraphs: ["최종 과정은 하나의 생성 명령이 아니라 편집 판단의 연속이었습니다. 각 단계는 다음 단계에 필요한 소재만 넘겼습니다."], steps: ["아이디어 — 시청자와 메시지 정하기", "PROTOFACE — AI 영상 생성", "좋은 클립 선별 — 필요한 순간만 유지", "CAPCUT — 편집, 내레이션과 자막", "CTA — 행동과 제휴 고지 분명하게 표시", "YOUTUBE — 게시, SEO와 최종 검수"], note: "AI가 영상을 만들어주는 시대에도 콘텐츠의 완성도를 결정하는 것은 어떤 장면을 선택하고 어떻게 연결하느냐였습니다." },
      ],
      faqs: [{ question: "Protoface 결과를 편집 없이 YouTube에 올렸나요?", answer: "아닙니다. 짧은 구간을 선별하고 서비스 화면과 결합한 뒤 내레이션, 자막, CTA와 게시 정보를 전체 워크플로우에서 추가했습니다." }, { question: "왜 생성 영상과 Protoface 화면을 함께 보여줬나요?", answer: "서비스 화면은 모델 선택과 설정의 맥락을 보여주고, 생성 클립은 실제 편집에 들어간 시각 소재를 보여주기 때문입니다." }],
      related: [{ label: "모델 워크플로우", title: "여러 AI 영상 모델을 활용한 제작 방식", href: "/ko/insights/protoface-multiple-ai-video-models-workflow" }, { label: "실제 제작 경험", title: "Protoface 실제 제작 경험", href: "/ko/insights/protoface-real-production-experience" }, { label: "게시 가이드", title: "처음부터 9:16 AI 쇼츠 만들기", href: "/ko/insights/create-ai-shorts-9-16-from-start" }, { label: "FourFeetz 영상", title: "FourFeetz 영상 보기", href: "/ko/videos" }],
      serviceCta: { href: affiliateHref, title: "Try Protoface Studio", description: "다양한 AI 영상 모델을 하나의 플랫폼에서 직접 확인하고 작업에 맞는 모델을 선택해 보세요. Studio Unlimited 가입 시 FourFeetz 쿠폰을 사용하면 현재 안내된 $10 상당의 추가 무료 크레딧 혜택을 받을 수 있습니다.", label: "Protoface Studio 시작하기", protofaceAffiliate: true },
    },
  },
};
