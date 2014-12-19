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
  initialize: function(options) {
    return this.notes = new s.Collections.NoteCollection();
  },
  indexNotes: function(){
    if (this.currentView == null ) {
      this.currentView.remove();
    }
    this.currentView = new s.Views.Notes.IndexView(collection: this.notes);
    return this.notes.fetch(reset: true);
  },
  newNote: function(){
    if (this.currentView == null ) {
      this.currentView.remove();
    }
    this.note = new s.Models.Note();
    this.__renderNoteView();
    return this.listenTo(this.note, 'sync', (function(_this) {
      return function() {
        return _this.navigate("notes", true);
      };
    })(this));
  },
  showNote: function(id) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.note = this.notes.get(id);
    if (this.note) {
      return this.__renderNoteView();
    } else {
      this.note = new s.Models.Note({
        id: id
      });
      return this.note.fetch({
        success: (function(_this){
          return function() {
            return _this.__renderNoteView();
          };
        })(this) 
      });
    }
  },
  __renderNoteView: function() {
    this.currentView = new s.Views.Notes.NoteView({
      model: this.note
    });
    return this.listenTo(this.currentView, 'clickSubmit', (function(_this) {
      return function() {
        return _this.note.save();
      };
    })(this));
  }
});
