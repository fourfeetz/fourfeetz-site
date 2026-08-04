import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { characterDetails } from "@/lib/characterDetails";

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Original Character Universe"
        title="Characters"
        desc="Meet the original characters of FourFeetz, each with a unique personality and story."
        illustration={{
          src: "/images/characters-hero-v2.png",
          alt: "FourFeetz original character studio illustration",
        }}
      />

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {characterDetails.map((character) => {
            const portrait = character.gallery[0]?.image;
            return (
              <Link
                key={character.slug}
                href={`/characters/${character.slug}`}
                className="group flex h-full min-h-[520px] flex-col rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37] focus-visible:ring-offset-2"
              >
                <div className="overflow-hidden rounded-2xl bg-[#fffaf4]">
                  {portrait ? (
                    <Image
                      src={portrait}
                      alt={`${character.name} character portrait`}
                      width={640}
                      height={640}
                      className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="grid aspect-square place-items-center bg-[radial-gradient(circle_at_top_left,rgba(214,179,134,0.45),transparent_55%),#fffaf4] p-6 text-center">
                      <div>
                        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#a67c52]">Official portrait coming soon</p>
                        <p className="mt-4 text-4xl font-black text-[#6f4e37]">{character.name}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col px-1 py-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{character.featured ? "Featured Character" : "Original Character"}</p>
                  <h2 className="mt-3 text-3xl font-black text-[#2b2119]">{character.name}</h2>
                  <p className="mt-2 text-sm font-black text-[#6f4e37]">{character.species}</p>
                  <p className="mt-4 leading-7 text-[#76685d]">{character.tagline}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
