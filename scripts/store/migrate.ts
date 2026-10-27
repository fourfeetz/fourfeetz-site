import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { Pool } from "@neondatabase/serverless";
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd());
const connectionString = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL_UNPOOLED or DATABASE_URL is required. Run this only against the intended database.");

const source = await readFile(resolve(process.cwd(), "docs/store-schema.sql"), "utf8");
const pool = new Pool({ connectionString, max: 1 });
try {
  const existing = await pool.query<{ table_name: string }>(
    `select c.relname as table_name
       from pg_class c join pg_namespace n on n.oid = c.relnamespace
      where n.nspname = current_schema()
        and c.relkind = 'r'
        and c.relname = any($1::text[])`,
    [["products", "orders", "payment_events", "download_entitlements", "download_access_tokens", "download_delivery_events"]],
  );
  const markerExists = await pool.query<{ exists: boolean }>("select to_regclass('store_schema_migrations') is not null as exists");
  let knownMigration = false;
  if (markerExists.rows[0]?.exists) {
    const marker = await pool.query<{ exists: boolean }>("select exists(select 1 from store_schema_migrations where version = $1) as exists", ["20261026_001"]);
    knownMigration = Boolean(marker.rows[0]?.exists);
  }
  if (existing.rows.length && !knownMigration) throw new Error(`Existing Creator Store tables found without migration marker: ${existing.rows.map((row) => row.table_name).sort().join(", ")}`);

  await pool.query("begin");
  await pool.query(source);
  await pool.query("commit");
  const tables = await pool.query<{ table_name: string }>(
    `select c.relname as table_name from pg_class c join pg_namespace n on n.oid = c.relnamespace
      where n.nspname = current_schema() and c.relkind = 'r'
        and c.relname = any($1::text[]) order by c.relname`,
    [["products", "orders", "payment_events", "download_entitlements", "download_access_tokens", "download_delivery_events", "store_schema_migrations"]],
  );
  const indexes = await pool.query<{ indexname: string }>(
    `select indexname from pg_indexes where schemaname = current_schema()
      and indexname = any($1::text[]) order by indexname`,
    [["orders_status_created_at_idx", "payment_events_order_id_idx", "download_entitlements_expires_at_idx", "download_access_tokens_order_id_idx", "download_access_tokens_expires_at_idx", "download_delivery_events_order_id_requested_at_idx"]],
  );
  const products = await pool.query<{ slug: string; price: number; currency: string; status: string }>("select slug, price, currency, status from products order by slug");
  console.log(JSON.stringify({ migration: "20261027_003", tables: tables.rows.map((row) => row.table_name), indexes: indexes.rows.map((row) => row.indexname), products: products.rows }));
} catch (error) {
  await pool.query("rollback").catch(() => undefined);
  throw error;
} finally {
  await pool.end();
}
