// Il Paroliere — Lemma: CONFLITTO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const conflitto: LemmaEntry = {
  lemma: "conflitto",
  slug: "conflitto",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition:
    "Opposizione di interessi, valori o posizioni tra individui, gruppi sociali o Stati, " +
    "non ancora risolta attraverso accordo, mediazione o imposizione di forza. " +
    "In politica: contrasto strutturale tra attori che competono per il potere o per " +
    "risorse scarse. Conflitto armato: scontro militare tra Stati o fazioni. " +
    "Conflitto di interesse: incompatibilità tra ruolo pubblico e interesse privato di " +
    "chi esercita funzioni istituzionali. " +
    "In psicologia: tensione interna tra impulsi, desideri o valori contrastanti.",
  shortDefinition: "Opposizione di interessi o valori tra individui, gruppi o Stati non ancora risolta; conflitto armato, politico o psicologico.",
  register: ["formale", "tecnico", "neutro"],
  domains: ["politica", "sociologia", "psicologia"],
  etymology:
    "Dal latino *conflictus* (scontro, urto), participio passato di *confligere* " +
    "(urtare insieme, scontrarsi), composto di *con-* (insieme) e *fligere* (colpire). " +
    "In italiano attestato dal XIII secolo.",
  examples: [
    "Il conflitto di interesse del ministro è stato al centro del dibattito parlamentare " +
    "per settimane.",
    "Il conflitto armato nel Sahel ha provocato milioni di sfollati interni " +
    "e una crisi umanitaria acuta.",
    "In ogni organizzazione complessa esiste una quota fisiologica di conflitto " +
    "tra interessi diversi, che la governance deve saper gestire.",
  ],
  synonyms: [
    { term: "contrasto", register: "neutro", context: "opposizione meno intensa, non necessariamente violenta" },
    { term: "scontro", register: "neutro", context: "con enfasi sull'aspetto oppositivo diretto" },
    { term: "tensione", register: "neutro", context: "stato di latente incompatibilità" },
    { term: "controversia", register: "formale-giuridico", context: "conflitto formalizzato, spesso in sede arbitrale o giudiziaria" },
  ],
  antonyms: [
    { term: "accordo", register: "neutro", context: "intesa raggiunta tra le parti" },
    { term: "pace", register: "neutro", context: "assenza di conflitto armato o aperto" },
    { term: "armonia", register: "neutro", context: "coesistenza ordinata di interessi diversi" },
    { term: "coalizione", register: "politico", context: "alleanza temporanea che supera le divergenze" },
  ],
  relatedWords: ["coalizione", "alleanza", "potere", "autorita", "violenza", "norma", "diritto", "consenso", "liberalismo", "liberta"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/conflitto",
    treccani: "https://www.treccani.it/vocabolario/conflitto/",
  },
  paroliereNote:
    "In teoria politica (da Machiavelli a Marx, da Schmitt a Habermas) il conflitto " +
    "è concetto fondante: chi lo vede come patologia da eliminare (liberalismo consensuale) " +
    "e chi lo vede come motore del cambiamento storico (materialismo dialettico, agonismo " +
    "schmittiano). La locuzione 'conflitto di interesse' ha assunto rilievo specifico nel " +
    "dibattito politico italiano degli anni '90-2000, spesso collegata alla figura di " +
    "imprenditori-politici.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "CONFLITTO — definizione | Il Paroliere",
    description:
      "Definizione di conflitto: opposizione di interessi tra individui, gruppi o Stati. " +
      "Conflitto armato, politico, di interesse. Etimologia ed esempi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
