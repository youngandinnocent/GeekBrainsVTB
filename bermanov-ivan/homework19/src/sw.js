const cacheName = 'messenger-v1';
const staticAssets = [
    './',
    './main.css',
    './bundle.js',
    './api/chats.json',
    './api/profile.json'
];

const cacheFirst = async (request) => {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    return cached || fetch(request);
};

const networkAndCache = async (request) => {
    const cache = await caches.open(cacheName);
    try {
        const connect = await fetch(request);
        await cache.put(request, connect.clone());
        return connect;
    } catch (error) {
        return await cache.match(request);
    }
};

self.addEventListener('install', async (event) => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    
});

self.addEventListener('fetch', async (event) => {
    const request = event.request;
    const url = new URL(request.url);

    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(request));
    } else {
        event.respondWith(networkAndCache(request));
    }
});

self.addEventListener('push', (event) => {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Message no payload';
    }

    const options = {
        body,
        icons: '',
        actions: [
            { action: 'explore', title: 'Test' },
            { action: 'close', title: 'Close' }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Title', options)
    );
});

self.addEventListener('sync', (event) => {
    if (event.tag === 'mySync1') {
        // event.waitUntil(doFunc());
        console.log('Sync ok! Tag: mySync1');
    }
});
