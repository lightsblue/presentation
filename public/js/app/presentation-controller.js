define(function (require) {
  'use strict';
  var Backbone = require('backbone'),
    SlideModel = require('app/slide-model'),
    SlideView = require('app/slide-view'),
    PresentationController,
    slideModel = new SlideModel(),
    slideView = new SlideView({
      model: slideModel
    });

  PresentationController = Backbone.Router.extend({
    routes: {
      'presentation/:id': 'presentation'
    },

    presentation: function (id) {
      slideModel.set('id', id);
      slideModel.fetch();
    }
  });

  return PresentationController;
});

