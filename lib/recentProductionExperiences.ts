import type { ProductionInsight } from "@/lib/productionInsights";

export const recentProductionExperienceSlugs = [
  "dog-cat-comedy-short-production-notes",
  "pet-hotel-promo-video-production-notes",
  "protoface-real-production-experience",
] as const;

export type RecentProductionExperienceSlug = (typeof recentProductionExperienceSlugs)[number];
type Language = "en" | "ko";
type LocalizedExperience = ProductionInsight & {
  heroAlt: string;
  heroCaption?: string;
  heroFit?: "cover" | "contain";
  heroPosition?: string;
};

const dates = { published: "2026-09-07", updated: "2026-09-07" } as const;

export const recentProductionExperiences: Record<
  RecentProductionExperienceSlug,
  Record<Language, LocalizedExperience>
> = {
  "dog-cat-comedy-short-production-notes": {
    en: {
      ...dates,
      slug: "dog-cat-comedy-short-production-notes",
      eyebrow: "FourFeetz Production Record",
      title: "What We Learned Making a 20-Second Dog-and-Cat Comedy Short",
      shortTitle: "Making a 20-Second Dog-and-Cat Comedy Short",
      description: "A practical production record from FourFeetz’s English dog-and-cat short: reaction timing, simple action, dialogue, captions and the final mobile export.",
      hero: "/images/shorts/dog-and-cat/dog-and-cat-0907-eng-poster.jpg",
      heroAlt: "Golden retriever puppy standing beside a seated tabby cat in the FourFeetz dog-and-cat comedy short",
      heroCaption: "The published opening composition keeps both animals readable in a 9:16 frame before the comic reactions begin.",
      heroPosition: "50% 45%",
      readTime: "7 min read",
      verdict: "The short worked when the joke was carried by contrast: one eager puppy, one unimpressed cat and one clear reaction at a time. Extra action weakened both anatomy and timing.",
      category: "Production Notes",
      tags: ["AI Shorts", "Animal Comedy", "Vertical Video", "Editing"],
      keywords: ["dog cat AI short", "animal comedy video", "9:16 short production", "FourFeetz production notes"],
      tools: ["Google Flow", "CapCut"],
      characters: ["Dog", "Cat"],
      featuredVideo: {
        name: "The Puppy Wants to Play… But the Cat Says No!",
        description: "A 20-second English vertical comedy short about an eager golden retriever puppy and an unimpressed cat.",
        thumbnailUrl: "/images/shorts/dog-and-cat/dog-and-cat-0907-eng-poster.jpg",
        contentUrl: "/videos/shorts/dog-and-cat/dog-and-cat-0907-eng.mp4",
        duration: "PT20S",
        uploadDate: "2026-09-07T07:56:40Z",
      },
      sections: [
        {
          id: "production-goal",
          title: "The Production Goal: Make the Relationship Read Immediately",
          paragraphs: [
            "This short did not need a complicated plot. The entire idea was the difference between the puppy’s enthusiasm and the cat’s refusal. We therefore treated the first frame as a relationship shot: both animals had to be visible, their size difference had to feel believable and the vertical frame needed enough room for a small approach without cropping ears or paws.",
            "The 20-second limit helped. Each beat had one purpose—approach, reaction, another attempt and a final comic answer. That structure was easier to understand on a phone than a sequence with several locations or camera angles.",
          ],
          images: [{ src: "/images/shorts/dog-and-cat/dog-and-cat-0907-eng-poster.jpg", alt: "Puppy and cat sharing a clear vertical two-character composition", caption: "The real published poster shows the two-character scale and reaction space used by the finished short.", presentation: "portrait" }],
        },
        {
          id: "problems",
          title: "What Became Difficult: Two Animals Create More Than Two Variables",
          paragraphs: [
            "When both animals moved at once, attention became scattered and physical errors were harder to diagnose. The puppy’s approach, the cat’s head movement, eye direction, paws, name tag and camera all competed for the same few seconds. A lively take could still feel wrong if the cat reacted before the puppy entered its space.",
            "The useful fix was not a longer prompt. We separated the reactions and protected the planted character. While one animal performed the main action, the other was allowed only restrained breathing, blinking or a small look. This preserved the comic cause-and-effect relationship.",
          ],
          bullets: ["Keep one animal as the primary mover in each beat.", "Check paws, collars and relative body scale through the whole usable range.", "Reject synchronized reactions when the joke needs cause and effect.", "Leave clean frames before and after dialogue for editing."],
        },
        {
          id: "dialogue-captions",
          title: "What Worked: Treat Dialogue and Captions as Timing Tools",
          paragraphs: [
            "The English voice and on-screen captions were added as part of the rhythm, not as decoration. The spoken refusal had to arrive after the visual provocation. Placing the line too early explained the joke before the audience could see it; placing it too late made the reaction feel disconnected.",
            "We reviewed the final export at phone size and kept captions away from faces and platform interface areas. The video was then encoded as a web-ready H.264/AAC file with fast-start metadata so playback could begin without waiting for the entire file.",
          ],
          table: { title: "The final 20-second review", headers: ["Layer", "Question", "Decision"], rows: [["Action", "Is the cause visible before the reaction?", "Reorder or trim the beat"], ["Anatomy", "Do paws, faces and scale remain stable?", "Replace a structurally failed take"], ["Dialogue", "Does the line land on the reaction?", "Move audio before adding effects"], ["Captions", "Are they readable without covering the animals?", "Reposition for mobile safe areas"]] },
        },
        {
          id: "takeaway",
          title: "Practical Takeaway: Comedy Needs Clearer Motion, Not More Motion",
          paragraphs: [
            "For a short animal comedy, clarity is funnier than movement density. Establish who wants what, let one physical action happen and give the second character enough stillness to answer it. The edit should preserve that order instead of trying to rescue a take where every element moves together.",
            "The finished FourFeetz short is embedded below as the evidence for this record. It does not prove a universal workflow or success rate; it shows the choices that survived this specific production and final export.",
          ],
          videos: [{ src: "/videos/shorts/dog-and-cat/dog-and-cat-0907-eng.mp4", poster: "/images/shorts/dog-and-cat/dog-and-cat-0907-eng-poster.jpg", title: "The Puppy Wants to Play… But the Cat Says No!", caption: "The finished 20-second English short used to verify reaction order, dialogue timing, captions and mobile delivery.", presentation: "portrait" }],
        },
      ],
      faqs: [
        { question: "Why not make both animals move continuously?", answer: "Because simultaneous action made anatomy and reaction order harder to read. One primary mover per beat produced clearer comedy and easier review." },
        { question: "Was the final short designed for mobile first?", answer: "Yes. It was composed at 1080 × 1920, reviewed at phone size and exported in a web-ready vertical format." },
      ],
      related: [{ label: "Watch the Short", title: "The Puppy Wants to Play… But the Cat Says No!", href: "/shorts/puppy-cat-playtime-chaos" }, { label: "Related Guide", title: "Create AI Shorts in 9:16 From the Start", href: "/insights/create-ai-shorts-9-16-from-start" }],
    },
    ko: {
      ...dates,
      slug: "dog-cat-comedy-short-production-notes",
      eyebrow: "FourFeetz 실제 제작 기록",
      title: "20초 강아지·고양이 코믹 쇼츠를 만들며 확인한 것",
      shortTitle: "강아지·고양이 코믹 쇼츠 제작 경험",
      description: "FourFeetz 영문 강아지·고양이 쇼츠를 제작하며 확인한 반응 타이밍, 행동 단순화, 음성·자막과 모바일 출력 기준을 정리합니다.",
      hero: "/images/shorts/dog-and-cat/dog-and-cat-0907-eng-poster.jpg",
      heroAlt: "FourFeetz 코믹 쇼츠에서 골든리트리버 강아지가 앉아 있는 고양이 옆에 다가간 장면",
      heroCaption: "웃음이 시작되기 전에 두 동물의 크기와 관계가 한눈에 보이도록 구성한 실제 공개 영상의 첫 장면입니다.",
      heroPosition: "50% 45%",
      readTime: "약 7분",
      verdict: "이 쇼츠는 놀고 싶은 강아지와 시큰둥한 고양이의 대비가 분명할 때 가장 잘 작동했습니다. 한 장면에 행동을 많이 넣으면 신체 안정성과 코미디 타이밍이 함께 약해졌습니다.",
      category: "제작 노트",
      tags: ["AI 쇼츠", "동물 코미디", "세로 영상", "편집"],
      keywords: ["강아지 고양이 AI 쇼츠", "동물 코믹 영상", "9:16 쇼츠 제작", "FourFeetz 제작 경험"],
      tools: ["Google Flow", "CapCut"],
      characters: ["강아지", "고양이"],
      featuredVideo: { name: "놀고 싶은 강아지, 단호한 고양이", description: "놀고 싶은 골든리트리버 강아지와 시큰둥한 고양이의 20초 영문 세로형 코믹 쇼츠입니다.", thumbnailUrl: "/images/shorts/dog-and-cat/dog-and-cat-0907-eng-poster.jpg", contentUrl: "/videos/shorts/dog-and-cat/dog-and-cat-0907-eng.mp4", duration: "PT20S", uploadDate: "2026-09-07T07:56:40Z" },
      sections: [
        { id: "production-goal", title: "제작 목표: 두 동물의 관계를 첫 장면에서 이해시키기", paragraphs: ["이 쇼츠에는 복잡한 줄거리가 필요하지 않았습니다. 놀고 싶은 강아지와 거절하는 고양이의 온도 차이가 이야기 전부였기 때문입니다. 첫 화면에서 두 동물이 함께 보이고, 체격 차이가 자연스럽고, 귀와 발을 자르지 않으면서 강아지가 다가갈 공간이 남도록 9:16 구도를 정했습니다.", "20초라는 길이도 도움이 됐습니다. 접근, 반응, 다시 시도, 마지막 대답처럼 각 구간에 한 가지 목적만 두자 여러 장소와 카메라를 사용하는 구성보다 휴대폰에서 훨씬 빠르게 이해됐습니다."], images: [{ src: "/images/shorts/dog-and-cat/dog-and-cat-0907-eng-poster.jpg", alt: "세로 화면 안에서 함께 보이는 강아지와 고양이", caption: "실제 공개 포스터에서 두 동물의 크기와 반응 공간을 확인할 수 있습니다.", presentation: "portrait" }] },
        { id: "problems", title: "어려웠던 점: 동물 두 마리는 변수도 두 배 이상 늘립니다", paragraphs: ["두 동물이 동시에 움직이면 시선이 분산되고 오류 원인을 찾기 어려웠습니다. 강아지의 접근, 고양이의 고개, 시선, 발, 이름표와 카메라가 짧은 시간 안에 경쟁했습니다. 고양이가 강아지의 접근보다 먼저 반응하면 화면은 자연스러워도 웃음의 원인과 결과가 무너졌습니다.", "효과가 있었던 방법은 프롬프트를 길게 쓰는 것이 아니라 반응을 나누는 것이었습니다. 한 동물이 주요 행동을 할 때 다른 동물은 호흡, 눈 깜빡임이나 작은 시선 정도만 허용해 코미디의 원인과 반응을 지켰습니다."], bullets: ["각 구간에는 한 동물만 주요 행동을 하게 합니다.", "사용할 전체 구간에서 발, 목걸이와 상대적 체격을 확인합니다.", "원인과 결과가 필요한 장면에서는 동시에 반응하는 결과를 제외합니다.", "대사 앞뒤에 편집 가능한 깨끗한 프레임을 남깁니다."] },
        { id: "dialogue-captions", title: "효과가 있었던 점: 음성과 자막을 타이밍 도구로 사용하기", paragraphs: ["영문 음성과 화면 자막은 장식이 아니라 리듬의 일부로 넣었습니다. 거절하는 말은 강아지의 행동을 시청자가 본 다음에 나와야 했습니다. 너무 빠르면 웃음을 미리 설명하고, 너무 늦으면 화면의 반응과 대사가 분리됐습니다.", "최종본은 휴대폰 크기로 확인하면서 자막이 얼굴과 플랫폼 버튼 영역을 가리지 않게 했습니다. 웹에서는 전체 다운로드를 기다리지 않고 재생을 시작할 수 있도록 H.264/AAC와 fast-start 방식으로 최적화했습니다."], table: { title: "20초 최종 검수 기준", headers: ["항목", "확인 질문", "문제가 있으면"], rows: [["행동", "반응보다 원인이 먼저 보이는가?", "구간 순서 변경 또는 자르기"], ["신체", "발, 얼굴과 체격이 유지되는가?", "구조적으로 실패한 장면 교체"], ["음성", "대사가 반응 순간에 맞는가?", "효과보다 음성 위치 먼저 조정"], ["자막", "동물을 가리지 않고 읽히는가?", "모바일 안전 영역으로 이동"]] } },
        { id: "takeaway", title: "실전 핵심: 코미디에는 많은 움직임보다 분명한 움직임이 필요합니다", paragraphs: ["동물 코믹 쇼츠에서는 움직임의 양보다 관계의 명확성이 더 중요했습니다. 누가 무엇을 원하는지 보여주고, 한 가지 행동을 끝낸 뒤, 상대 캐릭터가 대답할 정적 여백을 남기는 편이 더 재미있었습니다.", "아래 완성 쇼츠는 이 제작 기록의 실제 근거입니다. 모든 프로젝트에 통하는 성공률을 주장하는 것이 아니라 이번 영상에서 최종 편집과 공개를 통과한 선택을 보여줍니다."], videos: [{ src: "/videos/shorts/dog-and-cat/dog-and-cat-0907-eng.mp4", poster: "/images/shorts/dog-and-cat/dog-and-cat-0907-eng-poster.jpg", title: "놀고 싶은 강아지, 단호한 고양이", caption: "반응 순서, 영문 음성, 자막과 모바일 출력까지 확인한 20초 완성본입니다.", presentation: "portrait" }] },
      ],
      faqs: [{ question: "왜 두 동물을 계속 움직이게 하지 않았나요?", answer: "동시에 움직이면 신체와 반응 순서를 확인하기 어려웠습니다. 한 구간에 한 동물만 주요 행동을 하게 했을 때 코미디와 검수가 모두 분명해졌습니다." }, { question: "처음부터 모바일용으로 만들었나요?", answer: "네. 1080 × 1920 세로 화면으로 구성하고 휴대폰 크기에서 자막과 표정을 확인한 뒤 웹 재생용으로 출력했습니다." }],
      related: [{ label: "완성 쇼츠", title: "놀고 싶은 강아지, 단호한 고양이", href: "/ko/shorts/puppy-cat-playtime-chaos" }, { label: "관련 가이드", title: "처음부터 9:16 AI 쇼츠 만들기", href: "/ko/insights/create-ai-shorts-9-16-from-start" }],
    },
  },
  "pet-hotel-promo-video-production-notes": {
    en: {
      ...dates, slug: "pet-hotel-promo-video-production-notes", eyebrow: "FourFeetz Client-Style Production Record", title: "What We Learned Making a Vertical Pet Hotel Promo Video", shortTitle: "Making a Pet Hotel Promo Video", description: "A real FourFeetz portfolio production record about turning a pet hotel service into a short 9:16 promotional story with a clear customer journey and restrained sales copy.", hero: "/images/services/pet-hotel-promo-0907-poster.webp", heroAlt: "Golden retriever puppy entering a bright pet hotel lobby in a FourFeetz promotional video", heroCaption: "The finished portfolio sample opens with arrival at the hotel so the service is understandable before promotional copy appears.", readTime: "8 min read", verdict: "The promo became clearer when it followed the customer’s decision path—arrival, care, comfort and trust—instead of listing every facility feature.", category: "Production Notes", tags: ["Pet Business", "Promo Video", "Vertical Video", "Portfolio"], keywords: ["pet hotel promo video", "AI pet business advertising", "vertical business video", "pet hotel marketing"], tools: ["Google Flow", "CapCut"], characters: ["Golden Retriever Puppy"],
      featuredVideo: { name: "Pet Hotel Promotional Portfolio Sample", description: "A vertical FourFeetz portfolio video demonstrating a warm pet hotel customer journey.", thumbnailUrl: "/images/services/pet-hotel-promo-0907-poster.webp", contentUrl: "/videos/services/pet-hotel-promo-0907.mp4", duration: "PT30S", uploadDate: "2026-09-07T07:44:03Z" },
      sections: [
        { id: "brief", title: "Start With the Customer’s Question, Not the Building", paragraphs: ["A pet hotel owner may want to show the lobby, rooms, staff, play area, feeding and rest. Putting all of them into a short video creates a tour, but not necessarily a reason to trust the service. We reframed the sample around the customer’s real question: will my pet arrive safely, receive attentive care and feel comfortable here?", "That question created a simple sequence—arrival, welcome, care, rest and a final invitation. Each scene had a service meaning, so the video could still communicate with sound off."], images: [{ src: "/images/services/pet-hotel-promo-0907-poster.webp", alt: "Puppy arriving in a pet hotel lobby", caption: "The arrival shot makes the service category and customer journey immediately understandable.", presentation: "portrait" }] },
        { id: "continuity", title: "What Became Difficult: Keeping One Business and One Pet Across Scenes", paragraphs: ["A promotional sequence can look polished scene by scene while feeling like several unrelated hotels. Lobby color, staff clothing, room materials, lighting and the puppy’s apparent age can change. The more facilities we requested, the more likely the model was to redesign the business between shots.", "We reduced the number of visual promises and reused a warm, clean material palette. The puppy remained the viewer’s guide, but each shot asked for one service action only. We treated background consistency as part of brand consistency, not merely set decoration."], bullets: ["Use one recognizable lobby and room palette.", "Keep the pet’s age, coat and collar stable.", "Assign one customer benefit to each shot.", "Avoid showing facilities the real business cannot offer." ] },
        { id: "copy-edit", title: "What Worked: Build a Silent Story Before Adding Sales Copy", paragraphs: ["We first checked whether arrival, care and comfort were understandable from the images alone. Only then did we add concise copy and audio. This prevented text from carrying information that the visuals failed to show and kept the vertical screen from becoming crowded.", "The first clip’s spoken line was preserved because it gave the video a human opening, while later text stayed brief. In a real client project, every statement about supervision, operating hours, rooms or medical care would have to be confirmed by the business before publication."], table: { title: "A safer pet-hotel promo structure", headers: ["Beat", "Visual job", "Copy job"], rows: [["Arrival", "Identify the place and pet", "State the service simply"], ["Care", "Show one believable interaction", "Name the customer benefit"], ["Comfort", "Show a calm pet and clean space", "Support trust without exaggeration"], ["Close", "Return to the brand", "Give one clear next action"]] } },
        { id: "takeaway", title: "Practical Takeaway: Sell the Experience You Can Actually Deliver", paragraphs: ["A useful pet-business promo is not a collection of attractive AI rooms. It is a short promise about the customer experience. The visuals, narration and captions should all point to benefits the real hotel can confirm.", "This FourFeetz sample is a portfolio demonstration, not an advertisement for an actual named hotel. That distinction matters: it shows the production direction while avoiding unsupported claims about a real operator."], videos: [{ src: "/videos/services/pet-hotel-promo-0907.mp4", poster: "/images/services/pet-hotel-promo-0907-poster.webp", title: "Pet Hotel Promotional Portfolio Sample", caption: "The published portfolio sample used to review arrival, care, comfort and the final call to action.", presentation: "portrait" }] },
      ],
      faqs: [{ question: "Should a short pet-hotel promo show every facility?", answer: "No. A few verified benefits arranged as a customer journey are usually clearer than a rapid list of every room and feature." }, { question: "Can the same sample be used as a real hotel advertisement?", answer: "The structure can guide a project, but all visuals, services and claims must be matched to and approved by the actual business." }],
      related: [{ label: "Service Portfolio", title: "Pet Grooming & Hotel Video", href: "/services/grooming-hotel" }, { label: "All Videos", title: "FourFeetz Video Library", href: "/videos" }],
    },
    ko: {
      ...dates, slug: "pet-hotel-promo-video-production-notes", eyebrow: "FourFeetz 실제 제작 기록", title: "세로형 펫호텔 홍보영상을 만들며 확인한 것", shortTitle: "펫호텔 홍보영상 제작 경험", description: "펫호텔 서비스를 도착·돌봄·편안함·신뢰의 짧은 고객 여정으로 구성하고 과장되지 않은 문구로 마무리한 실제 포트폴리오 제작 경험입니다.", hero: "/images/services/pet-hotel-promo-0907-poster.webp", heroAlt: "FourFeetz 펫호텔 홍보영상에서 밝은 로비로 들어오는 골든리트리버 강아지", heroCaption: "홍보 문구보다 먼저 서비스와 고객 여정이 이해되도록 호텔 도착 장면으로 시작한 실제 포트폴리오 영상입니다.", readTime: "약 8분", verdict: "시설을 모두 나열하는 대신 고객이 확인하고 싶은 도착, 돌봄, 편안함과 신뢰의 순서로 구성했을 때 홍보 메시지가 더 분명해졌습니다.", category: "제작 노트", tags: ["반려동물 업체", "홍보영상", "세로 영상", "포트폴리오"], keywords: ["펫호텔 홍보영상", "AI 반려동물 업체 광고", "세로형 업체 영상", "애견호텔 마케팅"], tools: ["Google Flow", "CapCut"], characters: ["골든리트리버 강아지"],
      featuredVideo: { name: "펫호텔 홍보영상 포트폴리오 샘플", description: "따뜻한 펫호텔 고객 경험을 보여주는 FourFeetz 세로형 포트폴리오 영상입니다.", thumbnailUrl: "/images/services/pet-hotel-promo-0907-poster.webp", contentUrl: "/videos/services/pet-hotel-promo-0907.mp4", duration: "PT30S", uploadDate: "2026-09-07T07:44:03Z" },
      sections: [
        { id: "brief", title: "건물보다 고객의 질문에서 시작하기", paragraphs: ["펫호텔 운영자는 로비, 객실, 직원, 놀이 공간, 급식과 휴식을 모두 보여주고 싶을 수 있습니다. 하지만 짧은 영상에 전부 넣으면 시설 투어는 되더라도 신뢰해야 할 이유가 분명하지 않을 수 있습니다. 이번 샘플은 내 반려동물이 안전하게 도착하고 세심한 돌봄을 받으며 편안히 쉴 수 있는가라는 고객 질문에서 시작했습니다.", "이 질문을 도착, 환영, 돌봄, 휴식과 마지막 안내의 순서로 바꿨습니다. 각 장면에 서비스 의미가 생기면서 소리를 끈 상태에서도 내용이 전달됐습니다."], images: [{ src: "/images/services/pet-hotel-promo-0907-poster.webp", alt: "펫호텔 로비에 도착한 강아지", caption: "도착 장면만으로 업종과 고객 여정을 빠르게 이해할 수 있습니다.", presentation: "portrait" }] },
        { id: "continuity", title: "어려웠던 점: 여러 장면에서 같은 업체와 같은 반려동물 유지하기", paragraphs: ["장면 하나씩은 좋아 보여도 여러 호텔을 이어 붙인 것처럼 보일 수 있었습니다. 로비 색, 직원 복장, 객실 재질, 조명과 강아지의 나이 인상이 바뀌기 때문입니다. 보여줄 시설을 늘릴수록 장면마다 업체가 새로 디자인될 가능성도 커졌습니다.", "보여줄 약속을 줄이고 따뜻하고 깨끗한 재질과 색을 반복했습니다. 강아지는 고객의 시선을 이끄는 역할을 유지하되 한 장면에는 한 가지 서비스 행동만 넣었습니다. 배경의 일관성도 브랜드 일관성의 일부로 검토했습니다."], bullets: ["반복해서 알아볼 수 있는 로비와 객실 색을 정합니다.", "반려동물의 나이, 털과 목걸이를 유지합니다.", "한 장면에 한 가지 고객 이점만 배정합니다.", "실제 업체가 제공하지 않는 시설은 보여주지 않습니다."] },
        { id: "copy-edit", title: "효과가 있었던 방법: 홍보 문구보다 무음 스토리를 먼저 완성하기", paragraphs: ["이미지만 보고도 도착, 돌봄과 편안함이 이해되는지 먼저 확인했습니다. 그다음 짧은 문구와 오디오를 넣자 화면을 글로 설명하지 않아도 됐고 세로 화면도 복잡해지지 않았습니다.", "첫 장면의 음성은 사람의 안내로 시작하는 느낌을 주기 때문에 살리고, 이후 문구는 짧게 유지했습니다. 실제 고객 영상이라면 상주 관리, 운영시간, 객실과 의료 대응에 관한 모든 표현을 업체가 확인한 뒤 공개해야 합니다."], table: { title: "안전한 펫호텔 홍보 구성", headers: ["구간", "화면의 역할", "문구의 역할"], rows: [["도착", "장소와 반려동물 소개", "서비스를 짧게 알림"], ["돌봄", "믿을 수 있는 상호작용 한 가지", "고객 이점 설명"], ["편안함", "차분한 반려동물과 깨끗한 공간", "과장 없이 신뢰 보완"], ["마무리", "브랜드로 돌아오기", "다음 행동 하나 안내"]] } },
        { id: "takeaway", title: "실전 핵심: 실제로 제공할 수 있는 경험을 홍보하기", paragraphs: ["좋은 펫호텔 홍보영상은 보기 좋은 AI 객실을 모은 영상이 아니라 고객 경험에 대한 짧은 약속입니다. 화면, 음성, 자막은 실제 호텔이 확인할 수 있는 서비스 이점을 가리켜야 합니다.", "이번 FourFeetz 영상은 특정 실제 호텔의 광고가 아니라 제작 방향을 보여주는 포트폴리오 샘플입니다. 실제 업체에 대한 확인되지 않은 주장을 하지 않으면서 가능한 영상 방향을 보여준다는 점을 글에 분명히 밝혔습니다."], videos: [{ src: "/videos/services/pet-hotel-promo-0907.mp4", poster: "/images/services/pet-hotel-promo-0907-poster.webp", title: "펫호텔 홍보영상 포트폴리오 샘플", caption: "도착, 돌봄, 편안함과 마지막 안내 흐름을 확인한 실제 공개 포트폴리오 영상입니다.", presentation: "portrait" }] },
      ],
      faqs: [{ question: "짧은 펫호텔 영상에 모든 시설을 보여줘야 하나요?", answer: "아니요. 고객이 확인할 수 있는 몇 가지 이점을 고객 여정 순서로 보여주는 편이 모든 공간을 빠르게 나열하는 것보다 명확합니다." }, { question: "이 샘플을 실제 호텔 광고로 그대로 사용할 수 있나요?", answer: "구성 방식은 참고할 수 있지만 실제 영상의 공간, 서비스와 문구는 해당 업체에 맞추고 승인을 받아야 합니다." }],
      related: [{ label: "서비스 포트폴리오", title: "애견미용실·호텔 영상", href: "/ko/services/grooming-hotel" }, { label: "전체 영상", title: "FourFeetz 영상 라이브러리", href: "/ko/videos" }],
    },
  },
  "protoface-real-production-experience": {
    en: {
      ...dates, slug: "protoface-real-production-experience", eyebrow: "FourFeetz Tool Experience", title: "Using Protoface in a Real AI Pet-Character Production Test", shortTitle: "Our Protoface Production Experience", description: "An experience-based FourFeetz note on testing Protoface for a HARU-led human-performance concept, including identity stability, credits, watermark concerns and where another video tool was still needed.", hero: "/images/insights/haru-seedance-test-01-frame.jpg", heroAlt: "HARU production test frame used as a public identity reference for evaluating an AI character video workflow", heroCaption: "This public HARU test frame represents the identity-review side of the workflow; it is not a screenshot of Protoface or proof of an unpublished final result.", heroPosition: "50% 42%", readTime: "8 min read", verdict: "Protoface was useful for quickly testing a pet-character performance concept, but it did not remove the need to inspect identity, watermark, credits, export conditions and the final edit outside the tool.", category: "Studio Analysis", tags: ["Protoface", "AI Avatar", "Pet Character", "Tool Experience"], keywords: ["Protoface review", "Protoface pet video", "AI character performance", "FourFeetz tool test"], tools: ["Protoface", "Google Flow", "Seedance", "CapCut"], characters: ["HARU"],
      sections: [
        { id: "scope", title: "What We Actually Tested", paragraphs: ["FourFeetz tested Protoface while developing a promotional concept in which HARU’s character identity had to carry a more human-style performance. The attraction was speed: a reference-led character could be placed into a spoken or expressive format without building every motion shot from the beginning.", "This was a bounded production test, not a laboratory benchmark. We received trial credits through the affiliate setup, made sample scenes and compared whether the result could be useful in a finished social video. The final public Protoface-specific sample is not embedded on this page, so the article does not claim a visual result that visitors cannot inspect."], images: [{ src: "/images/insights/haru-seedance-test-01-frame.jpg", alt: "Public HARU frame used to discuss identity review in a character video test", caption: "A public HARU frame provides identity context only; the Protoface interface and unpublished test outputs are not represented as public evidence." }] },
        { id: "strengths", title: "Where Protoface Helped", paragraphs: ["The service reduced the time required to see whether the basic performance idea was worth continuing. That is valuable at concept stage: a creator can test tone, framing and whether an animal character feels convincing in a dialogue-led format before spending more time on surrounding scenes.", "The affiliate program also made the initial test accessible through provided credits. We treated those credits as test capacity, not as proof that future production would remain free or that every account would receive the same offer. Credit policies and referral rewards can change and must be checked in the live service."], bullets: ["Fast concept validation for a face-led character performance", "Useful for testing tone before building the full edit", "Trial credits lowered the first test cost", "Simple output still required external continuity and delivery review"] },
        { id: "limits", title: "What Required Caution: Identity, Watermark and Commercial Delivery", paragraphs: ["A recognizable face in one frame is not enough. We checked whether HARU’s muzzle, ears, apparent age and expression remained believable through speech and movement. When the performance became too human or the mouth movement dominated the face, the character could feel less like HARU even if the output was technically smooth.", "Watermark and export conditions were also part of the production decision. A sample can demonstrate a tool, but client delivery or a clean FourFeetz portfolio requires confirmed usage rights and an acceptable export. We contacted the provider about credits, watermark handling and longer-term support rather than assuming the trial state represented the commercial plan."], table: { title: "Protoface test decision points", headers: ["Question", "Why it matters", "FourFeetz response"], rows: [["Does identity survive speech?", "Facial motion can overpower the pet character", "Compare the full usable range with approved HARU references"], ["Is a watermark present?", "It affects portfolio and client delivery", "Confirm the export tier before production"], ["How are credits charged?", "A test cost may not predict a series cost", "Price the complete sequence, including retries"], ["Can it finish the whole story?", "A face-led shot is only one layer", "Use other tools and editing for surrounding scenes"]] } },
        { id: "workflow", title: "How We Would Use It Again", paragraphs: ["We would use Protoface first for a short proof of concept with a locked reference and one concise performance. Only after identity and export conditions pass would we build matching establishing shots, reaction shots or transitions in Google Flow or Seedance and assemble the final sequence in CapCut.", "The strongest role is therefore specific rather than universal: test and produce a face-led performance when that performance serves the story. It should not automatically replace image-to-video direction, continuity review or editing. The tool remains useful only when the resulting character still belongs to the wider FourFeetz visual world."], steps: ["Confirm current credits, watermark and commercial-use conditions.", "Use one approved identity reference and a short performance test.", "Review face, ears, muzzle and emotional character through the whole clip.", "Approve the export before producing surrounding scenes.", "Finish continuity, sound and delivery in the wider editing workflow."] },
      ],
      faqs: [{ question: "Does FourFeetz recommend Protoface for every pet video?", answer: "No. It is most relevant when a face-led or dialogue-led performance is necessary. Many pet stories are better served by ordinary image-to-video motion and editing." }, { question: "Did trial credits guarantee free long-term production?", answer: "No. The credits supported an initial test only. Current credit, referral, watermark and commercial terms must be checked directly in the live service." }],
      related: [{ label: "Related Test", title: "MagicLight and Seedance Real Production Test", href: "/insights/magiclight-seedance-2-real-production-test" }, { label: "Production Policy", title: "What We Keep Private in Character Production", href: "/insights/what-we-keep-private-character-production" }],
    },
    ko: {
      ...dates, slug: "protoface-real-production-experience", eyebrow: "FourFeetz 도구 사용 경험", title: "실제 반려동물 캐릭터 제작에서 Protoface를 사용해 본 경험", shortTitle: "Protoface 실제 사용 경험", description: "HARU를 사람처럼 말하고 표현하는 콘셉트에 Protoface를 테스트하며 확인한 얼굴 안정성, 크레딧, 워터마크와 다른 영상 도구가 필요한 범위를 정리합니다.", hero: "/images/insights/haru-seedance-test-01-frame.jpg", heroAlt: "AI 캐릭터 영상 작업에서 정체성을 확인하기 위한 공개 HARU 제작 테스트 프레임", heroCaption: "공개 HARU 테스트 프레임은 정체성 검토 맥락을 보여주며 Protoface 화면이나 아직 공개하지 않은 최종 결과의 증거로 표시하지 않습니다.", heroPosition: "50% 42%", readTime: "약 8분", verdict: "Protoface는 반려동물 캐릭터의 사람 같은 연기 콘셉트를 빠르게 확인하는 데 유용했지만, 얼굴 정체성·워터마크·크레딧·출력 조건과 외부 편집을 별도로 확인해야 했습니다.", category: "스튜디오 분석", tags: ["Protoface", "AI 아바타", "반려동물 캐릭터", "도구 사용 경험"], keywords: ["Protoface 후기", "Protoface 반려동물 영상", "AI 캐릭터 연기", "FourFeetz 도구 테스트"], tools: ["Protoface", "Google Flow", "Seedance", "CapCut"], characters: ["HARU"],
      sections: [
        { id: "scope", title: "실제로 테스트한 범위", paragraphs: ["FourFeetz는 HARU의 캐릭터 정체성을 유지하면서 사람처럼 말하고 표현하는 홍보 콘셉트를 만드는 과정에서 Protoface를 테스트했습니다. 기준 캐릭터로 말하거나 표정 짓는 형식을 빠르게 확인할 수 있어 처음부터 모든 움직임 장면을 만드는 시간을 줄일 가능성이 있었습니다.", "이번 작업은 도구 전체를 수치로 평가한 벤치마크가 아니라 제한된 실제 제작 테스트입니다. 어필리에이트 등록 과정에서 받은 테스트 크레딧으로 샘플 장면을 만들고 완성 SNS 영상에 사용할 수 있는지 비교했습니다. Protoface 전용 최종 샘플은 아직 이 페이지에 공개하지 않았으므로 방문자가 확인할 수 없는 시각 결과를 완성 사례처럼 주장하지 않습니다."], images: [{ src: "/images/insights/haru-seedance-test-01-frame.jpg", alt: "캐릭터 영상 테스트의 정체성 검토를 설명하는 공개 HARU 프레임", caption: "공개 HARU 프레임은 정체성 맥락만 제공합니다. Protoface 화면이나 비공개 테스트 결과를 공개 증거로 대신하지 않습니다." }] },
        { id: "strengths", title: "Protoface가 도움이 된 범위", paragraphs: ["말하거나 표정을 짓는 기본 콘셉트를 계속 진행할 가치가 있는지 빠르게 볼 수 있었습니다. 완성 영상 주변 장면에 많은 시간을 쓰기 전에 말 중심 형식에서 캐릭터가 설득력 있는지, 화면 거리와 분위기가 맞는지 확인할 수 있다는 점이 유용했습니다.", "어필리에이트 프로그램에서 제공된 크레딧으로 초기 테스트 비용도 낮출 수 있었습니다. 다만 이 크레딧은 테스트 기회일 뿐 장기 제작이 무료라는 뜻이나 모든 계정에 같은 혜택이 제공된다는 근거로 보지 않았습니다. 크레딧과 추천 보상은 바뀔 수 있어 실제 서비스에서 다시 확인해야 합니다."], bullets: ["얼굴 중심 캐릭터 연기의 빠른 콘셉트 확인", "전체 편집 전에 말투와 분위기 테스트", "제공된 크레딧으로 초기 테스트 비용 절감", "간단한 결과도 외부 연속성과 출력 검수 필요"] },
        { id: "limits", title: "주의가 필요했던 점: 정체성, 워터마크와 상업용 출력", paragraphs: ["한 프레임에서 얼굴을 알아볼 수 있다는 것만으로 충분하지 않았습니다. 말하고 움직이는 동안 HARU의 주둥이, 귀, 나이 인상과 표정이 유지되는지 확인했습니다. 입 움직임이 얼굴보다 강하거나 연기가 지나치게 사람처럼 보이면 기술적으로 부드러워도 HARU답지 않게 느껴질 수 있었습니다.", "워터마크와 출력 조건도 제작 판단에 포함했습니다. 도구 테스트용 샘플과 고객 전달 또는 깨끗한 FourFeetz 포트폴리오는 요구 조건이 다릅니다. 시험 사용 상태를 상업 요금제로 가정하지 않고 크레딧, 워터마크 제거와 장기 지원 가능 여부를 업체에 문의했습니다."], table: { title: "Protoface 테스트 판단 기준", headers: ["확인 질문", "중요한 이유", "FourFeetz 대응"], rows: [["말하는 동안 정체성이 유지되는가?", "얼굴 움직임이 캐릭터를 바꿀 수 있음", "전체 사용 구간을 승인된 HARU 레퍼런스와 비교"], ["워터마크가 있는가?", "포트폴리오와 고객 납품에 영향", "제작 전 출력 등급 확인"], ["크레딧은 어떻게 차감되는가?", "테스트 비용과 시리즈 비용이 다름", "재시도까지 포함해 전체 장면 계산"], ["이 도구만으로 이야기를 완성할 수 있는가?", "얼굴 장면은 전체 영상의 일부", "주변 장면은 다른 도구와 편집으로 제작"]] } },
        { id: "workflow", title: "다시 사용한다면 이렇게 진행합니다", paragraphs: ["승인된 기준 이미지 하나와 짧은 연기로 먼저 테스트하겠습니다. 정체성과 출력 조건을 통과한 다음 Google Flow나 Seedance에서 도입, 반응 또는 전환 장면을 만들고 CapCut에서 전체 순서와 사운드를 완성하는 방식이 적합합니다.", "Protoface의 가장 적합한 역할은 모든 영상 제작을 대신하는 것이 아니라 이야기에 필요한 얼굴 중심 연기를 빠르게 확인하고 만드는 것입니다. 완성 결과가 FourFeetz의 전체 시각 세계 안에 남아 있을 때만 사용할 가치가 있습니다."], steps: ["현재 크레딧, 워터마크와 상업적 사용 조건을 확인합니다.", "승인된 기준 이미지 하나와 짧은 연기로 테스트합니다.", "전체 영상에서 얼굴, 귀, 주둥이와 감정적 성격을 검토합니다.", "주변 장면을 만들기 전에 사용할 출력본을 승인합니다.", "전체 편집에서 연속성, 사운드와 전달 형식을 마무리합니다."] },
      ],
      faqs: [{ question: "모든 반려동물 영상에 Protoface를 추천하나요?", answer: "아니요. 얼굴 중심 또는 대사 중심 연기가 필요한 경우에 적합합니다. 많은 반려동물 이야기는 일반적인 이미지 투 비디오 움직임과 편집이 더 자연스럽습니다." }, { question: "테스트 크레딧으로 장기간 무료 제작이 가능한가요?", answer: "아니요. 받은 크레딧은 초기 테스트를 위한 것이었습니다. 현재 크레딧, 추천 보상, 워터마크와 상업 이용 조건은 실제 서비스에서 확인해야 합니다." }],
      related: [{ label: "관련 테스트", title: "MagicLight와 Seedance 실제 제작 테스트", href: "/ko/insights/magiclight-seedance-2-real-production-test" }, { label: "제작 공개 원칙", title: "캐릭터 제작에서 비공개로 관리하는 것", href: "/ko/insights/what-we-keep-private-character-production" }],
    },
  },
};
