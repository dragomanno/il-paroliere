// Il Paroliere — Lemma: flosco
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const flosco: LemmaEntry = {
  lemma: "flosco",
  slug: "flosco",
  partOfSpeech: "aggettivo",
  gender: "maschile",
  register: ["comune", "tecnico"],
  domains: ["anatomia", "botanica", "estetica", "critica"],

  definition:
    "Privo di tonicità, di tensione interna, di rigidità — cedente al tatto, senza la " +
    "resistenza che ci si aspetterebbe. In anatomia, il muscolo flosco ha perso tonicità; " +
    "in botanica, il fiore flosco è appassito e privo di turgore. In senso figurato, è " +
    "detto di chi o ciò che manca di energia, carattere, decisione: una personalità " +
    "floscia, un’argomentazione floscia che non regge al primo esame.",

  shortDefinition:
    "Senza tonicità né tensione interna; cedente, molle, privo di energia o carattere.",

  etymology:
    "Probabile derivato da un tipo germanico o longobardo affine all’antico alto tedesco " +
    "flahs “morbido, piatto”; compare nell’italiano con il significato di “molle, senza " +
    "consistenza”. Stessa famiglia di “flaccido”.",

  examples: [
    "Il petalo flosco del fiore reciso dopo tre giorni in un vaso senza acqua non è morto: è solo fuori dall’equilibrio idrico che lo teneva teso.",
    "Un’argomentazione floscia non è necessariamente sbagliata — può contenere un’intuizione valida — ma non regge da sola: ha bisogno di essere sostenuta da ogni parte.",
    "Il muscolo flosco in fisioterapia non è un muscolo debole: è un muscolo che ha perso il tono di base, quella contrazione minima a riposo che dà la forma.",
    "C’è una floschezza del carattere che non è cattiveria né pigrizia: è semplicemente l’assenza di quella tensione interna che fa sì che una persona si tenga insieme sotto pressione.",
  ],

  synonyms: [
    { term: "flaccido", register: "tecnico-comune", note: "Quasi sinonimo; flaccido è più usato in contesto anatomico, flosco è più figurato." },
    { term: "molle", register: "comune", note: "Il sinonimo quotidiano, sia fisico che di carattere." },
  ],

  antonyms: [
    { term: "tonico", register: "tecnico-comune", note: "Con tensione e tono adeguati; il contrario diretto in contesto muscolare." },
    { term: "turgido", register: "letterario-tecnico", note: "Gonfio di tensione interna — il contrario estremo del flosco." },
  ],

  relatedWords: ["tonicita", "elasticita", "atrofia", "ipotonia"],

  paroliereNote:
    "Flosco è una parola che si sente anche fisicamente: il suono stesso evoca la mancanza " +
    "di tensione — quelle consonanti morbide, quella chiusura in -o che non ha la durezza " +
    "di una parola tonica. C’è una coerenza fonetica tra il lemma e il concetto che " +
    "definisce, e non è un caso.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "flosco — significato in anatomia, botanica e uso figurato",
    description: "Flosco: dall’assenza di tono muscolare alla personalità priva di carattere. Significato fisico e metaforico di un aggettivo senza tensione.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
