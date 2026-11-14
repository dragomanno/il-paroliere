// Il Paroliere — Lemma: lievito
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const lievito: LemmaEntry = {
  lemma: "lievito",
  slug: "lievito",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",
  definition: "1. Fungo microscopico unicellulare capace di trasformare gli zuccheri in alcol e anidride carbonica; nel vino e nella birra si distinguono lieviti indigeni, presenti sull'uva e in cantina, e lieviti selezionati, aggiunti dall'enologo. 2. Sostanza che fa crescere un impasto, dal lievito di birra al lievito madre e, in senso improprio, alle polveri chimiche per dolci. 3. In senso figurato, ciò che stimola o fa crescere un'idea, un movimento.",
  shortDefinition: "Fungo microscopico che fa fermentare gli zuccheri, e ciò che fa crescere un impasto; in figura, ciò che fa crescere un'idea.",
  register: [
    "comune",
    "tecnico",
    "figurato",
  ],
  domains: [
    "microbiologia",
    "enologia",
    "panificazione",
    "birrificazione",
  ],
  etymology: "Dal latino parlato *levitum, accanto al classico levatum, participio di levare, «alzare»: il lievito è ciò che fa alzare la pasta. Dalla stessa base vengono lievitare e levatura, e il francese levain.",
  examples: [
    "Questa cantina fermenta solo con lieviti indigeni: è più rischioso, ma secondo loro il vino somiglia di più al posto.",
    "Il lievito madre va rinfrescato ogni pochi giorni, altrimenti diventa troppo acido.",
    "Negli spumanti metodo classico il vino resta per mesi sui lieviti, e da lì vengono i profumi di crosta di pane.",
    "Quel piccolo circolo di lettori fu il lievito di un'intera stagione culturale.",
  ],
  synonyms: [
    {
      term: "fermento",
      register: "comune",
      context: "termine antico e generico per gli agenti della fermentazione, oggi più usato in senso figurato",
    },
    {
      term: "Saccharomyces cerevisiae",
      register: "scientifico",
      context: "la specie di lievito più usata in enologia, panificazione e birrificazione",
    },
    {
      term: "lievito madre",
      register: "comune",
      context: "nel pane, impasto acido che contiene lieviti e batteri lattici, rinnovato di continuo",
      note: "Detto anche pasta madre o, con un francesismo, levain.",
    },
  ],
  antonyms: [
    {
      term: "azzimo",
      register: "comune",
      context: "detto del pane o dell'impasto fatto senza lievito",
    },
  ],
  relatedWords: [
    "fermentazione",
    "vinificazione",
    "macerazione",
    "affinamento",
    "enologia",
    "cuvee",
    "mosto",
    "cantina",
    "vino",
    "fervore",
    "effervescente",
    "pane",
    "birra",
    "lievito madre",
    "Pasteur",
    "Saccharomyces",
    "acidita",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/lievito2/",
    wiktionary: "https://it.wiktionary.org/wiki/lievito",
  },
  paroliereNote: "Per secoli il lievito si è usato senza sapere che cosa fosse. Nel pane si teneva da parte un pezzo di pasta del giorno prima; nel vino la fermentazione partiva da sola, con i lieviti portati dall'uva e dalla cantina. Fu Louis Pasteur, nel 1857, a dimostrare che a trasformare lo zucchero in alcol sono organismi vivi, come racconta la [Bibliothèque nationale de France](https://gallica.bnf.fr/blog/25112022/des-fermentations-la-pasteurisation-les-travaux-de-pasteur-sur-le-vinaigre-le-vin-et-la). Da lì nasce la distinzione che oggi divide le cantine: i lieviti indigeni, o spontanei, danno fermentazioni meno prevedibili e, per chi li sceglie, vini più legati al luogo; i lieviti selezionati, prodotti e acquistati, rendono il processo più sicuro e uniforme. Nella → [fermentazione](https://ilparoliere.online/parola/fermentazione) il lievito lavora, nel → [mosto](https://ilparoliere.online/parola/mosto) trova da mangiare. Il senso figurato segue la stessa immagine: qualcosa di piccolo che fa crescere tutto il resto.",
  seo: {
    title: "Lievito — significato nel vino, nel pane e in figura | Il Paroliere",
    description: "Che cos'è il lievito: il fungo che fa fermentare vino, birra e pane, lieviti indigeni e selezionati, il lievito madre, il senso figurato e l'origine da levare.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
