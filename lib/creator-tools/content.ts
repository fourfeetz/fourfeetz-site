import { toolSlugs, type ToolSlug } from "./calculations";

export type ToolLanguage = "ko" | "en";
type Copy = { title: string; description: string; intro: string; steps: string[]; formula: string; example: string; notes: string[]; faqs: { question: string; answer: string }[]; article: { path: string; title: string } };
export type CreatorTool = { slug: ToolSlug; number: string; ko: Copy; en: Copy };

export const creatorTools: CreatorTool[] = [
  {
    slug: "aspect-ratio-calculator", number: "01",
    ko: {
      title: "화면비·해상도 계산기", description: "16:9 영상을 9:16 쇼츠로 바꿀 때의 해상도와 잘리는 영역을 계산하세요. 1:1·4:5 화면비와 사용자 지정 비율도 지원하는 무료 계산기입니다.",
      intro: "가로 영상을 쇼츠로 바꾸면 양옆이 얼마나 잘릴까요? 원본 크기와 목표 비율을 입력하면 출력 해상도와 가운데를 기준으로 남는 영역을 보여드립니다. 파일을 업로드하거나 편집 프로그램을 열 필요가 없습니다.",
      steps: ["원본 영상이나 이미지의 가로·세로 픽셀을 입력합니다.", "9:16, 16:9, 1:1, 4:5 또는 원하는 비율을 선택합니다.", "출력 가로 픽셀을 정하고 예상 해상도와 잘리는 영역을 확인합니다."],
      formula: "출력 세로 = 출력 가로 × 목표 세로 비율 ÷ 목표 가로 비율. 가운데 채우기에서는 원본 비율과 목표 비율을 비교해 가로 또는 세로를 잘라냅니다.",
      example: "1920 × 1080 원본을 9:16으로 채우면 원본 기준 약 607.5 × 1080 영역이 남습니다. 원본 면적의 약 31.64%이며, 출력 가로를 1080으로 정하면 출력 크기는 1080 × 1920입니다.",
      notes: ["그림은 가운데를 기준으로 자르는 경우입니다. 실제 편집에서는 피사체 위치에 맞춰 이동해야 할 수 있습니다.", "출력 세로는 가까운 정수로 반올림합니다. 일부 코덱은 짝수 픽셀 크기를 요구하므로 내보내기 설정을 확인하세요.", "해상도 계산만 제공하며 영상 파일 변환이나 화질 향상은 수행하지 않습니다. 크게 확대하면 원본보다 선명해지지 않습니다."],
      faqs: [
        { question: "가로 영상을 세로로 바꾸면 꼭 잘라야 하나요?", answer: "화면을 빈틈없이 채우면 일부가 잘립니다. 원본 전체를 유지하려면 편집기에서 맞춤(Fit)을 선택하고 위아래 여백이나 배경을 추가할 수 있습니다." },
        { question: "1080 × 1920은 어떤 화면비인가요?", answer: "가로 1080, 세로 1920을 같은 수로 나누면 9:16입니다. 세로형 쇼츠를 계획할 때 자주 쓰는 크기입니다." },
        { question: "사진이나 영상을 올려야 하나요?", answer: "아니요. 픽셀 크기만 입력합니다. 이 도구에 파일을 업로드하지 않습니다." },
      ], article: { path: "/insights/create-ai-shorts-9-16-from-start", title: "AI 쇼츠를 처음부터 9:16으로 설계하기" },
    },
    en: {
      title: "Aspect Ratio & Resolution Calculator", description: "Calculate video dimensions and preview center cropping from 16:9 to 9:16, 1:1, 4:5 or a custom aspect ratio. Free, no signup or upload required.",
      intro: "See how much of a landscape shot survives a vertical crop before you open an editor. Enter the original dimensions, select a target ratio and choose an output width to calculate the height and preview the retained area.",
      steps: ["Enter the original width and height in pixels.", "Choose 9:16, 16:9, 1:1, 4:5 or a custom ratio.", "Set the output width and check the dimensions and centered crop."],
      formula: "Output height = output width × target ratio height ÷ target ratio width. A centered fill crop removes width or height according to the difference between source and target ratios.",
      example: "A 1920 × 1080 source filled into 9:16 retains approximately 607.5 × 1080 source pixels, or 31.64% of its area. At an output width of 1080, the result is 1080 × 1920.",
      notes: ["The preview assumes centered cropping. Reposition the frame in your editor to keep the subject visible.", "Output height is rounded to the nearest integer. Some codecs require even dimensions; check your export settings.", "This tool calculates dimensions. It does not convert files, upscale detail or improve image quality."],
      faqs: [
        { question: "Does converting landscape to portrait always require cropping?", answer: "Filling the entire portrait frame crops part of the original. To keep the full picture, use Fit in your editor and add padding or a background." },
        { question: "What aspect ratio is 1080 × 1920?", answer: "Dividing both dimensions by 120 gives 9:16, a common vertical-video format." },
        { question: "Do I need to upload a file?", answer: "No. Only pixel dimensions are needed; this calculator does not upload your media." },
      ], article: { path: "/insights/create-ai-shorts-9-16-from-start", title: "Plan AI shorts in 9:16 from the start" },
    },
  },
  {
    slug: "video-file-size-calculator", number: "02",
    ko: {
      title: "영상 용량 계산기", description: "영상 길이, 비디오 비트레이트와 오디오 비트레이트로 예상 MP4 파일 용량을 MB·GB·MiB로 계산하세요. 업로드 전 확인하는 무료 영상 용량 계산기입니다.",
      intro: "내보내기 전에 예상 파일 크기를 확인하세요. 영상 길이와 영상·음성 비트레이트를 넣으면 용량을 계산합니다. 해상도가 같아도 비트레이트가 다르면 파일 크기가 달라지므로, 편집기의 출력 설정에 표시된 값을 사용하세요.",
      steps: ["영상 전체 길이를 초 단위로 입력합니다. 1분은 60초입니다.", "비디오 비트레이트(Mbps)와 오디오 비트레이트(kbps)를 입력합니다.", "예상 MB·GB를 확인하고, 제한 용량보다 여유 있게 출력 설정을 정합니다."],
      formula: "예상 MB = 길이(초) × [비디오 Mbps + 오디오 kbps ÷ 1000] ÷ 8. 1 MB는 1,000,000바이트, 1 MiB는 1,048,576바이트입니다.",
      example: "60초 영상에 비디오 8 Mbps와 오디오 128 kbps를 사용하면 예상 용량은 60.96 MB, 약 58.14 MiB입니다. 오디오가 없다면 0 kbps를 입력하세요.",
      notes: ["평균 비트레이트를 기준으로 한 추정치입니다. 가변 비트레이트(VBR), 컨테이너 정보와 메타데이터 때문에 실제 크기는 달라집니다.", "해상도나 코덱 이름만으로 정확한 용량을 정할 수 없습니다. 편집기의 예상 크기 또는 실제 출력 파일도 확인하세요.", "영상 압축이나 업로드 기능이 아닙니다. 파일 크기 계산만 브라우저에서 수행합니다."],
      faqs: [
        { question: "4K면 용량이 항상 더 큰가요?", answer: "다른 조건이 같다면 최종 용량은 평균 비트레이트와 길이로 정해집니다. 다만 4K 화질을 유지하려면 더 높은 비트레이트가 필요한 경우가 많습니다." },
        { question: "MB와 Mbps는 무엇이 다른가요?", answer: "MB는 파일 크기 단위인 메가바이트이고, Mbps는 초당 메가비트입니다. 8비트가 1바이트이므로 계산할 때 8로 나눕니다." },
        { question: "계산값과 실제 파일 크기가 다른 이유는 무엇인가요?", answer: "실제 평균 비트레이트, VBR 변화, 음성 트랙 수와 파일 컨테이너의 추가 정보가 영향을 줍니다. 업로드 제한에 딱 맞추기보다 여유를 두세요." },
      ], article: { path: "/insights/animal-character-short-publishing-checklist", title: "동물 캐릭터 쇼츠 게시 전 체크리스트" },
    },
    en: {
      title: "Video File Size Calculator", description: "Estimate MP4 video file size in MB, GB and MiB from duration, video bitrate and audio bitrate. Free calculator for planning exports and uploads.",
      intro: "Estimate your export size before rendering. Enter duration and the video and audio bitrates from your editor. Resolution alone is not enough: two exports at the same resolution can have very different file sizes.",
      steps: ["Enter the total duration in seconds: one minute is 60 seconds.", "Enter video bitrate in Mbps and audio bitrate in kbps.", "Check the estimated size and leave headroom beneath your upload limit."],
      formula: "Estimated MB = seconds × [video Mbps + audio kbps ÷ 1000] ÷ 8. One MB is 1,000,000 bytes; one MiB is 1,048,576 bytes.",
      example: "A 60-second video at 8 Mbps with 128 kbps audio is approximately 60.96 MB or 58.14 MiB. Enter 0 kbps for a video without audio.",
      notes: ["This estimate assumes an average bitrate. Variable bitrate, metadata and container overhead change the actual size.", "Resolution and codec alone cannot determine file size. Also check the estimate in your editor and the exported file.", "The calculator does not compress, convert or upload videos. Calculations run in your browser."],
      faqs: [
        { question: "Is a 4K video always larger?", answer: "At the same total average bitrate and duration, file sizes are similar. Preserving 4K detail may require a higher bitrate, which increases size." },
        { question: "What is the difference between MB and Mbps?", answer: "MB means megabytes of file size; Mbps means megabits per second. There are eight bits in a byte, so the size calculation divides by eight." },
        { question: "Why is my actual export a different size?", answer: "Average bitrate, VBR changes, multiple audio tracks and container overhead all matter. Leave some headroom instead of targeting an upload limit exactly." },
      ], article: { path: "/insights/animal-character-short-publishing-checklist", title: "Check your character short before publishing" },
    },
  },
  {
    slug: "ai-video-cost-calculator", number: "03",
    ko: {
      title: "AI 영상 제작 비용 계산기", description: "장면 수, 재생성을 포함한 시도 횟수와 크레딧 가격으로 AI 영상 제작 비용을 계산하세요. 사용량 환산 비용과 크레딧 묶음 구매 금액을 구분합니다.",
      intro: "한 번에 원하는 장면이 나오지 않을 수 있으니 재생성 횟수까지 예산에 넣어보세요. 사용 중인 서비스의 크레딧 가격을 직접 입력하면 예상 소모량과 사용량 환산 비용, 묶음 단위 구매 금액을 함께 볼 수 있습니다.",
      steps: ["최종 장면 수와 장면당 총 시도 횟수를 입력합니다. 첫 생성도 1회에 포함합니다.", "1회 생성 크레딧, 구매 묶음의 크레딧 수와 가격을 입력합니다.", "사용량 기준 비용과 새 묶음을 구매할 때 필요한 금액을 구분해 확인합니다."],
      formula: "총 크레딧 = 장면 수 × 장면당 총 시도 × 1회 생성 크레딧. 사용량 환산 비용 = 총 크레딧 ÷ 묶음 크레딧 × 묶음 가격. 구매 금액은 필요한 묶음 수를 올림해 계산합니다.",
      example: "5장면을 각 3회 시도하고 생성당 20크레딧을 쓰면 총 300크레딧입니다. 1,000크레딧 묶음이 10,000원이라면 사용량 환산 비용은 3,000원이고, 잔액 없이 새로 구매할 때는 1묶음 10,000원이 필요합니다.",
      notes: ["특정 서비스의 최신 요금을 자동 조회하지 않습니다. 실제 구독 화면과 모델·해상도·길이별 차감량을 입력하세요.", "기존 잔액은 없는 것으로 보고 묶음 구매 금액을 계산합니다. 세금, 환율, 구독 기본료, 편집·음악·작업 인건비는 별도입니다.", "최종 영상 길이는 장면 수 × 장면당 사용 길이입니다. 전환 겹침, 잘라낸 구간과 생성 실패는 따로 고려하세요."],
      faqs: [
        { question: "장면당 시도 횟수에 재생성만 넣나요?", answer: "첫 생성과 재생성을 모두 합친 횟수입니다. 처음 1회 생성 후 2회 다시 생성했다면 3을 입력하세요." },
        { question: "사용량 비용과 구매 금액이 왜 다른가요?", answer: "크레딧은 보통 묶음으로 구매합니다. 일부만 써도 구매 시에는 묶음 전체 금액을 지불하므로 차이가 납니다. 남는 크레딧도 함께 표시합니다." },
        { question: "견적서로 그대로 써도 되나요?", answer: "생성 크레딧 예산을 위한 참고 계산입니다. 고객 견적에는 기획, 수정, 편집, 음원, 인건비와 필요한 세금 등을 별도로 반영해야 합니다." },
      ], article: { path: "/insights/ai-pet-video-production-cost-guide", title: "AI 반려동물 영상 제작 비용을 나누어 보는 방법" },
    },
    en: {
      title: "AI Video Production Cost Calculator", description: "Estimate AI video credits, retry costs and credit-pack purchases from your own pricing. Separate usage-based costs from the amount needed to buy whole packs.",
      intro: "Budget for retries as well as the first generation. Enter your service's credit price and the number of attempts per shot to estimate usage, its allocated cost and the amount required to buy whole credit packs.",
      steps: ["Enter final shot count and total attempts per shot, including the first generation.", "Enter credits per generation, credits per pack and your pack price.", "Compare allocated usage cost with whole-pack purchases and unused credits."],
      formula: "Total credits = shots × total attempts per shot × credits per generation. Allocated cost = total credits ÷ pack credits × pack price. Pack purchases round up to whole packs.",
      example: "Five shots with three attempts each at 20 credits use 300 credits. If a 1,000-credit pack costs 10,000 in your chosen currency, the allocated cost is 3,000. Buying from a zero balance requires one full pack at 10,000.",
      notes: ["The tool does not fetch current provider prices. Enter the rates shown for your model, resolution and generation length.", "Pack purchases assume a zero starting balance. Taxes, currency conversion, subscription base fees, editing, music and labor are excluded.", "Final runtime equals shot count × usable seconds per shot. Allow separately for transitions, trimming and failed outputs."],
      faqs: [
        { question: "Do attempts include the first generation?", answer: "Yes. One first generation plus two retries is three total attempts." },
        { question: "Why do usage cost and purchase amount differ?", answer: "Credits are sold in packs. You may need to buy a whole pack even when your project uses only part of it; the unused balance is shown separately." },
        { question: "Is this a complete client quote?", answer: "No. It estimates generation-credit spending. A quote may also need planning, editing, revisions, audio, labor and applicable taxes." },
      ], article: { path: "/insights/ai-pet-video-production-cost-guide", title: "Understand the components of AI pet-video costs" },
    },
  },
];

export function getCreatorTool(slug: string) { return creatorTools.find(tool => tool.slug === slug); }
export { toolSlugs };
