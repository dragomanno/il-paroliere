# Il Paroliere

**Definizioni aperte, lingua viva.**

Il Paroliere è un dizionario italiano aperto e originale, curato da [Pistakkio®](https://www.pistakkio.net).

🌐 [ilparoliere.online](https://ilparoliere.online)

---

## Stack

- **Next.js 15** App Router + TypeScript
- **Tailwind CSS 3.4**
- **Netlify** (hosting + deploy automatico)
- **Supabase** (Fase 4 — non ancora attivo)

## Struttura

```
src/
  app/
    page.tsx              # Homepage
    parola/[lemma]/
      page.tsx            # Pagina lemma
  content/
    lemmas/
      garbo.ts
      cura.ts
      algoritmo.ts
      index.ts            # Registro centrale + lookup map
  lib/
    types.ts              # LemmaEntry type
    search.ts             # Search module (stub Phase 1)
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

## Licenze

- **Codice**: MIT — vedi [LICENSE](./LICENSE)
- **Contenuto editoriale**: CC BY-SA 4.0 — vedi [CONTENT-LICENSE.md](./CONTENT-LICENSE.md)

## Principio editoriale

Ogni definizione è scritta da zero. Le fonti proprietarie (Treccani, De Mauro,
Sabatini-Coletti, Devoto-Oli) sono collegate come riferimento esterno,
**mai copiate**.

---

Made with care by [Pistakkio®](https://www.pistakkio.net)
