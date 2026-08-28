# Life Calendar

A static bilingual life calendar app. Users sign in with Supabase Auth, set a name, birthday, and expected lifespan, then record notes and colors on individual life weeks.

## Files

- `index.html` - App structure.
- `styles.css` - Visual system, responsive layout, and one-page A4 print styling.
- `app.js` - Calendar calculation, SVG rendering, zoom/pan, Supabase sync, notes, colors, and bilingual copy.
- `supabase-config.js` - Public Supabase browser config.
- `supabase-schema.sql` - Supabase tables and row-level security policies.
- `vercel.json` - Marks the project as a static Vercel site.

## Supabase

Run `supabase-schema.sql` in Supabase SQL Editor before production use.

In Supabase Authentication URL Configuration, set:

- Site URL: your Vercel production URL
- Redirect URLs:
  - your Vercel production URL
  - `http://127.0.0.1:8765`
  - optional Vercel preview wildcard, such as `https://*-your-vercel-team.vercel.app/**`

For Google login, the Google Cloud OAuth redirect URI should be the Supabase callback URL:

```text
https://uqxnqflbavwcfdqdltfj.supabase.co/auth/v1/callback
```

## Vercel

Import this repository into Vercel with:

- Framework Preset: Other
- Build Command: empty
- Output Directory: empty, or `.` if Vercel requires a value

This project does not need a build step.
