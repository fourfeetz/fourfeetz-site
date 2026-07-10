import PageHero from "@/components/PageHero";

const characterDescriptions: Record<string, string> = {
  HARU: "Jindo Puppy. Gentle, curious, and brave.",
  PORI: "Poodle. Happy, playful, and full of energy.",
  LUNA: "Norwegian Forest Cat. Calm, elegant, and a little mysterious.",
  HUGO: "Highland Cattle. Gentle, warm-hearted, and always relaxed.",
  OLI: "Otter. Curious, clever, and loves adventure.",
  MILO: "Puppy. Playful, optimistic, and always hungry.",
};

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="Original Character" title="HARU" desc={characterDescriptions.HARU} />
    </main>
  );
}
