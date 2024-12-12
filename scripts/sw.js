const version = 1
const cacheName = 'starknet-'+version;

self.addEventListener('install', e => {
	console.log('installing');
	e.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				`/m8b/`,
				`/m8b/index.html`,
				`/m8b/iconified/favicon.ico`,
				`/m8b/iconified/apple-touch-icon-144x144.png`,
				`/m8b/iconified/apple-touch-icon-120x120.png`,
				`/m8b/iconified/apple-touch-icon-76x76.png`,
				`/m8b/iconified/apple-touch-icon-180x180.png`,
				`/m8b/iconified/apple-touch-icon-57x57.png`,
				`/m8b/iconified/apple-touch-icon.png`,
				`/m8b/iconified/apple-touch-icon-114x114.png`,
				`/m8b/iconified/apple-touch-icon-152x152.png`,
				`/m8b/iconified/apple-touch-icon-72x72.png`,
				`/m8b/icon/8ball.ico`,
				`/m8b/icon/8ball.png`,
				`/m8b/sw.js`,
				`/m8b/manifest.json`,
				`/m8b/stylesheet.css`,
				`/m8b/answers/15.png`,
				`/m8b/answers/10.png`,
				`/m8b/answers/9.png`,
				`/m8b/answers/11.png`,
				`/m8b/answers/13.png`,
				`/m8b/answers/16.png`,
				`/m8b/answers/12.png`,
				`/m8b/answers/1.png`,
				`/m8b/answers/0.png`,
				`/m8b/answers/6.png`,
				`/m8b/answers/3.png`,
				`/m8b/answers/17.png`,
				`/m8b/answers/19.png`,
				`/m8b/answers/14.png`,
				`/m8b/answers/mad.png`,
				`/m8b/answers/18.png`,
				`/m8b/answers/2.png`,
				`/m8b/answers/4.png`,
				`/m8b/answers/7.png`,
				`/m8b/answers/8.png`,
				`/m8b/answers/5.png`,
				`/m8b/magic.js`,
			])
			.then(() => self.skipWaiting());
		})
	);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

/*
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.open(cacheName)
		.then(cache => cache.match(event.request, {ignoreSearch: true}))
		.then(response => {
			return response || fetch(event.request);
		})
	);
});
/**/

