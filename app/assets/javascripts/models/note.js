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
    }
});

s.Collections.NoteCollection = Backbone.Collections.extend({
  model: s.Models.Note,
  url: '/notes'
});
