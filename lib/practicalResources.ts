import type { Metadata } from "next";
import { englishLanguageAlternates, languageAlternates } from "@/lib/localization";

export const practicalResourceSlugs = [
  "ai-video-shot-list-template",
  "first-shot-image-review-checklist",
  "ai-video-prompt-simplification-worksheet",
  "ai-video-error-review-sheet",
  "shorts-publishing-checklist",
  "long-form-relaxing-video-planning-sheet",
  "ai-video-continuity-checklist",
  "ai-video-asset-organization-guide",
] as const;

export type PracticalResourceSlug = (typeof practicalResourceSlugs)[number];
export type PracticalResourceLanguage = "en" | "ko";

export type PracticalResourceCopy = {
  title: string;
  category: string;
  description: string;
  intro: string;
  instructions: string[];
  fields: { label: string; hint: string; multiline?: boolean }[];
  checklist: string[];
  tips: string[];
  relatedGuide: { title: string; href: string };
};

export type PracticalResource = {
  slug: PracticalResourceSlug;
  published: string;
  updated: string;
  keywords: string[];
  en: PracticalResourceCopy;
  ko: PracticalResourceCopy;
};

const published = "2026-07-29";

export const practicalResources: PracticalResource[] = [
  {
    slug: "ai-video-shot-list-template",
    published,
    updated: published,
    keywords: ["AI video shot list", "production planning", "scene planning", "AI 영상 샷 리스트", "영상 기획"],
    en: {
      title: "AI Video Shot List Template",
      category: "Planning Template",
      description: "A printable shot-planning template for defining every AI video scene before image generation, animation, and editing begin.",
      intro: "Use one copy for each planned shot. The template keeps creative intent, composition, continuity, and delivery requirements visible in one place, so a scene can be reviewed before generation time is spent.",
      instructions: [
        "Start with the scene purpose and the one story beat the audience must understand.",
        "Complete the visual and timing fields before creating the First Shot.",
        "Review the transition field together with the previous and next shots.",
      ],
      fields: [
        { label: "Scene number", hint: "Example: 03" },
        { label: "Scene purpose", hint: "What must this shot communicate?", multiline: true },
        { label: "Aspect ratio and estimated duration", hint: "Delivery ratio and approximate screen time" },
        { label: "Starting frame", hint: "Describe the approved opening composition", multiline: true },
        { label: "Character position", hint: "Position, facing direction, and eyeline" },
        { label: "Primary action", hint: "One clearly readable action", multiline: true },
        { label: "Camera composition", hint: "Shot size, angle, distance, and any intentional movement" },
        { label: "Background and lighting", hint: "Location, time, light direction, and mood", multiline: true },
        { label: "Required props", hint: "Only props needed for the action or story" },
        { label: "Connection to next scene", hint: "Direct continuation, cut, dissolve, or separate setup", multiline: true },
      ],
      checklist: [
        "The scene has one clear purpose.",
        "The planned action fits the estimated duration.",
        "Character position and camera direction support the adjacent shots.",
        "Only necessary props and background details are listed.",
        "The next-scene connection has been reviewed before generation.",
      ],
      tips: [
        "Test difficult or continuity-critical shots early.",
        "If one shot contains several independent actions, split it into separate rows.",
        "Record approved changes on the sheet so the shot list matches the final edit.",
      ],
      relatedGuide: { title: "AI Storyboarding Guide", href: "/insights/ai-storyboarding-guide" },
    },
    ko: {
      title: "AI 영상 샷 리스트 템플릿",
      category: "기획 템플릿",
      description: "이미지 생성과 영상 편집을 시작하기 전에 장면의 목적, 구도, 행동과 연결 방식을 정리하는 인쇄용 샷 리스트입니다.",
      intro: "계획한 샷마다 한 장씩 작성해 보세요. 장면의 의도와 화면 구성, 연속성, 납품 조건을 한곳에서 확인할 수 있어 생성 작업 전에 빠진 요소를 점검하기 좋습니다.",
      instructions: [
        "먼저 장면의 목적과 시청자가 이해해야 할 한 가지 내용을 적습니다.",
        "First Shot을 만들기 전에 화면과 길이 관련 항목을 완성합니다.",
        "이전 장면과 다음 장면을 함께 보며 연결 방식을 검토합니다.",
      ],
      fields: [
        { label: "장면 번호", hint: "예: 03" },
        { label: "장면 목적", hint: "이 장면에서 반드시 전달해야 할 내용", multiline: true },
        { label: "화면 비율과 예상 길이", hint: "최종 화면 비율과 대략적인 노출 시간" },
        { label: "시작 화면", hint: "승인할 첫 화면의 구도를 설명해 주세요.", multiline: true },
        { label: "캐릭터 위치", hint: "위치, 바라보는 방향과 시선" },
        { label: "핵심 행동", hint: "명확하게 읽히는 행동 한 가지", multiline: true },
        { label: "카메라 구도", hint: "샷 크기, 각도, 거리와 필요한 움직임" },
        { label: "배경과 조명", hint: "장소, 시간대, 빛의 방향과 분위기", multiline: true },
        { label: "필요한 소품", hint: "행동과 이야기에 꼭 필요한 소품만 작성" },
        { label: "다음 장면 연결 방식", hint: "직접 연결, 컷, 디졸브 또는 별도 장면", multiline: true },
      ],
      checklist: [
        "장면의 목적이 한 가지로 분명합니다.",
        "계획한 행동이 예상 길이 안에 들어옵니다.",
        "캐릭터 위치와 카메라 방향이 앞뒤 장면과 맞습니다.",
        "꼭 필요한 소품과 배경 요소만 적었습니다.",
        "생성 전에 다음 장면의 연결 방식을 검토했습니다.",
      ],
      tips: [
        "난도가 높거나 연속성이 중요한 장면부터 먼저 테스트해 보세요.",
        "한 샷에 독립적인 행동이 여러 개라면 행을 나누는 편이 좋습니다.",
        "승인된 변경 사항을 기록해 최종 편집본과 샷 리스트가 어긋나지 않게 관리하세요.",
      ],
      relatedGuide: { title: "AI 스토리보드 제작 가이드", href: "/ko/insights/ai-storyboarding-guide" },
    },
  },
  {
    slug: "first-shot-image-review-checklist",
    published,
    updated: published,
    keywords: ["First Shot review", "reference image checklist", "AI image review", "First Shot 검토", "기준 이미지"],
    en: {
      title: "First Shot Image Review Checklist",
      category: "Image Review Checklist",
      description: "A practical review sheet for approving a First Shot image before it becomes the visual foundation of an AI video scene.",
      intro: "A visually appealing still is not always easy to animate. Use this checklist at full size and at delivery size to confirm identity, composition, lighting, and elements that may become unstable once motion begins.",
      instructions: [
        "Compare the image with the approved character and scene references.",
        "Review it once for visual quality and again for animation practicality.",
        "Record any required correction before the image is approved for video generation.",
      ],
      fields: [
        { label: "Shot or scene ID", hint: "Project and shot reference" },
        { label: "Character appearance and age", hint: "Matches the approved reference?" },
        { label: "Face, ears, eyes, and tail", hint: "Note any shape or proportion issue", multiline: true },
        { label: "Body size and pose", hint: "Stable, readable, and physically plausible?" },
        { label: "Aspect ratio", hint: "Matches the intended delivery format" },
        { label: "Safe area", hint: "Important subjects clear of interface and crop zones" },
        { label: "Camera height and distance", hint: "Angle, eyeline, and subject scale" },
        { label: "Background and props", hint: "Structure, placement, and unwanted complexity", multiline: true },
        { label: "Light direction and color", hint: "Direction, contrast, and color continuity" },
        { label: "Hard-to-animate elements", hint: "Fine details, overlaps, reflections, text, or unstable geometry", multiline: true },
      ],
      checklist: [
        "The character identity reads correctly at full size.",
        "Small anatomical features are complete and consistent.",
        "The pose leaves room for the intended action.",
        "The subject remains readable inside the final crop and safe area.",
        "Background, props, and lighting can remain stable during motion.",
        "No visible element depends on impossible or ambiguous geometry.",
      ],
      tips: [
        "Zoom in on the face and extremities, then review the entire silhouette.",
        "Avoid approving a frame just because the lighting is attractive.",
        "If a correction changes composition significantly, repeat the full review.",
      ],
      relatedGuide: { title: "How to Extend AI Video Scenes Naturally in Google Flow", href: "/insights/extend-ai-video-scenes-google-flow" },
    },
    ko: {
      title: "First Shot 이미지 검토 체크리스트",
      category: "이미지 검토 체크리스트",
      description: "AI 영상 장면의 기준이 될 First Shot 이미지를 승인하기 전에 외형, 구도, 조명과 영상화 난도를 확인하는 검토표입니다.",
      intro: "보기 좋은 한 장의 이미지가 항상 자연스러운 영상으로 이어지는 것은 아닙니다. 원본 크기와 최종 노출 크기에서 각각 확인하고, 움직임이 시작되었을 때 불안정해질 요소를 생성 전에 찾아보세요.",
      instructions: [
        "승인된 캐릭터와 장면 기준 이미지 옆에 놓고 비교합니다.",
        "시각적 완성도와 영상화 가능성을 나누어 두 번 검토합니다.",
        "수정할 부분을 기록한 뒤에만 영상 생성용 이미지로 승인합니다.",
      ],
      fields: [
        { label: "샷 또는 장면 ID", hint: "프로젝트와 샷 식별 정보" },
        { label: "캐릭터 외형과 나이", hint: "승인된 기준과 일치하는지 확인" },
        { label: "얼굴, 귀, 눈, 꼬리 형태", hint: "모양이나 비율 문제를 기록해 주세요.", multiline: true },
        { label: "몸 크기와 자세", hint: "안정적이고 읽기 쉬우며 자연스러운지 확인" },
        { label: "화면 비율", hint: "최종 배포 형식과 일치하는지 확인" },
        { label: "안전 영역", hint: "중요한 피사체가 UI와 크롭 영역을 피하는지 확인" },
        { label: "카메라 높이와 거리", hint: "각도, 시선과 화면 속 피사체 크기" },
        { label: "배경과 소품", hint: "구조, 위치와 불필요한 복잡성을 기록", multiline: true },
        { label: "빛의 방향과 색감", hint: "방향, 대비와 앞뒤 장면의 색감" },
        { label: "영상으로 만들기 어려운 요소", hint: "미세 묘사, 겹침, 반사, 글자 또는 불안정한 형태", multiline: true },
      ],
      checklist: [
        "원본 크기에서 캐릭터 정체성이 정확하게 보입니다.",
        "작은 신체 특징이 빠짐없이 일관됩니다.",
        "계획한 행동을 수행할 수 있는 자세와 여유가 있습니다.",
        "최종 크롭과 안전 영역 안에서 피사체가 잘 보입니다.",
        "배경, 소품과 조명이 움직이는 동안 유지될 수 있습니다.",
        "모호하거나 물리적으로 성립하기 어려운 형태가 없습니다.",
      ],
      tips: [
        "얼굴과 손발 같은 끝부분을 확대해서 본 뒤 전체 실루엣도 확인하세요.",
        "조명이 좋아 보인다는 이유만으로 바로 승인하지 마세요.",
        "수정으로 구도가 크게 바뀌었다면 전체 항목을 다시 검토하세요.",
      ],
      relatedGuide: { title: "Google Flow에서 AI 영상 장면을 자연스럽게 연장하는 방법", href: "/ko/insights/extend-ai-video-scenes-google-flow" },
    },
  },
  {
    slug: "ai-video-prompt-simplification-worksheet",
    published,
    updated: published,
    keywords: ["AI prompt simplification", "motion planning", "AI video worksheet", "프롬프트 단순화", "AI 영상 워크시트"],
    en: {
      title: "AI Video Prompt Simplification Worksheet",
      category: "Prompt Planning Worksheet",
      description: "A worksheet for reducing a crowded AI video direction into one clear action, stable conditions, and a manageable shot.",
      intro: "This worksheet does not provide a finished prompt. It helps you decide what the shot truly needs, what can remain fixed, and when a complex idea should become two separate scenes.",
      instructions: [
        "Write the original scene idea in plain language without model-specific syntax.",
        "Circle one action that must succeed and move everything else into keep, remove, or split.",
        "Use the completed decisions to write your own tool-appropriate direction.",
      ],
      fields: [
        { label: "Original scene idea", hint: "Describe the intended moment in ordinary language", multiline: true },
        { label: "One essential action", hint: "The single action that must succeed", multiline: true },
        { label: "Elements that must stay fixed", hint: "Identity, pose details, props, background, or light", multiline: true },
        { label: "Actions that can be removed", hint: "Secondary gestures or events that do not change the story", multiline: true },
        { label: "Camera movement decision", hint: "None, or one purposeful movement with a reason" },
        { label: "Character movement decision", hint: "Stationary, small movement, or clear travel" },
        { label: "Background change decision", hint: "Fixed, subtle environment motion, or separate shot" },
        { label: "When to split into two scenes", hint: "Identify the natural cut between independent actions", multiline: true },
        { label: "Negative-direction review", hint: "Replace long lists of prohibitions with clear positive direction where possible", multiline: true },
      ],
      checklist: [
        "Only one primary action remains.",
        "Camera and character movement do not compete.",
        "The background does not change without a story reason.",
        "Independent actions have been separated into different shots.",
        "Negative instructions are limited to essential failure risks.",
      ],
      tips: [
        "Specific timing is more useful than adding more adjectives.",
        "If the shot cannot be summarized in one sentence, consider dividing it.",
        "Keep proprietary identity references and internal production instructions outside shared worksheets.",
      ],
      relatedGuide: { title: "Image-to-Video Prompts: A Practical Guide", href: "/insights/image-to-video-prompts" },
    },
    ko: {
      title: "AI 영상 프롬프트 단순화 워크시트",
      category: "프롬프트 기획 워크시트",
      description: "복잡한 AI 영상 지시를 한 가지 핵심 행동과 안정적인 조건으로 정리하고 장면을 나눌 시점을 판단하는 워크시트입니다.",
      intro: "이 자료는 완성 프롬프트를 제공하지 않습니다. 장면에 꼭 필요한 요소와 고정할 요소를 구분하고, 복잡한 아이디어를 두 장면으로 나눌지 결정하는 데 활용하세요.",
      instructions: [
        "모델별 문법을 쓰지 말고 원래 장면 아이디어를 평범한 문장으로 적습니다.",
        "반드시 성공해야 하는 행동 하나를 고르고 나머지는 유지, 제거 또는 분리 항목으로 옮깁니다.",
        "완성된 판단을 바탕으로 사용하는 도구에 맞는 지시를 직접 작성합니다.",
      ],
      fields: [
        { label: "원래 장면 아이디어", hint: "원하는 순간을 일반적인 문장으로 설명해 주세요.", multiline: true },
        { label: "반드시 필요한 핵심 행동 1개", hint: "이 장면에서 꼭 성공해야 하는 단일 행동", multiline: true },
        { label: "유지해야 할 요소", hint: "외형, 자세, 소품, 배경 또는 조명", multiline: true },
        { label: "제거 가능한 행동", hint: "이야기에 영향을 주지 않는 부수 행동이나 사건", multiline: true },
        { label: "카메라 움직임 사용 여부", hint: "사용하지 않음 또는 이유가 분명한 한 가지 움직임" },
        { label: "캐릭터 이동 여부", hint: "고정, 작은 움직임 또는 명확한 이동" },
        { label: "배경 변화 여부", hint: "고정, 미세한 환경 움직임 또는 별도 장면" },
        { label: "한 장면을 두 장면으로 나눌 기준", hint: "서로 독립적인 행동 사이의 자연스러운 컷 지점", multiline: true },
        { label: "부정 지시 점검", hint: "긴 금지 목록을 가능한 범위에서 명확한 긍정 지시로 바꿔 보세요.", multiline: true },
      ],
      checklist: [
        "핵심 행동이 한 가지만 남았습니다.",
        "카메라와 캐릭터 움직임이 서로 경쟁하지 않습니다.",
        "이야기상 이유 없이 배경이 변하지 않습니다.",
        "독립적인 행동은 서로 다른 샷으로 나눴습니다.",
        "부정 지시는 꼭 피해야 할 오류에만 사용했습니다.",
      ],
      tips: [
        "형용사를 늘리는 것보다 동작의 순서와 시간을 명확히 하는 편이 유용합니다.",
        "한 문장으로 요약하기 어려운 장면이라면 나누는 것을 검토하세요.",
        "비공개 캐릭터 기준과 내부 제작 지시는 공유용 워크시트에 기록하지 마세요.",
      ],
      relatedGuide: { title: "이미지 투 비디오 프롬프트 실전 가이드", href: "/ko/insights/image-to-video-prompts" },
    },
  },
  {
    slug: "ai-video-error-review-sheet",
    published,
    updated: published,
    keywords: ["AI video error review", "generation QA", "AI 오류 검토", "영상 품질 관리"],
    en: {
      title: "AI Video Error Review Sheet",
      category: "Quality Review Sheet",
      description: "A structured review sheet for identifying AI video failures and choosing whether to regenerate, edit, or discard a result.",
      intro: "Review the clip at normal speed, frame by frame, and beside its reference image. Record the first frame where a problem appears and choose the least wasteful resolution instead of regenerating automatically.",
      instructions: [
        "Watch once without pausing to judge the overall shot.",
        "Inspect the face, body, props, background, camera, and lighting separately.",
        "Select regenerate, edit, or discard and record the reason.",
      ],
      fields: [
        { label: "Clip ID and version", hint: "Shot, generation, and review version" },
        { label: "First affected frame or time", hint: "Where the issue becomes visible" },
        { label: "Face and body deformation", hint: "Identity, expression, silhouette, or anatomy", multiline: true },
        { label: "Fingers, paws, feet, or legs", hint: "Missing, merged, duplicated, or unstable parts", multiline: true },
        { label: "Character count or duplication", hint: "Unexpected extra subject or repeated body part" },
        { label: "Prop shape and color", hint: "Change, disappearance, or incorrect interaction" },
        { label: "Background structure", hint: "Geometry, placement, or continuity change", multiline: true },
        { label: "Unwanted camera movement", hint: "Pan, zoom, shake, or drift" },
        { label: "Lighting and color shift", hint: "Unexpected direction, exposure, or palette change" },
        { label: "Off-screen re-entry", hint: "Appearance or position after the character returns", multiline: true },
        { label: "Resolution decision", hint: "Regenerate, edit, or discard — include the reason", multiline: true },
      ],
      checklist: [
        "The full clip and the transition frames were both reviewed.",
        "The issue is described with a location, not only a general impression.",
        "The approved reference was used for comparison.",
        "An edit is considered before regeneration when the error is local and repairable.",
        "Discarded results are not reused accidentally.",
      ],
      tips: [
        "Separate model failures from editing or export problems.",
        "Save one representative failure note when it can prevent the same issue later.",
        "Do not spend time repairing a clip whose main action or identity is already unusable.",
      ],
      relatedGuide: { title: "8 Common AI Video Generation Failures We Encountered", href: "/insights/common-ai-video-generation-failures" },
    },
    ko: {
      title: "AI 영상 생성 오류 검토표",
      category: "품질 검토표",
      description: "AI 영상의 오류를 구체적으로 기록하고 재생성, 편집 또는 폐기 중 적절한 해결 방법을 선택하는 검토표입니다.",
      intro: "영상을 정상 속도와 프레임 단위로 각각 확인하고 기준 이미지와 나란히 비교해 보세요. 오류가 처음 보이는 위치를 적은 뒤 무조건 재생성하기보다 가장 효율적인 해결 방법을 선택합니다.",
      instructions: [
        "먼저 멈추지 않고 한 번 재생해 장면 전체를 판단합니다.",
        "얼굴, 신체, 소품, 배경, 카메라와 조명을 나누어 확인합니다.",
        "재생성, 편집 또는 폐기 중 하나를 고르고 이유를 기록합니다.",
      ],
      fields: [
        { label: "클립 ID와 버전", hint: "샷, 생성본과 검토 버전" },
        { label: "오류가 시작되는 프레임 또는 시간", hint: "문제가 처음 보이는 위치" },
        { label: "얼굴과 신체 변형", hint: "정체성, 표정, 실루엣 또는 해부학적 문제", multiline: true },
        { label: "손가락, 발, 다리 오류", hint: "누락, 결합, 중복 또는 형태 흔들림", multiline: true },
        { label: "캐릭터 수 증가 또는 중복", hint: "예상하지 않은 피사체나 신체 일부의 반복" },
        { label: "소품 모양과 색상 변경", hint: "형태 변화, 사라짐 또는 잘못된 상호작용" },
        { label: "배경 구조 변경", hint: "형태, 위치 또는 연속성 문제", multiline: true },
        { label: "원하지 않은 카메라 이동", hint: "팬, 줌, 흔들림 또는 드리프트" },
        { label: "조명과 색감 변화", hint: "방향, 노출 또는 색상 변화" },
        { label: "화면 밖 캐릭터의 재등장", hint: "다시 나타난 뒤의 외형과 위치", multiline: true },
        { label: "해결 방법 선택", hint: "재생성, 편집 또는 폐기 — 선택 이유 포함", multiline: true },
      ],
      checklist: [
        "전체 클립과 장면 연결 프레임을 모두 확인했습니다.",
        "막연한 느낌이 아니라 오류 위치와 내용을 기록했습니다.",
        "승인된 기준 이미지와 비교했습니다.",
        "부분적으로 고칠 수 있는 오류라면 재생성 전에 편집 가능성을 검토했습니다.",
        "폐기한 결과물이 실수로 다시 사용되지 않게 표시했습니다.",
      ],
      tips: [
        "생성 모델의 오류와 편집 또는 내보내기 오류를 구분하세요.",
        "같은 문제를 예방할 수 있다면 대표 실패 사례 한 건은 기록해 두세요.",
        "핵심 행동이나 캐릭터 정체성이 이미 무너진 클립은 과도하게 보정하지 마세요.",
      ],
      relatedGuide: { title: "FourFeetz 제작 중 실제로 겪은 AI 영상 생성 실패 사례 8가지", href: "/ko/insights/common-ai-video-generation-failures" },
    },
  },
  {
    slug: "shorts-publishing-checklist",
    published,
    updated: published,
    keywords: ["Shorts publishing checklist", "vertical video QA", "쇼츠 업로드 체크리스트", "9:16 영상"],
    en: {
      title: "Shorts Publishing Checklist",
      category: "Publishing Checklist",
      description: "A final mobile-first review checklist for vertical video framing, audio, metadata, thumbnails, and website links.",
      intro: "Use this after the edit is locked and before uploading. Platform interfaces and requirements can change, so confirm current publishing specifications in the destination platform while using this sheet for creative and quality review.",
      instructions: [
        "Review the exported file on a phone, not only in the editing timeline.",
        "Check the opening, safe areas, subtitles, audio, and thumbnail separately.",
        "Open every included website link before publishing.",
      ],
      fields: [
        { label: "Video title", hint: "Final publishing title" },
        { label: "9:16 resolution check", hint: "Confirm the current platform requirements" },
        { label: "Video length", hint: "Final duration and current destination requirements" },
        { label: "First 1–2 second focus", hint: "What earns attention immediately?", multiline: true },
        { label: "Top and bottom UI safe areas", hint: "Note any element that needs repositioning" },
        { label: "Subtitle readability", hint: "Size, contrast, timing, and line breaks" },
        { label: "Music and sound-effect levels", hint: "Balanced on phone speakers and headphones" },
        { label: "Thumbnail frame", hint: "Selected frame and subject placement" },
        { label: "Title and description", hint: "Clear, accurate, and consistent with the video", multiline: true },
        { label: "Hashtags", hint: "Relevant tags only; avoid unsupported claims" },
        { label: "Website connection", hint: "Final landing-page URL" },
        { label: "Mobile final-playback notes", hint: "Record any issue found on the final device", multiline: true },
      ],
      checklist: [
        "The export uses the intended 9:16 composition.",
        "The opening is understandable without setup.",
        "Key subjects and captions stay clear of interface areas.",
        "Speech, music, and effects remain comfortable on mobile playback.",
        "The thumbnail represents the actual video.",
        "Title, description, hashtags, and website link are final.",
        "The uploaded preview was watched from beginning to end on a phone.",
      ],
      tips: [
        "Recheck current platform settings instead of relying on an old checklist.",
        "Test captions against both bright and dark frames.",
        "Keep the original master and the publishing export as separate versions.",
      ],
      relatedGuide: { title: "Why AI Shorts Should Be Created in 9:16 from the Start", href: "/insights/create-ai-shorts-9-16-from-start" },
    },
    ko: {
      title: "쇼츠 업로드 전 최종 점검표",
      category: "업로드 체크리스트",
      description: "세로형 영상의 화면 구성, 오디오, 메타데이터, 썸네일과 웹사이트 링크를 모바일 환경에서 최종 확인하는 체크리스트입니다.",
      intro: "편집이 끝난 뒤 업로드 직전에 사용하세요. 플랫폼 화면과 요구 사항은 바뀔 수 있으므로, 이 자료로 창작물과 품질을 검토하면서 실제 업로드 화면에서 최신 조건도 함께 확인해야 합니다.",
      instructions: [
        "편집 프로그램뿐 아니라 실제 휴대전화에서 최종 파일을 재생합니다.",
        "시작 부분, 안전 영역, 자막, 오디오와 썸네일을 나누어 확인합니다.",
        "게시 전에 포함된 웹사이트 링크를 직접 열어 봅니다.",
      ],
      fields: [
        { label: "영상 제목", hint: "최종 업로드 제목" },
        { label: "9:16 해상도", hint: "업로드할 플랫폼의 현재 조건과 함께 확인" },
        { label: "영상 길이", hint: "최종 재생 시간과 현재 플랫폼 조건" },
        { label: "시작 1~2초의 집중 요소", hint: "처음부터 시선을 끄는 요소는 무엇인가요?", multiline: true },
        { label: "상단·하단 UI 안전 영역", hint: "위치를 조정해야 할 요소를 기록" },
        { label: "자막 가독성", hint: "크기, 대비, 타이밍과 줄바꿈" },
        { label: "음악과 효과음 크기", hint: "휴대전화 스피커와 이어폰에서 균형 확인" },
        { label: "썸네일 화면", hint: "선택한 프레임과 피사체 위치" },
        { label: "제목과 설명", hint: "명확하고 정확하며 영상과 일치하는지 확인", multiline: true },
        { label: "해시태그", hint: "관련 있는 태그만 사용하고 근거 없는 표현은 제외" },
        { label: "웹사이트 연결", hint: "최종 연결 페이지 URL" },
        { label: "모바일 최종 재생 확인", hint: "최종 기기에서 발견한 문제를 기록", multiline: true },
      ],
      checklist: [
        "최종 파일이 의도한 9:16 구도를 사용합니다.",
        "별도 설명 없이도 시작 부분을 이해할 수 있습니다.",
        "주요 피사체와 자막이 UI 영역을 피합니다.",
        "모바일 재생에서 대사, 음악과 효과음이 편안하게 들립니다.",
        "썸네일이 실제 영상 내용을 정확히 보여줍니다.",
        "제목, 설명, 해시태그와 웹사이트 링크가 확정되었습니다.",
        "업로드 미리보기를 휴대전화에서 처음부터 끝까지 확인했습니다.",
      ],
      tips: [
        "예전 수치에 의존하지 말고 플랫폼의 현재 설정을 다시 확인하세요.",
        "밝은 화면과 어두운 화면에서 자막을 모두 테스트하세요.",
        "원본 마스터와 업로드용 파일을 별도 버전으로 보관하세요.",
      ],
      relatedGuide: { title: "AI 쇼츠를 처음부터 9:16으로 제작해야 하는 이유", href: "/ko/insights/create-ai-shorts-9-16-from-start" },
    },
  },
  {
    slug: "long-form-relaxing-video-planning-sheet",
    published,
    updated: published,
    keywords: ["relaxing video planning", "ambient video worksheet", "롱폼 힐링 영상", "영상 기획표"],
    en: {
      title: "Long-Form Relaxing Video Planning Sheet",
      category: "Planning Worksheet",
      description: "A planning sheet for building calm long-form videos with restrained character motion, coherent ambience, and reusable segments.",
      intro: "Relaxing videos need controlled change rather than constant action. Define the environment, the character’s resting state, permitted micro-movements, sound, and edit points before producing multiple clips.",
      instructions: [
        "Describe the place and mood before deciding how the character moves.",
        "Separate allowed micro-movements from movements that would break the calm scene.",
        "Plan repeatable sections and transitions while the visual and audio structure is still flexible.",
      ],
      fields: [
        { label: "Location and time of day", hint: "Place, season, weather, and time" },
        { label: "Overall mood", hint: "A concise emotional and visual direction", multiline: true },
        { label: "Character’s base pose", hint: "Stable resting position and eyeline" },
        { label: "Allowed micro-movements", hint: "Breathing, blinking, small ear or head movement", multiline: true },
        { label: "Large movements to limit", hint: "Actions that change pose, framing, or identity", multiline: true },
        { label: "Environmental movement", hint: "Light, steam, rain, leaves, fabric, or other subtle motion", multiline: true },
        { label: "Music and ambience", hint: "Music function, environmental sound, and quiet areas", multiline: true },
        { label: "Repeatable segment", hint: "Start and end conditions that can connect" },
        { label: "Transition points", hint: "Where cuts or short dissolves can remain unobtrusive" },
        { label: "Final duration plan", hint: "Section lengths, repeats, and total target duration", multiline: true },
      ],
      checklist: [
        "The base pose can remain stable across the sequence.",
        "Micro-movements support the mood instead of drawing attention.",
        "Environment motion has a consistent direction and rhythm.",
        "Music and ambience leave space for quiet moments.",
        "Repeat points and scene transitions have been marked.",
      ],
      tips: [
        "Build a short stable segment before planning a long timeline.",
        "Review loops with audio as well as picture.",
        "A cut is often cleaner than forcing continuity across incompatible poses.",
      ],
      relatedGuide: { title: "How to Create Seamless Loops for Relaxing AI Videos", href: "/insights/seamless-loops-relaxing-ai-videos" },
    },
    ko: {
      title: "롱폼 힐링 영상 기획표",
      category: "기획 워크시트",
      description: "절제된 캐릭터 움직임, 일관된 분위기와 반복 가능한 구간을 계획하는 롱폼 힐링 영상용 기획표입니다.",
      intro: "힐링 영상은 계속되는 큰 동작보다 통제된 작은 변화가 중요합니다. 여러 클립을 만들기 전에 장소, 캐릭터의 기본 자세, 허용할 미세 움직임, 소리와 편집 지점을 정리하세요.",
      instructions: [
        "캐릭터 움직임보다 먼저 장소와 전체 분위기를 정합니다.",
        "허용할 미세 움직임과 차분한 장면을 깨뜨릴 큰 움직임을 구분합니다.",
        "영상과 오디오 구성이 유연할 때 반복 구간과 전환 위치를 계획합니다.",
      ],
      fields: [
        { label: "영상의 장소와 시간대", hint: "장소, 계절, 날씨와 시간" },
        { label: "전체 분위기", hint: "감정과 시각 방향을 간결하게 작성", multiline: true },
        { label: "캐릭터의 기본 자세", hint: "안정적인 휴식 자세와 시선" },
        { label: "허용할 미세 움직임", hint: "호흡, 눈 깜빡임, 작은 귀나 머리 움직임", multiline: true },
        { label: "제한할 큰 움직임", hint: "자세, 구도 또는 외형을 크게 바꾸는 행동", multiline: true },
        { label: "환경 움직임", hint: "빛, 김, 비, 나뭇잎, 천 등 작은 움직임", multiline: true },
        { label: "음악과 환경음", hint: "음악의 역할, 주변 소리와 조용한 구간", multiline: true },
        { label: "반복 가능한 구간", hint: "서로 연결할 수 있는 시작과 종료 상태" },
        { label: "장면 전환 위치", hint: "컷이나 짧은 디졸브가 자연스러운 지점" },
        { label: "최종 영상 길이 계획", hint: "구간별 길이, 반복 횟수와 전체 목표 길이", multiline: true },
      ],
      checklist: [
        "기본 자세를 장면 전체에서 안정적으로 유지할 수 있습니다.",
        "미세 움직임이 시선을 빼앗지 않고 분위기를 돕습니다.",
        "환경 움직임의 방향과 리듬이 일관됩니다.",
        "음악과 환경음 사이에 조용한 여유가 있습니다.",
        "반복 지점과 장면 전환 위치를 표시했습니다.",
      ],
      tips: [
        "긴 타임라인을 만들기 전에 짧고 안정적인 구간부터 완성하세요.",
        "화면뿐 아니라 오디오도 함께 들으며 반복 지점을 확인하세요.",
        "서로 다른 자세를 억지로 연결하는 것보다 컷이 더 자연스러울 수 있습니다.",
      ],
      relatedGuide: { title: "힐링 AI 영상을 자연스럽게 반복 재생하는 제작 방법", href: "/ko/insights/seamless-loops-relaxing-ai-videos" },
    },
  },
  {
    slug: "ai-video-continuity-checklist",
    published,
    updated: published,
    keywords: ["AI video continuity", "scene connection checklist", "AI 영상 연속성", "장면 연결"],
    en: {
      title: "AI Video Continuity Checklist",
      category: "Continuity Checklist",
      description: "A scene-to-scene checklist for matching pose, eyeline, camera, props, lighting, wardrobe, weather, and edit points.",
      intro: "Complete this sheet with the last frame of the previous shot and the first frame of the next shot visible together. It helps distinguish a connection that can cut directly from one that needs a dissolve or a separate setup.",
      instructions: [
        "Place the outgoing and incoming frames side by side.",
        "Review spatial continuity before judging color or fine detail.",
        "Choose the edit method only after every mismatch is identified.",
      ],
      fields: [
        { label: "Previous scene’s final pose", hint: "Body, head, limbs, and action state", multiline: true },
        { label: "Next scene’s starting pose", hint: "What must match and what intentionally changes?", multiline: true },
        { label: "Character position and eyeline", hint: "Screen side, facing direction, and gaze" },
        { label: "Camera direction and distance", hint: "Angle, shot size, height, and movement" },
        { label: "Background prop positions", hint: "Fixed objects and their screen locations", multiline: true },
        { label: "Light direction and brightness", hint: "Source direction, exposure, and color" },
        { label: "Wardrobe and accessories", hint: "Shape, placement, color, and visibility" },
        { label: "Weather and time of day", hint: "Conditions that must carry across the cut" },
        { label: "Connection choice", hint: "Direct cut, direct continuation, dissolve, or separate shot" },
        { label: "Join-frame notes", hint: "Record the exact mismatch or approved transition", multiline: true },
      ],
      checklist: [
        "The final and starting poses support the same action.",
        "Screen direction and eyeline remain understandable.",
        "Camera distance changes intentionally rather than drifting.",
        "Props, wardrobe, lighting, weather, and time remain coherent.",
        "The connection frames have been reviewed one frame at a time.",
      ],
      tips: [
        "Judge silhouette and screen direction before small texture differences.",
        "Use a short dissolve only when it supports the edit; it cannot hide every mismatch.",
        "If the character leaves frame, scrutinize identity and position when it returns.",
      ],
      relatedGuide: { title: "How to Extend AI Video Scenes Naturally in Google Flow", href: "/insights/extend-ai-video-scenes-google-flow" },
    },
    ko: {
      title: "AI 영상 장면 연속성 체크리스트",
      category: "연속성 체크리스트",
      description: "앞뒤 장면의 자세, 시선, 카메라, 소품, 조명, 의상, 날씨와 편집 지점을 맞추기 위한 장면 연결 체크리스트입니다.",
      intro: "이전 샷의 마지막 프레임과 다음 샷의 첫 프레임을 나란히 놓고 작성하세요. 직접 연결할 수 있는 장면과 디졸브 또는 별도 구성이 필요한 장면을 구분하는 데 도움이 됩니다.",
      instructions: [
        "나가는 프레임과 들어오는 프레임을 나란히 배치합니다.",
        "색감과 작은 묘사보다 먼저 공간 연속성을 확인합니다.",
        "모든 차이를 기록한 뒤 편집 방식을 결정합니다.",
      ],
      fields: [
        { label: "이전 장면의 마지막 자세", hint: "몸, 머리, 손발과 행동 상태", multiline: true },
        { label: "다음 장면의 시작 자세", hint: "유지할 요소와 의도적으로 바뀌는 요소", multiline: true },
        { label: "캐릭터 위치와 시선", hint: "화면 방향, 몸이 향한 쪽과 시선" },
        { label: "카메라 방향과 거리", hint: "각도, 샷 크기, 높이와 움직임" },
        { label: "배경 소품 위치", hint: "고정된 물체와 화면 안 위치", multiline: true },
        { label: "조명의 방향과 밝기", hint: "광원 방향, 노출과 색상" },
        { label: "의상과 액세서리", hint: "형태, 위치, 색상과 화면 노출 여부" },
        { label: "날씨와 시간대", hint: "컷 사이에 유지해야 하는 환경 조건" },
        { label: "연결 방식 선택", hint: "직접 컷, 바로 연장, 디졸브 또는 별도 장면" },
        { label: "연결부 프레임 검토", hint: "정확한 불일치 또는 승인한 전환 내용을 기록", multiline: true },
      ],
      checklist: [
        "마지막 자세와 시작 자세가 같은 행동으로 이어집니다.",
        "화면 방향과 시선을 자연스럽게 이해할 수 있습니다.",
        "카메라 거리가 의도 없이 변하지 않습니다.",
        "소품, 의상, 조명, 날씨와 시간대가 일관됩니다.",
        "연결부를 프레임 단위로 확인했습니다.",
      ],
      tips: [
        "작은 질감 차이보다 실루엣과 화면 방향을 먼저 판단하세요.",
        "짧은 디졸브는 편집 의도가 있을 때 사용하며 모든 오류를 숨길 수는 없습니다.",
        "캐릭터가 화면 밖으로 나갔다면 재등장할 때 외형과 위치를 자세히 확인하세요.",
      ],
      relatedGuide: { title: "Google Flow에서 AI 영상 장면을 자연스럽게 연장하는 방법", href: "/ko/insights/extend-ai-video-scenes-google-flow" },
    },
  },
  {
    slug: "ai-video-asset-organization-guide",
    published,
    updated: published,
    keywords: ["AI video asset organization", "file naming guide", "AI 제작 파일 정리", "버전 관리"],
    en: {
      title: "AI Video Asset Organization Guide",
      category: "Organization Guide",
      description: "A practical, platform-neutral worksheet for organizing First Shots, generated clips, selects, audio, thumbnails, edits, versions, and backups.",
      intro: "A clear asset structure makes successful shots easy to find and prevents discarded generations from returning to the edit. Adapt the generic labels below to your own storage system without copying private paths or studio-specific names.",
      instructions: [
        "Choose one project root and create folders by asset purpose.",
        "Use the same scene and version identifiers from planning through final delivery.",
        "Complete the backup review after final files and usage records are organized.",
      ],
      fields: [
        { label: "Project folder structure", hint: "List the top-level folders used for this project", multiline: true },
        { label: "First Shot images", hint: "Location, approval status, and reference version" },
        { label: "Generated source videos", hint: "Organize by scene, shot, and generation batch" },
        { label: "Selects and rejects", hint: "Keep approved and discarded files clearly separated" },
        { label: "Extended scenes", hint: "Connect each extension to its source clip and version" },
        { label: "Music and sound effects", hint: "Source, license record, edit version, and mix status" },
        { label: "Thumbnails", hint: "Aspect ratio, language, and approved version" },
        { label: "Final edits", hint: "Master, platform variants, captions, and delivery copies" },
        { label: "File naming pattern", hint: "Project_scene_shot_content_version_status" },
        { label: "Version distinction", hint: "Define draft, review, approved, and final labels" },
        { label: "Pre-backup review", hint: "Missing assets, licenses, project files, and recovery test", multiline: true },
      ],
      checklist: [
        "Every asset belongs to one clearly named project.",
        "First Shots and source videos retain their scene and version relationship.",
        "Selects and rejects cannot be confused in the edit.",
        "Music and sound files include source or rights records.",
        "Final masters and platform exports are clearly distinguished.",
        "The backup includes project files and has been checked for recoverability.",
      ],
      tips: [
        "Use short, readable names and put changing information at the end.",
        "Do not overwrite approved files; create a new version.",
        "Document the system in neutral terms that teammates can understand without private machine paths.",
      ],
      relatedGuide: { title: "A Repeatable AI Video Production Workflow", href: "/insights/repeatable-ai-video-workflow" },
    },
    ko: {
      title: "AI 영상 제작 파일 정리 가이드",
      category: "파일 정리 가이드",
      description: "First Shot, 생성 원본, 선택본, 오디오, 썸네일, 편집본, 버전과 백업을 체계적으로 관리하는 범용 워크시트입니다.",
      intro: "명확한 파일 구조는 성공한 결과물을 빠르게 찾게 하고 폐기한 생성본이 편집에 다시 들어오는 실수를 줄입니다. 아래의 일반적인 항목을 개인 환경에 맞게 적용하되 비공개 경로나 내부 전용 파일명은 공유하지 마세요.",
      instructions: [
        "프로젝트 기준 폴더 하나를 정하고 자산의 용도별로 하위 폴더를 만듭니다.",
        "기획부터 최종 납품까지 같은 장면과 버전 식별 방식을 사용합니다.",
        "최종 파일과 사용 권리 기록을 정리한 뒤 백업 항목을 점검합니다.",
      ],
      fields: [
        { label: "프로젝트별 폴더 구조", hint: "이 프로젝트에서 사용할 최상위 폴더를 작성", multiline: true },
        { label: "First Shot 이미지", hint: "보관 위치, 승인 상태와 기준 버전" },
        { label: "생성된 원본 영상", hint: "장면, 샷과 생성 묶음별로 정리" },
        { label: "선택본과 폐기본", hint: "승인 파일과 제외 파일이 확실히 구분되게 관리" },
        { label: "연장 장면", hint: "원본 클립과 연장본의 버전 관계를 기록" },
        { label: "음악과 효과음", hint: "출처, 사용 권리 기록, 편집 버전과 믹스 상태" },
        { label: "썸네일", hint: "화면 비율, 언어와 승인 버전" },
        { label: "최종 편집본", hint: "마스터, 플랫폼별 파일, 자막과 납품본" },
        { label: "파일명 작성 방식", hint: "프로젝트_장면_샷_내용_버전_상태" },
        { label: "버전 구분", hint: "초안, 검토, 승인과 최종 상태 표기 정의" },
        { label: "백업 전 확인 항목", hint: "누락 자산, 사용 권리, 프로젝트 파일과 복구 가능 여부", multiline: true },
      ],
      checklist: [
        "모든 자산이 명확한 하나의 프로젝트에 속합니다.",
        "First Shot과 원본 영상의 장면 및 버전 관계를 추적할 수 있습니다.",
        "선택본과 폐기본이 편집 과정에서 섞이지 않습니다.",
        "음악과 사운드 파일에 출처 또는 권리 기록이 있습니다.",
        "최종 마스터와 플랫폼별 내보내기 파일이 구분됩니다.",
        "백업에 프로젝트 파일이 포함되며 복구 가능 여부를 확인했습니다.",
      ],
      tips: [
        "짧고 읽기 쉬운 이름을 사용하고 변경되는 정보는 뒤쪽에 배치하세요.",
        "승인된 파일을 덮어쓰지 말고 새 버전을 만드세요.",
        "개인 컴퓨터 경로 없이도 팀원이 이해할 수 있는 중립적인 용어로 체계를 기록하세요.",
      ],
      relatedGuide: { title: "반복 가능한 AI 영상 제작 워크플로", href: "/ko/insights/repeatable-ai-video-workflow" },
    },
  },
];

export function isPracticalResourceSlug(slug: string): slug is PracticalResourceSlug {
  return practicalResourceSlugs.includes(slug as PracticalResourceSlug);
}

export function getPracticalResource(slug: string) {
  return practicalResources.find((resource) => resource.slug === slug);
}

export function createPracticalResourceMetadata(
  slug: PracticalResourceSlug,
  language: PracticalResourceLanguage,
): Metadata {
  const resource = getPracticalResource(slug)!;
  const copy = resource[language];
  const englishPath = `/resources/${slug}`;
  const koreanPath = `/ko/resources/${slug}`;
  const path = language === "ko" ? koreanPath : englishPath;
  const title = `${copy.title} | FourFeetz Resources`;

  return {
    title: { absolute: title },
    description: copy.description,
    alternates:
      language === "ko"
        ? languageAlternates(englishPath, koreanPath)
        : englishLanguageAlternates(englishPath, koreanPath),
    openGraph: {
      type: "website",
      siteName: "FourFeetz Studios",
      title,
      description: copy.description,
      url: path,
      locale: language === "ko" ? "ko_KR" : "en_US",
      alternateLocale: [language === "ko" ? "en_US" : "ko_KR"],
    },
    twitter: { card: "summary", title, description: copy.description },
  };
}
