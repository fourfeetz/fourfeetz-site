import Image from "next/image";
import Link from "next/link";
import { toolNewsInsights, type ToolNewsInsight } from "@/lib/toolNewsInsights";

const siteUrl = "https://fourfeetz.com";

function JsonLd({ value }: { value: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 space-y-3 rounded-[28px] border border-[#eadfce] bg-white p-6 shadow-sm md:p-8">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-[#665a50]">
          <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-[#a67c52]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ToolNewsInsightArticle({ article }: { article: ToolNewsInsight }) {
  const canonical = `${siteUrl}/insights/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.description,
    image: `${siteUrl}${article.hero}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "FourFeetz Studios", url: siteUrl },
    publisher: { "@type": "Organization", name: "FourFeetz Studios", url: siteUrl },
    citation: article.source.url,
    keywords: article.keywords.join(", "),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${siteUrl}/insights` },
      { "@type": "ListItem", position: 3, name: "Studio Analysis / Tool Updates", item: `${siteUrl}/insights/news` },
      { "@type": "ListItem", position: 4, name: article.shortTitle, item: canonical },
    ],
  };
  const related = Object.values(toolNewsInsights).filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <main className="bg-[#fffdf8]">
      <JsonLd value={articleSchema} />
      <JsonLd value={breadcrumbSchema} />
      <article>
        <header className="mx-auto max-w-5xl px-6 pb-12 pt-16 md:pb-16 md:pt-24">
          <nav aria-label="Breadcrumb" className="text-sm font-bold text-[#8a7768]">
            <Link href="/" className="hover:text-[#6f4e37]">Home</Link>
            <span className="px-2">/</span>
            <Link href="/insights" className="hover:text-[#6f4e37]">Insights</Link>
            <span className="px-2">/</span>
            <Link href="/insights/news" className="hover:text-[#6f4e37]">Studio Analysis / Tool Updates</Link>
            <span className="px-2">/</span>
            <span>{article.shortTitle}</span>
          </nav>
          <p className="mt-10 text-xs font-black uppercase tracking-[0.28em] text-[#a67c52]">AI Tool Watch · {article.category}</p>
          <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.045em] text-[#2b2119] md:text-7xl">{article.title}</h1>
          <p className="mt-7 max-w-4xl text-xl leading-9 text-[#665a50]">{article.description}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-[#6f4e37]">
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">{article.readTime}</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">Published {article.publishedAt}</span>
            <span className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2">Official source checked</span>
            <Link href="/about" className="rounded-full border border-[#d8c3ad] bg-white px-4 py-2 underline decoration-[#d8c3ad] underline-offset-4">FourFeetz Studios</Link>
          </div>
          <figure className="mt-10 overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#eadfce] shadow-2xl shadow-[#6f4e37]/10">
            <Image src={article.hero} alt={`${article.shortTitle} editorial workflow illustration`} width={1664} height={936} priority className="aspect-video h-auto w-full object-cover" />
          </figure>
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[24px] border border-[#eadfce] bg-white p-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a67c52]">On this page</p>
              <nav className="mt-4 grid gap-1">
                <a href="#source" className="rounded-xl px-3 py-2 text-sm font-bold text-[#76685d] hover:bg-[#f2e8dc]">Source and scope</a>
                <a href="#confirmed" className="rounded-xl px-3 py-2 text-sm font-bold text-[#76685d] hover:bg-[#f2e8dc]">Confirmed</a>
                <a href="#open-questions" className="rounded-xl px-3 py-2 text-sm font-bold text-[#76685d] hover:bg-[#f2e8dc]">Open questions</a>
                {article.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="rounded-xl px-3 py-2 text-sm font-bold leading-5 text-[#76685d] hover:bg-[#f2e8dc]">{section.title}</a>
                ))}
                <a href="#checklist" className="rounded-xl px-3 py-2 text-sm font-bold text-[#76685d] hover:bg-[#f2e8dc]">Adoption checklist</a>
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            <section className="rounded-[30px] border border-[#d8c3ad] bg-[#f2e8dc] p-7 md:p-9">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">FourFeetz verdict</p>
              <p className="mt-4 text-xl font-bold leading-9 text-[#2b2119] md:text-2xl">{article.verdict}</p>
            </section>

            <section id="source" className="scroll-mt-28 border-b border-[#eadfce] py-12 md:py-16">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">Primary source</p>
              <h2 className="mt-3 text-3xl font-black text-[#2b2119] md:text-5xl">What this article is based on</h2>
              <div className="mt-7 rounded-[28px] border border-[#eadfce] bg-white p-6 shadow-sm md:p-8">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#a67c52]">{article.source.publisher} · {article.source.publishedAt}</p>
                <h3 className="mt-3 text-2xl font-black text-[#2b2119]">{article.source.title}</h3>
                <p className="mt-4 leading-7 text-[#665a50]">Feature claims below are taken from the official announcement. Production implications and cautions are FourFeetz analysis, not claims made by the vendor.</p>
                <a href={article.source.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-[#6f4e37] px-5 py-3 text-sm font-black text-white">Read official announcement ↗</a>
              </div>
            </section>

            <section id="confirmed" className="scroll-mt-28 border-b border-[#eadfce] py-12 md:py-16">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">Confirmed in the announcement</p>
              <h2 className="mt-3 text-3xl font-black text-[#2b2119] md:text-5xl">What actually shipped or was announced</h2>
              <BulletList items={article.confirmed} />
            </section>

            <section id="open-questions" className="scroll-mt-28 border-b border-[#eadfce] py-12 md:py-16">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">Reality check</p>
              <h2 className="mt-3 text-3xl font-black text-[#2b2119] md:text-5xl">What the announcement does not prove</h2>
              <BulletList items={article.notYetProven} />
            </section>

            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-[#eadfce] py-12 md:py-16">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">FourFeetz analysis</p>
                <h2 className="mt-3 text-3xl font-black text-[#2b2119] md:text-5xl">{section.title}</h2>
                <div className="mt-7 space-y-6 text-lg leading-8 text-[#665a50]">
                  {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 80)}>{paragraph}</p>)}
                </div>
                {section.bullets ? <BulletList items={section.bullets} /> : null}
              </section>
            ))}

            <section id="checklist" className="scroll-mt-28 py-12 md:py-16">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">Before adoption</p>
              <h2 className="mt-3 text-3xl font-black text-[#2b2119] md:text-5xl">Production checklist</h2>
              <ol className="mt-8 grid gap-3">
                {article.checklist.map((item, index) => (
                  <li key={item} className="grid grid-cols-[44px_1fr] gap-4 rounded-2xl border border-[#eadfce] bg-white p-5 text-base leading-7 text-[#665a50] shadow-sm">
                    <span className="grid size-11 place-items-center rounded-full bg-[#6f4e37] text-sm font-black text-white">{index + 1}</span>
                    <span className="self-center">{item}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
        <section className="border-t border-[#eadfce] bg-[#f2e8dc]/65 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c52]">Related analysis</p>
                <h2 className="mt-3 text-3xl font-black text-[#2b2119]">More AI Tool Updates</h2>
              </div>
              <Link href="/insights/news" className="font-black text-[#6f4e37]">All Studio Analysis →</Link>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/insights/${item.slug}`} className="rounded-[24px] border border-[#dfcfbd] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-[#a67c52]">AI Tool Update</span>
                  <strong className="mt-3 block text-lg text-[#2b2119]">{item.shortTitle}</strong>
                  <span className="mt-3 block leading-7 text-[#76685d]">{item.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
