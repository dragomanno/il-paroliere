// Il Paroliere — Lemma: addomesticare
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const addomesticare: LemmaEntry = {
  lemma: "addomesticare",
  slug: "addomesticare",
  partOfSpeech: "verbo",

  definition:
    "Rendere domestico ciò che era selvatico: portare un animale — o per estensione " +
    "una persona, un'abitudine, un'emozione — a condividere lo spazio con noi senza " +
    "perdere la propria natura. Non si tratta di sottomissione: addomesticare è un " +
    "processo bilaterale, che trasforma chi lo compie tanto quanto chi lo subisce. In " +
    "senso figurato si dice di relazioni che richiedono tempo per costruirsi, di " +
    "città che si imparano a leggere, di lingue straniere che diventano familiari.",

  shortDefinition:
    "Rendere domestico ciò che era selvatico, attraverso un processo che trasforma " +
    "entrambe le parti e crea un legame.",

  register: ["comune", "letterario"],
  domains: ["comportamento", "relazioni"],

  etymology:
    "Dal latino domesticus (di casa, familiare), derivato di domus (casa). Il " +
    "prefisso ad- indica il movimento verso: portare qualcosa verso la dimensione " +
    "della casa, del familiare. Il concetto ha radici antiche quanto la relazione tra " +
    "l'uomo e gli animali.",

  synonyms: [
    { term: "ammansire", register: "comune", context: "riduce l'aggressività ma non necessariamente crea un legame duraturo" },
    { term: "domare", register: "comune", context: "enfatizza il controllo e la sottomissione — molto più direzionale" },
    { term: "familiarizzare", register: "comune", context: "rendere familiare, ma senza la dimensione della trasformazione reciproca" },
    { term: "avvezzare", register: "letterario", context: "abituare progressivamente a qualcosa di nuovo o diverso" }
  ],

  antonyms: [
    { term: "selvatichire", register: "comune", context: "tornare allo stato selvatico, perdere l'abitudine al contatto" },
    { term: "alienare", register: "comune", context: "rendere estraneo, allontanare — il contrario del rendere familiare" },
    { term: "isolare", register: "comune", context: "separare dal contesto relazionale in cui il legame potrebbe formarsi" }
  ],

  relatedWords: [
    "ammansire",
    "domare",
    "legame",
    "fiducia",
    "relazione",
    "domestico",
    "selvatico",
    "familiarità"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/addomesticare"
  },

  paroliereNote:
    "È Antoine de Saint-Exupéry, ne Il Piccolo Principe (1943), a dare a questo verbo " +
    "la sua definizione più memorabile. La volpe spiega al piccolo principe cosa " +
    "significa addomesticare: «Vuol dire creare dei legami». Non si tratta di " +
    "possesso né di controllo — è un atto di reciproca apertura che rende unici l'uno " +
    "all'altro. «Tu, per me, sei unico al mondo. Io, per te, sono unica al mondo.» " +
    "Saint-Exupéry trasforma addomesticare in un atto etico, quasi un voto: la " +
    "disponibilità a diventare responsabili di qualcuno che si è reso vulnerabile per " +
    "noi. (Fonte: Antoine de Saint-Exupéry, Le Petit Prince, 1943; trad. it. Il " +
    "Piccolo Principe — opera in pubblico dominio in molte giurisdizioni.)",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Addomesticare — Il Paroliere",
    description:
      "Rendere domestico ciò che era selvatico, attraverso un processo che trasforma " +
      "entrambe le parti e crea un legame.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};