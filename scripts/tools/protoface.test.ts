import assert from "node:assert/strict";
import test from "node:test";
import { getProtofaceCredits, protofacePresets, protofacePresetValues, getMatchingProtofacePreset } from "../../lib/creator-tools/protoface.ts";
import { calculateGenerationCost } from "../../lib/creator-tools/calculations.ts";

test("Protoface example credits match independently calculated, rounded official rates", () => {
  const expected = [92, 232, 68, 167, 53, 80, 4, 6, 5, 18, 28, 80, 120, 75];
  assert.deepEqual(protofacePresets.map(preset => getProtofaceCredits(preset)), expected);
});
test("one generation is rounded before multiplying by retry count", () => {
  const preset = protofacePresets.find(item => item.id === "ltx25-720")!;
  assert.equal(getProtofaceCredits(preset), 4); // $0.006 × 6 sec = $0.036 -> $0.04.
  assert.equal(calculateGenerationCost(5, 3, getProtofaceCredits(preset), 1000, 10, 6).credits, 60);
});
test("applying a model supplies a USD reference unit without replacing project counts", () => {
  const values = protofacePresetValues(protofacePresets[0]);
  assert.equal(values.creditsPerGeneration, "92");
  assert.equal(values.packCredits, "1000");
  assert.equal(values.packPrice, "10");
  assert.equal(values.secondsPerShot, "5");
  assert.equal(values.shots, undefined);
  assert.equal(values.attempts, undefined);
});
test("shared model identity cannot contradict overridden credits or currency", () => {
  const preset = protofacePresets[0]; const values = protofacePresetValues(preset);
  assert.equal(getMatchingProtofacePreset(preset.id, values, "USD")?.id, preset.id);
  assert.equal(getMatchingProtofacePreset(preset.id, { ...values, creditsPerGeneration: "20" }, "USD"), undefined);
  assert.equal(getMatchingProtofacePreset(preset.id, values, "KRW"), undefined);
  assert.equal(getMatchingProtofacePreset("unknown", values, "USD"), undefined);
});
