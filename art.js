/* Ilustrações em SVG: cubos isométricos, banner, trilha em zigue-zague e frase desmontada. */
const LVCOL = { A1: '#4fd18b', A2: '#3fc1e0', B1: '#ffcf4a', B2: '#ff8a3d', C1: '#a77bff', C2: '#ff5fa2' };
const shade = (hex, f) => { const n = parseInt(hex.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.max(0, Math.min(255, Math.round(v * f)))); return '#' + c.map((v) => v.toString(16).padStart(2, '0')).join(''); };

// Cubo isométrico: (cx, cy) é o centro da face de cima; w é meia largura; d é a altura das laterais.
function isoCube(cx, cy, w, d, col, label = '', fs = 0, ink = '#0e1525') {
  const h = w / 2;
  const top = `${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h} ${cx - w},${cy}`;
  const left = `${cx - w},${cy} ${cx},${cy + h} ${cx},${cy + h + d} ${cx - w},${cy + d}`;
  const right = `${cx},${cy + h} ${cx + w},${cy} ${cx + w},${cy + d} ${cx},${cy + h + d}`;
  return `<polygon points="${left}" fill="${shade(col, 0.78)}"/><polygon points="${right}" fill="${shade(col, 0.6)}"/><polygon points="${top}" fill="${col}"/>` +
    (label ? `<text transform="translate(${cx} ${cy}) scale(1 .5) rotate(45)" text-anchor="middle" dominant-baseline="central" font-size="${fs || w * 0.62}" font-weight="800" fill="${ink}" font-family="IBM Plex Sans, system-ui">${esc(label)}</text>` : '');
}

function heroArt(lv) {
  const col = LVCOL[lv] || '#ffcf4a';
  const cubes = [[90, 70, 46, 40, '#ff5fa2', lv], [250, 130, 30, 26, '#4fd18b', 'Ä'], [430, 40, 38, 32, '#3d7bff', 'DE'], [600, 120, 54, 44, col, lv],
    [770, 50, 34, 28, '#ff5fa2', 'ß'], [900, 140, 44, 36, '#3d7bff', 'Ü'], [-10, 170, 40, 34, '#ffcf4a', 'ö'], [1010, 60, 36, 30, '#4fd18b', 'ä']];
  return `<svg viewBox="0 0 1000 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${cubes.map(([x, y, w, d, c, t]) => isoCube(x, y, w, d, c, t)).join('')}</svg>`;
}

function levelBadge(lv, size = 64) {
  return `<svg viewBox="0 0 64 64" width="${size}" height="${size}" aria-hidden="true">${isoCube(32, 22, 26, 22, LVCOL[lv], lv, 15)}</svg>`;
}

/* ---------- trilha isométrica ---------- */
const PATH_W = 340;
function pathSVG(days, cur, step = 100) {
  const A = 72, cx = PATH_W / 2;
  const P = days.map((d, i) => ({ d, x: cx + [0, -1, 0, 1][i % 4] * A, y: 56 + i * step, info: dayInfo(d) }));
  const H = P.length * step + 40;
  let lines = '', marks = '', nodes = '';
  for (let i = 0; i < P.length - 1; i++) {
    const a = P[i], b = P[i + 1];
    lines += `<line x1="${a.x}" y1="${a.y + 10}" x2="${b.x}" y2="${b.y + 10}" class="pl ${S.done[a.d] ? 'pl-done' : ''}"/>`;
  }
  P.forEach((p, i) => {
    if (p.info.r === 0 && i > 0) marks += `<line x1="8" x2="${PATH_W - 8}" y1="${p.y - step / 2}" y2="${p.y - step / 2}" class="wk"/><text x="${PATH_W / 2}" y="${p.y - step / 2 - 6}" class="wkt" text-anchor="middle">SEMANA ${p.info.w + 1}</text>`;
    const st = S.done[p.d] ? 'done' : p.d === cur ? 'cur' : p.d > cur ? 'lock' : 'open';
    const col = st === 'done' ? '#ffcf4a' : st === 'cur' ? '#ff8a3d' : st === 'open' ? '#57abff' : '#3c445c';
    const label = p.info.review ? '🏁 Checkpoint' : LESSONS[p.info.li].de;
    const short = label.length > 26 ? label.slice(0, 25) + '…' : label;
    nodes += `<g class="node n-${st}" data-d="${p.d}" tabindex="0" role="button" aria-label="Dia ${p.d}: ${esc(label)}">
      ${p.info.review ? isoCube(p.x, p.y, 22, 14, col, '★', 13) : isoCube(p.x, p.y, 30, 18, col, String(p.d), p.d > 99 ? 12 : 15, st === 'lock' ? '#9da2b0' : '#0e1525')}
      <text x="${p.x}" y="${p.y + 46}" text-anchor="middle" class="nl">${esc(short)}</text>
      ${S.done[p.d] ? `<text x="${p.x}" y="${p.y + 60}" text-anchor="middle" class="ns">${'★'.repeat(S.done[p.d].s)}${'☆'.repeat(3 - S.done[p.d].s)}</text>` : ''}
      ${st === 'cur' ? `<g class="go"><circle cx="${p.x + 46}" cy="${p.y - 30}" r="17"/><text x="${p.x + 46}" y="${p.y - 30}" text-anchor="middle" dominant-baseline="central">GO</text><text class="spark" x="${p.x + 64}" y="${p.y - 46}">✦</text><text class="spark s2" x="${p.x + 28}" y="${p.y - 10}">✦</text></g>` : ''}
    </g>`;
  });
  return { svg: `<svg viewBox="0 0 ${PATH_W} ${H}" width="${PATH_W}" height="${H}" class="path">${marks}${lines}${nodes}</svg>`, P };
}

