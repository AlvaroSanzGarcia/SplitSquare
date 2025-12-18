const CACHE_NAME = 'splitsquare-v1';
const urlsToCache = [
  '/',
  '/SplitSquare/index.html',
  '/SplitSquare/css/index_styles.css',
  '/SplitSquare/js/main.js',
  '/SplitSquare/img/SplitSquareLogo.png',
  '/SplitSquare/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
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