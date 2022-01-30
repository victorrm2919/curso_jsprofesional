const VERSION = 'V1';

self.addEventListener('install', event => { //self es la variable para los sw, --cuando se instala
    event.waitUntil(precache());
});

self.addEventListener('fetch', event => { ///Cuando ocurra una peticion
    const request = event.request;

    //get
    if (request.method != 'GET') {
        return;
    }

    //buscar en cache
    event.respondWith(cachedResponse(request))

    //Actualizar en cache en caso de tener actualizaciones los archivos cacheados no se queden con la version vieja
    event.waitUntil(updateCache(request))
});

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.js',
        // '/assets/index.css',
        // '/assets/BigBuckBunny_512kb.mp4',
    ]);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request); //no se tiene copia de version en caches este devuelve undefined

    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);

    return cache.put(request, response)
}