const CACHE_NAME = "site-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/404.html", // Add paths to your CSS
    "/feed.xml",
    "/assets/service-worker.js",
    "/files/EaglercraftX_1.8_u44_Offline_Signed.html",
    "/files/flappy-bird/index.html",
    "/files/flappy-bird/update.js",
    "/files/flappy-bird/img/16.png",
    "/files/flappy-bird/img/48.png",
    "/files/flappy-bird/img/128.png",
    "/files/flappy-bird/img/256.png",
    "/files/flappy-bird/js/buzz.min.js",
    "/files/flappy-bird/js/config.js",
    "/files/flappy-bird/js/game.js",
    "/files/flappy-bird/js/jquery.min.js",
    "/files/flappy-bird/js/jquery.transit.min.js",
    "/files/flappy-bird/js/main.js",
    "/files/flappy-bird/js/update.js",
    "/files/flappy-bird/css/main.css",
    "/files/flappy-bird/css/reset.css",
    "/files/flappy-bird/assets/bird.png",
    "/files/flappy-bird/assets/ceiling",
    "/files/flappy-bird/assets/font_big_0.png",
    "/files/flappy-bird/assets/font_big_1.png",
    "/files/flappy-bird/assets/font_big_3.png",
    "/files/flappy-bird/assets/font_big_4.png",
    "/files/flappy-bird/assets/font_big_5.png",
    "/files/flappy-bird/assets/font_big_6.png",
    "/files/flappy-bird/assets/font_big_7.png",
    "/files/flappy-bird/assets/font_big_8.png",
    "/files/flappy-bird/assets/font_big_9.png",
    "/files/flappy-bird/assets/font_small_0.png",
    "/files/flappy-bird/assets/font_small_1.png",
    "/files/flappy-bird/assets/font_small_3.png",
    "/files/flappy-bird/assets/font_small_4.png",
    "/files/flappy-bird/assets/font_small_5.png",
    "/files/flappy-bird/assets/font_small_6.png",
    "/files/flappy-bird/assets/font_small_7.png",
    "/files/flappy-bird/assets/font_small_8.png",
    "/files/flappy-bird/assets/font_small_9.png",
    "/files/flappy-bird/assets/land.png",
    "/files/flappy-bird/assets/medal_bronze.png",
    "/files/flappy-bird/assets/medal_gold.png",
    "/files/flappy-bird/assets/medal_platinum.png",
    "/files/flappy-bird/assets/medal_silver.png",
    "/files/flappy-bird/assets/pipe-down.png",
    "/files/flappy-bird/assets/pipe-up.png",
    "/files/flappy-bird/assets/pipe.png",
    "/files/flappy-bird/assets/replay.png",
    "/files/flappy-bird/assets/scoreboard.png",
    "/files/flappy-bird/assets/sky.png",
    "/files/flappy-bird/assets/splash.png",
    "/files/flappy-bird/assets/thumb.png",
    "/files/flappy-bird/assets/sounds/sfx_die.ogg",
    "/files/flappy-bird/assets/sounds/sfx_hit.ogg",
    "/files/flappy-bird/assets/sounds/sfx_point.ogg",
    "/files/flappy-bird/assets/sounds/sfx_swooshing.ogg",
    "/files/flappy-bird/assets/sounds/sfx_wing.ogg",
    "/files/flappy-bird/_metadata/computed_hashes.json",
    "/files/flappy-bird/_metadata/verified_contents.json",
    "/files/flappy-bird/_locales/en/messages.json",
    "/assets/main.css",
    "/assets/main.css.map",
    "/assets/minama-social-icons.svg",
    "/about/index.html",
    "/chat/index.html",
    "/chat/script.js",
    "/chat/style.css",  // Add paths to your JS
    "/images/logo.png", // Add paths to your images
];
console.log('Service Worker installing...');
self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    // ... caching logic
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
});


// Install the service worker and cache files
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Serve cached content when offline
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Update the service worker
self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
