// Il Paroliere — Lemma: metafisica
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const metafisica: LemmaEntry = {
  lemma: "metafisica",
  slug: "metafisica",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Ramo della filosofia che indaga ciò che sta \"oltre\" o \"al di là\" del mondo fisico" +
    " così come appare: la struttura ultima della realtà, le nozioni di essere, causa," +
    " tempo, oggetto, possibilità, e il rapporto tra mente e mondo. Tradizionalmente la" +
    " metafisica ha cercato di dire qualcosa sull'essere in quanto essere, al di là dei" +
    " singoli enti e delle singole scienze; nel linguaggio comune, però, \"metafisico\" viene" +
    " spesso usato per indicare ciò che sembra troppo astratto, vago o legato a credenze" +
    " spirituali non dimostrabili. La storia del pensiero moderno alterna momenti di" +
    " critica alla metafisica e tentativi di riformularla in modo più sobrio e" +
    " controllabile.",

  shortDefinition:
    "Parte della filosofia che riflette sulla struttura ultima della realtà e dell'essere," +
    " andando oltre la descrizione dei singoli fenomeni fisici.",

  register: ["tecnico-filosofico", "saggistico", "comune"],
  domains: ["filosofia", "teologia", "epistemologia", "cultura"],

  etymology:
    "Dal latino tardo metaphysĭca, calco del greco tà metà tà physiká, \"i libri dopo" +
    " quelli sulla fisica\", in riferimento all'ordine con cui furono sistemati gli scritti" +
    " di Aristotele. Il nome, nato come indicazione editoriale, è stato interpretato come" +
    " \"ciò che viene dopo o oltre la fisica\", dando al termine il senso di indagine" +
    " sull'essere al di là della natura sensibile.",

  examples: [
    "Chiedersi se esista qualcosa come un \"io\" stabile nel tempo è una domanda di metafisica, non solo di psicologia.",
    "Molti scienziati dichiarano di non voler fare metafisica, però le loro teorie implicano comunque un'idea di realtà.",
    "Per Kant, la metafisica tradizionale va limitata, ma non del tutto abbandonata.",
    "Nel linguaggio quotidiano, definire un discorso \"troppo di metafisica\" significa spesso dire che si è staccato dai problemi concreti.",
    "Ogni volta che contrapponiamo ciò che appare a ciò che \"è davvero\", ci muoviamo su terreno metafisico anche senza saperlo.",
  ],

  synonyms: [
    {
      term: "ontologia",
      register: "tecnico-filosofico",
      note: "In alcuni usi, è la parte della metafisica che studia l'essere e le sue categorie.",
    },
    {
      term: "filosofia-prima",
      register: "storico-filosofico",
      note: "Espressione tradizionale che indica la ricerca sui principi primi.",
    },
  ],

  antonyms: [
    {
      term: "fisica",
      register: "scientifico",
      note: "Scienza della natura intesa in senso empirico, rispetto alla riflessione metafisica.",
    },
    {
      term: "positivismo-radicale",
      register: "saggistico",
      note: "Atteggiamento che vuole ridurre tutte le domande a ciò che è misurabile.",
    },
  ],

  relatedWords: [
    {
      term: "idee-platoniche",
      relation: "Esempio classico di costruzione metafisica su un livello di realtà oltre il sensibile.",
    },
    {
      term: "epistemologia",
      relation: "Disciplina che valuta quali pretese di conoscenza metafisica siano legittime.",
    },
    {
      term: "modernità-liquida",
      relation: "Immagine che, in certo senso, reagisce all'idea di strutture stabili e eterne.",
    },
    {
      term: "teologia",
      relation: "Ambito che spesso dialoga con la metafisica nella riflessione su Dio e sul senso ultimo dell'essere.",
    },
  ],

  sourceLinks: {},

  paroliereNote:
    "La metafisica è spesso presa a simbolo del pensiero che \"vola troppo alto\", lontano" +
    " dalla vita reale. Eppure, molte discussioni concrete che facciamo su persona," +
    " libertà, responsabilità, realtà o finzione poggiano su assunzioni metafisiche" +
    " implicite. Il problema non è tanto fare metafisica, quanto farla senza accorgersene," +
    " come se fosse puro buon senso. Il lemma propone di tenere la metafisica sotto luce" +
    " critica: riconoscere che ne abbiamo bisogno per orientare l'esperienza, ma che le sue" +
    " costruzioni non coincidono mai una volta per tutte con ciò che è.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "metafisica — che cosa c'è oltre la fisica",
    description:
      "Che cos'è la metafisica tra origine del nome, storia e uso corrente, dalle domande" +
    " sull'essere in quanto essere ai sospetti moderni verso i sistemi troppo astratti.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
