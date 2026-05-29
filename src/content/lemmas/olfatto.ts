// Il Paroliere — Lemma: olfatto
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const olfatto: LemmaEntry = {
  lemma: "olfatto",
  slug: "olfatto",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Il senso che rileva e interpreta le molecole odoranti presenti nell'aria " +
    "attraverso i recettori olfattivi posti nell'epitelio nasale. È il più antico dei " +
    "sensi dal punto di vista evolutivo, strettamente connesso al sistema limbico e " +
    "quindi alla memoria emotiva e all'istinto. In senso figurato, si dice che " +
    "qualcuno ha olfatto quando è capace di percepire situazioni, pericoli o " +
    "opportunità prima che diventino evidenti: un olfatto per gli affari, un olfatto " +
    "politico.",

  shortDefinition:
    "Il senso che percepisce gli odori; per estensione, capacità di intuire " +
    "situazioni non ancora manifeste.",

  register: ["comune", "tecnico"],
  domains: ["biologia", "sensoriale", "letteratura"],

  etymology:
    "Dal latino olfactus, derivato di olfacere (odorare, annusare), composto di olere " +
    "(avere odore) + facere (fare). Il termine tecnico ha soppiantato l'antico naso " +
    "nel senso specifico sensoriale.",

  synonyms: [
    { term: "fiuto", register: "comune", context: "preferito nel senso figurato — fiuto per gli affari è più comune di olfatto per gli affari" },
    { term: "odorato", register: "tecnico", context: "sinonimo scientifico diretto, intercambiabile in contesti medici" },
    { term: "intuito", register: "comune", context: "sinonimo del senso figurato, senza la metafora sensoriale" }
  ],

  antonyms: [
    { term: "anosmia", register: "tecnico", context: "incapacità di percepire gli odori, patologia del senso olfattivo" },
    { term: "ottusità", register: "comune", context: "nel senso figurato, incapacità di percepire situazioni non evidenti" }
  ],

  relatedWords: [
    "odore",
    "profumo",
    "aroma",
    "fiuto",
    "odorato",
    "recettore",
    "memoria olfattiva",
    "proust",
    "sinestesia"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/olfatto"
  },

  paroliereNote:
    "Tra tutti i sensi, l'olfatto ha il rapporto più diretto con la memoria " +
    "involontaria: neurobiologicamente, le informazioni olfattive raggiungono " +
    "l'amigdala e l'ippocampo prima di qualsiasi elaborazione cosciente. È la " +
    "fisiologia dietro la cosiddetta madeleine di Proust — il modo in cui un odore " +
    "richiama, improvviso e irresistibile, un intero mondo scomparso. In letteratura, " +
    "l'olfatto è il senso più difficile da descrivere con le parole e forse per " +
    "questo il più evocativo: chi riesce a far sentire un odore in una pagina ha già " +
    "scritto qualcosa di memorabile.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Olfatto — Il Paroliere",
    description:
      "Il senso che percepisce gli odori; per estensione, capacità di intuire " +
      "situazioni non ancora manifeste.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};