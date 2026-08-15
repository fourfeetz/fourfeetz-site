export const koreanFilmDescriptions: Record<string, string> = {
  "calming-dog-music-puppy-kitten-fireplace-rain": "창밖에는 잔잔한 비가 내리고, 따뜻한 벽난로 옆에서는 강아지와 아기 고양이가 편안하게 잠들어 있습니다. 부드러운 음악과 빗소리, 따뜻한 불빛이 반려동물과 보호자 모두에게 평온한 휴식의 순간을 전합니다.",
  "haru-snowy-hearth-nap": "눈 내리는 창가와 따뜻한 벽난로 곁에서 HARU가 곰 인형과 함께 잠드는 조용한 겨울 힐링 영상입니다.",
  "haru-first-journey": "새로운 집을 향해 첫 여행을 시작한 구조견 HARU의 호기심과 용기를 담은 따뜻한 시네마틱 이야기입니다.",
  "haru-relaxing-home": "포근한 거실에서 편안히 쉬는 HARU의 자연스러운 호흡과 따뜻한 빛을 담은 힐링 영상입니다.",
};

export const koreanShortDescriptions: Record<string, string> = {
  "oli-peaceful-swim": "아기 수달 OLI가 물 위를 부드럽게 떠다니며 여유로운 수영을 즐깁니다. 편안하게 감상할 수 있는 FourFeetz 쇼츠입니다.",
  "cozy-retriever-kitten-sleep-short": "따뜻한 오후 햇살 속에서 어린 리트리버가 천천히 잠듭니다. 잠시 후 아기 치즈태비 고양이가 다가와 앞다리에 기대어 누우며 포근한 낮잠을 함께합니다.",
  "haru-luna-quiet-rainy-evening": "비 오는 창가에서 HARU와 LUNA가 작은 눈빛과 느린 움직임을 나누며 조용히 쉬는 따뜻한 저녁 쇼츠입니다.",
  "ruru-tries-to-be-scary": "숲속 나무 뒤에서 무서운 표정을 연습하지만 귀여움을 숨길 수 없는 레서판다 RURU의 이야기입니다.",
  "hugo-and-haru-meadow": "햇살 가득한 초원에서 여유롭게 풀을 뜯는 HUGO와 뛰노는 HARU의 따뜻한 우정을 담았습니다.",
  "luna-shorts-ep01": "잠든 HARU 곁에서 창밖을 바라보던 LUNA가 호기심을 따라 조용히 움직이는 순간입니다.",
  "morning-with-haru": "따뜻한 아침 햇살 속 HARU의 평온한 표정과 작은 움직임을 담은 세로형 쇼츠입니다.",
  "watching-the-sunset": "HARU가 노을빛 시골 풍경을 바라보며 하루를 마무리하는 조용한 순간입니다.",
  "haru-ep03-best-friends": "꽃이 가득한 정원에서 HARU와 PORI가 만나 함께 달리고 쉬어가는 황금빛 저녁 이야기입니다.",
  "haru-first-journey-vertical-cut": "HARU의 첫 여행을 모바일 화면에 맞게 재구성한 공식 9:16 세로형 편집본입니다.",
};

type KoreanCharacterLink = {
  label: string;
  title: string;
  description: string;
  href: string;
};

export const koreanShortTitles: Record<string, string> = {
  "oli-peaceful-swim": "올리의 평화로운 수영 시간",
  "cozy-retriever-kitten-sleep-short": "리트리버가 잠들자 아기 고양이가 다가왔어요",
  "haru-luna-quiet-rainy-evening": "비 오는 창가, 하루와 루나의 조용한 저녁",
};

type KoreanCharacterContent = {
  displayName?: string;
  species: string;
  tagline: string;
  story: string;
  listing: string;
  role: string;
  appearance: string;
  imageAlt: string;
  metaDescription: string;
  personality: string[];
  relatedContent: KoreanCharacterLink[];
  relatedCharacters: string[];
};

