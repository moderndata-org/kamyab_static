'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "38de3600e0bb3f78f6aa0d6966f2a357",
"assets/AssetManifest.bin.json": "08f4d2d5c462c3516d50d0cf564eb506",
"assets/AssetManifest.json": "88da10dcae6cc65176b163831ae473d9",
"assets/FontManifest.json": "1a63c76f2bb1d0b2bd195ee56a707581",
"assets/fonts/MaterialIcons-Regular.otf": "259ab0a624ce3242b1757a4a1409628b",
"assets/lib/assets/font/iransans.ttf": "550e81f9cd5c875d772e8a97e19bbef4",
"assets/lib/assets/font/roboto.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/lib/assets/image/add-image.png": "d6c5b7a00259213bdf7cec34443815db",
"assets/lib/assets/image/add.png": "bc17a70b6e35b5c53a7bd3e65ce738f1",
"assets/lib/assets/image/badge.png": "954809a17185eea1759c543eccfbd1e4",
"assets/lib/assets/image/call-center.png": "cd89a7fa08542d835cfcc25eb36f6996",
"assets/lib/assets/image/closed_envelope.jpeg": "fb88a1799c89d56b3d1735f3acd7e28a",
"assets/lib/assets/image/contact.png": "74e048b9f26f94c88aa10c0bf8e3c31a",
"assets/lib/assets/image/document.png": "2b1b5adabd011c8edfc2255ac361fd8c",
"assets/lib/assets/image/estelam.png": "71adf024fc444f830ac11fc5d9c41de7",
"assets/lib/assets/image/ic_instagram.png": "8a770507298d728a1e3e039a0507dd8e",
"assets/lib/assets/image/ic_logo.png": "3bbbc0fa826c76e5027b7ebcd3b5bad5",
"assets/lib/assets/image/ic_logo_app.png": "5947bebf045b2fd7404d4a06799ac74c",
"assets/lib/assets/image/ic_logo_whatsapp.png": "7088df834911d4cabbb0aefafbaa46ef",
"assets/lib/assets/image/ic_police.png": "9735b2e324191da740ecabfd2145e533",
"assets/lib/assets/image/image2.jpg": "46828550c679469692a8fce9f3496f2b",
"assets/lib/assets/image/internet.png": "36e70d958361f4a92227e529937dfd7b",
"assets/lib/assets/image/jarsaqil.jpg": "b7462ab8ec70e022cff1e45bed515c83",
"assets/lib/assets/image/logo-splash.png": "ff8affac32ec4db27ca33f72bef5c941",
"assets/lib/assets/image/logo.jpeg": "727f1f8051f180660ba3b0e888559eab",
"assets/lib/assets/image/Map.jpg": "30940e297fb97094fc74645e7a7f3ad1",
"assets/lib/assets/image/open_envelope.jpeg": "050c5350b178ccc9ea5eb9e7fe9029ab",
"assets/lib/assets/image/profile.jfif": "c193949cc10dd1405280c88fbb9ffd89",
"assets/lib/assets/image/truck.png": "69154c57692d499a3aff49b460786596",
"assets/NOTICES": "c57169788300cb127c313817e7ed3299",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "13610622ab576d9db04982ca51102904",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a1e05a585a5823fbd3972c5751d19da8",
"icons/Icon-192.png": "13095073c064a0181f8e92edc41e0793",
"icons/Icon-512.png": "f531fe4c0c1baa8d00856129f1a27056",
"icons/Icon-maskable-192.png": "13095073c064a0181f8e92edc41e0793",
"icons/Icon-maskable-512.png": "f531fe4c0c1baa8d00856129f1a27056",
"index.html": "7f716a123c88d85ab61c0abb84ae0d97",
"/": "7f716a123c88d85ab61c0abb84ae0d97",
"main.dart.js": "5620c6066fdcb45f1ee3f62c04b7ee33",
"manifest.json": "6e88086d01c3eaa00f7ce123b555a8b6",
"version.json": "7d9a997f3950d1c44e4bdc1efd2217c4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
