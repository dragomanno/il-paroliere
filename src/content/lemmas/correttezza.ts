// Il Paroliere — Lemma: correttezza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const correttezza: LemmaEntry = {
  lemma: "correttezza",
  slug: "correttezza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale", "tecnico (sport, diritto)"],
  domains: ["etica", "comportamento sociale", "diritto", "sport"],

  definition:
    "Qualità di chi si comporta secondo le regole condivise — scritte o tacite — di " +
    "un contesto, senza cercare vantaggi sleali o scorciatoie a danno degli altri. " +
    "La correttezza è più procedurale dell’integrità: non richiede necessariamente " +
    "grandi principi morali, ma rispetto delle norme del gioco in cui si è inseriti. " +
    "In ambito linguistico indica la conformità alle norme grammaticali e ortografiche; " +
    "in sport si parla di «fair play» come suo equivalente internazionale.",

  shortDefinition:
    "Rispetto delle regole condivise di un contesto, senza vantaggi sleali; in senso " +
    "linguistico, conformità alle norme grammaticali.",

  etymology:
    "Da «corretto», participio di correggere, dal latino corrigere «raddrizzare, " +
    "mettere in riga», composto da con- intensivo e regere «guidare, dirigere». " +
    "Letteralmente: ciò che è stato «raddrizzato» secondo la norma.",

  examples: [
    "La correttezza professionale non è entusiasmo: è la base minima senza cui una collaborazione non può durare.",
    "Nel calcio, il fair play premia la correttezza anche quando costa: restituire la palla all’avversario dopo un’uscita per infortunio è gesto che va oltre il regolamento.",
    "La correttezza grammaticale di un testo non garantisce la sua qualità: si può scrivere in modo perfettamente corretto e dire niente di interessante.",
    "Chiedere correttezza a chi non ha mai visto rispettata una regola è come chiedere fiducia a chi non ha mai ricevuto affidabilità.",
  ],

  synonyms: [
    { term: "onestà procedurale", register: "saggistico", note: "Sottolinea il rispetto delle regole del processo, indipendentemente dall’esito." },
    { term: "lealtà", register: "comune", note: "Parzialmente sovrapposto, ma la lealtà implica un legame più personale." },
  ],

  antonyms: [
    { term: "scorrettezza", register: "comune", note: "La violazione delle regole condivise, anche in senso minore." },
    { term: "slealtà", register: "comune-formale", note: "La violazione del legame di fiducia che le regole presuppongono." },
  ],

  relatedWords: ["integrita", "lealta", "onore", "fiducia", "trasparenza"],
  sourceLinks: {},

  paroliereNote:
    "Correttezza è la virtù più democratica del catalogo morale: non richiede " +
    "grandezza d’animo, solo rispetto delle regole del gioco. Proprio per questo è " +
    "anche la più fragile: se il gioco è truccato, la correttezza diventa svantaggio " +
    "competitivo. Chi gioca corretto in un sistema scorretto paga un costo reale — e " +
    "prima o poi si trova di fronte alla scelta se adattarsi o continuare a pagare. " +
    "La risposta che dà in quel momento dice molto di più sulla sua etica della " +
    "dichiarazione di principio iniziale.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "correttezza — rispetto delle regole tra etica, sport e grammatica",
    description: "Che cos’è la correttezza: definizione etica e linguistica, differenza da integrità e lealtà, e il problema del giocare corretto in un sistema scorretto.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