export const koreanCharacters: Record<string, KoreanCharacterContent> = {
  haru: {
    species: "진돗개",
    tagline: "다정하고 호기심 많으며 용감합니다.",
    story: "HARU는 낯선 길 끝에서 새로운 가족과 집을 찾아가는 구조견입니다. 작은 만남과 조용한 모험을 통해 따뜻한 기억을 만들어갑니다.",
    listing: "FourFeetz의 첫 오리지널 캐릭터입니다. 새로운 집을 찾아가는 여정과 일상의 조용한 순간을 이끌어갑니다.",
    role: "FourFeetz 캐릭터 세계의 감정적 중심이자 첫 필름인 HARU — First Journey의 주인공입니다.",
    appearance: "크림빛 흰 털, 따뜻한 갈색 눈, 곧게 선 귀와 작은 갈색 스카프가 HARU의 부드럽고 또렷한 인상을 만듭니다.",
    imageAlt: "크림빛 흰 털과 갈색 스카프를 한 진돗개 HARU의 공식 캐릭터 초상",
    metaDescription: "FourFeetz의 첫 오리지널 캐릭터 HARU를 소개합니다. 진돗개 HARU의 특징과 First Journey, 쇼츠, 공식 테마 음악을 확인해 보세요.",
    personality: ["다정함", "호기심", "용기", "충직함", "친근함"],
    relatedContent: [
      { label: "필름", title: "HARU — First Journey", description: "HARU가 새로운 집을 향해 첫 여행을 시작하는 대표 시네마틱 필름입니다.", href: "/ko/films/haru-first-journey" },
      { label: "쇼츠", title: "Morning with HARU", description: "아침 햇살 속 HARU의 평온한 표정과 움직임을 담은 세로형 영상입니다.", href: "/ko/shorts/morning-with-haru" },
      { label: "음악", title: "HARU Main Theme", description: "HARU의 따뜻함과 조용한 모험심을 표현한 공식 메인 테마입니다.", href: "/ko/music/haru-main-theme" },
    ],
    relatedCharacters: ["pori", "hugo"],
  },
  pori: {
    species: "푸들",
    tagline: "밝고 장난기 많으며 에너지가 넘칩니다.",
    story: "PORI는 평범한 오후도 즐거운 놀이로 바꾸는 활기찬 친구입니다. 풍부한 표현과 빠른 움직임으로 FourFeetz 세계에 밝은 리듬을 더합니다.",
    listing: "풍부한 표정과 빠른 움직임으로 분위기를 바꾸는 푸들입니다. HARU와 함께한 황금빛 정원 쇼츠에서 활기찬 우정을 보여줍니다.",
    role: "조용한 친구들도 자연스럽게 모험에 참여하도록 이끄는 활기찬 촉매 역할을 합니다.",
    appearance: "따뜻한 살구빛 곱슬 털, 밝은 눈, 아담한 체형과 초록색 목수건이 PORI의 경쾌한 실루엣을 완성합니다.",
    imageAlt: "살구빛 곱슬 털과 초록색 목수건을 한 푸들 PORI의 공식 캐릭터 초상",
    metaDescription: "밝고 활기찬 FourFeetz 캐릭터 PORI를 소개합니다. 푸들 PORI의 외형과 역할, HARU와 함께한 공식 쇼츠를 만나보세요.",
    personality: ["명랑함", "장난기", "표현력", "사교성", "활발함"],
    relatedContent: [
      { label: "쇼츠", title: "HARU & PORI — A Golden Evening Together", description: "꽃이 가득한 정원에서 PORI와 HARU가 함께 달리고 쉬어가는 저녁 이야기입니다.", href: "/ko/shorts/haru-ep03-best-friends" },
      { label: "캐릭터", title: "HARU 만나기", description: "PORI와 함께 쇼츠에 등장한 FourFeetz의 첫 오리지널 캐릭터를 소개합니다.", href: "/ko/characters/haru" },
    ],
    relatedCharacters: ["haru", "luna"],
  },
  luna: {
    species: "고양이",
    tagline: "차분하고 우아하며 조금은 신비롭습니다.",
    story: "LUNA는 행동하기 전에 조용히 관찰합니다. 달빛 비치는 창가와 오래된 지도처럼 다른 이들이 지나친 단서를 발견하는 순간을 좋아합니다.",
    listing: "주변을 먼저 살핀 뒤 조용히 움직이는 관찰자입니다. 창가의 순간을 담은 쇼츠와 음악에서 LUNA 특유의 차분한 분위기를 만날 수 있습니다.",
    role: "분위기와 직관, 조용한 지성을 더하며 다른 캐릭터가 지나친 단서를 발견하는 안내자입니다.",
    appearance: "긴 은회색 털, 밝은 가슴 털, 초록빛 눈과 가느다란 짙은 파란색 리본이 LUNA의 우아한 인상을 만듭니다.",
    imageAlt: "긴 은회색 털과 초록빛 눈, 파란색 리본을 한 고양이 LUNA의 공식 캐릭터 초상",
    metaDescription: "차분한 FourFeetz 캐릭터 LUNA를 소개합니다. 은회색 고양이 LUNA의 특징과 공식 쇼츠, 오리지널 음악을 확인해 보세요.",
    personality: ["차분함", "우아함", "관찰력", "독립성", "신비로움"],
    relatedContent: [
      { label: "쇼츠", title: "LUNA Shorts EP.01", description: "잠든 HARU 곁에서 창밖을 바라보던 LUNA가 호기심을 따라 움직이는 순간입니다.", href: "/ko/shorts/luna-shorts-ep01" },
      { label: "음악", title: "Window Cat Paws", description: "창가에서 세상을 관찰하는 LUNA의 차분한 호기심을 따라가는 사운드트랙입니다.", href: "/ko/music/window-cat-paws" },
    ],
    relatedCharacters: ["haru", "ruru"],
  },
  hugo: {
    species: "하이랜드 소",
    tagline: "온화하고 따뜻하며 언제나 여유롭습니다.",
    story: "HUGO는 넓은 초원 가장자리에서 친구들이 잠시 쉬어갈 수 있도록 기다립니다. 느긋한 유머와 든든한 마음을 가진 친구입니다.",
    listing: "넓은 초원의 느린 호흡을 닮은 든든한 친구입니다. HARU와 함께한 영상과 음악에서 여유롭고 따뜻한 분위기를 전합니다.",
    role: "시골을 배경으로 한 이야기에서 친구들이 속도를 늦추고 쉬어갈 수 있도록 돕는 믿음직한 안내자입니다.",
    appearance: "긴 구릿빛 털, 이마를 덮는 부드러운 앞머리, 넓은 뿔과 이끼색 표식이 HUGO의 안정적인 실루엣을 만듭니다.",
    imageAlt: "긴 구릿빛 털과 넓은 뿔을 가진 하이랜드 소 HUGO의 공식 캐릭터 초상",
    metaDescription: "온화한 FourFeetz 캐릭터 HUGO를 소개합니다. 하이랜드 소 HUGO의 특징과 HARU와 함께한 초원 쇼츠와 음악을 만나보세요.",
    personality: ["따뜻함", "인내심", "여유", "신뢰감", "친절함"],
    relatedContent: [
      { label: "쇼츠", title: "HUGO Shorts EP.01", description: "햇살 가득한 초원에서 HUGO와 HARU가 함께 보내는 따뜻한 시간을 담았습니다.", href: "/ko/shorts/hugo-and-haru-meadow" },
      { label: "음악", title: "Hugo and Haru Meadow", description: "HUGO의 느긋한 초원 리듬과 HARU의 밝은 에너지를 담은 사운드트랙입니다.", href: "/ko/music/hugo-and-haru-meadow" },
    ],
    relatedCharacters: ["haru", "pori"],
  },
  ruru: {
    species: "레서판다",
    tagline: "호기심 많고 수줍지만 무척 장난스럽습니다.",
    story: "RURU는 새로운 소리가 들릴 때마다 나무 뒤에서 살며시 고개를 내밉니다. 작은 용기와 밝은 호기심으로 숲속의 놀라운 순간을 발견합니다.",
    listing: "낯선 소리를 들으면 나무 뒤에서 조심스럽게 세상을 살핍니다. 숲속 쇼츠와 공식 테마는 RURU의 수줍은 용기와 장난기를 보여줍니다.",
    role: "숲속의 작은 변화를 발견하며 수줍은 순간을 즐거운 탐험으로 바꾸는 호기심 많은 탐험가입니다.",
    appearance: "따뜻한 적갈색 털, 짙은 가슴과 발, 밝은 얼굴 무늬와 줄무늬 꼬리가 특징이며 갈색 목줄과 금색 이름표를 착용합니다.",
    imageAlt: "적갈색 털과 줄무늬 꼬리, 금색 이름표를 한 레서판다 RURU의 공식 캐릭터 초상",
    metaDescription: "호기심 많은 FourFeetz 캐릭터 RURU를 소개합니다. 레서판다 RURU의 외형과 숲속 공식 쇼츠, 캐릭터 테마 음악을 확인해 보세요.",
    personality: ["호기심", "수줍음", "장난기", "다정함", "관찰력"],
    relatedContent: [
      { label: "쇼츠", title: "RURU Tries to Be Scary", description: "무서운 표정을 연습하지만 장난스러운 매력을 숨길 수 없는 RURU의 숲속 이야기입니다.", href: "/ko/shorts/ruru-tries-to-be-scary" },
      { label: "음악", title: "RURU Theme", description: "RURU의 호기심 많고 수줍은 성격에서 영감을 받은 포근한 공식 테마입니다.", href: "/ko/music/ruru-theme" },
    ],
    relatedCharacters: ["luna", "hugo"],
  },
  oli: {
    species: "수달",
    tagline: "호기심 많고 영리하며 모험을 좋아합니다.",
    story: "OLI는 강을 따라가며 굽이마다 만나는 새로운 문제를 해결합니다. 영리한 앞발과 두려움 없는 호기심으로 물길과 해안, 숨겨진 통로를 탐험합니다.",
    listing: "강과 해안을 따라 새로운 길을 찾고 작은 문제를 해결하는 영리한 수달입니다. 지도와 도구를 활용하는 모험가의 성격을 보여줍니다.",
    role: "물과 자연을 배경으로 한 이야기의 문을 여는 창의적인 탐험가입니다.",
    appearance: "짙은 갈색의 방수 털, 크림색 주둥이, 밝고 짙은 눈과 작은 주황색 도구 가방이 OLI의 실용적인 모습을 완성합니다.",
    imageAlt: "짙은 갈색 털과 크림색 주둥이, 주황색 도구 가방을 지닌 수달 OLI의 공식 캐릭터 초상",
    metaDescription: "호기심 많고 영리한 FourFeetz 캐릭터 OLI를 소개합니다. 수달 OLI의 외형과 성격, 물길과 해안을 탐험하는 역할을 확인해 보세요.",
    personality: ["호기심", "영리함", "모험심", "수완", "민첩함"],
    relatedContent: [
      { label: "쇼츠", title: "OLI의 평화로운 수영", description: "OLI가 물 위를 천천히 이동하고 편안히 떠 있는 공개 세로형 쇼츠입니다.", href: "/ko/shorts/oli-peaceful-swim" },
      { label: "실제 제작 기록", title: "OLI 수영 장면에서 배운 것", description: "실제 제작 프레임과 완성 쇼츠를 바탕으로 물 접촉, 팔다리와 움직임을 검수한 기록입니다.", href: "/ko/insights/oli-swimming-scene-lessons" },
    ],
    relatedCharacters: ["haru", "luna"],
  },
  milo: {
    species: "미니피그",
    tagline: "낙천적이고 장난기 많으며 늘 배가 고픕니다.",
    story: "MILO는 모든 여행에는 간식이 필요하고 어떤 실수도 즐거운 계획이 될 수 있다고 믿습니다. 밝은 낙천성으로 친구들에게 힘을 줍니다.",
    listing: "실수도 새로운 계획으로 바꾸는 낙천적인 미니피그입니다. 현재는 캐릭터 프로필을 통해 MILO의 모습과 성격을 먼저 소개합니다.",
    role: "친구들이 힘을 잃지 않도록 밝은 에너지를 더하는 FourFeetz 캐릭터 세계의 유쾌한 동반자입니다.",
    appearance: "부드러운 분홍빛 피부, 둥근 귀, 작게 말린 꼬리와 겨자색 반다나가 MILO의 친근하고 단순한 실루엣을 만듭니다.",
    imageAlt: "흰 털과 갈색 목걸이, 금색 MILO 이름표를 한 미니피그 MILO의 정면 초상",
    metaDescription: "낙천적인 FourFeetz 캐릭터 MILO를 소개합니다. 미니피그 MILO의 외형과 성격, FourFeetz 캐릭터 세계에서의 역할을 확인해 보세요.",
    personality: ["낙천성", "장난기", "너그러움", "유머", "끈기"],
    relatedContent: [
      { label: "캐릭터", title: "FourFeetz 캐릭터 둘러보기", description: "현재 공개된 아홉 캐릭터의 특징과 관련 콘텐츠를 한곳에서 확인할 수 있습니다.", href: "/ko/characters" },
      { label: "영상", title: "공개 롱폼 보기", description: "FourFeetz가 현재 공개한 캐릭터 중심의 시네마틱 필름을 만나보세요.", href: "/ko/videos?type=long-form" },
    ],
    relatedCharacters: ["pori", "haru"],
  },
  feni: {
    displayName: "페니 (FENI)",
    species: "아기 사막여우",
    tagline: "영리하고 호기심이 많지만 조금 겁이 많고 조심스럽습니다.",
    story: "페니는 영리하고 호기심이 많지만 새로운 것을 만날 때는 조심스럽게 다가가는 아기 사막여우입니다. 커다란 귀와 따뜻한 눈빛으로 작고 특별한 모험을 만들어갑니다.",
    listing: "새로운 발견에 호기심을 보이면서도 천천히 살피며 다가가는 아기 사막여우입니다. 커다란 귀와 따뜻한 갈색 눈이 특징입니다.",
    role: "조심스러운 호기심을 중심으로 소개되는 FourFeetz의 새로운 오리지널 캐릭터입니다.",
    appearance: "매우 어린 사막여우의 작은 체형과 커다란 귀, 부드러운 크림색 털, 작고 둥근 얼굴과 크고 따뜻한 갈색 눈이 특징입니다.",
    imageAlt: "커다란 귀와 크림색 털, 따뜻한 갈색 눈을 가진 아기 사막여우 페니",
    metaDescription: "영리하고 호기심 많지만 조심스러운 FourFeetz 캐릭터 페니를 소개합니다. 아기 사막여우 FENI의 성격과 외형을 확인해 보세요.",
    personality: ["영리함", "호기심", "조심스러움"],
    relatedContent: [
      { label: "캐릭터", title: "FourFeetz 캐릭터 둘러보기", description: "페니와 함께 공개된 FourFeetz 오리지널 캐릭터들의 특징을 확인해 보세요.", href: "/ko/characters" },
      { label: "영상", title: "공개 영상 보기", description: "페니 전용 영상은 아직 공개되지 않았습니다. 현재 공개된 FourFeetz 영상을 먼저 만나보세요.", href: "/ko/videos" },
    ],
    relatedCharacters: ["luna", "ruru"],
  },
  hori: {
    displayName: "호리 (HORI)",
    species: "아기 호랑이",
    tagline: "씩씩해 보이지만 실제로는 다정하고 장난기가 많습니다.",
    story: "호리는 씩씩해 보이지만 다정하고 애정이 많은 아기 호랑이입니다. 밝은 에너지와 귀여운 장난기로 가는 곳마다 즐거움을 더합니다.",
    listing: "씩씩한 첫인상 안에 다정하고 장난기 많은 성격을 지닌 아기 호랑이입니다. 부드러운 주황색 털과 자연스러운 검은 줄무늬가 특징입니다.",
    role: "밝은 에너지와 다정한 장난기를 중심으로 소개되는 FourFeetz의 새로운 오리지널 캐릭터입니다.",
    appearance: "매우 어린 호랑이의 작은 체형과 부드러운 주황색 털, 선명하지만 자연스러운 검은 줄무늬, 둥근 얼굴과 작은 귀, 크고 따뜻한 눈이 특징입니다.",
    imageAlt: "부드러운 주황색 털과 자연스러운 검은 줄무늬, 따뜻한 눈을 가진 아기 호랑이 호리",
    metaDescription: "씩씩해 보이지만 다정하고 장난기 많은 FourFeetz 캐릭터 호리를 소개합니다. 아기 호랑이 HORI의 성격과 외형을 확인해 보세요.",
    personality: ["장난기", "다정함", "애정"],
    relatedContent: [
      { label: "캐릭터", title: "FourFeetz 캐릭터 둘러보기", description: "호리와 함께 공개된 FourFeetz 오리지널 캐릭터들의 특징을 확인해 보세요.", href: "/ko/characters" },
      { label: "영상", title: "공개 영상 보기", description: "호리 전용 영상은 아직 공개되지 않았습니다. 현재 공개된 FourFeetz 영상을 먼저 만나보세요.", href: "/ko/videos" },
    ],
    relatedCharacters: ["haru", "pori"],
  },
};

