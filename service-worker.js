importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.routing.registerRoute(
	/\.(?:css|js|jsx|json)$/,
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'assets',
		plugins: [
			new workbox.expiration.ExpirationPlugin({
				maxEntries: 1000,
				maxAgeSeconds: 31536000
			})
		]
	})
);

workbox.routing.registerRoute(
	/\.(?:png|jpg|jpeg|gif|woff2)$/,
	new workbox.strategies.CacheFirst({
		cacheName: 'images',
		plugins: [
			new workbox.expiration.ExpirationPlugin({
				maxEntries: 1000,
				maxAgeSeconds: 31536000
			})
		]
	})
);

workbox.routing.registerRoute(
	/(\/)$/,
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'startPage',
		plugins: [
			new workbox.expiration.ExpirationPlugin({
				maxEntries: 1000,
				maxAgeSeconds: 31536000
			})
		]
	})
);