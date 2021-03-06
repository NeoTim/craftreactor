(function(){ 'use strict';

  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  var express     = require('express');
  var mongoose    = require('mongoose');
  var config      = require('./config/settings.js');
  var http        = require('http');

  /*Connect to mongo */
  mongoose.connect(config.mongo.uri, config.mongo.options);

  /* Initialize Express Server */
  var app = express();
  var server = require('http').createServer(app);



  /* Set Api Routes */
  require('./config')(app);
  require('./api')(app);

  /* Start Server */
  app.listen(9000, function(){
    console.log('App Listening on localhost:9000');
  });

  /* Export Express App */
  module.exports = app;

})();