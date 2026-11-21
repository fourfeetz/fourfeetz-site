import { timingSafeEqual } from "node:crypto";
import { neon } from "@neondatabase/serverless";

export const runtime = "nodejs";

const expected = ["blog_posts", "insight_comments", "insight_comment_settings", "insight_comment_rate_limits"] as const;

function authorized(request: Request) {
  const secret = process.env.PREVIEW_DB_VERIFY_TOKEN;
  const supplied = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (!secret || !supplied) return false;
  const a = Buffer.from(secret);
  const b = Buffer.from(supplied);
  return a.length === b.length && timingSafeEqual(a, b);
}

async function verify(value: string) {
  const sql = neon(value);
  const connected = await sql`select true as ok`;
  const rows = await sql`
    select table_name from information_schema.tables
    where table_schema = current_schema() and table_name = any(${[...expected]})
  `;
  const found = new Set(rows.map((row) => String(row.table_name)));
  return { connected: connected[0]?.ok === true, tables: Object.fromEntries(expected.map((name) => [name, found.has(name)])) };
}

export async function POST(request: Request) {
  if (process.env.VERCEL_ENV !== "preview" || !authorized(request)) return Response.json({ error: "not_found" }, { status: 404 });
  const pooled = process.env.DATABASE_URL;
  const direct = process.env.DATABASE_URL_UNPOOLED;
  if (!pooled || !direct) return Response.json({ error: "unavailable" }, { status: 503 });
  try {
    return Response.json({ pooled: await verify(pooled), direct: await verify(direct) });
  } catch {
    return Response.json({ error: "verification_failed" }, { status: 503 });
  }
}
