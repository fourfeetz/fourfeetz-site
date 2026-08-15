import type { Metadata } from "next";
import {
  experienceProductionGuides,
  experienceProductionGuideSlugs,
} from "@/lib/experienceProductionGuides";
import type { ProductionInsight } from "@/lib/productionInsights";
import {
  studioWorkflowInsights,
  studioWorkflowInsightSlugs,
} from "@/lib/studioWorkflowInsights";
import { englishLanguageAlternates, languageAlternates } from "@/lib/localization";

export const newProductionGuideSlugs = [
  "extend-ai-video-scenes-google-flow",
  "common-ai-video-generation-failures",
  "create-ai-shorts-9-16-from-start",
  "reduce-character-inconsistency-ai-video",
  "seamless-loops-relaxing-ai-videos",
  ...experienceProductionGuideSlugs,
  ...studioWorkflowInsightSlugs,
] as const;

export type NewProductionGuideSlug = (typeof newProductionGuideSlugs)[number];
export type NewProductionGuideLanguage = "en" | "ko";
export type NewProductionGuide = ProductionInsight & {
  heroAlt: string;
  heroCaption?: string;
  heroFit?: "cover" | "contain";
  heroPosition?: string;
};

type LocalizedCopy = Pick<
  NewProductionGuide,
  "title" | "shortTitle" | "description" | "eyebrow" | "readTime" | "verdict" | "category" | "sections" | "faqs"
>;

type GuideSeed = {
  slug: NewProductionGuideSlug;
  hero: string;
  heroAlt: { en: string; ko: string };
  heroFit?: "cover" | "contain";
  heroPosition?: string;
  tags: string[];
  keywords: { en: string[]; ko: string[] };
  tools: string[];
  characters: string[];
  en: LocalizedCopy;
  ko: LocalizedCopy;
};

const published = "2026-07-29";

const guideBasics = {
  eyebrow: "FourFeetz Production Guide",
  category: "Production Guide",
} as const;

const koreanGuideBasics = {
  eyebrow: "FourFeetz 제작 가이드",
  category: "제작 가이드",
} as const;

