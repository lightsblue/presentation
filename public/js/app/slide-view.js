define(function (require) {
  'use strict';
  var $ = require('jquery'),
    Backbone = require('backbone'),
    SlideView;

  SlideView = Backbone.View.extend({
    initialize: function () {
      this.model.bind('change:content', this.render, this);
    },

    render: function () {
      $('#root').html('<h1>' + this.model.get('title') + '</h1>'
        + '<pre>' + this.model.get('content') + '</pre>');
    }
  });

  return SlideView;
});
