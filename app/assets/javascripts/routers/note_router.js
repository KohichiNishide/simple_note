var s;

if (window.SimpleNote == null){
  window.SimpleNote = {
    Routers: {}
  };
}

s = window.SimpleNote

s.Routers.NoteRouter = Backbone.Router.extend({
  routes: {
    "notes/:id": "showNote",
    "notes": "indexNotes",
    ".*": "indexNotes"
  },
  indexNotes: function(){
    this.notes || (this.notes = new s.Collections.NoteCollection());
    this.currentView = new s.Views.Notes.IndexView(collection: this.notes);
    return this.notes.fetch(reset: true);
  }
});
