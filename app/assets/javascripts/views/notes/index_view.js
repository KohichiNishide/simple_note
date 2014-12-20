var s, _base;

s = this.SimpleNote;

if ((_base = s.Views).Notes == null) {
  _base.Notes = {};
}

s.Views.Notes.IndexView = Backbone.View.extend({
  tagName: 'ul',
  id: 'notes',
  template: JST['notes/index'],
  events: {
    'click a.new-note-btn' : 'navigateToNewNote'
  },
  initialize: function(options) {
    this.options = options;
    return this.listenTo(this.collection, "reset", (function(_this) {
      return function() {
        return _this.render();
      };
    })(this));
  },
  render: function() {
    this.collection.each(function(_this) {
      return function(note) {
        var view;
        view = new s.Views.Notes.IndexItemView({
          model: note
        });
        return _this.$(".notes").append(view.render().el);
      };
    })(this));
    this.$("#note-menu");
    return this;
  },
  navigateToNewNote: function() {
    Backbone.history.navigate('notes/new', true);
  }
});
