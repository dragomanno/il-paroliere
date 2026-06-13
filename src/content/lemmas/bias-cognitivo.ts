// Il Paroliere — Lemma: bias cognitivo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const biasCognitivo: LemmaEntry = {
  lemma: "bias cognitivo",
  slug: "bias-cognitivo",
  partOfSpeech: "locuzione-nominale",
  gender: "maschile",
  register: ["tecnico", "divulgativo"],
  domains: ["psicologia", "neuroscienze", "economia-comportamentale", "sociologia", "cultura-digitale"],

  definition:
    "Tendenza sistematica della mente a deviare da una valutazione pienamente razionale o neutrale di fatti, persone e situazioni, seguendo scorciatoie di giudizio che semplificano il mondo, ma possono portare a errori prevedibili. In psicologia e nelle scienze cognitive i bias cognitivi descrivono pattern ricorrenti, come il confermare solo le informazioni che ci danno ragione, sovrastimare ciò che ricordiamo con più facilità, fidarci troppo del primo numero visto in una trattativa; in economia comportamentale e nella vita quotidiana aiutano a spiegare perché, anche di fronte agli stessi dati, gruppi diversi arrivano a conclusioni opposte. Nell'uso digitale contemporaneo, il lemma viene spesso evocato per ragionare su algoritmi, disinformazione e camere dell'eco.",

  shortDefinition:
    "Scorciatoia abituale del pensiero che devia in modo prevedibile dalla valutazione razionale dei fatti, influenzando giudizi e decisioni.",

  etymology:
    "Dall'inglese cognitive bias, con bias “deviazione, inclinazione, pregiudizio”, termine di origine incerta attestato nel linguaggio tecnico e sportivo, passato poi al lessico della psicologia sperimentale tra anni Settanta e Ottanta del Novecento. In italiano la locuzione si afferma in ambito accademico e divulgativo a partire dal lessico dell'economia comportamentale, e solo in seguito entra nel discorso pubblico più ampio.",

  examples: [
    "Nel valutare il curriculum ha ceduto a un bias cognitivo di somiglianza: preferiva chi gli ricordava il proprio percorso.",
    "Il bias cognitivo di conferma ci porta a cercare solo notizie che sostengono ciò che già pensiamo, soprattutto sui social.",
    "Sapere che esistono i bias cognitivi non ci rende immuni, ma ci aiuta a mettere in dubbio le nostre certezze più automatiche.",
    "In tribunale, i bias cognitivi dei giudici possono influenzare la percezione della credibilità di un testimone.",
    "Molti modelli di intelligenza artificiale finiscono per amplificare i bias cognitivi presenti nei dati con cui sono stati addestrati.",
  ],

  synonyms: [
    {
      term: "distorsione cognitiva",
      register: "tecnico",
      note: "Resa italiana frequente, leggermente più ampia, talvolta usata come quasi equivalente.",
    },
    {
      term: "pregiudizio mentale",
      register: "divulgativo",
      note: "Più colloquiale, accosta il lemma al campo dei pregiudizi sociali.",
    },
  ],

  antonyms: [
    {
      term: "valutazione critica",
      register: "comune",
      note: "Sottolinea il controllo consapevole sugli errori di giudizio.",
    },
    {
      term: "razionalità argomentata",
      register: "saggistico",
      note: "Punta sull'uso di ragioni esplicite, non di scorciatoie automatiche.",
    },
  ],

  relatedWords: ["percezione", "stereotipo", "euristica", "subliminale"],

  sourceLinks: {},

  paroliereNote:
    "Parlare di bias cognitivi significa riconoscere che molti errori non sono “distrazioni” occasionali, ma modi ricorrenti di pensare che ci risparmiano fatica al prezzo di una certa ingiustizia verso il mondo. Il lemma è diventato di moda, talvolta usato come etichetta rassicurante (“non è colpa mia, è un bias”), ma la sua forza sta altrove: invita a sospendere la sicurezza del primo giudizio e a chiederci chi ci guadagna da queste deviazioni. Nei feed digitali, dove tutto è progettato per catturare attenzione e confermare identità, riconoscere i bias non li elimina, ma può impedire che siano solo altri a usarli contro di noi.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "bias cognitivo — quando la mente devia",
    description:
      "Che cos'è un bias cognitivo tra psicologia, economia comportamentale e cultura digitale, dalle scorciatoie mentali alle camere dell'eco.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
