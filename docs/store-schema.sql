-- Idempotent Creator Store schema for the dedicated Neon database branch selected by DATABASE_URL_UNPOOLED.
create extension if not exists pgcrypto;

create table if not exists store_schema_migrations (
  version text primary key,
  applied_at timestamptz not null default now()
);

do $$ begin
  create type payment_status as enum ('PENDING', 'PAID', 'FAILED', 'CANCELED', 'REFUNDED');
exception when duplicate_object then null; end $$;

do $$ begin
  create type payment_provider as enum ('TOSS', 'PAYPAL', 'PAYHIP');
exception when duplicate_object then null; end $$;

create table if not exists products (
  id uuid primary key,
  slug text not null unique,
  price integer not null check (price >= 0),
  currency char(3) not null check (currency in ('KRW', 'USD')),
  status text not null check (status in ('preparing', 'coming-soon', 'available')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key,
  order_number text not null unique,
  product_id uuid not null references products(id),
  buyer_email text,
  payment_provider payment_provider not null,
  payment_status payment_status not null default 'PENDING',
  provider_payment_id text unique,
  amount integer not null check (amount > 0),
  currency char(3) not null check (currency in ('KRW', 'USD')),
  locale char(2) check (locale in ('ko', 'en')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table orders add column if not exists locale char(2) check (locale in ('ko', 'en'));
alter table orders add column if not exists refund_policy_version text;
alter table orders add column if not exists refund_policy_consented_at timestamptz;

create table if not exists payment_events (
  id uuid primary key,
  order_id uuid not null references orders(id),
  provider_event_id text not null unique,
  event_type text not null,
  processed_at timestamptz not null default now()
);

create table if not exists download_entitlements (
  id uuid primary key,
  order_id uuid not null references orders(id),
  product_id uuid not null references products(id),
  expires_at timestamptz not null,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  unique (order_id, product_id)
);

create table if not exists download_access_tokens (
  id uuid primary key,
  order_id uuid not null references orders(id),
  product_id uuid not null references products(id),
  locale char(2) not null check (locale in ('ko', 'en')),
  token_hash char(64) not null unique,
  expires_at timestamptz not null,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists download_delivery_events (
  id uuid primary key,
  order_id uuid not null references orders(id),
  product_id uuid not null references products(id),
  locale char(2) not null check (locale in ('ko', 'en')),
  requested_at timestamptz not null,
  authentication_succeeded boolean not null,
  transfer_started_at timestamptz,
  server_result text not null check (server_result in ('AUTHENTICATION_DENIED', 'AUTHORIZED', 'ASSET_UNAVAILABLE', 'STREAM_STARTED', 'SERVER_ERROR')),
  refund_policy_version text,
  refund_policy_consented_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists orders_status_created_at_idx on orders(payment_status, created_at desc);
create index if not exists payment_events_order_id_idx on payment_events(order_id);
create index if not exists download_entitlements_expires_at_idx on download_entitlements(expires_at) where revoked_at is null;
create index if not exists download_access_tokens_order_id_idx on download_access_tokens(order_id);
create index if not exists download_access_tokens_expires_at_idx on download_access_tokens(expires_at) where revoked_at is null;
create index if not exists download_delivery_events_order_id_requested_at_idx on download_delivery_events(order_id, requested_at desc);

insert into products (id, slug, price, currency, status) values
  ('3f1ff879-9a8b-4d61-a78a-e47f2c330001', 'free-pet-video-prompt', 0, 'KRW', 'preparing'),
  ('3f1ff879-9a8b-4d61-a78a-e47f2c330002', 'pet-video-starter-pack', 9900, 'KRW', 'preparing'),
  ('3f1ff879-9a8b-4d61-a78a-e47f2c330003', 'pet-creator-pack', 19900, 'KRW', 'coming-soon')
on conflict (id) do nothing;

insert into store_schema_migrations (version) values ('20261026_001')
on conflict (version) do nothing;

insert into store_schema_migrations (version) values ('20261027_002')
on conflict (version) do nothing;

insert into store_schema_migrations (version) values ('20261027_003')
on conflict (version) do nothing;

-- Use a dedicated least-privilege application role before production activation.
