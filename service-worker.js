const CACHE_NAME = 'splitsquare-v1';
const urlsToCache = [
  './',
  './index.html',
  './css/index_styles.css',
  './js/main.js',
  './img/SplitSquareLogo.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(
        urlsToCache.map(url =>
          fetch(url).then(response => {
            if (!response.ok) throw new Error(`Request failed: ${url}`);
            return cache.put(url, response);
          })
        )
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});