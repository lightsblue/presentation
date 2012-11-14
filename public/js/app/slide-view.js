define(function (require) {
  'use strict';
  var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    mustache = require('mustache'),
    html = require('text!app/slide-view.html'),
    SlideView;

  SlideView = Backbone.View.extend({

    events: {
      'click a': 'navigate',
      'click h1.title': 'titleClick',
      'click pre.content': 'contentClick'
    },

    initialize: function () {
      this.model.bind('change:title change:content', this.render, this);
    },

    navigate: function (evt) {
      this.trigger('navigate', $(evt.currentTarget).attr('href'));
      return false;
    },

    titleClick: function (evt) {
      this.trigger('titleEdit');
    },

    contentClick: function (evt) {
      this.trigger('contentEdit');
    },

    render: function () {
      var m = this.model.toJSON(),
        curSlide,
        totalSlides;

      // calculate some transient data based on api payload
      m.curSlide = _.indexOf(this.model.get('deck'), this.model.get('id')) + 1;
      m.totalSlides = this.model.get('deck').length;
      if (this.model.hasPreviousSlide()) {
        m.previousSlide = 'presentation/' + this.model.previousSlide();
      }
      if (this.model.hasNextSlide()) {
        m.nextSlide  = 'presentation/' + this.model.nextSlide();
      }

      // set this view to the output of the template
      if (m.content.match(/^\/[a-zA-Z0-9\/]*\.png$/) !== null) {
        m.contentIsImage = true;
      } else {
        m.contentIsImage = false;
      }
      this.$el.html(mustache.to_html(html, m));
    }
  });

  return SlideView;
});
