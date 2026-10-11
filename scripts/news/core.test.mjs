import assert from "node:assert/strict";
import test from "node:test";
import { assertNewsPath, attachCorroboratingSources, deduplicateCandidates, extractSourceText, jaccardSimilarity, parseFeed, publicationDecision, selectCorroboratedPrimaries } from "./core.mjs";

const feed = { name: "Official", url: "https://example.org/feed", allowedHosts: ["example.org"], reliability: 25, topics: ["pet tech"] };

test("parses RSS items and rejects links outside the configured source host", () => {
  const xml = `<rss><channel><item><title>Pet tech release</title><link>https://example.org/a?utm_source=x</link><description><![CDATA[New tool for pets]]></description><pubDate>Sat, 10 Oct 2026 01:00:00 GMT</pubDate></item><item><title>Injected</title><link>https://evil.example/a</link></item></channel></rss>`;
  const items = parseFeed(xml, feed);
  assert.equal(items.length, 1);
  assert.equal(items[0].url, "https://example.org/a");
});

test("extracts bounded source text without executable page content", () => {
  const text = extractSourceText("<article><h1>Pet update</h1><script>danger()</script><p>Verified details</p></article>");
  assert.equal(text, "Pet update Verified details");
});

test("removes exact source URLs and near-duplicate topics", () => {
  const existing = [{ title: "Connected pet care service launches", description: "Scheduling and care records for pet businesses", source: { url: "https://example.org/old" } }];
  const candidates = [
    { title: "Connected pet care service launches", summary: "Scheduling and care records for pet businesses", url: "https://example.org/new" },
    { title: "Different dog research", summary: "A separate study", url: "https://example.org/old" },
  ];
  assert.equal(deduplicateCandidates(candidates, existing).length, 0);
  assert.ok(jaccardSimilarity(candidates[0].title, existing[0].title) > 0.7);
});

test("links only a distinct publisher reporting the same event", () => {
  const candidates = [
    { title: "Connected scheduling and care records launch for pet businesses", summary: "The pilot connects daily care records and scheduling.", url: "https://example.org/a", publishedAt: "2026-10-10T01:00:00Z" },
    { title: "Pet businesses test connected scheduling and care records", summary: "An independent report confirms the care records pilot.", url: "https://example.net/b", publishedAt: "2026-10-10T03:00:00Z" },
    { title: "Connected scheduling and care records copied", summary: "The same publisher repeats its report.", url: "https://example.org/c", publishedAt: "2026-10-10T04:00:00Z" },
  ];
  const [primary] = attachCorroboratingSources(candidates);
  assert.deepEqual(primary.corroboratingSources.map(({ url }) => url), ["https://example.net/b"]);
});

test("selects one best primary per corroborated event", () => {
  const candidates = attachCorroboratingSources([
    { title: "Connected scheduling and care records launch for pet businesses", summary: "The pilot connects daily care records and scheduling.", url: "https://example.org/a", publishedAt: "2026-10-10T01:00:00Z", feed: { reliability: 25 } },
    { title: "Pet businesses test connected scheduling and care records", summary: "An independent report confirms the care records pilot.", url: "https://example.net/b", publishedAt: "2026-10-10T03:00:00Z", feed: { reliability: 23 } },
  ]);
  assert.deepEqual(selectCorroboratedPrimaries(candidates).map(({ url }) => url), ["https://example.org/a"]);
});

test("blocks publication when independent corroboration is absent", () => {
  const article = { title: "반려동물 서비스 기록 관리에 관한 새로운 공식 발표", description: "반려동물 서비스 사업자의 일정과 돌봄 기록을 연결하는 공개 자료의 핵심 내용과 확인 범위를 자세히 정리합니다.", keywords: ["반려동물", "기록", "서비스"], sourceFacts: ["시범 공개", "기록 연결"], sections: [{ heading: "하나", paragraphs: ["설명입니다.", "설명입니다."] }, { heading: "둘", paragraphs: ["설명입니다.", "설명입니다."] }, { heading: "셋", paragraphs: ["설명입니다.", "설명입니다."] }], source: { url: "https://example.org/a" }, corroboratingSources: [] };
  const review = { factsSupported: true, copyrightSafe: true, safe: true, duplicateFree: true, topicRelevant: true, independentlyCorroborated: true, corroboratedFactCount: 2, unsupportedFacts: [], originalityScore: 100, seoScore: 15, safetyScore: 15 };
  const decision = publicationDecision(article, { url: "https://example.org/a", feed, corroboratingSources: [] }, review, []);
  assert.equal(decision.publish, false);
  assert.ok(decision.hardBlocks.includes("insufficient_independent_sources"));
});

test("blocks unsafe medical advice regardless of a high AI score", () => {
  const article = { title: "반려동물 건강 관리에서 확인할 중요한 새로운 안내", description: "공식 자료를 바탕으로 보호자가 확인해야 할 안전한 정보와 적용 범위를 충분히 정리한 기사입니다.", keywords: ["반려동물", "건강", "안전"], sourceFacts: ["안내 공개", "범위 설명"], sections: [{ heading: "안내", paragraphs: ["수의사 대신 이 방법을 따르면 된다.", "복용량을 늘려야 한다."] }, { heading: "내용", paragraphs: ["설명입니다.", "설명입니다."] }, { heading: "범위", paragraphs: ["설명입니다.", "설명입니다."] }], source: { url: "https://example.org/a" } };
  article.corroboratingSources = [{ name: "Independent", url: "https://example.net/a", publishedAt: "2026-10-10T00:00:00Z" }];
  const review = { factsSupported: true, copyrightSafe: true, safe: true, duplicateFree: true, topicRelevant: true, independentlyCorroborated: true, corroboratedFactCount: 2, unsupportedFacts: [], originalityScore: 100, seoScore: 15, safetyScore: 15 };
  const decision = publicationDecision(article, { url: "https://example.org/a", feed, corroboratingSources: [{ url: "https://example.net/a" }] }, review, []);
  assert.equal(decision.publish, false);
  assert.ok(decision.hardBlocks.includes("unsafe_medical_advice"));
});

test("rejects write targets outside content/news", () => {
  assert.throws(() => assertNewsPath("app/page.tsx"), /Refusing to write outside/);
});

