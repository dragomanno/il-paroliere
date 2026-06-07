# Procedura di pubblicazione lemmi — Il Paroliere

> **Versione:** 1.0 — Giugno 2026  
> **Autore:** Pistakkio®  
> **Scope:** ogni volta che si aggiungono o modificano lemmi nel repo

---

## Panoramica

La pipeline di pubblicazione di Il Paroliere è **quasi completamente automatica**.
Il trigger è un push (o merge) su `main` che tocca file in `src/content/lemmas/`.
Tutto il resto — seed DB, sitemap, homepage, ricerca interna, IndexNow — avviene
senza intervento manuale.

```
push → main
  ├── GitHub Actions: migrate + seed + fix-search-vector + IndexNow
  └── Netlify: build Next.js → deploy produzione
```

---

## Passi operativi (cosa fare tu)

### 1. Scrivere il lemma

Creare il file `src/content/lemmas/<slug>.ts` con il modello `LemmaEntry`.

Regole editoriali:
- `editorialStatus: "reviewed"` — solo per voci rilette e approvate
- `indexable: true` — solo per voci editorialmente complete
- `definition` e `shortDefinition` originali — mai copiare da Treccani, De Mauro, Sabatini-Coletti, Devoto-Oli
- `updatedAt` aggiornato alla data del commit

### 2. Registrare il lemma in `static.ts`

Aprire `src/content/lemmas/static.ts` e aggiungere:

```ts
// In cima al file — sezione import
import { <slug> } from "./<slug>";

// Nell'array allLemmas — in ordine alfabetico o per batch
  <slug>,
```

⚠️ **Senza questo passaggio il lemma non viene seedato nel DB e non appare sul sito.**

Verificare che il TypeScript compili:
```bash
./node_modules/.bin/tsc --noEmit
```

### 3. Aggiornare i `relatedWords` delle voci collegate

Se il nuovo lemma appartiene a un cluster semantico, aggiungere il suo slug
ai `relatedWords` dei lemmi correlati già pubblicati per garantire
l'interlinking bidirezionale.

### 4. Commit su feature branch

```bash
git checkout -b feat/<descrizione-batch>
git add src/content/lemmas/<slug>.ts src/content/lemmas/static.ts
git commit -m "feat(lemmi): <descrizione sintetica>

- <slug1>: <nota rapida>
- <slug2>: <nota rapida>
updatedAt: <data>"
git push -u origin feat/<descrizione-batch>
```

### 5. Merge in `main`

```bash
git checkout main
git merge --no-ff feat/<descrizione-batch> -m "Merge feat/<descrizione-batch> into main"
git push origin main
```

---

## Cosa avviene in automatico dopo il push

### GitHub Actions — workflow `DB Migrate & Seed`

Si attiva quando un push su `main` tocca uno di questi path:
```
src/db/migrations/**
src/db/schema.ts
src/content/lemmas/**
scripts/seed-db.ts
```

Passi eseguiti in sequenza:

| # | Step | Comando | Effetto |
|---|------|---------|---------|
| 1 | Drizzle migrations | `npx drizzle-kit migrate` | Applica eventuali nuove migrazioni schema |
| 2 | Seed DB | `npm run db:seed` | Upsert di tutti i lemmi da `static.ts` nel DB Neon |
| 3 | Fix search vectors | `npx tsx scripts/fix-search-vector.ts` | Ricalcola i `tsvector` NULL per la ricerca FTS |
| 4 | IndexNow | `npx tsx scripts/indexnow-notify.ts` | Notifica Bing, Yandex e motori IndexNow-compatibili |

### Netlify — build produzione

Si attiva in parallelo al workflow GitHub Actions.

Comando di build:
```
npm run db:seed && npm run build
```

Il seed viene rieseguito anche qui per sicurezza (idempotente).

Dopo il build Next.js, i seguenti elementi si aggiornano **automaticamente**
senza nessun intervento:

| Elemento | Come si aggiorna |
|----------|-----------------|
| **Sitemap** (`/sitemap.xml`) | `src/app/sitemap.ts` legge tutti i lemmi `indexable: true` dal DB a build time |
| **Homepage — conteggio voci** | `page.tsx` legge `allLemmas.length` dal DB — numero aggiornato al prossimo deploy |
| **Ricerca interna** | `GET /api/search?q=…` interroga il DB Neon in real-time — nessun indice statico da ricalcolare |

---

## Monitoraggio

Dopo il push, verificare:

1. **GitHub Actions** — [github.com/dragomanno/il-paroliere/actions](https://github.com/dragomanno/il-paroliere/actions)
   - Workflow `DB Migrate & Seed` → verde ✅
   - Step `Notify IndexNow` → `HTTP 202` nel log

2. **Netlify** — [app.netlify.com](https://app.netlify.com)
   - Deploy in produzione → verde ✅

3. **Sito** — verificare le nuove voci su:
   ```
   https://ilparoliere.online/parola/<slug>
   ```

4. **Sitemap** — verificare che i nuovi slug compaiano in:
   ```
   https://ilparoliere.online/sitemap.xml
   ```

---

## Checklist rapida per ogni batch

```
[ ] File .ts creato con editorialStatus: "reviewed" e indexable: true
[ ] Lemma registrato in static.ts (import + array allLemmas)
[ ] relatedWords aggiornati sui lemmi correlati (interlinking bidirezionale)
[ ] tsc --noEmit: nessun errore
[ ] Commit su feature branch con messaggio convenzionale
[ ] Merge --no-ff in main
[ ] Push origin main
[ ] GitHub Actions: workflow verde
[ ] Netlify: deploy verde
[ ] Verifica pagina su ilparoliere.online/parola/<slug>
[ ] Verifica sitemap aggiornata
```

---

## Casi speciali

### Correzioni a lemmi esistenti
Stessi passi, ma senza toccare `static.ts` (il lemma è già registrato).
Il seed è idempotente: usa `ON CONFLICT DO UPDATE`, quindi sovrascrive
i campi modificati. Aggiornare sempre `updatedAt`.

### Nuovo batch su cluster semantico
1. Scrivere tutti i file del cluster
2. Aggiornare `static.ts` con tutti gli import e le entries del batch
3. Aggiornare i `relatedWords` di ogni lemma del cluster verso tutti gli altri
4. Un solo commit per l'intero batch, con messaggio descrittivo

### Schema DB modificato
Se si aggiunge un campo al modello `LemmaEntry` + `schema.ts`:
1. Generare la migrazione: `npm run db:generate`
2. Committare i file in `src/db/migrations/`
3. Il workflow applica la migrazione prima del seed

---

*Il Paroliere — Definizioni aperte, lingua viva.*  
*[ilparoliere.online](https://ilparoliere.online) · [pistakkio.net](https://www.pistakkio.net)*
