import assert from "node:assert/strict";
import test from "node:test";
import { calculateAspect, calculateVideoSize, calculateGenerationCost, readToolValues, toolDefaults } from "../../lib/creator-tools/calculations.ts";

test("1920×1080 to vertical 1080×1920 keeps 31.64% of the source in a centered crop", () => {
  const value = calculateAspect(1920, 1080, 9, 16, 1080);
  assert.equal(value.sourceRatio, "16:9");
  assert.equal(value.outputHeight, 1920);
  assert.ok(Math.abs(value.retainedPercent - 31.640625) < 1e-8);
  assert.ok(Math.abs(value.cropWidth - 607.5) < 1e-8);
});

test("same-ratio conversion crops nothing and supports square and portrait inputs", () => {
  assert.equal(calculateAspect(3840, 2160, 16, 9, 1920).retainedPercent, 100);
  assert.equal(calculateAspect(1080, 1920, 1, 1, 1080).cropHeight, 1080);
  assert.equal(calculateAspect(1000, 1000, 4, 3, 1200).outputHeight, 900);
});

test("60 seconds at 8 Mbps video plus 128 kbps audio is 60.96 decimal MB", () => {
  const value = calculateVideoSize(60, 8, 128);
  assert.ok(Math.abs(value.megabytes - 60.96) < 1e-10);
  assert.ok(Math.abs(value.mebibytes - 58.135986328125) < 1e-10);
  assert.equal(calculateVideoSize(1000, 8, 0).gigabytes, 1);
});

test("generation cost counts all attempts, purchased packs and remaining credits separately", () => {
  const value = calculateGenerationCost(5, 3, 20, 1000, 10000, 6);
  assert.equal(value.generations, 15);
  assert.equal(value.credits, 300);
  assert.equal(value.allocatedCost, 3000);
  assert.equal(value.packs, 1);
  assert.equal(value.purchaseCost, 10000);
  assert.equal(value.remainingCredits, 700);
  assert.equal(value.finalSeconds, 30);
  assert.equal(calculateGenerationCost(10, 6, 20, 1000, 10000, 6).packs, 2);
});

test("invalid and extreme numbers cannot produce misleading results", () => {
  for (const bad of [0, -1, Infinity, NaN]) {
    assert.throws(() => calculateAspect(bad, 1080, 9, 16, 1080));
    assert.throws(() => calculateVideoSize(bad, 8, 128));
    assert.throws(() => calculateGenerationCost(5, 3, 20, bad, 10000, 6));
  }
  assert.throws(() => calculateAspect(1920.5, 1080, 9, 16, 1080));
  assert.throws(() => calculateVideoSize(60, 8, -128));
  assert.throws(() => calculateGenerationCost(5.5, 3, 20, 1000, 10000, 6));
});

test("shared URL values accept only known fields and bounded plain numbers", () => {
  const values = readToolValues("aspect-ratio-calculator", new URLSearchParams("width=3840&height=-1&ratioWidth=NaN&outputWidth=999999999&evil=hello"));
  assert.equal(values.width, "3840");
  assert.equal(values.height, toolDefaults["aspect-ratio-calculator"].height);
  assert.equal(values.ratioWidth, "9");
  assert.equal(values.outputWidth, "1080");
  assert.equal(values.evil, undefined);
});

test("fractional credit rounding does not charge an extra pack at an exact boundary", () => {
  const value = calculateGenerationCost(3, 1, 0.1, 0.3, 10, 6);
  assert.equal(value.packs, 1);
  assert.equal(value.purchaseCost, 10);
  assert.equal(value.remainingCredits, 0);
});
