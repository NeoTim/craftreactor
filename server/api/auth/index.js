(function() { 'use strict';


  var express = require('express');
  var controller = require('./auth.controller');
  module.exports = function(app) {

    var router = express.Router();

    router.post('/login',  controller.login);
    router.post('/logout', controller.logout);

    app.use('api/auth', router);

  }

})();