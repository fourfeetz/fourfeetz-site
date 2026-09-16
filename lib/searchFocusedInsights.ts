import type { Metadata } from "next";
import type { ProductionInsight } from "@/lib/productionInsights";
import { englishLanguageAlternates, languageAlternates } from "@/lib/localization";

export const searchFocusedInsightSlugs = [
  "ai-pet-video-from-one-photo",
  "pet-grooming-salon-promo-video-guide",
  "ai-pet-video-production-cost-guide",
] as const;

export type SearchFocusedInsightSlug = (typeof searchFocusedInsightSlugs)[number];
type Language = "en" | "ko";

type LocalizedInsight = ProductionInsight & { heroAlt: string };

const dates = { published: "2026-09-14", updated: "2026-09-14" } as const;

export const searchFocusedInsights: Record<SearchFocusedInsightSlug, Record<Language, LocalizedInsight>> = {
  "ai-pet-video-from-one-photo": {
    en: {
      ...dates,
      slug: "ai-pet-video-from-one-photo",
      eyebrow: "FourFeetz Practical Guide",
      title: "How to Make an AI Pet Video From One Photo",
      shortTitle: "AI Pet Video From One Photo",
      description: "A practical beginner guide to turning one pet photo into a short AI video while protecting identity, anatomy, framing and editability.",
      hero: "/images/insights-hero-v2.png",
      heroAlt: "FourFeetz AI video production workspace for a pet character project",
      readTime: "7 min read",
      verdict: "One strong reference photo can be enough for a short test, but the result improves when the first shot is simple, the pet stays readable and each generation asks for one clear action.",
      category: "Production Guide",
      tags: ["AI Pet Video", "Image to Video", "Beginner Guide", "Pet Content"],
      keywords: ["AI pet video from photo", "make pet video with AI", "image to video pet", "AI dog video"],
      tools: ["AI Image-to-Video", "CapCut"],
      characters: ["Pet"],
      sections: [
        { id: "photo", title: "Start With a Photo That Gives the Model Enough Information", paragraphs: ["A single photo works best when the face, ears, body outline and paws are easy to read. Strong backlight, heavy blur, cropped limbs or accessories covering the face make the next frame harder to predict.", "For a first test, use a neutral pose and a camera distance that leaves some space around the animal. The goal is not to reveal every possible angle in one image; it is to give the video model a stable visual starting point."], bullets: ["Choose a sharp image with a readable face.", "Avoid cropping paws or ears when possible.", "Keep the background simpler than the subject.", "Use a pose that can naturally lead into a small movement."] },
        { id: "motion", title: "Ask for One Action, Not a Full Story", paragraphs: ["Short AI clips become less stable when the pet must walk, turn, jump, look back and interact with an object in the same generation. A better first test is one visible action such as taking two steps, looking toward the camera or lying down.", "Small secondary motion such as breathing and blinking can make the shot feel alive without competing with the main action. This also gives the final frame a cleaner shape for editing or continuation."], bullets: ["One primary action per generation.", "Keep camera movement restrained during identity-sensitive shots.", "Review the full body, not only the face."] },
        { id: "review", title: "Review Identity Before Adding Music and Captions", paragraphs: ["A clip can feel impressive at normal speed while the muzzle, ear shape or paws change for several frames. Review the opening, middle and ending separately. If the pet becomes a different age or body type, replace the failing shot instead of hiding it with text or effects.", "Once the visual pass is stable, trim the usable range and add sound, captions or transitions in the editor. This order prevents finishing work from being wasted on a structurally broken clip."], table: { title: "Simple review order", headers: ["Check", "Question", "If it fails"], rows: [["Face", "Does the pet still look like the same animal?", "Regenerate the shot"], ["Body", "Are paws and proportions believable?", "Shorten or replace"], ["Action", "Is one clear action readable?", "Simplify the next generation"], ["Edit", "Is there a clean start and end?", "Trim before adding effects"]] } },
        { id: "takeaway", title: "Practical Takeaway", paragraphs: ["For a first AI pet video, a simple believable five-to-eight-second shot is more useful than a complicated scene that breaks identity. Build confidence with one stable action, then add a second shot only when the first one is clean.", "FourFeetz keeps its private character prompts and internal production system confidential, so this guide focuses on general production decisions that can be applied without exposing proprietary character assets."] },
      ],
      faqs: [{ question: "Can one pet photo really be enough?", answer: "Yes for a short test, especially when the image clearly shows the pet. More reference coverage can help with complex angles and longer sequences." }, { question: "Should I start with a long prompt?", answer: "Not necessarily. A short, clear action and stable composition are usually more useful than a long list of instructions for a first generation." }],
      related: [{ label: "Related Guide", title: "Create AI Shorts in 9:16 From the Start", href: "/insights/create-ai-shorts-9-16-from-start" }, { label: "Service", title: "FourFeetz Video Services", href: "/services" }],
    },
    ko: {
      ...dates,
      slug: "ai-pet-video-from-one-photo",
      eyebrow: "FourFeetz 실전 가이드",
      title: "반려동물 사진 한 장으로 AI 영상 만드는 방법",
      shortTitle: "사진 한 장으로 AI 반려동물 영상 만들기",
      description: "반려동물 사진 한 장을 짧은 AI 영상으로 만들 때 얼굴, 신체, 구도와 편집 가능성을 안정적으로 유지하는 실전 입문 가이드입니다.",
      hero: "/images/insights-hero-v2.png",
      heroAlt: "반려동물 캐릭터 영상을 제작하는 FourFeetz AI 영상 작업 화면",
      readTime: "약 7분",
      verdict: "선명한 기준 사진 한 장으로도 짧은 테스트는 가능합니다. 다만 첫 장면을 단순하게 구성하고 반려동물의 특징이 잘 보이게 유지하며 한 번의 생성에는 하나의 행동만 맡기는 것이 중요합니다.",
      category: "제작 가이드",
      tags: ["AI 반려동물 영상", "이미지 투 비디오", "초보 가이드", "반려동물 콘텐츠"],
      keywords: ["반려동물 사진 AI 영상", "강아지 사진 영상 만들기", "AI 반려동물 영상 만들기", "사진 한 장 영상"],
      tools: ["AI 이미지 투 비디오", "CapCut"],
      characters: ["반려동물"],
      sections: [
        { id: "photo", title: "모델이 읽기 쉬운 사진에서 시작합니다", paragraphs: ["얼굴, 귀, 몸의 윤곽과 발이 잘 보이는 사진이 좋습니다. 역광이 강하거나 흔들렸거나 팔다리가 많이 잘린 사진, 얼굴을 가리는 장식이 많은 사진은 다음 프레임을 안정적으로 만드는 데 불리합니다.", "첫 테스트는 반려동물 주변에 약간의 여백이 있고 자세가 자연스러운 사진이 좋습니다. 한 장에서 모든 각도를 보여주는 것이 목적이 아니라 영상이 시작할 수 있는 안정적인 기준을 만드는 것이 목적입니다."], bullets: ["얼굴이 선명한 사진을 선택합니다.", "가능하면 귀와 발이 잘리지 않게 합니다.", "배경은 주인공보다 단순하게 유지합니다.", "작은 움직임으로 이어지기 쉬운 자세를 선택합니다."] },
        { id: "motion", title: "한 장면에는 하나의 행동만 요청합니다", paragraphs: ["걷기, 뒤돌기, 점프, 소품 잡기와 카메라 이동을 한 번에 넣으면 짧은 영상에서 신체와 얼굴이 불안정해지기 쉽습니다. 첫 테스트는 두세 걸음 걷기, 카메라 바라보기, 편하게 눕기처럼 눈으로 확인할 수 있는 행동 하나가 좋습니다.", "호흡이나 눈 깜빡임 같은 작은 움직임은 주된 행동을 방해하지 않으면서 자연스러움을 더할 수 있습니다. 마지막 프레임도 정리되어 다음 장면이나 편집으로 이어가기 쉬워집니다."], bullets: ["생성 한 번에 주요 행동 하나만 넣습니다.", "정체성이 중요한 장면에서는 카메라 움직임을 과하게 하지 않습니다.", "얼굴뿐 아니라 몸 전체를 확인합니다."] },
        { id: "review", title: "음악과 자막보다 먼저 얼굴과 신체를 검수합니다", paragraphs: ["정상 속도로 볼 때는 좋아 보여도 몇 프레임 동안 주둥이, 귀나 발 모양이 달라질 수 있습니다. 시작, 중간과 끝을 따로 확인하고 다른 나이 또는 다른 체형으로 보이면 자막이나 효과로 가리지 말고 해당 장면을 다시 만드는 편이 낫습니다.", "영상 자체가 안정된 뒤 사용할 구간을 잘라내고 음악, 자막과 전환을 추가합니다. 이렇게 하면 구조적으로 실패한 장면에 후반 작업 시간을 낭비하지 않습니다."], table: { title: "간단한 검수 순서", headers: ["항목", "확인 질문", "문제가 있으면"], rows: [["얼굴", "같은 반려동물로 보이는가?", "장면 재생성"], ["신체", "발과 체형이 자연스러운가?", "구간 축소 또는 교체"], ["행동", "하나의 행동이 분명한가?", "다음 생성에서 단순화"], ["편집", "시작과 끝이 깨끗한가?", "효과 전에 먼저 자르기"]] } },
        { id: "takeaway", title: "실전 핵심 정리", paragraphs: ["첫 AI 반려동물 영상에서는 복잡하지만 불안정한 장면보다 5~8초의 단순하고 자연스러운 장면이 더 가치 있습니다. 한 장면이 안정된 뒤 두 번째 장면을 추가하는 방식이 효율적입니다.", "FourFeetz의 캐릭터 마스터 프롬프트와 내부 제작 방식은 공개하지 않기 때문에 이 글은 독점 자산을 노출하지 않고 적용할 수 있는 일반적인 제작 판단 기준만 설명합니다."] },
      ],
      faqs: [{ question: "반려동물 사진 한 장만 있어도 가능한가요?", answer: "짧은 테스트라면 가능합니다. 얼굴과 몸이 잘 보이는 사진일수록 유리하며 복잡한 각도와 긴 영상에서는 추가 기준 이미지가 도움이 됩니다." }, { question: "처음부터 긴 프롬프트를 써야 하나요?", answer: "그럴 필요는 없습니다. 첫 생성에서는 긴 설명보다 행동 하나와 안정적인 구도를 분명히 정하는 편이 더 유용합니다." }],
      related: [{ label: "관련 가이드", title: "처음부터 9:16 AI 쇼츠 만들기", href: "/ko/insights/create-ai-shorts-9-16-from-start" }, { label: "제작 서비스", title: "FourFeetz 영상 제작 서비스", href: "/ko/services" }],
    },
  },
  "pet-grooming-salon-promo-video-guide": {
    en: {
      ...dates, slug: "pet-grooming-salon-promo-video-guide", eyebrow: "FourFeetz Business Guide", title: "How to Plan a Pet Grooming Salon Promo Video", shortTitle: "Pet Grooming Salon Promo Video", description: "A practical structure for a short pet grooming salon promo: first impression, care, transformation, trust and one clear call to action.", hero: "/images/studio-hero-v2.png", heroAlt: "FourFeetz studio visual used for pet business promotional video planning", readTime: "7 min read", verdict: "A short grooming promo works better when it shows the customer journey and trust signals instead of trying to display every service at once.", category: "Business Guide", tags: ["Pet Grooming", "Promo Video", "Shorts", "Marketing"], keywords: ["pet grooming promo video", "dog grooming marketing video", "pet salon reels", "AI pet business video"], tools: ["AI Video", "CapCut"], characters: ["Pet Customer"],
      sections: [
        { id: "goal", title: "Start With the Customer Decision", paragraphs: ["A grooming customer wants to know whether the salon feels clean, careful and trustworthy. A useful short therefore needs to communicate more than a beautiful interior. It should show arrival, gentle handling, one recognizable grooming moment and a calm finished result.", "This gives the video a beginning and an end. It also makes the service understandable with sound off, which matters on Shorts and Reels."], bullets: ["Open with the pet or salon identity quickly.", "Show one believable care interaction.", "Use the finished look as the visual payoff.", "End with one booking or inquiry action."] },
        { id: "claims", title: "Use Only Claims the Real Business Can Confirm", paragraphs: ["AI visuals can accidentally imply facilities, staff numbers or services that do not exist. Before publishing, every visible feature and written claim should be matched to the real salon. A portfolio sample should be labelled as a sample rather than presented as evidence about an actual operator.", "Trust is stronger when the video is specific and accurate. Avoid phrases such as best, safest or 24-hour care unless the business can substantiate them." ] },
        { id: "structure", title: "A Simple 20-to-30-Second Structure", paragraphs: ["A short vertical promo does not need many scenes. Four clear beats are usually enough: arrival, care, result and action. Keep each shot focused so the viewer can understand the service before the next cut."], table: { title: "Suggested short-form structure", headers: ["Beat", "Visual", "Purpose"], rows: [["0–5s", "Pet arrives / salon identity", "Category recognition"], ["5–15s", "Gentle grooming interaction", "Care and trust"], ["15–23s", "Finished pet", "Transformation payoff"], ["23–30s", "Brand and CTA", "Booking or inquiry"]] } },
        { id: "takeaway", title: "Practical Takeaway", paragraphs: ["The video should answer one question: why would a pet owner feel comfortable contacting this salon? A clear customer journey, restrained copy and believable care moments usually do more work than a long service list."] },
      ],
      faqs: [{ question: "How long should a grooming salon promo be?", answer: "For Shorts or Reels, 20 to 30 seconds is enough for a focused first version. Longer videos can be used when the business needs staff introductions, facility details or testimonials." }, { question: "Should every service be shown?", answer: "No. A first promo is usually clearer when it highlights a few strong, verifiable benefits and points viewers to the booking page for the full menu." }],
      related: [{ label: "Service", title: "Pet Grooming & Hotel Video", href: "/ko/services/grooming-hotel" }, { label: "Production Notes", title: "What We Learned Making a Pet Hotel Promo", href: "/insights/pet-hotel-promo-video-production-notes" }],
    },
    ko: {
      ...dates, slug: "pet-grooming-salon-promo-video-guide", eyebrow: "FourFeetz 업체 가이드", title: "애견미용실 홍보영상 만드는 방법", shortTitle: "애견미용실 홍보영상 제작 가이드", description: "첫인상, 돌봄, 전후 변화, 신뢰와 하나의 문의 행동으로 구성하는 짧은 애견미용실 홍보영상 실전 가이드입니다.", hero: "/images/studio-hero-v2.png", heroAlt: "반려동물 업체 홍보영상 기획에 사용하는 FourFeetz 스튜디오 이미지", readTime: "약 7분", verdict: "짧은 애견미용실 홍보영상은 모든 서비스를 한꺼번에 보여주는 것보다 고객이 느끼는 도착, 돌봄, 변화와 신뢰의 흐름을 보여줄 때 더 명확합니다.", category: "업체 가이드", tags: ["애견미용실", "홍보영상", "쇼츠", "마케팅"], keywords: ["애견미용실 홍보영상", "애견미용실 릴스", "반려동물 업체 영상", "애견미용 마케팅"], tools: ["AI 영상", "CapCut"], characters: ["반려동물 고객"],
      sections: [
        { id: "goal", title: "고객의 선택 기준에서 시작합니다", paragraphs: ["애견미용실을 찾는 고객은 공간이 깨끗한지, 반려동물을 세심하게 다루는지, 믿고 맡길 수 있는지를 보고 싶어 합니다. 그래서 짧은 홍보영상은 예쁜 인테리어만 보여주는 것보다 도착, 부드러운 돌봄, 한 가지 미용 장면과 편안한 완성 모습을 연결하는 편이 좋습니다.", "이렇게 하면 영상에 시작과 끝이 생기고 소리를 끈 상태에서도 서비스 내용을 이해하기 쉽습니다."], bullets: ["초반에 반려동물 또는 업체 정체성을 빠르게 보여줍니다.", "믿을 수 있는 돌봄 장면 하나를 보여줍니다.", "완성된 모습을 시각적 보상으로 사용합니다.", "마지막에는 예약 또는 문의 행동 하나만 안내합니다."] },
        { id: "claims", title: "실제 업체가 확인할 수 있는 내용만 사용합니다", paragraphs: ["AI 영상은 실제로 없는 시설, 직원 수나 서비스를 있는 것처럼 보이게 만들 수 있습니다. 공개 전에는 화면에 보이는 공간과 문구를 실제 매장과 맞춰야 합니다. 포트폴리오 샘플이라면 실제 업체의 증거처럼 보이지 않도록 샘플임을 분명히 적는 것이 안전합니다.", "최고, 가장 안전한, 24시간 관리 같은 표현은 실제로 확인할 근거가 있을 때만 사용해야 합니다. 정확한 정보가 오히려 신뢰에 더 도움이 됩니다."] },
        { id: "structure", title: "20~30초 홍보영상의 간단한 구성", paragraphs: ["세로형 홍보영상에 많은 장면이 필요하지는 않습니다. 도착, 돌봄, 결과와 행동 유도의 네 구간만으로도 첫 버전을 만들 수 있습니다. 한 장면의 목적을 하나로 제한해야 다음 컷으로 넘어가기 전에 서비스가 이해됩니다."], table: { title: "추천 쇼츠 구성", headers: ["구간", "화면", "목적"], rows: [["0~5초", "반려동물 도착 / 업체 소개", "업종 인식"], ["5~15초", "부드러운 미용 상호작용", "돌봄과 신뢰"], ["15~23초", "완성된 모습", "변화의 보상"], ["23~30초", "브랜드와 CTA", "예약 또는 문의"]] } },
        { id: "takeaway", title: "실전 핵심 정리", paragraphs: ["영상은 한 가지 질문에 답해야 합니다. 고객이 왜 이 미용실에 문의해도 괜찮다고 느낄까요? 분명한 고객 여정, 짧은 문구와 믿을 수 있는 돌봄 장면이 긴 서비스 목록보다 더 효과적일 수 있습니다."] },
      ],
      faqs: [{ question: "애견미용실 홍보영상은 몇 초가 좋은가요?", answer: "쇼츠나 릴스용 첫 버전은 20~30초면 충분합니다. 직원 소개, 시설과 후기까지 보여줘야 한다면 더 긴 영상을 별도로 만들 수 있습니다." }, { question: "모든 서비스를 영상에 넣어야 하나요?", answer: "아닙니다. 첫 홍보영상은 확인 가능한 강점 몇 가지에 집중하고 전체 서비스는 예약 페이지나 상세 안내로 연결하는 편이 더 명확합니다." }],
      related: [{ label: "제작 서비스", title: "애견미용실·호텔 영상", href: "/ko/services/grooming-hotel" }, { label: "제작 기록", title: "펫호텔 홍보영상 제작 경험", href: "/ko/insights/pet-hotel-promo-video-production-notes" }],
    },
  },
  "ai-pet-video-production-cost-guide": {
    en: {
      ...dates, slug: "ai-pet-video-production-cost-guide", eyebrow: "FourFeetz Pricing Guide", title: "How Much Does an AI Pet Video Cost?", shortTitle: "AI Pet Video Production Cost", description: "A practical guide to what affects AI pet video production cost: length, scene count, character consistency, retries, captions, audio and delivery format.", hero: "/images/studio-hero-v2.png", heroAlt: "FourFeetz production studio visual for AI pet video pricing", readTime: "7 min read", verdict: "AI does not make production cost equal to generation cost. The real budget depends on how many shots must survive review, how much continuity is required and what the final delivery includes.", category: "Pricing Guide", tags: ["AI Video Cost", "Pet Video", "Production", "Pricing"], keywords: ["AI pet video cost", "AI video production price", "pet video price", "AI short video cost"], tools: ["AI Video", "Editing"], characters: ["Pet"],
      sections: [
        { id: "cost", title: "Generation Cost Is Only One Part of the Budget", paragraphs: ["A usable AI video is normally selected from several generations. The production cost therefore includes planning, reference preparation, retries, selection, editing, captions, audio and final export—not only the price of pressing generate once.", "A five-second clip with one pet and a locked camera can be inexpensive to test. A 30-second branded short with several locations, multiple animals and strict identity continuity requires more attempts and review." ] },
        { id: "drivers", title: "The Main Cost Drivers", paragraphs: ["The biggest variables are usually scene count, number of characters, movement complexity and how strict the continuity requirement is. Dialogue, lip movement, product interaction, custom sound and multiple aspect ratios can add more production work."], bullets: ["Number and length of scenes", "One pet versus multiple characters", "Simple motion versus complex interaction", "Strict character and background continuity", "Voice, music, captions and sound design", "9:16, 16:9 or multiple delivery formats", "Number of revisions and alternate cuts"] },
        { id: "estimate", title: "Ask for a Scope Before Asking for a Price", paragraphs: ["A useful quote should define the final duration, number of scenes, reference material, delivery format and revision range. Without those details, a low headline price may exclude the work needed to reach a publishable result.", "For business use, also confirm whether the quote includes commercial delivery, clean exports, source files and changes after the first draft."], table: { title: "Questions to define the quote", headers: ["Question", "Why it matters"], rows: [["How long is the final video?", "Sets the amount of usable footage needed"], ["How many scenes?", "More scenes usually mean more generation and continuity checks"], ["How many characters?", "Two-character interaction is harder than one-character motion"], ["What deliverables?", "Aspect ratios, captions and source files affect editing"], ["How many revisions?", "Defines the expected rework range"]] } },
        { id: "takeaway", title: "Practical Takeaway", paragraphs: ["Compare quotes by scope, not only by seconds. A realistic quote explains what must be produced and reviewed to deliver the final result. This is especially important for pet and character videos where identity drift can make apparently successful generations unusable."] },
      ],
      faqs: [{ question: "Is AI video always cheaper than traditional video?", answer: "Not always. It can reduce some production requirements, but complex continuity, repeated generations and editing can still require substantial work." }, { question: "Why can two 30-second AI videos have very different prices?", answer: "One may use a single simple scene while the other requires many locations, characters, revisions, dialogue and strict identity consistency." }],
      related: [{ label: "Service", title: "FourFeetz Video Services", href: "/services" }, { label: "Related Guide", title: "Common AI Video Generation Failures", href: "/insights/common-ai-video-generation-failures" }],
    },
    ko: {
      ...dates, slug: "ai-pet-video-production-cost-guide", eyebrow: "FourFeetz 비용 가이드", title: "AI 반려동물 영상 제작 비용은 어떻게 결정될까?", shortTitle: "AI 반려동물 영상 제작 비용", description: "영상 길이, 장면 수, 캐릭터 일관성, 재생성, 자막, 오디오와 납품 형식에 따라 AI 반려동물 영상 제작 비용이 달라지는 이유를 설명합니다.", hero: "/images/studio-hero-v2.png", heroAlt: "AI 반려동물 영상 제작 비용을 설명하는 FourFeetz 스튜디오 이미지", readTime: "약 7분", verdict: "AI 영상 제작 비용은 생성 버튼 한 번의 비용과 같지 않습니다. 실제 예산은 최종 검수를 통과해야 하는 장면 수, 연속성 난이도와 납품 범위에 따라 달라집니다.", category: "비용 가이드", tags: ["AI 영상 제작비", "반려동물 영상", "영상 제작", "가격"], keywords: ["AI 반려동물 영상 제작 비용", "AI 영상 제작 가격", "반려동물 영상 비용", "쇼츠 제작 비용"], tools: ["AI 영상", "편집"], characters: ["반려동물"],
      sections: [
        { id: "cost", title: "생성 비용은 전체 제작비의 일부입니다", paragraphs: ["실제로 사용할 AI 영상은 여러 번의 생성 결과 중에서 선택되는 경우가 많습니다. 그래서 제작비에는 기획, 기준 이미지 준비, 재생성, 결과 선택, 편집, 자막, 오디오와 최종 출력까지 포함됩니다. 생성 버튼 한 번의 비용만으로 완성 영상을 계산하기 어렵습니다.", "반려동물 한 마리가 고정된 카메라에서 5초 정도 움직이는 테스트는 비교적 단순합니다. 여러 장소와 두 마리 이상의 동물, 브랜드 일관성을 요구하는 30초 영상은 시도와 검수가 더 많이 필요합니다."] },
        { id: "drivers", title: "제작비를 크게 바꾸는 요소", paragraphs: ["주요 변수는 장면 수, 캐릭터 수, 움직임의 복잡성, 그리고 얼마나 엄격하게 연속성을 유지해야 하는지입니다. 대사, 입 모양, 제품과의 상호작용, 맞춤 사운드와 여러 화면 비율 납품도 작업량을 늘릴 수 있습니다."], bullets: ["장면 수와 각 장면의 길이", "한 마리 또는 여러 캐릭터", "단순 움직임 또는 복잡한 상호작용", "캐릭터와 배경 일관성 수준", "음성, 음악, 자막과 사운드 디자인", "9:16, 16:9 또는 복수 형식 납품", "수정 횟수와 대체 버전 수"] },
        { id: "estimate", title: "가격보다 먼저 작업 범위를 정합니다", paragraphs: ["견적을 비교하려면 최종 길이, 장면 수, 기준 자료, 납품 형식과 수정 범위를 먼저 정해야 합니다. 이런 내용 없이 제시된 낮은 가격은 공개 가능한 완성본을 만들기 위한 작업이 빠져 있을 수 있습니다.", "업체용 영상이라면 상업적 사용 납품, 워터마크 없는 출력, 원본 파일과 1차 시안 이후 수정이 포함되는지도 확인하는 편이 좋습니다."], table: { title: "견적 전에 확인할 질문", headers: ["질문", "중요한 이유"], rows: [["최종 영상은 몇 초인가?", "필요한 사용 가능 영상량을 결정"], ["장면은 몇 개인가?", "장면이 많을수록 생성과 연속성 검수가 증가"], ["캐릭터는 몇 개인가?", "두 캐릭터 상호작용은 한 캐릭터보다 어려움"], ["납품 형식은 무엇인가?", "화면 비율, 자막과 원본 파일이 편집량에 영향"], ["수정은 몇 회인가?", "예상되는 재작업 범위를 정의"]] } },
        { id: "takeaway", title: "실전 핵심 정리", paragraphs: ["견적은 초당 가격만으로 비교하기보다 작업 범위로 비교해야 합니다. 좋은 견적은 최종 결과를 만들기 위해 무엇을 제작하고 검수하는지 설명합니다. 특히 반려동물·캐릭터 영상은 얼굴이나 체형이 달라지면 보기 좋은 생성 결과도 사용할 수 없기 때문에 검수 비용이 중요합니다."] },
      ],
      faqs: [{ question: "AI 영상은 항상 일반 촬영보다 저렴한가요?", answer: "항상 그렇지는 않습니다. 촬영에 필요한 일부 요소를 줄일 수 있지만 복잡한 연속성, 반복 생성과 편집이 필요하면 작업량이 커질 수 있습니다." }, { question: "같은 30초 AI 영상인데 가격 차이가 큰 이유는 무엇인가요?", answer: "한 영상은 단순한 한 장면일 수 있고 다른 영상은 여러 장소, 캐릭터, 수정, 대사와 엄격한 정체성 유지가 필요할 수 있기 때문입니다." }],
      related: [{ label: "제작 서비스", title: "FourFeetz 영상 제작 서비스", href: "/ko/services" }, { label: "관련 가이드", title: "AI 영상 생성 실패 사례", href: "/ko/insights/common-ai-video-generation-failures" }],
    },
  },
};

