import assert from "node:assert/strict";
import test from "node:test";
import { paypalCheckoutProof, validPayPalCheckoutProof, verifiedPayPalCapture } from "../../lib/store/paypal.ts";
import { getPaymentReadiness } from "../../lib/store/readiness.ts";

const order = { orderNumber: "FF-20261115-111111111111111111111111", amount: 1999 };
const capture = { id: "CAPTURE1234", status: "COMPLETED", amount: { currency_code: "USD", value: "19.99" } };
const payment = {
  id: "PAYPAL1234", status: "COMPLETED",
  purchase_units: [{ reference_id: order.orderNumber, payments: { captures: [capture] } }],
};

test("PayPal grants fulfillment only for the matching completed USD capture", () => {
  assert.equal(verifiedPayPalCapture(payment, payment.id, order), capture.id);
  assert.equal(verifiedPayPalCapture(payment, "OTHER1234", order), null);
  assert.equal(verifiedPayPalCapture(payment, payment.id, { ...order, orderNumber: "another-order" }), null);
  assert.equal(verifiedPayPalCapture(payment, payment.id, { ...order, amount: 2000 }), null);
  for (const invalidCapture of [
    { ...capture, status: "PENDING" },
    { ...capture, amount: { ...capture.amount, currency_code: "KRW" } },
  ]) {
    const invalidPayment = { ...payment, purchase_units: [{ reference_id: order.orderNumber, payments: { captures: [invalidCapture] } }] };
    assert.equal(verifiedPayPalCapture(invalidPayment, payment.id, order), null);
  }
});

test("PayPal modes require separate environments, credentials, and paid delivery", () => {
  const env = {
    VERCEL_ENV: "preview", STORE_PAYPAL_SANDBOX_ENABLED: "true", PAYPAL_SANDBOX_CLIENT_ID: "sandbox-id",
    PAYPAL_SANDBOX_CLIENT_SECRET: "sandbox-secret", DATABASE_URL: "database", STORE_PAID_DOWNLOADS_ENABLED: "true",
    BLOB_STORE_ID: "private-blob", STORE_PAID_PDF_KO_BLOB_PATH: "ko.pdf", STORE_PAID_PDF_EN_BLOB_PATH: "en.pdf",
  };
  const live = {
    ...env, VERCEL_ENV: "production", STORE_PAYPAL_LIVE_ENABLED: "true",
    PAYPAL_LIVE_CLIENT_ID: "live-id", PAYPAL_LIVE_CLIENT_SECRET: "live-secret",
  };
  assert.equal(getPaymentReadiness(live).paypalMode, "live");
  assert.equal(getPaymentReadiness({ ...live, VERCEL_ENV: "preview" }).paypalMode, "sandbox");
  assert.equal(getPaymentReadiness({ ...live, STORE_PAYPAL_LIVE_ENABLED: "false" }).paypalMode, null);
  assert.equal(getPaymentReadiness({ ...live, PAYPAL_LIVE_CLIENT_SECRET: undefined }).paypalMode, null);
  assert.equal(getPaymentReadiness({ ...live, STORE_PAID_DOWNLOADS_ENABLED: "false" }).paypalMode, null);
  assert.equal(getPaymentReadiness(env).paypalMode, "sandbox");
  assert.equal(getPaymentReadiness({ ...env, VERCEL_ENV: "production" }).paypalMode, null);
  assert.equal(getPaymentReadiness({ ...env, STORE_PAID_DOWNLOADS_ENABLED: undefined }).paypalMode, null);
  assert.equal(getPaymentReadiness({ ...env, PAYPAL_SANDBOX_CLIENT_SECRET: undefined }).paypalMode, null);
});

test("PayPal checkout proof binds the local and provider orders", () => {
  const original = process.env.PAYPAL_SANDBOX_CLIENT_SECRET;
  const originalLive = process.env.PAYPAL_LIVE_CLIENT_SECRET;
  process.env.PAYPAL_LIVE_CLIENT_SECRET = "example-sandbox-key";
  process.env.PAYPAL_SANDBOX_CLIENT_SECRET = "example-sandbox-key";
  try {
    const proof = paypalCheckoutProof(order.orderNumber, payment.id, "sandbox");
    assert.equal(validPayPalCheckoutProof(proof, order.orderNumber, payment.id, "sandbox"), true);
    assert.equal(validPayPalCheckoutProof(proof, order.orderNumber, "OTHER1234", "sandbox"), false);
    assert.equal(validPayPalCheckoutProof(proof, "different-order", payment.id, "sandbox"), false);
    assert.equal(validPayPalCheckoutProof(proof, order.orderNumber, payment.id, "live"), false);
    assert.equal(validPayPalCheckoutProof(undefined, order.orderNumber, payment.id, "sandbox"), false);
  } finally {
    if (originalLive === undefined) delete process.env.PAYPAL_LIVE_CLIENT_SECRET;
    else process.env.PAYPAL_LIVE_CLIENT_SECRET = originalLive;
    if (original === undefined) delete process.env.PAYPAL_SANDBOX_CLIENT_SECRET;
    else process.env.PAYPAL_SANDBOX_CLIENT_SECRET = original;
  }
});
