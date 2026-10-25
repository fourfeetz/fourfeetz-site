import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { Pool } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is required. Run this only against the intended Preview database.");

const source = await readFile(resolve(process.cwd(), "docs/store-schema.sql"), "utf8");
const pool = new Pool({ connectionString, max: 1 });
try {
  await pool.query("begin");
  await pool.query(source);
  await pool.query("commit");
  console.log("Creator Store schema migration completed.");
} catch (error) {
  await pool.query("rollback").catch(() => undefined);
  throw error;
} finally {
  await pool.end();
}
