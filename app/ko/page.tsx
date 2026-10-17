import type { Metadata } from "next";
import KoreanSalesHome from "@/components/korean/KoreanSalesHome";
import Link from "next/link";
import { getNewsArticles } from "@/lib/news";
import { languageAlternates } from "@/lib/localization";

const title = "FourFeetz | 반려동물 맞춤 영상·콘텐츠 제작 스튜디오";
const description = "반려동물 사진과 이야기를 감성적인 맞춤 영상과 디지털 작품으로 만들고, 반려동물 업체용 홍보 콘텐츠를 제작하는 FourFeetz Studios입니다.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: languageAlternates("/en", "/ko"),
  openGraph: {
    type: "website",
    siteName: "FourFeetz Studios",
    title,
    description,
    url: "/ko",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [{ url: "/images/studio-hero-v2.png", alt: "FourFeetz 오리지널 동물 캐릭터 스튜디오" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/studio-hero-v2.png"] },
};

export default function Page() {
  const articles = getNewsArticles().slice(0, 3);
  const newsSection = <section className="border-y border-[#eadfce] bg-white px-6 py-20">
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-black uppercase tracking-[.25em] text-[#a67c52]">FourFeetz Editorial Desk</p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <div><h2 className="text-4xl font-black text-[#2b2119] md:text-5xl">최신 뉴스</h2>
        <p className="mt-4 text-lg text-[#76685d]">반려동물 산업·펫테크·AI 분야의 검증된 소식입니다.</p></div>
        <Link href="/ko/news" className="font-black text-[#6f4e37] hover:underline">뉴스 전체 보기 →</Link>
      </div>
      {articles.length ? <div className="mt-8 grid gap-5 md:grid-cols-3">{articles.map(article => <Link key={article.slug} href={`/ko/news/${article.slug}`} className="rounded-3xl border border-[#eadfce] bg-[#fffdf8] p-6 shadow-sm transition hover:shadow-md">
        <p className="text-xs font-bold text-[#a67c52]">{new Intl.DateTimeFormat("ko-KR", {dateStyle:"medium"}).format(new Date(article.publishedAt))}</p>
        <h3 className="mt-4 text-xl font-black leading-snug text-[#2b2119]">{article.title}</h3>
        <p className="mt-3 line-clamp-3 text-[#76685d]">{article.description}</p>
        <span className="mt-5 inline-block font-bold text-[#6f4e37]">기사 읽기 →</span>
      </Link>)}</div> : <p className="mt-8 text-[#76685d]">현재 검증된 뉴스가 없습니다.</p>}
    </div>
  </section>;
  return <KoreanSalesHome newsSection={newsSection} />;
}
