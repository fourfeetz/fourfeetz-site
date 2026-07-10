import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio | FourFeetz Studios",
  description:
    "FourFeetz Studios creates original AI films, memorable characters, music, and creative knowledge for storytellers around the world.",
};

const philosophy = [
  {
    icon: "01",
    title: "Story First",
    desc: "Technology serves the emotion. Every project begins with a memorable idea.",
  },
  {
    icon: "02",
    title: "AI as a Creative Tool",
    desc: "We use AI to explore, prototype, and produce with more imagination and care.",
  },
  {
    icon: "03",
    title: "Characters Matter",
    desc: "Original characters give each film a heartbeat, a voice, and a world to grow into.",
  },
];

const workflow = ["Story", "Reference", "Animation", "Voice", "Music", "Publishing"];
const tools = ["ChatGPT", "Runway", "Kling", "Suno", "CapCut"];
const contacts = [
  { label: "Email", href: "mailto:hello@fourfeetz.com" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "X", href: "#" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-black uppercase tracking-[0.35em] text-[#a67c52]">{children}</p>;
}

export default function Page() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionLabel>FOURFEETZ STUDIOS</SectionLabel>
        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight tracking-tight text-[#2b2119] md:text-7xl">
          Creating original AI stories that people remember.
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[#76685d] md:text-xl md:leading-9">
          FourFeetz Studios creates original AI films, memorable characters, music, and creative knowledge for storytellers around the world.
        </p>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.45fr_0.55fr] md:items-start">
          <SectionLabel>Our Mission</SectionLabel>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#2b2119] md:text-6xl">Our Mission</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#76685d]">
              We build a small universe of original AI stories with clarity, taste, and emotional detail, helping creators see how new tools can become lasting media.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionLabel>Philosophy</SectionLabel>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {philosophy.map((item) => (
            <article key={item.title} className="rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <span className="grid size-12 place-items-center rounded-full bg-[#f7f2ea] text-sm font-black text-[#6f4e37]">{item.icon}</span>
              <h3 className="mt-8 text-2xl font-black tracking-tight text-[#2b2119]">{item.title}</h3>
              <p className="mt-4 leading-7 text-[#76685d]">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Workflow</SectionLabel>
          <div className="mt-10 grid gap-3 md:grid-cols-6">
            {workflow.map((step, index) => (
              <div key={step} className="relative rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-black text-[#2b2119]">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionLabel>Tools</SectionLabel>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((tool) => (
            <div key={tool} className="rounded-3xl border border-[#eadfce] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6f4e37]/10">
              <span className="block text-xs font-black uppercase tracking-[0.24em] text-[#a67c52]">Tool</span>
              <h3 className="mt-4 text-2xl font-black text-[#2b2119]">{tool}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-[#eadfce] bg-white p-8 shadow-xl shadow-[#6f4e37]/10 md:p-12">
          <SectionLabel>Contact</SectionLabel>
          <div className="mt-8 flex flex-wrap gap-3">
            {contacts.map((contact) => (
              <Link
                key={contact.label}
                href={contact.href}
                aria-label={`Open ${contact.label}`}
                className="rounded-full border border-[#6f4e37]/30 bg-[#fffdf8] px-6 py-3 text-sm font-black text-[#6f4e37] transition hover:-translate-y-0.5 hover:border-[#6f4e37] hover:bg-[#6f4e37] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]"
              >
                {contact.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
