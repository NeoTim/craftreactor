(function () {

  var express = require('express');
  var path = require('path')

  module.exports = function(app, config) {
    // app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, '/client')));
    app.set('appPath', config.root + '/client');
  };

})();