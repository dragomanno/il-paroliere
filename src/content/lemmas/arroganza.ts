// Il Paroliere — Lemma: arroganza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const arroganza: LemmaEntry = {
  lemma: "arroganza",
  slug: "arroganza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "formale"],
  domains: ["psicologia", "etica", "comportamento sociale"],

  definition:
    "Atteggiamento di chi si attribuisce un valore, una competenza o un’autorità " +
    "superiore a quella che altri riconoscono, mostrandola attraverso un comportamento " +
    "che sminuisce, ignora o sovrasta gli interlocutori. L’arroganza non è semplice " +
    "sicurezza di sé: implica il disprezzo attivo — o la disattenzione strutturale — " +
    "verso chi si considera inferiore. È un tratto che in alcuni contesti viene " +
    "confuso con la leadership o con la competenza, perché condivide con queste alcune " +
    "caratteristiche esterne senza averne le basi.",

  shortDefinition:
    "Attribuzione ostentata a sé di un valore superiore a quello riconosciuto dagli " +
    "altri, con disprezzo o disattenzione sistematica verso chi si considera inferiore.",

  etymology:
    "Dal latino arrogantia, da arrogans, participio di arrogare «attribuirsi, " +
    "reclamare per sé», composto da ad- «verso» e rogare «chiedere, proporre». " +
    "L’arrogante si «attribuisce» qualcosa che non gli è stato dato — pretende, " +
    "non riceve.",

  examples: [
    "L’arroganza in un leader produce obbedienza a breve termine e risentimento a lungo termine: la gente esegue, ma smette di avvertire quando qualcosa non va.",
    "C’è una forma sottile di arroganza intellettuale che non è aggressiva ma è altrettanto corrosiva: quella di chi non finisce mai di ascoltare perché ha già deciso cosa rispondere.",
    "Distinguere la sicurezza dall’arroganza è possibile: la persona sicura non ha bisogno che gli altri siano meno di lei per sentirsi competente.",
    "In certi ambienti accademici, l’arroganza è un linguaggio: chi non lo parla viene percepito come privo di rigore, anche se il problema è solo il tono.",
  ],

  synonyms: [
    { term: "superbia", register: "letterario-teologico", note: "La versione più antica e sistematica: nei sette vizi capitali, è il peccato di chi si mette al posto di Dio." },
    { term: "tracotanza", register: "formale-letterario", note: "L’arroganza che supera ogni misura, fino alla sfida aperta contro ciò che è più grande di sé." },
  ],

  antonyms: [
    { term: "umiltà", register: "comune-religioso", note: "La disposizione opposta: il riconoscimento dei propri limiti senza che questo implichi sottomissione." },
    { term: "modestia", register: "comune", note: "La versione comportamentale dell’umiltà: non ostentare, non soverchiare." },
  ],

  relatedWords: ["spaccone", "gradasso", "millanteria", "millantatore", "fanfarone", "bravata"],
  sourceLinks: {},

  paroliereNote:
    "L’arroganza è seducente perché assomiglia alla competenza. Entrambe si " +
    "presentano con sicurezza, entrambe avanzano senza esitare. La differenza è che " +
    "la competenza produce risultati che resistono all’esame critico, mentre " +
    "l’arroganza produce risultati finché nessuno osa esaminarli. Il vero problema " +
    "non è l’arrogante in sé: è il sistema che non crea spazio per contraddirlo. " +
    "Dove l’arroganza è premiata, la competenza tende a emigrare.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "arroganza — la sicurezza che sminuisce gli altri, tra psicologia ed etica",
    description: "Che cos’è l’arroganza: definizione psicologica, differenza da sicurezza e leadership, e perché i sistemi che la premiano perdono competenza.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
