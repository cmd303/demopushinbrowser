//sw.js
self.addEventListener('push', function (event) {
    //debugger;
    console.log('Received a push message', event);

    var title = 'Yay a message.';
    var body = 'We have received a push message.';
    var icon = '/images/icon-192x192.png';
    var tag = 'simple-push-demo-notification-tag';

    event.waitUntil(
      self.registration.showNotification(title, {
          body: body,
          icon: icon,
          tag: tag
      })
    );
});


//self.addEventListener('push', function (event) {
//    debugger;
//    console.log('Received a push message', event);

//    var title = 'Notification';
//    var body = 'There is newly updated content available on the site. Click to see more.';
//    var icon = 'https://raw.githubusercontent.com/deanhume/typography/gh-pages/icons/typography.png';
//    var tag = 'simple-push-demo-notification-tag';

//    event.waitUntil(
//      self.registration.showNotification(title, {
//          body: body,
//          icon: icon,
//          tag: tag
//      })
//     );
//});


//self.addEventListener('push', function (event) {
//    console.log('push received');

//    //Set some no cache headers for retrieving the notification details
//    var httpHeaders = new Headers();
//    httpHeaders.append('pragma', 'no-cache');
//    httpHeaders.append('cache-control', 'no-cache');

//    var fetchInit = {
//        method: 'POST',
//        headers: httpHeaders,
//    };

//    //We wait for data fetch and notification promises
//    event.waitUntil(
//      fetch("https://local.demo.webpush.cmd/Home/AjaxGetInfo", fetchInit).then(function (res) {
//          debugger;
//          return res.json().then(function (notificationData) {
//              // Show notification
//              console.log(notificationData);
//              console.log('setting up notification');
//              self.addEventListener('notificationclick', function (e) {
//                  //Close the notificaiton
//                  e.notification.close();

//                  //Focus or open webpage
//                  e.waitUntil(
//                      clients.matchAll({
//                          type: "window"
//                      })
//                      .then(function (clientList) {
//                          for (var i = 0; i < clientList.length; i++) {
//                              var client = clientList[i];
//                              if (client.url == notificationData.data.url && 'focus' in client)
//                                  return client.focus();
//                          }
//                          if (clients.openWindow) {
//                              return clients.openWindow(notificationData.data.url);
//                          }
//                      })
//                    );
//              });

//              if (Notification.permission == 'granted') {
//                  return self.registration.showNotification(notificationData.data.title, {
//                      body: notificationData.data.body,
//                      icon: 'mf_logo.png'
//                  });

//              }
//              else {
//                  Notification.requestPermission(function (permission) {
//                      if (permission == 'granted') {
//                          return self.registration.showNotification(notificationData.data.title, {
//                              body: notificationData.data.body,
//                              icon: 'mf_logo.png'
//                          });
//                      }
//                  });
//              }

//          })
//      })

//    );
//});

