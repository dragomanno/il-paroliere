// Il Paroliere — Lemma: gradiente termico
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const gradienteTermico: LemmaEntry = {
  lemma: "gradiente termico",
  slug: "gradiente-termico",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Variazione della temperatura per unità di distanza. In meteorologia si intende di solito quello verticale, cioè il calo di temperatura che si incontra salendo nella → troposfera: in media circa 0,65 °C ogni cento metri, con valori che cambiano secondo l'umidità e la stabilità dell'aria. In fisica il gradiente termico è la grandezza che guida il passaggio di calore per conduzione, dal punto più caldo a quello più freddo.",
  shortDefinition: "Variazione della temperatura con la distanza; in meteorologia, il calo medio di circa 0,65 °C ogni cento metri di quota.",
  register: [
    "tecnico-scientifico",
  ],
  domains: [
    "meteorologia",
    "fisica",
  ],
  etymology: "Gradiente dal latino gradiens, -entis «che avanza», attraverso l'inglese gradient «pendenza»; termico dal greco thermós «caldo».",
  examples: [
    "Con un gradiente termico normale, partendo da venti gradi in paese si trovano circa tredici gradi mille metri più su.",
    "Quella mattina il gradiente termico era rovesciato: in valle si gelava e sui prati del rifugio si stava in maniche di camicia.",
    "Gli ingegneri hanno studiato il gradiente termico attraverso la parete per scegliere lo spessore dell'isolante.",
  ],
  synonyms: [
    {
      term: "gradiente di temperatura",
      register: "tecnico-scientifico",
      context: "denominazione generale, preferita in fisica",
    },
    {
      term: "gradiente termico verticale",
      register: "tecnico-scientifico",
      context: "quando si vuole precisare la direzione, in meteorologia",
    },
  ],
  antonyms: [
    {
      term: "inversione termica",
      register: "tecnico-scientifico",
      context: "situazione in cui la temperatura aumenta salendo, invece di diminuire",
    },
  ],
  relatedWords: [
    "temperatura",
    "inversione-termica",
    "isoterma",
    "zero-termico",
    "altitudine",
    "tropopausa",
    "termodinamica",
    "fronte-atmosferico",
    "troposfera",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/gradiente/",
    wiktionary: "https://it.wiktionary.org/wiki/gradiente",
  },
  paroliereNote: "Il valore di 0,65 gradi ogni cento metri è una media da manuale, utile per farsi un'idea e niente di più: l'aria secca che sale si raffredda quasi di un grado ogni cento metri, quella umida molto meno, perché la → condensazione libera calore. L'eccezione più nota ha un nome suo, → inversione termica, ed è quella che d'inverno tiene lo smog e la nebbia inchiodati in pianura.",
  seo: {
    title: "Gradiente termico — significato e valori in quota | Il Paroliere",
    description: "Che cos'è il gradiente termico: la variazione di temperatura con la distanza, in media 0,65 °C ogni 100 m di quota. Inversione termica ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
