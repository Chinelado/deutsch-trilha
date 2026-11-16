#!/usr/bin/env node
/* Gerador de áudios da Deutsch-Trilha com a API da ElevenLabs.
   Lê os dados do app, lista todo o alemão que tem botão de áudio e grava um MP3 por frase em audio/xx/<hash>.mp3.
   O app toca esses arquivos quando existem e usa a voz do navegador quando não existem.

   Uso (na pasta do projeto):
     node tools/audio-elevenlabs.mjs                 simulação: quanto falta gerar e quantos créditos custa (não gasta nada)
     node tools/audio-elevenlabs.mjs vozes           lista as vozes da sua conta (com os IDs)
     node tools/audio-elevenlabs.mjs amostra         gera 12 áudios variados para você ouvir antes de gerar tudo
     node tools/audio-elevenlabs.mjs gerar --limite 20000   gera o que falta, parando em 20 mil créditos
     node tools/audio-elevenlabs.mjs gerar --limite tudo    gera tudo o que falta
     node tools/audio-elevenlabs.mjs refazer "Guten Tag!"   apaga e gera de novo um áudio específico
     node tools/audio-elevenlabs.mjs indice           só reconstrói audio/index.json

   A chave da API fica só na variável de ambiente ELEVENLABS_API_KEY (nunca no código nem no repositório).
   Vozes, modelo e velocidade ficam em tools/elevenlabs.json. Veja AUDIO-ELEVENLABS.md. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'audio');
const CFG_FILE = path.join(ROOT, 'tools', 'elevenlabs.json');
const API = 'https://api.elevenlabs.io/v1';

/* ---------- mesma chave e mesmo hash usados pelo app (audioKey e cyrb53 em app.js) ---------- */
const sayText = (t) => String(t).replace(/\*\*/g, '').replace(/\(.*?\)/g, ' ').replace(/___/g, ' ').replace(/\s+/g, ' ').trim();
function cyrb53(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}
const audioKey = (text, slot = 'a') => (slot === 'a' ? '' : slot + '|') + sayText(text);
const fileOf = (h) => path.join(OUT, h.slice(0, 2), h + '.mp3');

