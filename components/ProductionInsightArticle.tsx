import Image from "next/image";
import Link from "next/link";
import type { ProductionInsight, ProductionInsightSection } from "@/lib/productionInsights";

const siteUrl = "https://www.fourfeetz.com";

function JsonLd({ value }: { value: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />;
}

function ProductionDiagram({ type }: { type: NonNullable<ProductionInsightSection["visual"]> }) {
  const items = type === "consistency"
    ? ["Silhouette", "Face", "Fur", "Collar", "Scale", "Behavior"]
    : type === "camera"
      ? ["Wide · World", "Medium · Action", "Close · Feeling"]
      : type === "timeline"
        ? ["Vision", "Design", "Motion", "Edit", "Publish"]
        : ["Brief", "Reference", "Test", "Review", "Finish"];

  return (
    <figure className="my-9 rounded-[28px] border border-[#dfcfbd] bg-[#2b2119] p-6 text-white shadow-xl shadow-[#6f4e37]/10 md:p-8">
      <figcaption className="text-xs font-black uppercase tracking-[0.22em] text-[#e5bd91]">
        {type === "camera" ? "Camera distance diagram" : type === "consistency" ? "Character review diagram" : "Production workflow diagram"}
      </figcaption>
      <div className={`mt-6 grid gap-3 ${items.length >= 5 ? "md:grid-cols-5" : "md:grid-cols-3"}`}>
        {items.map((item, index) => (
          <div key={item} className="relative rounded-2xl border border-white/15 bg-white/10 px-4 py-5 text-center text-sm font-black uppercase tracking-[0.12em]">
            <span className="mb-2 block text-[10px] text-[#e5bd91]">0{index + 1}</span>
            {item}
            {index < items.length - 1 ? <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#e5bd91] md:block">→</span> : null}
          </div>
        ))}
      </div>
    </figure>
  );
}

function ArticleSection({ section }: { section: ProductionInsightSection }) {
  return (
    <section id={section.id} className="scroll-mt-28 border-t border-[#eadfce] py-12 first:border-t-0 first:pt-0 md:py-16">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">FourFeetz production notes</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-[#2b2119] md:text-5xl">{section.title}</h2>
      <div className="mt-7 space-y-6 text-lg leading-8 text-[#665a50]">
        {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 72)}>{paragraph}</p>)}
      </div>
      {section.note ? (
        <aside className="my-9 rounded-[28px] border border-[#d8c3ad] bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">From the studio</p>
          <p className="mt-4 text-lg font-bold leading-8 text-[#2b2119]">{section.note}</p>
        </aside>
      ) : null}
      {section.prompt ? (
        <div className="my-9 rounded-[28px] border border-[#d8c3ad] bg-[#2b2119] p-6 shadow-xl md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e5bd91]">Educational example · not our proprietary master prompt</p>
          <pre className="mt-5 overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-7 text-[#fff8ef]"><code>{section.prompt}</code></pre>
        </div>
      ) : null}
      {section.visual ? <ProductionDiagram type={section.visual} /> : null}
      {section.images ? (
        <div className={`my-9 grid gap-5 ${section.images.length > 1 ? "md:grid-cols-2" : ""}`}>
          {section.images.map((image, index) => (
            <figure key={`${image.src}-${index}`} className={section.images!.length === 3 && index === 0 ? "md:col-span-2" : ""}>
              <div className={`relative overflow-hidden rounded-[26px] border border-[#eadfce] ${image.fit === "contain" ? "bg-white" : "bg-[#eadfce]"} ${image.aspect === "video" ? "aspect-video" : image.aspect === "landscape" ? "aspect-[3/2]" : "aspect-[4/3]"}`}>
                <a href={image.src} target="_blank" rel="noreferrer" aria-label={`View full-size image: ${image.alt}`} className="group relative block h-full w-full">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 760px" className={`${image.fit === "contain" ? "object-contain" : "object-cover"} transition duration-300 group-hover:scale-[1.01]`} style={{ objectPosition: image.position ?? "50% 50%" }} />
                  <span className="absolute bottom-3 right-3 rounded-full border border-white/70 bg-[#2b2119]/85 px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-sm">View full size</span>
                </a>
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-[#76685d]">{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}
      {section.table ? (
        <div className="my-9 overflow-hidden rounded-[28px] border border-[#d8c3ad] bg-white shadow-sm">
          <h3 className="px-6 pt-6 text-xl font-black text-[#2b2119] md:px-8 md:pt-8">{section.table.title}</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead className="bg-[#f2e8dc] text-[#2b2119]"><tr>{section.table.headers.map((header) => <th key={header} className="px-6 py-4 font-black">{header}</th>)}</tr></thead>
              <tbody>{section.table.rows.map((row) => <tr key={row.join("-")} className="border-t border-[#eadfce]">{row.map((cell) => <td key={cell} className="px-6 py-4 leading-6 text-[#665a50]">{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default function ProductionInsightArticle({ article }: { article: ProductionInsight }) {
  const canonical = `${siteUrl}/insights/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${siteUrl}${article.hero}`,
    datePublished: article.published,
    dateModified: article.updated,
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "FourFeetz Studios", url: siteUrl },
    publisher: { "@type": "Organization", name: "FourFeetz Studios", url: siteUrl },
    keywords: article.keywords.join(", "),
    about: article.tags,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${siteUrl}/insights` },
      { "@type": "ListItem", position: 3, name: article.shortTitle, item: canonical },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };
  const related = article.related ?? [
    { label: "Related Film", title: "HARU: First Journey", href: "/works/haru-first-journey" },
    { label: "Related Shorts", title: "HARU Shorts", href: "/shorts" },
    { label: "Related Music", title: "The Sound of HARU", href: "/music" },
    { label: "Related Character", title: "Meet HARU", href: "/characters/haru" },
  ];

  return (
    <main className="bg-[#fffdf8]">
      <JsonLd value={articleSchema} />
      <JsonLd value={breadcrumbSchema} />
      <JsonLd value={faqSchema} />
      <article>
        <header className="mx-auto max-w-5xl px-6 pb-12 pt-16 md:pb-16 md:pt-24">
          <nav aria-label="Breadcrumb" className="text-sm font-bold text-[#8a7768]"><Link href="/" className="hover:text-[#6f4e37]">Home</Link><span className="px-2">/</span><Link href="/insights" className="hover:text-[#6f4e37]">Insights</Link><span className="px-2">/</span><span>{article.shortTitle}</span></nav>
          <p className="mt-10 text-xs font-black uppercase tracking-[0.28em] text-[#a67c52]">{article.eyebrow} · {article.category}</p>
          <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.045em] text-[#2b2119] md:text-7xl">{article.title}</h1>
          <p className="mt-7 max-w-4xl text-xl leading-9 text-[#665a50]">{article.description}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">{article.readTime}</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">Updated {article.updated}</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">FourFeetz Studios</span>
          </div>
          <figure className="mt-10 overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#eadfce] shadow-2xl shadow-[#6f4e37]/10">
            <Image src={article.hero} alt={`${article.shortTitle} hero artwork featuring the HARU production world`} width={1600} height={900} priority className="aspect-video h-auto w-full object-cover" />
          </figure>
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="hidden lg:block"><div className="sticky top-28 rounded-[24px] border border-[#eadfce] bg-white p-5 shadow-sm"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#a67c52]">Table of contents</p><nav className="mt-4 grid gap-1">{article.sections.map((section) => <a key={section.id} href={`#${section.id}`} className="rounded-xl px-3 py-2 text-sm font-bold leading-5 text-[#76685d] hover:bg-[#f2e8dc] hover:text-[#2b2119]">{section.title}</a>)}<a href="#faq" className="rounded-xl px-3 py-2 text-sm font-bold text-[#76685d] hover:bg-[#f2e8dc] hover:text-[#2b2119]">FAQ</a></nav></div></aside>
          <div className="min-w-0">
            <section className="mb-12 rounded-[30px] border border-[#d8c3ad] bg-[#f2e8dc] p-7 md:p-9"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">Quick verdict</p><p className="mt-4 text-xl font-bold leading-9 text-[#2b2119] md:text-2xl">{article.verdict}</p></section>
            {article.sections.map((section) => <ArticleSection key={section.id} section={section} />)}
            <section id="faq" className="scroll-mt-28 border-t border-[#eadfce] py-16"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">FAQ</p><h2 className="mt-3 text-3xl font-black text-[#2b2119] md:text-5xl">Questions creators ask us</h2><div className="mt-8 space-y-3">{article.faqs.map((faq) => <details key={faq.question} className="rounded-2xl border border-[#eadfce] bg-white p-5"><summary className="cursor-pointer font-black text-[#2b2119]">{faq.question}</summary><p className="mt-4 leading-7 text-[#665a50]">{faq.answer}</p></details>)}</div></section>
          </div>
        </div>

        <section className="border-t border-[#eadfce] bg-[#f2e8dc]/65 px-6 py-16"><div className="mx-auto max-w-6xl"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">Continue in the HARU world</p><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <Link key={item.href} href={item.href} className="rounded-[24px] border border-[#dfcfbd] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><span className="text-xs font-black uppercase tracking-[0.16em] text-[#a67c52]">{item.label}</span><strong className="mt-3 block text-lg text-[#2b2119]">{item.title}</strong></Link>)}</div></div></section>
      </article>
    </main>
  );
}
