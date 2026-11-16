/* Deutsch-Trilha — motor da plataforma. Tudo fica no localStorage deste dispositivo. */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const rnd = (n) => Math.floor(Math.random() * n);
const pick = (a) => a[rnd(a.length)];
const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sample = (a, n) => shuffle(a).slice(0, n);
const iso = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const today = () => iso(new Date());
const dayDiff = (a, b) => Math.round((new Date(b + 'T12:00') - new Date(a + 'T12:00')) / 864e5);
const norm = (s) => s.toLowerCase().replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
  .replace(/[.,!?;:…"()–-]/g, ' ').replace(/\s+/g, ' ').trim();
// Só conta como substantivo "artigo + uma palavra": expressões como "die Daumen drücken" ficam de fora.
const gender = (de) => { const m = /^(der|die|das) \S+$/.exec(de); return m ? { der: 'm', die: 'f', das: 'n' }[m[1]] : ''; };
const gcls = (de) => (gender(de) ? 'g-' + gender(de) : '');
const app = $('#app'), nav = $('#nav');

/* ---------- estado ---------- */
const KEY = 'deutschTrilha.v1';
const WEEKS = LESSONS.length / 6, TOTAL = WEEKS * 7;
const fresh = () => ({
  name: '', goal: 60, audio: true, start: null, xp: 0, streak: 0, best: 0, lastDay: null, freezes: 0,
  done: {}, cards: {}, stats: Object.fromEntries(IK.map((k) => [k, { n: 0, ok: 0, rn: 0, rok: 0, t: 0 }])),
  prior: {}, time: {}, daily: {}, badges: {}, diary: [], reviews: 0, maxCombo: 0, spoken: 0, perfect: 0, seen: {},
});
let S = fresh();
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch (e) { console.error('Falha ao ler o progresso salvo:', e); }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { console.error('Falha ao salvar o progresso:', e); toast('⚠️ Não consegui salvar o progresso neste navegador'); } }
const daily = () => (S.daily[today()] = S.daily[today()] || { lesson: false, cards: 0, perfect: false });

/* ---------- áudio ---------- */
const hasTTS = 'speechSynthesis' in window;
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let deVoice = null;
if (hasTTS) {
  // Entre as vozes alemãs, prefere as neurais do Edge ("Natural") e a do Chrome ("Google Deutsch"), que soam melhor que as do Windows.
  const rank = (v) => (/natural/i.test(v.name) ? 0 : /google/i.test(v.name) ? 1 : /^de-DE/i.test(v.lang) ? 2 : 3);
  const lv = () => { deVoice = speechSynthesis.getVoices().filter((v) => /^de/i.test(v.lang)).sort((a, b) => rank(a) - rank(b))[0] || null; };
  lv(); speechSynthesis.onvoiceschanged = lv;
}
function say(t, rate = 0.9) {
  if (!hasTTS || !S.audio) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(t.replace(/___/g, ' '));
  u.lang = 'de-DE'; if (deVoice) u.voice = deVoice; u.rate = rate; speechSynthesis.speak(u);
}
const spk = (t) => (hasTTS && S.audio ? `<button class="spk" data-say="${esc(t)}" aria-label="Ouvir">🔊</button>` : '');
document.addEventListener('click', (e) => { const b = e.target.closest('[data-say]'); if (b) say(b.dataset.say); });

/* ---------- trilha ---------- */
function dayInfo(d) {
  const w = Math.floor((d - 1) / 7), r = (d - 1) % 7;
  return { d, w, r, review: r === 6, li: w * 6 + r, level: phaseOf(w).id };
}
const phaseOf = (w) => PHASES.find((p) => w >= p.weeks[0] && w < p.weeks[1]) || PHASES[PHASES.length - 1];
const phaseDays = (p) => Array.from({ length: (p.weeks[1] - p.weeks[0]) * 7 }, (_, i) => p.weeks[0] * 7 + i + 1);
function currentDay() { for (let d = 1; d <= TOTAL; d++) if (!S.done[d]) return d; return null; }
const doneLessons = () => Object.keys(S.done).map(Number).map(dayInfo).filter((i) => !i.review).map((i) => LESSONS[i.li]);
const vocab = (k) => { const [i, j] = k.split(':'); return LESSONS[i].v[j]; };
const dueKeys = () => { const now = Date.now(); return Object.keys(S.cards).filter((k) => S.cards[k].due <= now); };

/* ---------- perfil de inteligências ---------- */
// Nota = 40% acerto nos exercícios + 60% retenção (lembrar a palavra dias depois nas cartas).
// A autoavaliação inicial entra só como ponto de partida e perde peso conforme os dados reais chegam.
function score(k) {
  const st = S.stats[k], p = (S.prior[k] || 3) / 5;
  const acc = (st.ok + 3 * p) / (st.n + 3), ret = (st.rok + 3 * p) / (st.rn + 3);
  return 0.4 * acc + 0.6 * ret;
}
const ranking = () => IK.map((k) => ({ k, s: score(k) })).sort((a, b) => b.s - a.s);
const activeInt = () => IK.filter((k) => k !== 'mus' || (hasTTS && S.audio));
function planInt(n) {
  const ks = activeInt();
  const out = shuffle(ks); // todas aparecem ao menos uma vez: é o que mantém a medição honesta
  const w = ks.map((k) => Math.pow(score(k), 3)), tot = w.reduce((a, b) => a + b, 0);
  while (out.length < n) { let r = Math.random() * tot, i = 0; while ((r -= w[i]) > 0 && i < ks.length - 1) i++; out.push(ks[i]); }
  return shuffle(out).slice(0, n).map((k) => ({ k, retry: false }));
}

/* ---------- gamificação ---------- */
const level = (xp = S.xp) => Math.floor(Math.sqrt(xp / 60)) + 1;
const TITLES = ['Anfängerin', 'Entdeckerin', 'Sprecherin', 'Erzählerin', 'Denkerin', 'Könnerin', 'Meisterin'];
const levelTitle = () => TITLES[Math.min(TITLES.length - 1, Math.floor((level() - 1) / 4))];
function toast(t) { const el = document.createElement('div'); el.className = 'toast'; el.textContent = t; $('#toasts').append(el); setTimeout(() => el.remove(), 3200); }
function addXP(n) { const l = level(); S.xp += n; if (level() > l) toast('⬆️ Nível ' + level() + ' — ' + levelTitle()); }
function shownStreak() {
  if (!S.lastDay) return 0;
  const gap = dayDiff(S.lastDay, today());
  return gap <= 1 || (gap === 2 && S.freezes > 0) ? S.streak : 0;
}
function markActive() {
  const t = today(); if (S.lastDay === t) return;
  const gap = S.lastDay ? dayDiff(S.lastDay, t) : 99;
  if (gap === 1) S.streak++;
  else if (gap === 2 && S.freezes > 0) { S.freezes--; S.streak++; toast('🧊 Proteção usada: sua sequência continua'); }
  else S.streak = 1;
  S.lastDay = t; S.best = Math.max(S.best, S.streak);
  toast('🔥 ' + S.streak + (S.streak === 1 ? ' dia' : ' dias') + ' de sequência');
  if (S.streak % 7 === 0 && S.freezes < 2) { S.freezes++; toast('🧊 Ganhou uma proteção de sequência'); }
}
const secsToday = () => S.time[today()] || 0;
function mission() {
  const d = daily();
  return { lesson: d.lesson, cards: dueKeys().length === 0, time: secsToday() >= S.goal * 60 };
}
function checkDaily() {
  const m = mission(), d = daily();
  if (m.lesson && m.cards && m.time && !d.perfect) { d.perfect = true; S.perfect++; addXP(30); toast('🌟 Dia perfeito! +30 XP'); checkBadges(); save(); }
}
const levelDone = (a, b) => { for (let d = a * 7 + 1; d <= b * 7; d++) if (!S.done[d]) return false; return true; };
const nDone = () => Object.keys(S.done).length;
const nWords = () => Object.keys(S.cards).length;
const BADGES = [
  ['first', '🌱', 'Erster Schritt', 'Primeira lição concluída', () => nDone() >= 1],
  ['s3', '🔥', '3 dias', 'Sequência de 3 dias', () => S.best >= 3],
  ['s7', '🔥', '1 semana', 'Sequência de 7 dias', () => S.best >= 7],
  ['s14', '🔥', '2 semanas', 'Sequência de 14 dias', () => S.best >= 14],
  ['s30', '🏅', '30 dias', 'Sequência de 30 dias', () => S.best >= 30],
  ['s60', '🏅', '60 dias', 'Sequência de 60 dias', () => S.best >= 60],
  ['s90', '👑', '90 dias', 'Sequência de 90 dias', () => S.best >= 90],
  ['w50', '📚', '50 palavras', '50 palavras no baralho', () => nWords() >= 50],
  ['w200', '📚', '200 palavras', '200 palavras no baralho', () => nWords() >= 200],
  ['w500', '📚', '500 palavras', '500 palavras no baralho', () => nWords() >= 500],
  ['combo', '⚡', 'Combo 10', '10 acertos seguidos', () => S.maxCombo >= 10],
  ['star', '⭐', 'Perfeita', 'Uma lição com 3 estrelas', () => Object.values(S.done).some((x) => x.s === 3)],
  ['week', '🗓️', 'Semana cheia', 'Um checkpoint semanal concluído', () => Object.keys(S.done).some((d) => dayInfo(+d).review)],
  ['rev', '🃏', '100 revisões', '100 cartas revisadas', () => S.reviews >= 100],
  ['all8', '🧠', 'Oito caminhos', 'Praticou as 8 inteligências', () => activeInt().every((k) => S.stats[k].n > 0)],
  ['diary', '📔', 'Tagebuch', '10 frases no diário', () => S.diary.length >= 10],
  ['speak', '🎤', 'Laut!', '10 frases faladas em voz alta', () => S.spoken >= 10],
  ['perfect', '🌟', 'Dia perfeito', 'Cumpriu as 3 missões do dia', () => S.perfect >= 1],
  ['a1', '🥉', 'A1', 'Nível A1 concluído', () => levelDone(0, 3)],
  ['a2', '🥈', 'A2', 'Nível A2 concluído', () => levelDone(3, 7)],
  ['b1', '🥇', 'B1', 'Nível B1 concluído', () => levelDone(7, 13)],
  ['b2', '🏆', 'B2', 'Nível B2 concluído', () => levelDone(13, 25)],
  ['c1', '💎', 'C1', 'Semanas de C1 concluídas', () => levelDone(25, 28)],
  ['c2', '👑', 'C2', 'Semanas de C2 concluídas', () => levelDone(28, 30)],
  ['x5', '🎬', 'Explorador', '5 conteúdos extras vistos', () => Object.keys(S.seen).length >= 5],
  ['x20', '🌍', 'Imersão', '20 conteúdos extras vistos', () => Object.keys(S.seen).length >= 20],
];
function checkBadges() {
  BADGES.forEach(([id, e, n, , test]) => { if (!S.badges[id] && test()) { S.badges[id] = today(); addXP(20); toast(e + ' Conquista: ' + n); } });
}

/* ---------- relógio de estudo ---------- */
let lastAct = Date.now();
['pointerdown', 'keydown'].forEach((ev) => addEventListener(ev, () => { lastAct = Date.now(); }));
setInterval(() => {
  if (!S.start || document.visibilityState !== 'visible' || Date.now() - lastAct > 90000) return;
  const t = today(); S.time[t] = (S.time[t] || 0) + 5;
  checkDaily(); if (S.time[t] % 30 === 0) save();
  const el = $('#clock'); if (el) el.textContent = clockText();
}, 5000);
const clockText = () => Math.floor(secsToday() / 60) + ' / ' + S.goal + ' min';

/* ---------- navegação ---------- */
let view = 'home';
function go(v, arg) {
  view = v; sess = null; if (hasTTS) speechSynthesis.cancel();
  const tabs = [['home', '🏠', 'Hoje'], ['trilha', '🗺️', 'Trilha'], ['cards', '🃏', 'Cartas'], ['extras', '🎬', 'Extras'], ['perfil', '🧠', 'Perfil']];
  const due = dueKeys().length;
  nav.hidden = !S.start;
  document.body.classList.toggle('has-nav', !!S.start);
  nav.innerHTML = `<div class="brand"><svg viewBox="0 0 64 64" width="26" height="26" aria-hidden="true">${isoCube(32, 22, 26, 24, '#ff8a3d')}</svg>Deutsch-Trilha</div>` +
    tabs.map(([id, e, n]) => `<button data-v="${id}" class="${id === v || (v === 'intro' && id === 'trilha') ? 'on' : ''}"><b>${e}</b><span>${n}</span>${id === 'cards' && due ? `<em>${due}</em>` : ''}</button>`).join('') +
    `<div class="nav-foot">🔥 ${shownStreak()} · ⭐ ${S.xp} XP</div>`;
  $$('button', nav).forEach((b) => (b.onclick = () => go(b.dataset.v)));
  ({ home, trilha, cards, perfil, intro, onboard, extras })[v](arg);
  if (v !== 'trilha') scrollTo(0, 0);
}

/* ---------- boas-vindas ---------- */
function onboard() {
  app.innerHTML = `<section class="hero"><div class="hero-bg">${heroArt('A1')}</div><div class="hero-card"><div class="hero-txt">
  <span class="eyebrow">A1 → C2 · Goethe-Institut</span><h1>Willkommen! 🇩🇪</h1>
  <p>Uma trilha de 30 semanas: do A1 ao B1 em 13 semanas, o B2 completo em mais 12 e o início do C1 e do C2. A plataforma mede quais tipos de exercício fazem você acertar e lembrar mais, e ajusta as lições a isso.</p></div></div></section>
  <div class="card"><h3>Como posso te chamar?</h3><input id="nm" placeholder="Seu nome" maxlength="30">
  <h3>Quanto tempo por dia?</h3>
  <select id="goal"><option value="30">30 min — ritmo leve</option><option value="60" selected>60 min — firme</option><option value="90">90 min — intenso</option><option value="120">120 min — ritmo de B1 em 3 meses</option><option value="180">180 min — imersão</option></select>
  <p class="mut">Sendo franca: o Goethe-Institut estima de 350 a 650 aulas de 45 min para chegar ao B1. Em 13 semanas isso pede cerca de 2 a 3 horas por dia, somando lição, cartas e alemão fora daqui (música, séries, conversa).</p></div>
  <div class="card"><h3>Ponto de partida do seu perfil</h3><p class="mut">De 1 (nada a ver) a 5 (muito eu). Serve só de palpite inicial: seus resultados reais passam a valer mais.</p>
  ${IK.map((k) => `<label>${INT[k].e} ${PRIOR_Q[k]}<input type="range" min="1" max="5" value="3" data-k="${k}"></label>`).join('')}</div>
  <button class="pri big" id="start">Começar a trilha</button>`;
  $('#start').onclick = () => {
    S.name = $('#nm').value.trim(); S.goal = +$('#goal').value; S.start = today();
    $$('input[type=range]').forEach((r) => { S.prior[r.dataset.k] = +r.value; });
    save(); go('home');
  };
}

/* ---------- conteúdos externos ---------- */
const curLevel = () => { const c = currentDay(); return c ? dayInfo(c).level : 'C2'; };
const fitsProfile = (x) => { const top = ranking().slice(0, 2).map((r) => r.k); return XT[x.t][2].some((k) => top.includes(k)); };
function pickExtras(lv, n) {
  const pool = EXTRAS.filter((x) => x.lvs.includes(lv) && !S.seen[x.id]);
  return [...pool.filter(fitsProfile), ...pool.filter((x) => !fitsProfile(x))].slice(0, n);
}
function extraCard(x) {
  const [e, tn] = XT[x.t], span = x.lvs[0] + (x.lvs.length > 1 ? '–' + x.lvs[x.lvs.length - 1] : '');
  return `<div class="xcard ${S.seen[x.id] ? 'seen' : ''}"><div class="row"><span class="tag">${e} ${tn}</span><span class="grow"></span><small class="mut">${span}</small></div>
  <h3>${esc(x.n)}</h3><p class="mut">${esc(x.d)}</p>
  <div class="row"><a class="btn" href="${x.link}" target="_blank" rel="noopener noreferrer">Abrir ↗</a>
  <button data-seen="${x.id}" ${S.seen[x.id] ? 'disabled' : ''}>${S.seen[x.id] ? '✓ Visto' : 'Já vi · +10 XP'}</button></div></div>`;
}
function wireSeen(root, rerender) {
  $$('[data-seen]', root).forEach((b) => (b.onclick = () => {
    const id = b.dataset.seen; if (S.seen[id]) return;
    S.seen[id] = today(); addXP(10); toast('🎬 +10 XP por estudar fora da plataforma');
    checkBadges(); save(); rerender();
  }));
}

/* ---------- hoje ---------- */
function miniPath(days) {
  return days.map((d, i) => {
    const info = dayInfo(d), st = i === 0 ? '#ff8a3d' : '#3c445c';
    const t = info.review ? 'Checkpoint' : LESSONS[info.li].de;
    return `${i ? '<span class="mline"></span>' : ''}<button class="mnode" data-d="${d}" ${i ? 'disabled' : ''}><svg viewBox="0 0 64 56" width="58" height="50" aria-hidden="true">${isoCube(32, 18, 24, 16, st, info.review ? '★' : String(d), 14, i ? '#9da2b0' : '#0e1525')}</svg><small>${esc(t.length > 18 ? t.slice(0, 17) + '…' : t)}</small></button>`;
  }).join('');
}
function home() {
  const cur = currentDay(), m = mission(), due = dueKeys().length, top = ranking()[0];
  const lv = level(), base = 60 * (lv - 1) ** 2, next = 60 * lv ** 2, d = cur && dayInfo(cur);
  const L = d && !d.review ? LESSONS[d.li] : null, streak = shownStreak(), lvId = d ? d.level : 'C2';
  const left = Math.max(0, S.goal - Math.floor(secsToday() / 60));
  const hasData = IK.some((k) => S.stats[k].n >= 5);
  const thumb = L && L.bd
    ? `<div class="thumb" style="--lc:${LVCOL[lvId]}"><span class="eyebrow">Frase-chave da lição</span>${breakdownHTML(L.bd, true)}<div class="row"><small class="grow">${esc(L.bd.pt)}</small>${spk(L.bd.t.map((x) => x.w).join(' '))}</div></div>`
    : `<div class="thumb center" style="--lc:${LVCOL[lvId]}">${levelBadge(lvId, 130)}</div>`;
  const heroTxt = d
    ? `<span class="eyebrow">${d.level} · Semana ${d.w + 1} · Dia ${cur} de ${TOTAL}</span>
      <h1>${d.review ? '🏁 Checkpoint da semana ' + (d.w + 1) : esc(L.de)}</h1>
      <p class="meta">⏱ ${d.review ? '25–35' : '30–45'} min</p>
      <p class="lead">${d.review ? 'Revisão misturada das 6 lições da semana, em 18 exercícios.' : esc(L.pt) + ' · ' + esc(L.gt)}</p>
      <button class="pri" id="goL">${m.lesson ? 'Adiantar o dia' : 'Começar o dia'} ${cur} →</button>`
    : `<span class="eyebrow">Trilha concluída</span><h1>🏆 Todas as lições feitas!</h1><p class="lead">Mantenha as cartas em dia, faça treinos extras e mergulhe nos conteúdos de apoio.</p>`;
  app.innerHTML = `<section class="hero"><div class="hero-bg">${heroArt(lvId)}</div>
  <div class="hero-card"><div class="hero-txt"><p class="hi">Hallo${S.name ? ', ' + esc(S.name) : ''}! 👋</p>${heroTxt}</div>${thumb}</div></section>
  <div class="strip">
    <div class="pill">Você está numa sequência de <span class="flame">${streak}</span> ${streak === 1 ? 'dia' : 'dias'}${S.freezes ? ` <span class="mut">· 🧊 ${S.freezes} proteção</span>` : ''}</div>
    <div class="pill grow"><span>⭐ ${S.xp} XP · Nível ${lv} <span class="mut">${levelTitle()}</span></span><div class="bar"><i style="width:${Math.round(((S.xp - base) / (next - base)) * 100)}%"></i></div><small class="mut">faltam ${next - S.xp}</small></div>
    <div class="pill">📚 ${nWords()} palavras</div>
  </div>
  <div class="grid2">
    <div class="card"><h3>Missão de hoje</h3>
    <div class="check"><span>${m.lesson ? '✅' : '⬜'}</span><span class="${m.lesson ? 'done' : ''}">Concluir a lição do dia</span></div>
    <div class="check"><span>${m.cards ? '✅' : '⬜'}</span><span class="${m.cards ? 'done' : ''}">Zerar as cartas de revisão${due ? ' (' + due + ')' : ''}</span></div>
    <div class="check"><span>${m.time ? '✅' : '⬜'}</span><span class="${m.time ? 'done' : ''}">Estudar <span id="clock">${clockText()}</span></span></div>
    <small class="mut">${daily().perfect ? '🌟 Dia perfeito conquistado!' : m.lesson && left > 0 ? `Faltam ${left} min. ${due ? 'Que tal zerar as cartas?' : 'Um treino extra fecha a conta.'}` : 'As três juntas valem o bônus de Dia Perfeito (+30 XP).'}</small>
    <div class="row" style="margin-top:12px">${due ? `<button id="goC">🃏 Revisar ${due}</button>` : ''}${nDone() ? '<button id="goX">💪 Treino extra</button>' : ''}</div></div>
    <div class="card"><h3>${INT[top.k].e} Seu ponto forte ${hasData ? 'até agora' : '(palpite inicial)'}</h3><p><b>${INT[top.k].n}</b></p>
    <p class="mut">Estou colocando mais exercícios de ${INT[top.k].d}. As outras sete continuam aparecendo para eu seguir medindo.</p>
    <button class="ghost" id="goP">Ver meu perfil →</button></div>
  </div>
  ${cur ? `<div class="card"><div class="row"><h3 class="grow">Sua jornada</h3><button class="ghost" id="goT">Ver trilha completa →</button></div><div class="mini">${miniPath(Array.from({ length: Math.min(5, TOTAL - cur + 1) }, (_, i) => cur + i))}</div></div>` : ''}
  <div class="row"><h2 class="grow">🎬 Para estudar fora daqui</h2><button class="ghost" id="goE">Ver todos →</button></div>
  <div class="xgrid">${pickExtras(curLevel(), 3).map(extraCard).join('')}</div>`;
  if ($('#goL')) $('#goL').onclick = () => go('intro', cur);
  if ($('#goC')) $('#goC').onclick = () => go('cards');
  if ($('#goX')) $('#goX').onclick = () => startSession('extra');
  if ($('#goT')) $('#goT').onclick = () => go('trilha');
  $('#goP').onclick = () => go('perfil'); $('#goE').onclick = () => go('extras');
  $$('.mnode:not([disabled])').forEach((b) => (b.onclick = () => go('intro', +b.dataset.d)));
  wireSeen(app, home);
}

/* ---------- trilha A1–C2 ---------- */
let trLevel = null;
function lvTabs(sel, attr) {
  return `<div class="lvtabs">${PHASES.map((x) => {
    const ds = phaseDays(x), pc = Math.round((ds.filter((d) => S.done[d]).length / ds.length) * 100);
    return `<button class="lvtab ${x.id === sel ? 'on' : ''}" ${attr}="${x.id}" style="--lc:${LVCOL[x.id]}"><i></i>${x.id}<small>${pc}%</small></button>`;
  }).join('')}</div>`;
}
function trilha(lvId) {
  const cur = currentDay() || TOTAL + 1;
  if (lvId) trLevel = lvId;
  if (!trLevel) trLevel = curLevel();
  const p = PHASES.find((x) => x.id === trLevel), days = phaseDays(p), nw = p.weeks[1] - p.weeks[0];
  const doneN = days.filter((d) => S.done[d]).length;
  const { svg, P } = pathSVG(days, cur);
  const weeks = Array.from({ length: nw }, (_, k) => { const w = p.weeks[0] + k; return `<li><b>Semana ${w + 1}:</b> ${LESSONS.slice(w * 6, w * 6 + 6).map((l) => esc(l.gt)).join(' · ')}</li>`; }).join('');
  app.innerHTML = `<h1>Sua jornada A1 → C2</h1><p class="mut">Níveis do Quadro Europeu, na estrutura do Goethe-Institut. Toque num bloco para abrir a lição.</p>
  ${lvTabs(trLevel, 'data-lv')}
  <div class="course">
    <aside class="ccard" style="--lc:${LVCOL[p.id]}">${levelBadge(p.id, 76)}
      <span class="eyebrow">${p.when} · ${p.ue}</span><h2>${p.n}</h2><p class="mut">${p.can}</p>
      <p>🧩 ${nw * 6} lições · 🏁 ${nw} checkpoints</p>
      <div class="row"><div class="bar"><i style="width:${Math.round((doneN / days.length) * 100)}%"></i></div><small>${doneN}/${days.length}</small></div>
      <details><summary>Gramática por semana</summary><ul class="wklist">${weeks}</ul></details>
      ${p.mods ? `<details><summary>Roteiro completo do nível</summary><ul>${p.mods.map((m) => `<li>${m}</li>`).join('')}</ul>
        <small class="mut">${p.part ? 'As semanas da trilha cobrem o início do nível. Para o restante do roteiro, use os conteúdos de apoio da aba Extras.' : 'Todos esses temas são cobertos pelas semanas da trilha.'}</small></details>` : ''}
      <small class="mut">UE = aula de 45 min, estimativa aproximada do Goethe-Institut.</small>
    </aside>
    <div class="pathwrap" id="pw">${svg}<div class="pop" id="pop" hidden></div></div>
  </div>`;
  $$('[data-lv]').forEach((b) => (b.onclick = () => { trilha(b.dataset.lv); scrollTo(0, 0); }));
  const pop = $('#pop');
  const open = (d) => {
    const info = dayInfo(d), pp = P.find((x) => x.d === d), L = info.review ? null : LESSONS[info.li], locked = d > cur;
    pop.innerHTML = `<button class="x" id="pclose" aria-label="Fechar">✕</button><span class="eyebrow">${info.level} · Semana ${info.w + 1} · Dia ${d}</span>
      <h3>${L ? esc(L.de) : '🏁 Checkpoint da semana ' + (info.w + 1)}</h3>
      <p class="mut">${L ? esc(L.pt) + ' · ' + esc(L.gt) : '18 exercícios misturando as 6 lições da semana.'}</p>
      ${S.done[d] ? `<p class="stars-s">${'★'.repeat(S.done[d].s)}${'☆'.repeat(3 - S.done[d].s)}</p>` : ''}
      ${locked ? `<p class="mut">🔒 Conclua o dia ${cur} para liberar.</p>` : `<button class="pri big" id="pgo">${S.done[d] ? 'Refazer' : 'Começar'} ${L ? 'lição' : 'checkpoint'}</button>`}`;
    pop.style.left = Math.max(0, Math.min(PATH_W - 280, pp.x - 140)) + 'px';
    pop.style.top = pp.y + 70 + 'px'; pop.hidden = false;
    $('#pclose').onclick = () => { pop.hidden = true; };
    if ($('#pgo')) { $('#pgo').onclick = () => go('intro', d); $('#pgo').focus(); }
  };
  $$('.node').forEach((n) => {
    n.onclick = () => open(+n.dataset.d);
    n.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(+n.dataset.d); } };
  });
  const c = $('.node.n-cur');
  if (c) c.scrollIntoView({ block: 'center' }); else scrollTo(0, 0);
}

