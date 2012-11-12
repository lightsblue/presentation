define(function (require) {
  'use strict';

  var Backbone = require('backbone'),
    controller = require('app/presentation-controller');

  Backbone.history.start({pushState: true});
});
