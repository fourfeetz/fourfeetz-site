import { pathToFileURL } from "node:url";

export function resolveDryRun({ eventName, dispatchInput, repositoryVariable }) {
  if (eventName === "workflow_dispatch") return String(dispatchInput).toLowerCase() !== "false";
  return String(repositoryVariable).toLowerCase() !== "false";
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dryRun = resolveDryRun({ eventName: process.argv[2], dispatchInput: process.argv[3], repositoryVariable: process.argv[4] });
  process.stdout.write(`dry_run=${dryRun}\n`);
}

