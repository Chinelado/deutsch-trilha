// Controle de vocabulário: quais palavras alemãs cada lição usa sem ter ensinado antes.
// "Ensinado" = apareceu no módulo Comece aqui, numa lição anterior, ou no vocabulário, nas tabelas
// e nas palavras de apoio da própria lição. Variações da mesma palavra (komme/kommen, fährt/fahren) contam como conhecidas.
const SUP = {}; // palavras de apoio por lição: título → [{de, pt}]
function S_(title, list) { SUP[title] = list.split('|').map((s) => { const [de, pt] = s.split('='); return { de, pt }; }); }

// Nomes próprios dos exemplos (pessoas e lugares): não contam como vocabulário.
const NAMES = new Set(('trilha lenz goethe wandrers nachtlied anna ana paulo lena souza meier eva tim mia lissabon rio são berlin münchen hamburg köln wien bonn tom jonas clara petra lea sara maria tirol stuttgart ' +
  'brasilien deutschland österreich schweiz italien afrika rom europa weber koch lang berger lehmann müller schmidt frankfurt delmenhorst').split(' '));
const stemOf = (w) => w.normalize('NFD').replace(/[̈]/g, '').replace(/ß/g, 'ss').replace(/(en|em|er|es|st|et|e|n|s|t)$/, '');
function knownIndex() {
  const toks = (t) => (String(t).replace(/\*\*/g, '').match(/\p{L}+/gu) || []).map((w) => w.toLowerCase());
  const taught = new Set(), stems = new Set();
  const bases = new Set(); // forma básica normalizada (schön → schon), para reconhecer schöne, netten, roten…
  const norm0 = (w) => w.normalize('NFD').replace(/[̈]/g, '').replace(/ß/g, 'ss');
  const teach = (t) => toks(t).forEach((w) => { taught.add(w); bases.add(norm0(w)); if (w.length > 3) stems.add(stemOf(w)); });
  const isKnown = (w) => taught.has(w) || (w.length > 3 && (stems.has(stemOf(w)) || bases.has(stemOf(w))));
  // módulo Comece aqui
  GUIDE.forEach((g) => g.body.split('\n').filter((x) => x.trim().startsWith('~ ')).forEach((x) => teach(x.trim().slice(2).split(' = ')[0])));
  const report = [];
  LESSONS.forEach((l) => {
    // o que a própria lição ensina explicitamente
    l.v.forEach((v) => teach(v.de));
    (SUP[l.de] || []).forEach((s) => teach(s.de));
    if (l.deep) {
      l.deep.split('\n').filter((x) => x.trim().startsWith('|')).forEach((row) => row.split('|').forEach((c) => { if (isGerman(c)) teach(c); }));
      (l.deep.match(/\*\*(.+?)\*\*/g) || []).forEach((b) => { if (isGerman(b)) teach(b); }); // palavras explicadas em negrito
    }
    // o que a lição usa
    const used = [...l.ge, ...l.ex, ...l.dlg].map((e) => e.de).concat(l.cz.map((c) => c.q.replace('___', c.a)), l.bd ? [l.bd.t.map((x) => x.w).join(' ')] : [],
      l.deep ? l.deep.split('\n').filter((x) => x.trim().startsWith('~ ')).map((x) => x.trim().slice(2).split(' = ')[0]) : [])
      .map((t) => t.replace(/\(.*?\)/g, ' ')); // dicas em português entre parênteses não contam
    l.usedText = used.join(' ');
    const unknown = [...new Set(used.flatMap(toks))].filter((w) => w.length > 1 && !isKnown(w) && !/^\d/.test(w) && !NAMES.has(w) && !PT_STOP.has(w) && !/[ãõçáéíóúâêôà]/.test(w));
    report.push({ i: l.i, de: l.de, unknown });
    used.forEach(teach); // depois desta lição, tudo o que apareceu nela já foi visto
  });
  return report;
}
