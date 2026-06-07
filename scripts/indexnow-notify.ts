/**
 * Il Paroliere — IndexNow notification script
 *
 * Fetches all slugs from static.ts and submits them to IndexNow
 * so Bing, Yandex, and other IndexNow-compatible engines pick up
 * new or updated lemmas immediately after each seed.
 *
 * Reads INDEXNOW_KEY from environment (set as GitHub secret).
 *
 * Safe to run multiple times — IndexNow is idempotent.
 *
 * Usage:
 *   INDEXNOW_KEY=<key> npx tsx scripts/indexnow-notify.ts
 *
 * License: MIT
 */

import { allLemmas } from "../src/content/lemmas/static";

const KEY = process.env.INDEXNOW_KEY;
const HOST = "ilparoliere.online";

if (!KEY) {
  console.error("❌  INDEXNOW_KEY is not set.");
  process.exit(1);
}

async function notify() {
  const urls = allLemmas.map((l) => `https://${HOST}/parola/${l.slug}`);

  console.log(`📡  Notifying IndexNow — ${urls.length} URLs`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  };

  const resp = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (resp.ok || resp.status === 202) {
    console.log(`✅  IndexNow accepted (HTTP ${resp.status}) — ${urls.length} URLs submitted`);
  } else {
    const body = await resp.text();
    console.error(`❌  IndexNow error HTTP ${resp.status}: ${body.slice(0, 200)}`);
    process.exit(1);
  }
}

notify().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
