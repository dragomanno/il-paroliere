// Il Paroliere — Lemma: correttore
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const correttore: LemmaEntry = {
  lemma: "correttore",
  slug: "correttore",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Nel lessico delle Contrade di Siena, il Correttore è il sacerdote — solitamente il " +
    "parroco della parrocchia territorialmente legata alla Contrada — che svolge il ruolo di " +
    "guida spirituale e morale della comunità contradaiola. Non è una figura meramente liturgica: " +
    "il Correttore è presente nella vita della Contrada a tutto tondo, partecipa alle assemblee, " +
    "accompagna le cerimonie religiose legate al Palio (la Messa del fantino, le benedizioni, i " +
    "riti religiosi nel giorno della corsa), e svolge una funzione concreta di mediazione umana " +
    "e sociale. Il termine correttore — scelto con precisione non casuale — richiama la funzione " +
    "pedagogica e di recupero: non solo correggere nel senso moralista del termine, ma nel senso " +
    "più profondo di riorientare, di rimettere sulla strada giusta anche chi si è perso. " +
    "Nella società senese storica, dove le Contrade erano (e in parte sono ancora) una rete " +
    "comunitaria fitta e totalizzante, il Correttore aveva un ruolo di riferimento non solo per " +
    "i contradaioli praticanti ma anche per le persone «difficili», quelle ai margini, quelle " +
    "che la Contrada abbracciava attraverso la sua funzione sociale.",

  shortDefinition:
    "Il sacerdote-guida spirituale e morale di una Contrada di Siena; figura di riferimento " +
    "religioso e comunitario con funzione di orientamento e recupero sociale.",

  register: ["tecnico-istituzionale (lessico paliesco e delle Contrade senesi)"],
  domains: ["storia", "tradizione senese", "Palio", "religione", "società"],

  etymology:
    "Dal latino corrector («chi corregge, chi rimette in ordine»), da corrigere " +
    "(«raddrizzare, correggere»). Il termine nella tradizione ecclesiastica indica chi ha la " +
    "funzione di guidare e correggere una comunità religiosa.",

  examples: [
    "Il Correttore della Contrada dell'Onda benedì il cavallo e il fantino nella cappella della Contrada, come vuole la tradizione del giorno del Palio.",
    "Non è solo un parroco: il Correttore a Siena è una figura di riferimento per tutta la vita della Contrada, dal battesimo dei bambini contradaioli alla morte dei vecchi.",
    "La funzione del Correttore come recuperatore sociale non è mai stata abolita: anche oggi, la Contrada è spesso l'unica rete che non abbandona nessuno.",
  ],

  synonyms: [
    {
      term: "parroco di Contrada",
      register: "descrittivo",
      context: "denominazione descrittiva non tecnica",
    },
    {
      term: "cappellano",
      register: "ecclesiastico generico",
      context: "termine meno preciso nel contesto senese",
    },
  ],

  relatedWords: [
    "tamburino",
    "alfiere",
    "Contrada",
    "Palio di Siena",
    "Siena",
    "comunità",
    "tradizione",
    "corporazioni",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/correttore/",
    wiktionary: "https://it.wiktionary.org/wiki/correttore",
  },

  paroliereNote:
    "Correttore nel lessico senese è una parola che dice molto sulla filosofia delle Contrade: " +
    "la Contrada non è un'associazione folkloristica, è una comunità totale che si prende cura " +
    "dei suoi membri dalla nascita alla morte. Il fatto che la guida spirituale si chiami " +
    "Correttore — e non semplicemente parroco o cappellano — è una scelta lessicale che rivela " +
    "un'antropologia precisa: la comunità ha il compito di correggere, di riorientare, di non " +
    "abbandonare nessuno. Una funzione sociale che molte istituzioni moderne faticano a svolgere.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Correttore — il sacerdote delle Contrade di Siena | Il Paroliere",
    description:
      "Il Correttore a Siena: chi è, cosa fa, perché si chiama così. La guida spirituale " +
      "della Contrada e la sua funzione sociale di recupero. Definizione con nota storica.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
