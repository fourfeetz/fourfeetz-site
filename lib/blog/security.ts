import { createHash } from "node:crypto";
import { auth, isAdminEmail } from "../../auth.ts";
import { BlogRequestError } from "./errors.ts";

export { BlogRequestError } from "./errors.ts";

export function assertSameOrigin(request: Request) {
  if (request.headers.get("sec-fetch-site") === "cross-site") throw new BlogRequestError("CROSS_SITE_REQUEST", 403);
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) throw new BlogRequestError("CROSS_SITE_REQUEST", 403);
}

export async function requireAdmin() {
  const session = await auth();
  const email = session?.user?.email;
  if (!isAdminEmail(email)) throw new BlogRequestError("ADMIN_REQUIRED", 401);
  return email!;
}

export async function readJson(request: Request, maxBytes = 250_000) {
  if (!request.headers.get("content-type")?.startsWith("application/json")) throw new BlogRequestError("UNSUPPORTED_MEDIA_TYPE", 415);
  const declared = Number(request.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > maxBytes) throw new BlogRequestError("REQUEST_TOO_LARGE", 413);
  const raw = await request.text();
  if (new TextEncoder().encode(raw).byteLength > maxBytes) throw new BlogRequestError("REQUEST_TOO_LARGE", 413);
  try { const value: unknown = JSON.parse(raw); if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error(); return value as Record<string, unknown>; }
  catch { throw new BlogRequestError("INVALID_JSON", 400); }
}

export const hashSecret = (value: string) => createHash("sha256").update(`${process.env.COMMENT_TOKEN_PEPPER ?? ""}:${value}`).digest("hex");
export function errorResponse(error: unknown) {
  const code = error instanceof BlogRequestError ? error.code : error instanceof Error && "code" in error ? String(error.code) : "REQUEST_FAILED";
  const status = error instanceof BlogRequestError ? error.status : code === "EDIT_CONFLICT" ? 409 : code.includes("unique") ? 409 : 400;
  return Response.json({ error: code }, { status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
}
