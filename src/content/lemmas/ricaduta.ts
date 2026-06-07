// Il Paroliere — Lemma: RICADUTA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ricaduta: LemmaEntry = {
  lemma: "ricaduta",
  slug: "ricaduta",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Ricomparsa di una condizione patologica — malattia, dipendenza, disturbo psicologico — " +
    "dopo un periodo di miglioramento, remissione o astinenza. " +
    "In psicologia delle dipendenze, la ricaduta è fenomeno atteso nel percorso di recupero " +
    "e non necessariamente un fallimento terapeutico, ma un segnale da gestire clinicamente. " +
    "Per estensione colloquiale: ritorno a un comportamento negativo che si credeva superato.",
  shortDefinition: "Ricomparsa di una malattia, dipendenza o disturbo dopo un periodo di miglioramento o remissione.",
  register: ["tecnico-medico", "psicologico", "colloquiale"],
  domains: ["medicina", "psicologia", "uso colloquiale"],
  etymology:
    "Derivato verbale di *ricadere* (cadere di nuovo), composto di *ri-* (iterativo) " +
    "e *cadere*, dal latino *cadere*. Il sostantivo deverbalein *ricaduta* si afferma " +
    "nel lessico medico italiano tra XIX e XX secolo.",
  examples: [
    "Dopo sei mesi di astinenza, la ricaduta nell'alcol l'ha riportata al punto di partenza " +
    "del percorso terapeutico.",
    "Il medico ha spiegato che una ricaduta non annulla i progressi fatti, " +
    "ma richiede una revisione del piano di cura.",
    "Con 'ricaduta' si indica anche, in senso figurato, il ritorno a vecchie abitudini " +
    "superate con fatica.",
  ],
  synonyms: [
    { term: "recidiva", register: "tecnico-medico", context: "termine più preciso in ambito clinico e giuridico" },
    { term: "regressione", register: "psicologico", context: "in psicologia: ritorno a modalità precedenti" },
  ],
  antonyms: [
    { term: "remissione", register: "tecnico-medico", context: "attenuazione o scomparsa dei sintomi" },
    { term: "guarigione", register: "tecnico-medico", context: "cessazione definitiva della condizione patologica" },
    { term: "ripresa", register: "neutro", context: "ritorno a uno stato di benessere" },
  ],
  relatedWords: ["recidiva", "remissione", "aggravamento", "epidemia", "pandemia"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/ricaduta",
    treccani: "https://www.treccani.it/vocabolario/ricaduta/",
  },
  paroliereNote:
    "Ricaduta è più colloquiale e meno tecnica di recidiva, che in medicina indica " +
    "una ricomparsa della stessa malattia, e di relapso (anglismo clinico in uso in oncologia). " +
    "Nel campo delle dipendenze, il modello di Marlatt e Gordon (1985) ha ridefinito la " +
    "ricaduta non come fallimento morale ma come fase del processo di cambiamento, " +
    "influenzando l'approccio terapeutico contemporaneo.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "RICADUTA — definizione | Il Paroliere",
    description:
      "Definizione di ricaduta: ricomparsa di una malattia o dipendenza dopo un periodo di " +
      "miglioramento. Etimologia, sinonimi, esempi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
