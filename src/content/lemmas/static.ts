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
import { furfante } from "./furfante";
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
import { xenofobo } from "./xenofobo";
import { etnocentrismo } from "./etnocentrismo";
import { razzismo } from "./razzismo";
import { pregiudizio } from "./pregiudizio";
import { alterita } from "./alterita";
import { migrazione } from "./migrazione";
import { accoglienza } from "./accoglienza";
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
import { canaglia } from "./canaglia";
import { canonicalizzazione } from "./canonicalizzazione";
import { crawlBudget } from "./crawl-budget";
import { hreflang } from "./hreflang";
import { indicizzazione } from "./indicizzazione";
import { llm } from "./llm";
import { posizionamento } from "./posizionamento";
import { redirect } from "./redirect";
import { seo } from "./seo";
import { slealta } from "./slealta";
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
import { imbroglione } from "./imbroglione";
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
import { disonesta } from "./disonesta";
import { disciplina } from "./disciplina";
import { dragoncello } from "./dragoncello";
import { espletamento } from "./espletamento";
import { espoliazione } from "./espoliazione";
import { farabutto } from "./farabutto";
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
import { malaccio } from "./malaccio";
import { malacarne } from "./malacarne";
import { malacreanza } from "./malacreanza";
import { malafemmina } from "./malafemmina";
import { malandrino } from "./malandrino";
import { malavita } from "./malavita";
import { malevolenza } from "./malevolenza";
import { malfidato } from "./malfidato";
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
import { birbante } from "./birbante";
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
import { mascalzone } from "./mascalzone";
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
import { resistenza } from "./resistenza";
import { resistenzaItaliana } from "./resistenza-italiana";
import { smielato } from "./smielato";
import { melassa } from "./melassa";
import { ammucchiata } from "./ammucchiata";
import { coercizione } from "./coercizione";
import { coartazione } from "./coartazione";
import { coacervo } from "./coacervo";
import { ironia } from "./ironia";
import { coaching } from "./coaching";
import { coach } from "./coach";
import { mentorship } from "./mentorship";
import { forchettone } from "./forchettone";
import { parruccone } from "./parruccone";
import { irpef } from "./irpef";
import { irpeg } from "./irpeg";
import { ires } from "./ires";
import { deduzioneFiscale } from "./deduzione-fiscale";
import { detrazioneIrpef } from "./detrazione-fiscale";
import { defiscalizzazione } from "./defiscalizzazione";
import { incentivo } from "./incentivo";
import { investimento } from "./investimento";
import { f24 } from "./f24";
import { mod730 } from "./730";
import { iprite } from "./iprite";
import { isobara } from "./isobara";
import { isoterma } from "./isoterma";
import { isoipsa } from "./isoipsa";
import { meridiano } from "./meridiano";
import { parallelo } from "./parallelo";
import { saturazione } from "./saturazione";
import { motivazionale } from "./motivazionale";
import { polarizzazione } from "./polarizzazione";
import { plausibile } from "./plausibile";
import { subagentico } from "./subagentico";
import { semantica } from "./semantica";
import { possibile } from "./possibile";
import { probabile } from "./probabile";
import { committenza } from "./committenza";
import { ovvieta } from "./ovvieta";
import { salutista } from "./salutista";
import { irreprensibile } from "./irreprensibile";
import { integerrimo } from "./integerrimo";
import { pudico } from "./pudico";
import { pudore } from "./pudore";
import { sfrontatezza } from "./sfrontatezza";
import { recrudescenza } from "./recrudescenza";
import { reminiscenza } from "./reminiscenza";
import { sentore } from "./sentore";
import { flaccido } from "./flaccido";
import { etereo } from "./etereo";
import { arioso } from "./arioso";
import { anelare } from "./anelare";
import { alienazione } from "./alienazione";
import { subliminale } from "./subliminale";
import { ecumenico } from "./ecumenico";
import { onesta } from "./onesta";
import { probita } from "./probita";
import { probo } from "./probo";
import { sospetto } from "./sospetto";
import { presentimento } from "./presentimento";
import { levantino } from "./levantino";
import { incazzoso } from "./incazzoso";
import { fumino } from "./fumino";
import { smargiasso } from "./smargiasso";
import { kommando } from "./kommando";
import { pasdaran } from "./pasdaran";
import { spetsnaz } from "./spetsnaz";
import { correttore } from "./correttore";
import { tamburino } from "./tamburino";
import { alfiere } from "./alfiere";
import { podesta } from "./podesta";
import { corporazioni } from "./corporazioni";
import { olistico } from "./olistico";
import { devianza } from "./devianza";
import { epistemologia } from "./epistemologia";
import { aporia } from "./aporia";
import { liquidita } from "./liquidita";
import { precursore } from "./precursore";
import { qualunquismo } from "./qualunquismo";
import { seminatrice } from "./seminatrice";
import { trebbiatrice } from "./trebbiatrice";
import { vendemmia } from "./vendemmia";
import { olioDoliva } from "./olio-doliva";
import { vino } from "./vino";
import { vitigno } from "./vitigno";
import { vinaggio } from "./vinaggio";
import { maggiolata } from "./maggiolata";
import { sapidita } from "./sapidita";
import { anamnesi } from "./anamnesi";
import { irascibile } from "./irascibile";
import { bilioso } from "./bilioso";
import { uvaggio } from "./uvaggio";
import { incazzatello } from "./incazzatello";

