define(function (require) {
  'use strict';
  var Backbone = require('backbone'),
    SlideModel;

  SlideModel = Backbone.Model.extend({
    url: function () {
      return 'slides/' + this.get('id');
    }
  });

  return SlideModel;
});
