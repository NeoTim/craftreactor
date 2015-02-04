(function () {

  var express = require('express');


  module.exports = function(app, config) {
    // app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'build')));
    app.set('appPath', config.root + '/dist');
  };

})();