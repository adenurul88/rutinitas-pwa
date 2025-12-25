self.addEventListener("install", e=>{
 e.waitUntil(
  caches.open("rutinitas-cache").then(c=>{
   return c.addAll(["index.html"]);
  })
 );
});

self.addEventListener("fetch", e=>{
 e.respondWith(
  caches.match(e.request).then(r=> r || fetch(e.request))
 );
});