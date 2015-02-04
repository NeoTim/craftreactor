(function () {

  var express = require('express');
  var path = require('path')

  module.exports = function(app, config) {
    // app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, '/build')));
    app.set('env', 'production');
    app.set('appPath', path.join(config.root + '/build') );
  };

})();