# peach-client

[![npm version](https://badge.fury.io/js/peach-client.svg)](https://badge.fury.io/js/peach-client)

[![NPM](https://nodei.co/npm/peach-client.png)](https://nodei.co/npm/peach-client/)

A simple, unofficial API client for [Peach](https://peach.cool).

This is extremely WIP, use at your own risk.

### Installation

```
npm install peach-client
```

### Usage

```javascript
var Peach = require('peach');
var peach = new Peach({
	email: 'foobar@test.com',
	password: 'hunter2'
});

peach.login().then(function() {
	return peach.postText("Hello World!");
}).then(function(data) {
	console.log(data);
});

```

### Methods

```javascript
Peach.login();

Peach.getConnections();
// Gets statuses of friends in your circle.

Peach.getConnectionsExplore();
// Gets explore connections. (Friends of friends not in your circle).

Peach.checkForUnreadActivity();
// Checks for any unread activity.

Peach.getActivityFeed();
// Gets your activity feed.

Peach.post({});
// Undocumented, raw access to the 'post' endpoint.

Peach.postText("hello");
// Posts a simple text message.

Peach.changeDisplayName("FooBar");
// Changes your display name

Peach.changeName("foobar");
// Changes your username

Peach.resetPassword();
// Resets your password and sends you an email with the reset link.
```
