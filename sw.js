const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './data/restaurants.json',
  './img/1-sm.jpg',
  './img/1.jpg',
  './img/2-sm.jpg',
  './img/2.jpg',
  './img/3-sm.jpg',
  './img/3.jpg',
  './img/4-sm.jpg',
  './img/4.jpg',
  './img/5-sm.jpg',
  './img/5.jpg',
  './img/6-sm.jpg',
  './img/6.jpg',
  './img/7-sm.jpg',
  './img/7.jpg',
  './img/8-sm.jpg',
  './img/8.jpg',
  './img/9-sm.jpg',
  './img/9.jpg',
  './img/10-sm.jpg',
  './img/10.jpg',
];
  self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
    );
  });
  
  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });
