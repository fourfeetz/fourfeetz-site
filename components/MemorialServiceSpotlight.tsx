import Image from "next/image";
import Link from "next/link";

type MemorialServiceSpotlightProps = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  imageAlt: string;
};

export default function MemorialServiceSpotlight({
  eyebrow,
  title,
  description,
  buttonLabel,
  href,
  imageAlt,
}: MemorialServiceSpotlightProps) {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[40px] border border-[#eadfce] bg-[#f3e9df] shadow-sm md:grid-cols-[0.88fr_1.12fr] md:items-stretch">
        <div className="relative min-h-[340px] overflow-hidden md:min-h-[460px]">
          <Image
            src="/images/services/pet-memorial-heavenly-steps-cover.jpg"
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 44vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3f2c20]/20 to-transparent" aria-hidden="true" />
        </div>
        <div className="flex flex-col justify-center px-7 py-12 md:px-12 md:py-16 lg:px-16">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c52]">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-[#2b2119] md:text-5xl">{title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">{description}</p>
          <Link href={href} className="mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-[#6f4e37] px-7 py-4 font-black text-white shadow-lg shadow-[#6f4e37]/15 transition hover:bg-[#573b29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52] focus-visible:ring-offset-2">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
