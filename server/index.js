(function(){ 'use strict';

  process.env.NODE_ENV = process.env.NODE_ENV || 'production';

  var express     = require('express');
  var mongoose    = require('mongoose');
  var config      = require('./config/settings.js');

  /*Connect to mongo */
  mongoose.connect(config.mongo.uri, config.mongo.options);

  /* Initialize Express Server */
  var app = express();




  /* Set Api Routes */
  require('./config')(app);
  require('./api')(app);

  var port = process.env.PORT || 9000
  /* Start Server */
  app.listen(port, function(){
    console.log('App Listening on localhost:' + port);
  });

  /* Export Express App */
  module.exports = app;

})();