const guides: GuideSeed[] = [
  {
    slug: "extend-ai-video-scenes-google-flow",
    hero: "/images/insights/production-guides/google-flow-scene-extension-wide.webp",
    heroAlt: {
      en: "LUNA and HARU resting in a warm sunlit reading room, composed as a 16:9 landscape scene",
      ko: "따뜻한 햇살이 드는 독서 공간에서 쉬는 LUNA와 HARU를 담은 16:9 가로 장면",
    },
    heroPosition: "50% 50%",
    tags: ["Google Flow", "Scene Extension", "Continuity", "AI Video"],
    keywords: {
      en: ["extend AI video scenes", "Google Flow Extend", "AI video continuity", "First Shot"],
      ko: ["AI 영상 장면 연장", "Google Flow Extend", "AI 영상 연결", "첫 장면"],
    },
    tools: ["Google Flow"],
    characters: ["LUNA", "HARU"],
    en: {
      ...guideBasics,
      title: "How to Extend AI Video Scenes Naturally in Google Flow",
      shortTitle: "How to Extend AI Video Scenes Naturally in Google Flow",
      description:
        "A practical FourFeetz guide to planning a stable First Shot, connecting an Extend generation, and deciding when a separate shot with a dissolve is the cleaner edit.",
      readTime: "9 min read",
      verdict:
        "A natural extension starts before the Extend button is used. Give the first eight seconds one readable action, finish on a stable pose, and continue only the motion that the last frame can support.",
      sections: [
        {
          id: "first-shot",
          title: "Treat the First Shot as a Continuity Contract",
          paragraphs: [
            "In our production tests, the First Shot does more than establish a pretty opening. It defines the character’s visible proportions, screen position, lighting direction, background geometry and camera distance. Every extension has to inherit those facts, so an ambiguous opening frame creates extra decisions that the next generation may solve differently.",
            "We begin with a public, approved character image or a frame from the actual sequence. We check the face, ears, paws, accessories and the direction of light before motion begins. This is a review method, not a private character prompt: the purpose is simply to identify what the audience must continue to recognize.",
          ],
          note:
            "If the First Shot already hides an important feature or mixes several conflicting poses, extending it usually magnifies the uncertainty.",
        },
        {
          id: "one-action",
          title: "What We Tested: One Action in the First Eight Seconds",
          paragraphs: [
            "A short generation becomes harder to extend when it contains walking, turning, looking back, picking up an object and changing expression all at once. We choose one primary action for the first eight seconds and allow only small supporting movement. The result is easier to read and leaves the final frame in a usable state.",
            "One action does not mean a frozen shot. A character may breathe, blink or shift weight while completing the main movement. What matters is that the model and the editor share one destination. Excess action often produces a rushed ending, which gives Extend a distorted pose or an unfinished camera move to continue.",
          ],
          steps: [
            "Write the first shot as one observable action with a clear end state.",
            "Keep background, weather and camera behavior subordinate to that action.",
            "Review the final second at normal speed and frame by frame.",
          ],
        },
        {
          id: "extend-connection",
          title: "What Worked: Extend from a Stable Last Pose",
          paragraphs: [
            "The last pose is the handoff point. We prefer a moment when the character’s weight is balanced, the face is readable and no limb is crossing the edge of the frame. Extend can then continue a small movement rather than inventing a recovery from an awkward transition.",
            "The next instruction describes continuation, not a new scene. We preserve the same camera position and environment unless change is essential to the story. At the join, we inspect silhouette, facial age, accessory position, shadow direction and camera speed. A smooth-looking motion is not accepted if identity changes during the handoff.",
          ],
          bullets: [
            "Hold the final posture long enough to provide a clean visual handoff.",
            "Continue one action instead of introducing a second narrative beat immediately.",
            "Reject extensions that hide a continuity error behind fast camera movement.",
          ],
        },
        {
          id: "separate-scene",
          title: "What Went Wrong: Asking Extend to Carry Too Much Change",
          paragraphs: [
            "Not every transition should be generated as one continuous shot. A major camera-angle change, a new location, a large time shift or an action that requires a different body position may be cleaner as a separately planned scene. Forcing Extend across those changes can make the character stretch, duplicate or return with a different face.",
            "We create a new approved First Shot for the next scene and connect the two clips in the edit. A short dissolve can support a gentle passage of time or a relaxing mood, but it should not be used to conceal a severe identity mismatch. Hard cuts are often better when the story calls for a decisive change.",
          ],
          table: {
            title: "Choose the transition by what must change",
            headers: ["Situation", "Preferred method", "Reason"],
            rows: [
              ["Same action and camera", "Extend", "The last frame contains enough continuity evidence"],
              ["New angle or location", "Separate scene", "A new First Shot can define the changed geometry"],
              ["Gentle time passage", "Separate scene + short dissolve", "The edit communicates the transition openly"],
            ],
          },
        },
        {
          id: "review",
          title: "Practical Takeaway: Review the Join Before Finishing",
          paragraphs: [
            "We watch the join three ways: at normal speed for rhythm, without sound for visual continuity, and frame by frame for identity drift. The review includes face shape, ears, paws, name tag or collar, lighting, background lines and camera direction. Small errors are easier to see before music, grading and captions are added.",
            "If the join fails, we first decide whether the problem belongs to the First Shot, the last pose or the requested continuation. We regenerate the smallest failing part. This keeps the workflow understandable and avoids exposing or relying on a long proprietary prompt as a substitute for clear shot design.",
          ],
          bullets: [
            "Identity remains recognizable on both sides of the join.",
            "The final pose of clip one can physically lead into clip two.",
            "Light, camera direction and background do not jump without a story reason.",
          ],
        },
      ],
      faqs: [
        {
          question: "Should every Google Flow scene be extended?",
          answer:
            "No. Extend is most useful when the action, camera and environment genuinely continue. A new angle, place or time is often clearer as a separate shot.",
        },
        {
          question: "How much action should the first eight seconds contain?",
          answer:
            "We usually plan one primary action with restrained secondary movement so the final frame remains readable and extendable.",
        },
        {
          question: "Can a dissolve fix a mismatched character?",
          answer:
            "A dissolve can soften a valid scene transition, but it should not be used to hide a major change in face, age, proportions or accessories.",
        },
      ],
    },
    ko: {
      ...koreanGuideBasics,
      title: "Google Flow에서 AI 영상 장면을 자연스럽게 연장하는 방법",
      shortTitle: "Google Flow에서 AI 영상 장면을 자연스럽게 연장하는 방법",
      description:
        "안정적인 First Shot부터 Extend 연결, 마지막 자세 유지, 별도 장면과 디졸브를 선택하는 기준까지 FourFeetz의 실제 제작 경험을 바탕으로 정리합니다.",
      readTime: "약 9분",
      verdict:
        "자연스러운 장면 연장은 Extend 버튼을 누르기 전부터 결정됩니다. 첫 8초에는 하나의 행동만 명확하게 보여주고, 마지막 자세를 안정적으로 유지한 뒤 그 프레임이 감당할 수 있는 움직임만 이어가는 것이 핵심입니다.",
      sections: [
        {
          id: "first-shot",
          title: "First Shot을 장면 연결의 기준으로 사용합니다",
          paragraphs: [
            "FourFeetz의 제작 테스트에서 First Shot은 단순히 보기 좋은 첫 화면이 아니었습니다. 캐릭터의 크기와 얼굴, 화면 속 위치, 조명 방향, 배경 구조와 카메라 거리를 정하는 기준이며, Extend 결과는 이 정보를 이어받아야 합니다.",
            "움직임을 만들기 전에 실제 공개 영상의 프레임이나 승인된 공개 캐릭터 이미지를 확인합니다. 얼굴, 귀, 발, 이름표나 목걸이, 빛의 방향처럼 시청자가 계속 알아볼 요소를 먼저 정리하면 다음 장면에서 무엇이 달라졌는지 빠르게 판단할 수 있습니다.",
          ],
          note:
            "First Shot에서 중요한 특징이 이미 가려져 있거나 서로 다른 자세 정보가 섞여 있으면, 장면을 연장할수록 불확실성이 커질 수 있습니다.",
        },
        {
          id: "one-action",
          title: "실제로 테스트한 것: 첫 8초에 하나의 행동만 담기",
          paragraphs: [
            "걷기, 뒤돌아보기, 소품 들기, 표정 바꾸기와 카메라 이동을 짧은 시간 안에 모두 넣으면 마지막 프레임이 불안정해집니다. FourFeetz는 첫 8초에 하나의 주된 행동을 정하고 호흡, 눈 깜빡임, 작은 체중 이동 정도만 보조 움직임으로 둡니다.",
            "행동이 단순하면 영상이 정적으로 보인다는 뜻은 아닙니다. 장면의 도착 지점이 분명해져야 마지막 자세가 급하게 무너지지 않고, Extend도 새로운 행동을 억지로 만들어내지 않은 채 자연스럽게 이어갈 수 있습니다.",
          ],
          steps: [
            "첫 장면을 눈으로 확인할 수 있는 하나의 행동과 끝 자세로 정리합니다.",
            "배경, 날씨와 카메라 움직임은 주된 행동보다 강하지 않게 유지합니다.",
            "마지막 1초를 정상 속도와 프레임 단위로 모두 확인합니다.",
          ],
        },
        {
          id: "extend-connection",
          title: "효과가 있었던 방법: 안정적인 마지막 자세에서 Extend 연결하기",
          paragraphs: [
            "첫 클립의 마지막 자세는 다음 클립으로 넘어가는 인계 지점입니다. 캐릭터의 중심이 잡혀 있고 얼굴이 보이며, 팔다리가 화면 가장자리에서 잘리지 않는 순간이 연결에 유리했습니다. 마지막 자세를 아주 짧게라도 유지하면 Extend가 어색한 동작을 복구하는 대신 작은 움직임을 이어갈 수 있습니다.",
            "다음 장면의 지시는 새로운 장면을 만드는 설명이 아니라 현재 행동을 계속하는 설명으로 제한합니다. 연결부에서는 실루엣, 얼굴 나이, 소품 위치, 그림자 방향과 카메라 속도를 확인하며, 움직임만 부드럽고 캐릭터가 달라진 결과는 사용하지 않습니다.",
          ],
          bullets: [
            "다음 클립이 이어받을 수 있도록 마지막 자세를 잠시 유지합니다.",
            "새로운 사건을 바로 추가하지 않고 하나의 행동을 계속합니다.",
            "빠른 카메라 이동으로 가려진 일관성 오류도 따로 확인합니다.",
          ],
        },
        {
          id: "separate-scene",
          title: "문제가 생긴 방식: 너무 많은 변화를 Extend에 맡기기",
          paragraphs: [
            "큰 카메라 각도 변화, 새로운 장소, 시간의 이동, 완전히 다른 몸 자세가 필요한 행동은 하나의 Extend로 밀어붙이지 않습니다. 이런 변화까지 연속 동작으로 만들면 신체가 늘어나거나 캐릭터가 중복되고, 화면 밖에서 다른 얼굴로 다시 등장할 가능성이 커졌습니다.",
            "이 경우 다음 장면을 위한 First Shot을 별도로 만들고 편집에서 연결합니다. 짧은 디졸브는 시간의 흐름이나 잔잔한 분위기를 표현할 때 유용하지만, 심한 얼굴이나 체형 불일치를 숨기는 용도로 사용하지 않습니다.",
          ],
          table: {
            title: "변화의 크기에 따라 연결 방식을 선택합니다",
            headers: ["상황", "권장 방식", "이유"],
            rows: [
              ["같은 행동과 카메라", "Extend", "마지막 프레임에 연결 정보가 충분합니다"],
              ["새 각도 또는 장소", "별도 장면", "새 First Shot으로 바뀐 구조를 정확히 정할 수 있습니다"],
              ["잔잔한 시간 이동", "별도 장면 + 짧은 디졸브", "편집 자체가 전환을 자연스럽게 설명합니다"],
            ],
          },
        },
        {
          id: "review",
          title: "실전 핵심 정리: 후반 작업 전에 연결부 점검하기",
          paragraphs: [
            "연결부는 정상 속도로 리듬을 확인하고, 소리를 끈 상태에서 시각적 연결을 보고, 마지막으로 프레임 단위에서 형태 변화를 확인합니다. 얼굴, 귀, 발, 이름표나 목걸이, 조명, 배경선과 카메라 방향을 음악과 색 보정 전에 점검합니다.",
            "문제가 있으면 First Shot, 마지막 자세, 이어지는 행동 중 어느 부분이 처음 실패했는지 구분합니다. 실패한 범위만 다시 제작하면 과정이 명확해지고, 비공개 마스터 프롬프트를 공개하거나 지나치게 긴 지시로 문제를 덮을 필요가 없습니다.",
          ],
          bullets: [
            "연결 전후의 캐릭터가 같은 모습으로 인식됩니다.",
            "첫 클립의 마지막 자세가 다음 동작으로 물리적으로 이어집니다.",
            "이야기상 이유 없이 조명, 카메라 방향과 배경이 튀지 않습니다.",
          ],
        },
      ],
      faqs: [
        {
          question: "Google Flow의 모든 장면을 Extend로 이어야 하나요?",
          answer:
            "아닙니다. 같은 행동과 카메라, 환경이 계속될 때 적합하며 각도, 장소나 시간이 크게 바뀌면 별도 장면이 더 명확합니다.",
        },
        {
          question: "첫 8초에는 어느 정도의 행동을 넣는 것이 좋은가요?",
          answer:
            "하나의 주된 행동과 절제된 보조 움직임을 권장합니다. 그래야 마지막 프레임이 읽기 쉽고 다음 장면으로 연결하기 좋습니다.",
        },
        {
          question: "디졸브로 캐릭터 불일치를 해결할 수 있나요?",
          answer:
            "디졸브는 자연스러운 장면 전환을 부드럽게 만들 수 있지만 얼굴, 나이, 체형이나 소품의 큰 변화를 숨기는 용도로는 적합하지 않습니다.",
        },
      ],
    },
  },
  {
    slug: "common-ai-video-generation-failures",
    hero: "/images/insights/production-guides/ai-video-generation-failures-wide.webp",
    heroAlt: {
      en: "HUGO grazing while HARU runs through a golden meadow in a 16:9 landscape scene",
      ko: "황금빛 초원에서 풀을 뜯는 HUGO와 달리는 HARU를 담은 16:9 가로 장면",
    },
    heroPosition: "50% 48%",
    tags: ["AI Video", "Production Failures", "Quality Control", "Continuity"],
    keywords: {
      en: ["AI video generation failures", "AI character errors", "AI video quality control"],
      ko: ["AI 영상 생성 실패", "AI 캐릭터 오류", "AI 영상 품질 점검"],
    },
    tools: ["Google Flow", "Runway", "Kling AI"],
    characters: ["HARU", "HUGO", "OLI"],
    en: {
      ...guideBasics,
      title: "8 Common AI Video Generation Failures We Encountered",
      shortTitle: "8 Common AI Video Generation Failures We Encountered",
      description:
        "Eight recurring AI video failures observed during FourFeetz production, with practical ways to identify the first broken layer before regenerating.",
      readTime: "10 min read",
      verdict:
        "The fastest repair begins with a precise rejection reason. We separate body, identity, object, environment, camera and action failures instead of treating every weak result as a prompt problem.",
      sections: [
        {
          id: "failure-log",
          title: "What We Tested: A Production Failure Log",
          paragraphs: [
            "Failed generations are useful only when the rejection reason is specific. During FourFeetz production, notes such as “looks strange” did not help the next test. We began recording the first visible break: a paw changed shape, a face aged after re-entry, a prop switched sides, or the camera moved when the shot required stillness.",
            "The list below combines recurring observations across real production tests. It does not expose our private prompts or character bible. Its purpose is to help creators inspect generated clips in a repeatable order and decide whether to trim, edit, replace or regenerate a shot.",
          ],
        },
        {
          id: "body-identity",
          title: "1–2. Body Deformation and Appearance Changes After Re-entry",
          paragraphs: [
            "Body deformation often appears during turns, jumps, contact with props or moments when limbs overlap. A clip may look acceptable at normal speed while a paw merges with the ground or a leg changes length for several frames. We inspect movement at reduced speed before accepting the shot.",
            "OLI’s swimming and backstroke tests made this especially clear. When the shot asked for coordinated full-body swimming, the leg motion and body shape could become unnatural even though the opening frame looked correct. FourFeetz therefore treated the simpler action and the more stable composition as the better production choice, rather than preserving a complex movement that was not convincing.",
            "A second failure occurs when a character leaves the frame and returns with a different face, age, coat pattern or body size. The model has to reconstruct missing visual evidence. We reduce that risk by keeping important features visible and avoiding unnecessary off-screen exits in continuity-sensitive shots.",
          ],
          bullets: [
            "Body deformation: changing limb count, length, joints or contact points.",
            "Re-entry drift: a recognizable character returns with altered age, face or proportions.",
          ],
        },
        {
          id: "duplicates-props",
          title: "3–4. Duplicate Subjects and Small Prop Changes",
          paragraphs: [
            "Duplication can happen when one subject crosses itself, passes behind an object or re-enters the composition. An extra animal or partial face may appear for only a few frames, so we check the full frame rather than watching only the main character.",
            "Small props are equally fragile. A tag, collar, cup or bag may change color, move to the other side or disappear. We identify the few objects that carry story or identity information and review those throughout the clip. Decorative background items receive lower priority unless their change becomes distracting.",
          ],
          bullets: [
            "Subject duplication: a second body, face, tail or shadow appears without a story reason.",
            "Prop drift: shape, color, side, attachment or visibility changes between frames.",
          ],
        },
        {
          id: "wind-camera",
          title: "5–6. Unnecessary Wind and Unplanned Camera Movement",
          paragraphs: [
            "Generated scenes often add motion to prove that they are alive. Fur, grass, curtains and leaves may all move in strong wind even when the story calls for quiet air. Too many moving layers weaken a calm scene and make continuity harder, so we specify and review stillness as an intentional production choice.",
            "The same tendency affects the camera. An unwanted push-in, orbit or handheld drift changes composition, scale and background geometry. If the shot is meant to be locked, we reject motion that changes the storytelling rather than trying to stabilize a severely transformed frame later.",
          ],
          bullets: [
            "Environmental over-motion: wind or moving objects compete with the intended action.",
            "Camera drift: framing, distance or angle changes without a planned editorial purpose.",
          ],
        },
        {
          id: "face-action",
          title: "7–8. Age or Face Drift and Excessive Action",
          paragraphs: [
            "Age and face drift can be subtle. Eye spacing, muzzle length, cheek volume or head-to-body ratio may change while the coat color remains correct. We compare the opening, middle and final frames with the approved public reference rather than relying on a single attractive still.",
            "Excessive action is a production failure even when every frame is technically clean. Too many gestures, reactions and camera changes compress the story and leave no stable end pose. We simplify the shot to one action, then add only the small movement needed to keep it natural.",
          ],
          bullets: [
            "Identity drift: age, face geometry, expression baseline or body scale changes.",
            "Action overload: several story beats compete inside one short generation.",
          ],
        },
        {
          id: "triage",
          title: "Practical Takeaway: Use the Smallest Honest Repair",
          paragraphs: [
            "We first decide whether the failure affects identity, story clarity or only a disposable edge of the clip. A clean trim may remove a late defect. A planned cut or dissolve may connect two valid scenes. A central body or face error normally requires regeneration because finishing cannot restore missing anatomy or identity.",
            "Review in layers: character, important props, environment, camera and action. Record the first broken layer and change one relevant variable in the next test. This produces clearer evidence than rewriting everything and helps the team avoid claiming that an untested result is production-ready.",
          ],
          table: {
            title: "Match the repair to the visible failure",
            headers: ["Failure", "Possible response", "Do not"],
            rows: [
              ["Defect after the usable action", "Trim the ending", "Keep broken frames for duration"],
              ["Valid shots with a natural time change", "Cut or short dissolve", "Hide major identity drift"],
              ["Face, body or duplicate subject error", "Regenerate the failing shot", "Expect grading or upscale to repair it"],
            ],
          },
        },
      ],
      faqs: [
        {
          question: "Do all AI video errors require regeneration?",
          answer:
            "No. A late edge defect may be trimmed and two valid scenes may be edited together. Central body, face or duplication errors usually require a new generation.",
        },
        {
          question: "Why review a clip frame by frame?",
          answer:
            "Some deformations and duplicate features last only a few frames and are easy to miss at normal speed, especially under camera movement.",
        },
        {
          question: "Are these failures tied to one AI video tool?",
          answer:
            "No. Their frequency and appearance vary by tool and model, but the review categories are useful across image-to-video and generative video workflows.",
        },
      ],
    },
    ko: {
      ...koreanGuideBasics,
      title: "FourFeetz 제작 중 실제로 겪은 AI 영상 생성 실패 사례 8가지",
      shortTitle: "FourFeetz 제작 중 실제로 겪은 AI 영상 생성 실패 사례 8가지",
      description:
        "FourFeetz의 실제 제작 테스트에서 반복적으로 발견한 신체, 외형, 소품, 환경, 카메라와 동작 오류를 점검 순서와 함께 정리합니다.",
      readTime: "약 10분",
      verdict:
        "실패를 빠르게 고치려면 먼저 거절 이유를 정확하게 적어야 합니다. 모든 문제를 프롬프트 문제로 묶지 않고 신체, 정체성, 소품, 환경, 카메라와 행동 중 어디서 처음 깨졌는지 구분합니다.",
      sections: [
        {
          id: "failure-log",
          title: "실제로 테스트한 것: 제작 실패 기록표",
          paragraphs: [
            "FourFeetz 제작 과정에서 ‘이상해 보인다’는 기록은 다음 테스트에 도움이 되지 않았습니다. 발 모양이 바뀌었는지, 화면 밖에서 돌아온 얼굴이 달라졌는지, 소품 위치가 이동했는지, 고정해야 할 카메라가 움직였는지처럼 처음 발생한 문제를 구체적으로 기록합니다.",
            "아래 내용은 실제 제작 테스트에서 반복적으로 확인한 사례를 정리한 것입니다. 비공개 프롬프트나 캐릭터 바이블을 공개하지 않으며, 생성된 영상을 일정한 순서로 검토하고 잘라낼지, 편집할지, 다시 만들지 판단하는 데 목적이 있습니다.",
          ],
        },
        {
          id: "body-identity",
          title: "1–2. 신체 변형과 화면 재등장 후 외형 변화",
          paragraphs: [
            "신체 변형은 몸을 돌리거나 점프할 때, 소품과 접촉하거나 팔다리가 겹칠 때 자주 나타났습니다. 정상 속도에서는 자연스러워 보여도 몇 프레임 동안 발이 바닥과 합쳐지거나 다리 길이가 달라질 수 있어 느린 속도로도 확인합니다.",
            "OLI의 수영과 배영 장면에서 이 문제가 특히 분명했습니다. 전신이 함께 움직이는 복잡한 수영을 요청하자 시작 화면은 맞아도 다리 움직임과 몸 형태가 어색해지는 결과가 나왔습니다. FourFeetz 제작에서는 설득력이 떨어지는 복잡한 동작을 유지하기보다 행동을 단순화하고 구도를 안정시키는 쪽이 더 적합하다고 판단했습니다.",
            "캐릭터가 화면 밖으로 나갔다가 다시 등장하면 얼굴, 나이, 털무늬나 몸 크기가 달라지는 경우가 있습니다. 사라진 정보를 다시 구성해야 하기 때문에 중요한 특징을 계속 화면에 두고, 연속성이 중요한 장면에서는 불필요한 화면 이탈을 줄입니다.",
          ],
          bullets: [
            "신체 변형: 팔다리 수, 길이, 관절이나 바닥 접촉 지점이 달라집니다.",
            "재등장 외형 변화: 같은 캐릭터가 다른 나이, 얼굴 또는 체형으로 돌아옵니다.",
          ],
        },
        {
          id: "duplicates-props",
          title: "3–4. 인물 중복과 작은 소품 변경",
          paragraphs: [
            "한 캐릭터가 다른 물체 뒤로 지나가거나 화면을 벗어났다가 돌아올 때 두 개의 몸이나 얼굴 일부가 생길 수 있습니다. 몇 프레임만 나타나는 중복도 있어 주인공만 보지 않고 화면 전체를 확인합니다.",
            "이름표, 목걸이, 컵이나 가방 같은 작은 소품은 색, 방향과 위치가 바뀌거나 사라지기 쉽습니다. 이야기나 캐릭터 인식에 중요한 소품을 먼저 정하고 클립 전체에서 유지되는지 점검합니다.",
          ],
          bullets: [
            "인물 중복: 이유 없이 두 번째 몸, 얼굴, 꼬리나 그림자가 나타납니다.",
            "소품 변경: 모양, 색, 방향, 부착 위치나 보이는 정도가 달라집니다.",
          ],
        },
        {
          id: "wind-camera",
          title: "5–6. 불필요한 바람과 계획하지 않은 카메라 이동",
          paragraphs: [
            "AI 영상은 장면이 살아 있음을 보여주기 위해 털, 풀, 커튼과 나뭇잎을 한꺼번에 움직이는 경우가 있습니다. 조용한 장면에서는 이런 바람이 분위기를 깨고 연결도 어렵게 만들기 때문에 움직이지 않는 상태도 의도적인 연출로 점검합니다.",
            "카메라도 요청하지 않은 줌인, 회전이나 흔들림을 추가할 수 있습니다. 고정 구도가 필요한 장면에서 카메라가 움직이면 캐릭터 크기와 배경 구조까지 달라지므로, 후반 안정화에 기대기보다 이야기 목적과 다른 이동을 먼저 제외합니다.",
          ],
          bullets: [
            "환경의 과한 움직임: 바람과 배경 요소가 주된 행동보다 눈에 띕니다.",
            "카메라 이동: 계획 없이 구도, 거리나 각도가 변합니다.",
          ],
        },
        {
          id: "face-action",
          title: "7–8. 나이·얼굴 변화와 과도한 동작",
          paragraphs: [
            "털 색이 같아도 눈 간격, 주둥이 길이, 볼의 부피나 머리와 몸의 비율이 달라지면 다른 나이와 얼굴로 보입니다. 시작, 중간과 마지막 프레임을 공개된 기준 이미지와 비교해 한 장의 보기 좋은 프레임만으로 판단하지 않습니다.",
            "각 프레임이 깨끗해도 너무 많은 행동이 들어가면 제작상 실패입니다. 여러 제스처와 반응, 카메라 변화가 한 장면에서 경쟁하고 마지막 자세도 불안정해집니다. 주된 행동 하나로 줄인 뒤 자연스러움에 필요한 작은 움직임만 추가합니다.",
          ],
          bullets: [
            "정체성 변화: 나이, 얼굴 구조, 기본 표정이나 몸 크기가 달라집니다.",
            "과도한 동작: 짧은 생성 구간 안에서 여러 이야기 사건이 경쟁합니다.",
          ],
        },
        {
          id: "triage",
          title: "실전 핵심 정리: 문제에 맞는 가장 작은 해결 방법 선택하기",
          paragraphs: [
            "먼저 오류가 캐릭터 정체성과 이야기 이해에 영향을 주는지, 아니면 클립 끝부분의 제거 가능한 문제인지 구분합니다. 늦게 발생한 오류는 잘라낼 수 있고, 각각 정상인 두 장면은 계획된 컷이나 디졸브로 연결할 수 있습니다. 중심 인물의 얼굴과 신체 오류는 후반 작업으로 복원할 수 없어 다시 제작합니다.",
            "캐릭터, 중요한 소품, 환경, 카메라, 행동 순서로 확인하고 처음 깨진 지점을 기록합니다. 다음 테스트에서는 관련된 조건 하나만 바꾸면 어떤 선택이 실제로 개선에 기여했는지 알 수 있습니다.",
          ],
          table: {
            title: "보이는 문제에 맞춰 해결 방법을 선택합니다",
            headers: ["문제", "가능한 대응", "피해야 할 대응"],
            rows: [
              ["사용 가능한 행동 뒤의 오류", "끝부분 자르기", "길이를 위해 깨진 프레임 유지"],
              ["시간 전환이 자연스러운 두 정상 장면", "컷 또는 짧은 디졸브", "큰 정체성 변화 숨기기"],
              ["얼굴, 신체 또는 인물 중복", "해당 장면 재생성", "색 보정이나 업스케일에 기대기"],
            ],
          },
        },
      ],
      faqs: [
        {
          question: "모든 AI 영상 오류는 다시 생성해야 하나요?",
          answer:
            "아닙니다. 끝부분의 작은 오류는 잘라낼 수 있고 정상 장면끼리는 편집으로 연결할 수 있습니다. 중심 신체, 얼굴이나 중복 오류는 대체로 재생성이 필요합니다.",
        },
        {
          question: "왜 프레임 단위로 확인해야 하나요?",
          answer:
            "일부 신체 변형과 중복 특징은 몇 프레임 동안만 나타나며, 카메라가 움직일 때 정상 속도로 보면 놓치기 쉽습니다.",
        },
        {
          question: "이 실패 사례는 특정 도구에서만 발생하나요?",
          answer:
            "아닙니다. 도구와 모델에 따라 빈도와 형태는 다르지만, 이 점검 항목은 여러 이미지 기반 영상 및 생성형 영상 제작에 활용할 수 있습니다.",
        },
      ],
    },
  },
  {
    slug: "create-ai-shorts-9-16-from-start",
    hero: "/images/insights/production-guides/ai-shorts-9-16-wide.webp",
    heroAlt: {
      en: "HARU and PORI together in a flower garden at golden hour, composed as a 16:9 landscape scene",
      ko: "노을빛 꽃밭에 나란히 있는 HARU와 PORI를 담은 16:9 가로 장면",
    },
    heroPosition: "50% 50%",
    tags: ["AI Shorts", "Vertical Video", "9:16", "Social Video"],
    keywords: {
      en: ["create AI Shorts 9:16", "vertical AI video", "Shorts safe area", "AI Shorts thumbnail"],
      ko: ["AI 쇼츠 9:16", "세로 AI 영상", "쇼츠 안전 영역", "쇼츠 썸네일 비율"],
    },
    tools: ["Google Flow", "AI Video"],
    characters: ["HARU"],
    en: {
      ...guideBasics,
      title: "Why AI Shorts Should Be Created in 9:16 from the Start",
      shortTitle: "Why AI Shorts Should Be Created in 9:16 from the Start",
      description:
        "Why FourFeetz plans vertical First Shots, safe areas, opening action and thumbnails in 9:16 instead of cropping a finished landscape video.",
      readTime: "8 min read",
      verdict:
        "A 9:16 Short is a different composition, not a narrow export of a 16:9 scene. Starting vertical protects the character, the first-second hook and the space needed by platform controls.",
      sections: [
        {
          id: "vertical-first-shot",
          title: "What We Tested: A Native 9:16 First Shot",
          paragraphs: [
            "A landscape First Shot encourages wide spacing, side-to-side action and environmental details that cannot all survive a vertical crop. In our Shorts workflow, the 9:16 frame is approved before motion begins. The character’s size, eye line, movement path and background are designed for the final viewing shape.",
            "For FourFeetz animal-character Shorts, that vertical image is also the production reference for appearance, composition and lighting. Motion tests begin only after those three layers read correctly in the 9:16 First Shot, so a later generation is judged against a concrete frame rather than a newly invented description.",
            "This also improves generation review. We can see whether ears, paws and important accessories remain inside the frame throughout the planned action. Reframing later may rescue a simple shot, but it cannot restore visual information that was composed outside the crop.",
          ],
        },
        {
          id: "safe-area",
          title: "Protect the Safe Area and Center the Main Action",
          paragraphs: [
            "Short-form platforms place interface elements near the sides and bottom of the screen. We keep the face, key action and story-critical props away from those edges. Background detail can extend outward, but the moment viewers must understand stays inside a practical central safe area.",
            "Centered composition does not mean placing everything on one rigid axis. The character can lean or move within the frame, but the action path is planned so it does not disappear behind controls or require aggressive tracking. We test the clip at phone size because a composition that feels spacious on a monitor can feel crowded in the feed.",
          ],
          bullets: [
            "Keep the face and primary action clear of interface-heavy edges.",
            "Leave breathing room above ears and below moving paws.",
            "Check captions and important props at real phone viewing size.",
          ],
        },
        {
          id: "opening",
          title: "Design the First One to Two Seconds",
          paragraphs: [
            "Viewers decide quickly whether to keep watching, but a strong opening does not require frantic movement. We begin with an immediately readable subject and a small visual question: a glance, a held object, a clear direction of travel or a simple change about to happen.",
            "The first frame should already make sense before captions or sound. We avoid slow landscape-style establishing shots when the Short depends on a character moment. The opening action is kept simple enough that the model can preserve identity while giving the viewer a clear reason to stay.",
          ],
          steps: [
            "Show the subject at a readable size in the first frame.",
            "Introduce one visual question or action within the first two seconds.",
            "Confirm that the opening still works with sound muted.",
          ],
        },
        {
          id: "crop-problems",
          title: "What Went Wrong: Cropping a Finished 16:9 Video",
          paragraphs: [
            "A central crop removes both sides of a landscape frame. Two characters may no longer fit together, a hand or paw may leave the screen, and camera movement can push the subject outside the vertical window. Automated reframing may follow the face but produce distracting lateral movement.",
            "Cropping can be acceptable when the original action is already central, slow and generously framed. Otherwise we create a vertical First Shot and generate the scene for 9:16. That preserves the intended relationship between character and environment instead of treating the background as disposable.",
          ],
          table: {
            title: "Landscape crop or native vertical?",
            headers: ["Source shot", "Likely result", "Preferred choice"],
            rows: [
              ["One centered subject, restrained motion", "May reframe cleanly", "Test crop before regenerating"],
              ["Two subjects spread horizontally", "Relationship is lost", "Create native 9:16"],
              ["Fast sideways camera or action", "Subject exits crop", "Redesign movement vertically"],
            ],
          },
        },
        {
          id: "thumbnail",
          title: "Practical Takeaway: Keep the Shorts Thumbnail Vertical Too",
          paragraphs: [
            "The thumbnail should be selected from or designed for the same vertical composition. Placing a small portrait image inside a wide thumbnail area weakens the subject and misrepresents how the Short is viewed. We retain the full 9:16 image and check that the face and action remain legible at small size.",
            "Before publishing, we review the opening frame, cover choice, captions and interface safe area together. A strong vertical clip can still lose clarity if its cover crops the ears, hides the key prop or uses a frame from the middle of a distorted transition.",
          ],
          bullets: [
            "Preserve the source 9:16 ratio instead of placing it inside a wide canvas.",
            "Choose a clean frame with stable face, ears, paws and accessories.",
            "Preview the cover at the small size used by a Shorts grid.",
          ],
        },
      ],
      faqs: [
        {
          question: "Can a 16:9 AI video be converted into a Short?",
          answer:
            "Sometimes, especially with one centered subject and restrained movement. Complex wide compositions are usually better rebuilt from a vertical First Shot.",
        },
        {
          question: "Does a vertical composition always need the subject in the exact center?",
          answer:
            "No. The subject can move and the composition can remain dynamic, but the essential action should stay inside a safe, readable area.",
        },
        {
          question: "Should the thumbnail also use 9:16?",
          answer:
            "Yes. Keeping the vertical source ratio preserves the intended character scale and avoids presenting a small portrait inside an unrelated wide frame.",
        },
      ],
    },
    ko: {
      ...koreanGuideBasics,
      title: "AI 쇼츠를 처음부터 9:16으로 제작해야 하는 이유",
      shortTitle: "AI 쇼츠를 처음부터 9:16으로 제작해야 하는 이유",
      description:
        "완성된 가로 영상을 자르는 대신 세로 First Shot, 안전 영역, 첫 1~2초와 썸네일까지 처음부터 9:16으로 설계하는 이유를 설명합니다.",
      readTime: "약 8분",
      verdict:
        "9:16 쇼츠는 16:9 장면을 좁게 잘라낸 결과가 아니라 다른 구도로 제작해야 하는 영상입니다. 처음부터 세로로 설계해야 캐릭터와 첫 장면의 집중도, 플랫폼 UI를 피할 공간을 함께 지킬 수 있습니다.",
      sections: [
        {
          id: "vertical-first-shot",
          title: "실제로 테스트한 것: 9:16 세로 First Shot",
          paragraphs: [
            "가로 First Shot은 넓은 인물 간격, 좌우 이동과 많은 배경 정보를 자연스럽게 유도하지만 이 요소가 세로 크롭 안에 모두 남기는 어렵습니다. FourFeetz는 쇼츠 제작에서 움직임을 만들기 전에 9:16 프레임의 캐릭터 크기, 시선, 이동 경로와 배경 구성을 먼저 확인합니다.",
            "FourFeetz 동물 캐릭터 쇼츠에서는 이 세로 이미지가 외형, 구도와 조명의 제작 기준도 됩니다. 세 요소가 9:16 First Shot 안에서 제대로 보이는지 승인한 뒤 영상 테스트를 시작하므로, 이후 결과를 새로 덧붙인 외형 설명이 아니라 구체적인 기준 프레임과 비교할 수 있습니다.",
            "세로 기준을 먼저 잡으면 귀, 발과 중요한 소품이 행동 중에도 화면 안에 남는지 바로 검토할 수 있습니다. 단순한 장면은 나중에 재구성할 수 있지만, 원래 크롭 밖에 배치된 정보는 편집으로 되살릴 수 없습니다.",
          ],
        },
        {
          id: "safe-area",
          title: "안전 영역 안에 주된 행동을 배치합니다",
          paragraphs: [
            "쇼츠 플랫폼은 화면 옆과 아래에 버튼, 설명과 자막을 표시합니다. 얼굴, 핵심 행동과 중요한 소품은 이 영역을 피해 중앙의 읽기 쉬운 범위에 둡니다. 배경은 바깥까지 이어져도 되지만 시청자가 이해해야 할 순간은 UI에 가려지지 않아야 합니다.",
            "중앙 구도가 모든 대상을 정확히 한 줄에 세운다는 뜻은 아닙니다. 캐릭터가 기울거나 이동하더라도 행동 경로가 버튼 뒤로 사라지지 않게 계획합니다. 모니터에서 여유 있어 보이는 화면도 휴대전화에서는 답답할 수 있어 실제 작은 크기로 확인합니다.",
          ],
          bullets: [
            "얼굴과 주된 행동을 UI가 많은 가장자리에서 떨어뜨립니다.",
            "귀 위와 움직이는 발 아래에 충분한 여백을 둡니다.",
            "자막과 중요한 소품을 휴대전화 크기에서 확인합니다.",
          ],
        },
        {
          id: "opening",
          title: "첫 1~2초를 별도로 설계합니다",
          paragraphs: [
            "시청자는 짧은 시간 안에 계속 볼지 결정하지만 강한 시작이 반드시 빠르고 과한 동작을 뜻하지는 않습니다. 첫 화면에서 대상을 바로 알아볼 수 있게 하고, 시선 이동, 들고 있는 물건, 움직일 방향처럼 작은 시각적 질문을 만듭니다.",
            "자막과 소리가 없어도 첫 프레임이 이해되어야 합니다. 캐릭터 순간이 중요한 쇼츠라면 느린 가로형 배경 소개를 줄이고, 정체성을 유지하면서도 다음 순간을 궁금하게 만드는 하나의 행동으로 시작합니다.",
          ],
          steps: [
            "첫 프레임에서 대상을 알아볼 수 있는 크기로 보여줍니다.",
            "첫 2초 안에 하나의 시각적 질문이나 행동을 시작합니다.",
            "소리를 끈 상태에서도 시작 장면이 이해되는지 확인합니다.",
          ],
        },
        {
          id: "crop-problems",
          title: "문제가 생긴 방식: 완성된 16:9 영상 자르기",
          paragraphs: [
            "가로 화면을 중앙에서 자르면 양쪽 정보가 사라집니다. 두 캐릭터가 함께 보이지 않거나 손과 발이 화면 밖으로 나가고, 카메라가 움직일 때 대상이 세로 창을 벗어날 수 있습니다. 자동 리프레이밍이 얼굴을 따라가더라도 불필요한 좌우 이동이 생기기도 합니다.",
            "원본 행동이 이미 중앙에 있고 느리며 여백이 충분하면 크롭을 시험할 수 있습니다. 그렇지 않다면 9:16 First Shot을 새로 정하고 세로 장면으로 제작하는 편이 캐릭터와 환경의 관계를 정확하게 유지합니다.",
          ],
          table: {
            title: "가로 크롭과 세로 원본을 선택하는 기준",
            headers: ["원본 장면", "예상 결과", "권장 선택"],
            rows: [
              ["중앙의 한 인물과 작은 움직임", "비교적 자연스럽게 재구성 가능", "재생성 전 크롭 테스트"],
              ["좌우로 떨어진 두 인물", "관계와 행동이 잘림", "9:16 원본 제작"],
              ["빠른 좌우 카메라 또는 행동", "대상이 화면 밖으로 이동", "세로 방향에 맞게 움직임 재설계"],
            ],
          },
        },
        {
          id: "thumbnail",
          title: "실전 핵심 정리: 쇼츠 썸네일도 세로 비율 유지하기",
          paragraphs: [
            "썸네일은 같은 세로 구도에서 선택하거나 9:16을 기준으로 만들어야 합니다. 넓은 이미지 영역 가운데 작은 세로 이미지를 넣으면 캐릭터가 작아지고 실제 시청 화면과도 달라집니다. 원본 비율을 유지한 채 작은 크기에서 얼굴과 행동이 보이는지 확인합니다.",
            "게시 전에는 시작 프레임, 커버, 자막과 안전 영역을 함께 검토합니다. 좋은 세로 영상도 썸네일에서 귀가 잘리거나 중요한 소품이 가려지고, 변형 중인 중간 프레임을 사용하면 매력이 떨어질 수 있습니다.",
          ],
          bullets: [
            "세로 이미지를 넓은 캔버스 안에 작게 넣지 않고 9:16 원본 비율을 유지합니다.",
            "얼굴, 귀, 발과 소품이 안정적인 프레임을 고릅니다.",
            "쇼츠 목록에서 실제로 보이는 작은 크기로 커버를 확인합니다.",
          ],
        },
      ],
      faqs: [
        {
          question: "16:9 AI 영상을 쇼츠로 바꿀 수 있나요?",
          answer:
            "한 인물이 중앙에 있고 움직임이 작다면 가능합니다. 넓은 구도와 복잡한 움직임은 세로 First Shot부터 다시 만드는 편이 안전합니다.",
        },
        {
          question: "세로 영상은 항상 인물을 정확히 중앙에 둬야 하나요?",
          answer:
            "아닙니다. 역동적인 이동과 구도를 사용할 수 있지만, 핵심 행동은 UI에 가리지 않는 읽기 쉬운 영역 안에 유지해야 합니다.",
        },
        {
          question: "썸네일도 9:16을 사용해야 하나요?",
          answer:
            "네. 세로 원본 비율을 유지하면 의도한 캐릭터 크기를 보존하고 넓은 프레임 속에 작은 세로 이미지가 들어가는 문제를 피할 수 있습니다.",
        },
      ],
    },
  },
  {
    slug: "reduce-character-inconsistency-ai-video",
    hero: "/images/insights/production-guides/character-consistency-wide.webp",
    heroAlt: {
      en: "HARU seated in profile in a warm white studio, composed as a 16:9 landscape character study",
      ko: "따뜻한 흰색 스튜디오에서 옆모습으로 앉아 있는 HARU의 16:9 가로 캐릭터 이미지",
    },
    heroPosition: "45% 50%",
    tags: ["Character Consistency", "AI Animation", "Reference Images", "Quality Control"],
    keywords: {
      en: ["reduce character inconsistency AI video", "AI character reference", "consistent AI animation"],
      ko: ["AI 영상 캐릭터 일관성", "AI 캐릭터 기준 이미지", "일관된 AI 애니메이션"],
    },
    tools: ["AI Image", "AI Video"],
    characters: ["HARU"],
    en: {
      ...guideBasics,
      title: "How We Reduce Character Inconsistency in AI Videos",
      shortTitle: "How We Reduce Character Inconsistency in AI Videos",
      description:
        "A practical review method for keeping character age, size, face and silhouette stable while simplifying action, camera and re-entry.",
      readTime: "9 min read",
      verdict:
        "Consistency improves when the shot asks the model to preserve fewer, clearer decisions. One approved reference, one simple action and a stable camera are more useful than adding uncontrolled detail.",
      sections: [
        {
          id: "reference",
          title: "What We Tested: One Clear Reference Purpose",
          paragraphs: [
            "A reference image is useful only when the team knows what it proves. A neutral character image may establish face, ears, proportions and accessories. A cinematic frame may establish lighting and mood. We avoid treating several visually different images as interchangeable evidence inside one shot.",
            "Once a First Shot is approved, FourFeetz keeps the same visible environment and lets the reference carry the appearance decisions. The motion instruction stays concise and describes what the character does next. Repeating new appearance language too aggressively can compete with the evidence already present in the frame and introduce an unintended redesign.",
            "For each generation, we identify the primary public reference and list the visible features that must survive. This guide shares the review principle, not the private prompt or complete character bible used by FourFeetz.",
          ],
          note:
            "More references are not automatically safer. Conflicting age, angle, coat color or proportions can give the model several valid-looking identities to choose from.",
        },
        {
          id: "identity",
          title: "Protect Age, Size and Face Before Fine Detail",
          paragraphs: [
            "Viewers notice overall age and proportion before tiny texture. We compare head-to-body ratio, eye spacing, muzzle length, ear shape and the character’s scale against nearby objects. A clip can preserve fur color and still make the character look older, taller or like a different individual.",
            "We check the opening, middle and final frames rather than choosing the best still. Identity must survive movement. If a central facial feature changes, we regenerate the shot instead of relying on color grading, sharpening or a fast edit to disguise it.",
          ],
          bullets: [
            "Age: head-to-body ratio, facial volume and baseline expression remain stable.",
            "Size: the character keeps a believable scale against the environment and other characters.",
            "Face: eye spacing, muzzle, ears and recognizable silhouette do not drift.",
          ],
        },
        {
          id: "simple-action",
          title: "What Worked: Simplify the Action Before Adding Complexity",
          paragraphs: [
            "Every new action asks the generation to solve more anatomy, contact and timing. A walk, turn, jump, prop interaction and expression change inside one clip creates several opportunities for the character to be rebuilt. We divide the sequence into shots with one primary action.",
            "Small secondary movement keeps the result alive: breathing, blinking, a restrained glance or a gentle weight shift. We add complexity only after the simplest version preserves identity. This gives us a clear baseline and makes failures easier to diagnose.",
          ],
          steps: [
            "Define one primary action and its final pose.",
            "Generate the stable version with restrained camera and environment.",
            "Add one supporting movement only when it improves the story.",
          ],
        },
        {
          id: "camera-background",
          title: "Hold the Background and Camera Still When Possible",
          paragraphs: [
            "A moving camera changes apparent size, angle, lighting and background geometry at the same time. That can be appropriate, but it makes identity review harder. For continuity-sensitive moments, a locked or gently controlled camera gives the model fewer relationships to reconstruct.",
            "We apply the same principle to the environment. Unnecessary wind, moving objects and shifting light can pull attention away from the character and change fur edges. Once a stable take exists, intentional camera or environmental motion can be tested as a separate production choice.",
          ],
          bullets: [
            "Use a stable camera for identity-critical shots.",
            "Keep background movement subordinate to the character action.",
            "Change lighting or camera direction only when the story needs it.",
          ],
        },
        {
          id: "reentry",
          title: "Practical Takeaway: Limit Off-screen Exits and Re-entry",
          paragraphs: [
            "When a character disappears completely, the next frames must reconstruct its face, body and position without continuous visual evidence. We avoid unnecessary exits in shots that must preserve identity and keep at least the most important features visible whenever the composition allows.",
            "If leaving and returning is essential, we often split the moment into separately approved shots and edit them together. The final review checks silhouette, face, age, scale, ears, paws and accessories. A smooth transition is not enough if the returning character is no longer the same.",
          ],
          table: {
            title: "Reduce reconstruction during the shot",
            headers: ["Production choice", "Continuity risk", "Safer option"],
            rows: [
              ["Full off-screen exit", "High", "Keep part of the body visible or use a cut"],
              ["Fast orbiting camera", "High", "Use a stable angle for the identity-critical action"],
              ["One action in a fixed setting", "Lower", "Review start, middle and final frames"],
            ],
          },
        },
      ],
      faqs: [
        {
          question: "Can a longer prompt guarantee character consistency?",
          answer:
            "No. Clear references, restrained action, stable staging and systematic review are usually more dependable than adding uncontrolled instructions.",
        },
        {
          question: "Why compare more than the opening frame?",
          answer:
            "A character may begin correctly and drift in age, face or scale during motion, especially after turns, occlusion or re-entry.",
        },
        {
          question: "Should the camera always be locked?",
          answer:
            "No. Camera movement can serve the story, but a stable camera is a useful baseline when identity is the main production risk.",
        },
      ],
    },
    ko: {
      ...koreanGuideBasics,
      title: "AI 영상에서 캐릭터 일관성 문제를 줄이는 방법",
      shortTitle: "AI 영상에서 캐릭터 일관성 문제를 줄이는 방법",
      description:
        "기준 이미지와 캐릭터의 나이, 크기, 얼굴을 유지하고 행동, 배경, 카메라와 화면 재등장을 단순하게 관리하는 실제 점검 방법입니다.",
      readTime: "약 9분",
      verdict:
        "캐릭터 일관성은 더 많은 정보를 넣을 때보다 지켜야 할 결정을 명확하게 줄일 때 좋아졌습니다. 하나의 기준 이미지, 하나의 단순한 행동과 안정적인 카메라가 불필요한 세부 지시보다 효과적입니다.",
      sections: [
        {
          id: "reference",
          title: "실제로 테스트한 것: 기준 이미지의 역할 하나로 정하기",
          paragraphs: [
            "기준 이미지는 무엇을 확인하기 위한 자료인지 분명해야 합니다. 정면에 가까운 캐릭터 이미지는 얼굴, 귀, 비율과 소품을 보여주고, 영상 프레임은 조명과 분위기를 보여줄 수 있습니다. 서로 다른 목적의 이미지를 한 장면에서 같은 기준처럼 섞지 않습니다.",
            "First Shot이 승인되면 FourFeetz는 화면에 보이는 환경을 그대로 유지하고, 외형에 관한 판단은 기준 이미지가 담당하게 합니다. 영상 지시는 캐릭터가 다음에 무엇을 하는지 간결하게 적습니다. 새로운 외형 설명을 지나치게 반복하면 이미 프레임에 있는 근거와 경쟁해 의도하지 않은 재설계를 만들 수 있었습니다.",
            "각 생성에서는 가장 중요한 공개 기준 이미지를 정하고 반드시 유지할 특징을 눈으로 확인합니다. 여기서는 검토 원칙만 공유하며 FourFeetz의 비공개 프롬프트와 전체 캐릭터 바이블은 공개하지 않습니다.",
          ],
          note:
            "기준 이미지가 많다고 항상 안전한 것은 아닙니다. 나이, 각도, 털 색이나 비율이 다른 이미지는 여러 개의 정답처럼 작용할 수 있습니다.",
        },
        {
          id: "identity",
          title: "세부 질감보다 나이·크기·얼굴을 먼저 지킵니다",
          paragraphs: [
            "시청자는 작은 털 질감보다 전체적인 나이와 비율을 먼저 알아봅니다. 머리와 몸의 비율, 눈 간격, 주둥이 길이, 귀 모양과 주변 물체에 대한 캐릭터 크기를 비교합니다. 털 색은 같아도 더 나이 들어 보이거나 키가 커지면 다른 캐릭터로 인식될 수 있습니다.",
            "가장 좋은 한 프레임만 고르지 않고 시작, 중간과 마지막 화면을 확인합니다. 중심 얼굴 특징이 바뀐 경우에는 색 보정이나 선명도, 빠른 편집으로 숨기지 않고 해당 장면을 다시 만듭니다.",
          ],
          bullets: [
            "나이: 머리와 몸 비율, 얼굴의 부피와 기본 표정을 유지합니다.",
            "크기: 환경과 다른 캐릭터에 대한 상대적 크기가 자연스럽게 이어집니다.",
            "얼굴: 눈 간격, 주둥이, 귀와 알아볼 수 있는 실루엣이 바뀌지 않습니다.",
          ],
        },
        {
          id: "simple-action",
          title: "효과가 있었던 방법: 복잡한 연출 전에 행동 단순화하기",
          paragraphs: [
            "행동이 늘어날수록 신체 구조, 접촉과 타이밍을 새로 해결해야 합니다. 걷기, 뒤돌기, 점프, 소품 사용과 표정 변화를 한 클립에 넣으면 캐릭터가 다시 구성될 기회도 많아집니다. 한 장면에는 하나의 주된 행동을 둡니다.",
            "호흡, 눈 깜빡임, 작은 시선 이동이나 체중 변화는 장면을 자연스럽게 만들 수 있습니다. 가장 단순한 버전에서 정체성이 유지된 뒤에만 보조 움직임을 추가하면 실패 원인을 구분하기 쉽습니다.",
          ],
          steps: [
            "하나의 주된 행동과 마지막 자세를 정합니다.",
            "카메라와 환경 움직임을 줄인 안정적인 버전을 만듭니다.",
            "이야기에 도움이 될 때만 보조 움직임을 하나씩 추가합니다.",
          ],
        },
        {
          id: "camera-background",
          title: "가능하면 배경과 카메라를 안정적으로 유지합니다",
          paragraphs: [
            "카메라가 움직이면 캐릭터의 겉보기 크기, 각도, 조명과 배경 구조가 동시에 달라집니다. 필요한 연출일 수 있지만 캐릭터 일관성을 확인하기는 어려워집니다. 정체성이 중요한 순간에는 고정되거나 절제된 카메라로 다시 구성해야 할 관계를 줄입니다.",
            "배경도 같은 원칙을 적용합니다. 불필요한 바람, 움직이는 물체와 조명 변화는 캐릭터에서 시선을 빼앗고 털의 경계도 달라지게 합니다. 안정적인 결과를 확보한 뒤 카메라나 환경 움직임을 별도 선택으로 시험합니다.",
          ],
          bullets: [
            "정체성이 중요한 장면에는 안정적인 카메라를 사용합니다.",
            "배경 움직임은 캐릭터의 주된 행동보다 약하게 유지합니다.",
            "조명과 카메라 방향은 이야기상 필요할 때만 바꿉니다.",
          ],
        },
        {
          id: "reentry",
          title: "실전 핵심 정리: 화면 밖 이탈과 재등장 줄이기",
          paragraphs: [
            "캐릭터가 완전히 사라지면 다음 프레임은 연속된 시각 정보 없이 얼굴, 몸과 위치를 다시 구성해야 합니다. 정체성을 유지해야 하는 장면에서는 불필요한 이탈을 피하고, 구도가 허용하면 중요한 특징을 화면 안에 남깁니다.",
            "나갔다가 돌아오는 행동이 꼭 필요하면 각각 승인한 별도 장면으로 나누어 편집하는 방법도 사용합니다. 최종 검토에서는 실루엣, 얼굴, 나이, 크기, 귀, 발과 소품을 확인하며 연결만 부드럽고 캐릭터가 달라진 결과는 사용하지 않습니다.",
          ],
          table: {
            title: "장면 안에서 다시 구성해야 할 정보를 줄입니다",
            headers: ["제작 선택", "연속성 위험", "더 안전한 선택"],
            rows: [
              ["완전한 화면 밖 이탈", "높음", "몸 일부를 남기거나 컷으로 분리"],
              ["빠르게 회전하는 카메라", "높음", "정체성 핵심 행동은 안정적인 각도 사용"],
              ["고정된 환경의 한 가지 행동", "낮음", "시작, 중간과 마지막 프레임 확인"],
            ],
          },
        },
      ],
      faqs: [
        {
          question: "프롬프트를 길게 쓰면 캐릭터 일관성이 보장되나요?",
          answer:
            "아닙니다. 명확한 기준 이미지, 절제된 행동, 안정적인 구도와 체계적인 검토가 통제되지 않은 지시를 계속 추가하는 것보다 안정적입니다.",
        },
        {
          question: "왜 시작 화면 외에 중간과 마지막도 비교하나요?",
          answer:
            "처음에는 맞아도 움직임, 가림이나 재등장 과정에서 나이, 얼굴과 크기가 달라질 수 있기 때문입니다.",
        },
        {
          question: "카메라는 항상 고정해야 하나요?",
          answer:
            "아닙니다. 카메라 움직임은 이야기에 필요할 수 있지만, 정체성이 가장 큰 위험이라면 고정 카메라가 유용한 기준이 됩니다.",
        },
      ],
    },
  },
  {
    slug: "seamless-loops-relaxing-ai-videos",
    hero: "/images/works/haru-relax-moments-ep03/final-sleeping-shot.webp",
    heroAlt: {
      en: "Published final sleeping frame from HARU Relaxing Moments",
      ko: "HARU Relaxing Moments에 공개된 마지막 수면 장면",
    },
    tags: ["Relaxing Video", "Seamless Loop", "AI Animation", "Editing"],
    keywords: {
      en: ["seamless AI video loop", "relaxing AI video", "loop dissolve", "AI animation loop"],
      ko: ["AI 영상 자연스러운 반복", "힐링 AI 영상", "반복 영상 디졸브", "AI 애니메이션 루프"],
    },
    tools: ["AI Video", "CapCut"],
    characters: ["HARU"],
    en: {
      ...guideBasics,
      title: "How to Create Seamless Loops for Relaxing AI Videos",
      shortTitle: "How to Create Seamless Loops for Relaxing AI Videos",
      description:
        "How FourFeetz chooses restrained action, matching pose and light, a usable overlap and a short dissolve for relaxing AI video loops.",
      readTime: "8 min read",
      verdict:
        "A relaxing loop works when the viewer notices the mood rather than the restart. Small repeated motion, stable light and a carefully checked overlap are more dependable than forcing a dramatic action back to its first frame.",
      sections: [
        {
          id: "micro-action",
          title: "What We Tested: HARU’s Resting Micro-actions",
          paragraphs: [
            "For HARU relaxing videos, FourFeetz avoided large posture changes and built the performance around a comfortable resting pose, breathing, slow blinking and other micro-actions. These movements can return close to the starting condition. Walking across the frame, standing up or moving a prop creates a destination that is difficult to reverse invisibly.",
            "We begin by asking whether the action can continue for several cycles without changing the story. If repetition makes the character appear trapped or mechanical, the action is not suitable. The motion should support the atmosphere, not become a puzzle the viewer waits to see reset.",
          ],
          bullets: [
            "Prefer breathing, blinking and small posture adjustments.",
            "Avoid actions that permanently change position or props.",
            "Keep secondary environmental motion gentle and consistent.",
          ],
        },
        {
          id: "pose-light",
          title: "What Went Wrong: Large Changes in Pose and Framing",
          paragraphs: [
            "The first and final loop regions do not need to be identical, but they must be compatible. We compare the character’s body angle, head height, ear position, paw placement and screen position. A large posture change becomes visible even under a soft transition.",
            "Lighting is equally important. A moving highlight, shadow direction or sudden exposure change can reveal the loop before the body movement does. We use a stable camera and avoid unnecessary weather or light changes unless those changes are themselves designed as a repeating cycle.",
          ],
          note:
            "A dissolve blends two frames; it does not correct a different body pose, facial identity or light direction.",
        },
        {
          id: "loop-region",
          title: "Select the Loop Region After Watching the Full Take",
          paragraphs: [
            "We do not assume that the generated clip’s first and last frames are the best loop points. After generation, we look for two calm regions with similar posture, expression and motion direction. Trimming inward often removes the setup and ending where the largest changes occur.",
            "The selected overlap must preserve the rhythm of breathing or environmental motion. We test several nearby in and out points at normal speed. The shortest loop is not always the best; a slightly longer section may make the repeated pattern less obvious.",
          ],
          steps: [
            "Watch the complete take and mark stable regions, not only exact frames.",
            "Compare pose, expression, light and movement direction at both marks.",
            "Test repeated playback before adding sound or final grading.",
          ],
        },
        {
          id: "dissolve",
          title: "What Worked: Finish the Loop in CapCut",
          paragraphs: [
            "FourFeetz finishes and tests the loop in CapCut. A short dissolve can smooth minor breathing, fur or lighting differences between compatible regions. If it is too long, the character may appear transparent or doubled. If it is too short, a positional jump remains visible. The overlap is adjusted while watching several repetitions, not a single transition.",
            "When the overlap produces two faces, four ears or sliding paws, the source regions are too different. We choose new points or replace the shot rather than extending the dissolve. The edit should polish a structurally valid loop, not hide broken anatomy.",
            "Not every generated take reached a perfect loop. Some were shortened because the final pose drifted; others needed different in and out points, a smaller dissolve or full replacement. Recording those limits is part of the FourFeetz production note, because CapCut can improve timing and continuity but cannot repair a changed face or broken body shape.",
          ],
          table: {
            title: "What a dissolve can and cannot solve",
            headers: ["Difference", "Short dissolve", "Better response"],
            rows: [
              ["Small breathing or fur shift", "Often useful", "Fine-tune overlap length"],
              ["Large pose or head-position change", "Creates ghosting", "Choose new loop points"],
              ["Different face, ears or paws", "Reveals duplication", "Replace the failing source"],
            ],
          },
        },
        {
          id: "quality-check",
          title: "Practical Takeaway: Check Face, Ears, Paws and Name Tag",
          paragraphs: [
            "Repeated playback makes small identity errors more visible. We watch the face, ears, paws and name tag or collar through several cycles. We also check the background edges, shadow direction and any object that crosses the dissolve. A detail that changes once becomes a rhythmic flicker when looped.",
            "Finally, we listen with the intended ambience. Audio should not contain a click, sudden volume change or event that exposes the restart. Visual and sound loops are reviewed together, but the source video must remain convincing without using sound to distract from a visible mismatch.",
          ],
          bullets: [
            "Face and age remain stable through the overlap.",
            "Ears, paws and name tag do not double, disappear or switch position.",
            "Lighting, background edges and audio ambience repeat without a noticeable jump.",
          ],
        },
      ],
      faqs: [
        {
          question: "Does a seamless loop need identical first and last frames?",
          answer:
            "Not necessarily. It needs compatible regions with similar pose, light and motion direction that can overlap without revealing a restart.",
        },
        {
          question: "How long should the dissolve be?",
          answer:
            "There is no fixed duration. Use the shortest overlap that smooths small differences without creating visible ghosting or duplication.",
        },
        {
          question: "Which movements are easiest to loop?",
          answer:
            "Breathing, blinking and other restrained cyclical motion are usually easier than walking, standing or moving a prop to a new position.",
        },
      ],
    },
    ko: {
      ...koreanGuideBasics,
      title: "힐링 AI 영상을 자연스럽게 반복 재생하는 제작 방법",
      shortTitle: "힐링 AI 영상을 자연스럽게 반복 재생하는 제작 방법",
      description:
        "작은 행동, 자세와 조명 유지, 반복 구간 선택, 짧은 디졸브와 캐릭터 특징 점검으로 자연스러운 힐링 AI 영상 루프를 만드는 방법입니다.",
      readTime: "약 8분",
      verdict:
        "힐링 영상의 반복은 시청자가 재시작보다 분위기를 먼저 느낄 때 자연스럽습니다. 작은 움직임, 안정적인 조명과 세심하게 고른 겹침 구간이 큰 행동을 첫 프레임으로 억지로 되돌리는 것보다 효과적입니다.",
      sections: [
        {
          id: "micro-action",
          title: "실제로 테스트한 것: HARU의 편안한 미세 행동",
          paragraphs: [
            "HARU 릴렉스 영상은 큰 자세 변화를 피하고 편안히 쉬는 자세, 호흡, 느린 눈 깜빡임 같은 미세 행동을 중심으로 구성했습니다. 이런 움직임은 시작 상태와 가까운 지점으로 돌아올 수 있습니다. 화면을 가로질러 걷거나 일어서고 소품을 옮기는 행동은 되돌아가는 순간이 눈에 띕니다.",
            "먼저 같은 행동이 여러 번 반복되어도 이야기의 상태가 바뀌지 않는지 확인합니다. 반복할수록 캐릭터가 갇혀 있거나 기계적으로 보이면 좋은 루프 행동이 아닙니다. 움직임은 분위기를 돕고 재시작을 찾게 만들지 않아야 합니다.",
          ],
          bullets: [
            "호흡, 눈 깜빡임과 작은 자세 변화를 우선합니다.",
            "위치나 소품 상태를 영구적으로 바꾸는 행동은 피합니다.",
            "배경의 보조 움직임도 작고 일정하게 유지합니다.",
          ],
        },
        {
          id: "pose-light",
          title: "문제가 생긴 방식: 자세와 구도를 크게 바꾸기",
          paragraphs: [
            "반복 구간의 처음과 끝이 완전히 같을 필요는 없지만 서로 연결 가능한 상태여야 합니다. 몸의 각도, 머리 높이, 귀 위치, 발의 접촉과 화면 속 위치를 비교합니다. 큰 자세 차이는 부드러운 전환을 사용해도 눈에 띕니다.",
            "조명도 중요합니다. 하이라이트 위치, 그림자 방향이나 노출이 갑자기 바뀌면 신체 움직임보다 먼저 반복 지점을 드러냅니다. 안정적인 카메라를 사용하고, 반복 자체로 설계한 변화가 아니라면 불필요한 날씨와 조명 변화를 줄입니다.",
          ],
          note:
            "디졸브는 두 프레임을 섞을 뿐이며, 다른 몸 자세와 얼굴 정체성 또는 조명 방향을 고쳐주지는 않습니다.",
        },
        {
          id: "loop-region",
          title: "전체 영상을 본 뒤 반복 구간을 고릅니다",
          paragraphs: [
            "생성된 영상의 첫 프레임과 마지막 프레임이 가장 좋은 반복 지점이라고 가정하지 않습니다. 전체 영상을 본 뒤 자세, 표정과 움직임 방향이 비슷한 두 개의 잔잔한 구간을 찾습니다. 안쪽으로 잘라내면 변화가 큰 준비 동작과 마무리를 제외할 수 있습니다.",
            "겹칠 구간은 호흡이나 배경 움직임의 리듬도 유지해야 합니다. 가까운 여러 시작점과 끝점을 정상 속도로 반복해 봅니다. 가장 짧은 루프보다 조금 긴 구간이 반복 패턴을 덜 눈에 띄게 만들 때도 있습니다.",
          ],
          steps: [
            "전체 영상을 보고 안정적인 한 프레임이 아니라 구간을 표시합니다.",
            "두 지점의 자세, 표정, 조명과 움직임 방향을 비교합니다.",
            "소리와 최종 색 보정을 넣기 전에 반복 재생을 시험합니다.",
          ],
        },
        {
          id: "dissolve",
          title: "효과가 있었던 방법: CapCut에서 루프 마무리하기",
          paragraphs: [
            "FourFeetz는 CapCut에서 최종 루프를 조립하고 반복 재생으로 확인합니다. 짧은 디졸브는 서로 연결 가능한 구간의 작은 호흡, 털이나 조명 차이를 부드럽게 만들 수 있습니다. 너무 길면 캐릭터가 투명해지거나 두 개로 보이고, 너무 짧으면 위치가 튀어 보입니다. 한 번의 전환이 아니라 여러 번 반복해서 보며 길이를 조정합니다.",
            "겹치는 동안 얼굴이 두 개가 되거나 귀와 발이 늘어나고 미끄러지면 원본 구간의 차이가 너무 큰 것입니다. 디졸브를 더 길게 하지 않고 새로운 반복 지점을 고르거나 해당 장면을 교체합니다.",
            "모든 생성 결과가 완벽한 루프로 이어진 것은 아닙니다. 마지막 자세가 달라진 클립은 길이를 줄였고, 일부는 시작점과 끝점을 다시 고르거나 디졸브를 짧게 조정했으며, 신체나 얼굴이 깨진 결과는 교체했습니다. CapCut은 타이밍과 연결을 보완하지만 달라진 얼굴과 잘못된 신체 형태까지 고칠 수는 없었습니다.",
          ],
          table: {
            title: "디졸브가 해결할 수 있는 차이",
            headers: ["차이", "짧은 디졸브", "더 나은 대응"],
            rows: [
              ["작은 호흡이나 털 움직임", "효과적일 수 있음", "겹침 길이 미세 조정"],
              ["큰 자세 또는 머리 위치 변화", "잔상이 생김", "새 반복 지점 선택"],
              ["다른 얼굴, 귀 또는 발", "중복이 드러남", "실패한 원본 교체"],
            ],
          },
        },
        {
          id: "quality-check",
          title: "실전 핵심 정리: 얼굴·귀·발·이름표 점검하기",
          paragraphs: [
            "반복 재생에서는 작은 정체성 오류가 더 잘 보입니다. 여러 번 재생하면서 얼굴, 귀, 발과 이름표 또는 목걸이를 확인합니다. 배경 가장자리, 그림자 방향과 디졸브를 지나는 물체도 점검하며, 한 번의 변화가 반복되면 규칙적인 깜빡임처럼 보일 수 있습니다.",
            "마지막으로 사용할 앰비언스와 함께 들어봅니다. 소리에 클릭, 갑작스러운 음량 변화나 재시작을 드러내는 사건이 없어야 합니다. 영상과 소리를 함께 검토하지만, 눈에 보이는 불일치를 소리로 가리지 않습니다.",
          ],
          bullets: [
            "겹침 구간에서 얼굴과 나이가 안정적으로 유지됩니다.",
            "귀, 발과 이름표가 중복되거나 사라지고 위치가 바뀌지 않습니다.",
            "조명, 배경 가장자리와 앰비언스가 눈에 띄는 끊김 없이 반복됩니다.",
          ],
        },
      ],
      faqs: [
        {
          question: "첫 프레임과 마지막 프레임이 완전히 같아야 하나요?",
          answer:
            "반드시 같을 필요는 없습니다. 자세, 조명과 움직임 방향이 비슷해 재시작을 드러내지 않고 겹칠 수 있는 구간이면 됩니다.",
        },
        {
          question: "디졸브 길이는 얼마나 길어야 하나요?",
          answer:
            "고정된 정답은 없습니다. 잔상과 중복을 만들지 않으면서 작은 차이를 부드럽게 만드는 가장 짧은 겹침을 사용합니다.",
        },
        {
          question: "어떤 움직임이 반복하기 쉬운가요?",
          answer:
            "호흡과 눈 깜빡임 같은 작고 순환적인 움직임이 걷기, 일어서기나 소품을 새 위치로 옮기는 행동보다 반복하기 쉽습니다.",
        },
      ],
    },
  },
];

