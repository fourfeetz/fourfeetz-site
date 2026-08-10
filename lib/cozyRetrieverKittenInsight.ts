import type { ProductionInsight, VideoUploadDate } from "@/lib/productionInsights";

type LocalizedInsight = ProductionInsight & {
  heroAlt: string;
  heroFit: "contain";
};

const slug = "cozy-retriever-kitten-sleep-short";
const published = "2026-08-09";
const uploadDate: VideoUploadDate = "2026-08-09T22:15:03+09:00";
const hero = "/images/shorts/cozy-retriever-kitten/cozy-retriever-kitten-poster.png";
const video = "/videos/shorts/cozy-retriever-kitten/cozy-retriever-kitten-sleep-short.mp4";
const extendCapture = "/images/insights/cozy-retriever-kitten-veo-extend-output.png";
const audio = "/audio/insights/sunbeam-paws-lullaby.mp3";

export const cozyRetrieverKittenInsight: Record<"en" | "ko", LocalizedInsight> = {
  en: {
    slug,
    published,
    updated: published,
    eyebrow: "FourFeetz Production Notes",
    category: "Production Experience",
    title: "How We Made a Cozy Retriever and Kitten Sleep Short",
    shortTitle: "How We Made a Cozy Retriever and Kitten Sleep Short",
    description: "A first-person production account of building a 32-second vertical animal story one small action at a time, handling an unusual Extend output, and finishing the short with original music.",
    hero,
    heroAlt: "A young golden retriever and a tiny ginger tabby kitten sleeping together in warm afternoon sunlight",
    heroFit: "contain",
    readTime: "8 min read",
    verdict: "The warmest result came from making each action small and readable: the retriever grows sleepy, lies down, settles, and only then does the kitten approach and curl up beside him.",
    tags: ["AI Video Production", "Animal Short Film", "Storytelling", "Google Flow", "Veo"],
    keywords: ["cozy animal short", "retriever kitten video", "AI video production experience", "vertical animal story"],
    tools: ["Google Flow", "Veo"],
    characters: [],
    popularity: 110,
    featuredVideo: {
      name: "A Golden Retriever Fell Asleep… Then a Tiny Kitten Joined Him",
      description: "A sleepy young retriever dozes off in warm afternoon sunlight before a tiny ginger tabby kitten curls up beside him.",
      thumbnailUrl: hero,
      contentUrl: video,
      duration: "PT32.323S",
      uploadDate,
    },
    sections: [
      {
        id: "production-goal",
        title: "The Production Goal",
        paragraphs: [
          "I wanted to tell a very small story in a warm afternoon living room: a young golden retriever becomes sleepy, lies down, and is joined by a tiny ginger tabby kitten that rests against his front leg. The finished piece is a 32.323-second 9:16 short with no dialogue, so the emotion has to come from posture, timing, light and the space shared by the two animals.",
          "The finished short below keeps the original vertical composition and includes its final music mix. Playback is always initiated by the viewer.",
        ],
        videos: [{
          src: video,
          poster: hero,
          title: "A Golden Retriever Fell Asleep… Then a Tiny Kitten Joined Him",
          caption: "The finished 32-second vertical short, presented with its original 9:16 framing and final soundtrack.",
          presentation: "portrait",
        }],
      },
      {
        id: "first-problem",
        title: "The First Problem: Falling Asleep Too Quickly",
        paragraphs: [
          "In the first generations, the retriever moved from sitting to sleep too quickly. A request as simple as falling asleep still left too many physical decisions inside one short moment, and the result felt rushed instead of drowsy.",
          "I added a separate beat before the dog lay down. The retriever first holds the seated pose while the eyelids grow heavy, the neck relaxes, and the head dips and rises with sleepiness. Giving the audience that preparation made the next movement feel earned.",
        ],
      },
      {
        id: "separate-actions",
        title: "Breaking the Performance Into Several Small Actions",
        paragraphs: [
          "I did not ask one generation to carry the whole performance. I separated it into a sleepy seated beat, a controlled movement down to the front legs, a final settling motion, the kitten's entrance, and the shared sleeping pose.",
          "I also kept the retriever upright on the belly rather than turning the body fully onto its side. That preserved a clear front leg and open space for the kitten to enter, lean in, and settle without forcing the dog's entire body into another large transformation.",
        ],
        steps: [
          "Show the retriever growing sleepy while seated.",
          "Lower the chest toward the front legs without rolling onto the side.",
          "Let the dog settle before introducing a second character.",
          "Bring the kitten into the open space beside the front leg.",
          "Hold the shared sleeping pose with only restrained breathing and a gentle final zoom-out.",
        ],
      },
      {
        id: "reduce-transformations",
        title: "Reducing Body Transformations",
        paragraphs: [
          "I avoided having the retriever roll over and pull the kitten close with a paw because that larger interaction created more opportunities for legs and paws to change shape. Instead, the kitten performs the meaningful movement: it rubs lightly against the dog's front leg, lowers its body, and rests its head there.",
          "In the final shot I kept movement deliberately quiet. Small breathing, a faint ear motion from the kitten, and a roughly three-to-five-percent zoom-out over eight seconds were enough to make the ending feel alive without disturbing the calm pose.",
        ],
      },
      {
        id: "extend-problem",
        title: "The Problem We Encountered During Extend",
        paragraphs: [
          "During this production, one Extend result showed a second oversized Veo mark in the extended section, separate from the smaller mark already visible in the output. This is only an observation from this production attempt; I am not treating it as a general behavior, an officially confirmed bug, or evidence of a particular policy.",
          "I used the final frame of the previous scene that had completed normally as the starting image for an independent new video. In that result, the large additional mark did not appear, and I connected the separately generated scene during editing.",
        ],
        images: [{
          src: extendCapture,
          alt: "Extended video frame showing both a small Veo mark and a second oversized Veo mark in the lower-right corner",
          caption: "During one Extend attempt, a second oversized Veo mark appeared in addition to the smaller mark already visible in the output.",
          fit: "contain",
          presentation: "portrait",
        }],
      },
      {
        id: "music-and-finish",
        title: "Music and the Final Finish",
        paragraphs: [
          "I shaped the music around soft felt piano, acoustic guitar, a subtle music box and strings. The arrangement stays gentle so the warmth of the room remains central, then follows the final zoom-out without adding a dramatic peak that would interrupt the sleeping moment.",
          "The finished short already contains the final music mix. The separate player below is provided only so visitors can listen to the track on its own; neither the video nor the audio starts automatically.",
        ],
        audio: {
          src: audio,
          title: "Sunbeam Paws Lullaby",
          description: "Listen to “Sunbeam Paws Lullaby,” the gentle instrumental track created for the finished short.",
        },
      },
      {
        id: "lessons",
        title: "What I Learned From This Production",
        paragraphs: [
          "For an emotional short, the speed of a small action mattered more than the number of actions. Separating complex behavior into individual shots made the work easier to review, and preparing the required pose and open space in the previous scene's last frame made the kitten's entrance more practical.",
          "When the Extend output presented a problem in this production, generating an independent new scene from a normal last frame gave me a usable alternative. The final image needed only breathing, tiny ear movement and a restrained camera move to hold the feeling.",
        ],
        bullets: [
          "Plan one readable action for each short generation.",
          "Protect the body pose and physical space needed by the next action.",
          "Reduce large contact gestures when they introduce unnecessary body changes.",
          "Judge the final quiet shot by rhythm and continuity, not by the amount of motion.",
        ],
      },
    ],
    faqs: [
      { question: "Why was the falling-asleep action split into several shots?", answer: "The first version moved too quickly. Separate sleepy, lowering and settling beats made the physical transition and emotional timing easier to read." },
      { question: "Did the oversized Veo mark appear in every result?", answer: "No such general claim is made here. It was observed in one Extend result from this production, while the independently generated scene made from the previous normal last frame did not show the large additional mark." },
      { question: "Does the separate music player add music to the video?", answer: "No. The finished video already contains its final soundtrack, and the separate player is a user-controlled way to hear the instrumental track on its own." },
    ],
    related: [
      { label: "Watch the Short", title: "See It in the Videos Library", href: "/videos?type=shorts" },
      { label: "Meet the Cast", title: "Explore FourFeetz Characters", href: "/characters" },
      { label: "Related Production Story", title: "HARU & LUNA by the Rainy Window", href: "/insights/haru-luna-rainy-window-ai-pet-video" },
    ],
  },
  ko: {
    slug,
    published,
    updated: published,
    eyebrow: "FourFeetz 제작 노트",
    category: "제작 경험",
    title: "리트리버와 아기 고양이가 함께 잠드는 쇼츠 제작기",
    shortTitle: "리트리버와 아기 고양이 쇼츠 제작기",
    description: "작은 행동을 여러 신으로 나누어 32초 세로형 동물 이야기를 만들고, Extend 출력 문제를 해결한 뒤 오리지널 음악으로 마무리한 실제 제작 경험입니다.",
    hero,
    heroAlt: "따뜻한 오후 햇살 속에서 어린 골든리트리버와 아기 치즈태비 고양이가 함께 잠든 모습",
    heroFit: "contain",
    readTime: "약 8분",
    verdict: "리트리버가 졸고, 엎드리고, 자세를 잡은 다음에야 고양이가 다가와 기대도록 작은 행동을 차례로 나눈 것이 가장 따뜻하고 자연스러운 결과를 만들었습니다.",
    tags: ["AI 영상 제작", "동물 쇼츠", "스토리텔링", "Google Flow", "Veo"],
    keywords: ["동물 쇼츠 제작", "리트리버 고양이 영상", "AI 영상 제작 경험", "세로형 동물 이야기"],
    tools: ["Google Flow", "Veo"],
    characters: [],
    popularity: 110,
    featuredVideo: {
      name: "리트리버가 잠들자 아기 고양이가 다가왔어요",
      description: "따뜻한 오후 햇살 속에서 어린 리트리버가 잠들고 아기 치즈태비 고양이가 다가와 곁에 눕는 포근한 쇼츠입니다.",
      thumbnailUrl: hero,
      contentUrl: video,
      duration: "PT32.323S",
      uploadDate,
    },
    sections: [
      {
        id: "production-goal",
        title: "제작 목표",
        paragraphs: [
          "따뜻한 오후 햇살이 드는 거실에서 어린 골든리트리버가 졸다가 엎드리고, 아기 치즈태비 고양이가 다가와 앞다리에 기대어 함께 잠드는 아주 작은 이야기를 만들고 싶었습니다. 완성본은 대사 없는 32.323초 길이의 9:16 쇼츠이므로 감정은 자세와 타이밍, 빛과 두 동물이 나누는 공간만으로 전달해야 했습니다.",
          "아래 완성 쇼츠는 원래의 세로 구도와 최종 음악 믹스를 그대로 담았습니다. 재생은 방문자가 직접 시작합니다.",
        ],
        videos: [{
          src: video,
          poster: hero,
          title: "리트리버가 잠들자 아기 고양이가 다가왔어요",
          caption: "원래의 9:16 구도와 최종 사운드트랙을 유지한 32초 완성 쇼츠입니다.",
          presentation: "portrait",
        }],
      },
      {
        id: "first-problem",
        title: "처음 발생한 문제: 너무 빠르게 잠드는 동작",
        paragraphs: [
          "첫 생성에서는 앉아 있던 리트리버가 잠드는 자세로 너무 빠르게 넘어갔습니다. 단순해 보이는 잠들기라는 지시 안에도 짧은 순간에 결정해야 할 신체 움직임이 많아 포근하게 졸기보다 급하게 쓰러지는 느낌이 났습니다.",
          "그래서 엎드리기 전에 별도의 졸음 장면을 넣었습니다. 앉은 자세를 유지한 채 눈꺼풀이 무거워지고, 목의 힘이 풀리며, 고개가 천천히 내려갔다가 다시 드는 작은 동작부터 보여주었습니다. 이 준비가 생기자 다음 움직임도 자연스럽게 받아들여졌습니다.",
        ],
      },
      {
        id: "separate-actions",
        title: "동작을 여러 신으로 분리한 과정",
        paragraphs: [
          "복잡한 동작을 한 번에 생성하지 않고 앉아서 조는 장면, 앞다리 쪽으로 천천히 엎드리는 장면, 자세를 잡는 장면, 고양이의 등장, 함께 잠든 마지막 자세로 나누었습니다.",
          "고양이가 자연스럽게 들어올 공간을 만들기 위해 리트리버가 배를 바닥에 댄 자세를 유지하게 했습니다. 몸 전체를 옆으로 눕히지 않아 앞다리와 열린 공간이 분명하게 남았고, 고양이가 들어와 기대는 동작을 별도의 큰 신체 변화 없이 이어갈 수 있었습니다.",
        ],
        steps: [
          "앉은 상태에서 리트리버가 천천히 조는 모습을 보여줍니다.",
          "옆으로 구르지 않고 앞다리 쪽으로 가슴을 낮춥니다.",
          "두 번째 캐릭터가 들어오기 전에 자세를 안정시킵니다.",
          "고양이가 앞다리 옆의 열린 공간으로 들어오게 합니다.",
          "작은 호흡과 마지막 줌아웃만 남긴 채 함께 잠든 자세를 유지합니다.",
        ],
      },
      {
        id: "reduce-transformations",
        title: "신체 변형을 줄인 방법",
        paragraphs: [
          "리트리버가 앞발로 고양이를 끌어안게 하면 다리와 발이 변형될 가능성이 커서 해당 동작은 사용하지 않았습니다. 대신 고양이가 스스로 리트리버의 앞다리에 얼굴을 가볍게 비비고, 몸을 낮춘 다음 머리를 기대어 잠들도록 만들었습니다.",
          "마지막 장면에서는 동작을 많이 넣지 않았습니다. 두 동물의 미세한 호흡, 고양이 귀의 아주 작은 움직임, 8초 동안 약 3~5%의 느린 줌아웃만으로 장면이 살아 있으면서도 포근한 자세가 흐트러지지 않게 했습니다.",
        ],
      },
      {
        id: "extend-problem",
        title: "Extend 과정에서 겪은 문제",
        paragraphs: [
          "이번 제작 과정의 한 Extend 결과에서 기존 출력에 보이던 작은 표시와 별도로 큰 Veo 표시가 연장 구간에 나타나는 현상을 실제로 관찰했습니다. 이는 이번 제작 시도의 관찰 내용일 뿐이며, 전체 서비스에서 항상 일어나는 현상이나 공식적으로 확인된 버그 또는 특정 정책이라고 판단하지 않았습니다.",
          "정상적으로 완성된 이전 신의 마지막 프레임을 시작 이미지로 사용해 독립된 새 영상을 생성했습니다. 그 결과에서는 큰 추가 표시가 나타나지 않았고, 별도로 생성한 장면은 편집 과정에서 직접 연결했습니다.",
        ],
        images: [{
          src: extendCapture,
          alt: "화면 오른쪽 아래에 작은 Veo 표시와 큰 Veo 표시가 함께 나타난 연장 영상 화면",
          caption: "한 차례의 Extend 작업에서 기존의 작은 표시와 별도로 큰 Veo 표시가 추가로 나타난 실제 출력 화면입니다.",
          fit: "contain",
          presentation: "portrait",
        }],
      },
      {
        id: "music-and-finish",
        title: "음악과 마무리",
        paragraphs: [
          "음악은 부드러운 펠트 피아노, 어쿠스틱 기타, 은은한 뮤직박스와 스트링을 중심으로 구성했습니다. 거실의 따뜻함이 중심에 남도록 잔잔한 흐름을 유지하고, 잠든 장면을 깨우는 강한 절정 없이 마지막 줌아웃의 방향과 자연스럽게 맞췄습니다.",
          "완성 쇼츠에는 이미 최종 음악이 포함되어 있습니다. 아래 플레이어는 곡만 따로 들어볼 수 있도록 제공하며 영상과 오디오는 모두 자동으로 재생되지 않습니다.",
        ],
        audio: {
          src: audio,
          title: "Sunbeam Paws Lullaby",
          description: "완성된 쇼츠를 위해 제작한 잔잔한 연주곡 ‘Sunbeam Paws Lullaby’를 들어보세요.",
        },
      },
      {
        id: "lessons",
        title: "이번 제작에서 얻은 교훈",
        paragraphs: [
          "감성적인 영상일수록 동작의 수보다 작은 동작의 속도가 중요했습니다. 복잡한 행동을 여러 신으로 분리하니 검토가 쉬워졌고, 다음 신에 필요한 자세와 공간을 이전 신의 마지막 프레임에 미리 준비하는 방식이 고양이의 등장을 만드는 데 실용적이었습니다.",
          "이번 Extend 결과에서 문제가 생겼을 때는 정상 마지막 프레임으로 독립된 새 장면을 만드는 방식이 사용할 수 있는 대안이 되었습니다. 마지막 장면은 호흡과 작은 귀 움직임, 절제된 카메라 이동만 남겨도 충분히 따뜻했습니다.",
        ],
        bullets: [
          "짧은 생성 하나에는 눈으로 읽을 수 있는 행동 하나를 계획합니다.",
          "다음 행동에 필요한 몸의 자세와 물리적 공간을 미리 지킵니다.",
          "불필요한 신체 변화를 만드는 큰 접촉 동작은 줄입니다.",
          "마지막 고요한 장면은 움직임의 양보다 리듬과 연속성으로 판단합니다.",
        ],
      },
    ],
    faqs: [
      { question: "잠드는 동작을 여러 장면으로 나눈 이유는 무엇인가요?", answer: "첫 결과의 움직임이 너무 빨랐기 때문입니다. 조는 모습, 몸을 낮추는 동작과 자세를 잡는 순간을 분리해 신체 변화와 감정의 속도를 읽기 쉽게 만들었습니다." },
      { question: "큰 Veo 표시가 모든 결과에서 나타났나요?", answer: "그렇게 일반화하지 않습니다. 이번 제작의 한 Extend 결과에서 관찰했으며, 정상적인 이전 마지막 프레임으로 만든 독립 영상에서는 큰 추가 표시가 나타나지 않았습니다." },
      { question: "별도 음악 플레이어가 영상에 음악을 다시 더하나요?", answer: "아닙니다. 완성 영상에는 최종 음악이 이미 포함되어 있으며, 별도 플레이어는 방문자가 연주곡만 직접 선택해 들을 수 있도록 제공합니다." },
    ],
    related: [
      { label: "완성 쇼츠", title: "Videos에서 쇼츠 보기", href: "/ko/videos?type=shorts" },
      { label: "등장 동물", title: "FourFeetz 캐릭터 둘러보기", href: "/ko/characters" },
      { label: "관련 제작기", title: "HARU와 LUNA의 비 오는 창가 제작기", href: "/ko/insights/haru-luna-rainy-window-ai-pet-video" },
    ],
  },
};
