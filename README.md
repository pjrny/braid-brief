# Braid Brief

Daily morning brief: four Productivity Game 1-pagers + Dimensional Braid Engine research frontier.

This repository is a **standalone Cloudflare Worker + Pages** deploy. Each date is a deterministic edition — reuse it every morning; history is the calendar.

## What you get

| Route | Purpose |
| --- | --- |
| `GET /` | Static Pages UI (date nav, four pages, life simulator, scholar/community/learning) |
| `GET /api/brief` | Today's brief JSON |
| `GET /api/brief?date=YYYY-MM-DD` | Deterministic archive edition |
| `GET /api/health` | Liveness |
| Cron `0 11 * * *` | Optional KV fingerprint of the day's four pages |

**Tab 1.** Four 1-pagers: concept, facsimile of the original sheet, further-reading links.
**Life simulator.** Six hypothetical days. Following **one** of the four pages is enough to win the KBI.
**Tab 2.** Google Scholar–grade papers that support, qualify, or challenge DBE, plus labs, companies, schools, GitHub, MIT/YouTube lectures, and shipping hardware.

## Deploy the Worker (API + static assets)

```bash
npm install
npx wrangler login
npx wrangler deploy
```

Optional archive namespace:

```bash
npx wrangler kv namespace create ARCHIVE
```

Paste the id into `wrangler.toml` under `kv_namespaces` and redeploy.

## GitHub Actions

Add secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. Push to `main` deploys via `.github/workflows/deploy.yml`.

## Deploy as Cloudflare Pages

```bash
npx wrangler pages project create braid-brief
npx wrangler pages deploy public --project-name braid-brief
```

For live `/api/brief`, keep the Worker with `[assets]` as in `wrangler.toml` (Workers + Assets).

## JSON shape

```json
{
  "date": "2026-09-05",
  "thesis": "…",
  "books": [{ "id": "mindset", "title": "Mindset", "rules": [], "further": [] }],
  "scholar": [{ "stance": "support|challenge|qualify", "url": "https://…" }],
  "communities": [],
  "learning": []
}
```

Stance is editorial: **support** bolsters a DBE subsystem, **challenge** bounds or disproves a claim, **qualify** is ancestral or contested.

## License note

1-pager facsimiles are original restatements, not scans of Lozeron Academy LLC. DBE is a research thesis, not a shipped processor.
