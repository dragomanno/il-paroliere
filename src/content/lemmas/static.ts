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

// Batch v2 + v2b — 50 nuovi lemmi (2026-05-25)
import { abside } from "./abside";
import { ads } from "./ads";
import { alfiereSiena } from "./alfiere-siena";
import { barberoSiena } from "./barbero-siena";
import { battilana } from "./battilana";
import { cesellatura } from "./cesellatura";
import { coltelleria } from "./coltelleria";
import { cookie } from "./cookie";
import { cookieConsent } from "./cookie-consent";
import { cookieless } from "./cookieless";
import { cookiePolicy } from "./cookie-policy";
import { costanza } from "./costanza";
import { coworking } from "./coworking";
import { cpt } from "./cpt";
import { disciplina } from "./disciplina";
import { dragoncello } from "./dragoncello";
import { espletamento } from "./espletamento";
import { espoliazione } from "./espoliazione";
import { faringalizzazione } from "./faringalizzazione";
import { fascistello } from "./fascistello";
import { fegatelli } from "./fegatelli";
import { finocchiona } from "./finocchiona";
import { gdpr } from "./gdpr";
import { ghibellino } from "./ghibellino";
import { glasnost } from "./glasnost";
import { guelfo } from "./guelfo";
import { hiking } from "./hiking";
import { imperialeSiena } from "./imperiale-siena";
import { insaccato } from "./insaccato";
import { malacarne } from "./malacarne";
import { menuHamburger } from "./menu-hamburger";
import { modanatura } from "./modanatura";
import { naZdarovje } from "./na-zdarovje";
import { nasalTwang } from "./nasal-twang";
import { ostello } from "./ostello";
import { pellame } from "./pellame";
import { perestrojka } from "./perestrojka";
import { pici } from "./pici";
import { pnrr } from "./pnrr";
import { prioritizzazione } from "./prioritizzazione";
import { privacyPolicy } from "./privacy-policy";
import { radicalizzazione } from "./radicalizzazione";
import { ribollita } from "./ribollita";
import { rooftop } from "./rooftop";
import { salagione } from "./salagione";
import { salatura } from "./salatura";
import { sanatoria } from "./sanatoria";
import { sbalzo } from "./sbalzo";
import { skal } from "./skal";
import { trattaPalio } from "./tratta-palio";
import { trekking } from "./trekking";
import { whatsappare } from "./whatsappare";

// Batch 2 — 32 nuovi lemmi (2026-05-29)
import { abnegazione } from "./abnegazione";
import { addomesticare } from "./addomesticare";
import { ambaradam } from "./ambaradam";
import { amenita } from "./amenita";
import { ammansire } from "./ammansire";
import { biasimare } from "./biasimare";
import { cesura } from "./cesura";
import { dedizione } from "./dedizione";
import { efficacia } from "./efficacia";
import { efficienza } from "./efficienza";
import { empatia } from "./empatia";
import { esecrabile } from "./esecrabile";
import { imprudenza } from "./imprudenza";
import { inettitudine } from "./inettitudine";
import { inetto } from "./inetto";
import { insulso } from "./insulso";
import { ludopatia } from "./ludopatia";
import { malleabile } from "./malleabile";
import { manifattura } from "./manifattura";
import { manifatturiero } from "./manifatturiero";
import { mellifluo } from "./mellifluo";
import { olfatto } from "./olfatto";
import { pendenza } from "./pendenza";
import { perseveranza } from "./perseveranza";
import { quarantotto } from "./quarantotto";
import { recondito } from "./recondito";
import { roboante } from "./roboante";
import { rodomontesco } from "./rodomontesco";
import { solingo } from "./solingo";
import { solitudine } from "./solitudine";
import { subitaneo } from "./subitaneo";

// Batch 3 — 2026-05-30
import { arrendevolezza } from "./arrendevolezza";
// Batch auto — 2026-05-30
import { pervicacia } from "./pervicacia";
import { sostanziale } from "./sostanziale";
import { meridiano_aggettivo } from "./meridiano-aggettivo";
import { meridiano_sostantivo } from "./meridiano-sostantivo";
import { levante } from "./levante";
import { levatrice } from "./levatrice";
import { perspicacia } from "./perspicacia";
import { commemorazione } from "./commemorazione";
import { salgemma } from "./salgemma";
import { peperoncino } from "./peperoncino";
import { curry } from "./curry";
import { curcuma } from "./curcuma";
import { antitesi } from "./antitesi";
import { tesi } from "./tesi";
import { sintesi } from "./sintesi";
import { compendio } from "./compendio";
import { pistacchio } from "./pistacchio";
import { pistakkio } from "./pistakkio";
import { populismo } from "./populismo";
import { nazionalismo } from "./nazionalismo";
import { nazismo } from "./nazismo";
import { fascismo } from "./fascismo";
import { comunismo } from "./comunismo";
import { consumismo } from "./consumismo";
import { pivello } from "./pivello";
import { piumino } from "./piumino";
import { piumone } from "./piumone";
import { permissivismo } from "./permissivismo";
import { nato } from "./nato";
import { brexit } from "./brexit";
import { liberalsocialismo } from "./liberalsocialismo";
import { indelicatezza } from "./indelicatezza";
import { galoppino } from "./galoppino";
import { dissoluzione } from "./dissoluzione";
import { dissolvimento } from "./dissolvimento";
import { dissing } from "./dissing";
import { cecchino } from "./cecchino";
import { caporetto } from "./caporetto";
import { bignami } from "./bignami";
import { crasi } from "./crasi";
import { antonomasia } from "./antonomasia";
import { disgregazione } from "./disgregazione";
import { menefreghismo } from "./menefreghismo";

