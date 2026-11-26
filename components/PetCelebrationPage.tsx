import Image from "next/image";
import Link from "next/link";
import { VideoPricingSection } from "@/components/korean/VideoPricingSection";

export default function PetCelebrationPage({ language }: { language: "ko" | "en" }) {
  const ko = language === "ko";
  const prefix = ko ? "/ko" : "";
  const contact = `${prefix}/contact`;
  const occasions = ko ? [
    ["생일 축하", "한 살 더 사랑스러워진 우리 아이에게. 이름과 축하 메시지를 담아 특별한 하루를 선물하세요."],
    ["입양 기념일", "처음 가족이 된 날부터 지금까지. 함께한 시간을 축하하는 따뜻한 이야기를 만듭니다."],
    ["가족의 특별한 날", "반려동물이 전하는 축하 인사로 가족과 연인에게 웃음과 마음을 전하세요."],
  ] : [
    ["Happy birthday", "Celebrate another year together with your pet’s name and a personal birthday message."],
    ["Adoption anniversary", "Remember the day you became family with a joyful story inspired by your time together."],
    ["A special family occasion", "Let your pet star in a heartfelt greeting for someone you love."],
  ];
  const scenes = ko ? [
    ["반가운 시작", "정원에 앉은 아이가 카메라를 바라보고 고개를 살짝 기울입니다."],
    ["오늘의 주인공", "카메라가 천천히 다가가고, 풍선과 작은 파티 장식이 바람에 흔들립니다."],
    ["마음을 전하는 엔딩", "아이의 사랑스러운 표정 위로 이름과 축하 문구를 편집해 넣습니다."],
  ] : [
    ["A warm hello", "Your pet looks toward the camera and gives a gentle head tilt in the garden."],
    ["The star of the day", "The camera slowly moves closer as balloons and party decorations sway in the breeze."],
    ["A personal message", "Your pet’s name and your celebration message appear over a joyful closing portrait."],
  ];
  const steps = ko ? [
    ["사진과 기념일", "선명한 사진 1~3장, 아이 이름, 축하할 날짜와 문구를 준비해 주세요."],
    ["분위기와 구성 상담", "생일파티·입양 기념 등 주제와 화면 비율, 필요한 장면 수를 정합니다."],
    ["제작과 시안 확인", "사진의 특징을 참고해 장면을 제작하고 음악·자막을 편집합니다."],
    ["검수 후 파일 전달", "합의한 범위의 수정을 반영한 뒤 최종 영상 파일을 전달합니다."],
  ] : [
    ["Photos and occasion", "Prepare 1–3 clear photos, your pet’s name, the occasion date and your message."],
    ["Plan the story", "Discuss the mood, number of scenes and portrait or landscape format."],
    ["Create and review", "We create scenes inspired by the photos, then edit the music and captions."],
    ["Receive your video", "After review and agreed revisions, receive your final video file."],
  ];
  const faqs = ko ? [
    ["강아지와 고양이 모두 가능한가요?", "네. 아이의 특징이 선명한 사진을 보내주시면 사진 상태와 원하는 장면에 맞춰 제작 가능 여부를 안내합니다."],
    ["실제 모습과 똑같이 나오나요?", "사진을 참고하는 AI 영상으로 털, 무늬와 표정이 일부 달라질 수 있습니다. 제작 전 표현 방향을 함께 정합니다."],
    ["기념일에 맞춰 받을 수 있나요?", "원하는 수령일을 상담 시 알려주세요. 자료 확정일과 작업 일정에 따라 가능 여부를 안내하며, 예약 전 납기를 확인해 주세요."],
    ["세로 영상으로도 만들 수 있나요?", "9:16 세로형 또는 16:9 가로형 중 용도에 맞게 상담합니다. 음악과 축하 문구도 함께 정할 수 있습니다."],
  ] : [
    ["Can you feature dogs and cats?", "Yes. Send clear photos so we can confirm which scenes are suitable for your pet."],
    ["Will my pet look exactly the same?", "AI imagery is inspired by your photos. Fur, markings and expressions may vary; we agree on the visual direction before production."],
    ["Can it arrive before our celebration?", "Tell us your preferred delivery date. Availability depends on the production schedule and when your materials are confirmed."],
    ["Can I choose a vertical video?", "We can discuss 9:16 portrait or 16:9 landscape delivery, together with music and a personal message."],
  ];
  const button = "inline-flex min-h-12 items-center justify-center rounded-full bg-[#6f4e37] px-7 py-3.5 text-base font-bold text-white transition hover:bg-[#543a29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-4";

  return <main className="overflow-hidden bg-[#fffaf4] text-[#2b2119]">
    <section className="bg-[radial-gradient(ellipse_at_top_left,#ffe3bd,transparent_65%)] px-6 py-12 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
        <div>
          <Link href={`${prefix}/services/personal-pet-video`} className="text-sm font-bold tracking-[.15em] text-[#805a3e] underline underline-offset-4">MY PET STORY</Link>
          <p className="mt-8 text-base font-bold text-[#a16c3d]">{ko ? "반려동물 생일 · 입양 기념일 · 축하 메시지" : "BIRTHDAYS · ADOPTION DAYS · PERSONAL GREETINGS"}</p>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">{ko ? <>오늘의 주인공은<br />우리 아이예요.</> : <>A little celebration.<br />A whole lot of love.</>}</h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-[#76685d]">{ko ? "소중한 사진 속 우리 아이가 축하영상의 주인공이 됩니다. 생일과 처음 가족이 된 날, 함께 웃고 싶은 순간을 따뜻하고 사랑스러운 이야기로 남겨보세요." : "Turn your pet’s photos into a joyful personal celebration film. Mark a birthday, the day you became family, or a special moment worth sharing."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={contact} className={button}>{ko ? "축하영상 무료 상담받기" : "Discuss your celebration"}</Link>
            <Link href="#celebration-concept" className="inline-flex min-h-12 items-center rounded-full border border-[#cbb39b] px-7 py-3.5 text-base font-bold text-[#6f4e37] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]">{ko ? "제작 컨셉 보기" : "Explore the concept"}</Link>
          </div>
          <p className="mt-5 text-sm leading-7 text-[#76685d]">{ko ? "99,000원부터 · 사진과 원하는 수령일을 먼저 상담해 주세요." : "Custom production · Contact us with photos and your preferred delivery date."}</p>
        </div>
        <figure className="mx-auto w-full max-w-[390px]">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[36px] border-8 border-white shadow-xl shadow-[#6f4e37]/15">
            <Image src="/images/services/pet-celebration-garden.jpg" alt={ko ? "풍선과 케이크로 꾸민 햇살 가득한 정원에서 생일을 축하하는 푸들 컨셉 이미지" : "A poodle celebrating in a sunlit garden with balloons and a birthday cake"} fill priority sizes="(min-width: 1024px) 390px, 90vw" className="object-cover" />
          </div>
          <figcaption className="mt-4 text-center text-sm leading-6 text-[#76685d]">{ko ? "AI 제작 컨셉 이미지 · 완성 영상은 준비 중입니다." : "AI concept artwork · Sample film in preparation."}</figcaption>
        </figure>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20" aria-labelledby="celebration-occasions">
      <h2 id="celebration-occasions" className="text-3xl font-black md:text-4xl">{ko ? "함께 축하하고 싶은 모든 순간" : "For the moments you celebrate together"}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{occasions.map(([title, text]) => <article key={title} className="rounded-3xl border border-[#eadfce] bg-white p-7"><h3 className="text-xl font-bold">{title}</h3><p className="mt-4 text-base leading-8 text-[#76685d]">{text}</p></article>)}</div>
    </section>

    <section id="celebration-concept" className="scroll-mt-28 border-y border-[#eadfce] bg-[#fff0dc] px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="text-sm font-bold tracking-[.18em] text-[#805a3e]">GARDEN BIRTHDAY PARTY</p><h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">{ko ? <>햇살 가득한 정원,<br />우리 아이의 작은 파티</> : <>A sunny garden.<br />Your pet’s very own party.</>}</h2><p className="mt-5 text-lg leading-8 text-[#76685d]">{ko ? "따뜻한 햇살, 살랑이는 풍선, 작은 케이크. 과한 연출보다 아이의 눈빛과 표정이 돋보이는 축하영상 컨셉입니다." : "Golden sunlight, gently swaying balloons and a little cake. A joyful concept that puts your pet’s expression at the heart of the story."}</p><p className="mt-4 text-sm leading-7 text-[#76685d]">{ko ? "아래는 제작 방향 예시입니다. 장면 수와 길이는 선택한 상품 및 상담에 따라 달라집니다." : "This is a proposed story direction. Scene count and runtime depend on the selected package and consultation."}</p></div>
        <ol className="space-y-4">{scenes.map(([title, text]) => <li key={title} className="rounded-3xl bg-white/90 p-6"><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-base leading-8 text-[#76685d]">{text}</p></li>)}</ol>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20"><h2 className="text-3xl font-black md:text-4xl">{ko ? "사진에서 시작하는 특별한 선물" : "A special gift, starting with a photo"}</h2><ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([title, text]) => <li key={title} className="border-t-2 border-[#d7b98f] pt-6"><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-base leading-8 text-[#76685d]">{text}</p></li>)}</ol></section>

    {ko ? <VideoPricingSection description="짧은 축하 인사부터 여러 장면으로 구성한 생일·입양 기념 영상까지, 원하는 이야기에 맞춰 선택하세요." ctaHref={contact} ctaLabel="축하영상 무료 상담받기" /> : null}

    <section className="mx-auto max-w-4xl px-6 py-16 md:py-20"><h2 className="text-3xl font-black md:text-4xl">{ko ? "자주 묻는 질문" : "Frequently asked questions"}</h2><div className="mt-8 divide-y divide-[#eadfce] rounded-3xl border border-[#eadfce] bg-white px-6">{faqs.map(([question, answer]) => <details key={question} className="py-6"><summary className="cursor-pointer text-lg font-bold marker:text-[#a67c52]">{question}</summary><p className="mt-4 text-base leading-8 text-[#76685d]">{answer}</p></details>)}</div></section>

    <section className="bg-[#6f4e37] px-6 py-16 text-center text-white"><h2 className="text-3xl font-black md:text-4xl">{ko ? "이번 기념일엔, 우리 아이가 주인공." : "Make your pet the star of the celebration."}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f6eee4]">{ko ? "아이 이름과 사진, 축하할 날짜를 알려주세요. 어울리는 이야기부터 함께 정해 드릴게요." : "Share your pet’s name, photos and the occasion date. We’ll help shape a story that feels personal."}</p><Link href={contact} className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#6f4e37] hover:bg-[#fff0dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#6f4e37]">{ko ? "축하영상 제작 문의하기" : "Enquire about a celebration film"}</Link></section>
  </main>;
}
