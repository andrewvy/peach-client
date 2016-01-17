"use strict";

var request = require('request-promise');
var Q = require('q');

/** @const */ var hostname = "https://v1.peachapi.com";
/** @const */ var user_agent = "Peach App/1.0.10 (iPhone; iOS 9.2; Scale/3.00)";

var Peach = function(settings) {
  var settings = settings || {};

  this.email = settings.email;
  this.password = settings.password;
  this._token = "";
  this._streamId = "";

  if (!this.email || !this.password) {
    console.error("peach-client needs a username and password!");
  }
};

Peach.prototype.getURI = function(path) {
  return hostname + path;
}

Peach.prototype.getOptions = function(uri, method, body) {
  var options = {
    uri: this.getURI(uri),
    method: method || 'GET',
    headers: {
      'User-Agent': user_agent
    },
    body: body,
    json: true
  };

  if (this.isLoggedIn()) {
    options.headers['Authorization'] = "Bearer " + this._token;
  }

  return options;
}

Peach.prototype.isLoggedIn = function() {
  return this._token !== "";
}

Peach.prototype.login = function() {
  var self = this;
  var deferred = Q.defer();

  if (this.isLoggedIn()) return;

  var options = this.getOptions('/login', 'POST', {
    email: this.email,
    password: this.password
  });

  request(options).then(function(resp) {
    if (resp.success) {
      self._token = resp.data.streams[0].token;
      self._streamId = resp.data.streams[0].token;

      return deferred.resolve(resp);
    } else {
      return deferred.reject(resp.error);
    }
  })
  .catch(function(err) {
    console.error("Could not login using those credentials.");
    return deferred.reject();
  });

  return deferred.promise;
}

Peach.prototype.getConnections = function() {
  var options = this.getOptions('/connections');

  return request(options).catch(function(resp) {
    console.error(resp.statusCode + " : Ran into an error while running 'getConnections'");
  });
}

Peach.prototype.getConnectionsExplore = function() {
  var options = this.getOptions('/connections/explore');

  return request(options).catch(function(resp) {
    console.error(resp.statusCode + " : Ran into an error while running 'getConnectionsExplore'");
  });
}

Peach.prototype.getActivityFeed = function() {
  var options = this.getOptions('/stream/activity');

  return request(options).catch(function(resp) {
    console.error(resp.statusCode + " : Ran into an error while running 'getActivityFeed'");
  });
}

Peach.prototype.post = function(post) {
  var options = this.getOptions('/post', 'POST', post);

  return request(options).catch(function(resp) {
    console.error(resp.statusCode + " : Ran into an error while running 'post'");
  });
}

Peach.prototype.postText = function(text) {
  return this.post({
    message: [{
      type: "text",
      text: text
    }]
  });
}

Peach.prototype.checkForUnreadActivity = function() {
  var options = this.getOptions('/activity/isUnread');

  return request(options).catch(function(resp) {
    console.error(resp.statusCode + " : Ran into an error while running 'checkForUnreadActivity'");
  });
}

Peach.prototype.changeDisplayName = function(displayName) {
  var options = this.getOptions('/stream/displayName', 'PUT', {
    displayName: displayName
  });

  return request(options).catch(function(resp) {
    console.error(resp.statusCode + " : Ran into an error while running 'changeDisplayName'");
  });
}

Peach.prototype.changeName = function(name) {
  var options = this.getOptions('/stream/name', 'PUT', {
    name: username
  });

  return request(options).catch(function(resp) {
    console.error(resp.statusCode + " : Ran into an error while running 'changeName'");
  });
}

Peach.prototype.resetPassword = function() {
  var options = this.getOptions('/recover', 'POST', {
    email: this.email,
    returnLink: "peach://recover"
  });

  return request(options).catch(function(resp) {
    console.error(resp.statusCode + " : Ran into an error while running 'resetPassword'");
  });
}

module.exports = Peach;