// BATCH-GEN-LANGUAGE-01 — linguaggio generazionale (2026-06-07)
import { boomer } from "./boomer";
import { retrogrado } from "./retrogrado";
import { genx } from "./genx";
import { millennial } from "./millennial";
import { genz } from "./genz";
import { generazioneAlpha } from "./generazione-alpha";
import { generazioneBeta } from "./generazione-beta";

// BATCH-005 — Costrizione, libertà e potere (2026-06-07)
import { consenso } from "./consenso";
import { liberta } from "./liberta";
import { autonomia } from "./autonomia";
import { autodeterminazione } from "./autodeterminazione";
import { violenza } from "./violenza";
import { tortura } from "./tortura";
import { liberismo } from "./liberismo";
import { liberalismo } from "./liberalismo";
import { liberal } from "./liberal";
import { potere } from "./potere";
import { autorita } from "./autorita";
import { autorevolezza } from "./autorevolezza";
import { diritto } from "./diritto";
import { norma } from "./norma";
import { normativa } from "./normativa";
import { proprieta } from "./proprieta";
import { esperienza } from "./esperienza";
import { expertise } from "./expertise";
import { eeat } from "./e-e-a-t";
import { affidabilita } from "./affidabilita";
import { cessione } from "./cessione";
import { contratto } from "./contratto";
import { appalto } from "./appalto";
import { frode } from "./frode";
import { evasione } from "./evasione";
import { criminalita } from "./criminalita";
import { delinquenza } from "./delinquenza";
import { recidiva } from "./recidiva";
import { ricaduta } from "./ricaduta";
import { remissione } from "./remissione";
import { aggravamento } from "./aggravamento";
import { epidemia } from "./epidemia";
import { pandemia } from "./pandemia";
import { conflitto } from "./conflitto";
import { coalizione } from "./coalizione";
import { alleanza } from "./alleanza";
import { trasformismo } from "./trasformismo";
import { portaborse } from "./portaborse";
import { politica } from "./politica";
import { terrorismo } from "./terrorismo";
import { incursione } from "./incursione";
import { sabotaggio } from "./sabotaggio";
import { abbagliare } from "./abbagliare";
import { lampo } from "./lampo";
import { barlume } from "./barlume";
import { fulgore } from "./fulgore";
import { guizzo } from "./guizzo";
import { luminosita } from "./luminosita";
import { oscurita } from "./oscurita";
import { penombra } from "./penombra";
import { saluteBrindisi } from "./salute-brindisi";
import { allaSalute } from "./alla-salute";
import { brindisi } from "./brindisi";
import { zumWohl } from "./zum-wohl";
import { cheers } from "./cheers";

