'use strict';
window.SimpleNote = {
  Models: {},
  Conllections: {},
  Views: {},
  Routers: {},
  init: function(){
    this.router = new SimpleNote.Routers.NoteRouter();
    Backbone.history.start({
      pushState: true
    });
    return console.log('init SimpleNote!');
  }
};

document.addEventListener('DOMContentLoaded', function() {
  SimpleNote.init();
});
