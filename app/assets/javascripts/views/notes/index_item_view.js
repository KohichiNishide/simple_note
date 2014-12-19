var s, _base;

if (window.SimpleNote == null) {
  window.SimpleNote = {
    Views: {}
  };
}

s = window.SimpleNote;

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
    'click .note-title' : 'navigateToNote',
    'click .delete-note' : 'deleteNote'
  },
  render: function() {
    var context = this.model.toJSON();
    _.extend(context, {
      previewText: this.model.previewText()
    });
    this.$el.html(this.template(context));
    return this;
  },
  navigateToNote: function(e) {
    e.preventDefault();
    return Backbone.history.navigate("notes/" + this.model.id, true);
  },
  deleteNote: function(e) {
    e.preventDefault();
    if (confirm('ノートを削除しますか？')) {
      return this.model.destroy().done((function(_this) {
        return function() {
          return _this.remove();
        };
      })(this));
    }
  }
});
