// Il Paroliere — Lemma: MALAFEMMINA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const malafemmina: LemmaEntry = {
  lemma: "malafemmina",
  slug: "malafemmina",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Donna giudicata di malcostume o dedita alla prostituzione: un termine che attraversa secoli " +
    "di giudizio morale sulla sessualità femminile. " +
    "Più che una descrizione, è uno specchio — riflette il sistema di valori di chi lo pronunciava. " +
    "Oggi è desueto nell'uso corrente, sopravvive come documento linguistico di un'epoca.",
  shortDefinition:
    "Donna giudicata di vita dissoluta; termine storico che porta con sé il peso del giudizio morale sulla sessualità femminile.",
  register: ["storico", "colloquiale", "connotazione negativa"],
  domains: ["morale", "storia sociale", "giudizio di genere"],
  etymology:
    "Composto di mala (forma apocopata di cattiva, dal latino malus) e femmina. " +
    "La struttura è speculare a malacarne e malandrino: il prefisso mala- qualifica " +
    "il sostantivo in senso morale o qualitativo. " +
    "L'uso è attestato dall'italiano antico, con presenza costante nella letteratura popolare e nei documenti giuridici.",
  examples: [
    "Nei documenti comunali medievali, malafemmina era categoria giuridica prima che insulto.",
    "La storia ha riabilitato molte donne che il loro tempo aveva bollato come malafemmine.",
    "Il termine dice molto di più sulla morale di chi lo usava che sulla vita di chi lo riceveva.",
  ],
  synonyms: [
    { term: "prostituta", register: "comune", context: "denominazione diretta, senza il giudizio morale aggiunto" },
    { term: "donna di malcostume", register: "storico-formale", context: "locuzione equivalente nell'uso amministrativo storico" },
  ],
  antonyms: [
    { term: "donna per bene", register: "colloquiale", context: "nell'uso storico che produceva questa dicotomia" },
  ],
  relatedWords: ["malacostume", "malavita", "malafede", "storia sociale", "giudizio di genere"],
  sourceLinks: {},
  paroliereNote:
    "Malafemmina è una delle parole che un dizionario deve includere proprio perché scomoda. " +
    "Non per perpetuare il giudizio che contiene, ma per documentarlo: " +
    "capire cosa una lingua chiamava male, e perché, dice tutto sulla società che la usava. " +
    "Registrare non è approvare.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Malafemmina — Il Paroliere",
    description:
      "Definizione originale di 'malafemmina': termine storico per donna giudicata di malcostume. Documento linguistico del giudizio morale sulla sessualità femminile.",
  },
  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
