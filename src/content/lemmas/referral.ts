// Il Paroliere — Lemma: referral
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const referral: LemmaEntry = {
  lemma: "referral",
  slug: "referral",
  partOfSpeech: "sostantivo maschile invariabile",
  gender: "maschile",
  definition: "1. Nel marketing, la raccomandazione con cui un cliente o un contatto segnala un prodotto, un servizio o un professionista ad altri, spesso dentro un programma che premia chi porta nuovi clienti. 2. Nell'analisi del traffico web, la visita che arriva a un sito da un link presente su un altro sito; anche la fonte che l'ha generata. 3. Raro, l'invio di un paziente a uno specialista.",
  shortDefinition: "Segnalazione che porta un nuovo cliente, spesso premiata; nell'analisi web, la visita che arriva da un link su un altro sito.",
  register: [
    "tecnico",
    "tecnico-SEO",
  ],
  domains: [
    "marketing",
    "marketing digitale",
    "SEO",
    "web analytics",
  ],
  etymology: "Dall'inglese referral, attestato dagli anni Venti del Novecento, derivato di to refer, «rimandare, indirizzare a qualcuno», che risale al latino referre, «riportare». Il senso commerciale si afferma con il marketing diretto. Quello tecnico arriva con i primi programmi di statistica web, che registrano la pagina di provenienza di ogni visita.",
  examples: [
    "Metà dei nuovi clienti dello studio arriva da referral: amici di clienti soddisfatti.",
    "Con il programma referral ogni utente che porta un amico riceve un mese gratis.",
    "Il traffico referral è cresciuto dopo l'articolo che ci citava sulla testata di settore.",
    "In reparto si dice referral per l'invio a uno specialista, ma in italiano basta dire invio.",
  ],
  synonyms: [
    {
      term: "raccomandazione",
      register: "comune",
      context: "senso 1, con il rischio di un'ombra di favoritismo",
    },
    {
      term: "segnalazione",
      register: "comune",
      context: "il termine più neutro per il senso 1",
    },
    {
      term: "passaparola",
      register: "comune",
      context: "quando la raccomandazione è spontanea e non premiata",
      note: "Il passaparola è spontaneo; il referral spesso è organizzato e misurato.",
    },
    {
      term: "sito di provenienza",
      register: "tecnico-SEO",
      context: "senso 2",
    },
  ],
  antonyms: [],
  relatedWords: [
    "fee",
    "affiliazione",
    "sponsor",
    "seo",
    "engagement",
    "fidelizzazione",
    "kpi",
    "ranking",
    "redirect",
    "backlink",
    "passaparola",
    "codice invito",
  ],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/referral",
  },
  paroliereNote: "Referral è una parola con due mestieri e chi lavora sul web li incontra entrambi. Nel marketing è la raccomandazione organizzata: il codice invito, lo sconto per chi porta un amico, la → [fee](https://ilparoliere.online/parola/fee) a chi segnala un cliente. Nell'analisi del traffico è la sorgente di una visita che arriva da un altro sito, quindi il segno concreto di un link che funziona, cosa che interessa a chi fa → [SEO](https://ilparoliere.online/parola/seo). Il protocollo HTTP chiama referer, con una r sola, l'intestazione che trasmette la pagina di provenienza: un refuso entrato nelle specifiche e rimasto per compatibilità. Rispetto all'→ [affiliazione](https://ilparoliere.online/parola/affiliazione), il referral di solito premia il cliente e non un editore professionale. La parola inglese è documentata dal 1920 ([Etymonline, referral](https://www.etymonline.com/word/referral)). In italiano raccomandazione porta un'ombra di favoritismo che referral non ha: forse anche per questo il prestito resiste.",
  seo: {
    title: "Referral — significato nel marketing e nel traffico web | Il Paroliere",
    description: "Che cos'è un referral: la raccomandazione premiata che porta nuovi clienti e, nell'analisi web, la visita che arriva da un link esterno. Esempi d'uso.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
