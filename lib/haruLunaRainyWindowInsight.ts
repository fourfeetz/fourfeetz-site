import type { ProductionInsight } from "@/lib/productionInsights";

type LocalizedRainyWindowInsight = ProductionInsight & {
  heroAlt: string;
  heroFit?: "cover" | "contain";
  heroPosition?: string;
};

const slug = "haru-luna-rainy-window-ai-pet-video";
const published = "2026-08-06";
const hero = "/images/insights/haru-luna-rainy-window-01-opening.webp";

export const haruLunaRainyWindowGuide: Record<"en" | "ko", LocalizedRainyWindowInsight> = {
  en: {
    slug,
    title: "HARU and LUNA by the Rainy Window: Making a 23-Second AI Pet Film",
    shortTitle: "Making HARU and LUNA’s 23-Second Rainy-Window Film",
    description:
      "A behind-the-scenes look at preserving real pet features while fixing ear deformation, synchronized movement, and an unexpected extra animal in a short AI pet film.",
    eyebrow: "FourFeetz Production Story",
    hero,
    heroAlt: "HARU the puppy and LUNA the cat waiting beside a rainy window",
    heroFit: "cover",
    heroPosition: "50% 50%",
    published,
    updated: published,
    readTime: "8 min read",
    verdict:
      "The most reliable result came from separating fixed identity traits from flexible atmosphere, giving HARU and LUNA different reaction timing, and replacing narrative cues with concrete on-screen constraints when unwanted elements appeared.",
    category: "Production Guide",
    tags: ["AI Pet Video", "Character Consistency", "Google Flow", "Image to Video"],
    keywords: ["AI pet video", "custom pet film", "Google Flow", "character consistency", "image to video"],
    tools: ["Google Flow", "AI Image", "AI Video"],
    characters: ["HARU", "LUNA"],
    popularity: 100,
    sections: [
      {
        id: "separating-atmosphere-identity",
        title: "Separating Atmosphere From Identity",
        paragraphs: [
          "This vertical 23-second film shows HARU and LUNA quietly watching the rain on a warm evening. The finished scene looks simple, but preserving the two pets’ recognizable features while giving them natural, independent movement required several rounds of revision.",
          "The first concept image had the mood we wanted: rain running down the glass, a cool blue exterior, and warm amber light inside. However, the animals did not look enough like the real HARU and LUNA. A later version followed the reference photos more closely but lost some of the cinematic atmosphere.",
          "We solved this by separating the requirements. The original image guided the lighting, composition, and color. The reference photos guided facial structure, fur markings, ear shape, collars, and body proportions. Both animals were made smaller within the room, especially LUNA, and the name tags received stronger size and contrast.",
          "The practical lesson was that ‘use the reference image’ is not precise enough. Stable features and flexible scene elements need to be identified separately.",
        ],
      },
      {
        id: "ear-deformation",
        title: "One Small Instruction Changed HARU’s Ears",
        paragraphs: [
          "An early prompt asked HARU’s ears to react slightly to a sound. The generated motion was exaggerated, making his naturally soft, folded ears stand upright. We removed the ear action and explicitly required the ears to remain floppy, folded downward, and unchanged throughout the shot.",
          "When a body part defines a character’s identity, even a small movement request can become a visible design change. Keeping that part still was more reliable.",
        ],
        images: [
          {
            src: "/images/insights/haru-luna-rainy-window-02-rain-watching.webp",
            alt: "HARU and LUNA watching the rain with different reactions",
            caption: "HARU and LUNA were directed with different reaction timing instead of matching movement.",
            aspect: "video",
            fit: "cover",
          },
        ],
      },
      {
        id: "synchronized-reactions",
        title: "Synchronized Reactions Looked Artificial",
        paragraphs: [
          "At first, both animals reacted to the same off-screen sound ‘together.’ The model interpreted that literally: their faces moved at the same speed and through nearly the same angle.",
          "We redesigned the timing. HARU looked right with his eyes before making a small head turn. About one second later, LUNA blinked and shifted only her gaze. Giving each pet a different start time, speed, and movement range produced a more believable result.",
        ],
        steps: [
          "HARU looks to the right with his eyes before making a small head turn.",
          "About one second later, LUNA blinks and shifts only her gaze.",
          "Each pet receives a different start time, speed, and movement range.",
        ],
      },
      {
        id: "unexpected-third-cat",
        title: "A Story Cue Created an Unexpected Third Cat",
        paragraphs: [
          "The most surprising error was a new cat walking in from the hallway. Describing an entryway and an owner returning home encouraged the model to visualize a new arrival.",
          "The revised prompt removed most of the narrative and defined only visible constraints: exactly two animals, an off-screen sound with no visible source, an empty and motionless hallway, and no new person, animal, silhouette, or reflection.",
          "This showed us that emotional story language is not always helpful during troubleshooting. When an unwanted element keeps appearing, concrete screen conditions are more effective than additional narrative detail.",
        ],
        bullets: [
          "Keep exactly two animals in the scene: the existing HARU and LUNA.",
          "Place the sound off screen without showing its source.",
          "Keep the doorway and hallway empty and motionless.",
          "Do not introduce a person, animal, silhouette, or reflection.",
        ],
      },
      {
        id: "quieter-ending",
        title: "A Quieter Ending Worked Better",
        paragraphs: [
          "We first tried to make both animals fall asleep. Their near-simultaneous posture changes felt mechanical. In the final version, only HARU lowers his head and closes his eyes. LUNA stays seated on the bench, preserving a more natural contrast between the two characters.",
        ],
        images: [
          {
            src: "/images/insights/haru-luna-rainy-window-03-quiet-ending.webp",
            alt: "HARU resting while LUNA remains seated by the rainy window",
            caption: "The final shot lets HARU rest while LUNA holds her seated pose.",
            aspect: "video",
            fit: "cover",
          },
        ],
      },
      {
        id: "practical-rules",
        title: "Practical Rules From This Production",
        paragraphs: [
          "This small rainy-window film became a useful test of what it takes to keep real pets recognizable in motion. At FourFeetz Studio, the final image matters, but so does the careful iteration behind it—turning a pet photograph into a quiet memory that feels personal and believable.",
        ],
        bullets: [
          "Separate fixed identity traits from flexible scene direction.",
          "Avoid unnecessary movement in ears, tails, or other shape-sensitive areas.",
          "Do not give multiple characters the same action at the same time.",
          "Specify different timing, speed, and range for each character.",
          "Suggest off-screen events with sound or light while strictly limiting entrances.",
          "Restart from a stable source frame instead of extending a clip that already contains an error.",
          "A fixed camera and fewer actions make faces and proportions easier to preserve.",
        ],
        videos: [
          {
            src: "/videos/shorts/haru-luna/quiet-rainy-evening.mp4",
            poster: "/images/insights/haru-luna-rainy-window-01-opening.webp",
            title: "A Quiet Rainy Evening with HARU and LUNA",
            caption: "The completed 9:16 short keeps the original sound and presents the final timing, restrained movement, and quiet ending described in this production story.",
            presentation: "portrait",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why did HARU’s ears change during generation?",
        answer:
          "A small ear-reaction instruction was exaggerated into an identity change. Removing that motion and holding the naturally folded ear shape was more reliable.",
      },
      {
        question: "How did FourFeetz make two pets react more naturally?",
        answer:
          "HARU and LUNA received different start times, speeds, and movement ranges instead of reacting together with the same head motion.",
      },
      {
        question: "How was the unexpected extra cat removed?",
        answer:
          "The narrative about an arrival was replaced with visible constraints: exactly two animals, an empty hallway, an off-screen sound, and no new figure or reflection.",
      },
    ],
    related: [
      { label: "Related Character", title: "Meet HARU", href: "/characters/haru" },
      { label: "Related Character", title: "Meet LUNA", href: "/characters/luna" },
      { label: "Related Guide", title: "Common AI Video Generation Failures", href: "/insights/common-ai-video-generation-failures" },
      { label: "Related Guide", title: "Reduce Character Inconsistency in AI Video", href: "/insights/reduce-character-inconsistency-ai-video" },
    ],
  },
  ko: {
    slug,
    title: "비 오는 창가에서 기다리는 HARU와 LUNA: 23초 AI 반려동물 영상 제작기",
    shortTitle: "HARU와 LUNA의 23초 빗속 창가 영상 제작기",
    description:
      "실제 반려동물의 외형을 유지하면서 비 오는 저녁의 감성 영상을 만든 과정과, 귀 변형·동작 동기화·추가 동물 생성 오류를 줄인 방법을 정리했습니다.",
    eyebrow: "FourFeetz 제작 이야기",
    hero,
    heroAlt: "비 오는 저녁 창가에서 함께 기다리는 강아지 HARU와 고양이 LUNA",
    heroFit: "cover",
    heroPosition: "50% 50%",
    published,
    updated: published,
    readTime: "약 8분",
    verdict:
      "외형을 고정할 요소와 장면 분위기를 분리하고, HARU와 LUNA의 반응 타이밍을 다르게 설계했으며, 원치 않는 요소가 나타날 때는 서사 대신 화면 조건을 구체적으로 제한한 방식이 가장 안정적이었습니다.",
    category: "제작 가이드",
    tags: ["AI 반려동물 영상", "캐릭터 일관성", "Google Flow", "이미지 투 비디오"],
    keywords: ["AI 반려동물 영상", "반려동물 추억 영상", "Google Flow", "캐릭터 일관성", "이미지 투 비디오"],
    tools: ["Google Flow", "AI 이미지", "AI 영상"],
    characters: ["HARU", "LUNA"],
    popularity: 100,
    sections: [
      {
        id: "separating-atmosphere-identity",
        title: "먼저 분위기와 외형의 우선순위를 나눴습니다",
        paragraphs: [
          "이번 영상은 비 오는 저녁, 강아지 HARU와 고양이 LUNA가 창밖을 조용히 바라보는 23초짜리 세로 영상입니다. 완성된 장면은 단순해 보이지만, 두 반려동물의 얼굴과 체형을 유지하면서 자연스럽고 서로 다른 움직임을 만드는 데 여러 차례 수정이 필요했습니다.",
          "처음 만든 이미지는 빗물이 흐르는 창문, 차가운 푸른빛의 바깥 풍경, 따뜻한 실내 조명이 잘 어우러졌습니다. 그러나 HARU와 LUNA의 실제 얼굴과는 차이가 있었습니다. 반대로 기준 사진을 강하게 반영하자 외형은 가까워졌지만, 처음 이미지가 가진 영화 같은 분위기가 약해졌습니다.",
          "그래서 기준을 두 가지로 분리했습니다. 배경과 조명은 첫 이미지의 분위기를 유지했고, 얼굴·털 무늬·귀 모양·목걸이는 실제 기준 사진에 맞췄습니다. 두 동물이 공간에 비해 커 보이지 않도록 체형을 줄였고, 특히 LUNA는 더 작고 앳된 비율로 조정했습니다. 영상 중에도 이름을 알아볼 수 있도록 이름표의 크기와 대비도 높였습니다.",
          "이 과정에서 배운 점은 ‘참조 이미지를 사용한다’는 한 문장만으로는 부족하다는 것입니다. 얼굴, 귀, 털 무늬처럼 반드시 유지할 요소와 조명, 구도처럼 장면마다 바뀌어도 되는 요소를 따로 지정해야 결과가 안정적이었습니다.",
        ],
      },
      {
        id: "ear-deformation",
        title: "작은 문장 하나가 귀 모양을 바꿨습니다",
        paragraphs: [
          "첫 영상 프롬프트에는 소리를 들은 HARU의 귀가 살짝 움직인다는 표현이 있었습니다. 생성 결과에서는 이 동작이 과장되어, 원래 아래로 접혀 있어야 할 HARU의 귀가 뾰족하게 서 버렸습니다.",
          "수정할 때는 귀의 움직임 자체를 삭제하고 HARU의 부드러운 연갈색 귀가 영상 내내 아래로 접힌 상태를 유지하며, 서거나 뾰족해지거나 형태가 변하지 않는다는 조건을 명확하게 반복했습니다. AI 영상에서는 작은 동작도 외형 변화로 이어질 수 있어 캐릭터의 핵심 특징과 직접 연결된 부위는 움직임을 최소화하는 편이 안전했습니다.",
        ],
        images: [
          {
            src: "/images/insights/haru-luna-rainy-window-02-rain-watching.webp",
            alt: "서로 다른 타이밍으로 창밖을 바라보는 HARU와 LUNA",
            caption: "같은 움직임을 맞추는 대신 HARU와 LUNA의 반응 시점을 다르게 설계했습니다.",
            aspect: "video",
            fit: "cover",
          },
        ],
      },
      {
        id: "synchronized-reactions",
        title: "둘을 동시에 움직이자 오히려 부자연스러웠습니다",
        paragraphs: [
          "처음에는 현관 쪽 소리에 HARU와 LUNA가 함께 반응하도록 했습니다. 하지만 ‘동시에’, ‘함께’라는 표현 때문에 두 동물의 얼굴이 같은 속도와 각도로 움직였습니다. 실제 반려동물의 반응이라기보다 같은 장치를 가진 인형처럼 보였습니다.",
          "같은 사건에 반응하더라도 시작 시점, 속도, 움직임의 크기를 다르게 설계하자 훨씬 자연스러워졌습니다.",
        ],
        steps: [
          "HARU는 먼저 눈으로 오른쪽을 보고, 이어서 고개를 조금 돌립니다.",
          "약 1초 뒤 LUNA는 천천히 눈을 깜빡인 다음 시선만 옮깁니다.",
          "두 동물의 속도와 움직임 범위를 서로 다르게 제한합니다.",
        ],
      },
      {
        id: "unexpected-third-cat",
        title: "‘주인이 돌아온다’는 설명이 새 고양이를 만들었습니다",
        paragraphs: [
          "가장 예상하지 못한 오류는 오른쪽 통로에서 새로운 고양이가 등장한 장면이었습니다. 프롬프트에 현관과 주인의 귀가를 설명하자, 모델이 그 상황을 화면 안에 새로운 존재가 들어오는 장면으로 해석한 것입니다.",
          "이를 해결하기 위해 이야기 설명을 줄이고 화면에서 확인할 수 있는 조건만 남겼습니다.",
          "이 경험을 통해 감성적인 상황 설명이 항상 좋은 결과를 만드는 것은 아니라는 점을 확인했습니다. 오류가 반복될 때는 서사를 줄이고, 화면에 보여야 하는 것과 절대 나타나면 안 되는 것을 구체적으로 적는 편이 효과적이었습니다.",
        ],
        bullets: [
          "장면에는 기존 HARU와 LUNA, 정확히 두 동물만 존재합니다.",
          "소리는 화면 오른쪽 바깥에서 들리며 출처는 보이지 않습니다.",
          "문과 통로는 움직이지 않고 비어 있습니다.",
          "사람, 동물, 그림자, 반사체가 새로 등장하지 않습니다.",
        ],
      },
      {
        id: "quieter-ending",
        title: "마지막은 두 동물이 똑같이 잠들지 않도록 했습니다",
        paragraphs: [
          "마무리 장면에서는 HARU와 LUNA가 함께 잠들도록 시도했습니다. 두 동물이 거의 같은 순간에 자세를 바꾸자 다시 동작이 인위적으로 보였습니다. 최종 영상에서는 HARU만 엎드린 자세에서 고개를 낮추고 눈을 감도록 했습니다. LUNA는 벤치에 앉은 자세와 시선을 유지해 두 캐릭터의 행동을 분리했습니다.",
        ],
        images: [
          {
            src: "/images/insights/haru-luna-rainy-window-03-quiet-ending.webp",
            alt: "눈을 감고 쉬는 HARU와 창가에 앉아 있는 LUNA",
            caption: "마지막 장면에서는 HARU만 쉬고 LUNA는 앉은 자세를 유지합니다.",
            aspect: "video",
            fit: "cover",
          },
        ],
      },
      {
        id: "practical-rules",
        title: "이번 제작에서 얻은 실전 기준",
        paragraphs: [
          "이번 작업은 큰 사건 없이 창밖을 바라보는 짧은 영상이지만, 실제 반려동물의 특징을 지키는 데 필요한 판단을 확인할 수 있었습니다. FourFeetz Studio는 완성된 결과뿐 아니라 이런 반복적인 수정 과정까지 바탕으로, 사진 속 반려동물이 자연스럽게 움직이는 맞춤형 추억 영상을 제작합니다.",
        ],
        bullets: [
          "외형 고정 요소와 장면 연출 요소를 프롬프트에서 분리합니다.",
          "귀, 꼬리처럼 형태가 쉽게 변하는 부위는 불필요하게 움직이지 않습니다.",
          "여러 캐릭터에게 같은 동작을 한꺼번에 지시하지 않습니다.",
          "서로 다른 시작 시점, 속도, 움직임 범위를 지정합니다.",
          "화면 밖 사건은 소리나 빛으로만 암시하고, 등장 요소는 엄격히 제한합니다.",
          "문제가 생긴 영상을 계속 연장하기보다 안정적인 첫 이미지나 마지막 프레임에서 다시 시작합니다.",
          "카메라를 고정하고 한 장면의 동작 수를 줄이면 얼굴과 체형을 유지하기 쉽습니다.",
        ],
        videos: [
          {
            src: "/videos/shorts/haru-luna/quiet-rainy-evening.mp4",
            poster: "/images/insights/haru-luna-rainy-window-01-opening.webp",
            title: "비 오는 창가, 하루와 루나의 조용한 저녁",
            caption: "완성된 9:16 쇼츠에서 이번 제작기에 기록한 서로 다른 반응 타이밍, 절제된 움직임과 조용한 마무리를 확인할 수 있습니다. 영상의 기존 오디오도 그대로 유지했습니다.",
            presentation: "portrait",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "HARU의 귀 모양은 왜 달라졌나요?",
        answer:
          "귀가 소리에 반응한다는 작은 지시가 외형 변화로 과장됐기 때문입니다. 귀 움직임을 제거하고 아래로 접힌 형태를 유지하도록 제한한 방식이 더 안정적이었습니다.",
      },
      {
        question: "두 반려동물의 반응을 자연스럽게 만든 방법은 무엇인가요?",
        answer:
          "HARU와 LUNA가 동시에 같은 각도로 움직이지 않도록 시작 시점, 속도와 움직임 범위를 서로 다르게 설계했습니다.",
      },
      {
        question: "예상하지 못한 추가 고양이는 어떻게 제거했나요?",
        answer:
          "주인의 귀가라는 서사를 줄이고 정확히 두 동물만 존재하며 통로는 비어 있고 새로운 사람·동물·그림자·반사체가 나타나지 않는다는 화면 조건으로 바꿨습니다.",
      },
    ],
    related: [
      { label: "관련 캐릭터", title: "HARU 캐릭터 보기", href: "/ko/characters/haru" },
      { label: "관련 캐릭터", title: "LUNA 캐릭터 보기", href: "/ko/characters/luna" },
      { label: "관련 가이드", title: "AI 영상 생성에서 자주 생기는 문제", href: "/ko/insights/common-ai-video-generation-failures" },
      { label: "관련 가이드", title: "AI 영상 캐릭터 일관성 문제 줄이기", href: "/ko/insights/reduce-character-inconsistency-ai-video" },
    ],
  },
};
