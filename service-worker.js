importScripts("https://cdn.jsdelivr.net/npm/workbox-sw/build/workbox-sw.js", "/precache-manifest.50f946da74fbb2832e706ee3530b0a63.js");

/*
 * @Author: Jin
 * @Date: 2020-09-02 16:57:52
 * @LastEditors: Jin
 * @LastEditTime: 2021-02-05 14:04:33
 * @FilePath: /hexo-theme-stack/src/service-worker.js
 */
workbox.core.setCacheNameDetails({
    prefix: 'Stack',
    suffix: 'v1.0.0'
});

workbox.routing.registerRoute(
    /.*\.css$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'css-cache'
    })
);
workbox.routing.registerRoute(
    /.*\.js$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'js-cache'
    })
);
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'fonts-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60
            })
        ]
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.aim\.moe\//,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            })
        ]
    })
);
workbox.routing.registerRoute(
    /^https:\/\/static\.misaka\.xin\/.*/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'cdn-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60
            })
        ],
        fetchOptions: {
            credentials: 'include'
        }
    })
);
workbox.routing.registerRoute(
    /(\.(?:png|gif|jpg|jpeg|svg|webp))|(^https:\/\/gravatar\.aim\.moe\/.*)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'images-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60
            })
        ]
    })
);
workbox.routing.registerRoute(
    /\/api\/.*\.json$/,
    new workbox.strategies.NetworkFirst({
        cacheName: 'api-cache'
    })
);
// workbox.routing.registerRoute(
//    /\/.*/,
//    new workbox.strategies.StaleWhileRevalidate({
//        cacheName: 'other-cache',
//        fetchOptions: {
//            credentials: 'include'
//        }
//    })
// );

