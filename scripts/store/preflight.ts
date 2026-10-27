import { neon } from "@neondatabase/serverless";
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd());
const connectionString = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
if (!connectionString) throw new Error("A Neon database URL is required.");

const sql = neon(connectionString);
const [connection] = await sql.query("select current_database() as database_name, current_schema() as schema_name");
const tables = await sql.query(
  `select c.relname as table_name,
          coalesce(s.n_live_tup, 0)::bigint as estimated_rows
     from pg_class c
     join pg_namespace n on n.oid = c.relnamespace
     left join pg_stat_user_tables s on s.relid = c.oid
    where n.nspname = current_schema()
      and c.relkind = 'r'
      and c.relname = any($1::text[])
    order by c.relname`,
  [["products", "orders", "payment_events", "download_entitlements", "download_access_tokens", "store_schema_migrations"]],
);
const expectedTables = new Set(["products", "orders", "payment_events", "download_entitlements", "download_access_tokens", "store_schema_migrations"]);
const completeSchema = tables.length === expectedTables.size && tables.every((row) => expectedTables.has(String(row.table_name)));
const counts = completeSchema ? await sql.query(
  `select (select count(*)::int from products) as products,
          (select count(*)::int from orders) as orders,
          (select count(*)::int from payment_events) as payment_events,
          (select count(*)::int from download_entitlements) as download_entitlements,
          (select count(*)::int from download_access_tokens) as download_access_tokens,
          (select count(*)::int from store_schema_migrations) as migrations`,
) : [];
const indexes = await sql.query(
  `select indexname from pg_indexes where schemaname = current_schema()
    and indexname = any($1::text[]) order by indexname`,
  [["orders_status_created_at_idx", "payment_events_order_id_idx", "download_entitlements_expires_at_idx", "download_access_tokens_order_id_idx", "download_access_tokens_expires_at_idx"]],
);

console.log(JSON.stringify({ connection, tables, counts: counts[0] ?? null, indexes: indexes.map((row) => row.indexname) }));
