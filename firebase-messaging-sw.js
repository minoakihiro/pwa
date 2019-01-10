importScripts("/__/firebase/4.10.0/firebase-app.js");
importScripts("/__/firebase/4.10.0/firebase-messaging.js");
importScripts("/__/firebase/init.js");

var messaging = firebase.messaging();

importScripts("https://www.gstatic.com/firebasejs/5.7.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.7.2/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "686960544958"
});

self.addEventListener("push", function(event) {
  //送られたプッシュ通知の本文を表示
  if (Notification.permission == "granted") {
    console.log("Push Notification Recieved", event);
    event.waitUntil(
      self.registration
        .showNotification(event.data.json().notification.title, {
          body: event.data.json().notification.body
        })
        .then(
          function(showEvent) {},
          function(error) {
            console.log(error);
          }
        )
    );
  }
});

// service-worker.js
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', function(event) {});
