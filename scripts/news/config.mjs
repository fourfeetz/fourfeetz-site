export const DEFAULT_FEEDS = [
  {
    name: "Petfood Industry",
    url: "https://www.petfoodindustry.com/rss",
    allowedHosts: ["petfoodindustry.com", "www.petfoodindustry.com"],
    reliability: 22,
    topics: ["pet industry", "pet food", "pet business"],
  },
  {
    name: "Veterinary Practice News",
    url: "https://www.veterinarypracticenews.com/feed/",
    allowedHosts: ["veterinarypracticenews.com", "www.veterinarypracticenews.com"],
    reliability: 22,
    topics: ["pet health", "veterinary", "animal welfare"],
  },
  {
    name: "dvm360",
    url: "https://www.dvm360.com/rss.xml",
    allowedHosts: ["dvm360.com", "www.dvm360.com"],
    reliability: 22,
    topics: ["pet health", "veterinary", "pet business"],
  },
  {
    name: "ScienceDaily Dogs",
    url: "https://www.sciencedaily.com/rss/plants_animals/dogs.xml",
    allowedHosts: ["sciencedaily.com", "www.sciencedaily.com"],
    reliability: 22,
    topics: ["dog", "pet health", "animal science"],
  },
  {
    name: "ScienceDaily Cats",
    url: "https://www.sciencedaily.com/rss/plants_animals/cats.xml",
    allowedHosts: ["sciencedaily.com", "www.sciencedaily.com"],
    reliability: 22,
    topics: ["cat", "pet health", "animal science"],
  },
  {
    name: "Phys.org Biology",
    url: "https://phys.org/rss-feed/biology-news/",
    allowedHosts: ["phys.org", "www.phys.org"],
    reliability: 22,
    topics: ["animal science", "pet health", "animal welfare"],
  },
  {
    name: "Google AI",
    url: "https://blog.google/technology/ai/rss/",
    allowedHosts: ["blog.google"],
    reliability: 25,
    primaryEvidence: true,
    evidenceType: "official",
    topics: ["AI tools", "video creation"],
  },
  {
    name: "OpenAI News",
    url: "https://openai.com/news/rss.xml",
    allowedHosts: ["openai.com", "www.openai.com"],
    reliability: 25,
    primaryEvidence: true,
    evidenceType: "official",
    topics: ["AI tools", "creator tools"],
  },
  {
    name: "TechCrunch",
    url: "https://techcrunch.com/feed/",
    allowedHosts: ["techcrunch.com", "www.techcrunch.com"],
    reliability: 22,
    topics: ["AI tools", "creator tools", "pet tech"],
  },
  {
    name: "The Verge",
    url: "https://www.theverge.com/rss/index.xml",
    allowedHosts: ["theverge.com", "www.theverge.com"],
    reliability: 22,
    topics: ["AI tools", "video creation", "image creation"],
  },
  {
    name: "PETA Deutschland",
    url: "https://www.peta.de/feed/",
    allowedHosts: ["peta.de", "www.peta.de"],
    reliability: 20,
    topics: ["animal welfare", "dog", "cat"],
  },
];

export const TOPIC_TERMS = [
  "pet", "dog", "cat", "puppy", "kitten", "animal", "veterinary", "grooming",
  "pet tech", "petfood", "반려동물", "강아지", "고양이", "펫테크", "동물병원", "애견",
  "artificial intelligence", " ai ", "video", "creator", "hotel", "salon",
];

export function loadFeeds() {
  const custom = process.env.NEWS_FEEDS_JSON;
  if (!custom) return DEFAULT_FEEDS;
  const parsed = JSON.parse(custom);
  if (!Array.isArray(parsed) || parsed.length === 0) throw new Error("NEWS_FEEDS_JSON must be a non-empty array");
  return parsed;
}

