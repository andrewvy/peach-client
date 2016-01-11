# peach-client

[![npm version](https://badge.fury.io/js/peach-client.svg)](https://badge.fury.io/js/peach-client)

[![NPM](https://nodei.co/npm/peach-client.png)](https://nodei.co/npm/peach-client/)

A simple, unofficial API client for [Peach](https://peach.cool).

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
	return peach.getConnections();
}).then(function(data) {
	console.log(data);
});

```

### Methods

```javascript
Peach.login();

Peach.getConnections();
// Gets statuses of friends in your circle.

```
