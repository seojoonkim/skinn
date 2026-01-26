// Service Worker - 폰트 및 정적 자원 캐싱
const CACHE_NAME = 'skinn-fonts-v1';
const FONT_URLS = [
    '/fonts/Pretendard-Regular.woff2',
    '/fonts/Pretendard-Medium.woff2',
    '/fonts/Pretendard-SemiBold.woff2',
    '/fonts/Pretendard-Bold.woff2',
    '/fonts/Pretendard-ExtraBold.woff2',
    '/fonts/Pretendard-Black.woff2'
];

// 설치 시 폰트 캐싱
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FONT_URLS);
        })
    );
    self.skipWaiting();
});

// 활성화 시 오래된 캐시 삭제
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name.startsWith('skinn-') && name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// 요청 가로채기 - 캐시 우선 전략 (폰트)
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // 폰트 파일은 캐시 우선
    if (url.pathname.includes('/fonts/') && url.pathname.endsWith('.woff2')) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request).then((response) => {
                    if (response.ok) {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return response;
                });
            })
        );
    }
});
