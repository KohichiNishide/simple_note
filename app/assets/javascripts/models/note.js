var s;

if (window.SimpleNote == null) {
  window.SimpleNote = {
    Models: {}
  };
}

s = window.SimpleNote;

s.Models.Note = Backbone.Model.extend({
    url: '/notes',
    previewText: function(length) {
      var _ref;
      if (length == null) {
        length = 140;
      }
      return (_ref = this.get("raw_body")) != null ? _ref.substring(0, length) : void 0;
    },
    renderBody: function() {
      return $.ajax("/notes/rendering", {
        type: "GET",
        dataType: 'json',
        data: {
          raw_body: this.get('raw_body')
        }
      }).done((function(_this) {
        return function(data) {
          _this.set('body', data);
          return _this.trigger('renderBody', data);
        };
      })(this));
    }
});

s.Collections.NoteCollection = Backbone.Collections.extend({
  model: s.Models.Note,
  url: '/notes'
});
