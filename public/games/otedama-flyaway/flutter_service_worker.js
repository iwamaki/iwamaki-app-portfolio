'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/audio/lose.wav": "9b45e70d5102f563afbcb513ce589fb9",
"assets/assets/audio/effect/otedama_swipe.wav": "6550660675db2980466bbaf561639fa2",
"assets/assets/audio/effect/otedama_landing.wav": "6dfb27371bb35386c541f04625c29096",
"assets/assets/audio/environmental_sounds/wind.mp3": "d7dabd1253f99035ded98cc50960d4bb",
"assets/assets/audio/environmental_sounds/giant_robot_factory.mp3": "cf63b7524300bc063f188d6fba52608b",
"assets/assets/audio/environmental_sounds/mountain_in_spring.mp3": "a55be62d4499c07a0ca7338413e6d6d2",
"assets/assets/audio/environmental_sounds/summer_mountain_cicadas.mp3": "cda4a1719c1df775a925e95a205ed39f",
"assets/assets/audio/environmental_sounds/sewer.mp3": "4615303210b184767c1708f208b6d935",
"assets/assets/audio/environmental_sounds/afterlife.mp3": "e62a51e643b6ffd8ae2c8e6c80c65ae1",
"assets/assets/audio/environmental_sounds/thunderstorm.mp3": "79a66d7d11f38de1dcab653de9333ba5",
"assets/assets/audio/environmental_sounds/blizzard.mp3": "46b02fc89bde8f5d3524ce02ffd7f3b7",
"assets/assets/audio/environmental_sounds/rain.mp3": "365adf33444ea85f6cf210796dd8d394",
"assets/assets/audio/environmental_sounds/dimensional_space.mp3": "35e02f7924e274adf36484225de8b055",
"assets/assets/audio/environmental_sounds/rustling_plants.mp3": "96f668cf8520e74cb76049a6cbe8e58d",
"assets/assets/audio/environmental_sounds/summer_countryside_night.mp3": "c8fe297a66cd6d9b4b3b9584c3ea8f6e",
"assets/assets/audio/environmental_sounds/morning_sparrows.mp3": "ff155edbc1af3db0e800813e3d8d6e90",
"assets/assets/audio/environmental_sounds/magical_room.mp3": "b97b32752298d94b492b09968571eb01",
"assets/assets/audio/environmental_sounds/mountain_pond.mp3": "ca1a5bc676de7ed91dcb253c01ba7d6f",
"assets/assets/audio/environmental_sounds/dripping_cave.mp3": "9cef87d16370402e37bef966fd751521",
"assets/assets/audio/bgm/bgm%25E8%2591%2597%25E4%25BD%259C%25E6%25A8%25A9.txt": "da8351bf141d8bc9677b5b6e0af15f12",
"assets/assets/audio/bgm/%25E5%2588%259D%25E8%258C%259C.mp3": "2ebc648b4dedf1900aaf009f2652a28c",
"assets/assets/audio/win.wav": "aca6390a7206d0805264b6548dcd0926",
"assets/assets/stages/stage1-1.json": "891ccaf91add98c12510ecdf9543bbca",
"assets/assets/stages/stage1-2.json": "96767eb0ac4160297b597ef03184dc10",
"assets/assets/stages/stage1-3.json": "5029a8d0af2cedef65e6689101972241",
"assets/assets/texture/terrain/grass-dirt_128x128.png": "7933a427fff0e4327b6db04a0f5e3ccc",
"assets/assets/texture/terrain/ice_128x128.png": "261ee3b1826af82e3f1a2d62e1618a91",
"assets/assets/texture/terrain/stone-tiles_128x128.png": "fc7c8739f18c02e4d217bae20dfa3f69",
"assets/assets/texture/terrain/snow-ice_128x128.png": "547e00fe1659a6c66d61b2dad4f9de4b",
"assets/assets/texture/terrain/wood_128x128.png": "297363a54426732cbe39558f39d704bb",
"assets/assets/texture/terrain/dirt_128x128.png": "5cc4c3a93d564335303a094606dcd0a9",
"assets/assets/texture/terrain/metal_128x128.png": "2e1c3be63379931f2f3032514d2fc7af",
"assets/assets/texture/terrain/rock_128x128.png": "c61c5014a76e0abff2df56b264c65505",
"assets/assets/texture/terrain/snow-dirt_128x128.png": "e00a77f0528d8ade2f4f16949c2292ab",
"assets/assets/texture/sakura.jpeg": "08aed50629f330896ff229d31b283faf",
"assets/assets/physics/branch.json": "919a09333877d2a64023ad78b53e2861",
"assets/assets/images/tatami.jpg": "cd83b6d77f410beaab7b1d55c739cc92",
"assets/assets/images/backgrounds/Cityline.png": "afc2123f7b81d98f5b7404a62ea2804a",
"assets/assets/images/backgrounds/Overgrown_trees.png": "13a874edeacf7f4a71a18a3a8ce9a592",
"assets/assets/images/backgrounds/Snow_mountain.png": "378c505e43ddf30de586ecd2ee12ecc4",
"assets/assets/images/Overgrown_trees.jpg": "1f2527cea8a99d329caddb0a11f4337f",
"assets/assets/images/branch.png": "c41f931e6f39b9fdd5571a563692553f",
"assets/assets/images/backgroundArt.jpeg": "68a37ff609bb332c7c0396b5cf79c9f2",
"assets/NOTICES": "0f2c8de7bcb0d92e55198040cc24a72c",
"assets/AssetManifest.bin.json": "ba5dcdb0ab4b2f48b9fffbf179f97fc7",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "bda375f15107ca3b3806abacb3c68b29",
"assets/AssetManifest.bin": "1e275b15d876f723480b09a9507e7bc7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "3b27c4d52459dc2043aeedb0e203d54b",
"version.json": "3fb9ffe33a606d2e5912cef778de4bbd",
"index.html": "99797623fb6a662c4291af89c59faee8",
"/": "99797623fb6a662c4291af89c59faee8",
"manifest.json": "46d4316eda0af3e6060d724d40b8b345",
"flutter_bootstrap.js": "c2fab0161a28fcf1284a4ebe63e2ac18",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e"};
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
