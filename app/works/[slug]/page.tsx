import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FilmDetailPage from "@/components/FilmDetailPage";
import { films, getFilm } from "@/lib/films";
import { englishLanguageAlternates } from "@/lib/localization";
import { createVideoStructuredData } from "@/lib/videoStructuredData";

type FilmPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return films.map((film) => ({ slug: film.slug }));
}

export async function generateMetadata({ params }: FilmPageProps): Promise<Metadata> {
  const { slug } = await params;
  const film = getFilm(slug);
  if (!film) return {};

  const title = `${film.title} | FourFeetz Studios`;
  const path = `/works/${film.slug}`;

  return {
    title: { absolute: title },
    description: film.description,
    alternates: englishLanguageAlternates(path, `/ko/films/${film.slug}`),
    openGraph: {
      type: "video.movie",
      title,
      description: film.description,
      url: path,
      images: [{ url: film.thumbnail, alt: `${film.title} film thumbnail` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: film.description,
      images: [film.thumbnail],
    },
  };
}

export default async function Page({ params }: FilmPageProps) {
  const { slug } = await params;
  const film = getFilm(slug);
  if (!film) notFound();

  const videoSchema = film.uploadDate
    ? createVideoStructuredData({
        canonicalPath: `/works/${film.slug}`,
        contentUrl: film.video,
        description: film.description,
        duration: film.duration,
        inLanguage: film.language === "No Dialogue" || film.language === "Music & Ambience" ? "zxx" : "en",
        name: film.title,
        thumbnailUrl: film.thumbnail,
        uploadDate: film.uploadDate,
      })
    : null;

  return <>
    {videoSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema).replace(/</g, "\\u003c") }} /> : null}
    <FilmDetailPage film={film} />
  </>;
}
