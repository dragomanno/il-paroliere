// Il Paroliere — Lemma: propaganda
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const propaganda: LemmaEntry = {
  lemma: "propaganda",
  slug: "propaganda",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale", "storico-politico"],
  domains: ["politica", "sociologia", "comunicazione", "storia"],

  definition:
    "Diffusione sistematica e organizzata di informazioni, idee o immagini — spesso " +
    "selettive, semplificate o distorte — finalizzata a orientare le opinioni e i " +
    "comportamenti di un pubblico ampio a favore di un'ideologia, un governo, un'entità " +
    "o una causa. A differenza della → persuasione individuale, la propaganda opera su " +
    "scala di massa e attraverso canali controllati (stampa, radio, oggi piattaforme " +
    "digitali), ripetendo pochi messaggi semplici fino a renderli percezione condivisa. " +
    "Il termine, nato in ambito religioso per indicare la diffusione della fede " +
    "cattolica, ha assunto la connotazione politica e spregiativa attuale soprattutto " +
    "nel Novecento, con l'uso sistematico che ne fecero i regimi totalitari, ma " +
    "propaganda in senso tecnico si applica anche a campagne commerciali, sanitarie o " +
    "militari che non implicano necessariamente falsità.",

  shortDefinition:
    "Diffusione sistematica di informazioni o idee, spesso selettive, per orientare " +
    "l'opinione pubblica su scala di massa attraverso canali controllati.",

  etymology:
    "Dal latino moderno propaganda, gerundivo femminile di propagare («propagare, " +
    "diffondere»), originariamente nella locuzione Congregatio de Propaganda Fide, " +
    "l'organismo istituito dalla Chiesa cattolica nel 1622 per la diffusione della " +
    "fede. Il significato politico-secolare, con connotazione spesso negativa, si " +
    "afferma pienamente nel XX secolo.",

  examples: [
    "La propaganda bellica dei due schieramenti dipingeva il nemico come " +
      "disumano: era più facile mandare i soldati a combattere qualcuno privato di volto.",
    "Non tutta la comunicazione istituzionale è propaganda: lo diventa quando smette di " +
      "informare e comincia sistematicamente a occultare i fatti sfavorevoli.",
    "Gli storici dei media distinguono la propaganda dichiarata — che si presenta come " +
      "tale — dalla propaganda occulta, che si maschera da informazione neutra ed è " +
      "proprio per questo più efficace.",
    "L'→ effetto alone giocava a favore del regime: mostrare il leader in pochi contesti " +
      "sempre positivi (il lavoro, la famiglia, lo sport) bastava a far presumere buone " +
      "qualità anche nelle aree su cui nessuno aveva informazioni dirette.",
  ],

  synonyms: [
    {
      term: "indottrinamento",
      register: "formale",
      context: "più centrato sull'imposizione sistematica di un sistema di credenze, spesso in contesti educativi o totalitari",
    },
    {
      term: "disinformazione",
      register: "tecnico",
      context: "quando la propaganda si basa specificamente su contenuti falsi o distorti in modo deliberato",
    },
  ],

  antonyms: [
    {
      term: "informazione indipendente",
      register: "formale",
      context: "comunicazione che riporta fatti verificabili senza finalità di orientamento ideologico",
    },
    {
      term: "pluralismo",
      register: "politico",
      context: "coesistenza di fonti e punti di vista diversi, che neutralizza il monopolio del messaggio",
    },
  ],

  relatedWords: [
    "propagandare",
    "propagandistico",
    "demagogia",
    "manipolazione",
    "disinformazione",
    "persuasione",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/propaganda",
  },

  paroliereNote:
    "Edward Bernays, nipote di Freud e fondatore delle moderne relazioni pubbliche, " +
    "scrisse nel 1928 un libro intitolato semplicemente Propaganda, in cui sosteneva " +
    "senza imbarazzo che la manipolazione organizzata dell'opinione pubblica fosse un " +
    "elemento necessario di ogni società democratica complessa. È un promemoria utile: " +
    "la propaganda non nasce con i totalitarismi del Novecento, li precede e li " +
    "sopravvive, cambiando semplicemente forma — dai manifesti murali ai contenuti " +
    "sponsorizzati sui social media. Ciò che la distingue sempre dalla comunicazione " +
    "legittima non è la persuasività (anche una buona campagna informativa persuade), " +
    "ma l'assenza di contraddittorio: la propaganda funziona meglio dove il pubblico " +
    "non ha accesso a fonti alternative con cui confrontarla.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Propaganda — definizione, storia e differenza da informazione | Il Paroliere",
    description:
      "Che cos'è la propaganda: definizione originale, origine religiosa del termine, " +
      "uso politico novecentesco, differenza da persuasione e disinformazione.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
