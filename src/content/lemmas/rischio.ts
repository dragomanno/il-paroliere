// Il Paroliere — Lemma: rischio
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const rischio: LemmaEntry = {
  lemma: "rischio",
  slug: "rischio",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",
  definition: "Possibilità che un evento incerto produca un danno o una perdita, valutata insieme alla sua probabilità e alla gravità delle conseguenze. In economia e in finanza indica anche la variabilità dei risultati attesi: un investimento è tanto più rischioso quanto più il suo esito può scostarsi da quello previsto, nel bene come nel male.",
  shortDefinition: "Possibilità di un danno o di una perdita; in finanza, quanto un risultato può scostarsi da quello atteso.",
  register: [
    "comune",
    "tecnico",
  ],
  domains: [
    "economia",
    "finanza",
    "diritto",
    "società",
  ],
  etymology: "Voce di origine discussa, che l'italiano ha poi prestato all'Europa: il francese risque, l'inglese risk e il tedesco Risiko vengono dall'italiano antico risco, rischio. La forma latina medievale resicum compare a Genova nel 1156, nei contratti del notaio Giovanni Scriba, nella formula ad tuum resicum, «a tuo rischio». L'ipotesi più seguita la collega a resecare «tagliare»: dallo scoglio che taglia lo scafo al pericolo che corre la merce per mare. Altri hanno pensato al greco bizantino rhizikón «sorte».",
  examples: [
    "Chi compra azioni di una sola società si assume un rischio che un fondo diversificato distribuisce su centinaia di titoli.",
    "Il medico le ha spiegato che il fumo aumenta il rischio, non che la malattia arriverà di sicuro.",
    "La merce viaggia a rischio del compratore dal momento in cui lascia il magazzino.",
    "Non correre rischi inutili: oggi lascia la moto in garage, sulla strada del passo c'è ghiaccio.",
  ],
  synonyms: [
    {
      term: "pericolo",
      register: "comune",
      context: "uso quotidiano",
      note: "Il pericolo è la minaccia in sé, il rischio la probabilità che colpisca.",
    },
    {
      term: "azzardo",
      register: "comune",
      context: "rischio scelto deliberatamente, spesso con giudizio negativo",
    },
    {
      term: "alea",
      register: "letterario",
      context: "l'incertezza della sorte; in diritto, nei contratti aleatori",
    },
    {
      term: "incertezza",
      register: "tecnico",
      context: "in economia, solo come quasi-sinonimo",
      note: "Per Frank Knight è il caso in cui le probabilità non si possono misurare; il rischio è l'incertezza misurabile.",
    },
  ],
  antonyms: [
    {
      term: "sicurezza",
      register: "comune",
    },
    {
      term: "certezza",
      register: "tecnico",
      context: "esito noto in anticipo",
    },
  ],
  relatedWords: [
    "rendimento",
    "investimento",
    "portafoglio",
    "capitale",
    "asset",
    "startup",
    "imprudenza",
    "liquidita",
    "cauto",
    "ponderare",
    "probabile",
    "framing",
    "fiducia",
    "assicurazione",
    "volatilità",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/rischio/",
    wiktionary: "https://it.wiktionary.org/wiki/rischio",
  },
  paroliereNote: "La distinzione più utile l'ha proposta l'economista Frank Knight nel 1921: c'è rischio quando le probabilità si possono stimare, come nelle assicurazioni, e incertezza quando non si possono stimare affatto, come davanti a un mercato che ancora non esiste. Nell'uso comune le due parole si confondono, ma la differenza spiega perché si può assicurare una casa contro l'incendio e non un'idea contro l'insuccesso. Curioso il destino della parola: nata fra i mercanti genovesi e pisani del XII secolo, ha fatto il giro d'Europa ed è tornata in italiano dentro formule importate come risk management. Nel 1986 il sociologo Ulrich Beck ne ha fatto il nome di un'epoca: la «società del rischio».",
  seo: {
    title: "Rischio — significato, etimologia e uso in finanza | Il Paroliere",
    description: "Che cos'è il rischio: la possibilità di un danno e, in finanza, la variabilità dei risultati. Dalla Genova del 1156 a Knight: rischio e incertezza.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
