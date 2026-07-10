type PageHeroProps = {
  eyebrow: string;
  title: string;
  desc: string;
};

export default function PageHero({ eyebrow, title, desc }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl whitespace-pre-line text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#76685d]">{desc}</p>
    </section>
  );
}
