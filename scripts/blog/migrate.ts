import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { Pool } from "@neondatabase/serverless";
import nextEnv from "@next/env";
import { requireBlogMigrationDatabaseUrl } from "../../lib/blog/database.ts";

nextEnv.loadEnvConfig(process.cwd());
const connectionString = requireBlogMigrationDatabaseUrl();
const source = await readFile(resolve(process.cwd(), "docs/blog-schema.sql"), "utf8");
const pool = new Pool({ connectionString, max: 1 });
try {
  await pool.query("begin"); await pool.query(source); await pool.query("commit");
  const result = await pool.query(`select table_name from information_schema.tables where table_schema=current_schema() and table_name=any($1::text[]) order by table_name`, [["blog_posts", "insight_comments", "insight_comment_rate_limits", "insight_comment_settings"]]);
  console.log(JSON.stringify({ tables: result.rows.map((row) => row.table_name) }));
} catch (error) {
  await pool.query("rollback").catch(() => undefined); throw error;
} finally { await pool.end(); }
