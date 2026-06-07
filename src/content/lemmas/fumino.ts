// Il Paroliere — Lemma: fumino
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const fumino: LemmaEntry = {
  lemma: "fumino",
  slug: "fumino",
  partOfSpeech: "sostantivo maschile; anche aggettivo invariabile nel parlato",
  gender: "maschile",

  definition:
    "Persona che si arrabbia facilmente, che «fuma» di rabbia alla minima provocazione — " +
    "ma in modo rapido, esplosivo e quasi sempre passeggero. Il fumino non è un personaggio " +
    "rancoroso: è qualcuno che scatta, sbuffa, si infiamma, e poi si spegne altrettanto in " +
    "fretta. La metafora è quella del fumo che sale improvviso e poi si dissolve. Il termine " +
    "è tipico del parlato toscano e fiorentino, dove conserva una connotazione quasi " +
    "affettuosa — il fumino è un tipo umano riconoscibile e bonariamente accettato. " +
    "Il termine ha avuto una notevole diffusione popolare grazie al comico toscano Renzo " +
    "Montagnani (1930–1997), attore e caratterista di grande talento, legato al cinema italiano " +
    "degli anni Settanta e Ottanta — noto per ruoli in film come Amici miei di Mario Monicelli. " +
    "Montagnani aveva reso celebre la battuta «E son 'fumino'!», pronunciata con quel misto di " +
    "orgoglio e autoironia tutto toscano che trasformava un difetto di carattere in una " +
    "dichiarazione d'identità.",

  shortDefinition:
    "Chi si arrabbia facilmente e in modo esplosivo ma passeggero; termine toscano, sinonimo " +
    "colloquiale di irascibile, con sfumatura più bonaria.",

  register: ["colloquiale toscano", "familiare"],
  domains: ["società", "linguistica", "usi regionali", "cultura popolare"],

  etymology:
    "Da fumo (latino fumus) nel senso figurato di «vapore di rabbia» che sale e si disperde: " +
    "il fumino è chi fuma di rabbia. La costruzione con -ino — diminutivo che in toscano spesso " +
    "ammorbidisce senza annullare — aggiunge quella sfumatura di affettuosa ironia che distingue " +
    "il termine dai sinonimi più neutri.",

  examples: [
    'E son fumino! — la battuta di Renzo Montagnani era diventata il motto di una generazione di toscani che si riconoscevano nel tipo.',
    "Mio nonno era un fumino di prim'ordine: bastava niente per farlo partire, ma durava cinque minuti e poi si sedeva a tavola come se nulla fosse.",
    "Non prendertela: è un fumino, lo sai. Domani ti chiama e si scusa.",
  ],

  synonyms: [
    {
      term: "incazzoso",
      register: "colloquiale",
      context: "sinonimo di registro più marcato",
    },
    {
      term: "irascibile",
      register: "comune",
      context: "corrispettivo formale",
    },
    {
      term: "collerico",
      register: "tecnico",
      context: "termine tecnico-umorale",
    },
    {
      term: "incazzatello",
      register: "colloquiale",
      context: "variante attenuata",
    },
  ],

  antonyms: [
    {
      term: "calmo",
      register: "comune",
      context: "temperamento opposto",
    },
    {
      term: "posato",
      register: "comune",
      context: "comportamento opposto",
    },
    {
      term: "bonaccione",
      register: "colloquiale",
      context: "tipo umano opposto",
    },
  ],

  relatedWords: [
    "incazzoso",
    "incazzatello",
    "levantino",
    "Renzo Montagnani",
    "toscano",
    "collera",
    "carattere",
    "umorismo regionale",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/fumino/",
    wiktionary: "https://it.wiktionary.org/wiki/fumino",
  },

  paroliereNote:
    "Fumino è una di quelle parole che non si traducono facilmente in un'altra lingua senza " +
    "perdere qualcosa — non solo il significato ma il tono, la bonaria autoironia, il modo " +
    "toscano di fare di un difetto un titolo di merito. «Son 'fumino'» non è un'ammissione di " +
    "colpa: è quasi una dichiarazione d'identità fiera. La parola porta con sé tutta la cultura " +
    "toscana del caratteraccio sopportabile, dell'ira che non degrada in rancore, della scaltrezza " +
    "emotiva che sa distinguere tra lo sfogo e la rottura definitiva.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Fumino — definizione toscana, Renzo Montagnani | Il Paroliere",
    description:
      "Fumino: il termine toscano per chi si arrabbia in fretta e si spegne subito. " +
      "La battuta di Renzo Montagnani, uso e significato. Definizione originale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
