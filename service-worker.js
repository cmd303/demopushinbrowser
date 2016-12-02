
self.addEventListener('push', function (event) {
    //debugger;
    console.log('Received a push message', event);

    var title = 'Yay a message.';
    var body = 'We have received a push message.';
    var icon = 'https://raw.githubusercontent.com/deanhume/typography/gh-pages/icons/typography.png';
    var tag = 'simple-push-demo-notification-tag';

    event.waitUntil(
      self.registration.showNotification(title, {
          body: body,
          icon: icon,
          tag: tag
      })
    );
});


