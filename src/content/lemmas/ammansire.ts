// Il Paroliere — Lemma: ammansire
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ammansire: LemmaEntry = {
  lemma: "ammansire",
  slug: "ammansire",
  partOfSpeech: "verbo",

  definition:
    "Rendere mite e docile ciò o chi era agitato, ostile o difficile da avvicinare. " +
    "Si usa con gli animali selvatici — ammansire un cavallo, un cane — ma anche con " +
    "le persone: ammansire qualcuno significa portarlo da uno stato di diffidenza o " +
    "aggressività a uno di disponibilità, attraverso la pazienza, le parole o i " +
    "gesti. Il processo implica tempo e rispetto per la natura di chi si cerca di " +
    "avvicinare.",

  shortDefinition:
    "Rendere mite e disponibile chi o ciò che era agitato o ostile, con pazienza e " +
    "rispetto dei tempi altrui.",

  register: ["comune", "letterario"],
  domains: ["comportamento", "psicologia"],

  etymology:
    "Derivato del latino mansuetus (addomesticato, mite), composto di manus (mano) e " +
    "suetus (abituato, avvezzo). La radice è comune a mansueto: chi è abituato alla " +
    "mano dell'uomo non teme più il contatto.",

  synonyms: [
    { term: "placare", register: "comune", context: "ridurre l'agitazione o la collera, spesso con un intervento diretto" },
    { term: "calmare", register: "comune", context: "più generico, senza l'idea del processo graduale e del cambiamento di natura" },
    { term: "addomesticare", register: "comune", context: "sinonimo stretto, con maggiore enfasi sul legame creato nel processo" },
    { term: "mansueffare", register: "letterario", context: "arcaico, quasi identico semanticamente ma di registro molto più elevato" }
  ],

  antonyms: [
    { term: "irritare", register: "comune", context: "rendere agitato o ostile chi era disponibile" },
    { term: "aizzare", register: "comune", context: "spingere verso l'aggressività, spesso deliberatamente" },
    { term: "inasprire", register: "comune", context: "rendere più duro e difficile da avvicinare" }
  ],

  relatedWords: [
    "addomesticare",
    "placare",
    "calmare",
    "mansueto",
    "pacificare",
    "avvicinare",
    "domare"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/ammansire"
  },

  paroliereNote:
    "Ammansire condivide con addomesticare (v.) la radice semantica del farsi " +
    "accettare da qualcuno che non si fida — ma i due verbi hanno sfumature diverse: " +
    "ammansire riduce l'aggressività, addomesticare crea un legame. Si può ammansire " +
    "qualcuno senza addomesticarlo. Il primo è quasi una tregua; il secondo, " +
    "un'alleanza. In entrambi i casi, la direzione del potere non è mai completamente " +
    "chiara: chi si lascia ammansire sceglie, in qualche modo, di farlo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Ammansire — Il Paroliere",
    description:
      "Rendere mite e disponibile chi o ciò che era agitato o ostile, con pazienza e " +
      "rispetto dei tempi altrui.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};