export const koreanMusicDescriptions: Record<string, string> = {
  "calming-fireplace-rain-for-dogs": "강아지와 반려동물의 휴식과 수면을 위해 잔잔한 빗소리와 따뜻한 벽난로의 분위기를 담은 편안한 오리지널 트랙입니다.",
  "rainy-window-with-haru-luna": "비 오는 창가에서 조용히 쉬는 HARU와 LUNA를 위해 제작한 따뜻한 피아노 기반의 오리지널 음악",
  "ruru-theme": "RURU의 호기심 많고 수줍은 성격에서 영감을 받은 장난스럽고 포근한 공식 테마입니다.",
  "hugo-and-haru-meadow": "HUGO의 느긋한 초원 리듬과 HARU의 밝은 에너지를 담은 오리지널 사운드트랙입니다.",
  "snowy-hearth-nap": "벽난로 곁에서 잠든 HARU와 고요한 겨울 풍경을 위해 만든 편안한 힐링 음악입니다.",
  "haru-main-theme": "HARU의 따뜻함, 호기심과 조용한 모험심을 표현한 공식 메인 테마입니다.",
  "window-cat-paws": "창가에서 세상을 관찰하는 LUNA의 차분한 호기심을 따라가는 오리지널 사운드트랙입니다.",
};

