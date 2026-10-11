import assert from "node:assert/strict";
import test from "node:test";
import { assertNewsPath, deduplicateCandidates, extractSourceText, jaccardSimilarity, parseFeed, publicationDecision } from "./core.mjs";

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

test("blocks unsafe medical advice regardless of a high AI score", () => {
  const article = { title: "반려동물 건강 관리에서 확인할 중요한 새로운 안내", description: "공식 자료를 바탕으로 보호자가 확인해야 할 안전한 정보와 적용 범위를 충분히 정리한 기사입니다.", keywords: ["반려동물", "건강", "안전"], sourceFacts: ["안내 공개", "범위 설명"], sections: [{ heading: "안내", paragraphs: ["수의사 대신 이 방법을 따르면 된다.", "복용량을 늘려야 한다."] }, { heading: "내용", paragraphs: ["설명입니다.", "설명입니다."] }, { heading: "범위", paragraphs: ["설명입니다.", "설명입니다."] }], source: { url: "https://example.org/a" } };
  const review = { factsSupported: true, copyrightSafe: true, safe: true, duplicateFree: true, topicRelevant: true, originalityScore: 100, seoScore: 15, safetyScore: 15 };
  const decision = publicationDecision(article, { url: "https://example.org/a", feed }, review, []);
  assert.equal(decision.publish, false);
  assert.ok(decision.hardBlocks.includes("unsafe_medical_advice"));
});

test("rejects write targets outside content/news", () => {
  assert.throws(() => assertNewsPath("app/page.tsx"), /Refusing to write outside/);
});

