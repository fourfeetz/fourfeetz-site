import "server-only";

import fs from "node:fs";
import path from "node:path";

export type NewsSource = {
  name: string;
  url: string;
  publishedAt: string;
  primaryEvidence?: boolean;
  evidenceType?: "official" | "research" | "publisher_report";
};

export type NewsQuality = {
  total: number;
  sourceReliability: number;
  originality: number;
  duplicateCheck: number;
  seo: number;
  safetyCopyright: number;
  checkedAt: string;
};

export type NewsSection = { heading: string; paragraphs: string[] };
export type VerifiedClaim = {
  claim: string;
  evidence: { sourceUrl: string; evidenceSummary: string }[];
  limitation: string;
};

export type NewsArticle = {
  schemaVersion: 1;
  publicationMode?: "editorial" | "curation";
  slug: string;
  language: "ko";
  title: string;
  description: string;
  category: string;
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
  source: NewsSource;
  corroboratingSources: NewsSource[];
  sourceFacts: string[];
  verifiedClaims: VerifiedClaim[];
  evidenceScope: {
    sharedBasis: string;
    verificationBoundary: string;
    independentVerificationAvailable: boolean;
    conditionalPublicationReason: string;
    limitations: string[];
  };
  editorialAnalysis: {
    fourfeetzAnalysis: string[];
    koreanIndustryImplications: string[];
    readerLimitations: string[];
  };
  sections: NewsSection[];
  takeaway: string[];
  relatedLinks: { label: string; href: string }[];
  quality: NewsQuality;
};

const newsDirectory = path.join(process.cwd(), "content", "news", "ko");

function isPublishedArticle(value: unknown): value is NewsArticle {
  if (!value || typeof value !== "object") return false;
  const article = value as Partial<NewsArticle>;
  return article.schemaVersion === 1
    && article.language === "ko"
    && typeof article.slug === "string"
    && typeof article.title === "string"
    && typeof article.description === "string"
    && typeof article.publishedAt === "string"
    && Array.isArray(article.sections)
    && article.sections.length > 0
    && typeof article.source?.url === "string"
    && Array.isArray(article.corroboratingSources)
    && (article.publicationMode === "curation"
      ? Array.isArray(article.verifiedClaims)
        && article.verifiedClaims.length >= 2
        && article.verifiedClaims.every((claim) => Array.isArray(claim.evidence)
          && claim.evidence.length > 0
          && claim.evidence.some((evidence) => evidence.sourceUrl === article.source?.url)
          && claim.evidence.every((evidence) => [article.source?.url, ...article.corroboratingSources.map((source) => source.url)].includes(evidence.sourceUrl)))
      : (article.corroboratingSources.length > 0 || (
        article.source?.primaryEvidence === true
        && (article.source.evidenceType === "official" || article.source.evidenceType === "research")
        && article.evidenceScope?.independentVerificationAvailable === false
      )))
    && Array.isArray(article.verifiedClaims)
    && article.verifiedClaims.length >= 2
    && typeof article.evidenceScope?.verificationBoundary === "string"
    && typeof article.evidenceScope?.independentVerificationAvailable === "boolean"
    && typeof article.evidenceScope?.conditionalPublicationReason === "string"
    && Array.isArray(article.editorialAnalysis?.fourfeetzAnalysis)
    && article.editorialAnalysis.fourfeetzAnalysis.length >= 2
    && Array.isArray(article.editorialAnalysis?.koreanIndustryImplications)
    && article.editorialAnalysis.koreanIndustryImplications.length >= 2
    && Array.isArray(article.editorialAnalysis?.readerLimitations)
    && article.editorialAnalysis.readerLimitations.length >= 2
    && typeof article.quality?.total === "number"
    && (article.publicationMode === "curation" || article.quality.total >= 90);
}

export function getNewsArticles(): NewsArticle[] {
  if (!fs.existsSync(newsDirectory)) return [];

  return fs.readdirSync(newsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .flatMap((entry) => {
      try {
        const parsed: unknown = JSON.parse(fs.readFileSync(path.join(newsDirectory, entry.name), "utf8"));
        return isPublishedArticle(parsed) ? [parsed] : [];
      } catch {
        return [];
      }
    })
    .sort((left, right) => Date.parse(right.publishedAt) - Date.parse(left.publishedAt));
}

export function getNewsArticle(slug: string) {
  return getNewsArticles().find((article) => article.slug === slug);
}

