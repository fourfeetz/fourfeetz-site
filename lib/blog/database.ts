export function getBlogDatabaseUrl(
  env: NodeJS.ProcessEnv = process.env,
): string | undefined {
  return env.BLOG_DATABASE_URL || undefined;
}

export function requireBlogDatabaseUrl(
  env: NodeJS.ProcessEnv = process.env,
): string {
  const value = getBlogDatabaseUrl(env);
  if (!value) throw new Error("BLOG_DATABASE_NOT_CONFIGURED");
  return value;
}

export function requireBlogMigrationDatabaseUrl(
  env: NodeJS.ProcessEnv = process.env,
): string {
  const value = env.BLOG_DATABASE_URL_UNPOOLED;
  if (!value) throw new Error("BLOG_DATABASE_UNPOOLED_NOT_CONFIGURED");
  return value;
}
