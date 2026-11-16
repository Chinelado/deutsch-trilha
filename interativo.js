/* Facilitações interativas dentro das lições (esquemas tipo U e K de data/visuals.js):
   - U: relógio de ponteiros. Arraste o ponteiro grande (ou use os botões) e ouça a hora; no desafio, ouça e acerte o relógio.
   - K: a gata e o caixote. Toque numa preposição e a gata vai até lá. "Wo?" = parada (dativo), "Wohin?" = movimento (acusativo).
   Os textos e o áudio vêm de data/interativos.js. */

const sayBtn = (t) => ((hasTTS || AUD) && S.audio ? `<button class="spk" data-say="${esc(t)}" aria-label="Ouvir">🔊</button>` : '');
const setSay = (box, t) => { const b = box.querySelector('.spk'); if (b) b.dataset.say = t; };

/* ---------- relógio ---------- */
function uhrHTML(title) {
  const ticks = Array.from({ length: 60 }, (_, i) => { const a = (i * 6 * Math.PI) / 180, r1 = i % 5 ? 86 : 80;
    return `<line class="${i % 5 ? 'ut' : 'ut5'}" x1="${100 + r1 * Math.sin(a)}" y1="${100 - r1 * Math.cos(a)}" x2="${100 + 90 * Math.sin(a)}" y2="${100 - 90 * Math.cos(a)}"/>`; }).join('');
  const nums = Array.from({ length: 12 }, (_, i) => { const n = i + 1, a = (n * 30 * Math.PI) / 180;
    return `<text x="${100 + 68 * Math.sin(a)}" y="${100 - 68 * Math.cos(a)}" dy="0.35em">${n}</text>`; }).join('');
  return `<div class="vbox ivis"><div class="vt">🕰️ ${inl(title)}</div>
  <div class="uhr" data-h="3" data-m="0">
    <svg class="uhr-face" viewBox="0 0 200 200" role="img" aria-label="Relógio de ponteiros">
      <circle class="uf" cx="100" cy="100" r="94"/>${ticks}<g class="un">${nums}</g>
      <line class="uh" x1="100" y1="100" x2="100" y2="52"/><line class="um" x1="100" y1="100" x2="100" y2="24"/>
      <circle class="uc" cx="100" cy="100" r="5"/>
    </svg>
    <div class="uhr-side">
      <div class="uhr-show"><div class="uhr-dig">3:00</div>
        <p class="uhr-de">${sayBtn(uhrText(3, 0))}<span class="de">${uhrText(3, 0)}</span></p>
        <p class="uhr-f"><small class="mut">Forma oficial (rádio, estação, horários):</small> <span>${uhrFormal(3, 0)}</span></p>
        <p class="uhr-tip mut"></p></div>
      <div class="uhr-q" hidden></div>
      <div class="uhr-btns"><button type="button" data-u="-60">− 1 h</button><button type="button" data-u="-5">− 5 min</button><button type="button" data-u="5">+ 5 min</button><button type="button" data-u="60">+ 1 h</button></div>
      <div class="uhr-btns"><button type="button" class="pri" data-u="quiz">🎲 Desafio: ouça e acerte o relógio</button><button type="button" class="pri" data-u="check" hidden>Conferir</button></div>
    </div>
  </div>
  <p class="mut ihint">Arraste o ponteiro grande, ou use os botões. Repare no <b>halb</b>: halb vier é 3:30, a meia hora que falta para as quatro.</p></div>`;
}
function uhrSet(u, h, m) {
  h = ((h - 1 + 12) % 12) + 1; u.dataset.h = h; u.dataset.m = m;
  // ângulo acumulado: o ponteiro sempre gira pelo caminho curto (12 → 1 não dá a volta inteira para trás)
  const turn = (el, deg) => { const prev = +el.dataset.deg || 0, d = ((deg - prev) % 360 + 540) % 360 - 180; el.dataset.deg = prev + d; el.style.transform = `rotate(${prev + d}deg)`; };
  turn(u.querySelector('.uh'), (h % 12) * 30 + m / 2); turn(u.querySelector('.um'), m * 6);
  if (u.dataset.quiz) return; // no desafio a resposta só aparece ao conferir
  const t = uhrText(h, m);
  u.querySelector('.uhr-dig').textContent = `${h}:${String(m).padStart(2, '0')}`;
  u.querySelector('.uhr-de .de').textContent = t; setSay(u.querySelector('.uhr-de'), t);
  u.querySelector('.uhr-f span').textContent = uhrFormal(h, m);
  u.querySelector('.uhr-tip').textContent = m >= 25 && m <= 35 ? `Atenção: com halb, o alemão já fala da próxima hora (${NUM_DE[(h % 12) + 1]}).` : m > 35 ? 'Depois da meia hora, conta-se quanto falta: vor + a próxima hora.' : '';
}
// soma minutos e deixa a hora acompanhar
const uhrAdd = (u, d) => { const tot = (+u.dataset.h % 12) * 60 + +u.dataset.m + d, t = ((tot % 720) + 720) % 720; uhrSet(u, Math.floor(t / 60) || 12, t % 60); };
function uhrQuiz(u) {
  let h, m; do { h = 1 + Math.floor(Math.random() * 12); m = 5 * Math.floor(Math.random() * 12); } while (h === +u.dataset.h && m === +u.dataset.m);
  u.dataset.quiz = `${h}:${m}`; u.classList.add('quiz');
  const t = uhrText(h, m), q = u.querySelector('.uhr-q');
  q.innerHTML = `<p><b>Ajuste o relógio para:</b></p><p>${sayBtn(t)}<span class="de">${t}</span></p>`; q.hidden = false;
  u.querySelector('.uhr-show').hidden = true;
  u.querySelector('[data-u="quiz"]').hidden = true; u.querySelector('[data-u="check"]').hidden = false;
  say(t);
}
function uhrCheck(u) {
  const [h, m] = u.dataset.quiz.split(':').map(Number), ok = h === +u.dataset.h && m === +u.dataset.m;
  const q = u.querySelector('.uhr-q'), mine = `${u.dataset.h}:${String(u.dataset.m).padStart(2, '0')}`;
  delete u.dataset.quiz; u.classList.remove('quiz');
  if (!ok) uhrSet(u, h, m); else uhrSet(u, +u.dataset.h, +u.dataset.m);
  u.querySelector('.uhr-show').hidden = false;
  q.innerHTML = ok ? '<p class="okmsg">✅ Isso! O relógio está certo.</p>' : `<p class="nomsg">❌ Quase! Você marcou ${mine}; o certo é ${h}:${String(m).padStart(2, '0')}. Veja os ponteiros agora.</p>`;
  u.dataset.score = (+u.dataset.score || 0) + (ok ? 1 : 0); u.dataset.tries = (+u.dataset.tries || 0) + 1;
  q.innerHTML += `<p class="mut">Acertos: ${u.dataset.score} de ${u.dataset.tries}</p>`;
  u.querySelector('[data-u="quiz"]').hidden = false; u.querySelector('[data-u="check"]').hidden = true;
}
// arrastar o ponteiro dos minutos (mouse ou dedo)
let uhrDrag = null;
const uhrAngle = (svg, e) => { const r = svg.getBoundingClientRect(), x = ((e.clientX - r.left) / r.width) * 200 - 100, y = ((e.clientY - r.top) / r.height) * 200 - 100; return ((Math.atan2(x, -y) * 180) / Math.PI + 360) % 360; };
function uhrMove(e) {
  if (!uhrDrag) return; e.preventDefault();
  const u = uhrDrag, m = Math.round(uhrAngle(u.querySelector('svg'), e) / 30) * 5 % 60, old = +u.dataset.m;
  let h = +u.dataset.h;
  if (old >= 45 && m <= 15) h++; else if (old <= 15 && m >= 45) h--; // passou pelo 12
  if (m !== old || h !== +u.dataset.h) uhrSet(u, h, m);
}

