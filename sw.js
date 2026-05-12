// Service Worker for Central Florida Surf Report PWA
// Version — update this to force cache refresh on new deployments
const CACHE_VERSION = 'surf-report-v1.0';

// Files to cache for offline use
const CACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// INSTALL — cache core assets
self.addEventListener('install', function(event) {
  console.log('[SW] Installing service worker v' + CACHE_VERSION);
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      console.log('[SW] Caching app assets');
      return cache.addAll(CACHE_ASSETS);
    })
  );
  // Activate immediately without waiting
  self.skipWaiting();
});

// ACTIVATE — clean up old caches
self.addEventListener('activate', function(event) {
  console.log('[SW] Activating service worker');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_VERSION) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Take control of all clients immediately
  self.clients.claim();
});

// FETCH — cache-first strategy with network fallback
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(function(networkResponse) {
        // Cache new successful requests
        if (networkResponse && networkResponse.status === 200) {
          var responseClone = networkResponse.clone();
          caches.open(CACHE_VERSION).then(function(cache) {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(function() {
        // Offline fallback — return the cached index page
        return caches.match('./index.html');
      });
    })
  );
});
