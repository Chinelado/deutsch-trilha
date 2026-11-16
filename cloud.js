/* Login por e-mail (código de 6 dígitos ou link) e sincronização do progresso via Supabase.
   Sem senha: o Supabase envia um código para o e-mail da pessoa. */
const cloudOn = () => !!(CLOUD.url && CLOUD.anonKey);
let sb = null, cloudUser = null, cloudTimer = 0, cloudLast = null, cloudBusy = false;

function loadSupabase() {
  if (window.supabase) return Promise.resolve();
  return new Promise((ok, fail) => {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js';
    s.onload = ok; s.onerror = () => fail(new Error('não consegui carregar a biblioteca de login (sem internet?)'));
    document.head.append(s);
  });
}

// Junta o progresso de dois aparelhos sem perder nada: fica sempre com o maior avanço de cada parte.
function mergeStates(a, b) {
  const m = Object.assign(fresh(), a), merge = (x = {}, y = {}, f) => { const o = { ...x }; for (const k in y) o[k] = k in o ? f(o[k], y[k]) : y[k]; return o; };
  m.xp = Math.max(a.xp || 0, b.xp || 0); m.best = Math.max(a.best || 0, b.best || 0);
  if ((b.lastDay || '') > (a.lastDay || '')) { m.streak = b.streak; m.lastDay = b.lastDay; m.freezes = b.freezes; }
  m.done = merge(a.done, b.done, (p, q) => ((q.s || 0) > (p.s || 0) ? q : p));
  m.cards = merge(a.cards, b.cards, (p, q) => ((q.reps || 0) > (p.reps || 0) ? q : p));
  m.stats = merge(a.stats, b.stats, (p, q) => (q.n + q.rn > p.n + p.rn ? q : p));
  m.time = merge(a.time, b.time, Math.max);
  m.daily = merge(a.daily, b.daily, (p, q) => ({ lesson: p.lesson || q.lesson, cards: Math.max(p.cards || 0, q.cards || 0), perfect: p.perfect || q.perfect }));
  m.hw = merge(a.hw, b.hw, (p, q) => ({ ...q, ...p }));
  for (const k of ['badges', 'seen', 'guide', 'wq', 'reads']) m[k] = { ...(b[k] || {}), ...(a[k] || {}) };
  for (const k of ['reviews', 'maxCombo', 'spoken', 'perfect']) m[k] = Math.max(a[k] || 0, b[k] || 0);
  const seen = new Set();
  m.diary = [...(a.diary || []), ...(b.diary || [])].filter((x) => { const k = x.d + '|' + x.t; if (seen.has(k)) return false; seen.add(k); return true; }).sort((x, y) => x.d.localeCompare(y.d));
  m.start = [a.start, b.start].filter(Boolean).sort()[0] || null;
  m.name = a.name || b.name; m.goal = a.goal || b.goal;
  m.prior = Object.keys(a.prior || {}).length ? a.prior : b.prior || {};
  return m;
}

async function cloudPull() {
  const { data, error } = await sb.from('progress').select('data, updated_at').eq('user_id', cloudUser.id).maybeSingle();
  if (error) throw error;
  return data;
}
async function cloudPush() {
  if (!sb || !cloudUser || cloudBusy) return;
  cloudBusy = true;
  try {
    const { error } = await sb.from('progress').upsert({ user_id: cloudUser.id, data: S, updated_at: new Date().toISOString() });
    if (error) throw error;
    cloudLast = new Date(); refreshCloudUI();
  } catch (e) { console.error('Falha ao sincronizar:', e); } finally { cloudBusy = false; }
}
// Chamada a cada save(): agrupa as mudanças e envia alguns segundos depois.
function cloudQueue() { if (!cloudUser) return; clearTimeout(cloudTimer); cloudTimer = setTimeout(cloudPush, 4000); }
addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && cloudUser) cloudPush(); });

async function cloudAfterLogin(first) {
  try {
    const remote = await cloudPull();
    if (remote && remote.data) {
      const hasLocal = !!S.start && (nDone() > 0 || S.xp > 0);
      S = hasLocal ? mergeStates(S, remote.data) : Object.assign(fresh(), remote.data);
      localStorage.setItem(KEY, JSON.stringify(S));
      if (first) toast(hasLocal ? '☁️ Progresso deste aparelho e da nuvem combinados' : '☁️ Progresso recuperado da nuvem');
    }
    await cloudPush();
  } catch (e) { console.error('Falha ao ler o progresso da nuvem:', e); toast('⚠️ Não consegui ler o progresso da nuvem: ' + e.message); }
  go(S.start ? (view === 'onboard' ? 'home' : view) : 'onboard');
}

