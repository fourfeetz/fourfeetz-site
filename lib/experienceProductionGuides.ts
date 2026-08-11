import type { ProductionInsight } from "@/lib/productionInsights";
import { haruLunaRainyWindowGuide } from "@/lib/haruLunaRainyWindowInsight";
import { cozyRetrieverKittenInsight } from "@/lib/cozyRetrieverKittenInsight";
import { calmingFireplaceRainInsight } from "@/lib/calmingFireplaceRainInsight";

export const experienceProductionGuideSlugs = [
  "calming-dog-music-puppy-kitten-fireplace-rain",
  "cozy-retriever-kitten-sleep-short",
  "haru-luna-rainy-window-ai-pet-video",
  "why-fourfeetz-starts-animal-shorts-first-shot",
  "oli-swimming-scene-lessons",
  "google-flow-one-action-eight-second-scenes",
  "haru-relaxing-videos-calm-natural",
  "character-consistency-haru-ruru-milo",
] as const;

export type ExperienceProductionGuideSlug = (typeof experienceProductionGuideSlugs)[number];
type Language = "en" | "ko";
type ExperienceProductionGuide = ProductionInsight & {
  heroAlt: string;
  heroFit?: "cover" | "contain";
  heroPosition?: string;
};

const published = "2026-08-06";

const shared = {
  published,
  updated: published,
  category: "Production Guide",
} as const;

const koreanShared = {
  published,
  updated: published,
  category: "제작 가이드",
} as const;

export const experienceProductionGuides: Record<
  ExperienceProductionGuideSlug,
  Record<Language, ExperienceProductionGuide>
