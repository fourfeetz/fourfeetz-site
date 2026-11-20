import { createHmac, timingSafeEqual } from "node:crypto";
import type { Order } from "./payment.ts";

import type { PayPalMode } from "./readiness.ts";

const paypalHosts = {
  sandbox: { api: "https://api-m.sandbox.paypal.com", checkout: "https://www.sandbox.paypal.com" },
  live: { api: "https://api-m.paypal.com", checkout: "https://www.paypal.com" },
};

function paypalCredentials(mode: PayPalMode) {
  return mode === "live"
    ? { id: process.env.PAYPAL_LIVE_CLIENT_ID, secret: process.env.PAYPAL_LIVE_CLIENT_SECRET }
    : { id: process.env.PAYPAL_SANDBOX_CLIENT_ID, secret: process.env.PAYPAL_SANDBOX_CLIENT_SECRET };
}
export function paypalCheckoutCookie(paypalOrderId: string) {
  return `ff_paypal_${paypalOrderId}`;
}

export function paypalCheckoutProof(orderNumber: string, paypalOrderId: string, mode: PayPalMode) {
  const { secret } = paypalCredentials(mode);
  if (!secret) throw new Error("Missing PayPal checkout secret");
  return createHmac("sha256", secret)
    .update(`fourfeetz:paypal-${mode}:${orderNumber}:${paypalOrderId}`)
    .digest("hex");
}

export function validPayPalCheckoutProof(proof: string | undefined, orderNumber: string, paypalOrderId: string, mode: PayPalMode) {
  if (!proof || !/^[0-9a-f]{64}$/.test(proof)) return false;
  return timingSafeEqual(Buffer.from(proof, "hex"), Buffer.from(paypalCheckoutProof(orderNumber, paypalOrderId, mode), "hex"));
}
export const paypalCapturePath = "/api/store/payments/paypal/capture";
export const paypalOrderIdPattern = /^[A-Z0-9]{6,32}$/;

type PayPalAmount = { currency_code?: string; value?: string };
type PayPalCapture = { id?: string; status?: string; amount?: PayPalAmount };
type PayPalOrder = {
  id?: string;
  status?: string;
  links?: { href: string; rel: string }[];
  purchase_units?: { reference_id?: string; amount?: PayPalAmount; payments?: { captures?: PayPalCapture[] } }[];
};

function usdAmount(cents: number) {
  return (cents / 100).toFixed(2);
}

async function paypalJson<T>(mode: PayPalMode, path: string, init: RequestInit): Promise<T> {
  const response = await fetch(paypalHosts[mode].api + path, { ...init, cache: "no-store", signal: AbortSignal.timeout(10_000) });
  if (!response.ok) throw new Error("PayPal request failed");
  return response.json() as Promise<T>;
}

async function paypalHeaders(mode: PayPalMode) {
  const { id, secret } = paypalCredentials(mode);
  if (!id || !secret) throw new Error("Missing PayPal credentials");
  const credentials = Buffer.from(`${id}:${secret}`).toString("base64");
  const token = await paypalJson<{ access_token?: string }>(mode, "/v1/oauth2/token", {
    method: "POST",
    headers: { Authorization: `Basic ${credentials}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: "grant_type=client_credentials",
  });
  if (!token.access_token) throw new Error("Missing PayPal access token");
  return { Authorization: `Bearer ${token.access_token}`, "Content-Type": "application/json", Prefer: "return=representation" };
}

export async function createPayPalOrder(order: Order, origin: string, mode: PayPalMode, productSlug: string) {
  const headers = await paypalHeaders(mode);
  const result = await paypalJson<PayPalOrder>(mode, "/v2/checkout/orders", {
    method: "POST",
    headers: { ...headers, "PayPal-Request-Id": order.id },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [{ reference_id: order.orderNumber, amount: { currency_code: "USD", value: usdAmount(order.amount) } }],
      payment_source: { paypal: { experience_context: {
        shipping_preference: "NO_SHIPPING",
        user_action: "PAY_NOW",
        return_url: new URL("/store/checkout/paypal", origin).href,
        cancel_url: new URL(`/store/${productSlug}`, origin).href,
      } } },
    }),
  });
  const link = result.links?.find(({ rel }) => rel === "payer-action" || rel === "approve");
  if (!result.id || !paypalOrderIdPattern.test(result.id) || !link || new URL(link.href).origin !== paypalHosts[mode].checkout) {
    throw new Error("Invalid PayPal approval response");
  }
  return { id: result.id, approvalUrl: link.href };
}

export function verifiedPayPalCapture(payment: PayPalOrder, paypalOrderId: string, order: Pick<Order, "orderNumber" | "amount">) {
  const unit = payment.purchase_units?.[0];
  const captures = unit?.payments?.captures;
  const capture = captures?.[0];
  if (payment.id !== paypalOrderId || payment.status !== "COMPLETED"
      || payment.purchase_units?.length !== 1 || unit?.reference_id !== order.orderNumber
      || captures?.length !== 1 || capture?.status !== "COMPLETED"
      || !capture.id || !paypalOrderIdPattern.test(capture.id)
      || capture.amount?.currency_code !== "USD" || capture.amount.value !== usdAmount(order.amount)) {
    return null;
  }
  return capture.id;
}

export async function capturePayPalOrder(paypalOrderId: string, order: Order, mode: PayPalMode) {
  const headers = await paypalHeaders(mode);
  const path = `/v2/checkout/orders/${paypalOrderId}`;
  const getOrder = () => paypalJson<PayPalOrder>(mode, path, { headers });
  const payment = order.status === "PAID" ? await getOrder() : await paypalJson<PayPalOrder>(mode, `${path}/capture`, {
    method: "POST",
    headers: { ...headers, "PayPal-Request-Id": paypalOrderId },
    body: "{}",
  }).catch(getOrder);
  return verifiedPayPalCapture(payment, paypalOrderId, order);
}
