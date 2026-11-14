// Il Paroliere — Lemma: context window
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const contextWindow: LemmaEntry = {
  lemma: "context window",
  slug: "context-window",
  partOfSpeech: "locuzione sostantivale femminile",
  gender: "femminile",
  definition: "Quantità massima di testo che un modello linguistico può considerare in una sola volta, misurata in token: comprende il prompt, gli eventuali documenti allegati, la conversazione precedente e la risposta in corso. Ciò che resta fuori dalla finestra, per il modello, non esiste.",
  shortDefinition: "Quantità massima di testo, misurata in token, che un modello linguistico può considerare in una sola volta.",
  register: [
    "tecnico",
  ],
  domains: [
    "intelligenza artificiale",
    "informatica",
  ],
  etymology: "Dall'inglese context «contesto», dal latino contextus «intreccio», da contexere «intrecciare», e window «finestra», di origine norrena: vindauga, «occhio del vento». L'immagine è quella di una finestra che scorre sul testo e ne lascia vedere solo una parte.",
  examples: [
    "Il contratto era troppo lungo per la context window e il modello ha riassunto solo le prime cinquanta pagine.",
    "In una conversazione molto lunga il modello sembra dimenticare le richieste iniziali: sono uscite dalla context window.",
    "Nel 2024 sono arrivati modelli con una context window di un milione di token, abbastanza per diversi romanzi interi.",
  ],
  synonyms: [
    {
      term: "finestra di contesto",
      register: "tecnico",
      context: "calco italiano trasparente e corretto, sempre più usato",
    },
    {
      term: "contesto",
      register: "comune",
      context: "abbreviazione frequente nel gergo",
      note: "Ambigua fuori dal settore.",
    },
  ],
  antonyms: [],
  relatedWords: [
    "token",
    "tokenizzazione",
    "prompt",
    "memoria",
    "llm",
    "modello-linguistico",
    "rag",
    "subagentico",
    "latenza",
  ],
  sourceLinks: {},
  paroliereNote: "La context window non è una memoria nel senso umano (→ memoria): somiglia piuttosto a un tavolo su cui il modello tiene aperti i fogli, e quando il tavolo è pieno qualcosa cade. Per questo si ricorre alla → RAG, che porta sul tavolo solo i fogli utili, e alle architetture → subagentiche, che dividono il lavoro fra più tavoli. Una finestra ampia non garantisce un'attenzione uniforme: i modelli tendono a trascurare ciò che sta nel mezzo dei testi molto lunghi. Nei testi per tutti, finestra di contesto è da preferire.",
  seo: {
    title: "Context window — significato, finestra di contesto | Il Paroliere",
    description: "Che cos'è la context window: quanto testo, misurato in token, un modello può considerare in una volta. Limiti, equivalente italiano, esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
