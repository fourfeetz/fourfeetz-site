export const DEFAULT_FEEDS = [
  {
    name: "American Kennel Club",
    url: "https://www.akc.org/feed/",
    allowedHosts: ["akc.org", "www.akc.org"],
    reliability: 22,
    topics: ["dog", "puppy", "pet care"],
  },
  {
    name: "Google AI",
    url: "https://blog.google/technology/ai/rss/",
    allowedHosts: ["blog.google"],
    reliability: 25,
    topics: ["AI tools", "video creation"],
  },
  {
    name: "OpenAI News",
    url: "https://openai.com/news/rss.xml",
    allowedHosts: ["openai.com", "www.openai.com"],
    reliability: 25,
    topics: ["AI tools", "creator tools"],
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

