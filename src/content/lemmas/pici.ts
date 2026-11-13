import type { LemmaEntry } from "@/lib/types";
export const pici: LemmaEntry = {
  lemma: "pici",
  slug: "pici",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition:
    "Formato di pasta fresca senese fatto a mano con sola acqua e farina di grano tenero, senza uova, lavorato a lungo fino a ottenere uno spaghetto spesso e irregolare dalla consistenza compatta. Ogni picio è tirato a mano uno per uno, con il gesto che nella zona si chiama «appiciare», e la superficie ruvida che ne risulta trattiene bene i condimenti. Il nome cambia nel giro di pochi chilometri: «pici» è la forma più diffusa nel sud della provincia di Siena, da San Quirico d'Orcia a Chianciano e Chiusi; a Montalcino e dintorni la stessa pasta si chiama «pinci»; tra Montepulciano e Pienza convivono più forme, e a Pienza è attestato anche «lunghetti». Piatto identitario della cucina delle crete senesi e della Val d'Orcia, si accompagna tradizionalmente all'aglione, al ragù di cinghiale o ai funghi.",
  shortDefinition:
    "Pasta fresca senese di acqua e farina, tirata a mano; a Montalcino si chiama pinci, a Pienza anche lunghetti.",
  register: ["comune", "tecnico"],
  domains: ["gastronomia", "cucina senese", "pasta artigianale"],
  etymology:
    "Origine incerta; probabilmente da un verbo dialettale senese legato all'idea di tirare o rotolare con le mani; documentato nell'area delle crete senesi almeno dall'Ottocento.",
  examples: [
    "A San Quirico d'Orcia abbiamo mangiato pici all'aglione, fatti a mano dalla signora della trattoria.",
    "Per i pici servono solo acqua, farina e pazienza: ogni filo va arrotolato tra le mani.",
    "I pici sono più spessi degli spaghetti e reggono bene un ragù di cinghiale.",
    "In una trattoria di Montalcino il menu proponeva pinci al ragù di cinghiale, quelli che a Siena chiamano pici.",
  ],
  synonyms: [
    { term: "pinci", register: "regionale", context: "Montalcino e dintorni; attestato anche tra Montepulciano e Pienza" },
    { term: "lunghetti", register: "regionale", context: "Pienza" },
  ],
  antonyms: [],
  relatedWords: ["ribollita", "finocchiona", "dragoncello", "Siena", "Val d'Orcia"],
  sourceLinks: { wiktionary: "https://it.wiktionary.org/wiki/pici" },
  paroliereNote:
    "I pici non si fanno in fretta. Ogni spaghetto richiede le mani, il piano, la pazienza. L'irregolarità — lo spessore variabile, la superficie ruvida — non è un difetto: è la firma del fatto a mano. Una pasta che resiste all'industrializzazione non per scelta commerciale, ma per natura. Anche il nome è artigianale: pici, pinci, lunghetti. La mappa qui descritta si basa sulle attestazioni locali, non ancora su una rilevazione dialettologica sistematica.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Pici — Il Paroliere",
    description: "Definizione originale di 'pici': la pasta senese fatta a mano, uno per uno, con acqua e farina.",
  },
  createdAt: "2026-05-25",
  updatedAt: "2026-11-13",
};
