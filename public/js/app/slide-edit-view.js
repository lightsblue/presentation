define(function (require) {
  'use strict';
  var $ = require('jquery'),
    Backbone = require('backbone'),
    mustache = require('mustache'),
    html = require('text!app/slide-edit-view.html'),
    SlideEditView;

  SlideEditView = Backbone.View.extend({

    events: {
      'click div.close': 'close',
      'keyup input.title': 'titleChange',
      'keyup textarea.content': 'contentChange'
    },

    close: function (evt) {
      this.$el.html('');
    },

    titleChange: function (evt) {
      if (evt.which === 27) {
        this.close();
        return;
      }
      this.model.set('title', $(evt.target).val());
      this.model.save();
    },

    contentChange: function (evt) {
      if (evt.which === 27) {
        this.close();
        return;
      }
      this.model.set('content', $(evt.target).val());
      this.model.save();
    },

    editTitle: function () {
      this.render();
      this.$el.find('input.title').focus();
    },

    editContent: function () {
      this.render();
      this.$el.find('textarea.content').focus();
    },

    render: function () {
      var m = this.model.toJSON(),
        curSlide,
        totalSlides;

      // set this view to the output of the template
      this.$el.html(mustache.to_html(html, m));
    }
  });

  return SlideEditView;
});
