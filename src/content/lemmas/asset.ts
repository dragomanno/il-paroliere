// Il Paroliere — Lemma: asset
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const asset: LemmaEntry = {
  lemma: "asset",
  slug: "asset",
  partOfSpeech: "sostantivo maschile invariabile",
  gender: "maschile",
  definition: "Bene o risorsa che ha valore economico per chi la possiede e che può produrre reddito o essere convertita in denaro: un immobile, un titolo, un marchio, un brevetto, una base di clienti. Nell'italiano aziendale la parola si allarga a qualunque punto di forza strategico, anche intangibile, come la reputazione o le competenze di una squadra.",
  shortDefinition: "Bene o risorsa con valore economico, tangibile o no; in senso aziendale, ogni punto di forza su cui contare.",
  register: [
    "tecnico",
    "professionale",
  ],
  domains: [
    "finanza",
    "economia",
    "management",
  ],
  etymology: "Dall'inglese asset, singolare ricavato nell'Ottocento da assets, che risale all'anglo-francese asetz e al francese antico assez «abbastanza», dal latino ad satis. In origine indicava i beni sufficienti a pagare i debiti e i lasciti di un defunto; da lì il senso di patrimonio e, più tardi, di risorsa in genere. In italiano si pronuncia di solito con l'accento sulla prima sillaba, «àsset».",
  examples: [
    "Il vero asset dell'azienda non sono i capannoni, ma trent'anni di rapporti con i clienti tedeschi.",
    "Oro, azioni e obbligazioni sono asset class diverse: reagiscono in modo diverso alle stesse notizie.",
    "Nel bilancio italiano gli asset si chiamano attività e compaiono nell'attivo dello stato patrimoniale.",
    "Per un piccolo comune il castello è un asset turistico, a patto di tenerlo aperto anche d'inverno.",
  ],
  synonyms: [
    {
      term: "attività",
      register: "tecnico",
      context: "il termine dei bilanci in italiano: le attività contro le passività",
    },
    {
      term: "bene",
      register: "comune",
    },
    {
      term: "cespite",
      register: "tecnico",
      context: "contabilità e fisco: bene strumentale durevole",
      note: "Più ristretto: un cespite è un asset, non ogni asset è un cespite.",
    },
    {
      term: "punto di forza",
      register: "comune",
      context: "nel senso figurato",
    },
  ],
  antonyms: [
    {
      term: "passività",
      register: "tecnico",
      context: "debiti e obbligazioni verso terzi; in inglese liabilities",
    },
    {
      term: "punto debole",
      register: "comune",
      context: "nel senso figurato",
    },
  ],
  relatedWords: [
    "capitale",
    "investimento",
    "portafoglio",
    "rendimento",
    "rischio",
    "liquidita",
    "stakeholder",
    "patrimonio",
    "bilancio",
    "immobilizzazioni",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/asset/",
    wiktionary: "https://it.wiktionary.org/wiki/asset",
  },
  paroliereNote: "Asset è uno degli anglicismi più utili e più abusati dell'italiano d'impresa. Utile, perché copre con una sola parola beni materiali e immateriali che l'italiano tende a separare: il cespite, il titolo, il marchio. Abusato, perché nelle presentazioni diventa una formula di prestigio: «le persone sono il nostro asset più importante» suona bene finché non si ricorda che, in contabilità, un asset si può anche vendere. Nei testi formali e nei bilanci la parola italiana resta attività; il plurale invariabile, gli asset, è preferibile all'ibrido «gli assets».",
  seo: {
    title: "Asset — significato in finanza e in azienda | Il Paroliere",
    description: "Che cosa vuol dire asset: un bene o una risorsa con valore economico, dal titolo al marchio. Etimologia dal francese assez e differenza con attività e cespite.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
