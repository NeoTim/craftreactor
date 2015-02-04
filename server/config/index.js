(function () { 'use strict';

  var express = require('express');
  var favicon = require('serve-favicon');
  var compression = require('compression');
  var bodyParser = require('body-parser');
  var methodOverride = require('method-override');
  var cookieParser = require('cookie-parser');

  var path = require('path');
  var config = require('./settings');
  var passport = require('passport');
  var session = require('express-session');
  var mongoStore = require('connect-mongo')(session);
  var mongoose = require('mongoose');
  var cors = require('cors');

  module.exports = function(app) {

    var env = app.get('env');

    // app.set('views', config.root + '/views');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(passport.initialize());

    app.use(session({
      secret: config.secrets.session,
      resave: true,
      saveUninitialized: true,
      store: new mongoStore({ mongoose_connection: mongoose.connection })
    }));

    require('./environment/' + config.env + '.js')(app, config);
  };

})()