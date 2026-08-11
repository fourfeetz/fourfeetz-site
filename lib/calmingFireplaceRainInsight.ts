import type { ProductionInsight, VideoUploadDate } from "@/lib/productionInsights";

type LocalizedInsight = ProductionInsight & {
  heroAlt: string;
  heroFit: "cover";
};

const slug = "calming-dog-music-puppy-kitten-fireplace-rain";
const published = "2026-08-11";
const uploadDate: VideoUploadDate = "2026-08-11T21:52:23+09:00";
const poster = "/images/works/calming-fireplace-rain-puppy-kitten/puppy-kitten-fireplace-rain-poster.jpg";
const firstShot = "/images/works/calming-fireplace-rain-puppy-kitten/puppy-kitten-fireplace-rain-first-shot.png";
const video = "/videos/films/calming-fireplace-rain-puppy-kitten/calming-fireplace-rain-puppy-kitten.mp4";
const audio = "/audio/music/calming-fireplace-rain-for-dogs.mp3";

export const calmingFireplaceRainInsight: Record<"en" | "ko", LocalizedInsight> = {
  en: {
    slug,
    published,
    updated: published,
    eyebrow: "FourFeetz Production Notes",
    category: "Production Experience",
    title: "How We Created a Calming Fireplace and Rain Moment for Dogs",
    shortTitle: "A Calming Fireplace and Rain Moment for Dogs",
    description: "A production note on planning a quiet puppy-and-kitten scene around warm firelight, rain beyond the window, restrained animal behavior and music that stays gently in the background.",
    hero: poster,
    heroAlt: "A puppy and ginger kitten sleeping together beside a fireplace and a rain-covered window",
    heroFit: "cover",
    readTime: "7 min read",
    verdict: "The scene feels restful because every element serves the same small idea: the animals settle without exaggerated action, the rain remains outside, the firelight holds the room together, and the music supports the pause instead of asking for attention.",
    tags: ["Relax Moments", "Calming Music", "Pets", "Rain", "Fireplace"],
    keywords: ["calming music for dogs", "puppy kitten fireplace rain", "pet relaxation video", "FourFeetz Relax Moments"],
    tools: [],
    characters: [],
    popularity: 120,
    featuredVideo: {
      name: "Calming Music for Dogs — Puppy & Kitten Sleeping by the Fireplace in the Rain",
      description: "A peaceful puppy and kitten sleep beside a warm fireplace while gentle rain falls outside and calming music supports the quiet room.",
      thumbnailUrl: poster,
      contentUrl: video,
      duration: "PT50.016S",
      uploadDate,
    },
    sections: [
      {
        id: "scene-intention",
        title: "Beginning With One Quiet Rainy-Day Idea",
        paragraphs: [
          "The scene began with a simple emotional direction: a rainy day should feel protected rather than gloomy. The window carries the cool, wet exterior while the fireplace gives the room a warm center. Placing a puppy and a small kitten between those two conditions turns the contrast into a familiar resting place instead of a dramatic event.",
          "The supplied first-shot image establishes the room before the shared sleeping pose becomes the focus. It shows a young puppy near the fire and rain-covered glass, giving the composition enough open space and a clear warm-to-cool relationship. The final poster then shows how that idea resolves when the puppy and kitten rest together.",
        ],
        images: [{
          src: firstShot,
          alt: "A young golden puppy sitting on a cream rug between a warm fireplace and a rain-covered window",
          caption: "The supplied first-shot image establishes the fireplace, rain-covered window, warm rug and young puppy in a wide 16:9 composition.",
          aspect: "video",
          fit: "cover",
        }],
      },
      {
        id: "restrained-behavior",
        title: "Why the Animals Do Not Need to Perform Too Much",
        paragraphs: [
          "A calming scene can lose its purpose when the animals are asked to signal comfort through too many gestures. The direction here stays readable through settled bodies, closed or heavy eyes and close physical distance. The puppy and kitten do not need a large interaction once their shared sleeping position already communicates trust and warmth.",
          "Keeping behavior restrained also leaves room for the viewer to notice small environmental motion. Rain on the glass and the fireplace can continue around the animals without making the room feel busy. The calm comes from holding the pose long enough for the audience—and potentially a resting pet nearby—to stop waiting for the next dramatic action.",
        ],
      },
      {
        id: "visual-balance",
        title: "Balancing Firelight, Rain and Interior Warmth",
        paragraphs: [
          "The visual direction depends on separation without conflict. The fireplace occupies the warm, darker side of the frame, while the window carries cooler daylight and visible rain. The cream rug and golden fur sit between them, reflecting enough warmth to keep the sleeping animals clear without turning the room into a bright stage.",
          "The 1920 × 1080 frame uses a wide 16:9 layout, so the environment remains part of the experience rather than becoming a tight animal portrait. That width lets the rain, fire and resting pair coexist. It also keeps the poster and video in the same aspect ratio, avoiding a crop that would remove either side of the scene.",
        ],
        videos: [{
          src: video,
          poster,
          title: "Puppy and kitten sleeping beside a fireplace while rain falls outside",
          caption: "The finished 50.016-second 16:9 Relax Moments video. Playback begins only when the viewer chooses it.",
        }],
      },
      {
        id: "music-direction",
        title: "Keeping the Music Behind the Moment",
        paragraphs: [
          "For this kind of piece, music works best as part of the room's emotional temperature. It should not introduce a large peak, sharp transition or attention-grabbing rhythm that competes with the sleeping pose. The aim is an even, gentle flow that can sit beside rain and fireplace ambience without covering the quietness they create.",
          "The separate track below is the supplied 5-minute 11.904-second MP3 used for the new Music entry. It is presented in a viewer-controlled player so visiting the article does not begin downloading or playing the full track unexpectedly.",
        ],
        audio: {
          src: audio,
          title: "Calming Fireplace & Rain for Dogs",
          description: "Listen to the full calming track on its own, with playback controlled by the listener.",
        },
      },
      {
        id: "resting-use",
        title: "Designed for Pet Rest and Human Quiet Time",
        paragraphs: [
          "The finished piece fits moments when a dog or another pet is settling down, but its value is not limited to animals. The slow visual rhythm and unobtrusive music also suit a guardian reading, resting or taking a short break. Nothing in the scene demands a response; it simply offers a steady place to pause.",
          "That shared use shaped the balance of the content. The animals remain the emotional center, while the room provides enough atmosphere for the video to work as a calm background. The result can be watched directly, heard through the music page, or left as a brief visual reset between more active parts of the day.",
        ],
      },
      {
        id: "relax-moments",
        title: "Continuing FourFeetz Relax Moments",
        paragraphs: [
          "This episode continues the FourFeetz Relax Moments idea through a new weather pattern and a shared puppy-and-kitten scene. The series works when the setting, animal behavior and sound all agree on pace, allowing a small domestic moment to remain small rather than turning it into a plot-heavy sequence.",
          "Here, rain stays beyond the glass, firelight keeps the interior warm, and the sleeping pair gives the frame its emotional anchor. Together they close the episode on the same promise as the wider FourFeetz Relax Moments series: a gentle place for pets and people to rest for a while.",
        ],
      },
    ],
    faqs: [
      { question: "Does the video or music start automatically?", answer: "No. Both players require the visitor to start playback, and their preload settings avoid fetching the full media during the initial page load." },
      { question: "Is this a Short?", answer: "No. The source is a horizontal 1920 × 1080, 16:9 video, so it is listed as long-form rather than as a vertical Short." },
      { question: "What production tools were used?", answer: "The supplied files do not verify a production-tool list, so this article does not attribute the work to unconfirmed tools." },
    ],
    related: [
      { label: "Watch the Film", title: "Open the Videos Library", href: "/videos?type=long-form" },
      { label: "Listen to the Track", title: "Calming Fireplace & Rain for Dogs", href: "/music/calming-fireplace-rain-for-dogs" },
      { label: "More Music", title: "Explore the FourFeetz Music Library", href: "/music" },
      { label: "Relax Moments", title: "HARU — Snowy Hearth Nap", href: "/works/haru-snowy-hearth-nap" },
    ],
  },
  ko: {
    slug,
    published,
    updated: published,
    eyebrow: "FourFeetz 제작 노트",
    category: "제작 경험",
    title: "강아지를 위한 벽난로와 빗소리 영상 제작기",
    shortTitle: "강아지를 위한 벽난로와 빗소리 영상 제작기",
    description: "따뜻한 불빛과 창밖의 비, 과하지 않은 동물의 행동, 영상보다 앞서지 않는 음악으로 강아지와 아기 고양이의 조용한 휴식 장면을 구성한 제작 기록입니다.",
    hero: poster,
    heroAlt: "비 내리는 창가와 벽난로 옆에서 강아지와 아기 고양이가 함께 잠든 모습",
    heroFit: "cover",
    readTime: "약 7분",
    verdict: "동물의 움직임을 과장하지 않고, 비는 창밖에 머물게 하며, 불빛으로 실내의 온기를 묶고, 음악이 장면보다 앞서지 않도록 한 가지 평온한 방향을 유지한 것이 이 영상의 핵심입니다.",
    tags: ["Relax Moments", "편안한 음악", "반려동물", "비", "벽난로"],
    keywords: ["강아지를 위한 편안한 음악", "강아지 고양이 벽난로 빗소리", "반려동물 휴식 영상", "FourFeetz Relax Moments"],
    tools: [],
    characters: [],
    popularity: 120,
    featuredVideo: {
      name: "강아지를 위한 편안한 음악 — 빗소리와 벽난로 옆에서 잠든 강아지와 아기 고양이",
      description: "창밖에는 잔잔한 비가 내리고 따뜻한 벽난로 옆에서는 강아지와 아기 고양이가 편안하게 잠든 휴식 영상입니다.",
      thumbnailUrl: poster,
      contentUrl: video,
      duration: "PT50.016S",
      uploadDate,
    },
    sections: [
      {
        id: "scene-intention",
        title: "비 오는 날의 고요함에서 시작한 장면",
        paragraphs: [
          "이번 장면의 출발점은 비 오는 날을 쓸쓸하게 만들기보다 안전하고 포근한 시간으로 보여주는 것이었습니다. 창문은 차갑고 젖은 바깥 풍경을 담고, 벽난로는 실내의 따뜻한 중심을 만듭니다. 그 사이에 강아지와 아기 고양이를 두어 대비가 사건이 아니라 익숙한 쉼터처럼 느껴지게 했습니다.",
          "첨부된 첫 장면 이미지는 두 동물이 함께 잠들기 전 공간의 방향을 보여줍니다. 어린 강아지와 벽난로, 빗물이 맺힌 창이 넓은 화면 안에서 관계를 만들고, 완성 포스터에서는 강아지와 아기 고양이가 나란히 잠들며 처음의 기획이 조용히 마무리됩니다.",
        ],
        images: [{
          src: firstShot,
          alt: "비 내리는 창가와 따뜻한 벽난로 사이 크림색 러그 위에 앉은 어린 골든리트리버",
          caption: "첨부된 첫 장면 이미지는 16:9 화면 안에 벽난로, 비 내리는 창, 포근한 러그와 어린 강아지를 배치합니다.",
          aspect: "video",
          fit: "cover",
        }],
      },
      {
        id: "restrained-behavior",
        title: "동물의 행동을 과하게 구성하지 않은 이유",
        paragraphs: [
          "편안한 장면에서 동물이 여러 행동으로 안락함을 설명하려 하면 오히려 휴식의 목적이 흐려질 수 있습니다. 이번 장면은 편안히 낮춘 몸, 감긴 눈과 두 동물 사이의 가까운 거리만으로 안정감을 전달합니다. 함께 잠든 자세가 이미 신뢰와 온기를 보여주기 때문에 큰 상호작용을 더할 필요가 없었습니다.",
          "행동을 절제하면 창의 빗물과 벽난로처럼 환경의 작은 움직임도 자연스럽게 보입니다. 주변은 계속 살아 있지만 실내가 분주해지지 않습니다. 다음 동작을 기다리게 만들기보다 잠든 자세를 충분히 유지해 보는 사람과 곁에서 쉬는 반려동물도 장면의 느린 속도에 머물 수 있도록 했습니다.",
        ],
      },
      {
        id: "visual-balance",
        title: "따뜻한 불빛과 창밖의 비를 조화시킨 방향",
        paragraphs: [
          "화면은 서로 다른 온도를 나누되 충돌시키지 않는 방향으로 구성했습니다. 벽난로가 있는 쪽은 어둡고 따뜻하며, 창문은 밝고 차분한 바깥빛과 빗물을 보여줍니다. 크림색 러그와 골든 톤의 털은 두 공간 사이에서 불빛을 부드럽게 받아, 동물들이 지나치게 밝은 무대 위에 놓인 것처럼 보이지 않게 합니다.",
          "실제 영상은 1920×1080의 16:9 가로 화면입니다. 동물만 크게 자르기보다 비와 불, 잠든 두 동물이 함께 머물 수 있도록 주변 공간을 남겼습니다. 포스터와 영상도 같은 비율을 사용해 어느 한쪽의 분위기가 잘리는 잘못된 크롭을 피했습니다.",
        ],
        videos: [{
          src: video,
          poster,
          title: "비 내리는 창가와 벽난로 옆에서 잠든 강아지와 아기 고양이",
          caption: "50.016초 길이의 16:9 FourFeetz Relax Moments 완성 영상입니다. 재생은 방문자가 직접 시작합니다.",
        }],
      },
      {
        id: "music-direction",
        title: "음악이 영상보다 튀지 않도록 유지한 점",
        paragraphs: [
          "이런 영상에서는 음악도 실내의 온도처럼 느껴지는 편이 좋습니다. 잠든 자세를 깨우는 큰 절정이나 갑작스러운 전환, 시선을 빼앗는 리듬을 앞세우지 않고, 빗소리와 벽난로의 분위기 곁에 놓일 수 있는 고르고 부드러운 흐름을 유지했습니다.",
          "아래에는 Music 페이지에 등록한 5분 11.904초 MP3 원곡을 별도 플레이어로 연결했습니다. 방문자가 직접 선택해야 재생되며, 페이지에 들어왔다는 이유만으로 음악 전체가 즉시 내려받아지거나 자동으로 시작되지 않습니다.",
        ],
        audio: {
          src: audio,
          title: "강아지를 위한 편안한 벽난로와 빗소리",
          description: "완성 영상의 분위기와 연결되는 편안한 원곡을 별도로 감상할 수 있습니다.",
        },
      },
      {
        id: "resting-use",
        title: "반려동물과 보호자의 조용한 휴식에 어울리는 콘텐츠",
        paragraphs: [
          "완성 영상은 강아지나 다른 반려동물이 잠들기 전 쉬는 시간에 어울리지만, 동물만을 위한 배경에 머물지는 않습니다. 느린 화면과 앞서지 않는 음악은 보호자가 책을 읽거나 잠시 눈을 쉬고, 바쁜 흐름 사이에서 조용한 휴식을 가질 때도 자연스럽게 곁에 둘 수 있습니다.",
          "그래서 동물은 감정의 중심에 남기고 실내는 배경으로 기능할 만큼만 분위기를 유지했습니다. 영상으로 직접 보거나 Music 페이지에서 곡만 듣고, 하루의 활동적인 순간 사이에서 짧은 시각적 휴식으로 활용할 수 있습니다.",
        ],
      },
      {
        id: "relax-moments",
        title: "FourFeetz Relax Moments로 이어지는 마무리",
        paragraphs: [
          "이번 에피소드는 새로운 날씨와 강아지·아기 고양이의 함께 잠든 장면으로 FourFeetz Relax Moments의 방향을 이어갑니다. 배경과 동물의 행동, 소리가 같은 속도에 동의할 때 작은 일상의 순간을 불필요하게 큰 이야기로 만들지 않고 오래 바라볼 수 있습니다.",
          "비는 유리창 너머에 머물고, 불빛은 실내의 온기를 지키며, 잠든 두 동물은 화면의 감정적인 중심이 됩니다. 이 조합은 반려동물과 사람 모두가 잠시 쉬어갈 수 있는 장면을 만든다는 FourFeetz Relax Moments의 약속으로 이번 영상을 마무리합니다.",
        ],
      },
    ],
    faqs: [
      { question: "영상과 음악이 자동으로 재생되나요?", answer: "아닙니다. 두 플레이어 모두 방문자가 직접 재생해야 하며, preload 설정으로 첫 로딩 때 미디어 전체를 받지 않도록 했습니다." },
      { question: "이 영상은 쇼츠인가요?", answer: "아닙니다. 원본이 1920×1080, 16:9 가로 영상이므로 세로형 쇼츠가 아니라 롱폼으로 분류했습니다." },
      { question: "어떤 제작 도구를 사용했나요?", answer: "첨부 파일만으로 제작 도구를 확인할 수 없어 이 글에서는 확인되지 않은 도구나 제작 과정을 임의로 적지 않았습니다." },
    ],
    related: [
      { label: "완성 영상", title: "Videos에서 롱폼 보기", href: "/ko/videos?type=long-form" },
      { label: "음악 듣기", title: "강아지를 위한 편안한 벽난로와 빗소리", href: "/ko/music/calming-fireplace-rain-for-dogs" },
      { label: "더 많은 음악", title: "FourFeetz Music 둘러보기", href: "/ko/music" },
      { label: "Relax Moments", title: "HARU — Snowy Hearth Nap", href: "/ko/films/haru-snowy-hearth-nap" },
    ],
  },
};