export const koreanInsightDescriptions: Record<string, string> = {
  "magiclight-seedance-2-real-production-test": "HARU 실제 제작 과정에서 MagicLight와 Seedance를 테스트하고 확인한 결과를 정리합니다.",
  "how-haru-was-created": "FourFeetz의 첫 오리지널 캐릭터 HARU가 시각적 아이디어에서 반복 가능한 이야기 자산으로 발전한 과정을 소개합니다.",
  "kling-vs-veo": "장면 유형, 움직임, 연속성과 제작 속도를 기준으로 Kling과 Veo를 비교합니다.",
  "runway-gen-4-review": "Runway Gen-4의 이미지 일관성, 움직임 품질, 카메라 제어와 제작 활용도를 살펴봅니다.",
};

export const koreanResourceDescriptions: Record<string, string> = {
  "character-consistency-prompt-pack": "비공개 캐릭터 자산을 공개하지 않고 여러 장면에서 외형, 의상과 비율을 검토하는 공개 기획 프레임워크입니다.",
  "image-to-video-prompt-framework": "피사체 움직임, 카메라, 환경, 조명과 연속성을 지시하는 실용적인 이미지 투 비디오 프레임워크입니다.",
  "ai-short-film-workflow": "스토리 기획과 레퍼런스부터 애니메이션, 사운드, 편집과 배포까지 이어지는 제작 과정입니다.",
  "storyboard-planning-template": "프레이밍, 동작, 카메라, 사운드, 전환과 연속성을 정리하는 스토리보드 템플릿입니다.",
  "character-production-checklist": "캐릭터 정체성, 움직임, 음성, 음악과 최종 결과물을 점검하는 체크리스트입니다.",
  "ai-music-prompt-starter-pack": "장면 기능, 감정의 절제, 곡 구조, 앰비언스 여백과 사용 권리를 검토하는 공개 음악 기획 가이드입니다.",
  "vertical-video-reframing-guide": "16:9 영상을 Shorts, Reels와 TikTok용 9:16 화면으로 안전하게 재구성하는 가이드입니다.",
  "production-notes-template": "장면 목적, 공개 가능한 레퍼런스, 확인한 문제, 검토 결과와 최종 결정을 정리하는 웹 기반 제작 노트 워크시트입니다.",
};

export const koreanResourceTitles: Record<string, string> = {
  "character-consistency-prompt-pack": "캐릭터 일관성 기획 프레임워크",
  "image-to-video-prompt-framework": "이미지 투 비디오 지시 구성 가이드",
  "ai-short-film-workflow": "AI 단편 영상 제작 흐름",
  "storyboard-planning-template": "스토리보드 기획 워크시트",
  "character-production-checklist": "캐릭터 제작 검수 체크리스트",
  "ai-music-prompt-starter-pack": "AI 음악 방향 설정 가이드",
  "vertical-video-reframing-guide": "16:9 영상 세로형 재구성 가이드",
  "production-notes-template": "FourFeetz 제작 노트 워크시트",
};

export function koreanOrFallback(map: Record<string, string>, slug: string, fallback: string) {
  return map[slug] ?? fallback;
}
