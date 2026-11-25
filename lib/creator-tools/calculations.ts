export const toolSlugs = ["aspect-ratio-calculator", "video-file-size-calculator", "ai-video-cost-calculator"] as const;
export type ToolSlug = (typeof toolSlugs)[number];
export type ToolValues = Record<string, string>;

export const toolDefaults: Record<ToolSlug, ToolValues> = {
  "aspect-ratio-calculator": { width: "1920", height: "1080", ratioWidth: "9", ratioHeight: "16", outputWidth: "1080" },
  "video-file-size-calculator": { seconds: "60", videoMbps: "8", audioKbps: "128" },
  "ai-video-cost-calculator": { shots: "5", attempts: "3", creditsPerGeneration: "20", packCredits: "1000", packPrice: "10000", secondsPerShot: "6" },
};

export const fieldLimits: Record<string, readonly [number, number, boolean]> = {
  width: [1, 65536, true], height: [1, 65536, true], ratioWidth: [1, 100, true], ratioHeight: [1, 100, true], outputWidth: [1, 65536, true],
  seconds: [0.01, 604800, false], videoMbps: [0.001, 100000, false], audioKbps: [0, 100000, false],
  shots: [1, 10000, true], attempts: [1, 1000, true], creditsPerGeneration: [0.01, 1000000, false],
  packCredits: [0.01, 1000000000, false], packPrice: [0, 1000000000, false], secondsPerShot: [0.01, 3600, false],
};

export function isValidField(key: string, value: string) {
  const limit = fieldLimits[key];
  if (!limit || !/^\d+(?:\.\d+)?$/.test(value) || value.length > 20) return false;
  const number = Number(value);
  return Number.isFinite(number) && number >= limit[0] && number <= limit[1] && (!limit[2] || Number.isInteger(number));
}

export function readToolValues(slug: ToolSlug, params: URLSearchParams): ToolValues {
  return Object.fromEntries(Object.entries(toolDefaults[slug]).map(([key, fallback]) => {
    const value = params.get(key);
    return [key, value !== null && isValidField(key, value) ? value : fallback];
  }));
}

function check(key: string, number: number) {
  if (!isValidField(key, String(number))) throw new RangeError(`Invalid ${key}`);
}

function gcd(a: number, b: number): number {
  return b ? gcd(b, a % b) : a;
}

export function calculateAspect(width: number, height: number, ratioWidth: number, ratioHeight: number, outputWidth: number) {
  Object.entries({ width, height, ratioWidth, ratioHeight, outputWidth }).forEach(([key, value]) => check(key, value));
  const divisor = gcd(width, height);
  const targetRatio = ratioWidth / ratioHeight;
  const cropWidth = Math.min(width, height * targetRatio);
  const cropHeight = Math.min(height, width / targetRatio);
  const outputHeight = Math.round(outputWidth / targetRatio);
  if (outputHeight < 1 || outputHeight > 65536) throw new RangeError("Output height is outside the supported range");
  return { sourceRatio: `${width / divisor}:${height / divisor}`, outputWidth, outputHeight, cropWidth, cropHeight,
    retainedPercent: Math.min(100, cropWidth * cropHeight / (width * height) * 100) };
}

export function calculateVideoSize(seconds: number, videoMbps: number, audioKbps: number) {
  Object.entries({ seconds, videoMbps, audioKbps }).forEach(([key, value]) => check(key, value));
  const megabytes = seconds * (videoMbps + audioKbps / 1000) / 8;
  return { megabytes, gigabytes: megabytes / 1000, mebibytes: megabytes * 1000000 / 1048576 };
}

export function calculateGenerationCost(shots: number, attempts: number, creditsPerGeneration: number, packCredits: number, packPrice: number, secondsPerShot: number) {
  Object.entries({ shots, attempts, creditsPerGeneration, packCredits, packPrice, secondsPerShot }).forEach(([key, value]) => check(key, value));
  const generations = shots * attempts;
  const credits = generations * creditsPerGeneration;
  const quotient = credits / packCredits;
  const tolerance = 4 * Number.EPSILON * Math.max(1, quotient);
  const packs = Math.max(1, Math.ceil(quotient - tolerance));
  return { generations, credits, packs, allocatedCost: credits / packCredits * packPrice,
    purchaseCost: packs * packPrice, remainingCredits: Math.max(0, packs * packCredits - credits), finalSeconds: shots * secondsPerShot };
}
