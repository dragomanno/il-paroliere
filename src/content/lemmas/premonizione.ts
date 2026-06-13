// Il Paroliere — Lemma: premonizione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const premonizione: LemmaEntry = {
  lemma: "premonizione",
  slug: "premonizione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "letterario"],
  domains: ["psicologia", "superstizione", "religione", "letteratura", "sogni"],

  definition:
    "Sensazione intensa e spesso improvvisa che qualcosa stia per accadere, in genere con colore emotivo forte, senza che chi la prova sappia indicare con chiarezza da dove venga quella certezza. Nella tradizione religiosa e superstiziosa la premonizione può essere letta come messaggio, visione o sogno rivelatore, attribuito a forze esterne alla persona; in psicologia interessa il modo in cui il cervello combina indizi minimi, memorie e paure in una percezione anticipata che può sembrare “profetica”, ma nasce da processi interni. Nel linguaggio narrativo, la premonizione è spesso il dispositivo che annuncia al lettore un evento futuro, dando alla storia un senso di attesa.",

  shortDefinition:
    "Sensazione forte e anticipata che qualcosa stia per accadere, vissuta come certezza emotiva più che come conclusione ragionata.",

  etymology:
    "Dal latino tardo praemonitio, -onis, “avvertimento anticipato, ammonimento”, derivato di praemonēre “avvertire prima”, composto da prae- “prima” e monēre “avvisare, richiamare”. In italiano il termine ha progressivamente accentuato la dimensione soggettiva e visionaria, avvicinandosi al campo dei presentimenti e delle profezie personali.",

  examples: [
    "Quella notte ebbe la premonizione di un crollo, e la mattina dopo trovò davvero la parete lesionata.",
    "Molte persone raccontano di aver avuto una premonizione prima di un incidente, però ricordano il sogno solo dopo che l'evento è successo.",
    "In terapia, la premonizione di una rottura può essere letta come la parte di noi che registra segnali deboli prima della coscienza.",
    "La nonna prendeva sul serio ogni premonizione, come se il mondo parlasse attraverso dettagli che gli altri non vedevano.",
    "Nel film, la premonizione del protagonista crea un effetto di loop: il tentativo di evitarla finisce per realizzarla.",
  ],

  synonyms: [
    {
      term: "presentimento",
      register: "comune",
      note: "Termine più generale, non necessariamente legato a immagini o “visioni”.",
    },
    {
      term: "presagio interiore",
      register: "saggistico",
      note: "Mette l'accento sulla fonte interna, rispetto al segno esterno.",
    },
    {
      term: "visione",
      register: "religioso-letterario",
      note: "Spesso connotata da immagini vivide e contenuto più estremo.",
    },
  ],

  antonyms: [
    {
      term: "smentita dei fatti",
      register: "comune",
      note: "Quando l'evento previsto non si verifica o si realizza al contrario.",
    },
    {
      term: "indifferenza al futuro",
      register: "saggistico",
      note: "Assenza di attesa emozionale o di lettura anticipatoria degli eventi.",
    },
  ],

  relatedWords: ["presagio", "intuizione", "sogno", "superstizione"],

  sourceLinks: {},

  paroliereNote:
    "La premonizione mette insieme tre ingredienti difficili da districare: la nostra sensibilità ai dettagli, il bisogno di controllare il futuro, la tendenza a ricordare solo le coincidenze che ci colpiscono. Per questo, da un lato, è facile liquidarla come illusione; dall'altro, è una forma con cui la psiche segnala che qualcosa non torna, prima ancora che ce lo diciamo in modo chiaro. Il lemma invita a non farsi guidare ciecamente dalle premonizioni, ma neppure a ignorare quello che raccontano sulle nostre paure, sui nostri desideri e sui piccoli movimenti del mondo che abbiamo colto senza accorgercene.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "premonizione — quando il futuro sembra affacciarsi prima",
    description:
      "Che cos'è una premonizione tra sogni, superstizioni e psicologia, dalla certezza emotiva ai segnali deboli che il cervello registra in anticipo.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
