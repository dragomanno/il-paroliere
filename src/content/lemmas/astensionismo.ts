// Il Paroliere — Lemma: astensionismo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const astensionismo: LemmaEntry = {
  lemma: "astensionismo",
  slug: "astensionismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["tecnico", "saggistico", "comune"],
  domains: ["scienze politiche", "sociologia", "diritto costituzionale"],

  definition:
    "In scienze politiche, la scelta di non esercitare il diritto di voto in un'elezione " +
    "o in un referendum, sia per deliberata rinuncia sia per disinteresse, sfiducia o " +
    "impedimenti pratici. L'astensionismo non è un fenomeno uniforme: può essere " +
    "\u00abastensionismo di protesta\u00bb (chi si astiene per segnalare insoddisfazione verso " +
    "i partiti disponibili), \u00abastensionismo di alienazione\u00bb (chi non si sente " +
    "rappresentato dal sistema), o \u00abastensionismo strutturale\u00bb (chi non ha mai " +
    "sviluppato un legame con la partecipazione politica). In Italia il fenomeno ha " +
    "raggiunto livelli storicamente significativi a partire dagli anni Novanta, " +
    "diventando un indicatore rilevante della crisi di legittimità delle istituzioni " +
    "rappresentative.",

  shortDefinition:
    "La scelta di non votare, che può esprimere protesta, alienazione o disinteresse; " +
    "indicatore rilevante della salute democratica di un sistema politico.",

  etymology:
    "Da \u00abastenere\u00bb (dal latino abstinēre, da abs- \u00abda, via\u00bb e tenēre \u00abtenere\u00bb) " +
    "con il suffisso -ismo che indica sistema, tendenza, orientamento. Letteralmente: " +
    "\u00abil tenersi lontano\u00bb dalla partecipazione. Il termine entra nel lessico politico " +
    "con la diffusione del suffragio universale e la necessità di misurare la " +
    "partecipazione elettorale.",

  examples: [
    "Alle elezioni politiche italiane del 2022, l'astensionismo ha superato il 36%: per la prima volta nella storia repubblicana, i non votanti erano più degli elettori del partito di maggioranza relativa.",
    "Non tutto l'astensionismo è uguale: chi non vota perché \u201ctanto sono tutti uguali\u201d e chi non vota perché è in ospedale vengono contati nella stessa statistica, ma raccontano storie completamente diverse.",
    "In alcuni sistemi politici il voto è obbligatorio per legge: l'Australia ha un tasso di partecipazione superiore al 90%, ma c'è un dibattito aperto su se l'obbligo produca partecipazione reale o solo presenza fisica.",
    "L'astensionismo giovanile è spesso letto come apatia, ma i dati mostrano che le generazioni più giovani partecipano in forme diverse — petizioni, boicottaggi, attivismo digitale — senza passare dalle urne.",
  ],

  synonyms: [
    {
      term: "non voto",
      register: "giornalistico-comune",
      note: "Formula descrittiva, meno tecnica.",
    },
    {
      term: "disaffezione elettorale",
      register: "saggistico",
      note: "Sottolinea la componente emotiva e il processo progressivo di distacco.",
    },
  ],

  antonyms: [
    {
      term: "partecipazione elettorale",
      register: "tecnico",
      note: "Il tasso di votanti effettivi rispetto agli aventi diritto.",
    },
    {
      term: "mobilitazione civica",
      register: "sociologico-politico",
      note: "L'attivazione collettiva verso la partecipazione, l'opposto del ritiro.",
    },
  ],

  relatedWords: ["indifferenza-civile", "cinismo", "fatalismo", "sociologia", "modernita-liquida", "diffidenza"],

  sourceLinks: {},

  paroliereNote:
    "L'astensionismo è il barometro muto della democrazia: non fa rumore, non occupa " +
    "piazze, non scrive manifesti — eppure dice tutto su quanto le persone credano che " +
    "la loro voce conti. Il problema è che le istituzioni tendono a leggere il non-voto " +
    "come consenso passivo, invece che come segnale di crisi. In Italia, un paese che " +
    "ha avuto per decenni una delle partecipazioni elettorali più alte d'Europa, il " +
    "crollo degli ultimi trent'anni non è banale: racconta la dissoluzione di quelle " +
    "identità collettive — parrocchia, partito, classe — che tenevano le persone " +
    "ancorate all'urna. Trovare un ancoraggio alternativo è la vera sfida della " +
    "politica democratica contemporanea.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "astensionismo — il non voto come segnale politico e crisi democratica",
    description:
      "Che cos'è l'astensionismo elettorale: tipi di non voto, dati italiani, cause " +
      "sociologiche e rapporto con indifferenza civile, cinismo e fatalismo.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