/* ---------- extras ---------- */
let xLevel = null, xType = 'all';
function extras(lv) {
  if (lv) xLevel = lv;
  if (!xLevel) xLevel = curLevel();
  const top = ranking().slice(0, 2).map((r) => r.k);
  const list = EXTRAS.filter((x) => x.lvs.includes(xLevel) && (xType === 'all' || x.t === xType));
  const mine = list.filter(fitsProfile), rest = list.filter((x) => !fitsProfile(x));
  app.innerHTML = `<h1>🎬 Conteúdos de apoio</h1>
  <p class="mut">Músicas, filmes, séries, vídeos, podcasts, livros e leituras para usar o alemão fora da plataforma. Cada item marcado como visto vale 10 XP e conta para as conquistas.</p>
  ${lvTabs(xLevel, 'data-xl')}
  <div class="chips">${['all', ...Object.keys(XT)].map((t) => `<button class="chipb ${t === xType ? 'on' : ''}" data-xt="${t}">${t === 'all' ? 'Tudo' : XT[t][0] + ' ' + XT[t][1]}</button>`).join('')}</div>
  ${mine.length ? `<h2>Para o seu perfil <small class="mut">${top.map((k) => INT[k].e + ' ' + INT[k].n).join(' · ')}</small></h2><div class="xgrid">${mine.map(extraCard).join('')}</div>` : ''}
  ${rest.length ? `<h2>${mine.length ? 'Mais para o nível' : 'Para o nível'} ${xLevel}</h2><div class="xgrid">${rest.map(extraCard).join('')}</div>` : ''}
  ${list.length ? '' : '<p class="mut">Nada desse tipo para este nível. Experimente outro filtro.</p>'}
  <div class="card tip"><h3>💡 Como tirar mais proveito</h3><ul class="pts"><li>Use legenda em alemão, não em português. Se travar, volte 10 segundos e ouça de novo.</li><li>Anote três palavras novas de cada conteúdo e use cada uma numa frase no exercício de diário.</li><li>Repita em voz alta uma fala curta, imitando ritmo e entonação (shadowing).</li><li>Os links sem site oficial abrem uma busca, para você escolher a fonte que preferir.</li></ul></div>`;
  $$('[data-xl]').forEach((b) => (b.onclick = () => extras(b.dataset.xl)));
  $$('[data-xt]').forEach((b) => (b.onclick = () => { xType = b.dataset.xt; extras(); }));
  wireSeen(app, () => extras());
}

