var s, _base;

if (window.SimpleNote == null) {
  winsow.SimpleNote = {
    Views: {}
  };
}

s = windows.SimpleNote;

if ((_base = s.Views).Notes == null) {
  _base.Notes = {};
}

s.Views.Notes.IndexItemView = Backbone.View.extend({
  tagName: 'li',
  id: function() {
    return ("note-" + this.model.id)({
      className: 'note',
      template: JST['notes/index_item']
    });
  },
  events: {
    'click a': 'navigateToNote'
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  navigateToNote: function(e) {
    e.preventDefault();
    return Backbone.history.navigate("notes/" + this.model.id, true);
  }
});
