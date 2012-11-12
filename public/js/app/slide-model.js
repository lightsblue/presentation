define(function (require) {
  'use strict';
  var _ = require('underscore'),
    Backbone = require('backbone'),
    SlideModel;

  SlideModel = Backbone.Model.extend({
    url: function () {
      return 'slides/' + this.get('id');
    },

    currentSlideIndex: function () {
      return _.indexOf(this.get('deck'), this.get('id'));
    },

    hasNextSlide: function () {
      return this.currentSlideIndex() < this.get('deck').length - 1;
    },

    hasPreviousSlide: function () {
      return this.currentSlideIndex() > 0;
    },

    nextSlide: function () {
      if (this.hasNextSlide()) {
        return this.get('deck')[this.currentSlideIndex() + 1];
      }
      return null;
    },

    previousSlide: function () {
      if (this.hasPreviousSlide()) {
        return this.get('deck')[this.currentSlideIndex() - 1];
      }
      return null;
    }

  });

  return SlideModel;
});