/* ---------- abertura da lição ---------- */
function intro(day) {
  const d = dayInfo(day);
  if (d.review) {
    const ls = LESSONS.slice(d.w * 6, d.w * 6 + 6);
    app.innerHTML = `<button class="ghost back" id="bk">← Trilha</button><div class="lhead" style="--lc:${LVCOL[d.level]}">${levelBadge(d.level, 60)}<div><span class="eyebrow">${d.level} · Dia ${day}</span><h1>🏁 Checkpoint da semana ${d.w + 1}</h1></div></div>
    <p>18 exercícios misturando tudo o que você viu nesta semana:</p><ul>${ls.map((l) => `<li><b>${esc(l.de)}</b> — ${esc(l.gt)}</li>`).join('')}</ul>
    <button class="pri big" id="st">Começar o checkpoint</button>`;
    $('#st').onclick = () => startSession('review', day);
    $('#bk').onclick = () => go('trilha');
    return;
  }
  const l = LESSONS[d.li];
  app.innerHTML = `<button class="ghost back" id="bk">← Trilha</button>
  <div class="lhead" style="--lc:${LVCOL[d.level]}">${levelBadge(d.level, 60)}<div><span class="eyebrow">${d.level} · Semana ${d.w + 1} · Dia ${day}</span><h1>${esc(l.de)}</h1><p class="mut">${esc(l.pt)}</p></div></div>
  <div class="card"><h3>🧩 Gramática: ${esc(l.gt)}</h3><p>${esc(l.gx)}</p>
  ${l.pts.length ? `<h3 style="margin-top:14px">Como funciona</h3><ul class="pts">${l.pts.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
  <h3 style="margin-top:14px">Exemplos</h3>
  ${l.ge.map((e) => `<p>${spk(e.de)}<span class="de">${esc(e.de)}</span><br><small>${esc(e.pt)}</small></p>`).join('')}
  ${l.ex.length ? `<h3 style="margin-top:14px">No dia a dia</h3>${l.ex.map((e) => `<p>${spk(e.de)}<span class="de">${esc(e.de)}</span><br><small>${esc(e.pt)}</small></p>`).join('')}` : ''}</div>
  ${l.bd ? `<div class="card"><h3>🔎 Frase desmontada</h3><p class="mut">Cada peça da frase e o papel que ela cumpre. As cores são as mesmas em todas as lições.</p>${breakdownHTML(l.bd)}</div>` : ''}
  <div class="card"><h3>📚 Vocabulário</h3><small>Cores: <span class="g-m">der</span> · <span class="g-f">die</span> · <span class="g-n">das</span></small>
  <table>${l.v.map((v, j) => `${v.x && !l.v[j - 1].x ? '<tr><td colspan="3"><small>Vocabulário ampliado</small></td></tr>' : ''}<tr><td>${spk(v.de)}</td><td class="de ${gcls(v.de)}">${esc(v.de)}</td><td>${v.em} ${esc(v.pt)}</td></tr>`).join('')}</table></div>
  <div class="card"><h3>💬 Conversa</h3>
  ${l.dlg.map((x, i) => `<div class="bubble ${i % 2 ? 'b' : ''}">${spk(x.de)}<span class="de">${esc(x.de)}</span><small>${esc(x.pt)}</small></div>`).join('')}</div>
  <button class="pri big" id="st">Praticar (14 exercícios)</button>
  <h2>🎬 Para ir além</h2><div class="xgrid">${pickExtras(d.level, 2).map(extraCard).join('')}</div>`;
  $('#st').onclick = () => startSession('lesson', day);
  $('#bk').onclick = () => go('trilha');
  wireSeen(app, () => intro(day));
}

/* ---------- sessão de exercícios ---------- */
let sess = null;
const newCard = () => { const t = new Date(); t.setHours(24, 0, 0, 0); return { due: t.getTime(), int: 0, ease: 2.3, reps: 0, lapses: 0, mods: {} }; };
function startSession(kind, day) {
  let ctxs;
  if (kind === 'lesson') ctxs = [LESSONS[dayInfo(day).li]];
  else if (kind === 'review') { const w = dayInfo(day).w; ctxs = LESSONS.slice(w * 6, w * 6 + 6); }
  else ctxs = sample(doneLessons(), 6);
  if (kind === 'lesson') ctxs[0].v.forEach((v) => { if (!S.cards[v.k]) S.cards[v.k] = newCard(); });
  const n = kind === 'lesson' ? 14 : kind === 'review' ? 18 : 10;
  sess = { kind, day, ctxs, queue: planInt(n), doneN: 0, first: 0, firstOk: 0, combo: 0, maxCombo: 0, xp: 0, re: 0, by: {}, onEnter: null };
  view = 'run'; nav.hidden = true; nextEx();
}
const PRAISE = ['Richtig!', 'Sehr gut!', 'Genau!', 'Super!', 'Prima!', 'Toll!'];
function nextEx() {
  if (!sess.queue.length) return finish();
  const it = sess.queue.shift(), les = pick(sess.ctxs), I = INT[it.k], my = sess;
  const pct = Math.round((sess.doneN / (sess.doneN + sess.queue.length + 1)) * 100);
  app.innerHTML = `<div class="runtop"><button class="x" id="quit" aria-label="Sair">✕</button><div class="bar"><i style="width:${pct}%"></i></div><span class="combo">${sess.combo > 1 ? '🔥' + sess.combo : ''}</span></div>
  <div class="chip">${I.e} ${I.n}${it.retry ? ' · mais uma chance' : ''}</div><div id="ex"></div><div id="fb"></div>`;
  $('#quit').onclick = () => { if (confirm('Sair da sessão? O que você já respondeu fica registrado.')) go('home'); };
  const t0 = Date.now();
  GEN[it.k](les, $('#ex'), (ok, keys = [], ans = '', sayT = '', why = '') => {
    if (sess !== my) return;
    const st = S.stats[it.k]; st.n++; if (ok) st.ok++; st.t += (Date.now() - t0) / 1000;
    keys.forEach((k) => { const c = S.cards[k]; if (c) c.mods[it.k] = (c.mods[it.k] || 0) + 1; });
    if (!it.retry) { sess.first++; if (ok) sess.firstOk++; }
    const by = (sess.by[it.k] = sess.by[it.k] || [0, 0]); by[1]++; if (ok) by[0]++;
    let gain = 0;
    if (ok) { sess.combo++; sess.maxCombo = Math.max(sess.maxCombo, sess.combo); S.maxCombo = Math.max(S.maxCombo, sess.combo); gain = 10 + Math.min(sess.combo, 5) * 2; sess.xp += gain; addXP(gain); if (sess.combo === 5 || sess.combo === 10) toast('🔥 Combo de ' + sess.combo + '!'); }
    else { sess.combo = 0; if (sess.re < 6) { sess.re++; sess.queue.push({ k: it.k, retry: true }); } }
    sess.doneN++; checkBadges(); save();
    $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}"><b>${ok ? pick(PRAISE) + ' +' + gain + ' XP' : 'Quase! Essa volta no fim da sessão.'}</b>
    ${ans ? `<p>${ok ? '' : '<b>Certo:</b> '}${esc(ans)}</p>` : ''}
    ${!ok && why ? `<div class="why"><b>Por que errou</b>${why}</div>` : ''}
    <div class="row">${sayT ? spk(sayT) : ''}${sayT && SR ? '<button id="mic">🎤 Falar em voz alta</button>' : ''}<span class="grow"></span><button class="pri" id="next">Continuar</button></div><p id="micres" class="mut"></p></div>`;
    $('#next').onclick = nextEx;
    setTimeout(() => { if (sess === my) sess.onEnter = nextEx; }, 250);
    if ($('#mic')) $('#mic').onclick = () => listen(sayT, $('#micres'), $('#mic'));
    $('#next').scrollIntoView({ block: 'nearest' });
  });
}
addEventListener('keydown', (e) => { if (e.key === 'Enter' && sess && sess.onEnter) { const f = sess.onEnter; sess.onEnter = null; f(); } });
function listen(target, out, btn) {
  try {
    const r = new SR(); r.lang = 'de-DE';
    r.onresult = (e) => {
      const t = e.results[0][0].transcript, a = norm(target).split(' '), b = norm(t).split(' ');
      const hit = a.filter((w) => b.includes(w)).length / a.length;
      out.innerHTML = `Entendi: <i>${esc(t)}</i> — ${Math.round(hit * 100)}% ${hit >= 0.7 ? '✅ +5 XP' : 'tente de novo'}`;
      if (hit >= 0.7) { btn.disabled = true; addXP(5); S.spoken++; checkBadges(); save(); }
    };
    r.onerror = () => { out.textContent = 'Não consegui ouvir. Confira a permissão do microfone.'; };
    out.textContent = '🎙️ Ouvindo…'; r.start();
  } catch (err) { console.error('Erro no reconhecimento de voz:', err); out.textContent = 'Reconhecimento de voz indisponível neste navegador.'; }
}
function finish() {
  const s = sess, acc = s.first ? s.firstOk / s.first : 1, stars = acc >= 0.9 ? 3 : acc >= 0.7 ? 2 : 1;
  let bonus = 20;
  if (s.kind !== 'extra') {
    bonus = (s.kind === 'review' ? 100 : 50) + stars * 10;
    S.done[s.day] = { s: Math.max(stars, (S.done[s.day] || {}).s || 0), d: today() };
    daily().lesson = true;
  }
  addXP(bonus); markActive(); checkBadges(); checkDaily(); save();
  const due = dueKeys().length, cur = currentDay(), left = Math.max(0, S.goal - Math.floor(secsToday() / 60));
  sess = null; nav.hidden = false;
  app.innerHTML = `<div class="stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
  <h1 style="text-align:center">${s.kind === 'extra' ? 'Treino concluído!' : s.kind === 'review' ? 'Checkpoint concluído!' : 'Lição concluída!'}</h1>
  <div class="stats"><div class="stat"><b>+${s.xp + bonus}</b><small>XP</small></div><div class="stat"><b>${Math.round(acc * 100)}%</b><small>de primeira</small></div><div class="stat"><b>🔥 ${s.maxCombo}</b><small>maior combo</small></div></div>
  <div class="card"><h3>Como você foi em cada caminho</h3>
  ${Object.entries(s.by).map(([k, [o, n]]) => `<div class="prow"><span>${INT[k].e} ${INT[k].n}</span><div class="bar"><i style="width:${Math.round((o / n) * 100)}%"></i></div><small>${o}/${n}</small></div>`).join('')}
  ${s.kind === 'lesson' ? '<small>As ' + s.ctxs[0].v.length + ' palavras da lição entram nas suas cartas a partir de amanhã. É nessa revisão que eu meço a retenção.</small>' : ''}</div>
  ${left > 0 ? `<p class="mut">Faltam ${left} min para a sua meta de hoje.</p>` : '<p class="mut">Meta de tempo de hoje cumprida. 👏</p>'}
  ${due ? `<button class="pri big" id="fC">🃏 Revisar ${due} cartas agora</button>` : ''}
  <button class="big" id="fX" style="margin-top:8px">💪 Treino extra</button>
  ${cur ? `<button class="big" id="fN" style="margin-top:8px">Adiantar: dia ${cur}</button>` : ''}
  <button class="big" id="fH" style="margin-top:8px">Voltar ao início</button>`;
  if ($('#fC')) $('#fC').onclick = () => go('cards');
  $('#fX').onclick = () => startSession('extra');
  if ($('#fN')) $('#fN').onclick = () => go('intro', cur);
  $('#fH').onclick = () => go('home');
  scrollTo(0, 0);
}

