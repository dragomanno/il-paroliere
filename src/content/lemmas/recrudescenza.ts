// Il Paroliere — Lemma: recrudescenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const recrudescenza: LemmaEntry = {
  lemma: "recrudescenza",
  slug: "recrudescenza",
  partOfSpeech: "sostantivo femminile",

  definition:
    "Il riacutizzarsi di qualcosa che sembrava attenuato o in via di risoluzione: una " +
    "malattia che peggiora dopo un periodo di relativa stasi, un fenomeno sociale che si " +
    "intensifica dopo una fase di calo, un conflitto che riprende vigore dopo una tregua. " +
    "La recrudescenza non è una ricaduta — che implica un ritorno dopo la guarigione — " +
    "né una semplice continuazione: è il peggioramento di qualcosa che era già presente " +
    "ma sembrava stesse migliorando. Porta con sé l'idea di qualcosa di brutale che torna " +
    "a farsi sentire con rinnovata forza, come se avesse accumulato energia durante la " +
    "fase di latenza. In medicina, la recrudescenza si distingue dalla recidiva (ritorno " +
    "della malattia dopo guarigione completa) e dalla ricaduta (peggioramento durante la " +
    "fase di miglioramento, prima della guarigione): la recrudescenza indica " +
    "specificamente un aumento di intensità dei sintomi in un paziente ancora malato.",

  shortDefinition:
    "Il riacutizzarsi di un male, un fenomeno o una situazione che sembrava " +
    "attenuarsi; ripresa d'intensità di qualcosa di già presente.",

  register: ["formale", "giornalistico"],
  domains: ["medicina", "società", "linguistica", "giornalismo"],

  etymology:
    "Dal latino recrudescere («tornare a essere crudo, riaprirsi»), composto di " +
    "re- (di nuovo) + crudescere («farsi crudo, infiammarsi»), da crudus «crudo, non " +
    "guarito, aperto». L'immagine è quella di una ferita che si riapre.",

  examples: [
    "La recrudescenza dei contagi durante l'inverno aveva vanificato i progressi dei mesi precedenti.",
    "Una recrudescenza della violenza nei quartieri periferici aveva riacceso il dibattito sulla sicurezza urbana.",
    "Il medico spiegò che quella recrudescenza dei sintomi non era inaspettata: succede spesso nelle fasi intermedie della terapia.",
    "La recrudescenza del nazionalismo in Europa non era un fatto nuovo: era un'idea mai morta che aveva aspettato il momento giusto.",
  ],

  synonyms: [
    {
      term: "riacutizzazione",
      register: "medico",
      context: "termine tecnico in ambito clinico",
    },
    {
      term: "aggravamento improvviso",
      register: "comune",
      context: "peggioramento inaspettato",
    },
    {
      term: "riaccendersi",
      register: "figurato",
      context: "ripresa di intensità di un fenomeno",
    },
  ],

  antonyms: [
    {
      term: "attenuazione",
      register: "comune",
      context: "diminuzione di intensità",
    },
    {
      term: "remissione",
      register: "medico",
      context: "scomparsa dei sintomi",
    },
    {
      term: "miglioramento",
      register: "comune",
      context: "evoluzione positiva",
    },
  ],

  relatedWords: [
    "recidiva",
    "ricaduta",
    "remissione",
    "aggravamento",
    "reminiscenza",
    "epidemia",
    "conflitto",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/recrudescenza/",
    wiktionary: "https://it.wiktionary.org/wiki/recrudescenza",
  },

  paroliereNote:
    "Recrudescenza è una parola che il giornalismo ama perché suona grave e tecnica " +
    "senza essere incomprensibile — una combinazione rara. Ha il vantaggio di dire " +
    "esattamente ciò che significa: non solo che qualcosa è tornato, ma che è tornato " +
    "più forte di prima, con quella brutalità che la radice crudus porta incorporata. " +
    "Vale la pena segnalare che viene spesso confusa con ricaduta o recidiva: la " +
    "differenza sta nel fatto che la recrudescenza avviene mentre il processo negativo " +
    "è ancora in corso, non dopo che si credeva concluso.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Recrudescenza — definizione medica e figurata | Il Paroliere",
    description:
      "Cosa significa recrudescenza, differenza da recidiva e ricaduta. Riacutizzarsi " +
      "di un male o di un fenomeno sociale. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
