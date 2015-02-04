(function(){

  'use strict';
  var express = require('express');


  module.exports = function(app) {

    require('./user')(app)
    require('./auth')(app)

  };

})();