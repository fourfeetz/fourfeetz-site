const token = process.env.VERCEL_TOKEN;
const projectId = process.env.VERCEL_PROJECT_ID;
const teamId = process.env.VERCEL_ORG_ID;
const sha = process.argv[2] || process.env.GITHUB_SHA;

if (!token || !projectId || !sha) {
  process.stdout.write("Vercel deployment verification skipped: VERCEL_TOKEN, VERCEL_PROJECT_ID, or SHA is missing.\n");
  process.exit(0);
}

const deadline = Date.now() + 10 * 60_000;
const headers = { Authorization: `Bearer ${token}` };
const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

while (Date.now() < deadline) {
  const query = new URLSearchParams({ projectId, limit: "20" });
  if (teamId) query.set("teamId", teamId);
  const response = await fetch(`https://api.vercel.com/v6/deployments?${query}`, { headers, signal: AbortSignal.timeout(20_000) });
  if (!response.ok) throw new Error(`Vercel API ${response.status}: ${(await response.text()).slice(0, 300)}`);
  const deployments = (await response.json()).deployments ?? [];
  const deployment = deployments.find((item) => item.meta?.githubCommitSha === sha);
  if (!deployment) { await wait(15_000); continue; }
  if (deployment.state === "READY") {
    process.stdout.write(`Vercel deployment ready: https://${deployment.url}\n`);
    process.exit(0);
  }
  if (["ERROR", "CANCELED"].includes(deployment.state)) {
    process.stderr.write(`Vercel deployment failed with state ${deployment.state}.\n`);
    process.exit(2);
  }
  await wait(15_000);
}

process.stderr.write("Timed out waiting for the Vercel deployment.\n");
process.exit(2);

