export const koreanInsightRedirectSlugs = [
  "runway-dev-ai-media-platform",
  "adobe-firefly-agentic-studio",
  "elevenlabs-music-v2-references",
  "luma-ray-3-2-production-control",
  "magiclight-seedance-2-real-production-test",
  "how-haru-was-created",
  "google-flow-complete-guide",
  "runway-gen45-review",
  "kling-ai-complete-review",
  "flux-image-guide",
  "ai-lighting-guide",
  "camera-movement-guide",
  "ai-thumbnail-design-guide",
  "ai-storyboarding-guide",
  "character-consistency-guide",
  "best-ai-music-tools",
  "repeatable-ai-video-workflow",
  "image-to-video-prompts",
  "reframing-16-9-guide",
  "kling-vs-veo",
] as const;

export type KoreanInsightRedirectSlug = (typeof koreanInsightRedirectSlugs)[number];

const koreanInsightRedirectSet = new Set<string>(koreanInsightRedirectSlugs);

export function isKoreanInsightRedirect(slug: string): slug is KoreanInsightRedirectSlug {
  return koreanInsightRedirectSet.has(slug);
}

export function getEnglishInsightPath(slug: string) {
  return `/insights/${slug}`;
}

export function getKoreanInsightPath(slug: string) {
  return isKoreanInsightRedirect(slug) ? getEnglishInsightPath(slug) : `/ko/insights/${slug}`;
}

export const koreanInsightRedirects = koreanInsightRedirectSlugs.map((slug) => ({
  source: `/ko/insights/${slug}`,
  destination: getEnglishInsightPath(slug),
  permanent: true as const,
}));
