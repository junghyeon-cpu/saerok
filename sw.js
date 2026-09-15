/* 네트워크 우선(network-first): 온라인이면 항상 최신을 받아 보여주고, 받은 것을 캐시에
 * 갱신해 둔다. 오프라인일 때만 캐시로 대체한다. → 갱신(이름·데이터)이 바로 반영된다.
 * 위키백과·Sketchfab 등 외부 요청은 건드리지 않는다. */
const CACHE = "saerok-v12";
const SHELL = ["./", "index.html", "style.css", "app.js", "icon.svg",
               "manifest.webmanifest", "data/species.json", "data/models3d.json",
               "data/morphosource.json", "data/smithsonian.json", "data/thumbs.json",
               "data/taxa_ko.json", "data/thumbs_src.json", "data/iucn.json",
               "data/sounds.json", "data/distribution.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c =>
    Promise.all(SHELL.map(u => c.add(u).catch(()=>{})))
  ).then(()=>self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(
    ks.filter(k => k !== CACHE).map(k => caches.delete(k))
  )).then(()=>self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if(url.origin !== location.origin || e.request.method !== "GET") return;  // 외부는 그대로
  e.respondWith(
    fetch(e.request).then(res => {
      if(res.ok){
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request).then(hit => hit ||
      caches.match("index.html")))   // 오프라인: 캐시, 없으면 앱 껍데기로
  );
});
