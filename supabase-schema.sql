create table if not exists public.life_calendar_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  name text not null default '',
  birthday date not null,
  lifespan integer not null default 100 check (lifespan between 10 and 100),
  decade_start integer not null default 0 check (decade_start between 0 and 90),
  lang text not null default 'zh' check (lang in ('zh', 'en')),
  updated_at timestamptz not null default now()
);

create table if not exists public.life_calendar_weeks (
  user_id uuid not null references auth.users(id) on delete cascade,
  week_index integer not null check (week_index >= 0 and week_index < 5200),
  note text not null default '',
  mood text not null default '' check (mood in ('', 'calm', 'bright', 'low')),
  updated_at timestamptz not null default now(),
  primary key (user_id, week_index)
);

alter table public.life_calendar_profiles enable row level security;
alter table public.life_calendar_weeks enable row level security;

drop policy if exists "Users can read their own life calendar profile"
  on public.life_calendar_profiles;
drop policy if exists "Users can insert their own life calendar profile"
  on public.life_calendar_profiles;
drop policy if exists "Users can update their own life calendar profile"
  on public.life_calendar_profiles;
drop policy if exists "Users can read their own life calendar weeks"
  on public.life_calendar_weeks;
drop policy if exists "Users can insert their own life calendar weeks"
  on public.life_calendar_weeks;
drop policy if exists "Users can update their own life calendar weeks"
  on public.life_calendar_weeks;

create policy "Users can read their own life calendar profile"
  on public.life_calendar_profiles for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can insert their own life calendar profile"
  on public.life_calendar_profiles for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own life calendar profile"
  on public.life_calendar_profiles for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Users can read their own life calendar weeks"
  on public.life_calendar_weeks for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can insert their own life calendar weeks"
  on public.life_calendar_weeks for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own life calendar weeks"
  on public.life_calendar_weeks for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
