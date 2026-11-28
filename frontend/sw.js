/**
 * CSS Prep Central & MCQs Portal — Offline-Ready Service Worker
 * Uses Stale-While-Revalidate for static HTML, CSS, JS, and map assets so
 * students can study quizzes, essays, legal explorers, maps, and games offline.
 */
const CACHE_NAME = 'cssprep-offline-v2';

const CORE_ASSETS = [
  './',
  './index.html',
  './quiz.html',
  './dashboard.html',
  './daily-challenges.html',
  './daily-fact.html',
  './scrabble.html',
  './constitution-explorer.html',
  './pakistan-map.html',
  './periodic-table.html',
  './404.html',
  './manifest.json',
  './css/style.css',
  './css/leaflet.css',
  './js/nav.js',
  './js/cookie-consent.js',
  './js/data_loader.js',
  './js/app.js',
  './js/quiz.js',
  './js/data_facts.js',
  './js/data_exam_guides.js',
  './js/data_learning_dashboard.js',
  './js/leaflet.js',
  './img/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        CORE_ASSETS.map((url) => cache.add(url).catch(() => null))
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return null;
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Bypass API calls, external domains (AdSense, CDNs), and browser extensions
  if (
    url.origin !== self.location.origin ||
    url.pathname.startsWith('/api/') ||
    url.pathname.includes('ads.txt')
  ) {
    return;
  }

  // Network-First for HTML navigation requests so live tag updates & new papers appear immediately;
  // Stale-While-Revalidate for static CSS/JS/images.
  const isHtmlNav = req.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('.html');

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(req);
      const networkFetch = fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            cache.put(req, res.clone());
          }
          return res;
        })
        .catch(() => null);

      if (isHtmlNav) {
        const freshHtml = await networkFetch;
        if (freshHtml) return freshHtml;
        if (cached) return cached;
        return (await cache.match('./index.html')) || (await cache.match('./404.html'));
      }

      if (cached) {
        return cached;
      }

      const fresh = await networkFetch;
      if (fresh) {
        return fresh;
      }

      return new Response('Offline', { status: 503, statusText: 'Offline' });
    })
  );
});
