define(function (require) {
  'use strict';

  var Backbone = require('backbone'),
    SlideModel = require('app/slide-model'),
    SlideView = require('app/slide-view'),

    // controller class constructor function and instance
    PresentationController,
    controller,

    // model and view instances
    slideModel = new SlideModel(),
    slideView = new SlideView({
      el: $('#root'),
      model: slideModel
    });

  // controller module
  PresentationController = Backbone.Router.extend({
    routes: {
      'presentation/:id': 'presentation'
    },

    presentation: function (id) {
      slideModel.set('id', id);
      slideModel.fetch();
    }
  });

  // controller instance
  controller = new PresentationController();

  // wire together event handling
 
  slideView.bind('navigate', function (path) {
    console.log('ctrl nav', path);
    controller.navigate(path, true);
  });

  $('body').keyup(function (e) {
    if (e.which === 37) {
      if (slideModel.hasPreviousSlide()) {
        controller.navigate('presentation/' + slideModel.previousSlide(), true);
      }
    } else if (e.which === 39) {
      if (slideModel.hasNextSlide()) {
        controller.navigate('presentation/' + slideModel.nextSlide(), true);
      }
    }
  });

  return controller;
});

