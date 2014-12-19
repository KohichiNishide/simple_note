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
    if (this.currentView == null ) {
      this.currentView.remove();
    }
    this.notes || (this.notes = new s.Collections.NoteCollection());
    this.currentView = new s.Views.Notes.IndexView(collection: this.notes);
    return this.notes.fetch(reset: true);
  },
  newNote: function(){
    if (this.currentView == null ) {
      this.currentView.remove();
    }
    this.note = new s.Models.Note();
    this.currentView = new s.Views.NoteView(model: this.note);
    this.listenTo(this.currentView, 'clickSubmit', (function(_this) {
      return function() {
        _this.note.save();
      };
    })(this));
    return this.currentView.render();      
  }
  showNote: function() {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.note = new s.Views.Notes.NoteView({
      model: this.note
    });
    this.listenTo(this.currentView, 'clickSubmit', (function(_this) {
      return function() {
        return _this.note.save();
      };
    })(this));
    return this.currentView.render();
  }
});
