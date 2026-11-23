-- Apply only to a dedicated Preview/Development Neon branch first. No store/order table is altered.
create table if not exists blog_posts (
  id uuid primary key,
  slug text not null,
  locale text not null default 'ko' check (locale in ('ko')),
  title text not null, summary text not null,
  category text not null check (category in ('제작기','도구 사용 후기','제작 가이드')),
  tags text[] not null default '{}', hero_image_url text, hero_image_alt text,
  draft_content jsonb not null, published_content jsonb,
  status text not null default 'draft' check (status in ('draft','published','unpublished')),
  version integer not null default 1, comments_enabled boolean not null default true,
  published_at timestamptz, updated_at timestamptz not null default now(), created_at timestamptz not null default now(),
  unique(locale, slug)
);
create index if not exists blog_posts_public_idx on blog_posts(status, published_at desc) where status='published';

create table if not exists insight_comments (
  id uuid primary key, article_path text not null, parent_id uuid references insight_comments(id) on delete cascade,
  nickname text not null, body text not null,
  status text not null default 'pending' check(status in ('pending','approved','hidden','spam')),
  is_admin_reply boolean not null default false,
  delete_token_hash text, fingerprint_hash text not null, duplicate_hash text not null,
  created_at timestamptz not null default now(), moderated_at timestamptz, moderated_by text,
  constraint admin_reply_has_parent check(not is_admin_reply or parent_id is not null)
);
create index if not exists insight_comments_public_idx on insight_comments(article_path,created_at) where status='approved';
create index if not exists insight_comments_moderation_idx on insight_comments(status,created_at desc);
create unique index if not exists insight_comments_duplicate_idx on insight_comments(fingerprint_hash,duplicate_hash) where status in ('pending','approved');

create table if not exists insight_comment_settings (
  article_path text primary key, comments_enabled boolean not null default true,
  updated_at timestamptz not null default now(), updated_by text not null
);

create table if not exists insight_comment_rate_limits (
  bucket_hash text not null, window_start timestamptz not null, request_count integer not null default 1,
  primary key(bucket_hash,window_start)
);

-- Rollback (backs up content first):
-- pg_dump "$BLOG_DATABASE_URL_UNPOOLED" --table=blog_posts --table=insight_comments --table=insight_comment_rate_limits --table=insight_comment_settings > blog-backup.sql
-- drop table if exists insight_comment_rate_limits; drop table if exists insight_comment_settings; drop table if exists insight_comments; drop table if exists blog_posts;
