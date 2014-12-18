var s;

if (window.SimpleNote == null) {
  window.SimpleNote = {
    Models: {}
  };
}

s = window.SimpleNote;

s.Models.Note = Backbone.Model.extend({
  s.Collections.NoteCollection = Backbone.Collection.extend({
    url: '/notes'
  });
}
