import "server-only";

const TOSS_API_BASE = "https://api.tosspayments.com/v1";

export type TossPayment = Readonly<{
  paymentKey: string;
  orderId: string;
  status: string;
  currency: "KRW" | "USD";
  totalAmount: number;
  lastTransactionKey?: string | null;
  cancels?: readonly Readonly<{ transactionKey?: string; cancelStatus?: string; canceledAt?: string; cancelAmount?: number }>[] | null;
}>;

export class TossApiError extends Error {
  readonly status: number;
  constructor(status: number) {
    super("TOSS_API_ERROR");
    this.name = "TossApiError";
    this.status = status;
  }
}

function authorizationHeader() {
  const secret = process.env.TOSS_SECRET_KEY;
  if (process.env.TOSS_PAYMENTS_MODE !== "test" || !secret?.startsWith("test_")) throw new Error("TOSS_SANDBOX_UNAVAILABLE");
  return `Basic ${Buffer.from(`${secret}:`).toString("base64")}`;
}

async function tossRequest(path: string, init?: RequestInit) {
  const response = await fetch(`${TOSS_API_BASE}${path}`, {
    ...init,
    cache: "no-store",
    signal: AbortSignal.timeout(8_000),
    headers: { Authorization: authorizationHeader(), "Content-Type": "application/json", ...init?.headers },
  });
  if (!response.ok) throw new TossApiError(response.status);
  const payment = await response.json() as TossPayment;
  if (!payment.paymentKey || !payment.orderId || !Number.isInteger(payment.totalAmount) || !payment.currency || !payment.status) throw new TossApiError(502);
  return payment;
}

export function confirmTossPayment(input: { paymentKey: string; orderId: string; amount: number; idempotencyKey: string }) {
  return tossRequest("/payments/confirm", {
    method: "POST",
    headers: { "Idempotency-Key": input.idempotencyKey },
    body: JSON.stringify({ paymentKey: input.paymentKey, orderId: input.orderId, amount: input.amount }),
  });
}

export function getTossPayment(paymentKey: string) {
  return tossRequest(`/payments/${encodeURIComponent(paymentKey)}`);
}
