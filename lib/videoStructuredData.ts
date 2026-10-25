const baseUrl = "https://fourfeetz.com";

export function absoluteSiteUrl(path: string) {
  return new URL(path, baseUrl).toString();
}

export function videoDurationToIso8601(duration: string) {
  const hours = Number(duration.match(/([\d.]+)\s*h(?:our)?s?/i)?.[1] ?? 0);
  const minutes = Number(duration.match(/([\d.]+)\s*min(?:ute)?s?/i)?.[1] ?? 0);
  const seconds = Number(duration.match(/([\d.]+)\s*sec(?:ond)?s?/i)?.[1] ?? 0);

  if (!hours && !minutes && !seconds) return undefined;

  return `PT${hours ? `${hours}H` : ""}${minutes ? `${minutes}M` : ""}${seconds ? `${seconds}S` : ""}`;
}

type VideoStructuredDataInput = {
  canonicalPath: string;
  contentUrl: string;
  description: string;
  duration: string;
  inLanguage?: string;
  name: string;
  thumbnailUrl: string;
  uploadDate: string;
};

export function createVideoStructuredData({
  canonicalPath,
  contentUrl,
  description,
  duration,
  inLanguage,
  name,
  thumbnailUrl,
  uploadDate,
}: VideoStructuredDataInput) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${absoluteSiteUrl(canonicalPath)}#video`,
    name,
    description,
    thumbnailUrl: [absoluteSiteUrl(thumbnailUrl)],
    uploadDate,
    ...(videoDurationToIso8601(duration) ? { duration: videoDurationToIso8601(duration) } : {}),
    contentUrl: absoluteSiteUrl(contentUrl),
    ...(inLanguage ? { inLanguage } : {}),
    url: absoluteSiteUrl(canonicalPath),
  };
}
