(function () { 'use strict';

  var _ = require('lodash');
  var path = require('path');

  var settings = {
    env: process.env.NODE_ENV,
    root: path.normalize(__dirname + '/../..'),

    port: process.env.PORT || 9000,
    secrets: {
      session: 'craft-secret',
    },
    userRoles: ['guest', 'user', 'admin'],

    mongo: {
      options: {
        db: {
          safe: true
        }
      }
    },
  }

  if(settings.env === 'development') {
    settings.mongo = {
        uri: 'mongodb://localhost/yosoa-dev'
    };
  }

  if(settings.env === 'production') {
    settings.mongo = {
        uri: process.env.MONGO_URI || 'mongodb://localhost/yosoa-dev'
    };
  }

  module.exports = settings;

})();