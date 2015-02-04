(function () {

  var morgan = require('morgan');
  var errorHandler = require('errorhandler');
  var express = require('express');
  var path = require('path');

  module.exports = function(app, config) {
      var reloader = require('connect-livereload');
      app.use(reloader());

      app.use(express.static(path.join(config.root, 'client')));
      app.set('appPath', 'client');
      app.use(morgan('dev'));
      app.use(errorHandler()); // Error handler - has to be last
      console.log('Express Server')
      console.log('DEVELOPMENT')
  };

})();