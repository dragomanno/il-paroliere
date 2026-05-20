/**
 * Il Paroliere — Static lemma array (file-based, seed source)
 *
 * This file is the authoritative source for seeding the DB.
 * It is NOT used at runtime by the app (which reads from Netlify DB).
 * Import allLemmas from here in seed scripts and offline tooling only.
 *
 * License: MIT
 */

import type { LemmaEntry } from "@/lib/types";

// Phase 1 — seed lemmas
import { garbo } from "./garbo";
import { cura } from "./cura";
import { algoritmo } from "./algoritmo";

// Phase 2 — seed lemmas
import { resilienza } from "./resilienza";
import { pragmatismo } from "./pragmatismo";
import { mangiaufo } from "./mangiaufo";
import { accondiscendenza } from "./accondiscendenza";
import { suscettibile } from "./suscettibile";
import { aggregatore } from "./aggregatore";

// Phase 3 — new lemmas (batch 1)
import { boria } from "./boria";
import { ozio } from "./ozio";
import { rimpianto } from "./rimpianto";
import { tangibile } from "./tangibile";

// Phase 3 — new lemmas (batch 2)
import { acume } from "./acume";
import { effimero } from "./effimero";
import { sgomento } from "./sgomento";
import { tacito } from "./tacito";

// Phase 3 — new lemmas (batch 3)
import { disinvoltura } from "./disinvoltura";
import { lacuna } from "./lacuna";
import { periferico } from "./periferico";
import { veemenza } from "./veemenza";

// Towards 100 — batch 1
import { ambiguita } from "./ambiguita";
import { caparbio } from "./caparbio";
import { connivenza } from "./connivenza";
import { diatriba } from "./diatriba";
import { eloquenza } from "./eloquenza";
import { fervore } from "./fervore";
import { greve } from "./greve";
import { insolito } from "./insolito";
import { lusinga } from "./lusinga";
import { malinconia } from "./malinconia";
import { nitido } from "./nitido";
import { ostinazione } from "./ostinazione";

// Towards 100 — batch 4
import { atavico } from "./atavico";
import { bizzoso } from "./bizzoso";
import { cifra } from "./cifra";
import { palinsesto } from "./palinsesto";
import { parsimonia } from "./parsimonia";
import { recidivo } from "./recidivo";
import { sedimento } from "./sedimento";
import { tangente } from "./tangente";
import { univoco } from "./univoco";
import { velleitario } from "./velleitario";
import { xenofobia } from "./xenofobia";
import { zizzania } from "./zizzania";

// Towards 100 — batch 3
import { acredine } from "./acredine";
import { affabile } from "./affabile";
import { bagliore } from "./bagliore";
import { consuetudine } from "./consuetudine";
import { dissimulare } from "./dissimulare";
import { flemma } from "./flemma";
import { grottesco } from "./grottesco";
import { incipit } from "./incipit";
import { labile } from "./labile";
import { meandro } from "./meandro";
import { nembo } from "./nembo";
import { obliquo } from "./obliquo";

// Towards 100 — batch 6
import { acrimonia } from "./acrimonia";
import { banalita } from "./banalita";
import { crepuscolo } from "./crepuscolo";
import { demistificare } from "./demistificare";
import { effervescente } from "./effervescente";
import { fraintendere } from "./fraintendere";
import { ipertrofia } from "./ipertrofia";
import { laconico } from "./laconico";
import { morboso } from "./morboso";
import { noncurante } from "./noncurante";
import { paradosso } from "./paradosso";
import { rovello } from "./rovello";

// Towards 100 — batch 5 (SEO/marketing)
import { bot } from "./bot";
import { canonicalizzazione } from "./canonicalizzazione";
import { crawlBudget } from "./crawl-budget";
import { hreflang } from "./hreflang";
import { indicizzazione } from "./indicizzazione";
import { llm } from "./llm";
import { posizionamento } from "./posizionamento";
import { redirect } from "./redirect";
import { seo } from "./seo";
import { statusCode } from "./status-code";
import { token } from "./token";
import { tokenizzazione } from "./tokenizzazione";

// Towards 111 — batch 7 (carattere/linguaggio/psicologia/tecnico)
import { abitudine } from "./abitudine";
import { ambivalenza } from "./ambivalenza";
import { bipolare } from "./bipolare";
import { cauto } from "./cauto";
import { declinare } from "./declinare";
import { eufemismo } from "./eufemismo";
import { fidelizzazione } from "./fidelizzazione";
import { frastagliato } from "./frastagliato";
import { impasse } from "./impasse";
import { lucido } from "./lucido";
import { pervicace } from "./pervicace";
import { ponderare } from "./ponderare";
import { rarefatto } from "./rarefatto";
import { sagacia } from "./sagacia";
import { solarizzazione } from "./solarizzazione";
import { trasparenza } from "./trasparenza";
import { valenza } from "./valenza";
import { velleita } from "./velleita";

// Towards 100 — batch 2
import { perbenismo } from "./perbenismo";
import { querulo } from "./querulo";
import { reticenza } from "./reticenza";
import { scrupolo } from "./scrupolo";
import { sfilacciato } from "./sfilacciato";
import { sorpresa } from "./sorpresa";
import { stoicismo } from "./stoicismo";
import { tergiversare } from "./tergiversare";
import { umbratile } from "./umbratile";
import { vacuo } from "./vacuo";
import { veniale } from "./veniale";
import { zenit } from "./zenit";

/** All lemmas in alphabetical order — static file-based source for seeding */
export const allLemmas: LemmaEntry[] = [
  abitudine,
  accondiscendenza,
  acredine,
  acrimonia,
  acume,
  affabile,
  aggregatore,
  algoritmo,
  ambiguita,
  ambivalenza,
  atavico,
  bagliore,
  banalita,
  bipolare,
  bizzoso,
  bot,
  boria,
  canonicalizzazione,
  caparbio,
  cauto,
  cifra,
  connivenza,
  consuetudine,
  crawlBudget,
  crepuscolo,
  cura,
  declinare,
  demistificare,
  diatriba,
  disinvoltura,
  dissimulare,
  effervescente,
  effimero,
  eloquenza,
  eufemismo,
  fervore,
  fidelizzazione,
  flemma,
  fraintendere,
  frastagliato,
  garbo,
  greve,
  grottesco,
  hreflang,
  impasse,
  incipit,
  indicizzazione,
  insolito,
  ipertrofia,
  labile,
  lacuna,
  laconico,
  llm,
  lucido,
  lusinga,
  malinconia,
  mangiaufo,
  meandro,
  morboso,
  nembo,
  nitido,
  noncurante,
  obliquo,
  ostinazione,
  ozio,
  palinsesto,
  paradosso,
  parsimonia,
  perbenismo,
  periferico,
  pervicace,
  ponderare,
  posizionamento,
  pragmatismo,
  querulo,
  rarefatto,
  recidivo,
  redirect,
  resilienza,
  reticenza,
  rimpianto,
  rovello,
  sagacia,
  scrupolo,
  sedimento,
  seo,
  sfilacciato,
  sgomento,
  solarizzazione,
  sorpresa,
  statusCode,
  stoicismo,
  suscettibile,
  tacito,
  tangente,
  tangibile,
  tergiversare,
  token,
  tokenizzazione,
  trasparenza,
  umbratile,
  univoco,
  vacuo,
  valenza,
  veemenza,
  velleita,
  velleitario,
  veniale,
  xenofobia,
  zenit,
  zizzania,
];
