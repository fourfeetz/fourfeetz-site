create type payment_status as enum ('PENDING', 'PAID', 'FAILED', 'CANCELED', 'REFUNDED');
create type payment_provider as enum ('TOSS', 'PAYPAL', 'PAYHIP');

create table products (
  id uuid primary key,
  slug text not null unique,
  price integer not null check (price >= 0),
  currency char(3) not null,
  status text not null check (status in ('preparing', 'coming-soon', 'available')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table orders (
  id uuid primary key,
  order_number text not null unique,
  product_id uuid not null references products(id),
  buyer_email text,
  payment_provider payment_provider not null,
  payment_status payment_status not null default 'PENDING',
  provider_payment_id text unique,
  amount integer not null check (amount >= 0),
  currency char(3) not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table payment_events (
  id uuid primary key,
  order_id uuid not null references orders(id),
  provider_event_id text not null unique,
  event_type text not null,
  processed_at timestamptz not null default now()
);

create table download_entitlements (
  id uuid primary key,
  order_id uuid not null references orders(id),
  product_id uuid not null references products(id),
  expires_at timestamptz not null,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  unique (order_id, product_id)
);

create index orders_status_created_at_idx on orders(payment_status, created_at desc);
create index payment_events_order_id_idx on payment_events(order_id);
create index download_entitlements_expires_at_idx on download_entitlements(expires_at) where revoked_at is null;

-- Apply least-privilege grants and provider-specific row-level security before production use.
