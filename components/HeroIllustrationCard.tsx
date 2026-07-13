import Image from "next/image";

type HeroIllustrationCardProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function HeroIllustrationCard({ src, alt, priority = false }: HeroIllustrationCardProps) {
  return (
    <div className="mx-auto flex aspect-[4/3] w-full max-w-full items-center justify-center overflow-hidden rounded-[32px] bg-white p-5 shadow-xl shadow-[#6f4e37]/10 md:max-w-[480px] lg:max-w-[560px]">
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 560px, (min-width: 768px) 480px, 100vw"
          className="h-full w-full object-contain object-center"
        />
      </div>
    </div>
  );
}
