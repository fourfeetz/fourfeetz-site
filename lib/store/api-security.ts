const DEFAULT_MAX_BODY_BYTES = 4096;

export class StoreRequestError extends Error {
  readonly code: string;
  readonly status: number;

  constructor(code: string, status: number) {
    super(code);
    this.name = "StoreRequestError";
    this.code = code;
    this.status = status;
  }
}

export function assertSameOriginMutation(request: Request) {
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite === "cross-site") throw new StoreRequestError("CROSS_SITE_REQUEST", 403);

  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) throw new StoreRequestError("CROSS_SITE_REQUEST", 403);
}

export async function readBoundedJsonObject(request: Request, maxBytes = DEFAULT_MAX_BODY_BYTES): Promise<Record<string, unknown>> {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    throw new StoreRequestError("UNSUPPORTED_MEDIA_TYPE", 415);
  }

  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) throw new StoreRequestError("REQUEST_TOO_LARGE", 413);

  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > maxBytes) throw new StoreRequestError("REQUEST_TOO_LARGE", 413);

  let value: unknown;
  try {
    value = JSON.parse(text);
  } catch {
    throw new StoreRequestError("INVALID_JSON", 400);
  }
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new StoreRequestError("INVALID_JSON", 400);
  return value as Record<string, unknown>;
}

export function storeApiResponse(code: string, status: number, headers?: HeadersInit) {
  return Response.json({ error: code }, {
    status,
    headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", ...headers },
  });
}

export function storeRequestErrorResponse(error: unknown) {
  if (error instanceof StoreRequestError) return storeApiResponse(error.code, error.status);
  return storeApiResponse("INVALID_REQUEST", 400);
}
