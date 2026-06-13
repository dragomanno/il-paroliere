// Il Paroliere — Lemma: contrasto estetico
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const contrasteEstetico: LemmaEntry = {
  lemma: "contrasto estetico",
  slug: "contrasto-estetico",
  partOfSpeech: "locuzione nominale",
  gender: "maschile",
  register: ["tecnico", "critico"],
  domains: ["estetica", "pittura", "fotografia", "musica", "tipografia"],

  definition:
    "Relazione tra elementi opposti — luce e ombra, peso e leggerezza, silenzio e " +
    "suono, colore caldo e freddo — che produce tensione visiva, ritmica o sonora in " +
    "un’opera. Il contrasto non è disordine: è la tecnica con cui si crea gerarchia, " +
    "enfasi, movimento. Senza contrasto, tutto è equivalente e nulla emerge; con troppo " +
    "contrasto, l’opera urla e nulla si distingue.",

  shortDefinition:
    "Relazione tra elementi opposti che crea tensione, gerarchia ed enfasi in un’opera visiva, sonora o testuale.",

  etymology:
    "Da contrasto (dal latino tardo contrastare “opporsi, stare di fronte”, da contra " +
    "“contro” e stare “stare”) con l’aggiunta dell’attributo estetico (dal greco " +
    "aisthētikos “relativo alla percezione sensoriale”).",

  examples: [
    "Il contrasto estetico in tipografia non è solo tra font diversi: è tra dimensioni, pesi, spazi — una gerarchia visiva che dice al lettore dove guardare prima.",
    "Beethoven costruisce il contrasto estetico nelle sue sonate attraverso il tempo: un movimento lento e pesante seguito da uno veloce e leggero è un contrasto che si sente nel corpo prima che nell’intelletto.",
    "In fotografia in bianco e nero, il contrasto estetico tra aree chiare e scure si misura con l’istogramma ma si valuta con l’occhio: la tecnica serve la visione, non la sostituisce.",
    "Un testo senza contrasto — tutto allo stesso ritmo, alla stessa intensità, con la stessa lunghezza di frase — produce un effetto ipnotico involontario: il lettore smette di leggere prima di accorgersene.",
  ],

  synonyms: [
    { term: "contrasto", register: "comune-tecnico", note: "La forma breve, usata in tutti i contesti senza l’attributo 'estetico'." },
    { term: "chiaroscuro", register: "tecnico-pittorico", note: "Il contrasto specifico tra luce e ombra nella pittura e nel disegno." },
  ],

  antonyms: [
    { term: "uniformità", register: "comune", note: "L’assenza di differenza — la superficie piatta senza rilievo contrastivo." },
    { term: "monocromia", register: "tecnico", note: "Nel senso di uso di un solo valore o colore senza variazione contrastiva." },
  ],

  relatedWords: ["ombra", "luminosita", "composizione", "ritmo", "simmetria", "asimmetria"],

  paroliereNote:
    "Il contrasto estetico è lo strumento più diretto per creare attenzione — e il più " +
    "abusato. L’eye-catching di molta comunicazione digitale è contrasto senza gerarchia: " +
    "tutto grida, quindi niente emerge. Il contrasto funziona quando la differenza è " +
    "motivata: questo elemento deve emergere su quello perché ha qualcosa da dire che " +
    "l’altro non ha.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "contrasto estetico — cos’è e come funziona in arte, musica e tipografia",
    description: "Contrasto estetico: la relazione tra opposti come strumento compositivo. Come funziona in pittura, fotografia, musica e design tipografico.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
