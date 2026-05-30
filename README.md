# Il Paroliere

**Definizioni aperte, lingua viva.**

Il Paroliere è un dizionario italiano aperto e originale, curato da [Pistakkio®](https://www.pistakkio.net).

🌐 [ilparoliere.online](https://ilparoliere.online)

---

## Stack

- **Next.js 15** App Router + TypeScript
- **Tailwind CSS 3.4**
- **Neon** (database PostgreSQL serverless — Netlify DB)
- **Drizzle ORM** (query layer + migrations)
- **Netlify** (hosting + deploy automatico)

## Struttura

```
src/
  app/
    page.tsx              # Homepage
    parola/[lemma]/
      page.tsx            # Pagina lemma
  content/
    lemmas/               # File seed .ts — fonte editoriale autorevole
      garbo.ts
      cura.ts
      algoritmo.ts
      index.ts            # Barrel export → DB layer (Phase 4+)
  db/
    schema.ts             # Drizzle schema
    migrations/           # SQL migrations generate da Drizzle Kit
  lib/
    db/
      client.ts           # Neon serverless client (lazy init)
      queries.ts          # Query helpers: getLemmaFromDB, getAllSlugsFromDB, …
      index.ts            # Barrel export
    types.ts              # LemmaEntry type
    search.ts             # Search module (FTS Postgres + pg_trgm)
  scripts/
    check-internal-links.ts  # Audit internal linking tra lemmi
```

## Avvio locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Database — Neon + Drizzle

Il DB è un'istanza Neon PostgreSQL gestita tramite Netlify DB.
La variabile d'ambiente `DATABASE_URL` è iniettata automaticamente da Netlify in produzione.

Per migrazioni locali usa `DATABASE_URL_OWNER` (connessione TCP diretta):

```bash
DATABASE_URL_OWNER=<owner-url> npx drizzle-kit migrate
```

Per generare SQL da modifiche allo schema:

```bash
npx drizzle-kit generate
```

## Internal linking audit

Dopo ogni nuovo lemma committato, eseguire:

```bash
npx tsx scripts/check-internal-links.ts
```

Lo script segnala:
- **Forward issues** — termini referenziati in synonyms/antonyms/relatedWords che non hanno ancora uno slug pubblicato
- **Backward issues** — lemmi che dovrebbero essere referenziati da altre voci già pubblicate ma non lo sono ancora

## Licenze

- **Codice**: MIT — vedi [LICENSE](./LICENSE)
- **Contenuto editoriale**: CC BY-SA 4.0 — vedi [CONTENT-LICENSE.md](./CONTENT-LICENSE.md)

## Principio editoriale

Ogni definizione è scritta da zero. Le fonti proprietarie (Treccani, De Mauro,
Sabatini-Coletti, Devoto-Oli) sono collegate come riferimento esterno,
**mai copiate**.

---

Made with care by [Pistakkio®](https://www.pistakkio.net)
