// Il Paroliere — Lemma: zetetica
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const zetetica: LemmaEntry = {
  lemma: "zetetica",
  slug: "zetetica",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["filosofico", "saggistico"],
  domains: ["filosofia", "epistemologia", "metodo"],

  definition:
    "Nella tradizione filosofica antica, l'attitudine o il metodo di chi interroga senza " +
    "presupporre una risposta definitiva — non per sospendere il giudizio per sempre, ma per " +
    "tenere viva la ricerca come atto in sé. Associata allo scetticismo pirroniano, la " +
    "zetetica è la disposizione di chi \u201ccerca ancora\u201d, a differenza di chi ha già trovato " +
    "(dogmatico) o di chi ha rinunciato a cercare (efettico in senso ristretto). " +
    "Nell'uso contemporaneo indica un approccio critico-indagativo che rifiuta le " +
    "conclusioni premature.",

  shortDefinition:
    "Attitudine filosofica all'indagine aperta, che interroga senza presupporre risposte " +
    "e tiene la ricerca in stato di vigilanza permanente.",

  etymology:
    "Dal greco zētētikós, \u00abche cerca, incline all'indagine\u00bb, da zētéō \u00abcerco, indago\u00bb. " +
    "Radice comune a \u00abzetema\u00bb (questione aperta); in filosofia, designa specificamente " +
    "la scuola scettica nel suo aspetto attivo di ricerca continua.",

  examples: [
    "La zetetica non è il dubbio che paralizza, ma quello che fa muovere: chi non ha ancora una risposta non si ferma, continua a cercare.",
    "Pirrone e i suoi seguaci preferivano definirsi zetetici piuttosto che scettici: l'etichetta \u201ccercatori\u201d sembrava più onesta di \u201cdubbiosi\u201d.",
    "Un approccio zetetico al dato storico significa non accontentarsi della prima fonte disponibile, ma mantenere aperta la questione finché le prove non convergono.",
    "In certi circoli epistemologici contemporanei, \u201czetetica\u201d è tornata di moda per descrivere una scienza che non si chiude mai in dogmi.",
  ],

  synonyms: [
    {
      term: "indagine aperta",
      register: "saggistico",
      note: "Rende l'aspetto metodologico senza il carico storico-filosofico.",
    },
    {
      term: "ricerca senza dogma",
      register: "divulgativo",
      note: "Formula esplicativa più che sinonimo tecnico.",
    },
  ],

  antonyms: [
    {
      term: "dogmatismo",
      register: "filosofico",
      note: "Chi ritiene di aver già trovato le risposte definitive.",
    },
    {
      term: "efettico",
      register: "filosofico",
      note: "Chi sospende il giudizio rinunciando alla ricerca stessa.",
    },
  ],

  relatedWords: ["aporetika", "dubbio", "dialettica", "filosofia", "metafisica"],

  sourceLinks: {},

  paroliereNote:
    "Zetetica è una parola che mette a disagio chi vuole risposte rapide — e affascina chi " +
    "sa che le domande giuste valgono più delle risposte facili. La sua rarità in italiano è " +
    "curiosa: un termine così preciso, che descrive qualcosa di cui abbiamo grande bisogno " +
    "— il permesso intellettuale di non aver ancora finito — è rimasto confinato ai manuali " +
    "di storia della filosofia. Forse perché la cultura del risultato premia chi conclude, " +
    "non chi continua a interrogare.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "zetetica — l'arte di cercare senza smettere di interrogare",
    description:
      "Che cos'è la zetetica: il metodo filosofico dell'indagine aperta, dalla tradizione " +
      "pirroniana all'epistemologia contemporanea.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