/* ---------- geradores de exercício (um por inteligência) ---------- */
function mcq(el, html, opts, correct, cb, cls = '') {
  el.innerHTML = html + `<div class="opts ${cls}">${opts.map((o, i) => `<button data-i="${i}">${esc(o)}</button>`).join('')}</div>`;
  const bs = $$('.opts button', el);
  bs.forEach((b) => (b.onclick = () => {
    const ok = opts[b.dataset.i] === correct;
    bs.forEach((x) => { x.disabled = true; if (opts[x.dataset.i] === correct) x.classList.add('ok'); });
    if (!ok) b.classList.add('no');
    cb(ok, opts[b.dataset.i]);
  }));
}
const UML = `<div class="uml">${['ä', 'ö', 'ü', 'ß'].map((c) => `<button type="button">${c}</button>`).join('')}</div>`;
function wireUml(el, inp) { $$('.uml button', el).forEach((b) => (b.onclick = () => { inp.value += b.textContent; inp.focus(); })); }
function typed(el, html, answer, cb) {
  el.innerHTML = html + `<input id="inp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Digite em alemão">${UML}<button class="pri" id="chk">Verificar</button>`;
  const inp = $('#inp', el); inp.focus(); wireUml(el, inp);
  const goChk = () => { if (!inp.value.trim()) return; inp.disabled = true; $('#chk', el).disabled = true; cb(norm(inp.value) === norm(answer), inp.value.trim()); };
  $('#chk', el).onclick = goChk;
  inp.onkeydown = (e) => { if (e.key === 'Enter') { e.stopPropagation(); goChk(); } };
}
const fill = (c) => c.q.replace('___', c.a);
function order(el, s, cb) {
  const toks = s.de.split(' ');
  let pool = shuffle(toks.map((t, i) => ({ t, i }))), ans = [];
  if (pool.map((p) => p.t).join(' ') === s.de) pool.reverse();
  const draw = () => {
    const btn = (p) => `<button data-i="${p.i}">${esc(p.t)}</button>`;
    el.innerHTML = `<p class="q">Monte a frase na ordem certa:<b>${esc(s.pt)}</b></p><div class="line">${ans.map(btn).join('')}</div><div class="pool">${pool.map(btn).join('')}</div><button class="pri" id="chk" ${pool.length ? 'disabled' : ''}>Verificar</button>`;
    $$('.pool button', el).forEach((b) => (b.onclick = () => { ans.push(pool.splice(pool.findIndex((p) => p.i == b.dataset.i), 1)[0]); draw(); }));
    $$('.line button', el).forEach((b) => (b.onclick = () => { pool.push(ans.splice(ans.findIndex((p) => p.i == b.dataset.i), 1)[0]); draw(); }));
    $('#chk', el).onclick = () => { $$('button', el).forEach((b) => (b.disabled = true)); const g = ans.map((p) => p.t).join(' '); cb(g === s.de, g); };
  };
  draw();
}

