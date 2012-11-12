define(function (require) {
  'use strict';
  var Backbone = require('backbone'),
    PresentationController;

  PresentationController = Backbone.Router.extend({
    routes: {
      'presentation/:id': 'presentation'
    },
    
    presentation: function (id) {
      console.log('presentation', id);
    }
  });

  return PresentationController;
});

