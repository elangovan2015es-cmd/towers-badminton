/*
  Cauvery Pulse — Service Worker
  Version : 2.1
  Build   : 20260414-1900
  Owner   : Elango Industries Limited
*/
const CACHE_NAME = 'cauvery-pulse-v2.1-20260414';
const ASSETS = [
  './index.html',
  './m0.html',
  './manifest.webmanifest'
];

// INSTALL — cache all assets
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting(); // activate immediately
});

// ACTIVATE — delete ALL old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim(); // take control immediately
});

// FETCH — network first, cache fallback
self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request)
      .then(function(response) {
        // Update cache with fresh response
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(e.request, clone);
        });
        return response;
      })
      .catch(function() {
        // Offline fallback from cache
        return caches.match(e.request);
      })
  );
});
