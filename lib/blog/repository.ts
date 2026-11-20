import { neon } from "@neondatabase/serverless";
import { randomUUID } from "node:crypto";
import type { BlogPost, PublicBlogPost } from "./types";

const connectionString = () => process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
const db = () => { const url = connectionString(); if (!url) throw new Error("BLOG_DATABASE_NOT_CONFIGURED"); return neon(url); };

function mapPost(row: Record<string, unknown>): BlogPost {
  return {
    id: String(row.id), slug: String(row.slug), locale: "ko", title: String(row.title), summary: String(row.summary),
    category: row.category as BlogPost["category"], tags: (row.tags as string[]) ?? [],
    heroImageUrl: row.hero_image_url ? String(row.hero_image_url) : null, heroImageAlt: row.hero_image_alt ? String(row.hero_image_alt) : null,
    draft: row.draft_content as BlogPost["draft"], published: row.published_content as BlogPost["published"],
    status: row.status as BlogPost["status"], version: Number(row.version), commentsEnabled: Boolean(row.comments_enabled),
    publishedAt: row.published_at ? new Date(String(row.published_at)).toISOString() : null,
    updatedAt: new Date(String(row.updated_at)).toISOString(),
  };
}

export const blogDatabaseConfigured = () => Boolean(connectionString());

export async function listPublicPosts(): Promise<PublicBlogPost[]> {
  if (!blogDatabaseConfigured()) return [];
  let rows;
  try { rows = await db()`select * from blog_posts where status = 'published' and published_content is not null order by published_at desc`; }
  catch (error) { if (typeof error === "object" && error && "code" in error && error.code === "42P01") return []; throw error; }
  return rows.map((row) => mapPost(row as Record<string, unknown>)).filter((p): p is PublicBlogPost => Boolean(p.published));
}

export async function getPublicPost(slug: string): Promise<PublicBlogPost | null> {
  if (!blogDatabaseConfigured()) return null;
  let rows;
  try { rows = await db()`select * from blog_posts where slug=${slug} and locale='ko' and status='published' and published_content is not null limit 1`; }
  catch (error) { if (typeof error === "object" && error && "code" in error && error.code === "42P01") return null; throw error; }
  const post = rows[0] ? mapPost(rows[0] as Record<string, unknown>) : null;
  return post?.published ? post as PublicBlogPost : null;
}

export async function listAdminPosts() { if (!blogDatabaseConfigured()) return []; const rows = await db()`select * from blog_posts order by updated_at desc`; return rows.map((r) => mapPost(r as Record<string, unknown>)); }
export async function getAdminPost(id: string) { if (!blogDatabaseConfigured()) return null; const rows = await db()`select * from blog_posts where id=${id} limit 1`; return rows[0] ? mapPost(rows[0] as Record<string, unknown>) : null; }

export async function saveDraft(input: Omit<BlogPost, "id"|"locale"|"published"|"status"|"updatedAt"|"publishedAt"> & { id?: string }) {
  const sql = db();
  if (!input.id) {
    const id = randomUUID();
    const rows = await sql`insert into blog_posts(id,slug,locale,title,summary,category,tags,hero_image_url,hero_image_alt,draft_content,status,version,comments_enabled)
      values(${id},${input.slug},'ko',${input.title},${input.summary},${input.category},${input.tags},${input.heroImageUrl},${input.heroImageAlt},${input.draft},'draft',1,${input.commentsEnabled}) returning *`;
    return mapPost(rows[0] as Record<string, unknown>);
  }
  const rows = await sql`update blog_posts set slug=${input.slug},title=${input.title},summary=${input.summary},category=${input.category},tags=${input.tags},hero_image_url=${input.heroImageUrl},hero_image_alt=${input.heroImageAlt},draft_content=${input.draft},comments_enabled=${input.commentsEnabled},version=version+1,updated_at=now() where id=${input.id} and version=${input.version} returning *`;
  if (!rows[0]) throw Object.assign(new Error("EDIT_CONFLICT"), { code: "EDIT_CONFLICT" });
  return mapPost(rows[0] as Record<string, unknown>);
}

export async function publishPost(id: string, version: number) {
  const rows = await db()`update blog_posts set published_content=draft_content,status='published',published_at=coalesce(published_at,now()),version=version+1,updated_at=now() where id=${id} and version=${version} returning *`;
  if (!rows[0]) throw Object.assign(new Error("EDIT_CONFLICT"), { code: "EDIT_CONFLICT" }); return mapPost(rows[0] as Record<string, unknown>);
}
export async function unpublishPost(id: string, version: number) { const rows=await db()`update blog_posts set status='unpublished',version=version+1,updated_at=now() where id=${id} and version=${version} returning *`; if(!rows[0]) throw Object.assign(new Error("EDIT_CONFLICT"),{code:"EDIT_CONFLICT"}); return mapPost(rows[0] as Record<string,unknown>); }
