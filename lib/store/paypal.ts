import { createHmac, timingSafeEqual } from "node:crypto";
import type { Order } from "./payment.ts";

const api = "https://api-m.sandbox.paypal.com";
export function paypalCheckoutCookie(paypalOrderId: string) {
  return `ff_paypal_${paypalOrderId}`;
}

export function paypalCheckoutProof(orderNumber: string, paypalOrderId: string) {
  return createHmac("sha256", process.env.PAYPAL_SANDBOX_CLIENT_SECRET!)
    .update(`fourfeetz:paypal-sandbox:${orderNumber}:${paypalOrderId}`)
    .digest("hex");
}

export function validPayPalCheckoutProof(proof: string | undefined, orderNumber: string, paypalOrderId: string) {
  if (!proof || !/^[0-9a-f]{64}$/.test(proof)) return false;
  return timingSafeEqual(Buffer.from(proof, "hex"), Buffer.from(paypalCheckoutProof(orderNumber, paypalOrderId), "hex"));
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

async function paypalJson<T>(path: string, init: RequestInit): Promise<T> {
  const response = await fetch(api + path, { ...init, cache: "no-store", signal: AbortSignal.timeout(10_000) });
  if (!response.ok) throw new Error("PayPal sandbox request failed");
  return response.json() as Promise<T>;
}

async function paypalHeaders() {
  const credentials = Buffer.from(`${process.env.PAYPAL_SANDBOX_CLIENT_ID}:${process.env.PAYPAL_SANDBOX_CLIENT_SECRET}`).toString("base64");
  const token = await paypalJson<{ access_token?: string }>("/v1/oauth2/token", {
    method: "POST",
    headers: { Authorization: `Basic ${credentials}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: "grant_type=client_credentials",
  });
  if (!token.access_token) throw new Error("Missing PayPal sandbox token");
  return { Authorization: `Bearer ${token.access_token}`, "Content-Type": "application/json", Prefer: "return=representation" };
}

export async function createPayPalSandboxOrder(order: Order, origin: string) {
  const headers = await paypalHeaders();
  const result = await paypalJson<PayPalOrder>("/v2/checkout/orders", {
    method: "POST",
    headers: { ...headers, "PayPal-Request-Id": order.id },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [{ reference_id: order.orderNumber, amount: { currency_code: "USD", value: usdAmount(order.amount) } }],
      payment_source: { paypal: { experience_context: {
        shipping_preference: "NO_SHIPPING",
        user_action: "PAY_NOW",
        return_url: new URL("/store/checkout/paypal", origin).href,
        cancel_url: new URL("/store/pet-video-starter-pack", origin).href,
      } } },
    }),
  });
  const link = result.links?.find(({ rel }) => rel === "payer-action" || rel === "approve");
  if (!result.id || !paypalOrderIdPattern.test(result.id) || !link || new URL(link.href).origin !== "https://www.sandbox.paypal.com") {
    throw new Error("Invalid PayPal sandbox approval response");
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

export async function capturePayPalSandboxOrder(paypalOrderId: string, order: Order) {
  const headers = await paypalHeaders();
  const path = `/v2/checkout/orders/${paypalOrderId}`;
  const getOrder = () => paypalJson<PayPalOrder>(path, { headers });
  const payment = order.status === "PAID" ? await getOrder() : await paypalJson<PayPalOrder>(`${path}/capture`, {
    method: "POST",
    headers: { ...headers, "PayPal-Request-Id": paypalOrderId },
    body: "{}",
  }).catch(getOrder);
  return verifiedPayPalCapture(payment, paypalOrderId, order);
}
