define(function (require) {
  'use strict';

  var Backbone = require('backbone'),
    SlideModel = require('app/slide-model'),
    SlideView = require('app/slide-view'),
    SlideEditView = require('app/slide-edit-view'),

    // controller class constructor function and instance
    PresentationController,
    controller,

    // model and view instances
    slideModel = new SlideModel(),
    slideView = new SlideView({
      el: $('#root'),
      model: slideModel
    }),
    slideEditView = new SlideEditView({
      el: $('#edit'),
      model: slideModel
    });

  // controller module
  PresentationController = Backbone.Router.extend({
    routes: {
      'presentation/:id': 'presentation'
    },

    presentation: function (id) {
      slideEditView.close();
      slideModel.set('id', id);
      slideModel.fetch();
    }
  });

  // controller instance
  controller = new PresentationController();

  // wire together event handling

  slideView.bind('navigate', function (path) {
    slideEditView.close();
    controller.navigate(path, true);
  });

  slideView.bind('titleEdit', function () {
    slideEditView.editTitle();
  });

  slideView.bind('contentEdit', function () {
    slideEditView.editContent();
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

