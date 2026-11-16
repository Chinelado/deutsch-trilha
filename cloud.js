/* Login (e-mail e senha, ou link mágico no e-mail) e sincronização do progresso via Supabase.
   A senha funciona em qualquer aparelho, inclusive no app instalado, sem depender de modelos de e-mail. */
const cloudOn = () => !!(CLOUD.url && CLOUD.anonKey);
let sb = null, cloudUser = null, cloudTimer = 0, cloudLast = null, cloudBusy = false;
// Chegou pelo link de "esqueci a senha"? Então, depois de entrar, o Perfil pede a nova senha.
let cloudRecovery = /type=recovery/.test(location.hash);

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
  for (const k of ['badges', 'seen', 'guide', 'wq', 'reads', 'pockets']) m[k] = { ...(b[k] || {}), ...(a[k] || {}) };
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
  if (cloudRecovery) { go('perfil'); toast('🔑 Crie sua nova senha no Perfil'); return; }
  go(S.start ? (view === 'onboard' ? 'home' : view) : 'onboard');
}

async function cloudBoot() {
  if (!cloudOn()) return;
  try {
    await loadSupabase();
    sb = window.supabase.createClient(CLOUD.url, CLOUD.anonKey, { auth: { persistSession: true, detectSessionInUrl: true } });
    let booted = false;
    sb.auth.onAuthStateChange((ev, session) => {
      const was = cloudUser; cloudUser = session ? session.user : null;
      if (ev === 'PASSWORD_RECOVERY') { cloudRecovery = true; if (booted && view === 'perfil') go('perfil'); }
      if (booted && ev === 'SIGNED_IN' && !was) cloudAfterLogin(true);
      if (ev === 'SIGNED_OUT') refreshCloudUI(true);
    });
    const { data } = await sb.auth.getSession();
    booted = true;
    if (location.hash.includes('access_token')) history.replaceState(null, '', location.pathname); // limpa o token do endereço
    if (data.session) { cloudUser = data.session.user; cloudAfterLogin(!!cloudRecovery); }
  } catch (e) { console.error('Login indisponível:', e); }
}

// Traduz os erros mais comuns do Supabase para mensagens claras.
function cloudErr(e) {
  const m = String((e && e.message) || e);
  if (/invalid login credentials/i.test(m)) return 'E-mail ou senha incorretos. Se você só entrou pelo link até hoje, toque em "Esqueci a senha" para criar uma.';
  if (/email not confirmed/i.test(m)) return 'Falta confirmar o e-mail: toque no link que enviamos e depois em Entrar.';
  if (/rate limit|security purposes|too many/i.test(m)) return 'Muitas tentativas seguidas. Espere alguns minutos e tente de novo.';
  if (/should be different/i.test(m)) return 'A nova senha precisa ser diferente da atual.';
  if (/weak|at least/i.test(m)) return 'Senha fraca demais: use pelo menos 6 caracteres, misturando letras e números.';
  if (/fetch|network/i.test(m)) return 'Sem conexão com o servidor. Confira a internet e tente de novo.';
  return 'Não deu certo: ' + m;
}

