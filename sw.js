const CACHE='bunyibaca-v2.0.0';
const CORE=['./','./index.html','./styles.css','./app.mjs','./curriculum.mjs','./reading-series.mjs','./storage.mjs','./speech.mjs','./audio-manifest.mjs','./audio-manifest.json','./manifest.webmanifest','./assets/icon.svg','./assets/icon192.png','./assets/icon512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(async c=>{try{const AUDIO_FILES=await fetch('./audio-manifest.json').then(r=>r.json());for(let i=0;i<AUDIO_FILES.length;i+=30){await c.addAll(AUDIO_FILES.slice(i,i+30).map(p=>'./assets/audio/'+p));}}catch(e){console.warn('Audio pack cache partial',e);}}).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
 e.respondWith(caches.match(e.request).then(match=>match||fetch(e.request).then(res=>{if(res.ok){const clone=res.clone();caches.open(CACHE).then(c=>c.put(e.request,clone));}return res;})));
});