// Il Paroliere — Lemma: SLEALTÀ
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const slealta: LemmaEntry = {
  lemma: "slealtà",
  slug: "slealta",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Qualità di un rapporto in cui la fiducia viene tradita da dentro: " +
    "non dall'esterno, non da uno sconosciuto, ma da chi era parte del patto. " +
    "La slealtà presuppone sempre una relazione preesistente — amicizia, alleanza, fedeltà — " +
    "e si distingue dalla disonestà proprio perché il danno non è generico: " +
    "è diretto a qualcuno che si era affidato.",
  shortDefinition:
    "Il tradimento di un patto di fiducia preesistente: si è sleali verso qualcuno, non verso il mondo.",
  register: ["comune", "formale"],
  domains: ["morale", "relazioni", "comportamento"],
  etymology:
    "Derivato di sleale, composto dal prefisso s- privativo e leale (dal francese antico loial, " +
    "a sua volta dal latino legalis, conforme alla legge). La slealtà è letteralmente " +
    "l'assenza di quel legame che la lealtà crea.",
  examples: [
    "Non era la sconfitta a farle male — era la slealtà di chi aveva giocato dalla sua parte.",
    "C'è una differenza tra sbagliare e essere sleali: uno è un errore, l'altra è una scelta.",
    "La slealtà di un amico pesa più della malvagità di un nemico, perché arriva da dove non ti aspetti.",
  ],
  synonyms: [
    { term: "tradimento", register: "comune", context: "forma più grave e deliberata di slealtà" },
    { term: "doppiezza", register: "comune-formale", context: "chi mostra una faccia in pubblico e un'altra in privato" },
    { term: "perfidia", register: "formale-letterario", context: "slealtà con intenzione di nuocere, più grave e consapevole" },
    { term: "infedeltà", register: "comune", context: "mancanza di fedeltà in relazioni affettive o di lealtà" },
    { term: "disonestà", register: "comune", context: "mancanza di onestà in senso ampio, anche verso sconosciuti" },
  ],
  antonyms: [
    { term: "lealtà", register: "comune", context: "fedeltà ai patti e alle relazioni di fiducia" },
    { term: "fedeltà", register: "comune", context: "costanza nel mantenere gli impegni e i legami" },
  ],
  relatedWords: ["lealtà", "tradimento", "fiducia", "disonestà", "perfidia", "doppiezza"],
  sourceLinks: {},
  paroliereNote:
    "La slealtà è l'unico vizio del cluster che richiede una vittima specifica. " +
    "Non si può essere sleali in astratto: ci vuole sempre qualcuno che si fidava. " +
    "Questo la rende più personale della disonestà e più fredda del tradimento — " +
    "perché spesso non c'è nemmeno la passione come attenuante.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Slealtà — Il Paroliere",
    description:
      "Definizione originale di 'slealtà': tradimento di un patto di fiducia preesistente. Distinta dalla disonestà perché presuppone sempre una relazione.",
  },
  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