// BATCH-006 — Memoria, conoscenza, filosofia (2026-06-13)
import { memoria } from "./memoria";
import { oblio } from "./oblio";
import { amnesia } from "./amnesia";
import { inconscio } from "./inconscio";
import { biasCognitivo } from "./bias-cognitivo";
import { percezione } from "./percezione";
import { intuizione } from "./intuizione";
import { presagio } from "./presagio";
import { premonizione } from "./premonizione";
import { diffidenza } from "./diffidenza";
import { dubbio } from "./dubbio";
import { indizio } from "./indizio";
import { prova } from "./prova";
import { presunzioneDiInnocenza } from "./presunzione-di-innocenza";
import { dialettica } from "./dialettica";
import { ideePlatoniche } from "./idee-platoniche";
import { filosofia } from "./filosofia";
import { metafisica } from "./metafisica";
import { rimozione } from "./rimozione";
import { trauma } from "./trauma";
import { identita } from "./identita";
import { coscienza } from "./coscienza";
// BATCH-006b — Mente, percezione e conoscenza II (2026-06-13)
import { zetetica } from "./zetetica";
import { aporetika } from "./aporetika";
import { sociologia } from "./sociologia";
import { modernitaLiquida } from "./modernita-liquida";
import { alienista } from "./alienista";
import { psicopatia } from "./psicopatia";
import { antisocialita } from "./antisocialita";
import { fatalismo } from "./fatalismo";
import { cinismo } from "./cinismo";
import { indifferenzaCivile } from "./indifferenza-civile";
import { astensionismo } from "./astensionismo";
// BATCH-007 — Etica, virtù e vizi (2026-06-13)
import { integrita } from "./integrita";
import { incorruttibilita } from "./incorruttibilita";
import { correttezza } from "./correttezza";
import { onore } from "./onore";
import { lealta } from "./lealta";
import { fiducia } from "./fiducia";
import { vergogna } from "./vergogna";
import { verecondia } from "./verecondia";
import { modestia } from "./modestia";
import { ritrosia } from "./ritrosia";
import { pudicizia } from "./pudicizia";
import { riserbo } from "./riserbo";
import { intimita } from "./intimita";
import { arroganza } from "./arroganza";
import { impudenza } from "./impudenza";
import { sfacciataggine } from "./sfacciataggine";
import { spudoratezza } from "./spudoratezza";
import { bravata } from "./bravata";
import { millanteria } from "./millanteria";
import { fanfarone } from "./fanfarone";
import { gradasso } from "./gradasso";
import { spaccone } from "./spaccone";
import { millantatore } from "./millantatore";
import { opportunismo } from "./opportunismo";
import { ipocrisia } from "./ipocrisia";
import { adulazione } from "./adulazione";
import { malafede } from "./malafede";
import { doppiezza } from "./doppiezza";
import { messaggiare } from "./messaggiare";
import { googlare } from "./googlare";
import { twittare } from "./twittare";
// BATCH-008 — Forma, bellezza e sensazione (2026-06-13)
import { leggerezza } from "./leggerezza";
import { rarefazione } from "./rarefazione";
import { levita } from "./levita";
import { impalpabilita } from "./impalpabilita";
import { diafano } from "./diafano";
import { ineffabile } from "./ineffabile";
import { celestiale } from "./celestiale";
import { materialita } from "./materialita";
import { turgido } from "./turgido";
import { flosco } from "./flosco";
import { tonicita } from "./tonicita";
import { elasticita } from "./elasticita";
import { atrofia } from "./atrofia";
import { ipotonia } from "./ipotonia";
import { tonoMuscolare } from "./tono-muscolare";
import { spazio } from "./spazio";
import { respiro } from "./respiro";
import { ombra } from "./ombra";
import { contrasteEstetico } from "./contrasto-estetico";
import { composizione } from "./composizione";
import { ritmo } from "./ritmo";
import { armonia } from "./armonia";
import { dissonanza } from "./dissonanza";
import { proporzione } from "./proporzione";
import { simmetria } from "./simmetria";
import { asimmetria } from "./asimmetria";
import { grazia } from "./grazia";
import { eleganza } from "./eleganza";
import { goffaggine } from "./goffaggine";

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
  abbagliare,
  lampo,
  barlume,
  fulgore,
  guizzo,
  luminosita,
  oscurita,
  penombra,
  banalita,
  barberoSiena,
  battilana,
  birbante,
  bipolare,
  bizzoso,
  boria,
  bot,
  canaglia,
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
  disonesta,
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
  farabutto,
  faringalizzazione,
  fascistello,
  fegatelli,
  fervore,
  fidelizzazione,
  finocchiona,
  flemma,
  fraintendere,
  frastagliato,
  furfante,
  garbo,
  gdpr,
  ghibellino,
  glasnost,
  greve,
  grottesco,
  guelfo,
  hiking,
  hreflang,
  imbroglione,
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
  malaccio,
  malacarne,
  malacreanza,
  malafemmina,
  malandrino,
  malavita,
  malevolenza,
  malfidato,
  malinconia,
  malleabile,
  mascalzone,
  mangiaufo,
  meandro,
  menuHamburger,
  modanatura,
  morboso,
  nasalTwang,
  naZdarovje,
  saluteBrindisi,
  allaSalute,
  brindisi,
  zumWohl,
  cheers,
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
  slealta,
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
  xenofobo,
  etnocentrismo,
  razzismo,
  pregiudizio,
  alterita,
  migrazione,
  accoglienza,
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
  resistenza,
  resistenzaItaliana,
  smielato,
  melassa,
  ammucchiata,
  coercizione,
  coartazione,
  coacervo,
  ironia,
  coaching,
  coach,
  mentorship,
  forchettone,
  parruccone,
  irpef,
  irpeg,
  ires,
  deduzioneFiscale,
  detrazioneIrpef,
  defiscalizzazione,
  incentivo,
  investimento,
  f24,
  mod730,
  iprite,
  isobara,
  isoterma,
  isoipsa,
  meridiano,
  parallelo,
  saturazione,
  motivazionale,
  polarizzazione,
  plausibile,
  subagentico,
  semantica,
  possibile,
  probabile,
  committenza,
  ovvieta,
  salutista,
  irreprensibile,
  integerrimo,
  pudico,
  pudore,
  sfrontatezza,
  recrudescenza,
  reminiscenza,
  sentore,
  flaccido,
  etereo,
  arioso,
  anelare,
  alienazione,
  subliminale,
  ecumenico,
  onesta,
  probita,
  probo,
  sospetto,
  presentimento,
  levantino,
  incazzoso,
  fumino,
  smargiasso,
  kommando,
  terrorismo,
  incursione,
  sabotaggio,
  pasdaran,
  spetsnaz,
  correttore,
  tamburino,
  alfiere,
  podesta,
  corporazioni,
  olistico,
  devianza,
  epistemologia,
  aporia,
  liquidita,
  precursore,
  qualunquismo,
  seminatrice,
  trebbiatrice,
  vendemmia,
  olioDoliva,
  vino,
  vitigno,
  vinaggio,
  maggiolata,
  sapidita,
  anamnesi,
  irascibile,
  bilioso,
  uvaggio,
  incazzatello,
  // BATCH-GEN-LANGUAGE-01 — linguaggio generazionale (2026-06-07)
  boomer,
  retrogrado,
  genx,
  millennial,
  genz,
  generazioneAlpha,
  generazioneBeta,
  // BATCH-005 — Costrizione, libertà e potere (2026-06-07)
  consenso,
  liberta,
  autonomia,
  autodeterminazione,
  violenza,
  tortura,
  liberismo,
  liberalismo,
  liberal,
  potere,
  autorita,
  autorevolezza,
  diritto,
  norma,
  normativa,
  proprieta,
  esperienza,
  expertise,
  eeat,
  affidabilita,
  cessione,
  contratto,
  appalto,
  frode,
  evasione,
  criminalita,
  delinquenza,
  recidiva,
  ricaduta,
  remissione,
  aggravamento,
  epidemia,
  pandemia,
  conflitto,
  coalizione,
  alleanza,
  trasformismo,
  portaborse,
  politica,
  // BATCH-006 — Memoria, conoscenza, filosofia (2026-06-13)
  memoria,
  oblio,
  amnesia,
  inconscio,
  biasCognitivo,
  percezione,
  intuizione,
  presagio,
  premonizione,
  diffidenza,
  dubbio,
  indizio,
  prova,
  presunzioneDiInnocenza,
  dialettica,
  ideePlatoniche,
  filosofia,
  metafisica,
  rimozione,
  trauma,
  identita,
  coscienza,
  // BATCH-006b — Mente, percezione e conoscenza II (2026-06-13)
  zetetica,
  aporetika,
  sociologia,
  modernitaLiquida,
  alienista,
  psicopatia,
  antisocialita,
  fatalismo,
  cinismo,
  indifferenzaCivile,
  astensionismo,
  // BATCH-007 — Etica, virtù e vizi (2026-06-13)
  integrita,
  incorruttibilita,
  correttezza,
  onore,
  lealta,
  fiducia,
  vergogna,
  verecondia,
  modestia,
  ritrosia,
  pudicizia,
  riserbo,
  intimita,
  arroganza,
  impudenza,
  sfacciataggine,
  spudoratezza,
  bravata,
  millanteria,
  fanfarone,
  gradasso,
  spaccone,
  millantatore,
  opportunismo,
  ipocrisia,
  adulazione,
  malafede,
  doppiezza,
  messaggiare,
  googlare,
  twittare,
  // BATCH-008 — Forma, bellezza e sensazione (2026-06-13)
  leggerezza,
  rarefazione,
  levita,
  impalpabilita,
  diafano,
  ineffabile,
  celestiale,
  materialita,
  turgido,
  flosco,
  tonicita,
  elasticita,
  atrofia,
  ipotonia,
  tonoMuscolare,
  spazio,
  respiro,
  ombra,
  contrasteEstetico,
  composizione,
  ritmo,
  armonia,
  dissonanza,
  proporzione,
  simmetria,
  asimmetria,
  grazia,
  eleganza,
  goffaggine,
];

