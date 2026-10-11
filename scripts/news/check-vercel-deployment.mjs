import { pathToFileURL } from "node:url";

export async function verifyVercelDeployment({ token, projectId, teamId, sha, fetchImpl = fetch, sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)), timeoutMs = 10 * 60_000, pollMs = 15_000 }) {
  const missing = [!token && "VERCEL_TOKEN", !projectId && "VERCEL_PROJECT_ID", !teamId && "VERCEL_ORG_ID", !sha && "commit SHA"].filter(Boolean);
  if (missing.length) throw new Error(`Vercel deployment verification requires: ${missing.join(", ")}`);
  const deadline = Date.now() + timeoutMs;
  const headers = { Authorization: `Bearer ${token}` };
  while (Date.now() < deadline) {
    const query = new URLSearchParams({ projectId, teamId, limit: "20" });
    const response = await fetchImpl(`https://api.vercel.com/v6/deployments?${query}`, { headers, signal: AbortSignal.timeout(20_000) });
    if (!response.ok) throw new Error(`Vercel API ${response.status}: ${(await response.text()).slice(0, 300)}`);
    const deployments = (await response.json()).deployments ?? [];
    const deployment = deployments.find((item) => item.meta?.githubCommitSha === sha);
    if (!deployment) { await sleep(pollMs); continue; }
    const state = deployment.readyState ?? deployment.state;
    if (state === "READY") return { url: `https://${deployment.url}`, state };
    if (["ERROR", "CANCELED"].includes(state)) throw new Error(`Vercel deployment failed with state ${state}`);
    await sleep(pollMs);
  }
  throw new Error("Timed out waiting for the Vercel deployment");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const result = await verifyVercelDeployment({ token: process.env.VERCEL_TOKEN, projectId: process.env.VERCEL_PROJECT_ID, teamId: process.env.VERCEL_ORG_ID, sha: process.argv[2] || process.env.GITHUB_SHA });
    process.stdout.write(`Vercel deployment ready: ${result.url}\n`);
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 2;
  }
}

