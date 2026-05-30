// Il Paroliere — Lemma: nazismo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const nazismo: LemmaEntry = {
  lemma: "nazismo",
  slug: "nazismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Ideologia totalitaria e movimento politico fondato sull'ultranazionalismo " +
    "razziale, l'antisemitismo, il culto del capo e il principio di spazio vitale " +
    "(Lebensraum). Portato al potere in Germania da Adolf Hitler e dal partito NSDAP " +
    "nel 1933, il nazismo ha dominato la Germania fino alla sconfitta militare del " +
    "1945, lasciando come eredità storica lo sterminio sistematico di sei milioni di " +
    "ebrei (Shoah) e una guerra mondiale che ha causato decine di milioni di vittime.",

  shortDefinition:
    "Ideologia totalitaria di Hitler e dell'NSDAP (1933–1945), fondata su razzismo, " +
    "antisemitismo e nazionalismo estremo.",

  register: ["storico", "politico"],
  domains: ["storia", "politica"],

  etymology:
    "Contrazione di Nationalsozialismus, traducibile come nazionalsocialismo — nome " +
    "ufficiale dell'ideologia del partito NSDAP (Nationalsozialistische Deutsche " +
    "Arbeiterpartei). Il prefisso Nazi- era in origine un soprannome popolare, poi " +
    "adottato internazionalmente come designazione storica e analitica.",

  examples: [
  ],

  synonyms: [
    { term: "nazionalsocialismo", register: "storico/politico", context: "denominazione ufficiale dell'ideologia, usata nei testi storici" }
  ],

  antonyms: [
    { term: "antifascismo", register: "storico/politico", context: "insieme dei movimenti di opposizione politica e armata al nazismo e al fascismo" },
    { term: "democrazia", register: "politico", context: "in senso sistemico, come opposto strutturale al regime totalitario" }
  ],

  relatedWords: [
    "fascismo",
    "nazionalismo",
    "populismo"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/nazismo"
  },

  paroliereNote:
    "Il nazismo non è semplicemente un'ideologia di destra radicalizzata: è un caso " +
    "storicamente unico di totalitarismo fondato su una pseudoscienza razziale, sul " +
    "biologismo come criterio politico e sulla pianificazione industriale dello " +
    "sterminio. Usare il termine come insulto generico o come iperbole retorica ne " +
    "tradisce la specificità storica e offende la memoria delle vittime.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Nazismo — Il Paroliere",
    description:
      "Significato storico e politico di nazismo: l'ideologia totalitaria di Hitler e " +
      "dell'NSDAP nella Germania 1933–1945, la Shoah e il suo lascito.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};