/* ---------- a gata e o caixote ---------- */
// posição da gata (x, y, escala) e camada: atrás do caixote, entre as faces ou na frente
const KPOS = { auf: [155, 60, 1.3, 'mid'], in: [155, 86, 1.3, 'mid'], unter: [155, 142, 0.8, 'mid'], neben: [62, 136, 1.3, 'mid'], hinter: [185, 74, 1.05, 'back'], vor: [148, 150, 1.4, 'front'], zwischen: [229, 140, 1, 'mid'] };
const KSTART = [10, 136, 1.3];
const kCrate = (x, cls) => `<g class="${cls}">
  <rect class="kz-leg" x="${x + 4}" y="124" width="6" height="28"/><rect class="kz-leg" x="${x + 60}" y="124" width="6" height="28"/>
  <polygon class="kz-side" points="${x + 70},80 ${x + 80},72 ${x + 80},116 ${x + 70},124"/>
  <polygon class="kz-top" points="${x},80 ${x + 70},80 ${x + 80},72 ${x + 10},72"/>
  <rect class="kz-box" x="${x}" y="80" width="70" height="44"/></g>`;
function katzHTML(title, mode) {
  const m = mode === 'wohin' ? 'wohin' : 'wo', k = KATZE[0];
  return `<div class="vbox ivis"><div class="vt">🐈 ${inl(title)}</div>
  <div class="katz" data-mode="${m}" data-pos="auf">
    <div class="kz-modes"><button type="button" data-k="m:wo" class="${m === 'wo' ? 'on' : ''}"><b>📍 Wo?</b><small>parada · dativo</small></button><button type="button" data-k="m:wohin" class="${m === 'wohin' ? 'on' : ''}"><b>➡️ Wohin?</b><small>movimento · acusativo</small></button></div>
    <svg class="kz-scene" viewBox="0 26 360 146" role="img" aria-label="Uma gata e caixotes">
      <line class="kz-floor" x1="0" y1="152" x2="360" y2="152"/>
      <g class="kz-L-back"></g>
      ${kCrate(260, 'kz-crate2')}
      <g class="kz-crate"><rect class="kz-leg" x="124" y="124" width="6" height="28"/><rect class="kz-leg" x="180" y="124" width="6" height="28"/>
        <polygon class="kz-side" points="190,80 200,72 200,116 190,124"/><polygon class="kz-top" points="120,80 190,80 200,72 130,72"/>
        <polygon class="kz-hole" points="124,79 189,79 196,74 131,74"/></g>
      <g class="kz-L-mid"></g>
      <g class="kz-front"><rect class="kz-box" x="120" y="80" width="70" height="44"/></g>
      <g class="kz-L-front"></g>
      <g class="kz-cat" style="transform: translate(155px, 60px) scale(1.3)">
        <path class="kz-tail" d="M16 2 C 32 0, 32 -16, 23 -21"/>
        <ellipse class="kz-body" cx="4" cy="2" rx="16" ry="10"/><circle class="kz-body" cx="-12" cy="-8" r="9"/>
        <polygon class="kz-body" points="-20,-12 -18,-22 -12,-15"/><polygon class="kz-body" points="-11,-15 -6,-22 -5,-12"/>
        <circle class="kz-eye" cx="-15" cy="-9" r="1.5"/></g>
    </svg>
    <p class="kz-sent">${sayBtn(k[m])}<span class="de">${kSent(k, m)}</span></p>
    <div class="kz-fb" hidden></div>
    <div class="kz-btns">${KATZE.map((x) => `<button type="button" data-k="p:${x.p}"><b>${x.p}</b><small>${x.pt}</small></button>`).join('')}</div>
    <div class="uhr-btns"><button type="button" class="pri" data-k="quiz">🎲 Desafio: onde a gata foi parar?</button></div>
  </div>
  <p class="mut ihint">Toque numa preposição. Em <b>Wo?</b> a gata já está lá; em <b>Wohin?</b> ela corre até lá. Repare como o artigo muda: <b>dem</b> (dativo) × <b>den</b> (acusativo).</p></div>`;
}
const kSent = (k, m) => esc(k[m]).replace(esc(k[m + 'H']), `<em class="kz-h ${m}">${esc(k[m + 'H'])}</em>`);
// coloca a gata na posição; no modo Wohin ela sai do canto esquerdo e corre até lá
function katzGo(kz, p, animate = true) {
  const cat = kz.querySelector('.kz-cat'), [x, y, s, layer] = KPOS[p], run = kz.dataset.mode === 'wohin' && animate;
  kz.dataset.pos = p; kz.classList.toggle('open', p === 'in');
  const slot = kz.querySelector({ back: '.kz-L-back', mid: '.kz-L-mid', front: '.kz-L-front' }[layer]);
  cat.style.transition = 'none';
  if (run) cat.style.transform = `translate(${KSTART[0]}px, ${KSTART[1]}px) scale(${KSTART[2]})`;
  else cat.style.opacity = '0';
  slot.appendChild(cat); cat.getBoundingClientRect(); // aplica a posição inicial antes de animar
  cat.style.transition = run ? 'transform .7s cubic-bezier(.3,.7,.4,1)' : 'opacity .25s';
  cat.style.transform = `translate(${x}px, ${y}px) scale(${s})`; cat.style.opacity = '1';
  kz.querySelectorAll('[data-k^="p:"]').forEach((b) => b.classList.toggle('on', b.dataset.k === 'p:' + p && !kz.dataset.quiz));
}
function katzShow(kz, speak = true) {
  const k = KATZE.find((x) => x.p === kz.dataset.pos), m = kz.dataset.mode, s = kz.querySelector('.kz-sent');
  s.querySelector('.de').innerHTML = kSent(k, m); setSay(s, k[m]); s.hidden = false;
  if (speak) say(k[m]);
}

