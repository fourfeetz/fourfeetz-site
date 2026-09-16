type ExampleCopy = {
  title: string;
  context: string;
  rows: [string, string][];
  decision: string;
};

type ResourceExample = {
  sourceSlug: string;
  worksheetSlug: string;
  en: ExampleCopy;
  ko: ExampleCopy;
};

// Educational applications of published records, not reconstructed private logs.
export const resourceExamples: Record<string, ResourceExample> = {
  "character-consistency-prompt-pack": {
    sourceSlug: "haru-pori-two-character-scene",
    worksheetSlug: "ai-video-continuity-checklist",
    en: {
      title: "Separate HARU and PORI before describing motion",
      context: "A Golden Evening Together is an 18-second vertical short. Its published production record identifies HARU by upright ears and a brown scarf, and the smaller PORI by curls and a green neckerchief. Use those observable differences to build a continuity sheet.",
      rows: [["Identity", "HARU: cream-white Jindo puppy, upright ears, brown scarf. PORI: smaller apricot poodle, curls, green neckerchief."], ["Relationship", "Keep the relative body scale and a readable gap between the silhouettes."], ["Motion review", "Check that the active character does not cover the other character's face or accessory."], ["Review points", "Compare both characters at the opening, during movement and in the resting finish."]],
      decision: "If a scarf changes character or the silhouettes merge, revise the reference or simplify the action before adjusting the color grade. Identity errors change who the viewer thinks is on screen; finishing cannot resolve that ambiguity.",
    },
    ko: {
      title: "움직임을 쓰기 전에 HARU와 PORI를 구분하기",
      context: "공개된 18초 세로 쇼츠 A Golden Evening Together의 제작 기록은 HARU의 선 귀와 갈색 스카프, 더 작은 PORI의 곱슬털과 초록색 목수건을 구분합니다. 눈으로 확인할 수 있는 차이를 연속성 표의 기준으로 삼아 보세요.",
      rows: [["외형 기준", "HARU: 크림빛 흰 진돗개, 선 귀, 갈색 스카프. PORI: 더 작은 살구색 푸들, 곱슬털, 초록색 목수건."], ["상대적인 관계", "몸 크기의 차이와 두 실루엣 사이의 구분되는 여백을 유지합니다."], ["움직임 검토", "행동하는 캐릭터가 다른 캐릭터의 얼굴이나 소품을 가리지 않는지 확인합니다."], ["확인 지점", "시작, 움직이는 중간, 나란히 쉬는 마지막에서 두 캐릭터를 비교합니다."]],
      decision: "스카프가 다른 캐릭터로 옮겨가거나 실루엣이 겹쳐 구분되지 않으면 색보정보다 기준 이미지 수정이나 행동 단순화가 먼저입니다. 외형 오류는 관객이 누구를 보고 있는지 바꾸므로 마무리 편집으로 해결하기 어렵습니다.",
    },
  },
  "image-to-video-prompt-framework": {
    sourceSlug: "from-first-image-to-final-short",
    worksheetSlug: "ai-video-prompt-simplification-worksheet",
    en: {
      title: "Turn a rainy-window scene into one reviewable action",
      context: "The HARU and LUNA rainy-window record describes a quiet shared moment with rain outside and room for the music. Translate that purpose into separate motion and continuity fields instead of repeating every visual detail in the reference image.",
      rows: [["Purpose", "Keep the shared moment calm and readable at phone size."], ["Primary action", "Choose a small glance or posture change; do not stack walking, turning and jumping in the same shot."], ["Camera and environment", "Use a stable viewpoint and keep the rain outside the window."], ["Protected details", "Preserve the two faces, relative scale, window boundary and contact between paws and floor."]],
      decision: "When the window changes shape or a paw loses contact, remove competing motion requests and review a new generation. Trimming can improve timing, but it cannot repair inconsistent anatomy or room geometry.",
    },
    ko: {
      title: "비 오는 창가 장면을 검토 가능한 한 가지 행동으로 바꾸기",
      context: "HARU와 LUNA의 비 오는 창가 제작 기록은 창밖의 비와 음악의 여백을 살린 조용한 순간을 설명합니다. 기준 이미지의 모든 외형을 다시 나열하기보다 움직임과 유지 조건을 나누어 작성해 보세요.",
      rows: [["장면 목적", "휴대폰 화면에서도 함께 보내는 조용한 순간이 읽히게 합니다."], ["주요 행동", "작은 시선 이동이나 자세 변화 하나를 고릅니다. 걷기·회전·점프를 한 샷에 함께 넣지 않습니다."], ["카메라와 환경", "시점을 안정적으로 유지하고 비는 창밖에만 남깁니다."], ["유지할 요소", "두 얼굴, 상대적 크기, 창문 경계와 발이 바닥에 닿는 관계를 확인합니다."]],
      decision: "창문 모양이 바뀌거나 발이 바닥에서 뜨면 서로 경쟁하는 움직임 지시를 줄여 새 결과를 검토합니다. 자르기는 타이밍을 개선하지만 동물의 형태나 공간 구조 오류를 고치지는 못합니다.",
    },
  },
  "ai-short-film-workflow": {
    sourceSlug: "from-first-image-to-final-short",
    worksheetSlug: "ai-video-shot-list-template",
    en: {
      title: "Use approval gates for the rainy-window short",
      context: "The published scene-planning record connects an approved reference to one-action motion tests and the final vertical edit. The useful handoff is an approved asset plus a reason to keep it, not just another generated file.",
      rows: [["Reference gate", "Check that both characters fit the vertical frame with space for ears and paws."], ["Motion gate", "Compare the opening, middle and ending with the approved reference."], ["Edit gate", "Place usable ranges between neighboring shots; inspect screen direction and timing."], ["Finishing gate", "Balance the music only after selecting structurally sound clips and locking the scene order."]],
      decision: "Return a changed face to the reference/motion stage. Return an awkward pause to the edit stage. This distinction avoids spending finishing effort on a clip that needs regeneration.",
    },
    ko: {
      title: "비 오는 창가 쇼츠를 단계별 승인 기준으로 정리하기",
      context: "공개 장면 기획 기록은 승인된 기준 이미지, 한 가지 행동의 움직임 검토, 완성 세로 편집을 연결합니다. 다음 단계로 넘기는 것은 생성 파일 자체가 아니라 사용할 이유를 확인한 결과물입니다.",
      rows: [["기준 이미지 승인", "두 캐릭터가 세로 화면에 들어오고 귀와 발 주변 여백이 있는지 확인합니다."], ["움직임 승인", "시작·중간·끝을 승인된 기준 이미지와 비교합니다."], ["편집 승인", "사용 가능한 구간을 앞뒤 샷 사이에 배치해 화면 방향과 타이밍을 확인합니다."], ["마무리 승인", "구조적 문제가 없는 클립과 장면 순서를 확정한 뒤 음악 균형을 조정합니다."]],
      decision: "얼굴이 바뀌면 기준 이미지·움직임 단계로, 어색한 쉼은 편집 단계로 돌려보냅니다. 문제를 되돌릴 단계를 구분해야 재생성이 필요한 클립의 마무리에 시간을 쓰지 않습니다.",
    },
  },
  "storyboard-planning-template": {
    sourceSlug: "pet-hotel-promo-video-production-notes",
    worksheetSlug: "ai-video-shot-list-template",
    en: {
      title: "Plan a pet-hotel portfolio around a customer's journey",
      context: "The FourFeetz pet-hotel portfolio record organizes its message around arrival, care, comfort and a final invitation. This is a portfolio sample, not evidence of a real hotel's facilities or services. Use the sequence below as a planning exercise.",
      rows: [["Arrival", "Introduce the place and pet. Leave the service introduction brief so the image remains readable."], ["Care", "Show one understandable interaction and connect it to one customer benefit."], ["Comfort", "Use a calm pet and a coherent space; avoid introducing an unrelated room design."], ["Closing", "Return to the brand and give the viewer one next step."]],
      decision: "Review the sequence without sound before adding copy. If the customer journey is unclear, revise the shots rather than covering the problem with captions. A real client must verify facility, staffing and care claims before publication.",
    },
    ko: {
      title: "펫호텔 포트폴리오를 고객 여정으로 구성하기",
      context: "FourFeetz 펫호텔 포트폴리오 제작 기록은 도착·돌봄·편안함·마지막 안내의 흐름으로 메시지를 구성합니다. 실제 호텔의 시설이나 서비스를 입증하는 광고가 아닌 포트폴리오 샘플입니다. 아래 순서를 장면 기획 연습에 적용해 보세요.",
      rows: [["도착", "장소와 반려동물을 소개합니다. 화면이 읽히도록 서비스 소개 문구는 짧게 둡니다."], ["돌봄", "이해할 수 있는 상호작용 하나를 보여주고 고객 이점 하나에 연결합니다."], ["편안함", "차분한 반려동물과 일관된 공간을 보여줍니다. 관계없는 새 객실 디자인은 피합니다."], ["마무리", "브랜드로 돌아와 관객의 다음 행동 하나를 안내합니다."]],
      decision: "문구를 넣기 전에 무음으로 순서를 확인합니다. 고객 여정이 이해되지 않으면 자막으로 덮기보다 샷 구성을 바꿉니다. 실제 고객용 영상에서는 시설·상주 관리·돌봄에 관한 표현을 업체가 확인한 뒤 공개해야 합니다.",
    },
  },
  "production-notes-template": {
    sourceSlug: "haru-pori-two-character-scene",
    worksheetSlug: "ai-video-error-review-sheet",
    en: {
      title: "Separate visible evidence from an unrecorded failure",
      context: "The HARU/PORI production record explicitly says that rejected clips and a generation log are unavailable. A useful note can still document the published work, as long as it does not turn a possible risk into a claimed failed take.",
      rows: [["Evidence", "An 18-second 9:16 published short with a meeting, garden movement and a resting finish."], ["Observation", "Upright ears and a brown scarf distinguish HARU from the smaller curly PORI with a green neckerchief."], ["Review question", "Can a viewer distinguish both characters while they move? Record the frame or moment that supports the answer."], ["Unknown", "Do not fill in generation count, cost, rejected takes or exact private prompts without records."]],
      decision: "Write 'check for silhouette overlap' as a review instruction unless you have a frame showing overlap. Reserve 'this take failed' for a saved result that actually demonstrates the failure. This makes the note useful without overstating what was tested.",
    },
    ko: {
      title: "눈에 보이는 근거와 기록되지 않은 실패를 구분하기",
      context: "HARU/PORI 제작 기록은 탈락 클립과 생성 로그가 남아 있지 않다고 명시합니다. 공개된 작품만으로도 유용한 기록을 만들 수 있지만 가능한 위험을 실제 실패 경험으로 바꾸어 쓰면 안 됩니다.",
      rows: [["확인 가능한 근거", "만남, 정원의 움직임, 나란히 쉬는 마무리가 있는 18초·9:16 공개 쇼츠."], ["관찰", "선 귀와 갈색 스카프의 HARU, 더 작고 곱슬털과 초록색 목수건을 가진 PORI가 구분됩니다."], ["검토 질문", "움직이는 동안에도 두 캐릭터가 구분되는가? 답을 뒷받침하는 프레임이나 장면을 기록합니다."], ["확인되지 않은 항목", "생성 횟수, 비용, 탈락 결과와 정확한 비공개 프롬프트는 기록 없이 채우지 않습니다."]],
      decision: "겹침을 보여주는 프레임이 없다면 ‘실루엣 겹침을 확인한다’는 검토 지침으로 씁니다. ‘이 결과는 실패했다’는 표현은 저장된 결과가 실제 문제를 보여줄 때 사용합니다. 검증 범위를 과장하지 않아야 기록을 다시 활용할 수 있습니다.",
    },
  },
};
