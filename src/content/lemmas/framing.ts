// Il Paroliere — Lemma: framing
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const framing: LemmaEntry = {
  lemma: "framing",
  slug: "framing",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["tecnico", "giornalistico", "anglicismo"],
  domains: ["psicologia", "giornalismo", "politica", "comunicazione"],

  definition:
    "Tecnica — e insieme fenomeno cognitivo — per cui la scelta delle parole, del " +
    "contesto e degli elementi enfatizzati nel presentare un'informazione ne " +
    "orienta l'interpretazione, anche quando i fatti riportati restano " +
    "tecnicamente accurati. Lo stesso evento può essere 'incorniciato' in modi " +
    "opposti senza mentire su un singolo dato: una manifestazione può essere " +
    "descritta come 'protesta pacifica' o come 'assembramento non autorizzato', " +
    "una riforma fiscale come 'alleggerimento del carico' o come 'taglio ai " +
    "servizi'. Il concetto, formalizzato in psicologia cognitiva dagli studi di " +
    "Daniel Kahneman e Amos Tversky sulle scelte in condizioni di rischio " +
    "(l'esempio classico: la stessa probabilità di sopravvivenza descritta come " +
    "'90% di successo' o '10% di rischio' produce reazioni emotive diverse), è " +
    "oggi centrale negli studi sui media e nella comunicazione politica, dove la " +
    "scelta della cornice interpretativa spesso conta più dei fatti riportati " +
    "nel determinare l'opinione del pubblico.",

  shortDefinition:
    "Tecnica e fenomeno cognitivo per cui il modo di presentare un'informazione " +
    "— parole, contesto, enfasi — ne orienta l'interpretazione senza alterarne i fatti.",

  etymology:
    "Dall'inglese framing, gerundio di to frame («incorniciare», da frame, " +
    "«cornice, struttura»), a sua volta dal germanico *framjan («far avanzare, " +
    "compiere»). Il termine entra nelle scienze sociali con il sociologo Erving " +
    "Goffman (Frame Analysis, 1974) e viene poi ripreso e formalizzato in " +
    "economia comportamentale da Kahneman e Tversky negli anni '80 con la teoria " +
    "del framing effect.",

  examples: [
    "Due testate riportarono lo stesso dato economico con framing opposti: " +
      "\"la disoccupazione scende sotto il 7%\" e \"quasi un lavoratore su " +
      "quindici ancora senza impiego\" — stessa cifra, impressione ribaltata.",
    "Il framing della domanda cambiava le risposte al sondaggio: chiedere se " +
      "si è favorevoli a 'tutelare la libertà d'impresa' otteneva consensi " +
      "molto diversi rispetto a 'ridurre i controlli sul lavoro'.",
    "In terapia cognitivo-comportamentale si lavora anche sul framing personale: " +
      "lo stesso fallimento può essere incorniciato come prova di incapacità o " +
      "come informazione utile per il tentativo successivo.",
    "A differenza della → propaganda, che spesso introduce anche informazioni " +
      "false, il framing può operare restando rigorosamente entro i fatti veri " +
      "— il che lo rende, in certi contesti, ancora più difficile da contestare.",
  ],

  synonyms: [
    {
      term: "incorniciamento",
      register: "tecnico",
      context: "calco italiano meno diffuso ma usato in letteratura accademica per lo stesso fenomeno",
    },
    {
      term: "angolazione",
      register: "giornalistico",
      context: "termine più informale del gergo redazionale per indicare il punto di vista scelto per una notizia",
    },
  ],

  antonyms: [
    {
      term: "presentazione neutra",
      register: "formale",
      context: "esposizione dei fatti priva di enfasi selettiva o cornice interpretativa deliberata",
    },
  ],

  relatedWords: [
    "framing effect",
    "propaganda",
    "bias cognitivo",
    "effetto alone",
    "narrativa",
    "spin",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/framing",
  },

  paroliereNote:
    "Il framing merita un posto a sé in questo lessico perché smentisce " +
    "un'intuizione comune: che per manipolare un'opinione sia necessario " +
    "mentire. Kahneman e Tversky hanno mostrato che basta cambiare la cornice " +
    "linguistica di un'informazione vera per invertire le preferenze delle " +
    "persone su scala statisticamente significativa. Questo rende il framing " +
    "uno strumento eticamente ambiguo per definizione: è impossibile comunicare " +
    "senza scegliere una cornice — anche il tentativo di essere 'neutrali' è " +
    "esso stesso una scelta di framing — ma è possibile scegliere cornici che " +
    "aiutano la comprensione invece di sfruttare le scorciatoie emotive di chi " +
    "ascolta. La differenza tra un buon giornalismo e la → propaganda si gioca " +
    "spesso proprio qui: nella trasparenza con cui l'angolazione scelta viene " +
    "dichiarata invece di essere fatta passare per l'unica lettura possibile dei fatti.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Framing — definizione, origine e uso nei media | Il Paroliere",
    description:
      "Che cos'è il framing: effetto cognitivo studiato da Kahneman e Tversky, " +
      "uso nel giornalismo e nella comunicazione politica, esempi pratici.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