async function cloudBoot() {
  if (!cloudOn()) return;
  try {
    await loadSupabase();
    sb = window.supabase.createClient(CLOUD.url, CLOUD.anonKey, { auth: { persistSession: true, detectSessionInUrl: true } });
    const { data } = await sb.auth.getSession();
    sb.auth.onAuthStateChange((ev, session) => {
      const was = cloudUser; cloudUser = session ? session.user : null;
      if (ev === 'SIGNED_IN' && !was) cloudAfterLogin(true);
      if (ev === 'SIGNED_OUT') refreshCloudUI();
    });
    if (data.session) { cloudUser = data.session.user; cloudAfterLogin(false); }
  } catch (e) { console.error('Login indisponível:', e); }
}

/* ---------- interface ---------- */
function cloudForm() {
  return `<div class="cloudf"><input type="email" id="cEmail" placeholder="seu@email.com" autocomplete="email">
  <button class="pri" id="cSend">Enviar código</button>
  <div id="cStep2" hidden><p class="mut">Enviamos um e-mail. Digite o código de 6 dígitos ou toque no link do e-mail.</p>
  <input id="cCode" inputmode="numeric" maxlength="6" placeholder="000000" autocomplete="one-time-code"><button class="pri" id="cVerify">Entrar</button></div><p id="cMsg" class="mut"></p></div>`;
}
function cloudCard() {
  if (!cloudOn()) return `<div class="card"><h3>☁️ Conta e sincronização</h3><p class="mut">A sincronização entre aparelhos ainda não foi ativada neste site. Enquanto isso, use Exportar e Importar backup, logo abaixo.</p></div>`;
  return `<div class="card" id="cloudCard"><h3>☁️ Conta e sincronização</h3>${cloudUser
    ? `<p>Conectada como <b>${esc(cloudUser.email)}</b>.</p><p class="mut" id="cLast">${cloudLast ? 'Última sincronização: ' + cloudLast.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : 'Sincronizando…'}</p>
      <div class="row"><button id="cNow">🔄 Sincronizar agora</button><button class="ghost" id="cOut">Sair</button></div>`
    : `<p class="mut">Entre com seu e-mail para salvar o progresso na nuvem e continuar em qualquer aparelho. Não há senha: você recebe um código por e-mail.</p>${cloudForm()}`}</div>`;
}
function cloudOnboard() {
  if (!cloudOn()) return '';
  return `<div class="card" style="margin-top:16px"><h3>☁️ Já usa a trilha em outro aparelho?</h3><p class="mut">Entre com seu e-mail para trazer o seu progresso.</p>${cloudForm()}</div>`;
}
function refreshCloudUI() { if (view === 'perfil') go('perfil'); else { const l = document.getElementById('cLast'); if (l && cloudLast) l.textContent = 'Última sincronização: ' + cloudLast.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); } }
function wireCloud() {
  if (!cloudOn()) return;
  const msg = (t) => { const m = document.getElementById('cMsg'); if (m) m.textContent = t; };
  const send = document.getElementById('cSend');
  if (send) send.onclick = async () => {
    const email = document.getElementById('cEmail').value.trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) return msg('Digite um e-mail válido.');
    send.disabled = true; msg('Enviando…');
    try {
      if (!sb) await cloudBoot();
      const { error } = await sb.auth.signInWithOtp({ email, options: { shouldCreateUser: true, emailRedirectTo: location.origin + location.pathname } });
      if (error) throw error;
      document.getElementById('cStep2').hidden = false; msg(''); document.getElementById('cCode').focus();
    } catch (e) { console.error('Erro ao enviar o código:', e); msg('Não consegui enviar: ' + e.message); send.disabled = false; }
  };
  const ver = document.getElementById('cVerify');
  if (ver) ver.onclick = async () => {
    const email = document.getElementById('cEmail').value.trim(), token = document.getElementById('cCode').value.trim();
    if (!/^\d{6}$/.test(token)) return msg('O código tem 6 dígitos.');
    ver.disabled = true; msg('Entrando…');
    try { const { error } = await sb.auth.verifyOtp({ email, token, type: 'email' }); if (error) throw error; }
    catch (e) { console.error('Erro no código:', e); msg('Código inválido ou vencido: ' + e.message); ver.disabled = false; }
  };
  const now = document.getElementById('cNow'); if (now) now.onclick = () => cloudPush();
  const out = document.getElementById('cOut');
  if (out) out.onclick = async () => { await cloudPush(); await sb.auth.signOut(); cloudUser = null; toast('Você saiu. O progresso continua salvo neste aparelho.'); go('perfil'); };
}
