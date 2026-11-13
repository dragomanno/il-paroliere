// Il Paroliere — Lemma: flebile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const flebile: LemmaEntry = {
  lemma: "flebile",
  slug: "flebile",
  partOfSpeech: "aggettivo",
  register: ["comune", "letterario"],
  domains: ["suono", "musica", "espressione emotiva"],

  definition:
    "Debole, sottile e poco intenso, soprattutto riferito a una voce, a un suono o a un richiamo che sembra sul punto di spegnersi. Può evocare il pianto senza nominarlo e porta spesso con sé una tonalità di fragilità o malinconia. Non basta che un suono sia basso: «flebile» ne suggerisce anche la vulnerabilità.",

  shortDefinition:
    "Debole e sottile, detto soprattutto di voce o suono, con un’impressione di fragilità quasi malinconica.",

  etymology:
    "Dal latino flebilis, derivato di flere, «piangere». L’origine spiega la sfumatura lamentosa che la parola può conservare anche quando descrive soltanto una voce o un rumore lieve.",

  examples: [
    "Dalla stanza arrivava una musica flebile, appena sufficiente a rompere il silenzio del corridoio.",
    "Rispose con un sì flebile, ma nel gesto con cui annuì c’era ancora molta decisione.",
    "Il telefono emise un segnale flebile prima di spegnersi del tutto.",
  ],

  synonyms: [
    { term: "fievole", register: "comune-letterario", note: "Quasi sinonimo; tende a essere più lieve e meno direttamente segnato dall’eco del lamento." },
    { term: "fioco", register: "comune", note: "Più comune per una voce velata, rauca o attenuata; non implica necessariamente tristezza." },
    { term: "sommesso", register: "comune", note: "Indica un volume trattenuto o volontariamente basso, mentre «flebile» può dipendere dalla mancanza di forza." },
  ],

  antonyms: [
    { term: "squillante", register: "comune", note: "Nitido, vivo e capace di imporsi all’ascolto." },
    { term: "tonante", register: "letterario", note: "Di volume e forza opposti, spesso con un effetto solenne o minaccioso." },
  ],

  relatedWords: ["fievole", "fioco", "voce", "malinconia", "barlume"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/flebile",
  },

  paroliereNote:
    "La grafia standard è «flebile», senza accento scritto. «Flèbile» può servire solo come indicazione di pronuncia, mentre «fievole» è un lemma autonomo e vicino, non una correzione grafica della stessa parola.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Flebile — definizione, sinonimi, uso | Il Paroliere",
    description: "Significato di flebile: voce o suono debole, sottile e quasi in dissolvenza. Differenza da fievole e fioco, esempi, sinonimi e origine.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
