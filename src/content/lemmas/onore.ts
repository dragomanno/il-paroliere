// Il Paroliere — Lemma: onore
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const onore: LemmaEntry = {
  lemma: "onore",
  slug: "onore",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "formale", "letterario", "storico"],
  domains: ["etica", "cultura", "storia", "diritto", "antropologia"],

  definition:
    "Stima di sé fondata sulla coerenza con un codice di valori — personali, familiari " +
    "o sociali — e riconoscimento esterno di questa coerenza da parte della comunità " +
    "di appartenenza. L’onore è profondamente relazionale: esiste nella misura in cui " +
    "è riconosciuto dagli altri, il che lo distingue dall’integrità, che può essere " +
    "mantenuta anche nell’invisibilità. I codici d’onore variano enormemente tra " +
    "culture ed epoche: ciò che in una comunità «macchia» l’onore, in un’altra può " +
    "essere indifferente o addirittura valorizzato.",

  shortDefinition:
    "Stima di sé basata su un codice di valori condiviso, che richiede il " +
    "riconoscimento della comunità per esistere come fatto sociale.",

  etymology:
    "Dal latino honor, honoris «stima, rispetto, carica pubblica», di origine incerta. " +
    "Collegato a onus «peso, carica»: l’onore come peso che si porta, responsabilità " +
    "pubblica. La radice ha prodotto «honorario», «disonore», «honorifico».",

  examples: [
    "Nelle società mediterranee tradizionali, l’onore era patrimonio collettivo della famiglia: il gesto di uno ricadeva su tutti, nel bene e nel male.",
    "Il duello come istituzione nacque per “riparare” l’onore offeso: un sistema brutale fondato sulla logica che la violenza potesse ripristinare una stima perduta.",
    "Nella cultura camorristica, il codice d’onore interno è rigidissimo — verso gli affiliati. La sua applicazione selettiva è la prova che non era mai stato un principio universale.",
    "Rinunciare a un vantaggio per non tradire una promessa data: questo è onore nella vita quotidiana, senza codici e senza testimoni.",
  ],

  synonyms: [
    { term: "dignità", register: "comune-formale", note: "Più interiore e universale: la dignità non dipende dal riconoscimento altrui come l’onore." },
    { term: "reputazione", register: "comune", note: "L’aspetto esterno dell’onore: ciò che gli altri pensano e dicono di noi." },
  ],

  antonyms: [
    { term: "disonore", register: "comune-letterario", note: "La perdita pubblica della stima, nella logica del codice d’onore." },
    { term: "infamia", register: "formale-storico", note: "La massima perdita di onore, con esclusione dalla comunità di riferimento." },
  ],

  relatedWords: ["lealta", "integrita", "vergogna", "arroganza"],
  sourceLinks: {},

  paroliereNote:
    "L’onore è una delle parole morali più cariche di storia — e di pericoli. I codici " +
    "d’onore hanno giustificato vendette, delitti, guerre, oppressioni. Eppure c’è " +
    "qualcosa nell’idea di onore che sopravvive alla sua storia violenta: la convinzione " +
    "che alcune cose non si facciano, non perché proibite dalla legge, ma perché " +
    "incompatibili con chi si vuole essere. In questo senso, l’onore inteso come " +
    "coerenza con sé stessi — non come dipendenza dallo sguardo altrui — è forse la " +
    "sua versione più utile e meno pericolosa.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "onore — stima, codice e riconoscimento sociale tra storia e etica",
    description: "Che cos’è l’onore: definizione etica e antropologica, codici d’onore storici, differenza da dignità e reputazione.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
