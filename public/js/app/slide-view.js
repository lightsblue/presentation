define(function (require) {
  'use strict';
  var $ = require('jquery'),
    Backbone = require('backbone'),
    mustache = require('mustache'),
    html = require('text!app/slide-view.html'),
    SlideView;

  SlideView = Backbone.View.extend({
    initialize: function () {
      this.model.bind('change:content', this.render, this);
    },

    render: function () {
      $('#root').html(mustache.to_html(html, this.model.toJSON()));
    }
  });

  return SlideView;
});
