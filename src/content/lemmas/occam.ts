// Il Paroliere — Lemma: rasoio di Occam
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const occam: LemmaEntry = {
  lemma: "rasoio di Occam",
  slug: "occam",
  partOfSpeech: "locuzione-nominale",
  gender: "maschile",
  register: ["tecnico", "divulgativo", "comune"],
  domains: ["filosofia", "epistemologia", "metodologia-scientifica"],

  definition:
    "Principio metodologico, noto anche come principio di economia o principio di parsimonia, secondo cui, a parità di potere esplicativo, va preferita la spiegazione che introduce il minor numero di assunzioni o entità non necessarie: non implica che la spiegazione più semplice sia sempre quella vera, ma che, in assenza di prove a favore della complessità aggiuntiva, essa vada preferita come punto di partenza. Il principio prende il nome dal filosofo francescano Guglielmo di Occam, vissuto nel XIV secolo, sebbene la formulazione latina più celebre con cui viene comunemente citato — *entia non sunt multiplicanda praeter necessitatem*, \"le entità non devono essere moltiplicate oltre il necessario\" — non compaia in nessuno scritto autentico del filosofo: è stata coniata solo nel 1639 dal commentatore francescano irlandese John Punch. Occam stesso, nelle sue *Quaestiones et decisiones in quattuor libros Sententiarum*, usava formulazioni più caute come *pluralitas non est ponenda sine necessitate* (\"non si deve porre una pluralità senza necessità\"). Il termine \"rasoio\" per indicare il principio fu introdotto solo nel 1852 dal matematico William Rowan Hamilton.",

  shortDefinition:
    "Principio secondo cui, a parità di spiegazione, va preferita quella con meno assunzioni non necessarie; da Guglielmo di Occam, XIV secolo.",

  etymology:
    "Locuzione composta dal sostantivo *rasoio*, in senso figurato \"strumento che taglia via il superfluo\", e dal toponimo *Occam* (od *Ockham*), il villaggio inglese nel Surrey da cui prende il nome il filosofo Guglielmo. L'immagine del rasoio — che recide le spiegazioni ridondanti come una lama recide ciò che è in eccesso — è un'aggiunta successiva alla vita di Occam: come nota la ricerca storiografica, né la formula latina più famosa né la metafora del rasoio risalgono al filosofo medievale, ma a commentatori e matematici dei secoli successivi che ne hanno codificato e reso memorabile il principio metodologico sottostante.",

  examples: [
    "Di fronte a due teorie che spiegano ugualmente bene i dati, il rasoio di Occam suggerisce di preferire quella che richiede meno ipotesi ausiliarie non verificabili.",
    "In medicina si insegna spesso una versione informale del rasoio di Occam: quando senti degli zoccoli, pensa a cavalli, non a zebre — cioè privilegia la diagnosi più comune prima di quella più esotica.",
    "Il rasoio di Occam non dice che la spiegazione semplice sia automaticamente vera: dice solo che, senza prove contrarie, merita la priorità nell'indagine.",
    "Molti attribuiscono a Occam la frase 'entia non sunt multiplicanda praeter necessitatem', ma quella formulazione esatta è in realtà opera di un commentatore secentesco, non del filosofo medievale.",
  ],

  synonyms: [
    { term: "principio di parsimonia", register: "tecnico", note: "Denominazione più neutra e diffusa in ambito scientifico e statistico contemporaneo." },
    { term: "principio di economia", register: "tecnico", note: "Formulazione più antica, enfatizza il risparmio di assunzioni teoriche." },
  ],

  antonyms: [
    { term: "pensiero-laterale", register: "tecnico", note: "Modalità di ragionamento esplicitamente contrapposta al rasoio di Occam: mentre il rasoio cerca la semplicità, il pensiero laterale esplora deliberatamente soluzioni complesse o inattese, anche a costo di allontanarsi dall'ipotesi più economica." },
    { term: "sovradeterminazione esplicativa", register: "tecnico", note: "Tendenza opposta a moltiplicare le cause o le entità coinvolte in una spiegazione." },
  ],

  relatedWords: ["assioma", "inferenza", "pensiero-laterale"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/rasoio_di_Occam",
  },

  paroliereNote:
    "Il rasoio di Occam è vittima di uno dei fraintendimenti più diffusi della cultura popolare: viene spesso brandito come se dicesse 'la risposta più semplice è sempre quella giusta', quando in realtà è uno strumento molto più modesto e molto più utile — un criterio per scegliere da dove cominciare a cercare, non per smettere di cercare. E c'è una seconda ironia storica, quasi poetica: la formula latina che tutti citano come sua non è mai stata scritta da lui. Occam ha lasciato il principio; qualcun altro, tre secoli dopo, gli ha prestato le parole con cui lo ricordiamo — un piccolo promemoria di quanto la storia delle idee sia fatta anche di attribuzioni imperfette.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "rasoio di Occam — significato, storia e vera origine della formula",
    description:
      "Che cos'è il rasoio di Occam, principio di parsimonia da Guglielmo di Occam: la vera origine della celebre formula latina, attribuita solo nel 1639.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
