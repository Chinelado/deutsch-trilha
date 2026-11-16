/* Deutsch-Trilha · service worker: guarda o app no aparelho para funcionar sem internet.
   Estratégia: responde com o que está guardado e atualiza em segundo plano (a versão nova vale na próxima abertura). */
const CACHE = 'deutsch-trilha-v1';
const BASE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // A lista de arquivos vem do próprio index.html: todo script e estilo local entra no cache.
    const html = await (await fetch('./index.html', { cache: 'no-cache' })).text();
    const local = [...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map((m) => './' + m[1].replace(/^\.\//, ''));
    await c.addAll([...new Set([...BASE, ...local])]);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const font = /^fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== self.location.origin && !font) return; // links externos (extras) seguem direto para a internet
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const hit = await c.match(req, { ignoreSearch: !font });
    const net = fetch(req).then((res) => { if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()); return res; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const res = await net;
    if (res) return res;
    if (req.mode === 'navigate') return (await c.match('./index.html')) || Response.error();
    return Response.error();
  })());
});