const productionExampleLinks: Partial<
  Record<
    NewProductionGuideSlug,
    Record<NewProductionGuideLanguage, { label: string; title: string; href: string }[]>
  >
> = {
  "extend-ai-video-scenes-google-flow": {
    en: [{ label: "Production Example", title: "HARU — Snowy Hearth Nap", href: "/works/haru-snowy-hearth-nap" }],
    ko: [{ label: "실제 제작 영상", title: "HARU — Snowy Hearth Nap", href: "/works/haru-snowy-hearth-nap" }],
  },
  "common-ai-video-generation-failures": {
    en: [{ label: "Character Example", title: "Meet OLI", href: "/characters/oli" }],
    ko: [{ label: "캐릭터 사례", title: "OLI 캐릭터 보기", href: "/characters/oli" }],
  },
  "create-ai-shorts-9-16-from-start": {
    en: [{ label: "Character Example", title: "Meet HARU", href: "/characters/haru" }],
    ko: [{ label: "캐릭터 사례", title: "HARU 캐릭터 보기", href: "/characters/haru" }],
  },
  "reduce-character-inconsistency-ai-video": {
    en: [{ label: "Character Example", title: "Meet HARU", href: "/characters/haru" }],
    ko: [{ label: "캐릭터 사례", title: "HARU 캐릭터 보기", href: "/characters/haru" }],
  },
  "seamless-loops-relaxing-ai-videos": {
    en: [
      { label: "Production Example", title: "HARU — Snowy Hearth Nap", href: "/works/haru-snowy-hearth-nap" },
      { label: "Related Character", title: "Meet HARU", href: "/characters/haru" },
    ],
    ko: [
      { label: "실제 제작 영상", title: "HARU — Snowy Hearth Nap", href: "/works/haru-snowy-hearth-nap" },
      { label: "관련 캐릭터", title: "HARU 캐릭터 보기", href: "/characters/haru" },
    ],
  },
};

