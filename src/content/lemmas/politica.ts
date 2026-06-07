// Il Paroliere — Lemma: POLITICA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const politica: LemmaEntry = {
  lemma: "politica",
  slug: "politica",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Arte e pratica del governo e dell'amministrazione della cosa pubblica; insieme delle " +
    "attività attraverso cui si esercita, si conquista e si mantiene il potere nelle " +
    "società organizzate. " +
    "Aristotele definiva l'essere umano «animale politico» (zōon politikón, Politica, I 2), " +
    "intendendo che la vita nella polis — la comunità politica — è condizione naturale " +
    "dell'esistenza umana. " +
    "In filosofia politica: riflessione sui fondamenti della legittimità del potere, " +
    "della giustizia e dell'organizzazione dello Stato. " +
    "In uso corrente: l'attività dei partiti, dei rappresentanti eletti, del governo; " +
    "anche: orientamento strategico di un'organizzazione (politica aziendale, " +
    "politica estera, politica culturale).",
  shortDefinition: "Arte e pratica del governo; insieme delle attività con cui si esercita il potere nelle società organizzate.",
  register: ["formale", "filosofico", "uso comune"],
  domains: ["filosofia", "scienze politiche", "uso comune"],
  etymology:
    "Dal latino *politica*, a sua volta dal greco *politikē* (arte del governo della città), " +
    "derivato di *polítēs* (cittadino) e *pólis* (città, comunità politica). " +
    "Il termine greco è presente in Aristotele; in latino medievale e poi in italiano " +
    "dal XIV-XV secolo, con la diffusione dei testi aristotelici.",
  examples: [
    "Aristotele insegnava che fare politica non è una scelta opzionale per il cittadino, " +
    "ma l'espressione più alta della sua natura sociale.",
    "La politica estera del governo ha privilegiato i rapporti bilaterali " +
    "rispetto alle istituzioni multilaterali.",
    "«La politica è l'arte del possibile», frase attribuita a Bismarck, " +
    "sintetizza la tensione tra ideali e compromessi che caratterizza " +
    "ogni sistema democratico.",
  ],
  synonyms: [
    { term: "governo", register: "neutro", context: "con enfasi sull'esercizio del potere esecutivo" },
    { term: "arte dello Stato", register: "formale-storico", context: "accezione rinascimentale, da Machiavelli" },
    { term: "res publica", register: "latinismo-formale", context: "la cosa pubblica, l'insieme degli affari dello Stato" },
  ],
  antonyms: [
    { term: "anarchia", register: "politico", context: "assenza di governo e di autorità organizzata" },
    { term: "privatismo", register: "filosofico-sociologico", context: "ritiro dalla sfera pubblica nella sola dimensione privata" },
    { term: "apolitismo", register: "neutro", context: "rifiuto o disinteresse per la partecipazione politica" },
  ],
  relatedWords: [
    "potere",
    "autorita",
    "norma",
    "diritto",
    "consenso",
    "liberta",
    "liberalismo",
    "coalizione",
    "alleanza",
    "conflitto",
  ],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/politica",
    treccani: "https://www.treccani.it/vocabolario/politica/",
  },
  paroliereNote:
    "Il termine è uno dei più polisemici del lessico italiano: indica insieme una " +
    "disciplina di studio (filosofia politica, scienze politiche), una pratica " +
    "(fare politica), un ambito istituzionale (la politica italiana) e un orientamento " +
    "strategico (la politica di un'azienda). " +
    "La distinzione weberiana tra «politica come vocazione» (Beruf) e politica come " +
    "mestiere pragmatico rimane una delle più fecondi categorie analitiche. " +
    "In italiano si conserva la distinzione — sfumata nell'uso comune — tra " +
    "«politica» (politics: la competizione per il potere) e «politica» " +
    "(policy: l'insieme delle misure su un tema specifico), distinzione resa " +
    "esplicita dall'inglese ma spesso implicita nel contesto.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "POLITICA — definizione | Il Paroliere",
    description:
      "Definizione di politica: arte del governo, esercizio del potere. Aristotele, " +
      "zōon politikón, filosofia politica. Etimologia ed esempi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
