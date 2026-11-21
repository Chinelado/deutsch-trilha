/* Frase livre ("Escreva uma frase verdadeira sobre você"): conferência pela ESTRUTURA da lição, com qualquer verbo.
   Cada lição tem uma regra (o que precisa aparecer na frase) e um texto que diz ao aluno exatamente o que fazer.
   Nas lições sobre verbos específicos (sein e heißen, haben, modais…), a regra diz quais verbos usar.
   Nas lições de estrutura (Perfekt, weil, reflexivos…), qualquer verbo serve.
   No presente, o app também confere a concordância do verbo com o pronome (ich wohne, du wohnst, er wohnt).
   Lições sem regra (vocabulário e textos do B2 em diante) aceitam qualquer frase em alemão. */
(() => {

const fT = (t) => String(t).toLowerCase().replace(/[„“"»«]/g, '').split(/[^\p{L}ß]+/u).filter(Boolean);
const clauses = (t) => String(t).split(/[,;.!?:]+/).map(fT).filter((c) => c.length);
const last = (c) => c[c.length - 1] || '';
const has = (toks, re) => toks.some((w) => re.test(w));
const SEIN = /^(bin|bist|ist|sind|seid)$/, HABEN = /^(habe|hab|hast|hat|haben|habt)$/, WERDEN = /^(werde|wirst|wird|werden|werdet)$/;
const MODAL = /^(kann|kannst|können|könnt|muss|musst|müssen|müsst|will|willst|wollen|wollt|darf|darfst|dürfen|dürft|soll|sollst|sollen|sollt|mag|magst|mögen|möchte|möchtest|möchten|möchtet)$/;
const MODAL_PRAET = /^(konnte|konntest|konnten|musste|musstest|mussten|wollte|wolltest|wollten|durfte|durftest|durften|sollte|solltest|sollten|mochte|mochtest|mochten)(t)?$/;
const KONJ2 = /^(würde|würdest|würden|würdet|hätte|hättest|hätten|wäre|wärst|wären|könnte|könntest|könnten|müsste|müsstest|müssten|sollte|solltest|sollten|dürfte|dürften|möchte|möchtest|möchten)$/;
const isInf = (w) => /^(sein|tun)$/.test(w) || (/(en|ern|eln)$/.test(w) && w.length > 3);
const isPart = (w) => /^ge\p{L}{2,}(t|en)$/u.test(w) || /\p{L}{3,}(iert|t|en)$/u.test(w);
const PREFIX = /^(auf|an|ein|aus|mit|zu|zurück|fern|ab|vor|nach|los|weg|her|hin|heim|fest|weiter|statt|teil|kennen|spazieren)$/;
// a oração que começa na conjunção termina com o verbo conjugado
// …e nenhum verbo conjugado fica no meio (…, weil ich will arbeiten ✗ · …, weil ich arbeiten will ✓).
const FIN = (w) => MODAL.test(w) || HABEN.test(w) || SEIN.test(w) || WERDEN.test(w) || MODAL_PRAET.test(w) || KONJ2.test(w) || /^(war|warst|waren|hatte|hatten)$/.test(w);
// A última palavra tem de ser um verbo: minúscula (substantivo alemão é maiúsculo) e não um advérbio.
const NAO_FIM = /^(gern|nicht|schon|noch|heute|morgen|gestern|immer|oft|sehr|auch|jetzt|hier|dort|da|so|mehr|viel|gut|zusammen)$/;
const clausesRaw = (t) => String(t).split(/[,;.!?:]+/).map((c) => c.replace(/[„“"»«]/g, '').split(/[^\p{L}ß]+/u).filter(Boolean)).filter((c) => c.length);
const verbLast = (text, conj) => clausesRaw(text).some((raw) => {
  const c = raw.map((w) => w.toLowerCase()), i = c.indexOf(conj); if (i < 0) return false;
  const rest = c.slice(i + 1), fim = raw[raw.length - 1]; if (rest.length < 2) return false;
  if (rest.slice(0, -1).some(FIN)) return false;               // auxiliar ou modal antes do fim (…, weil ich will arbeiten)
  if (/^\p{Lu}/u.test(fim) || NAO_FIM.test(last(rest))) return false; // termina em substantivo ou advérbio (…, weil ich wohne in Berlin)
  return /(e|en|n|t|st|te|ten|bin|ist|sind|war|hat|kann|muss|will|darf|soll|mag|weiß)$/.test(last(rest));
});

/* Concordância no presente: pronome + verbo conjugado (antes ou depois dele). */
const PRON = { ich: 'ich', du: 'du', er: 'er', es: 'er', man: 'er', sie: 'sie', wir: 'wir', ihr: 'ihr' };
const NAO_VERBO = /^(und|aber|oder|auch|gern|nicht|kein|keine|sehr|heute|morgen|jetzt|hier|dort|da|schon|noch|immer|oft|nie|gerade|wirklich|so|ganz|dagegen|jedoch|also|nämlich|persönlich|selbst|allein|zwar|wenn|ob|weil|dass|als|indem|denn|sondern|doch|eben|halt|mal|wohl|vielleicht|leider|natürlich|trotzdem|deshalb|mit|in|im|am|um|aus|nach|von|zu|für|bei|der|die|das|den|dem|ein|eine|einen|mein|meine|dein|deine|sein|seine|ihr|ihre|unser|euer)$/;
const IRR = { // presente irregular frequente
  ich: /^(bin|kann|muss|will|darf|soll|mag|weiß|möchte|habe|hab|werde|war|hatte|konnte|musste|wollte|durfte|sollte|mochte|würde|hätte|wäre|könnte)$/,
  du: /^(bist|hast|kannst|musst|willst|darfst|sollst|magst|weißt|wirst|liest|isst|heißt)$/,
  er: /^(ist|hat|kann|muss|will|darf|soll|mag|weiß|möchte|wird|war|hatte|konnte|musste|wollte|durfte|sollte|würde|hätte|wäre|könnte|gibt|liest|bläst|reist|löst|weist|beweist|preist|rast|wächst|ließt)$/, // er liest: radical em -s + t
  wir: /^(sind|haben|werden)$/, ihr: /^(seid|habt|werdet)$/,
};
const END = { ich: /e$/, du: /(st|ßt|zt|tzt|xt)$/, er: /t$/, wir: /(en|n)$/, ihr: /t$/ };
const DICA = { sie: 'termina em -t (sie wohnt) ou, no plural, em -en (sie wohnen)', ich: 'termina em -e (ich wohne)', du: 'termina em -st (du wohnst)', er: 'termina em -t (er wohnt)', wir: 'termina em -en (wir wohnen)', ihr: 'termina em -t (ihr wohnt)' };
// Só olha os lugares em que dá para ter certeza de qual é o verbo do pronome:
//   sujeito no início (Ich wohne…), depois de und/aber/oder/denn (…, denn ich habe…),
//   pergunta ou inversão com o verbo antes (Wohnst du…? / Heute lerne ich…),
//   e oração com weil/dass/wenn… (o verbo é a última palavra: …, weil ich krank bin).
const COORD = /^(und|aber|oder|denn|sondern)$/;
const SUBORD = /^(weil|dass|wenn|ob|obwohl|damit|nachdem|bevor|während|als|da|seit|seitdem|sobald|bis|falls|indem|ohne|statt|sodass|solange|ehe|sofern)$/;
function concord(text) {
  const rawCl = String(text).split(/[,;.!?:–—]+/).map((c) => c.replace(/[„“"»«]/g, '').split(/[^\p{L}ß]+/u).filter(Boolean)).filter((c) => c.length);
  for (const rc of rawCl) {
    const c = rc.map((w) => w.toLowerCase());
    let p = -1, v = null;
    if (PRON[c[0]] && !(c[0] === 'ihr' && /^\p{Lu}/u.test(rc[1] || ''))) { p = 0; v = c[1]; }                 // Ich wohne… (Ihr Mann = possessivo)
    else if (COORD.test(c[0]) && PRON[c[1]] && !(c[1] === 'ihr' && /^\p{Lu}/u.test(rc[2] || ''))) { p = 1; v = c[2]; }                                               // …, denn ich habe…
    else if (SUBORD.test(c[0]) && PRON[c[1]] && c.length >= 3 && !(c[1] === 'ihr' && /^\p{Lu}/u.test(rc[2] || ''))) { p = 1; v = c[c.length - 1]; }                 // …, weil ich krank bin
    else if (PRON[c[1]] && c[1] !== 'sie' && c[1] !== 'es' && /^\p{Ll}/u.test(rc[0]) === false && !PRON[c[0]] && !NAO_VERBO.test(c[0])) { p = 1; v = c[0]; } // Wohnst du…? / Kommt ihr…?
    else if (PRON[c[2]] && c[2] !== 'sie' && c[2] !== 'es' && /^(heute|morgen|gestern|jetzt|dann|hier|dort|oft|manchmal|immer|leider|deshalb|trotzdem|danach|zuerst|später|bald)$/.test(c[0])) { p = 2; v = c[1]; } // Heute lerne ich…
    if (p < 0 || !v || NAO_VERBO.test(v) || v.length < 2 || /^\p{Lu}/u.test(rc[c.indexOf(v)] || '') && p !== 1) continue;
    const k = PRON[c[p]];
    if (IRR[k] && IRR[k].test(v)) continue;
    if (k === 'sie' && (IRR.er.test(v) || IRR.wir.test(v))) continue;
    // -st de du × -st de er/sie quando o radical termina em s, ß, z, x (er liest, sie lässt, er isst)
    const duSt = /st$/.test(v) && !/[sßzx]st$/.test(v) && !/^(ist)$/.test(v);
    const es = c[p] === 'es';
    const errado = { ich: /(st|[^ß]t|en)$/.test(v), du: !/(st|ßt|zt|xt)$/.test(v), er: duSt || (!es && /en$/.test(v) && v !== 'sein'), sie: duSt, wir: /(st|t)$/.test(v), ihr: /(st|en)$/.test(v) }[k];
    if (!errado) continue; // ex.: er kam, sie sah, er sei, ich ging, es fehlen (es de enchimento) passam
    if (SUBORD.test(c[0]) && (isInf(v) || isPart(v))) continue; // …, weil ich arbeiten muss → a última palavra pode ser infinitivo/particípio antes do auxiliar
    return { ok: false, msg: `Com <b>${esc(c[p])}</b>, o verbo ${DICA[k]}. Você escreveu <b>${esc(v)}</b>.` };
  }
  return { ok: true };
}

/* Regras por lição: d = o que o aluno vê; c = conferência (texto → true ou mensagem de erro); pres = conferir concordância. */
const R = (d, c, pres = false) => ({ d, c, pres });
const need = (ok, msg) => (ok ? true : msg);
const RULES = {
  sein_heissen: R('o verbo <b>sein</b> (ich bin, du bist…) ou <b>heißen</b> (ich heiße…), para dizer quem você é', (t, k) => need(has(k, /^(bin|bist|ist|sind|seid|heiße|heißt|heißen)$/), 'Use <b>sein</b> (bin, bist, ist…) ou <b>heißen</b> (heiße, heißt…).'), true),
  kommen_wohnen: R('<b>kommen aus</b> (de onde você vem) ou <b>wohnen in</b> (onde você mora); outro verbo no presente também vale', (t, k) => need(has(k, /^(aus|in|im)$/), 'Diga de onde vem (<b>aus</b> + país) ou onde mora (<b>in</b> + cidade).'), true),
  presente: R('um verbo no <b>presente</b> que combine com o sujeito (ich wohne, du wohnst, er wohnt). <b>Qualquer verbo serve.</b>', () => true, true),
  frage: R('uma <b>pergunta</b>: com palavra W (Wo wohnst du?) ou de sim/não (Wohnst du hier?). Qualquer verbo serve.', (t) => need(/\?\s*$/.test(t.trim()), 'Termine a pergunta com <b>?</b>.'), true),
  haben: R('o verbo <b>haben</b> (ich habe, du hast, er hat…) com um objeto', (t, k) => need(has(k, HABEN), 'Use <b>haben</b>: habe, hast, hat, haben…'), true),
  negacao: R('uma negação com <b>nicht</b> ou <b>kein</b>. Qualquer verbo serve.', (t, k) => need(has(k, /^(nicht|kein|keine|keinen|keinem|keiner|keines)$/), 'Use <b>nicht</b> ou <b>kein/keine</b> para negar.'), true),
  separavel: R('um <b>verbo separável</b>, com o prefixo no fim (Ich stehe um 7 Uhr auf). Qualquer verbo separável serve.', (t) => need(clauses(t).some((c) => PREFIX.test(last(c))), 'O prefixo do verbo separável vai para o fim: Ich stehe früh <b>auf</b>.'), true),
  modal: R('um <b>verbo modal</b> (kann, muss, will, darf, soll, möchte…) e outro verbo no <b>infinitivo no fim</b>. Qualquer verbo serve.', (t, k) => need(has(k, MODAL) && clauses(t).some((c) => c.some((w) => MODAL.test(w)) && isInf(last(c))), has(k, MODAL) ? 'O segundo verbo vai no <b>infinitivo, no fim</b>: Ich kann gut <b>kochen</b>.' : 'Use um modal: kann, muss, will, darf, soll, möchte…'), true),
  esgibt: R('<b>es gibt</b> + o que existe (Es gibt einen Park in meiner Straße)', (t) => need(/\b(es gibt|gibt es)\b/i.test(t), 'Use <b>es gibt</b> (há / tem).'), false),
  lugar: R('uma <b>preposição de lugar</b> (in, auf, unter, neben, hinter, vor, zwischen, an, über) para dizer onde algo está', (t, k) => need(has(k, /^(in|im|auf|unter|neben|hinter|vor|zwischen|an|am|über)$/), 'Use uma preposição de lugar: in, auf, unter, neben…'), true),
  dativ_prep: R('uma preposição com <b>dativo</b> (mit, bei, zu, von, seit, aus, nach)', (t, k) => need(has(k, /^(mit|bei|beim|zu|zum|zur|von|vom|seit|aus|nach)$/), 'Use mit, bei, zu, von, seit, aus ou nach.'), true),
  perfekt: R('o <b>Perfekt</b>: <b>haben</b> ou <b>sein</b> + o particípio <b>no fim</b> (Ich habe gestern Pizza gegessen). Qualquer verbo serve.', (t, k) => need(has(k, HABEN) || has(k, SEIN) ? clauses(t).some((c) => (c.some((w) => HABEN.test(w) || SEIN.test(w))) && isPart(last(c))) : false, has(k, HABEN) || has(k, SEIN) ? 'O particípio (gemacht, gegessen, gefahren…) vai <b>no fim</b> da frase.' : 'Use <b>haben</b> ou <b>sein</b> + particípio: Ich habe … gemacht.'), false),
  perfekt_sein: R('o <b>Perfekt com sein</b> (movimento ou mudança): Ich bin nach Rom gefahren. Qualquer verbo de movimento serve.', (t, k) => need(has(k, SEIN) && clauses(t).some((c) => c.some((w) => SEIN.test(w)) && isPart(last(c))), has(k, SEIN) ? 'O particípio (gefahren, gegangen, geflogen…) vai <b>no fim</b>.' : 'Com verbos de movimento, o Perfekt usa <b>sein</b>: Ich <b>bin</b> … gefahren.'), false),
  praet_sein_haben: R('o passado <b>war</b> ou <b>hatte</b> (Früher war ich… / Ich hatte…)', (t, k) => need(has(k, /^(war|warst|waren|wart|hatte|hattest|hatten|hattet)$/), 'Use <b>war</b> (sein) ou <b>hatte</b> (haben) no passado.'), false),
  komparativ: R('uma <b>comparação</b>: adjetivo com -er + <b>als</b> (größer als…), ou <b>am …sten</b>', (t, k) => need((k.includes('als') && has(k, /\p{L}{2,}er$/u)) || /\bam \p{L}+sten\b/iu.test(t) || has(k, /^(besser|lieber|mehr)$/), 'Compare com -er + <b>als</b> (Ich bin größer als…) ou use <b>am …sten</b>.'), false),
  weil: R('<b>weil</b> (verbo no fim: …, weil ich müde bin) ou <b>denn</b> (…, denn ich bin müde). Qualquer verbo serve.', (t, k) => need(verbLast(t, 'weil') || k.includes('denn'), k.includes('weil') ? 'Depois de <b>weil</b>, o verbo conjugado vai <b>para o fim</b>: …, weil ich müde <b>bin</b>.' : 'Use <b>weil</b> ou <b>denn</b> para dar o motivo.'), false),
  dass: R('uma oração com <b>dass</b>, com o verbo no fim (Ich glaube, dass Deutsch schön <b>ist</b>). Qualquer verbo serve.', (t, k) => need(verbLast(t, 'dass'), k.includes('dass') ? 'Depois de <b>dass</b>, o verbo vai <b>para o fim</b>.' : 'Use <b>dass</b>: Ich finde, dass…'), false),
  wenn: R('uma oração com <b>wenn</b>, com o verbo no fim (Wenn es regnet, bleibe ich zu Hause). Qualquer verbo serve.', (t, k) => need(verbLast(t, 'wenn'), k.includes('wenn') ? 'Depois de <b>wenn</b>, o verbo vai <b>para o fim</b>.' : 'Use <b>wenn</b>: Wenn ich Zeit habe, …'), false),
  reflexivo: R('um <b>verbo reflexivo</b>, com mich, dich, sich, uns ou euch (Ich freue mich…). Qualquer verbo reflexivo serve.', (t, k) => need(has(k, /^(mich|dich|sich|uns|euch|mir|dir)$/), 'Um verbo reflexivo precisa do pronome: <b>mich</b>, dich, sich…'), true),
  futur: R('o <b>Futur</b>: <b>werden</b> + infinitivo <b>no fim</b> (Ich werde nach Berlin fahren). Qualquer verbo serve.', (t, k) => need(has(k, WERDEN) && clauses(t).some((c) => c.some((w) => WERDEN.test(w)) && isInf(last(c))), has(k, WERDEN) ? 'O infinitivo vai <b>no fim</b>: Ich werde … <b>lernen</b>.' : 'Use <b>werden</b>: ich werde, du wirst, er wird…'), false),
  modal_praet: R('um <b>modal no passado</b> (konnte, musste, wollte, durfte, sollte) + infinitivo no fim. Qualquer verbo serve.', (t, k) => need(has(k, MODAL_PRAET), 'Use o modal no passado: konnte, musste, wollte…'), false),
  sollen: R('<b>sollen</b> para conselho (Ich soll… / Du solltest…) + infinitivo no fim', (t, k) => need(has(k, /^(soll|sollst|sollen|sollt|sollte|solltest|sollten)$/), 'Use <b>sollen</b> ou <b>sollte</b>.'), false),
  relativa: R('uma <b>oração relativa</b> (…, der/die/das …, com o verbo no fim): Ich habe eine Freundin, die in Rio wohnt.', (t, k) => need(clauses(t).some((c, i) => i > 0 && /^(der|die|das|den|dem|denen|deren|dessen|was|wo)$/.test(c[0]) && c.length >= 3), 'Depois da vírgula, comece com <b>der/die/das</b> e termine com o verbo.'), false),
  konj2: R('o <b>Konjunktiv II</b> (würde, hätte, wäre, könnte, möchte…)', (t, k) => need(has(k, KONJ2), 'Use würde, hätte, wäre, könnte ou möchte.'), false),
  conectores: R('um conector: <b>deshalb</b>, <b>trotzdem</b> ou <b>sonst</b>, com o verbo logo depois', (t, k) => need(has(k, /^(deshalb|deswegen|trotzdem|sonst|darum|daher)$/), 'Use deshalb, trotzdem ou sonst.'), false),
  praet: R('o <b>Präteritum</b> (machte, ging, kam, war, hatte…), como numa história', (t, k) => need(has(k, /^(war|warst|waren|hatte|hatten|ging|gingen|kam|kamen|sah|sahen|gab|fand|las|aß|trank|fuhr|lief|schrieb|blieb|wurde|wurden)$/) || has(k, /\p{L}{2,}(te|ten|test)$/u), 'Use um verbo no Präteritum: machte, ging, kam, war…'), false),
  plusq: R('o <b>Plusquamperfekt</b>: <b>hatte</b> ou <b>war</b> + particípio (Nachdem ich gegessen hatte, …)', (t, k) => need(has(k, /^(hatte|hattest|hatten|war|warst|waren)$/) && k.some(isPart), 'Use hatte/war + particípio: Ich <b>hatte</b> schon <b>gegessen</b>.'), false),
  quando: R('uma oração de tempo com <b>als</b>, <b>wenn</b>, <b>während</b> ou <b>bevor</b>, com o verbo no fim', (t) => need(['als', 'wenn', 'während', 'bevor'].some((c) => verbLast(t, c)), 'Use als, wenn, während ou bevor, com o verbo no fim da oração.'), false),
  finalidade: R('<b>um … zu</b> (Ich lerne Deutsch, um in Berlin zu arbeiten) ou <b>damit</b>', (t, k) => need((k.includes('um') && k.includes('zu')) || k.includes('damit'), 'Use <b>um … zu</b> + infinitivo, ou <b>damit</b>.'), false),
  passiv: R('a <b>voz passiva</b>: werden/wurde + particípio no fim (Das Haus wurde 1900 gebaut)', (t, k) => need(has(k, /^(wird|werden|wurde|wurden|worden)$/) && k.some(isPart), 'Use werden/wurde + particípio: … <b>wird</b> … <b>gebaut</b>.'), false),
  wohl: R('o <b>Futur I</b> ou uma suposição com <b>wohl</b> (Er wird wohl müde sein)', (t, k) => need(has(k, WERDEN), 'Use <b>werden</b> (+ wohl): Ich werde… / Er wird wohl…'), false),
  obwohl: R('<b>obwohl</b> (verbo no fim) ou <b>zwar … aber</b>', (t, k) => need(verbLast(t, 'obwohl') || (k.includes('zwar') && k.includes('aber')), 'Use <b>obwohl</b> (verbo no fim) ou <b>zwar … aber</b>.'), false),
  zu_inf: R('um <b>infinitivo com zu</b> (Ich habe Lust, ins Kino zu gehen)', (t, k) => need(clauses(t).some((c) => c.length >= 2 && c[c.length - 2] === 'zu' || /\p{L}+zu\p{L}+en$/u.test(last(c))), 'Termine com <b>zu</b> + infinitivo: …, Deutsch <b>zu lernen</b>.'), false),
  lassen: R('o verbo <b>lassen</b> (Ich lasse mein Auto reparieren)', (t, k) => need(has(k, /^(lasse|lässt|lassen|lasst|ließ|ließen|gelassen)$/), 'Use <b>lassen</b>: Ich lasse …'), false),
  als_ob: R('<b>als ob</b> + Konjunktiv II (Er tut so, als ob er alles wüsste)', (t) => need(/\bals ob\b|\bals wäre|\bals hätte/i.test(t), 'Use <b>als ob</b>.'), false),
  futur2: R('o <b>Futur II</b>: werden + particípio + haben/sein no fim (Bis morgen werde ich es geschafft haben)', (t, k) => need(has(k, WERDEN) && /^(haben|sein)$/.test(last(clauses(t).find((c) => c.some((w) => WERDEN.test(w))) || [])), 'Termine com particípio + <b>haben</b> ou <b>sein</b>: … geschafft <b>haben</b>.'), false),
  indem: R('<b>indem</b>, <b>ohne … zu</b> ou <b>statt … zu</b>', (t, k) => need(k.includes('indem') || ((k.includes('ohne') || k.includes('statt') || k.includes('anstatt')) && k.includes('zu')), 'Use indem, ohne … zu ou statt … zu.'), false),
};
// lição (índice) → regra
const RULE_OF = {
  0: 'sein_heissen', 1: 'kommen_wohnen', 3: 'presente', 4: 'presente', 5: 'frage', 7: 'haben', 8: 'negacao', 9: 'separavel', 10: 'presente', 11: 'modal',
  12: 'esgibt', 13: 'lugar', 14: 'presente', 16: 'modal', 17: 'perfekt', 18: 'perfekt_sein', 19: 'praet_sein_haben', 20: 'dativ_prep', 21: 'lugar', 22: 'komparativ',
  23: 'weil', 24: 'dass', 25: 'wenn', 26: 'reflexivo', 29: 'futur', 30: 'modal_praet', 33: 'sollen', 36: 'relativa', 37: 'relativa', 38: 'konj2', 41: 'conectores',
  42: 'praet', 43: 'plusq', 44: 'quando', 45: 'relativa', 47: 'finalidade', 48: 'passiv', 49: 'passiv', 50: 'konj2', 51: 'konj2', 52: 'wohl', 54: 'obwohl', 58: 'zu_inf',
  59: 'lassen', 61: 'konj2', 62: 'konj2', 63: 'relativa', 86: 'indem', 92: 'als_ob', 93: 'futur2',
};
const ruleOfLesson = (les) => RULES[RULE_OF[les.i]] || null;

/* ---------- erros de gramática (valem em todas as lições) ----------
   Regras para os erros mais comuns de quem fala português, cada uma com o motivo em português e a forma certa.
   Só acusam o que é claramente errado; na dúvida, não acusam. */
let GEN_N = null; // substantivo → gênero (m, f, n), a partir do vocabulário das lições e do guia
const genOf = (w) => {
  if (!GEN_N) {
    GEN_N = {};
    const add = (de) => { const m = /^(der|die|das) (\p{Lu}[\p{L}-]+)$/u.exec(String(de).trim()); if (!m) return; const g = { der: 'm', die: 'f', das: 'n' }[m[1]]; GEN_N[m[2]] = GEN_N[m[2]] && GEN_N[m[2]] !== g ? '?' : g; };
    LESSONS.forEach((l) => l.v.forEach((v) => add(v.de)));
    if (typeof GUIDE !== 'undefined') GUIDE.forEach((g) => g.body.split('\n').forEach((x) => { if (x.startsWith('~ ')) add(x.slice(2).split(' = ')[0]); }));
    ['Eltern', 'Leute', 'Geschwister', 'Ferien', 'Kosten', 'Nachrichten'].forEach((p) => { GEN_N[p] = 'p'; });
  }
  const g = GEN_N[w]; return g === '?' ? null : g || null;
};
const ART = { // artigo → gêneros possíveis no singular (qualquer caso)
  ein: 'mn', eine: 'f', einen: 'm', einem: 'mn', einer: 'f', eines: 'mn',
  der: 'mf', das: 'n', dem: 'mn', des: 'mn',
};
const POSS_ART = /^(mein|dein|sein|ihr|unser|euer|kein)(|e|en|em|er|es)$/;
const ACC_VERB = /^(habe|hab|hast|hat|haben|habt|brauche|brauchst|braucht|brauchen|kaufe|kaufst|kauft|kaufen|sehe|siehst|sieht|sehen|möchte|möchtest|möchten|mag|magst|mögen|trinke|trinkst|trinkt|trinken|esse|isst|essen|nehme|nimmst|nimmt|nehmen|suche|suchst|sucht|suchen|finde|findest|findet|finden|liebe|liebst|liebt|lieben|kenne|kennst|kennt|kennen|besuche|besuchst|besucht|besuchen|lese|liest|lesen|bestelle|bestellst|bestellt|bestellen|gibt)$/;
const ADV1 = /^(heute|morgen|gestern|jetzt|dann|danach|hier|dort|oft|manchmal|immer|leider|natürlich|zuerst|später|abends|morgens|mittags|nachmittags|samstags|sonntags|montags|deshalb|trotzdem|auch|nur|bald|endlich|vielleicht)$/;
const PREP1 = /^(am|im|um|in|nach|vor|seit|mit|an|bei|zum|zur|jeden|jede|jedes|letzte|letzten|letztes|nächste|nächsten|nächstes)$/;
const SUBJ = /^(ich|du|er|sie|es|man|wir|ihr)$/;
const FUNC = /^(der|die|das|den|dem|des|ein|eine|einen|einem|einer|eines|mein|meine|meinem|meinen|meiner|dein|deine|deinem|deinen|sein|seine|seinem|seinen|ihr|ihre|ihrem|ihren|unser|unsere|unserem|unseren|euer|eure|diese|dieser|diesem|diesen|dieses|links|rechts|hier|dort|oben|unten|draußen|drinnen|der|einen|zwei|drei|vier|fünf|jeden|jede|allen|alle|ganz|meiner|ruhe|ordnung)$/;
const ERR = (msg, fix = '') => ({ msg, fix });
let LOWER_OK = null;
const lowerOk = (w) => {
  if (!LOWER_OK) {
    LOWER_OK = new Set();
    const add = (t) => String(t).split(/[^\p{L}ß]+/u).forEach((x) => { if (/^\p{Ll}/u.test(x)) LOWER_OK.add(x); });
    LESSONS.forEach((l) => { l.v.forEach((v) => add(v.de)); [...l.ge, ...l.ex, ...l.dlg].forEach((e) => add(e.de)); l.cz.forEach((c) => add(c.q.replace('___', c.a))); });
    if (typeof TEXTS !== 'undefined') TEXTS.forEach((t) => t.paras.forEach(add));
  }
  return LOWER_OK.has(w);
};
function grammarErrors(text) {
  const out = [], raw = clausesRaw(text);
  raw.forEach((rc, ci) => {
    const c = rc.map((w) => w.toLowerCase()), has2 = (re) => c.some((w) => re.test(w));
    // 1. preposições que o português confunde
    if (has2(/^wohn/) && c.includes('aus')) out.push(ERR('<b>wohnen</b> pede <b>in</b> (onde você mora): <i>Ich wohne in Curitiba.</i> <b>aus</b> é para a origem: <i>Ich komme aus Brasilien.</i>', 'wohnen in'));
    const iIn = c.indexOf('in');
    if (iIn > 1 && /^(komme|kommst|kommt|kommen)$/.test(c[iIn - 1]) && SUBJ.test(c[iIn - 2]) && /^\p{Lu}/u.test(rc[iIn + 1] || '') && !/^(Frage|Betracht|Kontakt|Gefahr|Mode|Schwung|Ordnung)$/.test(rc[iIn + 1]) && last(c) !== 'an') out.push(ERR('Para dizer de onde você vem, use <b>aus</b>: <i>Ich komme aus Brasilien.</i> (<b>in</b> é para onde você mora ou está.)', 'kommen aus'));
    const iZu = c.indexOf('zu');
    if (iZu > 0 && c[iZu + 1] === 'hause' && has2(/^(gehe|gehst|geht|gehen|fahre|fährst|fährt|fahren|laufe|läufst|läuft|komme|kommst|kommt|kommen|fliege|fliegt)$/)) out.push(ERR('Com movimento (ir para casa), é <b>nach Hause</b>: <i>Ich gehe nach Hause.</i> <b>zu Hause</b> é estar em casa.', 'nach Hause'));
    const iNach = c.indexOf('nach');
    if (iNach > 0 && c[iNach + 1] === 'hause' && has2(SEIN) && !c.some(isPart)) out.push(ERR('Estar em casa é <b>zu Hause</b>: <i>Ich bin zu Hause.</i> <b>nach Hause</b> é o movimento de ir para casa.', 'zu Hause'));
    // 2. idade e sensações usam outro verbo que o português
    if (has2(HABEN) && c.includes('jahre') && (last(c) === 'jahre' || last(c) === 'alt') && !c.some(isPart)) out.push(ERR('Idade se diz com <b>sein</b>: <i>Ich bin 25 Jahre alt.</i> (e não "ich habe…")', 'Ich bin … Jahre alt.'));
    if (has2(SEIN) && has2(/^(hunger|durst|angst|lust)$/)) out.push(ERR('Fome, sede, medo e vontade se dizem com <b>haben</b>: <i>Ich habe Hunger.</i>', 'Ich habe Hunger.'));
    // 3. verbo na 2ª posição: "Heute ich lerne" → "Heute lerne ich"
    if (ci === 0 && c.length >= 3) {
      const p = c.findIndex((w) => SUBJ.test(w));
      const head = c.slice(0, Math.max(p, 0));
      const prev = c[p - 1] || '', prevVerbo = /^\p{Ll}/u.test(rc[p - 1] || '') && !ADV1.test(prev) && !PREP1.test(prev) && !NAO_VERBO.test(prev) && !FUNC.test(prev);
      const inicio = p > 0 && !prevVerbo && (ADV1.test(c[0]) || (PREP1.test(c[0]) && p <= 3));
      if (inicio && !head.some((w) => SUBORD.test(w)) && head.every((w) => !FIN(w)) && c[p + 1] && /^\p{Ll}/u.test(rc[p + 1]) && /(e|st|t|en)$/.test(c[p + 1]) && !ADV1.test(c[p + 1]) && !/^(gern|nicht|sehr|auch|schon|noch|immer)$/.test(c[p + 1])) {
        const fixed = [rc.slice(0, p).join(' '), rc[p + 1], rc[p], ...rc.slice(p + 2)].join(' ');
        out.push(ERR(`O verbo conjugado fica sempre na <b>2ª posição</b>. Se a frase começa com <b>${esc(rc.slice(0, p).join(' '))}</b>, o verbo vem logo depois e o sujeito passa para trás: <i>${esc(fixed[0].toUpperCase() + fixed.slice(1))}</i>`, fixed));
      }
    }
    // 4. verbo separável sem separar: "Ich aufstehe" → "Ich stehe … auf"
    if (ci === 0 && !c.some((w) => /^(weil|dass|wenn|ob|als|obwohl|damit|nachdem|bevor|während)$/.test(w))) {
      c.forEach((w, i) => {
        const m = /^(auf|an|ein|aus|mit|zurück|fern|ab|vor|nach|los|weg|zu)(\p{Ll}{2,})(e|st|t)$/u.exec(w);
        if (!m || i > 2 || !SUBJ.test(c[i - 1] || c[i + 1] || '')) return;
        const base = m[2] + 'en', inf = m[1] + base;
        if (typeof deSet !== 'function' || !deSet().has(base) || !deSet().has(inf)) return;
        out.push(ERR(`<b>${esc(inf)}</b> é um verbo separável: o prefixo <b>${esc(m[1])}</b> vai para o fim da frase. <i>Ich ${esc(m[2] + m[3])} … ${esc(m[1])}.</i>`, `${m[2] + m[3]} … ${m[1]}`));
      });
    }
    // 5. artigo que não combina com o gênero do substantivo
    c.forEach((w, i) => {
      const n = rc[i + 1]; if (!n || !/^\p{Lu}/u.test(n)) return;
      const g = genOf(n); if (!g || g === 'p') return;
      const pm = POSS_ART.exec(w); if (pm && pm[2] === 'e') return; // meine/ihre/keine + substantivo pode ser plural
      if (w === 'der' && g === 'n') return; // der + neutro pode ser genitivo plural (der Kinder); não arrisca
      const a = pm ? (pm[2] === '' ? 'ein' : 'ein' + pm[2]) : w;
      const ok = ART[a]; if (!ok || ok.includes(g)) return;
      const nome = { m: 'masculino (der)', f: 'feminino (die)', n: 'neutro (das)' }[g];
      out.push(ERR(`<b>${esc(n)}</b> é ${nome}: <b>${esc(rc[i])} ${esc(n)}</b> não combina. Ex.: <i>${g === 'f' ? 'eine / die' : g === 'm' ? 'ein / der' : 'ein / das'} ${esc(n)}</i>.`, ''));
    });
    // 6. acusativo do masculino depois de haben, kaufen, sehen… ("Ich habe ein Hund" → "einen Hund")
    c.forEach((w, i) => {
      if (!ACC_VERB.test(w)) return;
      const subjDepois = SUBJ.test(c[i + 1] || ''); if (!SUBJ.test(c[i - 1] || '') && !subjDepois) return;
      for (let j = i + (subjDepois ? 2 : 1); j <= i + 3 && j < c.length - 1; j++) {
        const n = rc[j + 1]; if (!/^\p{Lu}/u.test(n || '') || genOf(n) !== 'm') continue;
        const pm = POSS_ART.exec(c[j]);
        if (c[j] === 'der' || c[j] === 'ein' || (pm && pm[2] === '')) {
          const certo = c[j] === 'der' ? 'den' : c[j] + 'en';
          out.push(ERR(`Depois de <b>${esc(rc[i])}</b>, <b>${esc(n)}</b> é o objeto (acusativo). No masculino o artigo muda: <b>${esc(certo)} ${esc(n)}</b>, e não ${esc(rc[j])} ${esc(n)}.`, `${certo} ${n}`));
        }
        break;
      }
    });
    // 7. substantivos e nomes próprios começam com maiúscula
    rc.forEach((w, i) => {
      if (i === 0 && ci === 0) return;
      const cap = w[0].toUpperCase() + w.slice(1);
      if (/^\p{Ll}/u.test(w) && genOf(cap) && !FUNC.test(w) && !lowerOk(w)) out.push(ERR(`Em alemão, todo substantivo começa com maiúscula: <b>${esc(cap)}</b>.`, cap));
      else if (/^\p{Ll}/u.test(w) && i > 0 && /^(in|aus|nach)$/.test(c[i - 1]) && !FUNC.test(w) && !lowerOk(w)) out.push(ERR(`Nomes de cidades e países começam com maiúscula: <b>${esc(cap)}</b>.`, cap));
    });
    // 8. sujeito no singular com verbo no plural: "Meine Mutter heißen Eva" → "heißt"
    if (ci === 0 && c.length >= 3 && /^(mein|meine|dein|deine|sein|seine|ihr|ihre|der|die|das|unser|unsere)$/.test(c[0]) && /^\p{Lu}/u.test(rc[1]) && genOf(rc[1]) && genOf(rc[1]) !== 'p' && (!/(e|die)$/.test(c[0]) || genOf(rc[1]) === 'f') && /^\p{Ll}/u.test(rc[2]) && /\p{L}{2,}en$/u.test(c[2]) && !/^(sein|ihren|einen|keinen|meinen|deinen)$/.test(c[2])) {
      const v = c[2].replace(/(en)$/, 't').replace(/tt$/, 'tet');
      out.push(ERR(`<b>${esc(rc[0])} ${esc(rc[1])}</b> é uma pessoa ou coisa só (singular): o verbo termina em <b>-t</b>, como com er/sie. Ex.: <i>${esc(rc[0])} ${esc(rc[1])} ${esc(c[2] === 'sind' ? 'ist' : v)} …</i>`, v));
    }
  });
  // mesma mensagem uma vez só
  return out.filter((e, i) => out.findIndex((x) => x.msg === e.msg) === i);
}

// Conferência completa. Devolve { pt, struct: true|false|null, msg, conc: {ok,msg}|null, word }.
function checkFrase(text, les, sug) {
  const toks = fT(text), pt = toks.filter((w) => /^(eu|você|voce|não|nao|é|um|uma|meu|minha|que|com|para|muito|gosto|tenho|sou|estou|moro|do|da|no|na)$/.test(w)).length >= Math.max(2, toks.length * 0.4);
  const rule = ruleOfLesson(les), r = rule ? rule.c(text, toks) : null;
  const conc = concord(text); // concordância vale em todas as lições (passado e Konjunktiv incluídos)
  return { pt, rule, struct: rule ? r === true : null, msg: r === true ? '' : r, conc, gram: pt ? [] : grammarErrors(text), word: sug ? wordIn(text, sug.de) : null };
}
// Exemplo da própria lição que segue a regra (para mostrar como modelo, sem obrigar a copiar).
function modelOf(les) {
  const rule = ruleOfLesson(les), all = [...les.ge, ...les.ex, ...les.dlg];
  return (rule && all.find((s) => rule.c(s.de, fT(s.de)) === true)) || les.ge[0];
}

// só isto fica visível para o resto do app
Object.assign(window, { checkFrase, modelOf, ruleOfLesson, fraseConcord: concord, grammarErrors });
})();