function createArticle(seed: GuideSeed, language: NewProductionGuideLanguage): NewProductionGuide {
  const copy = seed[language];
  const guideLinks = guides
    .filter((entry) => entry.slug !== seed.slug)
    .map((entry) => ({
      label: language === "ko" ? "관련 제작 가이드" : "Related Production Guide",
      title: entry[language].shortTitle,
      href: `${language === "ko" ? "/ko" : ""}/insights/${entry.slug}`,
    }));
  const related = [...(productionExampleLinks[seed.slug]?.[language] ?? []), ...guideLinks].slice(0, 4);

  return {
    slug: seed.slug,
    ...copy,
    hero: seed.hero,
    heroAlt: seed.heroAlt[language],
    heroFit: seed.heroFit,
    heroPosition: seed.heroPosition,
    published,
    updated: published,
    tags: seed.tags,
    keywords: seed.keywords[language],
    tools: seed.tools,
    characters: seed.characters,
    related,
  };
}

const existingProductionGuides = Object.fromEntries(
  guides.map((seed) => [
    seed.slug,
    {
      en: createArticle(seed, "en"),
      ko: createArticle(seed, "ko"),
    },
  ]),
) as Record<(typeof guides)[number]["slug"], Record<NewProductionGuideLanguage, NewProductionGuide>>;

