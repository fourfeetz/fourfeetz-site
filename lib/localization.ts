import { getKoreanInsightPath, isKoreanInsightRedirect } from "@/lib/koreanInsightAvailability";

export type SiteLanguage = "en" | "ko";

const koreanPrefixes = new Set([
  "about",
  "characters",
  "films",
  "insights",
  "music",
  "resources",
  "services",
  "shorts",
  "tools",
  "videos",
]);

const koreanInsightFallbacks = new Map([
  ["/insights/runway-gen-4-review", "/insights/runway-gen45-review"],
  ["/insights/veo3-complete-review", "/ko/insights"],
]);

const koreanOnlyServiceSlugs = new Set([
  "personal-pet-video",
  "pet-video",
  "grooming-hotel",
  "pet-products",
  "veterinary",
  "pet-funeral",
]);

export function getSiteLanguage(pathname: string): SiteLanguage {
  return pathname === "/ko" || pathname.startsWith("/ko/") ? "ko" : "en";
}

export function toKoreanPath(pathname: string) {
  if (pathname === "/ko" || pathname.startsWith("/ko/")) return pathname;
  if (pathname === "/" || pathname === "/en") return "/ko";
  if (koreanInsightFallbacks.has(pathname)) return koreanInsightFallbacks.get(pathname)!;

  const segments = pathname.split("/").filter(Boolean);
  const [section, ...rest] = segments;

  if (section === "works" || section === "films") {
    return rest.length ? `/ko/films/${rest.join("/")}` : "/ko/videos?type=long-form";
  }

  if (section === "shorts") {
    return rest.length ? `/ko/shorts/${rest.join("/")}` : "/ko/videos?type=shorts";
  }

  if (section && koreanPrefixes.has(section)) {
    return `/ko/${section}${rest.length ? `/${rest.join("/")}` : ""}`;
  }

  return "/ko";
}

export function toEnglishPath(pathname: string) {
  if (pathname === "/ko") return "/en";
  if (!pathname.startsWith("/ko/")) return pathname;

  const segments = pathname.slice(4).split("/").filter(Boolean);
  const [section, ...rest] = segments;

  if (section === "films") {
    return rest.length ? `/works/${rest.join("/")}` : "/videos?type=long-form";
  }

  if (section === "shorts") {
    return rest.length ? `/shorts/${rest.join("/")}` : "/videos?type=shorts";
  }

  if (section === "services" && rest.length === 1 && koreanOnlyServiceSlugs.has(rest[0])) {
    return "/services";
  }

  if (section === "insights" && rest.length === 1 && isKoreanInsightRedirect(rest[0])) {
    return getKoreanInsightPath(rest[0]);
  }

  if (section && koreanPrefixes.has(section)) {
    return `/${section}${rest.length ? `/${rest.join("/")}` : ""}`;
  }

  return "/";
}

export function localizedHref(href: string, language: SiteLanguage) {
  if (language === "en" || !href.startsWith("/") || href.startsWith("//")) return href;

  const [pathname, hash] = href.split("#");
  const localized = toKoreanPath(pathname || "/");
  return hash ? `${localized}#${hash}` : localized;
}

export function languageAlternates(englishPath: string, koreanPath = toKoreanPath(englishPath)) {
  return {
    canonical: koreanPath,
    languages: {
      en: englishPath,
      ko: koreanPath,
      "x-default": "/ko",
    },
  };
}

export function englishLanguageAlternates(englishPath: string, koreanPath = toKoreanPath(englishPath)) {
  return {
    canonical: englishPath,
    languages: {
      en: englishPath,
      ko: koreanPath,
      "x-default": "/ko",
    },
  };
}
