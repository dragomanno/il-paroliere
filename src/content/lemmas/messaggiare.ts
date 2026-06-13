// Il Paroliere — Lemma: messaggiare
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const messaggiare: LemmaEntry = {
  lemma: "messaggiare",
  slug: "messaggiare",
  partOfSpeech: "verbo",
  gender: "invariabile",
  register: ["comune", "informale"],
  domains: ["comunicazione digitale", "linguistica", "neologismi"],

  definition:
    "Comunicare con qualcuno attraverso messaggi scritti su piattaforme digitali — " +
    "app di messaggistica, social media, SMS — in modo prevalentemente asincrono e " +
    "testuale. A differenza di «whatsappare», «telegare» o altri verbi " +
    "piattaforma-specifici, «messaggiare» è il termine generico che prescinde dallo " +
    "strumento usato. È un neologismo della prima generazione digitale italiana, " +
    "entrato nell’uso comune negli anni Duemila con la diffusione degli SMS e " +
    "consolidato con l’esplosione delle app di messaggistica.",

  shortDefinition:
    "Comunicare tramite messaggi scritti su piattaforme digitali; termine generico " +
    "rispetto ai verbi piattaforma-specifici come whatsappare o telegare.",

  etymology:
    "Da «messaggio» (dal latino messaticum, da missus «inviato»), con il suffisso " +
    "verbale -are della prima coniugazione. Il modello derivativo è lo stesso di " +
    "«telefonare», «faxare», «emailare»: il mezzo di comunicazione diventa verbo.",

  examples: [
    "Ti messaggio dopo è diventata una delle promesse più comuni e meno vincolanti del parlato contemporaneo.",
    "Messaggiare durante una riunione non è multitasking: è segnalare all’interlocutore fisico che qualcun altro ha più priorità.",
    "La comunicazione scritta asincrona — messaggiare — ha cambiato il ritmo delle relazioni: ci si aspetta risposta, ma non si sa quando arriverà.",
    "I nonni che imparano a messaggiare con i nipoti spesso sviluppano uno stile tutto loro: formale, puntuale, senza abbreviazioni.",
  ],

  synonyms: [
    { term: "whatsappare", register: "comune-informale", note: "Piattaforma-specifico: solo su WhatsApp." },
    { term: "scrivere", register: "comune", note: "Più generico, include anche la comunicazione analogica." },
  ],

  antonyms: [
    { term: "telefonare", register: "comune", note: "Comunicazione vocale sincrona, il canale che messaggiare ha in parte sostituito." },
  ],

  relatedWords: ["googlare", "twittare"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/messaggiare",
  },

  paroliereNote:
    "Messaggiare è la parola che descrive come abbiamo spostato buona parte della " +
    "nostra vita relazionale su un canale scritto asincrono — con conseguenze che " +
    "stiamo ancora elaborando. La conversazione sincrona obbligava a rispondere " +
    "nell’immediato, con tutto l’imbarazzo e la spontaneità che questo comporta. " +
    "Il messaggio consente di rileggere, correggere, rimandare. Il risultato è una " +
    "comunicazione più calibrata e meno autentica, o più pensata e meno immediata " +
    "— dipende dal punto di vista.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "messaggiare — comunicare per messaggi scritti nell’era delle app",
    description: "Che cos’è messaggiare: definizione linguistica, differenza dai verbi piattaforma-specifici, e come la messaggistica asincrona ha cambiato le relazioni.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
