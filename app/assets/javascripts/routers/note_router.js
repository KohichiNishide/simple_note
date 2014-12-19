var s;

if (window.SimpleNote == null){
  window.SimpleNote = {
    Routers: {}
  };
}

s = window.SimpleNote;

s.Routers.NoteRouter = Backbone.Router.extend({
  routes: {
    "notes/new": "newNote", 
    "notes/:id": "showNote",
    "notes": "indexNotes",
    ".*": "indexNotes"
  },
  indexNotes: function(){
    this.notes || (this.notes = new s.Collections.NoteCollection());
    if (this.currentView == null ) {
      this.currentView.remove();
    }
    this.currentView = new s.Views.Notes.IndexView(collection: this.notes);
    return this.notes.fetch(reset: true);
  },
  newNote: function(){
    this.note = new s.Models.Note();
    if (this.currentView == null ) {
      this.currentView.remove();
    }
    this.currentView = new s.Views.NewView(model: this.note);
    return this.currentView.render();      
  }
});