/* ---------- frase desmontada ---------- */
const RGROUP = { s: 'Sujeito', v: 'Verbo conjugado', v2: 'Fim do verbo', o: 'Objetos', p: 'Atributos', c: 'Complementos', n: 'Negação', w: 'Conectores' };
const RHELP = {
  S: 'quem faz a ação ou de quem se fala; fica no nominativo e concorda com o verbo',
  V: 'o verbo que concorda com o sujeito; na oração principal fica na 2ª posição, na subordinada vai para o fim',
  AUX: 'haben, sein ou werden formando tempo composto, futuro ou passiva; ocupa o lugar do verbo conjugado',
  MOD: 'können, müssen, wollen, dürfen, sollen, möchten: conjugado na 2ª posição, com outro verbo no infinitivo no fim',
  INF: 'verbo na forma básica, que vai para o fim quando há modal, werden, lassen ou zu',
  PT: 'particípio (ge…t, ge…en), que vai para o fim nos tempos compostos e na passiva',
  PX: 'prefixo de verbo separável, que se solta e vai para o fim da oração',
  ZU: 'zu antes do infinitivo, exigido por certos verbos e expressões',
  OA: 'quem ou o que recebe a ação diretamente; caso acusativo',
  OD: 'a pessoa a quem algo é dado ou que é afetada; caso dativo',
  G: 'genitivo: indica posse ou é exigido por certas preposições e verbos',
  RX: 'pronome reflexivo, que volta ao sujeito (mich, dich, sich…)',
  PR: 'o que se diz do sujeito depois de sein, werden, heißen ou bleiben',
  ADJ: 'adjetivo ou particípio antes do substantivo, com terminação',
  ART: 'artigo ou demonstrativo, que mostra gênero, número e caso',
  POS: 'possessivo (mein, dein…), declinado como ein',
  T: 'quando: indicação de tempo', L: 'onde ou para onde: indicação de lugar', M: 'como: modo, meio ou ponto de vista',
  PP: 'complemento com preposição, muitas vezes exigida pelo verbo ou adjetivo',
  ADV: 'advérbio que modifica o verbo, o adjetivo ou a frase toda',
  NEG: 'nega a frase ou parte dela (nicht, kein, kaum…)',
  W: 'palavra interrogativa: abre a pergunta e o verbo vem logo em seguida',
  C: 'liga orações; weil, dass, wenn, ob e semelhantes mandam o verbo para o fim',
  REL: 'retoma um substantivo e abre a oração relativa, com verbo no fim',
  PK: 'partícula que dá tom à frase (doch, mal, ja, wohl…)', X: 'segundo termo de uma comparação',
};
const roleName = (c) => (ROLES[c] || ROLES.X)[0];
const roleGroup = (c) => (ROLES[c] || ROLES.X)[1];

function breakdownHTML(bd, compact = false) {
  const t = bd.t, sentence = t.map((x) => x.w).join(' ');
  const chips = t.map((x, i) => `<div class="bw k-${roleGroup(x.c)}"><span class="bn">${i + 1}</span><b>${esc(x.w)}</b><i>${esc(roleName(x.c))}</i></div>`).join('');
  if (compact) return `<div class="bwrap">${chips}</div>`;
  const vi = t.findIndex((x) => roleGroup(x.c) === 'v'), v2 = t.map((x) => roleGroup(x.c)).lastIndexOf('v2');
  const frame = vi >= 0 && v2 > vi ? `<div class="frame"><span class="bw k-v"><b>${esc(t[vi].w)}</b></span><span class="dots"></span><span class="bw k-v2"><b>${esc(t[v2].w)}</b></span>
    <small>Moldura verbal: a parte conjugada fica na posição ${vi + 1} e a outra parte do verbo fecha a oração. Tudo o que está entre as duas é o meio da frase.</small></div>` : '';
  const used = [...new Set(t.map((x) => roleGroup(x.c)))];
  return `<div class="bd"><div class="row"><p class="bd-s grow">${spk(sentence)}<span class="de">${esc(sentence)}</span><br><small>${esc(bd.pt)}</small></p></div>
  <div class="bwrap">${chips}</div>${frame}
  <ol class="bnotes">${t.map((x, i) => (x.n ? `<li value="${i + 1}"><b>${esc(x.w)}</b> — ${esc(x.n)}</li>` : '')).join('')}</ol>
  <div class="legend">${used.map((g) => `<span class="lg k-${g}">${RGROUP[g]}</span>`).join('')}</div></div>`;
}
