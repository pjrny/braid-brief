import { buildBrief } from "./brief";
import { isISODate, todayISO } from "./rng";

interface ArchiveStore {
  put(key: string, value: string): Promise<void>;
}

export interface Env {
  ASSETS?: { fetch: (request: Request) => Promise<Response> };
  ARCHIVE?: ArchiveStore;
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...CORS },
  });
}

function resolveDate(raw: string | null) {
  const today = todayISO();
  if (!isISODate(raw)) return today;
  return raw > today ? today : raw;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS });
    }

    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    if (path === "/api/brief" || path === "/api/brief/today") {
      const date = resolveDate(url.searchParams.get("date"));
      const brief = buildBrief(date);
      if (env.ARCHIVE) {
        await env.ARCHIVE.put(
          `brief:${date}`,
          JSON.stringify({ storedAt: Date.now(), bookIds: brief.books.map((b) => b.id) }),
        );
      }
      return json(brief);
    }

    if (path === "/api/health") {
      return json({ ok: true, service: "braid-brief", date: todayISO() });
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return json({ error: "not found", hint: "GET /api/brief?date=YYYY-MM-DD" }, 404);
  },

  async scheduled(_event: unknown, env: Env) {
    const date = todayISO();
    const brief = buildBrief(date);
    if (env.ARCHIVE) {
      await env.ARCHIVE.put(
        `brief:${date}`,
        JSON.stringify({ storedAt: Date.now(), thesis: brief.thesis, bookIds: brief.books.map((b) => b.id) }),
      );
    }
  },
};
