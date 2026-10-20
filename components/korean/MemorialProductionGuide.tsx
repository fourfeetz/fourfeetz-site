import { BadgeCheck, MessageCircleHeart, WalletCards } from "lucide-react";

const process = [
  "상담 및 제작 방향 확인",
  "반려동물 사진 및 자료 전달",
  "스토리와 구성 확인",
  "계약금 결제",
  "AI 영상 제작",
  "워터마크 시안 전달",
  "수정 및 최종 확인",
  "잔금 결제",
  "워터마크 없는 고화질 원본 전달",
];

const photoGuide = [
  "얼굴 정면 사진",
  "전신이 잘 보이는 사진",
  "좌우 측면 사진",
  "털색과 무늬가 선명하게 보이는 사진",
  "평소 착용하던 옷·목걸이·액세서리가 보이는 사진",
  "여러 반려동물이 등장하는 경우 각각의 사진",
  "가장 닮게 표현하고 싶은 대표 사진 1장",
];

export function MemorialProductionGuide() {
  return (
    <>
      <section className="border-y border-[#eee5dd] bg-white px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1260px]">
          <p className="text-sm font-bold tracking-[.2em] text-[#a17859]">HOW WE MAKE IT</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] md:text-5xl">제작 진행 과정</h2>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#746d67]">
            소중한 아이의 모습을 충분히 확인한 후 제작을 시작합니다. 완성된 시안은 워터마크가 포함된 상태로 먼저 전달드리며, 수정 및 최종 확인 후 잔금 결제가 완료되면 워터마크 없는 고화질 원본 영상을 전달드립니다.
          </p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <li key={step} className="flex min-h-28 gap-4 rounded-[24px] border border-[#ece3da] bg-[#fdfbf8] p-5 shadow-[0_8px_24px_rgba(80,57,37,.035)]">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#8b6548] text-sm font-black text-white">{String(index + 1).padStart(2, "0")}</span>
                <p className="self-center font-bold leading-7 text-[#4e4944]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1260px] gap-6 lg:grid-cols-[1.08fr_.92fr]">
          <article className="rounded-[30px] border border-[#ece3da] bg-white p-7 shadow-[0_8px_24px_rgba(80,57,37,.035)] md:p-9">
            <div className="flex items-center gap-3 text-[#7b573d]"><BadgeCheck className="size-7" aria-hidden="true" /><p className="text-sm font-bold tracking-[.16em]">PHOTO GUIDE</p></div>
            <h2 className="mt-5 font-serif text-3xl font-semibold tracking-[-0.03em] md:text-4xl">어떤 사진을 보내면 좋을까요?</h2>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {photoGuide.map((item) => <li key={item} className="flex gap-3 leading-7 text-[#706963]"><BadgeCheck className="mt-1 size-5 shrink-0 text-[#a17859]" aria-hidden="true" />{item}</li>)}
            </ul>
            <p className="mt-7 rounded-2xl bg-[#f7f0e8] px-5 py-4 leading-7 text-[#706963]">사진은 많을수록 아이의 특징을 파악하는 데 도움이 됩니다. 가능하면 밝고 선명한 원본 사진을 보내주세요.</p>
          </article>

          <div className="space-y-6">
            <details className="group rounded-[30px] border border-[#ece3da] bg-white p-7 shadow-[0_8px_24px_rgba(80,57,37,.035)] md:p-8" open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-2xl font-semibold text-[#2d2925] marker:content-none">AI 영상 제작 안내<span className="text-3xl text-[#a17859] transition group-open:rotate-45" aria-hidden="true">+</span></summary>
              <div className="mt-6 space-y-4 leading-8 text-[#706963]">
                <p>FourFeetz는 고객님이 보내주신 사진을 참고하여 AI 기술로 반려동물의 모습을 영상으로 재현합니다.</p>
                <p>AI 영상의 특성상 원본 사진과 100% 동일하게 재현되지는 않을 수 있으며, 털의 형태, 표정, 움직임, 액세서리 등에 미세한 차이가 발생할 수 있습니다.</p>
                <p>여러 반려동물이 동시에 등장하거나 새로운 캐릭터가 추가되는 경우 영상 생성 과정에서 모습의 일관성이 낮아질 수 있습니다.</p>
                <p>전달받은 사진을 최대한 참고하여 아이의 특징과 분위기를 자연스럽게 표현하도록 제작합니다.</p>
              </div>
            </details>
            <article className="rounded-[30px] bg-[#8b6548] p-7 text-white shadow-[0_12px_34px_rgba(91,65,43,.14)] md:p-8">
              <div className="flex items-center gap-3"><MessageCircleHeart className="size-7" aria-hidden="true" /><p className="text-sm font-bold tracking-[.16em] text-[#f5eade]">OPTION</p></div>
              <h2 className="mt-5 font-serif text-2xl font-semibold">AI 음성 메시지</h2>
              <p className="mt-4 leading-8 text-[#f5eade]">보호자에게 전하고 싶은 마지막 메시지를 영상 속 따뜻한 AI 음성으로 표현할 수 있습니다.</p>
              <p className="mt-5 border-l-2 border-white/50 pl-4 font-serif italic leading-7 text-white/90">“나는 잘 지내고 있어. 너무 걱정하지 마. 사랑해 엄마!”</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eee5dd] bg-white px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1260px] rounded-[30px] bg-[#f7f0e8] p-7 md:p-10">
          <div className="flex items-center gap-3 text-[#7b573d]"><WalletCards className="size-7" aria-hidden="true" /><p className="text-sm font-bold tracking-[.16em]">PAYMENT & DELIVERY</p></div>
          <h2 className="mt-5 font-serif text-3xl font-semibold tracking-[-0.03em] md:text-4xl">결제 및 최종 전달 과정</h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["계약금 결제", "영상 제작", "워터마크 시안 확인", "수정 및 최종 승인", "잔금 결제", "고화질 원본 전달"].map((step, index) => <li key={step} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 font-bold text-[#5f5953]"><span className="text-sm font-black text-[#a17859]">{String(index + 1).padStart(2, "0")}</span>{step}</li>)}
          </ol>
          <p className="mt-7 max-w-3xl leading-8 text-[#706963]">제작 확정 후 계약금 50,000원을 입금해주시면 제작이 시작됩니다. 최종 시안 확인 후 잔금을 결제해주시면 워터마크 없는 고화질 원본을 전달드립니다.</p>
          <p className="mt-4 text-sm leading-6 text-[#8a8179]">맞춤형 디지털 콘텐츠의 취소·환불 기준은 별도 정책 검토 및 고지 후 안내됩니다.</p>
        </div>
      </section>
    </>
  );
}