/* ---------- eventos (delegados, valem para qualquer lição) ---------- */
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const ub = e.target.closest('.uhr [data-u]');
    if (ub) {
      const u = ub.closest('.uhr'), v = ub.dataset.u;
      if (v === 'quiz') uhrQuiz(u); else if (v === 'check') uhrCheck(u);
      else { uhrAdd(u, +v); if (!u.dataset.quiz) say(uhrText(+u.dataset.h, +u.dataset.m)); }
      return;
    }
    const kb = e.target.closest('.katz [data-k]');
    if (!kb) return;
    const kz = kb.closest('.katz'), v = kb.dataset.k, fb = kz.querySelector('.kz-fb');
    if (v.startsWith('m:')) {
      kz.dataset.mode = v.slice(2); kz.querySelectorAll('[data-k^="m:"]').forEach((b) => b.classList.toggle('on', b === kb));
      if (!kz.dataset.quiz) { katzGo(kz, kz.dataset.pos); katzShow(kz); }
    } else if (v === 'quiz') {
      const opts = KATZE.map((x) => x.p).filter((p) => p !== kz.dataset.pos), p = opts[Math.floor(Math.random() * opts.length)];
      kz.dataset.quiz = p; katzGo(kz, p);
      kz.querySelector('.kz-sent').hidden = true;
      fb.innerHTML = `<p><b>${kz.dataset.mode === 'wohin' ? 'Para onde a gata foi?' : 'Onde está a gata?'}</b> Toque na preposição certa.</p>`; fb.hidden = false;
    } else {
      const p = v.slice(2);
      if (kz.dataset.quiz) {
        const right = kz.dataset.quiz, ok = p === right; delete kz.dataset.quiz;
        const k = KATZE.find((x) => x.p === right);
        fb.innerHTML = ok ? '<p class="okmsg">✅ Isso!</p>' : `<p class="nomsg">❌ Quase! Não é <b>${p}</b>, é <b>${right}</b> (${k.pt}).</p>`;
        kz.dataset.score = (+kz.dataset.score || 0) + (ok ? 1 : 0); kz.dataset.tries = (+kz.dataset.tries || 0) + 1;
        fb.innerHTML += `<p class="mut">Acertos: ${kz.dataset.score} de ${kz.dataset.tries}</p>`;
        kz.querySelectorAll('[data-k^="p:"]').forEach((b) => b.classList.toggle('on', b.dataset.k === 'p:' + right));
        katzShow(kz);
      } else { fb.hidden = true; katzGo(kz, p); katzShow(kz); }
    }
  });
  document.addEventListener('pointerdown', (e) => {
    const svg = e.target.closest('.uhr-face'); if (!svg) return;
    uhrDrag = svg.closest('.uhr'); svg.setPointerCapture && svg.setPointerCapture(e.pointerId); uhrMove(e);
  });
  document.addEventListener('pointermove', uhrMove, { passive: false });
  const end = () => { if (uhrDrag && !uhrDrag.dataset.quiz) say(uhrText(+uhrDrag.dataset.h, +uhrDrag.dataset.m)); uhrDrag = null; };
  document.addEventListener('pointerup', end); document.addEventListener('pointercancel', () => { uhrDrag = null; });
  // primeira pintura dos componentes quando aparecem na tela
  new MutationObserver(() => {
    document.querySelectorAll('.uhr:not([data-ready])').forEach((u) => { u.dataset.ready = '1'; uhrSet(u, 3, 0); });
    document.querySelectorAll('.katz:not([data-ready])').forEach((k) => { k.dataset.ready = '1'; katzGo(k, 'auf', false); });
  }).observe(document.documentElement, { childList: true, subtree: true });
}
