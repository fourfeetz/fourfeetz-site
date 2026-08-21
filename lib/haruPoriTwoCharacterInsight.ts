import type { ProductionInsight } from "@/lib/productionInsights";

type Language = "en" | "ko";

const slug = "haru-pori-two-character-scene";
const published = "2026-08-21";

export const haruPoriTwoCharacterInsight: Record<Language, ProductionInsight & { heroAlt: string; heroCaption: string }> = {
  en: {
    slug,
    eyebrow: "FourFeetz Production Record",
    category: "Production Record",
    title: "Keeping Two Animal Characters Clear in One Short Scene",
    shortTitle: "Keeping HARU and PORI Clear in One Short Scene",
    description: "A scene-based production record of how HARU and PORI remain distinct through scale, position, action, and golden-hour composition in a published vertical short.",
    hero: "/images/shorts/haru/short-003-cover.png",
    heroAlt: "HARU and PORI together among flowers in the vertical cover for A Golden Evening Together",
    heroCaption: "The published cover keeps HARU and PORI visible as separate silhouettes while the flower garden and evening light establish the shared setting.",
    published,
    updated: published,
    readTime: "8 min read",
    verdict: "A two-character short becomes readable when the frame gives each character a separate visual job. In A Golden Evening Together, body scale, screen position, action timing, and a quiet final pose explain the friendship without asking both characters to perform at once.",
    tags: ["HARU", "PORI", "Two-Character Scene", "Vertical Video", "Published Work"],
    keywords: ["two animal characters in one scene", "HARU and PORI", "vertical character composition", "AI animated short production"],
    tools: ["Google Flow", "Kling AI", "ChatGPT"],
    characters: ["HARU", "PORI"],
    sections: [
      {
        id: "the-published-scene",
        title: "The Production Question Was Readability, Not More Action",
        paragraphs: [
          "A Golden Evening Together is an 18-second, 9:16 FourFeetz short in which HARU and PORI meet among flowers, run through the garden, and settle beside each other. The public sequence already contains a beginning, an active middle, and a resting finish. That compact arc gives the scene its meaning, but it also creates a practical question: can a viewer identify both characters quickly enough to understand that the moment is about their relationship?",
          "HARU and PORI do not need labels inside the film. Their visible differences carry that work. HARU is a cream-white Jindo puppy with upright ears and a brown scarf. PORI is a smaller apricot poodle with curls and a green neckerchief. Those distinctions are documented on their public character pages and remain useful only when the framing does not hide them. The production task was therefore to protect recognizable shape, color, and placement while the garden and golden light remained part of the story.",
        ],
        videos: [{
          src: "/videos/shorts/haru/short-003.mp4",
          poster: "/images/shorts/haru/short-003-cover.png",
          title: "Play HARU and PORI — A Golden Evening Together",
          caption: "The finished public short is the primary evidence for the scene observations in this record.",
          presentation: "portrait",
        }],
      },
      {
        id: "separate-silhouettes",
        title: "Let Size and Screen Position Do the First Explanation",
        paragraphs: [
          "The finished frames do not make the two characters compete for the same patch of screen. HARU’s larger, pale body and upright ears produce one silhouette; PORI’s compact body and rounder apricot outline produce another. Space between those shapes matters. When two furry characters overlap in a narrow vertical frame, color boundaries and limbs can merge before the viewer has learned who is who.",
          "A wider garden view gives the eye three levels of information in a useful order: two distinct figures, the direction of their shared attention, and the flower-filled environment around them. The background is detailed, but the warm flowers sit lower in the frame and do not replace the characters as the focal point. This is an observable choice in the published image, not a claim that every earlier composition failed.",
        ],
        images: [{
          src: "/images/shorts/haru/short-003-wide.png",
          alt: "Wide vertical scene with HARU and PORI separated clearly in a golden flower garden",
          caption: "The wider scene preserves a readable gap between the characters and leaves enough garden context to establish place and mood.",
          presentation: "portrait",
          fit: "contain",
        }],
      },
      {
        id: "divide-the-action",
        title: "Give Each Beat One Dominant Reading",
        paragraphs: [
          "Two characters moving together can look lively, yet simultaneous complex actions create ambiguity in a short scene. A turn, a crossing path, a camera move, and a reaction all occurring together can make it unclear which change matters. The published short uses a simpler progression: meeting, shared play, then rest. Each beat can be understood before the next one arrives.",
          "This does not mean one character must become motionless. Small reactions can support the active character, but they should not cover a face, erase the gap between bodies, or reverse the established screen relationship without a reason. In a vertical edit, the useful question is not how much movement fits inside eighteen seconds. It is whether the viewer can still describe what each character is doing after a single viewing.",
        ],
        note: "The repository does not contain rejected motion clips or a generation log for this short, so this record does not invent a failed take. It separates general production risk from choices visible in the finished work.",
      },
      {
        id: "golden-hour-balance",
        title: "Use Golden-Hour Mood Without Washing Out Identity",
        paragraphs: [
          "Golden-hour light ties the garden together, but atmosphere cannot come at the cost of character separation. HARU’s cream coat is already close to the brightest flowers and highlights. PORI’s apricot curls are close to the warmer background hues. The finished images keep the brown scarf, green neckerchief, facial areas, and body edges readable enough to resist that color overlap.",
          "The quiet side-by-side frame is especially useful because the relationship is visible in distance and posture. The scene does not need a large gesture to announce friendship. Their shared resting direction, close placement, and the remaining distinction between pale and apricot fur carry the idea. The lower energy also gives the short a clear endpoint after the running beat.",
        ],
        images: [{
          src: "/images/shorts/haru/short-003-together.png",
          alt: "HARU and PORI resting side by side in golden evening light among garden flowers",
          caption: "The final resting composition communicates closeness through posture and distance while preserving each character’s outline and color cues.",
          presentation: "portrait",
          fit: "contain",
        }],
      },
      {
        id: "reuse-the-review",
        title: "A Reusable Review Pass for Two-Character Shorts",
        paragraphs: [
          "The lesson we carry forward is a review order, not a hidden prompt. First, pause on the opening and check whether both characters are identifiable at phone size. Next, watch without sound and name the dominant action in each beat. Then inspect crossings and contact: one body should not conceal the other character’s face or defining accessory at the moment the story depends on recognition.",
          "Finally, compare the active beat with the ending. If every part has the same motion level, the relationship can feel like undifferentiated activity. A quieter final pose can reveal what the action was building toward. For HARU and PORI, the rest beside each other completes the idea established by the meeting and shared run: two different personalities have arrived in the same calm moment.",
        ],
        bullets: [
          "Can both silhouettes be named immediately on a phone-sized frame?",
          "Does each beat have one dominant action and a readable response?",
          "Are faces, scarves, neckerchiefs, and body edges clear during crossings?",
          "Does the light preserve separation between fur and background?",
          "Does the final pose explain the relationship rather than merely stop the motion?",
        ],
      },
    ],
    faqs: [
      { question: "Where can I watch the finished HARU and PORI short?", answer: "The complete 18-second vertical film is available on the FourFeetz short page for HARU & PORI — A Golden Evening Together." },
      { question: "Did FourFeetz document failed versions of this scene?", answer: "No rejected clips or generation-count record for this short are present in the public repository, so this article discusses risks as review criteria rather than claiming a specific failed take." },
      { question: "What is the simplest two-character check?", answer: "Pause at phone size and confirm that each character has a distinct silhouette, position, and visible identity cue before evaluating finer motion." },
    ],
    related: [
      { label: "Published Short", title: "Watch A Golden Evening Together", href: "/shorts/haru-ep03-best-friends" },
      { label: "Related Character", title: "Meet HARU", href: "/characters/haru" },
      { label: "Related Character", title: "Meet PORI", href: "/characters/pori" },
      { label: "Related Production Record", title: "How We Keep Animal Motions Simple", href: "/insights/why-we-keep-animal-motions-simple" },
    ],
  },
  ko: {
    slug,
    eyebrow: "FourFeetz 실제 제작 기록",
    category: "실제 제작 기록",
    title: "하나의 짧은 장면에서 두 동물 캐릭터를 분명하게 보여주는 방법",
    shortTitle: "HARU와 PORI를 한 장면에서 분명하게 보여주는 방법",
    description: "공개 쇼츠에서 HARU와 PORI를 몸 크기, 화면 위치, 행동과 황금빛 구도로 구분한 선택을 살펴보는 실제 제작 기록입니다.",
    hero: "/images/shorts/haru/short-003-cover.png",
    heroAlt: "황금빛 꽃밭에 함께 있는 HARU와 PORI를 담은 세로형 쇼츠 대표 이미지",
    heroCaption: "공개된 대표 이미지는 두 캐릭터의 실루엣을 분리해 보여주면서 꽃밭과 저녁빛으로 하나의 공간을 만듭니다.",
    published,
    updated: published,
    readTime: "약 8분",
    verdict: "두 캐릭터 장면은 각자에게 다른 시각적 역할을 줄 때 읽기 쉬워집니다. 이 작품은 몸 크기, 화면 위치, 행동 순서와 조용한 마지막 자세로 두 캐릭터의 관계를 설명합니다.",
    tags: ["HARU", "PORI", "두 캐릭터 장면", "세로 영상", "공개 작품"],
    keywords: ["두 동물 캐릭터 장면", "HARU와 PORI", "세로 영상 캐릭터 구도", "AI 애니메이션 쇼츠 제작"],
    tools: ["Google Flow", "Kling AI", "ChatGPT"],
    characters: ["HARU", "PORI"],
    sections: [
      {
        id: "published-scene",
        title: "더 많은 움직임보다 먼저 해결할 것은 가독성이었습니다",
        paragraphs: [
          "A Golden Evening Together는 HARU와 PORI가 꽃밭에서 만나 함께 달리고, 나란히 쉬는 과정을 담은 18초 길이의 9:16 쇼츠입니다. 시작과 활동적인 중간, 잔잔한 마무리가 짧은 시간 안에 이어집니다. 이때 중요한 제작 질문은 동작을 얼마나 많이 넣을 수 있는지가 아니라, 시청자가 두 캐릭터를 빠르게 구분하고 둘의 관계를 이해할 수 있는지였습니다.",
          "HARU는 곧게 선 귀와 크림색 털, 갈색 스카프가 특징인 진돗개 강아지이고 PORI는 살구색 곱슬털과 초록색 네커치프가 특징인 작은 푸들입니다. 두 캐릭터 페이지에 공개된 이 차이는 화면에서 가려지지 않을 때만 기능합니다. 그래서 꽃과 황금빛 분위기를 유지하면서도 형태, 색과 위치가 서로 섞이지 않도록 보는 일이 장면 검토의 출발점이 됩니다.",
        ],
        videos: [{ src: "/videos/shorts/haru/short-003.mp4", poster: "/images/shorts/haru/short-003-cover.png", title: "HARU와 PORI — A Golden Evening Together 재생", caption: "이 기록의 장면 관찰은 저장소에 있는 실제 공개 쇼츠를 기준으로 합니다.", presentation: "portrait" }],
      },
      {
        id: "silhouette-position",
        title: "몸 크기와 화면 위치가 먼저 차이를 설명하게 합니다",
        paragraphs: [
          "완성 프레임에서 두 캐릭터는 같은 화면 자리를 차지하려고 경쟁하지 않습니다. HARU의 더 크고 밝은 몸과 곧게 선 귀는 하나의 실루엣을 만들고, PORI의 작은 체형과 둥근 살구색 윤곽은 다른 실루엣을 만듭니다. 좁은 세로 화면에서 털이 많은 두 동물이 겹치면 팔다리와 색 경계가 합쳐져 누가 누구인지 배우기도 전에 인상이 흐려질 수 있습니다.",
          "넓은 정원 프레임은 두 인물, 함께 향하는 시선, 주변 꽃밭의 순서로 정보를 읽게 합니다. 배경의 디테일은 풍부하지만 꽃이 인물의 얼굴과 윤곽을 대신하지 않습니다. 이것은 공개 이미지에서 확인할 수 있는 완성 장면의 선택이며, 저장소에 없는 이전 구도가 실패했다고 주장하는 근거는 아닙니다.",
        ],
        images: [{ src: "/images/shorts/haru/short-003-wide.png", alt: "황금빛 꽃밭에서 서로 구분되는 위치에 있는 HARU와 PORI의 넓은 세로 장면", caption: "넓은 구도는 두 캐릭터 사이의 간격과 정원의 분위기를 함께 유지합니다.", presentation: "portrait", fit: "contain" }],
      },
      {
        id: "action-order",
        title: "한 장면에는 하나의 주된 읽을거리를 둡니다",
        paragraphs: [
          "두 캐릭터가 동시에 복잡하게 움직이면 활기차 보일 수 있지만, 짧은 장면에서는 무엇을 봐야 하는지 불분명해집니다. 방향 전환, 동선 교차, 카메라 이동과 표정 반응이 한꺼번에 일어나면 중요한 변화가 묻힙니다. 공개 쇼츠는 만남, 함께 달리는 놀이, 휴식이라는 단순한 진행을 사용해 각 단계가 읽힌 뒤 다음 단계로 넘어갑니다.",
          "한 캐릭터가 움직일 때 다른 캐릭터가 완전히 멈춰야 한다는 뜻은 아닙니다. 작은 반응은 주된 행동을 도울 수 있지만 얼굴을 가리거나 두 몸의 간격을 없애거나, 이유 없이 기존 화면 관계를 뒤집지 않아야 합니다. 18초 안에 몇 가지 동작을 넣었는지보다 한 번 본 뒤 각 캐릭터가 무엇을 했는지 말할 수 있는지가 더 실용적인 기준입니다.",
        ],
        note: "저장소에는 이 쇼츠의 폐기 영상이나 생성 횟수 기록이 없습니다. 따라서 구체적인 실패본을 만들지 않고, 일반적인 위험과 완성 작품에서 확인되는 선택을 구분했습니다.",
      },
      {
        id: "golden-light",
        title: "황금빛 분위기 속에서도 정체성 단서를 남깁니다",
        paragraphs: [
          "황금빛 조명은 정원을 하나의 공간으로 묶지만 두 캐릭터의 구분을 약하게 만들 수도 있습니다. HARU의 크림색 털은 밝은 꽃과 하이라이트에 가깝고, PORI의 살구색 털은 따뜻한 배경색과 가깝습니다. 완성 이미지에서는 갈색 스카프, 초록색 네커치프, 얼굴과 몸의 가장자리가 남아 있어 비슷한 색조 안에서도 각 캐릭터를 찾을 수 있습니다.",
          "나란히 누운 마지막 프레임은 관계를 보여주는 데 특히 유용합니다. 큰 제스처 없이도 같은 방향의 자세, 가까운 거리, 서로 다른 털색과 윤곽이 친밀함을 설명합니다. 앞선 달리기보다 에너지를 낮춘 덕분에 놀이가 어디로 도착했는지도 분명해집니다.",
        ],
        images: [{ src: "/images/shorts/haru/short-003-together.png", alt: "황금빛 꽃밭에서 나란히 쉬는 HARU와 PORI", caption: "마지막 휴식 구도는 각자의 윤곽을 유지하면서 자세와 거리로 친밀함을 보여줍니다.", presentation: "portrait", fit: "contain" }],
      },
      {
        id: "review-checklist",
        title: "다음 두 캐릭터 장면에도 사용할 검토 순서",
        paragraphs: [
          "이 작품에서 가져갈 수 있는 것은 비공개 프롬프트가 아니라 검토 순서입니다. 먼저 첫 화면을 휴대전화 크기로 줄이고 두 캐릭터를 바로 구분할 수 있는지 봅니다. 다음에는 소리를 끄고 각 구간의 주된 행동을 한 문장으로 말해 봅니다. 동선이 교차하거나 몸이 닿는 순간에는 얼굴과 특징적인 소품이 이야기상 필요한 때 가려지지 않는지 확인합니다.",
          "마지막으로 활동적인 구간과 끝 자세를 비교합니다. 모든 구간의 움직임 강도가 같으면 관계보다 활동량만 남기 쉽습니다. HARU와 PORI가 함께 쉬는 마지막 자세는 만남과 달리기가 향한 결과를 보여줍니다. 서로 다른 두 성격이 같은 잔잔한 순간에 도착했다는 것이 이 짧은 장면의 완성점입니다.",
        ],
        bullets: ["휴대전화 크기에서도 두 실루엣을 즉시 구분할 수 있는가", "각 구간에 하나의 주된 행동과 읽기 쉬운 반응이 있는가", "교차 순간에도 얼굴과 스카프, 네커치프가 보이는가", "조명이 털과 배경의 경계를 지우지 않는가", "마지막 자세가 단순한 정지가 아니라 관계를 설명하는가"],
      },
    ],
    faqs: [
      { question: "완성된 HARU와 PORI 쇼츠는 어디에서 볼 수 있나요?", answer: "FourFeetz의 HARU & PORI — A Golden Evening Together 쇼츠 페이지에서 18초 세로 영상을 볼 수 있습니다." },
      { question: "이 장면의 실패본도 공개되어 있나요?", answer: "공개 저장소에는 폐기 영상이나 생성 횟수 기록이 없어, 이 글은 특정 실패를 주장하지 않고 위험 요소를 검토 기준으로 설명합니다." },
      { question: "가장 간단한 두 캐릭터 점검 방법은 무엇인가요?", answer: "휴대전화 크기로 프레임을 멈춘 뒤 두 캐릭터의 실루엣, 위치와 특징적인 단서가 각각 보이는지 먼저 확인합니다." },
    ],
    related: [
      { label: "공개 쇼츠", title: "A Golden Evening Together 보기", href: "/ko/shorts/haru-ep03-best-friends" },
      { label: "관련 캐릭터", title: "HARU 캐릭터 보기", href: "/ko/characters/haru" },
      { label: "관련 캐릭터", title: "PORI 캐릭터 보기", href: "/ko/characters/pori" },
      { label: "관련 제작 기록", title: "동물 캐릭터 움직임을 단순하게 유지하는 이유", href: "/ko/insights/why-we-keep-animal-motions-simple" },
    ],
  },
};