/* ---------- interface ---------- */
function cloudForm() {
  return `<div class="cloudf"><input type="email" id="cEmail" placeholder="seu@email.com" autocomplete="email">
  <input type="password" id="cPass" placeholder="senha (mínimo 6 caracteres)" autocomplete="current-password" minlength="6">
  <div class="row"><button class="pri" id="cIn">Entrar</button><button id="cUp">Criar conta</button></div>
  <div class="row"><button class="ghost" id="cForgot">Esqueci a senha</button><button class="ghost" id="cLink">Entrar com link no e-mail</button></div>
  <p id="cMsg" class="mut"></p></div>`;
}
function cloudPassForm() {
  return `<div class="cloudf"><input type="password" id="cNew" placeholder="nova senha (mínimo 6 caracteres)" autocomplete="new-password" minlength="6">
  <button class="pri" id="cSetPass">Salvar senha</button><p id="cMsg" class="mut"></p></div>`;
}
function cloudCard() {
  if (!cloudOn()) return `<div class="card"><h3>☁️ Conta e sincronização</h3><p class="mut">A sincronização entre aparelhos ainda não foi ativada neste site. Enquanto isso, use Exportar e Importar backup, logo abaixo.</p></div>`;
  return `<div class="card" id="cloudCard"><h3>☁️ Conta e sincronização</h3>${cloudUser
    ? `<p>Conectada como <b>${esc(cloudUser.email)}</b>.</p><p class="mut" id="cLast">${cloudLast ? 'Última sincronização: ' + cloudLast.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : 'Sincronizando…'}</p>
      <div class="row"><button id="cNow">🔄 Sincronizar agora</button><button class="ghost" id="cOut">Sair</button></div>
      ${cloudRecovery
        ? `<h4>🔑 Crie sua nova senha</h4><p class="mut">Com ela você entra com e-mail e senha em qualquer aparelho, inclusive no app instalado.</p>${cloudPassForm()}`
        : `<details class="cpass"><summary>🔑 Definir ou trocar a senha</summary><p class="mut">Útil se você entrou pelo link do e-mail: com a senha, entra direto nos outros aparelhos.</p>${cloudPassForm()}</details>`}`
    : `<p class="mut">Entre com e-mail e senha para salvar o progresso na nuvem e continuar em qualquer aparelho. Primeira vez? Digite seu e-mail, escolha uma senha e toque em Criar conta.</p>${cloudForm()}`}</div>`;
}
function cloudOnboard() {
  if (!cloudOn()) return '';
  return `<div class="card" style="margin-top:16px"><h3>☁️ Já usa a trilha em outro aparelho?</h3><p class="mut">Entre com seu e-mail e senha para trazer o seu progresso.</p>${cloudForm()}</div>`;
}
// Atualiza só o cartão da conta, sem redesenhar a página (redesenhar o Perfil a cada sincronização jogava a página para o topo).
// full = true quando muda o estado da conta (entrou, saiu); senão, só o horário da última sincronização.
function refreshCloudUI(full) {
  const card = document.getElementById('cloudCard'); if (!card) return;
  const l = document.getElementById('cLast');
  if (!full && l) { if (cloudLast) l.textContent = 'Última sincronização: ' + cloudLast.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); return; }
  card.outerHTML = cloudCard(); wireCloud();
}
function wireCloud() {
  if (!cloudOn()) return;
  const msg = (t) => { const m = document.getElementById('cMsg'); if (m) m.textContent = t; };
  const back = location.origin + location.pathname;
  const val = (id) => (document.getElementById(id) || {}).value?.trim() || '';
  const okEmail = () => { const e = val('cEmail'); if (!/^\S+@\S+\.\S+$/.test(e)) { msg('Digite um e-mail válido.'); return null; } return e; };
  const okPass = (id) => { const p = val(id); if (p.length < 6) { msg('A senha precisa ter pelo menos 6 caracteres.'); return null; } return p; };
  // Executa uma ação do Supabase com o botão travado e mensagem de erro em português.
  const act = (id, fn) => { const b = document.getElementById(id); if (b) b.onclick = async () => {
    b.disabled = true;
    try { if (!sb) await cloudBoot(); await fn(); } catch (e) { console.error(`Erro em ${id}:`, e); msg(cloudErr(e)); } finally { b.disabled = false; }
  }; };
  act('cIn', async () => {
    const email = okEmail(), password = email && okPass('cPass'); if (!password) return;
    msg('Entrando…');
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
  });
  act('cUp', async () => {
    const email = okEmail(), password = email && okPass('cPass'); if (!password) return;
    msg('Criando a conta…');
    const { data, error } = await sb.auth.signUp({ email, password, options: { emailRedirectTo: back } });
    if (error) throw error;
    if (data.session) return; // conta criada e já conectada
    if (data.user && data.user.identities && !data.user.identities.length) return msg('Esse e-mail já tem conta. Toque em Entrar; se ainda não criou senha, use "Esqueci a senha".');
    msg('📧 Enviamos um link de confirmação. Toque nele (pode ser em qualquer aparelho) e depois volte aqui e toque em Entrar.');
  });
  act('cForgot', async () => {
    const email = okEmail(); if (!email) return;
    msg('Enviando…');
    const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: back });
    if (error) throw error;
    msg('📧 Enviamos um link. Abra-o: o site vai abrir no Perfil pedindo a nova senha.');
  });
  act('cLink', async () => {
    const email = okEmail(); if (!email) return;
    msg('Enviando…');
    const { error } = await sb.auth.signInWithOtp({ email, options: { shouldCreateUser: true, emailRedirectTo: back } });
    if (error) throw error;
    msg('📧 Enviamos um link. Abra-o neste mesmo navegador para entrar. No app instalado, prefira e-mail e senha.');
  });
  act('cSetPass', async () => {
    const password = okPass('cNew'); if (!password) return;
    msg('Salvando…');
    const { error } = await sb.auth.updateUser({ password });
    if (error) throw error;
    cloudRecovery = false; toast('🔑 Senha salva. Agora você entra com e-mail e senha em qualquer aparelho.'); go('perfil');
  });
  const now = document.getElementById('cNow'); if (now) now.onclick = () => cloudPush();
  const out = document.getElementById('cOut');
  if (out) out.onclick = async () => { await cloudPush(); await sb.auth.signOut(); cloudUser = null; toast('Você saiu. O progresso continua salvo neste aparelho.'); go('perfil'); };
}
