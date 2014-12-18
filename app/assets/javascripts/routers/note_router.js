var s;

if (window.SimpleNote == null){
  window.SimpleNote = {
    Routers: {}
  };
}

s = window.SimpleNote

s.Routers.NoteRouter = Backbone.Router.extend({
  routes: {
    "notes/:id": "show_note",
    "notes": "index_notes",
    "": "index_notes"
  },
  index_notes: function(){
    this.notes || (this.notes = new s.Collections.NoteCollection());
    return this.notes.fetch();
  }
});
