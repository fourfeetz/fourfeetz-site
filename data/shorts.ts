export type ShortProductionNote = {
  label: string;
  value: string;
};

export type ShortType = "episode" | "vertical-cut" | "trailer";

export type Short = {
  id: string;
  slug: string;
  type: ShortType;
  episode?: string;
  title: string;
  description: string;
  category: string;
  badge?: string;
  duration: string;
  tools: string[];
  characters?: string[];
  aspectRatio?: string;
  spokenLanguage?: string;
  koreanSpokenLanguage?: string;
  moods?: string[];
  koreanMoods?: string[];
  productionNotes: ShortProductionNote[];
  koreanProductionNotes?: ShortProductionNote[];
  video: string;
  poster?: string;
  endFrame?: string;
  gallery?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  originalFilmHref?: string;
  characterHref?: string;
  characterLinks?: {
    name: string;
    href: string;
  }[];
  music?: {
    title: string;
    href: string;
  };
  insight?: {
    title: string;
    href: string;
  };
  affiliate?: {
    provider: string;
    href: string;
    code: string;
    offer: string;
  };
  publishedAt?: string;
  updatedAt?: string;
  featured?: boolean;
  publishStatus?: "published" | "draft";
};

export const shorts: Short[] = [
  {
    id: "short-012",
    slug: "haru-luna-teddy-bear-chase",
    type: "episode",
    title: "HARU & LUNA: The Teddy Bear Chase",
    description: "HARU steals LUNA's teddy bear and races into the backyard. LUNA gives chase, leaps in for a slow-motion recovery, and escapes with the toy—leaving HARU to become the pursuer.",
    category: "HARU & LUNA Shorts",
    duration: "28.5 sec",
    tools: ["Protoface Studio", "Seedance 2.0", "CapCut"],
    characters: ["HARU", "LUNA"],
    aspectRatio: "9:16",
    moods: ["Animal Comedy", "Cinematic Chase", "Slow Motion"],
    koreanMoods: ["동물 코미디", "시네마틱 추격", "슬로모션"],
    productionNotes: [
      { label: "First Frame", value: "The chase scenes were generated in Protoface Studio with Seedance 2.0 from a First Frame image, then reviewed for motion and character interaction." },
      { label: "Motion Test", value: "The production tested a fast backyard chase, direction changes, two-animal interaction, LUNA's leap, the teddy-bear recovery, slow motion, and cinematic camera angles." },
      { label: "Prompt Finding", value: "Visual roles such as ‘golden retriever puppy’ and ‘tabby cat’ expressed the chase relationship more clearly than character names alone. Goal-led actions such as ‘puppy runs away / cat chases after the puppy’ were more effective than stacking many motion restrictions." },
      { label: "Generation & Edit", value: "The test used 480p generation; each 15-second generation used 135 credits. FourFeetz selected the strongest results from multiple generations and completed the 28.5-second vertical short in CapCut." },
    ],
    koreanProductionNotes: [
      { label: "First Frame", value: "First Frame 이미지를 기준으로 Protoface Studio의 Seedance 2.0에서 추격 장면을 생성하고, 움직임과 두 동물의 상호작용을 확인했습니다." },
      { label: "동작 테스트", value: "마당을 가로지르는 빠른 추격, 방향 전환, 두 동물의 상호작용, LUNA의 도약과 곰인형 탈환, 슬로모션 및 영화적인 카메라 앵글을 테스트했습니다." },
      { label: "프롬프트에서 확인한 점", value: "캐릭터 이름만 쓰는 것보다 ‘golden retriever puppy’, ‘tabby cat’처럼 시각적 역할을 지정했을 때 추격 관계가 더 분명했습니다. 동작 제한을 많이 쌓기보다 ‘puppy runs away / cat chases after the puppy’처럼 행동 목적을 설명하는 방식이 효과적이었습니다." },
      { label: "생성과 편집", value: "480p로 테스트했으며 15초 생성 1회에 135 credits가 사용됐습니다. 여러 생성 결과에서 좋은 장면을 선택하고 CapCut에서 28.5초 세로형 쇼츠로 완성했습니다." },
    ],
    video: "/videos/shorts/haru-luna/haru-luna-teddy-bear-chase.mp4",
    poster: "/images/shorts/haru-luna/haru-luna-teddy-bear-chase-poster.webp",
    characterLinks: [
      { name: "HARU", href: "/characters/haru" },
      { name: "LUNA", href: "/characters/luna" },
    ],
    insight: { title: "Read the Protoface Production Experience", href: "/insights/protoface-real-production-experience" },
    affiliate: {
      provider: "Protoface Studio",
      href: "https://protoface.com/studio?fpr=fourfeetz",
      code: "FOURFEETZ",
      offer: "$10 in FREE EXTRA CREDITS with Studio Unlimited",
    },
    publishedAt: "2026-09-11",
    updatedAt: "2026-09-11",
    featured: true,
    publishStatus: "published",
  },
  {
    id: "short-011",
    slug: "puppy-cat-playtime-chaos",
    type: "episode",
    title: "The Puppy Wants to Play… But the Cat Says No!",
    description: "A playful golden retriever puppy keeps trying to win over a very unimpressed cat, turning a quiet living room into a lighthearted comedy short.",
    category: "Animal Comedy Shorts",
    duration: "20 sec",
    tools: ["Google Flow", "CapCut"],
    aspectRatio: "9:16",
    spokenLanguage: "English",
    koreanSpokenLanguage: "영어",
    moods: ["Funny", "Playful", "Dog & Cat"],
    koreanMoods: ["코믹", "장난스러움", "강아지와 고양이"],
    productionNotes: [
      { label: "Story", value: "An eager puppy repeatedly tries to start a game while the cat answers with calm, unmistakable disapproval." },
      { label: "Format", value: "A 20-second vertical comedy short presented in its original 1080 × 1920, 9:16 composition." },
      { label: "Language", value: "The finished version includes English dialogue and on-screen English captions for international short-form audiences." },
      { label: "Production", value: "Created as a compact dog-and-cat character comedy and finished for mobile viewing by FourFeetz Studio." },
    ],
    video: "/videos/shorts/dog-and-cat/dog-and-cat-0907-eng.mp4",
    poster: "/images/shorts/dog-and-cat/dog-and-cat-0907-eng-poster.jpg",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    featured: true,
    publishStatus: "published",
  },
  {
    id: "short-010",
    slug: "oli-peaceful-swim",
    type: "episode",
    title: "OLI’s Peaceful Swim",
    description: "OLI the little otter enjoys a calm swim, gently floating through the water in this relaxing FourFeetz short.",
    category: "OLI Shorts",
    duration: "29.351 sec",
    tools: [],
    characters: ["OLI"],
    aspectRatio: "9:16",
    moods: ["Calm", "Relaxing", "Otter Story"],
    koreanMoods: ["평온함", "편안함", "수달 이야기"],
    productionNotes: [
      { label: "Format", value: "A 29.351-second vertical short presented in its original 1080 × 1920, 9:16 composition." },
      { label: "Character", value: "OLI, the official FourFeetz otter character, is the central character in the finished short." },
      { label: "Audio", value: "The finished MP4 includes its audio track, so no separate audio playback is added to the video page." },
    ],
    video: "/videos/shorts/oli/oli-peaceful-swim.mp4",
    poster: "/images/shorts/oli/oli-peaceful-swim-poster.png",
    characterHref: "/characters/oli",
    insight: { title: "Read the Production Record", href: "/insights/oli-swimming-scene-lessons" },
    publishedAt: "2026-08-09",
    updatedAt: "2026-08-09",
    featured: true,
    publishStatus: "published",
  },
  {
    id: "short-009",
    slug: "cozy-retriever-kitten-sleep-short",
    type: "episode",
    title: "A Golden Retriever Fell Asleep… Then a Tiny Kitten Joined Him",
    description: "A sleepy young retriever slowly dozes off in the warm afternoon sunlight. Then a tiny ginger tabby kitten walks over, curls up beside him, and turns a quiet nap into the sweetest moment.",
    category: "Animal Story Shorts",
    duration: "32 sec",
    tools: ["Google Flow", "Veo"],
    aspectRatio: "9:16",
    spokenLanguage: "No dialogue",
    koreanSpokenLanguage: "대사 없음",
    moods: ["Cozy", "Relaxing", "Animal Story"],
    koreanMoods: ["포근함", "편안함", "동물 이야기"],
    productionNotes: [
      { label: "Format", value: "A 32.323-second vertical short presented in its original 9:16 composition." },
      { label: "Language", value: "No dialogue." },
      { label: "Mood", value: "Cozy, relaxing animal storytelling in warm afternoon light." },
      { label: "Music", value: "Sunbeam Paws Lullaby, a gentle instrumental track created for the finished short." },
    ],
    video: "/videos/shorts/cozy-retriever-kitten/cozy-retriever-kitten-sleep-short.mp4",
    poster: "/images/shorts/cozy-retriever-kitten/cozy-retriever-kitten-poster.png",
    insight: { title: "Read the Production Story", href: "/insights/cozy-retriever-kitten-sleep-short" },
    publishedAt: "2026-08-09",
    updatedAt: "2026-08-09",
    featured: true,
    publishStatus: "published",
  },
  {
    id: "short-008",
    slug: "haru-luna-quiet-rainy-evening",
    type: "episode",
    title: "A Quiet Rainy Evening with HARU & LUNA",
    description: "HARU and LUNA rest beside a rain-streaked window as warm piano, small glances, and a quiet shared pause shape a gentle evening short.",
    category: "HARU & LUNA Shorts",
    duration: "32 sec",
    tools: ["Google Flow", "CapCut"],
    characters: ["HARU", "LUNA"],
    productionNotes: [
      { label: "Format", value: "A 32-second vertical short presented in its original 9:16 composition." },
      { label: "Characters", value: "HARU and LUNA were given different reaction timing so their quiet movements would not feel mechanically synchronized." },
      { label: "Music", value: "Rainy Window with HARU & LUNA, an original warm piano-based piece created for this rainy-window scene." },
      { label: "Production", value: "Produced by FourFeetz Studio and finished as a responsive H.264/AAC web release." },
    ],
    video: "/videos/shorts/haru-luna/haru-luna-rainy-evening-vertical-v2.mp4",
    poster: "/images/shorts/haru-luna/haru-luna-rainy-evening-vertical-v2-poster.webp",
    characterLinks: [
      { name: "HARU", href: "/characters/haru" },
      { name: "LUNA", href: "/characters/luna" },
    ],
    music: { title: "Rainy Window with HARU & LUNA", href: "/music/rainy-window-with-haru-luna" },
    insight: { title: "Read the Production Story", href: "/insights/haru-luna-rainy-window-ai-pet-video" },
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-06",
    featured: true,
    publishStatus: "published",
  },
  {
    id: "short-007",
    slug: "ruru-tries-to-be-scary",
    type: "episode",
    episode: "EP.01",
    title: "RURU Tries to Be Scary… But He’s Too Cute!",
    description: "RURU peeks around a forest tree and tries his very best to look scary, but this shy red panda is simply too cute.",
    category: "RURU Shorts",
    duration: "25 sec",
    tools: [],
    characters: ["RURU"],
    productionNotes: [
      { label: "Story", value: "RURU gathers his courage behind a tree and practices a scary entrance, only for his curious and gentle personality to shine through." },
      { label: "Character", value: "The short preserves RURU's compact red panda proportions, russet fur, brown collar, and gold RURU name tag." },
      { label: "Format", value: "A 25-second vertical character film composed for a 9:16 canvas." },
      { label: "Music", value: "RURU Theme, the official FourFeetz character theme inspired by RURU's curious and shy personality." },
    ],
    video: "/videos/shorts/ruru/ruru-tries-to-be-scary.mp4",
    poster: "/images/shorts/ruru/ruru-tries-to-be-scary-cover.png",
    characterHref: "/characters/ruru",
    music: { title: "RURU Theme", href: "/music/ruru-theme" },
    publishedAt: "2026-07-27",
    updatedAt: "2026-07-27",
    featured: true,
    publishStatus: "published",
  },
  {
    id: "short-006",
    slug: "hugo-and-haru-meadow",
    type: "episode",
    episode: "EP.01",
    title: "HUGO Shorts EP.01",
    description: "HUGO grazes in a sunlit meadow while HARU runs nearby, turning a quiet summer afternoon into a gentle story of friendship.",
    category: "HUGO Shorts",
    duration: "36 sec",
    tools: ["Google Flow", "ChatGPT", "Suno", "CapCut"],
    characters: ["HUGO", "HARU"],
    productionNotes: [
      { label: "Story", value: "HUGO explores the meadow at his own calm pace while HARU's playful movement gives the scene warmth and contrast." },
      { label: "Visual Direction", value: "Golden natural light, soft countryside depth, and low character-level framing keep the short intimate and cinematic." },
      { label: "Continuity", value: "The sequence protects HUGO's cream coat, compact calf proportions, collar tag, and HARU's position across extended shots." },
      { label: "Format", value: "A 36-second vertical character film composed for a 9:16 canvas." },
      { label: "Music", value: "Hugo and Haru Meadow, an original FourFeetz soundtrack created for this short." },
    ],
    video: "/videos/shorts/hugo/hugo-and-haru-meadow.mp4",
    poster: "/images/shorts/hugo/hugo-and-haru-meadow-cover-v2.png",
    gallery: [
      {
        src: "/images/shorts/hugo/hugo-and-haru-meadow-frame-01.png",
        alt: "HUGO grazing in a sunlit meadow while HARU runs in the background",
        caption: "HUGO's quiet grazing and HARU's playful movement establish the friendship at the center of the short.",
      },
      {
        src: "/images/shorts/hugo/hugo-and-haru-meadow-frame-02.png",
        alt: "A wide profile of HUGO grazing with HARU crossing the distant meadow",
        caption: "The wider profile keeps both characters readable while opening the landscape around them.",
      },
      {
        src: "/images/shorts/hugo/hugo-and-haru-meadow-frame-03.png",
        alt: "HUGO in a green meadow with HARU approaching from behind",
        caption: "A low camera height preserves HUGO's gentle scale and brings HARU into the same visual world.",
      },
    ],
    characterLinks: [
      { name: "HUGO", href: "/characters/hugo" },
      { name: "HARU", href: "/characters/haru" },
    ],
    music: { title: "Hugo and Haru Meadow", href: "/music/hugo-and-haru-meadow" },
    publishedAt: "2026-07-25",
    updatedAt: "2026-07-25",
    featured: true,
    publishStatus: "published",
  },
  {
    id: "short-005",
    slug: "luna-shorts-ep01",
    type: "episode",
    episode: "EP.01",
    title: "LUNA Shorts EP.01",
    description: "LUNA quietly watches the world outside while HARU sleeps nearby. Then curiosity calls, and she slips out of frame.",
    category: "LUNA Shorts",
    duration: "30 sec",
    tools: [],
    characters: ["LUNA", "HARU"],
    productionNotes: [
      { label: "Moment", value: "LUNA watches the world beyond the window while HARU sleeps peacefully nearby." },
      { label: "Story Beat", value: "A quiet observation becomes a small act of curiosity as LUNA slips out of frame." },
      { label: "Format", value: "A 30-second vertical short film composed in a 9:16 format." },
      { label: "Music", value: "Window Cat Paws, an original FourFeetz soundtrack created for this LUNA short." },
    ],
    video: "/videos/shorts/luna/luna-shorts-ep01.mp4",
    poster: "/images/shorts/luna/luna-shorts-ep01-cover.png",
    endFrame: "/images/shorts/luna/luna-shorts-ep01-end-frame.png",
    characterHref: "/characters/luna",
    music: { title: "Window Cat Paws", href: "/music/window-cat-paws" },
    publishedAt: "2026-07-22",
    featured: true,
    publishStatus: "published",
  },
  {
    id: "short-001",
    slug: "morning-with-haru",
    type: "episode",
    episode: "EP.01",
    title: "Morning with HARU",
    description: "A peaceful morning moment with HARU in cinematic style.",
    category: "HARU Shorts",
    duration: "15 sec",
    tools: ["Google Flow", "Runway", "Kling AI", "ChatGPT", "Suno"],
    characters: ["HARU"],
    productionNotes: [
      { label: "Moment", value: "A quiet morning scene centered on HARU's calm expression and gentle movement." },
      { label: "Visual Direction", value: "Warm natural light, soft pacing, and a cinematic vertical composition." },
      { label: "Format", value: "A 15-second short-form character film designed for vertical platforms." },
    ],
    video: "/videos/shorts/haru/short-001.mp4",
    poster: "/images/shorts/haru/short-001.jpg",
    publishedAt: "2026-07-15",
    publishStatus: "published",
  },
  {
    id: "short-002",
    slug: "watching-the-sunset",
    type: "episode",
    episode: "EP.02",
    title: "Watching the Sunset",
    description: "HARU quietly watches the beautiful countryside at sunset.",
    category: "HARU Shorts",
    duration: "24 sec",
    tools: ["Google Flow", "Runway", "Kling AI", "ChatGPT", "Suno"],
    characters: ["HARU"],
    productionNotes: [
      { label: "Moment", value: "HARU pauses to watch the countryside as the daylight fades." },
      { label: "Visual Direction", value: "Golden-hour color, restrained motion, and a peaceful cinematic atmosphere." },
      { label: "Format", value: "A 24-second short-form character film designed for vertical platforms." },
    ],
    video: "/videos/shorts/haru/short-002.mp4",
    poster: "/images/shorts/haru/short-002-v2.jpg",
    publishedAt: "2026-07-15",
    publishStatus: "published",
  },
  {
    id: "short-003",
    slug: "haru-ep03-best-friends",
    type: "episode",
    episode: "EP.03",
    title: "HARU & PORI — A Golden Evening Together",
    description: "HARU and PORI meet in a flower-filled garden, run and play together in the golden evening light, then rest side by side.",
    category: "HARU Shorts",
    duration: "18 sec",
    tools: ["Google Flow", "Kling AI", "ChatGPT"],
    characters: ["HARU", "PORI"],
    productionNotes: [
      { label: "Story", value: "HARU and PORI meet among the flowers, share a playful run through the garden, and settle down together as the evening grows calm." },
      { label: "Characters", value: "HARU and PORI carry the story through warm, gentle interaction and a quiet final moment side by side." },
      { label: "Format", value: "AI Animated Short" },
      { label: "Aspect Ratio", value: "9:16 vertical" },
    ],
    video: "/videos/shorts/haru/short-003.mp4",
    poster: "/images/shorts/haru/short-003-cover.png",
    gallery: [
      {
        src: "/images/shorts/haru/short-003-together.png",
        alt: "HARU and PORI lying side by side in a flower-filled garden at golden hour",
        caption: "A quiet pause together after playing in the garden.",
      },
      {
        src: "/images/shorts/haru/short-003-wide.png",
        alt: "Wide vertical view of HARU and PORI together in a warm flower garden",
        caption: "The wider garden composition establishes the warm evening setting.",
      },
    ],
    characterLinks: [
      { name: "HARU", href: "/characters/haru" },
      { name: "PORI", href: "/characters/pori" },
    ],
    insight: { title: "Read the Two-Character Production Record", href: "/insights/haru-pori-two-character-scene" },
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-22",
    featured: true,
    publishStatus: "published",
  },
  {
    id: "short-004",
    slug: "haru-first-journey-vertical-cut",
    type: "vertical-cut",
    title: "HARU First Journey — Vertical Cut",
    description: "A vertical edit of HARU’s main theme film, created for short-form viewing on YouTube Shorts, Instagram Reels, and TikTok.",
    category: "Vertical Cut",
    badge: "OFFICIAL VERTICAL CUT",
    duration: "58 sec",
    tools: ["Google Flow", "Runway", "Kling AI", "CapCut", "ChatGPT"],
    characters: ["HARU"],
    productionNotes: [
      { label: "Source Film", value: "The official vertical edit of HARU — First Journey, preserving the story and cinematic tone of the original film." },
      { label: "Vertical Reframing", value: "Key shots were reframed for a 9:16 canvas while keeping HARU and the important story details inside the mobile safe area." },
      { label: "Editorial", value: "The pacing and transitions were refined in CapCut for short-form viewing without presenting the edit as a new episode." },
      { label: "Distribution", value: "Prepared for YouTube Shorts, Instagram Reels, and TikTok." },
    ],
    video: "/videos/shorts/haru/short-004.mp4",
    originalFilmHref: "/works/haru-first-journey",
    publishedAt: "2026-07-17",
    publishStatus: "published",
  },
];

export function getShort(slug: string) {
  return shorts.find((short) => short.slug === slug);
}