> = {
  "calming-dog-music-puppy-kitten-fireplace-rain": calmingFireplaceRainInsight,
  "cozy-retriever-kitten-sleep-short": cozyRetrieverKittenInsight,
  "haru-luna-rainy-window-ai-pet-video": haruLunaRainyWindowGuide,
  "why-fourfeetz-starts-animal-shorts-first-shot": {
    en: {
      ...shared,
      slug: "why-fourfeetz-starts-animal-shorts-first-shot",
      eyebrow: "FourFeetz Production Notes",
      title: "Why FourFeetz Starts Every Animal Short With a First Shot",
      shortTitle: "Why Every Animal Short Starts With a First Shot",
      description:
        "A production account of how FourFeetz uses a native 9:16 First Shot to hold character appearance, lighting and composition together before animal-character motion begins.",
      hero: "/images/insights/production-guides/ai-shorts-9-16-wide.webp",
      heroAlt: "FourFeetz animal characters composed for a vertical-first short production workflow",
      heroPosition: "50% 50%",
      readTime: "10 min read",
      verdict:
        "The First Shot is the visual contract for a FourFeetz Short. Approving identity, light and composition in one 9:16 frame removes avoidable uncertainty before motion introduces new risks.",
      tags: ["First Shot", "AI Shorts", "9:16 Video", "Character Consistency"],
      keywords: [
        "animal character First Shot",
        "9:16 AI Shorts workflow",
        "vertical character consistency",
        "FourFeetz production",
      ],
      tools: ["AI Image", "AI Video"],
      characters: ["HARU", "RURU", "MILO"],
      popularity: 100,
      sections: [
        {
          id: "what-we-tested",
          title: "What We Tested: Motion With and Without a First Shot",
          paragraphs: [
            "FourFeetz tested animal-character scenes by comparing two starting conditions. In one, motion began from an approved 9:16 image. In the other, the scene depended more heavily on a written description to establish the character and the setting at the same time. The second approach could still produce an attractive clip, but the opening face, fur tone, background arrangement and light direction were more likely to become new interpretations rather than continuations of an approved design.",
            "The useful lesson was not that a First Shot guarantees a perfect result. It was that the frame makes the production question specific. Instead of asking whether a clip generally looks good, the review can ask whether HARU still has the same visible age and proportions, whether the light comes from the approved direction, and whether the action remains inside the intended vertical corridor. That makes rejection and revision faster and more consistent.",
          ],
          note:
            "FourFeetz treats the First Shot as review evidence, not as a public copy of the studio’s private character system or master prompt.",
        },
        {
          id: "what-went-wrong",
          title: "What Went Wrong Without a Stable Visual Anchor",
          paragraphs: [
            "When too many scene facts had to be invented during motion, small differences accumulated. A face could become older or narrower, cream fur could shift warmer or grayer, and a quiet room could gain different furniture or window geometry. These changes were not always dramatic in a single frame. They became obvious when the clip was placed beside the preceding shot or compared with the character page.",
            "Animal characters add a second difficulty because ears, paws, tails and fur boundaries are part of both identity and motion. A vague starting pose may leave a paw hidden or place the body too close to the edge. Once movement begins, the generation must solve anatomy and framing simultaneously. A polished camera move cannot compensate if the character’s recognizable silhouette has already changed.",
          ],
          bullets: [
            "Face drift: age, muzzle width, eye spacing or ear placement changes during the shot.",
            "Color drift: fur and accessory colors react differently because the lighting baseline was not fixed.",
            "Set drift: windows, furniture, paths or horizon lines are reconstructed between related scenes.",
          ],
        },
        {
          id: "what-worked",
          title: "What Worked: Approve Identity, Light and Composition Together",
          paragraphs: [
            "The most useful First Shots were not simply clean portraits. They showed the character at the size used in the final Short, with enough room for the planned action and a background that could remain stable. FourFeetz checks the face and silhouette first, then the visible lighting direction, ground contact, screen position and safe space above ears and below moving paws.",
            "HARU Shorts use this frame to protect young proportions and a readable face before a restrained action begins. The same logic applies to other FourFeetz characters, but the review changes with the body type: a long tail needs room to remain visible, a compact animal needs clear ground contact, and a character with a small accessory needs a scale where that detail can survive phone viewing. The frame establishes those priorities without publishing the internal character bible.",
          ],
          steps: [
            "Approve one native 9:16 image at the intended viewing scale.",
            "Check identity, lighting direction, ground contact and the action corridor.",
            "Write a concise motion instruction that continues the approved frame instead of redesigning it.",
            "Compare the opening, middle and final video frames with the First Shot.",
          ],
        },
        {
          id: "production-criteria",
          title: "The Practical Criteria Used for FourFeetz Shorts",
          paragraphs: [
            "A First Shot is approved only when it can support motion. A beautiful pose that leaves no room for a turn, hides important paws or places the face behind interface controls is not yet a production-ready frame. FourFeetz reviews the image at phone size and asks where the character can move without forcing a camera correction or leaving the 9:16 safe area.",
            "The frame must also agree with adjacent material. If a Short follows an existing scene, screen direction, apparent character size, time of day and environmental structure are checked before generation. This does not remove variation; expression, pose and camera distance can still change. It keeps those changes inside the same recognizable character and story world.",
          ],
          table: {
            title: "First Shot approval questions",
            headers: ["Layer", "Review question", "Reason"],
            rows: [
              ["Character", "Is the face and silhouette immediately recognizable?", "Motion should not begin from an identity compromise"],
              ["Lighting", "Is the source and color of light readable?", "Later frames need a stable visual direction"],
              ["Composition", "Can the action remain inside the 9:16 safe area?", "Editing cannot restore cropped anatomy"],
              ["Environment", "Are important background lines and objects settled?", "Extensions need continuity evidence"],
            ],
          },
        },
        {
          id: "practical-takeaway",
          title: "Practical Takeaway: Make the First Shot Earn Its Name",
          paragraphs: [
            "The First Shot is valuable because it converts an abstract idea into a frame the entire production can challenge. It should be rejected if identity is weak, accepted only when it supports the intended action, and kept beside the video during review. Starting motion earlier may feel faster, but unclear visual decisions often return as repeated generations and harder edits.",
            "FourFeetz still expects imperfect video results after approval. Limbs can drift, a face can change late, or background motion can become too strong. The difference is that the team can identify where the result departed from the approved evidence and revise the smallest failing layer. That discipline is the practical value of starting every animal Short with a First Shot.",
          ],
        },
      ],
      faqs: [
        { question: "Does a First Shot guarantee character consistency?", answer: "No. It provides a stable visual reference and clearer rejection criteria, but the opening, middle and final video frames still require review." },
        { question: "Why does FourFeetz create the First Shot in 9:16?", answer: "The final viewing shape determines character scale, safe areas and movement space, so the frame is designed for Shorts before motion begins." },
        { question: "Is the First Shot the same as a character sheet?", answer: "No. A character sheet describes broader identity evidence; a First Shot commits that character to one specific environment, light and composition." },
      ],
      related: [
        { label: "Related Character", title: "Meet HARU", href: "/characters/haru" },
        { label: "Published Short", title: "HARU First Journey — Vertical Cut", href: "/shorts/haru-first-journey-vertical-cut" },
        { label: "Published Short", title: "RURU Tries to Be Scary", href: "/shorts/ruru-tries-to-be-scary" },
        { label: "Related Guide", title: "Create AI Shorts in 9:16 From the Start", href: "/insights/create-ai-shorts-9-16-from-start" },
      ],
    },
    ko: {
      ...koreanShared,
      slug: "why-fourfeetz-starts-animal-shorts-first-shot",
      eyebrow: "FourFeetz 제작 노트",
      title: "FourFeetz가 모든 동물 캐릭터 쇼츠를 First Shot으로 시작하는 이유",
      shortTitle: "동물 캐릭터 쇼츠를 First Shot으로 시작하는 이유",
      description:
        "FourFeetz가 동물 캐릭터 영상의 움직임을 만들기 전에 9:16 First Shot으로 외형, 조명과 구도를 함께 고정하는 실제 제작 방식을 정리합니다.",
      hero: "/images/insights/production-guides/ai-shorts-9-16-wide.webp",
      heroAlt: "세로형 쇼츠 제작 구도에 배치된 FourFeetz 동물 캐릭터",
      heroPosition: "50% 50%",
      readTime: "약 10분",
      verdict:
        "First Shot은 FourFeetz 쇼츠의 시각적 계약서입니다. 하나의 9:16 프레임에서 정체성, 빛과 구도를 먼저 승인하면 움직임이 시작된 뒤 생길 불필요한 변수를 줄일 수 있습니다.",
      tags: ["First Shot", "AI 쇼츠", "9:16 영상", "캐릭터 일관성"],
      keywords: ["동물 캐릭터 First Shot", "9:16 AI 쇼츠 제작", "세로 영상 캐릭터 일관성", "FourFeetz 제작"],
      tools: ["AI 이미지", "AI 영상"],
      characters: ["HARU", "RURU", "MILO"],
      popularity: 100,
      sections: [
        {
          id: "what-we-tested",
          title: "실제로 테스트한 것: First Shot이 있을 때와 없을 때",
          paragraphs: [
            "FourFeetz 제작 과정에서는 승인된 9:16 이미지에서 움직임을 시작한 경우와, 글로 된 설명이 캐릭터와 환경을 동시에 정하도록 맡긴 경우를 비교했습니다. 후자도 보기 좋은 장면이 나올 수 있었지만 첫 얼굴, 털 색, 배경 배치와 빛의 방향이 승인된 디자인의 연속이라기보다 새로운 해석이 될 가능성이 더 컸습니다.",
            "First Shot이 모든 문제를 막아준다는 뜻은 아닙니다. 대신 검토 질문을 구체적으로 만들어 주었습니다. 영상이 막연히 좋아 보이는지 묻는 대신 HARU의 나이와 비율이 같은지, 빛이 정한 방향에서 오는지, 행동이 세로형 이동 범위 안에 남는지 확인할 수 있었습니다. 덕분에 거절 이유와 다음 수정 범위도 명확해졌습니다.",
          ],
          note: "FourFeetz는 First Shot을 검토 근거로 사용하며, 비공개 캐릭터 시스템이나 마스터 프롬프트를 공개하는 자료로 사용하지 않습니다.",
        },
        {
          id: "what-went-wrong",
          title: "문제가 생긴 방식: 안정적인 시각 기준 없이 움직임 시작하기",
          paragraphs: [
            "움직임을 만드는 동안 장면의 여러 조건까지 새로 결정하게 하면 작은 차이가 누적됐습니다. 얼굴이 더 나이 들거나 좁아지고, 크림색 털이 더 노랗거나 회색으로 바뀌며, 조용한 방의 가구와 창문 구조가 달라지기도 했습니다. 한 프레임에서는 작아 보이는 차이도 앞 장면이나 캐릭터 페이지와 나란히 놓으면 분명하게 드러났습니다.",
            "동물 캐릭터는 귀, 발, 꼬리와 털의 경계가 외형이면서 동시에 움직임의 일부라는 어려움도 있습니다. 시작 자세가 불분명하면 발이 이미 가려져 있거나 몸이 화면 가장자리에 너무 가까울 수 있습니다. 이 상태에서 영상이 시작되면 신체 구조와 구도를 동시에 해결해야 하며, 화려한 카메라 이동도 달라진 실루엣을 되돌릴 수는 없습니다.",
          ],
          bullets: [
            "얼굴 변화: 나이, 주둥이 폭, 눈 간격이나 귀 위치가 달라집니다.",
            "색 변화: 조명 기준이 없어 털과 소품 색이 장면마다 다르게 반응합니다.",
            "배경 변화: 창문, 가구, 길이나 수평선이 관련 장면 사이에서 다시 구성됩니다.",
          ],
        },
        {
          id: "what-worked",
          title: "효과가 있었던 방법: 외형·조명·구도를 한 번에 승인하기",
          paragraphs: [
            "유용한 First Shot은 깨끗한 캐릭터 초상화에 그치지 않았습니다. 최종 쇼츠에서 사용할 크기로 캐릭터를 보여주고, 행동할 공간과 유지 가능한 배경을 함께 담아야 했습니다. FourFeetz는 얼굴과 실루엣을 먼저 확인한 뒤 빛의 방향, 바닥과 발의 접촉, 화면 속 위치, 귀 위와 움직이는 발 아래의 여백을 점검합니다.",
            "HARU 쇼츠에서는 어린 체형과 알아보기 쉬운 얼굴을 지킨 뒤 작은 행동을 시작합니다. 다른 캐릭터에도 같은 원칙을 적용하지만 몸 형태에 따라 검토 기준은 달라집니다. 긴 꼬리는 화면 안에 남을 공간이 필요하고, 작은 동물은 바닥 접촉이 분명해야 하며, 소품이 중요한 캐릭터는 휴대전화에서도 그 특징이 보이는 크기가 필요합니다.",
          ],
          steps: [
            "최종 시청 크기를 고려한 9:16 이미지 하나를 승인합니다.",
            "정체성, 조명 방향, 바닥 접촉과 행동 범위를 확인합니다.",
            "승인된 화면을 다시 설명하지 않고 다음 행동만 간결하게 지시합니다.",
            "영상의 시작, 중간과 마지막을 First Shot과 비교합니다.",
          ],
        },
        {
          id: "production-criteria",
          title: "FourFeetz 쇼츠에 적용한 실무 승인 기준",
          paragraphs: [
            "First Shot은 실제 움직임을 감당할 수 있어야 승인됩니다. 자세가 아름다워도 움직일 공간이 없거나 중요한 발이 가려지고 얼굴이 플랫폼 UI 영역에 놓이면 아직 제작 가능한 화면이 아닙니다. 휴대전화 크기로 줄여 본 뒤 카메라 보정 없이 캐릭터가 9:16 안전 영역 안에서 행동할 수 있는지 확인합니다.",
            "앞뒤 장면과의 관계도 중요합니다. 기존 장면에 이어지는 쇼츠라면 화면 방향, 캐릭터의 상대적 크기, 시간대와 배경 구조를 영상 생성 전에 비교합니다. 표정과 자세, 카메라 거리는 달라질 수 있지만 그 변화가 같은 캐릭터와 같은 이야기 세계 안에서 일어나도록 기준을 세웁니다.",
          ],
          table: {
            title: "First Shot 승인 질문",
            headers: ["항목", "확인 질문", "이유"],
            rows: [
              ["캐릭터", "얼굴과 실루엣을 즉시 알아볼 수 있는가?", "정체성이 약한 상태에서 움직임을 시작하지 않습니다"],
              ["조명", "광원의 방향과 색을 읽을 수 있는가?", "이후 프레임이 이어받을 시각 방향이 필요합니다"],
              ["구도", "행동이 9:16 안전 영역 안에 남는가?", "편집으로 잘린 신체를 복원할 수 없습니다"],
              ["환경", "중요한 배경선과 물체가 정해졌는가?", "Extend에도 연속성 근거가 필요합니다"],
            ],
          },
        },
        {
          id: "practical-takeaway",
          title: "실전 핵심 정리: 이름뿐인 First Shot으로 끝내지 않기",
          paragraphs: [
            "First Shot의 가치는 추상적인 아이디어를 제작 전체가 검토할 수 있는 한 장의 화면으로 바꾸는 데 있습니다. 정체성이 약하면 거절하고, 행동을 담을 수 있을 때만 승인하며, 영상 검토에서도 옆에 두고 비교해야 합니다. 움직임부터 빠르게 시작하면 처음에는 시간을 아낀 것처럼 보여도 불명확한 결정이 반복 생성과 어려운 편집으로 돌아올 수 있습니다.",
            "승인 뒤에도 완벽하지 않은 결과는 생깁니다. 발이 달라지거나 후반부 얼굴이 변하고 배경 움직임이 과해질 수 있습니다. 다만 어느 지점에서 승인된 기준을 벗어났는지 찾고 실패한 범위만 수정할 수 있습니다. 이것이 FourFeetz가 모든 동물 캐릭터 쇼츠를 First Shot으로 시작하는 실무적인 이유입니다.",
          ],
        },
      ],
      faqs: [
        { question: "First Shot이 있으면 캐릭터 일관성이 항상 유지되나요?", answer: "아닙니다. 안정적인 비교 기준을 제공하지만 영상의 시작, 중간과 마지막 프레임은 별도로 검토해야 합니다." },
        { question: "왜 9:16으로 First Shot을 만드나요?", answer: "최종 시청 비율이 캐릭터 크기, 안전 영역과 이동 공간을 결정하므로 움직임을 만들기 전에 쇼츠 화면으로 설계합니다." },
        { question: "First Shot과 캐릭터 시트는 같은 자료인가요?", answer: "아닙니다. 캐릭터 시트는 넓은 정체성 근거이고 First Shot은 특정 환경, 조명과 구도에 캐릭터를 배치한 장면 기준입니다." },
      ],
      related: [
        { label: "관련 캐릭터", title: "HARU 캐릭터 보기", href: "/ko/characters/haru" },
        { label: "공개 쇼츠", title: "HARU First Journey — Vertical Cut", href: "/ko/shorts/haru-first-journey-vertical-cut" },
        { label: "공개 쇼츠", title: "RURU Tries to Be Scary", href: "/ko/shorts/ruru-tries-to-be-scary" },
        { label: "관련 가이드", title: "AI 쇼츠를 처음부터 9:16으로 제작하는 이유", href: "/ko/insights/create-ai-shorts-9-16-from-start" },
      ],
    },
  },
  "oli-swimming-scene-lessons": {
    en: {
      ...shared,
      slug: "oli-swimming-scene-lessons",
      eyebrow: "FourFeetz Production Case Study",
      title: "What We Learned From OLI’s Swimming Scene",
      shortTitle: "What We Learned From OLI’s Swimming Scene",
      description:
        "A candid FourFeetz case study on unstable legs and body shape in OLI’s swimming and backstroke tests, and why simpler action produced a more convincing scene.",
      hero: "/images/insights/production/oli-creek-first-shot.png",
      heroAlt: "OLI standing on a mossy rock beside a sunlit forest stream in the approved First Shot",
      heroPosition: "50% 48%",
      readTime: "11 min read",
      verdict:
        "OLI’s swimming test improved when the shot stopped asking for a complete athletic performance. A stable view and one readable action protected the character better than complex full-body motion.",
      tags: ["OLI", "Animal Motion", "AI Video Failures", "Production Review"],
      keywords: ["OLI swimming scene", "AI animal motion", "otter animation", "AI video body deformation"],
      tools: ["AI Video", "Video Editing"],
      characters: ["OLI"],
      popularity: 99,
      sections: [
        {
          id: "what-we-tested",
          title: "What We Tested: Swimming and Backstroke as Full-Body Actions",
          paragraphs: [
            "OLI is an otter, so swimming feels like an obvious action for the character. The production challenge was that an audience also knows how an otter should move through water. The first tests asked the scene to coordinate the head, spine, front paws, rear legs, tail, water surface and forward travel within one short clip. Backstroke added a second layer because the belly, legs and face remained exposed while the body rotated and floated.",
            "The tests were reviewed as character performances, not as isolated technical demos. FourFeetz compared the opening reference with the middle and final frames, slowed the motion around kicks and turns, and watched the silhouette against the water. That review showed that a pleasant first second could hide unstable anatomy later in the take.",
          ],
          images: [
            {
              src: "/images/insights/production/oli-backstroke-test.png",
              alt: "OLI floating on his back in a clear forest stream during a FourFeetz swimming motion test",
              caption: "Vertical production image from OLI’s swimming and backstroke test. Keeping the full body visible made it possible to review leg position, torso shape and contact with the water.",
              fit: "contain",
              presentation: "portrait",
            },
          ],
        },
        {
          id: "what-went-wrong",
          title: "What Went Wrong: Legs, Body Shape and Water Contact",
          paragraphs: [
            "The most visible problem was the rear-leg motion. During stronger kicks, a leg could change length, merge with the body or move in a rhythm that did not match forward travel. In the backstroke tests, the torso sometimes became too long or flat while the legs searched for a plausible position. The result remained recognizable as an otter in individual frames but stopped feeling like the same physical OLI in motion.",
            "Water made those errors harder to judge and easier to overlook. Reflections and splashes could briefly hide a broken contact point, while an attractive ripple suggested realism that the body mechanics did not support. FourFeetz therefore reviewed the character silhouette separately from the water effects. If the body was not convincing without the splash, the shot was not accepted because of the splash.",
          ],
          bullets: [
            "Rear legs changed length or attached at an unclear point during stronger kicks.",
            "The torso stretched or flattened when the shot combined rotation, floating and travel.",
            "Splashes and reflections hid short anatomy failures at normal playback speed.",
            "The face remained readable while the body stopped matching the approved OLI proportions.",
          ],
        },
        {
          id: "what-worked",
          title: "What Worked: One Simple Action in a Stable Composition",
          paragraphs: [
            "The more reliable version reduced the performance to one readable aquatic action. Instead of asking OLI to turn, accelerate, roll onto the back and kick across the frame, the shot held a stable angle and limited the movement to a gentle float, a short paddle or a restrained change in gaze. The water still communicated the setting, but it no longer competed with several simultaneous body decisions.",
            "A stable camera also made quality review honest. With less orbiting or tracking, body length, leg placement and the orange pouch could be compared from one moment to the next. The calmer result was less spectacular on paper, yet it felt more like a deliberate OLI performance and connected more cleanly to neighboring shots.",
          ],
          steps: [
            "Choose the one aquatic action the audience must understand.",
            "Use a side, three-quarter or gently elevated view that keeps the body silhouette readable.",
            "Keep the camera fixed while testing anatomy and water contact.",
            "Add a second small action only after the first remains stable through the full clip.",
          ],
        },
        {
          id: "revision",
          title: "How the Unsuccessful Takes Were Revised",
          paragraphs: [
            "Not every failed take required the same response. If the body remained stable and a late kick became awkward, trimming the ending could preserve the usable action. If the legs changed throughout the clip or the torso no longer matched OLI, the shot was replaced. A cut to a separately approved angle was more honest than hiding a structural problem with a longer dissolve.",
            "The revision notes described the first visible failure rather than calling the whole video strange. That distinction mattered. A camera problem could be solved by locking the frame; an action problem by removing a turn; an anatomy problem by generating a new source. Changing one relevant layer at a time provided clearer evidence than rewriting the entire scene description.",
          ],
          table: {
            title: "OLI swimming review decisions",
            headers: ["Observed result", "Decision", "Reason"],
            rows: [
              ["Stable body, late awkward kick", "Trim and retest the edit", "The usable action remains intact"],
              ["Legs drift through most of the clip", "Replace the shot", "Editing cannot restore anatomy"],
              ["Backstroke changes the torso shape", "Redesign as a simpler float", "The full-body request is carrying too much risk"],
              ["Good body, excessive camera motion", "Retest with a locked camera", "The performance needs a stable review baseline"],
            ],
          },
        },
        {
          id: "practical-takeaway",
          title: "Practical Takeaway: Design Animal Action for Reviewability",
          paragraphs: [
            "An action scene is not successful because it contains the most movement. It succeeds when the audience can read the action and continue believing in the character. For an animal body, that means preserving the silhouette, believable contact points and a consistent scale while the environment responds in a controlled way.",
            "OLI’s tests led FourFeetz to ask a simple question before generation: can the essential body relationship be inspected throughout this shot? If the answer is no because the camera spins, limbs overlap and water effects cover the body, the scene is simplified before production. That choice saves time and usually creates a calmer, more credible result.",
          ],
          bullets: [
            "Keep the full body visible when limb mechanics are the main risk.",
            "Limit the shot to one primary action and no more than one small supporting action.",
            "Review at normal speed, reduced speed and on representative still frames.",
            "Do not accept attractive water effects as a substitute for stable character anatomy.",
          ],
        },
      ],
      faqs: [
        { question: "Why was OLI’s backstroke harder than a simple float?", answer: "Backstroke exposed the torso and legs while combining rotation, buoyancy and travel, giving the generation more body relationships to solve at once." },
        { question: "Can editing repair distorted legs?", answer: "A late isolated error may be trimmed, but continuing changes in leg length, attachment or torso shape normally require a replacement shot." },
        { question: "Should every swimming shot use a fixed camera?", answer: "No, but a fixed camera is a useful baseline when anatomy and character consistency are the highest production risks." },
      ],
      related: [
        { label: "Related Character", title: "Meet OLI", href: "/characters/oli" },
        { label: "Related Guide", title: "Common AI Video Generation Failures", href: "/insights/common-ai-video-generation-failures" },
        { label: "Related Guide", title: "Reduce Character Inconsistency", href: "/insights/reduce-character-inconsistency-ai-video" },
        { label: "All Characters", title: "Explore FourFeetz Characters", href: "/characters" },
      ],
    },
    ko: {
      ...koreanShared,
      slug: "oli-swimming-scene-lessons",
      eyebrow: "FourFeetz 제작 사례",
      title: "OLI 수영 장면에서 배운 것",
      shortTitle: "OLI 수영 장면에서 배운 것",
      description:
        "OLI의 수영과 배영 테스트에서 다리와 신체 형태가 어색해졌던 문제, 그리고 단순한 행동과 안정된 구도가 더 설득력 있었던 이유를 기록합니다.",
      hero: "/images/insights/production/oli-creek-first-shot.png",
      heroAlt: "햇살이 드는 숲속 개울가의 이끼 낀 바위 위에 서 있는 OLI First Shot",
      heroPosition: "50% 48%",
      readTime: "약 11분",
      verdict:
        "OLI 수영 장면은 완전한 운동 동작을 한 번에 요구하지 않을 때 좋아졌습니다. 안정된 시점과 하나의 읽기 쉬운 행동이 복잡한 전신 움직임보다 캐릭터를 잘 지켰습니다.",
      tags: ["OLI", "동물 움직임", "AI 영상 실패", "제작 검토"],
      keywords: ["OLI 수영 장면", "AI 동물 움직임", "수달 애니메이션", "AI 영상 신체 변형"],
      tools: ["AI 영상", "영상 편집"],
      characters: ["OLI"],
      popularity: 99,
      sections: [
        {
          id: "what-we-tested",
          title: "실제로 테스트한 것: 전신 수영과 배영 동작",
          paragraphs: [
            "OLI는 수달이기 때문에 수영은 자연스럽게 떠올릴 수 있는 행동입니다. 하지만 시청자도 수달이 물에서 어떻게 움직여야 하는지 알고 있다는 점이 제작 난도를 높였습니다. 첫 테스트는 짧은 장면 안에서 머리, 척추, 앞발, 뒷다리, 꼬리, 수면과 전진을 함께 움직이도록 구성했습니다. 배영은 몸을 돌린 상태에서 배와 다리, 얼굴이 모두 보인다는 어려움까지 더해졌습니다.",
            "이 테스트는 기술 시연이 아니라 OLI의 연기로 검토했습니다. 시작 기준 이미지와 중간·마지막 프레임을 비교하고, 발차기와 회전 구간을 느리게 재생하며, 물을 배경으로 한 실루엣을 따로 확인했습니다. 첫 1초가 자연스러워도 뒤에서 신체 구조가 무너질 수 있다는 점이 분명했습니다.",
          ],
          images: [
            {
              src: "/images/insights/production/oli-backstroke-test.png",
              alt: "FourFeetz 수영 동작 테스트에서 맑은 숲속 개울에 배영 자세로 떠 있는 OLI",
              caption: "OLI 수영·배영 테스트의 세로형 제작 이미지입니다. 전신을 화면에 유지해 다리 위치, 몸통 형태와 물의 접촉을 함께 검토했습니다.",
              fit: "contain",
              presentation: "portrait",
            },
          ],
        },
        {
          id: "what-went-wrong",
          title: "문제가 생긴 부분: 다리 움직임·몸 형태·물과의 접촉",
          paragraphs: [
            "가장 눈에 띈 문제는 뒷다리였습니다. 강하게 발을 찰 때 다리 길이가 달라지거나 몸과 합쳐지고, 전진 속도와 맞지 않는 리듬으로 움직이는 결과가 나왔습니다. 배영에서는 회전과 부유를 함께 해결하는 동안 몸통이 너무 길거나 납작해지기도 했습니다. 한 프레임에서는 수달로 보이지만 움직임 전체에서는 같은 OLI의 몸으로 느껴지지 않았습니다.",
            "물은 오류를 숨기면서 판단을 어렵게 했습니다. 반사와 물보라가 잘못된 접촉 지점을 잠깐 가렸고, 보기 좋은 물결이 실제보다 더 자연스러운 인상을 만들었습니다. FourFeetz는 물 효과와 캐릭터 실루엣을 분리해 검토했습니다. 물보라를 제외했을 때 몸이 설득력 없다면 물보라가 좋다는 이유로 장면을 승인하지 않았습니다.",
          ],
          bullets: [
            "강한 발차기에서 뒷다리 길이와 몸에 붙는 위치가 달라졌습니다.",
            "회전, 부유와 전진을 함께 요구하면 몸통이 늘어나거나 납작해졌습니다.",
            "물보라와 반사가 짧은 신체 오류를 정상 속도에서 가렸습니다.",
            "얼굴은 맞아도 몸이 승인된 OLI 비율에서 벗어나는 결과가 있었습니다.",
          ],
        },
        {
          id: "what-worked",
          title: "효과가 있었던 방법: 안정된 구도에서 한 가지 행동만 보여주기",
          paragraphs: [
            "더 안정적인 버전은 물속 행동을 하나로 줄였습니다. OLI가 방향을 바꾸고 속도를 높이며 배영으로 돌아누워 화면을 가로지르게 하지 않고, 고정된 각도에서 천천히 뜨기, 짧게 물을 젓기 또는 시선을 조금 바꾸는 행동만 사용했습니다. 물은 장소를 보여주되 여러 신체 결정을 동시에 요구하지 않게 했습니다.",
            "카메라를 안정시키면 검토도 솔직해졌습니다. 회전과 추적을 줄인 상태에서 몸 길이, 다리 위치와 주황색 파우치가 처음부터 끝까지 같은지 비교할 수 있었습니다. 설명만 보면 덜 화려한 장면이지만 OLI가 의도적으로 행동하는 느낌이 강했고 앞뒤 장면에도 더 깨끗하게 이어졌습니다.",
          ],
          steps: [
            "시청자가 반드시 이해해야 할 물속 행동 하나를 정합니다.",
            "몸의 실루엣이 보이는 측면이나 3/4 시점을 선택합니다.",
            "신체와 물의 접촉을 확인하는 동안 카메라를 고정합니다.",
            "첫 행동이 전체 클립에서 안정된 뒤 작은 보조 행동 하나만 추가합니다.",
          ],
        },
        {
          id: "revision",
          title: "완벽하지 않았던 결과를 수정한 기준",
          paragraphs: [
            "실패한 결과를 모두 같은 방식으로 처리하지는 않았습니다. 몸이 안정적이고 마지막 발차기만 어색하면 끝부분을 잘라 사용 가능한 행동을 살릴 수 있었습니다. 반대로 다리가 영상 전체에서 달라지거나 몸통이 OLI의 형태를 잃으면 장면을 교체했습니다. 긴 디졸브로 구조 문제를 숨기기보다 별도로 승인한 각도로 컷을 나누는 편이 더 정직했습니다.",
            "수정 기록에는 영상 전체가 이상하다고 적는 대신 처음 보인 실패를 적었습니다. 카메라 문제는 고정 구도로, 행동 문제는 회전 제거로, 신체 문제는 새로운 원본 제작으로 대응했습니다. 장면 설명 전체를 다시 쓰지 않고 관련 조건 하나만 바꾸면 어느 선택이 실제 개선을 만들었는지 확인하기 쉬웠습니다.",
          ],
          table: {
            title: "OLI 수영 장면의 수정 판단",
            headers: ["확인된 결과", "선택", "이유"],
            rows: [
              ["몸은 안정적이고 마지막 발차기만 어색함", "자른 뒤 편집 재확인", "사용 가능한 행동이 남습니다"],
              ["영상 대부분에서 다리가 달라짐", "장면 교체", "편집으로 신체 구조를 복원할 수 없습니다"],
              ["배영 중 몸통 형태가 바뀜", "단순한 부유 동작으로 재설계", "전신 동작의 부담이 너무 큽니다"],
              ["몸은 좋지만 카메라 이동이 과함", "고정 카메라로 다시 테스트", "안정적인 검토 기준이 필요합니다"],
            ],
          },
        },
        {
          id: "practical-takeaway",
          title: "실전 핵심 정리: 검토할 수 있는 동물 액션 설계하기",
          paragraphs: [
            "액션 장면은 움직임이 많다고 성공하는 것이 아닙니다. 시청자가 행동을 이해하면서 같은 캐릭터라고 계속 믿을 수 있어야 합니다. 동물 신체에서는 실루엣, 설득력 있는 접촉 지점과 일정한 크기를 지키고 환경 반응은 통제된 범위 안에 두는 것이 중요했습니다.",
            "OLI 테스트 이후 FourFeetz는 생성 전에 핵심 신체 관계를 장면 전체에서 확인할 수 있는지 묻습니다. 카메라가 회전하고 다리가 겹치며 물 효과가 몸을 가려 확인하기 어렵다면 제작 전에 행동을 단순화합니다. 이 선택이 반복 생성을 줄이고 더 차분하면서 믿을 수 있는 결과를 만들었습니다.",
          ],
          bullets: [
            "팔다리 움직임이 가장 큰 위험이면 전신이 보이게 구성합니다.",
            "주된 행동 하나와 작은 보조 행동 하나까지만 사용합니다.",
            "정상 속도, 느린 속도와 대표 프레임에서 각각 확인합니다.",
            "좋은 물 효과를 불안정한 신체 구조의 대체물로 승인하지 않습니다.",
          ],
        },
      ],
      faqs: [
        { question: "OLI의 배영이 단순히 뜨는 장면보다 어려웠던 이유는 무엇인가요?", answer: "몸통과 다리가 모두 보이는 상태에서 회전, 부력과 전진을 함께 해결해야 했기 때문입니다." },
        { question: "편집으로 어색한 다리를 고칠 수 있나요?", answer: "끝부분의 짧은 오류는 자를 수 있지만 다리 길이, 연결 위치나 몸통 형태가 계속 바뀌면 장면을 교체해야 합니다." },
        { question: "수영 장면은 항상 카메라를 고정해야 하나요?", answer: "항상 그렇지는 않지만 신체 구조와 정체성이 가장 큰 위험일 때 고정 카메라가 유용한 기준이 됩니다." },
      ],
      related: [
        { label: "관련 캐릭터", title: "OLI 캐릭터 보기", href: "/ko/characters/oli" },
        { label: "관련 가이드", title: "AI 영상 생성 실패 사례", href: "/ko/insights/common-ai-video-generation-failures" },
        { label: "관련 가이드", title: "캐릭터 일관성 문제 줄이기", href: "/ko/insights/reduce-character-inconsistency-ai-video" },
        { label: "캐릭터 전체", title: "FourFeetz 캐릭터 둘러보기", href: "/ko/characters" },
      ],
    },
  },
  "google-flow-one-action-eight-second-scenes": {
    en: {
      ...shared,
      slug: "google-flow-one-action-eight-second-scenes",
      eyebrow: "FourFeetz Workflow",
      title: "Our Google Flow Workflow: One Clear Action per 8-Second Scene",
      shortTitle: "One Clear Action per 8-Second Google Flow Scene",
      description:
        "How FourFeetz plans one readable action for the first eight seconds, holds the camera steady and uses Extend only after the final pose can support the next beat.",
      hero: "/images/insights/production/google-flow-studio-haru.png",
      heroAlt: "HARU in a FourFeetz Google Flow production workspace illustration",
      heroPosition: "50% 50%",
      readTime: "12 min read",
      verdict:
        "Google Flow became more dependable for FourFeetz when each eight-second scene had one destination. Extend then continued a stable performance instead of rescuing an overloaded first clip.",
      tags: ["Google Flow", "Extend", "8-Second Scene", "AI Video Workflow"],
      keywords: ["Google Flow workflow", "8 second AI video", "Google Flow Extend", "one action video prompt"],
      tools: ["Google Flow", "CapCut"],
      characters: ["HARU", "RURU", "OLI"],
      popularity: 100,
      sections: [
        {
          id: "what-we-tested",
          title: "What We Tested: One Long Performance Versus One Clear Action",
          paragraphs: [
            "Early scene plans often read well as a sentence: a character enters, notices an object, turns, reacts and moves toward a new destination. Inside an eight-second generation, however, that sentence becomes several anatomy, timing and camera problems. FourFeetz compared those overloaded plans with scenes built around one observable action and a clear final pose.",
            "The simpler scene did not have to be motionless. HARU could take a few careful steps while breathing and blinking, or RURU could peek out and make one small retreat. The difference was that every supporting movement belonged to the same story beat. The final second no longer had to rush through an unfinished reaction merely to satisfy the written list of events.",
          ],
        },
        {
          id: "what-went-wrong",
          title: "What Went Wrong: Too Many Body and Camera Changes",
          paragraphs: [
            "When a scene combined a large posture change, travel across the frame and a camera move, legs and paws were more likely to lose structure. Faces could also drift during a fast turn or after a brief exit from the composition. Even when the middle looked energetic, the last frame often landed on an unbalanced pose that was difficult for Extend to continue.",
            "Unplanned camera motion made the same problem harder to diagnose. A push-in or orbit changed character scale, viewing angle, background geometry and light at once. Stabilizing the finished clip could reduce shake, but it could not restore the original body proportions or reconstruct the environment that had changed during the move.",
          ],
          bullets: [
            "Several story beats competed for the same eight seconds.",
            "Large turns and travel increased paw, leg and face drift.",
            "The last pose was rushed or physically unbalanced.",
            "Camera movement hid the first point where continuity failed.",
          ],
        },
        {
          id: "what-worked",
          title: "What Worked: Lock the Camera and Give the Scene One Destination",
          paragraphs: [
            "FourFeetz now defines the first eight seconds with one primary action, one end state and a restrained camera. A character may perform the action once or repeat a small motion twice when that repetition is natural, but the shot does not introduce a second major event. The fixed or gently controlled camera leaves more of the generation’s effort available for the character and makes the result easier to compare with the First Shot.",
            "The action is written as a continuation of visible evidence. The approved environment, light and character appearance are not reinvented in a long block of new description. The instruction identifies what happens next, what remains still and where the performance should settle. This protects continuity without exposing the studio’s private master prompts or internal settings.",
          ],
          steps: [
            "Describe one action that can be recognized without captions.",
            "Choose the stable pose or quiet state that should end the first eight seconds.",
            "Keep the camera fixed unless its movement is the main story action.",
            "Review the final second before deciding whether Extend is appropriate.",
          ],
        },
        {
          id: "extend",
          title: "How Extend Is Used After the First Eight Seconds",
          paragraphs: [
            "Extend works best when the last frame contains usable evidence: a balanced body, a readable face, visible limbs and a camera that has completed its move. The next instruction continues the same action or begins one modest follow-up beat. It does not ask for a new location, a dramatic angle change and a different body pose at the same time.",
            "The join is checked at normal speed, without sound and frame by frame. FourFeetz compares face, age, ears, paws, accessories, background lines, shadow direction and camera speed across the handoff. If Extend returns a smooth motion with a different character, the take is rejected. Visual continuity is part of the performance, not a finishing detail.",
          ],
          table: {
            title: "Extend decision guide",
            headers: ["End of first clip", "Next step", "Reason"],
            rows: [
              ["Balanced pose, same action continues", "Use Extend", "The last frame can support continuation"],
              ["Large posture change is unfinished", "Regenerate or trim first", "Extend would inherit unstable anatomy"],
              ["New location or camera angle", "Create a separate First Shot", "The scene needs new visual evidence"],
              ["Identity changed before the end", "Replace the failing source", "A smooth join cannot restore the character"],
            ],
          },
        },
        {
          id: "practical-takeaway",
          title: "Practical Takeaway: Keep an Honest Record of Imperfect Results",
          paragraphs: [
            "This workflow did not make every generation usable. Some clips began correctly and developed a different face near the end. Others kept the character but added unwanted camera drift or left a paw in an unstable position. FourFeetz recorded the first failure, then decided whether the usable portion could be trimmed, whether the action needed to be simplified, or whether the entire shot required replacement.",
            "CapCut supports the final assembly, timing, short transitions and loop checks, but it is not treated as a repair tool for broken anatomy. A clean edit can connect two valid clips; it cannot make an invalid body correct. The practical lesson is to give each eight-second scene a job it can complete and let editing refine successful material rather than conceal failed generation.",
          ],
        },
      ],
      faqs: [
        { question: "Does one action mean the character must remain almost still?", answer: "No. Breathing, blinking, a small gaze change or a second restrained repetition can support the primary action without creating another story beat." },
        { question: "When should FourFeetz use Extend?", answer: "When the action, environment and camera genuinely continue from a stable final pose with consistent character identity." },
        { question: "Can CapCut fix a bad Extend result?", answer: "It can refine timing and connect valid clips, but it cannot repair a changed face, malformed limb or rebuilt environment." },
      ],
      related: [
        { label: "Related Guide", title: "Extend AI Video Scenes in Google Flow", href: "/insights/extend-ai-video-scenes-google-flow" },
        { label: "Production Example", title: "HARU — Snowy Hearth Nap", href: "/works/haru-snowy-hearth-nap" },
        { label: "Related Character", title: "Meet HARU", href: "/characters/haru" },
        { label: "All Videos", title: "Watch FourFeetz Videos", href: "/videos" },
      ],
    },
    ko: {
      ...koreanShared,
      slug: "google-flow-one-action-eight-second-scenes",
      eyebrow: "FourFeetz 제작 방식",
      title: "Google Flow 제작 방식: 8초 장면에는 한 가지 행동만",
      shortTitle: "Google Flow 8초 장면에는 한 가지 행동만",
      description:
        "FourFeetz가 첫 8초에 하나의 행동을 집중시키고 카메라를 안정적으로 유지한 뒤, 마지막 자세가 준비됐을 때 Extend로 이어가는 제작 방식을 설명합니다.",
      hero: "/images/insights/production/google-flow-studio-haru.png",
      heroAlt: "FourFeetz Google Flow 제작 공간에 있는 HARU",
      heroPosition: "50% 50%",
      readTime: "약 12분",
      verdict:
        "FourFeetz의 Google Flow 결과는 8초 장면마다 하나의 도착점을 정했을 때 안정됐습니다. Extend는 과도한 첫 장면을 복구하는 기능이 아니라 안정된 연기를 이어가는 방식으로 사용했습니다.",
      tags: ["Google Flow", "Extend", "8초 장면", "AI 영상 제작"],
      keywords: ["Google Flow 제작 방식", "8초 AI 영상", "Google Flow Extend", "한 가지 행동 영상"],
      tools: ["Google Flow", "CapCut"],
      characters: ["HARU", "RURU", "OLI"],
      popularity: 100,
      sections: [
        {
          id: "what-we-tested",
          title: "실제로 테스트한 것: 긴 연기와 한 가지 분명한 행동",
          paragraphs: [
            "초기 장면 계획은 문장으로 읽으면 자연스러웠습니다. 캐릭터가 들어오고, 물체를 발견하고, 몸을 돌려 반응한 뒤 새로운 목적지로 움직이는 식입니다. 하지만 8초 생성 안에서는 이 문장이 여러 신체 구조, 타이밍과 카메라 문제로 나뉘었습니다. FourFeetz는 이런 계획과 하나의 눈에 보이는 행동, 분명한 마지막 자세를 가진 장면을 비교했습니다.",
            "단순한 장면이 멈춰 있어야 한다는 뜻은 아닙니다. HARU가 몇 걸음 천천히 움직이며 호흡하고 눈을 깜빡이거나, RURU가 몸을 내밀어 한 번 보고 조금 물러날 수 있습니다. 중요한 차이는 모든 보조 움직임이 같은 이야기 순간에 속한다는 점입니다. 마지막 1초가 적어 둔 사건을 모두 끝내기 위해 급하게 무너지지 않았습니다.",
          ],
        },
        {
          id: "what-went-wrong",
          title: "문제가 생긴 방식: 많은 신체 변화와 카메라 이동",
          paragraphs: [
            "큰 자세 변화, 화면을 가로지르는 이동과 카메라 움직임을 함께 넣으면 다리와 발 구조가 달라질 가능성이 커졌습니다. 빠르게 몸을 돌리거나 화면 밖으로 잠깐 나갔다 돌아올 때 얼굴도 바뀔 수 있었습니다. 중간 장면이 활기차 보여도 마지막 프레임이 균형을 잃으면 Extend가 이어가기 어려웠습니다.",
            "계획하지 않은 카메라 이동은 실패 원인을 찾기도 어렵게 했습니다. 줌인이나 회전은 캐릭터 크기, 보는 각도, 배경 구조와 조명을 한 번에 바꿉니다. 완성 영상의 흔들림을 줄일 수는 있어도 이동 중 달라진 신체 비율과 새로 구성된 배경을 원래대로 복원할 수는 없었습니다.",
          ],
          bullets: [
            "여러 이야기 사건이 같은 8초 안에서 경쟁했습니다.",
            "큰 회전과 이동이 발, 다리와 얼굴 변화를 늘렸습니다.",
            "마지막 자세가 급하게 끝나거나 물리적으로 불안정했습니다.",
            "카메라 이동이 연속성이 처음 깨진 지점을 가렸습니다.",
          ],
        },
        {
          id: "what-worked",
          title: "효과가 있었던 방법: 카메라를 고정하고 한 가지 도착점 정하기",
          paragraphs: [
            "FourFeetz는 첫 8초에 하나의 주된 행동, 하나의 마지막 상태와 절제된 카메라를 정합니다. 자연스러운 경우 같은 작은 행동을 두 번 반복할 수 있지만 두 번째 큰 사건은 넣지 않습니다. 고정되거나 천천히 통제된 카메라는 생성이 캐릭터에 집중하도록 돕고 결과를 First Shot과 비교하기도 쉽게 했습니다.",
            "행동 지시는 화면에 이미 보이는 근거의 연속으로 작성합니다. 승인된 환경, 조명과 캐릭터 외형을 긴 새로운 설명으로 다시 만들지 않습니다. 다음에 일어날 행동, 움직이지 않아야 할 요소와 연기가 도착할 상태를 간결하게 정합니다. 이 원칙은 비공개 마스터 프롬프트나 내부 설정값을 공개하지 않고도 설명할 수 있는 제작 기준입니다.",
          ],
          steps: [
            "자막 없이도 알아볼 수 있는 행동 하나를 정합니다.",
            "첫 8초가 끝날 안정적인 자세나 조용한 상태를 고릅니다.",
            "카메라 움직임 자체가 핵심 행동이 아니라면 고정합니다.",
            "Extend를 결정하기 전에 마지막 1초를 검토합니다.",
          ],
        },
        {
          id: "extend",
          title: "첫 8초 뒤에 Extend를 연결하는 기준",
          paragraphs: [
            "Extend는 마지막 프레임에 이어받을 정보가 있을 때 가장 안정적이었습니다. 몸의 균형이 잡히고 얼굴과 팔다리가 보이며 카메라 이동이 끝난 상태입니다. 다음 지시는 같은 행동을 계속하거나 작은 후속 행동 하나를 시작합니다. 새로운 장소, 큰 각도 변화와 다른 몸 자세를 동시에 요구하지 않습니다.",
            "연결부는 정상 속도, 소리를 끈 상태와 프레임 단위로 확인합니다. 얼굴, 나이, 귀, 발, 소품, 배경선, 그림자 방향과 카메라 속도를 비교합니다. 움직임이 부드러워도 다른 캐릭터가 된 결과는 사용하지 않습니다. 시각적 연속성은 후반 장식이 아니라 캐릭터 연기의 일부입니다.",
          ],
          table: {
            title: "Extend 선택 기준",
            headers: ["첫 클립의 끝", "다음 선택", "이유"],
            rows: [
              ["안정된 자세에서 같은 행동이 계속됨", "Extend 사용", "마지막 프레임이 연속 동작을 지지합니다"],
              ["큰 자세 변화가 끝나지 않음", "먼저 재생성하거나 자르기", "불안정한 신체를 이어받게 됩니다"],
              ["새 장소 또는 카메라 각도", "별도 First Shot 제작", "새로운 시각 근거가 필요합니다"],
              ["끝나기 전에 정체성이 달라짐", "실패한 원본 교체", "부드러운 연결도 캐릭터를 복원하지 못합니다"],
            ],
          },
        },
        {
          id: "practical-takeaway",
          title: "실전 핵심 정리: 완벽하지 않았던 결과도 정확히 기록하기",
          paragraphs: [
            "이 방식도 모든 결과를 사용 가능하게 만들지는 않았습니다. 처음에는 맞지만 끝에서 얼굴이 달라진 영상이 있었고, 캐릭터는 유지됐지만 불필요한 카메라 이동이 생기거나 발이 불안정한 자세로 끝나는 경우도 있었습니다. FourFeetz는 처음 실패한 지점을 기록하고 사용 가능한 범위를 자를지, 행동을 더 단순하게 할지, 전체 장면을 교체할지 결정했습니다.",
            "CapCut은 최종 조립, 타이밍, 짧은 전환과 루프 확인에 사용하지만 잘못된 신체를 고치는 도구로 다루지 않습니다. 깨끗한 편집은 정상인 두 클립을 이어줄 수 있지만 잘못된 몸을 올바르게 만들 수는 없습니다. 각 8초 장면에 완수할 수 있는 한 가지 역할을 주고, 편집은 성공한 재료를 다듬는 데 사용하는 것이 핵심입니다.",
          ],
        },
      ],
      faqs: [
        { question: "한 가지 행동이면 캐릭터가 거의 움직이지 않아야 하나요?", answer: "아닙니다. 호흡, 눈 깜빡임, 작은 시선 변화나 같은 행동의 절제된 반복은 새로운 사건을 만들지 않으면서 주된 행동을 도울 수 있습니다." },
        { question: "FourFeetz는 언제 Extend를 사용하나요?", answer: "안정된 마지막 자세에서 캐릭터 정체성, 행동, 환경과 카메라가 실제로 이어질 때 사용합니다." },
        { question: "CapCut으로 실패한 Extend 결과를 고칠 수 있나요?", answer: "타이밍과 정상 클립의 연결은 보완할 수 있지만 달라진 얼굴, 잘못된 팔다리와 바뀐 환경은 복원할 수 없습니다." },
      ],
      related: [
        { label: "관련 가이드", title: "Google Flow에서 장면을 연장하는 방법", href: "/ko/insights/extend-ai-video-scenes-google-flow" },
        { label: "실제 제작 영상", title: "HARU — Snowy Hearth Nap", href: "/ko/films/haru-snowy-hearth-nap" },
        { label: "관련 캐릭터", title: "HARU 캐릭터 보기", href: "/ko/characters/haru" },
        { label: "전체 영상", title: "FourFeetz 영상 보기", href: "/ko/videos" },
      ],
    },
  },
  "haru-relaxing-videos-calm-natural": {
    en: {
      ...shared,
      slug: "haru-relaxing-videos-calm-natural",
      eyebrow: "FourFeetz Relax Moments",
      title: "How We Keep HARU Relaxing Videos Calm and Natural",
      shortTitle: "How HARU Relaxing Videos Stay Calm and Natural",
      description:
        "A FourFeetz production guide to resting poses, breathing, blinking, stable framing and the limited role CapCut plays in finishing HARU’s relaxing video loops.",
      hero: "/images/works/haru-relax-moments-ep03/first-shot.webp",
      heroAlt: "HARU resting beside a teddy bear near a warm fireplace in a published FourFeetz relaxing video",
      readTime: "11 min read",
      verdict:
        "HARU feels calm when the scene protects a comfortable resting pose and lets breathing, blinking and quiet environmental motion carry the time. The loop begins in production and is only finished in the edit.",
      tags: ["HARU", "Relaxing Video", "Seamless Loop", "CapCut"],
      keywords: ["HARU relaxing video", "AI video breathing loop", "CapCut seamless loop", "calm animal animation"],
      tools: ["Google Flow", "CapCut"],
      characters: ["HARU"],
      popularity: 99,
      sections: [
        {
          id: "what-we-tested",
          title: "What We Tested: Quiet Performance Instead of Visible Plot",
          paragraphs: [
            "A relaxing video creates a different production problem from a narrative Short. The scene needs enough movement to feel alive, but a strong before-and-after action can make the viewer wait for a reset. FourFeetz tested HARU resting with larger changes such as standing, turning and settling again, then compared those takes with a comfortable pose supported by breathing, blinking and a small head or ear adjustment.",
            "The restrained version held attention through atmosphere rather than event. HARU could remain recognizably awake or sleepy without repeatedly changing state. The fireplace, window and room provided context, but their motion stayed weaker than the character’s subtle breathing. This created a scene that could continue for several cycles without making HARU look trapped in a repeated task.",
          ],
        },
        {
          id: "what-went-wrong",
          title: "What Went Wrong: Large Pose Changes Broke the Calm",
          paragraphs: [
            "When HARU lifted the body, turned and lowered the head within one short source clip, the beginning and ending no longer shared a compatible silhouette. A dissolve between those states produced a transparent double body, sliding paws or a face that briefly appeared twice. Extending the transition made the ghosting softer but also longer and more noticeable.",
            "Large movement could also disturb identity before the edit. The head-to-body ratio, ear position or collar could change while the model solved a new pose. A warm, attractive room did not make those changes acceptable. FourFeetz returned to the source and simplified the performance rather than asking a long crossfade to hide a structural difference.",
          ],
          bullets: [
            "Standing or turning created incompatible first and final silhouettes.",
            "Paw placement shifted when the body settled into a new pose.",
            "Long dissolves exposed two faces, ears or bodies at once.",
            "Changing light or fireplace intensity revealed the restart before the character did.",
          ],
        },
        {
          id: "what-worked",
          title: "What Worked: Resting Pose, Blinking and Breathing",
          paragraphs: [
            "The reliable approach begins with a First Shot that already contains the final emotional state: HARU is comfortable, supported by the floor or cushion, and framed so the face, paws and collar remain readable. The motion instruction then adds small changes that can return near their starting condition. Breathing gives the body a slow rhythm, blinking prevents the face from feeling frozen, and a restrained ear movement can add life without changing the pose.",
            "The camera remains fixed and environmental motion is isolated. In the snowy fireplace production, the fire could move gently and snow remained outside the closed window. Keeping those layers controlled prevented the room from becoming busier than HARU and made it easier to identify whether a flicker belonged to the intended ambience or to a continuity failure.",
          ],
          steps: [
            "Approve a comfortable pose that can be held for the entire source clip.",
            "Choose breathing or blinking as the primary repeating motion.",
            "Keep camera, background geometry and light direction stable.",
            "Review face, ears, paws and collar through several repeated cycles.",
          ],
        },
        {
          id: "capcut",
          title: "Where CapCut Helps—and Where It Does Not",
          paragraphs: [
            "FourFeetz uses CapCut to assemble the final timeline, compare nearby in and out points, adjust a short dissolve, balance ambience and check repeated playback. The generated clip’s first and last frames are not assumed to be the best loop points. Trimming inward often removes the setup or the moment where HARU’s pose begins to drift.",
            "CapCut improves a loop only when the source regions are already compatible. It can soften a small breathing or fur difference and align audio ambience, but it cannot repair a changed face, missing paw or different light direction. When overlap creates duplication, the response is to choose new points, shorten the usable take or replace the source—not to keep extending the dissolve.",
          ],
          table: {
            title: "Editing decision for a HARU relaxing loop",
            headers: ["Difference at the join", "CapCut response", "Production decision"],
            rows: [
              ["Small breathing phase difference", "Short dissolve and timing adjustment", "Keep if identity remains stable"],
              ["Audio click or level jump", "Crossfade and rebalance ambience", "Review with repeated playback"],
              ["Large head or paw position change", "Do not lengthen the dissolve", "Choose new points or replace the clip"],
              ["Different face or collar", "No editorial repair", "Reject the source"],
            ],
          },
        },
        {
          id: "practical-takeaway",
          title: "Practical Takeaway: Calm Is Built From Controlled Change",
          paragraphs: [
            "Not every HARU take became a finished loop. Some were shortened because the final posture drifted; others were replaced because the overlap doubled a face or moved the paws. A few useful clips needed several nearby edit points tested before the breathing rhythm felt continuous. FourFeetz records those revisions because a relaxing result can hide a very selective production process.",
            "The finished video should make the technique disappear. The viewer notices a warm room, a resting puppy and time passing gently—not the restart. That outcome comes from limiting change at the source, checking several cycles in context and using CapCut for timing and finishing rather than as a cover for failed character generation.",
          ],
        },
      ],
      faqs: [
        { question: "Why avoid large pose changes in a relaxing video?", answer: "They create a strong destination, increase identity risk and make the beginning and end difficult to overlap without visible duplication." },
        { question: "Which HARU movements are most suitable for a loop?", answer: "Breathing, blinking and restrained ear or head adjustments are useful because they can return close to the starting state." },
        { question: "What does CapCut do in the FourFeetz loop workflow?", answer: "It supports trimming, timing, short dissolves, ambience and repeated-playback review; it does not repair broken anatomy or identity." },
      ],
      related: [
        { label: "Watch the Film", title: "HARU — Snowy Hearth Nap", href: "/works/haru-snowy-hearth-nap" },
        { label: "All Videos", title: "Watch FourFeetz Videos", href: "/videos" },
        { label: "Related Character", title: "Meet HARU", href: "/characters/haru" },
        { label: "Related Guide", title: "Seamless Loops for Relaxing AI Videos", href: "/insights/seamless-loops-relaxing-ai-videos" },
      ],
    },
    ko: {
      ...koreanShared,
      slug: "haru-relaxing-videos-calm-natural",
      eyebrow: "FourFeetz Relax Moments",
      title: "HARU 릴렉스 영상을 차분하고 자연스럽게 만드는 방법",
      shortTitle: "HARU 릴렉스 영상을 차분하고 자연스럽게 만드는 방법",
      description:
        "HARU 릴렉스 영상에서 편안한 자세, 호흡, 눈 깜빡임과 안정된 구도를 사용하는 이유, 그리고 CapCut으로 루프를 마무리하는 범위를 정리합니다.",
      hero: "/images/works/haru-relax-moments-ep03/first-shot.webp",
      heroAlt: "FourFeetz 릴렉스 영상에서 벽난로 옆 곰 인형과 함께 쉬는 HARU",
      readTime: "약 11분",
      verdict:
        "HARU의 편안한 자세를 지키고 호흡, 눈 깜빡임과 조용한 환경 움직임으로 시간을 채울 때 영상이 차분해졌습니다. 루프는 제작 단계에서 시작하고 편집에서는 마무리만 합니다.",
      tags: ["HARU", "릴렉스 영상", "자연스러운 루프", "CapCut"],
      keywords: ["HARU 릴렉스 영상", "AI 영상 호흡 루프", "CapCut 자연스러운 루프", "차분한 동물 애니메이션"],
      tools: ["Google Flow", "CapCut"],
      characters: ["HARU"],
      popularity: 99,
      sections: [
        {
          id: "what-we-tested",
          title: "실제로 테스트한 것: 눈에 띄는 사건 대신 조용한 연기",
          paragraphs: [
            "릴렉스 영상은 이야기형 쇼츠와 다른 문제를 만듭니다. 살아 있는 느낌을 줄 움직임은 필요하지만 시작과 끝이 분명한 행동은 시청자가 재시작을 기다리게 할 수 있습니다. FourFeetz는 HARU가 일어서고 몸을 돌린 뒤 다시 눕는 큰 변화와, 편안한 자세에서 호흡·눈 깜빡임·작은 머리나 귀 움직임만 사용하는 방식을 비교했습니다.",
            "절제된 버전은 사건이 아니라 분위기로 시간을 유지했습니다. HARU는 같은 상태를 기계적으로 반복하지 않으면서 깨어 있거나 졸린 느낌을 보여줄 수 있었습니다. 벽난로, 창문과 방은 상황을 설명하지만 그 움직임은 HARU의 작은 호흡보다 약하게 두었습니다. 덕분에 여러 번 반복해도 갇힌 행동처럼 보이지 않았습니다.",
          ],
        },
        {
          id: "what-went-wrong",
          title: "문제가 생긴 방식: 큰 자세 변화가 차분함을 깨뜨렸습니다",
          paragraphs: [
            "짧은 원본 안에서 HARU가 몸을 들고 방향을 바꾼 뒤 머리를 내리면 처음과 끝의 실루엣이 서로 이어지기 어려웠습니다. 두 상태를 디졸브하면 투명한 몸이 겹치고 발이 미끄러지거나 얼굴이 잠깐 두 개로 보였습니다. 전환을 길게 하면 잔상이 부드러워지는 대신 더 오래 보여 오히려 눈에 띄었습니다.",
            "큰 움직임은 편집 전에 정체성도 흔들 수 있었습니다. 새로운 자세를 해결하는 동안 머리와 몸의 비율, 귀 위치나 목걸이가 달라지는 결과가 나왔습니다. 방과 조명이 따뜻하게 보여도 이 변화는 사용하지 않았습니다. 긴 전환으로 구조 문제를 숨기지 않고 원본 행동을 단순하게 다시 설계했습니다.",
          ],
          bullets: [
            "일어서기와 회전은 처음과 끝의 실루엣을 다르게 만들었습니다.",
            "몸을 다시 눕히는 동안 발의 접촉 위치가 달라졌습니다.",
            "긴 디졸브에서 얼굴, 귀와 몸이 두 개로 보였습니다.",
            "조명이나 벽난로 밝기 변화가 캐릭터보다 먼저 반복 지점을 드러냈습니다.",
          ],
        },
        {
          id: "what-worked",
          title: "효과가 있었던 방법: 편안한 자세·눈 깜빡임·호흡",
          paragraphs: [
            "안정적인 방식은 First Shot에 이미 최종 감정 상태를 담는 것입니다. HARU가 편안하게 쉬고, 바닥이나 쿠션에 몸이 지지되며, 얼굴과 발, 목걸이를 읽을 수 있어야 합니다. 이후 시작 상태로 돌아오기 쉬운 작은 변화를 더합니다. 호흡은 몸에 느린 리듬을 주고, 눈 깜빡임은 얼굴이 멈춘 것처럼 보이는 문제를 줄이며, 작은 귀 움직임은 자세를 바꾸지 않고 생기를 더합니다.",
            "카메라는 고정하고 환경 움직임을 분리했습니다. 눈 내리는 벽난로 영상에서는 불꽃이 잔잔하게 움직이고 눈은 닫힌 창문 바깥에만 남도록 구성했습니다. 배경이 HARU보다 바빠지지 않았고, 화면의 깜빡임이 의도한 분위기인지 연속성 오류인지 확인하기도 쉬웠습니다.",
          ],
          steps: [
            "원본 전체에서 유지할 수 있는 편안한 자세를 승인합니다.",
            "호흡이나 눈 깜빡임을 주된 반복 움직임으로 정합니다.",
            "카메라, 배경 구조와 조명 방향을 안정적으로 유지합니다.",
            "얼굴, 귀, 발과 목걸이를 여러 번 반복해 보며 확인합니다.",
          ],
        },
        {
          id: "capcut",
          title: "CapCut이 도움이 되는 범위와 해결하지 못하는 문제",
          paragraphs: [
            "FourFeetz는 CapCut에서 최종 타임라인을 조립하고 가까운 시작점과 끝점을 비교하며, 짧은 디졸브와 앰비언스를 조정한 뒤 반복 재생합니다. 생성 영상의 첫 프레임과 마지막 프레임이 가장 좋은 루프 지점이라고 가정하지 않습니다. 안쪽으로 자르면 준비 동작이나 HARU 자세가 달라지기 시작하는 부분을 제외할 수 있습니다.",
            "CapCut은 원본 구간이 이미 서로 연결 가능할 때만 루프를 개선합니다. 작은 호흡과 털 차이를 부드럽게 하고 소리의 흐름을 맞출 수 있지만, 달라진 얼굴과 사라진 발, 다른 조명 방향을 고칠 수는 없습니다. 겹침에서 중복이 보이면 디졸브를 늘리지 않고 새 지점을 고르거나 사용 구간을 줄이고 원본을 교체합니다.",
          ],
          table: {
            title: "HARU 릴렉스 루프 편집 판단",
            headers: ["연결부의 차이", "CapCut 대응", "제작 판단"],
            rows: [
              ["작은 호흡 시점 차이", "짧은 디졸브와 타이밍 조정", "정체성이 유지되면 사용"],
              ["소리 클릭 또는 음량 변화", "크로스페이드와 앰비언스 조정", "반복 재생으로 확인"],
              ["큰 머리 또는 발 위치 차이", "디졸브를 늘리지 않음", "새 지점 선택 또는 클립 교체"],
              ["다른 얼굴 또는 목걸이", "편집으로 수정하지 않음", "원본 거절"],
            ],
          },
        },
        {
          id: "practical-takeaway",
          title: "실전 핵심 정리: 차분함은 통제된 변화에서 나옵니다",
          paragraphs: [
            "모든 HARU 결과가 완성 루프가 된 것은 아닙니다. 마지막 자세가 달라져 길이를 줄인 영상이 있었고, 겹침에서 얼굴이 두 개가 되거나 발이 이동해 교체한 결과도 있었습니다. 호흡 리듬이 이어지는 지점을 찾기 위해 가까운 편집점을 여러 번 비교한 클립도 있습니다. FourFeetz는 차분한 완성본 뒤에 이런 선택 과정이 있었다는 점을 제작 기록에 남깁니다.",
            "완성 영상에서는 기술이 보이지 않아야 합니다. 시청자는 재시작이 아니라 따뜻한 방과 쉬는 강아지, 천천히 흐르는 시간을 느껴야 합니다. 원본에서 변화를 제한하고 여러 번 반복해 확인하며, CapCut은 실패를 숨기는 대신 타이밍과 마무리에 사용하는 것이 핵심입니다.",
          ],
        },
      ],
      faqs: [
        { question: "릴렉스 영상에서 큰 자세 변화를 피하는 이유는 무엇인가요?", answer: "큰 행동은 시작과 끝을 분명하게 만들고 정체성 위험을 높이며, 두 구간을 중복 없이 겹치기 어렵게 합니다." },
        { question: "HARU 루프에 적합한 움직임은 무엇인가요?", answer: "호흡, 눈 깜빡임과 작은 귀 또는 머리 움직임은 시작 상태와 가까운 지점으로 돌아오기 쉬워 유용합니다." },
        { question: "FourFeetz 루프 제작에서 CapCut은 어떤 역할을 하나요?", answer: "자르기, 타이밍, 짧은 디졸브, 앰비언스와 반복 검토를 지원하지만 잘못된 신체와 정체성을 고치지는 않습니다." },
      ],
      related: [
        { label: "실제 영상", title: "HARU — Snowy Hearth Nap", href: "/ko/films/haru-snowy-hearth-nap" },
        { label: "전체 영상", title: "FourFeetz 영상 보기", href: "/ko/videos" },
        { label: "관련 캐릭터", title: "HARU 캐릭터 보기", href: "/ko/characters/haru" },
        { label: "관련 가이드", title: "힐링 AI 영상 루프 제작 방법", href: "/ko/insights/seamless-loops-relaxing-ai-videos" },
      ],
    },
  },
  "character-consistency-haru-ruru-milo": {
    en: {
      ...shared,
      slug: "character-consistency-haru-ruru-milo",
      eyebrow: "FourFeetz Character Production",
      title: "Character Consistency: What Worked Across HARU, RURU, and MILO",
      shortTitle: "What Worked Across HARU, RURU, and MILO",
      description:
        "A real FourFeetz production review of reference images, stable environments, concise action directions and honest rejection criteria across three different animal characters.",
      hero: "/images/insights/production/character-consistency-family.png",
      heroAlt: "A group of FourFeetz animal characters used to illustrate cross-character consistency review",
      heroPosition: "50% 50%",
      readTime: "13 min read",
      verdict:
        "HARU, RURU and MILO did not become consistent through one longer description. Each improved when an approved image carried appearance, the environment stayed stable and the action asked the character to solve fewer new relationships.",
      tags: ["Character Consistency", "HARU", "RURU", "MILO"],
      keywords: ["HARU RURU MILO consistency", "AI animal character consistency", "reference image workflow", "consistent AI characters"],
      tools: ["AI Image", "AI Video", "Video Editing"],
      characters: ["HARU", "RURU", "MILO"],
      popularity: 100,
      sections: [
        {
          id: "what-we-tested",
          title: "What We Tested: More Description Versus Better Visual Evidence",
          paragraphs: [
            "When a generated character drifted, the tempting response was to repeat more appearance details in the next instruction. FourFeetz tested that approach against a simpler workflow: choose one approved reference for the shot, preserve the visible environment and describe the next action briefly. The shorter instruction did not remove the need for review, but it reduced the number of new appearance decisions competing with the image.",
            "The comparison was useful across very different bodies. HARU’s young puppy proportions, RURU’s patterned face and long striped tail, and MILO’s small round silhouette each failed in different ways. A universal paragraph could not protect every character equally. Clear visual evidence and character-specific review questions were more dependable than repeating a large block of generic detail.",
          ],
          note:
            "This article discusses public production principles and visible review criteria. FourFeetz’s full character bibles, master prompts and internal settings remain private.",
        },
        {
          id: "what-went-wrong",
          title: "What Went Wrong: Re-describing the Character Inside Every Shot",
          paragraphs: [
            "New appearance wording sometimes acted like a redesign request. A slightly different adjective could change apparent age, fur volume or facial expression even when the intention was only to strengthen consistency. If the environment also changed and the character performed a complex action, it became difficult to identify which instruction had caused the drift.",
            "The results were not always obviously broken. HARU could remain a cream puppy but look older. RURU could keep red fur while losing the balance of cream face markings or tail scale. MILO could remain recognizable as a small animal while becoming too tall or losing the compact silhouette. FourFeetz rejected these polished near-matches because consistency is measured against the character, not against a general species label.",
          ],
          bullets: [
            "Appearance wording introduced a new age, coat volume or expression baseline.",
            "A new environment changed scale, light and color at the same time.",
            "Complex action hid when ears, paws, tail or face first changed.",
            "Attractive near-matches were mistaken for consistent performances until compared side by side.",
          ],
        },
        {
          id: "what-worked",
          title: "What Worked: Reference Image, Same Environment, Concise Action",
          paragraphs: [
            "The stable workflow gives each source a clear responsibility. The approved image carries the visible character appearance and starting composition. The environment remains the same unless a new scene is deliberately planned. The text identifies one action and the elements that should remain still. This keeps the instruction focused on performance rather than asking the generation to recreate the character from prose.",
            "A concise action is also easier to reject precisely. If RURU peeks from behind a tree, the review can focus on face markings, tail, paws and the single shift in weight. If MILO makes one small movement in a simple setting, the round body and scale remain visible. If HARU settles into a resting pose, the face, ears and collar can be checked without a moving camera changing every relationship.",
          ],
          steps: [
            "Select the approved image that best matches the required angle and environment.",
            "Preserve the visible setting instead of restating it with competing new details.",
            "Describe one primary action and, when needed, one restrained supporting movement.",
            "Review identity before motion beauty, lighting polish or editorial rhythm.",
          ],
        },
        {
          id: "character-differences",
          title: "Why the Background and Action Stay Simple for Different Characters",
          paragraphs: [
            "Simple staging does not make the characters behave the same. It creates room to protect what is distinctive. HARU benefits from low, readable framing that keeps young proportions and grounded paws clear. RURU needs enough space for the striped tail and face pattern to remain visible without crossing busy branches. MILO’s compact body needs a clean scale reference so a small change in camera distance does not make the character feel like a different size.",
            "The background is simplified for the same reason. Moving leaves, strong wind, shifting light and passing objects may all be appropriate later, but adding them during the first motion test creates more edges and occlusions around fur, paws and tails. FourFeetz first secures a stable character performance, then tests one environmental change as a separate production decision.",
          ],
          table: {
            title: "Character-specific review focus",
            headers: ["Character", "Protected evidence", "Useful simple staging"],
            rows: [
              ["HARU", "Young proportions, face, ears, paws and collar", "Low stable camera with one grounded action"],
              ["RURU", "Face markings, dark paws and striped tail", "Open silhouette with restrained foliage motion"],
              ["MILO", "Compact round body, face and relative scale", "Simple background with a clear size reference"],
            ],
          },
        },
        {
          id: "practical-takeaway",
          title: "Practical Takeaway: Consistency Includes Honest Rejection",
          paragraphs: [
            "The results were not perfect on every attempt. Some HARU clips changed age after a turn. Some RURU tests preserved the face but altered the tail or paws. Some MILO results looked appealing in isolation but became too tall beside the approved reference. FourFeetz did not describe these as finished character work simply because the images were polished.",
            "The correction depends on the first broken layer. A late edge defect may be trimmed. An unstable camera can be retested while keeping the same action. A changed face, body scale or signature pattern requires a replacement source. The repeatable lesson across all three characters is to preserve clear evidence, reduce simultaneous change and judge the entire performance—not the best single frame.",
          ],
          bullets: [
            "Accept variation in pose and expression only when identity remains recognizable.",
            "Trim disposable edge errors; replace central identity and anatomy failures.",
            "Compare opening, middle and final frames with the approved reference.",
            "Record why a polished result was rejected so the next test changes one relevant condition.",
          ],
        },
      ],
      faqs: [
        { question: "Does FourFeetz use the same consistency description for every character?", answer: "No. The workflow is shared, but review priorities change with each character’s body, markings, accessories and behavior." },
        { question: "Why not repeat every appearance detail in every motion instruction?", answer: "The approved image already carries visible appearance evidence, while new wording can compete with it and unintentionally redesign age, proportions or fur." },
        { question: "What happens when a result is attractive but inconsistent?", answer: "It is rejected or treated as a test. A polished near-match is not used as finished character work when identity has changed." },
      ],
      related: [
        { label: "Related Character", title: "Meet HARU", href: "/characters/haru" },
        { label: "Related Character", title: "Meet RURU", href: "/characters/ruru" },
        { label: "Related Character", title: "Meet MILO", href: "/characters/milo" },
        { label: "Related Guide", title: "How We Reduce Character Inconsistency", href: "/insights/reduce-character-inconsistency-ai-video" },
      ],
    },
    ko: {
      ...koreanShared,
      slug: "character-consistency-haru-ruru-milo",
      eyebrow: "FourFeetz 캐릭터 제작",
      title: "HARU·RURU·MILO 제작에서 효과가 있었던 캐릭터 일관성 방법",
      shortTitle: "HARU·RURU·MILO 캐릭터 일관성 제작 방법",
      description:
        "서로 다른 세 동물 캐릭터를 제작하며 기준 이미지, 같은 환경, 간결한 행동 지시와 솔직한 거절 기준이 어떻게 작동했는지 정리합니다.",
      hero: "/images/insights/production/character-consistency-family.png",
      heroAlt: "여러 FourFeetz 동물 캐릭터의 일관성을 비교하는 제작 이미지",
      heroPosition: "50% 50%",
      readTime: "약 13분",
      verdict:
        "HARU, RURU와 MILO의 일관성은 더 긴 외형 설명 하나로 만들어지지 않았습니다. 승인된 이미지가 외형을 맡고, 환경을 유지하며, 행동이 새로 해결해야 할 관계를 줄였을 때 결과가 좋아졌습니다.",
      tags: ["캐릭터 일관성", "HARU", "RURU", "MILO"],
      keywords: ["HARU RURU MILO 일관성", "AI 동물 캐릭터 일관성", "기준 이미지 제작", "일관된 AI 캐릭터"],
      tools: ["AI 이미지", "AI 영상", "영상 편집"],
      characters: ["HARU", "RURU", "MILO"],
      popularity: 100,
      sections: [
        {
          id: "what-we-tested",
          title: "실제로 테스트한 것: 더 많은 설명과 더 나은 시각 근거",
          paragraphs: [
            "생성된 캐릭터가 달라지면 다음 지시에 외형 설명을 더 많이 반복하고 싶어집니다. FourFeetz는 이 방식과 장면에 맞는 승인된 기준 이미지 하나를 선택하고, 화면에 보이는 환경을 유지하며, 다음 행동만 짧게 설명하는 방식을 비교했습니다. 간결한 지시도 검토는 필요했지만 기준 이미지와 경쟁하는 새로운 외형 결정을 줄였습니다.",
            "서로 다른 몸을 가진 캐릭터에서 비교했기 때문에 더 의미가 있었습니다. HARU의 어린 강아지 비율, RURU의 얼굴 무늬와 긴 줄무늬 꼬리, MILO의 작고 둥근 실루엣은 서로 다른 방식으로 실패했습니다. 하나의 공통 문단은 모든 캐릭터를 똑같이 지키지 못했습니다. 분명한 시각 근거와 캐릭터별 검토 질문이 긴 일반 설명보다 안정적이었습니다.",
          ],
          note: "이 글은 공개 가능한 제작 원칙과 눈으로 확인할 기준만 다룹니다. FourFeetz의 전체 캐릭터 바이블, 마스터 프롬프트와 내부 설정값은 공개하지 않습니다.",
        },
        {
          id: "what-went-wrong",
          title: "문제가 생긴 방식: 장면마다 캐릭터 외형을 새로 설명하기",
          paragraphs: [
            "새로운 외형 문장은 의도하지 않게 재설계 요청처럼 작동하기도 했습니다. 일관성을 강화하려고 쓴 다른 형용사가 나이, 털의 부피나 기본 표정을 바꿀 수 있었습니다. 환경까지 달라지고 복잡한 행동을 함께 수행하면 어느 지시가 외형 변화를 만들었는지 구분하기도 어려웠습니다.",
            "결과가 항상 명백하게 망가진 것은 아니었습니다. HARU는 크림색 강아지로 남아도 더 나이 들어 보였고, RURU는 붉은 털을 유지하면서 얼굴의 크림색 무늬나 꼬리 크기가 달라졌습니다. MILO는 작은 동물로 알아볼 수 있어도 키가 커지거나 둥근 실루엣을 잃었습니다. FourFeetz는 일반적인 동물 종류가 아니라 실제 캐릭터를 기준으로 이런 보기 좋은 유사 결과를 거절했습니다.",
          ],
          bullets: [
            "외형 문장이 새로운 나이, 털 부피나 기본 표정을 만들었습니다.",
            "새 환경이 크기, 조명과 색을 동시에 바꿨습니다.",
            "복잡한 행동이 귀, 발, 꼬리와 얼굴이 처음 바뀐 순간을 가렸습니다.",
            "나란히 비교하기 전에는 보기 좋은 유사 결과를 일관된 연기로 착각하기 쉬웠습니다.",
          ],
        },
        {
          id: "what-worked",
          title: "효과가 있었던 방법: 기준 이미지·같은 환경·간결한 행동",
          paragraphs: [
            "안정적인 방식은 자료마다 역할을 분명하게 나눕니다. 승인된 이미지는 화면에 보이는 캐릭터 외형과 시작 구도를 담당합니다. 새로운 장면을 계획한 경우가 아니라면 환경은 그대로 유지합니다. 글은 하나의 행동과 움직이지 않아야 할 요소를 정합니다. 생성이 글만으로 캐릭터를 다시 만들지 않고 연기에 집중하도록 했습니다.",
            "간결한 행동은 거절 이유도 정확하게 만듭니다. RURU가 나무 뒤에서 몸을 내밀면 얼굴 무늬, 꼬리, 발과 한 번의 체중 이동에 집중할 수 있습니다. MILO가 단순한 배경에서 한 번 작게 움직이면 둥근 몸과 크기가 계속 보입니다. HARU가 편안히 눕는 장면은 움직이는 카메라가 모든 관계를 바꾸지 않아 얼굴, 귀와 목걸이를 확인하기 쉽습니다.",
          ],
          steps: [
            "필요한 각도와 환경에 가장 가까운 승인 이미지를 선택합니다.",
            "경쟁하는 새 설명을 더하지 않고 화면에 보이는 환경을 유지합니다.",
            "주된 행동 하나와 필요할 때 작은 보조 움직임 하나만 적습니다.",
            "움직임의 아름다움, 조명 효과와 편집 리듬보다 정체성을 먼저 검토합니다.",
          ],
        },
        {
          id: "character-differences",
          title: "캐릭터마다 배경과 행동을 단순하게 설계한 이유",
          paragraphs: [
            "단순한 장면이 캐릭터를 똑같이 행동하게 만드는 것은 아닙니다. 각 캐릭터의 차이를 지킬 공간을 만듭니다. HARU는 어린 비율과 바닥에 닿은 발이 보이는 낮고 안정적인 구도가 유리했습니다. RURU는 복잡한 나뭇가지와 겹치지 않으면서 줄무늬 꼬리와 얼굴 무늬가 보일 공간이 필요했습니다. MILO는 카메라 거리의 작은 변화로 크기가 달라 보이지 않도록 단순한 비교 대상이 필요했습니다.",
            "배경도 같은 이유로 단순하게 시작합니다. 움직이는 잎, 강한 바람, 변하는 빛과 지나가는 물체는 이후에 필요한 연출일 수 있습니다. 하지만 첫 영상 테스트부터 모두 넣으면 털, 발과 꼬리 주변에 더 많은 경계와 가림이 생깁니다. FourFeetz는 안정적인 캐릭터 연기를 먼저 확보하고 환경 변화 하나를 별도의 제작 선택으로 시험했습니다.",
          ],
          table: {
            title: "캐릭터별 검토 항목",
            headers: ["캐릭터", "지켜야 할 근거", "유용했던 단순한 연출"],
            rows: [
              ["HARU", "어린 비율, 얼굴, 귀, 발과 목걸이", "낮고 안정된 카메라에서 바닥에 닿는 행동 하나"],
              ["RURU", "얼굴 무늬, 어두운 발과 줄무늬 꼬리", "실루엣이 열리고 나뭇잎 움직임이 작은 구도"],
              ["MILO", "작고 둥근 몸, 얼굴과 상대적 크기", "크기 비교가 분명한 단순한 배경"],
            ],
          },
        },
        {
          id: "practical-takeaway",
          title: "실전 핵심 정리: 일관성에는 솔직한 거절도 포함됩니다",
          paragraphs: [
            "모든 시도에서 완벽한 결과가 나오지는 않았습니다. 몸을 돌린 뒤 HARU의 나이가 달라진 영상이 있었고, RURU의 얼굴은 맞지만 꼬리나 발이 달라진 테스트도 있었습니다. MILO는 한 장만 보면 매력적이지만 기준 이미지 옆에서 키가 너무 커 보이는 결과가 있었습니다. FourFeetz는 화면이 세련됐다는 이유로 이런 결과를 완성된 캐릭터 영상이라고 기록하지 않았습니다.",
            "수정은 처음 깨진 부분에 맞춰 결정합니다. 끝부분의 제거 가능한 오류는 자를 수 있고, 불안정한 카메라는 같은 행동을 유지한 채 다시 시험할 수 있습니다. 얼굴, 몸 크기나 대표 무늬가 달라지면 원본을 교체합니다. 세 캐릭터에 공통으로 남은 원칙은 분명한 근거를 유지하고 동시에 바뀌는 요소를 줄이며 가장 좋은 한 프레임이 아니라 전체 연기를 판단하는 것입니다.",
          ],
          bullets: [
            "정체성이 유지될 때만 자세와 표정의 변화를 받아들입니다.",
            "제거 가능한 끝부분 오류는 자르고 중심 정체성과 신체 오류는 교체합니다.",
            "시작, 중간과 마지막 프레임을 승인된 기준 이미지와 비교합니다.",
            "보기 좋은 결과를 거절한 이유를 기록하고 다음 테스트에서 관련 조건 하나만 바꿉니다.",
          ],
        },
      ],
      faqs: [
        { question: "FourFeetz는 모든 캐릭터에 같은 일관성 설명을 사용하나요?", answer: "아닙니다. 제작 흐름은 공유하지만 검토 우선순위는 각 캐릭터의 몸, 무늬, 소품과 행동에 따라 달라집니다." },
        { question: "영상 지시마다 모든 외형 특징을 반복하지 않는 이유는 무엇인가요?", answer: "승인된 이미지가 이미 외형 근거를 담고 있으며 새로운 문장이 그 근거와 경쟁해 나이, 비율과 털을 의도하지 않게 바꿀 수 있기 때문입니다." },
        { question: "보기 좋지만 일관되지 않은 결과는 어떻게 처리하나요?", answer: "완성본으로 사용하지 않고 거절하거나 테스트로 기록합니다. 정체성이 달라진 유사 결과는 세련돼 보여도 공식 캐릭터 연기가 아닙니다." },
      ],
      related: [
        { label: "관련 캐릭터", title: "HARU 캐릭터 보기", href: "/ko/characters/haru" },
        { label: "관련 캐릭터", title: "RURU 캐릭터 보기", href: "/ko/characters/ruru" },
        { label: "관련 캐릭터", title: "MILO 캐릭터 보기", href: "/ko/characters/milo" },
        { label: "관련 가이드", title: "AI 영상 캐릭터 일관성 문제 줄이기", href: "/ko/insights/reduce-character-inconsistency-ai-video" },
      ],
    },
  },
};
