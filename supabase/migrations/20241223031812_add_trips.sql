create table trips (
  id bigint primary key generated always as identity,
  sticky boolean default false,
  title text not null,
  name text not null,
  images jsonb not null,
  tag1 text not null,
  tag2 text not null,
  tag3 text not null,
  date text not null,
  location text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add RLS policies
alter table trips enable row level security;

-- Allow public read access
create policy "Allow public read access"
  on trips for select
  to anon
  using (true);

-- Allow authenticated users to insert
create policy "Allow authenticated create"
  on trips for insert
  to authenticated
  with check (true);