/** All lemmas in alphabetical order — static file-based source for seeding */
export const allLemmas: LemmaEntry[] = [
  abitudine,
  abside,
  accondiscendenza,
  acredine,
  acrimonia,
  acume,
  ads,
  affabile,
  aggregatore,
  alfiereSiena,
  algoritmo,
  ambiguita,
  ambivalenza,
  arrendevolezza,
  atavico,
  bagliore,
  banalita,
  barberoSiena,
  battilana,
  bipolare,
  bizzoso,
  boria,
  bot,
  canonicalizzazione,
  caparbio,
  cauto,
  cesellatura,
  cifra,
  coltelleria,
  connivenza,
  consuetudine,
  cookie,
  cookieConsent,
  cookieless,
  cookiePolicy,
  costanza,
  coworking,
  cpt,
  crawlBudget,
  crepuscolo,
  cura,
  declinare,
  demistificare,
  diatriba,
  disciplina,
  disinvoltura,
  dissimulare,
  dragoncello,
  effervescente,
  effimero,
  eloquenza,
  espletamento,
  espoliazione,
  eufemismo,
  faringalizzazione,
  fascistello,
  fegatelli,
  fervore,
  fidelizzazione,
  finocchiona,
  flemma,
  fraintendere,
  frastagliato,
  garbo,
  gdpr,
  ghibellino,
  glasnost,
  greve,
  grottesco,
  guelfo,
  hiking,
  hreflang,
  impasse,
  imperialeSiena,
  incipit,
  indicizzazione,
  insaccato,
  insolito,
  ipertrofia,
  labile,
  laconico,
  lacuna,
  llm,
  lucido,
  lusinga,
  malacarne,
  malinconia,
  malleabile,
  mangiaufo,
  meandro,
  menuHamburger,
  modanatura,
  morboso,
  nasalTwang,
  naZdarovje,
  nembo,
  nitido,
  noncurante,
  obliquo,
  ostello,
  ostinazione,
  ozio,
  palinsesto,
  paradosso,
  parsimonia,
  pellame,
  perbenismo,
  perestrojka,
  periferico,
  perseveranza,
  pervicace,
  pici,
  pnrr,
  ponderare,
  posizionamento,
  pragmatismo,
  prioritizzazione,
  privacyPolicy,
  querulo,
  quarantotto,
  radicalizzazione,
  rarefatto,
  recidivo,
  recondito,
  redirect,
  resilienza,
  reticenza,
  ribollita,
  rimpianto,
  roboante,
  rodomontesco,
  rooftop,
  rovello,
  sagacia,
  salagione,
  salatura,
  sanatoria,
  sbalzo,
  scrupolo,
  sedimento,
  seo,
  sfilacciato,
  sgomento,
  skal,
  solarizzazione,
  solingo,
  solitudine,
  sorpresa,
  statusCode,
  stoicismo,
  subitaneo,
  suscettibile,
  tacito,
  tangente,
  tangibile,
  tergiversare,
  token,
  tokenizzazione,
  trasparenza,
  trattaPalio,
  trekking,
  umbratile,
  univoco,
  vacuo,
  valenza,
  veemenza,
  velleita,
  velleitario,
  veniale,
  whatsappare,
  xenofobia,
  zenit,
  zizzania,
  // Batch 2 — 32 nuovi lemmi (2026-05-29)
  abnegazione,
  addomesticare,
  ambaradam,
  amenita,
  ammansire,
  biasimare,
  cesura,
  dedizione,
  efficacia,
  efficienza,
  empatia,
  esecrabile,
  imprudenza,
  inettitudine,
  inetto,
  insulso,
  ludopatia,
  manifattura,
  manifatturiero,
  mellifluo,
  olfatto,
  pendenza,
  quarantotto,
  recondito,
  roboante,
  rodomontesco,
  solingo,
  solitudine,
  subitaneo,
  // Batch auto — 2026-05-30
  pervicacia,
  sostanziale,
  meridiano_aggettivo,
  meridiano_sostantivo,
  levante,
  levatrice,
  perspicacia,
  commemorazione,
  salgemma,
  peperoncino,
  curry,
  curcuma,
  antitesi,
  tesi,
  sintesi,
  compendio,
  pistacchio,
  pistakkio,
  populismo,
  nazionalismo,
  nazismo,
  fascismo,
  comunismo,
  consumismo,
  pivello,
  piumino,
  piumone,
  permissivismo,
  nato,
  brexit,
  liberalsocialismo,
  indelicatezza,
  galoppino,
  dissoluzione,
  dissolvimento,
  dissing,
  cecchino,
  caporetto,
  bignami,
  crasi,
  antonomasia,
  disgregazione,
  menefreghismo,
];