export function isSearchFocusedInsightSlug(slug: string): slug is SearchFocusedInsightSlug {
  return searchFocusedInsightSlugs.includes(slug as SearchFocusedInsightSlug);
}

export function getSearchFocusedInsight(slug: SearchFocusedInsightSlug, language: Language) {
  return searchFocusedInsights[slug][language];
}

export function createSearchFocusedInsightMetadata(slug: SearchFocusedInsightSlug, language: Language): Metadata {
  const article = searchFocusedInsights[slug][language];
  const englishPath = `/insights/${slug}`;
  const koreanPath = `/ko/insights/${slug}`;
  const path = language === "ko" ? koreanPath : englishPath;
  const title = `${article.title} | FourFeetz`;
  return {
    title: { absolute: title },
    description: article.description,
    keywords: article.keywords,
    alternates: language === "ko" ? languageAlternates(englishPath, koreanPath) : englishLanguageAlternates(englishPath, koreanPath),
    openGraph: { type: "article", siteName: "FourFeetz Studios", title, description: article.description, url: path, locale: language === "ko" ? "ko_KR" : "en_US", alternateLocale: [language === "ko" ? "en_US" : "ko_KR"], images: [{ url: article.hero, alt: article.heroAlt }] },
    twitter: { card: "summary_large_image", title, description: article.description, images: [article.hero] },
  };
}