/* ---------- carrega os dados do app ---------- */
function loadApp() {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const files = [...html.matchAll(/src="(data\/[^"]+)"/g)].map((m) => m[1]).concat('art.js');
  const esc = (x) => String(x).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ctx = { console, esc };
  vm.createContext(ctx);
  const code = files.map((f) => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n;\n')
    + '\n;this.__app = { LESSONS, SUP, TEXTS, GUIDE, VIS: typeof VIS === "undefined" ? {} : VIS, isGerman, visHTML };';
  vm.runInContext(code, ctx, { filename: 'deutsch-trilha' });
  return ctx.__app;
}
const splitWho = (p) => { const m = /^([^:.!?]{2,32}):\s(.+)$/s.exec(p); return m ? { who: m[1], txt: m[2] } : { who: '', txt: p }; };
const decode = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');

/* Lista tudo o que o app fala. slot = voz: a (padrão), b (2ª pessoa dos diálogos), c e d (mais personagens nos textos). */
function inventory(A) {
  const items = new Map();
  const add = (text, slot = 'a', cat = '') => {
    const t = sayText(text); if (t.length < 2 || t.startsWith('-') || !/\p{L}/u.test(t)) return;
    const key = audioKey(t, slot); if (!items.has(key)) items.set(key, { key, text: t, slot, cat, hash: cyrb53(key) });
  };
  const deepLines = (md, cat) => {
    md.split('\n').map((x) => x.trim()).forEach((x) => {
      if (x.startsWith('~ ')) add(x.slice(2).split(' = ')[0], 'a', cat);
      else if (x.startsWith('|')) x.split('|').forEach((c) => { c = c.trim(); if (c && A.isGerman(c)) add(c, 'a', cat); });
      else if (x.startsWith('? ')) { const r = x.slice(2).split(' || ')[1]; if (r && A.isGerman(r)) add(r, 'a', cat); }
    });
    (md.match(/\*\*(.+?)\*\*/g) || []).forEach((b) => { if (A.isGerman(b)) add(b, 'a', cat); });
  };
  A.LESSONS.forEach((l) => {
    l.v.forEach((v) => add(v.de, 'a', 'vocabulário'));
    [...l.ge, ...l.ex].forEach((e) => add(e.de, 'a', 'exemplos'));
    l.dlg.forEach((e, i) => add(e.de, i % 2 ? 'b' : 'a', 'diálogos')); // 2ª pessoa do diálogo com outra voz; o app reaproveita o áudio nos exercícios
    l.cz.forEach((c) => add(c.q.replace('___', c.a), 'a', 'lacunas'));
    if (l.bd) { add(l.bd.t.map((x) => x.w).join(' '), 'a', 'frase desmontada'); l.bd.t.forEach((x) => { if (A.isGerman(x.w)) add(x.w, 'a', 'frase desmontada'); }); }
    if (l.deep) deepLines(l.deep, 'aulas');
  });
  Object.values(A.SUP).flat().forEach((s) => add(s.de, 'a', 'palavras de apoio'));
  A.GUIDE.forEach((g) => deepLines(g.body, 'guia'));
  A.TEXTS.forEach((t) => {
    const slots = {}, order = ['a', 'b', 'c', 'd'];
    t.paras.forEach((p) => {
      const { who, txt } = splitWho(p);
      const slot = who ? (slots[who] = slots[who] || order[Object.keys(slots).length % order.length]) : 'a';
      add(txt, slot, 'textos longos');
    });
    t.gl.split('|').forEach((g) => add(g.split('=')[0], 'a', 'textos longos'));
  });
  Object.values(A.VIS).flat().forEach((spec) => {
    let html = ''; try { html = A.visHTML(spec); } catch { return; }
    // elementos sem outros blocos dentro (célula, chip, palavra), que é onde o app põe o botão de áudio
    for (const m of html.matchAll(/<(div|span|b|td|th)\b[^>]*>((?:(?!<\/?(?:div|span|td|th)\b).)*?)<\/\1>/gs)) {
      const t = decode(m[2].replace(/<[^>]+>/g, '')).trim(); if (t && A.isGerman(t)) add(t, 'a', 'esquemas');
    }
  });
  return [...items.values()];
}

/* ---------- configuração ---------- */
const DEFAULT_CFG = {
  modelo: 'eleven_multilingual_v2',
  formato: 'mp3_44100_64',
  velocidade: 0.95,
  estabilidade: 0.5,
  similaridade: 0.75,
  paralelo: 2,
  vozes: { a: '', b: '', c: '', d: '' },
};
function loadCfg() {
  if (!fs.existsSync(CFG_FILE)) fs.writeFileSync(CFG_FILE, JSON.stringify(DEFAULT_CFG, null, 2) + '\n');
  const c = { ...DEFAULT_CFG, ...JSON.parse(fs.readFileSync(CFG_FILE, 'utf8')) };
  c.vozes = { ...DEFAULT_CFG.vozes, ...c.vozes };
  return c;
}
const creditRate = (model) => (/flash|turbo/i.test(model) ? 0.5 : 1);
const voiceFor = (cfg, slot) => cfg.vozes[slot] || (slot === 'c' ? cfg.vozes.a : slot === 'd' ? cfg.vozes.b : '') || cfg.vozes.a;
const KEY = () => {
  const k = process.env.ELEVENLABS_API_KEY;
  if (!k) { console.error('Falta a chave: defina a variável de ambiente ELEVENLABS_API_KEY (veja AUDIO-ELEVENLABS.md).'); process.exit(1); }
  return k;
};

/* ---------- API ---------- */
async function api(pathname, opts = {}) {
  const res = await fetch(API + pathname, { ...opts, headers: { 'xi-api-key': KEY(), ...(opts.headers || {}) } });
  if (!res.ok) {
    let detail = ''; try { detail = JSON.stringify((await res.json()).detail); } catch { /* sem corpo */ }
    const err = new Error(`HTTP ${res.status} ${detail}`); err.status = res.status; err.detail = detail; throw err;
  }
  return res;
}
async function credits() {
  try {
    const s = await (await api('/user/subscription')).json();
    return { used: s.character_count, limit: s.character_limit, tier: s.tier };
  } catch (e) { return null; }
}
async function tts(cfg, item) {
  const voice = voiceFor(cfg, item.slot);
  const body = {
    text: item.text, model_id: cfg.modelo,
    voice_settings: { stability: cfg.estabilidade, similarity_boost: cfg.similaridade, speed: cfg.velocidade },
  };
  if (/flash|turbo/i.test(cfg.modelo)) body.language_code = 'de';
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await api(`/text-to-speech/${voice}?output_format=${cfg.formato}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'audio/mpeg' }, body: JSON.stringify(body),
      });
      return Buffer.from(await res.arrayBuffer());
    } catch (e) {
      if (/quota_exceeded|insufficient/i.test(e.detail || '')) throw Object.assign(new Error('Créditos da ElevenLabs esgotados.'), { fatal: true });
      if (e.status === 402) throw Object.assign(new Error('Esta voz exige plano pago na ElevenLabs (o plano grátis não usa vozes da Voice Library pela API).'), { fatal: true });
      if (e.status === 401 || e.status === 403) throw Object.assign(new Error('Chave recusada pela ElevenLabs (' + e.message + ').'), { fatal: true });
      if (e.status === 422 || e.status === 400) throw e; // problema neste texto: pula
      if (attempt >= 5) throw e;
      const wait = (e.status === 429 ? 4000 : 1500) * attempt;
      await new Promise((r) => setTimeout(r, wait));
    }
  }
}

/* ---------- índice para o app ---------- */
function writeIndex() {
  const h = [];
  if (fs.existsSync(OUT)) for (const d of fs.readdirSync(OUT)) {
    const dir = path.join(OUT, d); if (!fs.statSync(dir).isDirectory()) continue;
    for (const f of fs.readdirSync(dir)) if (f.endsWith('.mp3') && fs.statSync(path.join(dir, f)).size > 0) h.push(f.slice(0, -4));
  }
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify({ v: 1, n: h.length, h: h.sort() }));
  return h.length;
}

/* ---------- comandos ---------- */
const fmt = (n) => Math.round(n).toLocaleString('pt-BR');
async function simulate(items, cfg) {
  const done = items.filter((x) => fs.existsSync(fileOf(x.hash)));
  const todo = items.filter((x) => !fs.existsSync(fileOf(x.hash)));
  const chars = (l) => l.reduce((s, x) => s + x.text.length, 0);
  const byCat = {};
  todo.forEach((x) => { const c = (byCat[x.cat] = byCat[x.cat] || { n: 0, ch: 0 }); c.n++; c.ch += x.text.length; });
  console.log(`\nÁudios no app: ${fmt(items.length)} (${fmt(chars(items))} caracteres)`);
  console.log(`Já gerados:    ${fmt(done.length)}`);
  console.log(`Faltam:        ${fmt(todo.length)} (${fmt(chars(todo))} caracteres)\n`);
  Object.entries(byCat).sort((a, b) => b[1].ch - a[1].ch).forEach(([k, v]) => console.log(`  ${k.padEnd(18)} ${fmt(v.n).padStart(6)} itens ${fmt(v.ch).padStart(8)} caracteres`));
  console.log(`\nCréditos estimados com o modelo atual (${cfg.modelo}): ${fmt(chars(todo) * creditRate(cfg.modelo))}`);
  console.log(`  Multilingual v2 / v3: ~${fmt(chars(todo))}   ·   Flash / Turbo v2.5: ~${fmt(chars(todo) / 2)}`);
  console.log('  Some uns 20% de folga para refazer áudios que saírem ruins.');
  const missing = ['a', 'b'].filter((s) => !cfg.vozes[s]);
  if (missing.length) console.log(`\n⚠️  Falta escolher as vozes ${missing.join(' e ')} em tools/elevenlabs.json (rode: node tools/audio-elevenlabs.mjs vozes).`);
  if (process.env.ELEVENLABS_API_KEY) { const c = await credits(); if (c) console.log(`\nSua conta (${c.tier}): ${fmt(c.limit - c.used)} créditos disponíveis de ${fmt(c.limit)}.`); }
  console.log('');
}

async function listVoices() {
  const { voices } = await (await api('/voices')).json();
  console.log('\nVozes da sua conta (copie o ID para tools/elevenlabs.json):\n');
  voices.forEach((v) => {
    const lb = v.labels || {};
    console.log(`${v.voice_id}  ${v.name.padEnd(28)} ${[lb.gender, lb.accent, lb.language, lb.age, lb.use_case].filter(Boolean).join(' · ')}`);
  });
  console.log('\nPara vozes nativas alemãs, procure "German" em Voices → Voice Library no site e adicione à sua conta; depois rode este comando de novo.\n');
}

async function generate(items, cfg, limitArg) {
  if (!cfg.vozes.a) { console.error('Escolha pelo menos a voz "a" em tools/elevenlabs.json (rode: node tools/audio-elevenlabs.mjs vozes).'); process.exit(1); }
  const rate = creditRate(cfg.modelo);
  const limit = limitArg === 'tudo' ? Infinity : Number(limitArg);
  if (!Number.isFinite(limit) && limitArg !== 'tudo') { console.error('Diga quantos créditos no máximo: --limite 20000 (ou --limite tudo).'); process.exit(1); }
  const todo = items.filter((x) => !fs.existsSync(fileOf(x.hash)));
  const acc = await credits();
  if (acc) console.log(`Créditos disponíveis na conta: ${fmt(acc.limit - acc.used)}`);
  let spent = 0, ok = 0, fail = 0, stop = false, idx = 0;
  const queue = [];
  for (const x of todo) { const cost = x.text.length * rate; if (spent + cost > limit) break; spent += cost; queue.push(x); }
  console.log(`Gerando ${fmt(queue.length)} de ${fmt(todo.length)} áudios pendentes (~${fmt(spent)} créditos). Ctrl+C interrompe; o que já foi gerado fica salvo.\n`);
  const t0 = Date.now();
  const worker = async () => {
    while (!stop && idx < queue.length) {
      const x = queue[idx++];
      try {
        const buf = await tts(cfg, x);
        const f = fileOf(x.hash); fs.mkdirSync(path.dirname(f), { recursive: true });
        fs.writeFileSync(f + '.tmp', buf); fs.renameSync(f + '.tmp', f);
        ok++;
        if (ok % 25 === 0) { process.stdout.write(`  ${fmt(ok)}/${fmt(queue.length)} prontos (${Math.round((Date.now() - t0) / 1000)} s)\n`); }
        if (ok % 200 === 0) writeIndex();
      } catch (e) {
        fail++; console.error(`  ✗ "${x.text.slice(0, 50)}": ${e.message}`);
        if (e.fatal) { stop = true; }
      }
    }
  };
  await Promise.all(Array.from({ length: Math.max(1, cfg.paralelo) }, worker));
  const n = writeIndex();
  console.log(`\nPronto: ${fmt(ok)} gerados, ${fmt(fail)} com erro. Índice com ${fmt(n)} áudios em audio/index.json.`);
  if (queue.length < todo.length) console.log(`Ainda faltam ${fmt(todo.length - ok)} áudios. Rode de novo com outro --limite para continuar.`);
}

async function sample(items, cfg) {
  const pick = (pred, n) => items.filter((x) => pred(x) && !fs.existsSync(fileOf(x.hash))).slice(0, n);
  const chosen = [
    ...pick((x) => x.cat === 'vocabulário' && !x.text.includes(' '), 3),
    ...pick((x) => x.cat === 'exemplos' && x.text.split(' ').length > 4, 3),
    ...pick((x) => x.cat === 'diálogos' && x.slot === 'a', 2),
    ...pick((x) => x.cat === 'diálogos' && x.slot === 'b', 2),
    ...pick((x) => x.cat === 'textos longos' && x.text.length > 120, 2),
  ];
  await generate(chosen, cfg, 'tudo');
  console.log('\nOuça no app (recarregue a página):');
  chosen.forEach((x) => console.log(`  [voz ${x.slot}] ${x.text.slice(0, 90)}`));
}

async function redo(items, cfg, text) {
  const t = sayText(text), hits = items.filter((x) => x.text === t);
  if (!hits.length) { console.error(`Não encontrei "${t}" entre os áudios do app.`); process.exit(1); }
  hits.forEach((x) => { const f = fileOf(x.hash); if (fs.existsSync(f)) fs.unlinkSync(f); });
  await generate(hits, cfg, 'tudo');
}

/* ---------- main ---------- */
const [cmd = 'simular', ...rest] = process.argv.slice(2);
const opt = (name) => { const i = rest.indexOf('--' + name); return i >= 0 ? rest[i + 1] : undefined; };
try {
  const cfg = loadCfg();
  const needItems = cmd !== 'vozes' && cmd !== 'indice';
  const items = needItems ? inventory(loadApp()) : [];
  if (cmd === 'simular') await simulate(items, cfg);
  else if (cmd === 'vozes') await listVoices();
  else if (cmd === 'amostra') await sample(items, cfg);
  else if (cmd === 'gerar') await generate(items, cfg, opt('limite'));
  else if (cmd === 'refazer') await redo(items, cfg, rest.filter((x) => !x.startsWith('--')).join(' '));
  else if (cmd === 'indice') console.log(`Índice com ${writeIndex()} áudios.`);
  else { console.error(`Comando desconhecido: ${cmd}. Use simular, vozes, amostra, gerar, refazer ou indice.`); process.exit(1); }
} catch (e) {
  console.error('Erro:', e.status === 401 && /missing_permissions/.test(e.detail || '') ? 'a chave da API não tem a permissão necessária: ' + e.message : e.message);
  process.exitCode = 1; // sem process.exit(): no Windows, sair com uma conexão aberta derruba o Node
}
