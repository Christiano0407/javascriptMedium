// (3)>
const VERSION = "v1";

console.group("Service Workers");
self.addEventListener(`install`, (event) => {
  //Crear un pre-caché>
  event.waitUntil(precache());
});
// fetch>
self.addEventListener(`fetch`, (event) => {
  const request = event.request;
  //> GET
  if (request.method !== "GET") {
    return;
  }
  // Buscar en caché =>
  event.respondWith(cachedResponse(request));

  // Actualizar el caché >>
  event.waitUntil(updateCache(request));
});

// (2)
async function precache() {
  const cache = await caches.open(VERSION); //instancia del cahe>
  cache.addAll([
    `/`,
    `/proVideo.html`,
    `/styleVideo.css`,
    `/compVideo.css`,
    `/compMed.css`,
    `/compBlog`,
    `/styleFetch`,
    `/videoOne.js`,
    `/proJavascript/assets/videos/BigBuckBunny.mp4`,
    `/sw.js`,
    `/appVideoJs.js`,
  ]);
}
// Buscar y responder con caché>>
function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

function updateResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}

console.groupEnd();