/* ---------- explicações de erro ---------- */
const q = (s) => `«${esc(s)}»`;
const ruleOf = (les) => `<p><b>Regra da lição</b> (${esc(les.gt)}): ${esc(les.gx)}</p>`;
function genderHint(de) {
  const art = de.split(' ')[0], n = de.replace(/^\S+ /, '');
  const R = [['die', /(ung|heit|keit|schaft|ion|tät|ik|ie|ei|ur|enz|anz)$/, 'é quase sempre feminina'], ['das', /(chen|lein|ment|um)$/, 'é neutra'], ['der', /(ismus|ling|ist|ant|ent|or|ig|ich)$/, 'é masculina']];
  for (const [a, re, txt] of R) { const m = re.exec(n); if (m && a === art) return ` Dica: a terminação -${m[1]} ${txt}.`; }
  if (art === 'die' && /e$/.test(n)) return ' Dica: a maioria das palavras terminadas em -e é feminina.';
  return ' Aqui o gênero não segue regra visível: decore a palavra sempre junto com o artigo e a cor.';
}
function lev(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
const flat = (s) => s.toLowerCase().replace(/[äöü]/g, (c) => ({ ä: 'a', ö: 'o', ü: 'u' }[c])).replace(/ß/g, 'ss').trim();
function whyVocab(g, v, les) {
  const a = v.de, isNoun = gender(a), art = a.split(' ')[0], noun = a.replace(/^\S+ /, '');
  if (isNoun) {
    const m = /^(der|die|das|ein|eine|den|dem)\s+(.+)$/i.exec(g);
    if (m && norm(m[2]) === norm(noun)) return `<p>O substantivo está certo, mas o artigo é <b>${art}</b>, não <i>${esc(m[1])}</i>. Em alemão o gênero raramente coincide com o do português.${genderHint(a)}</p>`;
    if (norm(g) === norm(noun)) return `<p>Faltou o artigo. O gênero faz parte da palavra e você vai precisar dele para declinar: <b>${esc(a)}</b>.${genderHint(a)}</p>`;
  }
  if (flat(g) === flat(a)) return `<p>Quase: o problema está no trema ou no ß. Você escreveu ${q(g)} e o certo é <b>${esc(a)}</b>. O trema muda o som (ä soa como "é", ö e ü são feitos com os lábios arredondados) e pode mudar o sentido.</p>`;
  if (lev(norm(g), norm(a)) <= 2) return `<p>Erro de grafia: você escreveu ${q(g)} e o certo é <b>${esc(a)}</b>. Compare letra por letra e ouça a palavra de novo.</p>`;
  const other = les.v.find((x) => x !== v && norm(x.de) === norm(g));
  if (other) return `<p>${q(g)} existe, mas significa ${q(other.pt)}. Para ${q(v.pt)} a palavra é <b>${esc(a)}</b>.</p>`;
  return `<p>Você escreveu ${q(g)}. A palavra para ${q(v.pt)} é <b>${esc(a)}</b>. Ela volta nas cartas de revisão.</p>`;
}
function whyCloze(les, c, g) {
  return `<p>Você respondeu ${q(g)}. O certo é <b>${esc(c.a)}</b>${c.why ? ': ' + esc(c.why) : '.'}</p>${ruleOf(les)}`;
}
function whyOrder(les, s, g) {
  const a = s.de.split(' '), b = g.split(' '), i = a.findIndex((t, j) => t !== b[j]);
  return `<p>Sua frase: ${q(g)}. A partir da ${i + 1}ª palavra a ordem se perde: você pôs ${q(b[i] || '')}, mas ali vai <b>${esc(a[i])}</b>.</p>
  <p>Lembre: na oração principal o verbo conjugado é sempre o 2º elemento; infinitivos, particípios e prefixos separáveis vão para o fim; depois de weil, dass, wenn, ob e dos relativos, o verbo conjugado vai para o fim.</p>${ruleOf(les)}`;
}
function whyPairs(bad) {
  return `<p>Você hesitou nestas palavras. Releia e ouça cada uma:</p><ul>${[...bad].map(vocab).map((v) => `<li>${spk(v.de)}<b class="${gcls(v.de)}">${esc(v.de)}</b> → ${esc(v.pt)}</li>`).join('')}</ul>`;
}
function whyHear(pool, tgt, g) {
  const c = pool.find((p) => p.de === g) || { de: g, pt: '' };
  return `<p>Você marcou ${spk(c.de)}${q(c.de)} (${esc(c.pt)}), mas o áudio dizia ${spk(tgt.de)}<b>${esc(tgt.de)}</b> (${esc(tgt.pt)}). Toque nos dois alto-falantes e compare os sons: preste atenção nas vogais com trema, no ch, no z (soa "ts") e no w (soa "v").</p>`;
}
function whySpeed(missed) {
  return `<p>Estas escaparam (${missed.some((m) => m[1] === 'tempo') ? 'algumas por tempo, ' : ''}reveja antes da próxima rodada):</p><ul>${missed.map(([v, r]) => `<li>${spk(v.de)}<b class="${gcls(v.de)}">${esc(v.de)}</b> → ${esc(v.pt)} <small>(${r === 'tempo' ? 'tempo esgotado' : 'opção errada'})</small></li>`).join('')}</ul>`;
}
function whyReply(a, b, ds, g) {
  const c = ds.find((d) => d.de === g) || { de: g, pt: '' };
  return `<p>A fala era ${q(a.de)} (${esc(a.pt)}).</p><p>Você escolheu ${q(c.de)}, que significa ${q(c.pt)}: a frase está correta, mas não responde ao que foi dito.</p><p>A resposta que encaixa é <b>${esc(b.de)}</b> (${esc(b.pt)}). Em diálogo, olhe primeiro para o verbo e a palavra interrogativa da pergunta: é a eles que a resposta precisa reagir.</p>`;
}
const GEN = {
  // Linguística: produzir a palavra ou a forma certa por escrito.
  lin(les, el, done) {
    if (Math.random() < 0.55) {
      const v = pick(les.v);
      typed(el, `<p class="q">Como se diz em alemão?<b>${v.em} ${esc(v.pt)}</b></p>${gender(v.de) ? '<p class="hint">Substantivo: escreva com o artigo.</p>' : ''}`, v.de, (ok, g) => done(ok, [v.k], v.de + ' = ' + v.pt + (ok && gender(v.de) && g !== v.de && g.toLowerCase() === v.de.toLowerCase() ? ' · Lembre: substantivos levam inicial maiúscula.' : ''), v.de, whyVocab(g, v, les)));
    } else {
      const c = pick(les.cz);
      typed(el, `<p class="q">Complete a lacuna:<b>${esc(c.q)}</b></p><p class="hint">${esc(les.gt)}</p>`, c.a, (ok, g) => done(ok, [], fill(c), fill(c), whyCloze(les, c, g)));
    }
  },
  // Lógico-matemática: aplicar a regra ou reconstruir a estrutura da frase.
  log(les, el, done) {
    const sents = [...les.ge, ...les.ex, ...les.dlg].filter((s) => { const n = s.de.split(' ').length; return n >= 3 && n <= 9; });
    const r = Math.random();
    if (les.bd && r < 0.34) {
      // Função da palavra: usa a frase desmontada da lição.
      const t = les.bd.t, idx = t.map((_, i) => i).filter((i) => t.filter((y) => y.w === t[i].w).length === 1);
      const i = pick(idx), tk = t[i], right = roleName(tk.c);
      const pool = [...new Set([...t.map((x) => x.c), 'S', 'V', 'OA', 'OD', 'PR', 'INF', 'PT', 'PX', 'C', 'NEG'].map(roleName))].filter((n) => n !== right);
      const sent = t.map((x, j) => (j === i ? `<mark>${esc(x.w)}</mark>` : esc(x.w))).join(' ');
      mcq(el, `<p class="q">Qual é a função da palavra destacada?<b class="bdq">${sent}</b></p><p class="hint">${esc(les.bd.pt)}</p>`, shuffle([right, ...sample(pool, 2)]), right,
        (ok, g) => done(ok, [], `«${tk.w}» = ${right}`, t.map((x) => x.w).join(' '),
          `<p>Você marcou ${q(g)}, mas «${esc(tk.w)}» é <b>${esc(right)}</b>: ${esc(RHELP[tk.c] || '')}.${tk.n ? ' Nesta frase: ' + esc(tk.n) + '.' : ''}</p>${breakdownHTML(les.bd, true)}`), 'col');
    } else if (sents.length && r < 0.67) { const s = pick(sents); order(el, s, (ok, g) => done(ok, [], s.de + ' = ' + s.pt, s.de, whyOrder(les, s, g))); }
    else { const c = pick(les.cz); mcq(el, `<p class="q">Qual forma segue a regra?<b>${esc(c.q)}</b></p><p class="hint">${esc(les.gt)}</p>`, shuffle([c.a, ...c.w]), c.a, (ok, g) => done(ok, [], fill(c), fill(c), whyCloze(les, c, g))); }
  },
  // Espacial: memória visual de pares, com as cores de gênero.
  esp(les, el, done) {
    const vs = sample(les.v, 5);
    const tiles = shuffle(vs.flatMap((v) => [{ k: v.k, s: 'de', t: v.de }, { k: v.k, s: 'pt', t: (v.em ? v.em + ' ' : '') + v.pt }]));
    let sel = null, miss = 0, left = vs.length; const bad = new Set();
    el.innerHTML = `<p class="q">Encontre os pares</p><p class="hint">Cores: <span class="g-m">der</span> · <span class="g-f">die</span> · <span class="g-n">das</span></p><div class="grid">${tiles.map((t, i) => `<button data-i="${i}" class="tile ${t.s === 'de' ? gcls(t.t) : ''}">${esc(t.t)}</button>`).join('')}</div>`;
    $$('.tile', el).forEach((b) => (b.onclick = () => {
      if (!sel) { sel = b; b.classList.add('sel'); return; }
      if (sel === b) { b.classList.remove('sel'); sel = null; return; }
      const a = sel, o = tiles[a.dataset.i], t = tiles[b.dataset.i]; sel = null;
      if (o.k === t.k && o.s !== t.s) {
        [a, b].forEach((x) => { x.classList.remove('sel'); x.classList.add('ok'); x.disabled = true; });
        if (!--left) done(miss <= 1, vs.map((v) => v.k), miss ? miss + ' tentativa(s) errada(s)' : 'Todos os pares de primeira!', '', whyPairs(bad));
      } else { miss++; bad.add(o.k); bad.add(t.k); [a, b].forEach((x) => x.classList.add('no')); setTimeout(() => [a, b].forEach((x) => x.classList.remove('no', 'sel')), 400); }
    }));
  },
  // Musical: reconhecer pelo som.
  mus(les, el, done) {
    const pool = Math.random() < 0.4 ? les.dlg : sample(les.v, 4), tgt = pick(pool);
    mcq(el, `<p class="q">Ouça e escolha o que foi dito</p><div class="row"><button class="play" id="play" aria-label="Ouvir">🔊</button><button id="slow">🐢 Devagar</button></div>`,
      shuffle(pool.map((p) => p.de)), tgt.de, (ok, g) => done(ok, tgt.k ? [tgt.k] : [], tgt.de + ' = ' + tgt.pt, tgt.de, whyHear(pool, tgt, g)), pool === les.dlg ? 'col' : '');
    $('#play', el).onclick = () => say(tgt.de); $('#slow', el).onclick = () => say(tgt.de, 0.6);
    setTimeout(() => { if (el.isConnected) say(tgt.de); }, 350);
  },
  // Corporal-cinestésica: resposta rápida contra o relógio.
  cor(les, el, done) {
    const vs = sample(les.v, 6), missed = []; let i = 0, hit = 0, tm;
    const step = () => {
      if (!el.isConnected) return;
      if (i >= vs.length) { el.innerHTML = `<div class="word">${hit}/6</div>`; return done(hit >= 5, vs.map((v) => v.k), hit + ' de 6 no tempo' + (hit >= 5 ? '' : ' (precisa de 5)'), '', whySpeed(missed)); }
      const v = vs[i], opts = shuffle([v.pt, ...sample(les.v.filter((x) => x !== v), 2).map((x) => x.pt)]);
      el.innerHTML = `<p class="q">⚡ Rodada relâmpago ${i + 1}/6 — 5 segundos por palavra</p><div class="timer"><i></i></div><div class="word ${gcls(v.de)}">${esc(v.de)}</div><div class="opts col">${opts.map((o, j) => `<button data-j="${j}">${esc(o)}</button>`).join('')}</div>`;
      const bs = $$('.opts button', el);
      const end = (ok, b) => { clearTimeout(tm); bs.forEach((x) => { x.disabled = true; if (opts[x.dataset.j] === v.pt) x.classList.add('ok'); }); if (b && !ok) b.classList.add('no'); if (ok) hit++; else missed.push([v, b ? 'opcao' : 'tempo']); i++; setTimeout(step, 550); };
      tm = setTimeout(() => end(false), 5000);
      bs.forEach((b) => (b.onclick = () => end(opts[b.dataset.j] === v.pt, b)));
    };
    step();
  },
  // Interpessoal: reagir dentro de uma conversa.
  int(les, el, done) {
    const p = rnd(2) * 2, a = les.dlg[p], b = les.dlg[p + 1];
    const near = LESSONS.filter((l) => l !== les && Math.abs(l.i - les.i) < 12);
    const ds = sample(near, 2).map((l) => l.dlg[1 + rnd(2) * 2]);
    mcq(el, `<p class="q">Qual é a melhor resposta nesta conversa?</p><div class="bubble">${spk(a.de)}<span class="de">${esc(a.de)}</span><small>${esc(a.pt)}</small></div>`,
      shuffle([b.de, ...ds.map((d) => d.de)]), b.de, (ok, g) => done(ok, [], b.de + ' = ' + b.pt, b.de, whyReply(a, b, ds, g)), 'col');
    setTimeout(() => { if (el.isConnected) say(a.de); }, 350);
  },
  // Intrapessoal: ligar a língua à própria vida e se autoavaliar.
  intra(les, el, done) {
    const v = pick(les.v), m = pick([...les.ge, ...les.ex]);
    el.innerHTML = `<p class="q">Escreva uma frase verdadeira sobre você usando:<b class="${gcls(v.de)}">${esc(v.de)}</b></p><p class="hint">${esc(v.pt)} · estrutura do dia: ${esc(les.gt)}</p><textarea id="ta" rows="3" spellcheck="false"></textarea>${UML}<button class="pri" id="chk">Pronto</button><div id="self"></div>`;
    const ta = $('#ta', el); ta.focus(); wireUml(el, ta);
    $('#chk', el).onclick = () => {
      const text = ta.value.trim(); if (text.split(/\s+/).length < 2) return;
      ta.disabled = true; $('#chk', el).disabled = true;
      $('#self', el).innerHTML = `<p>Modelo do dia: ${spk(m.de)}<span class="de">${esc(m.de)}</span> <small>${esc(m.pt)}</small></p><p>Compare com a sua frase. Como foi?</p><div class="opts col"><button data-r="2">Saiu fácil</button><button data-r="1">Saiu com esforço</button><button data-r="0">Não consegui montar</button></div>`;
      $$('#self button[data-r]', el).forEach((b) => (b.onclick = () => {
        $$('#self button', el).forEach((x) => (x.disabled = true)); b.classList.add('sel');
        S.diary.push({ d: today(), t: text, l: les.i });
        done(+b.dataset.r > 0, [v.k], 'Sua frase foi para o diário.', text,
          `<p>Sem problema: travar aqui mostra o que ainda falta fixar. Use o modelo como molde e troque só as palavras pelo seu caso: <b>${esc(m.de)}</b> (${esc(m.pt)}). A palavra pedida era <b>${esc(v.de)}</b> (${esc(v.pt)}).</p>${ruleOf(les)}`);
      }));
    };
  },
  // Naturalista: classificar por gênero ou achar o intruso do tema.
  nat(les, el, done) {
    const nouns = les.v.filter((v) => gender(v.de) && !/^die (Eltern|Leute|Schmerzen|Nachrichten|Nebenkosten|Kenntnisse|Zähne|Geschwister)/.test(v.de));
    if (nouns.length && Math.random() < 0.5) {
      const v = pick(nouns), art = v.de.split(' ')[0];
      mcq(el, `<p class="q">Em qual família esta palavra entra?<b>${v.em} ${esc(v.de.replace(/^\w+ /, ''))}</b></p><p class="hint">${esc(v.pt)}</p>`, ['der', 'die', 'das'], art, (ok, g) => done(ok, [v.k], v.de + ' = ' + v.pt, v.de, `<p>Você escolheu <i>${esc(g)}</i>, mas é <b class="${gcls(v.de)}">${esc(v.de)}</b>. O gênero em alemão não acompanha o do português (${esc(v.pt)}).${genderHint(v.de)}</p>`));
    } else {
      const far = LESSONS.filter((l) => Math.abs(l.i - les.i) >= 3), from = pick(far), odd = pick(from.v), vs = sample(les.v, 3);
      mcq(el, `<p class="q">Qual palavra <u>não</u> pertence ao grupo?<b>${esc(les.pt)}</b></p>`, shuffle([...vs.map((v) => v.de), odd.de]), odd.de,
        (ok, g) => { const c = vs.find((v) => v.de === g) || odd; done(ok, vs.map((v) => v.k), [...vs, odd].map((v) => v.de + ' = ' + v.pt).join(' · '), '',
          `<p>Você marcou ${q(c.de)}, que significa ${q(c.pt)} e faz parte do vocabulário desta lição (${esc(les.pt)}).</p><p>O intruso era <b>${esc(odd.de)}</b> (${esc(odd.pt)}), que vem de outra lição: ${q(from.pt)}.</p>`); });
    }
  },
};

/* ---------- cartas de memorização (repetição espaçada) ---------- */
function cards() {
  let queue = shuffle(dueKeys()).slice(0, 30), n = 0;
  const top = ranking()[0].k;
  const show = () => {
    if (!queue.length) {
      if (n >= 5) markActive(); checkBadges(); checkDaily(); save();
      const next = Object.values(S.cards).map((c) => c.due).sort((a, b) => a - b)[0];
      app.innerHTML = `<h1>🃏 Cartas</h1><div class="card"><h3>${n ? 'Revisão concluída: ' + n + ' cartas' : 'Nada para revisar agora'}</h3>
      <p class="mut">${nWords() ? nWords() + ' palavras no baralho. ' + (dueKeys().length ? 'Ainda há ' + dueKeys().length + ' pendentes.' : next ? 'Próxima revisão: ' + new Date(next).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'short' }) + '.' : '') : 'As palavras entram aqui um dia depois de cada lição.'}</p>
      <p class="mut">Cada carta volta num intervalo maior quando você lembra e mais cedo quando esquece. O acerto aqui, dias depois, é o que alimenta a medida de retenção do seu perfil.</p></div>
      ${dueKeys().length ? '<button class="pri big" id="more">Continuar revisando</button>' : ''}<button class="big" id="bk" style="margin-top:8px">Voltar ao início</button>`;
      if ($('#more')) $('#more').onclick = () => go('cards');
      $('#bk').onclick = () => go('home');
      return;
    }
    const k = queue[0], v = vocab(k), c = S.cards[k];
    const audioFirst = top === 'mus' && hasTTS && S.audio, rev = !audioFirst && Math.random() < 0.3;
    const front = audioFirst ? `<button class="play" data-say="${esc(v.de)}">🔊</button><p class="mut">Ouça e lembre o significado</p>`
      : rev ? `<div class="word ${gcls(v.de)}">${esc(v.de)}</div><p class="mut">O que significa?</p>`
        : `<div class="word">${v.em} ${esc(v.pt)}</div><p class="mut">Como se diz em alemão?</p>`;
    app.innerHTML = `<div class="row"><h1 class="grow">🃏 Cartas</h1><small>${queue.length} restantes</small></div>
    <div class="card" style="text-align:center;min-height:220px">${front}<div id="back"></div></div><button class="pri big" id="flip">Mostrar resposta</button>`;
    if (audioFirst) setTimeout(() => say(v.de), 300);
    $('#flip').onclick = () => {
      $('#back').innerHTML = `<hr><div class="word ${gcls(v.de)}">${esc(v.de)} ${spk(v.de)}</div><p>${v.em} ${esc(v.pt)}</p>`;
      say(v.de);
      $('#flip').outerHTML = `<div class="opts"><button data-q="0" class="no">Errei</button><button data-q="1">Difícil</button><button data-q="2" class="ok">Lembrei</button><button data-q="3">Fácil</button></div>`;
      $$('[data-q]').forEach((b) => (b.onclick = () => { rate(k, c, +b.dataset.q); queue.shift(); if (+b.dataset.q === 0) queue.push(k); else n++; save(); show(); }));
    };
  };
  show();
}
function rate(k, c, q) {
  const ok = q > 0;
  if (c.reps === 0 || c.int >= 1) { // só conta como retenção o que ficou pelo menos um dia sem ser visto
    const tot = Object.values(c.mods).reduce((a, b) => a + b, 0);
    Object.entries(c.mods).forEach(([i, m]) => { const w = m / tot; S.stats[i].rn += w; if (ok) S.stats[i].rok += w; });
  }
  if (!ok) { c.int = 0; c.ease = Math.max(1.3, c.ease - 0.2); c.lapses++; c.due = Date.now() + 10 * 60e3; }
  else {
    c.int = c.int < 1 ? (q === 3 ? 4 : q === 2 ? 2 : 1) : c.int * (q === 1 ? 1.2 : q === 2 ? c.ease : c.ease * 1.3);
    if (q === 1) c.ease = Math.max(1.3, c.ease - 0.15); if (q === 3) c.ease += 0.1;
    const t = new Date(); t.setHours(0, 0, 0, 0); c.due = t.getTime() + Math.round(c.int) * 864e5;
  }
  c.reps++; S.reviews++; daily().cards++; addXP(ok ? 5 : 2);
}

/* ---------- perfil ---------- */
function radar() {
  const C = 130, R = 92, n = IK.length, pt = (i, r) => { const a = (Math.PI * 2 * i) / n - Math.PI / 2; return [C + Math.cos(a) * r, C + Math.sin(a) * r]; };
  const ring = (f) => IK.map((_, i) => pt(i, R * f).join(',')).join(' ');
  return `<svg viewBox="0 0 260 260" style="width:100%;max-width:340px;display:block;margin:auto" role="img" aria-label="Radar do perfil de inteligências">
  ${[0.25, 0.5, 0.75, 1].map((f) => `<polygon points="${ring(f)}" fill="none" stroke="var(--line)"/>`).join('')}
  <polygon points="${IK.map((k, i) => pt(i, R * score(k)).join(',')).join(' ')}" fill="var(--gold)" fill-opacity=".35" stroke="var(--gold)" stroke-width="2"/>
  ${IK.map((k, i) => { const [x, y] = pt(i, R + 20); return `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="18">${INT[k].e}</text>`; }).join('')}</svg>`;
}
function perfil() {
  const rk = ranking(), tot = Object.values(S.time).reduce((a, b) => a + b, 0);
  const pc = (a, b) => (b >= 1 ? Math.round((a / b) * 100) + '%' : '–');
  app.innerHTML = `<h1>🧠 Seu perfil</h1>
  <div class="card">${radar()}
  ${rk.map(({ k, s }) => { const st = S.stats[k]; return `<div class="prow"><span>${INT[k].e} ${INT[k].n}</span><div class="bar"><i style="width:${Math.round(s * 100)}%"></i></div><small>${pc(st.ok, st.n)} · ${pc(st.rok, st.rn)}</small></div>`; }).join('')}
  <small>À direita: acerto nos exercícios · retenção nas cartas dias depois. A barra combina os dois (retenção pesa 60%) e define quantos exercícios de cada tipo entram nas próximas lições.</small></div>
  <div class="card"><h3>Como ler isto</h3><p class="mut">As oito inteligências de Gardner organizam aqui oito formatos de exercício. A pesquisa não confirma que ensinar só no "estilo" de alguém melhora o aprendizado, então a plataforma não confia no rótulo: ela mede o que de fato funciona com você e continua testando todos os formatos. Com poucos dados, o gráfico ainda reflete a sua autoavaliação inicial.</p></div>
  <div class="stats"><div class="stat"><b>${nDone()}/${TOTAL}</b><small>dias</small></div><div class="stat"><b>${nWords()}</b><small>palavras</small></div><div class="stat"><b>${Math.round(tot / 360) / 10} h</b><small>estudadas</small></div><div class="stat"><b>🔥 ${S.best}</b><small>recorde</small></div></div>
  <h2>Conquistas (${Object.keys(S.badges).length}/${BADGES.length})</h2>
  <div class="badges">${BADGES.map(([id, e, n, d]) => `<div class="badge ${S.badges[id] ? '' : 'off'}" title="${d}"><b>${e}</b>${n}<br><small>${d}</small></div>`).join('')}</div>
  <h2>📔 Diário</h2>
  <div class="card">${S.diary.length ? S.diary.slice(-8).reverse().map((x) => `<p>${spk(x.t)}<span class="de">${esc(x.t)}</span><br><small>${x.d} · ${esc(LESSONS[x.l].de)}</small></p>`).join('') : '<p class="mut">Suas frases dos exercícios intrapessoais aparecem aqui.</p>'}</div>
  <h2>Ajustes</h2>
  <div class="card"><label>Meta diária (min)<select id="goal">${[30, 60, 90, 120, 180].map((g) => `<option ${g === S.goal ? 'selected' : ''}>${g}</option>`).join('')}</select></label>
  <label class="row"><input type="checkbox" id="aud" ${S.audio ? 'checked' : ''}> Áudio em alemão (voz do navegador)</label>
  ${hasTTS && deVoice ? `<p class="mut">Voz em uso: ${esc(deVoice.name)} ${spk('Guten Tag! Ich bin deine deutsche Stimme.')}</p>` : ''}
  ${hasTTS && !deVoice ? '<p class="mut">⚠️ Não encontrei uma voz alemã neste navegador; a pronúncia sai errada. Abra a plataforma no Chrome ou no Edge, que trazem voz alemã própria, ou instale a voz em Configurações do Windows → Hora e idioma → Fala → Adicionar vozes → Alemão.</p>' : ''}
  <div class="row" style="margin-top:10px"><button id="exp">⬇️ Exportar backup</button><button id="imp">⬆️ Importar backup</button><input type="file" id="file" accept=".json" hidden></div>
  <p class="mut">O progresso fica só neste navegador. Use o backup para levar a outro dispositivo.</p>
  <button class="link" id="reset">Apagar todo o progresso</button></div>`;
  $('#goal').onchange = (e) => { S.goal = +e.target.value; save(); };
  $('#aud').onchange = (e) => { S.audio = e.target.checked; save(); };
  $('#exp').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(S)], { type: 'application/json' })); a.download = 'deutsch-trilha-' + today() + '.json'; a.click(); };
  $('#imp').onclick = () => $('#file').click();
  $('#file').onchange = async (e) => {
    try { const d = JSON.parse(await e.target.files[0].text()); if (!d.stats || !d.cards) throw new Error('arquivo não é um backup da Deutsch-Trilha'); S = Object.assign(fresh(), d); save(); toast('Backup importado'); go('home'); }
    catch (err) { console.error('Erro ao importar backup:', err); toast('⚠️ Não consegui importar: ' + err.message); }
  };
  $('#reset').onclick = () => { if (confirm('Apagar todo o progresso deste dispositivo? Isso não pode ser desfeito.')) { localStorage.removeItem(KEY); S = fresh(); go('onboard'); } };
}

go(S.start ? 'home' : 'onboard');
