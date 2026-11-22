# Insights CMS preview operations

This feature is fail-closed until authentication, a non-production Neon branch, Blob, bot verification, and mail mode are configured. Do not point the first migration or verification run at Production.

## Preview setup

1. Create or select a Neon Preview branch and take a branch snapshot/backup. Set `DATABASE_URL_UNPOOLED` only in Local/Preview.
2. Run `npm run db:migrate:blog`. It creates only `blog_posts`, `insight_comments`, and `insight_comment_rate_limits`; it does not alter store or order tables.
3. Create Google OAuth web credentials. Add `https://<preview-host>/api/auth/callback/google` and `http://localhost:3000/api/auth/callback/google`. Set `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, a generated `AUTH_SECRET`, and comma-separated `ADMIN_EMAILS`.
4. Connect a dedicated public Vercel Blob store with the `BLOG_BLOB` prefix and set `BLOG_BLOB_READ_WRITE_TOKEN` plus `BLOG_BLOB_STORE_ID` only for Local/Preview. Uploads are public editorial images, so never choose customer photos, paid-download files, or private production assets.
5. For Preview use `COMMENTS_BOT_MODE=mock`, `NEXT_PUBLIC_COMMENTS_BOT_MODE=mock`, and `COMMENT_EMAIL_MODE=mock`. For Production use Turnstile mode plus both Turnstile keys. Use Resend mode only after sender verification and recipient review.
6. Set a long random `COMMENT_TOKEN_PEPPER`. Changing it invalidates guest deletion tokens.

## Backup and rollback

Before migration or rollback, export only the feature tables:

`pg_dump "$DATABASE_URL_UNPOOLED" --table=blog_posts --table=insight_comments --table=insight_comment_rate_limits --table=insight_comment_settings > blog-backup.sql`

Restore with `psql "$DATABASE_URL_UNPOOLED" < blog-backup.sql`. Roll back only after a verified backup by dropping the three tables in the reverse dependency order shown at the end of `docs/blog-schema.sql`. Blob objects under `insights/` are not deleted by database rollback; inventory them separately before any manual cleanup.

## Recovery notes

- A `409 EDIT_CONFLICT` means another session saved a newer version. Reload and merge; do not retry blindly.
- Publishing copies the current draft JSON to a separate public snapshot. Later draft saves do not change it.
- Email notification runs after comment persistence and is best-effort. Mail failure must be investigated from logs but does not remove the pending comment.
- Code-authored legacy insights remain read-only in the first version and reserve their slugs.