export const newProductionGuides = {
  ...existingProductionGuides,
  ...experienceProductionGuides,
  ...studioWorkflowInsights,
} as Record<NewProductionGuideSlug, Record<NewProductionGuideLanguage, NewProductionGuide>>;

export function isNewProductionGuideSlug(slug: string): slug is NewProductionGuideSlug {
  return newProductionGuideSlugs.includes(slug as NewProductionGuideSlug);
}

export function getNewProductionGuide(slug: string, language: NewProductionGuideLanguage) {
  return isNewProductionGuideSlug(slug) ? newProductionGuides[slug][language] : undefined;
}

export function createNewProductionGuideMetadata(
  slug: NewProductionGuideSlug,
  language: NewProductionGuideLanguage,
): Metadata {
  const article = newProductionGuides[slug][language];
  const englishPath = `/insights/${slug}`;
  const koreanPath = `/ko/insights/${slug}`;
  const path = language === "ko" ? koreanPath : englishPath;
  const title = `${article.title} | FourFeetz`;

  return {
    title: { absolute: title },
    description: article.description,
    alternates:
      language === "ko"
        ? languageAlternates(englishPath, koreanPath)
        : englishLanguageAlternates(englishPath, koreanPath),
    openGraph: {
      type: "article",
      siteName: "FourFeetz Studios",
      title,
      description: article.description,
      url: path,
      locale: language === "ko" ? "ko_KR" : "en_US",
      alternateLocale: [language === "ko" ? "en_US" : "ko_KR"],
      images: [{ url: article.hero, alt: article.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.description,
      images: [article.hero],
    },
  };
}
