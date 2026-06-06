// Il Paroliere — Lemma: meridiano
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const meridiano: LemmaEntry = {
  lemma: "meridiano",
  slug: "meridiano",
  partOfSpeech: "sostantivo maschile; anche aggettivo",
  gender: "maschile",

  definition:
    "In geografia e cartografia, ciascuna delle semicirconferenze massime della " +
    "superficie terrestre che passano per i due Poli (Nord e Sud), perpendicolari " +
    "all'equatore. I meridiani sono convenzionalmente 360 (o 180 coppie di " +
    "semicerchi opposti) e permettono di misurare la longitudine di un punto sulla " +
    "Terra: la distanza angolare in gradi, minuti e secondi a est o a ovest del " +
    "meridiano di riferimento, detto meridiano di Greenwich (o meridiano primo), " +
    "fissato per convenzione internazionale nel 1884. I meridiani sono linee " +
    "immaginarie, non fisiche; convergono ai poli e si allontanano verso l'equatore " +
    "dove raggiungono la distanza massima tra loro. Vedi → parallelo per le linee " +
    "di latitudine ortogonali. Come aggettivo, meridiano significa anche \"relativo " +
    "al mezzogiorno, al sud\": il sole in posizione meridiana è il sole allo zenit, " +
    "a metà giornata.",

  shortDefinition:
    "Semicirconferenza immaginaria che unisce i due Poli terrestri; la serie dei meridiani misura la longitudine di un punto; il meridiano di riferimento è quello di Greenwich.",

  register: ["tecnico-geografico", "comune"],
  domains: ["geografia", "astronomia", "navigazione", "cartografia"],

  etymology:
    "Dal latino meridianus, derivato di meridies («mezzogiorno»), composto di " +
    "medius («mezzo») + dies («giorno»): il momento in cui il sole è a sud, nel " +
    "mezzo del giorno. Il termine geografico deriva dall'astronomia: il cerchio " +
    "meridiano era il cerchio che il sole attraversa a mezzogiorno.",

  examples: [
    "«Roma si trova approssimativamente sul 12° meridiano Est.»",
    "«Il meridiano di Greenwich fu adottato come riferimento universale nel 1884 durante la Conferenza internazionale di Washington.»",
    "«I meridiani convergono ai poli: due punti sulla stessa latitudine equatoriale possono distare migliaia di chilometri anche se separati da pochi gradi di meridiano.»",
  ],

  relatedWords: [
    "parallelo",
    "longitudine",
    "latitudine",
    "Greenwich",
    "equatore",
    "coordinate geografiche",
    "cartografia",
    "GPS",
    "fuso orario",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/meridiano/",
    wiktionary: "https://it.wiktionary.org/wiki/meridiano",
  },

  paroliereNote:
    "Meridiano è una di quelle parole che fanno capire quanto spesso i nomi " +
    "scientifici portino incorporata una storia culturale. Il fatto che il meridiano " +
    "di riferimento passi per Greenwich — un sobborgo di Londra — non è una verità " +
    "matematica ma una decisione politica presa nel 1884, quando la Gran Bretagna " +
    "era la potenza navale dominante del mondo. La Francia propose a lungo il " +
    "meridiano di Parigi come riferimento; la Russia aveva il suo. Il meridiano di " +
    "Greenwich è il meridiano dell'Impero britannico travestito da convenzione " +
    "universale. Oggi lo usiamo senza pensarci, ogni volta che accendiamo il GPS.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Meridiano — definizione geografica, longitudine, Greenwich | Il Paroliere",
    description:
      "Cosa sono i meridiani, come si misurano, perché Greenwich è il meridiano zero. Definizione originale con storia della cartografia e nota editoriale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
