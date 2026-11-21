import { timingSafeEqual } from "node:crypto";
import { neon } from "@neondatabase/serverless";

export const runtime = "nodejs";
const host = "ep-calm-dust-a1ujuek4.ap-southeast-1.aws.neon.tech";
const tables = ["blog_posts", "insight_comments", "insight_comment_settings", "insight_comment_rate_limits"] as const;
type Category = "authentication" | "dns" | "timeout" | "tls" | "permission" | "other";

function authorized(request: Request) {
  const expected = process.env.PREVIEW_DB_VERIFY_TOKEN;
  const supplied = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (!expected || !supplied) return false;
  const a = Buffer.from(expected), b = Buffer.from(supplied);
  return a.length === b.length && timingSafeEqual(a, b);
}

function category(error: unknown): Category {
  const text = error instanceof Error ? `${error.name} ${error.message}`.toLowerCase() : "";
  if (/timeout|timed out|abort/.test(text)) return "timeout";
  if (/dns|enotfound|eai_again|getaddrinfo/.test(text)) return "dns";
  if (/tls|ssl|certificate/.test(text)) return "tls";
  if (/password|authentication|28p01/.test(text)) return "authentication";
  if (/permission|privilege|42501/.test(text)) return "permission";
  return "other";
}

async function limited<T>(work: Promise<T>) {
  return Promise.race([work, new Promise<never>((_, reject) => setTimeout(() => reject(new Error("timeout")), 8000))]);
}

async function inspect(value: string | undefined, pooled: boolean) {
  const result: Record<string, unknown> = { env: value ? "present" : "missing", format: "unchecked", endpoint: "unchecked", select1: "not_run", tables: Object.fromEntries(tables.map((name) => [name, "not_run"])) };
  if (!value) return result;
  if (value === "[SENSITIVE]") return { ...result, format: "placeholder" };
  let parsed: URL;
  try { parsed = new URL(value); } catch { return { ...result, format: "invalid" }; }
  if (!/^postgres(ql)?:$/.test(parsed.protocol)) return { ...result, format: "invalid" };
  result.format = "valid";
  const expectedHostname = pooled ? host.replace(".", "-pooler.") : host;
  result.endpoint = parsed.hostname === expectedHostname ? "match" : "mismatch";
  const sql = neon(value);
  try { await limited(sql`select 1 as ok`); result.select1 = "success"; }
  catch (error) { result.select1 = "failed"; result.errorCategory = category(error); return result; }
  try {
    const rows = await limited(sql`select table_name from information_schema.tables where table_schema=current_schema() and table_name=any(${[...tables]})`);
    const found = new Set(rows.map((row) => String(row.table_name)));
    result.tables = Object.fromEntries(tables.map((name) => [name, found.has(name) ? "present" : "missing"]));
  } catch (error) { result.tables = Object.fromEntries(tables.map((name) => [name, "query_failed"])); result.tableErrorCategory = category(error); }
  return result;
}

export async function POST(request: Request) {
  if (process.env.VERCEL_ENV !== "preview" || !authorized(request)) return Response.json({ error: "not_found" }, { status: 404 });
  return Response.json({ pooled: await inspect(process.env.DATABASE_URL, true), direct: await inspect(process.env.DATABASE_URL_UNPOOLED, false) });
}
