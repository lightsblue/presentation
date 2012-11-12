define(function (require) {
  'use strict';

  var Backbone = require('backbone'),
    PresentationController = require('app/presentation-controller'),
    router;

  router = new PresentationController();
  Backbone.history.start({pushState: true});

});
